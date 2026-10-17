"use client";

import React, { useState } from "react";
import { Bell, Calendar, X, Clock } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { generateDailyIcsFile } from "@/utils/calendar";

interface RemindersConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RemindersConfigModal: React.FC<RemindersConfigModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    dailyReminderHour,
    setDailyReminderHour,
    notificationsEnabled,
    setNotificationsEnabled,
  } = useAppStore();

  const [notificationStatus, setNotificationStatus] = useState<string>("");

  if (!isOpen) return null;

  const handleRequestNotifications = async () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          setNotificationsEnabled(true);
          setNotificationStatus("Notifications Web Push activées avec succès !");
          new Notification("World-Class French", {
            body: "Rappel quotidien configuré. Votre micro-session vous attend.",
            icon: "/icons/icon-192.svg",
          });
        } else {
          setNotificationStatus("Autorisation refusée par le navigateur.");
        }
      } catch (err) {
        setNotificationStatus("Erreur lors de l'activation des notifications.");
      }
    } else {
      setNotificationStatus("Les notifications ne sont pas supportées sur ce navigateur.");
    }
  };

  const handleDownloadCalendar = () => {
    generateDailyIcsFile(dailyReminderHour);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-academic-navy/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
    >
      <div className="bg-white dark:bg-academic-dark-surface rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-modal border border-academic-border dark:border-academic-dark-border space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-academic-border-subtle dark:border-academic-dark-border">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg flex items-center justify-center text-academic-gold">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif text-academic-ink dark:text-slate-100">
                Régularité & Synchronisation
              </h3>
              <div className="text-[10px] text-academic-muted dark:text-academic-dark-muted font-mono uppercase">
                Routines d'ancrage mémoriel
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="text-academic-muted hover:text-academic-ink dark:hover:text-slate-100 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-academic-muted dark:text-academic-dark-muted leading-relaxed">
          Trois à cinq minutes d'apprentissage quotidien suffisent pour vaincre la courbe d'amnésie d'Ebbinghaus et ancrer durablement la morphosyntaxe.
        </p>

        {/* Choix de l'horaire */}
        <div className="p-3.5 bg-academic-paper dark:bg-academic-dark-card rounded-xl border border-academic-border-subtle dark:border-academic-dark-border">
          <label className="flex items-center justify-between text-xs font-semibold text-academic-ink dark:text-slate-200">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-academic-gold" />
              <span>Horaire de la session quotidienne :</span>
            </span>
            <select
              value={dailyReminderHour}
              onChange={(e) => setDailyReminderHour(Number(e.target.value))}
              className="bg-white dark:bg-academic-dark-surface border border-academic-border dark:border-academic-dark-border rounded px-2.5 py-1 font-mono font-bold text-xs text-academic-ink dark:text-slate-100 focus:outline-none"
            >
              {Array.from({ length: 24 }).map((_, h) => (
                <option key={h} value={h}>
                  {h < 10 ? `0${h}` : h}:00
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Actions de synchronisation */}
        <div className="space-y-2.5 pt-1">
          <button
            type="button"
            onClick={handleRequestNotifications}
            className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between shadow-fine ${
              notificationsEnabled
                ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold"
                : "border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface hover:border-academic-gold text-academic-ink dark:text-slate-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-academic-gold shrink-0" />
              <div>
                <div className="font-semibold font-serif">Notifications Web Push</div>
                <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted font-normal">
                  {notificationsEnabled ? "Notifications activées" : "Recevoir un signal discret chaque jour"}
                </div>
              </div>
            </div>
            <span className="font-mono text-[11px] text-academic-gold font-bold">
              {notificationsEnabled ? "Actif" : "Activer"}
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="w-full p-3 rounded-xl border border-academic-border dark:border-academic-dark-border bg-white dark:bg-academic-dark-surface hover:border-academic-gold text-left text-xs transition-all flex items-center justify-between shadow-fine"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-academic-gold shrink-0" />
              <div>
                <div className="font-semibold font-serif text-academic-ink dark:text-slate-100">
                  Exporter la routine (.ics)
                </div>
                <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted font-normal">
                  Pour Google Agenda, Apple iCal et Outlook
                </div>
              </div>
            </div>
            <span className="font-mono text-[11px] text-academic-gold font-bold">
              Télécharger
            </span>
          </button>
        </div>

        {notificationStatus && (
          <div className="text-[11px] text-academic-muted dark:text-academic-dark-muted font-medium text-center">
            {notificationStatus}
          </div>
        )}

        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-academic-navy dark:bg-slate-100 text-white dark:text-academic-navy text-xs font-bold rounded-lg shadow-fine hover:bg-slate-800 dark:hover:bg-white transition-all"
          >
            Enregistrer et fermer
          </button>
        </div>
      </div>
    </div>
  );
};
