---
concept_id: signification-et-invariance
deepening_sha256: ef57468d0942517b7c052f5422775a35c492764fb31aa6e9dd4fab2b8d4d45ef
validated_sha256: 5d79b8693af0a1c21fb2622cbcb9d760da4f055882c77cff4e672bf466c760b0
protocol_version: 3
audited_at: 2026-09-19T04:44:52Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# signification-et-invariance

Carte retenue pour le plus fort taux de reformulation du corpus mesuré paragraphe à paragraphe.
Son dossier est mince — 12 Ko, une source `full-text` — et il était déjà visible du pack : elle
sert ici de témoin face aux deux cartes à dossier épais du même lot.

## Audit

`REVISE`. Notes A–H : 3, 3, 2, 3, 2, 2, 3, 1. Un paragraphe entier redondant, S5.P2 rejouant
S2.P2, et trois demi-paragraphes qui reposaient une question déjà posée. Cinq fragilités
documentaires signalées, toutes de portée : la nationalité des auteurs que le dossier n'établit
pas, une unicité de transformation absente de la source, l'attribution aux auteurs d'une
définition de l'admissibilité dont le dossier ne porte que l'emploi, une généralisation tirée
d'un couple unique, et une extension à des grandeurs non listées.

## Fact-check — les deux boucles consommées

**Boucle 1**, 54 claims sur 55 : C016 `TOO_STRONG`. La prudence de la phrase précédente
(« rien ne dit que ») devenait une assertion catégorique, et le silence des sources y valait
preuve d'inexistence.

**Boucle 2**, 57 sur 58 : C030 `TOO_STRONG`. Une propriété de tout passage d'échelle — la
préservation de l'ordre — énoncée au présent général à partir du seul exemple
Fahrenheit/Celsius.

**Le remapping n'est pas neutre, et c'est le fait de méthode du lot.** Après une correction qui
ne touchait qu'une phrase, le mappeur relancé a rendu 58 claims au lieu de 55, avec un découpage
différent, et c'est ce découpage neuf qui a isolé un défaut situé ailleurs. La PR #111 avait
relevé la même variabilité ; elle se confirme ici sur un texte quasi inchangé. Le mapping n'a
jamais été rejoué pour en obtenir un plus favorable.

Troisième tour : **58 claims, 58 `SUPPORTED`, `FACTCHECK_PASS`.**

## Revue

`ACCEPT`. Le reviewer a d'abord recalculé le SHA pour s'assurer que le `PASS` portait sur le
texte courant et non sur l'un des deux états invalidés par les boucles.

**La question posée était sévère** : deux défauts de même famille à deux endroits distincts
peuvent signaler un texte qui tire structurellement plus que ses sources ne donnent. Le reviewer
a relu pour ce seul motif toutes les autres assertions générales ou tirées d'un silence du texte
courant, et n'a pas trouvé de troisième occurrence : chacune est attribuée aux auteurs, bornée à
l'exemple, ou phrasée comme silence assumé. Les deux `TOO_STRONG` portaient sur les seuls
passages où la rédaction fabriquait une explication là où le rapport ne donne que des nombres.

**Sur la longueur.** Le texte lecteur passe de 1 190 à 1 539 mots. L'ancienne version était
**sous** la fourchette de `PROTOCOLE.md` ; la nouvelle est dedans. Les 349 mots ajoutés se
décomposent en quatre postes à delta neuf — la distinction entre « a un sens », « significatif »
et « compréhensible », le mécanisme du contraste moyennes/rapport, la règle générale des auteurs
avec la polémique Weitzenhoffer-Guilford, et la sortie — contre environ 200 mots sans delta
retirés. L'extension corrige un sous-volume, elle ne le crée pas.

Réserve consignée, non bloquante : S3.P2 ouvre et ferme plus largement que son chaînon central,
borné à un cas par la boucle 2. Un cadrage plus large que son contenu, pas une assertion trop
forte.

Artefacts détaillés : `corpus/deepening-audits/work/signification-et-invariance/`.
