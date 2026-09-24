---
concept_id: modele-mondial-et-modes-de-comportement
deepening_sha256: 7c7c44ff6aa155f4eadd6026901f0ec224951198ae734ce056ccd00270dbf39e
validated_sha256: 91465da0cc5ceb55884e47696cab80206b8478ed909ac0ea5f4abf5b6f0a1dd8
protocol_version: 3
audited_at: 2026-09-23T04:26:13Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# modele-mondial-et-modes-de-comportement — audit du 23 septembre 2026

Carte tirée au hasard dans les 102 cartes non auditées portant un dossier de preuve.

**L'approfondissement en ligne est celui d'avant l'audit.** La réécriture a épuisé les deux
boucles de correction factuelle sans atteindre `FACTCHECK_PASS` ; elle est refusée et le fichier
est restauré par son SHA de blob relevé avant toute écriture (`94602a2b`), restauration vérifiée
au `sha256sum` et non supposée.

## La chaîne

| étape | résultat |
|---|---|
| audit pédagogique | `REVISE` |
| réécriture | contrôle mécanique `PASS`, 1 644 mots |
| gate, cycle 1 | `FACTCHECK_FAIL` — 65/68 |
| correction 1 | 3 claims |
| gate, cycle 2 | `FACTCHECK_FAIL` — 65/68 |
| correction 2 | 3 claims, dont deux retraits secs |
| gate, cycle 3 | `FACTCHECK_FAIL` — 58/64 |
| restauration | blob `94602a2b`, hash vérifié |
| review | non lancée |

## Pourquoi elle échoue, et ce que cela dit du dossier

**Les corrections successives ont bien fermé ce qu'on leur demandait de fermer.** Chaque boucle a
traité ses claims par retrait ou réduction de portée, sans ajout compensatoire, et le réécrivain a
vérifié après chaque passe que les claims soutenus restaient intacts caractère pour caractère.
Ce n'est pas une réécriture qui dérive.

**Ce qui échoue est ailleurs, et c'est une lacune du dossier, pas du texte.** Les claims fermés au
troisième tour portent presque tous sur la dynamique des systèmes *en général* : ce qu'est une
boucle, ce qu'est un modèle fait de circuits, la forme que prend une contestation valide, l'intérêt
de comparer des scénarios. Le dossier de la carte ne contient rien là-dessus. Il porte le livre de
1972 — ses passages verbatim, ses folios, sa réception — et le pack ne connaît de la méthode que
sa nomination page 31 et la mention d'une « feedback loop structure » page 121.

**Un texte qui explique ce concept a besoin d'expliquer ce qu'est une boucle. Le dossier ne le
permet pas.** Les deux illustrations génériques de circuit avaient été retirées sèchement à la
boucle 2, précisément pour cette raison ; le troisième mapper, en contexte frais, a découpé
autrement et a fait apparaître quatre autres endroits où le texte s'appuie sur la même matière
absente. Ce n'est donc pas un défaut local qu'une troisième correction refermerait : c'est la
couche documentaire qui manque.

**Deux durcissements restants sont d'un autre ordre et restent corrigibles** : « ce que les nombres
déplacent » là où le folio 121 énonce période, taux de croissance et date d'effondrement, et
l'attribution à chacun des douze scénarios du même assemblage de boucles, que le support n'établit
pas.

## Ce qu'une reprise devrait faire

Ne pas relancer une réécriture sur le même dossier : elle rencontrerait le même mur. **Le besoin
est une acquisition documentaire** — une source consultée qui expose la méthode elle-même, boucle,
circuit renforçant, circuit d'équilibrage — après quoi l'audit de cette carte redeviendra
praticable. Tant qu'elle manque, le concept ne peut être approfondi qu'en restant au ras du livre
de 1972, ce que fait la version restaurée.
