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

    const userCompact = selectedBricks.join("").trim().toLowerCase();
    const correctCompact = data.correctSequence.join("").trim().toLowerCase();

    const isMatch = userString === correctString || userCompact === correctCompact;

    if (isMatch) {
      speakFrench(data.targetPhrase, speechRate, isAudioMuted);
      onAnswer(true, `Composition exacte : « ${data.targetPhrase} » est parfaitement ordonnancé.`);
    } else {
      onAnswer(
        false,
        `L'ordre attendu était : ${data.correctSequence.join(" · ")}.`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Zone de composition typographique */}
      <div className="w-full min-h-[80px] p-4 bg-academic-paper dark:bg-academic-dark-card rounded-xl border border-dashed border-academic-border dark:border-academic-dark-border flex flex-wrap items-center justify-center gap-2 mb-6">
        <AnimatePresence>
          {selectedBricks.length === 0 ? (
            <span className="text-xs text-academic-muted dark:text-academic-dark-muted font-normal select-none">
              Sélectionnez les segments ci-dessous pour composer la proposition...
            </span>
          ) : (
            selectedBricks.map((brick, idx) => (
              <motion.button
                key={`${brick}-${idx}`}
                type="button"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={() => handleRemoveBrick(brick, idx)}
                className="px-3.5 py-1.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy font-serif font-bold rounded-lg shadow-fine flex items-center gap-1 text-base select-none hover:bg-slate-800 dark:hover:bg-white"
              >
                <span>{brick}</span>
              </motion.button>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Segments disponibles */}
      <div className="flex flex-wrap justify-center gap-2.5 w-full mb-6">
        {availableBricks.map((brick, idx) => (
          <button
            key={`${brick}-${idx}`}
            type="button"
            onClick={() => handleSelectBrick(brick, idx)}
            className="px-3.5 py-2 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border hover:border-academic-gold dark:hover:border-academic-gold text-academic-ink dark:text-slate-100 font-serif font-bold text-base rounded-lg shadow-fine transition-all select-none"
          >
            {brick}
          </button>
        ))}
      </div>

      {/* Boutons d'action */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleReset}
          disabled={selectedBricks.length === 0 || hasValidated}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink dark:hover:text-slate-200 disabled:opacity-40 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Réinitialiser</span>
        </button>

        <button
          type="button"
          onClick={handleValidate}
          disabled={selectedBricks.length === 0 || hasValidated}
          className="flex items-center gap-1.5 px-5 py-2 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all"
        >
          <Check className="w-4 h-4" />
          <span>Vérifier l'assemblage</span>
        </button>
      </div>
    </div>
  );
};
