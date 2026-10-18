import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/utils/db";
import { SESSION_COOKIE_NAME } from "@/utils/auth";

export async function GET(request: NextRequest) {
  if (!sql) {
    return NextResponse.json(
      { authenticated: false, error: "Base de données non configurée." },
      { status: 503 }
    );
  }

  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken) {
    return NextResponse.json({ authenticated: false });
  }

  try {
    const rows = await sql`
      SELECT id, email, display_name, current_tier, xp, streak_days, hearts
      FROM learner_profiles
      WHERE session_token = ${sessionToken} AND password_hash IS NOT NULL
      LIMIT 1;
    `;

    if (rows.length === 0 || !rows[0]) {
      // Invalid or expired session — clear cookie
      const response = NextResponse.json({ authenticated: false });
      response.cookies.delete(SESSION_COOKIE_NAME);
      return response;
    }

    const user = rows[0] as {
      id: string;
      email: string;
      display_name: string;
      current_tier: number;
      xp: number;
      streak_days: number;
      hearts: number;
    };

    return NextResponse.json({
      authenticated: true,
      userId: user.id,
      email: user.email,
      displayName: user.display_name,
      currentTier: user.current_tier,
      xp: user.xp,
      streakDays: user.streak_days,
      hearts: user.hearts,
    });
  } catch (err) {
    console.error("Erreur vérification session:", err);
    return NextResponse.json(
      { authenticated: false, error: "Erreur interne." },
      { status: 500 }
    );
  }
}
