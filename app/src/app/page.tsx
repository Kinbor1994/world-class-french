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

  // Squelette initial de chargement digne d'une grande institution éditoriale
  if (!mounted) {
    return (
      <main
        suppressHydrationWarning
        className="min-h-screen flex flex-col items-center justify-center bg-academic-paper dark:bg-academic-dark-bg text-academic-ink dark:text-slate-100 p-4"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 rounded-xl bg-academic-navy dark:bg-academic-dark-card border border-amber-900/30 flex items-center justify-center font-serif font-bold text-amber-500 text-lg shadow-fine">
            W
          </div>
          <div className="space-y-0.5">
            <div className="text-xs font-bold tracking-widest uppercase font-sans text-academic-ink dark:text-slate-100">
              World-Class French
            </div>
            <div className="text-[10px] uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted font-medium">
              Institut Supérieur de Langue Française
            </div>
          </div>
          <div className="w-36 h-1 bg-academic-border-subtle dark:bg-academic-dark-border rounded-full overflow-hidden mt-2">
            <div className="h-full bg-academic-gold w-1/2 rounded-full animate-pulse" />
          </div>
          <span className="text-[11px] text-academic-muted dark:text-academic-dark-muted font-mono pt-1">
            Chargement du corpus souverain...
          </span>
        </div>
      </main>
    );
  }

  return (
    <main
      suppressHydrationWarning
      className="min-h-screen flex flex-col bg-academic-paper dark:bg-academic-dark-bg text-academic-ink dark:text-slate-100 pb-16 transition-colors"
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
