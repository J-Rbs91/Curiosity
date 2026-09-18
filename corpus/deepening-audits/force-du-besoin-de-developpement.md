---
concept_id: force-du-besoin-de-developpement
deepening_sha256: e673d8da6dbc7ae6ea62c0eacf44d1f099957aaf90c2b001e163cde4ae66f838
validated_sha256: 1ea2067668631f3659c02873c6474cc183bd851cf0bf2559e15277224fd97c6b
protocol_version: 3
audited_at: 2026-09-18T04:00:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# force-du-besoin-de-developpement

Le texte affiché au lecteur est **inchangé** : il est celui de `HEAD`. Les hashes ci-dessus
sont ceux de la version restaurée.

## Audit pédagogique — `REVISE`

Notes : fidélité 3 · progressivité 3 · densité 2 · clarté 3 · profondeur 3 · exemples 3 ·
limites 4 · ouverture 2.

Arc pédagogique sain et discipline documentaire réelle sur le modal et le sujet grammatical
de la phrase citée. Deux défauts : la redondance d'un seul motif, le couple chiffre/vécu,
étalé sur quatre paragraphes, et l'objet du titre — la *force* du besoin comme degré — jamais
défini alors qu'une section en a besoin pour passer du binaire à l'intensité.

Détail dans `work/force-du-besoin-de-developpement/audit.md`.

## Pourquoi la réécriture est rejetée

Deux boucles de correction factuelle ont été engagées, le maximum que le protocole autorise.

| Cycle | Claims | `SUPPORTED` | Échecs |
|---|---|---|---|
| 1 | 55 | 47 | 8 — 6 `UNSUPPORTED`, 2 `TOO_STRONG` |
| 2 | 53 | 52 | 1 — `TOO_STRONG` |
| 3 | 56 | 54 | 2 — `TOO_STRONG` |

La trajectoire n'est pas monotone, et c'est le motif du rejet.

La boucle 1 a retiré de vrais défauts : une définition générique du modérateur sans appui, une
gradation ajoutée à un simple statut de figure, une prescription pratique absente des supports,
deux raisonnements statistiques non adossés, un scénario de tri hypothétique, et une
affirmation d'absence qui reposait sur une citation comportant une ellipse.

La boucle 2 a corrigé le dernier échec, une antériorité terminologique énoncée comme un fait de
lecture d'un article jamais ouvert. Le remplacement était borné et formulé du côté du lecteur.
Mais il a introduit un mot neuf : « Ces deux **articles** plus anciens », alors que les supports
n'attestent que « earlier work » et « travaux antérieurs », jamais le genre documentaire de ces
deux pièces non ouvertes. C'est `C047`.

Le second échec du cycle 3, `C050`, porte sur une phrase que la boucle 2 avait délibérément
conservée mot pour mot et qui était `SUPPORTED` au cycle 2. Son texte est rigoureusement
identique. Ce qui a changé est le jeu de supports que le mappeur lui a attaché : un au cycle 2,
deux au cycle 3, et le support ajouté introduit le contenu des travaux antérieurs non lus, ce
qui fait basculer le claim en `TOO_STRONG`.

Aucune troisième boucle n'a été ouverte. Le plafond à deux boucles est ce qui empêche d'ajuster
un texte jusqu'à ce qu'il passe au lieu de le rendre exact ; le suspendre parce qu'il devient
coûteux le supprimerait.

La version candidate est conservée sous
`work/force-du-besoin-de-developpement/candidate-rejected-factcheck.json`. Elle n'est pas
publiable en l'état, mais elle documente un texte à 54 claims soutenus sur 56, et les deux
corrections qui lui manquent sont connues et petites.

## Ce que cette carte apprend sur le dispositif

1. **Le choix des supports décide du verdict et n'est revu par personne.** Même texte, même
   registre de supports disponibles, deux attachements différents, deux verdicts opposés.
   Attacher *un support de plus* a fait échouer le claim, parce que le support ajouté entraînait
   avec lui le contenu d'un texte non lu.

2. **Une correction minimale est un moment de risque.** Réparer un énoncé trop fort a introduit
   une qualification neuve — un genre documentaire — que personne n'avait demandée et que les
   supports ne portaient pas. Le mappeur suivant l'a isolée et signalée plutôt que de la
   protéger, ce qui est exactement le comportement attendu de la séparation des rôles.

3. **Les titres de section échappent au contrôle.** La suppression de la boucle 2 a rendu faux
   le titre « Un attendu, un nom plus ancien, un test ailleurs », qui promettait un nom que la
   section ne livrait plus. Le réécrivain l'a corrigé de lui-même ; aucun gate ne l'aurait vu,
   car `readerParagraphs()` ne construit de locators que pour `lead[i]` et
   `sections[i].paragraphs[j]`, tandis que `DeepeningDetail.tsx:99` affiche le titre au lecteur.

## Reprise

La carte reste `stale` et sera resélectionnée. Une reprise utile ne repart pas de zéro : elle
part du candidat conservé, corrige `C047` en retirant la qualification de genre, et tranche
`C050` en bornant le partage de paternité à ce que le seul support de contrôle autorise.
