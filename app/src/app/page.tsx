"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { LearningPath } from "@/components/curriculum/LearningPath";
import { DiagnosticModal } from "@/components/onboarding/DiagnosticModal";
import { DailySprintModal } from "@/components/srs/DailySprintModal";
import { RemindersConfigModal } from "@/components/srs/RemindersConfigModal";
import { SrsReviewView } from "@/components/srs/SrsReviewView";
import { UniversalExerciseRunner } from "@/components/exercises/UniversalExerciseRunner";
import { useAppStore } from "@/store/useAppStore";
import type { MicroLesson } from "@/types/curriculum";

export default function HomePage() {
  const { isOnboardingCompleted, currentStage } = useAppStore();

  const [mounted, setMounted] = useState<boolean>(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [isSprintOpen, setIsSprintOpen] = useState<boolean>(false);
  const [isRemindersOpen, setIsRemindersOpen] = useState<boolean>(false);
  const [isSrsViewActive, setIsSrsViewActive] = useState<boolean>(false);
  const [activeLesson, setActiveLesson] = useState<MicroLesson | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ouvre le diagnostic automatiquement si c'est la toute première visite
  useEffect(() => {
    if (mounted && !isOnboardingCompleted) {
      setIsDiagnosticOpen(true);
    }
  }, [mounted, isOnboardingCompleted]);

  // Détection des raccourcis PWA via les query params (?mode=sprint, ?mode=srs)
  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get("mode");
      if (mode === "sprint") {
        setIsSprintOpen(true);
      } else if (mode === "srs") {
        setIsSrsViewActive(true);
      }
    }
  }, [mounted]);

  // Squelette initial de chargement propre pour éliminer toute désynchronisation SSR / localStorage
  if (!mounted) {
    return (
      <main
        suppressHydrationWarning
        className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-4"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-3xl animate-pulse">
            🇫🇷
          </div>
          <div className="text-xl font-black tracking-wide text-slate-800 dark:text-slate-100">
            World-Class French
          </div>
          <div className="w-48 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-duo-green w-2/3 rounded-full animate-pulse" />
          </div>
          <span className="text-xs text-slate-400 font-semibold">
            Initialisation du parcours adaptatif...
          </span>
        </div>
      </main>
    );
  }

  return (
    <main
      suppressHydrationWarning
      className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16"
    >
      {/* Barre supérieure de navigation */}
      <Navbar
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onOpenSprint={() => setIsSprintOpen(true)}
        onOpenSrs={() => setIsSrsViewActive(true)}
        onOpenReminders={() => setIsRemindersOpen(true)}
      />

      {/* Contenu Principal : Arbre d'apprentissage ou Vue SRS */}
      <div className="flex-1 w-full" suppressHydrationWarning>
        {isSrsViewActive ? (
          <SrsReviewView onBack={() => setIsSrsViewActive(false)} />
        ) : (
          <LearningPath onSelectLesson={(lesson) => setActiveLesson(lesson)} />
        )}
      </div>

      {/* Lecteur d'exercices universel plein écran */}
      {activeLesson && (
        <UniversalExerciseRunner
          lesson={activeLesson}
          stageNumber={currentStage}
          onClose={() => setActiveLesson(null)}
          onLessonComplete={() => setActiveLesson(null)}
        />
      )}

      {/* Modaux contextuels */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />

      <DailySprintModal
        isOpen={isSprintOpen}
        onClose={() => setIsSprintOpen(false)}
      />

      <RemindersConfigModal
        isOpen={isRemindersOpen}
        onClose={() => setIsRemindersOpen(false)}
      />
    </main>
  );
}
