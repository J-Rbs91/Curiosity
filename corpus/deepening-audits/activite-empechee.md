---
concept_id: activite-empechee
deepening_sha256: 0a016d07708794cb1124fa91210207476febac0cb965dfe72d59d5b5e3c4ee4a
validated_sha256: 7c5807f669dc68a69b97ec17a2f002f966d780369207ab63e862339241e98e62
protocol_version: 4
audited_at: 2026-11-10T05:00:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
remappings: 0
review_verdict: NOT_RUN
---

# activite-empechee — réécriture refusée au plafond de boucles (2e passage)

Le texte affiché au lecteur est **celui d'avant le passage**, restauré par son blob de référence
(`5ae6ebd7…`) et vérifié identique au hash relevé avant toute écriture (`0a016d07…`).

## Audit pédagogique (protocole v4) — `REVISE`

L'audit retrouve le défaut du passage de septembre : C011 (« le reste ») contredit les appuis, qui
posent le réalisé comme compris dans le réel (SUP-c98d6b242ef735ab, SUP-94d565db4258c7c6). S'y
ajoutent une énumération close contre une réserve explicite, une distinction « suspendue » /
« contrariée » prêtée à l'auteur sans définition, une section qui redit l'`attributionNote`, et deux
attributions erronées en S5. Détail : `work/activite-empechee/audit.md`.

## Les trois passages du gate

| tour | claims | verdict | refusé |
|---|---:|---|---|
| 1 | 44 | `FACTCHECK_FAIL` 42/44 | C005 (TOO_STRONG), C022 (UNSUPPORTED) |
| 2 | 39 | `FACTCHECK_FAIL` 38/39 | C010 (TOO_STRONG) |
| 3 | 38 | `FACTCHECK_FAIL` 37/38 | C036 (TOO_STRONG) |

Chaque correction a tenu : aucun refus n'est revenu d'un tour à l'autre, et aucune n'a ajouté de
matière (retraits seuls, 1 440 → 1 361 mots, `limits` compris). Mais un claim neuf a été refusé à
chaque tour, et les deux boucles autorisées sont épuisées. Le texte restauré est donc l'ancien,
qui contient la phrase C011 que l'audit et le gate de septembre tiennent pour contredite.

## Ce qu'il reste à faire, et qui est perdu

- C036 (« n'est pas la qualité d'un résultat, c'est sa santé ») : l'opposition santé / performance
  vient de la glose du lecteur primaire, non d'une phrase de l'auteur. À retirer ou à borner à la
  citation seule.
- La version réécrite après la boucle 2 (1 361 mots, 37/38 soutenus) est conservée hors dépôt
  pendant la session ; elle n'est pas publiée.
- **Le texte publié contient encore C011**, connu comme contredit par ses appuis. À la prochaine
  reprise, repartir de la trajectoire de l'audit et retirer C036 dès l'écriture.
- Aucune review : le protocole ne la prévoit qu'après `FACTCHECK_PASS`.
