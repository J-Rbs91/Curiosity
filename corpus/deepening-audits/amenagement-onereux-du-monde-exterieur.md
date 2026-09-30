---
concept_id: amenagement-onereux-du-monde-exterieur
deepening_sha256: 25f34e163a8bf05747297f11d4709924d3325e74ed2560b7702e67a93e7f2d4a
validated_sha256: e14a7e5ea987be2d90345bc7c54debbdcf2b37a86fcdf470e1668fe03ed55f37
protocol_version: 3
audited_at: 2026-09-30T05:45:00Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
remappings: 1
review_verdict: ACCEPT
---

# amenagement-onereux-du-monde-exterieur — réécrit, certifié, accepté

Seule carte du lot à franchir la chaîne entière. `FACTCHECK_PASS` 73 claims sur 73, `ACCEPT` de la
revue indépendante sur le SHA exact du fichier publié.

## Le défaut qui a motivé l'audit, et sa réparation

La dernière phrase de la cinquième section tranchait l'origine du syntagme, dans les **deux** sens que
`notes[1]` de l'enregistrement validé refuse nommément — et elle contredisait une phrase du texte
lui-même dix lignes plus haut, « rien de tout cela ne tranche ». Elle franchissait en outre `limits[0]`.

Elle est supprimée sans remplaçant qui referme la provenance. Ce qui reste est borné au niveau des
appuis : l'absence de crédit page 11, une provenance concurrente antérieure et non unanime, « une
attribution répétée n'est pas une attestation », et la limite de l'argument de corpus dite au lecteur.
Les quatorze claims de ce passage sont tous soutenus.

**La cause mécanique du défaut a été traitée, pas seulement son effet** : `limits[0]` ne nommait pas
l'affirmation qu'il interdisait, et c'est par là que la phrase était passée. Il la nomme désormais, dans
les deux sens.

## Le parcours, et ce qu'il a coûté

| tour | claims | verdict |
|---|---:|---|
| 1 | 74 | `FACTCHECK_INVALID` 71/74, un `MAPPING_INCOMPLETE` |
| 2 | 72 | `FACTCHECK_FAIL` 69/72 — C008, C051, C057 |
| 3 | 73 | **`FACTCHECK_PASS` 73/73** |

Un remapping et une seule boucle de correction, sur deux autorisées.

**Le remapping du tour 1 a été dépensé pour rien, et c'est un fait de protocole établi par ce
passage.** Le signal d'appuis non cités nommait un appui sur le terme partagé « justifie » ; cet appui
est une note de méthode sur l'étendue de consultation et l'état de la couche OCR, sans aucun rapport
avec le texte lecteur. Un mapper frais, à qui rien n'avait été dit, a reproduit pour ce claim le texte
identique et les deux mêmes appuis, et n'a rattaché l'appui nommé à aucun claim. Le claim est
`SUPPORTED` au tour 3, sur ses appuis d'origine. Le signal avait fabriqué un problème.

Le second refus le plus instructif est `C051` : le texte écrivait « Pierre-Louis Reynaud » quand tous
les appuis n'écrivent que l'initiale, « P.L. Reynaud », et quand une note de la même fiche signale
l'homonymie avec un autre Reynaud, sociologue, cité dans le même article. **Un prénom développé à
partir d'une initiale est une précision inventée qui a l'air d'une donnée bibliographique** — l'espèce
la plus difficile à voir pour une relecture en prose, et celle que le contrôle claim par claim attrape.

## Chantier M : deux cas sur cette seule carte

Le titre de la section touchée affirmait, dans la voix du texte et sur un ouvrage que personne n'a
ouvert, le verdict que le corps attribue explicitement à Albou seul — l'excédent exact que `C057` venait
de se faire refuser. Et la dernière phrase du `lead` portait la même pesée de termes que le superlatif
refusé en `C008`, en position d'annonce, tout en contredisant un claim soutenu.

Ni l'un ni l'autre n'est ancré par un claim : le gate ne les aurait jamais vus. Ils ont été trouvés par
la consigne de relire titres et `lead` après chaque retrait.

## Ce que la revue indépendante a établi

`ACCEPT`, après vérification du hash du candidat contre le gate et lecture du blob antérieur.

- défaut central réparé **structurellement**, cause mécanique comprise ;
- aucune régression conceptuelle ni de nuance ; trois pertes mineures, aucune portante ;
- progression réellement meilleure et non seulement différente : test du delta refait sur les vingt
  paragraphes, chacun porte un delta distinct, aucune séquence de trois n'en partage un ;
- `limits` resté interne, sans réserve ;
- les +157 mots de texte lecteur sont portés : environ 390 mots de matière neuve sourcée contre 230
  retirés, et **aucun mot net ne finance une reformulation, un exemple d'agrément ou une transition**.

## Ce qui reste à faire sur cette carte

1. `limits` fait 237 mots pour une fourchette indicative de 100-200. La revue juge l'excès justifié sur
   trois entrées et dispensable sur la quatrième, environ 45 mots — à comprimer au prochain passage, pas
   un motif de refus, le champ étant invisible.
2. **Une contradiction interne de la fiche, relevée et non tranchée** : `review.notes[4]` attribue la
   recension de 1956 à Henri Guitton, là où `notes[9]` et `sources_ouvertes[2]` donnent le même compte
   rendu, même revue, même pagination, même URL, à Pierre Dieterlen. Aucun claim ne nomme le recenseur,
   donc aucun verdict n'en dépend, et la notice bibliographique est identique dans les deux appuis —
   l'antériorité de sept ans n'est donc pas en cause. La contradiction est consignée dans `limits` avec
   l'état exact des trois champs, pour qu'un passage futur la lève sur l'image de la page.
