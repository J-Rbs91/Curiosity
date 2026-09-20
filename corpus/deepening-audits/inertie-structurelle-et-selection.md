---
concept_id: inertie-structurelle-et-selection
deepening_sha256: 434ed9416efe6540f8db55981b6bc072437ca6d63d1c5dd08dc7b0e84c22876e
validated_sha256: 5c78d07db430e38b142508509fca7b69ba723a5b9b2d65e3b3b59d0be5b8b002
protocol_version: 3
audited_at: 2026-09-20T04:32:51Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# inertie-structurelle-et-selection

**Trois tours de gate, trois fois le même geste fautif, et le plafond de deux boucles atteint.**
La réécriture est restaurée. Ce rapport existe surtout pour dire ce que l'échec a mesuré, parce
qu'il mesure quelque chose de net.

## Audit

`REVISE`. Notes A–H : 3, 3, 1, 4, 2, 2, 2, 1. Quatre paragraphes sur dix-huit sans delta, une
section entière de rôle bibliographique, et la proposition centrale énoncée quatre fois.

**C'est le premier audit du dépôt conduit avec le dossier de preuve dans la liste de lecture de
l'agent**, et il atteint ce que trois audits v3 antérieurs ne pouvaient pas atteindre : la
définition propre de l'article de 1984 est relationnelle — l'inertie est forte quand la vitesse
de réorganisation est très inférieure au rythme de l'environnement — quand le texte publié la
présente comme une propriété absolue d'une structure.

## Fact-check, trois tours

| tour | claims | supportés | échecs |
|---|---|---|---|
| 1 | 67 | 63 | 4 `TOO_STRONG` |
| 2 | 61 | 60 | 1 `TOO_STRONG` |
| 3 | 66 | 64 | 2 `TOO_STRONG` |

**Les sept échecs sont de la même famille, et c'est le résultat de ce dossier.** Une modalité ou
un quantificateur de l'auteur disparaît à la traduction : « changes of some kinds » élargi à
« toutes sortes », « it is not obvious that » retourné en affirmation positive, « seems
unlikely » rendu par un présent catégorique, « may operate as much by transformation as
selection » devenu « échappe largement au mécanisme », « may favor » et « presumably competes »
donnés au présent assertif. Un huitième échec est d'une autre espèce et mérite d'être retenu :
le mot « sociologues », accolé aux deux auteurs, qu'aucun support n'établit.

**Aucun de ces défauts n'est visible sans le texte source.** Ils ne se détectent ni à la
relecture, ni par cohérence interne : le texte français est parfaitement plausible à chaque
fois. C'est l'argument le plus fort en faveur du dispositif, et il est produit par son échec
plutôt que par son succès.

## Pourquoi la restauration, et ce qu'elle ne répare pas

`FACTCHECK_PROTOCOL.md` autorise deux boucles de correction. Elles ont été employées. Le
troisième gate a fait apparaître deux nouveaux `TOO_STRONG` dans un paragraphe que les deux
tours précédents n'avaient pas signalé — non parce que le texte y avait empiré, mais parce que
le découpage en claims s'était affiné. Le plafond a donc été respecté et la réécriture retirée.

**La version restaurée n'est pas saine pour autant, et il faut l'écrire ici comme
`cinq-dimensions-de-l-emploi` l'a fait avant elle.** Elle porte les deux fragilités que l'audit
avait relevées et que la réécriture avait retirées : une définition recomposée de l'inertie
structurelle présentée comme celle des auteurs, et une « proportionnalité » entre résistance et
fiabilité acquise que rien n'autorise. Elle porte aussi les quatre paragraphes sans delta et la
section bibliographique. **Une carte rendue à son état antérieur après un rejet n'est pas une
carte validée une seconde fois.**

## Ce que la reprise demande

Le matériau existe et il est abondant — le dossier rend 516 supports. L'obstacle n'est pas
documentaire, il est de méthode : une réécriture de cette carte doit traiter chaque modalité du
texte source comme un élément à reporter, pas comme une précaution de style que le français
allégerait. La trajectoire cible de l'audit reste valable, et les deux paliers qu'elle propose
— hiérarchie noyau/périphérie, définition relative avec ses conditions d'inapplication — ont
passé le gate aux trois tours.

Artefacts détaillés : `corpus/deepening-audits/work/inertie-structurelle-et-selection/`.
