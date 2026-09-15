---
description: Migrer progressivement des concepts historiques vers le Content Pipeline v2 sans réécrire un contenu qui passe déjà les nouveaux gates
argument-hint: [conceptId…] | --stale [--batch=N]
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Migre vers le Content Pipeline v2 : **$ARGUMENTS**

Lis `docs/content-pipeline-v2.md` et délègue l'orchestration aux agents spécialisés.

## But

La migration ne consiste pas à réécrire toutes les cartes et tous les approfondissements.

Elle consiste d'abord à :

1. transformer les acquisitions historiques réellement vérifiables en supports déterministes ;
2. construire un knowledge record `VERIFIED` ;
3. mapper les rendus existants contre ce knowledge record ;
4. conserver tels quels les rendus qui obtiennent `CONTENT_PASS` ;
5. ne réécrire que les rendus qui échouent ou dont l'audit pédagogique demande une correction.

## Sélection

- identifiants explicites : toujours sélectionnés ;
- `--stale` ou aucun argument : concepts validés sans `corpus/knowledge/<id>.json`, ou dont le knowledge / content gate est devenu stale ;
- `--batch=N` : maximum N concepts éligibles.

Valeur par défaut : **3**. Maximum absolu : **5**.

## Étape 1 : préparation legacy

Pour une carte historique dont le contrôle aveugle porte déjà `review.verdict: PASS` :

`npm run corpus:knowledge -- --prepare --allow-legacy --only=<id>`

Ce mode réutilise uniquement le fait qu'une revue indépendante a déjà été payée. Il ne convertit jamais `definition_de_lauteur`, `notes` ou `review.notes` en supports de contenu.

Les supports disponibles viennent des métadonnées et fragments verbatim réellement structurés par le gate.

Si cette matière est insuffisante pour reconstruire les claims nécessaires, ne demande pas au builder de compléter. Marque `NEEDS_REACQUISITION` et lance le workflow d'acquisition v2 si la migration doit continuer.

## Étape 2 : knowledge

Quand le pack est `READY` :

1. `corpus-knowledge-builder` ;
2. `npm run corpus:knowledge -- --bundle --only=<id>` ;
3. `corpus-knowledge-verifier` dans un contexte frais ;
4. `npm run corpus:knowledge -- --gate --publish --only=<id>`.

Un autre verdict que `KNOWLEDGE_PASS` bloque la migration jusqu'à correction documentaire.

## Étape 3 : plan pédagogique

`corpus-pedagogy-planner`, puis :

`npm run corpus:knowledge -- --validate-plan --only=<id>`

## Étape 4 : contrôler les rendus existants avant de les toucher

### Carte

Si la carte validée existe, prépare un content pack avec son chemin explicite :

`npm run corpus:content-check -- --prepare --artifact=card --only=<id> --path=corpus/validated/<id>.json`

Puis mapper -> bundle -> verifier -> gate.

Si `CONTENT_PASS`, **ne réécris pas la carte**.

Si échec sémantique, une nouvelle carte doit être rendue depuis le knowledge record et repasser la chaîne complète.

### Approfondissement

S'il existe : prepare -> mapper -> bundle -> verifier -> gate avec `artifact=deepening`.

Si `CONTENT_PASS`, garde le texte. Lance quand même l'audit pédagogique si son rapport est stale.

Si `CONTENT_FAIL`, corrige via `corpus-deepening-rewriter` en régime v2.

## Étape 5 : fermeture

Pour chaque concept migré :

- knowledge `VERIFIED` ;
- `PLAN_PASS` ;
- carte `CONTENT_PASS` ;
- approfondissement `CONTENT_PASS` s'il existe ;
- audits/reviews requis à jour ;
- aucun artefact stale présenté comme valide.

Puis, sur le lot :

- `npm run corpus:validate` ;
- `npm run corpus:deepen -- --check` ;
- `npm test` ;
- `npm run lint`.

Ne merge, ne publie ni ne pousse directement sur `main` depuis cette commande.

## Contexte

Un concept par agent. 300 000 tokens estimés maximum par pack. Partition au-dessus, jamais troncature.

## Compte rendu

```text
lot                : n
KNOWLEDGE_PASS     : n — <ids>
NEEDS_REACQUISITION: n — <ids>
card conservée     : n — <ids>
card réécrite      : n — <ids>
deepening conservé : n — <ids>
deepening réécrit  : n — <ids>
CONTENT_FAIL       : n — <ids>
migrés v2          : n — <ids>
restants legacy    : n
```
