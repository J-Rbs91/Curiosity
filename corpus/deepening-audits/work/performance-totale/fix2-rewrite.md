# performance-totale — correction factuelle n°2 (FACTCHECK_FIX)

Entrée : `factcheck-gate.json` (FACTCHECK_FAIL, 48/49, seul C001 TOO_STRONG).
Copie de la version fautive : `fix2-before.json`.
Correction minimale, aucune affirmation nouvelle. Seul `lead[0]` est touché ; `limits` et sections inchangés.

Mots (sortie de `corpus:deepen --check`) : 1176 avant, 1177 après.

## Correction

| Claim | Action | Avant | Après | Supports |
|---|---|---|---|---|
| C001 | NARROW (temporel) | « Longtemps, ce jugement a pu passer… » | « À l’origine, ce jugement a pu passer… » | SUP-084f615daae6862f (§ 6 « ad hoc et pluralistes » ; § 25 « prémices » / « débuts » de l’évaluation), SUP-f475b904714583a1, SUP-acefc106b2626baf |

« Longtemps » ajoutait une durée qu’aucun appui ne porte ; « À l’origine » ne dit qu’un état antérieur, ce que le § 25 établit (formulation suggérée par le vérificateur lui-même dans `verification.json`).

Le SHA du deepening a changé : reprendre à `PREPARE`.
