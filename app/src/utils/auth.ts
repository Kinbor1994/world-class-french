import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";

/** Cookie name for session token */
export const SESSION_COOKIE_NAME = "wcf_session" as const;

/** Session cookie max-age: 30 days in seconds */
export const SESSION_MAX_AGE = 30 * 24 * 60 * 60;

/**
 * Hash a plaintext password using scrypt with a random 16-byte salt.
 * Output format: `<hex-salt>:<hex-derived-key>` (64-byte key length).
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const derived = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 64, (err, key) => {
      if (err) reject(err);
      else resolve(key);
    });
  });
  return `${salt.toString("hex")}:${derived.toString("hex")}`;
}

/**
 * Verify a plaintext password against a stored hash.
 * Uses timingSafeEqual to prevent timing attacks.
 */
export async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  const parts = storedHash.split(":");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return false;

  const salt = Buffer.from(parts[0], "hex");
  const storedKey = Buffer.from(parts[1], "hex");

  const derived = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 64, (err, key) => {
      if (err) reject(err);
      else resolve(key);
    });
  });

  if (derived.length !== storedKey.length) return false;
  return timingSafeEqual(derived, storedKey);
}

/**
 * Generate a cryptographically secure session token (48 bytes, hex-encoded).
 */
export function generateSessionToken(): string {
  return randomBytes(48).toString("hex");
}

/** Minimal email format validation */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Password strength: at least 8 chars */
export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}
