/**
 * Types de domaine partagés par le corpus et l'interface.
 *
 * L'application produit **une carte**, et un texte qui la prolonge. Tout ce qui servait à une
 * session d'apprentissage — quiz, graphe de prérequis, répétition espacée, cas pratiques — a
 * été retiré : produire ce contenu coûtait 938 Ko de matière documentaire pour 5 400
 * caractères affichés, et personne ne le lisait. Ce qui l'a remplacé n'est pas une session
 * plus courte, c'est un seul texte écrit à l'avance et relu — voir `Deepening`.
 */

export type AuthorId = string;
export type ThemeId = string;
export type ConceptId = string;

// ---------------------------------------------------------------------------
// Taxonomie — « où sommes-nous ? »
// ---------------------------------------------------------------------------

/**
 * Famille et domaine situent ; thème, concept, auteur et sources enseignent. Les deux
 * couches sont volontairement distinctes : la taxonomie est une configuration, écrite une
 * fois et lue partout (`src/content/taxonomy.ts`) ; le corpus est produit par le pipeline
 * documentaire, fiche par fiche.
 *
 * Les identifiants sont des chaînes, et non des unions littérales. Une union donnerait une
 * vérification à la compilation, mais elle ferait de l'ajout d'un domaine une modification
 * de type propagée dans toute l'application — exactement ce que cette architecture existe
 * pour éviter. La cohérence des identifiants est contrôlée par les tests de la taxonomie,
 * qui vérifient qu'aucun domaine ne renvoie à une famille inconnue.
 */
export type FamilyId = string;
export type DomainId = string;

/**
 * Une famille de domaines, et la question qu'elle pose.
 *
 * La question directrice n'est pas décorative : c'est elle qui permet à un lecteur de
 * choisir une porte d'entrée sans connaître les disciplines académiques qu'elle abrite.
 * Une famille dont on ne sait dire que le nom n'aide personne.
 */
export interface Family {
  id: FamilyId;
  slug: string;
  /** Le libellé affiché, en français. */
  label: string;
  /** « Pourquoi les individus et les collectifs se comportent-ils ainsi ? » */
  question: string;
  /** Rang d'affichage. Explicite, pour qu'aucun tri alphabétique ne le décide. */
  order: number;
}

/**
 * Un domaine d'étude, rattaché explicitement à sa famille.
 *
 * Le rattachement est une donnée, jamais déduit du nom : « Sociologie du travail » et
 * « Sociologie des organisations » se ressemblent, et rien dans leurs libellés ne dit
 * qu'elles relèvent de la même famille — c'est `familyId` qui le dit.
 *
 * Un domaine n'énumère pas ses thèmes ni ses concepts : ce sont eux qui se rattachent à
 * lui. Sans quoi déclarer un domaine et instruire son corpus deviendraient deux
 * modifications à tenir cohérentes à la main.
 */
export interface Domain {
  id: DomainId;
  slug: string;
  /** Le libellé affiché, en français, tel que la discipline se nomme. */
  label: string;
  /** Une phrase, dite en entier dans une liste : ce que ce domaine permet de voir. */
  tagline: string;
  familyId: FamilyId;
  /** Rang d'affichage à l'intérieur de sa famille. */
  order: number;
  /** Ce que le domaine étudie, lu sur sa page plutôt que balayé dans une liste. */
  description: string;
}

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
  /** Le domaine où cet auteur est lu. Un même auteur peut être repris ailleurs plus tard. */
  domain: DomainId;
}

export interface Theme {
  id: ThemeId;
  slug: string;
  title: string;
  /** Une phrase, dite en entier dans une liste : la question que ce thème pose. */
  tagline: string;
  keywords: string[];
  description: string;
  /**
   * Le domaine dont ce thème est un découpage.
   *
   * C'est ce rattachement qui situe le corpus : une carte hérite du domaine de son thème,
   * et n'a donc rien à déclarer tant qu'elle reste dans les thèmes que l'application
   * connaît. Un thème appartient à un domaine et à un seul — le jour où un découpage
   * devrait relever de deux domaines, c'est deux thèmes qu'il faudra, pas un champ de plus.
   */
  domain: DomainId;
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
   * Le domaine de la carte, **quand elle doit le dire elle-même**.
   *
   * Le cas courant est l'absence : la carte hérite du domaine de son thème, et rattacher
   * les deux reviendrait à écrire deux fois la même chose — avec le risque qu'elles
   * divergent. Le champ n'existe que pour le cas que l'héritage ne couvre pas : une fiche
   * qui introduit un thème que `themes.ts` ne connaît pas encore, et qui n'aurait alors
   * rien pour se situer.
   */
  domain?: DomainId;

  /**
   * Absent : fiche issue du pipeline documentaire, sourcée et contrôlée.
   * `"fixture"` : fiche d'échafaudage écrite avant tout dispositif de vérification, servie
   * en développement uniquement. Rien ne doit reposer sur son contenu.
   */
  provenance?: "fixture";
}

// ---------------------------------------------------------------------------
// Approfondissement — le texte qui prolonge la carte
// ---------------------------------------------------------------------------

/**
 * Une section du développement : une idée, son titre, ses paragraphes.
 *
 * Le titre nomme ce dont la section parle, jamais la fonction qu'elle occupe dans le texte.
 * « Ce que “satisfaisant” veut dire ici » en est un ; « Pour aller plus loin » n'en est pas
 * un — il étiquette un palier de difficulté, et obligerait le lecteur à se situer avant
 * d'avoir compris. La règle est tenue par `corpus/deepenings/PROTOCOLE.md` et par le
 * validateur de la projection.
 */
export interface DeepeningSection {
  title: string;
  /** Texte brut. Aucun Markdown : l'application rend ces chaînes telles quelles. */
  paragraphs: string[];
}

/**
 * Le texte qu'affiche « Approfondir ».
 *
 * **Il est écrit à l'avance et figé dans le dépôt.** L'application ne parle à aucun modèle :
 * elle sert un texte qui a été produit une fois, contrôlé, puis projeté comme le reste du
 * corpus. C'est la seule manière de tenir ensemble deux choses qu'un appel au moment du clic
 * ne tient pas — un contenu relu, et un export statique sans serveur ni clé d'API.
 *
 * Il prolonge la carte, il ne la répète pas : la carte est à l'écran juste avant, et la
 * redire ferait perdre au lecteur les quelques secondes pendant lesquelles il accepte de
 * lire. Ce qu'il ajoute, c'est le mécanisme — pourquoi le concept produit ce qu'il produit,
 * où il cesse de s'appliquer, ce qu'il ne dit pas.
 *
 * `limits` n'est pas une précaution de style : c'est la frontière documentaire rendue
 * visible. Un texte long écrit à partir d'une carte de cinq sources dépasse nécessairement
 * ce que ces sources établissent, et ce champ est l'endroit où ce dépassement se déclare au
 * lieu de se dissimuler.
 */
export interface Deepening {
  conceptId: ConceptId;
  /** L'entrée en matière, sans titre : le problème que le concept résout. */
  lead: string[];
  sections: DeepeningSection[];
  /** Ce que le corpus de la carte ne permet pas d'établir, nommé plutôt que tu. */
  limits: string[];
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

/**
 * L'application ne propose aucun réglage, et n'en retient donc aucun : la difficulté d'un
 * concept se lit dans son texte, pas dans une préférence.
 *
 * Elle ne retient pas davantage si le premier lancement a eu lieu. L'accueil n'est plus un
 * écran de première fois mais le seuil de chaque ouverture — voir `src/app/page.tsx` — et
 * un état qui ne commande plus rien est pire qu'absent : on le croit encore en usage.
 */
export interface ProgressState {
  version: number;
  concepts: Record<ConceptId, SeenConcept>;
  daily?: DailyPick;
}
