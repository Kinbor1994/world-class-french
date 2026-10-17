"use client";

import React from "react";

interface FrenchAccentKeyboardProps {
  onInsertChar: (char: string) => void;
}

const ACCENTS = ["é", "è", "ê", "ë", "à", "â", "ù", "û", "î", "ï", "ô", "ç", "œ", "æ", "’"];

export const FrenchAccentKeyboard: React.FC<FrenchAccentKeyboardProps> = ({ onInsertChar }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 p-2 bg-academic-paper dark:bg-academic-dark-card rounded-lg border border-academic-border-subtle dark:border-academic-dark-border my-3 w-full">
      <span className="text-[10px] font-mono uppercase font-bold text-academic-muted dark:text-academic-dark-muted mr-1 select-none">
        Caractères diacritiques :
      </span>
      {ACCENTS.map((char) => (
        <button
          key={char}
          type="button"
          onClick={() => onInsertChar(char)}
          className="w-7 h-7 flex items-center justify-center font-serif font-bold text-sm bg-white dark:bg-academic-dark-surface text-academic-ink dark:text-slate-100 rounded border border-academic-border dark:border-academic-dark-border hover:border-academic-gold hover:text-academic-gold transition-colors select-none shadow-fine"
        >
          {char}
        </button>
      ))}
    </div>
  );
};
