---
concept_id: objectif-specifique-et-difficile
deepening_sha256: 4db20c49b11e479fc3ceec0edb49aad7aecb5f1ee13d11ddba98c26a9309929e
validated_sha256: 861edc852a062e7d91823712523a77514c62123839d1760b2a677b2cf747387f
protocol_version: 3
audited_at: 2026-09-16T04:37:28Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# objectif-specifique-et-difficile

Première carte du corpus passée sous le protocole d'audit v3. Sélectionnée parce qu'elle
cumulait les trois signaux de faiblesse documentaire : aucun répertoire
`corpus/evidence/<id>/`, une seule source primaire sur la carte, et le texte lecteur le plus
long du corpus sans dossier de preuve (1 501 mots).

## Audit pédagogique

`REVISE`. L'architecture S1 à S4 a été jugée saine, la montée réelle et les verbatim bien
exploités. Trois défauts nommés : un paragraphe sans delta et un redondant en S5, une
description inventée du protocole des 110 études dans `lead[1]`, et une section finale qui
retombait en collation bibliographique au lieu d'ouvrir.

## Fact-check déterministe

Deux boucles, comme le protocole l'autorise au maximum.

| boucle | claims | SUPPORTED | échecs |
|---|---:|---:|---|
| 1 | 54 | 47 | 4 TOO_STRONG, 2 SOURCE_NOT_CONSULTED, 1 CONFLICT |
| 2 | 48 | 48 | aucun |

Les trois échecs les plus coûteux venaient de la clôture ajoutée par la révision elle-même :
elle présentait comme lus l'article de 1981 et l'ouvrage de 1990, que `notes[6]` déclare
expressément non ouverts, et situait la conclusion citée après « les quatre-vingt-dix pages qui
la précèdent » alors qu'elle est p. 59 d'un texte folioté 1 à 90. La correction a préféré
l'ouverture absente à l'ouverture fondée sur un texte jamais ouvert.

## Revue indépendante

`ACCEPT`, sur le SHA exact du gate. Le texte lecteur **diminue** de 1 501 à 1 469 mots tout en
gagnant trois apports documentés : le terme battu nommé (« objectif spécifique facile »), la
distinction des deux chiffrages p. 18 et p. 59, et l'argument grammatical de l'Abstract. Aucune
augmentation de longueur à justifier.

Réserves consignées pour un prochain passage, sans effet sur le verdict : `limits` atteint
220 mots pour une borne indicative de 100 à 200 ; S3.P2 est tombé à deux phrases ; il manque un
exemple pour le cas de l'objectif modéré.

Traces détaillées : `work/objectif-specifique-et-difficile/`.
