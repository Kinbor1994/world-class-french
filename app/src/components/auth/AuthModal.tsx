"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  LogIn,
  UserPlus,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Shield,
  Sparkles,
  BookOpen,
  Calendar,
  AlertCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

type AuthTab = "login" | "register" | "profile";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CYCLE_LABELS: Record<number, { label: string; color: string }> = {
  1: { label: "Cycle 1 · Initiation", color: "text-emerald-600 dark:text-emerald-400" },
  2: { label: "Cycle 1 · Fondations", color: "text-emerald-600 dark:text-emerald-400" },
  3: { label: "Cycle 1 · Consolidation", color: "text-emerald-600 dark:text-emerald-400" },
  4: { label: "Cycle 2 · Autonomie", color: "text-blue-600 dark:text-blue-400" },
  5: { label: "Cycle 2 · Syntaxe", color: "text-blue-600 dark:text-blue-400" },
  6: { label: "Cycle 2 · Argumentation", color: "text-blue-600 dark:text-blue-400" },
  7: { label: "Cycle 3 · Haute Éloquence", color: "text-amber-600 dark:text-amber-400" },
  8: { label: "Cycle 3 · Philologie", color: "text-amber-600 dark:text-amber-400" },
};

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const {
    isAuthenticated,
    authLoading,
    authError,
    userId,
    userEmail,
    displayName,
    currentStage,
    xp,
    streak,
    register,
    login,
    logout,
    clearAuthError,
  } = useAppStore();

  const [activeTab, setActiveTab] = useState<AuthTab>(
    isAuthenticated ? "profile" : "login"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [localSuccess, setLocalSuccess] = useState<string | null>(null);

  // Reset form when modal opens/closes or auth state changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(isAuthenticated ? "profile" : "login");
      setEmail("");
      setPassword("");
      setName("");
      setShowPassword(false);
      setLocalSuccess(null);
      clearAuthError();
    }
  }, [isOpen, isAuthenticated, clearAuthError]);

  const handleLogin = useCallback(async () => {
    setLocalSuccess(null);
    const ok = await login(email, password);
    if (ok) {
      setLocalSuccess("Connexion réussie !");
      setTimeout(() => onClose(), 800);
    }
  }, [email, password, login, onClose]);

  const handleRegister = useCallback(async () => {
    setLocalSuccess(null);
    const ok = await register(email, password, name);
    if (ok) {
      setLocalSuccess("Inscription réussie ! Votre progression a été rattachée à votre compte.");
      setTimeout(() => onClose(), 1200);
    }
  }, [email, password, name, register, onClose]);

  const handleLogout = useCallback(async () => {
    await logout();
    setActiveTab("login");
    setLocalSuccess(null);
  }, [logout]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !authLoading) {
        if (activeTab === "login") void handleLogin();
        else if (activeTab === "register") void handleRegister();
      }
    },
    [activeTab, authLoading, handleLogin, handleRegister]
  );

  if (!isOpen) return null;

  const cycleInfo = CYCLE_LABELS[currentStage] || { label: "Palier inconnu", color: "text-gray-500" };
  const initials = displayName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-academic-dark-surface rounded-2xl shadow-2xl border border-academic-border dark:border-academic-dark-border overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="relative bg-academic-navy dark:bg-slate-800 px-6 py-5">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg font-serif tracking-tight">
                {isAuthenticated ? "Mon Profil d'Apprenant" : "Espace Apprenant"}
              </h2>
              <p className="text-white/60 text-xs font-sans">
                Institut de Haute Langue Française
              </p>
            </div>
          </div>

          {/* Tabs */}
          {!isAuthenticated && (
            <div className="flex gap-1 mt-4 bg-white/5 rounded-lg p-1">
              <button
                type="button"
                onClick={() => { setActiveTab("login"); clearAuthError(); }}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "login"
                    ? "bg-white/15 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                Connexion
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab("register"); clearAuthError(); }}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "register"
                    ? "bg-white/15 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                Inscription
              </button>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Success message */}
          {localSuccess && (
            <div className="flex items-start gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-800 dark:text-emerald-300 text-sm">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{localSuccess}</span>
            </div>
          )}

          {/* Error message */}
          {authError && (
            <div className="flex items-start gap-2 p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-lg text-rose-700 dark:text-rose-300 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* LOGIN TAB */}
          {activeTab === "login" && !isAuthenticated && (
            <>
              <div className="space-y-3">
                <div>
                  <label htmlFor="auth-email" className="block text-xs font-semibold text-academic-ink dark:text-slate-200 mb-1.5">
                    Adresse e-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-academic-muted dark:text-academic-dark-muted" />
                    <input
                      id="auth-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.fr"
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-2.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-sm text-academic-ink dark:text-slate-200 placeholder:text-academic-muted/50 focus:outline-none focus:ring-2 focus:ring-academic-gold/40 focus:border-academic-gold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="auth-password" className="block text-xs font-semibold text-academic-ink dark:text-slate-200 mb-1.5">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-academic-muted dark:text-academic-dark-muted" />
                    <input
                      id="auth-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="w-full pl-10 pr-10 py-2.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-sm text-academic-ink dark:text-slate-200 placeholder:text-academic-muted/50 focus:outline-none focus:ring-2 focus:ring-academic-gold/40 focus:border-academic-gold transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-200 transition-colors"
                      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => void handleLogin()}
                disabled={authLoading || !email || !password}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy rounded-lg text-sm font-bold hover:bg-slate-800 dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-fine"
              >
                {authLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <LogIn className="w-4 h-4" />
                )}
                {authLoading ? "Connexion…" : "Se connecter"}
              </button>

              <p className="text-center text-xs text-academic-muted dark:text-academic-dark-muted">
                Pas encore de compte ?{" "}
                <button
                  type="button"
                  onClick={() => { setActiveTab("register"); clearAuthError(); }}
                  className="text-academic-gold hover:underline font-semibold"
                >
                  Créer un compte
                </button>
              </p>
            </>
          )}

          {/* REGISTER TAB */}
          {activeTab === "register" && !isAuthenticated && (
            <>
              <div className="space-y-3">
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-semibold text-academic-ink dark:text-slate-200 mb-1.5">
                    Nom d&apos;apprenant
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-academic-muted dark:text-academic-dark-muted" />
                    <input
                      id="reg-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre prénom ou pseudonyme"
                      autoComplete="name"
                      className="w-full pl-10 pr-4 py-2.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-sm text-academic-ink dark:text-slate-200 placeholder:text-academic-muted/50 focus:outline-none focus:ring-2 focus:ring-academic-gold/40 focus:border-academic-gold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-email" className="block text-xs font-semibold text-academic-ink dark:text-slate-200 mb-1.5">
                    Adresse e-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-academic-muted dark:text-academic-dark-muted" />
                    <input
                      id="reg-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.fr"
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-2.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-sm text-academic-ink dark:text-slate-200 placeholder:text-academic-muted/50 focus:outline-none focus:ring-2 focus:ring-academic-gold/40 focus:border-academic-gold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-password" className="block text-xs font-semibold text-academic-ink dark:text-slate-200 mb-1.5">
                    Mot de passe
                    <span className="font-normal text-academic-muted dark:text-academic-dark-muted ml-1">(8 caractères min.)</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-academic-muted dark:text-academic-dark-muted" />
                    <input
                      id="reg-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="w-full pl-10 pr-10 py-2.5 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg text-sm text-academic-ink dark:text-slate-200 placeholder:text-academic-muted/50 focus:outline-none focus:ring-2 focus:ring-academic-gold/40 focus:border-academic-gold transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-academic-muted hover:text-academic-ink dark:text-academic-dark-muted dark:hover:text-slate-200 transition-colors"
                      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                  <strong>Migration automatique</strong> — Votre progression accumulée en tant qu&apos;invité (XP, leçons, cartes mémoires) sera automatiquement rattachée à votre nouveau compte.
                </p>
              </div>

              <button
                type="button"
                onClick={() => void handleRegister()}
                disabled={authLoading || !email || !password || password.length < 8 || !name || name.trim().length < 2}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-academic-gold text-white rounded-lg text-sm font-bold hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-fine"
              >
                {authLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <UserPlus className="w-4 h-4" />
                )}
                {authLoading ? "Inscription…" : "Créer mon compte"}
              </button>

              <p className="text-center text-xs text-academic-muted dark:text-academic-dark-muted">
                Déjà inscrit ?{" "}
                <button
                  type="button"
                  onClick={() => { setActiveTab("login"); clearAuthError(); }}
                  className="text-academic-gold hover:underline font-semibold"
                >
                  Se connecter
                </button>
              </p>
            </>
          )}

          {/* PROFILE TAB */}
          {isAuthenticated && activeTab === "profile" && (
            <>
              {/* Avatar & identity */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-academic-navy dark:bg-slate-700 flex items-center justify-center text-amber-400 font-serif font-bold text-lg border-2 border-academic-gold/30">
                  {initials || "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-academic-ink dark:text-slate-100 font-serif truncate">
                    {displayName}
                  </h3>
                  <p className="text-xs text-academic-muted dark:text-academic-dark-muted truncate">
                    {userEmail || userId}
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-xl">
                  <Sparkles className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-academic-ink dark:text-slate-100 font-mono">
                    {xp}
                  </div>
                  <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-medium uppercase tracking-wider">
                    XP Total
                  </div>
                </div>
                <div className="text-center p-3 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-xl">
                  <Calendar className="w-4 h-4 text-academic-gold mx-auto mb-1" />
                  <div className="text-lg font-bold text-academic-ink dark:text-slate-100 font-mono">
                    {streak}
                  </div>
                  <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-medium uppercase tracking-wider">
                    Jours
                  </div>
                </div>
                <div className="text-center p-3 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-xl">
                  <BookOpen className="w-4 h-4 text-indigo-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-academic-ink dark:text-slate-100 font-mono">
                    {currentStage}
                  </div>
                  <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-medium uppercase tracking-wider">
                    Palier
                  </div>
                </div>
              </div>

              {/* Cycle badge */}
              <div className="flex items-center justify-center gap-2 py-2 px-4 bg-academic-paper dark:bg-academic-dark-card border border-academic-border dark:border-academic-dark-border rounded-lg">
                <Shield className="w-4 h-4 text-academic-gold" />
                <span className={`text-sm font-semibold ${cycleInfo.color}`}>
                  {cycleInfo.label}
                </span>
              </div>

              {/* Logout */}
              <button
                type="button"
                onClick={() => void handleLogout()}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 rounded-lg text-sm font-semibold hover:bg-rose-100 dark:hover:bg-rose-950/50 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Se déconnecter
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-academic-paper/50 dark:bg-academic-dark-card/50 border-t border-academic-border dark:border-academic-dark-border">
          <p className="text-center text-[10px] text-academic-muted dark:text-academic-dark-muted">
            Vos données sont chiffrées et stockées sur Neon PostgreSQL sécurisé.
          </p>
        </div>
      </div>
    </div>
  );
};
