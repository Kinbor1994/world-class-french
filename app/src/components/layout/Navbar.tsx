"use client";

import React, { useState } from "react";
import {
  Brain,
  Timer,
  Bell,
  Compass,
  ChevronDown,
  Sparkles,
  BookOpen,
  Calendar,
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
    srsCards,
    simulatedHoursOffset,
    retentionThreshold,
  } = useAppStore();

  const [isStageMenuOpen, setIsStageMenuOpen] = useState<boolean>(false);

  const stages: readonly Stage[] = curriculumData.stages as Stage[];
  const currentStageInfo = stages.find((s) => s.id === currentStage);

  // Cartes dues au sens d'Ebbinghaus
  const dueCount = srsCards.filter(
    (c) => computeCardRetention(c, simulatedHoursOffset) <= retentionThreshold
  ).length;

  const isBeginnerStage = currentStage <= 2;

  // Regroupement didactique par cycle d'excellence
  const cycles = [
    {
      id: "c1",
      name: "Cycle 1 · Initiation & Fondations",
      stageIds: [1, 2, 3],
    },
    {
      id: "c2",
      name: "Cycle 2 · Autonomie, Syntaxe & Argumentation",
      stageIds: [4, 5, 6],
    },
    {
      id: "c3",
      name: "Cycle 3 · Haute Éloquence, Philologie & Concours",
      stageIds: [7, 8],
    },
  ];

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-40 bg-white/95 dark:bg-academic-dark-surface/95 backdrop-blur-md border-b border-academic-border dark:border-academic-dark-border transition-colors"
    >
      <div
        suppressHydrationWarning
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
      >
        {/* Identité Éditoriale & Sélecteur de Palier */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-academic-navy dark:bg-academic-dark-card border border-amber-900/20 dark:border-amber-500/20 flex items-center justify-center text-amber-500 dark:text-amber-400 font-serif font-bold text-sm shadow-fine">
              W
            </div>
            <div className="hidden lg:block leading-tight">
              <div className="text-[11px] font-bold tracking-widest uppercase text-academic-ink dark:text-slate-100 font-sans">
                World-Class French
              </div>
              <div className="text-[9px] uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted font-medium">
                Institut de Haute Langue
              </div>
            </div>
          </div>

          <div className="h-5 w-px bg-academic-border dark:bg-academic-dark-border hidden sm:block" />

          {/* Sélecteur de Palier par menu contextuel */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsStageMenuOpen(!isStageMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-academic-border dark:border-academic-dark-border hover:border-academic-gold/50 dark:hover:border-academic-gold/50 transition-all bg-academic-paper dark:bg-academic-dark-card text-academic-ink dark:text-slate-200"
            >
              <BookOpen className="w-3.5 h-3.5 text-academic-gold" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted block">
                  Palier {currentStage}
                </span>
                <span className="text-xs font-semibold text-academic-ink dark:text-slate-100 flex items-center gap-1 font-serif">
                  {currentStageInfo?.shortName}
                  <ChevronDown className="w-3 h-3 text-academic-muted" />
                </span>
              </div>
            </button>

            {/* Menu des 8 Paliers répartis en 3 Cycles */}
            {isStageMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-88 sm:w-96 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-elevated p-3 z-50 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-2 border-b border-academic-border-subtle dark:border-academic-dark-border">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-academic-muted dark:text-academic-dark-muted">
                    Syllabus Universitaire · 8 Paliers
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsStageMenuOpen(false);
                      onOpenDiagnostic();
                    }}
                    className="text-[10px] font-bold text-academic-gold hover:underline flex items-center gap-1"
                  >
                    <Compass className="w-3 h-3" />
                    Refaire le test
                  </button>
                </div>

                {cycles.map((cycle) => (
                  <div key={cycle.id} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted px-2 py-0.5">
                      {cycle.name}
                    </span>
                    {cycle.stageIds.map((sId) => {
                      const st = stages.find((s) => s.id === sId);
                      if (!st) return null;
                      const isSelected = st.id === currentStage;
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => {
                            setStage(st.id);
                            setIsStageMenuOpen(false);
                          }}
                          className={`flex items-start gap-3 p-2.5 rounded-lg text-left transition-all ${
                            isSelected
                              ? "bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800"
                              : "hover:bg-academic-paper dark:hover:bg-academic-dark-card border border-transparent"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                              isSelected
                                ? "bg-academic-gold text-white"
                                : "bg-academic-border-subtle dark:bg-academic-dark-border text-academic-muted dark:text-slate-300"
                            }`}
                          >
                            P{st.id}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-academic-ink dark:text-slate-100 truncate font-serif">
                                {st.name}
                              </span>
                              <span className="text-[10px] font-mono text-academic-muted dark:text-academic-dark-muted shrink-0">
                                {st.shortName}
                              </span>
                            </div>
                            <p className="text-[11px] text-academic-muted dark:text-academic-dark-muted line-clamp-1 mt-0.5 leading-snug">
                              {st.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Panneau de métriques et actions apprenant */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Indicateur de régime débutant ou régularité */}
          {isBeginnerStage ? (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-md text-emerald-800 dark:text-emerald-300 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              <span>Bouclier Débutant (Erreur formatrice)</span>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-md text-academic-ink dark:text-slate-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{xp} XP</span>
            </div>
          )}

          {/* Série de jours (Streak) */}
          <div
            title={`${streak} jour(s) consécutif(s) d'étude`}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-md text-academic-ink dark:text-slate-200 text-xs font-semibold"
          >
            <Calendar className="w-3.5 h-3.5 text-academic-gold" />
            <span>{streak} j.</span>
          </div>

          {/* Bouton Répétition Espacée fata.srs */}
          <button
            type="button"
            onClick={onOpenSrs}
            title="Consulter la file de répétition espacée"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-academic-paper dark:bg-academic-dark-card hover:bg-white dark:hover:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border rounded-md text-xs font-semibold text-academic-ink dark:text-slate-200 transition-all shadow-fine"
          >
            <Brain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden md:inline font-sans">Mémoire</span>
            {dueCount > 0 ? (
              <span className="px-1.5 py-0.2 rounded-full bg-indigo-600 text-white text-[10px] font-mono font-bold">
                {dueCount}
              </span>
            ) : (
              <span className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-mono">
                À jour
              </span>
            )}
          </button>

          {/* Bouton Sprint Quotidien */}
          <button
            type="button"
            onClick={onOpenSprint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy rounded-md text-xs font-bold hover:bg-slate-800 dark:hover:bg-white transition-all shadow-fine font-sans"
          >
            <Timer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sprint Quotidien</span>
            <span className="sm:hidden">Sprint</span>
          </button>

          {/* Rappels d'étude */}
          <button
            type="button"
            onClick={onOpenReminders}
            title="Configurer les rappels et exporter le calendrier"
            aria-label="Rappels"
            className="p-1.5 text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-100 rounded-md hover:bg-academic-paper dark:hover:bg-academic-dark-card transition-colors"
          >
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
