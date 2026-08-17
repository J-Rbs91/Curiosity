/**
 * Types de domaine partagés par le corpus et l'interface.
 *
 * L'application produit **une carte**, et rien d'autre. L'approfondissement est délégué :
 * le lecteur emporte la carte et ses sources vers l'IA de son choix. Tout ce qui servait à
 * une session d'apprentissage — mécanisme détaillé, exemple, quiz, graphe de prérequis,
 * répétition espacée, cas pratiques — a été retiré : produire ce contenu coûtait 938 Ko de
 * matière documentaire pour 5 400 caractères affichés, et personne ne le lisait.
 */

export type AuthorId = string;
export type ThemeId = string;
export type ConceptId = string;

/**
 * Distingue ce qui vient directement d'un auteur de ce qui relève de l'interprétation.
 * Les niveaux correspondent à la hiérarchie documentaire de docs/corpus-workflow.md :
 * sans eux, la carte ferait passer un article peer-reviewed pour un commentaire de notre
 * fait.
 */
export type SourceKind =
  | "primary"
  | "secondary-academic"
  | "francophone-reception"
  | "pedagogical-interpretation";

export interface Source {
  label: string;
  kind: SourceKind;
  /** Localisation et identifiant : ce qui permet de rouvrir le texte. */
  reference?: string;
  url?: string;
}

/**
 * Un passage du texte de l'auteur, cité mot pour mot.
 *
 * C'est le seul élément de la carte qui ne soit pas une reformulation. Il n'existe donc
 * que s'il est verbatim, localisé dans une édition précise, et honnête sur sa traduction :
 * afficher du Weber en français sans dire qui l'a traduit, c'est présenter une
 * interprétation comme une parole d'auteur.
 */
export interface Quotation {
  text: string;
  /**
   * L'auteur à qui la phrase appartient — jamais déduit d'un concept coécrit.
   *
   * Absent lorsque `reference` le nomme déjà, ce qui est le cas courant : les notices
   * commencent par leur auteur. Il ne subsiste que là où il apprend quelque chose — un
   * passage tiré d'un ouvrage collectif, dont l'auteur n'est pas celui du volume.
   */
  attributedTo?: string;
  /** Ouvrage et localisation, tels qu'ils permettent de rouvrir à la bonne page. */
  reference: string;
  /** « traduit de l'allemand par… » ou l'aveu d'une traduction non publiée. */
  translationNote?: string;
}

export interface Author {
  id: AuthorId;
  slug: string;
  name: string;
  years?: string;
  /** Une phrase, dite en entier dans une liste : ce que cet auteur a compris. */
  tagline: string;
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

/**
 * La carte, et tout ce que l'application connaît d'un concept.
 *
 * Sept éléments, dont un seul facultatif : beaucoup de concepts n'ont pas de passage
 * court et autonome qui les énonce, et en exiger un partout ferait fabriquer la belle
 * phrase que le dispositif documentaire existe pour empêcher.
 */
export interface Concept {
  id: ConceptId;
  slug: string;

  /** CONCEPT */
  title: string;

  /**
   * THÈME et AUTEUR, portés par la fiche et non cherchés dans `themes.ts` / `authors.ts`.
   * C'est ce qui permet au corpus d'introduire un auteur ou un thème que l'application ne
   * connaît pas encore : le périmètre est la discipline, pas la table des auteurs.
   */
  themeLabel?: string;
  authorLabel?: string;

  /** CITATION — facultative, jamais fabriquée. */
  quotation?: Quotation;

  /** ACCROCHE — 100 caractères au plus, la carte doit tenir dans un écran. */
  hookQuestion: string;
  /** RÉSUMÉ — 200 caractères au plus. */
  shortExplanation: string;

  /** SOURCES — cinq au plus, les primaires d'abord. */
  sources?: Source[];

  /**
   * Rétablit l'attribution réelle quand elle ne se réduit pas à un nom : concept coécrit
   * rangé sous un seul, concept associé à un auteur qui ne l'a pas créé, terme forgé par
   * un tiers. Renseigné par la projection du corpus, jamais à la main.
   */
  attributionNote?: string;

  /** Identifiants de rattachement, quand l'application connaît l'auteur ou le thème. */
  authors: AuthorId[];
  themes: ThemeId[];

  /**
   * Absent : fiche issue du pipeline documentaire, sourcée et contrôlée.
   * `"fixture"` : fiche d'échafaudage écrite avant tout dispositif de vérification, servie
   * en développement uniquement. Rien ne doit reposer sur son contenu.
   */
  provenance?: "fixture";
}

// ---------------------------------------------------------------------------
// Progression
// ---------------------------------------------------------------------------

/**
 * La progression ne mesure plus rien : elle se souvient. Sans session ni quiz, il n'y a
 * pas de maîtrise à évaluer — seulement des cartes déjà vues, pour que la suivante en soit
 * une autre.
 */
export interface SeenConcept {
  conceptId: ConceptId;
  firstSeenAt: string;
  lastSeenAt: string;
  encounters: number;
}

/**
 * L'application ne propose aucun réglage de niveau ni de durée : la difficulté d'un
 * concept se lit dans son texte, pas dans une préférence.
 */
export interface UserSettings {
  firstLaunchCompleted: boolean;
}

/**
 * La carte retenue pour aujourd'hui.
 *
 * « Chaque jour une carte » veut dire que le choix se fait une fois par jour, pas à chaque
 * ouverture : sans cette mémoire, rouvrir l'application changeait de concept, et rien ne
 * s'installait. Le jour est stocké en clair (`AAAA-MM-JJ`, heure locale) plutôt qu'en
 * horodatage — c'est un jour civil qu'on compare, pas un instant.
 */
export interface DailyPick {
  day: string;
  conceptId: ConceptId;
}

export interface ProgressState {
  version: number;
  concepts: Record<ConceptId, SeenConcept>;
  settings: UserSettings;
  daily?: DailyPick;
}
