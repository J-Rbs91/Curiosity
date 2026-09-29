# Revue indépendante — attention-diffusee-et-selection

**verdict : ACCEPT**

`factcheck_sha_match` : PASS · `baseline_blob_sha` : `5ec01f6eb0397269f237be4e93252920da68eb00`

> **Note de transcription.** Le `corpus-deepening-reviewer` ne dispose pas de l'outil `Write` : son
> compte rendu a été rendu à l'orchestrateur, qui le dépose ici sans en modifier le contenu ni le
> verdict. Une seule réserve est ajoutée, en fin de document, sur un point de mécanisme que le
> reviewer a hérité du compte rendu de correction et qui est faux.

## Gate

`sha256` calculé sur `corpus/deepenings/attention-diffusee-et-selection.json` :
`dc10ed36667348996f1eeac277f7851c79ac800f2baa1e54ee535bb4afd52da0`.

`factcheck-gate.json` : `protocol_version` 2, `FACTCHECK_PASS`, 72 claims, 72 soutenus, 0 refus,
`mapping_incomplete` vide, `structural_errors` vide. Le `candidate_sha256` est identique au SHA
calculé, caractère pour caractère. `claim-map.json` porte le même SHA et déclare 18 paragraphes
lecteur, tous `CLAIMS_MAPPED` : le gate a bien jugé ce texte-ci, entièrement.

Blob antérieur : lisible, JSON d'approfondissement valide, `concept_id` identique, titres et `lead`
correspondant à ce que l'audit décrit. C'est la bonne version antérieure.

## Volume, recompté par le reviewer

Tokens de ponctuation isolés exclus, titres inclus.

| | avant | après |
|---|---:|---:|
| `lead` | 163 | 162 |
| `sections` | 1 241 | 1 321 |
| titres | 49 | 49 |
| **texte lecteur** | **1 453** | **1 532** |
| `limits` | 217 | 200 |
| total fichier | 1 670 | 1 732 |

Le script affiche 1 769 parce qu'il compte les guillemets français comme des mots.

**Le volume est conforme.** Le texte que le lecteur reçoit fait 1 532 mots, au milieu haut de la
cible de `PROTOCOLE.md` §5, très loin des 1 900 qui font l'article inachevable. Le seul chiffre qui
dépasse 1 700 est le total incluant `limits`, champ qui ne s'affiche pas et que le même §5 budgète
séparément : le compter contre le plafond de lecture reviendrait à facturer au lecteur des mots
qu'il ne voit jamais. La réécriture rend 17 mots sur `limits` tout en ajoutant 79 mots lecteur, et
ces 79 mots portent cinq appuis primaires nouveaux, pas de l'ornement.

## Les huit axes

| axe | avant | après |
|---|:---:|:---:|
| fidélité documentaire | 3/4 | 4/4 |
| progressivité pédagogique | 4/4 | 4/4 |
| densité et non-redondance | 3/4 | 4/4 |
| clarté | 4/4 | 4/4 |
| profondeur explicative | 3/4 | 4/4 |
| valeur des exemples | 4/4 | 4/4 |
| limites et nuances | 3/4 | 4/4 |
| pouvoir d'ouverture | 3/4 | 4/4 |

**Fidélité.** L'attribution fautive de S6.P2 est défaite : la réserve sur les 16,5 % est rendue à
l'historien qui rapporte le chiffre, et le reproche syndical est donné dans ses termes (p. 105) au
lieu de « fut critique ». « Gaston Guyot » et « ingénieur en chef » sortent du texte lecteur au
profit de « un ingénieur de la compagnie », forme qu'emploie l'`attribution_note` de
l'enregistrement. Les deux évaluations sans appui ont disparu. Aucun terme de `limits` — Dunod,
1927, notice, coquille, Guyot — n'apparaît dans le texte lecteur.

**Profondeur.** Cinq mécanismes que l'ancienne version affirmait ou ignorait sont fondés dans le
texte de l'auteur : pourquoi le rendement brut ne sert pas (p. 158), comment le décile redevient un
mot d'appréciation (p. 162-163), la borne de la compensation (p. 157), la défense de Lahy sur ses
coefficients (p. 169) et son aveu que l'étalon professionnel est « à quelque degré subjectif »
(p. 168), qui donne enfin un appui à la réversibilité que le rédacteur affirmait seul.

**Régressions.** Aucune qui compte. Ce qui a quitté le texte a été vérifié un par un : les planches
d'étalonnage de décembre 1924 (les deux conditions qu'elles servaient survivent en S2.P3), le
commentaire interprétatif après le cas B. (remplacé par le récit et la citation, qui portent la même
thèse avec des faits), et « ce qui n'invalide rien, mais se sait » (remplacé par le fait nu,
« l'instrument est fabriqué par l'employeur qui recrute »).

## L'arbitrage demandé : la coupe de la définition de l'attention ordinaire

**Justifiée, et le texte n'y perd pas son entrée.**

1. **Elle n'était pas facultative.** Le gate avait déclaré la phrase `TOO_STRONG`, et le dossier ne
   porte rien sur ce qu'est l'attention au sens ordinaire : `definition_de_lauteur` glose l'attention
   diffusée, il ne définit pas son contraire. La conserver aurait exigé de fabriquer l'appui.
2. **Le contraste survit, sur un appui plus solide qu'avant : un mot du langage courant.** Le
   paragraphe monte la même tension, « Aucune ne mérite à elle seule qu'on s'y absorbe », puis la
   chute, « Sur ce siège, se concentrer serait une faute professionnelle ». Le renversement se
   produit sur « faute professionnelle » ; le lecteur n'a besoin d'aucune définition pour savoir ce
   qu'est se concentrer, et il n'en avait pas besoin avant non plus.
3. **L'enchaînement tient.** L'antécédent d'« inverse » en tête de `lead[1]` est « se concentrer »,
   qui le précède immédiatement. Rien ne pend dans le vide.

Le seul coût est lexical : « resserrement » ne fait plus écho d'un bout à l'autre du texte.
L'écho passe désormais par « s'absorber » et « se concentrer ». C'est un écho, pas une charpente.

## Observations sans effet sur le verdict

- **C022**, S2.P1, « Quatre-vingt-dix excitations, à intervalles inégaux pour qu'aucun rythme ne
  s'installe. » Le dossier établit les quatre-vingt-dix excitations et l'inégalité des intervalles
  (p. 119) ; **la finalité est une glose du rédacteur**. Le claim a été jugé `SUPPORTED`. Consigné
  parce qu'il s'agit d'une intention prêtée au dispositif, mais elle ne porte aucun raisonnement du
  texte, n'est attribuée à personne et ne peut pas se lire comme une phrase de Lahy.
- **Sixième titre**, « une compagnie d'autobus », quand le corps nomme la compagnie des transports
  parisiens et son réseau de tramways. Le titre est identique au mot près dans la version antérieure :
  ce n'est pas une régression de cette réécriture. Instance du chantier M, à resserrer un jour.
- La dernière phrase de S6.P3 porte le joint le plus lâche du texte. Il ouvre, il ne masque aucun saut.

## Réserve de l'orchestrateur sur un point de mécanisme

Le reviewer écrit que la proposition refusée reparaissait en S4.P3 et était « passée sous le radar
du verifier parce que le claim map l'avait normalisée ». **C'est faux, et il l'a hérité du compte
rendu de correction.** Le bundle ne transporte pas `normalized_claim` : ses claims ne portent que
`claim_id`, `locator`, `claim_text`, `supports` et `uncited_support_signal`. Le vérificateur a donc
bien reçu la phrase entière, excédent compris.

Le mécanisme réel est le partitionnement : `C005` était en partition 1 et `C042` en partition 2, et
**deux vérificateurs différents ont rendu deux verdicts opposés sur la même proposition**. Le détail
et sa mesure sont au journal du passage. La correction appliquée — retirer l'excédent aux deux
endroits — reste la bonne, et le verdict `ACCEPT` n'en dépend pas.

## Raison de la décision

Le gate est valide et porte sur ce texte exact, SHA pour SHA, 72 claims sur 72, mapping complet sur
les 18 paragraphes lecteur. La réécriture supprime le seul défaut de fidélité réellement fautif du
diagnostic, comble les trois creux de delta identifiés, et fait entrer cinq mécanismes que les
sources portaient noir sur blanc. La progression n'a pas bougé — c'était déjà la bonne — et le texte
gagne 79 mots lecteur, tous documentés, dans un volume qui reste dans la fourchette. Aucune
régression, aucune perte d'information solide, aucune remontée de `limits`. Amélioration nette sur
cinq axes, stable sur trois : **ACCEPT**.
