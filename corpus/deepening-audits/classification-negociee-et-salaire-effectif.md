---
concept_id: classification-negociee-et-salaire-effectif
deepening_sha256: 59a398aed6338b04942c1ea361ab62ed19ebe0673467dfc82eaf023c111f730a
validated_sha256: b77996c6ee7cccb6a507b3af21aa0136c973a4fc68aec1bb2b614cdd0e07ce4c
protocol_version: 4
audited_at: 2026-11-16T04:06:19Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
remappings: 0
review_verdict: NOT_RUN
---

# classification-negociee-et-salaire-effectif : réécriture refusée au fact-check

Audit REVISE (A 2, B 3, C 3, D 3, E 3, F 3, G 2, H 4). La réécriture a passé le contrôle mécanique mais a échoué le gate à chacune de ses trois évaluations : 3 claims refusés sur 78 (C001 UNSUPPORTED, C012 et C046 TOO_STRONG), puis 1 sur 68 (C001 TOO_STRONG), puis 1 sur 72 (C005 TOO_STRONG). Le plafond de deux boucles de correction est atteint. Le texte d'origine a été restauré par son SHA de blob (da9ca8f8…), sha256 vérifié.

Ce qui reste à réparer, et que l'audit a établi : S3.P1 contredit la source sur le point central (« n'est plus le rang » face à « conjointement la classification et le rendement ») ; la condition plancher / payé au temps contre payé au rendement manque ; cinq gloses dépassent le pack (S1.P1, S2.P1, S3.P1, S6.P2, S6.P3) ; la fin répète le lead. Le texte d'origine, lui, n'est pas fact-checké. Artefacts : `work/classification-negociee-et-salaire-effectif/` (loop0 à loop2).
