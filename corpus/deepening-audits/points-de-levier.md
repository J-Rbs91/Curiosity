---
concept_id: points-de-levier
deepening_sha256: c0c7e1577e493ffc28c5477aa3de265cf05b3af3a6a39af111318c4c08011a28
validated_sha256: d5a90397ec6aa8710dcd79f51ff950cab72dd811ec9f99a6b08816308ef15db6
protocol_version: 3
audited_at: 2026-09-25T04:48:48Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# Ce que cet audit a établi, et pourquoi il se solde par un refus

**Carte sans dossier ramassable.** `corpus/evidence/points-de-levier/` n'existe pas. Toute la
matière vérifiable est dans l'enregistrement validé — `quotation`, `summary`, `hook`, `notes`,
`review` — et les trois déclarations de source sortent du pack en
`access_corroboration: dossier-absent`, donc sans pouvoir établir le contenu de l'œuvre. C'est le
chantier J de [`../RESTE-A-FAIRE.md`](../RESTE-A-FAIRE.md).

**Audit pédagogique : `REVISE`**, fidélité documentaire **1 sur 4**, aucun paragraphe sans delta,
deux groupes redondants. L'architecture tenait ; les affirmations non soutenues étaient le défaut.

## Les trois tours, et ce qu'ils ont retiré

| tour | claims | refusés | mots lecteur |
|---|---:|---:|---:|
| 1 | 49 | **14** — 7 `TOO_STRONG`, 6 `UNSUPPORTED`, 1 `SOURCE_NOT_CONSULTED` | 1 102 |
| 2 | 48 | **3** — 3 `TOO_STRONG`, tous des assertions de fréquence | 889 |
| 3 | 45 | **4** — 2 `TOO_STRONG`, 1 `UNSUPPORTED`, 1 `SOURCE_NOT_CONSULTED` | 860 |

Retiré au tour 1, faute d'appui : l'énumération des huit barreaux intermédiaires et leur ordre,
l'anecdote Forrester en attribution de chaîne, la loi générale sur les boucles, « l'essentiel du
débat public », la règle et le but inventés dans l'image de plomberie. Au tour 2 : trois assertions
de fréquence et une comparaison avec l'inaction. **260 mots sur 1 120 — 23 % — et aucun mot ajouté.**

## Les quatre claims qui restent, et ce qu'ils ont en commun

- `C007` — « chacun en connaît » : généralité sur ce que tout le monde sait, hors de portée de
  `notes[3]` et du résumé.
- `C035` — « une raison de s'en servir comme d'un instrument de lecture » : `notes[1]` n'établit que
  l'autorévision, et la révisabilité n'est pas une raison d'usage.
- `C036` — « pas une hiérarchie à appliquer » : assertion négative tirée du silence des appuis.
- `C042` — « elle se lit mieux là où elle a été écrite » : ne tient que par deux notices en
  `dossier-absent`, qui ne disent rien de la lecture de l'œuvre.

Trois des quatre sont des **jugements sur l'usage et le statut de l'échelle**, et le quatrième une
assertion sur sa lecture. Aucun n'est un fait sur le contenu du rapport. Ce que la carte ne peut pas
soutenir, à ce stade, n'est plus ce que Meadows dit — c'est ce qu'il faudrait en faire.

## Pourquoi le refus, et ce qu'il faut en penser

Plafond de deux boucles de correction atteint, troisième gate refusé. Le deepening a été restauré
**par son SHA de blob** `f65fd4c5ac23add4c725775add0841f530b6f270`, relevé avant toute écriture, et
la restauration vérifiée au `sha256sum`. Le candidat refusé est conservé sous
`work/points-de-levier/candidate-rejected-factcheck.json`.

**Et il faut écrire ce que cette restauration coûte, parce que le rapport serait malhonnête sans
cela.** Le texte restauré est celui dont le premier gate a refusé **14 claims sur 49**. Le candidat
mis de côté en refusait **4 sur 45**. La carte revient donc à l'état publié, qui est **mesurément le
plus faible des trois états traversés**, et elle y revient sur une règle dont l'intention est de ne
jamais publier un texte non vérifié — intention juste, appliquée ici à un texte qui ne l'était pas
davantage. Le plafond n'a pas protégé le lecteur ; il a rétabli une version plus fausse.

Ce n'est pas un motif pour outrepasser la règle : une réécriture non validée ne se publie pas, et
l'audit n'a pas autorité pour en décider. C'est un motif pour **reprendre cette carte avec un
dossier**, ce que le chantier J rend possible. Un tour de plus n'y aurait rien changé : les quatre
claims restants ne se bornent pas, ils demandent une lecture primaire que le dépôt n'a pas.

## Ce que ce cycle a rendu au dépôt, hors de cette carte

**Le chantier K.** Le claim map du troisième tour a rendu 63 claims dont vingt sans aucun
`support_id`, l'un d'eux soutenu par l'appui `$.hook` présent dans le pack. Remappé sans toucher au
texte, le même pack rend 45 claims dont zéro sans appui. La carte défectueuse est conservée sous
`work/points-de-levier/claim-map-incomplete-tour3.json`. **Le mapper est le seul maillon de la chaîne
que rien ne double**, et une de ses omissions est indiscernable, au gate, d'une absence de preuve.

**Un bornage insuffisant ne se distingue pas d'un bornage suffisant.** `C001` avait été borné au
tour 1 et a échoué de nouveau au tour 2 pour la même raison. Le vérificateur ne l'a pas crédité de
l'effort qui l'avait produit, et c'est ce qui a permis de le voir.

**Un `TOO_STRONG` dont l'excédent est toute la phrase se retire, il ne se borne pas.** Borné, `C030`
n'aurait laissé que l'aggravation déjà dite par un claim soutenu du même paragraphe : la correction
factuelle aurait satisfait le gate en fabriquant une redondance pédagogique. Les deux protocoles se
rejoignent là.
