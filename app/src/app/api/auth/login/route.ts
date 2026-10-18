import { NextResponse } from "next/server";
import { sql } from "@/utils/db";
import {
  verifyPassword,
  generateSessionToken,
  isValidEmail,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/utils/auth";

interface LoginBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  if (!sql) {
    return NextResponse.json(
      { error: "Base de données non configurée." },
      { status: 503 }
    );
  }

  let body: LoginBody;
  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  const { email, password } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }

  if (!password) {
    return NextResponse.json(
      { error: "Mot de passe requis." },
      { status: 400 }
    );
  }

  try {
    const rows = await sql`
      SELECT id, email, display_name, current_tier, xp, streak_days, hearts, password_hash
      FROM learner_profiles
      WHERE email = ${email.toLowerCase()} AND password_hash IS NOT NULL
      LIMIT 1;
    `;

    if (rows.length === 0 || !rows[0]) {
      return NextResponse.json(
        { error: "Identifiants incorrects." },
        { status: 401 }
      );
    }

    const user = rows[0] as {
      id: string;
      email: string;
      display_name: string;
      current_tier: number;
      xp: number;
      streak_days: number;
      hearts: number;
      password_hash: string;
    };

    const valid = await verifyPassword(password, user.password_hash);
    if (!valid) {
      return NextResponse.json(
        { error: "Identifiants incorrects." },
        { status: 401 }
      );
    }

    // Issue new session token
    const sessionToken = generateSessionToken();
    const now = new Date().toISOString();

    await sql`
      UPDATE learner_profiles
      SET session_token = ${sessionToken}, last_active_at = ${now}, updated_at = ${now}
      WHERE id = ${user.id};
    `;

    const response = NextResponse.json({
      success: true,
      userId: user.id,
      email: user.email,
      displayName: user.display_name,
      currentTier: user.current_tier,
      xp: user.xp,
      streakDays: user.streak_days,
      hearts: user.hearts,
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
    console.error("Erreur connexion:", err);
    return NextResponse.json(
      { error: "Erreur interne lors de la connexion." },
      { status: 500 }
    );
  }
}
