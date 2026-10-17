"use client";

import React, { useState } from "react";
import { Volume2, Clock, Check, HelpCircle } from "lucide-react";
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
      onAnswer(true, `Exactitude parfaite : « ${data.fullText} » a été fidèlement orthographié.`);
    } else {
      onAnswer(
        false,
        `Transcription inexacte. Vous avez consigné « ${userInput.trim()} » alors que la forme normée est « ${data.fullText} ».\nVérifiez l'accord et les signes diacritiques.`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Lecteur audio double cadence */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => handlePlayAudio(data.audioNormalRate || 1.0)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold shadow-fine hover:bg-slate-800 dark:hover:bg-white transition-all select-none"
        >
          <Volume2 className="w-4 h-4 text-academic-gold" />
          <span>Cadence normale (1.0x)</span>
        </button>

        <button
          type="button"
          onClick={() => handlePlayAudio(data.audioSlowRate || 0.65)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border text-academic-ink dark:text-slate-200 text-xs font-semibold hover:border-academic-gold transition-all select-none"
        >
          <Clock className="w-4 h-4 text-academic-muted" />
          <span>Cadence analytique (0.65x)</span>
        </button>
      </div>

      {/* Zone de saisie dactylographique */}
      <div className="w-full mb-2">
        <input
          type="text"
          value={userInput}
          disabled={hasValidated}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Consignez ici la phrase ou le syntagme entendu..."
          className="w-full px-4 py-3 text-base sm:text-lg font-serif bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border rounded-xl focus:outline-none focus:border-academic-gold text-academic-ink dark:text-slate-100 shadow-fine transition-all placeholder:text-academic-muted placeholder:font-sans placeholder:text-sm"
        />
      </div>

      {/* Clavier virtuel d'accents */}
      <FrenchAccentKeyboard onInsertChar={handleInsertChar} />

      {/* Indice didactique optionnel */}
      {data.hints && data.hints.length > 0 && (
        <div className="w-full flex flex-col items-center my-3">
          {showHintIndex > 0 ? (
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-900 dark:text-amber-200 text-xs font-medium w-full text-center">
              Indice morphosyntaxique : {data.hints[showHintIndex - 1]}
            </div>
          ) : (
            <button
              type="button"
              onClick={handleShowNextHint}
              className="text-[11px] font-semibold text-academic-gold hover:underline flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Demander un indice didactique</span>
            </button>
          )}
        </div>
      )}

      {/* Validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={userInput.trim().length === 0 || hasValidated}
        className="flex items-center gap-1.5 px-6 py-2.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all mt-3"
      >
        <Check className="w-4 h-4" />
        <span>Soumettre la transcription</span>
      </button>
    </div>
  );
};
