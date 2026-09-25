# Ce qui reste à faire

Ce fichier existe pour qu'une session qui reprend le corpus sache **par où commencer**, sans
relire tout le dépôt et sans redécouvrir ce que huit lots ont déjà appris.

Il ne double pas `corpus/ETAT.md`, qui dit ce que le corpus **est** ; celui-ci dit ce qu'il
lui **manque**. Et il ne remplace aucun script : les chiffres ci-dessous sont un instantané
du 7 septembre 2026, les commandes sont la vérité.

```bash
npm run corpus:audit    # domaines, thèmes, cartes validées, sujets jamais instruits
npm run corpus:deepen   # projette les approfondissements, et liste en fin de sortie
                        # les cartes validées qui n'en ont pas : c'est la file, pas ce fichier
npm run corpus:factcheck -- --sweep
                        # les niveaux d'accès que le dossier ne corrobore pas — chantier H.
                        # Sa sortie ne se lit jamais sans ouvrir le dossier signalé : trois de
                        # ses neuf signalements au-dessus de metadata-only sont corrects.
```

**Un décompte écrit à la main ment tôt ou tard.** Ce qui suit ne vaut donc que pour ce qu'un
script ne peut pas dire : quel travail est possible aujourd'hui, ce qu'il coûte, ce qui a déjà
été trouvé pour lui, et dans quel ordre les prendre.

---

## Les chantiers, par coût croissant

| chantier | volume | recherche documentaire ? | état |
|---|---|---|---|
| **A.** Approfondissements | **aucun** | — | **fermé le 1er septembre 2026** |
| **B.** File de la sociologie des organisations | 25 entrées | oui, cartographie déjà faite | ouvert |
| **C.** Domaines vides | **aucun** | — | **fermé le 28 août 2026** |
| **D.** Reprises courtes des domaines instruits | voir les sections | oui, accès déjà constaté | **ouvert, et c'est par lui que la phase 3 avance** |
| **E.** Le garde de la CI ne couvrait qu'une moitié du répertoire projeté | **aucun** | non | **fermé le 2 septembre 2026** |
| **F.** Les acquisitions que l'audit v3 réclame | voir la section | oui | ouvert le 17 septembre 2026 |
| **G.** Le pack de preuve ne lisait qu'un fichier du dossier | **aucun** | non | **fermé le 21 septembre 2026** — dernière suite portée, la version antérieure se désigne par un SHA de blob |
| **H.** Un niveau d'accès surdéclaré désarme le gate | 5 cas établis, 13 champs à normaliser | non pour le correctif, oui pour les cas | **détection faite le 22 septembre 2026** ; reste la réparation des fiches, qui est un geste de la couche carte |
| **I.** L'auditeur prenait une absence du dossier pour une preuve | **aucun** | non | **fermé le 22 septembre 2026**, par le réécrivain qui a refusé la prescription |
| **J.** Le pack résout le dossier par l'identifiant de la carte | 12 répertoires, 186 Ko hors d'atteinte | non pour le correctif, oui pour identifier les onze non réclamés | ouvert le 25 septembre 2026 ; **un cas prouvé, et il a coûté un rejet** |

**Le chantier A est fermé.** Il s'était vidé le 21 août, rouvert et creusé pendant cinq lots
d'ouverture consécutifs jusqu'à trente-quatre cartes le 28 août, puis refermé en trois nuits :
seize cartes servies au passage 07 le 29 août, seize au passage 08 le 31, **les deux dernières au
passage 09 le 1er septembre**. `corpus:deepen` projette **129 approfondissements pour 129 cartes
validées** et sa fin de sortie ne liste plus rien. **La file est celle du script, pas celle de ce
fichier**, et elle est vide. Les passages 10 à 14 l'ont rouverte de quatre, quatre, cinq, huit et
huit cartes et refermée la même nuit chaque fois : en phase 3, la nuit se termine par les
approfondissements des cartes qu'elle vient de créer, et le chantier ne se rouvre donc jamais
d'une nuit sur l'autre.

**Le chantier E est fermé**, par la première nuit de phase 3, le 2 septembre. **Son garde s'est
déclenché deux fois depuis, aux passages 12 et 14, sur le même cas exact** : un `corpus-deepener`
rend après que la projection a été calculée, et le commit emporterait le maître dans son dernier
état et la projection dans l'avant-dernier. Il l'a vu les deux fois. **La parade est désormais une
étape de la clôture, plus un incident** : le `git diff --exit-code` se relance après que le dernier
agent a rendu, et la projection se vérifie idempotente en la rejouant deux fois. Les deux
workflows
lancent désormais `corpus:build` **et** `corpus:deepen` avant leur `git diff --exit-code
src/content/generated/` : le garde couvre les deux fichiers du répertoire qu'il nomme.

**Deux chantiers restent ouverts pour la routine, et la §2 de son prompt désigne lequel elle
prend.** Aucun domaine n'étant vide et aucune carte n'étant sans approfondissement, ses conditions
A et B sont fausses : **la condition C décide, et la phase 3 a commencé le 2 septembre**, sur
`behavioral-economics`, qui passe de quatre à huit cartes, a continué le 3 septembre sur
`sociology-of-work`, qui passe de sept à onze, le 4 septembre sur `work-psychology`, qui passe
de sept à douze et de deux thèmes à trois, le 5 septembre sur `systems-thinking`, qui passe de sept
à quinze cartes et de trois thèmes à cinq, et le 7 septembre sur `operations-management`, **qui
passe de huit à seize cartes et de trois thèmes à quatre**. Elle enrichit un domaine par nuit, en
rotation, et **le suivant se déduit sans arbitrage, le critère de repli désignant le seul domaine
encore à huit cartes hors rotation : `decision-science`** — voir la fin du chantier D.

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

**Le cinquième domaine a été pris le 7 septembre 2026, au passage 14 : `operations-management`**,
désigné par une égalité à huit cartes avec `decision-science` que l'ordre de
`src/content/taxonomy.ts` a tranchée. **Il en porte seize, et il passe de trois à quatre thèmes**,
au plafond exact de huit cartes. **Il cesse d'être entièrement anglophone**, et son point d'entrée
sur la fiabilité au sens de l'ingénieur, que trois périmètres ouverts lui avaient renvoyé sans que
personne y aille, est ouvert. Les reprises que ce fichier portait pour ce domaine sont closes,
**deux d'entre elles négativement** : voir la section qui les concernait, réécrite ci-dessous. Le
compte rendu du lot est dans `corpus/ETAT.md`, section « Operations Management enrichi ».

**Le domaine suivant se déduit de la même règle, et il n'y a pas d'égalité à trancher.**
`behavioral-economics`, `sociology-of-work`, `work-psychology`, `systems-thinking` et
`operations-management` ont désormais un enrichissement au journal, daté du 2, du 3, du 4, du 5 et
du 7 septembre, et sortent de la rotation jusqu'à ce que les autres soient passés. Aucun des six
autres n'en a : le critère de repli s'applique et désigne celui qui a le moins de cartes validées,
**seul à ce niveau, `decision-science`, huit cartes**, contre neuf pour `measurement-theory`, dix
pour la sociologie des organisations et douze pour la cybernétique. **C'est donc
`decision-science`.** En son sein, la priorité 1 est sans objet, les deux thèmes déclarés sans carte
étant en sociologie des organisations, et la priorité 2 aussi, `corpus/map/queue.json` ne couvrant
que ce même domaine : **la priorité 3 commande, les angles morts de
`corpus/map/decision-science.scouting.md`**, dont ce fichier tient déjà la liste sous « Deux textes
ouverts et **déjà lus**, laissés par le lot du 23 août ». Le décompte qui tranche est le tableau par
domaine de [`corpus/ETAT.md`](ETAT.md), et `npm run corpus:audit` le rend à la demande.
**En phase 3, la nuit se termine par les approfondissements des cartes qu'elle vient de créer** :
les passages 10 à 14 l'ont fait, et la file de `corpus:deepen` est repartie de zéro et y est revenue
dans la même nuit, les cinq fois.

**Ce domaine part avec le legs le plus riche des quatre nuits de rotation.** Deux de ses entrées ne
sont pas seulement d'accès constaté : **leur texte a été ouvert et lu** par le lot du 23 août, et
il n'a pas été instruit parce que le plafond de volume était atteint. C'est moins cher que tout ce
que les trois nuits précédentes ont eu à leur disposition.

**Une condition matérielle pèse sur tout ce chantier, et elle ne s'est pas levée.** Le serveur MCP
`documentary` est en échec de connexion (`CONNECTION_CLOSED`) depuis le 29 août, **sept nuits
consécutives au 4 septembre**. `corpus-scout`, `corpus-primary-reader` et `corpus-blind-reviewer`
s'appuient tous les trois sur ses outils de recherche et de vérification de référence, et la
phase 3 en dépend donc.

> **Résolu le 24 septembre 2026, et le diagnostic ci-dessus était faux.** Rien ne clochait
> dans le serveur. Le conteneur d'une session distante est recréé à neuf, `node_modules` est
> ignoré par git, et rien n'installait les dépendances : le serveur mourait en important
> `@modelcontextprotocol/sdk`, ce que le client rapporte comme `CONNECTION_CLOSED`. Après
> `npm ci`, il répond à `initialize` du premier coup. La parade est un hook `SessionStart`
> synchrone, `.claude/hooks/session-start.sh`, et **elle ne vaut qu'une fois fusionnée sur la
> branche par défaut**. Cause, mesures et limites : [`scripts/mcp/README.md`](../scripts/mcp/README.md).
>
> Ce que cet épisode coûte en méthode mérite d'être retenu : **une condition a été tenue pour
> une fatalité pendant des semaines parce qu'on la reconstatait au lieu de l'instruire.** Chaque
> nuit vérifiait que le serveur était fermé — ce qui était vrai — et aucune ne lançait le
> serveur à la main pour lire son erreur, qui nommait la cause en une ligne. La règle « on
> l'essaie au lever, en un appel » mesurait le symptôme et interdisait d'aller plus loin.

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

## Les reprises du lot du 25 août sur `operations-management` sont closes

**Elles l'ont été le 7 septembre 2026, au passage 14, et deux le sont négativement, ce qui est un
résultat et non un échec.** Elles ne sont plus à faire, et ce qui suit dit ce qu'elles ont donné
pour que personne ne les repaie.

- **`etat-de-controle-statistique`, écrite et reçue `PASS` le 25 août, est publiée.** Ce qui la
  retenait n'était pas un défaut mais le plafond de volume de son lot, et ce qui la rendait
  perfectible était nommé par son contrôleur : son titre portait un syntagme que les pages 6 et 34
  n'emploient pas. **La page 146 a été ouverte et elle le porte** : « For this reason it is
  desirable to attain the state of statistical control in which the natural law of large numbers
  makes prediction possible. » La citation y est remontée, le localisateur couvre les trois pages,
  et la phrase de l'`attribution_note` qui renvoyait à la page 146 a perdu son objet.
- **Shewhart, parties V et VI**, « surtout limites de contrôle contre limites de tolérance » : la
  reprise a rendu ce qu'elle promettait, **deux cartes en viennent**. Reste ouvert le § 7 « Design
  for Minimum Variability », p. 259-261, lu en OCR seulement, et les critères II à V de la partie VI,
  p. 318-338, également en OCR seul.
- **Bellman, partie III**, annoncée pour « lissage industriel, problème du traiteur, stock optimal ».
  **Deux des trois objets ne sont pas de Bellman, et son propre texte le dit** : le problème du
  traiteur est reproduit entre guillemets « in the form given by W. Jacobs » (DOI
  `10.1002/nav.3800010210`, non ouvert), et le stock optimal est renvoyé à Arrow, Harris et
  Marschak, « The problem was first formulated by », c'est-à-dire au contenu même de
  `penalite-de-rupture`, déjà publiée. **La reprise annonçait trois gisements, il y en avait un**, et
  une carte en vient. La pagination était fausse en prime : **la partie III court des folios 38 à
  44, non 37 à 48**, la table des matières du rapport étant décalée d'une unité.
- **Guihéneuf 1956 est lu en entier**, vingt-quatre pages sur l'image, et **deux cartes en viennent**.
  C'est le premier texte francophone du domaine. Un troisième concept a été instruit et écarté,
  Guihéneuf rattachant lui-même l'idée au principe d'accélération d'Aftalion.
- **Fiore 1987, « trouver le DOI » : il n'existe pas.** Établi à trois niveaux, une recherche
  bibliographique Crossref, une requête Crossref au niveau de l'ISSN qui rend zéro pour la revue
  entière, et l'absence de toute chaîne « doi » sur la page Persée, contrastée avec celle de
  Guihéneuf qui en porte une. **Même constat que pour Lesourne 1985 au passage 13**, et il fait
  règle : les pièces non-article d'un volume Persée sont souvent exactement celles sans dépôt DOI.
  Le texte reste atteignable et non lu, mais **il ne se citera pas par un DOI**.
- **De Almeida 1998** : la réserve du GET non testé est levée, `https://www.numdam.org/article/RO_1998__32_2_145_0.pdf`
  rend **200** et le texte s'extrait. Non lu. Vigilance de périmètre transmise telle quelle : il
  vient de la souche mathématisée, et c'est la lecture qui doit trancher s'il éclaire le comportement
  d'un système ou seulement ses résultats propres.
- **Les cinq candidats hérités des voisins sont tranchés.** Les trois rapports DoD légués par
  `cybernetics` le 24 août, consignés « non ouverts » depuis, rendent tous **GET 200** après suivi de
  la redirection HTTP vers HTTPS, et portent tous « Approved for public release » :
  `DTIC_AD1046519`, `DTIC_ADA371943`, `DTIC_ADA341017`. **L'échec constaté depuis un an était un
  échec de test, pas un échec d'accès** ; ils restent non lus, et c'est désormais la reprise la moins
  chère du domaine. Les deux notices HAL léguées par `human-factors` restent sans fichier ni DOI.

**Ce que le lot du 7 septembre laisse de moins cher au passage suivant sur ce domaine**, et ce sont
trois concepts **déjà lus et instruits**, écartés parce que le plafond de huit était atteint :
`carte-de-controle` (Shewhart ne la revendique nulle part et ne l'attribue à personne, l'attribution
n'est pas établie et c'est le motif), `controle-maximum` (risque de doublon de fond avec deux cartes
publiées, à trancher par une lecture qui compare les trois) et `limitation-de-l-expansion` (déclaré
le plus mince par son propre lecteur). Leurs dossiers sont au dépôt.

**Et le thème `fiabilite-et-disponibilite`, déclaré cette nuit, a besoin d'un second texte
indépendant** : il repose sur deux cartes tirées du même rapport et du même groupe de travail, ce
qui est en dessous du critère du dépôt, et la faiblesse est écrite dans le commentaire de
`src/content/themes.ts`. L'appendice F du même volume AGREE, « A Simple Cost Model for Optimizing
Reliability », **porte deux auteurs nommés** et est le meilleur candidat suivant du volume, mais il
ne lèverait pas la dépendance à ce seul rapport.

**Trois portes sont fermées et vérifiées telles**, par Unpaywall et non par supposition, et le
budget d'un passage ultérieur ne doit pas y retourner sans voie neuve : **Little 1961**
(`10.1287/opre.9.3.383`), **les rééditions de la formule de Harris** (`10.1287/opre.38.6.947`,
`10.1016/j.ijpe.2014.07.003`) et **Lee, Padmanabhan et Whang 1997** (`10.1287/mnsc.43.4.546`). Des
copies circulent sur des agrégateurs : elles ont été rejetées comme illégitimes.

**Ce qui n'a toujours pas été fait pour ce domaine** : HAL a rendu de la littérature réelle mais
bruitée sur les quatre points d'entrée, 77, 19, 5 et 285 résultats, sans qu'un candidat individuel
puisse être isolé sans lecture approfondie ; **OpenEdition Books n'a été parcouru que pour un
chapitre détecté** ; Cairn reste fermé derrière DataDome ; et Chase 1978 comme Levitt 1972, sur la
conception des systèmes de service, sont sans DOI trouvé par Crossref.

## Reprise courte laissée par la réception du 7 septembre 2026, sur `operations-management`

**Rattachement contesté, non refusé, et il reste écrit ici plutôt que tranché.** Les deux
cartes de tolérance de Shewhart, `tolerance-economique-suppose-le-controle` et
`tolerances-qui-ne-s-additionnent-pas`, entrent sous `variation-et-controle` par son titre,
« Ce qu'un procédé fait varier », qui les porte sans faute. Sa description, elle, reste limitée
au partage entre causes de hasard et causes assignables et au critère qui tranche entre elles :
elle ne couvre pas le dimensionnement d'une limite sur du variable, qui est l'objet propre de
ces deux cartes. Les deux fiches le signalent elles-mêmes dans leurs `notes`. La description du
thème n'a pas été réécrite à la réception — ce n'est pas un fichier que la réception touche —,
et elle gagnerait à être élargie si ces deux cartes restent seules à porter cet aspect du thème.
**À trancher par un passage ultérieur.**

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

## `decision-science`, enrichi le 8 septembre 2026 : les deux legs sont soldés

**Le passage 15 a pris ce domaine et il l'a doublé, de huit cartes à quinze, de deux thèmes à
quatre.** Les deux entrées que cette section portait depuis le 23 août sont **closes, et les
deux positivement** : elles ont rendu cinq des sept cartes de la nuit. Le compte rendu du lot est
dans [`corpus/ETAT.md`](ETAT.md).

**Arrow 1948 a rendu deux cartes au lieu d'une**, `impossibilite-de-l-agregation-des-preferences`
et `independance-des-alternatives-non-pertinentes`, ce qui a levé l'obstacle exact qui l'avait
laissé de côté : le thème « agréger des préférences » n'est plus une page à une seule carte, et il
est déclaré sous le titre « Décider à plusieurs ».

**Newell, Shaw et Simon ont rendu trois cartes au lieu d'une**, et la réserve de la cartographie,
qui annonçait qu'un seul concept devrait sortir des deux textes, **est démentie sur pièce**. Le
partage a été établi par deux lecteurs indépendants, chacun sur son texte, puis confirmé par leurs
contrôleurs : 1958 pose l'apprentissage comme une question à laquelle une théorie devra répondre,
1960 y répond et ne fait que cela ; et **la liste de références de 1960 ne cite pas l'article de
1958**. Le partage se vérifie par une recherche plein texte, décisive : « means-ends » et
« problem space » ont **zéro occurrence dans le texte de 1958**, dont la seule formulation
moyens-fins est rapportée à Selz et de Groot.

### Ce que ce lot a établi et qui vaut au-delà de lui

- **L'exemplaire annoncé par une cartographie peut ne pas porter le texte.** Le tiré à part de 1958
  du fonds Newell fait **six feuillets**, folios 151 à 155 puis 166 : les folios 156 à 165 manquent,
  et sa notice l'intitule « Proposed Anthology ». La cartographie du 23 août avait lu ces six pages
  et écrit que « la pagination imprimée (151 à 166) correspond exactement au contenu ». **Le folio
  156 est celui d'une des deux citations.** Le doublon du fonds Simon,
  `Simon_box00064_fld04878_bdl0001_doc0001`, porte seize folios sans lacune, et c'est lui qui fait foi.
- **`file` sous-compte les pages d'un PDF servi par IIIF** : il annonce cinq feuillets pour l'exemplaire
  complet, qui en porte seize. Un contrôle qui s'y fierait conclurait que l'exemplaire complet est
  le tronqué, exactement à l'envers.
- **Une autorisation peut se lire ailleurs que sur la page qui la refuse.** La notice d'archives de
  Carnegie Mellon répond `HTTP 503` depuis deux nuits, mais **le manifeste IIIF de l'item répond
  `200`** et déclare en clair `"license": "http://rightsstatements.org/vocab/InC-NC/1.0/"` et
  l'attribution aux Carnegie Mellon University Archives and Special Collections. La réserve du
  23 août est levée, et par une porte que personne n'avait essayée.
- **Un identifiant normalisé ne peut pas attester une édition antérieure à son système.** L'ISBN de
  *Social Choice and Individual Values* résout parfaitement et **annonce autre chose que ce qu'il
  décrit** : il désigne un tirage Yale, alors que la deuxième édition de 1963 paraît chez Wiley
  comme Cowles Foundation Monograph 12, Yale ne reprenant qu'au quatrième tirage, en 1970. Établi
  sur la notice `olbp56070` de The Online Books Page et sur la chronologie de tirages du SRU de
  K10plus. La référence résout désormais par **le PDF de la première édition servi en accès libre
  par la Cowles Foundation**, `m12-all.pdf`.
- **Deux surfaces d'un même objet peuvent porter deux dates.** La couverture RAND du rapport P-41
  porte « 26 September 1948 », que les métadonnées de DTIC et d'Internet Archive recopient, et les
  **dix-neuf pages de texte portent toutes « 10/26/48 »**. Trois contrôleurs y sont passés, les deux
  premiers en décrivant chacun une surface différente sans se contredire. La contradiction est dans
  l'objet, et une fiche a raison de suivre la surface la plus proche du texte.
- **Le `page_numbers.json` d'un item peut être vide plutôt que faux**, et c'est le meilleur cas :
  celui de `DTIC_AD0603806` porte `page_number_confidence: 0` et aucun folio. La pagination s'établit
  alors sur les en-têtes imprimés, ce qui est de toute façon la règle.

### Ce qui reste ouvert sur ce domaine, par coût croissant

1. **Trois concepts lus et non instruits, écartés au plafond du lot.** Ce sont les reprises les moins
   chères : le **choix prudent** d'Arrow et Raynaud (axiome 4, p. 15, exemple du conseil municipal
   p. 15 et 16, quatre théorèmes p. 16 et 17), la **double facette habilitante et contraignante de
   l'outil** chez Boulaire, Landry et Martel (p. 99 à 102, avec le tableau 1 et le complément
   « Mode symbolique et mode instrumental » p. 101), et le second geste d'analyse de Vincke 1991
   (p. 149, section 3), qui ne peut pas se fonder sur ce texte-là mais désigne Roubens et Vincke 1985.
2. **La couche francophone est ouverte et elle n'est pas épuisée.** Persée a rendu trois candidats
   solides sur les quatre pistes que le lot du 23 août avait laissées sans les ouvrir. **OpenEdition
   Books reste inatteignable par GET simple**, étant une application JavaScript : c'est une limite
   d'outillage constatée, pas un vide de contenu, et le périmètre la nomme comme voie prioritaire.
3. **Plottu 2001**, chapitre du recueil coédité par Bernard Roy, HAL `hal-01061339`, PDF obtenu,
   scan sans OCR relu en image, **lecture incomplète, trois pages sur dix-sept**. Flagué et non
   retenu : risque réel de tomber sous le rejet direct « le libre choix comme thèse politique ou
   morale ». À trancher sur pièce.
4. **Nakhla 1992**, sur Persée, écarté de ce domaine et **consigné en angle mort vers
   `operations-management`** : dispositif de pilotage et de gestion, pas opération de choix.

### Ce qui est vérifié fermé, et ne se retente pas sans voie neuve

- **Sfez, *Critique de la décision* (1973), est clos après huit routes documentées**, quatre du
  23 août et quatre de cette nuit : HAL par auteur exact, theses.fr en requête distincte,
  OpenEdition Books, OpenEdition Journals, Internet Archive, Gallica SRU en `403` reconfirmé, et la
  recherche web générale. Un texte de Sfez a été trouvé sur OpenEdition Journals, **hors sujet**.
  C'est le texte que le périmètre appelait en nommant « la critique française de la décision », et
  **la littérature « critique du concept même de décision » reste la plus fragile du domaine**, même
  si `mythe-de-l-outil-quantitatif` l'entame par un autre bout.
- **L'incomparabilité selon Bernard Roy n'a aucune source primaire ouverte connue.** Persée ne porte
  aucun texte de Roy sur le surclassement, les trois résultats inconnus ayant été ouverts et écartés ;
  Roy 1974 n'a pas de DOI déposé ; le document Lamsade n° 53 est fermé sous ses deux DOI Springer,
  `10.1007/978-3-642-75935-2_8` et `10.1007/bf00134132`. **La seule voie non épuisée est le dépôt
  Dauphine `basepub.dauphine.psl.eu`**, qui rend un `CONNECT tunnel failed 502` par le mandataire
  sortant. C'est ce qui a fait rejeter Vincke 1991, qui expose l'incomparabilité sans la fonder.
- **Le jugement de probabilité reste servi de biais, et la voie du rapport technique est close pour
  lui.** Kahneman et Tversky 1972 sur la représentativité et Tversky et Kahneman 1973 sur la
  disponibilité **n'ont pas de précurseur DTIC**, et la raison est désormais établie plutôt que
  supposée : leurs propres notes citent des financements NSF, NIMH et NIH, jamais ONR ni ARPA, ce qui
  explique l'échec de six requêtes indépendantes. Les deux textes **ont été trouvés ouverts sur des
  pages personnelles de tiers, et rejetés comme illégitimes** : ce sont des articles Elsevier, et
  c'est exactement le motif qui avait fait rejeter Thaler 1980, « motif de droits et non d'accès ».
  **Une autorisation d'ayant droit se constate ; une page personnelle n'en est pas une.**
- **Howard 1966, « Information Value Theory »**, `10.1109/tssc.1966.300074`, fermé sur quatre fronts.
  Un rapport ARPA et ONR de Howard de 1973, `DTIC_AD0771699`, est en accès libre et a été lu : il
  discute des prolongements du calcul de valeur de l'information **sans exposer la théorie de 1966**,
  et il n'est donc pas un substitut. La valeur de l'information, que le périmètre nomme, reste non servie.
- **Newell 1969, « Heuristic Programming: Ill-Structured Problems »**, reste non résolu après **six
  tentatives indépendantes sur deux nuits** : la page CMU `node/19441` rend `503`, et un échec de
  certificat TLS distinct par `curl`. La Wayback Machine ne porte aucun instantané, et deux voies
  alternatives ont été explorées et écartées. Avec Simon 1973, vérifié fermé, **la littérature
  « représentation du problème avant sa résolution » reste la moins bien servie du domaine.**

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

# F. Les acquisitions que l'audit v3 réclame, ouvert le 17 septembre 2026

Chantier neuf, et il ne vient pas d'un manque repéré à la lecture : il vient de cartes que le
gate déterministe a refusé de laisser publier. **Ce que l'audit des approfondissements découvre
n'est pas toujours un défaut de pédagogie ; c'est parfois un dossier trop pauvre pour porter le
texte qu'on voudrait écrire.** Ces cas-là ne se règlent pas par une réécriture de plus.

**`inertie-structurelle-et-selection`, ajoutée le 20 septembre 2026.** Trois tours de gate,
63/67 puis 60/61 puis 64/66, plafond des deux boucles atteint, réécriture restaurée. **Ce cas
n'est pas un manque de dossier — il en rend 516 supports — c'est un manque de méthode :** sept
échecs, sept modalités d'auteur perdues à la traduction. Une reprise doit traiter chaque modal
du texte source comme un élément à reporter, pas comme une précaution de style que le français
allégerait. La trajectoire cible de l'audit reste valable et ses deux paliers neufs ont passé le
gate aux trois tours. **Et comme pour la carte suivante, la version restaurée n'est pas saine :**
elle reporte la définition recomposée de l'inertie et la « proportionnalité » non autorisée que
la réécriture avait retirées.

**`cinq-dimensions-de-l-emploi`.** Dix-sept claims sur cinquante-neuf refusés au premier tour, et
deux causes couvrent presque tout. Le dossier **ne porte aucune définition citable des cinq
dimensions**, ce qui interdit de rattacher le moindre exemple à une dimension nommée. Et ses
supports s'arrêtent à « dimensions → trois états », ce qui interdit tout le maillon « états →
résultats », sa négation comprise. La réécriture a passé le gate en amputant ces deux choses, et
la revue l'a rejetée pour cette raison même : ce qui restait n'enseignait plus à quoi le modèle
sert. **Les deux pièces manquantes sont dans le rapport, qui est `full-text`** — les définitions,
et le versant positif de la Figure 1 attesté par `review.notes[7]`. Tant qu'elles ne sont pas au
dossier, toute réécriture rejouera la même partie.

**Et la version restaurée n'est pas saine pour autant.** Elle porte les propositions que le gate a
refusées, dont une erreur conceptuelle : la négation d'un effet direct contredit la Figure 1 de son
propre dossier. Une carte rendue à son état antérieur après un `REJECT` n'est pas une carte
validée une seconde fois.

**Comment reconnaître les suivantes sans les auditer une à une.** Vingt-deux des cartes non encore
auditées n'ont **aucun répertoire `corpus/evidence/<id>/`**, et les trois du lot du 17 septembre
en faisaient partie. C'est le signal le moins cher à calculer et le plus prédictif à ce jour :
il ne dit pas qu'une carte est fausse, il dit que son texte repose sur un dossier mince.

**Et ce signal a mené trois nuits de suite au même endroit.** Les neuf cartes portant un rapport
v3 au 19 septembre sont **exactement neuf cartes sans répertoire de preuve**. Aucune carte à
dossier n'avait encore été auditée. Le signal est peu cher et il sélectionne bien, mais il
sélectionne toujours la même couche : appliqué une quatrième fois, il aurait fini d'épuiser les
seize cartes minces sans jamais dire ce que vaut le reste du corpus.

## Ce que le lot du 20 septembre a rendu, sur trois cartes à gros dossier

Le lot a délibérément pris l'autre couche : `zones-incertitude`, `isomorphisme-institutionnel`
et `inertie-structurelle-et-selection`, trois des sept dossiers épais encore non audités. **La
réponse à la question ouverte ci-dessus est nette, et elle n'est pas rassurante : les cartes les
mieux dotées ne sont pas les plus saines. Les trois portaient chacune un défaut documentaire que
leur dossier contredisait, et qu'aucun contrôle sans dossier n'aurait pu voir.**

- `zones-incertitude` datait de 1960 l'apparition de l'expression, quand l'enregistrement validé
  la donne en 1966 — et **cassait par là la condition écrite sous laquelle le contrôleur aveugle
  avait laissé passer la carte** (« la fiche n'affirme aucune antériorité »). Le texte se
  terminait en outre sur un contresens que le dossier combat.
- `isomorphisme-institutionnel` portait **une phrase écrite de mémoire** — l'isomorphisme
  biologique comme convergence de niche — appuyée par rien, et une définition du champ qui
  reconduisait un contresens rangé en toutes lettres dans `common_misinterpretations` du dossier.
- `inertie-structurelle-et-selection` présentait comme absolue une inertie que l'article de 1984
  définit de façon relationnelle.

**Le défaut dominant, mesuré sur les dix-neuf échecs de gate du lot, est d'une seule espèce :
une modalité ou un quantificateur de l'auteur qui disparaît à la traduction.** « changes of some
kinds » élargi à « toutes sortes », « it is not obvious that » retourné en affirmation positive,
« seems unlikely » rendu par un présent, « may operate as much by » devenu « échappe largement
à », « many career tracks » devenu « les carrières », « could reinforce » passé à l'indicatif.
**Aucun de ces écarts n'est visible sans le texte source** : le français est plausible à chaque
fois, et rien dans l'enregistrement validé ne le contredit.

**Un second biais est apparu deux fois le même jour, sur deux cartes indépendantes et sous deux
réécrivains différents** : le mot « sociologues » accolé à des auteurs dont aucun support
n'établit la profession, une fois assorti de « américains ». Compléter une identité d'auteur
avec ce qu'on croit savoir d'elle est un geste réflexe, et le gate est le seul organe du
dispositif qui l'attrape.

**Ce que cela dit du signal « pas de répertoire de preuve ».** Il reste peu cher et il reste
utile, mais il ne mesure pas la santé d'une carte : il mesure ce qu'un audit pourra prouver. Les
cartes minces donnent des audits pauvres, les cartes épaisses donnent des audits qui trouvent.
**Il faut donc continuer par les dossiers épais** — quatre restaient le 20 septembre :
`couplage-lache`, `deplacement-des-buts`, `garbage-can-model`, `rationalite-limitee`, plus les six
qui portent une réception à côté d'un `lecture.json`.

## L'état de la couverture au 21 septembre 2026, et ce que le lot du 21 a soldé

**Le lot du 21 a pris les trois derniers dossiers épais** que la section ci-dessus nommait :
`rationalite-limitee`, `deplacement-des-buts`, `garbage-can-model`. Le quatrième nom de la liste,
`couplage-lache`, **n'était pas éligible** : c'est la seule fiche non validée du corpus, elle n'a
donc pas d'approfondissement, et rien à auditer. C'est une erreur de la liste du 20 septembre,
corrigée ici. Elle relève du chantier B, pas de celui-ci.

**Les trois ont rendu le même résultat que le lot du 20, une troisième fois : aucun `PASS`
pédagogique.** Deux `REVISE`, un `REWRITE`, et chacune portait un défaut que son propre dossier
contredisait. Les trois se sont closes en `rewritten` / `FACTCHECK_PASS` / `ACCEPT`, au prix de
deux boucles de correction sur deux d'entre elles.

**Le décompte, à recalculer plutôt qu'à recopier** (le script est en dix lignes : SHA du deepening
et du validated contre les deux hashes du rapport) :

| | cartes |
|---|---:|
| approfondissements | 136 |
| rapports v3 à jour | **18** |
| non auditées, **avec** dossier de preuve | **102** |
| non auditées, **sans** dossier de preuve | **16** |

**Le signal « pas de répertoire de preuve » a donc épuisé ce qu'il pouvait désigner d'utile.** Les
seize cartes sans dossier restent la couche la moins chère à auditer et la moins concluante :
l'audit y juge la fidélité sur un résumé, ce que le protocole de l'auditeur lui interdit désormais
de faire en silence. Les voici, pour qu'un lot qui les prend sache ce qu'il prend —
`absorber-les-fluctuations-de-commandes`, `cause-de-hasard-et-cause-assignable`,
`comportement-contre-intuitif`, `court-terme-contre-long-terme`,
`fragilite-d-un-ordonnancement-optimal`, `le-trouble-vient-des-politiques`,
`paradigme-source-du-systeme`, `penalite-de-rupture`, `points-de-levier`,
`regle-de-commande-a-deux-niveaux`, `regle-lineaire-de-decision`,
`seuil-d-insatisfaction-salariale`, `systeme-concret-systeme-construit`, `systemographie`,
`transposition-analogique`, `trois-sigmas-arbitrage-de-cout`.

**Les 102 cartes à dossier sont désormais le vrai chantier, et il n'a plus de signal pour
l'ordonner.** Trois lots ont montré que l'épaisseur du dossier prédit ce qu'un audit trouvera, pas
la santé de la carte ; l'épaisseur ne classe donc plus rien une fois les dossiers épais épuisés. Une
suite honnête consisterait à **tirer au hasard** dans les 102 pendant quelques lots et à mesurer le
taux de défaut, plutôt qu'à inventer un troisième signal dont on ne saurait pas s'il sélectionne ou
s'il se trompe. Six lots ont donné dix-huit rapports ; à ce rythme, la couverture complète demande
une quarantaine de lots, et **savoir quel est le taux de défaut réel vaut plus que l'ordre dans
lequel on le découvre**.

## Le premier lot tiré au hasard — 23 septembre 2026

**Le tirage au hasard proposé le 21 a été fait**, sur les 102 cartes à dossier, par un rang
déterministe `sha256(date + identifiant)` pour que le lot soit reproductible et non choisi :
`precarite-des-trajectoires`, `modele-mondial-et-modes-de-comportement`,
`etat-de-controle-statistique`.

**Les trois rendent `REVISE`. C'est le quatrième lot consécutif sans un seul `PASS` pédagogique,
et le premier où la sélection ne pouvait pas l'expliquer.** Les trois lots précédents prenaient
les dossiers épais, c'est-à-dire les cartes où un audit avait le plus de matière pour trouver.
Celui-ci ne prend rien de particulier, et il trouve autant. **Le taux de défaut sur tirage
aléatoire est donc de 3 sur 3**, ce qui est peu de mesure mais beaucoup d'information : la
question n'est plus de savoir quelles cartes auditer en premier, elle est de savoir si une carte
non auditée est présumée saine. Sur cet échantillon, non.

| | cartes |
|---|---:|
| approfondissements | 136 |
| rapports v3 à jour | **21** |
| non auditées, **avec** dossier de preuve | **99** |
| non auditées, **sans** dossier de preuve | **16** |

**Deux cartes closes, une refusée.** `precarite-des-trajectoires` en `rewritten` /
`FACTCHECK_PASS` / `ACCEPT` après une boucle de correction, `etat-de-controle-statistique` de même
après deux. `modele-mondial-et-modes-de-comportement` a épuisé les deux boucles autorisées sans
atteindre le `PASS` ; sa réécriture est refusée et son approfondissement restauré par le SHA de
blob relevé avant toute écriture, **restauration vérifiée au `sha256sum` comme le chantier G le
demande depuis le 21**. C'est le premier lot à s'en servir pour de bon.

**Et le refus est instructif, parce qu'il ne porte pas sur la rédaction.** Les claims fermés au
dernier tour portent tous sur la dynamique des systèmes *en général* — ce qu'est une boucle, ce
qu'est un modèle fait de circuits, ce que vaut la comparaison de deux scénarios. Le dossier de la
carte porte le livre de 1972, pas la méthode : le pack n'en connaît que la nomination page 31 et
la mention d'une « feedback loop structure » page 121. **Un texte qui explique ce concept doit
expliquer ce qu'est une boucle, et le dossier ne le permet pas.** Une troisième correction aurait
rencontré le même mur. **Ce qu'il faut est une acquisition, pas une réécriture**, et cette carte
rejoint à ce titre le chantier F.

### Le cas symétrique du chantier H, et il ferme au lieu d'ouvrir

**`precarite-des-trajectoires` porte l'inverse exact du défaut H.** L'enregistrement validé déclare
une lecture partielle — `locator: "p. 87-93, ici p. 92"`, notes 4 et 6 annonçant la troisième
partie non ouverte — alors que `corpus/evidence/precarite-des-trajectoires/lecture.json` lève
lui-même la réserve et restitue les pages 94 à 97. Le `limits` de l'approfondissement, écrit sur
l'enregistrement seul, **interdisait au texte une matière qui lui était ouverte**.

**Le chantier H est donc plus large que son titre.** Ce n'est pas « un niveau d'accès surdéclaré
désarme le gate », c'est **la divergence entre l'enregistrement validé et le dossier**, qui
désarme le gate quand elle surdéclare et ampute le texte quand elle sous-déclare. Le premier cas
est le plus dangereux et reste prioritaire ; le second est une perte sèche de matière déjà payée.
La réparation est la même et elle est amont : la couche approfondissement n'a pas le droit d'y
toucher.

**Et le verdict que H décrit comme désarmé s'est déclenché cette nuit, sur une carte où l'accès
est déclaré juste.** Le premier gate d'`etat-de-controle-statistique` a fermé un claim en
`SOURCE_NOT_CONSULTED` : il présupposait ce que devient une définition de 1931 dans un ouvrage de
1939 que le dossier déclare non ouvert. **C'est la confirmation que H est un défaut de
déclaration et non un défaut du verdict** : là où la déclaration est juste, le verdict fonctionne.

### Un défaut dans une preuve, et il est du type que tout le dispositif interdit

`corpus/evidence/etat-de-controle-statistique/lecture.json` écrit que l'ouvrage de 1939, « **où
Shewhart reprend et déplace cette définition** », n'a pas été ouvert. **La même phrase déclare la
source non consultée et affirme ce qu'elle contient.**

Le réécrivain l'a vu et ne s'en est pas servi. Mais **le défaut est dans la preuve**, pas dans un
texte lecteur : il est en position d'autoriser un claim, et rien dans le dispositif ne l'attrape,
parce que le pack traite le contenu d'un fichier de dossier comme de la matière consultée. **À
chercher ailleurs qu'ici** : une incise affirmative dans la phrase même qui déclare une source
fermée n'a aucune raison d'être unique à cette carte.

### Deux anomalies d'exploitation, constatées et non déduites

- **Le répertoire de travail temporaire est partagé entre agents concurrents, et deux agents du
  lot s'y sont écrasés.** Un fichier au nom générique écrit par une carte a été remplacé par celui
  d'une autre, en cours d'exécution, deux fois dans la même nuit. Les deux agents l'ont détecté,
  ont basculé sur un chemin unique et n'ont rien utilisé du contenu étranger ; l'isolation par
  concept a tenu. **Elle a tenu parce qu'ils ont regardé, pas parce que le dispositif l'imposait**
  — le même constat que celui déjà écrit plus bas pour les téléchargements.
- **Le serveur MCP `documentary` est toujours en échec de connexion** (`CONNECTION_CLOSED`),
  constaté par le harnais au lever. Le lot n'en avait pas besoin : un audit de couverture travaille
  sur des dossiers déjà au dépôt.

---

# G. Le pack de preuve ne lisait qu'un fichier du dossier — corrigé le 19 septembre 2026

**Le fact-check déterministe ne ramassait que `corpus/evidence/<id>/lecture.json`.** Ce nom n'est
qu'une convention tardive. Neuf cartes déposent leur lecture primaire dans
`evidence.primary-reading.json` et leur réception dans `evidence.reception.json` ; six autres
déposent une réception à côté d'un `lecture.json`. **Environ 1,4 Mo de dossier était invisible au
seul composant du dispositif qui a le droit de décider.**

**Et rien ne le disait.** `--prepare` rendait `READY`, le pack se rabattait sur le seul
enregistrement validé, et sa sortie n'en portait aucune trace. Mesuré sur
`regulation-controle-autonome` : **51 supports au lieu de 496**, pour un dossier de 201 Ko dont
l'en-tête déclare l'article de Reynaud lu intégralement. Un `FACTCHECK_FAIL` obtenu dans ces
conditions ne dit pas que le texte dépasse ses sources ; il dit que l'instrument n'a pas ouvert
le dossier.

Les neuf cartes concernées, toutes de la couche sociologie des organisations :
`couplage-lache`, `deplacement-des-buts`, `garbage-can-model`,
`inertie-structurelle-et-selection`, `isomorphisme-institutionnel`, `organisation-genree`,
`rationalite-limitee`, `regulation-controle-autonome`, `zones-incertitude`. Et les six qui
perdaient un fichier à côté de leur lecture : `attention-diffusee-et-selection`,
`classement-par-valeurs-compensatrices`, `double-emploi-entre-epreuves`, `mesure-devenue-cible`,
`personnalite-professionnelle`, `profils-divergents-a-score-egal`.

**Le correctif prend le répertoire entier**, écarte `scouting.json` — le scout y note où il a
cherché, pas ce qu'il a lu — et nomme chaque support par son fichier d'origine. `FACTCHECK_PROTOCOL.md`
le dit maintenant, et onze tests le tiennent : **le script n'en avait aucun.**

**Ce que ce chantier laisse ouvert, et qui n'est pas réglé par le correctif.**

1. ~~**Le réécrivain ne lit toujours pas le dossier de lui-même.**~~ **Fermé le 20 septembre
   2026.** Sa liste de lecture s'arrêtait à `corpus/validated/<id>.json` ; le dossier ne lui
   parvenait que si l'orchestrateur le lui passait par chemin, ce que le lot du 19 septembre
   avait fait à la main, une fois. Les deux agents listent désormais
   `corpus/evidence/<id>/` eux-mêmes, `scouting.json` excepté, sans dépendre d'une convention de
   nommage que quinze lots n'ont pas normalisée.

   **L'auditeur a été corrigé dans le même mouvement, et c'est lui qui le méritait le plus.**
   Son axe A juge la fidélité documentaire, et il la jugeait sur un enregistrement validé qui est
   un résumé — donc sur un texte qui peut parfaitement ne pas contredire une affirmation fausse.
   Le lot du 19 septembre l'avait constaté sur pièce : l'auditeur avait repéré une incohérence
   d'accès sans pouvoir la trancher, et c'est le dossier qui l'a tranchée. Son protocole lui
   demande maintenant de dire quand une carte n'a pas de dossier, plutôt que de noter A sur la
   foi d'une absence de contradiction.
1bis. ~~**Une suite neuve, ouverte le 20 septembre par un reviewer.**~~ **Fermée le 21 septembre
   2026.** Quand le cycle commite au fil de l'eau, `HEAD~1` n'est plus la version auditée : les
   commits d'étape portent des états intermédiaires du même cycle, dont certains contiennent déjà
   la réécriture. Le reviewer d'`isomorphisme-institutionnel` avait dû remonter trois commits pour
   trouver sa base, et il écrivait : « Si un autre reviewer du lot a comparé à `HEAD~1`, il a
   comparé deux états intermédiaires et n'a rien pu voir. »

   **La version antérieure se désigne désormais par un SHA de blob**, relevé à l'étape 2 du
   protocole avant toute écriture, transmis par l'orchestrateur, lu avec `git cat-file -p`. Sans ce
   SHA le reviewer rend `REJECT` plutôt que de reconstituer sa base : ne pas savoir ce que la
   réécriture a changé est un motif de refus, pas une difficulté à contourner.

   **Le correctif a servi dès le lot qui l'a écrit**, et il en avait besoin : l'historique de la
   branche porte une dizaine d'états intermédiaires par carte, et un reviewer comparant à `HEAD~1`
   n'aurait vu, sur deux des trois cartes, qu'une correction d'un mot là où le cycle avait refait la
   moitié du texte.

   **Et le même défaut existait à un second endroit, découvert en corrigeant le premier :** le
   protocole faisait restaurer une carte refusée avec `git restore --source=HEAD`. Dès qu'un lot
   commite au fil de l'eau, `HEAD` porte déjà la réécriture et la commande devient un **no-op
   silencieux** — `REJECT` rendu, rien restauré, carte refusée publiée quand même. La restauration
   se fait désormais par le même SHA de blob, et le protocole demande de la vérifier au
   `sha256sum` plutôt que de la supposer.

   **Les six cartes déjà refusées ont été vérifiées, et aucune n'a été publiée par ce chemin.**
   `cinq-dimensions-de-l-emploi`, `asservissement-des-activites-hors-travail`,
   `critere-de-la-retroaction`, `force-du-besoin-de-developpement`,
   `inertie-structurelle-et-selection` et `predominance-du-conflit-sur-la-negociation` : pour les
   six, le dernier commit touchant l'approfondissement est **antérieur à la date de son audit**, et
   celui d'`inertie` porte explicitement le retour à un blob plus ancien. Les restaurations ont donc
   bien eu lieu.

   **Ce qui les a sauvées est que ces lots ne committaient pas la réécriture candidate avant le
   verdict.** Le défaut ne se déclenche que sur un lot qui commite au fil de l'eau — celui du
   21 septembre est le premier, et c'est pourquoi il a dû corriger les deux endroits avant de
   pouvoir commiter sans risque. La parade n'est donc pas « ne pas commiter au fil de l'eau » : c'est
   de désigner les versions par leur contenu.

2. **Le niveau d'accès n'est pas porté par ces dossiers.** Sur 496 supports de
   `regulation-controle-autonome`, 467 sortent avec `access: n/a`, faute de `consulted` sur les
   objets. Le vérificateur est alors fondé à les traiter comme non consultés, alors que l'en-tête
   du fichier déclare la lecture intégrale. **Ce n'est pas un défaut de code : c'est une
   information absente des fichiers**, et elle ne peut pas être ajoutée par déduction.
3. ~~**Les neuf rapports v3 antérieurs ne sont pas invalidés** : ces cartes n'ont aucun répertoire
   de preuve, donc leur pack était déjà complet. Aucune reprise n'est due de ce côté.~~ **Faux, et
   corrigé le 25 septembre 2026 : voir le chantier J.** L'inférence enchaîne « aucun répertoire à
   cet identifiant », « donc aucun dossier », « donc pack complet », et le deuxième pas ne suit pas
   du premier — **le dossier d'une carte peut vivre sous un autre nom que le sien**.
   `critere-de-la-retroaction` est le contre-exemple : son propre champ `dossier` désigne
   `corpus/evidence/retroaction-denaturee/lecture.json`, 13 Ko qui existent, et elle est en
   `FACTCHECK_FAIL`. Douze répertoires de preuves ne portent le nom d'aucune carte, pour 186 Ko de
   lectures primaires qu'aucun gate n'a ouvertes. **Une reprise était donc due, et cette ligne l'a
   fermée pendant six jours.**
4. ~~**Le contrôle mécanique des citations a le même angle mort.**~~ **Fermé le 20 septembre
   2026.** `corpus:deepen --check` ne comparait une citation qu'à `corpus/validated/<id>.json`.
   Il prend désormais le dossier entier, par la même fonction que le pack de preuve.

   **La mesure avant et après tient en deux lignes.** Avant correctif, le dépôt produisait
   exactement deux avertissements sur 136 approfondissements, tous deux sur
   `regulation-controle-autonome`, sur les verbatim des p. 10 et p. 15-16 de Reynaud 1988 —
   exacts tous les deux dans une lecture primaire déclarée `full-text`. Après, aucun. **Les deux
   seuls avertissements que ce contrôle savait produire étaient faux**, ce qui est le pire état
   possible pour un avertissement : il n'est pas gênant, il est pédagogique dans le mauvais sens.
   Six tests le tiennent, dont un qui vérifie que deux fichiers concaténés ne fabriquent pas à
   eux deux une citation qu'aucun ne porte.

**Ce que le correctif a rendu dès la première nuit.** `regulation-controle-autonome` portait un
contresens : sa version publiée présentait la régulation conjointe comme le produit de la
rencontre des deux régulations, quand l'article de 1988 la range explicitement du côté du
contrôle sous un intertitre imprimé p. 15-16, le produit de la rencontre s'appelant compromis.
Le texte fondait aussi le rapport de pouvoir sur les zones d'incertitude, expression à zéro
occurrence dans l'article. **Aucun de ces deux défauts n'était atteignable sans le dossier** :
l'enregistrement validé ne les contredit pas, et trois audits v3 antérieurs n'auraient pas pu
les voir.

---

# H. Un niveau d'accès surdéclaré désarme le gate — ouvert le 21 septembre 2026

**C'est le premier défaut du dispositif qui ouvre au lieu de fermer**, et c'est pour cette raison
qu'il passe devant les autres. Tous les défauts trouvés jusqu'ici faisaient échouer un contrôle qui
aurait dû passer, ou rendaient un contrôle aveugle à une matière qu'il n'avait pas lue. Celui-ci
fait *passer* des propositions qu'un organe du dispositif avait le pouvoir de refuser.

## Le mécanisme

`collectSupports`, dans `scripts/corpus/deepening-factcheck.mjs`, hérite le niveau d'accès d'un
support du champ `consulted` porté par l'objet source qui le contient, et le propage à toutes les
chaînes situées sous lui. C'est le comportement voulu, et le protocole le décrit : le modèle ne
fabrique jamais `full-text`, `partial` ou `metadata-only`, il les reçoit du dossier.

**Mais le pack ramasse aussi `corpus/validated/<id>.json`**, et un objet source y déclare son propre
`consulted`. Une source déclarée `full-text` dans l'enregistrement validé fournit donc au
vérificateur des supports estampillés « lu », **y compris quand le dossier de la même carte déclare
cette source non ouverte**. Le verdict `SOURCE_NOT_CONSULTED` ne peut plus se déclencher sur elle :
l'instrument n'a pas de raison de douter d'un niveau d'accès qu'il a lui-même calculé.

## Les trois cas établis, tous trouvés par les audits du 21 septembre

Chaque fois, c'est le dossier de la carte qui contredit l'enregistrement de la carte. **C'est le
dossier qui fait foi** — le protocole le dit déjà pour l'auditeur, et il faut l'étendre au pack.

| carte | source déclarée `full-text` | ce que dit le dossier |
|---|---|---|
| `rationalite-limitee` | Cozic, « La rationalité limitée », 2012 | notice HAL seule, aucun fichier servi, HTTP 404 |
| `deplacement-des-buts` | Warner & Havens 1968 | « CONSULTÉ EN MÉTADONNÉES SEULEMENT (Crossref ; JSTOR fermé) » |
| `deplacement-des-buts` | Selznick 1943 | non ouvert ; la réception ne le connaît que par des tiers |

Les deux cartes ont été mises hors d'atteinte **côté texte** — leurs réécritures ne font plus parler
ces sources, et `deplacement-des-buts` a perdu pour cette raison une section entière que la revue a
jugée non regrettable, parce qu'elle portait une information que la carte n'avait pas le droit de
porter. **La divergence, elle, reste entière dans les deux enregistrements validés.** La couche
approfondissement ne peut pas réparer la couche carte.

## Le balayage, et pourquoi il ne vaut que comme signal

Un test grossier a été écrit : pour chaque source `full-text` d'un enregistrement validé dont le
DOI ou l'ISBN apparaît dans le dossier de la même carte, chercher un marqueur de non-consultation à
proximité. **Il rend 31 candidats sur 172 sources `full-text`, réparties sur 111 cartes à dossier.**

**Il se trompe dans les deux sens, et les deux ont été vérifiés sur pièce.**

- **Faux positif** : `nasa-tlx`. Le marqueur « fermé, que je n'ai pas ouvert » porte sur le chapitre
  de 1988, pas sur le paquet papier-crayon dont la fiche de lecture décrit les 26 pages. Le
  `full-text` est correct.
- **Faux négatif** : Cozic, l'un des trois cas établis, n'a pas de `doi_isbn` — seulement une URL.
  Le balayage ne le voit pas.
- Et un troisième état, qui n'est ni l'un ni l'autre : `theorie-des-perspectives` et
  `glissements-de-l-action` déclarent **le même DOI** à la fois `full-text` et `metadata-only` dans
  des objets différents de leur propre dossier. L'incohérence est interne au dossier ; elle demande
  un arbitrage humain, pas une règle.

**Ce signal ne mesure donc pas le défaut, il propose une liste à vérifier.** Le script est jetable
et n'a pas été versé au dépôt : le reproduire coûte dix minutes, et le garder ferait croire à une
mesure.

**Remplacé le 22 septembre 2026 par `npm run corpus:factcheck -- --sweep`**, qui est une mesure et
non un signal : il est testé, il porte le même code que le pack de preuve, et il rend une liste
courte au lieu de 31 candidats à trier. La section suivante donne son résultat.

## Par quel bout prendre ce chantier

Dans cet ordre, et il est motivé par le coût.

1. ~~**Rendre le défaut détectable par le code plutôt que par un audit**, en comparant source par
   source le `consulted` de l'enregistrement validé à celui du dossier et en dégradant au plus
   prudent des deux quand ils divergent.~~ **Fait le 22 septembre 2026, mais pas comme écrit ici :
   la règle proposée ne marche pas, et la section suivante dit pourquoi et par quoi elle est
   remplacée.**
2. **Corriger dans les enregistrements validés les cas que le balayage établit.** Ce n'est pas un
   geste de la couche approfondissement, et aucun agent `corpus-deepening-*` n'en a le droit. Il
   relève de `corpus-editor` ou d'une main humaine. **La liste est maintenant courte et vérifiée
   sur pièce — cinq sources sur quatre cartes, plus un `excerpt` et douze `consulted` absents**, voir
   ci-dessous.
3. ~~**Vérifier les 31 candidats.**~~ **Sans objet** : la liste bruitée est remplacée par
   `npm run corpus:factcheck -- --sweep`, qui ne rend plus 31 candidats à trier mais 17
   déclarations non corroborées dont 9 au-dessus de `metadata-only`, toutes vérifiées.

## La règle proposée ne marchait pas, et la mesure le dit — 22 septembre 2026

**Dégrader au plus prudent des deux niveaux en cas de divergence aurait dégradé les bonnes cartes
et laissé passer toutes les mauvaises.** Le constat vient du balayage versé au dépôt ce jour,
`npm run corpus:factcheck -- --sweep`, qui applique la comparaison sur les 136 cartes :

| déclarations d'accès des enregistrements validés | |
|---|---:|
| corroborées par le dossier | **264** |
| **contredites** par le dossier | **0** |
| le dossier nomme la source sans se prononcer | 9 |
| le dossier ne nomme pas la source | 8 |
| niveau hors vocabulaire dans la fiche | 1 |
| carte sans dossier, ou dossier muet sur l'accès | 52 |

**Zéro contradiction sur 264 corroborations : le cas que la règle devait traiter n'existe pas.**
Les 34 cartes qui portent deux niveaux pour un même identifiant ne se contredisent pas, elles
**énumèrent les voies d'accès d'une même œuvre**. `echelles-de-mesure` déclare trois fac-similés
`full-text` de Stevens 1946 — page de cours à UC Merced, photocopie à UCLA, export JSTOR — **et**
la version éditeur `metadata-only`, payante, `is_oa = false`. Les quatre déclarations sont vraies.
Dégrader au plus prudent aurait marqué « non lu » un article dont trois exemplaires ont été lus,
sur 34 cartes.

**Et les surdéclarations réelles ne sont pas des divergences, ce sont des absences.** Aucun des
cas établis n'est contredit par un `consulted` : le dossier n'en porte aucun pour la source, ou il
dit la non-consultation en prose. Une comparaison de champ à champ en trouve donc zéro. La règle
qui les attrape est l'autre : **un niveau au-dessus de `metadata-only` que rien du dossier ne
corrobore.** Neuf déclarations, les neuf vérifiées sur pièce.

**Cinq sont de vraies surdéclarations** — les trois connues, et deux que le balayage a trouvées :

| carte | source | déclaré | ce que dit le dossier |
|---|---|---|---|
| `deplacement-des-buts` | Selznick 1943 | `full-text` | non ouvert ; connu par des tiers |
| `deplacement-des-buts` | Warner & Havens 1968 | `full-text` | « métadonnées seulement ; JSTOR fermé » |
| `rationalite-limitee` | Cozic 2012 | `full-text` | notice HAL, `/document` en 404, « Contenu non consulté » |
| `critique-de-l-homo-oeconomicus` | Milet 1982 | `full-text` | **absent du dossier** : ni « Milet », ni `bupsy`, ni `12030` |
| `valeur-comme-fait-psychologique` | Milet 1982 | `full-text` | idem, même source sur l'autre carte |

Les deux dernières sont d'une espèce plus faible que les trois premières, et il faut le dire dans
cet ordre : pour Selznick, Warner & Havens et Cozic, **le dossier nie la lecture**. Pour Milet, il
est muet — la seule source dont les deux dossiers déclarent l'accès est le livre de Tarde. La
lecture a peut-être eu lieu sans être consignée ; ce qui est établi est qu'aucune pièce ne
l'atteste, et c'est déjà une raison de ne pas estampiller ses appuis « lu ».

**Trois sont des faux positifs, et ils disent pourquoi le balayage ne peut pas décider seul.** Les
trois dossiers établissent l'accès — ailleurs que dans un champ `consulted`.

- `zones-incertitude` / Kuty 1997 : le dossier le nomme « LA SOURCE LA PLUS RICHE DU DOSSIER, et
  de loin », 92 pages déposées sur ORBI, et ne lui écrit jamais de `consulted` — l'entrée porte
  `level: "B"` et `role: "synthesis"`. Le `full-text` est correct.
- `ordre-a-partir-du-bruit` / von Foerster 1960 : le dossier le déclare `full-text` par une URL
  d'Internet Archive quand la fiche l'identifie par `LCCN 60-12574`. Même œuvre, aucun identifiant
  commun : rien à rapprocher.
- `mesure-devenue-cible` / Hoskin 1996 : **celui-là a d'abord été compté à tort comme une
  surdéclaration, et le détromper valait la peine**, parce que l'erreur est instructive. Le dossier
  porte trois marqueurs de non-consultation sur l'ISBN du volume — « Le volume n'est pas sur
  Internet Archive, ni en consultation ni en prêt », « Sert à fixer l'ISBN, pas à ouvrir le
  texte » — et un lecteur pressé s'arrête là. Mais ces phrases portent sur **les voies essayées
  et échouées**, Internet Archive et Open Library ; le fichier `attribution-hoskin.json` consacre
  son champ `preuve` à celle qui a réussi : « Hoskin a été ouvert, mais partiellement : par la
  recherche interne au volume de Google Books », extraits OCR verbatim paginés, p. 266 et note 1
  de la p. 280, avec ses réserves écrites. **Le `partial` de la fiche est exact.** Un marqueur de
  non-consultation à proximité d'un identifiant ne dit pas ce qu'il refuse : c'est le défaut même
  du balayage jetable du 21 septembre, et il attrape aussi celui qui le remplace si on lit sa
  sortie sans ouvrir le dossier.

**Le neuvième n'est ni l'un ni l'autre** : `zones-incertitude` / Crozier 1966 est déclaré `partial`
par la fiche et `excerpt` par le dossier — un niveau que le schéma interdit.

**C'est pourquoi le pack qualifie au lieu de dégrader.** Il ne réécrit aucun niveau ; il inscrit
sur chaque appui tiré de l'enregistrement validé ce que le dossier en dit — `corrobore`,
`contredit`, `non-declare`, `absent`, `hors-vocabulaire`, `dossier-hors-vocabulaire`,
`dossier-absent` — et `FACTCHECK_PROTOCOL.md` §3bis donne au vérificateur la règle : **un niveau
que le dossier ne corrobore pas n'établit pas le contenu d'une œuvre**, il vaut comme notice. Le
défaut cesse d'ouvrir sans qu'aucune carte devienne impubliable, et sans qu'un silence de dossier
soit pris pour un démenti.

Dix-sept tests tiennent le module `scripts/corpus/lib/factcheck-access.mjs`, dont un fixe
exprès le cas des voies d'accès multiples : c'est celui qu'une reprise serait tentée de « corriger »
en redégradant au plus prudent.

## Le vocabulaire de `consulted` n'était contrôlé nulle part — trouvé le 22 septembre 2026

Défaut voisin, trouvé en instrumentant le précédent, et de la même famille : **un niveau que
personne ne vérifie traverse le pack comme un tampon d'accès dont aucune règle ne parle.**

- **`excerpt`, sept fois, dont une dans une fiche validée.** Le schéma n'admet que `full-text`,
  `partial` et `metadata-only` ; `validate.mjs` contrôlait `kind` contre sa liste et ne regardait
  pas `consulted`. `organisation-genree` déclare Acker 2006 en `excerpt`, six dossiers font de
  même, et la carte a passé le gate factuel du 20 septembre dans cet état.
- **Douze sources sans `consulted` du tout**, sur `garbage-can-model`,
  `inertie-structurelle-et-selection`, `isomorphisme-institutionnel`, `organisation-genree` et
  `regulation-controle-autonome`. Le schéma le permet — le champ n'est pas requis — mais leurs
  appuis entraient dans le pack estampillés `n/a`, valeur sur laquelle le vérificateur n'avait
  aucune règle : ni celle du `metadata-only`, ni celle du texte lu. **Cinq de ces cartes sont dans
  les dix-huit auditées, quatre en `FACTCHECK_PASS` / `ACCEPT`.**

`corpus:validate` les signale désormais en avertissement — 114 au lieu de 100, zéro erreur — et le
vérificateur traite un niveau de source hors vocabulaire comme une notice. **L'avertissement
et non l'erreur est délibéré** : réparer un `consulted` dans une fiche validée est un geste de la
couche carte, et bloquer `corpus:build` sur treize champs qu'aucun agent de cette couche n'a le
droit de corriger arrêterait la publication sans réparer quoi que ce soit.

## Aucun des dix-huit `FACTCHECK_PASS` n'est invalidé au fond — vérifié, pas supposé

Un changement d'instrument rend en principe stale tout `PASS` obtenu avec l'ancien. La question a
donc été posée sur pièce plutôt que par principe : **pour chacune des treize cartes auditées dont
une source est concernée, quel claim cite réellement un appui que le nouveau signal déclasse ?**
Le test recroise les `support_ids` de chaque `claim-map.json` avec le pack régénéré.

**Un seul appui de source non corroborée est cité dans tout l'ensemble** : `organisation-genree`,
`$.sources[1].label`, l'Acker 2006 déclaré `excerpt`, cité par le claim C047. Et C047 affirme
« Seize ans plus tard, elle reprend ce programme dans “Inequality Regimes…” » — **un titre et une
date, exactement ce qu'une notice soutient.** Le `PASS` tient.

**Le reste des appuis que le test a d'abord signalés n'était pas un défaut mais une erreur de
catégorie de ma mesure**, et elle valait d'être corrigée avant d'être écrite dans une règle :
`$.quotation.text`, `$.summary`, `$.notes[*]`, `$.review.notes[*]` arrivent avec `access: "n/a"`
parce qu'ils ne descendent d'aucune source, pas parce que leur accès serait douteux. Une première
rédaction du protocole étendait la règle à « tout accès hors vocabulaire, `n/a` compris » : elle
aurait fait du verbatim relevé par le lecteur primaire une simple notice, sur les 136 cartes. **La
règle ne porte que sur les appuis qui descendent d'une déclaration de source.**

## Et un piège de mesure, découvert le même jour par un reviewer

**Les décomptes de mots de `corpus:deepen --check` incluent `limits`, qui n'est pas du texte
lecteur.** L'orchestrateur du lot a transmis 1 864 mots à la revue de `garbage-can-model` en lui
demandant de peser cette augmentation contre la fourchette cible ; le reviewer a recompté et rendu
**1 606 mots lecteur**, les 258 restants étant la frontière interne. L'écart change la conclusion :
la carte entre dans la fourchette au lieu de la dépasser.

C'est une erreur de catégorie facile à commettre, **parce que le total est le seul chiffre que le
script affiche**. Un lot qui pose une question de volume à une revue doit compter `lead` +
`sections` lui-même. Et si le script gagnait à afficher les deux chiffres séparément, c'est une
correction d'une ligne qui éviterait la prochaine.

## D'où ne vient pas la surdéclaration, constaté après la fusion

**Le serveur `documentary` a répondu une quatrième fois**, dans le tour même de la notification de
fusion de la [#115](https://github.com/J-Rbs91/Curiosity/pull/115) — quatrième occurrence, **quatrième
fois après une clôture**, jamais pendant un lot. La règle ne change pas : on l'essaie au lever, en un
appel, et le lot se dimensionne sur ce que cet appel rend.

Il a été essayé plutôt que cru. `verify_reference` sur le DOI de Merton 1940, source primaire de
`deplacement-des-buts` traitée cette nuit, rend `resolved: true`, `conclusive: true`,
`mismatches: []`, avec titre, année et revue conformes. **C'est une confirmation indépendante d'une
carte publiée dans le lot qui vient d'être fusionné**, obtenue par un outil que le lot n'a pas eu.

**Mais l'observation utile à ce chantier est ailleurs, dans la forme de sa réponse.** Le
`corpus_fragment` que le serveur propose pour insertion dans une fiche porte :

```json
"consulted": "metadata-only"
```

**L'outil d'acquisition met donc déjà la bonne valeur, et la met fail-closed** : il vient de résoudre
une notice, il ne déclare que la notice. La surdéclaration `full-text` ne vient pas de lui.

**Cela restreint utilement où chercher la cause, et l'historique a fait le reste** — cette piste est
close, une reprise n'a pas à la rouvrir.

**Les deux enregistrements portent leur `full-text` fautif depuis leur tout premier commit.** Ni
`rationalite-limitee` ni `deplacement-des-buts` n'a vu son `consulted` relevé plus tard : les deux
fiches entrent au dépôt en `53dd410` (22 août 2026, [#51](https://github.com/J-Rbs91/Curiosity/pull/51))
avec Cozic, Selznick et Warner & Havens **déjà déclarés `full-text`**. Un `git log -S` sur
l'identifiant de chaque source ne rend que ce commit : la valeur n'a jamais été modifiée depuis.

**Et le dossier qui les contredit entre dans le même commit.** `corpus/evidence/rationalite-limitee/`
et `corpus/evidence/deplacement-des-buts/` sont créés par `53dd410` eux aussi. L'enregistrement et
la preuve ont donc été écrits ensemble, **et ils se contredisaient déjà en arrivant**.

**Trois conséquences pour l'étape 2 du chantier.**

1. **Ce n'est pas une dérive**, ni un accès obtenu plus tard qu'on aurait oublié de reporter, ni un
   agent qui relève un niveau en ajoutant un `locator`. C'est l'état initial.
2. **Le défaut est contemporain de l'écriture de la carte**, pas de son entretien. Il se cherche dans
   l'étape qui composait les `sources` d'une fiche à partir d'une lecture.

   **Et ce n'est pas un mauvais versement, c'est un travers persistant — mesuré, pas supposé.** Les
   cartes candidates du balayage ne se concentrent pas dans `53dd410` : elles s'échelonnent du
   22 août au 5 septembre, sur au moins sept commits distincts (`53dd410`, `d54bd6d`, `15f09af`,
   `8e4abe0`, `3733f1f`, `e264eaf`, `f7ccf98`). **Huit sur vingt-six viennent du versement initial,
   soit 31 %, quand ce versement fournit 57 des 136 fiches validées du dépôt, soit 42 %** : les
   candidates y sont donc *sous*-représentées. Le geste s'est répété pendant toute la période
   d'écriture des cartes, sous plusieurs lots et plusieurs rédacteurs.

   **Conséquence pratique** : il ne suffira pas de reprendre un lot daté. C'est la règle d'écriture du
   champ `consulted` qui n'a jamais été tenue, et seul un contrôle mécanique la tiendra — ce qui
   ramène au correctif n° 1 du chantier.
3. **Aucun des correctifs proposés plus haut ne devient inutile.** Un défaut d'origine se propage
   exactement comme un défaut de dérive une fois qu'il est dans le fichier, et c'est le pack qui doit
   cesser de le croire.

---

# I. L'auditeur prenait une absence du dossier pour une preuve — fermé le 22 septembre 2026

**C'est l'erreur symétrique de celle que le correctif du 20 septembre avait corrigée**, et elle
est arrivée par lui. Avant ce correctif, l'auditeur notait l'axe A sur le seul enregistrement
validé, donc sur un résumé qui peut parfaitement ne pas contredire une affirmation fausse : on lui
a donné le dossier. Il pouvait dès lors faire l'inverse — **prendre une absence du dossier pour
une preuve, contre une réserve écrite de la fiche.**

**Le cas, sur pièce.** L'audit de `mesure-devenue-cible` prescrivait trois fois de trancher sa
section 3 dans le sens « la phrase est de Strathern et ne se trouve nulle part chez Hoskin », en
s'appuyant sur la recherche d'absence d'`attribution-hoskin.json` : neuf variantes d'amorce, zéro
occurrence. Or `notes[1]` de la fiche porte exactement cet avertissement, sous un titre qui ne
laisse aucune place au doute — « Avertissement de méthode, et c'est ce qui a failli faire publier
ici une attribution fausse » :

> La formulation y était pourtant, dès la première ligne du chapitre, p. 265 : « every measure
> which becomes a target becomes a bad measure », qu'aucune des chaînes cherchées ne recoupe. Une
> absence de correspondance littérale n'est pas une absence de formulation équivalente.

**Suivre la trajectoire cible aurait republié le contresens que la chaîne avait déjà attrapé une
fois.** C'est le réécrivain qui l'a refusée, et qui a produit le delta de la section par l'autre
bout, la mésattribution à Goodhart, solidement établie. **Le bon résultat, obtenu au mauvais
endroit** : un réécrivain qui corrige son audit n'est pas un dispositif, c'est une chance.

`AUDIT_PROTOCOL.md` §5 et l'agent auditeur ordonnent maintenant les deux couches : le dossier fait
foi sur ce qui a été ouvert, une réserve écrite de la fiche l'emporte sur une recherche d'absence,
et une contradiction entre les deux se signale au lieu de se trancher.

**Ce que ce défaut laisse à surveiller.** Les dix-sept audits v3 antérieurs ont été rendus sans
cette règle, et deux d'entre eux — ceux du 19 septembre et des lots suivants — ont travaillé avec
le dossier en main. Rien ne dit qu'aucun n'a prescrit une conclusion tirée d'une absence ; personne
ne l'a cherché. **La vérification n'a pas été faite et n'est pas chiffrée ici** : ce serait une
relecture des dix-sept rapports, et le prochain lot qui en reprend un le verra sur pièce.

---

# J. Le pack résout le dossier par l'identifiant de la carte, et douze lectures sont hors d'atteinte — ouvert le 25 septembre 2026

**Le chantier G a élargi ce que le pack lit dans un répertoire. Il n'a pas touché à la façon dont
il trouve ce répertoire**, et c'est le second angle mort du même composant. Le pack ramasse
`corpus/evidence/<conceptId>/`. Si le dossier d'une carte vit sous un autre nom, il n'est pas
ramassé, `evidence_files` sort vide, et le fact-check se rabat sur le seul enregistrement validé —
exactement le silence que le chantier G avait été ouvert pour supprimer.

**Douze répertoires de `corpus/evidence/` ne portent le nom d'aucune carte**, aucun état confondu,
et totalisent **186 Ko de lectures primaires** qu'aucun gate n'a jamais pu ouvrir :

`carte-de-controle`, `controle-maximum`, `croissance-exponentielle-et-doublement`,
`ironies-de-l-automatisation`, `lahy-korngold-1931`, `limitation-de-l-expansion`,
`milet-1982-tarde-psychologie-economique`, `pieron-1922`, `retroaction-denaturee`,
`stock-ne-de-la-disparite-des-rythmes`, `taille-des-entreprises-et-issue-des-greves`,
`theorie-de-l-accident`.

## Un cas est prouvé par la carte elle-même, et il a coûté un rejet

**`critere-de-la-retroaction` déclare son propre dossier hors de sa portée.** Son champ `dossier`
vaut `corpus/evidence/retroaction-denaturee/lecture.json`, un fichier de 13 Ko qui existe. La carte
a été renommée, son répertoire de preuves non, et son champ `dossier` est resté juste — c'est le
pack qui ne le lit pas, puisqu'il ne lit que l'identifiant.

Le fichier porte la lecture primaire du même article que la carte déclare en `full-text` et pour
seule source, Guy Paquette, « Feedback, rétroaction, rétroinformation, réponse... du pareil au
même », *Communication et langages* n° 73 : son attribution motivée, sa citation verbatim, ses
réserves. **La carte s'est terminée en `FACTCHECK_FAIL` / `rewrite_rejected_factcheck`** le
18 septembre. Comme pour `regulation-controle-autonome` au chantier G, ce verdict ne dit pas que le
texte dépasse ses sources : il dit que l'instrument n'a pas ouvert le dossier.

**C'est le seul des douze que la carte réclame elle-même.** Les onze autres ne sont réclamés par
aucun champ `dossier` du dépôt, et **rien n'établit qu'ils soient le dossier manquant d'une carte
existante** : un nom comme `carte-de-controle` ou `ironies-de-l-automatisation` est un nom de
concept plausible, et ce sont peut-être des lectures de sujets repérés, lus, jamais cartés. Cette
section ne tranche pas, parce que le trancher demande d'ouvrir chaque fichier et de le confronter à
la carte candidate — et parce que **conclure d'un nom voisin à une identité de dossier est
précisément le raccourci que le dépôt paie le plus cher**.

## Ce que ce défaut a déjà fait écrire de faux, et c'est dans ce fichier

**Le point 3 de la clôture du chantier G est faux, et il ferme une reprise qui était due** :

> **Les neuf rapports v3 antérieurs ne sont pas invalidés** : ces cartes n'ont aucun répertoire de
> preuve, donc leur pack était déjà complet. Aucune reprise n'est due de ce côté.

L'inférence est « aucun répertoire à cet identifiant, donc aucun dossier, donc pack complet ». Le
second pas ne suit pas du premier, et `critere-de-la-retroaction` est le contre-exemple. C'est
l'invariant **absence de contradiction ≠ preuve** appliqué à l'outillage plutôt qu'à un claim, et
il s'y trompe de la même façon.

**`FACTCHECK_PROTOCOL.md` §3bis porte le même défaut, sur un exemple qui sert à justifier une
règle.** Il cite Milet 1982 dans `critique-de-l-homo-oeconomicus` et
`valeur-comme-fait-psychologique` parmi cinq surdéclarations « établies sur pièce », au motif que
le dossier « ne connaît pas la source du tout ». Or le dépôt porte **25 Ko de lecture primaire de
Milet 1982**, dans le répertoire orphelin `milet-1982-tarde-psychologie-economique`. Les deux
cartes ont bien un `lecture.json` à elles, et il ne parle pas de Milet : la lecture de Milet est
ailleurs. **La prémisse de l'exemple est fausse.** La règle que §3bis en tire — qualifier plutôt
que dégrader — n'est pas remise en cause par là, et elle reste soutenue par le reste de sa mesure ;
ce qui l'est, c'est le décompte des surdéclarations, qui compte comme absences des dossiers
inatteignables.

**Un troisième cas, non réclamé mais de même forme.**
`predominance-du-conflit-sur-la-negociation` déclare Sami Dassa, « Conflits ou négociation ? Les
grèves, leurs résultats et la taille des entreprises », *Sociologie du travail* 1983, en
`full-text`, n'a aucun dossier ramassable, et la lecture de Dassa — 22 Ko — est dans le répertoire
orphelin `taille-des-entreprises-et-issue-des-greves`. Cette carte est elle aussi en
`FACTCHECK_FAIL`. Son champ `dossier` ne réclame rien, donc le lien reste une constatation de
source commune et non une identité établie.

## Le chiffre d'ensemble, et ce qu'il vaut

**Vingt-cinq des 136 cartes n'ont aucun fichier de dossier ramassable.** Leur fact-check ne peut
alors reposer que sur l'enregistrement validé, où `quotation`, `summary`, `notes` et `review`
arrivent en `access: "n/a"` et se pèsent sur leur contenu, tandis que toute déclaration de source
sort en `access_corroboration: dossier-absent` — donc ne peut plus établir le contenu d'une œuvre,
par §3bis du protocole de fact-check.

Sur les cartes déjà auditées, le croisement est le suivant :

| | `FACTCHECK_PASS` | échec |
|---|---:|---:|
| dossier ramassable | 13 | 3 |
| aucun dossier ramassable | 5 | 4 |

**L'absence de dossier n'interdit donc pas le gate** — cinq cartes l'ont passé sans, sur leur seule
citation et leurs notes. Mais elle fournit **quatre des sept échecs**, sur un neuvième du corpus
audité. Le second groupe compte neuf cartes : c'est un signal, pas une mesure, et il ne se cite pas
comme un taux.

## Par quel bout prendre ce chantier

Dans cet ordre, et les deux premiers ne demandent aucune recherche documentaire.

1. **Corriger le point 3 du chantier G et le décompte de §3bis.** Fait par cette section pour le
   premier ; le second demande de reprendre les cinq surdéclarations « établies sur pièce » et de
   vérifier, pour chacune, qu'aucun répertoire orphelin ne porte sa lecture. Deux des cinq sont
   déjà tombées.
2. **`critere-de-la-retroaction`, et elle seule, est réparable sans rien établir de neuf** : sa
   carte nomme son dossier, le fichier existe, l'article est le même. La réparation est un geste de
   la **couche carte** — ni le pack ni aucun agent `corpus-deepening-*` ne renomme un répertoire de
   preuves ni ne réécrit un champ `dossier`. Elle rend la carte éligible à une reprise avec son
   dossier en main, ce qui est le préalable à tout nouveau verdict sur elle.
3. **Les onze autres répertoires se confrontent un par un**, en ouvrant le fichier et en cherchant
   la carte qui déclare la même source. Le résultat est de trois natures et il faut les distinguer :
   dossier d'une carte renommée, lecture d'un sujet jamais carté, ou lecture d'une source qu'une
   carte déclare sans que ce soit son dossier. **Seule la première autorise un renommage.**
4. **Et une question d'outillage, qui vaut mieux que douze réparations à la main** : le pack pourrait
   ramasser, en plus de `corpus/evidence/<id>/`, le chemin que le champ `dossier` de la carte
   désigne, quand il en porte un. Cela réglerait le cas prouvé sans rien inférer, puisque c'est la
   carte qui déclare. Aucun test ne couvre aujourd'hui le cas « le champ `dossier` pointe hors du
   répertoire de l'identifiant », et c'est par ce test que le correctif commencerait.

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

**La table des matières des actes de 1960 de Pergamon ne contredit pas ses folios, et cette
entrée était fausse.** Elle a porté pendant deux semaines, « constaté trois fois
indépendamment », que la table de ce volume contredisait sa propre pagination et que le
chapitre de Newell, Shaw et Simon courait jusqu'au folio 190. **Corrigé le 8 septembre 2026,
sur deux exemplaires** : le folio 190 est la page d'ouverture du chapitre de P. M. Milner, et
la note de bas de page qu'on y lisait est la sienne, celle de sa subvention M-2455 du National
Institute of Mental Health, relue sur l'image. La table annonce Newell, Shaw et Simon p. 153 et
Milner p. 190 : **elle concorde**. La pagination du chapitre est donc **153-189**, et la
contre-épreuve est le tiré à part de l'éditeur au Stanford Digital Repository, druid
`wx800gp4144`, qui compte trente-sept pages numérotées 153 à 189 plus un verso blanc.

**Ce que ce cas apprend vaut plus que la correction elle-même**, et c'est pourquoi l'entrée
reste ici au lieu d'être effacée : **« constaté trois fois indépendamment » n'est pas une
preuve.** Trois lecteurs peuvent hériter du même piège, et ils l'ont fait, parce qu'aucun
n'avait ouvert le folio 190 pour regarder de qui était la note qu'il portait. Ce qui a tranché
n'est pas un quatrième constat de la même sorte : c'est **un second exemplaire, d'une autre
provenance**. La règle qui tient est celle qui a déjà servi ailleurs dans ce fichier, et elle
se retourne ici contre une croyance du dépôt : deux mises à disposition indépendantes
permettent de comparer, un accord de plusieurs lecteurs sur une seule pièce ne prouve rien.

L'éditeur de ce volume est par ailleurs **Pergamon Press seul** (Symposium Publications
Division), copyright 1960 Pergamon Press Inc., LCCN 60-12574. La mention « Spartan Books » que
portaient la cartographie et ce fichier n'apparaît nulle part sur l'exemplaire : elle vient
vraisemblablement de la deuxième conférence, de 1962.

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
