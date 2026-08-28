# Ce qui reste à faire

Ce fichier existe pour qu'une session qui reprend le corpus sache **par où commencer**, sans
relire tout le dépôt et sans redécouvrir ce que huit lots ont déjà appris.

Il ne double pas `corpus/ETAT.md`, qui dit ce que le corpus **est** ; celui-ci dit ce qu'il
lui **manque**. Et il ne remplace aucun script : les chiffres ci-dessous sont un instantané
du 28 août 2026, les commandes sont la vérité.

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
| **A.** Approfondissements | 34 cartes | non | **ouvert, et il a encore grossi le 28 août 2026** |
| **B.** File de la sociologie des organisations | 25 entrées | oui, cartographie déjà faite | ouvert |
| **C.** Domaines vides | **aucun** | — | **fermé le 28 août 2026** |
| **D.** Reprises courtes de cinq domaines instruits | 14 textes | oui, accès déjà constaté | ouvert |

Le chantier A s'était vidé le 21 août et il se rouvre depuis. **Le 25 il double, et il grossit
encore les 26, 27 et 28** : aux huit cartes de la science de la décision et aux huit de
l'operations management s'ajoutent les sept de la psychologie du travail, les sept de la sociologie
du travail et les quatre de l'économie comportementale. C'est délibéré, et non un oubli, la routine
nocturne consacrant une phase entière à ce travail et une nuit d'ouverture de domaine n'en écrivant
pas. **La file est celle de `npm run corpus:deepen`, pas celle de ce fichier.** Avec trente-quatre
cartes en attente, ce chantier est de loin le plus gros du dépôt, il ne demande aucune recherche
documentaire, et **c'est désormais le seul que la routine nocturne ait à prendre**, le chantier C
étant clos.

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

# A. Les approfondissements

**Vidé le 21 août 2026, rouvert le 23, doublé le 25, encore grossi les 26, 27 et 28.**
`corpus:deepen` projette toujours **66 approfondissements, 95 772 mots, 1 451 en moyenne**, et sa
fin de sortie liste désormais **trente-quatre cartes** : les huit du lot d'ouverture de la science
de la décision, du 23 août, les huit de l'operations management, du 25, les sept de la psychologie
du travail, du 26, les sept de la sociologie du travail, du 27, et les quatre de l'économie
comportementale, du 28.

C'est le seul écart actuel du corpus entre ce qui est validé et ce qui est servi, et il se comble
par `/corpus-deepen`, sans aucune recherche documentaire : la matière est la carte elle-même, sa
lecture primaire et son verdict de contrôle. **Cinq lots d'ouverture consécutifs l'ayant nourri,
c'est aujourd'hui, et de loin, le chantier au meilleur rapport entre ce qu'il coûte et ce qu'il
rend au lecteur.** Et depuis la fermeture du chantier C, le 28 août, **c'est le seul que la routine
nocturne ait à prendre** : sa §2 fait décider la première condition vraie, aucun domaine n'est plus
vide, et la file du script est donc ce qui commande.

**La file n'est pas tenue ici.** `npm run corpus:deepen` l'affiche en fin de sortie, et c'est
elle qui fait foi.

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

## Cinq reprises laissées par le lot du 28 août, sur `behavioral-economics`

**Ce domaine est le dernier ouvert, et il laisse la reprise la moins chère de tout le dépôt.**

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

**4. La source secondaire, et c'est le premier remède au manque structurel de cinq lots.** Milet,
Jean (1982), « Gabriel Tarde (1843-1904) : le créateur de la psychologie économique », *Bulletin de
psychologie* 35(357), p. 907-913, id Persée `bupsy_0007-4403_1982_num_35_357_12030`, page 907 lue
sur la pièce. **Signal à ne pas escamoter** : c'est une revendication d'antériorité formulée par un
tardien, dans la revue même où Albou et Reynaud tenaient la discipline. **L'attribution de la
fondation est disputée dans la lignée elle-même**, et un lecteur doit la traiter comme une
position, pas comme un fait. Coquille d'OCR à connaître : la signature est rendue « J. MUET ».

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

## Quatre reprises laissées par le lot du 26 août, sur `work-psychology`

**La moins chère du dépôt est `attention-diffusee-et-selection`**, d'après Lahy 1924. Elle est
**écrite et non contrôlée**, et elle attend en `corpus/candidates/`. Le motif n'est pas
documentaire : sa source primaire est en `consulted: partial`, **onze pages ouvertes sur
soixante-sept**, et une fiche publiée exige une source primaire lue en texte intégral. Ce qui la
débloque est nommé : lire l'article en entier, et en particulier trois sections désignées et non
localisées, le protocole du test d'attention diffusée (probablement p. 131-142), les tableaux de
corrélation (p. 168-169) et le barème des 2 000 sujets. Une fois lue, elle passe en contrôle et
**son thème `juger-quelqu-un-apte` se déclare avec elle**. Accès : Persée, DOI
`10.3406/psy.1924.6140`, endpoint page vérifié.

**Le numéro 344 du *Bulletin de psychologie*, 1980, est un gisement à moitié dépensé.** Numéro
entier de psychologie du travail, servi en texte intégral par l'endpoint page. Sept articles lus,
deux retenus, **cinq écartés avec leur motif écrit** (Leplat 11696 et Francès 11726, textes
d'orientation sans thèse propre ; Lévy-Leboyer 11734, dette socio-technique ; Grisez 11729 et
Savall 11735, penchant vers des voisins), et **le reste du numéro n'a pas été dépouillé**. C'est
aussi là que se trouve la seule autrice repérée du domaine.

**Une piste ouverte et non lue** : `DTIC_ADA065892`, « An Integration of Contemporary Theories of
Work Motivation » (1978), collection `dticarchive`, accès a priori ouvert, **contenu non ouvert
faute de budget**.

**Et deux impasses qu'il ne faut pas retenter** : Herzberg 1959 (`motivationtowork0000unse`) et
Walker & Guest 1952 (`manonassemblylin0000unse`) sont en **prêt numérique** sur Internet Archive,
vérifié le 26 août. Un prêt numérique ne s'emprunte pas. La voie qui rend dans ce domaine est la
littérature grise de l'Office of Naval Research, pas le canon en librairie.

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

## Les reprises courtes de `systems-thinking` et de `decision-science`

## Deux textes ouverts et **déjà lus**, laissés par le lot du 23 août

Ce sont les deux entrées les moins chères du dépôt, plus courtes encore que celles du 22 août :
leur accès n'est pas seulement constaté, **leur texte a été ouvert**. Ils n'ont pas été
instruits parce que le plafond de volume du lot était atteint, et parce que chacun aurait
ouvert un thème à une seule carte, ce que la règle refuse.

**Arrow 1948**, *The Possibility of a Universal Social Welfare Function*, RAND Paper P-41.
Internet Archive, identifiant `DTIC_AD0603806`, collection `dticarchive`, sans restriction,
page de titre confirmée. C'est la forme la plus ancienne du théorème d'impossibilité, et il
pourvoirait le thème « agréger des préférences » que le lot n'a pas pu déclarer. **Une réserve
à porter dans le brief** : le document porte lui-même un avis du Clearinghouse disant que sa
lisibilité est « in part unsatisfactory », et la couche texte le confirme. Toute citation devra
se relire sur l'image, plus encore que d'ordinaire.

**Newell, Shaw & Simon**, 1958 dans *Psychological Review* et 1960 dans *Self-Organizing
Systems*. Les deux sont ouverts et lus : le premier par un tiré à part servi par le serveur IIIF
des archives de Carnegie Mellon, le second sur l'item Internet Archive `SelfOrganizingSystems`.
Ils pourvoiraient le thème « chercher une solution plutôt que la calculer ». **La cartographie
dit elle-même qu'un seul concept devrait en sortir**, les deux textes portant sur le même
programme et la même thèse : la décision de fusionner ou de partager revient à l'instruction.
Une réserve d'accès est déclarée sur le tiré à part de 1958, la page de notice d'archives ayant
répondu `HTTP 503` : le fichier est servi publiquement par une bibliothèque universitaire, mais
l'autorisation n'a pas pu être lue noir sur blanc.

## Deux textes localisés en accès ouvert et non lus, laissés par le lot du 22 août

**L'ouvrage de 1972 sur les limites de la croissance**, de Meadows, Meadows, Randers et
Behrens. Scan intégral qui répond, 43 Mo, sur le site du Donella Meadows Project. C'est lui
qui pourvoirait le thème « croissance et limites » que le lot n'a pas pu déclarer, faute de
carte pour le porter.

**Lesourne 1985**, « Introduction : à la recherche d'une théorie de l'auto-organisation »,
*Économie appliquée* 38(3-4), p. 559-567. Neuf pages annoncées en texte intégral sur Persée.
Le lot du 22 a échoué dessus **pour une raison évitable et déjà écrite ici** : l'identifiant
Persée a été deviné d'après la forme de l'URL au lieu d'être obtenu en résolvant le DOI. La
reprise consiste à trouver le DOI.

Trois autres manques du domaine sont plus lourds et demandent un vrai balayage : six des neuf
littératures de son périmètre n'ont pas été ouvertes, deux de ses trois textes viennent d'un
nom écrit de mémoire, et un de ses trois thèmes repose entièrement sur Forrester.
`corpus/map/systems-thinking.scouting.md` les nomme un par un et dit ce qui a été essayé.

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
