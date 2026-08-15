/**
 * Types de domaine partagés par tout le corpus, le moteur pédagogique et l'UI.
 * Le contenu (src/content) est la source de vérité ; ces types la structurent.
 */

export type AuthorId = string;
export type ThemeId = string;
export type ConceptId = string;

export type Difficulty = 1 | 2 | 3 | 4 | 5;

/** Distingue ce qui vient directement d'un auteur de ce qui relève de l'interprétation pédagogique. */
export type SourceKind =
  | "primary"
  | "pedagogical-interpretation"
  | "cross-author-comparison";

export interface Source {
  label: string;
  kind: SourceKind;
  reference?: string;
  url?: string;
}

export type QuizQuestionType = "mcq" | "true-false" | "open";

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  prompt: string;
  /** Choix pour les QCM ; absent pour "true-false" et "open". */
  choices?: string[];
  /** Index (en string) du bon choix pour "mcq", "true"/"false" pour "true-false", texte attendu pour "open". */
  correctAnswer: string;
  explanation: string;
}

export interface Author {
  id: AuthorId;
  slug: string;
  name: string;
  years?: string;
  tagline: string;
  bio: string;
  themes: ThemeId[];
}

export interface Theme {
  id: ThemeId;
  slug: string;
  title: string;
  description: string;
}

export interface Concept {
  id: ConceptId;
  slug: string;
  title: string;

  hookQuestion: string;

  shortExplanation: string;
  detailedExplanation: string;

  authors: AuthorId[];
  themes: ThemeId[];

  relatedConcepts: ConceptId[];
  oppositeConcepts?: ConceptId[];
  prerequisites: ConceptId[];
  /** Concepts qui permettent d'approfondir celui-ci. */
  deepensInto?: ConceptId[];

  concreteExample: string;
  analysisQuestions: string[];
  quiz: QuizQuestion[];

  difficulty: Difficulty;

  sources?: Source[];
}

export interface CaseStudyReading {
  authorId: AuthorId;
  conceptIds: ConceptId[];
  analysis: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  situation: string;
  readings: CaseStudyReading[];
}

// ---------------------------------------------------------------------------
// Progression utilisateur
// ---------------------------------------------------------------------------

/** 0=jamais vu · 1=découvert · 2=reconnu · 3=compris · 4=applicable · 5=maîtrisé */
export type MasteryScore = 0 | 1 | 2 | 3 | 4 | 5;

export interface UserConceptProgress {
  conceptId: ConceptId;
  discoveredAt?: string;
  lastSeenAt?: string;
  encounters: number;
  masteryScore: MasteryScore;
  nextReviewAt?: string;
  correctAnswers: number;
  incorrectAnswers: number;
}

export type ExplanationLevel = "accessible" | "standard" | "approfondi";
export type PreferredDuration = 2 | 5 | 10;

export interface UserSettings {
  explanationLevel: ExplanationLevel;
  preferredDuration: PreferredDuration;
  firstLaunchCompleted: boolean;
}

export type SessionType =
  | "discovery"
  | "review"
  | "deepening"
  | "comparison"
  | "case-study"
  | "connection";

export interface SessionRecord {
  id: string;
  type: SessionType;
  conceptIds: ConceptId[];
  startedAt: string;
  completedAt?: string;
  quizCorrect?: number;
  quizTotal?: number;
}

export interface ProgressState {
  version: number;
  concepts: Record<ConceptId, UserConceptProgress>;
  settings: UserSettings;
  sessionHistory: SessionRecord[];
}

/** Le plan d'une session choisie par le moteur pédagogique, avant son déroulé dans l'UI. */
export interface SessionPlan {
  id: string;
  type: SessionType;
  primaryConceptId: ConceptId;
  secondaryConceptId?: ConceptId;
  caseStudyId?: string;
  estimatedMinutes: number;
  headline: string;
}
