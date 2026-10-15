"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Feather, Crown } from "lucide-react";
import type { RhetoricStudioData } from "@/types/curriculum";

interface RhetoricAndRegisterStudioProps {
  data: RhetoricStudioData;
  onAnswer: (isCorrect: boolean, feedback: string) => void;
}

export const RhetoricAndRegisterStudio: React.FC<RhetoricAndRegisterStudioProps> = ({
  data,
  onAnswer,
}) => {
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null);
  const [selectedRegisterIndex, setSelectedRegisterIndex] = useState<number | null>(null);
  const [hasValidated, setHasValidated] = useState<boolean>(false);

  const handleValidateFigure = () => {
    if (!selectedFigure || hasValidated) return;
    setHasValidated(true);

    const isMatch = selectedFigure === data.correctFigure;
    if (isMatch) {
      onAnswer(
        true,
        `Remarquable analyse stylistique ! Il s'agit bien d'une ${data.correctFigure}.\n${data.explanation ?? ""}`
      );
    } else {
      onAnswer(
        false,
        `Ce n'est pas une figure de type « ${selectedFigure} » mais une « ${data.correctFigure ?? ""} ».\n${data.explanation ?? ""}`
      );
    }
  };

  const handleValidateRegister = () => {
    if (selectedRegisterIndex === null || hasValidated) return;
    setHasValidated(true);

    const chosen = data.registerOptions?.[selectedRegisterIndex];
    if (chosen && chosen.register === "soutenu") {
      onAnswer(
        true,
        `Parfait ! « ${chosen.text} » relève avec éclat du registre soutenu et diplomatique.\n${data.explanation ?? ""}`
      );
    } else {
      onAnswer(
        false,
        `Cette formule relève du registre ${chosen?.register ?? "inadapté"}.\n${data.explanation ?? ""}`
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Citation ou texte analysé */}
      <div className="w-full p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl border-2 border-amber-200 dark:border-amber-800/60 mb-6 text-center shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Feather className="w-4 h-4" />
          <span>Atelier de Rhétorique & Stylistique Pure</span>
        </div>
        <p className="text-xl italic font-serif text-slate-800 dark:text-slate-100 leading-relaxed">
          {data.textToAnalyze}
        </p>
      </div>

      {/* Mode 1 : Identification de figure de style */}
      {data.mode === "identify_figure" && data.figureOptions && (
        <div className="w-full flex flex-col gap-3 mb-6">
          <div className="grid grid-cols-2 gap-3">
            {data.figureOptions.map((fig) => {
              const isSelected = selectedFigure === fig;
              return (
                <motion.button
                  key={fig}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => !hasValidated && setSelectedFigure(fig)}
                  className={`p-4 rounded-2xl border-2 font-bold text-base transition-all ${
                    isSelected
                      ? "border-amber-500 bg-amber-500 text-white shadow-duo-gold"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:border-amber-300"
                  }`}
                >
                  {fig}
                </motion.button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleValidateFigure}
            disabled={!selectedFigure || hasValidated}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none mt-2"
          >
            <Check className="w-6 h-6 stroke-[3]" />
            <span>Valider l'analyse stylistique</span>
          </button>
        </div>
      )}

      {/* Mode 2 : Reclassement de registres (Diplomatie) */}
      {data.mode === "classify_register" && data.registerOptions && (
        <div className="w-full flex flex-col gap-3 mb-6">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-center mb-1">
            Sélectionne la formulation relevant du protocole diplomatique et soutenu :
          </p>
          {data.registerOptions.map((opt, idx) => {
            const isSelected = selectedRegisterIndex === idx;
            return (
              <motion.button
                key={opt.text}
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => !hasValidated && setSelectedRegisterIndex(idx)}
                className={`p-4 rounded-2xl border-2 text-left font-medium transition-all ${
                  isSelected
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100 font-bold shadow-md"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300"
                }`}
              >
                {opt.text}
              </motion.button>
            );
          })}

          <button
            type="button"
            onClick={handleValidateRegister}
            disabled={selectedRegisterIndex === null || hasValidated}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-duo-green text-white font-extrabold text-lg rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none disabled:opacity-40 transition-all select-none mt-2"
          >
            <Crown className="w-6 h-6" />
            <span>Confirmer la formulation diplomatique</span>
          </button>
        </div>
      )}
    </div>
  );
};
