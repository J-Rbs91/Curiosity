# Réécriture : points-de-levier

mode : REWRITE (audit `corpus/deepening-audits/work/points-de-levier/audit.md`, verdict REWRITE)

check mécanique : `npm run corpus:deepen -- --check --only=points-de-levier` PASS (« 1 approfondissement(s)
contrôlé(s), 1733 mots », limits compris). Aucune citation signalée.

SHA de la nouvelle version : `b013ce9c929ab0ccabc589cfa0f96d3c617e361e91e985c7fbf6a11fe81dd683`.
L'ancien pack (`c0c7e157…`) est invalidé : l'orchestrateur doit recommencer à `PREPARE`.

## Matière lue

- `corpus/validated/points-de-levier.json` : pas de champ `dossier` ; répertoire conventionnel.
- `corpus/evidence/points-de-levier/` listé : un seul fichier, `lecture.json` (pas de `scouting.json`).
  Rapport 1999 `full-text`, Abson 2017 et Fischer & Riechers 2019 `metadata-only` ; 67 extraits
  verbatim ; six `reserves`, traitées comme des limites.
- `factcheck-pack.json` (SHA candidat = ancienne version, vérifié).
- Aucune recherche extérieure.

## Volume du texte lecteur (lead + sections)

Compteur local (mots = suites de lettres, apostrophes et traits d'union) :

| | avant | après |
|---|---|---|
| lead | 133 | 126 |
| sections | 955 | 1 270 |
| **total** | **1 088** | **1 396** |

(L'audit comptait l'ancienne version à 1 120 avec un autre compteur ; à ce compteur la nouvelle
version tombe vers 1 430-1 440, en haut de la cible 1 250-1 400 de l'audit.) Croissance nette
d'environ +28 % : elle vient **par substitution**. Environ 600 mots sans appui ont été retirés (S2
entière, S3.P4, S5 entière, phrases du lead[1], S1.P3/P4, S4.P2/P3) et remplacés par des paliers
dont chaque phrase est tirée d'un extrait verbatim. J'ai coupé trois fois pour descendre de 1 726 à
1 396 ; le risque de la croissance reste réel et il est signalé au gate (corrélation de l'audit).

## Retraits (non financés ou contredits par le rapport)

- lead[1] : « a passé sa vie à observer… » (biographie) ; « l'un des textes les plus repris du
  domaine » (barré par `SUP-84acdf041d07a3e5`).
- S1.P1 « chacun en connaît » (C007 du gate antérieur).
- S1.P3 : entrée fausse « le pouvoir de changer les règles » remplacée par le n° 4 réel
  (`SUP-a169d25e5e6fbc96`).
- S1.P4 : baignoire inversée (« on sent immédiatement… », « bouchon », « la règle décide »,
  « la raison pour laquelle on veut de l'eau »).
- S2 entière : « logique simple », « il ne menace personne » (contredit par `SUP-ef6279ab526086e2`,
  `SUP-64bcbfebed301d75`), « parce qu'ils sont accessibles ».
- S3.P4 : mécanisme inventé (boucle qui fait dans le temps l'inverse de l'instant).
- S3.P3 « que peu de textes de méthode reconnaissent ».
- S4.P1 « une phrase jetée » ; S4.P2 « vaut mieux que rien » (C036) ; S4.P3 « Meadows est claire
  sur le fait que sa liste ne le remplace pas » (barré par `SUP-1454538799f2a945`).
- S5 entière (quatre « tests » / usages du rédacteur, sans appui, dont une redondance avec S3.P2).
- limits[3] (Limits to Growth 1972) : aucun support dans le pack ; retiré.

## Nouvelle trajectoire et deltas, paragraphe par paragraphe, avec supports

**lead[0]** (conservé, resserré) : la question « où appuyer », gestes de portée inégale. « la raison
même pour laquelle l'ensemble existe » devient « le but que l'ensemble poursuit », « presque jamais
faut-il agir » est retiré. Supports : `SUP-ebb398acd46edf3d` (hook), `SUP-a169d25e5e6fbc96` (ordre
d'efficacité, buts), `SUP-5402cf481a060cd4` (résistance), `SUP-a63a2642d8b852de` (un seul acteur au
sommet).

**lead[1]** : définition de l'auteur (ajout), liste de douze, avertissement.
`SUP-7225770a44d11547`, `SUP-e7d18f493fc9bcee`, `SUP-7262836278f47a70`, `SUP-a169d25e5e6fbc96`,
`SUP-3a36c7316132dc8f`, `SUP-52c992afba49b58c`.

**S1 Une échelle qui se lit de bas en haut**
- P1 : sens de l'ordre et échelle exacte (n° 4 corrigé). `SUP-a169d25e5e6fbc96`,
  `SUP-8c80540dcb2e6c7c`.
- P2 (ajout) : la baignoire de Meadows : stock, flux, temps d'accumulation, deux boucles
  correctrices vers un but. `SUP-3ffaa707ee114434` (image de plomberie sur toute l'échelle),
  `SUP-0848de8c3867605b`, `SUP-5ea1e91179a4b4d4`, `SUP-45ba50b7769e8088`, `SUP-92bceffd56f1b8ed`.
- P3 (ajout) : la leçon, le but et les boucles ne se voient pas, d'où le contre-intuitif.
  `SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf` (« à la page suivante » : p. 4 puis p. 5).
  « Ce qui règle le niveau est donc justement ce qu'on ne voit pas » combine
  `SUP-92bceffd56f1b8ed` et `SUP-b3263903ec60b7fe`.

**S2 Le bas de l'échelle : les réglages** (ajout, remplace S1.P2 et S2 de l'ancienne version)
- P1 : définition du paramètre ; dette publique ; le trou se creuse quel que soit le parti.
  `SUP-55531336999abd7e`, `SUP-ef6279ab526086e2`, `SUP-3ffaa707ee114434`.
- P2 : « least leverage », 90-95-99 %, Titanic ; importance à court terme et pour qui est dans le
  flux, batailles féroces, mais comportement rarement changé ; relance / frein.
  `SUP-3ad405d655d49237`, `SUP-64bcbfebed301d75`, `SUP-1cb2a360fe47c52d`.
- P3 : exception des plages critiques, et leur rareté. `SUP-f9d8def49ae3267f`,
  `SUP-71b8abf2fc83138f`.

**S3 Un rang qui tient aussi à la difficulté de changer** (ajout)
- P1 : délais qui font dépasser, puis dépassement et effondrement ; haut placés s'ils étaient
  modifiables. `SUP-037181d89d0fbcbe`, `SUP-1c2091036ee7af6d`, `SUP-5bd5758b923ca76e`. La première
  phrase (« On pourrait croire… ») est une hypothèse de lecteur, non attribuée. J'ai **retiré** le lien
  « c'est pourquoi les taux de croissance figurent plus haut » (`SUP-2eaaf37eb57acab7`) : l'extrait ne
  montre pas à quoi renvoie son « That's why ».
- P2 : structure physique rarement levier, levier dans la conception. `SUP-00cbb4a2f594de25`.
  Tampons écartés pour le volume.
- P3 : information au sixième rang : compteur (rapporté, « the story goes »), nouvelle boucle,
  moins cher que l'infrastructure, au bon endroit (nappe). `SUP-a169d25e5e6fbc96`,
  `SUP-81014e24a6b284f3`, `SUP-3421b0f99f5dee77`, `SUP-c15fd96c15a922a1`, `SUP-97f584c40df141b1`,
  `SUP-7d34709858340251`. TRI non employé (même démonstration).

**S4 Le haut de l'échelle : règles, buts, paradigmes** (ajout)
- P1 : règles (portée, limites, degrés de liberté), « Power over the rules is real power », regarder
  qui a du pouvoir sur elles. `SUP-4716e963a1064909`, `SUP-3256fcc2ee6897d1`,
  `SUP-3a6f0b4b80bb8030`. Auto-organisation non développée (matière mince, enumérée en S1).
- P2 : but lu dans ce que fait le système ; changer les acteurs, faible sauf au sommet (renvoi au
  lead[0]). `SUP-a169d25e5e6fbc96` (rang), `SUP-885bf54038df7e06`, `SUP-a63a2642d8b852de`.
- P3 : paradigme, source de tout ; l'objection de Meadows et sa réponse ; résistance des sociétés.
  `SUP-39f012bbb6fd24cd`, `SUP-a6476543e39989ab`, `SUP-00df101d1f99a8f0`, `SUP-8f3721217a84eded`.

**S5 L'avertissement : à l'envers, et sans être cru** (conservé, ancienne S3 sans P4)
- P1 : citation et sa fin ; renvoi à la baignoire. `SUP-52c992afba49b58c`,
  `SUP-2c77089b1d953778`, `SUP-81e9a94544297295`, `SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf`.
- P2 : Forrester rapporté par Meadows (« à maintes reprises » = « Time after time », remplace
  « presque toujours »). `SUP-2f9d07ce780e7e37`, `SUP-ba7f2648749c378a`, `SUP-10af1c6c0695c906`.
- P3 : incrédulité. `SUP-da88ef4e1f868844`.

**S6 Une liste en chantier** (ancienne S4.P1 corrigée, plus ajouts)
- P1 : paperboard en réunion, neuf entrées, « not exactly tightly reasoned », révision, deux
  versions dans le texte, « work in progress ». `SUP-86bcdfa76c2fc546`, `SUP-10af1c6c0695c906`,
  `SUP-a07cb81899bc2053`, `SUP-a193a2898b0534b1`, `SUP-2d9cb5d014d223bd`, `SUP-ce493a26d6814629`.
- P2 : « tentative », « slithery », exceptions ; pas de formule. `SUP-01cbdf81a02ad20e`,
  `SUP-6e552c0e46adf9d7` (sans aller au-delà, réserve `SUP-1454538799f2a945`).
- P3 (ouverture) : transcender les paradigmes, arrêté à « aucun paradigme n'est « vrai » »
  (extrait tronqué, rien sur la suite) ; « There are no cheap tickets to mastery » à la dernière
  page (p. 19 = dernière page imprimée selon `sources_ouvertes[0].citation` de `lecture.json`,
  pagination 1 à 19). `SUP-0acb3a5eec8634ca`, `SUP-b202cb822f50ec5c`, plus l'appui
  `evidence:lecture.json $.sources_ouvertes[0].citation` du pack pour « dernière page ».

## Contrôles

1. Chaque paragraphe a un delta distinct (ci-dessus). Pas de conclusion récapitulative.
2. Redondances de l'audit supprimées (S2.P3/S1.P2, S5.P3/S3.P2). Le renvoi S5.P1 à la baignoire est
   une phrase, pas une reprise.
3. Aucune section ne répète une précédente.
4. Frontières : aucune phrase sur Abson / Fischer & Riechers, sur Whole Earth 1997, sur la réception,
   sur une méthode de repérage ; Forrester toujours rapporté ; 30 % rapporté comme histoire.
5. `limits` réécrit (quatre paragraphes, sources, accès et interdits nommés) ; rien n'en est remonté
   au texte lecteur.
6-7. Check PASS ; aucun tiret cadratin ; guillemets avec U+202F ; apostrophe typographique.

## Points à signaler au cycle suivant

- La croissance (+28 % au compteur local) dépasse la zone où l'audit observe des PASS ; elle est
  prescrite par l'audit (REWRITE, cible 1 250-1 400) et chaque phrase ajoutée nomme ses supports.
  Si le gate échoue, la coupe naturelle est S3.P2 et la dernière phrase de S4.P3.
- Glissements de traduction à surveiller : « boucles qui entraînent » (driving positive feedback
  loops), « leviers haut placés » (high leverage points, p. 14, référent « They » supposé être les
  règles d'après l'ordre des extraits), « elles y résistent » (resist challenges to their paradigm).
