---
concept_id: critere-de-la-retroaction
mode: REPRISE (bornage d'un reliquat FACTCHECK_FAIL + réparation d'une perte d'instrument)
base: candidate-rejected-57-sur-58.json
base_sha256: 51377815deeb19ddcae13f09372826b6b76a0b8df3d8d69691a2bc66f684d094
written_sha256: 277c278c669208b898fd46236032003c40f8db6832d74021cf743ae59e94e3f3
mots_lecteur: 1073
mots_total: 1255
check: PASS
---

# Reprise de `critere-de-la-retroaction`

Deux gestes, et rien d'autre. La base est le candidat conservé, non la version publiée : le
fichier écrit dans `corpus/deepenings/` est le candidat `51377815…` plus les deux corrections
décrites ici. `diff` entre le candidat et le fichier écrit ne porte que **trois lignes** :
`lead[1]`, le titre de `sections[3]` et `sections[3].paragraphs[0]`. Les onze corrections des
deux boucles sont intactes, mot pour mot.

## Ce qui a été lu

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md` (v3), `FACTCHECK_PROTOCOL.md` (v2) ;
- `corpus/validated/critere-de-la-retroaction.json` en entier, `notes` et `review` comprises ;
- le champ `dossier` de cet enregistrement, qui déclare
  `corpus/evidence/retroaction-denaturee/lecture.json`. Le répertoire
  `corpus/evidence/retroaction-denaturee/` a été listé : il ne contient que ce fichier, lu en
  entier (`definition_de_lauteur` et les onze `reserves`). Aucun `scouting.json` à écarter ;
- `corpus/deepening-audits/critere-de-la-retroaction.md` (section « Reprise »),
  `work/.../audit.md` (non rejoué), `work/.../rewrite.md` (les deux passages utiles),
  `factcheck-gate.json`, `verification.json`, `claim-map.json`, et les appuis nommés de
  `factcheck-pack.json`.

Aucune recherche web. Aucun fait ajouté de mémoire.

## Correction 1 : bornage de `C038`

`claim-map.json` ancre `C038` en `sections[3].paragraphs[0]`, offsets 0-168 :

> Paquette décrit des boucles hiérarchisées, emboîtées les unes dans les autres, dont les valeurs
> de référence peuvent elles-mêmes être déplacées par un niveau supérieur.

Verdict du gate : `TOO_STRONG`. Motif : les appuis attestent la hiérarchisation des boucles et le
déplacement des finalités, « mais ils ne disent ni que les boucles sont emboîtées les unes dans les
autres, ni que les valeurs de référence sont déplacées par un niveau supérieur ».

Appuis du claim, relus dans le pack :

- `SUP-d9116d421b3c54dc` = `evidence:retroaction-denaturee/lecture.json`, `$.definition_de_lauteur` :
  « Paquette décrit ensuite la hiérarchisation des boucles et le déplacement des finalités
  (thermorégulation, fièvre relue comme modification de la valeur de référence, hétérostasie
  déclenchant la révision des buts, p. 11-13) » ;
- `SUP-421445a4beb428f3` = même fichier, `$.reserves[0]` : « hiérarchisation des boucles et
  déplacement des finalités » figure dans l'énumération de ce que les pages 6 à 13 exposent.

Les deux appuis portent donc **deux substantifs** et rien de plus : une hiérarchisation, un
déplacement. Ils ne portent pas la topologie (emboîtement) ni l'agent causal (un niveau supérieur
qui déplace).

Geste : `NARROW`.

Après : « Paquette décrit une hiérarchisation des boucles, et un déplacement des finalités. »

Portée retenue : exactement les deux termes des appuis, sans complément de topologie ni d'agent.
Rien n'est venu remplacer ce qui est retiré. Le terme technique « déplacement des finalités » reste
compréhensible parce que la phrase suivante, `C039`, soutenue et intacte, l'instancie immédiatement
(« une fièvre ne se lit pas comme une régulation qui échoue, mais comme une valeur de référence
modifiée »). J'ai écarté la variante « : la valeur de référence peut elle-même être modifiée »,
qui aurait été portée par le même appui mais aurait redit dans la même phrase ce que `C039` dit à
la phrase d'après.

### Le titre de la section entrait dans le même bornage

`sections[3].title` était « Des boucles emboîtées, des buts qui bougent ». Un titre est du texte
lecteur, et celui-ci portait, seul, le mot exact que le gate refuse. Le laisser aurait maintenu
dans le texte lecteur l'affirmation bornée trois lignes plus bas, et l'aurait offerte au prochain
mapping.

Après : « Des boucles hiérarchisées, des buts qui bougent » (47 caractères). « Hiérarchisées »
est le terme des deux appuis. Le titre continue de nommer la chose dont la section parle, et non
la fonction qu'elle occupe.

## Correction 2 : restitution du thermostat et du joueur de quilles

### L'appui, relu dans le pack

`SUP-421445a4beb428f3`, `evidence:retroaction-denaturee/lecture.json`, `$.reserves[0]`, porte mot
pour mot :

> Condition 3 : enseignable sans réserve, l'auteur raisonne sur un thermostat, un autocuiseur, un
> réservoir de W.-C., un thermocouple, un joueur de quilles, une fièvre, un professeur devant
> quelques centaines d'étudiants.

Vérifié sur le pack **et** sur le fichier de dossier lui-même. `access: "n/a"`, origine
`evidence:` : c'est une constatation de lecture primaire, pas une déclaration de niveau d'accès,
et aucune règle de §5 du protocole de fact-check ne la rétrograde en notice.

Le motif du refus de `C008` au tour 1 (« ni un thermostat ni un joueur de quilles n'apparaissent
dans aucun appui résolu ») était juste au vu des deux appuis que le mapping avait rattachés, et
faux au vu du pack. Le tour 2 avait donc retiré deux exemples réels.

**Le tour 2 lève lui-même l'obstacle procédural.** Dans `claim-map.json` du tour 2, `C008` cite
`SUP-421445a4beb428f3` parmi ses `support_ids`, et `verification.json` le rend `SUPPORTED`. L'appui
qui porte le thermostat et le joueur de quilles est donc désormais attaché à la phrase même où ils
sont restitués.

### Le geste

Avant (`lead[1]`, dernière phrase) :

> Il mène la démonstration sur un autocuiseur, un réservoir de chasse d'eau, une fièvre, avant de
> la ramener à ce qui l'occupe, la communication.

Après :

> Il raisonne sur un thermostat, un autocuiseur, un réservoir de chasse d'eau, un joueur de
> quilles, une fièvre, avant de ramener la démonstration à ce qui l'occupe, la communication.

Portée à laquelle la restitution est bornée, point par point :

1. **Le verbe est celui de l'appui.** « Il mène la démonstration sur » devient « Il raisonne sur ».
   L'appui écrit « l'auteur raisonne sur » ; le texte n'écrit donc rien de plus. Le changement de
   verbe n'est pas cosmétique : il aligne la portée sur la seule chose que l'appui constate, à
   savoir la liste des objets sur lesquels l'auteur raisonne.
2. **Les deux objets sont nommés, et rien n'est dit d'eux.** Aucun mécanisme du thermostat, aucune
   valeur de consigne, aucun geste sur son curseur ; aucune règle du jeu de quilles, aucune
   trajectoire, aucun score. Ils entrent comme éléments d'une liste, ce qu'ils sont dans l'appui.
3. **La liste n'est pas complétée au-delà du mandat.** L'appui nomme aussi un thermocouple et un
   professeur devant quelques centaines d'étudiants. Ils ne sont pas ajoutés : la reprise répare
   une perte identifiée, elle n'enrichit pas le texte.
4. **Le curseur du thermostat ne revient pas.** `C034` du tour 2 avait retiré « de celui qui pousse
   le curseur du thermostat » en `sections[2].paragraphs[1]` : c'est un `TOO_STRONG` fondé sur une
   scène que nul appui ne porte, et il reste corrigé. Le mot « thermostat » ne reparaît donc qu'une
   seule fois dans tout le texte lecteur, dans la liste du `lead`, et sans verbe qui lui attribue
   un fonctionnement.
5. **La queue de phrase reste adossée aux mêmes appuis.** « avant de ramener la démonstration à ce
   qui l'occupe, la communication » conserve le sujet grammatical que le nouveau verbe lui enlevait,
   et reste porté par `SUP-0193991f3102814e` (`$.reserves[3]`, « l'exposition du mécanisme, p. 6 à
   13, n'est pas restreinte à ce champ ») et `SUP-8d7e138f3c0d9324` (`$.notes[6]`), les deux autres
   appuis déjà cités par `C008`.

### Où cela sert la compréhension

Dans le `lead`, et là seulement. La phrase a pour fonction unique d'annoncer que le raisonnement
est mené sur des objets, avant la communication : c'est l'endroit où l'hétérogénéité de la liste
fait le travail, parce qu'elle prépare le lecteur à voir le même critère appliqué à un appareil
domestique, à un corps et à une action humaine. Deux objets de plus dans cette liste augmentent
l'écart qu'elle donne à franchir ; les mêmes deux objets glissés dans une section auraient exigé
qu'on dise ce qu'ils font, ce que l'appui n'autorise pas.

## Ce qui n'a pas été touché

- les dix autres corrections des tours 1 et 2, dont `C014`, `C034`, `C040`, `C041`, conservées mot
  pour mot ;
- les cinquante-six claims `SUPPORTED` du tour 2 en dehors de `C008` ;
- les trois paragraphes de `limits`, inchangés. Ils nomment chacun une source, son état d'accès et
  l'affirmation qu'il interdit : Veraldi 1969 (`metadata-only`, connu seulement par ce que Paquette
  en rapporte), le livre de Wiener (non ouvert, porteur de la définition, de la date et du titre
  exacts contre l'erreur interne de l'article), et l'absence de source secondaire. Aucun de leurs
  contenus n'est remonté dans `lead` ou `sections` ;
- l'architecture, l'ordre des sections, les citations. Aucune citation n'a été touchée : le contrôle
  mécanique les revérifie toutes contre l'enregistrement.

## Contrôles

**Delta de chaque paragraphe modifié.**

- `lead[1]` : le lecteur apprend qui écrit, quand, que l'article construit un critère à deux
  conditions, et sur quels objets le raisonnement est mené. Le delta est renforcé par la
  restitution, pas dupliqué : les objets de la liste ne sont expliqués nulle part ailleurs dans le
  `lead`, et trois d'entre eux (autocuiseur, réservoir, fièvre) sont repris plus tard par des
  sections qui, elles, disent ce qu'ils font.
- `sections[3].paragraphs[0]` : le lecteur apprend qu'il y a plusieurs boucles, ordonnées, et que
  la valeur visée peut changer, avec la fièvre comme cas où l'intuition première (une régulation
  qui rate) est fausse. Delta distinct de `sections[2]`, qui portait sur la valeur de référence
  imposée ou implicite, jamais sur sa modification.
- `sections[3].paragraphs[1]` (non modifié) : nomme l'hétérostasie et pose la différence entre
  corriger une action et changer ce qu'on cherche. Delta distinct du précédent : celui-ci décrivait
  un phénomène et son cas, celui-là nomme le déclencheur et sépare deux étages. Aucune séquence de
  paragraphes consécutifs à delta identique n'a été créée.

**Frontières.** Aucun contenu de `limits` remonté en bloc visible. Aucun terme de dispositif. Aucun
tiret cadratin. Aucun mot ajouté qui ne soit adossé à un appui nommé ci-dessus.

**Volume.** Texte lecteur 1 073 mots (candidat : 1 081), total avec `limits` 1 255 mots. La reprise
retire 13 mots par le bornage de `C038` et en rend 5 par la restitution : elle ne gonfle rien.

**Contrôle mécanique.**

```
npm run corpus:deepen -- --check --only=critere-de-la-retroaction
1 approfondissement(s) contrôlé(s), 1255 mots. Rien projeté.
```

PASS.

## Suite

Le SHA du texte a changé : `29083f8b…` (publié) et `51377815…` (candidat) sont tous deux périmés,
le fichier en place est `277c278c669208b898fd46236032003c40f8db6832d74021cf743ae59e94e3f3`. Tous
les artefacts de ce répertoire décrivent `51377815…` et seront refusés en `FACTCHECK_INVALID` s'ils
sont rejoués. La reprise repart de `PREPARE`.

Aucune auto-validation n'est prononcée ici : ni `ACCEPT`, ni `FACTCHECK_PASS`.
