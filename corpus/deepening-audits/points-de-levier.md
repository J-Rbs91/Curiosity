---
concept_id: points-de-levier
deepening_sha256: b013ce9c929ab0ccabc589cfa0f96d3c617e361e91e985c7fbf6a11fe81dd683
validated_sha256: d5a90397ec6aa8710dcd79f51ff950cab72dd811ec9f99a6b08816308ef15db6
protocol_version: 4
audited_at: 2026-11-03T04:30:00Z
initial_verdict: REWRITE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# points-de-levier

Ce rapport remplace celui du 25 septembre 2026 (`rewrite_rejected_factcheck`), qui avait été écrit **sans dossier de preuve** : `corpus/evidence/points-de-levier/` n'existait pas et les trois sources sortaient en `dossier-absent`.

## Ce qui a changé

- **Acquisition** : rapport de Meadows, décembre 1999, 21 pages, lu intégralement sur sa couche texte native (`consulted: full-text`, SHA-256 du fichier consigné dans le dossier). `corpus/evidence/points-de-levier/lecture.json` porte 67 passages verbatim localisés par page imprimée, vérifiés par programme. Les deux articles secondaires restent `metadata-only` (notices Crossref concordantes). Les trois accès sont corroborés par le pack.
- **Audit v4** : `REWRITE`, notes 1/2/2/3/1/1/2/2. Défauts relevés : une entrée de la liste fausse (n° 4), la baignoire retournée contre le rapport, une « logique simple » que Meadows contredit elle-même, un mécanisme inventé, une section d'usages sans appui, et une affirmation de réception interdite par le pack.
- **Réécriture** : 1 088 → 1 396 mots (+28 %), financée par des extraits nommés ; environ 600 mots sans appui retirés.
- **Fact-check** : `FACTCHECK_PASS`, 81 claims soutenus sur 81, 0 remapping, sur le SHA exact ci-dessus. Le gate a passé du premier coup.
- **Revue indépendante** : `ACCEPT` (voir `work/points-de-levier/review.md`).

## Réserves

- Croissance de 28 %, au-delà de la zone où les audits antérieurs observaient des PASS ; elle est financée par des extraits et validée par le gate.
- L'avertissement central revient trois fois (lead, S1.P3, S5.P1) ; S5.P1 n'apporte en propre que « systematically worsening ».
- Claims limites acceptés par le vérificateur : C001 (cadrage éditorial appuyé sur `$.hook`) et C008.
- La version courte de *Whole Earth* (hiver 1997) et la littérature secondaire n'ont pas été ouvertes.
- Le texte précédent a été restauré par aucun mécanisme : version antérieure = blob `f65fd4c5`.
