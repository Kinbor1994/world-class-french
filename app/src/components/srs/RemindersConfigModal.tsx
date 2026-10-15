"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
            body: "Rappel quotidien configuré ! Vous recevrez votre question flash chaque jour.",
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
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border-2 border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-100 dark:bg-sky-900/50 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
              Rappels & Routine
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">
          5 minutes par jour suffisent pour vaincre la courbe de l'oubli et ancrer durablement les compétences.
        </p>

        {/* Choix de l'heure */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 mb-4">
          <label className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Heure du sprint quotidien :</span>
            </span>
            <select
              value={dailyReminderHour}
              onChange={(e) => setDailyReminderHour(Number(e.target.value))}
              className="bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-xl px-3 py-1.5 font-bold text-slate-800 dark:text-slate-100 focus:outline-none"
            >
              {Array.from({ length: 24 }).map((_, h) => (
                <option key={h} value={h}>
                  {h < 10 ? `0${h}` : h}:00
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Activation Notification Web */}
        <div className="p-4 bg-sky-50 dark:bg-sky-950/40 rounded-2xl border border-sky-200 dark:border-sky-800 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-extrabold text-sky-900 dark:text-sky-200">
                Notification Web Push
              </div>
              <div className="text-xs text-sky-700 dark:text-sky-400 font-medium">
                Question flash directe sur votre écran
              </div>
            </div>
            <button
              type="button"
              onClick={handleRequestNotifications}
              className="px-3.5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-xs shadow-sm transition-all"
            >
              {notificationsEnabled ? "Activé ✓" : "Activer"}
            </button>
          </div>
          {notificationStatus && (
            <p className="text-[11px] text-sky-700 dark:text-sky-300 mt-2 font-medium">
              {notificationStatus}
            </p>
          )}
        </div>

        {/* Export calendrier .ics */}
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-extrabold text-emerald-900 dark:text-emerald-200">
                Synchroniser mon Agenda
              </div>
              <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                Google Calendar, Apple, Outlook (.ics)
              </div>
            </div>
            <button
              type="button"
              onClick={handleDownloadCalendar}
              className="px-3.5 py-2 bg-duo-green hover:bg-emerald-600 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Exporter .ics</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 bg-slate-800 dark:bg-slate-700 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all text-sm"
        >
          Fermer
        </button>
      </motion.div>
    </div>
  );
};
