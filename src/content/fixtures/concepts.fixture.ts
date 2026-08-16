import type { Concept } from "@/types";

/**
 * Concepts d'échafaudage.
 *
 * Ces 35 fiches ont été écrites de mémoire, avant qu'il n'existe le moindre dispositif de
 * vérification, dans un seul but : donner aux écrans de quoi être construits et testés.
 * Elles ne sont pas un corpus, et il ne faut pas les lire comme un état antérieur du
 * corpus qu'il suffirait de corriger : leur ressemblance avec la réalité n'a jamais été
 * établie, et aucune de leurs sources n'est localisée.
 *
 * Elles ont été réduites mécaniquement au format de la carte le jour où la session
 * d'apprentissage a été retirée — mécanisme détaillé, exemple, quiz et questions d'analyse
 * ont été supprimés sans être remplacés. Rien n'y a été réécrit.
 *
 * Servies en développement seulement, elles ne comptent dans aucun décompte de corpus et
 * ne servent jamais de point de départ à l'instruction d'un concept : le pipeline part des
 * textes, pas d'ici. Ce fichier est destiné à disparaître, non à être maintenu.
 */
export const fixtureConcepts: Concept[] = [
  {
    "id": "bureaucratie",
    "slug": "bureaucratie",
    "title": "Bureaucratie",
    "hookQuestion": "Pourquoi une organisation fondée sur des règles impersonnelles est-elle, pour Weber, la forme la plus efficace de coordination collective, alors que le mot « bureaucratie » évoque aujourd'hui la lenteur et la paperasse ?",
    "shortExplanation": "Pour Max Weber, la bureaucratie est un type d'organisation fondé sur des règles écrites, une hiérarchie claire des fonctions et des agents recrutés sur leurs compétences. Elle vise à remplacer l'arbitraire personnel par un traitement prévisible et égal des cas.",
    "authors": [
      "weber"
    ],
    "themes": [
      "bureaucratie-regles",
      "autorite-domination"
    ],
    "sources": [
      {
        "label": "Weber, Économie et société",
        "kind": "primary"
      },
      {
        "label": "La bureaucratie comme idéal-type wébérien",
        "kind": "pedagogical-interpretation"
      }
    ]
  },
  {
    "id": "rationalisation",
    "slug": "rationalisation",
    "title": "Rationalisation",
    "hookQuestion": "Pourquoi Weber voit-il dans la montée des calculs, des procédures et des règles écrites un mouvement de fond des sociétés modernes, bien au-delà des seules entreprises ?",
    "shortExplanation": "La rationalisation désigne, chez Weber, le processus historique par lequel les sociétés occidentales substituent progressivement au sentiment, à la tradition et à la croyance des modes d'action fondés sur le calcul, la prévisibilité et des règles explicites.",
    "authors": [
      "weber"
    ],
    "themes": [
      "bureaucratie-regles"
    ],
    "sources": [
      {
        "label": "Weber, Économie et société",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "autorite-rationnelle-legale",
    "slug": "autorite-rationnelle-legale",
    "title": "Autorité rationnelle-légale",
    "hookQuestion": "Pourquoi obéissez-vous aux instructions de votre supérieur hiérarchique même si vous ne le respectez pas personnellement, et même s'il n'a aucun lien de parenté ou de charisme particulier ?",
    "shortExplanation": "L'autorité rationnelle-légale est, chez Weber, une forme de domination légitime fondée sur la croyance en la validité de règles édictées légalement et sur le droit de ceux qui exercent l'autorité en vertu de ces règles à donner des ordres.",
    "authors": [
      "weber"
    ],
    "themes": [
      "autorite-domination"
    ],
    "sources": [
      {
        "label": "Weber, Économie et société",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "autorite-traditionnelle",
    "slug": "autorite-traditionnelle",
    "title": "Autorité traditionnelle",
    "hookQuestion": "Pourquoi certains chefs d'entreprise familiale ou certains monarques sont-ils obéis simplement parce que « cela a toujours été ainsi » ?",
    "shortExplanation": "L'autorité traditionnelle est, chez Weber, une forme de domination légitime fondée sur la croyance au caractère sacré ou immémorial des coutumes et sur le statut des personnes appelées à exercer l'autorité en vertu de cette tradition.",
    "authors": [
      "weber"
    ],
    "themes": [
      "autorite-domination"
    ],
    "sources": [
      {
        "label": "Weber, Économie et société",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "autorite-charismatique",
    "slug": "autorite-charismatique",
    "title": "Autorité charismatique",
    "hookQuestion": "Pourquoi certains fondateurs d'entreprise ou dirigeants politiques parviennent-ils à mobiliser des foules alors même qu'ils ne s'appuient ni sur une règle écrite ni sur la tradition ?",
    "shortExplanation": "L'autorité charismatique est, chez Weber, une forme de domination légitime fondée sur la croyance en des qualités exceptionnelles, voire exemplaires ou héroïques, attribuées à une personne.",
    "authors": [
      "weber"
    ],
    "themes": [
      "autorite-domination"
    ],
    "sources": [
      {
        "label": "Weber, Économie et société",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "regles-formelles",
    "slug": "regles-formelles",
    "title": "Règles formelles",
    "hookQuestion": "Pourquoi une organisation a-t-elle besoin d'écrire ses procédures noir sur blanc plutôt que de laisser chacun agir selon son bon sens ?",
    "shortExplanation": "Les règles formelles sont les normes écrites et explicites (procédures, règlements, fiches de poste) qui définissent officiellement comment une organisation doit fonctionner, indépendamment des personnes qui l'animent.",
    "authors": [
      "weber"
    ],
    "themes": [
      "bureaucratie-regles"
    ],
    "sources": [
      {
        "label": "Weber, Économie et société",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "fonctions-manifestes",
    "slug": "fonctions-manifestes",
    "title": "Fonctions manifestes",
    "hookQuestion": "Quand une organisation instaure une nouvelle règle, l'effet qu'elle en attend officiellement est-il toujours celui qui se produit réellement ?",
    "shortExplanation": "Les fonctions manifestes sont, chez Merton, les conséquences objectives d'une institution ou d'une règle qui sont voulues et reconnues par les acteurs concernés — c'est l'effet affiché, l'objectif officiel.",
    "authors": [
      "merton"
    ],
    "themes": [
      "comportements-organisationnels"
    ],
    "sources": [
      {
        "label": "Merton, Éléments de théorie et de méthode sociologique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "fonctions-latentes",
    "slug": "fonctions-latentes",
    "title": "Fonctions latentes",
    "hookQuestion": "Une règle peut-elle produire des effets réels et importants que personne n'avait prévus ni même remarqués ?",
    "shortExplanation": "Les fonctions latentes sont, chez Merton, les conséquences objectives d'une institution ou d'une règle qui ne sont ni voulues ni reconnues par les acteurs — des effets réels mais non intentionnels.",
    "authors": [
      "merton"
    ],
    "themes": [
      "comportements-organisationnels"
    ],
    "sources": [
      {
        "label": "Merton, Éléments de théorie et de méthode sociologique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "dysfonctions-bureaucratiques",
    "slug": "dysfonctions-bureaucratiques",
    "title": "Dysfonctions bureaucratiques",
    "hookQuestion": "Comment une organisation peut-elle devenir moins efficace précisément à cause des règles conçues pour la rendre plus efficace ?",
    "shortExplanation": "Les dysfonctions bureaucratiques sont, pour Merton, les effets négatifs non voulus qui découlent du fonctionnement même de la bureaucratie, lorsque la discipline aux règles se retourne contre les objectifs qu'elle devait servir.",
    "authors": [
      "merton"
    ],
    "themes": [
      "bureaucratie-regles"
    ],
    "sources": [
      {
        "label": "Merton, Éléments de théorie et de méthode sociologique",
        "kind": "primary"
      },
      {
        "label": "Dysfonctions bureaucratiques : lecture croisée Weber-Merton",
        "kind": "pedagogical-interpretation"
      }
    ]
  },
  {
    "id": "deplacement-des-buts",
    "slug": "deplacement-des-buts",
    "title": "Déplacement des buts",
    "hookQuestion": "Pourquoi une règle créée pour améliorer le travail peut-elle finir par devenir plus importante, aux yeux des agents, que le travail lui-même ?",
    "shortExplanation": "Le déplacement des buts désigne, chez Merton, le processus par lequel le respect scrupuleux des règles et procédures devient une fin en soi, se substituant progressivement aux objectifs finaux que ces règles étaient censées servir.",
    "authors": [
      "merton"
    ],
    "themes": [
      "bureaucratie-regles",
      "comportements-organisationnels"
    ],
    "sources": [
      {
        "label": "Merton, Éléments de théorie et de méthode sociologique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "ritualisme-bureaucratique",
    "slug": "ritualisme-bureaucratique",
    "title": "Ritualisme bureaucratique",
    "hookQuestion": "Peut-on appliquer une règle à la lettre tout en trahissant complètement son esprit ?",
    "shortExplanation": "Le ritualisme bureaucratique désigne, chez Merton, une attitude où l'agent applique scrupuleusement les règles formelles sans se soucier des résultats concrets attendus, transformant la conformité procédurale en réflexe presque rituel.",
    "authors": [
      "merton"
    ],
    "themes": [
      "bureaucratie-regles",
      "comportements-organisationnels"
    ],
    "sources": [
      {
        "label": "Merton, Éléments de théorie et de méthode sociologique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "rationalite-limitee",
    "slug": "rationalite-limitee",
    "title": "Rationalité limitée",
    "hookQuestion": "Un décideur, même compétent et bien intentionné, peut-il réellement examiner toutes les options possibles avant de choisir ?",
    "shortExplanation": "La rationalité limitée, concept forgé par Herbert Simon, décrit le fait que les décideurs ne disposent jamais d'une information complète, d'un temps illimité ni d'une capacité cognitive infinie pour évaluer toutes les solutions possibles à un problème.",
    "authors": [
      "simon"
    ],
    "themes": [
      "decision"
    ],
    "sources": [
      {
        "label": "Simon, Administrative Behavior",
        "kind": "primary"
      },
      {
        "label": "Simon, A Behavioral Model of Rational Choice",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "satisficing",
    "slug": "satisficing",
    "title": "Satisficing (solution satisfaisante)",
    "hookQuestion": "Pourquoi un décideur s'arrête-t-il parfois à la première solution « suffisamment bonne » plutôt que de continuer à chercher la meilleure solution possible ?",
    "shortExplanation": "Le satisficing (contraction anglaise de « satisfy » et « suffice ») désigne, chez Simon, la stratégie de décision consistant à choisir la première option qui atteint un niveau de satisfaction jugé acceptable, plutôt que de rechercher la solution objectivement optimale.",
    "authors": [
      "simon"
    ],
    "themes": [
      "decision"
    ],
    "sources": [
      {
        "label": "Simon, Administrative Behavior",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "processus-de-decision",
    "slug": "processus-de-decision",
    "title": "Processus de décision",
    "hookQuestion": "Une décision organisationnelle est-elle un acte instantané, ou le résultat d'un processus en plusieurs étapes qui peut être analysé et compris ?",
    "shortExplanation": "Le processus de décision désigne, chez Simon, la séquence d'étapes — identification du problème, recherche d'informations, élaboration d'options, choix, évaluation — par laquelle une organisation ou un individu aboutit à une décision.",
    "authors": [
      "simon"
    ],
    "themes": [
      "decision"
    ],
    "sources": [
      {
        "label": "Simon, Administrative Behavior",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "contraintes-informationnelles",
    "slug": "contraintes-informationnelles",
    "title": "Contraintes informationnelles",
    "hookQuestion": "Pourquoi un décideur ne dispose-t-il presque jamais de toute l'information dont il aurait besoin pour choisir la meilleure option possible ?",
    "shortExplanation": "Les contraintes informationnelles désignent les limites, chez Simon, liées à la disponibilité, au coût et au temps nécessaires pour obtenir l'information pertinente à une décision, contribuant directement à la rationalité limitée des acteurs.",
    "authors": [
      "simon"
    ],
    "themes": [
      "decision"
    ],
    "sources": [
      {
        "label": "Simon, Administrative Behavior",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "ambiguite-organisationnelle",
    "slug": "ambiguite-organisationnelle",
    "title": "Ambiguïté organisationnelle",
    "hookQuestion": "Dans une organisation, les objectifs et les préférences sont-ils toujours clairs avant que l'action ne commence, ou se découvrent-ils parfois après coup ?",
    "shortExplanation": "L'ambiguïté organisationnelle désigne, chez March, le fait que les buts, les préférences, les technologies et même la participation des acteurs à une décision sont souvent flous, changeants ou découverts a posteriori, plutôt que fixés clairement à l'avance.",
    "authors": [
      "march"
    ],
    "themes": [
      "decision"
    ],
    "sources": [
      {
        "label": "March et Olsen, Ambiguity and Choice in Organizations",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "garbage-can-model",
    "slug": "garbage-can-model",
    "title": "Modèle de la poubelle (garbage can model)",
    "hookQuestion": "Une décision organisationnelle résulte-t-elle toujours d'une analyse méthodique d'un problème, ou peut-elle naître de la rencontre presque fortuite d'un problème, d'une solution déjà disponible et d'un moment propice ?",
    "shortExplanation": "Le modèle de la poubelle, développé par Cohen, March et Olsen, décrit certaines organisations comme des systèmes où problèmes, solutions, participants et occasions de choix circulent de façon relativement indépendante, et où une décision naît souvent de leur rencontre plus ou moins fortuite.",
    "authors": [
      "march"
    ],
    "themes": [
      "decision"
    ],
    "sources": [
      {
        "label": "Cohen, March et Olsen, A Garbage Can Model of Organizational Choice",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "exploration-organisationnelle",
    "slug": "exploration-organisationnelle",
    "title": "Exploration organisationnelle",
    "hookQuestion": "Une organisation qui consacre trop peu de temps à chercher de nouvelles idées prend-elle un risque aussi grand que celle qui n'en applique jamais aucune ?",
    "shortExplanation": "L'exploration, chez March, désigne l'ensemble des activités organisationnelles orientées vers la recherche, l'expérimentation et l'innovation — découvrir de nouvelles possibilités plutôt que d'exploiter celles déjà connues.",
    "authors": [
      "march"
    ],
    "themes": [
      "changement-organisationnel"
    ],
    "sources": [
      {
        "label": "March, Exploration and Exploitation in Organizational Learning",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "exploitation-organisationnelle",
    "slug": "exploitation-organisationnelle",
    "title": "Exploitation organisationnelle",
    "hookQuestion": "Pourquoi une organisation qui se concentre uniquement sur l'amélioration de ce qu'elle sait déjà faire peut-elle, à terme, se mettre en danger ?",
    "shortExplanation": "L'exploitation, chez March, désigne les activités organisationnelles orientées vers le perfectionnement, la mise en œuvre efficace et la rentabilisation des compétences, routines et technologies déjà maîtrisées par l'organisation.",
    "authors": [
      "march"
    ],
    "themes": [
      "changement-organisationnel"
    ],
    "sources": [
      {
        "label": "March, Exploration and Exploitation in Organizational Learning",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "acteur-strategique",
    "slug": "acteur-strategique",
    "title": "Acteur stratégique",
    "hookQuestion": "Même dans l'organisation la plus hiérarchisée et la plus réglementée, un employé de base est-il totalement dépourvu de marge de manœuvre ?",
    "shortExplanation": "L'acteur stratégique est, pour Crozier, tout membre d'une organisation qui, même dans un rôle subalterne et très encadré, dispose toujours d'une marge de liberté qu'il utilise activement pour poursuivre ses propres intérêts au sein du système.",
    "authors": [
      "crozier"
    ],
    "themes": [
      "pouvoir"
    ],
    "sources": [
      {
        "label": "Crozier, Le Phénomène bureaucratique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "zones-incertitude",
    "slug": "zones-incertitude",
    "title": "Zones d'incertitude",
    "hookQuestion": "Pourquoi l'agent de maintenance qui connaît seul les pannes d'une vieille machine peut-il avoir, dans les faits, plus de pouvoir que certains cadres hiérarchiques ?",
    "shortExplanation": "Les zones d'incertitude sont, chez Crozier, les espaces d'imprévisibilité que les règles formelles ne parviennent pas à éliminer, et dont le contrôle par un acteur constitue la source principale de son pouvoir dans l'organisation.",
    "authors": [
      "crozier"
    ],
    "themes": [
      "pouvoir"
    ],
    "sources": [
      {
        "label": "Crozier, Le Phénomène bureaucratique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "relations-de-pouvoir",
    "slug": "relations-de-pouvoir",
    "title": "Relations de pouvoir",
    "hookQuestion": "Le pouvoir dans une organisation est-il une propriété que l'on possède, ou plutôt une relation qui se joue entre des acteurs interdépendants ?",
    "shortExplanation": "Pour Crozier, le pouvoir n'est pas un attribut fixe détenu par une personne ou un poste, mais une relation d'échange déséquilibrée entre des acteurs interdépendants, où chacun tente de faire valoir ses intérêts en s'appuyant sur les ressources dont il dispose.",
    "authors": [
      "crozier"
    ],
    "themes": [
      "pouvoir"
    ],
    "sources": [
      {
        "label": "Crozier, Le Phénomène bureaucratique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "cercle-vicieux-bureaucratique",
    "slug": "cercle-vicieux-bureaucratique",
    "title": "Cercle vicieux bureaucratique",
    "hookQuestion": "Pourquoi ajouter des règles pour corriger un dysfonctionnement organisationnel peut-il, paradoxalement, aggraver ce même dysfonctionnement ?",
    "shortExplanation": "Le cercle vicieux bureaucratique désigne, chez Crozier, une dynamique où la prolifération de règles impersonnelles, censée réduire l'incertitude et l'arbitraire, finit par créer de nouvelles rigidités et de nouvelles zones d'incertitude, appelant encore plus de règles.",
    "authors": [
      "crozier"
    ],
    "themes": [
      "bureaucratie-regles",
      "pouvoir"
    ],
    "sources": [
      {
        "label": "Crozier, Le Phénomène bureaucratique",
        "kind": "primary"
      },
      {
        "label": "Cercle vicieux bureaucratique : prolongement des dysfonctions mertoniennes",
        "kind": "pedagogical-interpretation"
      }
    ]
  },
  {
    "id": "strategies-d-acteurs",
    "slug": "strategies-d-acteurs",
    "title": "Stratégies d'acteurs",
    "hookQuestion": "Quand un employé contourne discrètement une procédure officielle sans jamais la violer ouvertement, agit-il au hasard ou selon une logique que l'on peut analyser ?",
    "shortExplanation": "Les stratégies d'acteurs désignent, chez Crozier, les comportements que les membres d'une organisation développent délibérément, dans la marge de liberté dont ils disposent, pour préserver ou renforcer leur position et leurs intérêts au sein du système.",
    "authors": [
      "crozier"
    ],
    "themes": [
      "pouvoir"
    ],
    "sources": [
      {
        "label": "Crozier, Le Phénomène bureaucratique",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "systeme-d-action-concret",
    "slug": "systeme-d-action-concret",
    "title": "Système d'action concret",
    "hookQuestion": "Comment expliquer que deux entreprises dotées du même organigramme officiel puissent fonctionner de façon très différente au quotidien ?",
    "shortExplanation": "Le système d'action concret est, chez Crozier et Friedberg, l'ensemble des relations effectives et souvent informelles par lesquelles des acteurs interdépendants régulent concrètement leur coopération, au-delà — et parfois en décalage — de l'organisation formelle.",
    "authors": [
      "friedberg"
    ],
    "themes": [
      "organisation-formelle-reelle",
      "pouvoir"
    ],
    "sources": [
      {
        "label": "Crozier et Friedberg, L'Acteur et le système",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "interdependance-des-acteurs",
    "slug": "interdependance-des-acteurs",
    "title": "Interdépendance des acteurs",
    "hookQuestion": "Pourquoi des acteurs aux intérêts parfois divergents finissent-ils quand même par coopérer au sein d'une même organisation ?",
    "shortExplanation": "L'interdépendance des acteurs désigne, chez Friedberg, le fait que dans une organisation, aucun acteur ne peut atteindre ses objectifs seul : chacun dépend, au moins partiellement, des ressources et de la coopération des autres pour agir.",
    "authors": [
      "friedberg"
    ],
    "themes": [
      "organisation-formelle-reelle"
    ],
    "sources": [
      {
        "label": "Crozier et Friedberg, L'Acteur et le système",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "regulation-conjointe",
    "slug": "regulation-conjointe",
    "title": "Régulation conjointe",
    "hookQuestion": "Comment des acteurs aux intérêts divergents parviennent-ils à établir des règles de fonctionnement stables sans qu'aucune autorité centrale ne les impose entièrement ?",
    "shortExplanation": "La régulation conjointe désigne, chez Friedberg, le processus par lequel des acteurs interdépendants élaborent progressivement, par ajustements successifs et négociations implicites, des règles de coopération partagées qui ne dépendent d'aucune autorité unique.",
    "authors": [
      "friedberg"
    ],
    "themes": [
      "organisation-formelle-reelle"
    ],
    "sources": [
      {
        "label": "Crozier et Friedberg, L'Acteur et le système",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "cooperation-organisationnelle",
    "slug": "cooperation-organisationnelle",
    "title": "Coopération organisationnelle",
    "hookQuestion": "La coopération entre membres d'une organisation va-t-elle de soi dès lors qu'ils partagent officiellement les mêmes objectifs ?",
    "shortExplanation": "La coopération organisationnelle désigne, dans l'analyse stratégique de Friedberg, le résultat toujours fragile et négocié de l'ajustement entre des acteurs aux stratégies différentes, et non un état naturel découlant automatiquement d'objectifs communs affichés.",
    "authors": [
      "friedberg"
    ],
    "themes": [
      "organisation-formelle-reelle"
    ],
    "sources": [
      {
        "label": "Crozier et Friedberg, L'Acteur et le système",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "exit",
    "slug": "exit",
    "title": "Exit (défection)",
    "hookQuestion": "Face à une organisation dont la qualité se dégrade, pourquoi certains membres préfèrent-ils simplement partir plutôt que d'essayer de la changer de l'intérieur ?",
    "shortExplanation": "L'exit (défection), chez Hirschman, désigne la réaction qui consiste à quitter une organisation, un produit ou un service insatisfaisant, plutôt que d'exprimer son mécontentement pour tenter d'obtenir un changement.",
    "authors": [
      "hirschman"
    ],
    "themes": [
      "reaction-insatisfaction"
    ],
    "sources": [
      {
        "label": "Hirschman, Exit, Voice, and Loyalty",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "voice",
    "slug": "voice",
    "title": "Voice (prise de parole)",
    "hookQuestion": "Pourquoi certains membres mécontents d'une organisation choisissent-ils de protester ouvertement plutôt que de simplement partir ?",
    "shortExplanation": "La voice (prise de parole), chez Hirschman, désigne la réaction qui consiste à exprimer son mécontentement, à l'intérieur de l'organisation, dans le but d'obtenir un changement, plutôt que de la quitter.",
    "authors": [
      "hirschman"
    ],
    "themes": [
      "reaction-insatisfaction"
    ],
    "sources": [
      {
        "label": "Hirschman, Exit, Voice, and Loyalty",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "loyalty",
    "slug": "loyalty",
    "title": "Loyalty (loyauté)",
    "hookQuestion": "Pourquoi certains membres restent-ils fidèles à une organisation en déclin, sans partir ni protester ouvertement ?",
    "shortExplanation": "La loyalty (loyauté), chez Hirschman, désigne l'attachement d'un membre à une organisation qui le conduit à rester malgré son insatisfaction, ce qui peut soit lui laisser le temps de recourir à la voice, soit au contraire étouffer toute contestation.",
    "authors": [
      "hirschman"
    ],
    "themes": [
      "reaction-insatisfaction"
    ],
    "sources": [
      {
        "label": "Hirschman, Exit, Voice, and Loyalty",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "single-loop-learning",
    "slug": "single-loop-learning",
    "title": "Apprentissage en simple boucle",
    "hookQuestion": "Corriger une erreur en ajustant simplement une procédure suffit-il toujours à empêcher qu'elle se reproduise sous une autre forme ?",
    "shortExplanation": "L'apprentissage en simple boucle, chez Argyris, désigne un mode d'apprentissage où une organisation détecte une erreur et la corrige en ajustant ses actions ou ses moyens, sans remettre en cause les objectifs ou les hypothèses de départ qui l'ont produite.",
    "authors": [
      "argyris"
    ],
    "themes": [
      "apprentissage-organisationnel"
    ],
    "sources": [
      {
        "label": "Argyris et Schön, Organizational Learning",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "double-loop-learning",
    "slug": "double-loop-learning",
    "title": "Apprentissage en double boucle",
    "hookQuestion": "Pour résoudre durablement un problème récurrent, faut-il parfois questionner les objectifs et les présupposés eux-mêmes, plutôt que seulement les moyens employés ?",
    "shortExplanation": "L'apprentissage en double boucle, chez Argyris, désigne un mode d'apprentissage où l'organisation, face à une erreur, va jusqu'à remettre en question les objectifs, les valeurs directrices ou les hypothèses de fond qui ont conduit à cette erreur, et non seulement les moyens employés.",
    "authors": [
      "argyris"
    ],
    "themes": [
      "apprentissage-organisationnel"
    ],
    "sources": [
      {
        "label": "Argyris et Schön, Organizational Learning",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "routines-defensives",
    "slug": "routines-defensives",
    "title": "Routines défensives",
    "hookQuestion": "Pourquoi des équipes compétentes et bien intentionnées évitent-elles parfois systématiquement d'aborder les vrais problèmes qui expliquent leurs échecs répétés ?",
    "shortExplanation": "Les routines défensives sont, chez Argyris, des comportements individuels et collectifs, souvent inconscients, qui protègent les acteurs et l'organisation d'un examen critique perçu comme menaçant ou gênant, au prix d'un blocage de l'apprentissage en profondeur.",
    "authors": [
      "argyris"
    ],
    "themes": [
      "apprentissage-organisationnel"
    ],
    "sources": [
      {
        "label": "Argyris, Overcoming Organizational Defenses",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "remise-en-cause-des-hypotheses",
    "slug": "remise-en-cause-des-hypotheses",
    "title": "Remise en cause des hypothèses",
    "hookQuestion": "Une organisation peut-elle apprendre durablement d'un échec sans jamais interroger les croyances implicites qui ont guidé la décision initiale ?",
    "shortExplanation": "La remise en cause des hypothèses désigne, dans le prolongement des travaux d'Argyris, la démarche consistant à rendre explicites et à questionner ouvertement les croyances, valeurs et présupposés implicites qui orientent l'action organisationnelle, condition nécessaire de l'apprentissage en double boucle.",
    "authors": [
      "argyris"
    ],
    "themes": [
      "apprentissage-organisationnel"
    ],
    "sources": [
      {
        "label": "Argyris et Schön, Organizational Learning",
        "kind": "primary"
      },
      {
        "label": "Approfondissement pédagogique de la double boucle chez Argyris",
        "kind": "pedagogical-interpretation"
      }
    ]
  }
];
