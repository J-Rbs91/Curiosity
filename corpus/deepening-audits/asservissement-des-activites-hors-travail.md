---
concept_id: asservissement-des-activites-hors-travail
deepening_sha256: 6fe7e16b673b617fe473926ef3a08b2d919fb3f9a7971d431a4cf398a4e0f8fb
validated_sha256: 7deffb48542088c64274dc679361f48d899cb4999feade81c7b323ce8c34ec79
protocol_version: 3
audited_at: 2026-09-18T04:00:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# asservissement-des-activites-hors-travail

Le texte affiché au lecteur est **inchangé** : il est celui de `HEAD`.

## Audit pédagogique — `REVISE`

Notes : fidélité 3 · progressivité 3 · densité 3 · clarté 4 · profondeur 3 · exemples 3 ·
limites 3 · ouverture 3.

Entrée sans jargon remarquable, 12 paragraphes sur 14 porteurs d'un delta propre. Trois défauts
relevés : le statut épistémique du texte source arrivait trop tard pour empêcher que deux
sections descriptives soient lues comme des résultats observés ; deux formulations dépassaient
le dossier ; et la section la plus riche en matière documentée était la plus mince, à l'état
d'énumération.

Détail dans `work/asservissement-des-activites-hors-travail/audit.md`.

## Pourquoi la réécriture est rejetée

Deux boucles de correction, le maximum autorisé.

| Cycle | Mots lecteur | Claims | `SUPPORTED` | Échecs |
|---|---|---|---|---|
| 1 | 1 611 | 79 | 51 | 28 — 18 `TOO_STRONG`, 8 `UNSUPPORTED`, 2 `SOURCE_NOT_CONSULTED` |
| 2 | 1 269 | 59 | 56 | 3 — 2 `TOO_STRONG`, 1 `SOURCE_NOT_CONSULTED` |
| 3 | 1 233 | 53 | 51 | 2 — 2 `TOO_STRONG` |

Le mouvement est sain — les claims baissent parce que des énoncés ont été supprimés, pas
requalifiés — mais il ne converge pas, et le plafond est atteint.

### Le défaut d'origine

Le cycle 1 a massé 28 échecs en `C044`-`C057`, c'est-à-dire exactement dans la section que
l'audit demandait de « déplier en trois paliers ». Les supports **désignent** la compensation,
les marges de tolérance et les deux erreurs d'attribution causale sans les **expliquer**. Sommé
d'approfondir, le réécrivain a fourni lui-même le mécanisme : coût, durée, quantité encaissée,
réserve qui se consomme, pouvoir explicatif du modèle.

La réécriture qui a le plus grossi du lot, +29 %, est celle qui a produit le plus
d'affirmations trop fortes. C'est l'invariant « longueur ≠ profondeur » vérifié plutôt
qu'affirmé.

### Le défaut qui a persisté

Les quatre échecs des cycles 2 et 3 relèvent tous d'une même habitude, et c'est elle qui motive
le rejet plutôt qu'une correction supplémentaire :

- `C039` (cycle 2) : « les marges de tolérance **dont cet ensemble dispose** » — porteur ajouté.
- `C029` (cycle 3) : « modelage psychique **de la personne par son métier** » — porteurs et
  mécanisme ajoutés à deux notions nues.
- `C034` (cycle 3) : « **leur** coût », rattaché aux compensations, là où le support énumère
  « coût » sans porteur.

Le texte attribue des possessions et des rattachements que les supports ne donnent pas. Chaque
remappage en découvre deux de plus, non parce que les corrections échouent, mais parce que la
granularité du découpage change et isole de nouvelles occurrences de la même habitude. Ce n'est
donc pas une liste d'erreurs à épuiser : c'est un pli d'écriture, qui demande une reprise et non
un troisième rapiéçage.

Les deux autres échecs du cycle 2 relevaient des deux motifs récurrents de la nuit, et ont été
correctement traités : une affirmation d'absence non couverte par le support, et une inférence
sur le contenu d'un article de 1975 tirée de son seul titre.

Le candidat à 51/53 est conservé sous
`work/asservissement-des-activites-hors-travail/candidate-rejected-factcheck.json`.

## Reprise

La carte reste `stale`. Une reprise devrait viser le pli lui-même : relire le texte en cherchant
tout possessif et tout rattachement, et vérifier un à un que le support le porte. Et la section
du second versant doit rester mince tant que les sources ne font que désigner ce qu'elle
voudrait expliquer — la déplier était une recommandation d'audit que la matière ne finance pas.
