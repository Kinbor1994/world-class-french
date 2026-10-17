"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* En-tête avec navigation de retour */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-academic-border dark:border-academic-dark-border">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au syllabus</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-md border border-amber-200 dark:border-amber-800">
          <Brain className="w-4 h-4" />
          <span>Moteur fata.srs (Ebbinghaus & FSRS)</span>
        </div>
      </div>

      {/* Métrologie mémorielle & Projection temporelle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {/* Rétention globale */}
        <div className="p-5 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted">
              Indice Global de Rétention
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold font-serif text-academic-ink dark:text-slate-100">
                {avgRetention}%
              </span>
              <span className="text-xs font-mono text-academic-emerald dark:text-emerald-400">
                {avgRetention >= 75 ? "Consolidé" : "En érosion"}
              </span>
            </div>
          </div>
          <div className="w-full h-1.5 bg-academic-border-subtle dark:bg-academic-dark-border rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-academic-gold rounded-full transition-all duration-500"
              style={{ width: `${avgRetention}%` }}
            />
          </div>
          <span className="text-[10px] text-academic-muted dark:text-academic-dark-muted mt-2 font-mono">
            Seuil critique de réactivation : {retentionThreshold}%
          </span>
        </div>

        {/* Cartes en alerte */}
        <div className="p-5 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted">
              Fiches à Rappeler (Priorité Haute)
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold font-serif text-academic-bordeaux dark:text-rose-400">
                {dueCards.length}
              </span>
              <span className="text-xs text-academic-muted dark:text-academic-dark-muted font-sans">
                sur {srsCards.length} règles
              </span>
            </div>
          </div>
          <p className="text-xs text-academic-muted dark:text-academic-dark-muted mt-3 leading-relaxed font-sans">
            {dueCards.length > 0
              ? "Ces points de règle ont franchi le seuil d'amnésie et requièrent une réactivation immédiate."
              : "L'ensemble de vos notions est solidement ancré en mémoire vive."}
          </p>
        </div>

        {/* Projection temporelle */}
        <div className="p-5 bg-academic-paper dark:bg-academic-dark-card rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-academic-gold text-[10px] font-mono uppercase font-bold tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Simulateur d'Amnésie</span>
            </div>
            <div className="mt-2 text-xl font-bold font-serif text-academic-ink dark:text-slate-100">
              +{simulatedHoursOffset}h projetées
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <button
              type="button"
              onClick={() => simulateTimeAdvance(24)}
              className="flex-1 py-1.5 px-2.5 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-academic-ink dark:text-slate-100 rounded text-xs font-mono font-semibold hover:border-academic-gold transition-colors"
            >
              +24h
            </button>
            <button
              type="button"
              onClick={() => simulateTimeAdvance(48)}
              className="flex-1 py-1.5 px-2.5 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-academic-ink dark:text-slate-100 rounded text-xs font-mono font-semibold hover:border-academic-gold transition-colors"
            >
              +48h
            </button>
            {simulatedHoursOffset > 0 && (
              <button
                type="button"
                onClick={resetSimulatedTime}
                className="py-1.5 px-2 bg-academic-border-subtle dark:bg-academic-dark-border text-academic-muted dark:text-academic-dark-muted rounded text-xs font-mono font-semibold hover:text-academic-ink transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Courbe didactique d'Ebbinghaus en SVG haute précision */}
      <div className="p-6 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 pb-3 border-b border-academic-border-subtle dark:border-academic-dark-border">
          <h3 className="text-sm font-bold font-serif text-academic-ink dark:text-slate-100">
            Dynamique d'Érosion et Réactivation Spiralée (Loi d'Ebbinghaus)
          </h3>
          <span className="text-[11px] font-mono text-academic-gold">
            R(t) = 100 × e^(-t / S)
          </span>
        </div>

        <div className="w-full h-44 bg-academic-paper dark:bg-academic-dark-card rounded-lg p-4 flex items-center justify-center border border-academic-border-subtle dark:border-academic-dark-border">
          <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
            {/* Ligne de seuil critique 75% */}
            <line
              x1="40"
              y1="40"
              x2="480"
              y2="40"
              stroke="#B45309"
              strokeDasharray="4 4"
              strokeWidth="1.2"
            />
            <text x="44" y="34" fill="#B45309" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              Seuil de réactivation (75%)
            </text>

            {/* Courbe d'oubli passif sans réactivation */}
            <path
              d="M 40,10 Q 120,80 480,105"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="3 3"
            />

            {/* Courbe avec réactivations espacées fata.srs */}
            <path
              d="M 40,10 Q 80,45 110,48 L 110,10 Q 170,35 220,44 L 220,10 Q 340,25 480,28"
              fill="none"
              stroke="#065F46"
              strokeWidth="2.5"
            />

            {/* Points de rappel programmés */}
            <circle cx="40" cy="10" r="3.5" fill="#065F46" />
            <circle cx="110" cy="10" r="3.5" fill="#065F46" />
            <circle cx="220" cy="10" r="3.5" fill="#065F46" />
            <circle cx="480" cy="28" r="3.5" fill="#065F46" />

            {/* Axes temporels */}
            <text x="40" y="118" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="monospace">J0</text>
            <text x="110" y="118" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="monospace">J+1</text>
            <text x="220" y="118" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="monospace">J+3</text>
            <text x="350" y="118" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="monospace">J+7</text>
            <text x="480" y="118" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="monospace">J+21</text>
          </svg>
        </div>
      </div>

      {/* Fiche de rappel actif (Format bristol d'érudit) */}
      {dueCards.length > 0 && currentCard ? (
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-academic-muted dark:text-academic-dark-muted">
            <span className="font-mono">
              Fiche {activeCardIndex + 1} sur {dueCards.length}
            </span>
            <span className="font-mono text-academic-gold font-bold">
              {currentCard.ruleId} · {currentCard.chapterId}
            </span>
          </div>

          <div
            key={currentCard.id}
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[240px] bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card p-8 flex flex-col justify-between text-center cursor-pointer hover:border-academic-gold/60 transition-all select-none"
          >
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-academic-muted dark:text-academic-dark-muted">
                {isFlipped ? "Corrigé & Justification Métacognitive" : "Épreuve d'Active Recall"}
              </span>
              <h4 className="text-xl font-bold font-serif text-academic-ink dark:text-slate-100 mt-4 leading-relaxed">
                {isFlipped ? currentCard.back : currentCard.front}
              </h4>
              {isFlipped && (
                <div className="mt-4 p-4 bg-academic-paper dark:bg-academic-dark-card rounded-lg border border-academic-border-subtle dark:border-academic-dark-border text-xs text-academic-ink-light dark:text-slate-300 font-sans text-left leading-relaxed">
                  <span className="font-bold text-academic-gold block mb-1">Règle fondamentale :</span>
                  {currentCard.explanation}
                </div>
              )}
            </div>

            <div className="text-[11px] font-semibold text-academic-gold mt-4">
              {isFlipped ? "Indiquez votre degré de maîtrise ci-dessous :" : "Cliquer pour retourner la fiche"}
            </div>
          </div>

          {/* 4 Boutons de notation FSRS calibrés */}
          {isFlipped && (
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="grid grid-cols-4 gap-2 pt-2"
            >
              <button
                type="button"
                onClick={() => handleRating("again")}
                className="py-2.5 px-2 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-bordeaux text-academic-bordeaux dark:text-rose-400 font-semibold text-xs rounded-lg transition-colors flex flex-col items-center shadow-fine"
              >
                <span>À revoir</span>
                <span className="text-[10px] font-mono opacity-70 mt-0.5">&lt; 10 min</span>
              </button>

              <button
                type="button"
                onClick={() => handleRating("hard")}
                className="py-2.5 px-2 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-gold text-academic-gold dark:text-amber-400 font-semibold text-xs rounded-lg transition-colors flex flex-col items-center shadow-fine"
              >
                <span>Hésitant</span>
                <span className="text-[10px] font-mono opacity-70 mt-0.5">J+1</span>
              </button>

              <button
                type="button"
                onClick={() => handleRating("good")}
                className="py-2.5 px-2 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-navy text-academic-navy dark:text-slate-100 font-semibold text-xs rounded-lg transition-colors flex flex-col items-center shadow-fine"
              >
                <span>Maîtrisé</span>
                <span className="text-[10px] font-mono opacity-70 mt-0.5">J+3</span>
              </button>

              <button
                type="button"
                onClick={() => handleRating("easy")}
                className="py-2.5 px-2 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-emerald text-academic-emerald dark:text-emerald-400 font-semibold text-xs rounded-lg transition-colors flex flex-col items-center shadow-fine"
              >
                <span>Parfait</span>
                <span className="text-[10px] font-mono opacity-70 mt-0.5">J+7</span>
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="p-8 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border rounded-xl text-center max-w-md mx-auto shadow-card">
          <CheckCircle className="w-10 h-10 text-academic-emerald mx-auto mb-3" />
          <h4 className="text-lg font-bold font-serif text-academic-ink dark:text-slate-100 mb-1">
            Toutes les fiches sont consolidées
          </h4>
          <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-normal leading-relaxed">
            Votre niveau de rétention mémorielle est optimal pour l'ensemble du cursus. Vous pouvez simuler l'érosion temporelle via le panneau ci-dessus.
          </p>
        </div>
      )}
    </div>
  );
};
