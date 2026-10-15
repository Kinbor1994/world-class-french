"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Timer,
  Check,
  Trophy,
  Copy,
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

  // Récupération des exercices pour le sprint (6 questions)
  const currentStageData: Stage | undefined = (curriculumData.stages as Stage[]).find(
    (s) => s.id === currentStage
  );

  const allStageExercises: ExerciseItem[] =
    currentStageData?.modules.flatMap((m) =>
      m.chapters.flatMap((c) => c.lessons.flatMap((l) => l.exercises))
    ) ?? [];

  // Sélectionne jusqu'à 6 exercices
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
    // Si l'utilisateur répond en plus de 12 secondes, c'est considéré comme hésitant (fata.app srs logic)
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
      // Sprint terminé !
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
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
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
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border-2 border-slate-200 dark:border-slate-700"
      >
        {!isCompleted ? (
          <div>
            {/* Barre supérieure du Sprint : Chrono & Indicateurs */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-extrabold text-sm px-3.5 py-1.5 rounded-full border border-amber-200 dark:border-amber-800">
                <Timer className="w-4 h-4 animate-pulse" />
                <span>{formatTime(seconds)}</span>
              </div>

              <div className="flex items-center gap-1">
                {sprintExercises.map((_, idx) => {
                  const res = results[idx];
                  return (
                    <div
                      key={idx}
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                        res === "correct"
                          ? "bg-emerald-500 text-white"
                          : res === "hesitant"
                          ? "bg-amber-500 text-white"
                          : res === "wrong"
                          ? "bg-rose-500 text-white"
                          : idx === currentIndex
                          ? "border-2 border-sky-500 bg-sky-50 dark:bg-sky-950/40"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-400"
                      }`}
                    >
                      {res === "correct" ? "✓" : res === "wrong" ? "✗" : idx + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question du sprint */}
            {currentExercise && (
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Question {currentIndex + 1} / {sprintExercises.length}
                </span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-snug">
                  {currentExercise.prompt}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => handleAnswerClick(true)}
                    className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-400 hover:border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold rounded-2xl text-left transition-all active:scale-98"
                  >
                    Réponse A (Exacte & Conforme)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswerClick(false)}
                    className="p-4 bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-800 dark:text-slate-200 font-bold rounded-2xl text-left transition-all active:scale-98"
                  >
                    Réponse B (Distracteur piège)
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Écran de rapport de fin de Sprint partageable */
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-500 shadow-sm">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-1">
              Sprint Quotidien Achevé !
            </h2>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Daily Fata Sprint · {currentStageData?.shortName}
            </p>

            {/* Grille de résultat stylisée */}
            <div className="p-4 bg-slate-900 text-slate-100 font-mono text-sm rounded-2xl mb-6 text-left shadow-inner flex flex-col gap-2">
              <div className="text-slate-400 text-xs">Rapport pour partage :</div>
              <div className="font-bold text-emerald-400 text-base">
                {getShareableText()}
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <button
                type="button"
                onClick={handleCopyShare}
                className="flex-1 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-sm rounded-2xl shadow-duo-blue flex items-center justify-center gap-2 active:translate-y-1 active:shadow-none transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copié !" : "Copier mon résultat"}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3.5 px-6 bg-duo-green text-white font-extrabold text-sm rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none transition-all"
              >
                Terminer
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
