---
concept_id: precarite-des-trajectoires
deepening_sha256: e8132f75abb62351c42036d6e0fc6ea278a8efbc561b91357f44926428c42eee
validated_sha256: 50b7f69f95a801445abf565afdaa286679ee5d7cd21942545ea165de69245db2
protocol_version: 3
audited_at: 2026-09-23T04:26:13Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# precarite-des-trajectoires — audit du 23 septembre 2026

Carte tirée au hasard dans les 102 cartes non auditées portant un dossier de preuve, selon la
méthode que le dépôt s'est écrite le 21 septembre : une fois les dossiers épais épuisés,
l'épaisseur ne classe plus rien, et mesurer le taux de défaut réel vaut mieux qu'inventer un
troisième signal de sélection.

## La chaîne

| étape | résultat |
|---|---|
| audit pédagogique | `REVISE` |
| réécriture | contrôle mécanique `PASS` |
| gate, cycle 1 | `FACTCHECK_FAIL` — 55/59 |
| correction | 4 claims, retrait et bornage |
| gate, cycle 2 | `FACTCHECK_PASS` — 57/57 |
| review indépendante | `ACCEPT` |

Le texte lecteur passe de 1 178 à 1 606 mots. Une seule boucle de correction a suffi.

## Ce que le gate a fermé

Quatre claims, aucune erreur structurelle. Un durcissement — une propriété de la collecte
(« facile à recueillir ») ajoutée par le texte à ce que le support autorisait — et trois énoncés
qu'aucune preuve du dossier ne portait : une thèse épistémologique sur l'antériorité de la
réponse au traitement des données, un énoncé sur ce que vise et compte l'action publique, une
généralité sur le temps d'observation qui doublonnait par ailleurs un claim soutenu et concret.

Trois des quatre avaient été signalés comme dépourvus de support par le mapper, avant tout
verdict de vérité. Le dispositif a donc fermé deux fois au même endroit, ce qui est son objet.

La correction a retiré trois fois et borné une fois : l'énoncé sur l'action publique est passé au
conditionnel modal plutôt que d'être supprimé, la phrase qui l'enchaîne reprenant « la même
opération ». Aucune affirmation nouvelle n'a été introduite pour combler un retrait.

## Le point documentaire à réparer en amont

**Le dossier de preuve est plus ouvert que l'enregistrement validé, et c'est l'inverse exact du
chantier H.** `corpus/validated/precarite-des-trajectoires.json` déclare une lecture partielle —
`locator: "p. 87-93, ici p. 92"`, notes 4 et 6 annonçant que la troisième partie n'a pas été
ouverte — alors que `corpus/evidence/precarite-des-trajectoires/lecture.json` lève lui-même la
réserve et restitue les pages 94 à 97.

Le `limits` de l'approfondissement avait été écrit sur l'enregistrement seul : il interdisait au
texte une matière qui lui était ouverte. La réécriture a travaillé contre le dossier, comme
`PROTOCOLE.md` §3 et `FACTCHECK_PROTOCOL.md` §3 l'imposent.

**Le risque redouté ne s'est pas réalisé** : deux paragraphes de S4 s'appuient sur ces pages, et
le vérificateur n'a rendu aucun `CONFLICT` ni `SOURCE_NOT_CONSULTED` dessus. La divergence reste
entière dans l'enregistrement validé, que la couche approfondissement n'a pas le droit de
réparer. **C'est une réparation amont, à porter au chantier H comme son cas symétrique :** un
accès surdéclaré désarme le gate, un accès sous-déclaré ampute le texte.

## Réserve non bloquante de la review

`sections[3].paragraphs[3]` porte à l'indicatif « et c'est par les questionnaires qu'elle y est
entrée ». La dérivation est déclarée dans `limits[3]` et le gate la soutient ; elle mériterait
néanmoins la même marque que la condition qui la précède. Laissée telle quelle : la corriger
aurait invalidé un `FACTCHECK_PASS` obtenu pour un gain de forme.
