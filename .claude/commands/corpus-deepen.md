---
description: Rendre les approfondissements manquants à partir de knowledge records vérifiés. Les concepts legacy sans knowledge record doivent d'abord migrer.
argument-hint: [conceptId…] | --missing [--batch=N]
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Écris les approfondissements pour : **$ARGUMENTS**

Lis `docs/content-pipeline-v2.md` et `corpus/deepenings/PROTOCOLE.md`.

## Éligibilité

Un nouvel approfondissement n'est éligible que si les deux fichiers existent et sont cohérents :

- `corpus/knowledge/<id>.json` avec `status: VERIFIED` ;
- `corpus/knowledge/<id>.pedagogy.json` avec le SHA exact du knowledge record.

Une carte validée historique sans knowledge record n'est **plus** une autorité suffisante pour écrire 1 000+ mots. Marque-la `NEEDS_KNOWLEDGE_MIGRATION` et continue.

Un approfondissement existant n'est jamais réécrit ici. Il passe par `/corpus-deepening-audit`.

## Lot

3 concepts par défaut, 5 maximum explicite. Un `corpus-deepener` par concept, dans un contexte frais.

## Chaîne obligatoire

Pour chaque concept éligible :

1. `corpus-deepener` ;
2. `npm run corpus:deepen -- --check --only=<id>` ;
3. `npm run corpus:content-check -- --prepare --artifact=deepening --only=<id>` ;
4. `corpus-content-mapper` ;
5. `npm run corpus:content-check -- --bundle --artifact=deepening --only=<id>` ;
6. `corpus-content-verifier` ;
7. `npm run corpus:content-check -- --gate --artifact=deepening --only=<id>` ;
8. `corpus-deepening-auditor` pour la progression pédagogique.

Sans `CONTENT_PASS`, le texte n'est pas publiable.

La longueur n'est plus un objectif. Le validateur n'impose qu'un anti-stub et une borne haute.

## Fermeture du lot

- `npm run corpus:deepen -- --check` ;
- `npm test` ;
- aucun `CONTENT_FAIL` conservé comme publiable ;
- les `limits` internes ne sont jamais projetés vers le lecteur.

Puis seulement `npm run corpus:deepen` pour reprojeter l'ensemble.

## Compte rendu

```text
lot                     : n
écrits                   : n — <ids>
CONTENT_PASS             : n — <ids>
audit pédagogique PASS   : n — <ids>
NEEDS_KNOWLEDGE_MIGRATION: n — <ids>
bloqués                  : n — <ids + motif>
restants                 : n
```