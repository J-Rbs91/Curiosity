---
concept_id: attente-du-poste-aval
deepening_sha256: e4185be14f3c35b3af953b1d61bbc82585f7ab237089a00c75d5bf417bcbcbf5
validated_sha256: b40e67521f9b8a6255086ab0383521dd07776f7634a87c96518bd84adb7760c5
protocol_version: 3
audited_at: 2026-09-17T04:25:01Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# attente-du-poste-aval

Sélectionnée sur deux signaux cumulés : aucun répertoire `corpus/evidence/<id>/`, et le taux de
reformulation le plus élevé du corpus mesuré sur les mots de contenu.

## Audit pédagogique

`REVISE`. Cinq paragraphes sans delta propre, progressivité 2/4 et densité 2/4. L'audit a
également signalé deux dérivations arithmétiques absentes des sources et demandé qu'elles soient
tranchées par la chaîne factuelle plutôt que par lui.

## Fact-check déterministe

Deux boucles.

| boucle | claims | SUPPORTED | échecs |
|---|---:|---:|---|
| 1 | 55 | 47 | 7 UNSUPPORTED, 1 SOURCE_NOT_CONSULTED |
| 2 | 49 | 49 | aucun |

Le gate a refusé exactement ce que l'audit avait mis en doute. La décomposition de l'attente
article par article ne tenait pas : le support d'arithmétique ne certifie que les totaux, et
**l'avoir déclarée dans `limits` ne l'autorisait pas**. Ont suivi deux mécanismes explicatifs
ajoutés au-delà de la preuve, une extension au-delà du cas à deux postes, et une attribution de
l'exemple chiffré à Bellman que le relevé de lecture déclare expressément non atteinte, le texte
intégral de Johnson 1954 restant inaccessible.

Sept `REMOVE` et un `NARROW`, sans aucune phrase de compensation.

## Revue indépendante

`ACCEPT`, sur le SHA exact du gate. Le texte lecteur **diminue** de 1 325 à 1 175 mots.

Le motif décisif de la revue mérite d'être conservé : la version précédente tirait une part de sa
profondeur apparente de trois énoncés que le vérificateur a classés `UNSUPPORTED`, c'est-à-dire de
connaissances générales sur le flow shop que le dossier n'appuie pas. La restaurer aurait racheté
du confort pédagogique au prix de ces trois énoncés. Le solde des mécanismes autorisés reste
positif : deux sortent, un entre — le temps de réglage, qui attaque la prémisse d'invariance
elle-même.

Réserve consignée pour un prochain passage, sans effet sur le verdict : S3.P2 est réduit à une
phrase de constat et la tension avec le « gain maximal » de S3.P1 n'est plus résolue.

Traces détaillées : `work/attente-du-poste-aval/`.
