"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
          `Parfaitement vu ! Cette phrase est irréprochable.\nAstuce : ${data.mnemonic}`
        );
      } else {
        onAnswer(
          false,
          `Cette phrase comportait bien une faute !\nExplication : ${data.explanation}\nAstuce : ${data.mnemonic}`
        );
      }
      return;
    }

    if (selectedWordIndex !== null) {
      const chosenWord = data.words[selectedWordIndex];
      if (chosenWord && chosenWord.isError) {
        onAnswer(
          true,
          `Excellente détection ! « ${chosenWord.text} » devait être corrigé en « ${chosenWord.correction ?? ""} ».\nExplication : ${data.explanation}\nAstuce : ${data.mnemonic}`
        );
      } else {
        const errorWord = data.words.find((w) => w.isError);
        onAnswer(
          false,
          `Ce n'était pas « ${chosenWord?.text ?? ""} » qui était fautif. La faute se trouvait sur « ${errorWord?.text ?? ""} » (correction : « ${errorWord?.correction ?? ""} »).\nExplication : ${data.explanation}\nAstuce : ${data.mnemonic}`
        );
      }
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Phrase interactive avec mots cliquables */}
      <div className="w-full p-6 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-md mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed justify-center">
          {data.words.map((wordObj, idx) => {
            const isSelected = selectedWordIndex === idx;
            return (
              <motion.button
                key={`${wordObj.text}-${idx}`}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWordClick(idx)}
                className={`px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  isSelected
                    ? "bg-rose-500 text-white shadow-duo-red"
                    : "hover:bg-slate-100 dark:hover:bg-slate-700/60 text-slate-800 dark:text-slate-100"
                }`}
              >
                {wordObj.text}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Option Aucune Faute */}
      <div className="w-full mb-6 flex justify-center">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNoFaultClick}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 font-bold transition-all shadow-sm ${
            declaredNoError
              ? "bg-emerald-500 text-white border-emerald-600 shadow-duo-green"
              : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-emerald-400"
          }`}
        >
          <ShieldCheck className="w-5 h-5" />
          <span>Cette phrase ne contient aucune faute</span>
        </motion.button>
      </div>

      {/* Bouton de validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={(selectedWordIndex === null && !declaredNoError) || hasValidated}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none"
      >
        <Check className="w-6 h-6 stroke-[3]" />
        <span>Valider mon diagnostic</span>
      </button>
    </div>
  );
};
