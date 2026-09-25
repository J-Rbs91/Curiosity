---
concept_id: systemographie
deepening_sha256: 0820456a83b8acaf1bd1f07380357109a1c98defababd1e5792a0fe3aab9b859
validated_sha256: 4468883168e73765a45b1142dcc6e1fb6869908f491ed522e928dd635787f382
protocol_version: 3
audited_at: 2026-09-25T05:02:51Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# Une idée qui a survécu à trois retraits, et c'est le résultat de ce cycle

**Carte sans dossier ramassable.** `corpus/evidence/systemographie/` n'existe pas. Son champ
`dossier` désigne `corpus/dossiers/systemographie.json`, un enregistrement de l'ancien format que le
pack de fact-check **ne ramasse pas** — chantier J de [`../RESTE-A-FAIRE.md`](../RESTE-A-FAIRE.md).
Ses cinq déclarations de source sortent donc toutes en `access_corroboration: dossier-absent`, et la
matière vérifiable est l'enregistrement validé seul.

**Audit pédagogique : `REVISE`**, fidélité documentaire 3 sur 4, progressivité 4, trois groupes
redondants, un paragraphe sans delta, exemples à 2 sur 4. Toutes les citations du texte lecteur sont
verbatim dans l'enregistrement validé : le dossier archivé n'était pas porteur pour le gate.

## Les trois tours

| tour | claims | refusés | mots lecteur |
|---|---:|---:|---:|
| 1 | 63 | 5 | 1 490 |
| 2 | 74 | 1 | 1 417 |
| 3 | 83 | **1** | 1 405 |

Le découpage s'est resserré à chaque tour sur un texte qui raccourcissait. C'est le bon sens de
variation : plus de claims sur moins de texte signifie que la granularité attrape ce que les passes
plus grossières repliaient.

## L'idée qui n'a pas voulu mourir

**Les sept claims refusés des trois tours portent, pour six d'entre eux, la même proposition** : que
l'une des deux exigences de vérification serait plus lâche, ou moins demandeuse, que l'autre. Aucun
appui ne l'établit, et `review.notes[11]` la contrarie — l'homomorphie y est « difficile et a priori
jamais parfaitement validée ».

Elle est réapparue **trois fois, chaque fois sous une forme plus discrète que la précédente** :

1. **tour 1, par un comparatif explicite** — « la plus lâche », « demande moins ». Retirés.
2. **tour 2, par une caractérisation appariée sans comparatif** — « de la rigueur envers l'hôpital, de
   la souplesse envers nos constructions ». Elle avait échappé au premier retrait **parce qu'aucun
   claim ne la portait** : le gate ne l'avait jamais nommée. Retirée.
3. **tour 3, sans un seul mot de comparaison**, par une pure asymétrie de traitement. Le motif du
   gate est le passage le plus instructif de tout ce cycle :

   > Le « donc » traite ainsi la seconde exigence comme satisfaite par une condition légère là où la
   > première reçoit un balayage explicite, c'est-à-dire qu'il classe les deux exigences en force par
   > une asymétrie de traitement que les appuis n'établissent pas.

**Ce que cela établit dépasse cette carte.** Une affirmation non soutenue ne vit pas dans les mots qui
la disent : elle vit dans la structure du texte, et elle se reconstitue à partir d'un connecteur et
d'un déséquilibre de traitement entre deux objets. Un cycle de correction répare des claims ; il ne
supprime pas une idée. Et un claim map qui ne découpe que ce que le gate a déjà nommé ne la trouvera
jamais — c'est le remappage fin du tour 3, qui a mappé séparément **toutes** les qualifications de
force résiduelles, qui a exposé celle-ci au verdict.

Le septième refus est indépendant : `C052`, au tour 1, définissait l'analyse cartésienne alors que
`notes[8]` n'en définit rien. Il portait déjà un `MARK_AS_INTERPRETATION` — son amorce « On peut
comprendre le reproche ainsi : » — et **cela n'a rien sauvé** : marquer une interprétation ne crée pas
l'appui qui lui manque. C'est une limite de ce geste, établie sur pièce.

## Pourquoi le refus

Plafond de deux boucles atteint, troisième gate refusé à **82 claims sur 83**. Le deepening a été
restauré **par son SHA de blob** `27facfae9ee54c7885f4dff25de5f98364b6e671`, relevé avant toute
écriture, et la restauration vérifiée au `sha256sum`. Le candidat refusé est conservé sous
`work/systemographie/candidate-rejected-factcheck.json`.

**Ce que la restauration coûte, sans le surestimer.** Le texte restauré n'a jamais été soumis à un
gate : les trois gates ont jugé des réécritures. Son nombre d'affirmations non soutenues est donc
inconnu. Ce qu'on sait est que la passe 1 y a retiré, faute d'appui, la définition de l'homomorphie,
une substitution de question prêtée à l'auteur, et la définition de l'analyse cartésienne — **et que
ces trois affirmations sont de retour dans le texte servi au lecteur**, en compagnie du comparatif de
force sous sa forme d'origine. Le candidat écarté, lui, n'en portait plus qu'une, et on sait laquelle.

Un tour de plus aurait très probablement suffi ici — un seul claim, un seul « donc » à défaire. C'est
le cas le plus net du lot pour rouvrir la question du plafond, et il ne se tranche pas dans un rapport
de carte.

## Ce que ce cycle laisse d'exploitable

`limits[4]` de la version refusée porte une phrase qui **interdit à tout agent ultérieur de classer
les deux exigences en force, dans les deux sens, y compris sous les formules qui le diraient sans les
mots**. Elle est dans le candidat conservé, pas dans le texte restauré. Une reprise gagnerait à la
reporter d'abord : c'est la seule parade qui ait tenu contre une idée revenue trois fois.
