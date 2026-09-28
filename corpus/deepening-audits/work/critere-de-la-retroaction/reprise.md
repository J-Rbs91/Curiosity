# Reprise du 28 septembre 2026 — deux gestes, et deux seulement

Ceci n'est pas un nouvel audit, et ce n'est pas une troisième boucle de correction. L'audit
pédagogique (`audit.md`, verdict `REVISE`) et les deux tours de correction factuelle
(`factcheck-fixes.md`, `rewrite.md`) ont déjà eu lieu les 25 et 26 septembre 2026 : **ne les
rejoue pas, et ne reprends aucune de leurs onze corrections.**

Le texte en place dans `corpus/deepenings/critere-de-la-retroaction.json` est le candidat du
tour 2, refusé au plafond de boucles à **1 claim sur 58** du `FACTCHECK_PASS`. Il porte déjà les
onze corrections. La trace complète est dans
[`../../critere-de-la-retroaction.md`](../../critere-de-la-retroaction.md).

Deux gestes restent, et ils ne sont pas de même nature.

## 1. Borner `C038` — le seul reliquat documentaire

C'est le dernier refus du tour 2.

Ce que les appuis portent : `definition_de_lauteur` atteste que Paquette décrit **la
hiérarchisation des boucles et le déplacement des finalités**.

Ce que le texte avance en plus, et qui n'est porté par aucun appui :

- l'**emboîtement** des boucles les unes dans les autres ;
- un **niveau supérieur** donné comme **agent** du déplacement.

Geste attendu : `NARROW`. Ramène l'énoncé à ce que l'appui porte, sans lui substituer une autre
affirmation et sans compenser la perte ailleurs.

## 2. Restituer le thermostat et le joueur de quilles — réparation d'un défaut d'instrument

**Ce geste n'est pas une correction de plus, c'est la réparation d'une perte documentée.**

Au tour 1, `C008` a été refusé `UNSUPPORTED` au motif que « ni un thermostat ni un joueur de
quilles n'apparaissent dans aucun appui résolu ». Le pack contenait `SUP-421445a4beb428f3`,
`$.reserves[0]` de la lecture primaire, qui porte mot pour mot :

> l'auteur raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un thermocouple, un
> joueur de quilles, une fièvre, un professeur devant quelques centaines d'étudiants

L'appui était au pack ; aucun claim du mapping ne le citait. Le verdict était juste au vu des deux
appuis rattachés et faux au vu du dépôt, et la correction du tour 2 a retiré du texte **deux
exemples que l'auteur emploie réellement**.

Geste attendu : restitue le thermostat et le joueur de quilles dans la liste d'exemples du
`lead`, à leur place d'origine, sans rien ajouter d'autre et sans réécrire la phrase autour. La
liste du texte publié était :

> un thermostat, un autocuiseur, un réservoir de chasse d'eau, un joueur de quilles, une fièvre

Le texte en place porte aujourd'hui la liste amputée :

> un autocuiseur, un réservoir de chasse d'eau, une fièvre

**Vérifie la prémisse plutôt que de l'exécuter.** Ouvre `$.reserves[0]` du dossier et constate
toi-même que les deux termes y figurent. S'ils n'y sont pas, ne restitue rien et dis-le.

L'instrument qui avait laissé passer cette omission est corrigé depuis : le bundle du vérificateur
porte désormais un champ `appuis_non_cites`, et le verdict `MAPPING_INCOMPLETE` permet de renvoyer
au mapping au lieu de couper le texte. Ce n'est pas ton affaire, mais cela explique pourquoi ce
geste est autorisé ici.

## Ce qui est interdit dans cette reprise

- revenir sur l'une des onze corrections des tours 1 et 2 ;
- ajouter un exemple, une transition ou une nuance que ces deux gestes ne demandent pas ;
- allonger le texte pour compenser le bornage de `C038` ;
- promouvoir dans le `lead` un exemple attesté mais qui n'y figurait pas.

Le texte doit sortir de cette reprise **plus court que le texte publié** (1 198 mots lecteur) et
au plus de quelques mots plus long que le candidat en place (1 081 mots lecteur).
