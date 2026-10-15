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
        `Bravo ! La forme exacte est bien « ${data.expectedAnswer} ».\nForme de base : ${data.baseForm}.`
      );
    } else {
      onAnswer(
        false,
        `Vous avez répondu « ${userInput.trim()} ».\nLa forme attendue était « ${data.expectedAnswer} ».\nRappel : ${data.hint1}`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Phrase avec trou inséré */}
      <div className="w-full p-6 bg-slate-50 dark:bg-slate-800/80 rounded-3xl border-2 border-slate-200 dark:border-slate-700 mb-6 flex flex-wrap items-center justify-center gap-2 text-xl font-medium text-slate-800 dark:text-slate-100">
        <span>{data.sentenceBefore}</span>
        <input
          type="text"
          value={userInput}
          disabled={hasValidated}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="..."
          className="w-36 text-center font-bold px-3 py-1.5 bg-white dark:bg-slate-900 border-b-4 border-emerald-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-slate-900 dark:text-slate-100 text-xl"
        />
        <span>{data.sentenceAfter}</span>
      </div>

      {/* Clavier d'accents */}
      <FrenchAccentKeyboard onInsertChar={handleInsertChar} />

      {/* Système d'indices progressifs à deux niveaux */}
      <div className="w-full flex flex-col items-center my-3">
        {hintLevel >= 1 && (
          <div className="p-3 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl text-sky-800 dark:text-sky-200 text-sm font-medium w-full text-center mb-2">
            💡 Indice 1 (Règle) : {data.hint1}
          </div>
        )}
        {hintLevel >= 2 && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl text-amber-800 dark:text-amber-200 text-sm font-medium w-full text-center mb-2">
            ✨ Indice 2 (Terminaison) : {data.hint2}
          </div>
        )}

        {hintLevel < 2 && (
          <button
            type="button"
            onClick={handleNextHint}
            className="text-xs text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1 hover:underline"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>
              {hintLevel === 0 ? "Besoin d'un indice de règle ?" : "Révéler l'indice de terminaison"}
            </span>
          </button>
        )}
      </div>

      {/* Bouton de validation */}
      <button
        type="button"
        onClick={handleValidate}
        disabled={userInput.trim().length === 0 || hasValidated}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none mt-4"
      >
        <Check className="w-6 h-6 stroke-[3]" />
        <span>Vérifier l'accord</span>
      </button>
    </div>
  );
};
