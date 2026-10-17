"use client";

import React, { useState } from "react";
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
      onAnswer(true, `Excellente discrimination phonétique : « ${label} » réalise bien le son ciblé.`);
    } else {
      onAnswer(false, `Ce n'est pas le mot « ${label} ». Écoutez attentivement l'attaque phonétique.`);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-full">
        {data.cards.map((card) => {
          const isSelected = selectedId === card.id;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleCardClick(card.id, card.label, card.isCorrect)}
              className={`flex flex-col items-center justify-center p-5 rounded-xl border text-center transition-all ${
                isSelected
                  ? card.isCorrect
                    ? "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 shadow-fine"
                    : "border-amber-500 bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100 shadow-fine"
                  : "border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface text-academic-ink dark:text-slate-100 hover:border-academic-gold/60 shadow-fine"
              }`}
            >
              <div className="w-14 h-14 rounded-lg bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border flex items-center justify-center text-3xl mb-3 select-none">
                {card.imageEmoji}
              </div>

              <span className="text-base font-bold font-serif mb-2 tracking-wide">
                {card.label}
              </span>

              <div className="inline-flex items-center gap-1 text-[11px] text-academic-muted dark:text-academic-dark-muted font-medium">
                <Volume2 className="w-3 h-3 text-academic-gold" />
                <span>Écouter</span>
              </div>

              {isSelected && (
                <div className="mt-2">
                  {card.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
