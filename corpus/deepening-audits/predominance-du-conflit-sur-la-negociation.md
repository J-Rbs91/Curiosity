---
concept_id: predominance-du-conflit-sur-la-negociation
deepening_sha256: 8eac437647f6a94c406409a89b1a7e44eea4340b8197f1953f5671fc0bbd3ef9
validated_sha256: ef689403da299b3576602256d577d2193d5e26afad57b71d0ff972972bd04e79
protocol_version: 3
audited_at: 2026-09-17T04:38:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# predominance-du-conflit-sur-la-negociation

Sélectionnée sur deux signaux cumulés : aucun répertoire `corpus/evidence/<id>/` et un taux de
reformulation parmi les plus élevés du corpus. **L'approfondissement en place est conservé.**

## Audit pédagogique

`REVISE`. Un noyau réénoncé quatre fois, quatre paragraphes à delta partiel, progressivité 2/4 et
densité 2/4. Deux défauts documentaires sérieux nommés dès l'audit : des rubriques d'imprimé
inventées dans `lead[1]`, et une attribution du mot « prééminence » tranchée dans le sens fort
alors que le dossier la réserve.

## Fact-check déterministe

Les deux boucles autorisées ont été consommées, et le gate refuse encore.

| boucle | claims | SUPPORTED | échecs |
|---|---:|---:|---|
| 1 | 61 | 55 | 4 TOO_STRONG, 2 UNSUPPORTED |
| 2 | 64 | 63 | 1 TOO_STRONG (champ dit « secteur privé ») |
| 2 (regate) | 67 | 66 | 1 TOO_STRONG (`C060`) |

L'échec final tient à un mot : le support porte « résultats informels ou différés, **donc non
notés dans les fiches** », le texte lecteur disait « notés nulle part ». L'écart est petit et il
est réel — il étend l'absence d'enregistrement au-delà des fiches d'inspection, seule pièce
attestée.

**Une anomalie de protocole a été constatée ici et vaut d'être connue.** La correction de la
boucle 2 n'a retiré que quatre mots en fin de paragraphe. Le mappeur relancé sur ce texte
quasi identique a pourtant produit 67 claims au lieu de 64, avec un découpage différent, et c'est
ce découpage neuf qui a isolé `C060` — une fragilité que le tour précédent n'avait pas vue. Le
mapping **n'a pas été rejoué** pour en obtenir un plus favorable : le faire aurait été choisir son
verdict. La variabilité du découpage est donc à la fois un coût, puisqu'elle consomme une boucle
sur un texte inchangé, et un gain, puisqu'elle a trouvé un défaut réel.

## Décision

`rewrite_rejected_factcheck`. `corpus/deepenings/predominance-du-conflit-sur-la-negociation.json`
est restauré à sa version antérieure par `git restore --source=HEAD`. La revue indépendante n'a pas
été lancée : elle n'examine qu'une réécriture portant un `FACTCHECK_PASS` sur son SHA exact.

La réécriture perdue corrigeait de vrais défauts — les rubriques inventées, le doublet
prédominance / prééminence, environ 170 mots de redondance. **Elle reste disponible dans
l'historique** : son état exact est dans `work/`, et le chemin le moins cher pour un prochain
passage est de repartir de cette version en bornant `C060` sur les fiches, plutôt que de
reprendre l'audit à zéro.

Traces détaillées : `work/predominance-du-conflit-sur-la-negociation/`.
