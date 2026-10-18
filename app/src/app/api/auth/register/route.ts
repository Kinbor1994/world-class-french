import { NextResponse } from "next/server";
import { sql } from "@/utils/db";
import {
  hashPassword,
  generateSessionToken,
  isValidEmail,
  isValidPassword,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/utils/auth";

interface RegisterBody {
  email: string;
  password: string;
  displayName: string;
  guestUserId?: string;
}

export async function POST(request: Request) {
  if (!sql) {
    return NextResponse.json(
      { error: "Base de données non configurée." },
      { status: 503 }
    );
  }

  let body: RegisterBody;
  try {
    body = (await request.json()) as RegisterBody;
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  const { email, password, displayName, guestUserId } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }

  if (!password || !isValidPassword(password)) {
    return NextResponse.json(
      { error: "Le mot de passe doit contenir au moins 8 caractères." },
      { status: 400 }
    );
  }

  const trimmedName = (displayName || "").trim();
  if (!trimmedName || trimmedName.length < 2) {
    return NextResponse.json(
      { error: "Le nom d'affichage doit contenir au moins 2 caractères." },
      { status: 400 }
    );
  }

  try {
    // Check if email already exists
    const existing = await sql`
      SELECT id FROM learner_profiles WHERE email = ${email.toLowerCase()} LIMIT 1;
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Un compte avec cet e-mail existe déjà." },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    const sessionToken = generateSessionToken();
    const now = new Date().toISOString();

    // If guest had accumulated progress, migrate their row
    if (guestUserId) {
      const guestRows = await sql`
        SELECT id FROM learner_profiles WHERE id = ${guestUserId} LIMIT 1;
      `;

      if (guestRows.length > 0) {
        // Upgrade existing guest row to a real account
        await sql`
          UPDATE learner_profiles
          SET email = ${email.toLowerCase()},
              display_name = ${trimmedName},
              password_hash = ${passwordHash},
              session_token = ${sessionToken},
              updated_at = ${now}
          WHERE id = ${guestUserId};
        `;

        const response = NextResponse.json({
          success: true,
          userId: guestUserId,
          email: email.toLowerCase(),
          displayName: trimmedName,
          migrated: true,
        });

        response.cookies.set(SESSION_COOKIE_NAME, sessionToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: SESSION_MAX_AGE,
          path: "/",
        });

        return response;
      }
    }

    // Create fresh account
    const newUserId = `wcf_${crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`;

    await sql`
      INSERT INTO learner_profiles (id, email, display_name, current_tier, xp, streak_days, hearts, last_active_at, created_at, updated_at, password_hash, session_token)
      VALUES (${newUserId}, ${email.toLowerCase()}, ${trimmedName}, 1, 0, 0, 5, ${now}, ${now}, ${now}, ${passwordHash}, ${sessionToken});
    `;

    const response = NextResponse.json({
      success: true,
      userId: newUserId,
      email: email.toLowerCase(),
      displayName: trimmedName,
      migrated: false,
    });

    response.cookies.set(SESSION_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Erreur inscription:", err);
    return NextResponse.json(
      { error: "Erreur interne lors de l'inscription." },
      { status: 500 }
    );
  }
}
