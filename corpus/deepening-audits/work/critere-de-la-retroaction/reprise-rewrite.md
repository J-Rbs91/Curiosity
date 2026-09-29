# Reprise ciblée du 28 septembre 2026 — critere-de-la-retroaction

Mode : reprise à deux gestes, prescrite par
[`reprise.md`](reprise.md). Ni audit, ni troisième boucle de correction.

Texte de départ : `corpus/deepenings/critere-de-la-retroaction.json`, candidat du tour 2,
SHA256 `51377815deeb19ddcae13f09372826b6b76a0b8df3d8d69691a2bc66f684d094` — vérifié au
`sha256sum` avant toute écriture, et identique au `candidate_sha256` de `factcheck-gate.json`
ainsi qu'au fichier conservé `candidate-rejected-57-sur-58.json`. Le geste 1 porte donc bien sur
la version jugée.

SHA256 après reprise : `c95ef7e2fb1794bb1dc834ec0f1a566ed10c92133fec21e266d14b9fc11c9ef3`.

## Mots du texte lecteur (`lead` + `sections[].paragraphs`, titres exclus)

| | mots |
|---|---:|
| texte publié (tour 0, `29083f8b`) | 1 198 |
| candidat du tour 2 (`51377815`), point de départ | 1 081 |
| après cette reprise (`c95ef7e2`) | **1 074** |

Solde de la reprise : **moins 7 mots**. La contrainte est tenue dans les deux sens : plus court
que le texte publié, et non plus long que le candidat en place.

## Dossier ouvert

`corpus/evidence/critere-de-la-retroaction/` n'existe pas. Le dossier a été ouvert par le champ
`dossier` de `corpus/validated/critere-de-la-retroaction.json`, qui déclare
`corpus/evidence/retroaction-denaturee/lecture.json` — divergence de nommage documentée comme
volontaire par `notes[0]` de l'enregistrement validé. Ce fichier unique a été lu en entier :
`attribution`, `quotation`, `sources_ouvertes`, `definition_de_lauteur` et les onze `reserves`.
La source primaire de Paquette y est en `consulted: "full-text"` ; Veraldi y est en
`metadata-only` et n'a été utilisé pour rien.

Aucune recherche web, aucun fait ajouté de mémoire, aucune citation nouvelle, aucun `SUP-…`
inventé, aucun artefact de fact-check modifié.

## Geste 1 — `NARROW` sur `C038` : appliqué

Seul refus survivant du tour 2 (`factcheck-gate.json` : 58 claims, 57 soutenus, 1 refusé,
`structural_errors` vide). Motif du gate : les appuis attestent « la hiérarchisation des boucles
et le déplacement des finalités », ils ne portent ni l'emboîtement des boucles les unes dans les
autres, ni un niveau supérieur comme agent du déplacement.

Localisation : `sections[3].paragraphs[0]`, première phrase.

Avant :

> Paquette décrit des boucles hiérarchisées, emboîtées les unes dans les autres, dont les valeurs
> de référence peuvent elles-mêmes être déplacées par un niveau supérieur.

Après :

> Paquette décrit une hiérarchisation des boucles et un déplacement des finalités.

L'énoncé retenu est la formule de l'appui, mot pour mot : `definition_de_lauteur`
(`SUP-d9116d421b3c54dc`) écrit « Paquette décrit ensuite la hiérarchisation des boucles et le
déplacement des finalités (thermorégulation, fièvre relue comme modification de la valeur de
référence, hétérostasie déclenchant la révision des buts, p. 11-13) ». Les deux excédents nommés
par le vérificateur disparaissent ensemble : l'emboîtement, et l'agent du déplacement.

Aucune affirmation ne s'est substituée à celles qui tombent, et la perte n'est compensée nulle
part : la phrase passe de 25 à 12 mots, et rien n'a été ajouté au paragraphe, ni avant, ni après.

Le paragraphe garde son delta. Sa suite est intacte et reste soutenue : « La thermorégulation lui
sert de cas » (C039) enchaîne sans rupture sur le déplacement des finalités, puisque c'est
exactement le cas que l'appui range sous ce déplacement, et C040 (« Le corps ne manque pas sa
température habituelle, il en vise une autre ») ferme le paragraphe comme avant. Aucun des 57
claims soutenus n'a été reformulé.

Le démonstratif et les antécédents ont été vérifiés : « lui » de « lui sert de cas » renvoie
toujours à Paquette, nommé dans la phrase bornée.

### Conséquence sur le titre de la section, signalée pour arbitrage

Le titre de `sections[3]` était « Des boucles emboîtées, des buts qui bougent ». Il est devenu
« Des boucles hiérarchisées, des buts qui bougent ».

C'est un mot, et c'est le même excédent que celui que le gate a refusé : laisser « emboîtées » en
tête de section aurait maintenu sous les yeux du lecteur, en position d'annonce, précisément
l'énoncé que le geste 1 retire du paragraphe. Le mot substitué est celui de l'appui
(« hiérarchisation des boucles »), et la seconde moitié du titre, « des buts qui bougent »,
correspond au « déplacement des finalités » du même appui.

Je le signale explicitement pour trois raisons : les titres ne sont pas couverts par
`claim-map.json`, dont les treize locators s'arrêtent à `lead[*]` et
`sections[*].paragraphs[*]` ; ce changement n'était donc pas exigé par le gate ; et il sort de la
lettre des deux gestes, même s'il en applique l'esprit sur le seul autre endroit du texte lecteur
où l'excédent subsistait. Il est réversible d'un mot si l'orchestrateur juge qu'il excède le
mandat. Le compte de mots n'en dépend pas, les titres n'étant pas comptés.

## Geste 2 — restitution du thermostat et du joueur de quilles : appliqué

**Prémisse vérifiée avant exécution, et non exécutée sur parole.** `$.reserves[0]` du dossier
`corpus/evidence/retroaction-denaturee/lecture.json` a été ouvert et lu. Il porte, dans le
développement de sa condition 3 :

> Condition 3 : enseignable sans réserve, l'auteur raisonne sur un thermostat, un autocuiseur, un
> réservoir de W.-C., un thermocouple, un joueur de quilles, une fièvre, un professeur devant
> quelques centaines d'étudiants.

Le thermostat et le joueur de quilles y figurent nommément, l'un et l'autre, et ils y sont donnés
comme des objets sur lesquels Paquette raisonne. La prémisse de la reprise est exacte ; la
restitution est donc faite.

Localisation : `lead[1]`, dernière phrase.

Avant :

> Il mène la démonstration sur un autocuiseur, un réservoir de chasse d'eau, une fièvre, avant de
> la ramener à ce qui l'occupe, la communication.

Après :

> Il mène la démonstration sur un thermostat, un autocuiseur, un réservoir de chasse d'eau, un
> joueur de quilles, une fièvre, avant de la ramener à ce qui l'occupe, la communication.

Les deux termes sont remis à leur place d'origine, celle du texte publié : le thermostat en tête,
le joueur de quilles entre le réservoir et la fièvre. La phrase qui les entoure n'est pas
réécrite, et aucun autre terme de `reserves[0]` n'a été promu au passage : ni le thermocouple, ni
le professeur devant quelques centaines d'étudiants, tous deux pourtant attestés par la même
phrase, ne figuraient dans le texte publié et n'avaient donc rien à y faire. Plus six mots.

Le geste ne revient sur aucune des corrections des tours 1 et 2. Le `NARROW` du tour 2 sur `C008`
avait amputé la liste ; sa propre justification consignait la réserve et la donnait comme à
réparer si la carte était reprise. C'est ce que fait ce geste, et rien de plus. Il ne touche pas
davantage au `NARROW` du tour 2 sur `C034` : ce qui avait été retiré là est la scène du curseur en
`sections[2].paragraphs[1]` (« de celui qui pousse le curseur du thermostat »), pas le mot
thermostat dans la liste d'exemples du `lead`, et cette phrase reste « Dans une machine, cette
valeur est imposée du dehors », dans les termes de l'appui.

## Ce qui n'a pas été fait

- Aucune des corrections des tours 1 et 2 n'a été rejouée ni défaite. Le `diff` contre
  `candidate-rejected-57-sur-58.json` porte exactement trois lignes : `lead[1]`, le titre de
  `sections[3]`, et `sections[3].paragraphs[0]`.
- Aucun exemple, aucune transition, aucune nuance ajoutés.
- Le bornage de `C038` n'a été compensé nulle part : le texte est plus court après.
- Aucun exemple attesté mais absent du `lead` publié n'y a été promu.
- `limits` est inchangé au caractère près, et reste interne. Aucun de ses trois éléments (Veraldi
  `metadata-only`, date et titre de Wiener, réception dans les sciences de la communication) n'a
  été remonté en bloc visible, et aucun des deux gestes n'en franchit les frontières.
- Aucun contenu de `scouting.json` n'a été utilisé : le dossier n'en contient pas, il n'a qu'un
  fichier.

## Contrôles

- Deltas relus sur les deux paragraphes touchés. `sections[3].paragraphs[0]` établit la
  hiérarchisation et le déplacement des finalités, puis les instancie sur la fièvre ;
  `sections[3].paragraphs[1]` nomme l'hétérostasie et situe l'étage. Les deux deltas restent
  distincts, et aucun paragraphe de la section ne refait le travail de l'autre. Le `lead` n'a
  gagné aucun contenu nouveau, seulement deux items d'une énumération existante.
- Aucune section ne répète principalement une section précédente ; rien dans cette reprise ne
  crée de redite, les deux gestes retranchant ou restituant à l'intérieur de phrases existantes.
- Aucun tiret cadratin dans le texte lecteur (vérifié programmatiquement sur `lead` et sur tous
  les paragraphes), apostrophes et guillemets typographiques conformes, aucun balisage dans les
  paragraphes.
- Toutes les citations entre guillemets du texte sont inchangées ; aucun des deux gestes n'en
  touche une.
- `npm run corpus:deepen -- --check --only=critere-de-la-retroaction` :
  `1 approfondissement(s) contrôlé(s), 1256 mots. Rien projeté.` Contrôle mécanique **PASS**,
  rien d'écrit ni de projeté hors du fichier repris.
- Aucun autre fichier du dépôt n'a été modifié.

## Suite

La modification invalide le SHA. La chaîne déterministe doit repartir de `PREPARE` sur
`c95ef7e2fb1794bb1dc834ec0f1a566ed10c92133fec21e266d14b9fc11c9ef3`.

`factcheck-gate.json`, `verification.json`, `claim-map.json`, `verification-bundle.json` et
`factcheck-pack.json` de ce répertoire décrivent `51377815…` et sont donc périmés depuis cette
écriture. Ils sont conservés comme trace du cycle, conformément au rapport d'audit final : un
relecteur ne doit pas les rapprocher du texte en place.

Aucun verdict n'est prononcé ici : ni `ACCEPT`, ni `FACTCHECK_PASS`. La mesure du texte repris
appartient à la chaîne.
