/**
 * Types de domaine consommés par l'application.
 *
 * Les artefacts internes du Content Pipeline v2 (preuves, knowledge records, plans,
 * frontières documentaires, verdicts) restent dans `corpus/` et ne font pas partie du
 * contrat client. L'application reçoit uniquement les rendus destinés au lecteur.
 */

export type AuthorId = string;
export type ThemeId = string;
export type ConceptId = string;
export type FamilyId = string;
export type DomainId = string;

export interface Family {
  id: FamilyId;
  slug: string;
  label: string;
  question: string;
  order: number;
}

export interface Domain {
  id: DomainId;
  slug: string;
  label: string;
  tagline: string;
  familyId: FamilyId;
  order: number;
  description: string;
}

export type SourceKind =
  | "primary"
  | "secondary-academic"
  | "francophone-reception"
  | "pedagogical-interpretation";

export interface Source {
  label: string;
  kind: SourceKind;
  reference?: string;
  url?: string;
}

export interface Quotation {
  text: string;
  attributedTo?: string;
  reference: string;
  translationNote?: string;
}

export interface Author {
  id: AuthorId;
  slug: string;
  name: string;
  years?: string;
  tagline: string;
  keywords: string[];
  bio: string;
  themes: ThemeId[];
  domain: DomainId;
}

export interface Theme {
  id: ThemeId;
  slug: string;
  title: string;
  tagline: string;
  keywords: string[];
  description: string;
  domain: DomainId;
}

/**
 * Rendu court d'un concept.
 *
 * Pour les concepts v2, `hookQuestion` et `shortExplanation` proviennent d'un knowledge
 * record vérifié et ont eux-mêmes passé le content gate. Le client ne reçoit pas les
 * claims ni les preuves qui ont servi à les produire.
 */
export interface Concept {
  id: ConceptId;
  slug: string;
  title: string;
  themeLabel?: string;
  authorLabel?: string;
  quotation?: Quotation;
  hookQuestion: string;
  shortExplanation: string;
  sources?: Source[];
  attributionNote?: string;
  authors: AuthorId[];
  themes: ThemeId[];
  domain?: DomainId;
  /** Fiche d'échafaudage non vérifiée, servie uniquement là où le produit l'autorise. */
  provenance?: "fixture";
}

export interface DeepeningSection {
  title: string;
  /** Texte brut : aucun Markdown n'est interprété par l'écran. */
  paragraphs: string[];
}

/**
 * Rendu long destiné au lecteur.
 *
 * Le fichier maître `corpus/deepenings/<id>.json` possède aussi un champ `limits`, mais ce
 * champ est une frontière documentaire interne. Le projecteur l'élimine avant la génération
 * de `deepenings.generated.ts`; il ne fait donc volontairement pas partie de ce type.
 */
export interface Deepening {
  conceptId: ConceptId;
  lead: string[];
  sections: DeepeningSection[];
}

export interface DailyPick {
  day: string;
  conceptId: ConceptId;
  discovered?: boolean;
}

/**
 * Mémoire minimale de progression : ordre de dernière rencontre et carte du jour.
 */
export interface ProgressState {
  version: number;
  seen: ConceptId[];
  daily?: DailyPick;
}
