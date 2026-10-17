"use client";

import React from "react";
import { X, BookOpen, BookmarkCheck, Award } from "lucide-react";
import type { CurriculumChapter } from "@/types/curriculum";

interface ChapterSummaryModalProps {
  chapter: CurriculumChapter | null;
  onClose: () => void;
}

export const ChapterSummaryModal: React.FC<ChapterSummaryModalProps> = ({
  chapter,
  onClose,
}) => {
  if (!chapter) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-academic-navy/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-academic-dark-surface rounded-2xl border border-academic-border dark:border-academic-dark-border shadow-modal flex flex-col max-h-[85vh] overflow-hidden">
        {/* En-tête éditorial */}
        <div className="flex items-start justify-between p-6 border-b border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                {chapter.id}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted">
                Palier {chapter.stage} · Fiche Magistrale
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
              {chapter.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="p-1.5 rounded-lg text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corps de la synthèse */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-academic-ink dark:text-slate-200 leading-relaxed">
          {/* Chapeau introductif */}
          <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border font-serif italic text-base text-academic-ink-light dark:text-slate-300">
            « {chapter.summary} »
          </div>

          {/* Règles fondamentales extraites */}
          {chapter.rules.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted">
                <BookmarkCheck className="w-4 h-4 text-academic-emerald" />
                <span>Règles Canoniques du Chapitre</span>
              </div>
              <div className="space-y-2.5">
                {chapter.rules.map((rule) => (
                  <div
                    key={rule.id}
                    className="p-3.5 rounded-xl border border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-card"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold text-academic-gold">
                        {rule.id}
                      </span>
                      <span className="text-xs font-bold font-serif text-academic-ink dark:text-slate-100">
                        {rule.title}
                      </span>
                    </div>
                    <p className="text-xs text-academic-muted dark:text-slate-300 mt-1">
                      {rule.statement}
                    </p>
                    {rule.formula && (
                      <div className="mt-2 font-mono text-[11px] bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {rule.formula}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Synthèse structurée (Rubrique 17) */}
          {chapter.structuredSummary && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted">
                <BookOpen className="w-4 h-4 text-academic-gold" />
                <span>Résumé Didactique & Métacognition (Rubrique 17)</span>
              </div>
              <div className="p-4 rounded-xl border border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card font-serif whitespace-pre-line text-xs leading-relaxed text-academic-ink-light dark:text-slate-300">
                {chapter.structuredSummary}
              </div>
            </div>
          )}
        </div>

        {/* Pied de page */}
        <div className="p-4 border-t border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-academic-muted dark:text-academic-dark-muted">
            <Award className="w-4 h-4 text-academic-gold" />
            <span>Corpus certifié conforme aux traités académiques (Grevisse / Riegel)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all"
          >
            Fermer la fiche
          </button>
        </div>
      </div>
    </div>
  );
};
