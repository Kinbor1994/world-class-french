"use client";

import React, { useState } from "react";
import {
  Compass,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Award,
  GraduationCap,
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
      setStep("result");
    }
  };

  // Calcul du palier recommandé selon les points obtenus
  const getCalculatedStage = (): number => {
    if (scoreTotal <= 1) return 1; // CI (A0)
    if (scoreTotal <= 3) return 2; // CP-CE1 (A1)
    if (scoreTotal <= 5) return 3; // CE2-CM2 (A2)
    if (scoreTotal <= 7) return 4; // B1
    if (scoreTotal <= 8) return 5; // B2
    if (scoreTotal <= 9) return 6; // C1
    return 7; // C2 / Excellence
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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-academic-navy/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
    >
      <div className="bg-white dark:bg-academic-dark-surface rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-modal border border-academic-border dark:border-academic-dark-border">
        {/* Étape 1 : Accueil institutionnel */}
        {step === "welcome" && (
          <div className="text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center mx-auto text-academic-gold">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-academic-gold">
                Positionnement Pédagogique
              </span>
              <h2 className="text-2xl font-bold font-serif text-academic-ink dark:text-slate-100">
                Bienvenue sur World-Class French
              </h2>
              <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-normal max-w-sm mx-auto leading-relaxed">
                De l'alphabétisation initiale et la combinatoire syllabique jusqu'à la rhétorique diplomatique (C2+), calibrons votre parcours.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-left pt-2">
              <button
                type="button"
                onClick={handleStartBeginner}
                className="flex items-start gap-3.5 p-4 rounded-xl border border-academic-border dark:border-academic-dark-border hover:border-academic-gold bg-academic-paper dark:bg-academic-dark-card transition-all group shadow-fine"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center shrink-0 font-serif font-bold text-sm mt-0.5">
                  CI
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold font-serif text-academic-ink dark:text-slate-100 group-hover:text-academic-gold transition-colors">
                    Sas d'Initiation Doux (Niveau CI / A0)
                  </div>
                  <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted mt-0.5 leading-snug">
                    Sons élémentaires, b+a = ba, écoute vocale ralentie, sans jargon et sans pénalité.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-academic-muted group-hover:text-academic-gold group-hover:translate-x-1 transition-all mt-1" />
              </button>

              <button
                type="button"
                onClick={handleStartDiagnostic}
                className="flex items-start gap-3.5 p-4 rounded-xl border border-academic-border dark:border-academic-dark-border hover:border-academic-navy dark:hover:border-academic-gold bg-white dark:bg-academic-dark-surface transition-all group shadow-fine"
              >
                <div className="w-8 h-8 rounded-lg bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy flex items-center justify-center shrink-0 font-serif font-bold text-sm mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold font-serif text-academic-ink dark:text-slate-100 group-hover:text-academic-navy dark:group-hover:text-academic-gold transition-colors">
                    Épreuve Diagnostique (4 questions · 60 s)
                  </div>
                  <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted mt-0.5 leading-snug">
                    Recommandation automatique du palier d'études optimal parmi les 8 niveaux du cursus.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-academic-muted group-hover:text-academic-gold group-hover:translate-x-1 transition-all mt-1" />
              </button>
            </div>
          </div>
        )}

        {/* Étape 2 : Quiz Diagnostique adaptatif */}
        {step === "quiz" && currentQ && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-academic-muted dark:text-academic-dark-muted pb-2 border-b border-academic-border-subtle dark:border-academic-dark-border">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
                Question {questionIndex + 1} sur {questions.length}
              </span>
              <span className="font-mono font-semibold text-academic-gold">
                {currentQ.stageName}
              </span>
            </div>

            <div className="w-full h-1 bg-academic-border-subtle dark:bg-academic-dark-border rounded-full overflow-hidden">
              <div
                className="h-full bg-academic-gold transition-all duration-300"
                style={{
                  width: `${((questionIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-base sm:text-lg font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug pt-1">
              {currentQ.question}
            </h3>

            {currentQ.audioText && (
              <button
                type="button"
                onClick={() => speakFrench(currentQ.audioText, 1.0, isAudioMuted)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border text-xs font-semibold text-academic-ink dark:text-slate-200 hover:border-academic-gold transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5 text-academic-gold" />
                <span>Écouter l'énoncé</span>
              </button>
            )}

            <div className="flex flex-col gap-2 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-3 rounded-lg border text-left text-xs sm:text-sm font-sans transition-all ${
                      isSelected
                        ? "border-academic-gold bg-amber-50/70 dark:bg-amber-950/40 text-academic-ink dark:text-slate-100 font-semibold shadow-fine"
                        : "border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-card text-academic-ink-light dark:text-slate-200 hover:border-academic-gold/60 shadow-fine"
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
              className="w-full py-2.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all select-none mt-2"
            >
              Valider et continuer
            </button>
          </div>
        )}

        {/* Étape 3 : Résultat et Palier Recommandé */}
        {step === "result" && (
          <div className="text-center space-y-5">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-full flex items-center justify-center mx-auto text-academic-gold">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-academic-gold">
                Bilan Diagnostique
              </span>
              <h2 className="text-2xl font-bold font-serif text-academic-ink dark:text-slate-100">
                Palier Recommandé
              </h2>
            </div>

            <div className="p-5 bg-academic-paper dark:bg-academic-dark-card rounded-xl border border-academic-border dark:border-academic-dark-border text-left space-y-2 shadow-fine">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                  Palier {recommendedStage}
                </span>
                <span className="text-sm font-bold font-serif text-academic-ink dark:text-slate-100">
                  {stageInfo?.name ?? `Palier ${recommendedStage}`}
                </span>
              </div>
              <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-normal leading-relaxed">
                {stageInfo?.description}
              </p>
              {stageInfo?.hasInfiniteHearts && (
                <div className="pt-2 text-xs font-semibold text-academic-emerald dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Régime débutant : Vies illimitées activées pour consolider les fondamentaux.</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleConfirmResult}
              className="w-full py-3 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white transition-all select-none"
            >
              Rejoindre mon palier d'études
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
