"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Play,
  Star,
  ShieldCheck,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type { Stage, CurriculumModule, CurriculumChapter, MicroLesson } from "@/types/curriculum";

interface LearningPathProps {
  onSelectLesson: (lesson: MicroLesson) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({ onSelectLesson }) => {
  const { currentStage, completedLessons } = useAppStore();

  const stages: readonly Stage[] = curriculumData.stages as Stage[];
  const activeStage = stages.find((s) => s.id === currentStage) ?? stages[0];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Bannière du Palier Actif */}
      <div className="relative overflow-hidden p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl mb-10 border-2 border-slate-700">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl select-none">{activeStage?.badge.split(" ")[0]}</span>
              <span className="text-xs uppercase font-black tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                Palier {activeStage?.id} · {activeStage?.shortName}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-2">
              {activeStage?.name}
            </h1>
            <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              {activeStage?.description}
            </p>
          </div>
        </div>

        {activeStage?.hasInfiniteHearts && (
          <div className="mt-4 pt-4 border-t border-slate-700/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Bouclier Cognitif Débutant : Vies illimitées ❤️ ∞. L'erreur est un apprentissage bienveillant.</span>
          </div>
        )}
      </div>

      {/* Modules et Chapitres */}
      <div className="flex flex-col gap-10">
        {activeStage?.modules.map((mod: CurriculumModule) => (
          <div key={mod.id} className="flex flex-col gap-6">
            <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {mod.id}
                </span>
                <h2 className="text-lg font-black text-slate-800 dark:text-slate-100">
                  {mod.title}
                </h2>
              </div>
            </div>

            {mod.chapters.map((chp: CurriculumChapter) => (
              <div
                key={chp.id}
                className="bg-white dark:bg-slate-800/90 rounded-3xl border-2 border-slate-200 dark:border-slate-700/80 p-6 shadow-sm"
              >
                {/* En-tête de chapitre */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-0.5 rounded-md">
                      {chp.id}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100 mt-1">
                      {chp.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {chp.summary}
                    </p>
                  </div>
                </div>

                {/* Séquence verticale des Micro-Leçons tactiles */}
                <div className="flex flex-col items-center gap-6 py-2">
                  {chp.lessons.map((lesson: MicroLesson, lIdx: number) => {
                    const isCompleted = completedLessons.includes(lesson.id);
                    // Décalage sinusoïdal inspiré de l'arbre Duolingo
                    const offsetClass =
                      lIdx % 3 === 1
                        ? "translate-x-6"
                        : lIdx % 3 === 2
                        ? "-translate-x-6"
                        : "translate-x-0";

                    return (
                      <div
                        key={lesson.id}
                        className={`flex flex-col items-center transition-transform ${offsetClass}`}
                      >
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onSelectLesson(lesson)}
                          className={`w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 shadow-lg transition-all relative ${
                            isCompleted
                              ? "bg-amber-400 border-amber-500 shadow-duo-gold text-white"
                              : "bg-duo-green border-emerald-600 shadow-duo-green text-white"
                          }`}
                        >
                          {isCompleted ? (
                            <Star className="w-8 h-8 fill-white stroke-white" />
                          ) : (
                            <Play className="w-8 h-8 fill-white stroke-white ml-1" />
                          )}

                          {isCompleted && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          )}
                        </motion.button>

                        <span className="text-xs font-black text-slate-700 dark:text-slate-300 mt-2 text-center max-w-[140px] leading-tight">
                          {lesson.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          ~{lesson.durationMinutes} min · {lesson.exercises.length} exercices
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
