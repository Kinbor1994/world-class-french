"use client";

import React, { useState, useEffect } from "react";
import {
  Timer,
  Check,
  Trophy,
  Copy,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useAppStore } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type { Stage, ExerciseItem, DailySprintRecord } from "@/types/curriculum";

interface DailySprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailySprintModal: React.FC<DailySprintModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { currentStage, saveSprintRecord } = useAppStore();
  const [seconds, setSeconds] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [results, setResults] = useState<("correct" | "hesitant" | "wrong")[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const currentStageData: Stage | undefined = (curriculumData.stages as Stage[]).find(
    (s) => s.id === currentStage
  );

  const allStageExercises: ExerciseItem[] =
    currentStageData?.modules.flatMap((m) =>
      m.chapters.flatMap((c) => c.lessons.flatMap((l) => l.exercises))
    ) ?? [];

  const sprintExercises = allStageExercises.slice(0, 6);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isOpen && !isCompleted) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, isCompleted]);

  if (!isOpen) return null;

  const currentExercise: ExerciseItem | undefined = sprintExercises[currentIndex];

  const handleAnswerClick = (isCorrect: boolean) => {
    const isHesitant = seconds > 12 * (results.length + 1);
    const resultType: "correct" | "hesitant" | "wrong" = !isCorrect
      ? "wrong"
      : isHesitant
      ? "hesitant"
      : "correct";

    const newResults = [...results, resultType];
    setResults(newResults);

    if (currentIndex + 1 < sprintExercises.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      const score = newResults.filter((r) => r === "correct" || r === "hesitant").length;
      const emojiPattern = newResults
        .map((r) => (r === "correct" ? "🟩" : r === "hesitant" ? "🟨" : "🟥"))
        .join("");

      const record: DailySprintRecord = {
        date: new Date().toISOString().split("T")[0] ?? "",
        stage: currentStage,
        stageName: currentStageData?.shortName ?? `Palier ${currentStage}`,
        score,
        totalQuestions: sprintExercises.length,
        durationSeconds: seconds,
        resultsPattern: emojiPattern,
        retentionAvg: 88,
      };

      saveSprintRecord(record);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#B45309", "#0F172A", "#065F46"],
        });
      } catch {
        // Fallback
      }
    }
  };

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getShareableText = (): string => {
    const dayNumber = Math.floor(Date.now() / (1000 * 3600 * 24)) % 1000;
    const emojiPattern = results
      .map((r) => (r === "correct" ? "🟩" : r === "hesitant" ? "🟨" : "🟥"))
      .join("");
    return `World-Class French · Daily #${dayNumber} (${currentStageData?.shortName}) ${emojiPattern} ${formatTime(
      seconds
    )} · Rétention SRS : 88% #worldclassfrench`;
  };

  const handleCopyShare = async () => {
    const text = getShareableText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-academic-navy/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
    >
      <div className="bg-white dark:bg-academic-dark-surface rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-modal border border-academic-border dark:border-academic-dark-border">
        {!isCompleted ? (
          <div>
            {/* Barre supérieure du Sprint */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-academic-border-subtle dark:border-academic-dark-border">
              <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-academic-gold font-mono font-bold text-xs px-3 py-1 rounded border border-amber-200 dark:border-amber-800">
                <Timer className="w-3.5 h-3.5 animate-pulse" />
                <span>{formatTime(seconds)}</span>
              </div>

              <div className="flex items-center gap-1">
                {sprintExercises.map((_, idx) => {
                  const res = results[idx];
                  return (
                    <div
                      key={idx}
                      className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold ${
                        res === "correct"
                          ? "bg-academic-emerald text-white"
                          : res === "hesitant"
                          ? "bg-academic-gold text-white"
                          : res === "wrong"
                          ? "bg-academic-bordeaux text-white"
                          : idx === currentIndex
                          ? "border border-academic-navy dark:border-academic-gold text-academic-ink dark:text-slate-100"
                          : "bg-academic-paper dark:bg-academic-dark-card text-academic-muted dark:text-academic-dark-muted"
                      }`}
                    >
                      {res === "correct" ? "✓" : res === "wrong" ? "✗" : idx + 1}
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="text-academic-muted hover:text-academic-ink dark:hover:text-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Question du sprint */}
            {currentExercise && (
              <div className="mb-6 space-y-4">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-academic-muted dark:text-academic-dark-muted block">
                  Question {currentIndex + 1} sur {sprintExercises.length}
                </span>
                <h3 className="text-lg font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
                  {currentExercise.prompt}
                </h3>

                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAnswerClick(true)}
                    className="p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-gold text-academic-ink dark:text-slate-100 text-xs font-semibold rounded-lg text-left transition-all shadow-fine"
                  >
                    Proposition A (Formulation exacte & conforme)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswerClick(false)}
                    className="p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-bordeaux text-academic-ink dark:text-slate-100 text-xs font-semibold rounded-lg text-left transition-all shadow-fine"
                  >
                    Proposition B (Distracteur normatif)
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Rapport de fin de Sprint */
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-full flex items-center justify-center mx-auto text-academic-gold">
              <Trophy className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-academic-gold">
                Sprint Minuté Achevé
              </span>
              <h2 className="text-xl font-bold font-serif text-academic-ink dark:text-slate-100">
                Bilan de la session quotidienne
              </h2>
              <p className="text-xs text-academic-muted dark:text-academic-dark-muted">
                {currentStageData?.shortName} · Temps : {formatTime(seconds)}
              </p>
            </div>

            <div className="p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-left space-y-1">
              <div className="text-[10px] font-mono text-academic-muted dark:text-academic-dark-muted">
                Synthèse pour partage :
              </div>
              <div className="font-mono text-xs font-bold text-academic-gold break-words">
                {getShareableText()}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopyShare}
                className="flex-1 py-2.5 px-4 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border hover:border-academic-gold text-academic-ink dark:text-slate-100 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-fine"
              >
                {copied ? <Check className="w-4 h-4 text-academic-emerald" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copié !" : "Copier le bilan"}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-6 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white transition-all"
              >
                Terminer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
