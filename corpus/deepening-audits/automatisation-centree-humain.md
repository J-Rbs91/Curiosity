---
concept_id: automatisation-centree-humain
deepening_sha256: d3b37815bde680b74ba2e5acb2f102191c931c7f86f9167adc0a22c7c766302d
validated_sha256: 7ef2e6245c038f8bce7b2b675277328ba6303fd565208c6930307b26850b5c94
protocol_version: 4
audited_at: 2026-11-12T05:40:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
remappings: 0
---

# automatisation-centree-humain

Jamais audité. Audit REVISE (fidélité 2/4, six défauts majeurs dont une phrase attribuée à l'auteur sans support en S3.P2). Réécriture, trois gates : 63/74, 67/69, 68/69 (C001 TOO_STRONG, phrase du lead sur la reprise en main). Plafond de deux boucles atteint : deepening restauré par SHA de blob (`9b674d7b…`, vérifié par `git hash-object`). Détails : `work/automatisation-centree-humain/` (`loop0/`, `loop1/`, `loop2/`).

**Reste à réparer** : la version publiée est celle d'origine, dont l'audit a relevé des phrases sans support. À resélectionner par `--stale`.
