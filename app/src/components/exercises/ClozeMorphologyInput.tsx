"use client";

import React, { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import type { ClozeMorphologyData } from "@/types/curriculum";
import { FrenchAccentKeyboard } from "./FrenchAccentKeyboard";

interface ClozeMorphologyInputProps {
  data: ClozeMorphologyData;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const ClozeMorphologyInput: React.FC<ClozeMorphologyInputProps> = ({
  data,
  onAnswer,
}) => {
  const [userInput, setUserInput] = useState<string>("");
  const [hintLevel, setHintLevel] = useState<number>(0);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handleInsertChar = (char: string) => {
    if (hasValidated) return;
    setUserInput((prev) => prev + char);
  };

  const handleNextHint = () => {
    if (hintLevel < 2) {
      setHintLevel((prev) => prev + 1);
    }
  };

  const handleValidate = () => {
    if (hasValidated) return;
    setHasValidated(true);

    const cleanUser = userInput.trim().toLowerCase();
    const isAccepted =
      cleanUser === data.expectedAnswer.toLowerCase() ||
      data.acceptableAnswers.some((a) => a.toLowerCase() === cleanUser);

    if (isAccepted) {
      onAnswer(
        true,
        `Morphologie exacte : « ${data.expectedAnswer} » est la flexion attendue.\nForme de base : ${data.baseForm}.`
      );
    } else {
      onAnswer(
        false,
        `Flexion erronée (« ${userInput.trim()} »). La graphie attendue était « ${data.expectedAnswer} ».\nRègle : ${data.hint1}`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Phrase avec champ lacunaire */}
      <div className="w-full p-6 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card mb-4 flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl font-serif text-academic-ink dark:text-slate-100 leading-relaxed text-center">
        <span>{data.sentenceBefore}</span>
        <input
          type="text"
          value={userInput}
          disabled={hasValidated}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="..."
          className="w-36 text-center font-bold font-serif px-2 py-1 bg-academic-paper dark:bg-academic-dark-card border-b-2 border-academic-gold rounded focus:outline-none text-academic-ink dark:text-slate-100 text-lg transition-all"
        />
        <span>{data.sentenceAfter}</span>
      </div>

      {/* Clavier virtuel d'accents */}
      <FrenchAccentKeyboard onInsertChar={handleInsertChar} />

      {/* Indices didactiques gradués */}
      <div className="w-full flex flex-col items-center my-2 space-y-2">
        {hintLevel >= 1 && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-900 dark:text-amber-200 text-xs font-sans w-full text-center">
            Indice de règle : {data.hint1}
          </div>
        )}
        {hintLevel >= 2 && (
          <div className="p-3 bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border rounded-lg text-academic-ink dark:text-slate-200 text-xs font-mono w-full text-center">
            Indice désinentiel : {data.hint2}
          </div>
        )}

        {hintLevel < 2 && (
          <button
            type="button"
            onClick={handleNextHint}
            className="text-[11px] text-academic-gold font-semibold flex items-center gap-1 hover:underline pt-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>
              {hintLevel === 0 ? "Consulter un indice de règle" : "Révéler la désinence"}
            </span>
          </button>
        )}
      </div>

      {/* Validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={userInput.trim().length === 0 || hasValidated}
        className="w-full flex items-center justify-center gap-2 py-3 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white disabled:opacity-40 transition-all select-none mt-4"
      >
        <Check className="w-4 h-4" />
        <span>Vérifier la désinence</span>
      </button>
    </div>
  );
};
