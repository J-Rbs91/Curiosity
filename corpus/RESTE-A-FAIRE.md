# Ce qui reste à faire

Ce fichier existe pour qu'une session qui reprend le corpus sache **par où commencer**, sans
relire tout le dépôt et sans redécouvrir ce que huit lots ont déjà appris.

Il ne double pas `corpus/ETAT.md`, qui dit ce que le corpus **est** ; celui-ci dit ce qu'il
lui **manque**. Et il ne remplace aucun script : les chiffres ci-dessous sont un instantané
du 4 septembre 2026, les commandes sont la vérité.

```bash
npm run corpus:audit    # domaines, thèmes, cartes validées, sujets jamais instruits
npm run corpus:deepen   # projette les approfondissements, et liste en fin de sortie
                        # les cartes validées qui n'en ont pas : c'est la file, pas ce fichier
```

**Un décompte écrit à la main ment tôt ou tard.** Ce qui suit ne vaut donc que pour ce qu'un
script ne peut pas dire : quel travail est possible aujourd'hui, ce qu'il coûte, ce qui a déjà
été trouvé pour lui, et dans quel ordre les prendre.

---

## Les quatre chantiers, par coût croissant

| chantier | volume | recherche documentaire ? | état |
|---|---|---|---|
| **A.** Approfondissements | **aucun** | — | **fermé le 1er septembre 2026** |
| **B.** File de la sociologie des organisations | 25 entrées | oui, cartographie déjà faite | ouvert |
| **C.** Domaines vides | **aucun** | — | **fermé le 28 août 2026** |
| **D.** Reprises courtes des domaines instruits | voir les sections | oui, accès déjà constaté | **ouvert, et c'est par lui que la phase 3 avance** |
| **E.** Le garde de la CI ne couvrait qu'une moitié du répertoire projeté | **aucun** | non | **fermé le 2 septembre 2026** |

**Le chantier A est fermé.** Il s'était vidé le 21 août, rouvert et creusé pendant cinq lots
d'ouverture consécutifs jusqu'à trente-quatre cartes le 28 août, puis refermé en trois nuits :
seize cartes servies au passage 07 le 29 août, seize au passage 08 le 31, **les deux dernières au
passage 09 le 1er septembre**. `corpus:deepen` projette **113 approfondissements pour 113 cartes
validées** et sa fin de sortie ne liste plus rien. **La file est celle du script, pas celle de ce
fichier**, et elle est vide. Les passages 10, 11 et 12 l'ont rouverte de quatre, quatre et cinq
cartes et refermée la même nuit chaque fois : en phase 3, la nuit se termine par les
approfondissements des cartes qu'elle vient de créer, et le chantier ne se rouvre donc jamais
d'une nuit sur l'autre.

**Le chantier E est fermé**, par la première nuit de phase 3, le 2 septembre. Les deux workflows
lancent désormais `corpus:build` **et** `corpus:deepen` avant leur `git diff --exit-code
src/content/generated/` : le garde couvre les deux fichiers du répertoire qu'il nomme.

**Deux chantiers restent ouverts pour la routine, et la §2 de son prompt désigne lequel elle
prend.** Aucun domaine n'étant vide et aucune carte n'étant sans approfondissement, ses conditions
A et B sont fausses : **la condition C décide, et la phase 3 a commencé le 2 septembre**, sur
`behavioral-economics`, qui passe de quatre à huit cartes, a continué le 3 septembre sur
`sociology-of-work`, qui passe de sept à onze, le 4 septembre sur `work-psychology`, qui passe
de sept à douze et de deux thèmes à trois, et le 5 septembre sur `systems-thinking`, **qui passe de
sept à quinze cartes et de trois thèmes à cinq**. Elle enrichit un domaine par nuit, en rotation, et
**le suivant se déduit d'une égalité réelle, à huit cartes, que l'ordre de `taxonomy.ts` tranche :
`operations-management`**, placé ligne 126 contre la ligne 168 de `decision-science` — voir la fin
du chantier D.

**Le chantier C est fermé.** Il a perdu un domaine le 22 août, `systems-thinking`, un second le 23,
`decision-science`, un troisième le 25, `operations-management`, un quatrième le 26,
`work-psychology`, un cinquième le 27, `sociology-of-work`, et **le dernier le 28,
`behavioral-economics`**, ouvert et instruit dans la même nuit, qui rend quatre cartes et un thème
déclaré. **Les onze domaines déclarés sont instruits, et aucun n'est plus vide.**

**Une règle du dépôt disparaît avec ce chantier, et il faut le savoir avant de reprendre
n'importe quelle cartographie.** La catégorie « angle mort vers un domaine fermé », qui a doté cinq
domaines de leur stock d'entrée, **n'a plus de destinataire** : un candidat mal placé part
désormais chez un voisin ouvert, ou ne s'instruit pas. Il ne se consigne plus en attente d'une
ouverture qui n'aura pas lieu.

---

# A. Les approfondissements, chantier fermé le 1er septembre 2026

**Il n'y a plus de carte validée sans approfondissement.** `corpus:deepen` projette **113
approfondissements pour 113 cartes, 166 955 mots, 1 477 en moyenne**, et sa fin de sortie ne liste
plus rien. **Les onze domaines sont entièrement servis.** Ce chantier est conservé ici pour ce
qu'il a appris, non pour ce qu'il resterait à faire.

**Il ne se rouvrira plus durablement, et la phase 3 en est la raison** : une nuit de phase 3 crée
des cartes et écrit leurs approfondissements dans la même nuit. Les passages 10, 11 et 12 ont fait
passer la file de zéro à quatre, quatre et cinq, puis de nouveau à zéro entre le soir et la
clôture. **La file reste celle de `npm run corpus:deepen`, et elle fait foi contre ce fichier.**

**La file n'est pas tenue ici, et c'est ce qui a permis de la fermer.** `npm run corpus:deepen`
l'affiche en fin de sortie, et c'est elle qui fait foi contre ce fichier.

## Ce que les trois nuits de phase 2 ont rendu, et ce que la mesure vaut pour la suite

Vidé le 21 août 2026, rouvert le 23, doublé le 25, encore grossi les 26, 27 et 28 jusqu'à
trente-quatre cartes, **puis refermé en trois nuits** : seize au passage 07 le 29 août, seize au
passage 08 le 31, les deux dernières au passage 09 le 1er septembre. Les projections passent de 66
à 100, et d'environ 96 000 à 146 324 mots. **Aucun refus de projection, aucun renvoi, sur les
trente-quatre.**

**Seize est le plafond d'une nuit, et il est atteignable deux nuits de suite** : deux lots de huit
agents en parallèle, environ cinq minutes par agent. Une nuit de phase 2 est bornée par sa file,
pas par son plafond : la troisième n'a servi que deux cartes et s'est arrêtée là, la §2 lui
interdisant d'ouvrir ou de créer quoi que ce soit.

**Le coût de surveillance disparaît en phase 2, et la courbe est nette** : sept agents sur huit ont
eu besoin d'un « écris maintenant » au passage 06, quatre sur seize au 07, **aucun sur seize au 08,
aucun sur deux au 09**. La contre-mesure du chantier C reste écrite, mais **c'est en phase 1 et en
phase 3 qu'elle vaut**, là où un agent télécharge, océrise et attend le réseau. **Le passage 12 l'a
éprouvée en phase 3 et elle a servi deux fois sur onze agents** : un lecteur primaire et un second
en sont restés à leur squelette pendant plus de dix minutes, et un « écris maintenant » les a
rattrapés. La surveillance de la taille du fichier de sortie coûte presque rien et reste à faire
systématiquement.

## Ce que ce chantier laisse derrière lui, et qui n'est pas de son ressort

**Les trente-quatre textes servis déclarent presque tous l'absence de source secondaire ouverte**,
et plusieurs le disent avec une précision qui vaut plan de travail. Un `corpus-deepener` n'y peut
rien par construction : il n'ouvre aucune source. **Cette dette est au chantier D**, elle ne se
paie qu'en phase 3, sur des reprises courtes, et elle suppose que le serveur MCP `documentary`
réponde — il est en échec de connexion (`CONNECTION_CLOSED`) depuis le 29 août.

## Ce que ce passage a appris, et qui resservira

Un rédacteur par carte, aucune recherche documentaire, la matière étant la carte elle-même,
sa lecture primaire et son verdict de contrôle. Trois choses valent d'être gardées.

**Le contrôle cherche des chaînes littérales, et il attrape donc des métaphores.** Un texte a
été renvoyé sur « la carte », qui expose le dispositif au lecteur : c'était « le seul plat de
la carte », une image du menu. Le renvoi était un faux positif, et la réécriture était quand
même la bonne décision, l'ambiguïté faisant trébucher un lecteur qui vient de fermer une
carte. Un rédacteur qui rencontre ce refus doit d'abord regarder ce que sa phrase dit
vraiment.

**Le meilleur signe qu'un texte est bien écrit est la liste de ce qu'il a refusé d'écrire.**
Les comptes rendus les plus solides du lot consacraient l'essentiel de leur place à cela :
l'appareil d'établissement laissé dehors, les sources jamais ouvertes nommées par ce qu'elles
détiennent et jamais par ce qu'elles diraient, les passages que seule une couche océrisée
portait reformulés sans guillemets plutôt que présentés comme du verbatim.

**Le répertoire de travail temporaire est partagé entre agents parallèles.** Trois rédacteurs
ont vu leur script de fabrication écrasé par celui d'un voisin, et l'un d'eux a régénéré le
fichier d'un autre. Rien n'a été perdu, vérification faite fichier par fichier, mais un lot
lancé en parallèle doit préfixer ses fichiers de travail par l'identifiant de sa carte.
**La consigne a tenu au passage 07** : seize agents en parallèle, aucun écrasement.

**Le contrôle de projection achoppe sur les guillemets, et c'est la leçon du 29 août.** Le
comparateur de citations normalise `«` et `“` en `"` mais ne recolle pas les espaces : un verbatim
recopié avec des guillemets anglais là où l'imprimé porte des guillemets français à espaces fines
insécables est signalé absent alors qu'il est juste. **Il se rétablit en reprenant la typographie
de l'imprimé, jamais en retirant la citation.** Même famille de piège sur des guillemets doubles
imbriqués, que l'échappement JSON fait trébucher : la parade est de citer par fragments courts.
Un rédacteur qui rencontre ce signalement doit d'abord comparer sa typographie à celle de la
source, avant de conclure à une erreur de recopie.

---

# B. La file de la sociologie des organisations

**Vingt-cinq entrées sur trente restent à instruire** dans `corpus/map/queue.json`, établie par
le cartographe le 16 août. Le domaine est le plus ancien du corpus et porte dix cartes.

C'est le chantier au meilleur rendement documentaire : **la cartographie est faite**,
l'accessibilité de chaque entrée a déjà été constatée et écrite, et le rang de chacune est
motivé. Un lot y démarre sans passage de scout.

Les premières entrées encore ouvertes, avec l'accessibilité telle que le cartographe l'a
constatée :

| rang | id | auteur pressenti | accès |
|---:|---|---|---|
| 3 | `couplage-lache` | Karl E. Weick | bonne, DOI résolu — **déjà en `corpus/candidates/`** |
| 7 | `dependance-aux-ressources` | Pfeffer et Salancik | moyenne, ouvrage sans DOI |
| 8 | `loi-airain-oligarchie` | Robert Michels | bonne, par une voie inhabituelle |
| 9 | `mythe-et-ceremonie-decouplage` | Meyer et Rowan | bonne, DOI résolu |
| 10 | `apprentissage-double-boucle` | Argyris et Schön | moyenne à bonne |
| 11 | `differenciation-integration` | Lawrence et Lorsch | bonne, DOI résolu |
| 13 | `routines-organisationnelles` | Feldman et Pentland | bonne, DOI résolu |

**`couplage-lache` est la seule fiche non validée du corpus.** Elle est en `CANDIDATE`, sans
notes ni verdict, et `corpus:audit` la compte comme « 1 en cours » depuis plusieurs lots.
C'est la reprise la plus courte du dépôt.

## Deux thèmes déclarés ne portent aucune carte

`autorite-domination` · `apprentissage-organisationnel`

Ce sont des thèmes de la première heure, écrits **avant** toute instruction documentaire pour
construire l'application, et `corpus/perimeter.md` le reconnaît en toutes lettres. Ils
affichent aujourd'hui une page vide.

Ils étaient trois. **`reaction-insatisfaction` a été pourvu le 22 août** par le rang 6,
`exit-voice-loyalty`, et par une seconde carte prise dans son voisinage : le rapprochement
annoncé ici tenait, et le lot est rapporté dans `corpus/ETAT.md`.

Un seul des deux restants se comblerait par une entrée de la file, et le rapprochement est
direct plutôt qu'approximatif :

- **`apprentissage-organisationnel`**, « ajuster ses moyens, ou remettre en cause ses
  présupposés », attend `apprentissage-double-boucle` (Argyris et Schön), rang 10.

**`autorite-domination` n'a aucune entrée dans la file qui le pourvoie**, et c'est un écart à
signaler plutôt qu'à combler par un rapprochement commode. Le thème porte sur ce qui fait
qu'un ordre est obéi sans contrainte, c'est-à-dire sur la légitimité au sens wébérien. Les
entrées qui en approchent visent autre chose : `loi-airain-oligarchie` (Michels, rang 8) porte
sur la dérive oligarchique, `cooptation` (Selznick, rang 26) sur le pouvoir et la légitimité
d'une organisation face à son environnement, et `bureaucratie-type-ideal` (Weber, rang 17) est
rangée par le cartographe sous « bureaucratie et rationalisation », donc vers un thème déjà
pourvu. Pourvoir ce thème demande de le chercher, pas de le déduire.

## Ce que la cartographie demande de refaire avant le prochain lot

Écrit dans `queue.json`, sous `prochain_passage_de_cartographie`. En résumé : ouvrir Davis &
Zald sur le canon de la discipline, repéré sans être lu ; relancer OpenAlex et Semantic
Scholar hors période de saturation, **les courants qu'ils auraient fait remonter étant
inconnus et non absents** ; et interroger explicitement l'institutionnalisme scandinave et la
tradition germanophone, que la file ne couvre pas.

---

# C. Les domaines vides, chantier fermé le 28 août 2026

**Il n'y a plus de domaine vide.** Les onze domaines déclarés dans `src/content/taxonomy.ts` sont
instruits, et ce chantier n'a plus d'objet. Il est conservé ici pour ce qu'il a appris, non pour ce
qu'il resterait à faire.

Il s'est vidé en sept passages : `systems-thinking` le 22 août 2026, `decision-science` le 23,
`operations-management` le 25 après une ouverture en deux temps, `work-psychology` le 26,
`sociology-of-work` le 27, et **`behavioral-economics` le 28**, onzième et dernier, ouvert et
instruit dans la même nuit pour quatre cartes et un thème.

**Une règle du dépôt disparaît avec ce chantier, et c'est la conséquence la plus concrète de sa
fermeture.** La catégorie « angle mort vers un domaine fermé » **n'a plus de destinataire**. Elle a
doté cinq domaines de leur stock d'entrée et elle a été le meilleur investissement de méthode du
dépôt ; elle est désormais sans emploi. Un candidat mal placé part chez un voisin ouvert, ou ne
s'instruit pas. Il ne se consigne plus en attente d'une ouverture qui n'aura pas lieu.

## Les trois leçons qui survivent au chantier, et qui valent pour tout le reste du dépôt

**1. L'ordre d'ouverture n'est pas négociable, et il a été appris en le violant.**

> le périmètre s'écrit → le scout cartographie → **puis** les thèmes se déclarent → puis les
> concepts s'instruisent

Les neuf thèmes de la sociologie des organisations ont été posés de mémoire avant toute lecture, et
le périmètre le reconnaît lui-même comme un découpage a priori : c'est pourquoi deux d'entre eux
affichent encore une page vide. La règle qui en découle vaut partout : **un thème sans carte
validée ne se déclare pas.** Elle a tenu à chaque ouverture depuis, y compris la dernière, où un
seul thème a été déclaré là où la cartographie en proposait cinq.

**2. Un legs se vérifie, et il rend.** C'est le résultat de méthode le plus net de ce chantier,
constaté cinq fois. Les textes qu'une cartographie consigne en angle mort pour un voisin sont
repris tels quels par le passage qui ouvre ce voisin, et ils rendent : `systems-thinking` a ouvert
sur trois textes légués, `decision-science` sur cinq, `behavioral-economics` sur quatre pièces
Persée dont **trois de ses quatre cartes sont issues**. Le cas de ce dernier est le plus
instructif, parce qu'il a failli ne pas avoir lieu : trois passages avaient écrit n'avoir rien
cherché pour lui, et la dette n'a été payée qu'au quatrième, la veille de son ouverture, par un
balayage doté de son propre budget. **Une dette payée une nuit rend la nuit suivante ; une dette
reportée coûte un balayage entier.**

**3. La leçon opératoire, qui a rendu quatre lots et qui s'est aggravée.** Ces agents accumulent
tout en contexte et n'écrivent qu'à leur dernière action. Quatre contre-mesures :

1. **pré-identifier les sources avant de lancer un agent** : identifiant d'item, URL de l'OCR, URL
   des images, taille attendue du fichier. Un scout ne doit pas chercher ce qu'une requête de
   trente secondes peut lui donner ;
2. **interdire la relecture intégrale d'un gros fichier** : les OCR font 70 à 990 Ko, ils se
   travaillent au `grep` par fenêtres, jamais avec l'outil de lecture ;
3. **borner le nombre de requêtes réseau**, et demander à l'agent d'en tenir le compte ;
4. **exiger l'écriture du fichier de sortie tôt**, dès la première section, et par éditions
   successives. « Un fichier partiel vaut infiniment mieux qu'un fichier parfait jamais écrit. »

**Ces quatre ne suffisent plus, et le passage 06 l'a payé.** Sept agents sur huit ont écrit leur
squelette dans les deux premières minutes, puis se sont tus vingt à quarante minutes, et il a fallu
envoyer à chacun un « écris maintenant ». Tous ont rendu ensuite, aucun n'a été perdu. **Mais la
surveillance de la taille du fichier donne une image en retard sur l'état réel de l'agent** :
plusieurs ont répondu qu'ils avaient déjà écrit leur fichier complet au moment où le rappel
arrivait, et un rappel envoyé sur cette foi leur coûte un tour. La contre-mesure reste bonne, elle
a rendu quatre agents cette nuit-là ; **elle se déclenche plus tard qu'on ne le croyait.**

## Le piège que ces domaines partageaient, et qui n'a plus de chantier mais reste vrai

La cybernétique a montré ce que coûte un champ dont le vocabulaire est disponible pour n'importe
quel usage métaphorique. « Système », « décision », « flux », « motivation », « biais » circulent
partout. Le rejet le plus fréquent reste le même, **un texte qui invoque le mot sans mécanisme
identifiable ni auteur rattachable**, et il se traite de la même façon : `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un candidat gris non tranché
revient toujours par une autre porte.

**Ce répertoire a enfin reçu son premier enregistrement le 28 août 2026**, `reciprocite`, après
avoir été vide depuis l'origine du dépôt. Le motif n'est pas le vocabulaire métaphorique mais son
symétrique : un texte de synthèse, qui rapporte l'écart au lieu de l'établir. C'est le cas que le
périmètre du domaine avait prévu et écarté d'avance, et le rejet applique donc une règle écrite
avant la lecture.

## Où est passé ce que cette section portait

Le legs de `behavioral-economics`, ses accès vérifiés positifs et négatifs, et ce qu'il reste à en
tirer ne sont plus ici : ils vivent désormais à leur place.

- **Le périmètre du domaine**, avec son legs détaillé et ses six frontières, est dans
  `corpus/perimeter.md`, section « Domaine ouvert — `behavioral-economics` ».
- **La cartographie**, ses cinq candidats vérifiés ouverts, son appui secondaire et ses angles
  morts, est dans `corpus/map/behavioral-economics.scouting.md`, 627 lignes.
- **Le compte rendu du lot** est dans `corpus/ETAT.md`, section « Économie comportementale ».
- **Les reprises courtes** qu'il laisse sont au chantier D ci-dessous, avec celles des autres
  domaines instruits.

---


# D. Les reprises courtes des domaines instruits

**Depuis la fermeture du chantier A, le 1er septembre 2026, c'est ici que la routine nocturne
reprend.** Ses conditions A et B sont fausses — aucun domaine vide, aucune carte sans
approfondissement —, sa condition C est donc vraie et sa phase 3 commence : un domaine enrichi par
nuit, en rotation.

**Le premier domaine a été pris le 2 septembre 2026, au passage 10 : `behavioral-economics`**,
désigné par le critère de repli comme le moins doté, avec quatre cartes. Il en porte huit, **et il
n'est plus le moins doté du corpus**. La reprise 1 ci-dessous, les deux cartes de Tarde, est faite ;
la reprise 4, la source secondaire Milet, aussi, et elle a donné **la première source secondaire
affichée du dépôt** ; la reprise 5 a rendu Albou 1962, ouvert page à page sur ses 81 pages, dont
deux cartes sont tirées. **Restent ouvertes les reprises 2 et 3**, et ce que le lot a lui-même
ouvert, listé en fin de section.

**Le deuxième domaine a été pris le 3 septembre 2026, au passage 11 : `sociology-of-work`**, par le
même critère de repli puis par l'ordre de `taxonomy.ts`, qui tranchait une égalité à sept entre
trois domaines. Il en porte **onze**. Le lot a travaillé la priorité 3, les angles morts de
`corpus/map/sociology-of-work.scouting.md`, et il en a fermé trois définitivement : la traduction
Maspero 1976 de Braverman, **zéro résultat**, ce qui laisse la déqualification sans source primaire
atteignable ; le reste du numéro 344 du *Bulletin de psychologie*, dépouillé en entier, 55 articles,
**clos négativement** ; et Dassa 1983, qui n'était que repéré et qui a rendu une carte. **Piore 1975
reste ouvert et reste un échec réseau**, sixième HTTP 429 cumulé, sans qu'aucun
`access-restricted-item` n'ait jamais été vu sur l'item. Ce que ce lot a lui-même ouvert est écrit
dans son compte rendu et dans sa cartographie ; **le moins cher est Hughes, « Licence and Mandate »,
dans un volume déjà ouvert et vérifié.**

**Ce lot a aussi soldé la faiblesse structurelle de ce domaine.** Ses sept cartes antérieures
portaient toutes l'avertissement « aucune source secondaire affichée » ; les quatre nouvelles en
portent chacune au moins une, ouverte et lue dans son corps, avec sa réserve écrite. C'est le
deuxième domaine, après `behavioral-economics`, à sortir de cette dette.

**Le quatrième domaine a été pris le 5 septembre 2026, au passage 13 : `systems-thinking`**, seul à
sept cartes et donc désigné sans arbitrage. **Il en porte quinze, et il passe de trois à cinq
thèmes** : c'est le lot le plus volumineux de la phase 3, au plafond exact de huit cartes. Il n'a
creusé aucune littérature déjà ouverte : **les six que la cartographie du 22 août déclarait non
balayées l'ont été**, et les huit cartes en viennent. Les trois reprises courtes que ce fichier
portait pour ce domaine sont closes, **deux d'entre elles négativement** : voir la section qui les
concernait, réécrite ci-dessous. Le compte rendu du lot est dans `corpus/ETAT.md`, section
« Systems Thinking enrichi ».

**Deux voies d'accès nouvelles en sont sorties**, et elles valent pour tout le dépôt : la mise en
ligne d'un ouvrage par son auteur sur Internet Archive **sans restriction d'emprunt**, et les
**extraits autorisés d'UNESCO-EOLSS**. Elles sont portées aux pièges d'accès transversaux, en fin
de fichier.

**Le domaine suivant se déduit de la même règle, et il vaut d'être écrit ici pour que la nuit qui
reprend n'ait pas à le recalculer.** `behavioral-economics`, `sociology-of-work`, `work-psychology`
et `systems-thinking` ont désormais un enrichissement au journal, daté du 2, du 3, du 4 et du 5
septembre, et sortent de la rotation jusqu'à ce que les autres soient passés. Aucun des six autres
n'en a : le critère de repli s'applique et désigne celui qui a le moins de cartes validées.
**Ils sont deux à huit, `operations-management` et `decision-science` : l'égalité est réelle cette
fois, et c'est l'ordre de `src/content/taxonomy.ts` qui la tranche**, en plaçant
`operations-management` (ligne 126) avant `decision-science` (ligne 168). **C'est donc
`operations-management`.** En son sein, la priorité 1 est sans objet, les deux thèmes déclarés sans
carte étant en sociologie des organisations, et la priorité 2 aussi, `corpus/map/queue.json` ne
couvrant que ce même domaine : **la priorité 3 commande, les angles morts de
`corpus/map/operations-management.scouting.md`**, dont ce fichier dit qu'il hérite de trois rapports
mirés sur Internet Archive. Le décompte qui tranche est le tableau par domaine de
[`corpus/ETAT.md`](ETAT.md), et `npm run corpus:audit` le rend à la demande.
**En phase 3, la nuit se termine par les approfondissements des cartes qu'elle vient de créer** :
les passages 10, 11 et 12 l'ont fait, et la file de `corpus:deepen` est repartie de zéro et y est
revenue dans la même nuit, les trois fois.

**Ce domaine part avec le legs le plus riche des quatre nuits de rotation.** Deux de ses entrées ne
sont pas seulement d'accès constaté : **leur texte a été ouvert et lu** par le lot du 23 août, et
il n'a pas été instruit parce que le plafond de volume était atteint. C'est moins cher que tout ce
que les trois nuits précédentes ont eu à leur disposition.

**Une condition matérielle pèse sur tout ce chantier, et elle ne s'est pas levée.** Le serveur MCP
`documentary` est en échec de connexion (`CONNECTION_CLOSED`) depuis le 29 août, **sept nuits
consécutives au 4 septembre**. `corpus-scout`, `corpus-primary-reader` et `corpus-blind-reviewer`
s'appuient tous les trois sur ses outils de recherche et de vérification de référence, et la
phase 3 en dépend donc.

**Le retour du 1er septembre à 06h10 UTC ne s'est jamais confirmé.** Il avait répondu une fois, sur
une référence de ce chantier même, le DOI `10.3389/fpsyg.2021.785721` de la reprise 3 ci-dessous,
puis disparu et réapparu trois fois en quelques minutes. Les passages 10, 11 et 12 l'ont constaté
fermé, chacun avant son lot, et non sur la foi de cette ligne. **La nuit suivante fait de même** :
elle ne tient ni son retour ni sa fermeture pour acquis sur ce qui est écrit ici.

Sans lui, une nuit peut encore travailler par `WebSearch`, `WebFetch` et `curl`, et résoudre ses
DOI par l'API Crossref directe, ce que les trois nuits de phase 3 ont fait. Mais **elle perd la
vérification de référence structurée**, et la règle « une référence introuvable n'existe pas » se
durcit d'autant : dans le doute, la carte ne se publie pas. Deux textes ont été écartés pour cette
seule raison au passage 11, Penissat 2009 et *Le regard sociologique*, faute d'en avoir pu lire une
ligne de corps.

**Un second blocage de dispositif dure depuis trois nuits, et il n'est plus à rediagnostiquer.**
`Task` n'est pas exposé à `corpus-orchestrator` : il ne peut lancer aucun sous-agent, donc les
cinq maillons de la chaîne lui sont indéclenchables. Constaté par appel réel au passage 12, un
orchestrateur lancé en diagnostic ayant énuméré ses six outils et confirmé qu'aucun ne lance de
sous-agent. **La parade du passage 12 est la meilleure des trois essayées, et c'est celle à
reprendre** : la session orchestre elle-même et lance les sous-agents `corpus-*` un par un par
l'outil `Agent` du harnais, sans produire elle-même aucune connaissance. Les passages 10 et 11
avaient lancé des processus `claude -p --agent <nom>` en headless, ce qui marche aussi mais coûte
plus cher et prive l'orchestrateur des comptes rendus structurés.

**Trois accès sont fermés et constatés sur pièce au 4 septembre**, à ne pas retenter à
l'identique : **Cairn**, `HTTP 403` derrière un défi anti-robot DataDome sur deux points d'entrée
distincts ; **l'API SRU de Gallica**, `403 Access Denied`, constaté par trois agents indépendants
dans la même nuit ; et **l'API plein texte d'Internet Archive**, refusée par le proxy sortant
(`CONNECT 502, connect_rejected`). Aucun n'a été contourné, et aucun ne conclut rien sur le fond de
la littérature : ce sont des refus d'accès, pas des silences.

## Cinq reprises laissées par le lot du 28 août, sur `behavioral-economics` — trois faites le 2 septembre

**Trois des cinq sont soldées par le passage 10.** La reprise 1 a rendu les deux cartes de Tarde,
la reprise 4 a donné la première source secondaire affichée du dépôt, et la reprise 5 a rendu
Albou 1962, dont deux cartes sont tirées. **Restent ouvertes la 2 et la 3**, et le lot en a ouvert
quatre autres, écrites en fin de section. Les cinq entrées d'origine sont conservées telles quelles
ci-dessous, avec leur état, parce que les accès qu'elles constatent servent encore.

**1. Les deux cartes de Tarde — FAITE le 2 septembre 2026.** `valeur-comme-fait-psychologique`
(t. I, p. 109) et `critique-de-l-homo-oeconomicus` (t. I, p. 114-115) sont validées et publiées,
toutes deux en `PASS` au premier tour, toutes deux avec citation relue sur l'image, toutes deux
portant Milet 1982 en source secondaire. Le pronostic tenait : la lecture primaire étant faite, il
n'a manqué que la rédaction et le contrôle. Description d'origine conservée pour ses constats
d'accès :

**1. Les deux cartes de Tarde, et il ne manque que de les écrire.** La lecture primaire est faite,
complète et rendue, **les deux citations relues sur l'image du feuillet** :
`corpus/evidence/valeur-comme-fait-psychologique/lecture.json` et
`corpus/evidence/critique-de-l-homo-oeconomicus/lecture.json`. L'exemplaire est
`psychologiecono03tardgoog` (University of Michigan, collection `americana`,
`possible-copyright-status: NOT_IN_COPYRIGHT`, aucune restriction de prêt), OCR de 836 659 octets,
images appelées en `.../page/nN.jpg` **sans suffixe de dérivé**, décalage de folio établi
`n<N> = page + 13`. Il ne manque que la rédaction des cartes et leur contrôle aveugle : elles n'ont
pas été écrites faute de temps, pas faute de matière. **C'est la reprise la moins chère du dépôt.**

**2. Une troisième carte de Tarde, repérée et non citable en l'état.** Le tome II porte une théorie
psychologique des prix, au livre « L'opposition économique » : « le juste prix [...] n'est
définissable qu'en termes psychologiques », et le prix déterminé « non pas par les quantités
réelles des marchandises offertes ou demandées, mais par leurs quantités supposées ». **Vue en
couche OCR seulement, non relue sur image**, et l'OCR du tome II est nettement dégradé. Ce serait
la plus directement comportementale des trois.

**3. L'effet de dotation, par la voie légitime qui a été trouvée.** Baratgin, J., Godin, P. et
Jamet, F. (2022), « How the Custom Suppresses the Endowment Effect: Exchange Paradigm in Kanak
Country », *Frontiers in Psychology* 12:785721, **PDF vérifié `HTTP 200`, 839 103 octets**. Son
pendant francophone, Jamet, Baratgin et Godin (2017), « Don, droit, coutume, cultures », HAL
`hal-04108632`, p. 123-152, **PDF servi en `200`, 499 074 octets, corps non lu** faute
d'extracteur PDF dans l'environnement : c'est une limite d'outillage, pas un défaut d'accès.
**Réserve à ne pas manquer** : les deux sont du **même collectif d'auteurs**, l'un en anglais
l'autre en français. Ce n'est pas une double attestation indépendante, et un thème bâti sur eux
seuls reposerait sur une seule équipe.

**4. La source secondaire — FAITE le 2 septembre 2026, et c'est le fait dominant du passage 10.**
Milet 1982 a été ouvert en entier, **ses sept pages sur sept lues sur l'image**, notes comprises,
aucune en OCR seul, DOI `10.3406/bupsy.1982.12030` résolu par l'API Crossref, signature établie sur
l'imprimé contre la coquille « J. MUET ». Elle est portée en `francophone-reception` sur les deux
cartes de Tarde, **qui sont les deux premières fiches du dépôt à ne pas déclencher l'avertissement
« aucune source secondaire affichée »**. La réserve d'antériorité est portée en entier sur les deux
cartes et dans leurs approfondissements : Milet **récuse lui-même** la lecture large de son titre
page 909, nomme Schmoller, Wagner, Menger, puis Bagehot, Royce, Baldwin et Giddings, réduit sa
revendication à une phrase adversative, et conclut page 913 sur « un initiateur ». **Une carte qui
ferait de Tarde le fondateur de la discipline sur sa foi écrirait un faux** : aucune ne l'écrit.
Ce qui reste vrai pour la suite : **le titre d'un article est une notice bibliographique, pas une
thèse reçue**. Description d'origine conservée :

**4. La source secondaire, et c'est le premier remède au manque structurel de cinq lots.** Milet,
Jean (1982), « Gabriel Tarde (1843-1904) : le créateur de la psychologie économique », *Bulletin de
psychologie* 35(357), p. 907-913, id Persée `bupsy_0007-4403_1982_num_35_357_12030`, page 907 lue
sur la pièce. **Signal à ne pas escamoter** : c'est une revendication d'antériorité formulée par un
tardien, dans la revue même où Albou et Reynaud tenaient la discipline. **L'attribution de la
fondation est disputée dans la lignée elle-même**, et un lecteur doit la traiter comme une
position, pas comme un fait. Coquille d'OCR à connaître : la signature est rendue « J. MUET ».

**5. Albou 1962 — FAITE le 2 septembre 2026 ; Roche-Agussol reste ouvert.** L'article a été ouvert
**page à page sur ses 81 pages**, toutes obtenues en `HTTP 200`, la plus courte à 3 058 caractères
et aucune vide, ce qui écarte le piège d'une couche OCR amputée. Deux cartes en sont tirées,
`substitution-des-problemes-aux-secteurs` (p. 10) et `amenagement-onereux-du-monde-exterieur`
(p. 11). **Le doublon de fond avec les deux cartes de 1982 est écarté sur pièce** : la chaîne
« science des conduites » ne figure pas dans le texte de 1962, qui dit « comportement » vingt-huit
fois. **La querelle contre Reynaud est documentée et non tranchée** — l'attaque est page 7, « cet
ouvrage ne définit nulle part la discipline dont il traite », et la pièce ne contient rien du côté
de Reynaud. **Maurice Roche-Agussol n'a pas été touché** et reste l'angle mort d'origine.
Description conservée :

**5. Deux pistes repérées et non vérifiées.** Maurice Roche-Agussol, **jalon de la lignée que le
périmètre ne connaissait pas**, entre Tarde et Reynaud : items `IA41555614_0038` et `jstor-1883573`
repérés, aucun vérifié. Et Albou, P. (1962), « Initiation à la psychologie économique », *Bulletin
de psychologie* 16(211), p. 1-81, DOI `10.3406/bupsy.1962.8918`, **notice `200`, 82 pages liées,
`DC.rights: free`, thèse propre établie sur la pièce** : Albou y prend parti contre Reynaud,
nommément. C'est la pièce qui documenterait la querelle d'antériorité que le lot a consignée sans
la trancher.

**Ce qui est vérifié fermé et ne se retente pas.** Kahneman, Knetsch et Thaler 1991 (filtrage
anti-robot `403` sur `pubs.aeaweb.org`, retenté et confirmé le 28 août) ; Thaler 1980 (revue
Elsevier, seul miroir une page de cours, motif de droits et non d'accès) ; Katona 1951 (prêt
numérique contrôlé). **Et la veine `dticarchive` ne porte pas ce domaine** : deux requêtes bien
formées, 1 345 résultats cumulés, une seule pièce approchante et hors objet. Ne pas y revenir.

**S'y ajoute, depuis le 2 septembre : Barre 1959, vérifié fermé après six routes.** L'API Google
Books répond `429`, quota journalier épuisé ; Internet Archive n'a pas l'ouvrage. C'est lui, et lui
seul, qui trancherait l'origine du syntagme « aménagement onéreux du monde extérieur », qu'un
contrôleur aveugle a établi comme circulant sous le nom de Raymond Barre là où la carte le donnait
pour la formule d'Albou. **Ni l'une ni l'autre attribution n'est établie, et la carte n'en écrit
aucune.** Une variante prête d'ailleurs la formule courte à François Perroux.

## Quatre reprises ouvertes par le lot du 2 septembre, sur `behavioral-economics`

Elles sont écrites ici parce qu'elles n'existaient pas avant ce lot, et qu'elles sont toutes des
suites directes de ce qu'il a lu.

1. **La position de Reynaud dans la querelle d'antériorité n'a jamais été ouverte.** Albou porte
   l'attaque en 1962 aux pages 7 et 10, et la revendique de nouveau en 1982 ; le corpus porte deux
   cartes tirées de Reynaud 1962 et n'a jamais lu ce qu'il répond, s'il répond. C'est la reprise la
   moins chère de cette liste, la pièce de Reynaud étant déjà ouverte et vérifiée sur Persée.
2. **La critique du programme de Katona, annoncée au chapitre IV d'Albou 1962, n'est pas
   instruite** — le reproche est fait page 12, à Katona et à Lauterbach. **C'est la voie
   francophone ouverte vers Katona**, dont les deux ouvrages sont vérifiés fermés en prêt numérique
   contrôlé : ce qu'on ne peut pas lire chez lui se lit sur lui, en français, dans une pièce déjà
   ouverte.
3. **Barre 1959**, fermé après six routes, seul à pouvoir trancher l'origine du syntagme.
4. **La réception d'Albou 1962 n'est établie par rien.** Aucune source secondaire n'a été ouverte
   sur ce texte, ni par la cartographie ni par la lecture primaire, et les deux cartes qui en
   viennent portent l'avertissement de `corpus:validate` en conséquence. Le remède est du même
   genre que celui qui a marché pour Tarde : chercher une secondaire francophone ouverte, dans le
   *Bulletin de psychologie* lui-même ou autour.

## `work-psychology`, enrichi le 4 septembre : ce qui est soldé, ce qui reste

**Les quatre reprises laissées par le lot du 26 août sont traitées, et trois d'entre elles sont
closes définitivement.**

- **`attention-diffusee-et-selection` est publiée.** Son blocage était l'accès, pas le fond : la
  source primaire était en `partial`, onze pages sur soixante-sept. **Les 67 pages ont été
  ouvertes**, quinze relues sur fac-similé, la source est en `full-text`, la fiche a reçu `PASS`
  au premier tour. Le trou comblé a rendu une seconde carte,
  `classement-par-valeurs-compensatrices`, et a démenti trois affirmations du dossier du 26 août,
  dont **le barème des 2 000 sujets, qui n'existe pas**.
- **Le numéro 344 du *Bulletin de psychologie* est clos**, pour ce domaine comme pour
  `sociology-of-work`. Le passage 11 en avait dépouillé les 55 articles ; le seul resté en suspens
  de ce côté-ci, Labrousse 1980, `10.3406/bupsy.1980.11741`, a été lu en entier et écarté comme
  texte d'orientation sans thèse propre. **Aucun budget ne doit plus lui être consacré.**
- **`DTIC_ADA065892` est clos.** Ce n'est pas un texte de Porter et Lawler : la page de titre, lue
  en image sur le dérivé sans suffixe, porte « Paul F. Daspit, Capt USAF », mémoire de master de
  l'Air Force Institute of Technology, septembre 1978. Le tampon « DDC RECEIVED MAR 15 1979 » est
  une date d'enregistrement. Contribution propre réelle, résultats mitigés de l'aveu de l'auteur,
  aucune reprise trouvée.
- **Herzberg 1959 et Walker & Guest 1952 restent des impasses**, prêt numérique, non retentées.

**Et la couche francophone a été balayée pour de bon.** Les quatre bases que la cartographie
d'ouverture déclarait « non interrogées du tout » l'ont été, et **aucune n'a rendu de candidat** :
HAL en huit requêtes n'indexe que de la recherche appliquée testant des modèles anglophones ;
**Cairn est fermé**, `HTTP 403` derrière un défi anti-robot sur deux points d'entrée, à ne pas
retenter ; OpenEdition Books a rendu du texte intégral, par ses pages de collection qui sont du
HTML statique, mais son seul candidat sérieux a été écarté après lecture complète ; theses.fr ne
sert qu'à vérifier une thèse déjà nommée. Le détail des requêtes est dans la section « Reprise du
4 septembre 2026 » de `corpus/map/work-psychology.scouting.md`.

### Ce qui reste, par coût croissant

**La reprise courte, et elle ne demande aucune recherche.** Le contrôleur de
`classement-par-valeurs-compensatrices` a relevé, sans renvoyer, que le résumé écrit que le seuil
d'élimination « suit » le marché de la main-d'œuvre là où Lahy écrit qu'il « doit régler » la
rigueur de la sélection : **un énoncé normatif rendu en descriptif**. Il l'a jugé soutenable, la
p. 171 décrivant le mécanisme dans les deux sens. La correction n'a pas été portée parce qu'elle
aurait voulu dire qu'un orchestrateur réécrive une prose qu'aucun contrôleur n'aurait relue.
**À trancher par un rédacteur puis un contrôleur**, sur la seule ligne du `summary`.

**Le plus gros manque du domaine n'est pas francophone, et c'est le résultat que cette nuit a
établi.** Les modèles de tension au travail, **Karasek et Theorell, Siegrist**, sont structurants
pour le champ et anglophones ou germanophones dans leur source ; la lecture du chapitre IV de
Machado 2015 le confirme depuis la littérature francophone elle-même. **Aucune recherche n'a
jamais porté sur eux.** C'est par là qu'un prochain passage sur ce domaine doit commencer, et la
voie à essayer d'abord est celle qui a déjà rendu deux fois ici : la littérature grise, rapports
ONR, ARPA, NPRDC, dans la collection `dticarchive` d'Internet Archive.

**Les autres, avec leur état d'accès :**

1. **`dticarchive` n'a pas été re-balayé** après l'échec du candidat Daspit, faute de budget.
   Aucune requête structurée `advancedsearch.php` supplémentaire n'a été lancée. **Manque de
   méthode, pas vide vérifié.**
2. **Hirigoyen 1998**, *Le Harcèlement moral*, texte fondateur. Son objet passerait
   vraisemblablement le test d'entrée. Aucune version en texte intégral atteinte sur les quatre
   bases. Voie à tenter : un compte rendu substantiel en revue académique ouverte, pas le livre.
3. **Lahy & Korngold 1931, p. 142-146**, non exploitées et **interdites à la carte de ce lot** :
   elles réappliquent le classement de 1924 et redoubleraient
   `classement-par-valeurs-compensatrices`. Le chiffre des 60 000 francs est dans le même cas.
4. **L'ouvrage Dunod de 1927 de Lahy**, que trois sources secondaires citent **à la place** de
   l'article de 1924, et que Lahy lui-même annonce p. 155 comme portant « tous les détails
   techniques et les résultats ». Non trouvé en accès libre.
5. **Fontègne, J.**, cofondateur de l'INOP en 1928. Aucun article primaire identifié sur Persée,
   dont la recherche est rendue en JavaScript et n'expose aucun lien `/doc/` extractible en `curl`.
   **Non cherché à fond, pas vérifié vide.**
6. **Lahy & Pacaud 1948**, Gallica `ark:/12148/bpt6k33531659`. **Restriction constatée sur la page
   et non déduite** : `DC.rights: "restricted use"`, bandeau « Projet de numérisation des
   indisponibles », 15 % des pages consultables. À conserver pour un passage disposant d'un accès
   de prêt.
7. **Suzanne Pacaud publiant seule** : « Travaux pratiques de Mme Pacaud (II) », *Bulletin du
   Groupe d'études de psychologie de l'Université de Paris*, 1948,
   `bupsy_0242-5432_1948_num_1_9_5431` (ISSN 0242-5432, **à ne pas confondre** avec le *Bulletin de
   psychologie*, ISSN 0007-4403). Accès non vérifié, texte non lu. Son objet annoncé, l'analyse du
   travail des opératrices téléphoniques, la rapprocherait d'`activity-ergonomics` : **à trancher
   sur pièce, pas avant.** C'est la même personne que la S. Korngold qui cosigne l'article de
   1931, identifiée en cours de contrôle.
8. **Deux textes ouverts mais non lus en profondeur** par le scout du 4 septembre, ni retenus ni
   formellement écartés, à ne pas redécouvrir depuis zéro : Piéron 1922 a finalement été instruit,
   mais son axe « validité prédictive contre le certificat d'études » **n'existe pas dans ce
   texte**, qui le renvoie explicitement à un travail ultérieur avec Laugier. Ce travail-là n'a pas
   été retrouvé.

## Cinq reprises laissées par le lot du 25 août, sur `operations-management`

Ce sont les moins chères du dépôt, et la première ne demande aucune recherche.

**`etat-de-controle-statistique` est écrite, contrôlée et reçue `PASS`**, et elle attend en
`corpus/candidates/` avec son verdict dans `corpus/review/`. Elle n'a pas été publiée pour un
défaut mais **pour le plafond de volume du lot**. Ce qui la rendrait meilleure est nommé par son
contrôleur : son titre porte un syntagme que les deux pages qui la fondent n'emploient pas, et
l'expression consacrée se lit p. 146 du même livre, dans une partie que personne n'a dépouillée.

**Trois candidats francophones sont atteignables et non lus**, et ils comblent le manque que la
cartographie déclarait comme son principal :

1. **Guihéneuf, « Remarques sur la gestion des stocks dans l'entreprise »**, *Revue économique*
   7(1), 1956, p. 68-91. DOI `10.3406/reco.1956.407156` **résolu**, page Persée servie en 200.
   Porte le dimensionnement des stocks et la discussion du lot économique.
2. **Fiore, « Une démarche nouvelle : la production en flux tendus »**, *Revue française de
   gestion*, n° 63, 1987, p. 51-61, Persée `rfg_0338-4551_1987_num_63_1_2668`, servie en 200.
   **Réserve à lever avant tout usage** : cet identifiant vient d'un moteur de recherche et non
   d'une résolution de DOI. La règle du dépôt n'est pas honorée tant qu'elle ne l'est pas.
3. **De Almeida**, *RAIRO Recherche opérationnelle* 32(2), 1998, p. 145-192, Numdam
   `RO_1998__32_2_145_0`, page servie en 200, **GET du PDF non testé**. Souche mathématisée : la
   lecture doit trancher s'il éclaire le comportement d'un système ou ses seuls résultats propres.

**Deux gisements restent ouverts dans des textes déjà lus en texte intégral** : les parties V et
VI de Shewhart, et surtout limites de contrôle contre limites de tolérance ; la partie III de
Bellman, lissage industriel et stock optimal.

**Et un balayage qui n'a jamais eu lieu** : HAL, Cairn et OpenEdition Books n'ont jamais été
interrogés par leur propre moteur pour ce domaine, et quatre points d'entrée de son périmètre
n'ont reçu aucune requête ciblée (files d'attente pour le service, maintenance et fiabilité au
sens de l'ingénieur, conception des systèmes de service, variabilité propagée le long d'une
chaîne).

## Les reprises courtes de `decision-science`, et ce que `systems-thinking` a rendu

**Les trois reprises de `systems-thinking` sont closes, le 5 septembre 2026, au passage 13.** Deux
le sont négativement, ce qui est un résultat et non un échec. Elles ne sont plus à faire, et ce qui
suit dit ce qu'elles ont donné pour que personne ne les repaie.

- **Meadows et al. 1972, *The Limits to Growth*.** Ouvert, téléchargé, lu ; page de copyright lue
  sur image, **cinquième tirage de la première édition**. **Quatre concepts relevés, trois cardés.**
  L'autorisation se constate sur la page qui héberge : licence Creative Commons BY-NC, partenariat
  entre la bibliothèque du Dartmouth College, Dennis Meadows et le Sustainability Institute. Deux
  faits à garder : **le nom « World3 » ne figure pas dans l'ouvrage de 1972**, qui dit « our world
  model » ; et **la correspondance folio/feuillet du scan n'est pas constante**, folio + 2 jusqu'à
  la page 102 puis folio + 1.
- **Lesourne 1985.** La reprise disait « trouver le DOI » : **il n'existe pas.** Les trois pièces
  non-article du volume, marquées `[liminaire]` par la table des matières, sont exactement les trois
  sans dépôt DOI chez Crossref. Le texte, lui, existe et a été lu en entier sur Persée,
  `ecoap_0013-0494_1985_num_38_3_4052`, résolu par la table des matières du numéro et non par une
  URL devinée. **Le titre imprimé porte « Introduction : A la recherche »**, et non « à » comme
  l'écrivaient deux fichiers de ce dépôt. **Puis le texte a été rejeté au fond**,
  `corpus/rejected/auto-organisation-du-marche.json` : Lesourne veut développer l'auto-organisation
  « en partant de la théorie micro-économique elle-même », ce qui n'est pas une structure de
  boucles, de stocks et de délais ; et il renvoie lui-même la notion à la théorie générale des
  systèmes, empruntant l'autopoïèse à Zeleny, Maturana et Varela. **Ni `systems-thinking`, ni
  `cybernetics`, ni `behavioral-economics` : `OUT_OF_SCOPE` sec.** Cinq autres articles du même
  volume ont été ouverts et écartés avec leur motif.
- **Bertalanffy.** L'article de 1972 (`10.2307/255139`) est **fermé sur Crossref, Unpaywall et
  OpenAlex**, et les cinq exemplaires de *General System Theory* restent en prêt restreint sur
  Internet Archive. **Le domaine continue de citer Bertalanffy de seconde main, à travers Roig**, et
  c'est son angle mort le plus visible. **Boulding 1956 est fermé lui aussi** ; une republication
  dans *E:CO* est signalée par le web général mais son domaine n'a jamais répondu, y compris par la
  Wayback Machine.

**Ce que `systems-thinking` laisse de moins cher au passage suivant**, et ce sont deux concepts
**déjà lus et instruits**, écartés du lot du 5 septembre parce que son plafond de huit était
atteint : `referentiel-tef` (Le Moigne, le référentiel Temps-Espace-Forme, dont aucun tiers consulté
ne reprend le sigle, et dont le lecteur écrit que son thème d'accueil est le meilleur disponible et
non le juste) et `croissance-exponentielle-et-doublement` (Meadows et al., verbatim sûr mais
attribution à écarter : ni la croissance exponentielle, ni le temps de doublement, ni la règle des
70 ne sont d'eux). Leurs dossiers sont au dépôt. Les autres angles morts du domaine sont dans la
section du 5 septembre de `corpus/map/systems-thinking.scouting.md`.

## Deux textes ouverts et **déjà lus**, laissés par le lot du 23 août — `decision-science`

Ce sont les deux entrées les moins chères du dépôt : leur accès n'est pas seulement constaté,
**leur texte a été ouvert**. Ils n'ont pas été instruits parce que le plafond de volume du lot était
atteint, et parce que chacun aurait ouvert un thème à une seule carte, ce que la règle refuse.

**Arrow 1948**, *The Possibility of a Universal Social Welfare Function*, RAND Paper P-41.
Internet Archive, identifiant `DTIC_AD0603806`, collection `dticarchive`, sans restriction,
page de titre confirmée. C'est la forme la plus ancienne du théorème d'impossibilité, et il
pourvoirait le thème « agréger des préférences » que le lot n'a pas pu déclarer. **Une réserve
à porter dans le brief** : le document porte lui-même un avis du Clearinghouse disant que sa
lisibilité est « in part unsatisfactory », et la couche texte le confirme. Toute citation devra
se relire sur l'image de la page, plus encore que d'ordinaire.

**Newell, Shaw & Simon**, 1958 dans *Psychological Review* et 1960 dans *Self-Organizing
Systems*. Les deux sont ouverts et lus : le premier par un tiré à part servi par le serveur IIIF
des archives de Carnegie Mellon, le second sur l'item Internet Archive `SelfOrganizingSystems`.
Ils pourvoiraient le thème « chercher une solution plutôt que la calculer ». **La cartographie
dit elle-même qu'un seul concept devrait en sortir**, les deux textes portant sur le même
programme et la même thèse : la décision de fusionner ou de partager revient à l'instruction.
Une réserve d'accès est déclarée sur le tiré à part de 1958, la page de notice d'archives ayant
répondu `HTTP 503` : le fichier est servi publiquement par une bibliothèque universitaire, mais
l'autorisation n'a pas pu être lue noir sur blanc.

---

# E. Le garde de la CI ne couvrait qu'une moitié du répertoire projeté — fermé le 2 septembre 2026

**Découvert le 31 août 2026, au passage 08, sans l'avoir cherché.** Le premier
`npm run corpus:deepen` de la nuit, lancé pour constater l'état, a rendu un fichier différent de
celui qui était commité : l'approfondissement d'`effet-de-cadrage` avait été corrigé dans
`corpus/deepenings/` au passage 07, commit `c84eac6`, sans être reprojeté. Deux phrases disaient
« programme » dans la projection là où l'enregistrement maître dit « option ». Le lecteur de
l'application a vu, du 29 au 31 août, un texte que le dépôt ne portait plus.

**Le diagnostic tient en une phrase, et il vaut plus que le cas.** `ci.yml` et `pages.yml` lancent
`npm run corpus:build` puis `git diff --exit-code src/content/generated/`, ce qui a l'air de
couvrir tout le répertoire projeté. Mais `corpus:build` n'écrit que `concepts.generated.ts` :
`deepenings.generated.ts` n'est écrit que par `corpus:deepen`, que la CI ne lance jamais.
**Toute correction portée à un enregistrement de `corpus/deepenings/` sans reprojection passe donc
la CI sans être vue**, et le dépôt ne s'en apercevra qu'à la prochaine nuit de phase 2 — ou jamais,
une fois cette phase close.

**Fermé le 2 septembre 2026, au passage 10, par la première nuit de phase 3.** Des deux remèdes
envisagés, c'est le premier qui a été retenu : `npm run corpus:deepen` est lancé après
`npm run corpus:build` et avant le `git diff --exit-code`, dans `ci.yml`, dans `pages.yml`, **et
dans `deploy-vps.yml`, troisième workflow arrivé sur `main` pendant cette nuit même** par la pull
request #80, qui portait le même garde à moitié. **Sur le chemin de déploiement, une projection
divergente n'est pas seulement invisible : elle est mise en ligne.** Ce qu'il faut retenir pour la
prochaine correction de ce genre : **un garde se cherche dans tous les workflows, pas dans ceux
qu'on connaît**, et `git grep -n "corpus:build" -- .github/` le dit en une commande.
L'autre voie, ajouter la projection des approfondissements au script `corpus:build` lui-même,
aurait mêlé deux projections que le dépôt tient séparées depuis l'origine : le garde a été élargi,
les scripts n'ont pas bougé. Le motif est écrit en commentaire à côté de la correction, dans les
deux fichiers, pour qu'il ne se reperde pas.

**La phase 3 avait le mandat que les trois nuits de phase 2 n'avaient pas**, et elle est aussi
celle que ce trou aurait coûté le plus cher : elle écrit des cartes et leurs approfondissements
dans la même nuit. Contrôle fait sur l'état courant au moment de la correction, puis à la clôture :
build 104 concepts, deepen 104 approfondissements, `git diff --exit-code src/content/generated/`
propre, projection déterministe sur deux exécutions successives. La dérive elle-même était corrigée
depuis le 31 août.

---

# Ce qui n'est pas un chantier

**Les 31 sujets d'échafaudage jamais instruits** que `corpus:audit` liste en fin de sortie.
`src/content/fixtures/` est un pool à drainer, pas une source à enrichir ni une liste de
travail : ces fiches ont été écrites de mémoire pour construire les écrans, ne sont servies
qu'en développement, et portent une marque à l'écran. Un sujet ne s'instruit pas parce qu'il
y figure ; il s'y trouve remplacé quand la file l'amène.

**`corpus/rejected/`** est vide, et c'est normal.

---

# Pièges d'accès et de méthode, transversaux

Payés par les lots précédents. Les relire évite de les repayer.

**Persée sert le texte intégral, page par page.** L'identifiant se résout **en résolvant le
DOI**, jamais en devinant la forme de l'URL : un ISSN inventé rend 404. Le numéro de page
s'écrit sur quatre chiffres. `renderPage` sert les images en pleine résolution, ce qui lève la
réserve d'OCR là où l'on cite. Le PDF `docAsPDF` est derrière un défi anti-robot qui **ne se
résout pas**. Attention enfin à une anomalie de cache constatée par trois contrôleurs
indépendants : les premières requêtes peuvent rendre un article étranger, il faut rejouer.

**L'OCR ne suffit jamais pour citer.** Persée perd les apostrophes et les élisions, abîme les
accents en fin de ligne, et confond « organisationnel » avec « organisational ». Les
numérisations de masse d'Internet Archive ont des coquilles sur les guillemets. **Toute
citation se relit sur l'image de la page**, et une carte du dernier lot a eu raison contre la
couche texte pour cette seule raison.

**L'édition électronique d'Ashby met deux pages par feuillet**, dans un A4 portrait portant
`/Rotate 90`, l'impaire en haut et la paire en bas. C'est cette inversion, et non un défaut de
numérisation, qui fait croire à une extraction linéaire que les sections sont désordonnées.
Redressé et découpé, le texte redevient continu.

**La table des matières des actes de 1960 de Pergamon contredit ses propres folios**, constaté
trois fois indépendamment. Les paginations de ce volume se prennent sur les folios.

**Une autorisation d'ayant droit se constate, elle ne se déduit ni de l'âge du texte ni de
l'absence de restriction d'emprunt.** Le dernier lot a retiré les URL de six sources pour
cette raison, en gardant les références imprimées identifiées par leur numéro de catalogue de
la Bibliothèque du Congrès. Un contrôleur a ensuite résolu l'un de ces numéros contre le MARC
de la Bibliothèque du Congrès : **privée de son URL, la référence résout seule.** L'indice
contraire, l'absence de renouvellement de copyright dans la base de Stanford, est conservé
dans le verdict de `ordre-a-partir-du-bruit` : un renouvellement introuvable n'est pas un
renouvellement inexistant, et la question peut être rouverte sur pièce.

**Une traduction trouvée chez un tiers n'est pas la parole de l'auteur, même quand le tiers
est un auteur du corpus.** La version française de « order from noise » qui circule vient
d'Atlan 1972, qui réunit sous une seule référence une phrase de la page 43 et une réponse en
séance de la page 49, jointes par des points de suspension.

**Les outils `mcp__documentary__*` n'ont été exposés dans aucune session des cinq lots**, et
Zotero est resté inaccessible tout du long. Les vérifications de référence se font en direct
contre Crossref, l'entrepôt OAI de Persée, le MARC de la Bibliothèque du Congrès et
OpenLibrary. **OpenAlex a répondu « Insufficient budget » et Semantic Scholar en 429** : ce
que ces deux bases auraient fait remonter est inconnu, pas absent, et plusieurs cartographies
le signalent comme leur limite principale.

**Une réédition n'est pas l'original, et elle le dit si on la lit.** Le texte de Forrester
ouvert le 22 août porte « Updated March, 1995 » sous un article de 1971, et son contenu a bougé
avec sa date : il annonce des développements sur soixante ans, ce que l'article d'origine ne
pouvait pas écrire. Un verbatim se localise sur l'exemplaire réellement ouvert, jamais sur
l'édition d'origine qu'on n'a pas vue. Corollaire utile : deux mises à disposition
indépendantes du même document, ici le MIT OpenCourseWare et le Creative Learning Exchange,
permettent de comparer chaîne par chaîne sans emprunter quoi que ce soit.

**La notice d'une plateforme n'est pas la page de titre.** Persée annonce l'article de Roig
1970 sous « et les perspectives » quand la page imprimée porte « et ses perspectives », et sa
pagination de numéro spécial diffère de celle que donne Crossref. La forme imprimée fait foi,
et elle se lit sur l'image.

**Les mises à disposition autorisées par l'auteur ou son institution sont une voie d'accès à
part entière.** Documents de cours d'un laboratoire, rapports d'un institut fondé par l'auteur,
archives d'une société savante : ces pages portent souvent leur autorisation en toutes lettres.
C'est cette voie, et non la bibliographie, qui a rendu le lot de `systems-thinking`. Elle se
constate sur la page qui héberge, comme toutes les autres.

**OpenEdition Books sert des ouvrages entiers en texte intégral.** Voie découverte en cours de
lot sur la théorie de la mesure, où elle a débloqué l'ouvrage central du domaine. Plusieurs
francophones classés fermés dans les cartographies antérieures méritent d'y être retentés.

**Un auteur peut avoir mis son propre ouvrage en ligne, et alors il n'y a pas de restriction
d'emprunt.** Établi le 5 septembre 2026 sur *La théorie du système général* de Le Moigne : l'item
Internet Archive porte `access-restricted-item` **absent**, la description dit que l'auteur y a
déposé son texte après épuisement de la quatrième édition PUF, une licence Creative Commons
`by-nc-nd/2.0/fr` est déclarée, et la note liminaire de la collection porte l'autorisation en toutes
lettres. **Le réflexe est de chercher le dépôt d'auteur avant de conclure de la fermeture des
exemplaires en prêt contrôlé.** Deux précautions vont avec, payées le même soir : **la notice de
l'hébergeur peut être fausse** (celle-ci date l'ouvrage de 1977 et l'annonce comme une cinquième
édition révisée de 2006, alors que c'est la quatrième de 1994, établi sur la page de titre et le
sommaire) ; et **deux miroirs ne font pas deux témoins si c'est le même fichier**, ce qu'un hachage
SHA-256 dit en une commande.

**UNESCO-EOLSS sert des extraits autorisés d'articles fermés ailleurs, et c'est une voie d'accès à
part entière.** Découverte le 5 septembre 2026, en cherchant les publications d'un auteur. Chaque
extrait porte sa propre mention « Reproduced by permission » nommant l'éditeur d'origine. **Deux
limites, et elles sont sévères.** L'extrait s'interrompt sur un pavé « TO ACCESS ALL THE 30 PAGES OF
THIS CHAPTER », neuf ou dix pages sur trente : **il annonce son résultat dans son résumé et
s'arrête avant de le démontrer**. Et **la mention de permission peut nommer deux sources** : celle
d'un extrait de Sterman nomme à la fois l'article de 1989 et *Business Dynamics* de 2000, sans dire
quelle phrase vient de laquelle. **Aucun verbatim ne se localise sur un extrait EOLSS.** La parade
qui a marché deux fois le même soir est d'aller chercher le texte sur **le dépôt DSpace du MIT**,
qui sert les documents de travail de la Sloan School sans authentification : c'est là que les deux
verbatim se localisent, et les états du texte diffèrent mot pour mot de l'extrait.

**La collection `dticarchive` d'Internet Archive est une voie d'accès à part entière.** Établi
par le lot du 23 août, qui en a tiré deux cartes : des textes fondateurs publiés dans des revues
aujourd'hui fermées existent sous forme de rapport technique ONR, ARPA ou RAND, mirés **sans
restriction d'emprunt**. Le réflexe à prendre est de chercher le rapport avant de conclure de
la fermeture de l'article. Deux précautions vont avec : le rapport et l'article publié **ne sont
pas le même texte** et leurs écarts se constatent plutôt qu'ils ne se supposent ; et le millésime
du rapport n'est pas celui de l'article, ce que le lot a payé une fois, le rapport dit « de 1974 »
étant en fait daté d'août 1973 sur sa propre couverture.

**Un défi anti-robot ne se franchit pas, et il ne clôt rien.** Deux textes annoncés ouverts par
Unpaywall se sont révélés servis derrière un mur, Incapsula chez Project Euclid et DataDome chez
`rairo-ro.org`. Aucun n'a été contourné et **les deux ont rendu par une voie légitime** : une
reprise en recueil, et le miroir Numdam, qui republie en accès libre les anciens numéros de RIRO
et RAIRO. Un `is_oa: true` d'Unpaywall ne garantit donc pas plus l'accès qu'un `is_oa: false` ne
le refuse.

**La leçon la plus répandue d'une citation célèbre peut être la mauvaise.** Le lot du 23 août a
constaté deux fois que la formule qui circule vient d'un autre état du texte que celui qu'on
cite : « stubborn appeal » et « perceptual illusions » viennent du texte de 1984, non de celui de
1986 ; « which reduce » et « probabilities » viennent de l'article de *Science*, non du rapport
de 1973. **Une carte qui cite l'exemplaire qu'elle a ouvert a raison contre la mémoire du champ**,
et ses `notes` doivent le dire pour qu'un passage ultérieur ne la « corrige » pas vers l'erreur.

**Un dérivé d'image d'Internet Archive tronque en silence, et c'est le piège le plus insidieux
rencontré jusqu'ici.** Le rendu `https://archive.org/download/<item>/page/n<N>_x1600.jpg` **rogne
le feuillet à gauche** sur plusieurs items et ampute le début de chaque ligne : 3 126 pixels
rendus pour 4 726 réels sur un des rapports du lot du 25 août, ce qui fait perdre à la page de
titre le « O. » de « O. N. R. » et le « Ch » de « Charles ». Rien ne le signale, et un agent qui
relit sur ce dérivé **croit relire une image**. **Le dérivé sans suffixe, `.../page/n<N>.jpg`,
rend la page entière**, et c'est lui qu'on emploie. Deux lecteurs l'ont trouvé séparément le même
soir, et l'un des deux avait déjà bâti sa lecture dessus avant de tout revérifier.

**La collection `digitallibraryindia` / `JaiGyan` est ouvrable et ne se cite pas par son URL.**
Ses items ne portent **aucun champ de droits** sur Internet Archive, ni `rights`, ni `licenseurl`,
ni `possible-copyright-status` ; la seule mention qu'on y trouve, `dc.rights: In Public Domain`,
est une auto-déclaration du numériseur logée dans un champ descriptif, qui voisinait sur l'item
lu le 25 août avec deux erreurs bibliographiques avérées. Tranché dans le sens strict : le texte
se lit, `consulted` reste `full-text`, **l'URL sort, et la référence résout seule par son numéro
de catalogue**. Un LCCN se résout contre `https://lccn.loc.gov/<numero>/mods`, l'export MODS et
non la page HTML, qui est une application JavaScript inutilisable. C'est la même règle qui avait
fait retirer les URL de six sources au lot de cybernétique.

**Une absence de renouvellement de copyright se joue avec ses témoins, et elle ne conclut
rien seule.** La base de Stanford se cherche par l'**API JSON publique de Blacklight**,
`https://exhibits.stanford.edu/copyrightrenewals/catalog.json?q=<terme>&search_field=search` :
son interface HTML est derrière un défi anti-robot F5 qui **ne se contourne pas**. Un zéro n'est
interprétable que si des témoins positifs sont joués dans la même minute, sur le même moteur.
Le lot du 25 août en a joué trois pour deux tests. **Et même alors, un renouvellement introuvable
n'est pas un renouvellement inexistant** : la réserve se garde en clair.

**Un `git fetch` à plusieurs refspecs est tout ou rien, et son échec est silencieux pour qui ne
le lit pas.** Payé par le passage 12. Un `git fetch origin main <branche>` où la branche n'existe
pas encore côté distant rend `fatal: couldn't find remote ref` et **ne met à jour aucune des deux
références**, `main` comprise. La nuit a donc raisonné pendant six heures sur un `origin/main`
vieux d'un jour, et écrit dans son journal et dans sa pull request que six passages n'étaient pas
fusionnés alors qu'ils l'étaient. **On fetch une référence à la fois**, ou l'on relit le code de
sortie avant de conclure quoi que ce soit de ce qui a été rapporté. Corollaire : la comparaison
`git rev-list --left-right --count origin/main...HEAD` ne vaut que si le fetch qui la précède a
réussi.

**Un fichier de métadonnées d'Internet Archive n'est pas une lecture, et `page_numbers.json` est
le pire des deux.** Établi par le lot du 26 août, qui lui doit son seul renvoi. Ce fichier est une
**inférence automatique** de la pagination, pas une transcription : il annonce 94 feuillets pour
88 sur l'item `DTIC_AD0779828`, et c'est lui qui a fait écrire une collation fausse à trois
cartes. **Deux contrôleurs aveugles ont conclu en sens opposé sur cette même collation**, l'un en
la déduisant de la structure du `djvu.xml`, l'autre **en lisant les folios imprimés sur les
images** : c'est la lecture sur l'image qui avait raison. Le premier avait pourtant signalé
lui-même, hors mandat, que cette pagination automatique est fausse. La règle est la même que pour
l'OCR : **ce qui n'a pas été lu sur l'image n'a pas été lu**. Et quand aucune collation ne peut
être vérifiée, **elle ne s'affiche pas** plutôt que de s'afficher au jugé.

**La couche OCR d'un item peut être inexploitable sans que rien ne le signale.** Celle de
`DTIC_AD0779828` rend « shot® » pour « shown » et « Oat cones » pour « Outcomes », au point qu'une
recherche plein texte sur une phrase citée y échoue. Deux contrôleurs l'ont constatée séparément
le 26 août. Un OCR muet n'est pas un OCR fiable : la vérification se fait sur l'image, toujours.

**Un squelette écrit tôt ne garantit pas un fichier écrit.** La contre-mesure n° 4 du lot du
25 août (« exiger l'écriture du fichier de sortie tôt ») a été appliquée à tous les agents du
26 et **elle a tenu à moitié** : tous ont écrit un squelette dans les deux minutes, mais **deux
se sont ensuite arrêtés d'écrire pendant près de dix minutes**, un scout et un lecteur, et il a
fallu leur envoyer un « écris maintenant » pour qu'ils rendent. Ce qui les a rattrapés est une
**surveillance de la taille du fichier de sortie**, qui coûte presque rien et qui a été décisive
deux fois dans la même nuit. À faire systématiquement.

**Un auteur qui rapporte un énoncé n'en est pas l'auteur.** Le lot du 26 août a failli attribuer à
Gadbois la phrase qu'il présente comme « la proposition de départ de toutes les études » avant de
lui opposer son propre article. Dans un texte de problématique, **la thèse d'ouverture est souvent
celle dont l'auteur se démarque** : la citation se prend après la charnière, pas avant.

**Un agent qui télécharge vérifie l'empreinte de ce qu'il a reçu.** Le répertoire de travail
temporaire est partagé entre agents parallèles, et trois agents du lot du 23 août ont lu ou écrit
le fichier d'un voisin, l'un d'eux recevant l'OCR d'un tout autre ouvrage que le sien. La mise en
garde existait déjà, plus bas dans ce fichier, et elle n'a pas suffi : **ce qui a sauvé les trois
est la comparaison de la taille et du MD5 à la notice d'Internet Archive**, pas la vigilance. Le
préfixage des fichiers de travail par l'identifiant de la carte reste nécessaire ; il n'est pas
suffisant.
