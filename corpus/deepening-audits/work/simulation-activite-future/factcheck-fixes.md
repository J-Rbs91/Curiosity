# Corrections après FACTCHECK_INVALID — simulation-activite-future

Rapport source : `factcheck-gate.loop0.json` (même répertoire).

## C001 — lead[0], dernière phrase

- Avant : « On ne peut pas interroger les futurs occupants sur un travail qu’ils n’ont pas encore fait, ni observer une activité qui n’existe pas. »
- Après : « Or l’activité réelle de ces futurs utilisateurs ne peut pas être prévue en détail. »
- Support : SUP-b8a10ceb0fde0e3c (`evidence:lecture.json`, `$.definition_de_lauteur`), qui cite Daniellou : « l’activité réelle des utilisateurs futurs ne peut pas être prévue en détail ».
- Nature de la correction : réduction de portée. Les deux affirmations retirées (impossibilité d’interroger, impossibilité d’observer) n’avaient pas d’appui ; le mot « observer » du support provenait d’un autre passage (usage ii de la simulation). Aucune affirmation nouvelle.

## Compteurs

- Claims corrigés : 1 (C001)
- Phrases modifiées : 1 ; autres passages : inchangés
- Mots du texte lecteur : 1397 avant, 1388 après (-9)
- `npm run corpus:deepen -- --check --only=simulation-activite-future` : PASS

Le SHA du deepening a changé : reprendre à `PREPARE`.
