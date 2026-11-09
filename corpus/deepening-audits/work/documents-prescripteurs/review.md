concept : documents-prescripteurs
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : ad261a5e8e1fecb72970bc4d2a055f7709e74425

GATE PRÉALABLE
- SHA-256 actuel de corpus/deepenings/documents-prescripteurs.json :
  36e747da7a31e1656e5b1ddd91a9c921f33e4f2f8440f14002afbea266439760
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 60/60 SUPPORTED,
  mapping_incomplete vide, structural_errors vide.
- Blob de référence : lisible (`git cat-file -t` = blob), JSON d'approfondissement,
  conceptId = documents-prescripteurs. C'est bien la version examinée par l'audit (1 179 mots,
  friteuse en S1.P3, S5 « Ce que l'auteur ajoute à ces descriptions »).
- Volume lecteur (lead + sections) : 1 179 -> 1 282 mots (+8,7 %), dans la marge de l'audit.
  Aucun tiret cadratin. limits (interne) : 4 paragraphes ; rien de leur contenu (lecture
  médiée, recueil PUF, réception) ne remonte dans lead + sections.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     3/4     retirés : « ergonomiste français », exemples inventés de S1.P1 (case à cocher, ordre oral), gloses des trois rôles (ancienne S4.P2), extensions non marquées (ancienne S2.P1 ph.1, S3.P2-P3, S5.P2). Gate 60/60. Réserve : S3-S5 reposent sur une lecture médiée (SUP-245c...) reprise au plus près ; S1.P3 « indice » thèse Veyrac 1998 formulé sur l'expression, non sur la proposition.
progressivité pédagogique      1/4     3/4     intuition (lead) -> famille et définition fonctionnelle, attribution (S1) -> thèse et ses deux formes, place côté prescrit (S2) -> réglage du grain selon la compétence (S3) -> épreuve de l'usage (S4) -> question préalable de pertinence (S5). Chaque section ouvre un palier. Petit saut : « l'écart entre prescrit et réel » en S2.P1 avant que S2.P3 ne l'explique.
densité / non-redondance       1/4     3/4     le noyau « jamais toute la tâche » n'est plus porté qu'en S2.P1-P2 (et posé en question dans lead[1]) contre huit occurrences avant. Résidus : la dernière phrase de S3.P2 redit celle de S3.P1 (débutant / expérimenté) ; S4.P1 réénumère les traits de l'analyse interne déjà listés en fin de S3.P3.
clarté                         3/4     3/4     entrée concrète conservée (lead[0] notice / machine). Texte plus dense : Leontiev nommé sans explication (désignation seulement, légitime), listes de traits en S4.P1, S1.P3 chargé de dates et de références. Compensé par la définition de travail des « unités » (S3.P1) et la vignette moteur (S1.P2).
profondeur explicative         1/4     3/4     ajout du mécanisme qui manquait : taille des unités d'autant plus large que l'opérateur est compétent, unités élémentaires = plus de contrainte, prescriptions volontairement peu déterminées (S3) ; analyse interne / externe et difficultés du passage à l'action (S4). S4.P2-P3 restent au niveau de l'énumération, faute de matière au-delà de la désignation.
valeur des exemples            2/4     3/4     friteuse redondante supprimée ; vignette moteur (S1.P2) fait saisir une distinction réelle (faire savoir / faire faire) ; « une ligne / dix gestes » (S3.P2) rend concrète la notion d'unité, mais se clôt sur une redite. Échelle « ne pas stationner » -> centrale nucléaire tirée de l'article à la place d'exemples inventés.
limites / nuances              2/4     3/4     nuances de l'auteur désormais présentes au bon endroit : une prescription bonne pour le débutant cesse de l'être pour l'expérimenté, prescription volontairement floue, documents de production et de sécurité qui peuvent se contredire ; attribution héritée / propre resserrée en S1.P3 et S2.P3.
pouvoir d’ouverture            1/4     3/4     l'ancienne S5 se fermait sur une reformulation de la thèse ; la nouvelle S5 finit sur la question préalable de l'auteur (la meilleure solution réduit au minimum la nécessité des documents) : tension « écrire mieux / écrire moins » réelle. S5.P2 se clôt un peu à plat sur l'association des deux analyses.

TEST DU DELTA (nouvelle version)
- lead[0] : une consigne suivie pas à pas laisse des décisions à l'exécutant (intuition).
- lead[1] : ces textes forment une famille nommée par Leplat en 2004 ; question posée.
- S1.P1 : liste des noms ; leur diversité relève des coutumes et préférences, d'où l'étude des traits communs ; échelle d'exemples de l'article.
- S1.P2 : définition par la fonction et distinction d'avec les textes qui transmettent des connaissances.
- S1.P3 : la caractérisation est empruntée (Mayen et Savoyant ; Veyrac et al.) ; ce qui revient à Leplat est la catégorie unifiée.
- S2.P1 : la thèse d'incomplétude, de portée générale.
- S2.P2 : deux formes d'incomplétude (périmètre, détail), délégation à l'opérateur compétent.
- S2.P3 : arrière-plan prescrit / réel hérité ; le document est le versant prescrit.
- S3.P1 : deux questions d'évaluation ; règle des unités selon la compétence.
- S3.P2 : illustration de la règle (delta faible mais réel : rend concrète la notion d'unité).
- S3.P3 : le découpage règle aussi la force de contrainte ; prescriptions volontairement floues.
- S4.P1 : distinction analyse interne / analyse externe.
- S4.P2 : difficultés du passage du document à l'action.
- S4.P3 : cohérence et hiérarchie entre documents, acceptabilité, accessibilité.
- S5.P1 : question préalable de pertinence, réduire la nécessité des documents.
- S5.P2 : intégration du document dans l'activité.
Aucune séquence de trois paragraphes au delta identique ; aucune section principalement redondante.

défauts initiaux corrigés :
- Redondance systémique du noyau d'incomplétude (lead[0], S1.P3, S2.P1, S2.P2, S3.P2, S3.P3, S5.P1, S5.P2) : supprimée, le noyau tient en S2.P1-P2.
- S5 récapitulative sans rôle propre : remplacée par la conclusion de l'auteur (pertinence, intégration).
- Gloses non financées des trois rôles de Veyrac, Cellier et Bertrand : réduites à la désignation.
- Extensions non marquées prêtées à l'auteur (longueur ingérable, « deviner ce qu'il n'a pas dit », deux exécutants qui comblent différemment, « aucun texte fini ne peut ») : retirées.
- Exemples inventés présentés comme membres de la catégorie et « ergonomiste français » : retirés, remplacés par l'échelle d'exemples de l'article.
- Matière inemployée (grain des unités, analyse interne / externe, usage, conclusion) : intégrée en S3-S5.
- Promesse creuse « trois éléments qui reviendront constamment » : retirée.

régressions détectées :
- Mineure (clarté) : S2.P1 mobilise « l'écart entre prescrit et réel » deux paragraphes avant que S2.P3 ne l'explique ; l'ancienne S3.P1 introduisait la distinction avant de s'en servir. Le lead et l'intuition courante rendent le terme lisible, d'où un défaut non bloquant.
- Mineure (densité) : redite débutant / expérimenté entre la fin de S3.P1 et la fin de S3.P2 ; liste des traits de l'analyse interne répétée entre S3.P3 et S4.P1.
- Mineure (clarté) : S1.P3 alourdi par les dates et l'indice tiré de la thèse de 1998, qui relève davantage de l'attribution que de la compréhension.
- Perte acceptée : la décomposition action / conditions / résultat de l'ancienne S1.P2, que l'audit jugeait promesse non tenue.
- Aucune perte d'information solide de l'ancienne version : citations des § 1, 2, 17, formules de Mayen et Savoyant et de Veyrac et al., attribution prescrit / réel conservées.
- Aucune remontée de limits dans le texte lecteur.

raison de la décision : FACTCHECK_PASS sur le SHA exact du candidat. La réécriture supprime le défaut majeur du diagnostic (redondance systémique : cinq paragraphes sans delta et une section récapitulative) et le remplace par une progression réelle (mécanisme du grain selon la compétence, épreuve de l'usage, question de pertinence), financée par les supports désignés par l'audit, avec une croissance contenue (+8,7 %). Clarté et densité restent perfectibles sur trois points mineurs, mais aucun ne constitue une régression conceptuelle et la progression est nettement plus claire que dans l'ancienne version.
