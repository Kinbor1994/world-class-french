import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL || "";

if (!databaseUrl && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL is not set. Cloud synchronization will be disabled.");
}

export const sql = databaseUrl ? neon(databaseUrl) : null;

export interface LearnerProfileRecord {
  id: string;
  email: string | null;
  display_name: string;
  current_tier: number;
  xp: number;
  streak_days: number;
  hearts: number;
  last_active_at: string;
  created_at: string;
  updated_at: string;
}

export interface LessonProgressRecord {
  id: string;
  user_id: string;
  lesson_id: string;
  chapter_id: string;
  completed: boolean;
  score: number;
  completed_at: string;
}

export interface SrsCardReviewRecord {
  id: string;
  user_id: string;
  item_id: string;
  rule_id: string;
  chapter_id: string;
  stability: number;
  difficulty: number;
  reps: number;
  lapses: number;
  last_review_at: string;
  next_review_at: string;
  retention_rate: number;
}

export interface DailySprintRecord {
  id: string;
  user_id: string;
  sprint_date: string;
  score: number;
  total_questions: number;
  time_spent_seconds: number;
  emoji_grid: string;
  created_at: string;
}
