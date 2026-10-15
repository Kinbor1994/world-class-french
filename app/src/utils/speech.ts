/**
 * Utilitaire de synthèse vocale Web Speech API (fr-FR).
 * Supporte le mode normal (1.0x) et lent (0.65x pour les débutants).
 */

export function speakFrench(text: string, rate: number = 1.0, isMuted: boolean = false): void {
  if (isMuted || typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  try {
    window.speechSynthesis.cancel(); // Arrête la lecture précédente

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = Math.max(0.5, Math.min(1.5, rate));
    utterance.pitch = 1.0;

    // Sélection d'une voix française naturelle si disponible
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find(
      (v) => v.lang.startsWith("fr") || v.lang.includes("FR")
    );
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("Speech synthesis error:", err);
  }
}
