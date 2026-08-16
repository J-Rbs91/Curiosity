---
description: Instruire un ou plusieurs concepts par le pipeline documentaire, jusqu'à la carte affichable
argument-hint: <auteur, thème ou concept> [nombre de candidats]
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Lance le pipeline documentaire du corpus sur : **$ARGUMENTS**

Délègue à l'agent `corpus-orchestrator`. Tu ne produis toi-même aucune connaissance : tu
transmets la demande, tu rends compte de ce qui revient.

## Ce qui doit sortir

Une fiche n'est terminée que si elle permet de composer la carte de l'application. Sept
éléments, tous issus du même enregistrement validé :

| Carte | Champ de la fiche | Exigé |
|---|---|---|
| THÈME | `graph.themes` | oui — au moins un thème existant |
| CONCEPT | `canonical_name_fr` | oui |
| CITATION | `evidence.key_quotation` | **non** — voir plus bas |
| AUTEUR | `attribution` → `attributionNote` | oui — coauteurs rétablis |
| ACCROCHE | `pedagogy.hook_question` | oui |
| RÉSUMÉ | `pedagogy.short_explanation` | oui |
| SOURCES | `primary_sources` + `secondary_sources` | oui — une primaire et une secondaire au minimum |

**La citation reste facultative, et cela ne se négocie pas.** Beaucoup de concepts sont
distribués sur un chapitre entier sans phrase courte qui les énonce. Une carte sans
citation est complète ; une carte avec une citation recomposée, sortie de son contexte ou
tirée d'un texte qui cite l'auteur au lieu de l'auteur lui-même est une faute. Si aucun
passage citable n'a été établi, `key_quotation` reste à `null` et on le dit.

## Le protocole, sans raccourci

L'orchestrateur applique `docs/corpus-workflow.md` :

1. `corpus-scout` — périmètre et sources atteignables. `search_literature` et
   `search_francophone` dans le **même message** : la couche francophone se cherche en
   amont.
2. `corpus-primary-reader` et `corpus-reception-analyst` en parallèle.
3. `corpus-concept-analyst` — bloc `evidence`.
4. `corpus-blind-reviewer` passe A, sur le dossier produit par
   `npm run corpus:brief -- <id> --pass=A`. Il ne reçoit ni le brief, ni la confiance
   amont : ce dossier est vidé mécaniquement, ne lui transmets rien d'autre.
5. `corpus-pedagogy-writer` — bloc `pedagogy`.
6. `corpus-blind-reviewer` passe B.
7. `corpus-graph-curator` — bloc `graph`.
8. `npm run corpus:validate`, puis `corpus/validated/`.

Aucune étape ne se saute, même sur un concept qui paraît évident. Deux tours de REWORK par
passe, trois sans convergence valent rejet.

## Le rythme

Pas de quota, pas d'équilibrage entre auteurs, pas d'objectif de volume. **Pas de preuve
documentaire suffisante, pas de fiche** — un lot qui ne rend rien est un résultat
documenté, pas un échec. Sans argument après `/corpus`, prends les pistes de
`npm run corpus:audit` en commençant par ce qui exerce le plus la méthode : un concept
coécrit, un concept fortement vulgarisé, un ouvrage français.

## Rends compte ainsi

```
lot        : <sujet>
candidats  : n
validés    : n — <ids>, dont n avec citation
en review  : n — <ids>, motif, tour
rejetés    : n — <ids>, rejection_reason
```

Puis rappelle que `/corpus-publish` projette les fiches validées vers l'application.
