import type { Domain, Family } from "@/types";

/**
 * La taxonomie : quatre familles, onze domaines, et rien d'autre.
 *
 * C'est **la** déclaration. La navigation, les filtres, les pages de domaine, les listes et
 * le tirage d'une carte en dérivent tous : rien de ce qui suit n'est recopié ailleurs, et
 * ajouter un domaine consiste à ajouter une entrée ici, puis à rattacher son corpus. Aucun
 * écran n'est à écrire, aucun composant n'est à modifier, aucune condition n'est à ajouter.
 *
 * Ce que ce fichier ne contient pas, volontairement :
 *
 * — **la liste des thèmes ou des concepts d'un domaine.** Ce sont eux qui se rattachent au
 *   domaine (`Theme.domain`), pas l'inverse. Une liste ici devrait être tenue à jour à
 *   chaque fiche instruite, et serait fausse le jour où on l'oublie.
 * — **l'état du corpus d'un domaine.** « Configuré » et « pourvu de contenu » sont deux
 *   choses distinctes, mais la seconde se **constate** — voir `hasCorpus` dans
 *   `src/domain/taxonomy`. Un drapeau écrit à la main mentirait tôt ou tard, et il
 *   mentirait précisément le jour de la première carte d'un domaine.
 *
 * Les identifiants sont en anglais et stables ; les libellés sont en français et peuvent
 * être réécrits sans rien casser. C'est toute la raison de les séparer : `domainId` circule
 * dans les données et les relations, `label` ne circule que vers l'écran. Les slugs, eux,
 * sont en français parce qu'ils sont lus dans la barre d'adresse, comme ceux des thèmes et
 * des auteurs.
 */

export const families: Family[] = [
  {
    id: "humans-organizations",
    slug: "humains-et-organisations",
    label: "Comprendre les humains et les organisations",
    question: "Pourquoi les individus et les collectifs se comportent-ils ainsi ?",
    order: 1,
  },
  {
    id: "real-work",
    slug: "travail-reel",
    label: "Comprendre le travail réel",
    question: "Que se passe-t-il réellement lorsque quelqu'un essaie de faire son travail ?",
    order: 2,
  },
  {
    id: "production-systems",
    slug: "production-et-systemes",
    label: "Comprendre la production et les systèmes",
    question: "Comment le système produit-il ses résultats ?",
    order: 3,
  },
  {
    id: "steering",
    slug: "pilotage",
    label: "Comprendre le pilotage",
    question: "Comment savons-nous ce qui se passe et comment décidons-nous quoi faire ?",
    order: 4,
  },
];

export const domains: Domain[] = [
  // --- Comprendre les humains et les organisations -------------------------
  {
    id: "organizational-sociology",
    slug: "sociologie-des-organisations",
    label: "Sociologie des organisations",
    tagline: "Ce que les organisations font faire à ceux qui les peuplent.",
    familyId: "humans-organizations",
    order: 1,
    description:
      "L'ensemble des travaux permettant de comprendre le fonctionnement des organisations : comportements organisationnels, décision, règles, pouvoir, apprentissage, coopération, dysfonctionnements, action collective. La question d'entrée n'est pas la discipline d'un auteur, mais ce que son travail éclaire du fonctionnement des organisations.",
  },
  {
    id: "sociology-of-work",
    slug: "sociologie-du-travail",
    label: "Sociologie du travail",
    tagline: "Le travail comme rapport social, pas comme tâche.",
    familyId: "humans-organizations",
    order: 2,
    description:
      "L'étude du travail comme rapport social : métiers, qualifications, division du travail, conflits, carrières et transformations de l'emploi.",
  },
  {
    id: "work-psychology",
    slug: "psychologie-du-travail",
    label: "Psychologie du travail",
    tagline: "Ce que le travail fait à celui qui le fait.",
    familyId: "humans-organizations",
    order: 3,
    description:
      "L'étude des conduites individuelles et collectives en situation de travail : motivation, engagement, santé psychique, apprentissage, rapports au collectif et à l'encadrement.",
  },
  {
    id: "behavioral-economics",
    slug: "economie-comportementale",
    label: "Économie comportementale",
    tagline: "Les écarts réguliers entre le choix réel et le choix optimal.",
    familyId: "humans-organizations",
    order: 4,
    description:
      "L'étude des décisions économiques réelles, et des écarts systématiques — non pas aléatoires — entre ces décisions et le modèle de l'agent parfaitement rationnel.",
  },

  // --- Comprendre le travail réel ------------------------------------------
  {
    id: "activity-ergonomics",
    slug: "ergonomie-de-l-activite",
    label: "Ergonomie de l'activité",
    tagline: "L'écart entre le travail prescrit et le travail réel.",
    familyId: "real-work",
    order: 1,
    description:
      "L'analyse de l'activité telle qu'elle se déroule, et de la distance entre la tâche prescrite et le travail effectivement réalisé pour l'accomplir malgré les conditions rencontrées.",
  },
  {
    id: "human-factors",
    slug: "human-factors",
    label: "Human Factors / ergonomie cognitive",
    tagline: "Ce que l'opérateur perçoit, comprend et anticipe.",
    familyId: "real-work",
    order: 2,
    description:
      "L'étude des processus cognitifs à l'œuvre dans le travail — attention, charge mentale, conscience de la situation, erreur humaine — et de la conception des dispositifs qui les soutiennent ou les mettent en défaut.",
  },

  // --- Comprendre la production et les systèmes ----------------------------
  {
    id: "operations-management",
    slug: "operations-management",
    label: "Operations Management",
    tagline: "Comment les flux, les stocks et les files se comportent.",
    familyId: "production-systems",
    order: 1,
    description:
      "L'étude de la conception et du pilotage des systèmes de production et de service : flux, capacité, files d'attente, variabilité, stocks et délais.",
  },
  {
    id: "systems-thinking",
    slug: "systems-thinking",
    label: "Systems Thinking",
    tagline: "Les effets que produit la structure, non les acteurs.",
    familyId: "production-systems",
    order: 2,
    description:
      "L'étude des comportements qu'un système produit du fait de sa structure — boucles de rétroaction, délais, effets contre-intuitifs — plutôt que du fait des intentions de ceux qui l'habitent.",
  },
  {
    id: "cybernetics",
    slug: "cybernetique",
    label: "Cybernétique",
    tagline: "Réguler par l'écart : la boucle et sa variété.",
    familyId: "production-systems",
    order: 3,
    description:
      "L'étude générale de la régulation et de la communication dans les systèmes vivants et artificiels : boucle de rétroaction, écart, variété requise, viabilité.",
  },

  // --- Comprendre le pilotage ----------------------------------------------
  {
    id: "measurement-theory",
    slug: "theorie-de-la-mesure",
    label: "Théorie de la mesure / KPI",
    tagline: "Ce qu'un indicateur mesure, et ce qu'il déforme.",
    familyId: "steering",
    order: 1,
    description:
      "L'étude de ce qu'un indicateur saisit réellement, de ce qu'il laisse hors champ, et des comportements que sa seule existence engendre chez ceux qui sont mesurés par lui.",
  },
  {
    id: "decision-science",
    slug: "science-de-la-decision",
    label: "Science de la décision",
    tagline: "Décider sous incertitude, et savoir sur quoi.",
    familyId: "steering",
    order: 2,
    description:
      "L'étude des méthodes et des modèles par lesquels un choix s'établit sous incertitude : critères, arbitrages, valeur de l'information, jugement et prévision.",
  },
];

/**
 * Le domaine par lequel l'application a commencé.
 *
 * Il n'a **aucun privilège** dans le code : c'est un domaine comme les dix autres, servi par
 * la même infrastructure. Cette constante n'existe que pour que le pipeline documentaire —
 * dont le périmètre reste, aujourd'hui, cette seule discipline — puisse situer une fiche qui
 * introduirait un thème que l'application ne connaît pas encore. Voir `corpus/perimeter.md`.
 */
export const LEGACY_DOMAIN_ID = "organizational-sociology";
