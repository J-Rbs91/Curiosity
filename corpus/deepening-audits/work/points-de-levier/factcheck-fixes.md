# Correction factuelle : points-de-levier

mode : FACTCHECK_FIX (boucle 1 sur 2)

gate lu : `corpus/deepening-audits/work/points-de-levier/factcheck-gate.json`
(`FACTCHECK_FAIL`, 49 claims, 35 soutenus, 14 en échec, aucune erreur structurelle,
SHA contrôlé `41f83ebb…de067c`)

bundle lu : `corpus/deepening-audits/work/points-de-levier/verification-bundle.json`
(pour savoir, claim par claim, quels appuis avaient été résolus)

## Matière autorisée

`corpus/evidence/points-de-levier/` n'existe pas (vérifié par listage). La seule matière est
`corpus/validated/points-de-levier.json` : `summary`, `attribution_note`, `quotation`
(`text`, `original_text`, `locator` p. 2), `notes[0..4]`, `review`, `sources`. Aucune recherche,
aucun apport de connaissance générale. Les cinq gestes autorisés seulement.

## Les 14 gestes

### Le groupe des sept `TOO_STRONG` : une même espèce d'ajout

Chacun ajoutait au-dessus de l'appui une quantité que l'appui ne porte pas : une comparaison
causale, une relation de dose, une symétrie, une antériorité, un effet nul. Le geste est le même
partout : retirer l'excédent, garder ce que l'appui porte, ne rien mettre à la place.

**C001 — `NARROW`.** « On peut changer un montant, un délai, une règle, ou la raison même pour
laquelle l'ensemble existe. » « une règle » a été retiré. `summary` donne le paramètre et le
paradigme, `notes[4]` donne le délai (la vanne) ; aucun appui ne nomme une règle comme endroit
où intervenir, et les dix barreaux intermédiaires ne sont nommés nulle part (`limits[1]`).
L'énumération se borne aux trois termes appuyés.

**C004 — `NARROW`.** « un effort égal ne produit pas un effet égal, et la différence tient à
l'endroit choisi bien plus qu'à la force employée » devient « la différence tient à l'endroit
choisi ». Deux excédents partent ensemble : la comparaison causale endroit/force, que rien n'appuie,
et le registre de l'effort, absent lui aussi des appuis. Ce qui reste est exactement ce que
`notes[3]` et `summary` portent : douze endroits rangés par efficacité, donc un effet qui dépend
de l'endroit.

**C020 — `REMOVE`.** « on n’appuie pas plus fort, on appuie plus tôt, et c’est de là que vient la
différence de portée » a été supprimé. L’opposition force/antériorité et l’explication causale de
la différence de portée sont l’intégralité du claim : borné, il ne reste rien. `notes[3]` ne porte
qu’un classement d’efficacité, et ce classement est déjà dit ailleurs par les claims soutenus
C008 et C009.

Conséquence mécanique, dans le même paragraphe : la phrase d’ouverture non mappée « On peut
comprendre cet ordre par la position de chaque geste plutôt que par sa force » portait la même
opposition position/force que C020, sans plus d’appui, et n’avait plus d’illustration une fois
C019 et C020 retirés. Elle est devenue « L’ordre se comprend mieux si l’on regarde où chaque geste
se place », qui invite à une lecture sans opposer la position à la force ni expliquer la portée.

**C028 — `NARROW`.** « La première est de se tromper d'endroit et d'appuyer là où rien ne bouge »
devient « La première est de se tromper d'endroit ». L'effet nul absolu (« là où rien ne bouge »)
est retiré : `quotation.original_text` n'établit pas qu'un levier faible ne produise rien. Le
second mode d'échec, que la citation soutient, n'est pas touché.

**C029 — `REMOVE`.** « Si l'on suit l'échelle, la seconde est la plus coûteuse des deux, puisque
plus le levier est puissant, plus une erreur de direction porte loin. » Supprimé en entier. La
phrase est faite de deux choses non appuyées et rien d'autre : une symétrie supposée entre
puissance du levier et portée de l'erreur, et une hiérarchie de coût entre les deux échecs.
Aucun résidu à garder.

**C033 — `NARROW`.** « actionner un levier puissant à l'envers la dégrade, et d'autant plus vite
qu'on s'y emploie sérieusement » : la relation de dose finale est retirée. Ce qui reste est
l'aggravation que porte « systematically worsening whatever problems we are trying to solve »,
plus le classement de puissance de `notes[3]`.

**C039 — `NARROW`, et le piège de la dénégation.** « L'ordre des douze n'est pas un résultat
mesuré, c'est une proposition retravaillée… » devient « L'ordre des douze est une proposition
retravaillée par celle qui l'a écrite, et dont le brouillon reste lisible à côté. » La dénégation
portait sur la méthode de Meadows et n'avait aucun appui. Elle n'est pas remplacée par son
contraire, et rien n'est conclu de l'absence d'appui : elle disparaît simplement, et la phrase se
borne à ce que `notes[1]` établit (paperboard, neuf entrées p. 2, correction par l'autrice,
douze entrées p. 3).

### Le groupe des six `UNSUPPORTED` : aucun appui, donc retrait

**C002 — `REMOVE`.** « Ces gestes ne demandent ni le même effort ni la même autorité » : zéro
appui, et le claim n'est pas hypothétique. L'inégalité d'effort et d'autorité entre les gestes
sort du texte. La phrase enchaîne désormais directement sur la portée (C003, soutenu, conservé).

**C019 — `REMOVE`.** « Passer outre le paradigme, c'est toucher ce depuis quoi l'installation a
été conçue. » Le seul appui, `notes[1]`, porte le titre de l'entrée et sa pagination. Définir le
paradigme comme l'origine de conception de l'installation est une définition que rien ne fournit ;
elle n'est pas conservée sous marquage d'interprétation, parce qu'une interprétation reste une
affirmation sur le contenu du rapport et qu'aucun appui ne l'autorise. La glose du titre
(« le pouvoir de passer outre les cadres de pensée eux-mêmes », C014, soutenue) reste, elle, en
place dans la section précédente.

**C021 — `REMOVE`.** « Un réglage se décide, se mesure, se défait ; sortir d'un cadre de pensée
demande que d'autres en sortent aussi. » Ni la réversibilité et la mesurabilité d'un réglage, ni
la condition collective d'une sortie de cadre de pensée n'ont d'appui. Retiré.

**C022 — `REMOVE`.** « L'échelle classe donc aussi par coût politique ce qu'elle classait par
puissance. » Rien n'établit ce second ordre de classement. Retiré. Avec C021 et C022, la lecture
« par le coût » disparaît entièrement : la phrase d'annonce qui l'introduisait (« Le même
raisonnement, pris à l'envers, dit ce que chaque geste coûte ») partait avec elle, faute d'objet,
et le titre de la section (« Puissance d'un côté, coût de l'autre ») a été remplacé par
« Ce que régler un robinet ne change pas », qui nomme ce que la section porte encore. Un titre
n'est pas un claim ; le laisser annoncer un versant supprimé aurait été trompeur pour le lecteur.

**C040 — `REMOVE`.** « Agir sur un paramètre reste souvent la seule action disponible, et vaut
mieux que rien. » La fréquence (« souvent la seule ») et l'évaluation (« vaut mieux que rien »)
sont sans appui, et rien ne les remplace. Conséquence mécanique du retrait : la phrase suivante
(C041, soutenue) disait « ce geste » et perdait son antécédent. « ce geste » est devenu « un
réglage de paramètre », seul geste de raccrochage, à portée identique et toujours appuyée par
`summary` et `notes[1]`.

**C045 — `REMOVE`.** « Nommer le niveau auquel une discussion se tient permet de la déplacer sans
accuser personne de mauvaise volonté, ce qui est rarement possible autrement. » Efficacité forte,
sans appui, et rien ne la remplace. C044, qui porte le vocabulaire donné au débat, est soutenu et
reste.

### Le `SOURCE_NOT_CONSULTED`

**C049 — `NARROW` (réduction à ce que l'appui porte).** « ce que la liste y comptait, et dans
quels termes, se trouve dans ce numéro-là » est retiré. `notes[2]` déclare expressément que la
version parue dans Whole Earth à l'hiver 1997 n'a pas été ouverte : aucune phrase sur son contenu
n'est permise, pas même sous la forme d'un renvoi qui décrit ce qu'on y trouverait. Le texte
lecteur s'arrête donc sur l'existence et la date, que `notes[2]` établit (C048, soutenu, conservé
mot pour mot). C'est exactement la frontière que `limits[3]` avait déjà écrite, et que le texte
franchissait.

## Ce qui n'a pas été fait, volontairement

- Aucune affirmation nouvelle pour combler un retrait : pas de remplacement de même portée obtenu
  autrement.
- Aucune dénégation retournée en affirmation. L'absence d'appui sur la méthode de Meadows
  (C039) n'établit ni que l'ordre des douze est mesuré, ni qu'il ne l'est pas : la proposition
  entière sort.
- Aucun `SUP-…` mentionné dans le texte lecteur, aucun artefact de fact-check retouché à la main.
- Aucun des 35 claims soutenus déplacé ni reformulé, sauf C041, dont un seul groupe nominal a été
  changé parce que son antécédent venait d'être retiré (documenté ci-dessus). Deux fragments non
  mappés ont bougé, et seulement parce qu'un retrait les laissait sans objet : la phrase d'annonce
  du versant « coût » et l'ouverture du paragraphe de la section 2. Tout le reste du texte est
  intact, y compris les cinq passages entre guillemets.
- Aucun contenu de `limits` remonté vers le lecteur ; `limits` est inchangé. Il avait déjà nommé,
  avant cette passe, trois des frontières que les échecs ont franchies (les dix niveaux
  intermédiaires, la version Whole Earth, l'absence d'appui du côté de Forrester).
- Aucun ajout de volume pour compenser les retraits. Le texte lecteur est plus court ; c'est le
  résultat attendu quand la matière ne permettait pas ce qui était écrit.

## Volume

- texte lecteur avant : 1 102 mots (16 paragraphes, `lead` + `sections`)
- texte lecteur après : 889 mots (16 paragraphes, aucun paragraphe supprimé en entier)
- compteur du script (texte lecteur + `limits`) : 1 462 avant, 1 249 après
- `limits` inchangé (360 mots), et toujours invisible au lecteur

Les 213 mots retirés sont ceux qui n'étaient pas soutenus. Rien n'a été écrit pour reprendre la
place : le protocole interdit le gonflement, et la seule façon de rendre à ce texte les paliers
manquants est de constituer `corpus/evidence/points-de-levier/` avec le relevé de la page 3 du
rapport, ce qui est un geste de la couche carte, hors mandat d'une correction factuelle.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=points-de-levier`

```
1 approfondissement(s) contrôlé(s), 1249 mots. Rien projeté.
```

PASS, aucun avertissement. Les cinq passages entre guillemets de cinq mots ou plus sont inchangés
et se retrouvent verbatim dans `quotation` et `notes`.

## Suite

Le texte a changé, donc le SHA a changé : le fact-check précédent est invalidé et le cycle doit
repartir à `PREPARE`. Aucune auto-validation ici, ni `FACTCHECK_PASS`, ni `ACCEPT`.
