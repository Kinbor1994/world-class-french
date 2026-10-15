"use client";

import React, { useState } from "react";
import { Volume2, Snail, Check, HelpCircle } from "lucide-react";
import type { DictationData } from "@/types/curriculum";
import { FrenchAccentKeyboard } from "./FrenchAccentKeyboard";
import { speakFrench } from "@/utils/speech";

interface InteractiveDictationProps {
  data: DictationData;
  speechRate: number;
  isAudioMuted: boolean;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const InteractiveDictation: React.FC<InteractiveDictationProps> = ({
  data,
  isAudioMuted,
  onAnswer,
}) => {
  const [userInput, setUserInput] = useState<string>("");
  const [showHintIndex, setShowHintIndex] = useState<number>(0);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handlePlayAudio = (rate: number) => {
    speakFrench(data.fullText, rate, isAudioMuted);
  };

  const handleInsertChar = (char: string) => {
    if (hasValidated) return;
    setUserInput((prev) => prev + char);
  };

  const handleShowNextHint = () => {
    if (showHintIndex < data.hints.length) {
      setShowHintIndex((prev) => prev + 1);
    }
  };

  const handleValidate = () => {
    if (hasValidated) return;
    setHasValidated(true);

    const cleanUser = userInput.trim().toLowerCase();
    const cleanTarget = data.fullText.trim().toLowerCase();

    if (cleanUser === cleanTarget) {
      onAnswer(true, `Parfait ! Vous avez orthographié exactement « ${data.fullText} ».`);
    } else {
      onAnswer(
        false,
        `Attention : vous avez écrit « ${userInput.trim()} » au lieu de « ${data.fullText} ».\nRespectez bien les accents et la morphologie exacte.`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Lecteur audio double vitesse */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => handlePlayAudio(data.audioNormalRate || 1.0)}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold shadow-duo-blue active:translate-y-1 active:shadow-none transition-all"
        >
          <Volume2 className="w-5 h-5" />
          <span>Écoute normale (1.0x)</span>
        </button>

        <button
          type="button"
          onClick={() => handlePlayAudio(data.audioSlowRate || 0.65)}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-duo-gold active:translate-y-1 active:shadow-none transition-all"
        >
          <Snail className="w-5 h-5" />
          <span>Vitesse lente (0.65x)</span>
        </button>
      </div>

      {/* Zone de saisie */}
      <div className="w-full mb-3">
        <input
          type="text"
          value={userInput}
          disabled={hasValidated}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Tapez ici le mot ou la phrase entendue..."
          className="w-full px-5 py-4 text-xl font-medium bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-2xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 text-slate-800 dark:text-slate-100 shadow-sm"
        />
      </div>

      {/* Clavier virtuel d'accents français */}
      <FrenchAccentKeyboard onInsertChar={handleInsertChar} />

      {/* Indice optionnel */}
      {data.hints && data.hints.length > 0 && (
        <div className="w-full flex flex-col items-center my-3">
          {showHintIndex > 0 ? (
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl text-amber-800 dark:text-amber-200 text-sm font-medium w-full text-center">
              💡 Indice : {data.hints[showHintIndex - 1]}
            </div>
          ) : (
            <button
              type="button"
              onClick={handleShowNextHint}
              className="text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1 hover:underline"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Besoin d'un indice ?</span>
            </button>
          )}
        </div>
      )}

      {/* Bouton de validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={userInput.trim().length === 0 || hasValidated}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none mt-4"
      >
        <Check className="w-6 h-6 stroke-[3]" />
        <span>Vérifier ma dictée</span>
      </button>
    </div>
  );
};
