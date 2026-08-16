# `corpus/` — le corpus maître

Ce répertoire est la source de vérité documentaire de Curiosity. L'application ne le lit
jamais : elle consomme sa **projection** dans `src/content/generated/`, produite par
`npm run corpus:build`.

Le workflow complet — périmètre, hiérarchie des sources, agents, critères
PASS/REWORK/REJECT — est décrit dans [`docs/corpus-workflow.md`](../docs/corpus-workflow.md).
Le périmètre est dans [`perimeter.md`](./perimeter.md).

## Structure

```
corpus/
├── perimeter.md                     périmètre fermé, écrit une fois
├── schema/
│   └── concept.record.schema.json   schéma de l'enregistrement maître
├── _template/
│   └── concept.template.json        squelette à copier (jamais validable en l'état)
├── candidates/   CANDIDATE   evidence en cours, pas encore contrôlé
├── review/       IN_REVIEW   soumis au contrôleur aveugle, ou en REWORK
├── validated/    VALIDATED   deux passes en PASS — seul répertoire projetable
├── rejected/     REJECTED    conservé, avec rejection_reason
└── evidence/     extraits, notes de lecture, captures de sources par concept
```

**Le répertoire est l'état.** `npm run corpus:validate` refuse toute incohérence entre le
champ `status` d'un enregistrement et l'emplacement de son fichier. Faire avancer une
fiche, c'est déplacer son fichier *et* mettre à jour son `status`.

## Nommage

Un fichier par concept : `<id>.json`, où `<id>` est l'identifiant utilisé par
l'application (`ConceptId`). Pour un concept déjà présent dans `src/content/concepts.ts`,
**on reprend l'identifiant existant** : c'est ce qui permet à la fiche validée de
remplacer l'héritée sans casser le graphe.

Les pièces de `evidence/` sont rangées par concept : `evidence/<id>/<source>.md`.

## Les trois blocs d'un enregistrement

| Bloc | Écrit par | Contrôlé par | Nature |
|---|---|---|---|
| `evidence` | `corpus-concept-analyst`, à partir de `corpus-primary-reader` et `corpus-reception-analyst` | `corpus-blind-reviewer` passe A | Ce que les sources établissent, citation de l'auteur comprise |
| `pedagogy` | `corpus-pedagogy-writer` | `corpus-blind-reviewer` passe B | Mise en mots, **sans ajout** |
| `graph` | `corpus-graph-curator` | validateur (intégrité) + passe B | Relations, prérequis, difficulté |

Aucun de ces agents ne valide son propre bloc.

## Cycle de vie

```
candidates/  →  review/  →  validated/  →  src/content/generated/
     ↑            │  │
     └── REWORK ──┘  └── REJECT ──▶ rejected/   (conservé, jamais supprimé)
```

## Interdits

- Éditer un fichier de `src/content/generated/` : la correction se fait ici, puis on
  reprojette.
- Déplacer une fiche en `validated/` sans les deux verdicts `PASS`.
- Supprimer un rejet : un concept rejeté qui revient doit retrouver la trace de son
  premier examen.
- Inventer une référence, une pagination, une date ou un chiffre. Une lacune se signale
  (`known_ambiguities`, `confidence_flags`) ; elle ne se comble pas.
- Fabriquer une citation, la recomposer à partir de plusieurs pages, ou reprendre comme
  parole de l'auteur une phrase écrite par un texte qui le cite. `key_quotation` est
  facultatif : pas de passage citable établi, pas de citation.
