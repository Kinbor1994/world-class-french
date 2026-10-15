"use client";

import React, { useState } from "react";
import {
  Flame,
  Zap,
  Heart,
  Brain,
  Timer,
  Bell,
  Compass,
  ChevronDown,
} from "lucide-react";
import { useAppStore, computeCardRetention } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type { Stage } from "@/types/curriculum";

interface NavbarProps {
  onOpenDiagnostic: () => void;
  onOpenSprint: () => void;
  onOpenSrs: () => void;
  onOpenReminders: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDiagnostic,
  onOpenSprint,
  onOpenSrs,
  onOpenReminders,
}) => {
  const {
    currentStage,
    setStage,
    xp,
    streak,
    hearts,
    srsCards,
    simulatedHoursOffset,
    retentionThreshold,
  } = useAppStore();

  const [isStageMenuOpen, setIsStageMenuOpen] = useState<boolean>(false);

  const stages: readonly Stage[] = curriculumData.stages as Stage[];
  const currentStageInfo = stages.find((s) => s.id === currentStage);

  // Cartes dues
  const dueCount = srsCards.filter(
    (c) => computeCardRetention(c, simulatedHoursOffset) <= retentionThreshold
  ).length;

  const isInfiniteHearts = currentStage <= 2;

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b-2 border-slate-200 dark:border-slate-800"
    >
      <div
        suppressHydrationWarning
        className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between gap-2"
      >
        {/* Logo & Sélecteur de Palier */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsStageMenuOpen(!isStageMenuOpen)}
              className="flex items-center gap-2 p-1.5 pr-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all bg-slate-50 dark:bg-slate-800/80"
            >
              <span className="text-2xl select-none">
                {currentStageInfo?.badge.split(" ")[0] ?? "🌱"}
              </span>
              <div className="text-left hidden sm:block">
                <div className="text-[10px] uppercase font-black tracking-wider text-slate-400">
                  Palier {currentStage}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1">
                  <span>{currentStageInfo?.shortName}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </button>

            {/* Menu déroulant des 8 Paliers */}
            {isStageMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-2xl p-2 z-50 flex flex-col gap-1 max-h-96 overflow-y-auto">
                <div className="px-3 py-2 text-[10px] uppercase font-black text-slate-400 border-b border-slate-100 dark:border-slate-700">
                  Choisir un Palier (du CI au C2+)
                </div>
                {stages.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      setStage(st.id);
                      setIsStageMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-2.5 rounded-2xl text-left transition-all ${
                      st.id === currentStage
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold"
                        : "hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 font-medium"
                    }`}
                  >
                    <span className="text-xl select-none">{st.badge.split(" ")[0]}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate">{st.name}</div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {st.hasInfiniteHearts ? "❤️ Vies illimitées" : "5 vies"}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gamification Stats (Streak, XP, Hearts, SRS) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Série 🔥 */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/40 rounded-full border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 font-black text-xs select-none">
            <Flame className="w-4 h-4 fill-amber-500" />
            <span>{streak}</span>
          </div>

          {/* Points d'XP ⚡ */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 dark:bg-sky-950/40 rounded-full border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 font-black text-xs select-none">
            <Zap className="w-4 h-4 fill-sky-500" />
            <span>{xp} XP</span>
          </div>

          {/* Vies ❤️ */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 rounded-full border border-rose-200 dark:border-rose-800 text-rose-500 font-black text-xs select-none">
            <Heart className="w-4 h-4 fill-rose-500" />
            <span>{isInfiniteHearts ? "∞" : hearts}</span>
          </div>

          {/* Rappels SRS dus 🧠 */}
          <button
            type="button"
            onClick={onOpenSrs}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-black text-xs transition-all select-none ${
              dueCount > 0
                ? "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800 animate-pulse"
                : "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:text-purple-600"
            }`}
          >
            <Brain className="w-4 h-4" />
            <span className="hidden sm:inline">Rappels :</span>
            <span>{dueCount}</span>
          </button>
        </div>

        {/* Boutons d'Action Rapide */}
        <div className="flex items-center gap-2">
          {/* Daily Sprint */}
          <button
            type="button"
            onClick={onOpenSprint}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-2xl shadow-duo-gold active:translate-y-1 active:shadow-none transition-all select-none"
          >
            <Timer className="w-4 h-4" />
            <span className="hidden md:inline">Daily Sprint</span>
          </button>

          {/* Rappels / Agenda */}
          <button
            type="button"
            onClick={onOpenReminders}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            title="Configurer les rappels et exporter l'agenda .ics"
          >
            <Bell className="w-5 h-5" />
          </button>

          {/* Re-diagnostic */}
          <button
            type="button"
            onClick={onOpenDiagnostic}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            title="Refaire le diagnostic de positionnement"
          >
            <Compass className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
