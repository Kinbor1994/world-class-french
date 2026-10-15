"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
      onAnswer(true, `${chosen.feedback}\nExplication : ${data.explanation}`);
    } else {
      onAnswer(false, `${chosen.feedback}\nExplication : ${data.explanation}`);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Intitulé de la question */}
      <div className="w-full p-6 bg-slate-50 dark:bg-slate-800/80 rounded-3xl border-2 border-slate-200 dark:border-slate-700 mb-6 text-center">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-snug">
          {data.question}
        </h3>
      </div>

      {/* Liste des options */}
      <div className="flex flex-col gap-3 w-full mb-6">
        {data.options.map((option: McqOption) => {
          const isSelected = selectedOptionId === option.id;
          return (
            <motion.button
              key={option.id}
              type="button"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleSelect(option.id)}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 text-left transition-all ${
                isSelected
                  ? "border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-100 font-bold shadow-md"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 font-medium"
              }`}
            >
              <span className="text-base leading-relaxed pr-3">{option.text}</span>
              <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0">
                {isSelected && (
                  <div className="w-3 h-3 bg-sky-500 rounded-full" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Bouton de validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={!selectedOptionId || hasValidated}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none"
      >
        <Check className="w-6 h-6 stroke-[3]" />
        <span>Confirmer ma réponse</span>
      </button>
    </div>
  );
};
