/**
 * Typages stricts pour le cursus didactique et le moteur adaptatif de World-Class French.
 * Conformes aux règles Karpathy : Types précis, sans 'any'.
 */

export type ExerciseType =
  | "visual_sound_match"
  | "syllable_bricks"
  | "voltaire_hunter"
  | "dictation"
  | "diagnostic_mcq"
  | "cloze_morphology"
  | "rhetoric_studio";

export interface VisualSoundMatchCard {
  readonly id: string;
  readonly label: string;
  readonly imageEmoji: string;
  readonly sound: string;
  readonly isCorrect: boolean;
}

export interface VisualSoundMatchData {
  readonly targetSound: string;
  readonly cards: readonly VisualSoundMatchCard[];
}

export interface SyllableBricksData {
  readonly targetPhrase: string;
  readonly targetPhonemes?: string;
  readonly availableBricks: readonly string[];
  readonly correctSequence: readonly string[];
}

export interface VoltaireWord {
  readonly text: string;
  readonly isError: boolean;
  readonly correction?: string;
}

export interface VoltaireHunterData {
  readonly sentence: string;
  readonly words: readonly VoltaireWord[];
  readonly hasError: boolean;
  readonly explanation: string;
  readonly mnemonic: string;
}

export interface DictationData {
  readonly fullText: string;
  readonly audioNormalRate: number;
  readonly audioSlowRate: number;
  readonly hints: readonly string[];
  readonly targetAccents: readonly string[];
}

export interface McqOption {
  readonly id: string;
  readonly text: string;
  readonly isCorrect: boolean;
  readonly feedback: string;
}

export interface DiagnosticMcqData {
  readonly question: string;
  readonly options: readonly McqOption[];
  readonly explanation: string;
}

export interface ClozeMorphologyData {
  readonly sentenceBefore: string;
  readonly sentenceAfter: string;
  readonly expectedAnswer: string;
  readonly acceptableAnswers: readonly string[];
  readonly hint1: string;
  readonly hint2: string;
  readonly baseForm: string;
}

export interface RegisterOption {
  readonly text: string;
  readonly register: "familier" | "courant" | "soutenu";
}

export interface RhetoricStudioData {
  readonly textToAnalyze: string;
  readonly mode: "identify_figure" | "classify_register" | "oral_practice";
  readonly figureOptions?: readonly string[];
  readonly correctFigure?: string;
  readonly registerOptions?: readonly RegisterOption[];
  readonly explanation?: string;
}

export type ExerciseData =
  | VisualSoundMatchData
  | SyllableBricksData
  | VoltaireHunterData
  | DictationData
  | DiagnosticMcqData
  | ClozeMorphologyData
  | RhetoricStudioData;

export interface ExerciseItem {
  readonly id: string;
  readonly type: ExerciseType;
  readonly ruleId?: string;
  readonly prompt: string;
  readonly audioText?: string;
  readonly ipa?: string;
  readonly data: ExerciseData;
}

export interface MicroLesson {
  readonly id: string;
  readonly chapterId: string;
  readonly title: string;
  readonly durationMinutes: number;
  readonly exercises: readonly ExerciseItem[];
}

export interface CurriculumRule {
  readonly id: string;
  readonly title: string;
  readonly statement: string;
  readonly formula?: string;
}

export interface CurriculumChapter {
  readonly id: string;
  readonly moduleId: string;
  readonly stage: number;
  readonly title: string;
  readonly summary: string;
  readonly rules: readonly CurriculumRule[];
  readonly lessons: readonly MicroLesson[];
}

export interface CurriculumModule {
  readonly id: string;
  readonly stage: number;
  readonly title: string;
  readonly description: string;
  readonly chapters: readonly CurriculumChapter[];
}

export interface Stage {
  readonly id: number;
  readonly code: string;
  readonly name: string;
  readonly shortName: string;
  readonly description: string;
  readonly badge: string;
  readonly hasInfiniteHearts: boolean;
  readonly color: string;
  readonly modules: readonly CurriculumModule[];
}

export interface DiagnosticOption {
  readonly id: string;
  readonly text: string;
  readonly isCorrect: boolean;
  readonly score: number;
  readonly feedback: string;
}

export interface DiagnosticQuestion {
  readonly id: string;
  readonly stageTarget: number;
  readonly stageName: string;
  readonly question: string;
  readonly audioText: string;
  readonly options: readonly DiagnosticOption[];
}

export interface SRSCard {
  readonly id: string;
  readonly stage: number;
  readonly chapterId: string;
  readonly ruleId: string;
  readonly front: string;
  readonly back: string;
  readonly explanation: string;
  stability: number; // en jours
  difficulty: number; // 1 à 10
  retention: number; // 0 à 100%
  lastReviewedAt: string | null;
  nextReviewAt: string | null;
  lapses: number;
}

export interface DailySprintRecord {
  readonly date: string;
  readonly stage: number;
  readonly stageName: string;
  readonly score: number;
  readonly totalQuestions: number;
  readonly durationSeconds: number;
  readonly resultsPattern: string; // ex: 🟩🟩🟨🟩🟥🟩
  readonly retentionAvg: number;
}
