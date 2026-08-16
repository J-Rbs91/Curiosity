import type { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "weber",
    slug: "weber",
    name: "Max Weber",
    years: "1864-1920",
    tagline:
      "Pourquoi on obéit à une règle plutôt qu'à un homme.",
    keywords: ["Bureaucratie", "Autorité légale", "Rationalisation"],
    bio: "Max Weber est l'un des fondateurs de la sociologie moderne. Il a développé une typologie des formes de domination légitime (traditionnelle, charismatique, rationnelle-légale) pour comprendre pourquoi des individus obéissent à un ordre sans y être contraints par la force. Son analyse de la bureaucratie comme organisation fondée sur des règles écrites, une hiérarchie des fonctions et une compétence spécialisée a profondément marqué la sociologie des organisations. Il voyait dans la rationalisation croissante des sociétés occidentales un processus à la fois efficace et porteur de risques de déshumanisation, qu'il a résumé par l'image de la « cage d'acier ».",
    themes: ["bureaucratie-regles", "autorite-domination"],
  },
  {
    id: "merton",
    slug: "merton",
    name: "Robert K. Merton",
    years: "1910-2003",
    tagline:
      "Ce qu'une règle produit sans que personne l'ait voulu.",
    keywords: ["Fonctions latentes", "Déplacement des buts", "Conformité"],
    bio: "Robert K. Merton est un sociologue fonctionnaliste américain, connu pour avoir distingué les fonctions manifestes (les effets voulus et reconnus d'une institution) des fonctions latentes (ses effets non voulus et souvent non perçus). Il a appliqué cette distinction à l'étude des bureaucraties, montrant comment la discipline et la conformité aux règles, utiles à l'origine, peuvent se transformer en rigidité et en fin en soi : c'est le phénomène qu'il a nommé le déplacement des buts. Ses travaux ont ouvert la voie à une analyse critique mais nuancée des dysfonctions bureaucratiques, sans rejeter l'idée wébérienne de rationalité organisationnelle.",
    themes: ["bureaucratie-regles", "comportements-organisationnels"],
  },
  {
    id: "simon",
    slug: "simon",
    name: "Herbert A. Simon",
    years: "1916-2001",
    tagline:
      "On ne choisit pas le meilleur, mais le premier acceptable.",
    keywords: ["Rationalité limitée", "Satisficing", "Décision"],
    bio: "Herbert A. Simon a montré que les décideurs, dans les organisations comme ailleurs, ne disposent ni du temps, ni de l'information, ni des capacités cognitives nécessaires pour identifier et comparer toutes les solutions possibles à un problème. Il a forgé le concept de rationalité limitée (bounded rationality) pour décrire cette situation, et celui de satisficing pour désigner la recherche d'une solution simplement satisfaisante plutôt qu'optimale. Ses travaux, récompensés par le prix Nobel d'économie en 1978, ont fondé une approche réaliste de la prise de décision organisationnelle, reprise ensuite par James March avec qui il a collaboré.",
    themes: ["decision"],
  },
  {
    id: "march",
    slug: "march",
    name: "James G. March",
    years: "1928-2018",
    tagline:
      "Décider tient souvent moins du plan que du hasard.",
    keywords: ["Modèle de la poubelle", "Exploration", "Ambiguïté"],
    bio: "James G. March a prolongé et approfondi les travaux de Herbert Simon sur la rationalité limitée. Avec Michael Cohen et Johan Olsen, il a proposé le modèle de la « poubelle » (garbage can model), selon lequel dans certaines organisations les problèmes, les solutions, les participants et les occasions de choix circulent de façon relativement indépendante et ne se rencontrent souvent que par hasard. Il a également théorisé la tension entre exploration de nouvelles possibilités et exploitation des compétences existantes, un arbitrage central pour comprendre l'apprentissage et le changement organisationnels.",
    themes: ["decision", "changement-organisationnel"],
  },
  {
    id: "crozier",
    slug: "crozier",
    name: "Michel Crozier",
    years: "1922-2013",
    tagline:
      "Le pouvoir se loge là où la règle n'a pas tout prévu.",
    keywords: ["Zone d'incertitude", "Analyse stratégique", "Cercle vicieux"],
    bio: "Michel Crozier est le fondateur, avec Erhard Friedberg, de l'analyse stratégique des organisations en France. Dans « Le Phénomène bureaucratique » (1963), il montre à partir d'enquêtes de terrain que même dans les bureaucraties les plus rigides, les acteurs conservent une marge de liberté qu'ils utilisent stratégiquement pour défendre leurs intérêts. Cette marge naît du contrôle de zones d'incertitude que les règles formelles ne parviennent jamais totalement à éliminer. Il a également décrit un « cercle vicieux bureaucratique » où la multiplication des règles, censée réduire l'incertitude, en crée de nouvelles et alimente la rigidité du système.",
    themes: ["pouvoir", "bureaucratie-regles"],
  },
  {
    id: "friedberg",
    slug: "friedberg",
    name: "Erhard Friedberg",
    years: "né en 1942",
    tagline:
      "L'ordre d'une organisation se négocie, il ne se décrète pas.",
    keywords: ["Système d'action concret", "Coopération", "Régulation"],
    bio: "Erhard Friedberg a co-écrit avec Michel Crozier « L'Acteur et le système » (1977), ouvrage fondateur de l'analyse stratégique des organisations. Il y développe le concept de système d'action concret : l'ensemble des relations effectives, souvent informelles, par lesquelles des acteurs interdépendants régulent conjointement leur coopération au-delà des règles formelles. Ses travaux insistent sur le caractère toujours construit et négocié de l'ordre organisationnel, jamais simplement imposé d'en haut ni réductible à l'organigramme.",
    themes: ["pouvoir", "organisation-formelle-reelle"],
  },
  {
    id: "hirschman",
    slug: "hirschman",
    name: "Albert O. Hirschman",
    years: "1915-2012",
    tagline:
      "Partir, protester ou se taire, face au déclin.",
    keywords: ["Défection", "Prise de parole", "Loyauté"],
    bio: "Albert O. Hirschman a publié en 1970 « Exit, Voice, and Loyalty », un ouvrage qui dépasse le cadre strictement économique pour éclairer le fonctionnement de toute organisation confrontée à une baisse de qualité ou de performance perçue par ses membres. Il y distingue la défection (exit, quitter l'organisation), la prise de parole (voice, protester pour obtenir un changement) et la loyauté (loyalty, rester malgré l'insatisfaction). Son apport majeur est de montrer que ces trois options interagissent : une forte loyauté peut retarder la défection et donner du temps à la prise de parole, mais aussi étouffer toute contestation.",
    themes: ["reaction-insatisfaction"],
  },
  {
    id: "argyris",
    slug: "argyris",
    name: "Chris Argyris",
    years: "1923-2013",
    tagline:
      "Corriger l'erreur, ou questionner la règle qui l'a produite.",
    keywords: ["Simple boucle", "Double boucle", "Routines défensives"],
    bio: "Chris Argyris a consacré une grande partie de sa carrière, notamment avec Donald Schön, à l'étude de l'apprentissage organisationnel. Il distingue l'apprentissage en simple boucle, qui corrige une erreur en ajustant les moyens sans remettre en cause les objectifs ou les hypothèses de départ, de l'apprentissage en double boucle, qui va jusqu'à questionner ces présupposés eux-mêmes. Il a également étudié les « routines défensives », ces comportements individuels et collectifs qui protègent les acteurs d'un examen critique gênant mais bloquent, ce faisant, l'apprentissage profond de l'organisation.",
    themes: ["apprentissage-organisationnel"],
  },
];
