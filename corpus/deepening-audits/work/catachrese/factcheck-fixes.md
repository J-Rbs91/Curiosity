# catachrese — corrections après FACTCHECK_FAIL (boucle 1 sur 2)

Version corrigée : `corpus/deepenings/catachrese.json`
SHA-256 : `2e94bac8659301fe519424b85d9caa146be3b6628c11c9f61d370054b41eb244`
Mots lecteurs : 1 283 (avant correction : 1 370). Contrôle mécanique : PASS (1 521 mots comptés, `limits` comprise).

Gate d'entrée : `factcheck-gate.json`, 68 claims, 56 soutenus, 12 refusés (10 `TOO_STRONG`, 2 `UNSUPPORTED`).
Douze passages touchés, aucun autre. Aucune affirmation nouvelle introduite ; aucun `SUP-...` inventé.

Gestes : REMOVE 4 · NARROW 8 · REATTRIBUTE 0 · MARK_AS_INTERPRETATION 0.

---

## C001 — `lead[0]` — UNSUPPORTED — REMOVE

Motif du gate : aucun appui ; le texte donne la pièce de monnaie servant de tournevis et la chaussure
plantant un clou pour des gestes réels.

Avant : « Une pièce de monnaie qui sert de tournevis, une chaussure qui plante un clou, […] »

Après : le segment est supprimé. Le `lead` s'ouvre désormais sur le seul exemple que le pack porte,
celui que Rabardel emprunte à Faverge (voir C002).

Appui : aucun n'était requis pour une suppression. Les deux objets ne se retrouvent nulle part dans le
pack ; les rendre hypothétiques aurait gardé un exemple inventé là où le texte de l'auteur en fournit un.

## C002 — `lead[0]` — TOO_STRONG — NARROW

Motif : les appuis portent « l'utilisation d'une clef pour frapper à la place d'un marteau », non une
« clef plate » ni le « marteau resté au garage ».

Avant : « une clef plate qu'on empoigne pour taper au lieu du marteau resté au garage »

Après : « Une clef employée à frapper à la place d'un marteau »

Appui : `SUP-469a972633ca963d` (« Faverge (1970) donne comme exemple de catachrèse l'utilisation d'une
clef pour frapper à la place d'un marteau »), corroboré par `SUP-0ce1aa4ee67bf9a6` et
`SUP-3ac367ed1a69c7ce`. L'objet n'est plus spécifié, la scène a disparu, la formulation reste celle
de l'appui.

## C003 — `lead[0]` — TOO_STRONG — REMOVE

Motif : l'appui va jusqu'à « la généralité, sinon la fréquence du phénomène », formule qui réserve
expressément la fréquence, et ne dit rien de la perception des gestes.

Avant : « ces gestes sont si ordinaires qu'on ne les remarque presque plus »

Après : le segment est supprimé du `lead`.

Justification du geste plutôt qu'un resserrement sur place : la généralité ne se dit correctement qu'avec
la réserve qui l'accompagne, et cette réserve appartient à l'endroit où l'appui la porte, c'est-à-dire au
paragraphe qui cite la phrase de l'auteur (voir C037). La porter deux fois aurait allongé le texte pour
rien. Aucun appui du pack ne porte l'invisibilité de ces usages.

## C004 — `lead[0]` — TOO_STRONG — NARROW

Motif : la première moitié est autorisée, « et il le fait à peu près bien » ajoute un jugement de réussite
qu'aucun appui ne porte.

Avant : « L'outil fait un travail pour lequel il n'a pas été prévu, et il le fait à peu près bien. »

Après : « l'outil fait là un travail pour lequel il n'est pas conçu. »

Appui : `SUP-2ad613ff7ba76d49`, « l'utilisation d'outils pour des usages pour lesquels ils ne sont pas
conçus ». Le jugement d'efficacité est retiré ; « prévu » est aligné sur le « conçu » de l'appui.

## C009 — `lead[1]` — UNSUPPORTED — REMOVE

Motif : les appuis définissent la catachrèse rhétorique comme « l'usage d'un mot au-delà de son acception
propre, ou à la place d'un autre » ; ils ne posent nulle part la condition qu'aucun mot propre n'existe,
et « à la place d'un autre » suppose au contraire un autre mot disponible.

Avant : « Un mot mis là où aucun mot propre n'existe ; et par extension, écrit-il, un outil mis à la
place d'un autre, ou employé à un usage pour lequel il n'est pas conçu. »

Après : « Et par extension, écrit-il, un outil mis à la place d'un autre, ou employé à un usage pour
lequel il n'est pas conçu. »

Appui pour ce qui reste : `SUP-2ad613ff7ba76d49`, « Par extension l'idée a été transposée dans le champ
de l'outillage pour désigner l'utilisation d'un outil à la place d'un autre ou l'utilisation d'outils
pour des usages pour lesquels ils ne sont pas conçus. » La glose fautive tombe ; la citation de la
définition rhétorique, juste avant, reste intacte et porte seule ce sens.

## C013 — `sections[0].paragraphs[0]` — UNSUPPORTED — REMOVE

Motif : aucun appui ; le claim affirme comme un fait ce pour quoi le tournevis et le marteau ont été
pensés et ce pour quoi ils ne l'ont pas été.

Avant : « Un tournevis a une forme pensée pour visser, pas pour faire levier ; un marteau a un manche et
une masse pensés pour frapper, pas pour dévisser. »

Après : la phrase est supprimée. Le paragraphe enchaîne directement de « Tout outil est conçu avec une
idée de ce à quoi il doit servir » à « Cette idée est inscrite dans l'objet lui-même », puis à la
citation sur la rationalité instrumentale théorique et instituée, qui porte l'étalon.

Aucun exemple de remplacement n'est introduit : le pack n'en porte pas d'autre que celui de la clef,
déjà employé au `lead` et repris en `sections[3]`.

## C023 — `sections[0].paragraphs[1]` — TOO_STRONG — NARROW

Motif : les appuis portent seulement l'usage qui « passe pour un détournement à corriger » ; ni
l'interdiction, ni la conception d'objets rendant l'usage matériellement impossible.

Avant : « De là suivent les réponses habituelles : corriger l'usage, l'interdire, ou concevoir des objets
qui le rendent matériellement impossible. »

Après : « De là suit la réponse habituelle : l'usage passe pour un détournement à corriger. »

Appui : `SUP-862d69e7512c8e95` (« Utiliser un outil à la place d'un autre passe pour un détournement à
corriger ») et `SUP-f9e9aa3648d2ef04`, qui situe ce « à corriger » comme un resserrement de la
« connotation plutôt négative », des « détournements qui peuvent poser problème » et des accidents.
Les deux réponses non portées sont retirées, le pluriel avec elles.

## C033 — `sections[1].paragraphs[1]` — TOO_STRONG — NARROW

Motif : la glose « ce qu'il faut faire pour que le travail se fasse » convertit le travail réel en travail
nécessaire, et affirme donc que l'écart est requis pour que le travail aboutisse.

Avant : « la distance entre ce qu'une consigne demande et ce qu'il faut faire pour que le travail se fasse »

Après : « la distance entre ce qu'une consigne prescrit et ce que les gens font effectivement »

Appui : `SUP-2ad613ff7ba76d49`, « la différence entre les aspects prescrits du travail et ce qu'il est
convenu d'appeler le travail réel ». La glose reste une reprise des deux termes de l'appui, prescrit et
réel, sans la nécessité que le verdict signalait.

## C037 — `sections[1].paragraphs[1]` — TOO_STRONG — NARROW

Motif : l'appui porte une remarque située, et le claim l'érigeait en loi générale sur tout fait pour
lequel « une langue a forgé un mot » ; le terme est d'ailleurs emprunté à la rhétorique, non forgé pour
ce fait.

Avant : « Un fait pour lequel une langue a forgé un mot n'est pas un accident isolé. »

Après : « L'auteur lit donc dans l'existence de ce mot un indice de généralité, et il s'arrête là : la
fréquence, sa phrase la réserve expressément. »

Appui : `SUP-2ad613ff7ba76d49`, « l'existence même d'un terme désignant cet écart met en évidence la
généralité, sinon la fréquence du phénomène », citée verbatim dans la phrase qui précède immédiatement.
La portée est ramenée à la remarque de l'auteur sur ce mot, la loi générale disparaît, et la réserve sur
la fréquence, que la formule source pose expressément, devient visible pour le lecteur. C'est le refus
que l'énoncé de mission signalait comme le plus difficile à voir : la phrase source semblait autoriser
la fréquence, elle l'écarte.

## C041 — `sections[2].paragraphs[0]` — TOO_STRONG — NARROW

Motif : l'appui ne porte aucune optimalité, seulement la rationalité instrumentale propre du sujet et une
catachrèse qui « peut être […] considérée » comme production de ses moyens d'action.

Avant : « rapporté à ce que la personne cherche à obtenir, il est le chemin le plus court vers son but »

Après : « rapporté à la rationalité propre de qui s'en sert, il n'en est plus un »

Appui : `SUP-2ad613ff7ba76d49`, lecture « fondée non plus sur la rationalité instrumentale théorique,
inscrite originellement dans l'artefact, mais sur la rationalité instrumentale propre du sujet ». Le
changement d'étalon subsiste, qui est tout le contenu du paragraphe ; l'optimalité est retirée.

## C060 — `sections[4].paragraphs[0]` — TOO_STRONG — NARROW

Motif : les appuis donnent la catachrèse pour « un cas particulier d'un phénomène de caractère beaucoup
plus général », non pour « le cas le plus repérable ».

Avant : « elle est le cas le plus repérable d'un mouvement plus large, et l'auteur le nomme sans détour »

Après : « elle y est subordonnée à un mouvement beaucoup plus général, que l'auteur nomme sans détour »

Appui : `SUP-2ad613ff7ba76d49` et `SUP-51257e0a5dcee3eb` (« la seconde subordonne la notion au concept
plus large du livre »). Le superlatif tombe. La formulation évite de redire les mots de la citation qui
suit dans le même paragraphe.

## C063 — `sections[4].paragraphs[1]` — TOO_STRONG — NARROW

Motif : le claim présuppose trois réponses habituelles ; les appuis n'en portent qu'une, l'usage « à
corriger ».

Avant : « Les trois réponses par lesquelles on traite d'ordinaire ces usages visent toutes à les faire
disparaître ; les tenir pour des indices oblige d'abord à aller voir ce qu'ils désignent […] »

Après : « La réponse ordinaire, corriger l'usage, vise à le faire cesser ; le tenir pour un indice oblige
d'abord à aller voir ce qu'il désigne […] »

Appui : `SUP-862d69e7512c8e95` et `SUP-f9e9aa3648d2ef04`, mêmes appuis qu'en C023 et même resserrement.
Le passage au singulier entraîne l'accord des reprises pronominales dans la suite de la phrase, dont le
contenu, lui, est inchangé.

---

## Cohérence après correction

- Les deux passages qui énuméraient trois réponses (C023, C063) sont resserrés de la même façon et disent
  désormais la même chose : le texte ne promet plus une triade qu'il ne tiendrait pas.
- L'exemple de la clef, seul exemple d'objet que le pack porte, reste employé trois fois et toujours dans
  les termes de l'appui : au `lead`, dans le paragraphe sur la connotation négative où Faverge est nommé,
  et dans `sections[3]` où il sert à distinguer la fonction nouvelle de l'usage simplement hors norme.
- `limits` n'a pas été modifiée et aucun de ses contenus n'est remonté dans le texte lecteur.
- Aucun paragraphe n'a été ajouté, aucun passage retiré n'a été remplacé par un passage de longueur
  équivalente.

## Longueur

1 283 mots lecteurs, contre 1 370 avant correction : la baisse de 87 mots est exactement la somme des
retraits et des resserrements. Le texte reste au-dessus du seuil de 1 100 mots signalé dans le mandat,
et au-dessus de la borne dure du contrôle mécanique. Rien n'a été ajouté pour compenser.

## Ce qui reste à faire, et qui n'est pas de mon ressort

Toute modification du texte invalide le SHA du fact-check : la reprise repart de `PREPARE`. Aucun verdict
`FACTCHECK_PASS` n'est déclaré ici, et aucun `SUP-...` n'a été créé ni modifié.
