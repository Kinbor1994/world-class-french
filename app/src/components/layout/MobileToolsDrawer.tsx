"use client";

import React from "react";
import {
  X,
  Database,
  RefreshCw,
  Bell,
  Compass,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import curriculumData from "@/data/compiled-curriculum.json";
import type { Stage } from "@/types/curriculum";

interface MobileToolsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDiagnostic: () => void;
  onOpenReminders: () => void;
  onOpenAuth: () => void;
}

export const MobileToolsDrawer: React.FC<MobileToolsDrawerProps> = ({
  isOpen,
  onClose,
  onOpenDiagnostic,
  onOpenReminders,
  onOpenAuth,
}) => {
  const {
    currentStage,
    xp,
    streak,
    syncStatus,
    syncWithCloud,
    lastSyncedAt,
    syncError,
    isAuthenticated,
    displayName,
    userEmail,
  } = useAppStore();

  if (!isOpen) return null;

  const stages: readonly Stage[] = curriculumData.stages as Stage[];
  const currentStageInfo = stages.find((s) => s.id === currentStage);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu Outils et Paramètres"
    >
      <div className="w-full max-h-[85vh] bg-white dark:bg-academic-dark-surface rounded-t-3xl border-t border-academic-border dark:border-academic-dark-border shadow-2xl flex flex-col overflow-hidden animate-slide-up">
        {/* Poignée de glissement */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 bg-academic-border dark:bg-academic-dark-border rounded-full" />
        </div>

        {/* En-tête */}
        <div className="px-5 py-3 flex items-center justify-between border-b border-academic-border-subtle dark:border-academic-dark-border">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-academic-navy dark:bg-academic-dark-card border border-amber-900/20 flex items-center justify-center font-serif font-bold text-xs text-amber-500">
              W
            </div>
            <div>
              <h3 className="text-sm font-bold text-academic-ink dark:text-slate-100 font-serif">
                Outils & Paramètres
              </h3>
              <p className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-sans">
                Institut de Haute Langue Française
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-academic-muted hover:text-academic-ink dark:hover:text-slate-100 hover:bg-academic-paper dark:hover:bg-academic-dark-card transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corps déroulant */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Carte Profil Apprenant */}
          <div
            onClick={() => {
              onClose();
              onOpenAuth();
            }}
            className="flex items-center justify-between p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-2xl cursor-pointer hover:border-academic-gold/40 transition-all shadow-fine"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-academic-navy dark:bg-slate-700 flex items-center justify-center text-amber-400 font-serif font-bold text-sm border border-academic-gold/30 flex-shrink-0">
                {isAuthenticated
                  ? displayName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
                  : "👤"}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-academic-ink dark:text-slate-100 truncate">
                  {isAuthenticated ? displayName : "Compte Invité"}
                </div>
                <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted truncate">
                  {isAuthenticated ? (userEmail || "Compte certifié") : "Toucher pour se connecter"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-academic-gold text-xs font-semibold flex-shrink-0">
              <span>{isAuthenticated ? "Gérer" : "Connexion"}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Module Synchronisation Cloud Neon */}
          <div className="p-4 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-academic-ink dark:text-slate-100 font-sans">
                  Synchronisation Cloud Neon
                </span>
              </div>
              {syncStatus === "synced" && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  À jour
                </span>
              )}
              {syncStatus === "error" && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-[10px] font-semibold">
                  <AlertCircle className="w-3 h-3" />
                  Erreur
                </span>
              )}
            </div>

            <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted">
              {syncStatus === "syncing" && "Synchronisation avec la base PostgreSQL Neon en cours..."}
              {syncStatus === "synced" && (
                <span>
                  Dernière synchronisation :{" "}
                  {lastSyncedAt ? new Date(lastSyncedAt).toLocaleTimeString() : "À l'instant"}
                </span>
              )}
              {syncStatus === "error" && (
                <span className="text-rose-600 dark:text-rose-400">
                  {syncError || "Échec de connexion au serveur"}
                </span>
              )}
              {syncStatus === "idle" && "Vos données locales sont prêtes à être synchronisées."}
            </div>

            <button
              type="button"
              onClick={() => void syncWithCloud()}
              disabled={syncStatus === "syncing"}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border hover:border-academic-gold/50 rounded-xl text-xs font-bold text-academic-ink dark:text-slate-100 transition-all shadow-fine disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncStatus === "syncing" ? "animate-spin text-amber-600" : "text-academic-gold"}`} />
              <span>{syncStatus === "syncing" ? "Synchronisation…" : "Synchroniser maintenant"}</span>
            </button>
          </div>

          {/* Actions Rapides */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Rappels d'étude */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenReminders();
              }}
              className="flex flex-col items-start gap-1 p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-2xl hover:border-academic-gold/40 transition-all text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-academic-gold">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-academic-ink dark:text-slate-100 mt-1">
                Rappels & Agenda
              </span>
              <span className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
                Notifications & export .ics
              </span>
            </button>

            {/* Test Diagnostique */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDiagnostic();
              }}
              className="flex flex-col items-start gap-1 p-3.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-2xl hover:border-academic-gold/40 transition-all text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-academic-ink dark:text-slate-100 mt-1">
                Test Diagnostique
              </span>
              <span className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
                Recalibrer votre palier
              </span>
            </button>
          </div>

          {/* Informations sur le Palier Actif */}
          <div className="p-3.5 bg-academic-paper/60 dark:bg-academic-dark-card/60 border border-academic-border-subtle dark:border-academic-dark-border rounded-2xl">
            <div className="flex items-center justify-between text-xs">
              <span className="text-academic-muted dark:text-academic-dark-muted font-medium">
                Palier actif
              </span>
              <span className="font-bold text-academic-gold font-mono">
                {currentStageInfo?.badge || `Palier ${currentStage}`}
              </span>
            </div>
            <div className="text-xs font-serif font-bold text-academic-ink dark:text-slate-100 mt-0.5">
              {currentStageInfo?.name}
            </div>
            <div className="flex items-center gap-3 mt-2 text-[11px] text-academic-muted dark:text-academic-dark-muted">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> {xp} XP
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-academic-gold" /> {streak} jours d'affilée
              </span>
            </div>
          </div>
        </div>

        {/* Pied de page du menu */}
        <div className="p-3 bg-academic-paper dark:bg-academic-dark-card border-t border-academic-border dark:border-academic-dark-border text-center">
          <p className="text-[10px] text-academic-muted dark:text-academic-dark-muted">
            World-Class French PWA v1.0.0 · Excellence Académique
          </p>
        </div>
      </div>
    </div>
  );
};
