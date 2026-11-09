concept : predominance-du-conflit-sur-la-negociation
mode    : REVISE (audit `REVISE`, protocol_version 4)
date    : 2026-11-06
texte de départ : SHA 8eac437647f6a94c406409a89b1a7e44eea4340b8197f1953f5671fc0bbd3ef9 (version auditée, celle du pack)
texte rendu     : SHA 7a16cd13d0659ad7de490defc101a0a4f9aec5aff9f242d0fda54816b29961b8
seul fichier modifié : corpus/deepenings/predominance-du-conflit-sur-la-negociation.json
(ni corpus/validated, ni corpus/evidence, ni les artefacts de fact-check ne sont touchés)

## Matière lue

PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md ; l'approfondissement ; l'enregistrement
validé. Son champ `dossier` désigne `corpus/evidence/taille-des-entreprises-et-issue-des-greves/lecture.json` :
le répertoire, listé, ne contient que ce fichier, lu en entier (y compris `reserves`, qui lient
comme `limits`). `corpus/evidence/predominance-du-conflit-sur-la-negociation/` n'existe pas.
L'audit, le pack (candidate_sha256 = 8eac4376…, identique au fichier de départ), le gate du cycle
dda22c72 (C011 MAPPING_INCOMPLETE, C030 TOO_STRONG), claim-map/verification de ce cycle,
factcheck-fixes.md et la version rejetée (lue comme indice seulement). Aucune recherche externe.

## Volume

Texte lecteur (lead + paragraphes, hors titres, découpe par espaces) : **1 346 mots avant,
1 310 après (−36, −2,7 %)**. Compte de `corpus:deepen --check` (son périmètre, limits compris) :
1 531 mots. La cible de l'audit (≤ 1 350) est tenue ; les ajouts sont payés par les retraits.

## Décisions sur les deux contradictions internes (non tranchées)

- **Segrestin mentionne-t-il Dassa ?** (SUP-66a9ee547abd9ee5 / SUP-64b213801def22dc contre
  SUP-a88bce97a26e6edd / SUP-4c884765058ef85d) : toute phrase qui en dépend est retirée. L'ancien
  S5.P2 (imputation de la thèse par un tiers, citation de Segrestin sur Dassa) disparaît, ainsi
  que la phrase « ce qui revient en propre à Dassa », dont l'unique appui est review.notes[2],
  pièce qui porte aussi la citation contestée. Segrestin ne reste cité que pour ce que les deux
  couches lui accordent : la formule est de Reynaud ; « un seul et même sujet ».
- **Auteur du chapeau p. 32 (« prééminence »)** (SUP-edc59f06598eb9b1 contre SUP-a9c446489975e275) :
  le mot « prééminence » et la phrase « les deux sont de Dassa » sont retirés du texte lecteur.
  Seul « prédominance », p. 41, est employé.
- Les deux points sont consignés dans `limits[1]`.

## Défauts de l'audit traités

1. lead[0], vignette inventée (milliers / trente salariés, « vingt ans », « rien de tout cela
   n'existe », « presque tout le monde ») : remplacée par la prémisse sourcée.
2. S1.P2 « conséquence tranquille… s'efface » : retirée.
3. S1.P3 « produit des textes, occupe des gens à plein temps » : retiré ; remplacé par la matière p. 33.
4. S2.P1 « en retient une très simple : la durée » : les deux mesures (participation, durée) sont dites.
5. S3.P1 « avant tout le reste » (C030 du gate) : devient « Dès la page 34 », forme indiquée par le gate.
6. C011 du gate (« première page ») : remplacé par « en note de la page 32 » (SUP-813addb0085d0839,
   SUP-9ebf6d673e191fc1), plus aucune affirmation sur le rang de la page.
7. « atelier sans institutions », « là où elle n'existe guère » : retirés partout.
8. Écart moyen lu comme prix nécessaire (« tenir cinq jours de plus », « il en faut cinq jours de
   plus ») : retiré.
9. S4.P2 « d'autant plus étroitement qu'il est mieux installé » : retiré.
10. S3.P3 « secteur privé », « arrêts ordinaires » : retirés ; exclusions réduites à une phrase.
11. Ordre : le champ (entreprises ayant connu une grève, exclusions, classes de taille) passe
    avant le résultat ; S3.P2 « combativité » a désormais un antécédent (énoncés p. 43).
12. Redondance S2.P2 / S2.P3 / S4.P3 : S2.P3 (« dans les deux sens ») supprimé ; S4.P3 réduit
    à la seule lecture du seuil, signalée comme lecture.
13. Fin : la question d'attribution est remplacée par la distinction p. 44, citée sans être expliquée,
    suivie d'une question.

Prescriptions non suivies : la prémisse Durand n'est pas déplacée dans le lead sous forme
citée ; le lead porte son contenu comparatif (pratiques contractuelles plus développées dans
les grandes), et la citation complète reste en S4 où elle sert à dire l'anomalie de fréquence,
distincte de l'anomalie d'issue. La phrase « handicap » (p. 39) n'est pas employée.

## Trajectoire et delta par paragraphe

- lead[0] : l'intuition à réfuter, posée sur un fait comparatif sourcé et sur le « on pensait » de l'auteur.
- lead[1] : qui, quand, sur quel matériau, avec quelle question ; annonce du sens contraire.
- S1 « Deux formules en miroir »
  - P1 : les deux formules symétriques, attribution de la première (Adam et Reynaud 1978, p. 127 ;
    Segrestin), la seconde. Justifie désormais le titre.
  - P2 : ce que soutient la première ; le corrélat qui rend la querelle testable (explication des résultats).
  - P3 : la thèse p. 33, son contenu (résultats fonction du rapport des forces ; le conflit génère
    la négociation) et sa clause descriptive, non normative (anti-contresens).
- S2 « Des entreprises qui ont toutes connu une grève »
  - P1 : le champ (p. 34) et les exclusions.
  - P2 : les trois classes de taille et pourquoi la taille (note 2 p. 34) : la grande entreprise
    comme cas qui décide.
  - P3 : les deux mesures, ce que mesure l'écart de durée, et le test réfutable p. 41.
- S3 « Un jour d'un côté, cinq de l'autre »
  - P1 : le chiffre (p. 40), le commentaire, la quasi-indépendance (p. 41), l'issue du test.
  - P2 : les trois énoncés p. 43 et la citation de la carte.
  - P3 : la précaution 3 % / 30 % sur ce que vaut la combativité des petites.
- S4 « Ce que l'appareil de négociation ne remplace pas »
  - P1 : l'anomalie de fréquence (Durand) + l'anomalie d'issue ; ce qui est réfuté au juste (substitution, p. 44).
  - P2 : la lecture « seuil de pression relevé », marquée comme lecture.
  - P3 : les deux réserves de l'auteur (note 1 et 2 p. 36) et leur portée sur le résultat.
- S5 « Le nom de la thèse »
  - P1 : la formule p. 41, l'incise qui situe la démonstration, la phrase générale qui suit.
  - P2 : la distinction p. 44, citée, ouverte en question.

Aucun paragraphe n'a le même delta que son voisin ; aucune section ne reprend principalement
une section antérieure (le résultat chiffré n'est dit qu'une fois, en S3).

## Ajouts et supports qui les financent

- lead[0] « pratiques contractuelles plus développées… appareil de négociation le mieux
  installé » : SUP-d43fc9ab6fb9f513, SUP-41012dca6a97020d, SUP-f16e01d11d2a6474 ;
  « Dassa la rapporte à ce qu'« on pensait » » : SUP-f124549dd85e3c58, SUP-d43fc9ab6fb9f513.
- lead[1] « dans un article de 1983 » : SUP-dae0ffc0f7fc581c ; matériau déjà traité dans ses
  travaux antérieurs : SUP-2d27288511f2293d, SUP-0e65d8de4e37ac7e ; « à rebours de l'attente » :
  SUP-41012dca6a97020d.
- S1.P1 deux formules symétriques et la seconde formule : SUP-41012dca6a97020d ; renvoi note 2
  p. 32 : SUP-813addb0085d0839, SUP-9ebf6d673e191fc1 ; inversion de Clausewitz, confirmation
  Segrestin : SUP-a88bce97a26e6edd, SUP-4c884765058ef85d.
- S1.P2 corrélat, « appareil de traitement des conflits », « rapport des forces établi par les
  protagonistes » : SUP-41012dca6a97020d.
- S1.P3 résultats fonction du rapport des forces ; grève avant syndicat ; « norme / description » ;
  formule « en termes idéologiques et moraux… » : SUP-41012dca6a97020d ; citation p. 33 :
  SUP-8ebed46f41638cc4.
- S2.P1 « Dès la page 34 » et exclusions : SUP-cf86e23d9719e1c0, SUP-16ba211a5720bca6.
- S2.P2 trois classes de taille ; note 2 p. 34 sur la dimension ; grande entreprise comme cas
  crucial : SUP-41012dca6a97020d.
- S2.P3 participation et durée ; écart de durée comme mesure de la sensibilité ; test p. 41 :
  SUP-41012dca6a97020d.
- S3.P1 issue du test (« tendances en sens inverse ») : SUP-41012dca6a97020d ; le reste repris.
- S3.P2 trois énoncés p. 43 : SUP-41012dca6a97020d, SUP-079a7df5bab7b8dd (p. 43 relue sur
  image) ; citation : SUP-06462ecbd910ff69, SUP-c2b3e29ec2068525.
- S4.P3 réserves p. 36 (remontées de `limits` vers le texte lecteur) : SUP-1f7e4d8dbe956dc0,
  SUP-da8da851198830bd (dont « pourrait en partie tenir à l'instrument »).
- S5.P1 phrase générale qui suit (« c'est le conflit et sa durée… ») : SUP-41012dca6a97020d.
- S5.P2 distinction p. 44 : SUP-41012dca6a97020d (désignation seulement : citée, non expliquée).

Les passages tirés de `lecture.json` (transcrit sans accents) sont rapportés au style indirect,
sans guillemets, pour ne pas fabriquer une graphie ; seul « forme exacerbée » a été écarté.
Les citations entre guillemets viennent toutes de `quotation`, `notes` ou `review.notes` ;
`corpus:deepen --check` ne signale aucune citation absente.

## Points de vigilance pour le fact-check

- S1.P3 : « écrit-il en conclusion » rattache la formule « en termes idéologiques et moraux » à la
  conclusion sans numéro de page (la lecture la place après les énoncés de la p. 43, sans
  paginer) ; aucune page n'est donnée.
- S2.P2 : « devient ainsi le cas qui décide » reformule « cas crucial » de SUP-41012dca6a97020d,
  qui est une formulation du lecteur primaire, pas une citation de Dassa.
- S4.P3 : « l'écart d'échec… pourrait donc en partie tenir à l'instrument » reprend la conclusion de
  SUP-da8da851198830bd.
- S5.P1 : « La phrase suivante » : la lecture cite les deux phrases de la p. 41 à la suite.

## Limits

Réécrit en quatre entrées (≈ 220 mots) : Adam et Reynaud non ouvert et distinction p. 44
désignation seulement ; les deux contradictions non tranchées ; pages OCR seulement et tableaux
non rendus, style indirect pour la lecture sans accents ; réception non établie. Aucun contenu
de `limits` n'est exposé comme bloc lecteur ; les réserves p. 36 ont été intégrées au texte comme
nuance utile au lecteur (audit, axe G), sans titre de type « ce que les sources ne permettent pas ».

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=predominance-du-conflit-sur-la-negociation` :
« 1 approfondissement(s) contrôlé(s), 1531 mots. Rien projeté. » — PASS.

Le SHA a changé : l'orchestrateur doit recommencer à `PREPARE`. Aucune validation, aucun verdict
de fact-check n'est déclaré ici.
