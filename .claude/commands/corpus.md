---
description: Produire de nouveaux concepts Curiosity par la chaîne evidence-first, depuis la découverte jusqu'aux rendus vérifiés
argument-hint: [--discipline=organizational-sociology] <thème ou concept> [--batch=N]
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Lance le **Content Pipeline v2** sur : **$ARGUMENTS**

Délègue à `corpus-orchestrator`. Tu ne produis toi-même aucune connaissance.

Lis `docs/content-pipeline-v2.md` avant de lancer le lot.

## Discipline

Sans `--discipline`, utilise `organizational-sociology` pour compatibilité avec le corpus actuel.

La discipline décide du périmètre et des règles épistémiques. Le Core reste identique.

## Lot

- 3 concepts par défaut ;
- 5 maximum explicite ;
- un concept par contexte d'agent ;
- 300 000 tokens estimés maximum par pack ;
- jamais de troncature.

## Invariant

Une production terminée n'est plus « une carte écrite puis relue ».

Elle doit avoir traversé :

`DISCOVER -> ACQUIRE -> EVIDENCE REVIEW -> KNOWLEDGE -> PEDAGOGY -> RENDER -> CONTENT GATE -> REVIEW -> PUBLISH`

La carte et l'approfondissement sont deux rendus du même `corpus/knowledge/<id>.json` vérifié.

## Conditions de publication

Pour un concept v2 :

- `EVIDENCE_PASS` ;
- `KNOWLEDGE_PASS` ;
- `PLAN_PASS` ;
- carte `CONTENT_PASS` ;
- approfondissement `CONTENT_PASS` ;
- contrôle aveugle carte `PASS` ;
- audit pédagogique compatible avec publication ;
- `npm run corpus:validate` ;
- `npm run corpus:deepen -- --check` ;
- `npm test` ;
- `npm run lint`.

Un échec documentaire bloque le concept. Il ne se résout jamais en demandant au renderer d'être plus vague ou plus convaincant.

## Sortie

Rends seulement le résumé de l'orchestrateur :

```text
discipline        : <id>
lot               : n
evidence PASS     : n
knowledge PASS    : n
card CONTENT_PASS : n
deep CONTENT_PASS : n
review PASS       : n
blocked           : n — <ids + étape>
published         : n — <ids>
```

Les rapports détaillés restent dans leurs artefacts et ne sont pas recopiés dans ton contexte.