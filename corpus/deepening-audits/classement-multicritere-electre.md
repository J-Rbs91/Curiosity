---
concept_id: classement-multicritere-electre
deepening_sha256: b61e3205b8d8a29f4b7e2727f248148be943dc3cdc407ebe13ea64a45f1feab2
validated_sha256: dd411ce641e1f339fdf51c00c3a3eb2cc493072294e205a17cab51875d24d4c5
protocol_version: 4
audited_at: 2026-11-15T04:10:32Z
initial_verdict: REVISE
result: rewrite_rejected
factcheck_verdict: FACTCHECK_PASS
remappings: 0
review_verdict: REJECT
---

Audit du 2026-11-15, premier rapport de cette carte. **Le texte publié est la version antérieure, restaurée par son blob 9b8b3cbf05bdef630f508ac1ac52f83e30ff9452. Aucun fact-check n'a été exécuté sur ce texte restauré** : le `factcheck_verdict` ci-dessus porte sur la réécriture candidate refusée (SHA 4f93add5…), pas sur le fichier publié. La carte reste donc à auditer.

- Audit : REVISE (fidélité 2/4, ouverture 2/4). Défauts relevés : contresens « purement ordinal », concordance décrite comme un « compte des voix », titre de 1966 attribué à Roy seul.
- Réécriture : +8 %, financée par SUP-0088596fe72045cd et des supports d'attribution.
- Gate : tour 0 INVALID (12 échecs réels ; deux MAPPING_INCOMPLETE dus à un signal lexical sans rapport, SUP-abe2a24f4528b146, qui parle de la numérotation des notes de la page 57, traités comme non soutenus sans remapping), tour 1 FAIL 67/69 (C033, C035 : condition de concordance omise), tour 2 PASS 66/66.
- Revue : REJECT. Les retraits imposés par le fact-check (C001 à C004 dans lead[0]) ont laissé lead[0] sans problème posé (91 mots, sous la fourchette du protocole) et deux renvois sans antécédent (« prend le problème par l'autre bout » en lead[1], « la question de départ » en S3.P2). Les corrections exactes recommandées : recomposer lead[0] sous forme hypothétique (chaque point de vue désigne un appartement différent) puis ajuster lead[1] et la fin de S3.P2. Elles ajoutent des affirmations, donc hors budget des deux boucles consommées.
- À reprendre : le texte de la réécriture candidate n'a pas été conservé avant la restauration. Restent dans le répertoire de travail le diagnostic (audit.md), le compte rendu des réécritures (rewrite.md), les claim maps et rapports de gate (dont loop0/ et loop1/), et le compte rendu de revue. Une prochaine passe repart de l'audit et du pack, en posant le problème dans le lead avant d'y revenir.
