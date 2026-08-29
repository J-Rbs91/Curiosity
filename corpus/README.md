# `corpus/` — le corpus maître

Ce répertoire est la source de vérité documentaire de Curiosity. L'application ne le lit
jamais : elle consomme sa **projection** dans `src/content/generated/`, produite par
`npm run corpus:build`.

Une fiche est **une carte** : thème, concept, citation, auteur, accroche, résumé, cinq
sources. Il n'y a rien d'autre à renseigner — voir
[`schema/carte.schema.json`](./schema/carte.schema.json) et
[`docs/corpus-workflow.md`](../docs/corpus-workflow.md), dont le §1 explique pourquoi le
format précédent, trente fois plus lourd, n'a jamais publié une seule fiche.

Le périmètre est dans [`perimeter.md`](./perimeter.md).

## Structure

```
corpus/
├── perimeter.md                 périmètre fermé, écrit une fois
├── schema/carte.schema.json     schéma d'une carte
├── _template/                   squelette à copier (jamais validable en l'état)
├── candidates/   CANDIDATE      concept repéré, carte pas encore écrite
├── review/       IN_REVIEW      soumis au contrôle aveugle, ou en correction
├── validated/    VALIDATED      verdict PASS — seul répertoire projetable
├── rejected/     REJECTED       conservé, avec rejection_reason
├── evidence/     lectures primaires, extraits, notes par concept
└── dossiers/     enregistrements complets de l'ancien format, archivés
```

**Le répertoire est l'état.** `npm run corpus:validate` refuse toute incohérence entre le
champ `status` d'une fiche et l'emplacement de son fichier. Faire avancer une fiche, c'est
déplacer son fichier *et* mettre à jour son `status`.

`dossiers/` n'est plus lu par rien. Il conserve les 171 000 caractères d'instruction par
concept produits par le premier dispositif : c'est payé, ce n'est pas perdu, et ce n'est
plus exigé. Une fiche peut y renvoyer par son champ `dossier`.

## Nommage

Un fichier par concept : `<id>.json`, où `<id>` est l'identifiant utilisé par l'application
(`ConceptId`). Pour un sujet déjà présent dans l'échafaudage (`src/content/fixtures/`),
**on reprend le même identifiant** : la fiche d'échafaudage cesse alors d'être servie. Son
texte, lui, n'entre nulle part.

## Cycle de vie

```
candidates/  →  review/  →  validated/  →  src/content/generated/
     ↑            │  │
     └── REWORK ──┘  └── REJECT ──▶ rejected/   (conservé, jamais supprimé)
```

Deux tours de correction au maximum.

## Interdits

- Éditer un fichier de `src/content/generated/` : la correction se fait ici, puis on
  reprojette.
- Déplacer une fiche en `validated/` sans un verdict `PASS` sur les quatre points.
- Supprimer un rejet : un concept rejeté qui revient doit retrouver la trace de son premier
  examen.
- Inventer une référence, une pagination, une date ou un chiffre. Une lacune se signale
  (`notes`) ; elle ne se comble pas.
- Fabriquer une citation, la recomposer à partir de plusieurs pages, ou reprendre comme
  parole de l'auteur une phrase écrite par un texte qui le cite. `quotation` est
  facultative : pas de passage citable établi, pas de citation.
- Publier une citation dans une autre langue que le français. Le corpus lit des textes
  anglais, allemands, russes ; la carte, elle, se lit en français. Le passage se traduit,
  l'original va dans `original_text`, et la traduction se déclare — `translation.kind` à
  `none` ne vaut que pour un auteur qui écrivait en français.
- Écrire une note de dossier dans un champ qui s'affiche (`label`, `locator`,
  `attribution_note`). Elle va dans `notes`.
