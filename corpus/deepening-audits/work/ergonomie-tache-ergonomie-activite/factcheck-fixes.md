# Corrections FACTCHECK_FAIL — ergonomie-tache-ergonomie-activite

Gate : factcheck-gate.loop0.json — FACTCHECK_FAIL, 48/50 soutenus, 2 en échec (C035, C036, TOO_STRONG).
SHA candidat en échec : fdfb9f78698c9a65fde58bda66a70dbad6833c2e4bd8a79f0f991b7cdcc9b31a

## C035 — sections[3].paragraphs[0]
Claim : « la tâche ne porte que la première de ces exigences, alors que l'activité doit tenir les deux ».
Motif : exclusivité (« ne … que ») absente de SUP-33b9d11be9d7df09.
Correction : phrase retirée.

## C036 — sections[3].paragraphs[0]
Claim : « c'est pourquoi la tâche ne peut pas lui servir de but ».
Motif : lien causal et nécessité absents de SUP-33b9d11be9d7df09 / SUP-f6a61ebaf5c952d8 (orientation des auteurs, non impossibilité).
Correction : phrase retirée (même phrase que C035 : « On peut en tirer une conséquence : … »).
Le renversement « moyen et non horizon » reste porté ailleurs par la citation des auteurs ; aucune reformulation ajoutée.

## Bilan
- Phrase supprimée : 1 (2 claims). Aucune affirmation ajoutée.
- Texte lecteur après correction : 1280 mots (contrôle mécanique).
- `npm run corpus:deepen -- --check --only=ergonomie-tache-ergonomie-activite` : PASS.
- Le SHA du deepening change : reprendre à PREPARE.

---

# Boucle 2 — corrections FACTCHECK_FAIL

Gate : factcheck-gate.loop1.json — FACTCHECK_FAIL, 45/47 soutenus, 2 en échec (C027 UNSUPPORTED, C039 TOO_STRONG).
SHA candidat en échec : 1200ff6b9ea5ca067ac4eb08c02ec977d1829db712e65edba55465ffa12f4324

## C027 — sections[2].paragraphs[1]
Claim : « On peut entendre la différence ainsi : une norme s'impose et se vérifie, une référence s'utilise et se discute ; la première attend une conformité, la seconde un usage. »
Motif : glose norme/référence (imposition, vérification, discussion, conformité) absente de SUP-4a27ed7857e8e33c, qui ne porte que l'opposition « non pas comme norme, mais comme référence ».
Correction : phrase retirée. L'opposition reste portée par la citation des auteurs au paragraphe précédent ; le paragraphe garde la phrase sur la fonction donnée à l'observation.

## C039 — sections[4].paragraphs[1]
Claim : « La première s'en sert pour corriger la prescription, jusqu'à obtenir une tâche qui n'ait plus besoin de ces ajouts. »
Motif : le point d'aboutissement (élimination des ajouts des opérateurs) excède « corriger la prescription » (SUP-33b9d11be9d7df09, SUP-aead6ad6e1cdbacb).
Correction : clause « jusqu'à obtenir … ajouts » retirée ; la phrase devient « La première s'en sert pour corriger la prescription. »

## Bilan
- 1 phrase supprimée, 1 clause supprimée. Aucune affirmation ajoutée.
- Texte lecteur : 1280 → 1240 mots (contrôle mécanique).
- `npm run corpus:deepen -- --check --only=ergonomie-tache-ergonomie-activite` : PASS.
- Le SHA du deepening change : reprendre à PREPARE.
