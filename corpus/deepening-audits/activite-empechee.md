---
concept_id: activite-empechee
deepening_sha256: 0a016d07708794cb1124fa91210207476febac0cb965dfe72d59d5b5e3c4ee4a
validated_sha256: 7c5807f669dc68a69b97ec17a2f002f966d780369207ab63e862339241e98e62
protocol_version: 3
audited_at: 2026-09-30T05:30:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
remappings: 0
review_verdict: NOT_RUN
---

# activite-empechee — réécriture refusée, sur une phrase qu'elle n'avait pas écrite

Le texte affiché au lecteur est **celui d'avant le passage**, restauré par son blob de référence et
vérifié identique au hash relevé avant toute écriture.

## Le compte des trois passages du gate

| tour | claims | verdict | refusés |
|---|---:|---|---|
| 1 | 63 | `FACTCHECK_FAIL` 57/63 | C013, C029, C045, C061, C062, C063 |
| 2 | 60 | `FACTCHECK_FAIL` 59/60 | C059 |
| 3 | 65 | `FACTCHECK_FAIL` 64/65 | **C011** |

La trajectoire est celle d'une réparation qui marche : six refus, puis un, puis un. Les corrections
des deux tours ont toutes tenu. Aucun refus du tour 3 ne porte sur une phrase corrigée.

## Le fait qui compte : la carte tombe sur une phrase d'origine

`C011` ancre la phrase « Le reste, tout ce qui a été mobilisé sans laisser de trace équivalente, il
l'appelle le réel de l'activité. »

**Cette phrase est dans le texte d'origine, au mot près, et la réécriture n'y a pas touché.** Vérifié
sur le blob de référence.

Le verdict est `CONFLICT`, le plus sévère possible : les appuis ne sont pas silencieux, ils **disent
l'inverse**. Ils posent que le réalisé est compris dans le réel comme sa surface dans un volume, et non
retranché de lui — « n'a pas le monopole du réel de l'activité », « est aussi ce qui ne se fait pas ».
La phrase suivante du texte le dément d'ailleurs elle-même.

Ni le mapping du tour 1 ni celui du tour 2 ne l'avaient isolée en claim. Elle vivait dans le texte
publié depuis l'origine, invisible aux deux gates précédents comme à l'audit pédagogique.

## Ce que la restauration produit ici, et c'est un défaut du dispositif

La règle du plafond de boucles impose la restauration. Elle a été appliquée. Mais il faut dire
exactement ce qu'elle produit dans ce cas précis :

- la phrase jugée `CONFLICT` **est remise en place**, puisqu'elle appartient au texte d'origine ;
- les sept corrections des deux tours sont **perdues**, dont le `CONFLICT` du tour 1 sur la frontière
  avec la psychodynamique du travail, deux sur-attributions, une localisation fausse, une alternative
  exclusive et une fréquence de réception sans relevé ;
- le texte restauré redit l'`attributionNote` que la carte affiche déjà, garde son exemple qui
  réénumère le `lead`, et laisse l'enjeu centré sur la justesse d'analyse là où le dossier en fait un
  problème de santé.

**Le corpus est donc, sur cette carte, strictement moins bon après le passage qu'il ne l'aurait été si
la réécriture avait été conservée avec son seul défaut connu.** Le dispositif fail-closed suppose que
le texte d'origine est le refuge sûr ; ici l'origine porte la faute, et le refuge est le lieu du
défaut.

Ce n'est pas un argument pour outrepasser la règle, et elle n'a pas été outrepassée. C'est un cas que
le protocole ne distingue pas et qu'il gagnerait à distinguer : **quand le claim qui fait échouer le
dernier tour ancre un fragment que la réécriture n'a pas modifié, la restauration ne répare rien et
défait beaucoup.** La comparaison est mécanique et ne demande aucun jugement : il suffit de chercher le
`claim_text` dans le blob de référence.

## Suite

La carte reste `stale` par son `result`, elle sera resélectionnée. Deux choses l'attendent, et la
seconde ne dépend pas de la première :

1. retirer ou borner la phrase de `C011`, qui est un contresens documentaire **du texte publié**
   aujourd'hui, et non un accident de réécriture ;
2. reprendre les sept corrections de ce passage, qui sont au dossier dans
   `work/activite-empechee/factcheck-fixes.md` et n'ont pas à être retrouvées.
