"use client";

import React from "react";

interface FrenchAccentKeyboardProps {
  onInsertChar: (char: string) => void;
}

const ACCENTS = ["é", "è", "ê", "ë", "à", "â", "ù", "û", "î", "ï", "ô", "ç", "œ", "æ", "’"];

export const FrenchAccentKeyboard: React.FC<FrenchAccentKeyboardProps> = ({ onInsertChar }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 p-2 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 my-3">
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 select-none">
        Accents :
      </span>
      {ACCENTS.map((char) => (
        <button
          key={char}
          type="button"
          onClick={() => onInsertChar(char)}
          className="w-8 h-8 flex items-center justify-center font-bold text-base bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/40 active:scale-95 transition-all select-none"
        >
          {char}
        </button>
      ))}
    </div>
  );
};
