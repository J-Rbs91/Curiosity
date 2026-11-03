---
concept_id: predominance-du-conflit-sur-la-negociation
deepening_sha256: 8eac437647f6a94c406409a89b1a7e44eea4340b8197f1953f5671fc0bbd3ef9
validated_sha256: 80d1342b6ae835bf0ad0c1047510ee5c24123731f38889b72f13a4b70846ecef
protocol_version: 4
audited_at: 2026-11-02T04:15:13Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_INVALID
remappings: 0
review_verdict: NOT_RUN
---

# predominance-du-conflit-sur-la-negociation

Texte lecteur **inchangé** (SHA d'origine restauré par blob `a4e7d3d5`, vérifié par sha256).

## Audit pédagogique — `REVISE` (protocole 4)

Notes A2 B3 C2 D3 E3 F3 G2 H2. Le texte en place contient des ajouts non soutenus (vignette chiffrée du lead, contenu prêté à Clausewitz, « secteur privé », « notés nulle part ») et tranche deux contradictions entre l'enregistrement validé et le dossier (Segrestin/Dassa ; chapeau p. 32).

## Fact-check

| passe | claims | soutenus | échecs |
|---|---:|---:|---|
| réécriture minimale | 60 | 51 | 7 TOO_STRONG, 1 CONFLICT, 1 MAPPING_INCOMPLETE (C001) |
| correction 1 | 58 | 57 | C012 TOO_STRONG |
| correction 2 | 58 | 56 | C030 TOO_STRONG (« avant tout le reste »), C011 MAPPING_INCOMPLETE |

Deux boucles consommées : rejet. Aucun remapping n'a été rejoué pour C011, ce qui aurait laissé C030 en échec et aurait été du magasinage de verdict.

## À reprendre

La version `dda22c72` (1 543 mots) est conservée dans `work/predominance-du-conflit-sur-la-negociation/rewrite-rejected-dda22c72.json`. Elle ne demande que deux gestes : remplacer « avant tout le reste » par « dès la p. 34 », et rattacher à C011 les appuis SUP-dae0ffc0f7fc581c (p. 32-44) ou SUP-2d27288511f2293d. Les contradictions Segrestin/Dassa et p. 32 relèvent de la fiche validée, pas du réécrivain.
