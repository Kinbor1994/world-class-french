"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Timer,
  Check,
  Trophy,
  Copy,
  X,
  Volume2,
  VolumeX,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useAppStore } from "@/store/useAppStore";
import {
  generateSprintQuestions,
  computeStageRetention,
  type SprintQuestion,
  type SprintOption,
} from "@/utils/sprintGenerator";
import { speakFrench } from "@/utils/speech";
import type { DailySprintRecord } from "@/types/curriculum";

interface DailySprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailySprintModal: React.FC<DailySprintModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    currentStage,
    srsCards,
    saveSprintRecord,
    speechRate,
    isAudioMuted,
    toggleAudioMute,
  } = useAppStore();

  const [questions, setQuestions] = useState<SprintQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [results, setResults] = useState<("correct" | "hesitant" | "wrong")[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Initialise ou régénère une série de 8 questions réelles du palier
  const initSprint = useCallback(() => {
    const freshQuestions = generateSprintQuestions(currentStage, 8);
    setQuestions(freshQuestions);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setHasAnswered(false);
    setSeconds(0);
    setResults([]);
    setQuestionStartTime(Date.now());
    setIsCompleted(false);
    setCopied(false);
  }, [currentStage]);

  // Régénération au montage ou changement d'ouverture
  useEffect(() => {
    if (isOpen) {
      initSprint();
    }
  }, [isOpen, initSprint]);

  // Chronomètre du sprint
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isOpen && !isCompleted) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, isCompleted]);

  const currentQuestion: SprintQuestion | undefined = questions[currentIndex];

  // Rétention réelle calculée
  const stageRetention = useMemo(() => {
    return computeStageRetention(srsCards, currentStage);
  }, [srsCards, currentStage]);

  // Écoute de l'énoncé si disponible
  const handlePlayAudio = useCallback(() => {
    if (!currentQuestion) return;
    const textToSpeak =
      currentQuestion.audioText ||
      currentQuestion.contextText ||
      currentQuestion.prompt;
    if (textToSpeak) {
      speakFrench(textToSpeak, speechRate, isAudioMuted);
    }
  }, [currentQuestion, speechRate, isAudioMuted]);

  // Lecture automatique de l'audio pour l'éveil phonétique (Palier 1)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (
      isOpen &&
      !hasAnswered &&
      currentQuestion &&
      currentQuestion.category === "Éveil Phonétique" &&
      !isAudioMuted
    ) {
      timer = setTimeout(() => {
        handlePlayAudio();
      }, 300);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, currentIndex, hasAnswered, currentQuestion, isAudioMuted, handlePlayAudio]);

  // Traitement d'une réponse
  const handleSelectOption = (option: SprintOption) => {
    if (hasAnswered || !currentQuestion) return;

    setSelectedOptionId(option.id);
    setHasAnswered(true);

    const elapsedOnQuestion = Math.max(1, Math.round((Date.now() - questionStartTime) / 1000));
    const isHesitant = elapsedOnQuestion > 10;

    const resultType: "correct" | "hesitant" | "wrong" = !option.isCorrect
      ? "wrong"
      : isHesitant
      ? "hesitant"
      : "correct";

    const nextResults = [...results, resultType];
    setResults(nextResults);
  };

  // Passage à la question suivante ou conclusion
  const handleNextQuestion = useCallback(() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setHasAnswered(false);
      setQuestionStartTime(Date.now());
    } else {
      setIsCompleted(true);
      const score = results.filter((r) => r === "correct" || r === "hesitant").length;
      const emojiPattern = results
        .map((r) => (r === "correct" ? "🟩" : r === "hesitant" ? "🟨" : "🟥"))
        .join("");

      const record: DailySprintRecord = {
        date: new Date().toISOString().split("T")[0] ?? "",
        stage: currentStage,
        stageName: currentQuestion?.stageName ?? `Palier ${currentStage}`,
        score,
        totalQuestions: questions.length,
        durationSeconds: seconds,
        resultsPattern: emojiPattern,
        retentionAvg: stageRetention,
      };

      saveSprintRecord(record);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B45309", "#0F172A", "#059669"],
        });
      } catch {
        // Fallback silencieux
      }
    }
  }, [
    currentIndex,
    questions.length,
    results,
    currentStage,
    currentQuestion?.stageName,
    seconds,
    stageRetention,
    saveSprintRecord,
  ]);

  // Raccourcis clavier (1, 2, 3, 4 et Espace/Entrée)
  useEffect(() => {
    if (!isOpen || isCompleted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasAnswered && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleNextQuestion();
        return;
      }

      if (!hasAnswered && currentQuestion) {
        const keyNumber = parseInt(e.key, 10);
        if (!isNaN(keyNumber) && keyNumber >= 1 && keyNumber <= currentQuestion.options.length) {
          const opt = currentQuestion.options[keyNumber - 1];
          if (opt) {
            handleSelectOption(opt);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isCompleted, hasAnswered, currentQuestion, handleNextQuestion]);

  if (!isOpen) return null;

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getShareableText = (): string => {
    const dayNumber = Math.floor(Date.now() / (1000 * 3600 * 24)) % 1000;
    const emojiPattern = results
      .map((r) => (r === "correct" ? "🟩" : r === "hesitant" ? "🟨" : "🟥"))
      .join("");
    return `World-Class French · Sprint Quotidien #${dayNumber} (${currentQuestion?.stageName ?? `Palier ${currentStage}`}) ${emojiPattern} en ${formatTime(
      seconds
    )} · Rétention SRS : ${stageRetention}% #worldclassfrench`;
  };

  const handleCopyShare = async () => {
    const text = getShareableText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-academic-navy/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in"
    >
      <div className="bg-white dark:bg-academic-dark-surface rounded-2xl p-5 sm:p-7 max-w-xl w-full shadow-modal border border-academic-border dark:border-academic-dark-border max-h-[92vh] overflow-y-auto">
        {!isCompleted ? (
          <div>
            {/* Barre supérieure : Chronomètre, Progression pas-à-pas, Audio & Fermeture */}
            <div className="flex items-center justify-between gap-2 mb-5 pb-3.5 border-b border-academic-border-subtle dark:border-academic-dark-border">
              {/* Chronomètre minuté */}
              <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 text-academic-gold font-mono font-bold text-xs px-2.5 py-1 rounded border border-amber-200 dark:border-amber-800 shrink-0">
                <Timer className="w-3.5 h-3.5 animate-pulse text-academic-gold" />
                <span>{formatTime(seconds)}</span>
              </div>

              {/* Indicateurs de progression (8 pastilles) */}
              <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                {questions.map((_, idx) => {
                  const res = results[idx];
                  const isCurrent = idx === currentIndex;
                  return (
                    <div
                      key={idx}
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-mono font-bold transition-all shrink-0 ${
                        res === "correct"
                          ? "bg-emerald-600 text-white shadow-fine"
                          : res === "hesitant"
                          ? "bg-amber-600 text-white shadow-fine"
                          : res === "wrong"
                          ? "bg-rose-600 text-white shadow-fine"
                          : isCurrent
                          ? "bg-academic-navy text-amber-400 dark:bg-slate-100 dark:text-academic-navy ring-2 ring-academic-gold"
                          : "bg-academic-paper dark:bg-academic-dark-card text-academic-muted dark:text-academic-dark-muted border border-academic-border-subtle dark:border-academic-dark-border"
                      }`}
                    >
                      {res === "correct" ? "✓" : res === "hesitant" ? "⚡" : res === "wrong" ? "✕" : idx + 1}
                    </div>
                  );
                })}
              </div>

              {/* Contrôles utilitaires : Audio & Fermer */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={toggleAudioMute}
                  aria-label={isAudioMuted ? "Activer le son" : "Couper le son"}
                  className="p-1.5 rounded text-academic-muted hover:text-academic-ink dark:hover:text-slate-100 transition-colors"
                  title={isAudioMuted ? "Audio muet" : "Audio actif"}
                >
                  {isAudioMuted ? (
                    <VolumeX className="w-4 h-4 text-rose-500" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-academic-emerald" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fermer le Sprint"
                  className="p-1.5 rounded text-academic-muted hover:text-academic-ink dark:hover:text-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Corps de la Question */}
            {currentQuestion && (
              <div className="space-y-4">
                {/* Métadonnées & Catégorie didactique */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border text-academic-gold">
                      {currentQuestion.category}
                    </span>
                    {currentQuestion.ipa && (
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded">
                        /{currentQuestion.ipa}/
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-academic-muted dark:text-academic-dark-muted font-medium">
                    Question {currentIndex + 1} / {questions.length}
                  </span>
                </div>

                {/* Énoncé / Prompt */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-academic-ink dark:text-slate-100 leading-snug">
                    {currentQuestion.prompt}
                  </h3>
                  {(currentQuestion.audioText || currentQuestion.contextText) && (
                    <button
                      type="button"
                      onClick={handlePlayAudio}
                      aria-label="Écouter l'énoncé en français"
                      title="Écouter l'énoncé"
                      className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-academic-gold hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors shrink-0 mt-0.5"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Contexte textuel authentique (Ex: Phrase pour Voltaire Hunter ou Citation littéraire) */}
                {currentQuestion.contextText && (
                  <div className="p-3.5 rounded-xl bg-academic-paper dark:bg-academic-dark-card border-l-4 border-academic-gold border-y border-r border-academic-border dark:border-academic-dark-border shadow-fine">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-academic-muted dark:text-academic-dark-muted mb-1">
                      Phrase / Extrait soumis à votre examen :
                    </div>
                    <blockquote className="text-sm sm:text-base font-serif italic text-academic-ink dark:text-slate-100 leading-relaxed">
                      « {currentQuestion.contextText} »
                    </blockquote>
                  </div>
                )}

                {/* Grille des Options VRAIES et calibrées */}
                <div className="flex flex-col gap-2.5 pt-1">
                  {currentQuestion.options.map((option, optIdx) => {
                    const isSelected = selectedOptionId === option.id;
                    const letter = String.fromCharCode(65 + optIdx); // A, B, C, D...

                    let optionStyle =
                      "bg-academic-paper dark:bg-academic-dark-card border-academic-border dark:border-academic-dark-border text-academic-ink dark:text-slate-100 hover:border-academic-gold/60";

                    if (hasAnswered) {
                      if (option.isCorrect) {
                        optionStyle =
                          "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 ring-1 ring-emerald-500 font-bold";
                      } else if (isSelected && !option.isCorrect) {
                        optionStyle =
                          "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 ring-1 ring-rose-500 line-through";
                      } else {
                        optionStyle =
                          "bg-academic-paper/50 dark:bg-academic-dark-card/50 border-academic-border-subtle dark:border-academic-dark-border text-academic-muted dark:text-academic-dark-muted opacity-60";
                      }
                    }

                    return (
                      <button
                        key={option.id}
                        type="button"
                        disabled={hasAnswered}
                        onClick={() => handleSelectOption(option)}
                        className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all shadow-fine flex items-center justify-between gap-3 ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                              hasAnswered && option.isCorrect
                                ? "bg-emerald-600 text-white"
                                : hasAnswered && isSelected && !option.isCorrect
                                ? "bg-rose-600 text-white"
                                : "bg-academic-border-subtle dark:bg-academic-dark-border text-academic-muted dark:text-slate-300"
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="text-xs sm:text-sm font-medium leading-snug break-words">
                            {option.text}
                          </span>
                        </div>

                        {hasAnswered && (
                          <div className="shrink-0">
                            {option.isCorrect ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            ) : isSelected ? (
                              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                            ) : null}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Carte d'explication immédiate et Bouton Continuer */}
                {hasAnswered && (
                  <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-academic-dark-card border border-amber-200 dark:border-amber-800 space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-150">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-academic-gold shrink-0 mt-0.5" />
                      <div className="flex-1 text-xs text-academic-ink dark:text-slate-200 leading-relaxed">
                        <span className="font-bold text-academic-gold mr-1">
                          Éclairage normatif :
                        </span>
                        {currentQuestion.explanation}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleNextQuestion}
                      className="w-full py-2.5 px-4 bg-academic-navy dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-academic-navy font-bold text-xs rounded-lg flex items-center justify-center gap-2 shadow-fine transition-all"
                    >
                      <span>
                        {currentIndex + 1 < questions.length
                          ? "Question Suivante"
                          : "Consulter mon Bilan"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* =============================================================== */
          /* RAPPORT DE FIN DE SPRINT QUOTIDIEN                              */
          /* =============================================================== */
          <div className="text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-full flex items-center justify-center mx-auto text-academic-gold shadow-fine">
              <Trophy className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-academic-gold">
                Sprint Minuté Achevé
              </span>
              <h2 className="text-xl font-bold font-serif text-academic-ink dark:text-slate-100">
                Bilan de votre Session Quotidienne
              </h2>
              <p className="text-xs text-academic-muted dark:text-academic-dark-muted">
                {currentQuestion?.stageName ?? `Palier ${currentStage}`} · Temps d'exécution :{" "}
                <span className="font-mono font-bold text-academic-ink dark:text-slate-200">
                  {formatTime(seconds)}
                </span>
              </p>
            </div>

            {/* Grille de synthèse statistique */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border">
                <div className="text-[10px] uppercase font-bold text-academic-muted dark:text-academic-dark-muted">
                  Score
                </div>
                <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {results.filter((r) => r === "correct" || r === "hesitant").length} /{" "}
                  {questions.length}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border">
                <div className="text-[10px] uppercase font-bold text-academic-muted dark:text-academic-dark-muted">
                  Rétention SRS
                </div>
                <div className="text-lg font-bold font-mono text-academic-gold mt-0.5">
                  {stageRetention}%
                </div>
              </div>

              <div className="p-3 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border">
                <div className="text-[10px] uppercase font-bold text-academic-muted dark:text-academic-dark-muted">
                  Gain XP
                </div>
                <div className="text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
                  +{results.filter((r) => r === "correct" || r === "hesitant").length * 15} XP
                </div>
              </div>
            </div>

            {/* Boîte de partage type Wordle / Daily Challenge */}
            <div className="p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-xl text-left space-y-1.5 shadow-fine">
              <div className="flex items-center justify-between text-[10px] font-mono text-academic-muted dark:text-academic-dark-muted">
                <span>SYNTHÈSE CERTIFIÉE :</span>
                <span className="font-bold text-academic-gold">#worldclassfrench</span>
              </div>
              <div className="font-mono text-xs font-bold text-academic-ink dark:text-slate-100 break-words bg-white dark:bg-academic-dark-surface p-2.5 rounded-lg border border-academic-border-subtle dark:border-academic-dark-border">
                {getShareableText()}
              </div>
            </div>

            {/* Boutons d'actions : Copier, Recommencer avec nouveau tirage, Terminer */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyShare}
                className="flex-1 py-2.5 px-4 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border hover:border-academic-gold text-academic-ink dark:text-slate-100 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-fine"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copied ? "Copié !" : "Copier mon bilan"}</span>
              </button>

              <button
                type="button"
                onClick={initSprint}
                className="flex-1 py-2.5 px-4 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border hover:border-academic-gold text-academic-ink dark:text-slate-100 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-fine"
              >
                <RotateCcw className="w-4 h-4 text-academic-gold" />
                <span>Nouveau Tirage</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-6 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white transition-all"
              >
                Terminer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
