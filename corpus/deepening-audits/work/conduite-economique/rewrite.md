# conduite-economique — FACTCHECK_FIX, boucle 1/2

Gate lu : `factcheck-gate.json` (FACTCHECK_FAIL, 57/60, SHA 41133c7f…). Correction minimale sur les trois claims refusés ; aucun autre passage modifié, aucune affirmation ajoutée.

| Claim | Verdict | Locator | Avant | Après | Appui |
|---|---|---|---|---|---|
| C006 | TOO_STRONG | lead[1] | « que le français distingue et que l’usage courant confond » | « que le français distingue et que l’anglais réunit sous behavior » | SUP-be71057fc6e5a36e, SUP-f10d8d7a4270cfb4 (behavior « terme massif » connotant deux idées que le français distingue) |
| C038 | UNSUPPORTED | sections[3].paragraphs[1] | « une seconde, que le texte ne formule pas ainsi » | « une seconde, qui relève de l’interprétation » | aucun appui requis : l’affirmation d’absence est retirée, la conséquence est marquée comme interprétation |
| C056 | TOO_STRONG | sections[5].paragraphs[2] | « et elle reste ouverte. » | « que les sources disponibles ne permettent pas de trancher, faute de pièce venant de l’autre partie. » | SUP-86cde1fe959e93c5 (notes[8] : non tranchée, aucune pièce du côté de Reynaud dans le corpus) |

Première formulation de C056 (« que cette carte consigne ») refusée par le contrôle mécanique (vocabulaire du dispositif) ; reformulée.

Mots du texte lecteur : 1377 après correction (variation de quelques mots seulement).

Contrôle : `npm run corpus:deepen -- --check --only=conduite-economique` → PASS (1 approfondissement contrôlé, 1377 mots).

Le SHA du deepening a changé : reprendre à `PREPARE`. Aucune auto-validation.

## Correction FACTCHECK_FIX — boucle 2/2

- C001/C002 (lead[0]) : les deux conséquences de la vignette sont désormais explicitement stipulées à l'intérieur de la scène imaginée (« Supposons, dans cette scène inventée, que ce film complet ne dise pas… » ; « Supposons encore que le geste soit le même dans les trois cas, et que rien, sur l'image imaginée, ne les sépare »). Aucune affirmation générale n'est maintenue.
- C022 (sections[1].paragraphs[1]) : phrase « Et le programme adverse existait de son temps sous une forme très nette » retirée ; seul subsiste le témoignage attribué à Albou au conditionnel (C023, SUP-78dac375149ba806).
- Aucune affirmation nouvelle. Mots du texte lecteur selon le check : 1367.
- `npm run corpus:deepen -- --check --only=conduite-economique` : PASS. SHA modifié, reprendre à PREPARE.
