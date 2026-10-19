"use client";

import React from "react";
import {
  BookOpen,
  Brain,
  Timer,
  Award,
  MoreHorizontal,
} from "lucide-react";
import { useAppStore, computeCardRetention } from "@/store/useAppStore";

interface BottomNavProps {
  isSrsActive: boolean;
  onSelectPath: () => void;
  onOpenSrs: () => void;
  onOpenSprint: () => void;
  onOpenPracticalWork: () => void;
  onOpenTools: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  isSrsActive,
  onSelectPath,
  onOpenSrs,
  onOpenSprint,
  onOpenPracticalWork,
  onOpenTools,
}) => {
  const { srsCards, simulatedHoursOffset, retentionThreshold, syncStatus } = useAppStore();

  const dueCount = srsCards.filter(
    (c) => computeCardRetention(c, simulatedHoursOffset) <= retentionThreshold
  ).length;

  return (
    <nav
      aria-label="Navigation principale mobile"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 dark:bg-academic-dark-surface/95 backdrop-blur-md border-t border-academic-border dark:border-academic-dark-border pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1 px-1 shadow-elevated"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Onglet 1 : Parcours */}
        <button
          type="button"
          onClick={onSelectPath}
          aria-current={!isSrsActive ? "page" : undefined}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all ${
            !isSrsActive
              ? "text-academic-gold font-bold"
              : "text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink dark:hover:text-slate-100"
          }`}
        >
          <div className="relative">
            <BookOpen className={`w-5 h-5 transition-transform ${!isSrsActive ? "scale-110" : ""}`} />
            {!isSrsActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-academic-gold" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 font-sans">
            Parcours
          </span>
        </button>

        {/* Onglet 2 : Mémoire SRS */}
        <button
          type="button"
          onClick={onOpenSrs}
          aria-current={isSrsActive ? "page" : undefined}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all ${
            isSrsActive
              ? "text-indigo-600 dark:text-indigo-400 font-bold"
              : "text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink dark:hover:text-slate-100"
          }`}
        >
          <div className="relative">
            <Brain className={`w-5 h-5 transition-transform ${isSrsActive ? "scale-110" : ""}`} />
            {dueCount > 0 ? (
              <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 min-w-[16px] text-center rounded-full bg-indigo-600 text-white text-[9px] font-mono font-bold">
                {dueCount}
              </span>
            ) : (
              <span className="absolute -top-0.5 -right-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
            {isSrsActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 font-sans">
            Mémoire
          </span>
        </button>

        {/* Onglet 3 : Sprint Quotidien (Bouton central d'action) */}
        <button
          type="button"
          onClick={onOpenSprint}
          className="flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-academic-navy dark:text-slate-100 group transition-all"
        >
          <div className="w-9 h-9 rounded-xl bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy flex items-center justify-center shadow-fine group-active:scale-95 transition-transform">
            <Timer className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-academic-ink dark:text-slate-100 tracking-tight mt-0.5 font-sans">
            Sprint
          </span>
        </button>

        {/* Onglet 4 : Ateliers & TP */}
        <button
          type="button"
          onClick={onOpenPracticalWork}
          className="flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink dark:hover:text-slate-100 transition-all"
        >
          <div className="relative">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-1 font-sans">
            Ateliers
          </span>
        </button>

        {/* Onglet 5 : Plus (Tiroir Outils & Cloud) */}
        <button
          type="button"
          onClick={onOpenTools}
          className="flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink dark:hover:text-slate-100 transition-all"
        >
          <div className="relative">
            <MoreHorizontal className="w-5 h-5" />
            {syncStatus === "error" && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            )}
            {syncStatus === "syncing" && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-1 font-sans">
            Plus
          </span>
        </button>
      </div>
    </nav>
  );
};
