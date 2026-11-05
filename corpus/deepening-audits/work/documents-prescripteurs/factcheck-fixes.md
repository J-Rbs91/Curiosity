# documents-prescripteurs — corrections après FACTCHECK_FAIL (loop0, 58/60)

Autorité : `factcheck-gate.loop0.json` (candidate SHA d0d5f75b…). Seuls C003 et C020 sont touchés.

## C003 — lead[1], TOO_STRONG

- Avant : « Notice, consigne, procédure, mode d’emploi : ces textes ont en commun de vouloir faire agir quelqu’un. »
- Après : « Instruction, consigne, procédure, mode d’emploi : ces textes ont en commun de vouloir faire agir quelqu’un. »
- Correction : terme non porté (« notice ») remplacé par un terme que les appuis du claim énumèrent
  (« instruction », d’après le motif du gate). Aucun ajout.
- Supports inchangés : SUP-245c92400e2da90e, SUP-6f052a8d03b1f436, SUP-2a852fa645f3852b, SUP-32d13508bc984b02.
- Non touché : la « notice » du crochet (lead[0], meuble monté avec sa notice) n’a pas été signalée ;
  celle de `limits` (notice du recueil PUF) est interne et bibliographique.

## C020 — sections[1].paragraphs[0], TOO_STRONG

- Avant : « La thèse centrale tient en une phrase, placée dans une section intitulée … »
- Après : « La thèse qui intéresse l’écart entre prescrit et réel tient en une phrase, placée dans une section intitulée … »
- Correction : qualification « centrale » retirée, remplacée par la qualification que portent les appuis
  (« thèse qui intéresse l’écart prescrit/réel », factcheck-pack). Aucun ajout.
- Supports inchangés : SUP-1852e6098f943cbf, SUP-245c92400e2da90e, SUP-c563f44b36e49669, SUP-627f245c424b0c50.

## Contrôle

- `npm run corpus:deepen -- --check --only=documents-prescripteurs` : PASS (1 contrôlé, 1493 mots ; 1487 avant).
- Le SHA du candidat change : reprendre à `PREPARE`.
