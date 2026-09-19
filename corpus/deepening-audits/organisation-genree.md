---
concept_id: organisation-genree
deepening_sha256: e76f77a8d8cf685a1d5051bc214c6e83b972f40879d1f65b0a559481b6cc3f2a
validated_sha256: 06b8fe115eecaec752d21a157fcb048cb04c71794c3f8e805fc2e4105497121d
protocol_version: 3
audited_at: 2026-09-19T04:34:47Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# organisation-genree

**Première carte à dossier réel menée jusqu'au bout de la chaîne v3.** Les neuf cartes auditées
avant elle n'avaient aucun répertoire de preuve ; celle-ci en a un de 184 Ko, et il était
invisible au pack jusqu'à cette session — `deepening-factcheck.mjs` ne ramassait que
`lecture.json`, quand ce dossier dépose sa lecture dans `evidence.primary-reading.json` et sa
réception dans `evidence.reception.json`. L'auditeur l'a relevé de lui-même avant que la mesure
ne le confirme. Correctif en `f7bf132` ; le pack passe de 51 à 562 supports.

## Audit

`REVISE`. Notes A–H : 2, 2, 1, 4, 2, 2, 2, 2. Cinq paragraphes sur quinze sans delta distinct, et
une séquence de trois deltas identiques — S4.P2, S5.P1, S5.P2 — qui interdisait le `PASS` à elle
seule. Trois fragilités documentaires signalées : une généralisation historique sans appui, des
débordements au-delà de ce qu'un accès `excerpt` autorise sur le texte de 2006, et l'attribution
d'un geste de forgeage terminologique que la seule citation n'établit pas.

## Réécriture et fact-check

Une boucle de correction sur les deux autorisées. Premier tour : 55 claims sur 62 `SUPPORTED`,
quatre `UNSUPPORTED` et trois `TOO_STRONG`.

**Les quatre `UNSUPPORTED` partagent un défaut de nature.** Un énoncé empirique général sur le
monde du travail réel — ce que « les offres d'emploi » demandent, ce que donnerait une enquête sur
les préjugés — n'est pas autorisé par un dossier qui porte l'analyse d'Acker, si vraisemblable
soit-il. Corrigés par retrait, ou par passage au régime explicitement hypothétique.

**Le septième est leur symétrique côté recherche.** « Aucune traduction française n'a été
identifiée » est un résultat de recherche négatif ; le texte en tirait qu'il faut aller lire
l'anglais. L'absence de preuve traitée comme preuve, dans l'autre sens.

Les deux `TOO_STRONG` restants tenaient à un modal supprimé — « would **probably** require the end
of organizations as they exist today » — et à une conséquence dérivée qui contredisait en partie
son propre support.

Second tour : **58 claims, 58 `SUPPORTED`, `FACTCHECK_PASS`.**

## Revue

`ACCEPT`. Le reviewer a recalculé le SHA du fichier examiné et l'a trouvé identique au
`candidate_sha256` du gate. Les trois défauts majeurs du diagnostic sont supprimés sans perte
documentaire : l'inversion personnes/poste, que l'ancien S2.P2 portait sans appui, survit sous
forme sourcée. La profondeur gagnée vient de mécanismes — congruence, coût de comptage, règle des
deux niveaux, disponibilité assimilée à l'aptitude à l'autorité — et non d'un allongement : le
texte lecteur passe de 1 121 à 1 408 mots après être monté à 1 506 avant correction.

Deux réserves consignées sous le seuil de `REJECT` : S5.P1 garde l'amorce d'un contraste dont le
premier terme a été retiré par la boucle de fact-check, et le titre de S5 couvre mal son second
paragraphe. À reprendre si la carte repasse.

Artefacts détaillés : `corpus/deepening-audits/work/organisation-genree/`.
