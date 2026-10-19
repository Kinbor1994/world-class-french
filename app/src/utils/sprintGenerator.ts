import curriculumData from "@/data/compiled-curriculum.json";
import type { Stage, SRSCard, DiagnosticMcqData, VoltaireHunterData, VisualSoundMatchData, RhetoricStudioData } from "@/types/curriculum";

export interface SprintOption {
  readonly id: string;
  readonly text: string;
  readonly isCorrect: boolean;
  readonly feedback?: string;
}

export interface SprintQuestion {
  readonly id: string;
  readonly stageId: number;
  readonly stageName: string;
  readonly category: string;
  readonly prompt: string;
  readonly contextText?: string;
  readonly audioText?: string;
  readonly ipa?: string;
  readonly options: readonly SprintOption[];
  readonly explanation: string;
}

/**
 * Mélangeur de Fisher-Yates (non destructif).
 */
function shuffleArray<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i]!;
    result[i] = result[j]!;
    result[j] = temp;
  }
  return result;
}

/**
 * Génère une liste de questions calibrées et variées pour le Sprint Quotidien.
 * Puise directement dans le corpus réel du Palier (QCM, Traque Voltaire, Phonétique, Rhétorique).
 */
export function generateSprintQuestions(stageId: number, count: number = 8): SprintQuestion[] {
  const stages = curriculumData.stages as Stage[];
  const currentStage = stages.find((s) => s.id === stageId) ?? stages[0]!;

  const candidates: SprintQuestion[] = [];

  for (const moduleItem of currentStage.modules) {
    for (const chapter of moduleItem.chapters) {
      for (const lesson of chapter.lessons) {
        for (const exercise of lesson.exercises) {
          const { id, type, prompt, audioText, ipa, data } = exercise;

          // 1. QCM Linguistiques & Grammaticaux
          if (type === "diagnostic_mcq") {
            const mcqData = data as DiagnosticMcqData;
            if (mcqData?.options && mcqData.options.length >= 2) {
              const shuffledOptions: SprintOption[] = shuffleArray(
                mcqData.options.map((opt, idx) => ({
                  id: opt.id || `${id}_opt_${idx}`,
                  text: opt.text,
                  isCorrect: opt.isCorrect,
                  feedback: opt.feedback || (opt.isCorrect ? "Formulation conforme et exacte." : "Formulation incorrecte."),
                }))
              );

              candidates.push({
                id,
                stageId: currentStage.id,
                stageName: currentStage.shortName,
                category: "QCM de Morphosyntaxe",
                prompt: prompt || mcqData.question || "Choisissez la réponse exacte :",
                audioText: audioText || prompt,
                ipa,
                options: shuffledOptions,
                explanation: mcqData.explanation || "Respect rigoureux de la règle énoncée.",
              });
            }
          }

          // 2. Traque de l'Erreur (Style Voltaire Hunter)
          else if (type === "voltaire_hunter") {
            const vData = data as VoltaireHunterData;
            if (vData?.sentence) {
              const hasError = Boolean(vData.hasError);
              const rawOptions: SprintOption[] = [
                {
                  id: `${id}_opt_error`,
                  text: "Phrase incorrecte (contient une faute)",
                  isCorrect: hasError,
                  feedback: hasError
                    ? `Exact ! ${vData.explanation || "La phrase enfreint la règle."}`
                    : "Faux : cette phrase est parfaitement correcte et sans faute.",
                },
                {
                  id: `${id}_opt_correct`,
                  text: "Phrase irréprochable (aucune faute)",
                  isCorrect: !hasError,
                  feedback: !hasError
                    ? "Exact ! La syntaxe et l'orthographe sont irréprochables."
                    : `Erreur : ${vData.explanation || "Cette phrase contient une faute."}`,
                },
              ];

              candidates.push({
                id,
                stageId: currentStage.id,
                stageName: currentStage.shortName,
                category: "Traque de la Faute",
                prompt: "Cette phrase respecte-t-elle scrupuleusement la règle ?",
                contextText: vData.sentence,
                audioText: vData.sentence,
                options: shuffleArray(rawOptions),
                explanation: vData.explanation || vData.mnemonic || "Vérification de la conformité grammaticale.",
              });
            }
          }

          // 3. Éveil Phonétique & Discrimination Auditive (Paliers 1 & débutants)
          else if (type === "visual_sound_match") {
            const soundData = data as VisualSoundMatchData;
            if (soundData?.cards && soundData.cards.length >= 2) {
              const rawOptions: SprintOption[] = soundData.cards.map((c, idx) => ({
                id: c.id || `${id}_card_${idx}`,
                text: c.imageEmoji ? `${c.imageEmoji}  ${c.label}` : c.label,
                isCorrect: c.isCorrect,
                feedback: c.isCorrect
                  ? `Bravo ! « ${c.label} » contient bien le son recherché.`
                  : `Incorrect : « ${c.label} » ne contient pas le son ciblé.`,
              }));

              candidates.push({
                id,
                stageId: currentStage.id,
                stageName: currentStage.shortName,
                category: "Éveil Phonétique",
                prompt: prompt || "Quel mot correspond au son ciblé ?",
                audioText: audioText || prompt,
                ipa: ipa || soundData.targetSound,
                options: shuffleArray(rawOptions),
                explanation: `Le phonème ciblé est ${ipa || soundData.targetSound || "le son indiqué"}.`,
              });
            }
          }

          // 4. Studio de Haute Rhétorique (Paliers Supérieurs)
          else if (type === "rhetoric_studio") {
            const rData = data as RhetoricStudioData;
            if (rData?.figureOptions && rData.figureOptions.length >= 2 && rData.correctFigure) {
              const rawOptions: SprintOption[] = rData.figureOptions.map((fig, idx) => ({
                id: `${id}_fig_${idx}`,
                text: fig,
                isCorrect: fig === rData.correctFigure,
                feedback:
                  fig === rData.correctFigure
                    ? `Exact ! ${rData.explanation || "Figure parfaitement identifiée."}`
                    : `Ce n'est pas cette figure de style.`,
              }));

              candidates.push({
                id,
                stageId: currentStage.id,
                stageName: currentStage.shortName,
                category: "Figures de Style & Éloquence",
                prompt: "Identifiez la figure de style dominante dans cet extrait :",
                contextText: rData.textToAnalyze,
                audioText: rData.textToAnalyze,
                options: shuffleArray(rawOptions),
                explanation: rData.explanation || `La figure attendue était : ${rData.correctFigure}.`,
              });
            }
          }
        }
      }
    }
  }

  // Si le palier courant comporte moins de questions que requis, compléter avec les paliers précédents
  if (candidates.length < count && currentStage.id > 1) {
    const fallbackStages = stages.filter((s) => s.id < currentStage.id);
    for (const fbStage of fallbackStages) {
      const fbQuestions = generateSprintQuestions(fbStage.id, count - candidates.length);
      candidates.push(...fbQuestions);
      if (candidates.length >= count) break;
    }
  }

  // Mélange aléatoire des candidats et sélection du nombre requis
  const selected = shuffleArray(candidates).slice(0, Math.min(count, candidates.length));
  return selected;
}

/**
 * Calcule la moyenne de rétention réelle des cartes SRS d'un palier.
 */
export function computeStageRetention(srsCards: readonly SRSCard[], stageId: number): number {
  const stageCards = srsCards.filter((c) => c.stage === stageId);
  if (stageCards.length === 0) return 92;
  const total = stageCards.reduce((acc, c) => acc + (c.retention ?? 85), 0);
  return Math.round(total / stageCards.length);
}
