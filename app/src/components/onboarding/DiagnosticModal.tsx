"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  Baby,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Award,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type { DiagnosticQuestion, Stage } from "@/types/curriculum";
import { speakFrench } from "@/utils/speech";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { completeOnboarding, setStage, isAudioMuted } = useAppStore();
  const [step, setStep] = useState<"welcome" | "quiz" | "result">("welcome");
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [scoreTotal, setScoreTotal] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const questions: readonly DiagnosticQuestion[] = curriculumData.diagnosticQuestions as DiagnosticQuestion[];
  const currentQ: DiagnosticQuestion | undefined = questions[questionIndex];

  if (!isOpen) return null;

  const handleStartBeginner = () => {
    setStage(1);
    completeOnboarding(1);
    onClose();
  };

  const handleStartDiagnostic = () => {
    setStep("quiz");
    setQuestionIndex(0);
    setScoreTotal(0);
    setSelectedOptionId(null);
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleNextQuestion = () => {
    if (!currentQ || !selectedOptionId) return;

    const opt = currentQ.options.find((o) => o.id === selectedOptionId);
    const addedScore = opt?.score ?? 0;
    const newTotal = scoreTotal + addedScore;
    setScoreTotal(newTotal);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      // Diagnostic terminé -> calcul du palier recommandé
      setStep("result");
    }
  };

  // Calcul du palier cible selon le score
  const getCalculatedStage = (): number => {
    if (scoreTotal <= 1) return 1; // CI (A0)
    if (scoreTotal <= 3) return 2; // CP-CE1 (A1)
    if (scoreTotal <= 5) return 3; // CE2-CM2 (A2)
    if (scoreTotal <= 7) return 4; // B1
    if (scoreTotal <= 8) return 5; // B2
    if (scoreTotal <= 9) return 6; // C1
    return 7; // C2 / World-Class
  };

  const recommendedStage = getCalculatedStage();
  const stageInfo: Stage | undefined = (curriculumData.stages as Stage[]).find(
    (s) => s.id === recommendedStage
  );

  const handleConfirmResult = () => {
    setStage(recommendedStage);
    completeOnboarding(recommendedStage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border-2 border-slate-200 dark:border-slate-700"
      >
        {/* Étape 1 : Bienvenue & Choix du sas */}
        {step === "welcome" && (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400 shadow-sm">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2">
              Bienvenue sur World-Class French
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-6">
              Que vous débutiez de zéro (sons et syllabes) ou que vous visiez la perfection diplomatique (C2+), notre parcours s'adapte à votre rythme.
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleStartBeginner}
                className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 rounded-2xl text-left hover:bg-emerald-100/60 dark:hover:bg-emerald-900/60 transition-all group"
              >
                <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Baby className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-extrabold text-emerald-900 dark:text-emerald-200 text-base">
                    Je débute totalement (Niveau CI / A0)
                  </div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400">
                    Sons, b+a = ba, mots illustrés, sans jargon & vies illimitées ❤️ ∞
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleStartDiagnostic}
                className="flex items-center gap-3 p-4 bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-400 rounded-2xl text-left hover:bg-sky-100/60 dark:hover:bg-sky-900/60 transition-all group"
              >
                <div className="w-10 h-10 bg-sky-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-extrabold text-sky-900 dark:text-sky-200 text-base">
                    Diagnostic Rapide (4 questions · 60 s)
                  </div>
                  <div className="text-xs text-sky-700 dark:text-sky-400">
                    Trouvez automatiquement votre palier idéal parmi les 8 niveaux
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Étape 2 : Quiz Diagnostic adaptatif */}
        {step === "quiz" && currentQ && (
          <div>
            <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span className="uppercase tracking-wider">
                Question {questionIndex + 1} sur {questions.length}
              </span>
              <span className="text-sky-600 dark:text-sky-400">
                {currentQ.stageName}
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-sky-500 rounded-full transition-all duration-300"
                style={{
                  width: `${((questionIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 leading-snug">
              {currentQ.question}
            </h3>

            {currentQ.audioText && (
              <button
                type="button"
                onClick={() => speakFrench(currentQ.audioText, 1.0, isAudioMuted)}
                className="flex items-center gap-2 px-3 py-1.5 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 rounded-full text-xs font-bold mb-4 hover:bg-sky-200 transition-all"
              >
                <Volume2 className="w-4 h-4" />
                <span>Écouter l'énoncé</span>
              </button>
            )}

            <div className="flex flex-col gap-2.5 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-3.5 rounded-2xl border-2 text-left font-medium transition-all text-sm ${
                      isSelected
                        ? "border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-100 font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNextQuestion}
              disabled={!selectedOptionId}
              className="w-full py-3.5 bg-duo-green text-white font-extrabold text-base rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none"
            >
              Question suivante
            </button>
          </div>
        )}

        {/* Étape 3 : Résultat et Palier Recommandé */}
        {step === "result" && (
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-500 shadow-sm">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-1">
              Diagnostic Validé !
            </h2>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Palier Recommandé
            </p>

            <div className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-700 mb-6 text-left shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{stageInfo?.badge ?? "📘"}</span>
                <span className="text-lg font-black text-slate-800 dark:text-slate-100">
                  {stageInfo?.name ?? `Palier ${recommendedStage}`}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {stageInfo?.description}
              </p>
              {stageInfo?.hasInfiniteHearts && (
                <div className="mt-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Bouclier actif : Vies illimitées ❤️ ∞ pour ce palier !</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleConfirmResult}
              className="w-full py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none transition-all select-none"
            >
              Entrer dans mon parcours
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
