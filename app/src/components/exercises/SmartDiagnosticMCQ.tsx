"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import type { DiagnosticMcqData, McqOption } from "@/types/curriculum";

interface SmartDiagnosticMCQProps {
  data: DiagnosticMcqData;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const SmartDiagnosticMCQ: React.FC<SmartDiagnosticMCQProps> = ({
  data,
  onAnswer,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handleSelect = (optionId: string) => {
    if (hasValidated) return;
    setSelectedOptionId(optionId);
  };

  const handleValidate = () => {
    if (!selectedOptionId || hasValidated) return;
    setHasValidated(true);

    const chosen = data.options.find((o) => o.id === selectedOptionId);
    if (!chosen) return;

    if (chosen.isCorrect) {
      onAnswer(true, `${chosen.feedback}\nAnalyse : ${data.explanation}`);
    } else {
      onAnswer(false, `${chosen.feedback}\nAnalyse : ${data.explanation}`);
    }
  };

  const optionLetters = ["A", "B", "C", "D", "E"];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Intitulé de la proposition */}
      <div className="w-full p-5 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card mb-5 text-center">
        <h3 className="text-lg sm:text-xl font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
          {data.question}
        </h3>
      </div>

      {/* Options ordonnées avec lettrines */}
      <div className="flex flex-col gap-2.5 w-full mb-6">
        {data.options.map((option: McqOption, idx: number) => {
          const isSelected = selectedOptionId === option.id;
          const letter = optionLetters[idx] ?? String(idx + 1);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              className={`flex items-center justify-between p-3.5 rounded-lg border text-left transition-all ${
                isSelected
                  ? "border-academic-gold bg-amber-50/70 dark:bg-amber-950/30 text-academic-ink dark:text-slate-100 shadow-fine"
                  : "border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface text-academic-ink-light dark:text-slate-200 hover:border-academic-gold/60 shadow-fine"
              }`}
            >
              <div className="flex items-center gap-3 pr-2">
                <span
                  className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                    isSelected
                      ? "bg-academic-gold text-white"
                      : "bg-academic-paper dark:bg-academic-dark-card text-academic-muted dark:text-academic-dark-muted"
                  }`}
                >
                  {letter}
                </span>
                <span className="text-sm font-sans leading-relaxed">{option.text}</span>
              </div>

              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  isSelected
                    ? "border-academic-gold bg-academic-gold text-white"
                    : "border-academic-border dark:border-academic-dark-border"
                }`}
              >
                {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={!selectedOptionId || hasValidated}
        className="w-full flex items-center justify-center gap-2 py-3 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all select-none"
      >
        <Check className="w-4 h-4" />
        <span>Confirmer l'arbitrage</span>
      </button>
    </div>
  );
};
