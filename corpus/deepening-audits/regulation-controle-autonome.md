---
concept_id: regulation-controle-autonome
deepening_sha256: fc44fd2c3476717a583504ab3ef2e4ec4e4cb771bfbc30430dce51286ba57968
validated_sha256: 9537c866db6938ad4a1f7c915c3d70b8b290489e447342744e230472ec14e90d
protocol_version: 3
audited_at: 2026-09-19T04:40:16Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# regulation-controle-autonome

**Cette carte portait un contresens, et il a fallu réparer l'instrument pour le voir.** Son
dossier — `evidence.primary-reading.json` et `evidence.reception.json`, 201 Ko, l'article de
Reynaud 1988 lu intégralement — était invisible au pack de preuve, qui ne ramassait que
`lecture.json`. Le pack rendait 51 supports là où il en rend 496 depuis `f7bf132`.

## Le contresens, et la pièce qui le tranche

Le texte publié présentait la régulation conjointe comme le produit de la rencontre des deux
régulations. **L'article dit le contraire, sous un intertitre imprimé p. 15-16 :** « On ne saurait
confondre cette régulation conjointe avec ce que nous avons appelé la régulation autonome : elle
est de manière bien caractérisée une régulation de contrôle, puisqu'elle vient de l'extérieur
donner des règles aux unités concrètes de travail. » Le produit de la rencontre porte un autre
nom, le compromis, p. 15 et p. 17.

**Le reviewer a vérifié cette pièce lui-même**, sur consigne explicite : si l'affirmation avait
été fausse, la réécriture aurait introduit une erreur au lieu d'en retirer une. Elle est exacte,
et le fragment de lecture primaire classait déjà cette lecture parmi les contresens connus.

Deux autres fautes tombent avec elle. Le rapport de pouvoir était fondé sur les zones
d'incertitude : l'expression a **zéro occurrence** dans l'article, et « incertitude » y paraît une
fois, à propos de Woodward. Et « la régulation autonome n'a, pour se faire respecter, que la
solidarité du groupe » est contredit par la p. 10, qui la dit enseignée aux nouveaux venus et en
partie imposée à qui voudrait s'en écarter.

## Audit

`REVISE`. Notes A–H : 2, 2, 2, 4, 3, 2, 3, 1. Trois paragraphes sur quatorze sans delta distinct
et trois ouvertures redondantes. L'auditeur avait repéré, sans pouvoir la trancher, une
incohérence d'accès : l'enregistrement validé marque l'article de 1979 `full-text` quand `limits`
le traitait comme accessible par sa seule notice. Le dossier tranche : il est bien `full-text`,
et `limits[2]` était faux.

## Fact-check

Une boucle sur les deux autorisées. Premier tour : 59 claims sur 61 `SUPPORTED`, deux
`TOO_STRONG`.

**Le premier mérite d'être retenu comme méthode.** C006 échoue contre `known_ambiguities[0]` du
fragment de lecture primaire, qui avertit en toutes lettres que lire la régulation comme
l'activité dont la règle est le produit, « c'est une lecture, le texte ne l'énonce pas ». **Le
dossier rendu visible n'apporte pas que des appuis : il apporte aussi les réserves que le lecteur
primaire avait posées**, et que l'instrument ne pouvait pas appliquer. Corrigé en marquant la
lecture comme lecture. Le second, C039, supprimait un modal : « peut créer des relations du même
type » (p. 11) était devenu « produit la même relation ».

Second tour : **66 claims, 66 `SUPPORTED`, `FACTCHECK_PASS`.**

## Revue

`ACCEPT`. SHA recalculé, identique au `candidate_sha256` du gate. Quinze paragraphes, quinze
deltas distincts. L'axe H passe de 1/4 à 4/4 : la clôture est désormais l'article de 1979, lu,
antérieur de neuf ans et dépourvu du couple contrôle/autonome — la racine « autonom- » y a zéro
occurrence.

Réserves consignées, non bloquantes : `limits` à 298 mots pour 5 paragraphes, au-delà des 100-200
mots et 2-4 paragraphes de `PROTOCOLE.md` §5 ; et deux verbatim exacts dans la lecture primaire
mais absents de l'enregistrement validé, ce qui déclenche un avertissement de `corpus:deepen
--check`. **Ce second point est un angle mort de même famille que celui du pack** : le contrôle
mécanique des citations ne compare qu'à `corpus/validated/`. Porté au chantier G.

Artefacts détaillés : `corpus/deepening-audits/work/regulation-controle-autonome/`.
