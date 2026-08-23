# Ce qui reste à faire

Ce fichier existe pour qu'une session qui reprend le corpus sache **par où commencer**, sans
relire tout le dépôt et sans redécouvrir ce que six lots ont déjà appris.

Il ne double pas `corpus/ETAT.md`, qui dit ce que le corpus **est** ; celui-ci dit ce qu'il
lui **manque**. Et il ne remplace aucun script : les chiffres ci-dessous sont un instantané
du 22 août 2026, les commandes sont la vérité.

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
| **A.** Approfondissements | 8 cartes | non | **rouvert le 23 août 2026** |
| **B.** File de la sociologie des organisations | 25 entrées | oui, cartographie déjà faite | ouvert |
| **C.** Quatre domaines vides | 4 domaines | oui, **tout est à faire** | ouvert |
| **D.** Reprises courtes de `systems-thinking` et de `decision-science` | 4 textes | oui, accès déjà constaté | ouvert |

Le chantier A s'était vidé le 21 août et **il se rouvre le 23** : les huit cartes de la science
de la décision n'ont pas d'approfondissement. C'est délibéré, et non un oubli, la routine
nocturne consacrant une phase entière à ce travail. **C'est le chantier que prend la nuit
suivante**, et sa file est celle de `corpus:deepen`, pas celle de ce fichier.

Le chantier C a perdu un domaine le 22 août, `systems-thinking`, et un second le 23,
`decision-science`. **La famille « Comprendre le pilotage » est complète.** Ce que ces deux
passages ont laissé derrière eux, et qui se reprend vite, est au chantier D.

---

# A. Les approfondissements

**Vidé le 21 août 2026, rouvert le 23.** Les vingt-cinq cartes qui n'en avaient pas en ont un :
les treize de human factors et les douze de cybernétique. `corpus:deepen` projette
**66 approfondissements, 95 772 mots, 1 451 en moyenne**.

Mais sa fin de sortie liste de nouveau **huit cartes**, celles du lot d'ouverture de la science
de la décision, ouvert le 23 août. C'est le seul écart actuel du corpus entre ce qui est validé
et ce qui est servi, et il se comble par `/corpus-deepen`, sans aucune recherche documentaire :
la matière est la carte elle-même, sa lecture primaire et son verdict de contrôle.

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

# C. Les quatre domaines vides

**`systems-thinking` est sorti de cette liste le 22 août 2026**, et **`decision-science` le
23**. Les deux avaient le meilleur stock d'entrée du lot, et c'est par eux que le chantier a
été entamé : périmètre écrit, cartographie, cartes, puis thèmes. Ce que ces passages ont appris
est au chantier D et dans `corpus/ETAT.md`.

| famille | domaine | périmètre | cartographie | stock d'entrée |
|---|---|---|---|---|
| Humains et organisations | Sociologie du travail | — | — | aucun |
| Humains et organisations | Psychologie du travail | — | — | 1 cas de frontière |
| Humains et organisations | Économie comportementale | — | — | aucun |
| Production et systèmes | Operations Management | — | — | 3 rapports repérés |

**Les trois domaines de la famille « Comprendre les humains et les organisations » sont
désormais les seuls sans stock d'entrée sérieux**, et `operations-management` est le dernier à
en avoir un. C'est lui qui a le meilleur rendement des quatre.

**Aucun des quatre n'a de périmètre écrit ni de cartographie.** Les ouvrir, c'est refaire
l'ordre complet, et cet ordre n'est pas négociable : il a été appris en le violant.

> le périmètre s'écrit → le scout cartographie → **puis** les thèmes se déclarent → puis les
> concepts s'instruisent

Les neuf thèmes de la sociologie des organisations ont été posés de mémoire avant toute
lecture, et le périmètre le reconnaît lui-même comme un découpage a priori : c'est pourquoi
deux d'entre eux affichent encore une page vide. La règle qui en découle vaut pour les quatre :
**un thème sans carte validée ne se déclare pas.** Elle a de nouveau tenu le 23 août, où deux
thèmes proposés par la cartographie de `decision-science` n'ont pas été déclarés faute de cartes
pour les porter, alors même que leurs textes étaient ouverts et lus.

## Ce dont l'ouverture hérite déjà, et qui n'est pas à rechercher

Un seul de ces domaines ne part pas de rien. Les périmètres et cartographies existants ont
tranché leurs frontières **depuis l'autre côté**, et consigné en angle mort ce qui leur
revient plutôt que de le rejeter. Un scout qui l'ouvre commence par lire ces sections.

**Le legs se vérifie : c'est ce qui a ouvert `systems-thinking`.** Les trois textes que
`corpus/map/cybernetics.scouting.md` lui avait consignés ont été repris tels quels le 22 août.
Un des trois a rendu, et c'était le plus riche, celui que la cartographie appelait « un cadeau
pour qui ouvrira ce domaine ». Le signal joint au legs s'est vérifié lui aussi : Bertalanffy et
Forrester, qui n'avaient pas été rencontrés spontanément, remontent immédiatement dès qu'on les
cherche nommément. Une section d'angle mort bien tenue vaut donc un balayage, et cela justifie
le temps qu'elle coûte.

**Le legs se vérifie une seconde fois, et il a rendu davantage : c'est ce qui a ouvert
`decision-science` le 23 août.** Les cinq textes que deux cartographies lui avaient consignés
ont été repris tels quels. Deux ont rendu une carte ; deux autres, jamais testés jusque-là, ont
été **vérifiés et déclarés fermés** plutôt que laissés en suspens ; le cinquième n'était pas un
texte mais un courant, et il l'est resté. Surtout, la vérification d'accès du legs a fait
découvrir ce qu'aucune requête par littérature n'avait donné : **un recueil de 1988 entièrement
ouvert**, d'où sont sorties cinq des huit cartes du lot. Aller vérifier un legs vaut donc mieux
que de le croire, et pas seulement pour ce qu'il annonce.

**`operations-management`**, le dernier domaine à hériter de quelque chose — trois rapports du
Department of Defense appliquant la loi de la variété requise à l'acquisition de systèmes
d'armes, mirés sur Internet Archive, repérés non ouverts. **À quoi s'ajoute une voie d'accès
que le lot du 23 août a établie et qui vaut pour lui plus que pour tout autre** : la collection
`dticarchive` d'Internet Archive sert sans restriction des rapports techniques ONR, ARPA et RAND
dont la publication en revue est fermée. Deux cartes de ce lot en viennent. Les trois rapports
légués relèvent exactement de ce fonds.

**`work-psychology`, `sociology-of-work`, `behavioral-economics`** — les deux cartographies
qui les ont explicitement balayés **se déclarent vides pour eux**, et disent pourquoi : les
mots-clés de leurs périmètres ne recoupent pas naturellement ceux de ces domaines. C'est un
résultat, pas un manque, et il signifie qu'ouvrir ces trois-là demandera un balayage entier.
Un seul cas de frontière est consigné, Mackworth 1948 sur la vigilance, **tranché du côté de
`human-factors`** et donc pas à réclamer.

Une nuance à porter sur `behavioral-economics` depuis le 23 août : le périmètre de
`decision-science` a écrit la frontière avec lui, et il la donne pour **la plus coûteuse à
tenir** de ses six. La coupure retenue est celle-ci, et elle ne se rouvre pas depuis l'autre
côté : un écart de jugement pris comme **fait de raisonnement** est en science de la décision ;
le même écart pris comme **fait économique**, avec ses conséquences agrégées, est là-bas. La
cartographie du 23 août n'a toutefois **rien cherché de ciblé** vers ce domaine : elle ne
constitue donc aucun stock d'entrée, et son silence n'est pas un vide établi.

## Le piège que ces quatre domaines partagent

La cybernétique a montré ce que coûte un champ dont le vocabulaire est disponible pour
n'importe quel usage métaphorique. Les cinq le sont autant : « système », « décision »,
« flux », « motivation », « biais » circulent partout. Le rejet le plus fréquent à prévoir
sera le même — **un texte qui invoque le mot sans mécanisme identifiable ni auteur
rattachable** — et il se traite de la même façon : `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un candidat gris non tranché
revient toujours par une autre porte.

---

# D. Les reprises courtes de `systems-thinking` et de `decision-science`

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

**Un agent qui télécharge vérifie l'empreinte de ce qu'il a reçu.** Le répertoire de travail
temporaire est partagé entre agents parallèles, et trois agents du lot du 23 août ont lu ou écrit
le fichier d'un voisin, l'un d'eux recevant l'OCR d'un tout autre ouvrage que le sien. La mise en
garde existait déjà, plus bas dans ce fichier, et elle n'a pas suffi : **ce qui a sauvé les trois
est la comparaison de la taille et du MD5 à la notice d'Internet Archive**, pas la vigilance. Le
préfixage des fichiers de travail par l'identifiant de la carte reste nécessaire ; il n'est pas
suffisant.
