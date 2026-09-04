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
 * Les quatre thèmes d'`activity-ergonomics` suivent la même procédure, et la même règle les
 * a fait refuser deux fois.
 *
 * Les cinq thèmes de `human-factors` sont écrits le 19 août 2026, après le contrôle aveugle
 * des treize cartes du domaine et non après leur seule rédaction : un thème se déclare quand
 * une carte validée le porte, pas quand une carte existe. Quatre d'entre eux en portent deux
 * à quatre. Le cinquième, `securite-et-resilience`, n'en porte **qu'une**, et c'est une
 * faiblesse déclarée plutôt que masquée : le champ existe, ses textes fondateurs sont fermés,
 * et la cartographie n'a pu en ouvrir qu'un seul. Il se déclare quand même parce que le
 * replier sur l'erreur et la fiabilité serait une faute de fond, ce courant s'étant constitué
 * précisément contre l'idée qu'on comprend un système en étudiant ce qui le fait tomber.
 *
 * Les quatre thèmes de `cybernetics` sont écrits le 21 août 2026, après le contrôle
 * aveugle des douze cartes du domaine. Ils s'écartent de la proposition faite par la
 * cartographie, qui en avançait quatre autres en se donnant elle-même deux réserves : un
 * thème pourvu aux trois quarts par le même ouvrage d'Ashby n'en serait pas un, et un
 * thème qui ne réunirait ses cartes que par leur rapport au vocabulaire serait un faux
 * thème. Les lectures ont tranché les deux. Les chapitres 11, 12 et 14 d'Ashby ne
 * répondent pas à la même question et se séparent donc ; et le thème de vocabulaire a
 * disparu quand il est apparu que Paquette expose le mécanisme au lieu d'en critiquer
 * l'usage. Aucun des quatre ne repose sur une carte unique.
 *
 * Les deux thèmes de `decision-science` sont écrits le 23 août 2026, à l'ouverture du
 * septième domaine, et ils sont **deux là où la cartographie en proposait quatre**. Les deux
 * écartés le sont pour la raison qui se répète depuis six lots : « Agréger des préférences »
 * n'aurait porté qu'une carte, et « Chercher une solution plutôt que la calculer » repose sur
 * deux textes du même trio d'auteurs sur le même programme, dont la cartographie dit
 * elle-même qu'un seul concept devrait en sortir. Les deux courants existent, leurs textes
 * sont ouverts et lus, et ils attendent le passage suivant plutôt qu'une page à une carte.
 *
 * Les trois thèmes d'`operations-management` sont écrits le 25 août 2026, après le contrôle
 * aveugle des huit cartes du lot d'ouverture, et non d'après la proposition de la
 * cartographie. Celle-ci en avançait quatre, un par candidat, en prévenant elle-même que
 * c'était trop peu : « aucun de ces quatre thèmes n'atteint le seuil de plusieurs candidats
 * indépendants ». La lecture a tranché autrement, et par le bas plutôt que par le haut :
 * deux des quatre candidats répondent à la même question, combien produire et combien en
 * tenir, l'un par les stocks et l'autre par le couple production et effectifs, et ils se
 * réunissent donc sous un seul thème qui porte quatre cartes. Les deux autres se séparent,
 * l'un sur la variation d'un procédé, l'autre sur l'ordre de passage, et portent deux cartes
 * chacun. Aucun des trois ne repose sur une carte unique.
 *
 * Une neuvième carte a été instruite, contrôlée et reçue `PASS` la même nuit, et elle n'est
 * pas projetée : le plafond de volume du lot est de huit. Elle attend en `corpus/candidates/`
 * avec son verdict, et elle est le premier travail du passage suivant sur ce domaine.
 *
 * Les deux premiers thèmes de `work-psychology` sont écrits le 26 août 2026, après le
 * contrôle aveugle des cartes du lot d'ouverture. La cartographie en proposait **cinq**, un
 * par candidat, et elle avait prévenu que le cinquième restait à confirmer côté frontière. Le
 * lot en déclare deux ce soir-là, et l'écart s'explique entièrement :
 *
 * - les deux textes anglophones ouverts, le rapport de Hackman et Oldham sur les
 *   caractéristiques de l'emploi et celui de Locke et al. sur la fixation d'objectifs,
 *   répondent à la même question, ce qui dans un emploi engage celui qui l'occupe, l'un par
 *   les propriétés de la tâche, l'autre par l'objectif assigné. Ils se réunissent donc sous
 *   un seul thème qui porte cinq cartes et repose sur deux textes indépendants plutôt que
 *   sur un seul ;
 * - les deux textes francophones portent chacun un état que l'emploi dépose sur la personne,
 *   une frustration salariale et une vie hors travail contrainte, et forment le second thème,
 *   à deux cartes ;
 * - le cinquième thème proposé, la sélection psychotechnique, **n'est pas déclaré ce soir-là**,
 *   et le motif n'est pas documentaire. La carte existe, elle est écrite, mais sa source
 *   primaire est en `partial` : onze pages ouvertes sur soixante-sept, ce qui ne satisfait pas
 *   la règle du dépôt exigeant une source primaire lue en texte intégral. Elle attend en
 *   `corpus/candidates/`.
 *
 * Ce cinquième thème, `juger-quelqu-un-apte`, se déclare dans la nuit du 4 septembre 2026.
 * Les soixante-sept pages de l'article de Lahy de 1924 ont été rouvertes et lues en entier :
 * sa source primaire passe de `partial` à `full-text`, la carte qui en dépendait a reçu le
 * contrôle aveugle et le verdict `PASS`, et le même contrôle a porté dans la foulée sur quatre
 * autres cartes du même champ, elles aussi reçues `PASS` au premier tour. Le thème se déclare
 * donc avec **cinq** cartes et non une, tirées de quatre articles distincts de L'année
 * psychologique (1922, 1924, 1926, 1931) et de trois signatures : J.-M. Lahy seul, J.-M. Lahy
 * et S. Korngold, et Mme Henri Piéron seule. Cette dernière forme est celle imprimée sur les
 * deux articles qu'elle signe : elle est retenue par le même principe que pour « J.-M. Lahy »
 * plutôt que « Jean-Maurice », et l'identité rétablie, Mathilde Piéron, est portée par
 * l'attribution_note de chacune des deux cartes. Sur `classement-par-valeurs-compensatrices`,
 * l'absence de source secondaire est délibérée et reste signalée par le validateur : la
 * recherche plein texte n'a rendu, dans le corpus psychotechnique, que l'article de Lahy
 * lui-même, et aucune caution de complaisance n'a été ajoutée à sa place.
 *
 * Aucun des trois thèmes déclarés ne repose sur une carte unique.
 *
 * L'unique thème de `behavioral-economics` est écrit le 28 août 2026, à l'ouverture du
 * onzième et dernier domaine, après le contrôle aveugle des quatre cartes du lot
 * d'ouverture. Il se déclare parce qu'il satisfait le critère appliqué depuis le lot de
 * cybernétique, et que le lot de sociologie du travail a rappelé en refusant un thème dont
 * les deux cartes venaient du même auteur et du même livre : ses quatre cartes validées
 * viennent de deux auteurs distincts et de deux articles distincts, Paul Albou en 1982 et
 * Pierre-Louis Reynaud en 1962, chacun fournissant deux concepts qui ont leur intertitre et
 * leur citation propres. C'est plus que le critère n'exige. Aucun autre thème n'est déclaré
 * pour ce domaine : un thème sans carte validée afficherait une page vide.
 *
 * Conséquence directe, visible ci-dessous : aucun thème n'est déclaré ici pour la santé
 * publique ni pour la mesure du bien-être, alors que le périmètre de `measurement-theory`
 * demandait de les balayer ; ni, en ergonomie de l'activité, pour la charge de travail comme
 * objet de définitions concurrentes ni pour le couple variabilité / contrainte-astreinte,
 * que son périmètre demandait aussi. Le scout n'en a rapporté aucune source primaire
 * ouvrable, et **un thème sans carte ne se déclare pas** — il afficherait une page vide et
 * compterait pour de la couverture.
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
      "Ceux qui sont mesurés apprennent ce qui les mesure, et ajustent leur conduite en conséquence. Ce thème porte sur les effets en retour de l'indicateur sur ce qu'il enregistre, jusqu'au point où l'indicateur s'améliore sans que la chose mesurée ait bougé.",
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
      "Les indicateurs ne flottent pas seuls : ils sont produits et entretenus par des dispositifs (audit, évaluation des politiques publiques, benchmarking, comptabilité). Ce thème examine ces dispositifs et ce que leur exigence de justification fait aux activités qui s'y soumettent.",
    domain: "measurement-theory",
  },

  // --- Ergonomie de l'activité ---------------------------------------------
  {
    id: "tache-et-activite",
    slug: "tache-et-activite",
    title: "Ce qui est demandé, ce qui est fait",
    tagline:
      "Entre la consigne et le geste, il reste tout le travail.",
    keywords: ["Tâche", "Activité", "Prescription"],
    description:
      "Aucune consigne ne dit tout ce qu'il faut faire pour l'appliquer : entre la tâche prescrite et ce qui se fait réellement, il reste un écart que quelqu'un comble. Ce thème porte sur cette distinction fondatrice et sur la méthode qui la rend observable : aller voir l'activité plutôt que la déduire de ce qui a été demandé.",
    domain: "activity-ergonomics",
  },
  {
    id: "regulation-et-marges",
    slug: "regulation-et-marges",
    title: "Ce que l'opérateur ajuste",
    tagline:
      "Tenir la tâche demande de se régler soi-même autant qu'elle.",
    keywords: ["Régulation", "Marge de manœuvre", "Modes opératoires"],
    description:
      "Rien ne se répète à l'identique : la matière varie, l'outil dérive, la fatigue vient. Ce thème porte sur la façon dont celui qui travaille réajuste en permanence ses manières de faire, et sur les conditions d'organisation qui lui laissent, ou lui refusent, de quoi le faire.",
    domain: "activity-ergonomics",
  },
  {
    id: "activite-empechee-et-metier",
    slug: "activite-empechee-et-metier",
    title: "Ce que le travail empêche",
    tagline:
      "Ce qu'on n'a pas pu faire compte aussi dans une journée.",
    keywords: ["Réel de l'activité", "Genre professionnel", "Collectif"],
    description:
      "L'activité ne se réduit pas à ce qui s'est fait : ce qu'on a voulu faire sans y parvenir, ce qu'on a dû renoncer à bien faire, pèse et coûte. Ce thème porte sur ce versant du travail, et sur ce que le métier et le collectif donnent, ou ne donnent pas, pour le tenir.",
    domain: "activity-ergonomics",
  },
  {
    id: "activite-instrumentee-et-conception",
    slug: "outil-et-conception",
    title: "L'outil et l'activité",
    tagline:
      "L'artefact décide déjà de ce qui sera possible d'en faire.",
    keywords: ["Instrument", "Catachrèse", "Conception"],
    description:
      "Un outil n'est pas neutre : il incorpore un modèle de celui qui s'en servira, et ce modèle agit avant tout usage. Ce thème porte sur ce double mouvement (ce que l'artefact impose à l'activité, ce que l'activité fait de l'artefact) et sur ce que cela exige de qui conçoit.",
    domain: "activity-ergonomics",
  },
  // --- Human factors et ergonomie cognitive --------------------------------
  {
    id: "erreur-humaine-et-fiabilite",
    slug: "erreur-humaine-et-fiabilite",
    title: "L'erreur et la fiabilité",
    tagline:
      "Se tromper n'est pas une faute, c'est une chose qui a une forme.",
    keywords: ["Taxonomie", "Condition latente", "Probabilité"],
    description:
      "L'erreur n'est pas un raté informe : elle se range par mécanismes, elle se quantifie parfois, et elle se prépare longtemps avant de se produire. Ce thème porte sur ce que nommer et classer l'erreur permet de voir, et sur ce que cela laisse encore hors champ.",
    domain: "human-factors",
  },
  {
    id: "automatisation-et-conception-cognitive",
    slug: "automatisation-et-conception",
    title: "L'automatisation et ce qu'elle laisse",
    tagline:
      "La machine prend le facile et rend le difficile, sans prévenir.",
    keywords: ["Rétroaction", "Mode", "Interface"],
    description:
      "Automatiser ne retire pas une part du travail en laissant le reste intact : cela change ce qui reste à faire, et souvent en plus difficile. Ce thème porte sur ce que le dispositif retire à l'opérateur, sur ce qu'il devrait lui rendre pour qu'il suive, et sur ce que la conception décide de tout cela par avance.",
    domain: "human-factors",
  },
  {
    id: "decision-et-conscience-de-la-situation",
    slug: "decider-en-situation",
    title: "Décider en situation",
    tagline:
      "L'expert ne compare pas : il reconnaît, puis il vérifie.",
    keywords: ["Reconnaissance", "Projection", "Temps contraint"],
    description:
      "Décider dans une tâche réelle ne ressemble pas à choisir entre des options posées à plat : il faut d'abord comprendre où l'on en est, et l'expérience répond souvent avant le raisonnement. Ce thème porte sur ce que l'opérateur perçoit, comprend et anticipe, et sur la manière dont il tranche sans avoir le temps de comparer.",
    domain: "human-factors",
  },
  {
    id: "charge-et-vigilance",
    slug: "charge-et-vigilance",
    title: "La charge et la vigilance",
    tagline:
      "Ce qu'on demande à une tête se mesure, mal et quand même.",
    keywords: ["Charge mentale", "Fatigue", "Instrument"],
    description:
      "La charge de travail et la fatigue ne se lisent pas sur un visage : il a fallu construire des instruments pour les saisir, et ces instruments décident de ce qu'on verra. Ce thème porte sur ces grandeurs, sur ce que leurs mesures attrapent, et sur ce que leur gestion déplace.",
    domain: "human-factors",
  },
  {
    id: "securite-et-resilience",
    slug: "securite-et-resilience",
    title: "Ce qui fait tenir",
    tagline:
      "Un système sûr n'est pas un système d'où l'imprévu est absent.",
    keywords: ["Résilience", "Ressources", "Anticipation"],
    description:
      "On explique d'ordinaire la sécurité par ce qui manque quand un accident survient. Ce thème prend le problème par l'autre bout : ce qui fait qu'un système continue de fonctionner la plupart du temps, et ce que cela demande de ressources à ceux qui le tiennent.",
    domain: "human-factors",
  },

  // --- Cybernétique ---------------------------------------------------------
  {
    id: "variete-et-moyens-de-la-regulation",
    slug: "variete-et-regulation",
    title: "Ce qu'il faut pour réguler",
    tagline:
      "On ne tient un système qu'avec de quoi répondre à ce qu'il fait.",
    keywords: ["Variété requise", "Amplification", "Information d'écart"],
    description:
      "Réguler n'est pas une intention, c'est une capacité : il faut posséder de quoi répondre à ce que le système peut faire. Ce thème porte sur la condition qui rend la régulation possible, sur ce qu'un régulateur peut obtenir au-delà de ses propres moyens, et sur les informations d'écart dont il dispose pour agir.",
    domain: "cybernetics",
  },
  {
    id: "la-boucle-et-l-ecart",
    slug: "la-boucle-et-l-ecart",
    title: "Ce dont une boucle se nourrit",
    tagline:
      "Une correction vit de ce qui lui revient de son propre effet.",
    keywords: ["Rétroaction", "Écart", "Référence"],
    description:
      "Une boucle de correction ne fonctionne que si quelque chose lui revient de ce qu'elle a produit. Ce thème porte sur ce que cette information doit être pour qu'il y ait vraiment boucle, sur ce que le succès de la correction fait au canal dont elle vit, et sur ce que devient une boucle le jour où l'écart s'annule.",
    domain: "cybernetics",
  },
  {
    id: "auto-organisation-et-bruit",
    slug: "auto-organisation-et-bruit",
    title: "Ce qui s'organise sans qu'on l'organise",
    tagline:
      "Un système peut gagner en ordre à partir de ce qui le dérange.",
    keywords: ["Auto-organisation", "Bruit", "Observateur"],
    description:
      "Un ordre peut apparaître sans que personne l'ait disposé, et parfois à partir du désordre même de l'environnement. Ce thème porte sur le mécanisme qui rend ce gain possible, sur la condition qu'il suppose, et sur la position que doit prendre celui qui veut en user plutôt que le décrire.",
    domain: "cybernetics",
  },
  {
    id: "ou-passe-la-commande",
    slug: "ou-passe-la-commande",
    title: "Où passe la commande",
    tagline:
      "Dans un système sans centre unique, l'autorité suit l'information.",
    keywords: ["Commandement", "Information", "Asservissement"],
    description:
      "Commander n'est pas toujours occuper une place dans une hiérarchie : dans certains systèmes, la main revient à l'endroit où l'information s'est accumulée. Ce thème porte sur la façon dont la commande se répartit, et sur ce qui fait qu'un ensemble est gouverné par des informations plutôt que par des ordres.",
    domain: "cybernetics",
  },

  // --- Systems Thinking -----------------------------------------------------
  {
    id: "comportement-dans-le-temps",
    slug: "comportement-dans-le-temps",
    title: "Ce qu'une structure finit par produire",
    tagline:
      "Le résultat d'un système n'est pas la somme des intentions.",
    keywords: ["Contre-intuition", "Court terme", "Cause éloignée"],
    description:
      "Un jeu de boucles, de stocks et de délais produit dans la durée des comportements que personne n'a voulus et que l'intuition lit à l'envers. Ce thème porte sur la distance entre la cause et le symptôme, sur ce que le temps fait à une politique, et sur ce qui arrive quand on cherche la cause du trouble au dehors.",
    domain: "systems-thinking",
  },
  {
    id: "ou-intervenir-dans-un-systeme",
    slug: "ou-intervenir",
    title: "Là où l'on peut vraiment peser",
    tagline:
      "Tous les endroits où l'on peut pousser ne se valent pas.",
    keywords: ["Point de levier", "Paramètre", "Paradigme"],
    description:
      "Agir sur un système, c'est choisir un endroit où appuyer, et ces endroits n'ont ni la même portée ni la même difficulté. Ce thème porte sur leur classement, du réglage d'un nombre à l'idée partagée d'où le système tire ses buts, et sur la raison pour laquelle on les actionne d'ordinaire dans le mauvais sens.",
    domain: "systems-thinking",
  },
  {
    id: "dire-systeme",
    slug: "dire-systeme",
    title: "Ce qu'on engage en disant système",
    tagline:
      "Le système n'est pas toujours dehors : il est parfois dans le modèle.",
    keywords: ["Analogie", "Modèle", "Découpage"],
    description:
      "Appeler quelque chose un système n'est pas un constat mais un découpage, et une notion empruntée à une autre discipline n'emporte pas avec elle ce qui la fondait. Ce thème porte sur le rapport entre le système réel et celui qu'on construit pour l'exprimer, et sur ce que coûte l'emprunt fait par analogie.",
    domain: "systems-thinking",
  },
  // --- Science de la décision ----------------------------------------------
  {
    id: "choisir-sous-risque",
    slug: "choisir-sous-risque",
    title: "Choisir quand on ne sait pas",
    tagline:
      "Le même choix, dit autrement, ne se décide pas pareil.",
    keywords: ["Utilité", "Cadrage", "Perte"],
    description:
      "Une théorie dit ce qu'un choix cohérent devrait être, et l'observation montre que personne ne choisit ainsi. Ce thème porte sur ce différend : ce que la norme du choix rationnel exige, ce que le jugement fait à sa place, et ce que la formulation d'un problème décide avant qu'on y réponde.",
    domain: "decision-science",
  },
  {
    id: "instruire-un-arbitrage",
    slug: "instruire-un-arbitrage",
    title: "Aider quelqu'un à trancher",
    tagline:
      "Avant de comparer des options, il faut savoir ce qu'on veut.",
    keywords: ["Critère", "Valeur", "Surclassement"],
    description:
      "Entre la théorie qui prescrit et l'observation qui décrit, il reste à outiller celui qui doit décider pour de bon. Ce thème porte sur ce qu'une méthode d'aide construit à sa place : les critères qu'elle retient, ce qu'elle refuse d'agréger, et le moment où le problème lui-même se formule.",
    domain: "decision-science",
  },
  // --- Operations Management ------------------------------------------------
  {
    id: "variation-et-controle",
    slug: "variation-et-controle",
    title: "Ce qu'un procédé fait varier",
    tagline:
      "Deux pièces ne sont jamais identiques, et ce n'est pas toujours une panne.",
    keywords: ["Hasard", "Cause assignable", "Limites"],
    description:
      "Un procédé qui répète la même opération ne rend jamais deux fois le même résultat, et la question de gestion n'est pas de supprimer cet écart mais de savoir lequel mérite qu'on aille chercher sa cause. Ce thème porte sur le partage entre ce qui varie sans raison particulière et ce qui signale un dérangement, et sur le critère qui tranche entre les deux.",
    domain: "operations-management",
  },
  {
    id: "produire-et-stocker",
    slug: "produire-et-stocker",
    title: "Combien produire, combien en tenir",
    tagline:
      "Un stock coûte, une rupture aussi : il faut trancher entre les deux.",
    keywords: ["Stock", "Rupture", "Capacité"],
    description:
      "Décider combien fabriquer, combien tenir en réserve et combien de gens employer sont trois questions qu'on ne peut pas trancher séparément, chacune reportant son coût sur les deux autres. Ce thème porte sur les règles qui rendent ce partage calculable, sur ce que le coût d'une rupture y pèse, et sur ce qu'elles supposent pour tenir.",
    domain: "operations-management",
  },
  {
    id: "ordonnancer",
    slug: "ordonnancer",
    title: "L'ordre dans lequel les choses passent",
    tagline:
      "Le même travail, rangé autrement, ne prend pas le même temps.",
    keywords: ["Ordonnancement", "Temps mort", "Aléa"],
    description:
      "Quand des tâches doivent passer les unes après les autres sur les mêmes postes, le total de travail ne change pas mais le temps qu'il faut pour l'écouler, si. Ce thème porte sur ce que l'ordre déplace réellement, sur le temps mort où il agit, et sur ce qui arrive à un ordre optimal quand les durées ne sont pas celles qu'on croyait.",
    domain: "operations-management",
  },
  // --- Psychologie du travail -----------------------------------------------
  {
    id: "ce-qui-engage-au-travail",
    slug: "ce-qui-engage-au-travail",
    title: "Ce qui donne envie de s'y mettre",
    tagline:
      "Ce n'est pas la paie qui décide si on a envie de bien faire.",
    keywords: ["Autonomie", "Objectif", "Motivation"],
    description:
      "Deux traditions de recherche répondent séparément à la même question : qu'est-ce qui, dans un emploi, engage celui qui l'occupe. L'une regarde les propriétés de la tâche elle-même et les états qu'elles produisent chez la personne, l'autre l'objectif qu'on lui assigne et ce qu'il règle de sa conduite. Ce thème porte sur ce que chacune établit, et sur les conditions qu'elles posent à leur propre validité.",
    domain: "work-psychology",
  },
  {
    id: "ce-que-l-emploi-depose",
    slug: "ce-que-l-emploi-depose",
    title: "Ce que l'emploi laisse sur soi",
    tagline:
      "Le travail ne s'arrête pas quand on quitte le poste.",
    keywords: ["Rémunération", "Seuil", "Hors travail"],
    description:
      "Un emploi ne se contente pas d'occuper des heures : il dépose sur la personne des états qui lui survivent, une frustration qui se mesure à un seuil plutôt qu'à un montant, une vie hors travail dont il commande les conditions. Ce thème porte sur ce que la situation d'emploi laisse chez celui qui l'occupe, et sur ce qui décide de son intensité.",
    domain: "work-psychology",
  },
  {
    id: "juger-quelqu-un-apte",
    slug: "juger-quelqu-un-apte",
    title: "Juger quelqu'un apte à un emploi",
    tagline:
      "Juger par l'épreuve, c'est aussi buter sur ce qu'elle ne dit pas.",
    keywords: ["Épreuve", "Classement", "Aptitude"],
    description:
      "Entre 1922 et 1931, la psychotechnique française décide par l'épreuve si une personne convient à un emploi : mesurer une aptitude, agréger des tests en un classement dont le seuil suit le marché du travail, mettre poste et travailleur analysés face à face. Ce thème porte sur ces dispositifs de jugement, et sur ce qu'ils peinent eux-mêmes à montrer : qu'une épreuve redouble une autre, qu'un score recouvre des profils opposés.",
    domain: "work-psychology",
  },
  // --- Sociologie du travail ------------------------------------------------
  {
    id: "marche-du-travail-et-trajectoires",
    slug: "marche-du-travail-et-trajectoires",
    title: "Ce qui trie les gens entre les emplois",
    tagline:
      "Changer souvent d'emploi ne dit rien de celui qui change.",
    keywords: ["Segmentation", "Mobilité", "Trajectoire"],
    description:
      "Une même conduite, changer d'emploi, se lit de deux façons : comme un trait de la personne, ou comme la marque de la place qu'elle occupe sur un marché du travail qui n'est pas homogène. Ce thème porte sur ce que la position déplace dans l'explication, et sur le déplacement du regard qui a suivi, du statut tenu à un instant vers le parcours entier.",
    domain: "sociology-of-work",
  },
  // --- Économie comportementale ---------------------------------------------
  {
    id: "psychologie-economique",
    slug: "psychologie-economique",
    title: "Étudier les conduites économiques",
    tagline:
      "La conduite économique s'observe, elle ne se déduit pas d'un calcul.",
    keywords: ["Conduite économique", "Rationalité", "Discipline"],
    description:
      "Une psychologie qui prend pour objet les conduites économiques s'est constituée en France autour d'une question de définition : de quoi traite-t-elle au juste, et à quoi refuse-t-elle de se réduire. Ce thème porte sur ce que ses auteurs ont entendu par conduite économique, et sur ce qu'ils mettent à la place de l'agent supposé rationnel : des degrés de rationalité, dont le mécanisme économique lui-même dépend.",
    domain: "behavioral-economics",
  },
];
