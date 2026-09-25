---
concept_id: trois-sigmas-arbitrage-de-cout
deepening_sha256: 2d63e9e9a90137c5f26397c4f8a3392405353023ce3138b85365b47b69243010
validated_sha256: 12275158639dd3bcbeb8f4b52e3b47defe8249cdd69fde978a86119b9738ac72
protocol_version: 3
audited_at: 2026-09-25T05:08:13Z
initial_verdict: REVISE
result: rewrite_rejected
factcheck_verdict: FACTCHECK_PASS
review_verdict: REJECT
---

# Le seul `FACTCHECK_PASS` du lot, refusé par la revue pédagogique

**Carte sans dossier ramassable.** `corpus/evidence/trois-sigmas-arbitrage-de-cout/` n'existe pas ;
les deux déclarations de source sortent en `access_corroboration: dossier-absent`, la seconde étant
de surcroît `metadata-only`. Chantier J de [`../RESTE-A-FAIRE.md`](../RESTE-A-FAIRE.md).

**Audit pédagogique : `REVISE`**, fidélité documentaire 3 sur 4, clarté 4, profondeur 4, limites 4.
Quatre groupes redondants, un paragraphe sans delta, une même conclusion servie trois fois. Le défaut
était de redondance, pas de source, et l'audit avait vérifié que toutes les grandeurs affichées sont
portées par la matière.

## Le cycle complet

| tour | claims | refusés | mots lecteur |
|---|---:|---:|---:|
| 1 | 68 | 11 — 8 `TOO_STRONG`, 2 `UNSUPPORTED`, 1 `CONFLICT` | 1 217 |
| 2 | 73 | 8 `TOO_STRONG` | 1 134 |
| 3 | 59 | **0** — `FACTCHECK_PASS` | 1 073 |

**Deux acquis documentaires réels, et ils survivent au refus.**

Le `CONFLICT` du tour 1 portait sur le verbatim d'une fonction, dont deux appuis donnaient des lettres
différentes — `f(θ, n)` contre `fθ(θ, n)`, ce dernier venant d'une note qui déclare lire sur l'image.
Il a été **résolu par réduction et non par choix** : la citation est ramenée au seul fragment sur
lequel les deux appuis s'accordent mot pour mot, « in sufficient detail to set up such limits », et la
fonction n'est plus nommée. Arbitrer entre deux appuis divergents n'est aucun des cinq gestes
autorisés.

Cinq des huit refus du tour 2 tenaient à l'identification de `t = 3` à « trois sigmas », qu'aucun
appui n'autorise : **sigma n'est défini nulle part dans la matière disponible.** Le texte a cessé
partout l'identification sans jamais la nier, et le mot a disparu du texte lecteur d'une carte qui en
porte le nom.

## Pourquoi la revue a refusé, et elle a raison de l'avoir fait

Le reviewer a recalculé le SHA-256 lui-même, constaté l'égalité avec le `candidate_sha256` du gate, et
refusé sur la pédagogie seule sans rouvrir le gate. Trois motifs.

**1. La redondance est déplacée, pas résolue.** `S4.P3` est bien supprimé, mais `S2.P3` — que l'audit
initial notait « delta fort » pour sa distinction entre deux régimes de justification — est devenu un
paragraphe sans delta. Deux redondances neuves sont apparues. Et le groupe que l'audit citait en
premier est **aggravé** : `lead[0]`, que l'audit demandait de conserver tel quel, a été vidé de sa
scène d'atelier et se superpose désormais à la glose de `S1.P1`, si bien que quatre paragraphes
consécutifs servent la même proposition. La séquence de trois paragraphes au delta identique, que §4
interdit à l'`ACCEPT`, subsiste donc.

**2. Cinq axes sur huit reculent** — B, C, D, E, F — contre deux qui progressent, A de 3 à 4 et H de 3
à 4. Le retrait a été fait sans compensation là où il emportait un mécanisme : `P` n'est plus qu'« une
probabilité associée aux limites », si bien que « une seule commande, deux effets contraires » affirme
une commande que le lecteur ne peut plus identifier.

**3. Le retrait de l'identification est honnête mais il laisse le lecteur devant une porte fermée.**
Le reviewer accorde que le geste est correct, qu'aucun renversement n'est écrit, que la perte est
tracée en `limits[4]`, et que le concept n'est pas vidé — l'arbitrage de coût et la base empirique
passent entièrement. Mais il relève ceci, qui est l'observation la plus fine de tout le lot :

> le lecteur ne peut faire l'identification que par le titre, seul endroit que le fact-check ne
> contrôle pas.

Le titre de la carte et son `hook` validé demandent « sur quoi repose le choix de trois sigmas », et
le texte ne relie plus jamais `t` à une largeur ni à une unité. **Le gate contrôle `lead` et
`sections` ; il ne contrôle ni le titre ni le hook.** Un texte peut donc passer le fact-check en
retirant ce que son propre titre promet, et le déséquilibre n'apparaît nulle part dans les artefacts
du cycle. Dommage collatéral relevé par le reviewer : le 0,27 % ayant perdu son ancrage de seuil,
`S5.P2` demande au lecteur de croire sur parole la coïncidence qui fait tout l'intérêt de la section.

## Restauration

`REJECT` restaure la version antérieure. Fait **par le SHA de blob**
`aacc982e9fa6cf1b77578d334045d367c94fcd11`, relevé à l'étape 2 avant toute écriture, et vérifié au
`sha256sum` — jamais par `git restore --source=HEAD`, qui aurait été un no-op silencieux dans un lot
qui a commité une quarantaine d'états intermédiaires. Le candidat refusé, qui porte un
`FACTCHECK_PASS` valide, est conservé sous `work/trois-sigmas-arbitrage-de-cout/candidate-rejected-review.json`.

**Le reviewer signale que la restauration telle quelle n'est pas le bon geste pour la suite**, et il a
raison : la base porte précisément les affirmations que les trois gates ont refusées. Ce qu'il
recommande est un nouveau diagnostic conservant les acquis du cycle — `S3.P3` avec la citation de
Shewhart et sa traduction validée, la suppression de `S4.P3`, les italiques à un seul endroit, `S3.P2`
refondu, `S5.P4` sur le mémorandum du 16 mai 1924. Le protocole ne prévoit pas ce chemin ; il mérite
d'être ouvert, et pas dans un rapport de carte.

## Deux défauts de traçabilité, relevés par la revue

1. **`rewrite.md` a vieilli contre son propre texte.** Sa table de deltas décrit encore un `S2.P3`, un
   `S3.P1` et un `S1.P3` qui n'existent plus dans le fichier soumis : les deux boucles de correction
   ont modifié le texte sans que le compte rendu de réécriture soit repris. Un reviewer qui s'y
   fierait raisonnerait sur une structure disparue.
2. **L'assertion « aucun paragraphe consécutif ne partage son delta » n'a jamais été re-testée sur
   l'état final.** Elle valait pour la version de la passe 1 ; les corrections factuelles l'ont
   invalidée sans que rien ne le signale. C'est exactement le défaut que la revue a trouvé au motif 1.

Les deux disent la même chose : **un artefact de réécriture n'est valide que pour le SHA sur lequel il
a été écrit**, et le protocole horodate les packs et les gates mais pas les comptes rendus.
