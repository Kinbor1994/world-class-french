"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  FastForward,
  RotateCcw,
  Clock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { useAppStore, computeCardRetention } from "@/store/useAppStore";
import type { SRSCard } from "@/types/curriculum";

interface SrsReviewViewProps {
  onBack: () => void;
}

export const SrsReviewView: React.FC<SrsReviewViewProps> = ({ onBack }) => {
  const {
    srsCards,
    retentionThreshold,
    simulatedHoursOffset,
    reviewSrsCard,
    simulateTimeAdvance,
    resetSimulatedTime,
  } = useAppStore();

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Cartes dues : retention <= seuil (75%)
  const dueCards = srsCards.filter(
    (c) => computeCardRetention(c, simulatedHoursOffset) <= retentionThreshold
  );

  // Rétention moyenne globale
  const avgRetention = Math.round(
    srsCards.reduce(
      (acc, c) => acc + computeCardRetention(c, simulatedHoursOffset),
      0
    ) / Math.max(1, srsCards.length)
  );

  const currentCard: SRSCard | undefined = dueCards[activeCardIndex];

  const handleRating = (rating: "again" | "hard" | "good" | "easy") => {
    if (!currentCard) return;
    reviewSrsCard(currentCard.id, rating);
    setIsFlipped(false);
    if (activeCardIndex >= dueCards.length - 1) {
      setActiveCardIndex(0);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* En-tête avec retour */}
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour aux leçons</span>
        </button>

        <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 font-extrabold text-sm px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800">
          <Brain className="w-5 h-5 text-purple-600" />
          <span>Moteur fata.srs (Ebbinghaus & FSRS)</span>
        </div>
      </div>

      {/* Tableau de bord mémoriel & Simulateur Temporel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Jauge globale de rétention */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Rétention Globale
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-black text-slate-800 dark:text-slate-100">
                {avgRetention}%
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {avgRetention >= 75 ? "Optimal" : "Fragile"}
              </span>
            </div>
          </div>
          <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full mt-4 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                avgRetention >= 75 ? "bg-duo-green" : "bg-amber-500"
              }`}
              style={{ width: `${avgRetention}%` }}
            />
          </div>
          <span className="text-xs text-slate-400 mt-2 font-medium">
            Seuil de rappel critique : {retentionThreshold}%
          </span>
        </div>

        {/* Compteur de cartes dues */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Cartes en Alerte (Due Now)
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-black text-rose-500">
                {dueCards.length}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                sur {srsCards.length} compétences
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
            {dueCards.length > 0
              ? "Ces cartes ont franchi le seuil d'oubli et nécessitent une réactivation immédiate."
              : "Mémoire parfaitement consolidée ! Aucune carte en péril aujourd'hui."}
          </p>
        </div>

        {/* Simulateur temporel (+24h, +48h) */}
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl border-2 border-indigo-200 dark:border-indigo-900/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Simulateur Temporel</span>
            </div>
            <div className="mt-2 text-2xl font-black text-indigo-950 dark:text-indigo-200">
              +{simulatedHoursOffset}h avancées
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              type="button"
              onClick={() => simulateTimeAdvance(24)}
              className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>+24h</span>
            </button>
            <button
              type="button"
              onClick={() => simulateTimeAdvance(48)}
              className="flex-1 py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>+48h</span>
            </button>
            {simulatedHoursOffset > 0 && (
              <button
                type="button"
                onClick={resetSimulatedTime}
                className="py-2 px-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Courbe interactive d'Ebbinghaus en SVG */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
            Courbe d'Oubli d'Ebbinghaus & Réactivation Spiralée
          </h3>
          <span className="text-xs font-mono font-bold text-slate-400">
            R(t) = 100 × e^(-t / S)
          </span>
        </div>

        <div className="w-full h-44 bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 flex items-center justify-center">
          <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
            {/* Ligne de seuil 75% */}
            <line
              x1="40"
              y1="40"
              x2="480"
              y2="40"
              stroke="#F43F5E"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <text x="44" y="34" fill="#F43F5E" fontSize="9" fontWeight="bold">
              Seuil d'oubli (75%)
            </text>

            {/* Courbe 1 : Oubli sans rappel */}
            <path
              d="M 40,10 Q 120,80 480,105"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="2 2"
            />

            {/* Courbe 2 : Avec rappels espacés fata.srs (dents de scie montantes) */}
            <path
              d="M 40,10 Q 80,45 110,48 L 110,10 Q 170,35 220,44 L 220,10 Q 340,25 480,28"
              fill="none"
              stroke="#58CC02"
              strokeWidth="3.5"
            />

            {/* Points de consolidation */}
            <circle cx="40" cy="10" r="4.5" fill="#58CC02" />
            <circle cx="110" cy="10" r="4.5" fill="#58CC02" />
            <circle cx="220" cy="10" r="4.5" fill="#58CC02" />
            <circle cx="480" cy="28" r="4.5" fill="#58CC02" />

            {/* Labels de jours */}
            <text x="40" y="118" fill="#64748B" fontSize="9" textAnchor="middle">J0</text>
            <text x="110" y="118" fill="#64748B" fontSize="9" textAnchor="middle">J+1</text>
            <text x="220" y="118" fill="#64748B" fontSize="9" textAnchor="middle">J+3</text>
            <text x="350" y="118" fill="#64748B" fontSize="9" textAnchor="middle">J+7</text>
            <text x="480" y="118" fill="#64748B" fontSize="9" textAnchor="middle">J+21</text>
          </svg>
        </div>
      </div>

      {/* Espace de révision de carte active */}
      {dueCards.length > 0 && currentCard ? (
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
            <span>
              Carte {activeCardIndex + 1} sur {dueCards.length}
            </span>
            <span className="font-mono text-purple-600 dark:text-purple-400">
              {currentCard.ruleId} · {currentCard.chapterId}
            </span>
          </div>

          <motion.div
            key={currentCard.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full min-h-[260px] bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-lg p-8 flex flex-col justify-between mb-6 text-center cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-slate-400">
                {isFlipped ? "Réponse & Règle" : "Rappel Actif (Question)"}
              </span>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-4 leading-relaxed">
                {isFlipped ? currentCard.back : currentCard.front}
              </h4>
              {isFlipped && (
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/40 rounded-2xl border border-purple-200 dark:border-purple-800 text-xs text-purple-800 dark:text-purple-300 font-medium text-left">
                  💡 {currentCard.explanation}
                </div>
              )}
            </div>

            <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-4">
              {isFlipped ? "Évaluez votre facilité ci-dessous :" : "Touchez la carte pour révéler la réponse"}
            </div>
          </motion.div>

          {/* 4 Boutons de notation FSRS */}
          {isFlipped && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="grid grid-cols-4 gap-2.5"
            >
              <button
                type="button"
                onClick={() => handleRating("again")}
                className="py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-2xl shadow-duo-red active:translate-y-1 active:shadow-none transition-all flex flex-col items-center"
              >
                <span>À revoir</span>
                <span className="text-[10px] opacity-80 mt-0.5">&lt; 10 min</span>
              </button>

              <button
                type="button"
                onClick={() => handleRating("hard")}
                className="py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-2xl shadow-duo-gold active:translate-y-1 active:shadow-none transition-all flex flex-col items-center"
              >
                <span>Difficile</span>
                <span className="text-[10px] opacity-80 mt-0.5">1 jour</span>
              </button>

              <button
                type="button"
                onClick={() => handleRating("good")}
                className="py-3 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs rounded-2xl shadow-duo-blue active:translate-y-1 active:shadow-none transition-all flex flex-col items-center"
              >
                <span>Correct</span>
                <span className="text-[10px] opacity-80 mt-0.5">3 jours</span>
              </button>

              <button
                type="button"
                onClick={() => handleRating("easy")}
                className="py-3 bg-duo-green hover:bg-emerald-600 text-white font-extrabold text-xs rounded-2xl shadow-duo-green active:translate-y-1 active:shadow-none transition-all flex flex-col items-center"
              >
                <span>Facile</span>
                <span className="text-[10px] opacity-80 mt-0.5">7 jours</span>
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 rounded-3xl text-center max-w-md mx-auto">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h4 className="text-xl font-black text-emerald-900 dark:text-emerald-100 mb-1">
            Toutes les cartes sont à jour !
          </h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
            Votre rétention mémoire est au sommet. Utilisez le bouton « +24h » ci-dessus pour observer l'érosion future de la courbe d'Ebbinghaus.
          </p>
        </div>
      )}
    </div>
  );
};
