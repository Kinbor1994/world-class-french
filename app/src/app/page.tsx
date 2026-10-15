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

  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [isSprintOpen, setIsSprintOpen] = useState<boolean>(false);
  const [isRemindersOpen, setIsRemindersOpen] = useState<boolean>(false);
  const [isSrsViewActive, setIsSrsViewActive] = useState<boolean>(false);
  const [activeLesson, setActiveLesson] = useState<MicroLesson | null>(null);

  // Ouvre le diagnostic automatiquement si c'est la toute première visite
  useEffect(() => {
    if (!isOnboardingCompleted) {
      setIsDiagnosticOpen(true);
    }
  }, [isOnboardingCompleted]);

  // Détection des raccourcis PWA via les query params (?mode=sprint, ?mode=srs)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get("mode");
      if (mode === "sprint") {
        setIsSprintOpen(true);
      } else if (mode === "srs") {
        setIsSrsViewActive(true);
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16">
      {/* Barre supérieure de navigation */}
      <Navbar
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onOpenSprint={() => setIsSprintOpen(true)}
        onOpenSrs={() => setIsSrsViewActive(true)}
        onOpenReminders={() => setIsRemindersOpen(true)}
      />

      {/* Contenu Principal : Arbre d'apprentissage ou Vue SRS */}
      <div className="flex-1 w-full">
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
