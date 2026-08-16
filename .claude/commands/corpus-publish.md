---
description: Valider le corpus et projeter les fiches validées vers l'application
allowed-tools: Task, Read, Edit, Glob, Grep, Bash
---

Projette le corpus vers l'application. Délègue à l'agent `corpus-editor`.

Rien ici ne relève du jugement : une erreur de `npm run corpus:validate` est un blocage, et
la seule réponse est de corriger l'enregistrement maître puis de reprojeter. On ne
commente jamais une règle pour débloquer un cas particulier, et on n'édite jamais
`src/content/generated/` à la main — la correction y disparaîtrait à la projection
suivante, après avoir vécu sans enregistrement sourcé derrière elle.

Séquence :

1. `npm run corpus:validate`
2. `npm run corpus:build`
3. `npm test` puis `npm run lint`
4. Retirer de `src/content/fixtures/concepts.fixture.ts` les entrées rendues caduques —
   `corpus:build` les liste. Ce fichier est destiné à disparaître, pas à être maintenu.
5. `npm run corpus:audit`

Rends compte de ce qui est projeté, de ce que la carte du jour affichera désormais (et de
combien de fiches portent une citation), et de ce qui reste à instruire.
