"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, CheckCircle2, XCircle } from "lucide-react";
import type { VisualSoundMatchData } from "@/types/curriculum";
import { speakFrench } from "@/utils/speech";

interface VisualSoundMatchProps {
  data: VisualSoundMatchData;
  speechRate: number;
  isAudioMuted: boolean;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const VisualSoundMatch: React.FC<VisualSoundMatchProps> = ({
  data,
  speechRate,
  isAudioMuted,
  onAnswer,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleCardClick = (cardId: string, label: string, isCorrect: boolean) => {
    setSelectedId(cardId);
    speakFrench(label, speechRate, isAudioMuted);

    if (isCorrect) {
      onAnswer(true, `Parfait ! « ${label} » correspond exactement au son attendu.`);
    } else {
      onAnswer(false, `Ce n'est pas tout à fait « ${label} ». Réécoute bien le son cible.`);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-full">
        {data.cards.map((card) => {
          const isSelected = selectedId === card.id;
          return (
            <motion.button
              key={card.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(card.id, card.label, card.isCorrect)}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all shadow-md ${
                isSelected
                  ? card.isCorrect
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200"
                    : "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:border-sky-300"
              }`}
            >
              <span className="text-6xl mb-3 filter drop-shadow-sm select-none">
                {card.imageEmoji}
              </span>
              <span className="text-xl font-bold mb-2 tracking-wide">
                {card.label}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-semibold bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Écouter</span>
              </div>
              {isSelected && (
                <div className="mt-2">
                  {card.isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-500" />
                  )}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
