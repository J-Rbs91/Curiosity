---
concept_id: cinq-dimensions-de-l-emploi
deepening_sha256: 7c000e18b1630c8f5f3bc43c926ab4c9316c5f5fb8f6aea6c0fe2f583364d8b9
validated_sha256: 9da7caea24b21cc3bec52f547028f82997050fe88b4c76c6146c4fe0fd859937
protocol_version: 3
audited_at: 2026-09-17T04:40:09Z
initial_verdict: REVISE
result: rewrite_rejected
factcheck_verdict: FACTCHECK_PASS
review_verdict: REJECT
---

# cinq-dimensions-de-l-emploi

Sélectionnée sur deux signaux cumulés : aucun répertoire `corpus/evidence/<id>/` et un taux de
reformulation élevé. **L'approfondissement en place est conservé.**

## Audit pédagogique

`REVISE`, 25/32. Trois signaux documentaires, dont une description de la Figure 1 que les `notes`
et la propre `limits[3]` du fichier interdisaient, et une divergence interne du dossier sur le
nombre de dimensions chez Hackman & Lawler 1971 — quatre selon `review`, six selon `notes`.

## Fact-check déterministe

Deux boucles, puis `FACTCHECK_PASS`.

| boucle | claims | SUPPORTED | échecs |
|---|---:|---:|---|
| 1 | 59 | 42 | 11 TOO_STRONG, 6 UNSUPPORTED |
| 2 | 47 | 44 | 3 TOO_STRONG |
| 2 (regate) | 43 | 43 | aucun |

Dix-sept échecs au premier tour, et deux causes en expliquent la plus grande part. **Le dossier ne
porte aucune définition citable des cinq dimensions** : rattacher un exemple à une dimension nommée
n'était donc pas autorisé, même prudemment formulé. Et **les supports s'arrêtent à « dimensions →
trois états »** : tout le maillon « états → résultats », sa négation comprise, sortait du texte.

## Revue indépendante

`REJECT`, sur le SHA exact du gate. Le rejet est pédagogique et ne conteste pas le `PASS`.

Le motif tient en une phrase : les coupes imposées ont emporté la colonne explicative. HEAD exposait
trois mécanismes et une condition d'application ; le candidat en gardait deux, sans contrepartie.
La chaîne s'arrêtait à « cinq dimensions créent trois états », sans que le lecteur apprenne jamais à
quoi le modèle sert, et la thèse du `lead` était remplacée par une question qui n'enseigne rien.
Total 22/32 → 20/32.

## Ce que cette carte laisse ouvert, et qui compte plus que le verdict

**La restauration ne vaut pas quitus.** La version rétablie porte les propositions que le gate a
refusées, dont une erreur conceptuelle relevée par la revue : la négation d'un effet direct
contredit la Figure 1 attestée par `review.notes[7]`, qui relie les Core Job Dimensions à des
Personal and Work Outcomes. La carte reste donc documentairement fragile dans le corpus, et son
rapport ici le dit plutôt que de le taire.

La reprise la moins chère n'est pas un nouvel audit : c'est une **acquisition**. Il manque au
dossier les définitions des cinq dimensions et le versant positif de la Figure 1. Les deux existent
dans le rapport, qui est `full-text`. Tant qu'ils n'y sont pas, toute réécriture rejouera la même
partie — un texte soutenu mais amputé, ou un texte complet mais refusé.

Traces détaillées : `work/cinq-dimensions-de-l-emploi/`.
