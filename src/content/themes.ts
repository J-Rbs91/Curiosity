import type { Theme } from "@/types";

/**
 * Les thèmes, regroupés par domaine.
 *
 * Les neuf thèmes de `organizational-sociology` ont été écrits **avant** toute instruction
 * documentaire, pour construire l'application. Ils ne sont donc pas une carte du champ mais
 * un premier découpage, et `corpus/perimeter.md` le dit en toutes lettres.
 *
 * Les quatre thèmes de `measurement-theory` sont écrits dans l'autre sens, et c'est
 * désormais la procédure : le périmètre s'écrit, `corpus-scout` cartographie le champ, et
 * les thèmes se déclarent à partir de ce qu'il a fait apparaître. Un découpage écrit avant
 * la lecture découpe le champ tel qu'on le croyait, et rien ne le signale jamais comme faux.
 *
 * Conséquence directe, visible ci-dessous : aucun thème n'est déclaré ici pour la santé
 * publique ni pour la mesure du bien-être, alors que le périmètre demandait de les balayer.
 * Le scout n'en a rapporté aucune source primaire ouvrable, et **un thème sans carte ne se
 * déclare pas** — il afficherait une page vide et compterait pour de la couverture.
 */

export const themes: Theme[] = [
  // --- Sociologie des organisations ----------------------------------------
  {
    id: "bureaucratie-regles",
    slug: "bureaucratie-regles",
    title: "Bureaucratie et règles",
    tagline:
      "Coordonner par des règles écrites, et ce qu'il en coûte.",
    keywords: ["Impersonnalité", "Prévisibilité", "Rigidité"],
    description:
      "Comment les organisations se coordonnent-elles par des règles écrites, impersonnelles et stables ? Ce thème explore les promesses de la bureaucratie (prévisibilité, égalité de traitement) et ses effets pervers, quand la règle devient une fin en soi.",
    domain: "organizational-sociology",
  },
  {
    id: "autorite-domination",
    slug: "autorite-domination",
    title: "Autorité et domination",
    tagline:
      "Ce qui fait qu'un ordre est obéi sans contrainte.",
    keywords: ["Légitimité", "Charisme", "Tradition"],
    description:
      "Pourquoi certains ordres sont-ils obéis sans contrainte physique ? Ce thème distingue les fondements sur lesquels une autorité peut légitimement s'exercer, et comment ces fondements structurent durablement les organisations.",
    domain: "organizational-sociology",
  },
  {
    id: "pouvoir",
    slug: "pouvoir",
    title: "Pouvoir",
    tagline:
      "Qui pèse réellement, au-delà de l'organigramme.",
    keywords: ["Zone d'incertitude", "Marge de liberté", "Dépendance"],
    description:
      "Au-delà de l'organigramme officiel, qui détient réellement du pouvoir dans une organisation, et pourquoi ? Ce thème analyse le pouvoir comme une relation d'échange déséquilibrée liée à la maîtrise de zones d'incertitude, et non comme un attribut de poste.",
    domain: "organizational-sociology",
  },
  {
    id: "decision",
    slug: "decision",
    title: "Décision",
    tagline:
      "Décider sans le temps ni l'information qu'il faudrait.",
    keywords: ["Rationalité limitée", "Arbitrage", "Ambiguïté"],
    description:
      "Les décideurs organisationnels optimisent-ils vraiment ? Ce thème interroge les limites cognitives, informationnelles et temporelles qui pèsent sur toute décision, et les processus concrets, parfois désordonnés, par lesquels une organisation choisit.",
    domain: "organizational-sociology",
  },
  {
    id: "comportements-organisationnels",
    slug: "comportements-organisationnels",
    title: "Comportements organisationnels",
    tagline:
      "L'écart entre ce qu'une règle vise et ce qu'elle produit.",
    keywords: ["Conformité", "Effets pervers", "Buts"],
    description:
      "Comment les individus s'ajustent-ils aux règles et aux attentes de leur organisation, parfois au point de perdre de vue le but initial ? Ce thème étudie les écarts entre les objectifs affichés d'une règle et ses effets réels sur les comportements.",
    domain: "organizational-sociology",
  },
  {
    id: "reaction-insatisfaction",
    slug: "reaction-insatisfaction",
    title: "Réaction à l'insatisfaction (Exit/Voice/Loyalty)",
    tagline:
      "Partir, protester ou rester : ce que chaque choix coûte.",
    keywords: ["Défection", "Prise de parole", "Loyauté"],
    description:
      "Face au déclin d'une organisation ou à une insatisfaction, un membre peut partir, protester ou rester silencieusement fidèle. Ce thème explore ces trois répertoires de réaction et leurs conséquences sur la capacité de l'organisation à se corriger.",
    domain: "organizational-sociology",
  },
  {
    id: "apprentissage-organisationnel",
    slug: "apprentissage-organisationnel",
    title: "Apprentissage organisationnel",
    tagline:
      "Ajuster ses moyens, ou remettre en cause ses présupposés.",
    keywords: ["Simple boucle", "Double boucle", "Routines défensives"],
    description:
      "Une organisation qui corrige ses erreurs apprend-elle vraiment, ou se contente-t-elle d'ajuster ses moyens sans jamais questionner ses présupposés ? Ce thème distingue les niveaux d'apprentissage et les obstacles qui bloquent la remise en question profonde.",
    domain: "organizational-sociology",
  },
  {
    id: "organisation-formelle-reelle",
    slug: "organisation-formelle-reelle",
    title: "Organisation réelle vs organisation formelle",
    tagline:
      "L'organigramme dit une chose, le travail quotidien une autre.",
    keywords: ["Informel", "Arrangements", "Régulation locale"],
    description:
      "L'organigramme, les procédures et les fiches de poste décrivent une organisation idéale ; le travail quotidien en dessine une autre, faite d'arrangements, de coopérations informelles et de régulations locales. Ce thème explore cet écart et sa fonction.",
    domain: "organizational-sociology",
  },
  {
    id: "changement-organisationnel",
    slug: "changement-organisationnel",
    title: "Changement organisationnel",
    tagline:
      "Pourquoi les routines résistent, et ce qui les déplace.",
    keywords: ["Résistance", "Routines", "Exploration"],
    description:
      "Pourquoi le changement dans les organisations est-il si difficile à conduire, et parfois si imprévisible dans ses effets ? Ce thème examine les tensions entre stabilité des routines, exploration de nouvelles pratiques et résistances au changement.",
    domain: "organizational-sociology",
  },

  // --- Théorie de la mesure / KPI ------------------------------------------
  {
    id: "theorie-des-echelles-et-nombres",
    slug: "echelles-et-nombres",
    title: "Échelles et nombres",
    tagline:
      "Ce qu'un nombre autorise à faire, et ce qu'il n'autorise pas.",
    keywords: ["Échelle", "Ordinal", "Invariance"],
    description:
      "Tout indicateur produit des nombres, mais tous les nombres ne se manipulent pas de la même façon : une moyenne de rangs ou un rapport de températures peuvent n'avoir aucun sens. Ce thème porte sur ce qu'une échelle de mesure permet formellement d'affirmer, indépendamment de l'usage qu'on en fait.",
    domain: "measurement-theory",
  },
  {
    id: "quantification-operation-sociale",
    slug: "quantification",
    title: "La quantification comme opération",
    tagline:
      "Compter n'est pas constater : il faut d'abord convenir.",
    keywords: ["Convention", "Catégorie", "Commensuration"],
    description:
      "Avant qu'un chiffre existe, quelqu'un a décidé quoi compter, sous quelle catégorie et selon quelle convention. Ce thème étudie la quantification comme un travail social qui met en forme le réel qu'il prétend enregistrer, et non comme un simple relevé.",
    domain: "measurement-theory",
  },
  {
    id: "effets-retour-de-la-mesure",
    slug: "effets-retour-de-la-mesure",
    title: "Ce que la mesure fait au mesuré",
    tagline:
      "Un indicateur observe rarement sans être aussi observé.",
    keywords: ["Réactivité", "Cible", "Corruption de l'indicateur"],
    description:
      "Ceux qui sont mesurés apprennent ce qui les mesure, et ajustent leur conduite en conséquence. Ce thème porte sur les effets en retour de l'indicateur sur ce qu'il enregistre — jusqu'au point où l'indicateur s'améliore sans que la chose mesurée ait bougé.",
    domain: "measurement-theory",
  },
  {
    id: "audit-evaluation-reddition-de-comptes",
    slug: "audit-et-evaluation",
    title: "Audit, évaluation, reddition de comptes",
    tagline:
      "Rendre des comptes transforme ce dont on rend compte.",
    keywords: ["Audit", "Évaluation", "Performance"],
    description:
      "Les indicateurs ne flottent pas seuls : ils sont produits et entretenus par des dispositifs — audit, évaluation des politiques publiques, benchmarking, comptabilité. Ce thème examine ces dispositifs et ce que leur exigence de justification fait aux activités qui s'y soumettent.",
    domain: "measurement-theory",
  },
];
