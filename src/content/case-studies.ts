import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "procedure-controle-qualite-inutile",
    slug: "procedure-controle-qualite-inutile",
    title: "La fiche de contrôle qualité que personne ne croit utile",
    situation:
      "Dans une usine de conditionnement agroalimentaire, la direction a introduit, il y a trois ans, une procédure de contrôle qualité imposant à chaque opérateur de remplir une fiche papier à chaque étape de la ligne de production, en cochant une vingtaine d'items de vérification. La plupart des opérateurs jugent cette fiche redondante avec les capteurs automatiques déjà installés sur la ligne, et beaucoup pensent qu'elle n'apporte plus grand-chose à la sécurité réelle des produits. Pourtant, la fiche continue d'être remplie scrupuleusement à chaque poste, car son taux de remplissage est un indicateur suivi de près par la hiérarchie et intégré à l'évaluation des équipes. Personne, ni les opérateurs ni les chefs d'équipe, n'a formellement proposé de la supprimer ou de la simplifier, alors même que les conversations informelles en salle de pause révèlent un scepticisme largement partagé sur son utilité.",
    readings: [
      {
        authorId: "merton",
        conceptIds: ["deplacement-des-buts"],
        analysis:
          "La fiche de contrôle, conçue à l'origine comme un moyen de garantir la qualité des produits, est devenue une fin en soi : ce qui compte désormais pour les opérateurs et leur hiérarchie n'est plus la sécurité réelle du produit, déjà assurée par les capteurs automatiques, mais le taux de remplissage de la fiche elle-même. C'est un cas typique de déplacement des buts, renforcé par le fait que la hiérarchie évalue la conformité à la procédure plutôt que la qualité effective obtenue.",
      },
      {
        authorId: "crozier",
        conceptIds: ["zones-incertitude", "relations-de-pouvoir"],
        analysis:
          "Le maintien de la fiche, malgré son inutilité perçue, peut aussi s'analyser comme la préservation d'une zone de contrôle par la hiérarchie intermédiaire : le suivi du taux de remplissage donne aux chefs d'équipe un outil de pilotage simple et incontestable sur leurs équipes, une ressource de pouvoir qu'ils seraient réticents à abandonner même si son utilité technique est devenue marginale. Supprimer la fiche reviendrait à réduire une zone d'incertitude qu'ils contrôlent actuellement sur l'activité de leurs équipes.",
      },
      {
        authorId: "simon",
        conceptIds: ["processus-de-decision", "rationalite-limitee"],
        analysis:
          "Aucun acteur de l'organisation, ni les opérateurs ni la direction, ne dispose du temps ou de l'information nécessaire pour remettre formellement en question l'ensemble du dispositif de contrôle qualité : la décision de maintenir la fiche n'est donc jamais reprise et réévaluée globalement, elle est simplement reconduite par défaut à chaque cycle de production, illustrant une rationalité limitée qui privilégie le statu quo plutôt qu'une révision coûteuse en temps et en attention.",
      },
      {
        authorId: "argyris",
        conceptIds: ["single-loop-learning", "routines-defensives"],
        analysis:
          "Le scepticisme partagé en salle de pause, mais jamais formulé en réunion officielle, illustre une routine défensive : remettre en cause la fiche reviendrait implicitement à critiquer une décision prise par la hiérarchie il y a trois ans, ce que les équipes évitent collectivement. L'organisation reste ainsi bloquée dans un apprentissage en simple boucle — au mieux ajuster des détails de la fiche — sans jamais franchir le pas d'une remise en question plus profonde de sa pertinence.",
      },
    ],
  },
  {
    id: "nouveau-logiciel-reorganisation",
    slug: "nouveau-logiciel-reorganisation",
    title: "Le nouveau logiciel de gestion qui divise les équipes",
    situation:
      "Une administration territoriale de taille moyenne déploie un nouveau logiciel de gestion des dossiers, destiné à remplacer un système vieillissant et à harmoniser les pratiques entre les différents services. Le projet, décidé au niveau de la direction générale, est présenté comme un progrès technique nécessaire. Sur le terrain, les réactions des agents sont très contrastées : certains, jugeant l'outil mal conçu pour leurs pratiques réelles, quittent progressivement leur poste pour d'autres administrations offrant de meilleures conditions ; d'autres multiplient les remontées critiques détaillées à leur hiérarchie et participent activement aux groupes de travail sur l'amélioration de l'outil ; d'autres enfin, très attachés à leur mission de service public, continuent d'utiliser l'outil sans se plaindre ouvertement, tout en développant en parallèle des fichiers Excel parallèles pour pallier ses lacunes.",
    readings: [
      {
        authorId: "hirschman",
        conceptIds: ["exit", "voice", "loyalty"],
        analysis:
          "Cette situation illustre de façon presque manuelle les trois répertoires de réaction décrits par Hirschman : les départs vers d'autres administrations sont une forme d'exit qui prive l'organisation d'agents expérimentés sans nécessairement lui donner d'explication précise ; les remontées argumentées en groupe de travail relèvent de la voice, plus coûteuse individuellement mais porteuse d'une information utile pour améliorer l'outil ; et les agents qui continuent d'utiliser l'outil sans protester ouvertement, tout en le contournant discrètement, illustrent une loyalty qui n'empêche pas un ajustement informel du travail réel.",
      },
      {
        authorId: "friedberg",
        conceptIds: ["systeme-d-action-concret", "regulation-conjointe"],
        analysis:
          "Les fichiers Excel parallèles développés par certains agents constituent un système d'action concret qui s'écarte de l'organisation formelle prescrite par le nouveau logiciel : ils traduisent une régulation conjointe informelle par laquelle les agents comblent, à leur niveau, l'écart entre l'outil officiel et les besoins réels de leur travail quotidien, sans attendre une correction venue de la direction générale.",
      },
      {
        authorId: "weber",
        conceptIds: ["regles-formelles", "bureaucratie"],
        analysis:
          "Le nouveau logiciel incarne une tentative de rationalisation bureaucratique classique : harmoniser les pratiques par une règle unique et impersonnelle censée s'appliquer de façon identique à tous les agents, quel que soit le service. L'écart observé entre cette règle formelle et les pratiques réelles (contournements, fichiers parallèles) montre les limites concrètes de cet idéal d'uniformisation lorsqu'il ne tient pas compte de la diversité des situations de travail.",
      },
    ],
  },
  {
    id: "decision-hospitaliere-ambigue",
    slug: "decision-hospitaliere-ambigue",
    title: "La réorganisation hospitalière décidée dans l'urgence",
    situation:
      "Un hôpital public doit réorganiser en urgence l'affectation de ses lits face à un afflux inhabituel de patients, dans un contexte où plusieurs projets de réorganisation étaient déjà en discussion depuis des mois sans avoir abouti : fusion de deux services, nouvelle répartition des effectifs infirmiers, informatisation du suivi des lits disponibles. Sous la pression de la situation, la direction convoque une réunion de crise à laquelle participent, selon leur disponibilité du moment, des cadres de santé, des médecins-chefs et des représentants de la direction administrative. La décision finalement adoptée combine des éléments de plusieurs projets en discussion depuis des mois, sans qu'aucun d'entre eux n'ait été validé formellement au préalable, et sans que les objectifs précis de la réorganisation (réduire les délais d'attente ? optimiser les effectifs ? préparer une fusion à venir ?) n'aient été clairement tranchés avant la réunion.",
    readings: [
      {
        authorId: "simon",
        conceptIds: ["rationalite-limitee", "satisficing"],
        analysis:
          "Face à l'urgence, aucun des participants à la réunion de crise ne dispose du temps ni de l'information nécessaire pour évaluer méthodiquement toutes les options de réorganisation possibles : la décision adoptée n'est pas la solution optimale résultant d'une analyse exhaustive, mais une solution jugée suffisamment satisfaisante compte tenu des contraintes de temps, illustrant à la fois la rationalité limitée des décideurs et une logique de satisficing.",
      },
      {
        authorId: "march",
        conceptIds: ["garbage-can-model", "ambiguite-organisationnelle"],
        analysis:
          "Cette situation correspond presque exactement au modèle de la poubelle : des solutions déjà élaborées mais jamais adoptées (fusion de services, nouvelle répartition des effectifs) sont mobilisées à l'occasion d'une crise qui n'était pas le problème pour lequel elles avaient été initialement conçues, et des participants disponibles ponctuellement, plutôt que désignés selon une logique fonctionnelle stable, se retrouvent à trancher. L'ambiguïté sur les objectifs réels de la réorganisation, jamais clarifiés avant la réunion, est elle-même caractéristique de l'ambiguïté organisationnelle décrite par March : les buts se précisent après coup, à mesure que la décision se met en œuvre, plutôt que de la précéder clairement.",
      },
    ],
  },
];
