/**
 * Types de domaine partagés par tout le corpus, le moteur pédagogique et l'UI.
 * Le contenu (src/content) est la source de vérité ; ces types la structurent.
 */

export type AuthorId = string;
export type ThemeId = string;
export type ConceptId = string;

export type Difficulty = 1 | 2 | 3 | 4 | 5;

/**
 * Distingue ce qui vient directement d'un auteur de ce qui relève de l'interprétation.
 * `secondary-academic` et `francophone-reception` correspondent aux niveaux B et C de la
 * hiérarchie documentaire (docs/corpus-workflow.md) : sans eux, la projection ferait
 * passer un article peer-reviewed pour une interprétation pédagogique de notre fait.
 */
export type SourceKind =
  | "primary"
  | "secondary-academic"
  | "francophone-reception"
  | "pedagogical-interpretation"
  | "cross-author-comparison";

export interface Source {
  label: string;
  kind: SourceKind;
  reference?: string;
  url?: string;
}

/**
 * Un passage du texte de l'auteur, cité mot pour mot.
 *
 * C'est la seule chose de l'application qui ne soit pas une reformulation : tout le reste
 * — résumé, mécanisme, exemple — passe par nos mots. Elle n'existe donc que si elle est
 * verbatim, localisée dans une édition précise, et honnête sur sa traduction : afficher
 * du Weber en français sans dire qui l'a traduit, c'est présenter une interprétation
 * comme une parole d'auteur.
 */
export interface Quotation {
  text: string;
  /** L'auteur à qui la phrase appartient — jamais déduit d'un concept coécrit. */
  attributedTo: string;
  /** Ouvrage et localisation, tels qu'ils permettent de rouvrir à la bonne page. */
  reference: string;
  /** « traduit de l'allemand par… » ou l'aveu d'une traduction non publiée. */
  translationNote?: string;
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
  /** Une phrase, dite en entier dans une liste : ce que cet auteur a compris. */
  tagline: string;
  /** Deux à trois notions, dans les mots du domaine. Jamais une paraphrase de la phrase. */
  keywords: string[];
  bio: string;
  themes: ThemeId[];
}

export interface Theme {
  id: ThemeId;
  slug: string;
  title: string;
  /** Une phrase, dite en entier dans une liste : la question que ce thème pose. */
  tagline: string;
  keywords: string[];
  description: string;
}

export interface Concept {
  id: ConceptId;
  slug: string;
  title: string;

  hookQuestion: string;

  shortExplanation: string;
  detailedExplanation: string;

  /** Le texte de l'auteur lui-même, quand un passage citable a pu être établi. */
  quotation?: Quotation;

  authors: AuthorId[];
  /**
   * Rétablit l'attribution réelle quand elle ne se réduit pas aux auteurs listés
   * ci-dessus : concept coécrit rangé sous un seul nom, concept associé à un auteur qui
   * ne l'a pas créé, terme forgé par un tiers. Renseigné par la projection du corpus,
   * jamais à la main.
   */
  attributionNote?: string;
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

  /**
   * Absent : fiche issue du pipeline documentaire, sourcée et contrôlée.
   * `"fixture"` : fiche d'échafaudage écrite avant tout dispositif de vérification, servie
   * en développement uniquement. Rien ne doit reposer sur son contenu.
   */
  provenance?: "fixture";
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

/**
 * L'application ne propose aucun réglage de niveau ni de durée : la difficulté
 * d'un concept se lit dans son texte, pas dans une préférence, et une lecture ne
 * s'annonce pas par un chiffre de minutes. Ne reste que ce qui doit être retenu
 * d'une ouverture à l'autre.
 */
export interface UserSettings {
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
  headline: string;
}
