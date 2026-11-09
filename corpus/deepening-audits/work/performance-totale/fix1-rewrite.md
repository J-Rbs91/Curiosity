# performance-totale — correction factuelle n°1 (FACTCHECK_FIX)

Entrée : `factcheck-gate.json` (FACTCHECK_FAIL, 42/47, 5 claims TOO_STRONG : C001, C002, C003, C004, C027).
Copie de la version fautive : `fix1-before.json`.
Correction minimale, aucune affirmation nouvelle. Seuls `lead[0]` et `sections[2].paragraphs[0]` sont touchés ; `limits`, notes et autres sections inchangés.

Mots (sortie de `corpus:deepen --check`) : 1218 avant, 1176 après.

## Corrections

| Claim | Action | Avant | Après | Supports |
|---|---|---|---|---|
| C001 | NARROW | « pouvait prendre plusieurs formes à la fois : interroger les usagers, comparer des situations locales, peser des critères différents et parfois contradictoires » | « a pu passer par des dispositifs d’évaluation pluralistes, conçus au cas par cas » | SUP-084f615daae6862f (§ 6 « ad hoc et pluralistes »), SUP-8bea3edae30e39a6 |
| C002 | NARROW | « se resserre autour d’un seul indicateur : un objectif atteint ou manqué, un score, un classement » | « glisse vers la mesure des performances et se ramène à un chiffre » | SUP-8bea3edae30e39a6 (« glisse vers la mesure des performances », « un chiffre »), SUP-084f615daae6862f (§ 5) |
| C003 | REMOVE du rôle + NARROW | « s’impose à tout le monde, du dirigeant qui le fixe à l’agent qui l’exécute » | « chacun, acteur individuel comme collectif, est tenu de s’y conformer » | SUP-084f615daae6862f (§ 5 « assigné à se conformer », § 26 « chacun (acteur individuel et collectif) ») |
| C004 | NARROW | « n’est tout à fait convaincu qu’il dise grand-chose du travail réellement accompli » | « n’y croit tout à fait » | SUP-084f615daae6862f (§ 26), SUP-8bea3edae30e39a6 |
| C027 | REMOVE | « Décontextualisé, parce qu’il vaut de la même façon pour des situations locales très différentes. » | (supprimée) | — |

## Points d’attention pour la nouvelle vérification

- « se ramène à un chiffre » (C002) : appuyé sur le summary validé (« se plie à un chiffre ») et le § 5 (« exhibition d’un chiffre ») ; un vérificateur strict pourrait y lire encore une unicité. Repli possible : « s’exprime en chiffres ».
- « n’y croit » (C004) rapporte au chiffre ce que le § 26 dit du dispositif ; SUP-084f615daae6862f documente explicitement que cette fusion ne fait rien dire de plus à l’article.
- Après suppression de C027, la phrase « Assigné, parce que… » reste seule glose du terme cité ; elle avait été jugée soutenue.

Le SHA du deepening a changé : reprendre à `PREPARE`.
