import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { SRSCard, DailySprintRecord } from "@/types/curriculum";
import curriculumData from "@/data/compiled-curriculum.json";

export interface AppState {
  // Apprenant & Progression
  currentStage: number;
  xp: number;
  hearts: number;
  maxHearts: number;
  streak: number;
  lastActiveDate: string | null;
  isOnboardingCompleted: boolean;
  completedLessons: string[];

  // SRS Engine (fata.srs)
  srsCards: SRSCard[];
  retentionThreshold: number; // 75%
  simulatedHoursOffset: number; // Pour le simulateur +24h / +48h

  // Daily Sprints
  sprintRecords: DailySprintRecord[];

  // Paramètres & Audio
  speechRate: number; // 1.0 ou 0.65
  isAudioMuted: boolean;
  dailyReminderHour: number; // ex: 9 (9h00)
  notificationsEnabled: boolean;

  // Actions
  setStage: (stage: number) => void;
  decrementHeart: () => boolean; // return true if still alive
  refillHearts: () => void;
  addXp: (amount: number) => void;
  updateStreakOnActivity: () => void;
  completeOnboarding: (suggestedStage: number) => void;
  completeLesson: (lessonId: string) => void;
  
  // Actions SRS
  reviewSrsCard: (cardId: string, rating: "again" | "hard" | "good" | "easy") => void;
  simulateTimeAdvance: (hours: number) => void;
  resetSimulatedTime: () => void;
  saveSprintRecord: (record: DailySprintRecord) => void;
  
  // Actions Paramètres
  setSpeechRate: (rate: number) => void;
  toggleAudioMute: () => void;
  setDailyReminderHour: (hour: number) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
}

// Calcule la rétention selon la loi d'Ebbinghaus : R(t) = 100 * exp(-t / S)
export function computeCardRetention(card: SRSCard, hoursOffset: number = 0): number {
  if (!card.lastReviewedAt) {
    return Math.max(10, Math.min(100, card.retention));
  }
  const lastTime = new Date(card.lastReviewedAt).getTime();
  const now = Date.now() + hoursOffset * 3600 * 1000;
  const elapsedDays = Math.max(0, (now - lastTime) / (1000 * 3600 * 24));
  
  const stability = Math.max(0.5, card.stability);
  const r = 100 * Math.exp(-elapsedDays / stability);
  return Math.round(Math.max(5, Math.min(100, r)));
}

// Convertit les cartes SRS initiales du JSON
const initialCards: SRSCard[] = (curriculumData.initialSrsCards as SRSCard[]).map((c) => ({
  ...c,
  lastReviewedAt: null,
  nextReviewAt: null,
}));

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentStage: 1,
      xp: 120,
      hearts: 5,
      maxHearts: 5,
      streak: 3,
      lastActiveDate: null,
      isOnboardingCompleted: false,
      completedLessons: [],

      srsCards: initialCards,
      retentionThreshold: 75,
      simulatedHoursOffset: 0,

      sprintRecords: [],

      speechRate: 1.0,
      isAudioMuted: false,
      dailyReminderHour: 9,
      notificationsEnabled: false,

      setStage: (stage: number) => {
        const clamped = Math.max(1, Math.min(8, stage));
        set({ currentStage: clamped });
      },

      decrementHeart: () => {
        const state = get();
        // Bouclier Paliers 1 & 2 : Vies illimitées pour CI (A0) et CP-CE1 (A1)
        if (state.currentStage <= 2) {
          return true;
        }
        if (state.hearts <= 1) {
          set({ hearts: 0 });
          return false;
        }
        set({ hearts: state.hearts - 1 });
        return true;
      },

      refillHearts: () => {
        set({ hearts: 5 });
      },

      addXp: (amount: number) => {
        set((state) => ({ xp: state.xp + amount }));
      },

      updateStreakOnActivity: () => {
        const today = new Date().toISOString().split("T")[0] ?? "";
        const state = get();
        if (state.lastActiveDate === today) {
          return;
        }
        if (!state.lastActiveDate) {
          set({ streak: 1, lastActiveDate: today });
          return;
        }

        const lastDate = new Date(state.lastActiveDate);
        const currentDate = new Date(today);
        const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

        if (diffDays === 1) {
          set((s) => ({ streak: s.streak + 1, lastActiveDate: today }));
        } else if (diffDays > 1) {
          set({ streak: 1, lastActiveDate: today });
        }
      },

      completeOnboarding: (suggestedStage: number) => {
        const clamped = Math.max(1, Math.min(8, suggestedStage));
        set({
          isOnboardingCompleted: true,
          currentStage: clamped,
        });
      },

      completeLesson: (lessonId: string) => {
        set((state) => {
          if (state.completedLessons.includes(lessonId)) {
            return state;
          }
          return {
            completedLessons: [...state.completedLessons, lessonId],
            xp: state.xp + 50,
          };
        });
        get().updateStreakOnActivity();
      },

      reviewSrsCard: (cardId: string, rating: "again" | "hard" | "good" | "easy") => {
        set((state) => {
          const now = new Date(Date.now() + state.simulatedHoursOffset * 3600 * 1000);
          const updatedCards = state.srsCards.map((card) => {
            if (card.id !== cardId) return card;

            let newStability = card.stability;
            let newDifficulty = card.difficulty;
            let lapses = card.lapses;

            switch (rating) {
              case "again":
                lapses += 1;
                newStability = Math.max(0.5, card.stability * 0.4);
                newDifficulty = Math.min(10, card.difficulty + 0.6);
                break;
              case "hard":
                newStability = Math.max(1.0, card.stability * 1.15);
                newDifficulty = Math.min(10, card.difficulty + 0.2);
                break;
              case "good":
                newStability = Math.max(1.5, card.stability * 2.2);
                newDifficulty = Math.max(1, card.difficulty - 0.1);
                break;
              case "easy":
                newStability = Math.max(2.5, card.stability * 3.5);
                newDifficulty = Math.max(1, card.difficulty - 0.4);
                break;
            }

            const nextReviewDate = new Date(now.getTime() + newStability * 24 * 3600 * 1000);

            return {
              ...card,
              stability: Number(newStability.toFixed(2)),
              difficulty: Number(newDifficulty.toFixed(2)),
              retention: 100,
              lastReviewedAt: now.toISOString(),
              nextReviewAt: nextReviewDate.toISOString(),
              lapses,
            };
          });

          return {
            srsCards: updatedCards,
            xp: state.xp + (rating === "again" ? 5 : 20),
          };
        });
        get().updateStreakOnActivity();
      },

      simulateTimeAdvance: (hours: number) => {
        set((state) => {
          const newOffset = state.simulatedHoursOffset + hours;
          // Met à jour la rétention de toutes les cartes avec le nouvel offset
          const updatedCards = state.srsCards.map((card) => ({
            ...card,
            retention: computeCardRetention(card, newOffset),
          }));
          return {
            simulatedHoursOffset: newOffset,
            srsCards: updatedCards,
          };
        });
      },

      resetSimulatedTime: () => {
        set((state) => {
          const updatedCards = state.srsCards.map((card) => ({
            ...card,
            retention: computeCardRetention(card, 0),
          }));
          return {
            simulatedHoursOffset: 0,
            srsCards: updatedCards,
          };
        });
      },

      saveSprintRecord: (record: DailySprintRecord) => {
        set((state) => ({
          sprintRecords: [record, ...state.sprintRecords.slice(0, 29)], // garde les 30 derniers
          xp: state.xp + record.score * 15,
        }));
        get().updateStreakOnActivity();
      },

      setSpeechRate: (rate: number) => {
        set({ speechRate: rate });
      },

      toggleAudioMute: () => {
        set((state) => ({ isAudioMuted: !state.isAudioMuted }));
      },

      setDailyReminderHour: (hour: number) => {
        set({ dailyReminderHour: Math.max(0, Math.min(23, hour)) });
      },

      setNotificationsEnabled: (enabled: boolean) => {
        set({ notificationsEnabled: enabled });
      },
    }),
    {
      name: "world-class-french-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentStage: state.currentStage,
        xp: state.xp,
        hearts: state.hearts,
        streak: state.streak,
        lastActiveDate: state.lastActiveDate,
        isOnboardingCompleted: state.isOnboardingCompleted,
        completedLessons: state.completedLessons,
        srsCards: state.srsCards,
        sprintRecords: state.sprintRecords,
        dailyReminderHour: state.dailyReminderHour,
        notificationsEnabled: state.notificationsEnabled,
      }),
    }
  )
);
