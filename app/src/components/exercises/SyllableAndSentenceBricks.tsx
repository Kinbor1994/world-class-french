"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Check } from "lucide-react";
import type { SyllableBricksData } from "@/types/curriculum";
import { speakFrench } from "@/utils/speech";

interface SyllableAndSentenceBricksProps {
  data: SyllableBricksData;
  speechRate: number;
  isAudioMuted: boolean;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const SyllableAndSentenceBricks: React.FC<SyllableAndSentenceBricksProps> = ({
  data,
  speechRate,
  isAudioMuted,
  onAnswer,
}) => {
  const [selectedBricks, setSelectedBricks] = useState<string[]>([]);
  const [availableBricks, setAvailableBricks] = useState<string[]>([...data.availableBricks]);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handleSelectBrick = (brick: string, index: number) => {
    if (hasValidated) return;
    speakFrench(brick, speechRate, isAudioMuted);
    setSelectedBricks((prev) => [...prev, brick]);
    setAvailableBricks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveBrick = (brick: string, index: number) => {
    if (hasValidated) return;
    setSelectedBricks((prev) => prev.filter((_, i) => i !== index));
    setAvailableBricks((prev) => [...prev, brick]);
  };

  const handleReset = () => {
    if (hasValidated) return;
    setSelectedBricks([]);
    setAvailableBricks([...data.availableBricks]);
  };

  const handleValidate = () => {
    setHasValidated(true);
    const userString = selectedBricks.join(" ").trim().toLowerCase();
    const correctString = data.correctSequence.join(" ").trim().toLowerCase();

    // Vérifie aussi si la concaténation directe correspond (ex: ba+na+ne = banane)
    const userCompact = selectedBricks.join("").trim().toLowerCase();
    const correctCompact = data.correctSequence.join("").trim().toLowerCase();

    const isMatch = userString === correctString || userCompact === correctCompact;

    if (isMatch) {
      speakFrench(data.targetPhrase, speechRate, isAudioMuted);
      onAnswer(true, `Excellent assemblage ! « ${data.targetPhrase} » est parfaitement composé.`);
    } else {
      onAnswer(
        false,
        `Ce n'est pas tout à fait l'ordre attendu. Ordre correct : ${data.correctSequence.join(" - ")}.`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Zone de dépôt des briques assemblées */}
      <div className="w-full min-h-[90px] p-4 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap items-center justify-center gap-2.5 mb-6">
        <AnimatePresence>
          {selectedBricks.length === 0 ? (
            <span className="text-sm text-slate-400 dark:text-slate-500 font-medium select-none">
              Touche les briques ci-dessous pour assembler...
            </span>
          ) : (
            selectedBricks.map((brick, idx) => (
              <motion.button
                key={`${brick}-${idx}`}
                type="button"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRemoveBrick(brick, idx)}
                className="px-4 py-2.5 bg-emerald-500 text-white font-bold rounded-2xl shadow-duo-green border border-emerald-600 flex items-center gap-1.5 text-lg select-none"
              >
                <span>{brick}</span>
              </motion.button>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Rangée des briques disponibles */}
      <div className="flex flex-wrap justify-center gap-3 w-full mb-8">
        {availableBricks.map((brick, idx) => (
          <motion.button
            key={`${brick}-${idx}`}
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => handleSelectBrick(brick, idx)}
            className="px-5 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-extrabold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-duo-gray dark:shadow-duo-dark hover:border-sky-400 transition-all select-none"
          >
            {brick}
          </motion.button>
        ))}
      </div>

      {/* Boutons d'action */}
      <div className="flex items-center gap-4 w-full">
        <button
          type="button"
          onClick={handleReset}
          disabled={selectedBricks.length === 0 || hasValidated}
          className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Réinitialiser</span>
        </button>

        <button
          type="button"
          onClick={handleValidate}
          disabled={selectedBricks.length === 0 || hasValidated}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none"
        >
          <Check className="w-6 h-6 stroke-[3]" />
          <span>Vérifier</span>
        </button>
      </div>
    </div>
  );
};
