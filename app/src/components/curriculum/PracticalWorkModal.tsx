"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Headphones,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileText,
  Volume2,
  BookOpen,
  Award,
  Sparkles,
  ChevronRight,
  PenTool,
} from "lucide-react";

interface PracticalWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "dictations" | "editorial" | "oratory" | "exams";

interface DictationItem {
  id: string;
  title: string;
  author: string;
  wordCount: number;
  level: string;
  fullText: string;
  segments: string[];
  keyTraps: { word: string; rule: string; type: "maj" | "min" | "lex" }[];
}

const DICTATIONS: DictationItem[] = [
  {
    id: "DICT-S1-01",
    title: "L'Aube de l'Écriture",
    author: "Texte Étalon Académique",
    wordCount: 225,
    level: "Semestre 1 · Fondations",
    fullText:
      "Dans le silence recueilli des bibliothèques anciennes s'élabore la mémoire des nations. Quels que soient les tourments de l'histoire, les parchemins jaunis que les copistes ont patiemment enluminés témoignent de la grandeur de l'esprit humain. Combien de manuscrits précieux se sont perdus au cours des âges sans qu'aucune trace n'en soit demeurée ! Les règles d'accord que les grammairiens ont fixées ne sont point de vains caprices imposés aux poètes, mais les fondations inébranlables d'une langue souveraine. Les hommes et les femmes que le destin a réunis en ce lieu se sont toujours efforcés d'honorer ce legs immémorial, car quiconque néglige les nuances de sa langue condamne sa pensée à un irrémédiable appauvrissement.",
    segments: [
      "Dans le silence recueilli des bibliothèques anciennes",
      "s'élabore la mémoire des nations.",
      "Quels que soient les tourments de l'histoire,",
      "les parchemins jaunis que les copistes ont patiemment enluminés",
      "témoignent de la grandeur de l'esprit humain.",
      "Combien de manuscrits précieux se sont perdus au cours des âges",
      "sans qu'aucune trace n'en soit demeurée !",
      "Les règles d'accord que les grammairiens ont fixées",
      "ne sont point de vains caprices imposés aux poètes,",
      "mais les fondations inébranlables d'une langue souveraine.",
      "Les hommes et les femmes que le destin a réunis en ce lieu",
      "se sont toujours efforcés d'honorer ce legs immémorial,",
      "car quiconque néglige les nuances de sa langue",
      "condamne sa pensée à un irrémédiable appauvrissement.",
    ],
    keyTraps: [
      {
        word: "Quels que soient",
        rule: "Quel que en deux mots, accord au masculin pluriel avec les tourments + subjonctif",
        type: "maj",
      },
      {
        word: "ont... enluminés",
        rule: "Accord du participe avec le COD antéposé 'que' mis pour les parchemins jaunis",
        type: "maj",
      },
      {
        word: "se sont perdus",
        rule: "Verbe accidentellement pronominal à sens passif, accord avec le sujet manuscrits",
        type: "maj",
      },
      {
        word: "ont fixées",
        rule: "Accord du participe avec le COD antéposé 'que' mis pour les règles d'accord",
        type: "maj",
      },
      {
        word: "a réunis",
        rule: "Accord avec le COD antéposé 'que' mis pour Les hommes et les femmes",
        type: "maj",
      },
      {
        word: "se sont efforcés",
        rule: "Verbe essentiellement pronominal s'efforcer, accord avec le sujet",
        type: "maj",
      },
      {
        word: "legs",
        rule: "Substantif masculin avec g et s finaux étymologiques",
        type: "lex",
      },
      {
        word: "irrémédiable",
        rule: "Accentuation aiguë sur le premier e, pas de double r",
        type: "lex",
      },
    ],
  },
  {
    id: "DICT-S2-01",
    title: "Le Défi de Clément Marot",
    author: "Texte Étalon de Concours",
    wordCount: 280,
    level: "Semestre 2 · Syntaxe Complexe",
    fullText:
      "Combien d'élèves téméraires se sont figuré qu'il leur suffirait d'une lecture hâtive pour maîtriser les subtilités de la syntaxe française ! Les difficultés qu'ils ont prétendu contourner les ont promptement arrêtés au premier détour de la phrase. Les exceptions nombreuses qu'ils avaient crues secondaires leur sont apparues comme d'infranchissables remparts. Que de fois se sont-ils demandé pourquoi les leçons que leurs professeurs leur avaient prodiguées ne s'appliquaient point machinalement ! Ils s'étaient promis une gloire sans peine ; ils se sont vu infliger une salutaire leçon d'humilité. Quoi qu'il advienne des modes orthographiques, les règles que le XVIe siècle a consacrées demeurent les gardiennes fidèles de notre clarté.",
    segments: [
      "Combien d'élèves téméraires se sont figuré",
      "qu'il leur suffirait d'une lecture hâtive",
      "pour maîtriser les subtilités de la syntaxe française !",
      "Les difficultés qu'ils ont prétendu contourner",
      "les ont promptement arrêtés au premier détour de la phrase.",
      "Les exceptions nombreuses qu'ils avaient crues secondaires",
      "leur sont apparues comme d'infranchissables remparts.",
      "Que de fois se sont-ils demandé",
      "pourquoi les leçons que leurs professeurs leur avaient prodiguées",
      "ne s'appliquaient point machinalement !",
      "Ils s'étaient promis une gloire sans peine ;",
      "ils se sont vu infliger une salutaire leçon d'humilité.",
      "Quoi qu'il advienne des modes orthographiques,",
      "les règles que le XVIe siècle a consacrées",
      "demeurent les gardiennes fidèles de notre clarté.",
    ],
    keyTraps: [
      {
        word: "se sont figuré",
        rule: "Verbe transitif direct avec complétive postposée COD -> participe invariable",
        type: "maj",
      },
      {
        word: "ont prétendu contourner",
        rule: "Participe suivi d'un infinitif : le COD 'que' est l'objet de contourner -> invariable",
        type: "maj",
      },
      {
        word: "les ont... arrêtés",
        rule: "Accord obligatoire avec le pronom personnel COD antéposé 'les'",
        type: "maj",
      },
      {
        word: "avaient crues secondaires",
        rule: "Accord avec le COD antéposé 'que' mis pour exceptions (secondaires est attribut)",
        type: "maj",
      },
      {
        word: "se sont vu infliger",
        rule: "Participe suivi d'infinitif passif dont le sujet grammatical ne fait pas l'action -> invariable",
        type: "maj",
      },
      {
        word: "Quoi qu'il advienne",
        rule: "Pronom indéfini relatif en deux mots + subjonctif présent",
        type: "maj",
      },
      {
        word: "ont consacrées",
        rule: "Accord avec le COD antéposé 'que' mis pour les règles",
        type: "maj",
      },
    ],
  },
];

export const PracticalWorkModal: React.FC<PracticalWorkModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("dictations");

  // État de la Dictée interactive
  const initialDictation: DictationItem = DICTATIONS[0] ?? {
    id: "DICT-S1-01",
    title: "L'Aube de l'Écriture",
    author: "Texte Étalon Académique",
    wordCount: 225,
    level: "Semestre 1 · Fondations",
    fullText: "",
    segments: [],
    keyTraps: [],
  };

  const [selectedDictation, setSelectedDictation] = useState<DictationItem>(
    initialDictation
  );
  const [userText, setUserText] = useState<string>("");
  const [currentSegmentIdx, setCurrentSegmentIdx] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isEvaluationDone, setIsEvaluationDone] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);
  const [detectedErrors, setDetectedErrors] = useState<string[]>([]);

  // État de l'atelier de révision éditoriale
  const [revealedCorrections, setRevealedCorrections] = useState<boolean>(false);

  // Audio SpeechSynthesis
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const stopAudio = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlayingAudio(false);
    }
  };

  const playSegment = (segmentText: string) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(segmentText);
    utterance.lang = "fr-FR";
    utterance.rate = 0.8; // Débit posé pour l'apprentissage
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    synthRef.current.speak(utterance);
  };

  const playEntireDictation = () => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(selectedDictation.fullText);
    utterance.lang = "fr-FR";
    utterance.rate = 0.95;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    synthRef.current.speak(utterance);
  };

  // Évaluation automatique selon le barème pénal officiel
  const evaluateDictation = () => {
    const rawUser = userText.trim();
    if (!rawUser) return;

    let score = 20.0;
    const errorsList: string[] = [];

    // Vérification des pièges majeurs
    selectedDictation.keyTraps.forEach((trap) => {
      const cleanExpected = trap.word.toLowerCase();
      if (!rawUser.toLowerCase().includes(cleanExpected)) {
        const penalty = trap.type === "maj" ? 2.0 : trap.type === "min" ? 1.0 : 1.0;
        score -= penalty;
        errorsList.push(
          `Forme attendue : « ${trap.word} » (${trap.rule}) — Pénalité : -${penalty} pt`
        );
      }
    });

    const finalScore = Math.max(0, Math.round(score * 10) / 10);
    setCalculatedScore(finalScore);
    setDetectedErrors(errorsList);
    setIsEvaluationDone(true);
  };

  const resetDictation = () => {
    stopAudio();
    setUserText("");
    setCurrentSegmentIdx(0);
    setIsEvaluationDone(false);
    setCalculatedScore(null);
    setDetectedErrors([]);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-academic-dark-surface rounded-2xl border border-academic-border dark:border-academic-dark-border shadow-elevated overflow-hidden">
        {/* En-tête de l'Institut */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-academic-border dark:border-academic-dark-border bg-academic-paper dark:bg-academic-dark-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-academic-navy dark:bg-academic-dark-card border border-amber-900/30 flex items-center justify-center text-amber-500 font-serif font-bold text-lg shadow-fine">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-academic-ink dark:text-slate-100 flex items-center gap-2">
                Ateliers Pratiques & Examens Officiels
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Standards Université
                </span>
              </h2>
              <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-sans">
                Dictées sonores étalonnées, révision éditoriale et protocoles d&apos;élocution
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              stopAudio();
              onClose();
            }}
            aria-label="Fermer la modale"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-100 hover:bg-academic-border-subtle dark:hover:bg-academic-dark-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barre des 4 Onglets Spécialisés */}
        <div className="flex border-b border-academic-border dark:border-academic-dark-border bg-academic-paper/50 dark:bg-academic-dark-card/50 px-4 sm:px-6 gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("dictations")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-all font-sans whitespace-nowrap ${
              activeTab === "dictations"
                ? "border-academic-gold text-academic-ink dark:text-slate-100"
                : "border-transparent text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink"
            }`}
          >
            <Headphones className="w-4 h-4 text-academic-gold" />
            Dictées Sonores Étalonnées
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("editorial")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-all font-sans whitespace-nowrap ${
              activeTab === "editorial"
                ? "border-academic-gold text-academic-ink dark:text-slate-100"
                : "border-transparent text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink"
            }`}
          >
            <PenTool className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Révision Éditoriale (30 Coquilles)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("oratory")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-all font-sans whitespace-nowrap ${
              activeTab === "oratory"
                ? "border-academic-gold text-academic-ink dark:text-slate-100"
                : "border-transparent text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink"
            }`}
          >
            <Volume2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Élocution & Liaisons Nobles
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("exams")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-all font-sans whitespace-nowrap ${
              activeTab === "exams"
                ? "border-academic-gold text-academic-ink dark:text-slate-100"
                : "border-transparent text-academic-muted dark:text-academic-dark-muted hover:text-academic-ink"
            }`}
          >
            <FileText className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            Annales & Examens de Cycle
          </button>
        </div>

        {/* Corps Principal Dynamique */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* ONGLET 1 : DICTÉES SONORES */}
          {activeTab === "dictations" && (
            <div className="space-y-6">
              {/* Sélecteur de Dictée */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DICTATIONS.map((dict) => (
                  <button
                    key={dict.id}
                    type="button"
                    onClick={() => {
                      setSelectedDictation(dict);
                      resetDictation();
                    }}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      selectedDictation.id === dict.id
                        ? "bg-amber-50/80 dark:bg-amber-950/30 border-academic-gold shadow-fine"
                        : "bg-academic-paper dark:bg-academic-dark-card border-academic-border dark:border-academic-dark-border hover:border-academic-gold/50"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-academic-navy text-amber-500 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {dict.id.split("-")[1] ?? ""}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-serif font-bold text-academic-ink dark:text-slate-100">
                          {dict.title}
                        </span>
                        <span className="text-[10px] font-mono text-academic-muted dark:text-academic-dark-muted">
                          {dict.wordCount} mots
                        </span>
                      </div>
                      <p className="text-[11px] text-academic-muted dark:text-academic-dark-muted font-sans mt-0.5">
                        {dict.level} · {dict.keyTraps.length} pièges grammaticaux
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Console Audio & Contrôle du Souffle */}
              <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-academic-border-subtle dark:border-academic-dark-border">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-academic-gold" />
                    <span className="text-xs font-bold font-sans text-academic-ink dark:text-slate-100">
                      Pupitre de Dictée Sonore
                    </span>
                    <span className="text-[11px] font-mono text-academic-muted dark:text-academic-dark-muted">
                      (Tronçon {currentSegmentIdx + 1} / {selectedDictation.segments.length})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={playEntireDictation}
                      disabled={isPlayingAudio}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-xs font-semibold text-academic-ink dark:text-slate-200 hover:border-academic-gold transition-all flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 text-academic-gold" />
                      Écoute Globale (1.0x)
                    </button>

                    <button
                      type="button"
                      onClick={stopAudio}
                      disabled={!isPlayingAudio}
                      className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-xs text-academic-muted hover:text-academic-ink transition-all"
                      title="Arrêter l'audio"
                    >
                      <Pause className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tronçonnage & Répétition */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white dark:bg-academic-dark-surface rounded-lg border border-academic-border-subtle dark:border-academic-dark-border">
                  <p className="text-xs font-serif italic text-academic-ink dark:text-slate-200">
                    « {selectedDictation.segments[currentSegmentIdx] ?? ""} »
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        playSegment(selectedDictation.segments[currentSegmentIdx] ?? "")
                      }
                      className="px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-bold hover:bg-amber-200 transition-all flex items-center gap-1"
                    >
                      <Play className="w-3 h-3" />
                      Dicter ce tronçon (0.8x)
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const next =
                          (currentSegmentIdx + 1) %
                          selectedDictation.segments.length;
                        setCurrentSegmentIdx(next);
                        playSegment(selectedDictation.segments[next] ?? "");
                      }}
                      className="px-2.5 py-1 rounded bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border text-xs font-semibold text-academic-ink dark:text-slate-200 hover:border-academic-gold transition-all flex items-center gap-1"
                    >
                      Suivant
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Zone de Transcription de l'Élève */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="dictation-input"
                      className="text-xs font-bold uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted font-sans"
                    >
                      Votre retranscription écrite (sans correcteur) :
                    </label>
                    <span className="text-[11px] font-mono text-academic-muted dark:text-academic-dark-muted">
                      {userText.trim().split(/\s+/).filter(Boolean).length} mots rédigés
                    </span>
                  </div>

                  <textarea
                    id="dictation-input"
                    rows={6}
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    placeholder="Écrivez le texte sous la dictée ici..."
                    className="w-full p-4 rounded-xl bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-sm font-serif leading-relaxed text-academic-ink dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-academic-gold/50"
                  />
                </div>

                {/* Actions d'Évaluation & Remise à zéro */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={resetDictation}
                    className="px-3 py-1.5 rounded-lg border border-academic-border dark:border-academic-dark-border text-xs text-academic-muted hover:text-academic-ink transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Recommencer
                  </button>

                  <button
                    type="button"
                    onClick={evaluateDictation}
                    disabled={!userText.trim()}
                    className="px-4 py-2 rounded-xl bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy font-sans font-bold text-xs hover:bg-slate-800 dark:hover:bg-white transition-all shadow-fine disabled:opacity-50 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                    Évaluer selon le Barème Pénal Officiel
                  </button>
                </div>
              </div>

              {/* RÉSULTAT DU CONTRÔLE PÉNAL */}
              {isEvaluationDone && calculatedScore !== null && (
                <div className="p-5 rounded-xl border bg-academic-paper dark:bg-academic-dark-card border-academic-gold/60 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-serif font-bold text-lg ${
                          calculatedScore >= 14
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : "bg-rose-100 text-rose-900 border border-rose-300"
                        }`}
                      >
                        {calculatedScore} / 20
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-academic-ink dark:text-slate-100">
                          {calculatedScore >= 14
                            ? "Prestation Validée · Seuil d'Excellence Atteint"
                            : "Prestation Non Validée · Révision Obligatoire"}
                        </h4>
                        <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-sans">
                          {calculatedScore >= 14
                            ? "Félicitations. La chaîne des accords fondamentaux et le lexique ont été respectés."
                            : "Le seuil minimal officiel est de 14/20. Consultez les pièges identifiés ci-dessous."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Liste des Pièges & Fautes */}
                  {detectedErrors.length > 0 ? (
                    <div className="space-y-2 pt-2 border-t border-academic-border-subtle dark:border-academic-dark-border">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block font-sans">
                        Écarts relevés par le crible pénal :
                      </span>
                      <ul className="space-y-1.5">
                        {detectedErrors.map((err, i) => (
                          <li
                            key={i}
                            className="text-xs font-serif text-academic-ink dark:text-slate-200 flex items-start gap-2 bg-white dark:bg-academic-dark-surface p-2.5 rounded-lg border border-rose-200 dark:border-rose-950"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            <span>{err}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-serif font-bold bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      Zéro faute relevée sur les points critiques de contrôle ! Votre graphie est rigoureusement conforme.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ONGLET 2 : RÉVISION ÉDITORIALE (30 COQUILLES) */}
          {activeTab === "editorial" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-academic-ink dark:text-slate-100">
                      Épreuve CORR-LAB-01 : Le Manuscrit du Jeune Éditeur
                    </h3>
                    <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-sans">
                      Texte d&apos;épreuve de 595 mots comportant 30 coquilles et solécismes pré-calibrés
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRevealedCorrections(!revealedCorrections)}
                    className="px-3 py-1.5 rounded-lg bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold hover:bg-slate-800 transition-all font-sans"
                  >
                    {revealedCorrections
                      ? "Masquer le Corrigé Philologique"
                      : "Afficher le Corrigé & les 30 Règles"}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-academic-dark-surface border border-academic-border-subtle dark:border-academic-dark-border text-xs font-serif leading-relaxed text-academic-ink dark:text-slate-100 space-y-3">
                  <p>
                    « C’est dans les salons feutrés d’une maison d’édition parisienne que s’est déroulé la réunion la plus houleuse de l’année. Les manuscrits qu’avaient déposé les auteurs sur la table d’acajou étaient recouverts d’une fine poussière bleuâtre. Quels que soient les mérites de ces ouvrages, nul éditeur scrupuleux n’eût toléré les négligences criantes qui en parsemaient les pages. Les directeurs littéraires se sont téléphonés pendant des heures sans parvenir à s’accorder. »
                  </p>
                  <p>
                    « Les deux cents pages qu’a coûté ce projet d’anthologie ont épuisé la trésorerie. Les fautes d’accord que nous avons relevé prouvent que les correcteurs se sont laissé aller à une déplorable indolence. Des discours entiers, quoiqu’ils fussent applaudis, se sont évanouis en vaine fumée. »
                  </p>
                </div>

                {revealedCorrections && (
                  <div className="space-y-3 pt-3 border-t border-academic-border-subtle dark:border-academic-dark-border animate-fadeIn">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-sans">
                      Tableau Critique des Principales Coquilles Détectées :
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-academic-dark-surface border border-academic-border">
                        <span className="font-bold text-rose-600 line-through">s&apos;est déroulé la réunion</span>{" "}
                        $\rightarrow$ <span className="font-bold text-emerald-600">s&apos;est déroulée</span>
                        <p className="text-[11px] text-academic-muted mt-0.5">Sujet postposé &apos;la réunion&apos; (fém. sing.).</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-academic-dark-surface border border-academic-border">
                        <span className="font-bold text-rose-600 line-through">qu&apos;avaient déposé les auteurs</span>{" "}
                        $\rightarrow$ <span className="font-bold text-emerald-600">déposés</span>
                        <p className="text-[11px] text-academic-muted mt-0.5">Accord avec le COD antéposé &apos;les manuscrits&apos;.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-academic-dark-surface border border-academic-border">
                        <span className="font-bold text-rose-600 line-through">se sont téléphonés</span>{" "}
                        $\rightarrow$ <span className="font-bold text-emerald-600">téléphoné</span>
                        <p className="text-[11px] text-academic-muted mt-0.5">Téléphoner à quelqu&apos;un : pronom se est COI, participe invariable.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-academic-dark-surface border border-academic-border">
                        <span className="font-bold text-rose-600 line-through">se sont laissé aller</span>{" "}
                        $\rightarrow$ <span className="font-bold text-emerald-600">laissé</span>
                        <p className="text-[11px] text-academic-muted mt-0.5">Laisser suivi d&apos;un infinitif : invariable (Grevisse / Réforme 1990).</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ONGLET 3 : ÉLOCUTION & LIAISONS */}
          {activeTab === "oratory" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-academic-ink dark:text-slate-100">
                      Partition d&apos;Élocution : Bossuet, Oraison funèbre d&apos;Henriette d&apos;Angleterre (1670)
                    </h3>
                    <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-sans">
                      Cartographie des liaisons obligatoires (<span className="text-emerald-600 font-bold">‿</span>) et interdites (<span className="text-rose-600 font-bold">❌</span>)
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      playSegment(
                        "O nuit désastreuse ! ô nuit effroyable, où retentit tout à coup, comme un éclat de tonnerre, cette étonnante nouvelle : Madame se meurt ! Madame est morte !"
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-bold hover:bg-amber-200 transition-all flex items-center gap-1.5 font-sans"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Écouter le Modèle Vocal
                  </button>
                </div>

                <div className="p-5 rounded-xl bg-white dark:bg-academic-dark-surface border border-academic-border-subtle dark:border-academic-dark-border font-serif text-sm leading-loose text-academic-ink dark:text-slate-100 space-y-2">
                  <p>
                    O nuit désastreuse ! || ô nuit
                    <span className="text-emerald-600 font-bold">‿</span>effroyable, ↗ | où retentit tout
                    <span className="text-emerald-600 font-bold">‿</span>à coup, ↗ | comme
                    <span className="text-emerald-600 font-bold">‿</span>un éclat de tonnerre, ↗ | cette
                    <span className="text-emerald-600 font-bold">‿</span>étonnante nouvelle : || Madame se meurt ! ↗ || Madame est morte ! ↘ ||
                  </p>
                  <p>
                    Qui de nous ↗ | n&apos;eût pensé ↗ | que la jeunesse, | la grâce ↗ | et{" "}
                    <span className="text-rose-600 font-bold">❌</span> la grandeur ↗ | la dussent garantir ↗ | d&apos;un coup si funeste ? ↘ ||
                  </p>
                  <p>
                    Mais la grandeur ↗ | n&apos;est qu&apos;un vain songe, ↘ | et{" "}
                    <span className="text-rose-600 font-bold">❌</span> la jeunesse ↗ | un printemps trompeur. ↘ ||
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300">
                    <span className="font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Liaison Obligatoire (‿)
                    </span>
                    <p className="mt-1 text-[11px] leading-relaxed">
                      &apos;tout‿à coup&apos; (/tu.t‿a.ku/) et &apos;comme‿un éclat&apos; (/kɔ.m‿œ̃.n‿e.kla/). L&apos;omission constitue une faute orthoépique en déclamation noble.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-300">
                    <span className="font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Liaison Interdite (❌)
                    </span>
                    <p className="mt-1 text-[11px] leading-relaxed">
                      Après la conjonction &apos;et&apos; (&apos;et ❌ la grandeur&apos;). La liaison constitue un pataquès impardonnable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ONGLET 4 : ANNALES D'EXAMENS */}
          {activeTab === "exams" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-academic-gold">
                      EXAM-S1
                    </span>
                    <span className="text-[10px] text-academic-muted">Semestre 1</span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-academic-ink dark:text-slate-100">
                    Fondations & Norme Supérieure
                  </h4>
                  <p className="text-[11px] text-academic-muted line-clamp-2">
                    Buffon (*Discours sur le style*), Valéry (*La syntaxe*), Bossuet.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-academic-gold">
                      EXAM-S2
                    </span>
                    <span className="text-[10px] text-academic-muted">Semestre 2</span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-academic-ink dark:text-slate-100">
                    Architecture Syntaxique & Complexité
                  </h4>
                  <p className="text-[11px] text-academic-muted line-clamp-2">
                    La Bruyère (*Caractères*), Jean Paulhan, Racine (*Phèdre*).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-academic-gold space-y-2 shadow-fine">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-academic-gold">
                      FINAL-C1 (BMNO)
                    </span>
                    <span className="text-[10px] font-bold text-amber-900 dark:text-amber-300">
                      Sortie Cycle 1
                    </span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-academic-ink dark:text-slate-100">
                    Brevet de Maîtrise Normative
                  </h4>
                  <p className="text-[11px] text-academic-muted line-clamp-2">
                    Grand concours d&apos;orthographe (415 mots), 20 phrases de Tesnière, Politzer.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border space-y-2">
                <span className="text-xs font-bold text-academic-ink dark:text-slate-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-academic-gold" />
                  Consignes officielles d&apos;accès aux épreuves
                </span>
                <p className="text-xs text-academic-muted dark:text-academic-dark-muted font-serif leading-relaxed">
                  Toutes les annales d&apos;examens et corrigés de référence sont conservés dans le répertoire{" "}
                  <code className="text-[11px] font-mono text-amber-600 bg-amber-50 dark:bg-amber-950 px-1 py-0.5 rounded">
                    06-assessments/
                  </code>
                  . Les épreuves peuvent être imprimées sous forme de fascicules ou rédigées sur table sous conditions de concours.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pied de Page Institutionnel */}
        <div className="px-6 py-3 border-t border-academic-border dark:border-academic-dark-border bg-academic-paper/80 dark:bg-academic-dark-card/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-academic-muted dark:text-academic-dark-muted font-sans">
            <Sparkles className="w-3.5 h-3.5 text-academic-gold" />
            <span>Institut Supérieur de Langue Française · World-Class French</span>
          </div>

          <button
            type="button"
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold hover:bg-slate-800 transition-all font-sans"
          >
            Terminer la Séance
          </button>
        </div>
      </div>
    </div>
  );
};
