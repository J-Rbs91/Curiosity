---
concept_id: critere-de-la-retroaction
deepening_sha256: 29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222
validated_sha256: 2af4e7f914e71b588ed756e81666c56a88b9354c38ac15d7a350a4c21a00ac8b
protocol_version: 3
audited_at: 2026-09-26T04:54:46Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# critere-de-la-retroaction

Le texte affiché au lecteur est **inchangé**. Restauré par son SHA de blob
`623582dbf638f033caa87a683c490298c470e512`, vérifié au `sha256sum` :
`29083f8b…`, et `git diff` contre l'état du lever est vide sur ce fichier.

> **Ce rejet n'est pas le même que celui du 18 septembre, et la différence est tout le contenu de
> ce rapport.** Le précédent disait : l'instrument n'a pas ouvert le dossier. Celui-ci dit : le
> dossier est ouvert, le texte a été instruit trois fois avec, il est passé de 7 refus à 6 puis à
> **1 sur 58**, et le plafond de deux boucles l'arrête là.

## Ce que le dossier enfin chargé a rendu

Le correctif de `prepare()` — le pack honore le champ `dossier` de l'enregistrement — a été
écrit et mesuré avant tout jugement sur ce texte. Sur cette carte :

| | 19 septembre | 26 septembre |
|---|---:|---:|
| fichiers de preuve ramassés | 0 | 1 |
| appuis du pack | 45, tous `validated` | **72, dont 27 du dossier** |
| `access_corroboration` de l'article de Paquette | `dossier-absent` | **`corrobore`** |
| `UNSUPPORTED` au gate | **23** | 2, puis 1, puis 0 |

**Le rejet de septembre était donc faux sur les claims, et c'est établi et non plausible** : 15
des 34 appuis cités au premier mapping de cette nuit viennent du fichier que le gate de septembre
n'avait jamais ouvert, dont `definition_de_lauteur`, qui porte l'essentiel de la matière paginée.

## Les trois tours, et ce qu'ils disent du dispositif

| tour | SHA | claims | soutenus | refusés | mots |
|---|---|---:|---:|---:|---:|
| 0, texte publié | `29083f8b` | 59 | 52 | **7** | 1 198 |
| 1, après correction | `10e489ee` | 56 | 50 | **6** | 1 158 |
| 2, après correction | `51377815` | 58 | 57 | **1** | 1 081 |

**Aucun refus corrigé n'est revenu.** Les six du tour 1 et le seul du tour 2 sont des claims
différents des précédents : un mapping frais découpe autrement et découvre ce que le précédent
n'avait pas porté. **Un `FACTCHECK_FAIL` ne majore donc pas le nombre de défauts d'un texte, il
le minore** — c'est la leçon de mesure de ce cycle.

Les corrections n'ont utilisé que `REMOVE` et `NARROW`, jamais `REATTRIBUTE` ni
`MARK_AS_INTERPRETATION`, et **le texte a perdu 117 mots sans en gagner un seul** qui ne soit
adossé à un appui du pack. La faute que l'audit du 18 septembre avait nommée — une non-invention
établie pour deux termes étendue à deux autres — a été corrigée au tour 1 et n'a pas reparu.

Le seul refus survivant est `C038` : les appuis attestent que Paquette décrit « la
hiérarchisation des boucles et le déplacement des finalités », ils ne portent ni l'emboîtement des
boucles les unes dans les autres, ni un niveau supérieur comme agent du déplacement.

## Le défaut d'instrument trouvé cette nuit, et la perte qu'il a causée

`C008` du tour 1 a été refusé `UNSUPPORTED` au motif que « ni un thermostat ni un joueur de
quilles n'apparaissent dans aucun appui résolu ». **Le pack contient `SUP-421445a4beb428f3`,
`$.reserves[0]` de la lecture primaire, qui porte mot pour mot « l'auteur raisonne sur un
thermostat, un autocuiseur, un réservoir de W.-C., un thermocouple, un joueur de quilles, une
fièvre ».** Aucun claim du mapping ne le cite.

Le verdict est juste au vu des deux appuis rattachés, et faux au vu du dépôt. La correction du
tour 2 a donc retiré du texte deux exemples que l'auteur emploie réellement. **C'est une perte
documentée, pas une correction**, et elle est à réparer quand la carte sera reprise. Chantier K de
[`../RESTE-A-FAIRE.md`](../RESTE-A-FAIRE.md), second cas.

## Reprise

Le candidat refusé est conservé sous
`work/critere-de-la-retroaction/candidate-rejected-57-sur-58.json`, SHA `51377815…`. Il est à
un claim du `FACTCHECK_PASS` et il porte les onze corrections des deux tours.

Une reprise ne doit **pas** rejouer l'audit ni les deux corrections. Elle doit, dans cet ordre :

1. borner `C038` à ce que `definition_de_lauteur` porte — la hiérarchisation et le déplacement
   des finalités, sans emboîtement ni agent ;
2. **restituer le thermostat et le joueur de quilles**, attestés par `$.reserves[0]` ;
3. relancer depuis `PREPARE` sur le candidat ainsi repris.

Ce n'est pas une troisième boucle de correction sur le même verdict : le point 2 répare un défaut
d'instrument, et le point 1 est le seul reliquat documentaire.

**Les artefacts de travail de ce répertoire décrivent `51377815…`, qui n'est plus le texte en
place.** C'est voulu : ils sont la trace du cycle. Le gate les refusera en `FACTCHECK_INVALID`
s'ils sont rejoués tels quels, ce qui est le comportement correct — une reprise repart de
`PREPARE`.
