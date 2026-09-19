concept : regulation-controle-autonome
mode    : FACTCHECK_FIX (boucle de correction n° 1 sur 2)

Gate lu : `factcheck-gate.json`, verdict `FACTCHECK_FAIL`, 61 claims, 59 SUPPORTED, 2 en échec
(C006 et C039, tous deux `TOO_STRONG`, aucune erreur structurelle). Motifs relus dans
`verification.json`, supports relus dans `factcheck-pack.json` (`claim-map.json` pour les
localisateurs). Aucune recherche web, aucune source nouvelle, aucun support ID inventé.

## C006 — `sections[0].paragraphs[0]`

Claim en échec : « Le mot ne désigne pas les règles elles-mêmes, mais le mécanisme qui les fait
exister et qui les fait tenir ».

Deux fautes distinctes, toutes deux logées dans les supports déjà résolus pour ce claim.

1. **Une lecture donnée comme la signification du mot.** `SUP-b1ef3f58129a24df`
   (`known_ambiguities[0]`) est explicite : « Le glissement de "règles" à "régulation" n'est jamais
   thématisé […] On peut lire le second couple comme désignant l'activité dont le premier désigne
   le produit — mais c'est une lecture, le texte ne l'énonce pas. » Le texte lecteur en faisait une
   définition d'auteur, au présent assertif.
2. **Le mot « mécanisme ».** `SUP-12fc89951f26a96c` (`translation_notes[0]`) écarte nommément ce
   sens : « "Régulation" chez Reynaud désigne l'activité de production de règles par un acteur, pas
   un mécanisme homéostatique ». Le claim réintroduisait le terme que la fiche interdit.

Correction appliquée — marquage comme interprétation + réalignement lexical sur le support :

> Il ne l'explicite nulle part, mais son usage se laisse lire ainsi : le mot ne vise pas les
> règles elles-mêmes, il vise l'activité qui les fait exister et qui les fait tenir. Autrement dit,
> qui les énonce, qui vérifie qu'elles sont suivies, ce qui arrive quand elles ne le sont pas.

- « mécanisme » → « activité », mot exact de `translation_notes[0]`.
- « Il ne l'explicite nulle part, mais son usage se laisse lire ainsi » reprend la portée de
  `known_ambiguities[0]` (« le texte ne l'énonce pas », lecture de l'usage).
- L'énumération de C007, claim voisin SUPPORTED, est conservée **mot pour mot** ; seule la
  ponctuation d'attaque change (`:` → phrase autonome introduite par « Autrement dit, »), le
  tiret cadratin d'abord essayé étant refusé par le contrôle mécanique.
- La phrase suivante, inchangée, portait déjà « en ce sens » : la restriction se propage sans
  retouche.

Aucune affirmation nouvelle : la portée est réduite, elle n'est pas étendue.

## C039 — `sections[2].paragraphs[2]`

Claim en échec : « une simple dépendance fonctionnelle produit la même relation, comme lorsqu'un
service impose à un autre l'outil avec lequel il devra désormais travailler ».

Le support, `SUP-2ddda21548a13ce4` (`appears_when[2]`) et `SUP-1a5eb67247280ba8`
(`mechanism[11]`), porte un modal que le claim supprimait : « une dépendance fonctionnelle **peut**
créer des relations du même type » (p. 11). Une possibilité était devenue une loi générale, et
« simple » ajoutait une minoration non soutenue.

Correction appliquée — restitution du modal :

> une dépendance fonctionnelle peut créer une relation du même type, comme lorsqu'un service
> impose à un autre l'outil avec lequel il devra désormais travailler

- « une simple dépendance fonctionnelle produit la même relation » → « une dépendance fonctionnelle
  peut créer une relation du même type » : verbe, modal et syntagme repris du support.
- L'exemple de l'outil imposé est **conservé** : il est couvert en propre par
  `SUP-c0d572e949a50c31` (`common_misinterpretations[4].why_wrong`), qui range explicitement « un
  service informatique qui impose un outil à un service métier » sous le même schéma. Le gate le
  dit lui-même, et le verifier ne le contestait pas.
- C038 (« la hiérarchie n'en est pas la condition ») et C040 (« alléger la ligne hiérarchique ne
  suffit donc pas ») restent SUPPORTED et intacts ; le « donc » de C040 s'enchaîne sans retouche,
  puisque la non-nécessité de la hiérarchie est portée par C038 et non par C039.

## Frontière interne

Un paragraphe a été ajouté à `limits` (4 → 5 paragraphes, 221 → 298 mots), pour que la faute de
C006 ne puisse pas se reformer à une passe ultérieure : il consigne que la lecture « régulation =
activité dont la règle est le produit » n'est pas une définition de l'article, et rappelle les
trois sens que `translation_notes[0]` écarte. Ce paragraphe est **interne** ; rien n'en est remonté
dans le texte lecteur, qui ne comporte ni section de méthode ni compte rendu de source.

## Périmètre de l'intervention

Aucune autre phrase du texte lecteur n'a été touchée. Les 59 claims SUPPORTED conservent leur
libellé, à la réserve de C007 dont seule la ponctuation d'attaque change. Aucun ajout de fait,
aucune citation nouvelle, aucun support ID fabriqué, aucune retouche des artefacts de fact-check.

## Volume

| | avant | après |
|---|---|---|
| texte lecteur (lead + sections) | 1 473 mots, 15 paragraphes | 1 489 mots, 15 paragraphes |
| `limits` | 221 mots, 4 paragraphes | 298 mots, 5 paragraphes |
| total compté par le contrôle | 1 694 mots | 1 787 mots |

Le texte lecteur gagne 16 mots, tous consacrés au marquage d'interprétation et à la restitution du
modal. Aucun paragraphe n'a été ajouté, aucun delta d'apprentissage n'a été déplacé : les deux
corrections abaissent le niveau de certitude sans changer ce que le lecteur apprend, ni l'ordre
dans lequel il l'apprend. La relecture paragraphe par paragraphe de la passe précédente reste donc
valable telle quelle (`rewrite.md`, § 6) ; aucune section ne répète principalement une section
antérieure.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=regulation-controle-autonome` : **PASS**
(« 1 approfondissement(s) contrôlé(s), 1787 mots. Rien projeté. », sortie 0).

Une première tentative avait été refusée (« tiret cadratin […] dans un texte rendu tel quel ») et
a été corrigée avant ce résultat.

Les deux avertissements de citation restent identiques à ceux de la passe précédente, non
bloquants et attendus (verbatim p. 10 et p. 16 de l'article de 1988, présents dans
`evidence.primary-reading.json`, absents de l'enregistrement validé que le contrôle compare) :

```
? « enseignée aux nouveaux venus et en partie imposée à ceux qui voudraient s’en écarter »
? « elle est de manière bien caractérisée une régulation de contrôle, puisqu’elle vient de
   l’extérieur donner des règles aux unités concrètes de travail »
```

Aucune des deux corrections ne les concerne.

## Suite

Le fichier maître a changé : le SHA candidat `ce7d43fb…` est caduc, et avec lui `claim-map.json`,
`factcheck-pack.json`, `verification-bundle.json`, `verification.json` et `factcheck-gate.json`.
L'orchestrateur doit reprendre à `PREPARE`, puis au mapping et au verifier, avant tout nouveau
gate. Aucune auto-validation n'est rendue ici : ni `ACCEPT`, ni `FACTCHECK_PASS`.
