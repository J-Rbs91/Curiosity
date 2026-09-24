---
concept_id: etat-de-controle-statistique
deepening_sha256: 523622cc2e77b92f75393041ac74c56404f9448a1d2903a964f1a2545d2c8080
validated_sha256: 1acd363c04e6b45566efbca0d17b77f6267805f8a47e1d94c7bcf70dbfe53750
protocol_version: 3
audited_at: 2026-09-23T04:26:13Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# etat-de-controle-statistique — audit du 23 septembre 2026

Carte tirée au hasard dans les 102 cartes non auditées portant un dossier de preuve.

## La chaîne

| étape | résultat |
|---|---|
| audit pédagogique | `REVISE` |
| réécriture | contrôle mécanique `PASS` |
| gate, cycle 1 | `FACTCHECK_FAIL` — 67/74 |
| correction 1 | 7 claims |
| gate, cycle 2 | `FACTCHECK_FAIL` — 74/75 |
| correction 2 | 1 claim, retrait sec |
| gate, cycle 3 | `FACTCHECK_PASS` — 66/66 |
| review indépendante | `ACCEPT` |

Le texte lecteur passe de 1 413 à 1 653 mots. Les deux boucles de correction autorisées ont été
employées, la seconde pour un seul claim.

## Ce que la réécriture a corrigé

L'audit relevait trois durcissements dans le texte d'origine, et ils ont été corrigés plutôt que
reformulés : une citation tronquée est rendue jusqu'à sa fin, une antériorité affirmée est retirée,
un nombre d'avantages cesse d'être spécifié au-delà de ce que la source donne. La progression a été
refaite — la définition de la page 6 remonte en section 1, la cause assignable est définie avant
d'être mobilisée.

## Ce que le gate a fermé

Sept claims au premier tour, un au second, aucune erreur structurelle sur les trois tours.

Deux durcissements : une relation de dérivation entre deux phrases que le support situe seulement
« plus haut sur la même page », et l'identification de cinq avantages énumérés page 34 aux
« economic advantages discussed in Part I », que rien ne rapproche. Quatre énoncés sans preuve
résolue, dont trois gloses interprétatives — la compatibilité de deux phrases de l'auteur, le rôle
d'étalon de la loi des grands nombres, l'étymologie d'« assignable ».

**Et un `SOURCE_NOT_CONSULTED`, qui mérite d'être noté pour lui-même.** Le claim présupposait ce que
devient la définition de 1931 dans l'ouvrage de 1939 — que le dossier déclare non ouvert. C'est
exactement le verdict que le chantier H décrit comme désarmé par un niveau d'accès surdéclaré. Ici
l'accès est déclaré juste, et le verdict se déclenche. **Le chantier H est donc bien un défaut de
déclaration, pas un défaut du verdict.**

Le dernier claim fermé n'avait aucune formulation affaiblie disponible : la seule mention de la
page 34 dans tout le dossier en donne le nombre et le caractère « tous de gestion », et la lecture
primaire signale que l'intervalle des folios 34 à 144 n'a pas été ouvert. D'où un retrait sec,
sans compensation.

## Un défaut dans le dossier de preuve lui-même

`corpus/evidence/etat-de-controle-statistique/lecture.json` écrit que l'ouvrage de 1939, « **où
Shewhart reprend et déplace cette définition** », n'a pas été ouvert. **La même phrase déclare la
source non consultée et affirme ce qu'elle contient.** C'est le type d'affirmation que tout le
dispositif existe pour interdire, et il est ici inscrit dans la preuve.

Le réécrivain l'a repéré et ne s'en est pas servi : il a corrigé le claim par retrait de la
présupposition plutôt que par appui sur cette incise. **Le défaut reste dans le dossier**, à
réparer en amont — soit en ouvrant l'ouvrage, soit en retirant l'incise.

## Réserves non bloquantes de la review

`limits` est à 232 mots pour une fourchette de 100 à 200 ; il est interne et n'apparaît pas au
lecteur. La section 2 tient en un paragraphe, ce que la trajectoire cible de l'audit autorisait
explicitement. Le volume lecteur augmente de 219 mots là où l'audit demandait un volume égal ou
inférieur : l'écart est chiffré dans le compte rendu de réécriture et imputé aux matières que
l'audit lui-même demandait d'exploiter.
