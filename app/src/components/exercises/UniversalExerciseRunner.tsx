"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Heart,
  Volume2,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";
import type {
  MicroLesson,
  ExerciseItem,
  VisualSoundMatchData,
  SyllableBricksData,
  VoltaireHunterData,
  DictationData,
  DiagnosticMcqData,
  ClozeMorphologyData,
  RhetoricStudioData,
} from "@/types/curriculum";
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
          particleCount: 30,
          spread: 50,
          origin: { y: 0.85 },
          colors: ["#B45309", "#0F172A", "#065F46"],
        });
      } catch {
        // Fallback sans effet visuel
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
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B45309", "#0F172A", "#D97706"],
        });
      } catch {
        // Fallback
      }
    }
  };

  if (isFinished) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-academic-navy/70 backdrop-blur-sm animate-in fade-in"
      >
        <div className="w-full max-w-lg bg-white dark:bg-academic-dark-surface rounded-2xl border border-academic-border dark:border-academic-dark-border p-8 shadow-modal text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-academic-gold">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-academic-gold">
              Session Validée · +15 XP
            </span>
            <h2 className="text-2xl font-bold font-serif text-academic-ink dark:text-slate-100">
              Leçon assimilée avec succès
            </h2>
            <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-normal">
              Les notions et règles de cette session sont désormais enregistrées dans votre moteur mémoriel <span className="font-mono">fata.srs</span> pour ancrage durable.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border text-left text-xs space-y-1">
            <div className="text-[10px] uppercase font-bold text-academic-muted dark:text-academic-dark-muted">
              Leçon validée :
            </div>
            <div className="font-semibold text-academic-ink dark:text-slate-200">
              {lesson.title}
            </div>
            <div className="text-academic-muted dark:text-academic-dark-muted">
              {lesson.exercises.length} exercices réussis · Chapitre {lesson.chapterId}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onLessonComplete();
              onClose();
            }}
            className="w-full py-3 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all shadow-fine"
          >
            Poursuivre le programme
          </button>
        </div>
      </div>
    );
  }

  if (!currentExercise) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-academic-paper dark:bg-academic-dark-bg text-academic-ink dark:text-slate-100 overflow-hidden"
    >
      {/* Barre supérieure de progression */}
      <header className="w-full border-b border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface px-4 sm:px-6 h-14 flex items-center justify-between gap-4 shrink-0">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la session"
          className="w-10 h-10 flex items-center justify-center text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-100 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Jauge fine de progression */}
        <div className="flex-1 max-w-xl mx-auto flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-academic-border-subtle dark:bg-academic-dark-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-academic-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <span className="font-mono text-[11px] font-semibold text-academic-muted dark:text-academic-dark-muted shrink-0">
            {currentIndex + 1} / {lesson.exercises.length}
          </span>
        </div>

        {/* Indicateur de vigilance / vies */}
        <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border text-academic-ink dark:text-slate-200">
          <Heart className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 fill-rose-600 dark:fill-rose-400" />
          <span>{isInfiniteHearts ? "Illimitées" : `${hearts} vies`}</span>
        </div>
      </header>

      {/* Corps didactique de l'exercice */}
      <main className="max-w-2xl w-full mx-auto px-4 py-8 flex-1 flex flex-col justify-center overflow-y-auto">
        {/* Consigne */}
        <div className="mb-6 text-center space-y-2">
          {currentExercise.ruleId && (
            <span className="font-mono text-[10px] font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
              Règle {currentExercise.ruleId}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
            {currentExercise.prompt}
          </h2>

          {/* Écoute vocale */}
          {currentExercise.audioText && (
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  speakFrench(currentExercise.audioText!, 1.0, isAudioMuted)
                }
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-xs font-semibold text-academic-ink dark:text-slate-200 hover:border-academic-gold transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5 text-academic-gold" />
                <span>Écouter (1.0x)</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  speakFrench(currentExercise.audioText!, 0.65, isAudioMuted)
                }
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-xs font-semibold text-academic-muted dark:text-academic-dark-muted hover:border-academic-gold transition-colors"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Lent (0.65x)</span>
              </button>
              {currentExercise.ipa && (
                <span className="font-mono text-xs text-academic-muted dark:text-academic-dark-muted px-2 py-1 bg-academic-paper dark:bg-academic-dark-card rounded border border-academic-border-subtle dark:border-academic-dark-border">
                  {currentExercise.ipa}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Composant interactif spécialisé (strictement typé) */}
        <div className="w-full">
          {currentExercise.type === "visual_sound_match" && (
            <VisualSoundMatch
              key={currentExercise.id}
              data={currentExercise.data as VisualSoundMatchData}
              speechRate={speechRate}
              isAudioMuted={isAudioMuted}
              onAnswer={handleExerciseAnswer}
            />
          )}

          {currentExercise.type === "syllable_bricks" && (
            <SyllableAndSentenceBricks
              key={currentExercise.id}
              data={currentExercise.data as SyllableBricksData}
              speechRate={speechRate}
              isAudioMuted={isAudioMuted}
              onAnswer={handleExerciseAnswer}
            />
          )}

          {currentExercise.type === "voltaire_hunter" && (
            <VoltaireErrorHunter
              key={currentExercise.id}
              data={currentExercise.data as VoltaireHunterData}
              onAnswer={handleExerciseAnswer}
            />
          )}

          {currentExercise.type === "dictation" && (
            <InteractiveDictation
              key={currentExercise.id}
              data={currentExercise.data as DictationData}
              speechRate={speechRate}
              isAudioMuted={isAudioMuted}
              onAnswer={handleExerciseAnswer}
            />
          )}

          {currentExercise.type === "diagnostic_mcq" && (
            <SmartDiagnosticMCQ
              key={currentExercise.id}
              data={currentExercise.data as DiagnosticMcqData}
              onAnswer={handleExerciseAnswer}
            />
          )}

          {currentExercise.type === "cloze_morphology" && (
            <ClozeMorphologyInput
              key={currentExercise.id}
              data={currentExercise.data as ClozeMorphologyData}
              onAnswer={handleExerciseAnswer}
            />
          )}

          {currentExercise.type === "rhetoric_studio" && (
            <RhetoricAndRegisterStudio
              key={currentExercise.id}
              data={currentExercise.data as RhetoricStudioData}
              speechRate={speechRate}
              isAudioMuted={isAudioMuted}
              onAnswer={handleExerciseAnswer}
            />
          )}
        </div>
      </main>

      {/* Rétroaction Didactique Métacognitive (Tiroir Inférieur Noble) */}
      <AnimatePresence>
        {feedback.show && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className={`w-full border-t p-4 sm:p-6 shadow-modal ${
              feedback.isCorrect
                ? "bg-emerald-50/95 dark:bg-emerald-950/90 border-emerald-300 dark:border-emerald-800"
                : "bg-amber-50/95 dark:bg-amber-950/90 border-amber-300 dark:border-amber-800"
            }`}
          >
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                {feedback.isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4
                    className={`text-sm font-bold font-serif ${
                      feedback.isCorrect
                        ? "text-emerald-900 dark:text-emerald-200"
                        : "text-amber-950 dark:text-amber-200"
                    }`}
                  >
                    {feedback.isCorrect ? "Réponse exacte" : "Analyse didactique & Point de règle"}
                  </h4>
                  <p
                    className={`text-xs mt-1 whitespace-pre-line leading-relaxed font-sans ${
                      feedback.isCorrect
                        ? "text-emerald-800 dark:text-emerald-300"
                        : "text-amber-900 dark:text-amber-300"
                    }`}
                  >
                    {feedback.text}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full sm:w-auto px-6 py-2.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all shadow-fine flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Continuer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
