# fix2 — valeur-comme-fait-psychologique (FACTCHECK_FIX, boucle 2)

Gate : FACTCHECK_FAIL 60/61. Seul claim fautif : C038 (TOO_STRONG), sections[4].paragraphs[0].

## Correction (NARROW)

- Avant : « Une théorie qui fait de la valeur une affaire de désir n’est plus isolée en 1902, »
- Après : « Une théorie qui fait de la valeur une affaire de désir n’est pas isolée en 1902, »

Retrait de « plus », qui introduisait un isolement antérieur non porté par les appuis. La formulation
sans « plus » est celle que le verifier déclare soutenue (SUP-1cf87929d82f9688, SUP-b6d52c0cfbc2ee3a,
SUP-9da3c72071a9c20f : definition_de_lauteur p. 142, review.notes[2]). Aucune autre modification,
aucune nouvelle affirmation.

## Compteurs

- Mots texte lecteur : 1700 avant (un mot substitué, aucun ajouté ni retiré), 1700 après.
- Ajouts : aucun.
- `npm run corpus:deepen -- --check --only=valeur-comme-fait-psychologique` : PASS (1 contrôlé, 1700 mots).

Copie de la version antérieure : fix2-before.json. Le SHA est invalidé : reprendre à PREPARE.
