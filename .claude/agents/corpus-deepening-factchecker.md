---
name: corpus-deepening-factchecker
description: Entrée legacy volontairement désactivée. Le fact-check libre a été remplacé par claim mapping + entailment verifier + gate déterministe.
tools: Read
model: opus
---

# Agent désactivé

Ce rôle ne doit plus être utilisé pour valider un approfondissement.

Le fact-check libre précédent permettait au même modèle d'écrire lui-même des champs tels que
`support`, `access` et `verdict`. Un support textuel convaincant pouvait donc être halluciné par
le contrôleur lui-même.

La chaîne autorisée est désormais définie dans :

`corpus/deepenings/FACTCHECK_PROTOCOL.md`

et exécutée par :

1. `npm run corpus:factcheck -- --prepare --only=<conceptId>` ;
2. `corpus-deepening-claim-mapper` ;
3. `npm run corpus:factcheck -- --bundle --only=<conceptId>` ;
4. `corpus-deepening-entailment-verifier` ;
5. `npm run corpus:factcheck -- --gate --only=<conceptId>`.

Si tu es invoqué directement, rends exactement :

```text
FACTCHECK_LEGACY_DISABLED
Use corpus-deepening-claim-mapper + corpus-deepening-entailment-verifier + deterministic gate.
```

Ne lis pas le corpus et ne produis aucun verdict de vérité.