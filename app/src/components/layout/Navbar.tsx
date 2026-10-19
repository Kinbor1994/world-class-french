"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Brain,
  Timer,
  Bell,
  Compass,
  ChevronDown,
  Sparkles,
  BookOpen,
  Calendar,
  Database,
  RefreshCw,
  Sun,
  Moon,
  Award,
  User,
  Menu,
  X,
  ShieldCheck,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useAppStore, computeCardRetention } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type { Stage } from "@/types/curriculum";

interface NavbarProps {
  onOpenDiagnostic: () => void;
  onOpenSprint: () => void;
  onOpenSrs: () => void;
  onOpenReminders: () => void;
  onOpenPracticalWork: () => void;
  onOpenAuth: () => void;
  onOpenTools?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDiagnostic,
  onOpenSprint,
  onOpenSrs,
  onOpenReminders,
  onOpenPracticalWork,
  onOpenAuth,
  onOpenTools,
}) => {
  const {
    currentStage,
    setStage,
    xp,
    streak,
    srsCards,
    simulatedHoursOffset,
    retentionThreshold,
    syncStatus,
    syncWithCloud,
    themeMode,
    toggleTheme,
    isAuthenticated,
    displayName,
    userEmail,
    logout,
  } = useAppStore();

  const [isStageMenuOpen, setIsStageMenuOpen] = useState<boolean>(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState<boolean>(false);

  const stageMenuRef = useRef<HTMLDivElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  // Fermeture automatique au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (stageMenuRef.current && !stageMenuRef.current.contains(target)) {
        setIsStageMenuOpen(false);
      }
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(target)) {
        setIsToolsMenuOpen(false);
      }
    };

    if (isStageMenuOpen || isToolsMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStageMenuOpen, isToolsMenuOpen]);

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

  const handleHamburgerClick = () => {
    // Sur mobile, ouvrir le tiroir d'outils mobile si fourni
    if (typeof window !== "undefined" && window.innerWidth < 768 && onOpenTools) {
      onOpenTools();
    } else {
      setIsToolsMenuOpen(!isToolsMenuOpen);
    }
  };

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-40 w-full bg-white/95 dark:bg-academic-dark-surface/95 backdrop-blur-md border-b border-academic-border dark:border-academic-dark-border transition-colors overflow-x-clip"
    >
      <div
        suppressHydrationWarning
        className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4 w-full"
      >
        {/* ================================================================= */}
        {/* SECTION GAUCHE : Identité & Sélecteur de Palier */}
        {/* ================================================================= */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 shrink">
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-academic-navy dark:bg-academic-dark-card border border-amber-900/20 dark:border-amber-500/20 flex items-center justify-center text-amber-500 dark:text-amber-400 font-serif font-bold text-sm shadow-fine shrink-0">
              W
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-[11px] font-bold tracking-widest uppercase text-academic-ink dark:text-slate-100 font-sans">
                World-Class French
              </div>
              <div className="text-[9px] uppercase tracking-wider text-academic-muted dark:text-academic-dark-muted font-medium">
                Institut de Haute Langue
              </div>
            </div>
          </div>

          <div className="h-5 w-px bg-academic-border dark:border-academic-dark-border hidden md:block" />

          {/* Sélecteur de Palier contextuel */}
          <div className="relative min-w-0" ref={stageMenuRef}>
            <button
              type="button"
              onClick={() => setIsStageMenuOpen(!isStageMenuOpen)}
              className="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-academic-border dark:border-academic-dark-border hover:border-academic-gold/50 dark:hover:border-academic-gold/50 transition-all bg-academic-paper dark:bg-academic-dark-card text-academic-ink dark:text-slate-200 min-w-0"
            >
              <BookOpen className="w-3.5 h-3.5 text-academic-gold shrink-0" />
              <div className="text-left min-w-0">
                <span className="text-[9px] uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted block leading-none mb-0.5">
                  Palier {currentStage}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-academic-ink dark:text-slate-100 flex items-center gap-1 font-serif max-w-[95px] min-[360px]:max-w-[125px] sm:max-w-[160px] truncate">
                  {currentStageInfo?.shortName}
                  <ChevronDown className="w-3 h-3 text-academic-muted shrink-0" />
                </span>
              </div>
            </button>

            {/* Menu des 8 Paliers répartis en 3 Cycles */}
            {isStageMenuOpen && (
              <div className="fixed inset-x-3 top-16 sm:absolute sm:inset-x-auto sm:top-full sm:left-0 sm:mt-2 sm:w-96 bg-white dark:bg-academic-dark-surface rounded-xl border border-academic-border dark:border-academic-dark-border shadow-elevated p-3 z-50 flex flex-col gap-3 max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
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

        {/* ================================================================= */}
        {/* SECTION CENTRALE : Les 2 Actions Clés d'Étude Quotidienne (Desktop) */}
        {/* ================================================================= */}
        <div className="hidden md:flex items-center gap-2">
          {/* Bouton Répétition Espacée fata.srs */}
          <button
            type="button"
            onClick={onOpenSrs}
            title="Consulter la file de répétition espacée"
            className="flex items-center gap-2 px-3 py-1.5 bg-academic-paper dark:bg-academic-dark-card hover:bg-white dark:hover:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border rounded-lg text-xs font-semibold text-academic-ink dark:text-slate-200 transition-all shadow-fine hover:border-academic-gold/50"
          >
            <Brain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-sans">Mémoire</span>
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

          {/* Bouton Sprint Quotidien 3 min */}
          <button
            type="button"
            onClick={onOpenSprint}
            className="flex items-center gap-2 px-3 py-1.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy rounded-lg text-xs font-bold hover:bg-slate-800 dark:hover:bg-white transition-all shadow-fine font-sans"
          >
            <Timer className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
            <span>Sprint Quotidien</span>
          </button>
        </div>

        {/* ================================================================= */}
        {/* SECTION DROITE : Indicateurs Clés, Profil & Menu Hamburger */}
        {/* ================================================================= */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Régime Bienveillant Débutant ou XP (Desktop Large) */}
          {isBeginnerStage ? (
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-800 dark:text-emerald-300 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Bouclier Débutant</span>
            </div>
          ) : (
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-academic-ink dark:text-slate-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{xp} XP</span>
            </div>
          )}

          {/* Série de jours (Streak) */}
          <div
            title={`${streak} jour(s) consécutif(s) d'étude`}
            className="flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-academic-ink dark:text-slate-200 text-xs font-semibold"
          >
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-academic-gold shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs">{streak} j.</span>
          </div>

          {/* Profil Apprenant / Connexion */}
          <button
            type="button"
            onClick={onOpenAuth}
            title={
              isAuthenticated
                ? `${displayName} (${userEmail || "Compte vérifié"})`
                : "Se connecter ou créer un compte"
            }
            aria-label="Profil apprenant"
            className={`flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg transition-colors text-xs font-semibold border ${
              isAuthenticated
                ? "bg-amber-50/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-800"
                : "border-academic-border dark:border-academic-dark-border text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-100 hover:bg-academic-paper dark:hover:bg-academic-dark-card"
            }`}
          >
            {isAuthenticated ? (
              <span className="w-5 h-5 rounded-full bg-academic-navy dark:bg-slate-700 flex items-center justify-center text-amber-400 text-[10px] font-bold font-serif shrink-0">
                {displayName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)}
              </span>
            ) : (
              <User className="w-3.5 h-3.5 shrink-0" />
            )}
            <span className="hidden sm:inline">
              {isAuthenticated ? displayName.split(" ")[0] : "Connexion"}
            </span>
          </button>

          {/* =============================================================== */}
          {/* LE MENU HAMBURGER MODERNE / POP-OVER UNIFIÉ                     */}
          {/* Affiché sur Desktop (>= md) car le mobile dispose du BottomNav  */}
          {/* =============================================================== */}
          <div className="hidden md:block relative" ref={toolsMenuRef}>
            <button
              type="button"
              onClick={handleHamburgerClick}
              aria-expanded={isToolsMenuOpen}
              aria-label="Ouvrir le menu des outils et ateliers"
              title="Menu des outils et ateliers"
              className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${
                isToolsMenuOpen
                  ? "bg-academic-navy text-white dark:bg-slate-100 dark:text-academic-navy border-transparent"
                  : "bg-academic-paper dark:bg-academic-dark-card border-academic-border dark:border-academic-dark-border text-academic-ink dark:text-slate-200 hover:border-academic-gold/60"
              }`}
            >
              {isToolsMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>

            {/* Menu Popover Desktop Élégant */}
            {isToolsMenuOpen && (
              <div className="hidden md:flex flex-col absolute right-0 top-full mt-2 w-80 bg-white dark:bg-academic-dark-surface rounded-2xl border border-academic-border dark:border-academic-dark-border shadow-elevated p-3 z-50 animate-in fade-in zoom-in-95 duration-150 space-y-3">
                {/* En-tête : État Apprenant */}
                <div className="p-2.5 rounded-xl bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-academic-navy dark:bg-slate-700 flex items-center justify-center text-amber-400 text-xs font-serif font-bold">
                      {isAuthenticated
                        ? displayName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
                        : "W"}
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-bold text-academic-ink dark:text-slate-100 font-sans truncate max-w-[130px]">
                        {isAuthenticated ? displayName : "Visiteur Invité"}
                      </div>
                      <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-mono">
                        {isAuthenticated ? "Session synchronisée" : "Données locales"}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsToolsMenuOpen(false);
                      onOpenAuth();
                    }}
                    className="text-[10px] font-bold text-academic-gold hover:underline"
                  >
                    {isAuthenticated ? "Profil" : "S'inscrire"}
                  </button>
                </div>

                {/* Section 1 : Ateliers & Progression */}
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted px-2 py-0.5">
                    Étude & Perfectionnement
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsToolsMenuOpen(false);
                      onOpenPracticalWork();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-academic-paper dark:hover:bg-academic-dark-card transition-colors text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-academic-gold shrink-0">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-academic-ink dark:text-slate-200 group-hover:text-academic-gold transition-colors">
                          Ateliers & Examens
                        </div>
                        <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
                          Dictées, grammaire & ateliers oraux
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-academic-muted group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsToolsMenuOpen(false);
                      onOpenDiagnostic();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-academic-paper dark:hover:bg-academic-dark-card transition-colors text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-academic-ink dark:text-slate-200 group-hover:text-academic-gold transition-colors">
                          Test de Positionnement
                        </div>
                        <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
                          Diagnostic adaptatif en 4 questions
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-academic-muted group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Section 2 : Synchronisation & Outils */}
                <div className="space-y-1 pt-1 border-t border-academic-border-subtle dark:border-academic-dark-border">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted px-2 py-0.5">
                    Données & Rappels
                  </div>

                  <div className="p-2 rounded-lg bg-academic-paper dark:bg-academic-dark-card border border-academic-border-subtle dark:border-academic-dark-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-academic-ink dark:text-slate-200 flex items-center gap-1.5">
                          <span>Cloud Neon</span>
                          {syncStatus === "synced" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          )}
                        </div>
                        <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-mono">
                          {syncStatus === "syncing"
                            ? "Synchronisation..."
                            : syncStatus === "synced"
                            ? "À jour"
                            : syncStatus === "error"
                            ? "Erreur réseau"
                            : "Prêt"}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => void syncWithCloud()}
                      disabled={syncStatus === "syncing"}
                      className="px-2 py-1 rounded bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border text-[10px] font-bold text-academic-ink dark:text-slate-200 hover:border-academic-gold/50 flex items-center gap-1 shadow-fine"
                    >
                      <RefreshCw
                        className={`w-3 h-3 ${
                          syncStatus === "syncing" ? "animate-spin text-amber-600" : ""
                        }`}
                      />
                      <span>Sync</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsToolsMenuOpen(false);
                      onOpenReminders();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-academic-paper dark:hover:bg-academic-dark-card transition-colors text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-academic-gold shrink-0">
                        <Bell className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-academic-ink dark:text-slate-200 group-hover:text-academic-gold transition-colors">
                          Rappels & Calendrier
                        </div>
                        <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
                          Notifications & export .ics
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-academic-muted group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Section 3 : Préférences & Déconnexion */}
                <div className="space-y-1 pt-1 border-t border-academic-border-subtle dark:border-academic-dark-border">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-academic-muted dark:text-academic-dark-muted px-2 py-0.5">
                    Préférences
                  </div>

                  {/* Bascule Thème Clair / Sombre */}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-academic-paper dark:hover:bg-academic-dark-card transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-academic-ink dark:text-slate-200 shrink-0">
                        {themeMode === "dark" ? (
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Moon className="w-3.5 h-3.5 text-academic-navy" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-academic-ink dark:text-slate-200">
                          Thème {themeMode === "dark" ? "Sombre (Midnight)" : "Clair (Ivoire)"}
                        </div>
                        <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
                          Basculer vers {themeMode === "dark" ? "Clair" : "Sombre"}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-academic-gold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                      {themeMode === "dark" ? "Nuit" : "Jour"}
                    </span>
                  </button>

                  {/* Bouton de déconnexion si connecté */}
                  {isAuthenticated && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsToolsMenuOpen(false);
                        void logout();
                      }}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors text-left text-rose-600 dark:text-rose-400"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center shrink-0">
                        <LogOut className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold">Se déconnecter</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
