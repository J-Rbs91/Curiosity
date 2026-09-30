concept : activite-empechee
mode    : FACTCHECK_FIX (boucle de correction n° 1 sur 2)
date    : 2026-09-30
gate appliqué : corpus/deepening-audits/work/activite-empechee/factcheck-gate.json
                (FACTCHECK_FAIL, 63 claims, 57 soutenus, 6 refusés)
SHA de la version refusée : fb234eae55110b076c61c45a92b805317aeddf7707a10497bd58dbd98f6681ac

## Matière relue avant de toucher au texte

- `factcheck-gate.json` : motif exact des six refus, autorité sur l'échec.
- `verification.json` : verdicts claim par claim, y compris les voisins qui servent de mesure
  (`C018` SUPPORTED, `C035` SUPPORTED, `C038` SUPPORTED).
- `verification-bundle.json` : `claim_text` exact et appuis résolus des six claims refusés.
- `corpus/deepenings/activite-empechee.json` (version refusée), `corpus/validated/activite-empechee.json`
  (champ `dossier` : **absent**, donc répertoire conventionnel seul),
  `corpus/evidence/activite-empechee/` listé : **un seul fichier**, `lecture.json`, relu en entier.
- `PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md` ; `scripts/corpus/lib/deepenings.mjs`
  pour le périmètre du contrôle et les bornes de volume (1 000 / 2 100 mots, `limits` compris).
- `JOURNAL-ROUTINE.md`, entrée du chantier M, point 4.

Aucune recherche web. Aucun appui nouveau, aucun `SUP-...` inventé, aucun artefact de fact-check
modifié. Aucun fichier d'un autre conceptId ouvert (chantier O) ; mes seuls écrits sont ce fichier et
`corpus/deepenings/activite-empechee.json`.

## Les six gestes

### C013 — NARROW (localisation corrigée, non supprimée)

`sections[0].paragraphs[1]`.

- avant : « Cette phrase ne commence pas le texte de 2004 où elle se lit, elle le termine : elle
  conclut une démonstration menée sur deux terrains, … »
- après : « Cette phrase ne commence pas le texte de 2004 où elle se lit : elle arrive tout à la
  fin, dernière phrase de sa section, et conclut une démonstration menée sur deux terrains, … »

Les appuis portent une localisation plus juste, et c'est elle qui est écrite : `$.quotation.locator`
du dossier dit « c'est la dernière phrase de la page, et la dernière phrase de la section », et
`$.definition_de_lauteur` dit « la notion arrive tout à la fin ». « Elle le termine » est retiré,
ce que le gate reprochait : le § 30 que le texte lecteur cite lui-même (`C018`, SUPPORTED) vient
après elle, et `review.notes[1]` la situe p. 31 imprimée d'un article paginé p. 23-33. La suite du
paragraphe (« un déplacement annoncé quelques lignes plus haut ») reste exacte sous la nouvelle
localisation et n'a pas été touchée.

### C029 — NARROW (l'alternative exclusive tombe, la moitié portée reste)

`sections[2].paragraphs[0]`.

- avant : « La réponse de l'auteur ne porte pas sur les circonstances du travail mais sur ce qui se
  passe dans l'instant où l'on agit »
- après : « La réponse de l'auteur tient à ce qui se passe dans l'instant où l'on agit »

Les appuis ajoutent le conflit interne aux circonstances, ils ne les excluent pas (« l'empêchement
n'est pas seulement extérieur » ; « des dépendances de la situation concrète … à moins d'en être
empêchée »). La clause d'exclusion est donc retirée et seule la moitié portée subsiste. Le geste
choisi est la suppression de l'exclusion plutôt que sa conversion en « pas seulement … aussi »,
parce que S3.P2 porte déjà cette formulation-là mot pour mot (« L'empêchement n'est donc pas
seulement extérieur … il se joue aussi entre des manières de faire »), jugée `SUPPORTED` en `C035` :
la reprendre en tête de S3.P1 aurait fait de deux paragraphes consécutifs le même travail.

### C045 — NARROW / REATTRIBUTE (retour au couple réel / réalisé)

`sections[3].paragraphs[2]`.

- avant : « On ne garde pas de sa journée la seule part réussie en laissant l'autre à la porte ; les
  deux entrent ensemble. »
- après : « On ne garde pas de sa journée ce qui s'est fait en laissant le reste à la porte ; les
  deux entrent ensemble. »

L'appui interdit de trier « entre le réel et le réalisé », et c'est ce couple qui est rendu : « ce
qui s'est fait » et « le reste » sont exactement les deux termes que S1.P1 a posés pour nommer le
réalisé et le réel (« Le reste, tout ce qui a été mobilisé sans laisser de trace équivalente, il
l'appelle le réel de l'activité »). La qualification évaluative « part réussie », que le texte
lecteur venait lui-même d'écarter en S4.P1 (`C038`), disparaît. Le mot « réussi » ne figure plus
nulle part dans le texte lecteur.

### C061 — NARROW (impossibilité de conclure, non différence nécessaire) ; seconde moitié conservée

`sections[5].paragraphs[1]`.

- avant : « Deux personnes qui obtiennent le même résultat n'ont donc pas traversé le même travail »
- après : « Deux personnes qui obtiennent le même résultat n'ont donc pas forcément traversé le même
  travail »

« pas forcément » rend exactement ce que l'appui autorise : « Elle ne limite donc pas les
possibilités du professionnel observé à ce qu'on lui voit faire ». La seconde moitié, que le gate
déclare portée, est conservée au mot : « et un regard qui ne retient que le résultat les tiendra
pour équivalentes ».

### C062 — NARROW (caractérisation retirée, agent retiré)

`sections[5].paragraphs[1]`.

- avant : « la notion est couramment confondue avec une autre approche de la souffrance au travail,
  la psychodynamique du travail, dont l'auteur revendique de se distinguer. »
- après : « la notion est couramment confondue avec la psychodynamique du travail. Une différence
  entre les deux est revendiquée ; »

Deux excédents retirés, et rien d'ajouté. La caractérisation « une autre approche de la souffrance
au travail » disparaît : `reserves[7]` ne porte que le libellé « se confond souvent avec la
psychodynamique du travail de Christophe Dejours ». L'agent disparaît aussi : la revendication est
rendue au passif sans sujet, ce qui est la forme exacte de l'appui, « seulement signaler qu'elle
existe et qu'elle est revendiquée ». Le mot « souffrance » ne figure plus dans le texte lecteur, et
Christophe Dejours n'y est pas nommé.

### C063 — REMOVE (le renvoi de lecture disparaît, remplacé par l'aveu de non-établissement)

`sections[5].paragraphs[1]`.

- avant : « Ce en quoi elle consiste se lira dans les textes de part et d'autre. »
- après : « les sources disponibles ne permettent pas de dire laquelle. »

C'est le `CONFLICT`, et le geste est net : le renvoi à une lecture « de part et d'autre » est retiré,
parce que les trois appuis énoncent l'inverse de ce qu'il présuppose — aucun texte de Dejours ouvert,
Le Travail Humain et Travailler en HTTP 403 sur Cairn, « cette perte est structurelle pour ce domaine
… elle n'est pas levée ici », « la différence revendiquée avec la psychodynamique du travail n'est
pas documentée ici ». Ce qui le remplace n'est pas une affirmation nouvelle, c'est le non-établissement
lui-même, dans la forme que `PROTOCOLE.md` §1 autorise (« Ce point n'est pas établi par les sources
actuellement disponibles »), et déjà employée en S5 sans reproche du gate.

C062 et C063 se tiennent : le texte final dit qu'une frontière existe, qu'une différence y est
revendiquée, et que ce en quoi elle consiste n'est pas établi. Il ne dit plus ce qu'elle sépare, ni
qui la revendique, ni où aller la lire. C'est exactement ce que `limits` interdisait déjà et que le
texte avait franchi.

## Règle 6 — titres et `lead` relus après retrait (chantier M, point 4)

Les six gestes retirent de quatre paragraphes : une localisation (« elle le termine »), une exclusion
(« ne porte pas sur les circonstances »), une évaluation (« part réussie »), une nécessité (« n'ont
donc pas traversé »), une caractérisation (« une autre approche de la souffrance au travail »), un
agent (« dont l'auteur revendique ») et un renvoi de lecture. Chaque titre concerné a été relu contre
son paragraphe corrigé, et le `lead` contre l'ensemble.

| position | verdict | motif |
|---|---|---|
| `sections[0].title` « La surface et le volume » | conservé | ne porte aucune localisation ; appuyé sur `quotation.text` |
| `sections[2].title` « Pourquoi ce qui n'a pas eu lieu pèse encore » | conservé | n'exclut pas les circonstances ; porté par « résidus incontrôlés n'ayant que plus de force » et par la glose du dossier, « une activité qui continue d'agir sur celui qui ne l'a pas faite » |
| `sections[3].title` « Une affaire de santé, pas de performance » | conservé | « pas de performance » est le mot du dossier (« l'empêchement est chez lui un problème de santé et non de performance ») ; le titre ne reprend aucune qualification évaluative du genre réussi / raté, seule chose que C045 retirait |
| `sections[5].title` « Le réel de l'activité n'est pas l'activité réelle » | conservé | porte sur le couple de vocabulaire, pas sur la frontière retirée ; il ne caractérise pas la psychodynamique du travail et n'énonce aucune différence nécessaire entre deux travailleurs |
| `sections[1].title`, `sections[4].title` | conservés | aucun des six claims ne les ancre |
| `lead[0]`, `lead[1]` | conservés au mot | contrôle fait terme par terme : le `lead` ne localise pas la citation dans son texte, n'oppose pas l'intérieur aux circonstances, ne qualifie rien de réussi, ne compare pas deux personnes, et ne nomme ni la psychodynamique du travail ni la souffrance au travail. Aucun excédent en position d'annonce ne correspond à un terme retiré. |

Contrôle positif du même point, fait sur la chaîne complète du texte lecteur, titres compris :
« souffrance », « Dejours », « réussi », « termine », « circonstances » et « part et d'autre » n'y
apparaissent plus ; « psychodynamique » n'y apparaît qu'une fois, sans caractérisation, et
« revendiquée » qu'une fois, au passif sans agent.

## `limits` — frontière interne resserrée, non remontée

Un seul ajout, dans `limits[3]`, et il n'est destiné qu'aux agents : la différence avec la
psychodynamique du travail « se signale, ne se caractérise pas, et ne s'attribue à aucun auteur
nommé ; ne renvoyer non plus à aucune lecture "de part et d'autre", Cairn étant en HTTP 403. » Les
deux interdits que cette boucle a payés sont ainsi nommés là où ils empêcheront la récidive : l'agent
de la revendication, et le renvoi de lecture. `limits` passe de 344 à 370 mots.

Contrôle inverse : aucun contenu de `limits` n'est remonté comme bloc visible. La seule phrase du
texte lecteur qui touche cette frontière est intégrée au raisonnement de S6 et rédigée du côté du
lecteur, sans conditionnel ni aveu de recherche. Aucun titre de rubrique du genre « Ce que les
sources ne permettent pas d'établir ».

## Périmètre de la correction

Quatre paragraphes touchés sur quinze : `sections[0].paragraphs[1]`, `sections[2].paragraphs[0]`,
`sections[3].paragraphs[2]`, `sections[5].paragraphs[1]`. Aucune section ajoutée, supprimée ou
déplacée ; aucun titre réécrit ; aucun ordre modifié ; le `lead` intact au mot. Les 57 claims soutenus
sont inchangés, à l'exception des deux phrases de `sections[5].paragraphs[1]` dont C061 occupe la
première moitié — sa seconde moitié, portée, est recopiée telle quelle.

Aucune affirmation nouvelle n'a été introduite pour remplacer une affirmation retirée. Les cinq
catégories employées sont NARROW (C013, C029, C045, C061, C062), REATTRIBUTE au couple réellement
porté (C045) et REMOVE (C063).

## Deltas des quatre paragraphes corrigés

| paragraphe | delta après correction |
|---|---|
| S1.P2 | d'où vient la phrase et ce qui la commande : elle clôt une section et une démonstration, et l'objet visé n'est pas l'activité mais son développement possible ou impossible |
| S3.P1 | le mécanisme, rapporté à Vygotski : une seule activité l'emporte au point de collision, les autres forment des résidus incontrôlés qui gagnent en force |
| S4.P3 | celui qui travaille ne peut pas trier entre ce qui s'est fait et le reste |
| S6.P2 | ce que la distinction change pour une observation, et une frontière qui reste ouverte |

Aucun paragraphe n'a perdu son delta au passage. S3.P1 et S3.P2 ne se recouvrent pas : le premier
expose le mécanisme, le second en tire que l'empêchement n'est pas seulement extérieur.

## Contrôle mécanique

    npm run corpus:deepen -- --check --only=activite-empechee
    1 approfondissement(s) contrôlé(s), 1932 mots. Rien projeté.

PASS, sans avertissement de citation : toutes les citations de cinq mots ou plus restent verbatim
dans `corpus/validated/activite-empechee.json` ou `corpus/evidence/activite-empechee/lecture.json`.
Aucune citation n'a été touchée par les six gestes.

## Compte de mots

| | avant (version refusée) | après |
|---|---|---|
| lead | 208 | 208 |
| sections | 1 363 | 1 354 |
| **texte lecteur** | **1 571** | **1 562** |
| `limits` (interne) | 344 | 370 |
| total compté par le script | 1 915 | 1 932 |

Le texte lecteur perd 9 mots, `limits` en gagne 26. Le total reste sous la borne dure de 2 100.

## Suite attendue

La modification du fichier invalide le SHA `fb234eae…` : le cycle doit reprendre à `PREPARE`, avec un
nouveau pack et un nouveau mapping. Les quatre paragraphes corrigés changent les offsets de tous les
claims qui les habitent.

Ce compte rendu ne vaut ni `ACCEPT` ni `FACTCHECK_PASS`.

## Points d'attention pour le prochain mapping

1. `sections[5].paragraphs[1]` porte désormais deux phrases là où il y en avait trois. La phrase
   « Une différence entre les deux est revendiquée » doit être mappée sur `$.reserves[7]` du dossier
   **et** sur `$.notes[5]` de l'enregistrement : c'est le passif sans agent qui la rend exacte, et un
   claim découpé sur « est revendiquée » seul perdrait cette propriété.
2. « les sources disponibles ne permettent pas de dire laquelle » est un énoncé de non-établissement,
   pas une assertion sur le monde : ses appuis sont `reserves[6]`, `reserves[7]` et `notes[5]`, les
   trois mêmes qui faisaient `CONFLICT` sur l'ancienne phrase et qui autorisent celle-ci.
3. « dernière phrase de sa section » se mappe sur `$.quotation.locator` du dossier, seul appui qui
   porte la granularité « section » ; `review.notes[1]` ne porte que la pagination.
4. S3.P2 conserve la formulation « pas seulement … aussi » que `C035` a validée. Si un mapping futur
   la juge redondante avec S3.P1, c'est S3.P1 qu'il faut regarder : il ne porte plus d'exclusion.
