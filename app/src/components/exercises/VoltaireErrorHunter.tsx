"use client";

import React, { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import type { VoltaireHunterData } from "@/types/curriculum";

interface VoltaireErrorHunterProps {
  data: VoltaireHunterData;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const VoltaireErrorHunter: React.FC<VoltaireErrorHunterProps> = ({
  data,
  onAnswer,
}) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [declaredNoError, setDeclaredNoError] = useState<boolean>(false);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handleWordClick = (index: number) => {
    if (hasValidated) return;
    setSelectedWordIndex(index);
    setDeclaredNoError(false);
  };

  const handleNoFaultClick = () => {
    if (hasValidated) return;
    setDeclaredNoError(true);
    setSelectedWordIndex(null);
  };

  const handleValidate = () => {
    if (hasValidated) return;
    setHasValidated(true);

    if (declaredNoError) {
      if (!data.hasError) {
        onAnswer(
          true,
          `Analyse irréprochable : cette phrase est parfaitement conforme à la norme académique.\nAstuce mémorielle : ${data.mnemonic}`
        );
      } else {
        onAnswer(
          false,
          `Cette phrase comportait une anomalie normative !\nRègle : ${data.explanation}\nAstuce : ${data.mnemonic}`
        );
      }
      return;
    }

    if (selectedWordIndex !== null) {
      const chosenWord = data.words[selectedWordIndex];
      if (chosenWord && chosenWord.isError) {
        onAnswer(
          true,
          `Vigilance remarquable : « ${chosenWord.text} » devait être corrigé en « ${chosenWord.correction ?? ""} ».\nRègle : ${data.explanation}\nAstuce : ${data.mnemonic}`
        );
      } else {
        const errorWord = data.words.find((w) => w.isError);
        onAnswer(
          false,
          `Le terme « ${chosenWord?.text ?? ""} » est licite. L'anomalie portait sur « ${errorWord?.text ?? ""} » (correction : « ${errorWord?.correction ?? ""} »).\nRègle : ${data.explanation}\nAstuce : ${data.mnemonic}`
        );
      }
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Panneau de révision éditoriale */}
      <div className="w-full p-6 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card mb-6">
        <div className="text-[10px] uppercase font-bold tracking-widest text-academic-muted dark:text-academic-dark-muted mb-4 text-center">
          Examinez le texte et pointez le terme fautif (ou déclarez la phrase irréprochable)
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-lg sm:text-xl font-serif text-academic-ink dark:text-slate-100 leading-relaxed justify-center">
          {data.words.map((wordObj, idx) => {
            const isSelected = selectedWordIndex === idx;
            return (
              <button
                key={`${wordObj.text}-${idx}`}
                type="button"
                onClick={() => handleWordClick(idx)}
                className={`px-2 py-0.5 rounded transition-all font-serif cursor-pointer ${
                  isSelected
                    ? "bg-academic-bordeaux text-white font-bold shadow-fine"
                    : "hover:bg-amber-100/70 dark:hover:bg-amber-950/40 text-academic-ink dark:text-slate-100 hover:text-amber-900"
                }`}
              >
                {wordObj.text}
              </button>
            );
          })}
        </div>
      </div>

      {/* Option Phrase Irréprochable */}
      <div className="w-full mb-6 flex justify-center">
        <button
          type="button"
          onClick={handleNoFaultClick}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs font-semibold transition-all shadow-fine ${
            declaredNoError
              ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200"
              : "border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card text-academic-ink dark:text-slate-200 hover:border-academic-gold"
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Cette phrase ne contient aucune faute</span>
        </button>
      </div>

      {/* Validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={selectedWordIndex === null && !declaredNoError || hasValidated}
        className="flex items-center gap-1.5 px-6 py-2.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all"
      >
        <Check className="w-4 h-4" />
        <span>Valider le diagnostic</span>
      </button>
    </div>
  );
};
