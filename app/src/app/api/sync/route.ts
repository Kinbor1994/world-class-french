import { NextResponse } from "next/server";
import { sql } from "@/utils/db";
import type { SRSCard, DailySprintRecord } from "@/types/curriculum";

interface SyncPayload {
  userId: string;
  email?: string | null;
  displayName?: string;
  currentTier: number;
  xp: number;
  streakDays: number;
  hearts: number;
  completedLessons: string[];
  srsCards: SRSCard[];
  sprintRecord?: DailySprintRecord | null;
}

export async function GET(request: Request) {
  if (!sql) {
    return NextResponse.json(
      { error: "Neon Database is not configured (DATABASE_URL missing)." },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "Paramètre 'userId' obligatoire." },
      { status: 400 }
    );
  }

  try {
    // 1. Profil apprenant
    const profiles = await sql`
      SELECT id, email, display_name, current_tier, xp, streak_days, hearts, last_active_at, created_at, updated_at
      FROM learner_profiles
      WHERE id = ${userId}
      LIMIT 1;
    `;

    if (profiles.length === 0 || !profiles[0]) {
      return NextResponse.json({
        exists: false,
        message: "Profil non trouvé. Synchronisation initiale requise.",
      });
    }

    const profile = profiles[0];

    // 2. Leçons complétées
    const lessons = await sql`
      SELECT lesson_id, chapter_id, completed, score, completed_at
      FROM lesson_progress
      WHERE user_id = ${userId} AND completed = true;
    `;

    // 3. Cartes SRS révisées
    const srsReviews = await sql`
      SELECT item_id, rule_id, chapter_id, stability, difficulty, reps, lapses, last_review_at, next_review_at, retention_rate
      FROM srs_card_reviews
      WHERE user_id = ${userId};
    `;

    // 4. Derniers sprints quotidiens
    const sprints = await sql`
      SELECT sprint_date, score, total_questions, time_spent_seconds, emoji_grid, created_at
      FROM daily_sprint_results
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT 10;
    `;

    return NextResponse.json({
      exists: true,
      profile: {
        id: String(profile.id),
        email: profile.email ? String(profile.email) : null,
        displayName: String(profile.display_name),
        currentTier: Number(profile.current_tier),
        xp: Number(profile.xp),
        streakDays: Number(profile.streak_days),
        hearts: Number(profile.hearts),
        lastActiveAt: String(profile.last_active_at),
      },
      completedLessons: lessons.map((l) => String(l.lesson_id)),
      srsReviews: srsReviews.map((r) => ({
        itemId: String(r.item_id),
        stability: Number(r.stability),
        difficulty: Number(r.difficulty),
        lapses: Number(r.lapses),
        lastReviewedAt: String(r.last_review_at),
        nextReviewAt: String(r.next_review_at),
        retention: Number(r.retention_rate),
      })),
      recentSprints: sprints,
    });
  } catch (error) {
    console.error("Erreur GET /api/sync Neon:", error);
    return NextResponse.json(
      { error: "Échec de récupération depuis Neon Database.", details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!sql) {
    return NextResponse.json(
      { error: "Neon Database is not configured (DATABASE_URL missing)." },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as SyncPayload;
    const {
      userId,
      email = null,
      displayName = "Apprenant de l'Institut",
      currentTier,
      xp,
      streakDays,
      hearts,
      completedLessons = [],
      srsCards = [],
      sprintRecord = null,
    } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "Le champ 'userId' est requis." },
        { status: 400 }
      );
    }

    // 1. Upsert du profil apprenant
    await sql`
      INSERT INTO learner_profiles (id, email, display_name, current_tier, xp, streak_days, hearts, last_active_at, updated_at)
      VALUES (${userId}, ${email}, ${displayName}, ${currentTier}, ${xp}, ${streakDays}, ${hearts}, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        display_name = EXCLUDED.display_name,
        current_tier = EXCLUDED.current_tier,
        xp = GREATEST(learner_profiles.xp, EXCLUDED.xp),
        streak_days = GREATEST(learner_profiles.streak_days, EXCLUDED.streak_days),
        hearts = EXCLUDED.hearts,
        last_active_at = NOW(),
        updated_at = NOW();
    `;

    // 2. Batch upsert des leçons complétées (seulement celles qui n'existent pas encore)
    for (const lessonId of completedLessons) {
      const chapterId = lessonId.split("-les-")[0]?.toUpperCase() || "UNKNOWN";
      await sql`
        INSERT INTO lesson_progress (user_id, lesson_id, chapter_id, completed, score, completed_at)
        VALUES (${userId}, ${lessonId}, ${chapterId}, true, 100, NOW())
        ON CONFLICT (user_id, lesson_id) DO NOTHING;
      `;
    }

    // 3. Upsert des cartes SRS modifiées
    for (const card of srsCards) {
      if (card.lastReviewedAt) {
        await sql`
          INSERT INTO srs_card_reviews (
            user_id, item_id, rule_id, chapter_id, stability, difficulty, reps, lapses, last_review_at, next_review_at, retention_rate
          )
          VALUES (
            ${userId},
            ${card.id},
            ${card.ruleId},
            ${card.chapterId},
            ${card.stability},
            ${card.difficulty},
            1,
            ${card.lapses},
            ${card.lastReviewedAt}::timestamptz,
            ${card.nextReviewAt ? card.nextReviewAt : card.lastReviewedAt}::timestamptz,
            ${card.retention}
          )
          ON CONFLICT (user_id, item_id) DO UPDATE SET
            stability = EXCLUDED.stability,
            difficulty = EXCLUDED.difficulty,
            reps = srs_card_reviews.reps + 1,
            lapses = EXCLUDED.lapses,
            last_review_at = EXCLUDED.last_review_at,
            next_review_at = EXCLUDED.next_review_at,
            retention_rate = EXCLUDED.retention_rate;
        `;
      }
    }

    // 4. Insertion du sprint quotidien (si fourni)
    if (sprintRecord) {
      await sql`
        INSERT INTO daily_sprint_results (
          user_id, sprint_date, score, total_questions, time_spent_seconds, emoji_grid
        )
        VALUES (
          ${userId},
          ${sprintRecord.date}::date,
          ${sprintRecord.score},
          ${sprintRecord.totalQuestions},
          ${sprintRecord.durationSeconds},
          ${sprintRecord.resultsPattern}
        );
      `;
    }

    return NextResponse.json({
      success: true,
      syncedAt: new Date().toISOString(),
      completedLessonsCount: completedLessons.length,
      srsCardsCount: srsCards.filter((c) => c.lastReviewedAt !== null).length,
    });
  } catch (error) {
    console.error("Erreur POST /api/sync Neon:", error);
    return NextResponse.json(
      { error: "Échec de synchronisation vers Neon Database.", details: String(error) },
      { status: 500 }
    );
  }
}
