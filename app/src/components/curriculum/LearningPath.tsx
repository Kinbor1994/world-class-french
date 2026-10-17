"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  BookOpen,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type {
  Stage,
  CurriculumModule,
  CurriculumChapter,
  MicroLesson,
} from "@/types/curriculum";
import { ChapterSummaryModal } from "./ChapterSummaryModal";

interface LearningPathProps {
  onSelectLesson: (lesson: MicroLesson) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({ onSelectLesson }) => {
  const { currentStage, completedLessons } = useAppStore();
  const [selectedChapterForSummary, setSelectedChapterForSummary] =
    useState<CurriculumChapter | null>(null);

  const stages: readonly Stage[] = curriculumData.stages as Stage[];
  const activeStage = stages.find((s) => s.id === currentStage) ?? stages[0];

  const totalLessonsInStage =
    activeStage?.modules.reduce(
      (acc, m) =>
        acc + m.chapters.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
      0
    ) ?? 0;

  const completedInStage =
    activeStage?.modules.reduce(
      (acc, m) =>
        acc +
        m.chapters.reduce(
          (cAcc, c) =>
            cAcc +
            c.lessons.filter((l) => completedLessons.includes(l.id)).length,
          0
        ),
      0
    ) ?? 0;

  const stageProgressPercent =
    totalLessonsInStage > 0
      ? Math.round((completedInStage / totalLessonsInStage) * 100)
      : 0;

  return (
    <div suppressHydrationWarning className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* En-tête statutaire du Palier d'études */}
      <section className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border shadow-card mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-academic-gold bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                Palier {activeStage?.id} · {activeStage?.shortName}
              </span>
              <span className="text-xs text-academic-muted dark:text-academic-dark-muted font-sans">
                {activeStage?.modules.length} modules · {totalLessonsInStage} micro-sessions
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-academic-ink dark:text-slate-100 leading-tight">
              {activeStage?.name}
            </h1>

            <p className="text-sm text-academic-muted dark:text-academic-dark-muted font-normal leading-relaxed">
              {activeStage?.description}
            </p>
          </div>

          {/* Jauge de progression du Palier */}
          <div className="w-full lg:w-64 p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-surface border border-academic-border-subtle dark:border-academic-dark-border flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-academic-ink dark:text-slate-200">
                Progression du Palier
              </span>
              <span className="font-mono font-bold text-academic-gold">
                {stageProgressPercent}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-academic-gold transition-all duration-500 rounded-full"
                style={{ width: `${stageProgressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-academic-muted dark:text-academic-dark-muted">
              {completedInStage} sur {totalLessonsInStage} leçons validées
            </span>
          </div>
        </div>

        {activeStage?.hasInfiniteHearts && (
          <div className="mt-4 pt-4 border-t border-academic-border-subtle dark:border-academic-dark-border flex items-center gap-2 text-xs font-semibold text-academic-emerald dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>
              Sas d'apprentissage bienveillant : Vies illimitées. L'erreur est immédiatement expliquée sans interruption.
            </span>
          </div>
        )}
      </section>

      {/* Modules et Chapitres */}
      <div className="space-y-10">
        {activeStage?.modules.map((mod: CurriculumModule) => (
          <section key={mod.id} className="space-y-4">
            {/* Titre du Module Académique */}
            <div className="flex items-center justify-between pb-2 border-b border-academic-border dark:border-academic-dark-border">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                  {mod.id}
                </span>
                <h2 className="text-base sm:text-lg font-bold font-serif text-academic-ink dark:text-slate-100">
                  {mod.title}
                </h2>
              </div>
              <span className="text-xs text-academic-muted dark:text-academic-dark-muted font-mono hidden sm:inline">
                {mod.chapters.length} chapitres
              </span>
            </div>

            {/* Dossiers des Chapitres */}
            <div className="space-y-6">
              {mod.chapters.map((chp: CurriculumChapter) => {
                const chapterCompletedCount = chp.lessons.filter((l) =>
                  completedLessons.includes(l.id)
                ).length;
                const isChapterComplete =
                  chp.lessons.length > 0 &&
                  chapterCompletedCount === chp.lessons.length;

                return (
                  <div
                    key={chp.id}
                    className="p-5 sm:p-6 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-card hover:border-academic-gold/40 transition-all"
                  >
                    {/* En-tête de chapitre */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-academic-border-subtle dark:border-academic-dark-border">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-academic-muted dark:text-academic-dark-muted">
                            {chp.id}
                          </span>
                          {isChapterComplete && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.2 rounded border border-emerald-200 dark:border-emerald-800">
                              <CheckCircle2 className="w-3 h-3" /> Chapitre Maîtrisé
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
                          {chp.title}
                        </h3>
                        <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-normal max-w-2xl leading-relaxed">
                          {chp.summary}
                        </p>
                      </div>

                      {/* Bouton pour afficher la fiche théorique Rubrique 17 */}
                      <button
                        type="button"
                        onClick={() => setSelectedChapterForSummary(chp)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-academic-border dark:border-academic-dark-border hover:border-academic-gold hover:bg-academic-paper dark:hover:bg-academic-dark-card text-xs font-semibold text-academic-ink dark:text-slate-200 transition-all self-start shrink-0"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-academic-gold" />
                        <span>Fiche de synthèse</span>
                      </button>
                    </div>

                    {/* Séquence des Micro-Leçons (Séquence structurée de 3 minutes) */}
                    <div className="pt-4">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted mb-3 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>Micro-sessions d'apprentissage (3 minutes)</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {chp.lessons.map((lesson: MicroLesson, idx: number) => {
                          const isDone = completedLessons.includes(lesson.id);

                          return (
                            <button
                              key={lesson.id}
                              type="button"
                              onClick={() => onSelectLesson(lesson)}
                              className={`group flex items-center justify-between p-3.5 rounded-lg border text-left transition-all ${
                                isDone
                                  ? "bg-academic-paper/70 dark:bg-academic-dark-card/50 border-academic-border-subtle dark:border-academic-dark-border hover:border-academic-emerald"
                                  : "bg-white dark:bg-academic-dark-surface border-academic-border dark:border-academic-dark-border hover:border-academic-navy dark:hover:border-academic-gold hover:shadow-fine"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0 pr-2">
                                <div
                                  className={`w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                                    isDone
                                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                                      : "bg-academic-paper dark:bg-academic-dark-card text-academic-muted dark:text-academic-dark-muted group-hover:bg-academic-navy group-hover:text-white dark:group-hover:bg-academic-gold transition-colors"
                                  }`}
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="w-4 h-4" />
                                  ) : (
                                    <span>{String(idx + 1).padStart(2, "0")}</span>
                                  )}
                                </div>

                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-academic-ink dark:text-slate-100 truncate group-hover:text-academic-navy dark:group-hover:text-amber-400 font-sans">
                                    {lesson.title}
                                  </div>
                                  <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted flex items-center gap-2 mt-0.5">
                                    <span>~{lesson.durationMinutes} min</span>
                                    <span>·</span>
                                    <span>{lesson.exercises.length} exercices</span>
                                  </div>
                                </div>
                              </div>

                              <div className="shrink-0 flex items-center text-xs font-semibold text-academic-gold opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                                <span className="hidden sm:inline mr-1 text-[11px]">
                                  {isDone ? "Revoir" : "Étudier"}
                                </span>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Modale de fiche de synthèse de chapitre */}
      <ChapterSummaryModal
        chapter={selectedChapterForSummary}
        onClose={() => setSelectedChapterForSummary(null)}
      />
    </div>
  );
};
