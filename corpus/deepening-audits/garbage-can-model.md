---
concept_id: garbage-can-model
deepening_sha256: cb685513886b345c93186b60c295999bcc5da5c708cef1a86e2cca455700aebb
validated_sha256: 712ee707cb3398d002182c945873b039268b9d42be50f8b4692f16802cffa1a6
protocol_version: 3
audited_at: 2026-09-21T04:52:11Z
initial_verdict: REWRITE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# garbage-can-model

**Le texte publié était à la fois court et répétitif** — 1 202 mots lecteur, densité notée 1/4,
quatre paragraphes sur onze sans delta propre dont trois consécutifs au delta identique. Il
portait en outre une contradiction interne : une panne survenait pendant la réunion dans une
section, et il n'y avait pas de problème de messagerie ce jour-là dans la suivante. Le lecteur ne
pouvait pas savoir si l'exemple comportait un problème.

Verdict initial `REWRITE`, le plus lourd du lot.

## Le défaut documentaire que seul le dossier pouvait trancher

L'audit a trouvé une chose qu'aucun contrôle sans dossier n'aurait vue : le texte faisait de
l'anarchie organisée une **condition nécessaire** du mécanisme, alors que le dossier avertit deux
fois que ce lien est précisément ce qui est en litige — `known_ambiguities` de la lecture primaire
(« l'anarchie organisée est le CADRE… la poubelle est le MÉCANISME », et ce que l'article de 1972
fait exactement de chacune n'a pas pu être établi), puis la réception et Musselin 1997.

Et `limits[3]` **déclarait absente une couche critique que le dossier porte et que personne n'avait
employée.** C'est le cas le plus instructif du lot sur la frontière interne : une limite fausse est
plus dangereuse qu'une limite absente, parce qu'elle dit au réécrivain qu'il n'y a rien à chercher.
Elle a été remplacée par l'état d'accès réel, source par source.

## Les quatre échecs du gate, et ce qu'ils ont appris sur le mapping

Le gate a refusé deux claims au premier tour, deux autres au second, aucun au troisième.

Premier tour :

- **La poubelle elle-même.** L'image de l'occasion de choix comme réceptacle où les participants
  déversent problèmes et solutions n'est établie par aucun support résolu. Elle vient de l'article
  de 1972, `metadata-only` dans ce dossier. **La célébrité d'une image n'est pas une preuve de son
  contenu** : c'est ce que tout le monde croit savoir de ce modèle, et le dispositif l'a refusé.
  La phrase est ramenée à ce que porte le texte de 2012 — un simile commode pour des combinaisons
  bizarres d'enjeux.
- **Un pointeur de tiers non vérifié** portant une généralité empirique dont l'intermédiaire et
  l'incertitude avaient été supprimés. Retiré : atténuer un pointeur que la fiche de lecture
  déclare non vérifié ne le rend pas utilisable. La scène du lead s'annonce désormais pour ce
  qu'elle est, inventée.

**Le second tour est le fait de méthode à retenir de cette carte.** Ses deux échecs portaient sur
des passages que le premier tour laissait passer, et le texte n'avait pas été durci entre-temps :
il avait perdu neuf mots. **C'est le découpage qui avait changé.** Le second mapping a séparé des
propositions que le premier tenait ensemble, et deux gloses qui voyageaient à l'abri d'une phrase
d'appui se sont retrouvées jugées seules :

- « ce qui relie un problème à une solution **est** leur coprésence », quand les auteurs écrivent
  « linked *partly* by their simultaneous arrivals ». Borné par deux mots. Le bornage a révélé un
  écart interne au texte : une autre section rendait déjà le « partly », et son claim passait.
- une glose « sans que le problème ait été traité » ajoutée **à l'intérieur d'un résumé attribué**,
  là où les supports disent seulement que la plupart des décisions se font « by oversight » sans
  qu'aucun ne définisse le mot. Non résolu n'est pas non traité. Retirée.

**Conséquence générale : un mapping plus fin trouve plus, donc un `FACTCHECK_PASS` obtenu sur un
découpage grossier ne vaut que ce que vaut ce découpage.** Le troisième mapping a durci la règle de
lui-même, en écartant une classe de supports que les deux premiers acceptaient : les champs
scalaires qui ne portent qu'un terme — un `term_source`, un `kind`, un `level` — et non un énoncé
de contenu. **Un libellé n'est pas une preuve**, et le pack en contient beaucoup.

## Résultat

Gate au troisième tour : **FACTCHECK_PASS, 76 claims sur 76.** Deux boucles de correction, le
plafond exactement atteint.

Revue indépendante : **ACCEPT**, sur le SHA exact du gate, base de comparaison `3532510` relevée
avant écriture. La contradiction de l'exemple est levée et non déplacée, et les sections neuves
sont bien construites sur de la matière du dossier jamais employée. Détail dans
`work/garbage-can-model/review.md`.

## Un piège de mesure, découvert par le reviewer sur les chiffres qu'il avait reçus

**Les décomptes de mots de `corpus:deepen --check` incluent `limits`, qui n'est pas du texte
lecteur.** L'orchestrateur avait transmis 1 864 mots à la revue en lui demandant de peser une
augmentation de volume contre la fourchette cible ; le reviewer a recompté et rendu **1 606 mots
lecteur**, les 258 restants étant la frontière interne, qui passait de 188 à 258.

L'écart change la conclusion : la carte **entre** dans la fourchette au lieu de la dépasser. Juger
un volume lecteur sur un total qui comprend un champ interne est une erreur de catégorie, et elle
est facile à commettre puisque c'est le seul chiffre que le script affiche. Le reviewer a aussi
corrigé un second chiffre reçu : trois sections anciennes ont été supprimées, non deux.

**Ce que cela vaut pour la suite** : un futur lot qui pose une question de volume à une revue doit
compter `lead` + `sections` lui-même, et non reprendre la sortie de `--check`. Porté au chantier H
de `RESTE-A-FAIRE.md`.
