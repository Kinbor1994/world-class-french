"use client";

import React, { useState } from "react";
import { Check, Feather } from "lucide-react";
import type { RhetoricStudioData } from "@/types/curriculum";

interface RhetoricAndRegisterStudioProps {
  data: RhetoricStudioData;
  speechRate?: number;
  isAudioMuted?: boolean;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const RhetoricAndRegisterStudio: React.FC<RhetoricAndRegisterStudioProps> = ({
  data,
  onAnswer,
}) => {
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null);
  const [selectedRegisterIndex, setSelectedRegisterIndex] = useState<number | null>(null);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handleValidateFigure = () => {
    if (!selectedFigure || hasValidated) return;
    setHasValidated(true);

    const isMatch = selectedFigure === data.correctFigure;
    if (isMatch) {
      onAnswer(
        true,
        `Remarquable analyse stylistique : il s'agit bien d'une figure de type « ${data.correctFigure} ».\n${data.explanation ?? ""}`
      );
    } else {
      onAnswer(
        false,
        `Ce n'est pas une figure de type « ${selectedFigure} », mais une « ${data.correctFigure ?? ""} ».\n${data.explanation ?? ""}`
      );
    }
  };

  const handleValidateRegister = () => {
    if (selectedRegisterIndex === null || hasValidated) return;
    setHasValidated(true);

    const chosen = data.registerOptions?.[selectedRegisterIndex];
    if (chosen && chosen.register === "soutenu") {
      onAnswer(
        true,
        `Parfaitement calibré : « ${chosen.text} » relève avec pureté du registre soutenu et diplomatique.\n${data.explanation ?? ""}`
      );
    } else {
      onAnswer(
        false,
        `Cette formule relève du registre ${chosen?.register ?? "inadapté"}.\n${data.explanation ?? ""}`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Extrait textuel analysé */}
      <div className="w-full p-6 bg-academic-paper dark:bg-academic-dark-card rounded-xl border border-academic-border dark:border-academic-dark-border mb-6 text-center shadow-card">
        <div className="flex items-center justify-center gap-1.5 mb-2 text-academic-gold font-bold text-[10px] uppercase tracking-widest font-mono">
          <Feather className="w-3.5 h-3.5" />
          <span>Atelier de Rhétorique & Stylistique Littéraire</span>
        </div>
        <p className="text-lg sm:text-xl italic font-serif text-academic-ink dark:text-slate-100 leading-relaxed">
          « {data.textToAnalyze} »
        </p>
      </div>

      {/* Mode 1 : Identification de figure de style */}
      {data.mode === "identify_figure" && data.figureOptions && (
        <div className="w-full flex flex-col gap-3 mb-6">
          <div className="grid grid-cols-2 gap-2.5">
            {data.figureOptions.map((fig) => {
              const isSelected = selectedFigure === fig;
              return (
                <button
                  key={fig}
                  type="button"
                  onClick={() => !hasValidated && setSelectedFigure(fig)}
                  className={`p-3.5 rounded-lg border text-sm font-serif font-bold transition-all text-center ${
                    isSelected
                      ? "border-academic-gold bg-amber-50/70 dark:bg-amber-950/40 text-academic-ink dark:text-slate-100 shadow-fine"
                      : "border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface text-academic-ink-light dark:text-slate-200 hover:border-academic-gold/60 shadow-fine"
                  }`}
                >
                  {fig}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleValidateFigure}
            disabled={!selectedFigure || hasValidated}
            className="w-full flex items-center justify-center gap-2 py-3 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all select-none mt-2"
          >
            <Check className="w-4 h-4" />
            <span>Valider l'identification de la figure</span>
          </button>
        </div>
      )}

      {/* Mode 2 : Discrimination de registre de langue */}
      {data.mode === "classify_register" && data.registerOptions && (
        <div className="w-full flex flex-col gap-2.5 mb-6">
          {data.registerOptions.map((opt, idx) => {
            const isSelected = selectedRegisterIndex === idx;
            return (
              <button
                key={opt.text}
                type="button"
                onClick={() => !hasValidated && setSelectedRegisterIndex(idx)}
                className={`p-3.5 rounded-lg border text-left transition-all ${
                  isSelected
                    ? "border-academic-gold bg-amber-50/70 dark:bg-amber-950/40 text-academic-ink dark:text-slate-100 shadow-fine"
                    : "border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface text-academic-ink-light dark:text-slate-200 hover:border-academic-gold/60 shadow-fine"
                }`}
              >
                <div className="text-sm font-serif font-medium">{opt.text}</div>
              </button>
            );
          })}

          <button
            type="button"
            onClick={handleValidateRegister}
            disabled={selectedRegisterIndex === null || hasValidated}
            className="w-full flex items-center justify-center gap-2 py-3 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all select-none mt-2"
          >
            <Check className="w-4 h-4" />
            <span>Confirmer la formulation soutenue</span>
          </button>
        </div>
      )}
    </div>
  );
};
