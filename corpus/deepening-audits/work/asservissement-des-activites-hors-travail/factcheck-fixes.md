# Correction après FACTCHECK_FAIL

Concept : `asservissement-des-activites-hors-travail`
Boucle : 1 sur 2
Gate corrigé : `factcheck-gate.json`, verdict `FACTCHECK_FAIL`, 79 claims, 51 `SUPPORTED`,
28 en échec (18 `TOO_STRONG`, 8 `UNSUPPORTED`, 2 `SOURCE_NOT_CONSULTED`).

Aucune source nouvelle n'a été ouverte. Aucun `support_id` n'a été écrit ni inventé. `limits`
est inchangé. Le SHA du texte a changé : l'ancien pack et l'ancienne vérification sont périmés,
la reprise se fait à `PREPARE`.

## Diagnostic accepté

Les échecs sont massés en C044-C057, c'est-à-dire dans la section que l'audit pédagogique
demandait de déplier en trois paliers. Les supports disponibles (review.notes[5], notes[5])
**désignent** les notions du second versant de l'article, pages 451 à 453, sans les définir ni
les citer. Le dépliage fournissait donc le mécanisme lui-même : le coût et son lieu de
prélèvement, la durée de tenue des marges, la quantité de contraintes encaissée, la réserve qui
se consomme, l'effet variable d'une même contrainte, le pouvoir explicatif du modèle, les deux
erreurs d'attribution causale.

Cela ne se répare pas par une formulation plus prudente : ce qui manque est la preuve, pas la
modalisation. La section a donc été ramenée à la désignation que les supports portent
réellement, et elle est devenue nettement plus mince (319 mots, puis 128). Aucune affirmation
nouvelle n'a été introduite pour compenser un retrait.

Même règle appliquée à la famille des absolus et des négations : le silence d'un support
n'autorise aucune proposition d'absence. Tous les énoncés de cette forme ont été retirés ou
bornés à l'énoncé attesté.

## Opération par `claim_id`

### Section 0, « Les activités hors travail comme système »

| `claim_id` | Verdict | Opération | Ce qui a été fait |
|---|---|---|---|
| C006 | `UNSUPPORTED` | `MARK_AS_INTERPRETATION` | La définition générale de ce qu'est un système, posée comme un fait, disparaît. Ce qui reste est donné pour une lecture de la phrase attestée : « On peut entendre cette annonce comme une consigne de regard : … ». Le statut épistémique est visible dans la phrase elle-même. |
| C009 | `TOO_STRONG` | `REMOVE` | « elle interdit de conclure quoi que ce soit d'une activité regardée seule » supprimé. Aucune interdiction méthodologique n'est attestée, et l'absolu encore moins. |
| C010 | `TOO_STRONG` | `REMOVE` | « Constater qu'une personne dort moins, ou sort moins, ne dit encore rien de l'effet du travail sur elle » supprimé. Négation universelle sur ce qu'une observation isolée établit. |
| C011 | `TOO_STRONG` | `REMOVE` puis `NARROW` | « ne porte aucune information » supprimé. À la place, le paragraphe n'indique plus que l'objet d'attention que la lecture systémique propose (« on peut compter les heures … ou bien regarder la place que ce sommeil tenait »), sans rien affirmer de ce qu'un décompte établit ou non. |

Le paragraphe 1 de cette section a donc été entièrement réécrit : il ne porte plus de thèse
épistémique, il montre deux façons de regarder le même cas hypothétique déjà posé dans
l'ouverture.

### Section 1, « Ce que « perturbation » veut dire ici »

| `claim_id` | Verdict | Opération | Ce qui a été fait |
|---|---|---|---|
| C017 | `TOO_STRONG` | `NARROW` | « ce ne sont pas les activités qui disparaissent, ce sont leurs conditions d'exécution qui changent » devient « c'est là le point d'application de la perturbation : les conditions d'exécution des activités hors travail ». La proposition négative tombe ; ne reste que ce que la phrase de la page 451 dit modifié. |
| C019 | `UNSUPPORTED` | `REMOVE` | « les deux versants n'empêchent pas les mêmes choses » supprimé. Les supports attestent la double nature de l'altération, pas une différence de contenu limitatif entre les deux versants. |
| C020 | `UNSUPPORTED` | `REMOVE` | La liste prêtée au versant corporel (rester debout, porter, veiller) supprimée. |
| C021 | `UNSUPPORTED` | `REMOVE` | La liste prêtée à la disponibilité mentale (suivre une conversation, trancher, absorber un imprévu) supprimée. |

La double nature de l'altération (C018, `SUPPORTED`) est conservée, replacée dans le paragraphe
de la médiation et laissée sans contenu ajouté. Le détour par l'état de la personne (C022,
`SUPPORTED`) est conservé et rattaché à l'exemple hypothétique du repas, inchangé.

### Section 2, désormais « Ce qu'il reprend aux autres, ce qu'il écarte »

| `claim_id` | Verdict | Opération | Ce qui a été fait |
|---|---|---|---|
| C035 | `TOO_STRONG` | `REMOVE` | « elle affirme qu'il se passe quelque chose après le travail, elle ne dit ni quoi ni par quel chemin » supprimé. Le paragraphe s'arrête sur le jugement attesté : « Il la juge trop peu spécifiée. » |
| C036 | `TOO_STRONG` | `NARROW` | « une façon répandue de combler ce vide » devient « Ce qu'il écarte explicitement, en revanche, c'est une autre conception ». Le caractère répandu et la fonction de comblement, tous deux non attestés, disparaissent ; l'écart explicite, lui, l'est. |
| C039 | `TOO_STRONG` | `REMOVE` | Le motif prêté à Gadbois (le travailleur-empreinte, la disparition des arbitrages) supprimé en entier. Le jugement cité, « analyse tronquée », reste sans commentaire causal. |
| C041 | `TOO_STRONG` | `REMOVE` | « elle rend à la personne les décisions que cette conception lui retire » supprimé. Aucun support n'attribue de « décisions » ni à la thèse ni à la conception écartée. |

Le titre a changé parce que l'ancien (« Ce que l'idée d'un simple prolongement laisse échapper »)
annonçait une explication du « tronqué » que le texte n'a plus le droit de donner. Le nouveau
titre nomme le sujet de la section, à savoir les deux plans que Gadbois distingue.

### Section 3, désormais « Ce que l'ensemble fait de la perturbation »

C'est la section ramenée à la désignation. Les deux paragraphes conservés ne portent plus que
C042, C043 et C046, tous trois `SUPPORTED`, plus un exemple hypothétique du déplacement, que le
gate reconnaît explicitement comme suivant de la désignation (« elle a changé de place » suit de
la désignation du déplacement).

| `claim_id` | Verdict | Opération | Ce qui a été fait |
|---|---|---|---|
| C044 | `TOO_STRONG` | `REMOVE` | « Compenser, ici, n'est pas réparer » supprimé. La compensation est nommée, elle n'est plus caractérisée. |
| C045 | `TOO_STRONG` | `NARROW` | « Rien n'a disparu, et la contrainte n'a pas été absorbée : elle a changé de place » réduit à « la contrainte a changé de place », dans l'exemple hypothétique. Les deux absolus sont retirés. |
| C047 | `TOO_STRONG` | `NARROW` | Le mécanisme du coût (« prélevé ailleurs que là où la contrainte est née ») supprimé. Le coût n'apparaît plus que dans l'énumération des notions que Gadbois développe. |
| C048 | `TOO_STRONG` | `NARROW` | Le rôle fonctionnel et la borne temporelle des marges de tolérance supprimés. Les marges ne sont plus que nommées, avec leur localisation attestée, pages 451 à 453. |
| C049 | `TOO_STRONG` | `REMOVE` | Quantité encaissée avant de céder et consommation de la réserve : supprimés. |
| C050 | `TOO_STRONG` | `REMOVE` | Effet variable d'une même contrainte selon la réserve restante : supprimé. |
| C051 | `TOO_STRONG` | `REMOVE` | Le pouvoir explicatif prêté au modèle (charge longue, puis rupture sur une contrainte minuscule) supprimé, exemple inclus. |
| C052 | `UNSUPPORTED` | `REMOVE` | L'annonce des deux erreurs d'attribution causale supprimée. |
| C053 | `UNSUPPORTED` | `REMOVE` | La première erreur supprimée. |
| C054 | `TOO_STRONG` | `REMOVE` | L'activité qui cède comme ultime variable d'ajustement supprimée. |
| C055 | `UNSUPPORTED` | `REMOVE` | La seconde erreur supprimée. |
| C056 | `TOO_STRONG` | `REMOVE` | La réserve épuisée et ce qui fait céder l'arrangement supprimés. |
| C057 | `UNSUPPORTED` | `REMOVE` | La conclusion générale sur la cause apparente supprimée. |

Le troisième paragraphe de l'ancienne section, entièrement composé de C052 à C057, n'existe
plus. Ce que les supports permettent encore de dire au lecteur est : que l'article ne s'arrête
pas au constat de la perturbation, quelles quatre notions Gadbois développe ensuite et où, et
qu'il faudra aller lire ces pages pour savoir ce qu'il met sous chacune.

### Section 5, « Un constat ancien, un instrument neuf »

| `claim_id` | Verdict | Opération | Ce qui a été fait |
|---|---|---|---|
| C075 | `SOURCE_NOT_CONSULTED` | `REATTRIBUTE` | « où il analyse « des difficultés et des insuffisances » » devient un renvoi porté par l'article de 1980 : « En 1980, il renvoie à son propre article de 1975, … pour « des difficultés et des insuffisances que nous avons eu l'occasion d'analyser ailleurs » ». La phrase citée est bien celle de 1980, et plus rien n'est affirmé de ce que le texte de 1975 analyse. |
| C078 | `TOO_STRONG` | `REMOVE` | « L'article de 1980 n'examine pas ce sens-là » supprimé : l'absence d'examen ne s'infère pas du silence des supports. La direction que l'article annonce reste dite, au titre de ce qu'il examine (C064, `SUPPORTED`). |
| C079 | `SOURCE_NOT_CONSULTED` | `NARROW` | « Celui de 1975 en porte le nom, et c'est là qu'il faudra le lire » devient « Ces pages du Bulletin du C.E.R.P. attendent leur lecteur ». Le texte nomme ce que l'article porte comme référence, titre et lieu de publication attestés, et dit qu'il reste à lire, sans orienter le lecteur vers un contenu supposé. La limite se dit du côté du lecteur, `PROTOCOLE.md` §1. |

C076 (« qu'il ne reprend pas en 1980 »), pourtant `SUPPORTED`, est tombé avec la restructuration
de la phrase que C075 imposait. Aucune perte de compréhension : la généalogie que Gadbois se
donne reste nommée.

## Ce qui n'a pas été touché

Les 51 claims `SUPPORTED` sont conservés à l'identique, à deux exceptions rendues nécessaires
par les corrections voisines : C040 est conservé mot pour mot mais termine désormais son
paragraphe, et C076 disparaît avec la réécriture de C075. Le `lead` est inchangé. La section 4
est inchangée. `limits` est inchangé.

## Volume

| | Avant | Après |
|---|---|---|
| Texte lecteur (`lead` + `sections`) | 1 611 mots | 1 269 mots |
| Total compté par le contrôle (`limits` inclus) | 1 825 mots | 1 483 mots |

Retrait net de 342 mots de texte lecteur, dont 191 pour la seule section du second versant.

## Contrôle mécanique

```
npm run corpus:deepen -- --check --only=asservissement-des-activites-hors-travail
1 approfondissement(s) contrôlé(s), 1483 mots. Rien projeté.
```

Aucune erreur, aucun avertissement de citation.

Ce document ne vaut pas validation : le verdict factuel appartient au gate déterministe, après
un nouveau `PREPARE` sur le SHA courant.
