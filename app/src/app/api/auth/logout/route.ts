import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/utils/db";
import { SESSION_COOKIE_NAME } from "@/utils/auth";

export async function POST(request: NextRequest) {
  if (!sql) {
    return NextResponse.json({ success: true });
  }

  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (sessionToken) {
    try {
      await sql`
        UPDATE learner_profiles
        SET session_token = NULL, updated_at = ${new Date().toISOString()}
        WHERE session_token = ${sessionToken};
      `;
    } catch (err) {
      console.error("Erreur déconnexion:", err);
    }
  }

  const response = NextResponse.json({ success: true });
  response.cookies.delete(SESSION_COOKIE_NAME);
  return response;
}
