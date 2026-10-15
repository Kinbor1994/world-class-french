"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Heart,
  Volume2,
  Snail,
  ArrowRight,
  Trophy,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";
import type { MicroLesson, ExerciseItem } from "@/types/curriculum";
import { useAppStore } from "@/store/useAppStore";
import { speakFrench } from "@/utils/speech";

import { VisualSoundMatch } from "./VisualSoundMatch";
import { SyllableAndSentenceBricks } from "./SyllableAndSentenceBricks";
import { VoltaireErrorHunter } from "./VoltaireErrorHunter";
import { InteractiveDictation } from "./InteractiveDictation";
import { SmartDiagnosticMCQ } from "./SmartDiagnosticMCQ";
import { ClozeMorphologyInput } from "./ClozeMorphologyInput";
import { RhetoricAndRegisterStudio } from "./RhetoricAndRegisterStudio";

interface UniversalExerciseRunnerProps {
  lesson: MicroLesson;
  stageNumber: number;
  onClose: () => void;
  onLessonComplete: () => void;
}

export const UniversalExerciseRunner: React.FC<UniversalExerciseRunnerProps> = ({
  lesson,
  stageNumber,
  onClose,
  onLessonComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [feedback, setFeedback] = useState<{
    show: boolean;
    isCorrect: boolean;
    text: string;
  }>({ show: false, isCorrect: false, text: "" });
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const {
    hearts,
    decrementHeart,
    speechRate,
    isAudioMuted,
    completeLesson,
    addXp,
  } = useAppStore();

  const isInfiniteHearts = stageNumber <= 2;
  const currentExercise: ExerciseItem | undefined = lesson.exercises[currentIndex];
  const progressPercent = Math.round(
    ((currentIndex + (feedback.show ? 1 : 0)) / lesson.exercises.length) * 100
  );

  const handleExerciseAnswer = (isCorrect: boolean, feedbackText: string) => {
    if (isCorrect) {
      addXp(15);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#58CC02", "#1CB0F6", "#FFC800"],
        });
      } catch {
        // Fallback sans confetti
      }
    } else {
      if (!isInfiniteHearts) {
        decrementHeart();
      }
    }

    setFeedback({
      show: true,
      isCorrect,
      text: feedbackText,
    });
  };

  const handleNext = () => {
    setFeedback({ show: false, isCorrect: false, text: "" });
    if (currentIndex + 1 < lesson.exercises.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      completeLesson(lesson.id);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback
      }
    }
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-2 border-slate-200 dark:border-slate-700"
        >
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-500 shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2">
            Leçon Complétée !
          </h2>
          <p className="text-slate-600 dark:text-slate-300 font-medium mb-6">
            Vous avez assimilé « {lesson.title} » avec brio.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
              <span className="text-xs uppercase font-extrabold text-emerald-600 dark:text-emerald-400">
                XP Gagné
              </span>
              <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                +50 XP
              </p>
            </div>
            <div className="p-4 bg-sky-50 dark:bg-sky-950/40 rounded-2xl border border-sky-200 dark:border-sky-800">
              <span className="text-xs uppercase font-extrabold text-sky-600 dark:text-sky-400">
                Précision
              </span>
              <p className="text-3xl font-black text-sky-600 dark:text-sky-400 mt-1">
                100%
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onLessonComplete();
              onClose();
            }}
            className="w-full py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none transition-all"
          >
            Continuer mon parcours
          </button>
        </motion.div>
      </div>
    );
  }

  if (!currentExercise) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-slate-900 flex flex-col justify-between overflow-y-auto">
      {/* Barre supérieure : Sortie, Jauge animée & Bouclier de Vies */}
      <div className="max-w-2xl w-full mx-auto p-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-xl transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Jauge de progression */}
        <div className="flex-1 h-3.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
          <motion.div
            className="h-full bg-duo-green rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Bouclier de vies */}
        <div className="flex items-center gap-1 font-black text-rose-500 bg-rose-50 dark:bg-rose-950/40 px-3 py-1.5 rounded-full border border-rose-200 dark:border-rose-900 select-none">
          <Heart className="w-5 h-5 fill-rose-500" />
          <span className="text-sm">
            {isInfiniteHearts ? "∞" : hearts}
          </span>
        </div>
      </div>

      {/* Corps de l'exercice */}
      <div className="max-w-2xl w-full mx-auto px-4 py-6 flex-1 flex flex-col justify-center">
        {/* En-tête : Titre & Consigne */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2 leading-snug">
            {currentExercise.prompt}
          </h2>

          {/* Audio rapide et lent */}
          {currentExercise.audioText && (
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                type="button"
                onClick={() =>
                  speakFrench(currentExercise.audioText!, 1.0, isAudioMuted)
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 rounded-full font-bold text-xs hover:bg-sky-200 transition-all select-none"
              >
                <Volume2 className="w-4 h-4" />
                <span>Écouter</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  speakFrench(currentExercise.audioText!, 0.65, isAudioMuted)
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full font-bold text-xs hover:bg-amber-200 transition-all select-none"
              >
                <Snail className="w-4 h-4" />
                <span>Lent 0.65x</span>
              </button>
              {currentExercise.ipa && (
                <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  {currentExercise.ipa}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Rendu dynamique selon le type d'exercice */}
        {currentExercise.type === "visual_sound_match" && (
          <VisualSoundMatch
            key={currentExercise.id}
            data={currentExercise.data as any}
            speechRate={speechRate}
            isAudioMuted={isAudioMuted}
            onAnswer={handleExerciseAnswer}
          />
        )}

        {currentExercise.type === "syllable_bricks" && (
          <SyllableAndSentenceBricks
            key={currentExercise.id}
            data={currentExercise.data as any}
            speechRate={speechRate}
            isAudioMuted={isAudioMuted}
            onAnswer={handleExerciseAnswer}
          />
        )}

        {currentExercise.type === "voltaire_hunter" && (
          <VoltaireErrorHunter
            key={currentExercise.id}
            data={currentExercise.data as any}
            onAnswer={handleExerciseAnswer}
          />
        )}

        {currentExercise.type === "dictation" && (
          <InteractiveDictation
            key={currentExercise.id}
            data={currentExercise.data as any}
            speechRate={speechRate}
            isAudioMuted={isAudioMuted}
            onAnswer={handleExerciseAnswer}
          />
        )}

        {currentExercise.type === "diagnostic_mcq" && (
          <SmartDiagnosticMCQ
            key={currentExercise.id}
            data={currentExercise.data as any}
            onAnswer={handleExerciseAnswer}
          />
        )}

        {currentExercise.type === "cloze_morphology" && (
          <ClozeMorphologyInput
            key={currentExercise.id}
            data={currentExercise.data as any}
            onAnswer={handleExerciseAnswer}
          />
        )}

        {currentExercise.type === "rhetoric_studio" && (
          <RhetoricAndRegisterStudio
            key={currentExercise.id}
            data={currentExercise.data as any}
            onAnswer={handleExerciseAnswer}
          />
        )}
      </div>

      {/* Tiroir inférieur de rétroaction métacognitive */}
      <AnimatePresence>
        {feedback.show && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className={`w-full border-t-2 p-6 shadow-2xl ${
              feedback.isCorrect
                ? "bg-emerald-50 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800"
                : "bg-rose-50 dark:bg-rose-950 border-rose-300 dark:border-rose-800"
            }`}
          >
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                {feedback.isCorrect ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4
                    className={`text-lg font-black ${
                      feedback.isCorrect
                        ? "text-emerald-800 dark:text-emerald-200"
                        : "text-rose-800 dark:text-rose-200"
                    }`}
                  >
                    {feedback.isCorrect ? "Brillant !" : "À retenir :"}
                  </h4>
                  <p
                    className={`text-sm mt-1 whitespace-pre-line font-medium ${
                      feedback.isCorrect
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-rose-700 dark:text-rose-300"
                    }`}
                  >
                    {feedback.text}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className={`w-full md:w-auto px-8 py-3.5 font-extrabold text-base rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 select-none ${
                  feedback.isCorrect
                    ? "bg-duo-green text-white shadow-duo-green"
                    : "bg-rose-600 text-white shadow-duo-red"
                }`}
              >
                <span>Continuer</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
