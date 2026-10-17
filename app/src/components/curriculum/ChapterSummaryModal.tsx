"use client";

import React from "react";
import { X, BookOpen, BookmarkCheck, Award } from "lucide-react";
import type { CurriculumChapter } from "@/types/curriculum";
import { renderAcademicMarkdown } from "@/utils/markdown";

interface ChapterSummaryModalProps {
  chapter: CurriculumChapter | null;
  onClose: () => void;
}

export const ChapterSummaryModal: React.FC<ChapterSummaryModalProps> = ({
  chapter,
  onClose,
}) => {
  if (!chapter) return null;

  const renderedSummaryHtml = chapter.structuredSummary
    ? renderAcademicMarkdown(chapter.structuredSummary)
    : "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-academic-navy/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-academic-dark-surface rounded-2xl border border-academic-border dark:border-academic-dark-border shadow-modal flex flex-col max-h-[90vh] overflow-hidden">
        {/* En-tête magistral */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card shrink-0">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                {chapter.id}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-academic-muted dark:text-academic-dark-muted">
                Palier {chapter.stage} · Fiche Magistrale de Référence
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
              {chapter.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fiche"
            className="p-1.5 rounded-lg text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corps déroulant de la fiche didactique */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-academic-ink dark:text-slate-200 leading-relaxed">
          {/* Cadrage introductif */}
          <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border font-serif italic text-sm sm:text-base text-academic-ink-light dark:text-slate-300">
            « {chapter.summary} »
          </div>

          {/* Règles fondamentales normées */}
          {chapter.rules.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted">
                <BookmarkCheck className="w-4 h-4 text-academic-emerald" />
                <span>Règles Canoniques du Chapitre</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {chapter.rules.map((rule) => (
                  <div
                    key={rule.id}
                    className="p-4 rounded-xl border border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-card shadow-fine flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[10px] font-bold text-academic-gold bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                          {rule.id}
                        </span>
                        <span className="text-xs font-bold font-serif text-academic-ink dark:text-slate-100">
                          {rule.title}
                        </span>
                      </div>
                      <p className="text-xs text-academic-muted dark:text-slate-300 leading-relaxed">
                        {rule.statement}
                      </p>
                    </div>
                    {rule.formula && (
                      <div className="mt-3 font-mono text-[11px] bg-academic-paper dark:bg-academic-dark-surface px-2.5 py-1 rounded text-academic-gold border border-academic-border-subtle dark:border-academic-dark-border">
                        {rule.formula}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Synthèse structurée et Tableaux Synoptiques (Rubrique 17) */}
          {chapter.structuredSummary && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-academic-gold">
                <BookOpen className="w-4 h-4" />
                <span>Tableau Synoptique & Synthèse Didactique (Rubrique 17)</span>
              </div>

              {/* Rendu Markdown enrichi avec tableaux et typographie universitaire */}
              <div
                className="academic-markdown p-5 sm:p-6 rounded-xl border border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface shadow-fine overflow-hidden"
                dangerouslySetInnerHTML={{ __html: renderedSummaryHtml }}
              />
            </div>
          )}
        </div>

        {/* Pied de page institutionnel */}
        <div className="p-4 border-t border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[11px] text-academic-muted dark:text-academic-dark-muted font-sans">
            <Award className="w-4 h-4 text-academic-gold shrink-0" />
            <span className="hidden sm:inline">
              Corpus certifié conforme aux traités de référence (Grevisse, Riegel, Imprimerie nationale)
            </span>
            <span className="sm:hidden">Corpus certifié Grevisse / Riegel</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all shadow-fine shrink-0"
          >
            Fermer la fiche
          </button>
        </div>
      </div>
    </div>
  );
};
