# État du corpus — 25 août 2026

Écrit sur le disque parce qu'une session a déjà été coupée en cours de route : ce fichier
existe pour qu'une reprise reparte des fichiers, et non de la mémoire de quelqu'un.

Ce fichier dit ce que le corpus **est**. Ce qui lui **manque**, et par quel bout le prendre,
est dans [`corpus/RESTE-A-FAIRE.md`](RESTE-A-FAIRE.md).

`npm run corpus:validate` : **84 enregistrements, 82 validés, 0 erreur, 55 avertissements.**
`npm run corpus:deepen` : **66 approfondissements pour 82 cartes validées.** Fin de sortie :
**seize cartes sans approfondissement**, les huit de la science de la décision et les huit de
l'operations management, et c'est le seul écart entre validé et servi.
`npm test` : **476 tests, 0 échec.** `npm run lint` et `npm run corpus:build` : sans erreur.

**Huit domaines instruits sur onze déclarés.** `operations-management` a rendu son premier lot le
25 août, au passage 03 de la routine nocturne, deux nuits après avoir reçu son périmètre et sa
cartographie. Les trois derniers domaines fermés (`sociology-of-work`, `work-psychology`,
`behavioral-economics`) n'ont ni périmètre ni cartographie : les ouvrir, c'est refaire l'ordre
complet, périmètre puis scout puis thèmes puis cartes.

| domaine | thèmes | cartes validées | approfondissements |
|---|---:|---:|---:|
| Sociologie des organisations | 9 | 10 | 10 |
| Ergonomie de l'activité | 4 | 15 | 15 |
| Human Factors / ergonomie cognitive | 5 | 13 | 13 |
| Théorie de la mesure / KPI | 4 | 9 | 9 |
| Cybernétique | 4 | 12 | 12 |
| Systems Thinking | 3 | 7 | 7 |
| Science de la décision | 2 | 8 | **0** |
| Operations Management | 3 | 8 | **0** |

**Seize cartes validées attendent leur approfondissement**, les huit du 23 août et les huit du
25. L'écart s'était refermé le 21 août et il se rouvre depuis, volontairement : la routine
nocturne consacre une phase entière à ce travail, et une nuit d'ouverture de domaine n'en écrit
pas. `npm run corpus:deepen` les liste en fin de sortie : **c'est la file, et elle fait foi
contre ce fichier.**

**La famille « Comprendre le pilotage » est complète.** Ses deux domaines, la théorie de la
mesure et la science de la décision, sont instruits.

**La famille « Comprendre la production et les systèmes » est complète elle aussi.** Elle était
entièrement vide le 20 août : la cybernétique le 21, le systems thinking le 22, et
`operations-management` le 25 après une ouverture en deux temps. **Deux des quatre familles sont
donc entièrement instruites**, et les trois domaines qui restent appartiennent tous à la même,
« Comprendre les humains et les organisations ».

# 0. Operations Management — premier lot du 25 août 2026 (passage 03), publié

Huitième domaine instruit, **troisième et dernier de la famille « Comprendre la production et les
systèmes »**. Ce lot est le second passage sur ce domaine : le premier, le 24 août, avait écrit le
périmètre et la cartographie **sans rendre une seule carte**, la chaîne de scouts ayant consommé
la nuit. Celui-ci a sauté périmètre et scout, comme le passage précédent l'avait prescrit, et a
instruit directement.

## Les huit cartes

| id | thème | auteur·s | tours |
|---|---|---|---:|
| `cause-de-hasard-et-cause-assignable` | Ce qu'un procédé fait varier | Shewhart | 1 |
| `trois-sigmas-arbitrage-de-cout` | Ce qu'un procédé fait varier | Shewhart | 1 |
| `regle-de-commande-a-deux-niveaux` | Combien produire, combien en tenir | Arrow, Harris, Marschak | 1 |
| `penalite-de-rupture` | Combien produire, combien en tenir | Arrow, Harris, Marschak | 1 |
| `regle-lineaire-de-decision` | Combien produire, combien en tenir | Holt, Modigliani, Simon | 1 |
| `absorber-les-fluctuations-de-commandes` | Combien produire, combien en tenir | Holt, Modigliani, Simon | 1 |
| `attente-du-poste-aval` | L'ordre dans lequel les choses passent | Bellman, d'après Johnson | 1 |
| `fragilite-d-un-ordonnancement-optimal` | L'ordre dans lequel les choses passent | Bellman | 1 |

**Les huit portent une citation, et les huit ont passé le contrôle aveugle en un seul tour**,
`PASS` sur les quatre questions, sans un renvoi. Aucun lot du corpus n'avait obtenu cela.
**Le domaine n'a aucune signature féminine et aucune source primaire francophone** : c'est à
surveiller et à porter au prochain passage, pas à corriger par quota. Les trois candidats
francophones repérés cette nuit sont atteignables et n'ont pas été lus.

**Une neuvième carte a été instruite, contrôlée, et reçue `PASS`** : `etat-de-controle-statistique`.
Elle n'est pas publiée, et **le motif est le plafond de volume du lot, pas un défaut**. Elle
attend en `corpus/candidates/` avec son verdict, et c'est la reprise la moins chère du dépôt.

## Ce que ce lot a payé, et qui resservira

**La leçon opératoire du passage 02 a été appliquée à la lettre, et elle a tenu.** Ce passage
avait écrit : ces agents accumulent tout en contexte et n'écrivent qu'à leur dernière action ; il
faut leur pré-identifier les sources, leur interdire la relecture des gros fichiers, borner leurs
requêtes et exiger l'écriture tôt. **Les cinq agents de la première vague ont tous écrit leur
fichier dans les deux minutes**, aucun n'a été arrêté, et les quatre lectures primaires ont rendu
neuf concepts. Là où trois scouts consécutifs avaient consommé une nuit entière, la même chaîne a
rendu un lot complet. **Une leçon d'atelier écrite au journal a donc valu une nuit de travail**,
et c'est ce qui justifie le coût de l'écrire.

**Trois des quatre candidats étaient mal décrits par la cartographie, et la pièce a corrigé les
trois.** Le détail est dans `corpus/map/operations-management.scouting.md`, section « Reprise du
25 août 2026 », qui fait foi contre les sections antérieures du même fichier :

- le rapport de Bellman est de **1955**, non de 1965 : la cartographie se trompait de dix ans,
  **et la couche OCR de l'item la trompe encore**, transcrivant « 1965 » là où la couverture
  imprime « 1955 ». Seule l'image dit vrai ;
- le rapport du filon HMMS, déclaré « identité à préciser », est l'**O.N.R. Research Memorandum
  No. 30**, signé **Holt, Modigliani et Simon**, mai 1955. **Muth n'est pas auteur de cette
  pièce** : il est remercié parmi sept étudiants, et le sigle HMMS est celui du livre de 1960 ;
- le rapport de stock, connu sous le seul numéro `AD 422810`, est le **papier RAND P-189,
  « Optimal Inventory Policy », de Kenneth Arrow, Theodore Harris et Jacob Marschak**, révisé le
  16 novembre 1950.

**Un mur anti-robot a été contourné par la bibliographie, jamais par la technique.** La
cartographie consignait en angle mort un `om-scout-randp189.html` fermé par un 403 chez RAND.
C'est le même texte que le rapport de stock ci-dessus. **Le mur n'a pas été franchi ; le texte a
été atteint par le miroir `dticarchive`**, et l'angle mort se ferme. C'est la troisième fois que
cette conduite rend, et elle est désormais un réflexe du dépôt : chercher le rapport avant de
conclure de la fermeture de l'article.

**Un dérivé d'image d'Internet Archive ment par troncature, et deux lecteurs l'ont trouvé
séparément.** Le rendu `.../page/n<N>_x1600.jpg` **rogne le feuillet à gauche** sur ces items et
ampute le début de chaque ligne sans que rien ne le signale : sur un des rapports, 3 126 pixels
rendus pour 4 726 réels, ce qui fait perdre à la page de titre le « O. » de « O. N. R. » et le
« Ch » de « Charles ». **Le dérivé sans suffixe, `.../page/n<N>.jpg`, rend la page entière.**
C'est un piège d'accès inédit, et le plus insidieux rencontré jusqu'ici : il ne casse rien, il
tronque en silence, et un agent qui relit sur ce dérivé croit relire une image.

**Trois attributions ont été corrigées par la lecture, et chacune aurait faussé une carte.**

- **Le lot économique n'est pas d'Arrow, Harris et Marschak**, et leur propre texte le dit p. 9 :
  « We believe this is, in essence, the solution advanced by R. H. Wilson, formerly of the Bell
  Telephone Company ». Ce qui leur revient en propre est le traitement de l'incertitude.
- **Le résultat sur deux postes n'est pas de Bellman**, et son rapport crédite S. Johnson trois
  fois, jusque dans ses titres de section. La carte le dit en toutes lettres.
- **Shewhart n'invente pas le terme « assignable »** : il écrit « these causes were called
  assignable », au passif et au passé, en rapportant une pratique antérieure sans nommer personne.

## La question de droits, tranchée dans deux sens opposés la même nuit

C'est le résultat de méthode du lot, et il ne vient pas d'une consigne : **deux exemplaires sans
autorisation lisible n'ont pas reçu le même traitement, et le motif de l'écart est écrit.**

**Les trois rapports techniques gardent leur URL.** Aucun des trois items `dticarchive` ne porte
de champ `rights`, `licenseurl` ni `possible-copyright-status`, et les mentions imprimées sur les
pièces (« for OTS release », tampon DDC) sont des autorisations administratives de diffusion et
non des licences d'éditeur. La réserve est portée en clair dans les `notes` des six cartes. Elle
n'empêche pas la carte, **cette voie étant déjà celle de deux cartes publiées de
`decision-science`** : le dépôt ne rouvre pas contre lui-même une question qu'il a tranchée.

**Shewhart perd la sienne, et le motif n'est pas le même.** L'exemplaire ouvert appartient à
`digitallibraryindia` / `JaiGyan`, numérisation de masse dont l'item ne porte aucun champ de
droits ; sa seule mention, `dc.rights: In Public Domain`, est une auto-déclaration du numériseur
logée dans un champ descriptif **qui contient par ailleurs deux erreurs bibliographiques avérées**
(date « 1923 », éditeur « London »). Trois vérifications ont été jouées et écrites avec leur
issue, dont celle-ci qui vaut d'être conservée : **aucun renouvellement de copyright n'a été
retrouvé dans la base de Stanford, et le zéro est interprétable**, `Shewhart` et `Economic Control
of Quality` rendant 0 dans la même fenêtre de quatre secondes où trois témoins positifs rendaient
5, 7 et 1. Le défi anti-robot de l'interface **n'a pas été contourné** : la voie employée est
l'API JSON publique de Blacklight. La réserve reste entière, un renouvellement introuvable n'étant
pas un renouvellement inexistant.

**Décision, dans le sens le plus strict : les cartes de Shewhart se font sans l'URL de cet
exemplaire**, `consulted` restant `full-text` puisque le texte a été lu, la référence résolue
seule par son **LCCN `31032090`** contre l'export MODS de la Bibliothèque du Congrès. Deux
contrôleurs aveugles ont résolu ce LCCN indépendamment et confirmé chaque élément affiché : privée
de son URL, la référence résout seule. **Cette décision vaut désormais pour toute la collection
`digitallibraryindia` dans ce dépôt.**

## Ce que le contrôle a réellement attrapé

| question | résultat sur neuf fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 9/9 dès le premier passage |
| attribution | 9/9 dès le premier passage |
| prose fidèle aux sources | 9/9 dès le premier passage |
| sources qui résolvent | 9/9 dès le premier passage |

**Aucun renvoi, pour la première fois dans ce corpus.** Ce n'est pas que le contrôle a été
indulgent : **vingt remarques ont été signalées hors mandat par des contrôleurs qui rendaient
`PASS`, et toutes ont été appliquées.** C'est le quatrième lot consécutif où ce dispositif
rapporte plus que les renvois, et cette fois il les remplace entièrement. Les plus utiles :

- un mot tombé dans un verbatim stocké : « the decision **rule** solution », relu sur l'image ;
- deux sources typées `secondary-academic` qui étaient **la publication en revue du même travail
  par les mêmes auteurs**, donc des sources primaires ; retypées, au prix de deux avertissements
  nouveaux, « aucune source secondaire affichée », qui sont exacts et qu'on garde ;
- une note d'attribution qui rattachait aux Bell Telephone Laboratories une pratique que la page
  citée ne rattache à personne ;
- une collation « 42 p. » qui décrivait l'exemplaire numérisé et non le mémorandum, **dont
  l'appendice annoncé au folio 43 est absent du scan** ;
- une ambiguïté qui aurait rendu une phrase fausse selon la façon de la lire : « le nom s'est fixé
  après ces pages » est exact des deux pages citées, et faux du livre, où l'expression figure
  p. 146. **C'est cette remarque qui a désigné la neuvième carte comme celle qui attend.**

## Réserves conservées, et ce qui commande le prochain passage sur ce domaine

Elles sont dans le champ `notes` de chaque carte. Les principales :

- **Aucune source secondaire n'a été ouverte sur les huit cartes**, et aucune réception
  francophone n'existe sur aucune. C'est la faiblesse structurelle du lot, et elle est déclarée
  fiche par fiche. Les lectures primaires n'en ont porté aucune plutôt que d'en inventer.
- **L'exemplaire de Shewhart n'est pas l'édition de 1931** : c'est un septième tirage postérieur
  à 1943, dont le bloc de copyright est illisible sur le scan, et **dont la préface est datée
  « April, 1923 » sur l'imprimé**, ce qui est bibliographiquement impossible et qui est l'origine
  du « 1923 » de la notice. Les folios ne sont donc pas certifiés contre l'original.
- **L'appendice de démonstration du mémorandum ONR est absent du scan.**
- **Un homonyme quasi parfait de Bellman existe et il est coécrit** : Bellman, Esogbue et
  Nabeshima, *Mathematical Aspects of Scheduling and Applications*, Pergamon, 1982. Les libellés
  de source portent le numéro de papier et l'année pour l'écarter.
- **Deux gisements restent ouverts dans des textes déjà lus** : les parties V et VI de Shewhart,
  et surtout **limites de contrôle contre limites de tolérance** ; la partie III de Bellman,
  lissage industriel et stock optimal.
- **Les cinq candidats hérités des voisins restent tous non ouverts**, et ce passage ne les a pas
  retentés : trois rapports du Department of Defense légués par `cybernetics`, deux notices HAL
  léguées par `human-factors`.
- **La couche francophone est repérée et non lue.** Trois candidats atteignables, chacun avec sa
  réserve : Guihéneuf 1956 sur Persée, DOI résolu ; Fiore 1987 sur Persée, **identifiant venu d'un
  moteur de recherche et non d'une résolution de DOI**, à reconfirmer avant usage ; De Almeida
  1998 sur Numdam, **GET du PDF non testé**. HAL, Cairn et OpenEdition Books **n'ont jamais été
  interrogés par leur propre moteur**, et quatre points d'entrée du périmètre n'ont reçu aucune
  requête ciblée.

## Ce qu'avait établi le passage 02 du 24 août, qui n'avait pas rendu de carte

Cette section est conservée telle qu'elle a été écrite le 24 août. Elle reste utile parce qu'elle
dit ce que l'ouverture a coûté, et parce que trois de ses réserves ont été levées le 25 : les
identités des candidats 3 et 4, la date du candidat 2, et la couche francophone jamais cherchée.
**Là où elle contredit le lot du 25 août ci-dessus, c'est le lot du 25 qui fait foi.**

Huitième domaine touché, **troisième et dernier de la famille « Comprendre la production et les
systèmes »**. Deuxième passage de la routine nocturne. **Ce passage n'a pas rendu de carte** : il
a écrit le périmètre et la cartographie, et c'est là son livrable, conformément à la règle « pas
de preuve documentaire suffisante, pas de fiche ; le périmètre et la cartographie écrits sont le
livrable de la nuit ».

## Ce que le passage a établi

- **Le périmètre** (`corpus/perimeter.md`, section `operations-management`) : la discipline en
  une phrase (le comportement d'un système qui produit — capacité, files, stocks, délais,
  variabilité), le test d'entrée en trois conditions, le hors-périmètre, et **six frontières dont
  quatre étaient déjà tranchées depuis l'autre côté** (`cybernetics`, `systems-thinking`,
  `human-factors`, `decision-science`), reprises telles quelles.
- **La cartographie** (`corpus/map/operations-management.scouting.md`, 244 lignes) : quatre
  candidats atteignables, tous lus en texte intégral par les scouts, dont **deux propres**
  (Shewhart, *Economic Control of Quality of Manufactured Product*, 1931 ; Bellman,
  *Mathematical Aspects of Scheduling Theory*, RAND P-651, 1965) et **deux à identité
  bibliographique « à préciser »** (un rapport ASTIA/DTIC du filon HMMS sur la planification
  agrégée ; le rapport DTIC AD 422810 sur une politique de stock).

## Ce que le contrôle n'a pas eu à attraper, et pourquoi

Aucune carte n'a été produite, donc aucun contrôle aveugle n'a tourné. La cause n'est pas
documentaire, elle est opératoire : **le maillon `corpus-scout` a consommé la nuit.** Trois scouts
successifs — deux arrêtés après avoir rassemblé les sources sans jamais écrire la cartographie,
le troisième chirurgical qui l'a écrite en une passe. La leçon, portée au journal : ces agents
n'écrivent qu'en dernière action ; il faut leur pré-identifier les sources, leur interdire la
relecture des gros fichiers, et borner leurs requêtes.

## Réserves conservées, et angles morts qui commandent le prochain passage

- **La couche francophone n'a pas été cherchée** — manque le plus net, à combler en priorité
  (Persée, HAL, Cairn, OpenEdition Books, theses.fr : gestion industrielle, productique, génie
  industriel).
- **Le legs des deux voisins est tout entier non ouvert** : trois rapports DoD de `cybernetics`
  (`DTIC_AD1046519`, `DTIC_ADA371943`, `DTIC_ADA341017`, items `dticarchive` non ouverts) et
  Delatour et al. de `human-factors` (notices HAL `hal-02271544`/`hal-02953423` sans fichier).
- **L'identité bibliographique exacte des candidats 3 et 4 (HMMS, AD 422810) reste à établir**
  avant toute fiche : une référence qui ne résout pas n'existe pas.
- **Les grandes littératures du champ n'ont pas été vérifiées en accès** : files d'attente
  (Erlang, Little), quantité économique de commande (Harris), flux tiré, théorie des contraintes.
  Ni candidates ni rejetées : pas encore instruites.
- **Les trois domaines fermés** ont reçu leur requête ciblée obligatoire, sans candidat vérifié :
  Taylor/Braverman repérés (accès non vérifié) pour `sociology-of-work` ; littérature dispersée
  sans texte primaire pour `work-psychology` ; Schweitzer & Cachon 2000 repéré mais paywallé pour
  `behavioral-economics`. Trois repérages, aucun « vide » établi.

# 0 bis. Science de la décision — lot d'ouverture du 23 août 2026, publié

Septième domaine instruit, **deuxième et dernier de la famille « Comprendre le pilotage »**.
Premier lot conduit par la routine nocturne (passage 01 sur 15, voir
[`corpus/JOURNAL-ROUTINE.md`](JOURNAL-ROUTINE.md)).

Comme `systems-thinking` avant lui, il ne partait pas de zéro : deux cartographies voisines
lui avaient légué cinq textes avec leur état d'accès constaté. **Le legs a de nouveau rendu**,
et cette fois par un chemin que personne n'avait prévu, décrit plus bas.

## Les huit cartes

| id | thème | auteur·s | tours |
|---|---|---|---:|
| `theorie-des-perspectives` | Choisir quand on ne sait pas | Kahneman, Tversky | 1 |
| `effet-de-cadrage` | Choisir quand on ne sait pas | Tversky, Kahneman | 1 |
| `heuristiques-de-jugement` | Choisir quand on ne sait pas | Tversky, Kahneman | **2** |
| `theories-normatives-du-choix-sous-risque` | Choisir quand on ne sait pas | Fishburn | 1 |
| `critique-de-l-utilite-esperee-subjective` | Choisir quand on ne sait pas | Shafer | 1 |
| `normatif-descriptif-prescriptif` | Aider quelqu'un à trancher | Bell, Raiffa, Tversky | 1 |
| `penser-a-partir-des-valeurs` | Aider quelqu'un à trancher | Keeney | 1 |
| `classement-multicritere-electre` | Aider quelqu'un à trancher | Benayoun, Roy, Sussmann | 1 |

**Les huit portent une citation**, ce que seul le lot de cybernétique avait obtenu avant.
**Une repose sur une source primaire francophone**, celle de Roy, et elle pourvoit à elle seule
la couche francophone du domaine. **Le domaine n'a aucune signature féminine** : c'est à
surveiller et à porter au prochain passage, pas à corriger par quota.

Huit candidats instruits sur onze repérés, aucune fiche perdue, aucun rejet. Les trois non
instruits l'ont été par le plafond de volume, pas par un défaut documentaire.

## Ce que ce lot a payé, et qui resservira

**Le filon des rapports techniques est systématique dans ce champ, et il n'était connu que
par un cas.** La cartographie de `human-factors` avait légué un seul rapport ONR miré sans
restriction. Ce passage en a fait une **voie** : plusieurs textes fondateurs, publiés dans des
revues aujourd'hui fermées, existent sous forme de rapport ONR, ARPA ou RAND dans la collection
`dticarchive` d'Internet Archive. Deux des huit cartes en viennent, et la troisième découverte
du filon, Arrow 1948, n'a pas été instruite faute de place. C'est la voie d'accès la plus
rentable identifiée depuis OpenEdition Books.

**Une réédition n'est pas l'original, et ce lot l'a payé quatre fois plutôt qu'une.** Chacune
des quatre cartes anglophones du thème du risque cite un exemplaire dont la publication
d'origine est fermée : le rapport de 1977 contre l'article d'*Econometrica* de 1979, le rapport
de 1973 contre l'article de *Science* de 1974, le chapitre de 1988 contre l'article du *Journal
of Business* de 1986 et contre celui de *Science* de 1981. **Les quatre lecteurs ont localisé
leur verbatim sur ce qu'ils avaient ouvert**, et deux d'entre eux ont établi des écarts réels
entre les deux états du texte. Le plus net est celui des heuristiques : le rapport de 1973 dit
« by which they reduce » et « likelihoods » là où l'article de *Science* dit « which reduce » et
« probabilities ». Le second contrôleur l'a retrouvé indépendamment.

**Le piège symétrique existe et il est plus dangereux : la leçon fausse peut être la plus
répandue.** Le contrôleur de `effet-de-cadrage` a trouvé que la variante qui circule le plus
(« stubborn appeal », « perceptual illusions ») vient du texte de 1984, non de celui que la
fiche cite. Elle est consignée dans les `notes` de la carte avec sa conséquence écrite en clair :
**qui « corrigerait » en aval vers cette variante introduirait l'erreur.**

**Un défi anti-robot ne se franchit pas, et il ne clôt rien non plus.** Deux textes annoncés
ouverts par Unpaywall sont servis derrière un mur : Shafer 1986 chez Project Euclid (Incapsula)
et Roy 1968 chez `rairo-ro.org` (DataDome). **Aucun n'a été contourné, et les deux ont rendu par
une voie légitime** : la reprise en recueil pour l'un, le miroir Numdam pour l'autre. Le second
est le plus instructif : l'identifiant Numdam a été **résolu par recherche du titre exact, pas
deviné d'après la forme de l'URL**, ce qui est précisément la leçon qu'un lot précédent avait
écrite puis repayée.

**La couche OCR a menti trois fois, et l'image l'a rattrapée trois fois.** Un mot substitué et un
mot supprimé dans la dernière phrase du chapitre de Shafer ; la première ligne de la page 78
tronquée chez Fishburn, ce qui aurait fait conclure à tort à un écart ; et un « 23 » lu pour
« 33 » dans la table des matières, qui est l'origine probable d'une pagination fausse. **La règle
« toute citation se relit sur l'image de la page » a payé son coût trois fois dans une seule
nuit.**

**Le répertoire de travail partagé a contaminé trois agents, et la mise en garde était déjà
écrite.** `corpus/RESTE-A-FAIRE.md` demandait depuis le lot des approfondissements qu'un agent
lancé en parallèle préfixe ses fichiers de travail. Trois agents de cette nuit ont lu ou écrit le
fichier d'un voisin, et **l'un d'eux a téléchargé l'OCR d'un tout autre ouvrage** : un lecteur a
failli instruire les heuristiques sur le texte du recueil de 1988. **Les trois l'ont détecté par
contrôle d'empreinte** (taille et MD5 comparés à la notice d'Internet Archive) et ont tout refait
dans un répertoire privé. Aucune conclusion de ce lot ne repose sur un fichier contaminé, et
c'est le contrôle d'empreinte, non la vigilance, qui l'a garanti.

## Ce que le contrôle a réellement attrapé

| question | résultat sur huit fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 8/8 dès le premier passage |
| attribution | 8/8 dès le premier passage |
| prose fidèle aux sources | 8/8 dès le premier passage |
| sources qui résolvent | 7/8, un renvoi, sur un décompte de pages |

**Le seul renvoi du lot porte sur deux pages.** Le libellé de `heuristiques-de-jugement`
annonçait « 31 p. » ; le formulaire DD 1473 du rapport lui-même déclare 33 pages au champ 7a, les
deux dernières portant les références et les notes. Le contrôleur a compté sur le document, pas
sur un catalogue. Corrigé, recontrôlé par un contrôleur distinct, passé au second tour.

**Quatre corrections ont été signalées hors mandat par des contrôleurs qui rendaient `PASS`, et
toutes ont été appliquées.** C'est le troisième lot consécutif où ce dispositif rapporte plus que
les renvois eux-mêmes :

- une accroche disait « presque toujours » là où Keeney écrit « often », « it is common », « many
  decision situations » ;
- un résumé disait « les axiomes » là où **Fishburn ne conteste que la transitivité et
  l'indépendance**, conservant la continuité qu'il reconduit dans ses propres axiomes ;
- une note d'attribution prêtait à Tversky l'idée que la catégorie prescriptive « pourrait ne pas
  être nécessaire », quand la page dit que c'est le **prosélytisme** pour ce découpage qui serait
  superflu, la catégorie restant « utile à leurs discussions internes » ;
- un locator disait « p. 193-232 » quand le libellé de la même source disait « p. 193-234 ».

## Trois enseignements de méthode, à ne pas perdre

**1. Une cartographie se fait contredire par la lecture, et c'est ce pour quoi elle est
écrite.** Trois annonces du repérage ont été **infirmées** par les lecteurs primaires, chaque
fois sur pièce :

- la cartographie donnait Keeney comme opposé à l'utilité multi-attributs. **Faux** : il s'oppose
  au cadrage centré sur les alternatives, et la MAUT reste son outillage, qu'il dit
  complémentaire. Il déplace le moment où on la convoque, il ne la récuse pas ;
- le repérage donnait Fishburn comme une défense normative. **Faux** : c'est un axiomaticien qui
  expose les arguments de rationalité en faveur des axiomes standards, puis dit pourquoi il ne
  les tient plus pour inviolables ;
- la cartographie annonçait le chapitre 1 aux pages 9 à 22 et celui de Keeney aux pages 465 à
  491. **Faux les deux fois** : 9-30 et 465-494, établis sur les folios imprimés et confirmés
  après coup par Crossref.

**2. L'attribution la plus juste peut être écrite dans la bibliographie du texte qu'on cite.**
L'article de Roy 1968 est signé de lui seul. Sa propre référence [3] renvoie à une note de
travail SEMA de 1966 signée **Benayoun, Roy et Sussmann**, qui porte déjà le nom ELECTRE et
presque le même titre. Ranger la méthode sous le seul nom de Roy aurait contredit le texte
fondateur qu'on cite. Le contrôleur aveugle a vérifié la chaîne et noté que Wikipédia s'en tient
à Roy seul : **la fiche est plus exacte que sa source de réception la plus lue.**

**3. Un mot du champ n'est pas un mot de l'auteur, et la vulgarisation est la source du
contresens.** Deux cas dans le même lot. **Le rapport de 1973 ne nomme heuristiques que deux
des trois procédés**, l'ancrage y étant un *phénomène* et l'heuristique « un ajustement à partir
d'un point de départ » ; le texte dit « un nombre limité », jamais « trois ». Et **le mot
« critère » n'apparaît pas une fois chez Roy**, qui écrit « points de vue » : il est resté hors du
résumé, et ne survit que dans le titre de la carte, ce qu'un contrôleur a relevé et jugé
admissible.

## Réserves conservées, et ce qui reste à reprendre

Elles sont dans le champ `notes` de chaque carte. Les principales :

- **Cinq des huit cartes reposent sur le même exemplaire numérisé**, le recueil de 1988 servi par
  Internet Archive. Les cinq fiches le déclarent. Deux constats matériels sur cet exemplaire sont
  conservés parce qu'ils resserviront : **son fichier de pagination décale d'une unité** par
  rapport aux folios imprimés, et **les pages 204 et 205 sont absentes du scan**.
- **La version de 1986 de Shafer n'a pas été atteinte**, l'éditeur la servant derrière un mur
  anti-robot. Aucune comparaison entre les deux états du texte n'a donc pu être faite.
- **Un texte homonyme de Fishburn existe**, même auteur, même année, même titre, chez un autre
  éditeur, et personne n'a pu établir s'il est identique, abrégé ou augmenté. La fiche l'affiche
  en `metadata-only` et dit qu'elle n'en sait rien.
- **Une question de priorité reste ouverte sur `normatif-descriptif-prescriptif`** : Baron 2012
  écrit que la distinction à trois termes a émergé indépendamment chez Freeling 1984, Baron 1985
  et Bell *et al.* 1988. Freeling 1984 n'a pas pu être ouvert. La fiche ne revendique aucune
  paternité première, et c'est ce qui la sauve.
- **Aucune réception francophone n'est ouverte sur aucune des huit cartes**, y compris celle de
  Roy.

## Angles morts qui commandent le prochain passage sur ce domaine

Détaillés dans `corpus/map/decision-science.scouting.md`.

- **La représentation du problème avant sa résolution est la littérature la moins bien servie**,
  et elle n'est couverte que de biais, par Keeney. Simon 1973, « The Structure of Ill-Structured
  Problems », est fermé et confirmé tel ; son complément probable, Newell 1969, « Heuristic
  Programming: Ill-Structured Problems », a répondu `HTTP 503` à quatre tentatives et **reste ni
  confirmé ni infirmé**. C'est la reprise la plus prometteuse.
- **Deux thèmes proposés par la cartographie n'ont pas été déclarés**, faute de cartes pour les
  porter sans page à une seule entrée. Leurs textes sont ouverts et lus : Arrow 1948 pour
  l'agrégation des préférences, Newell, Shaw et Simon 1958 et 1960 pour la recherche heuristique.
  **Ce sont les deux reprises les moins chères du domaine.**
- **Le jugement de probabilité n'a pas été balayé pour lui-même** : les textes distincts sur la
  disponibilité (1973) et la représentativité (1972) n'ont fait l'objet d'aucune recherche dédiée,
  probablement accessibles par la même voie DTIC.
- **La critique du concept même de décision reste sans texte.** Sfez, *Critique de la décision*
  (1973), a été cherché sur HAL, theses.fr, Internet Archive et le web général : seul un compte
  rendu a été trouvé, donc une source secondaire. **Angle mort déclaré, pas case vide.**
- **La couche francophone tient sur un seul texte, et par un manque de méthode assumé** : Persée
  n'a été interrogé qu'une fois par mots-clés larges sans que les résultats soient exploités, et
  **OpenEdition Books, que le périmètre nommait comme voie prioritaire, n'a fait l'objet d'aucune
  recherche aboutie**.
- **Aucun des quatre domaines voisins fermés n'a été cherché de façon ciblée.** Contrairement aux
  passages `human-factors` et `cybernetics`, qui avaient vérifié l'absence de dette sur des textes
  précis, ce passage n'a rien établi : **c'est un vide de méthode, pas un résultat sur le champ**,
  et il ne doit pas se lire comme un vide déclaré.

## Ce que ce fichier ne raconte pas, et qui n'est pas perdu

**Les deux domaines de la famille « Comprendre le travail réel » ont été ouverts et instruits
les 18 et 19 août 2026, et ce fichier n'a jamais reçu leur compte rendu de lot.** Il est resté
au 17 août, annonçant deux domaines quand il y en avait quatre et 17 cartes quand il y en
avait 45. L'écart est corrigé ici en le nommant, non en le comblant après coup : personne ne
réécrira de mémoire le récit de deux lots qu'il n'a pas conduits, et c'est exactement la
règle que ce corpus applique à ses cartes.

Ce que ces deux lots ont établi est écrit ailleurs, entier, et se lit à la source :

- `corpus/perimeter.md`, sections « Domaine ouvert — `activity-ergonomics` » et « Domaine
  ouvert — `human-factors` » : périmètres, frontières tranchées, thèmes déclarés après
  contrôle, et pour `human-factors` une section « Ce que ce passage a instruit, et ce qu'il
  n'a pas pu » qui vaut compte rendu de lot ;
- `corpus/map/activity-ergonomics.scouting.md` et `corpus/map/human-factors.scouting.md` :
  cartographies, candidats, angles morts ;
- `corpus/review/*.verdict.json` : les verdicts de contrôle aveugle, un par passage.

# 0 ter. Systems thinking — lot du 22 août 2026, publié

Sixième domaine instruit, **deuxième de la famille « Comprendre la production et les
systèmes »**, ouvert deux jours après son voisin cybernétique. Il est le seul domaine du
corpus à ne pas être parti de zéro : `corpus/map/cybernetics.scouting.md` lui avait légué
trois textes avec leur état d'accès constaté.

## Les sept cartes

| id | thème | auteur·rice | tours |
|---|---|---|---:|
| `comportement-contre-intuitif` | Ce qu'une structure finit par produire | Forrester | 1 |
| `court-terme-contre-long-terme` | Ce qu'une structure finit par produire | Forrester | 1 |
| `le-trouble-vient-des-politiques` | Ce qu'une structure finit par produire | Forrester | 1 |
| `points-de-levier` | Là où l'on peut vraiment peser | Meadows | 1 |
| `paradigme-source-du-systeme` | Là où l'on peut vraiment peser | Meadows | 1 |
| `transposition-analogique` | Ce qu'on engage en disant système | Roig | 1 |
| `systeme-concret-systeme-construit` | Ce qu'on engage en disant système | Roig | 1 |

**Les sept portent une citation**, et les sept ont leur approfondissement, écrit dans le même
passage. **Deux reposent sur une source primaire francophone**, celles de Roig. **Deux portent
une signature féminine**, celles de Meadows : c'est le premier domaine de la famille à en
avoir une, la cybernétique n'en ayant aucune.

Trois textes ouverts, sept cartes. Le rapport est inhabituel dans ce corpus et il tient à la
nature des textes : les trois sont des synthèses d'auteur, chacune portant plusieurs thèses
distinctes plutôt qu'une seule.

## Ce que ce lot a payé, et qui resservira

**Une réédition n'est pas l'original, et elle le dit elle-même si on la lit.** Le texte de
Forrester ouvert ici porte « Updated March, 1995 » et « Copyright © 1995 » ; son texte a bougé
avec sa date, puisqu'il annonce « developments over the last 60 years » là où l'article de
1971 ne pouvait pas écrire soixante. Les trois verbatims sont donc localisés sur la mise à
jour, jamais sur *Technology Review* 73(3) qui n'a pas été ouvert. Deux exemplaires
indépendants ont été comparés chaîne par chaîne, D-4468-2 du MIT OpenCourseWare et D-4468-1 du
Creative Learning Exchange : identiques.

**La notice d'une plateforme n'est pas la page de titre.** Persée annonce le texte de Roig
sous « et **les** perspectives de développement » ; la page de titre imprimée porte « et
**ses** perspectives », et Crossref donne « ses » sur le DOI JSTOR. C'est la forme imprimée
qui est retenue. Même écart sur la pagination : l'en-tête imprimé porte « XI-XII, N° spéc.,
1970-1971, 47-97 », Crossref annonce « volume 11, 1970, page 47 ».

**La voie d'accès qui a rendu ce lot n'est pas la bibliographie.** Ce sont les mises à
disposition autorisées par l'auteur ou l'institution qui le porte : un document de cours du
System Dynamics Group du MIT, un rapport de l'institut fondé par l'autrice, une revue
francophone en accès ouvert. Ces pages portent elles-mêmes leur autorisation ; c'est cela qui
se constate.

**Le contrôle des approfondissements attrape des métaphores, et il a de nouveau frappé.** Un
paragraphe parlant d'« une carte des flux d'un hôpital » a été renvoyé par
`checkForbiddenCharacters` du contrôle des textes, qui cherche des chaînes littérales. Le
renvoi était un faux positif, et la réécriture en « un schéma des flux » reste la bonne
décision, pour la raison déjà écrite au lot des approfondissements : l'ambiguïté fait
trébucher un lecteur qui vient de fermer une carte.

## Les faiblesses de ce lot, assumées et écrites

**Le contrôle n'a pas été aveugle.** Les sept cartes ont été instruites, rédigées et
contrôlées dans une seule session par un seul agent, sans passage par les sous-agents
`corpus-*`. Le dossier de `npm run corpus:brief` a été produit et relu pour chacune et les
quatre questions ont été tranchées contre les textes rouverts, mais le contrôleur n'était pas
aveugle au brief initial. C'est l'écart principal au protocole de `docs/corpus-workflow.md`,
et il est inscrit dans le `review.notes` de chaque fiche.

**Deux des trois textes viennent d'un nom écrit de mémoire.** Forrester et Meadows ont été
cherchés nommément ; seul Roig vient d'un balayage documentaire, et celui d'un autre domaine.
C'est le contraire de ce que le périmètre demande, et cela signifie que ce lot instruit le
centre canonique anglophone du champ, que n'importe qui aurait nommé.

**Six des neuf littératures du périmètre n'ont pas été balayées** : stocks, flux et délais ;
croissance et limites ; modélisation et simulation ; la théorie générale des systèmes comme
projet ; l'histoire et la critique du champ ; la couche francophone au-delà du legs.
`corpus/map/systems-thinking.scouting.md` les nomme une par une.

**Un thème entier repose sur un seul texte.** `comportement-dans-le-temps` est pourvu par les
trois cartes de Forrester. Ce n'est pas encore un thème du champ, c'est un thème de ce lot, et
la cartographie le dit.

## Ce qui est resté fermé, et ce que cela coûte

**Bertalanffy n'a pas été lu.** Les cinq exemplaires interrogés sur Internet Archive portent
tous une restriction d'emprunt, et l'article de 1972 dans *Academy of Management Journal*
n'a pas été ouvert. Conséquence directe : il est cité de seconde main dans ce lot, à travers
Roig qui le lit et le traduit, et jamais présenté autrement.

**L'ouvrage de 1972 sur les limites de la croissance est localisé en accès ouvert et n'a pas
été lu.** Le scan intégral répond, 43 Mo. C'est la reprise la plus courte du domaine, et c'est
ce qui pourvoirait le thème « croissance et limites » qui n'a pas pu se déclarer.

**Lesourne 1985 est resté fermé pour une raison évitable** : l'identifiant Persée a été deviné
d'après la forme de l'URL au lieu d'être obtenu en résolvant le DOI, et il a rendu zéro. La
leçon était déjà écrite dans `corpus/RESTE-A-FAIRE.md` ; elle a été repayée.

## L'étape suivante

Le domaine tient debout et affiche trois thèmes pourvus. Ce qui lui manque est nommé
ci-dessus, et deux reprises sont courtes : l'ouvrage de 1972, dont l'accès est déjà constaté,
et Lesourne, dont il suffit de résoudre le DOI.

# 0 quater. Cybernétique — lot du 21 août 2026, publié

Cinquième domaine instruit, **premier de la famille « Comprendre la production et les
systèmes »**, qui n'avait jusque-là aucun corpus. Le domaine avait été ouvert et
cartographié la veille et n'avait aucune carte ; il repartait de zéro, sans le stock
d'entrée dont `human-factors` avait hérité de son voisin.

## Les douze cartes

| id | thème | auteur·rice | tours |
|---|---|---|---:|
| `loi-de-la-variete-requise` | Ce qu'il faut pour réguler | Ashby | 1 |
| `amplification-de-la-regulation` | Ce qu'il faut pour réguler | Ashby | 1 |
| `regulation-proportionnelle-derivee-integrale` | Ce qu'il faut pour réguler | Goldman | 1 |
| `regulateur-commande-par-l-ecart` | Ce dont une boucle se nourrit | Ashby | 1 |
| `controle-de-la-perception` | Ce dont une boucle se nourrit | Powers | 1 |
| `feed-back-et-equilibre` | Ce dont une boucle se nourrit | Piaget | 1 |
| `critere-de-la-retroaction` | Ce dont une boucle se nourrit | Paquette | 1 |
| `ordre-a-partir-du-bruit` | Ce qui s'organise sans qu'on l'organise | von Foerster | 1 |
| `bruit-comme-principe-d-auto-organisation` | Ce qui s'organise sans qu'on l'organise | Atlan | 1 |
| `histoire-naturelle-des-reseaux` | Ce qui s'organise sans qu'on l'organise | Pask | **2** |
| `redondance-du-commandement-potentiel` | Où passe la commande | McCulloch | 1 |
| `objet-de-la-cybernetique-economique` | Où passe la commande | Brender | 1 |

Douze candidats instruits sur treize repérés, aucune fiche perdue. **Les douze portent une
citation**, ce qu'aucun lot précédent n'avait obtenu. **Quatre reposent sur une source
primaire francophone** : Atlan, Piaget, Brender, Paquette. Une cinquième, Goldman, affiche
une citation en français, mais c'est une traduction interne d'un texte anglais et elle est
déclarée comme telle : elle ne compte pas dans la couche francophone.

**Le domaine n'a aucune signature féminine.** C'est à surveiller et à porter au prochain
passage, pas à corriger par quota.

Le treizième candidat, von Foerster 1973, a été écarté avant instruction : son seul
exemplaire ouvrable est un versement de particulier sans autorisation d'ayant droit.

## La question de droits, et comment elle a été tranchée

C'est le résultat de méthode de ce lot, et il ne vient pas d'une consigne.

Quatre cartes reposent sur les actes de 1960 de Pergamon, servis par l'Internet Archive.
**Trois contrôleurs aveugles ont examiné le statut de cet exemplaire sans rien savoir les uns
des autres, et ont conclu différemment** : renvoyer la fiche, la passer avec réserve, la
passer sans grief. Ce qu'ils rapportent ensemble : aucune licence ni statut déclaré sur la
page d'hébergement, un « Copyright © 1960 Pergamon Press Inc. » au verso du titre, les quatre
exemplaires de HathiTrust en statut indéterminé, la source Academic Press du chapitre jumeau
de Goldman servie face à un « All rights reserved » explicite. Et, en sens inverse, **aucun
renouvellement de copyright dans la base de Stanford**, contrôle positif joué pour rendre ce
zéro interprétable.

Tranché dans le sens le plus strict : les URL de ces exemplaires sortent, les références
imprimées restent, identifiées par leur numéro de catalogue de la Bibliothèque du Congrès.
`consulted` ne bouge pas, ces textes ayant bien été lus. **Le contrôleur du second tour de
Pask a ensuite résolu le LCCN contre le MARC de la Bibliothèque du Congrès : privée de son
URL, la référence résout seule.** C'est ce qui rend la décision tenable plutôt que
seulement prudente.

L'indice contraire est conservé dans le verdict qui le porte, pour qu'un lot ultérieur
rouvre la question sur pièce : un renouvellement introuvable n'est pas un renouvellement
inexistant.

## Ce que le contrôle a réellement attrapé

| question | résultat sur douze fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 12/12 dès le premier passage |
| attribution | 12/12 dès le premier passage |
| prose fidèle aux sources | 12/12 dès le premier passage |
| sources qui résolvent | 11/12, un renvoi, sur les droits d'un hébergeur |

**Le seul renvoi du lot n'a porté ni sur un texte, ni sur une attribution, ni sur nos mots.**
Il a porté sur la légitimité d'un accès. C'est un déplacement par rapport aux quatre lots
précédents, où le point faible était l'attribution, et il tient à la nature du domaine : un
champ ancien dont les textes fondateurs sont chez des éditeurs commerciaux toujours actifs.

Onze corrections ont par ailleurs été signalées **hors mandat**, par des contrôleurs qui
rendaient `PASS`, et toutes appliquées. Trois portaient sur la prose et sont exactement ce
que ce dispositif existe pour attraper : un résumé qui écrivait « en établit » là où Ashby
module deux fois jusqu'à « There is, of course, not necessarily any amplification » ; une
note disant que Piaget cite les modèles cybernétiques « de seconde main » alors que ses notes
renvoient aux textes de McCulloch et Pitts, Ashby, Shannon, Turing et Polanyi avec leur
pagination ; un « aucune station ne commande de droit » chez McCulloch, que le texte
n'énonce pas, et dont un contrôleur fait remarquer que l'analogie navale de l'auteur comporte
bien un amiral.

## Trois enseignements de méthode, à ne pas perdre

**1. Une réserve de pagination se lève en comprenant la mise en page, pas en insistant.** Les
trois lecteurs d'Ashby butaient sur des numéros de page désordonnés à l'extraction. Le
troisième a trouvé la règle : chaque feuillet est un A4 portrait portant `/Rotate 90` et
contient deux pages du livre, l'impaire en haut et la paire en bas. Redressé et découpé, le
texte redevient continu. Cinq corrections de pagination sont sorties du lot, et deux causes
distinctes ont été identifiées, celle-ci et deux planches de figures non paginées chez von
Foerster. **La table des matières des actes de 1960 contredit ses propres folios**, trouvé
trois fois indépendamment.

**2. Une traduction trouvée chez un tiers n'est pas la parole de l'auteur, même quand le
tiers est un auteur du corpus.** La version française de « order from noise » qui circule
vient d'Atlan 1972, qui réunit sous une seule référence une phrase de la page 43 et une
réponse en séance de la page 49, six pages plus loin, jointes par des points de suspension.
Écartée.

**3. Trois décisions de périmètre valent mieux qu'une règle.** La cartographie donnait Piaget,
Goldman et Paquette pour litigieux et laissait la décision au lecteur primaire. Les trois
tiennent, et deux ont fait corriger ce que la cartographie leur prêtait : Paquette n'est pas
un texte de critique terminologique, ses pages 6 à 13 exposent le mécanisme de front ; et
Brender écarte lui-même, dans son propre texte, les deux domaines voisins qu'on pouvait lui
opposer.

## Réserves conservées, et ce qui reste à reprendre

Elles sont dans le champ `notes` de chaque carte. Les principales :

- **Aucune source secondaire indépendante** sur quatre cartes, aucune n'ayant pu être
  ouverte. Pour Powers, la seule littérature disponible est celle de ses partisans : la carte
  ne dit donc rien de sa place réelle dans la psychologie, et le dit.
- **La traduction Dunod 1958 d'Ashby n'a été ouverte par personne.** Les trois citations
  restent en anglais, et aucune formule française n'est présentée comme ses mots.
- **Le rapport SURI EE494-581T1 de Goldman (1958) n'existe que par la note qui le cite.**
- **Le lieu d'édition des actes de 1960** est imprimé « Oxford » sur les cartes, quand la
  Bibliothèque du Congrès et OpenLibrary cataloguent « New York ». La page de titre porte
  « OXFORD • LONDON • NEW YORK • PARIS », Oxford en tête : lecture défendable, divergence
  signalée.
- **Aucun approfondissement** pour les douze cartes.

## Angles morts de la cartographie

Détaillés dans `corpus/map/cybernetics.scouting.md`, et ils commandent le prochain lot de ce
domaine.

- **Beer est inaccessible**, et c'est ce qui a empêché d'ouvrir un thème sur la viabilité et
  la récursivité des niveaux de commande. Le thème `ou-passe-la-commande` n'a que deux cartes
  pour cette raison.
- **La cybernétique de second ordre n'est couverte que de biais**, par Pask 1960 et par un
  von Foerster antérieur de treize ans à son texte de référence sur l'observateur, lui-même
  écarté faute d'hébergement légitime.
- **Wiener n'est dans aucune carte.** Il est nommé et discuté dans trois d'entre elles, par
  Brender, Powers et Paquette, jamais cité de première main.
- **Zotero est resté inaccessible** à la cartographie comme aux quatre lots précédents, et
  les outils `mcp__documentary__*` n'étaient exposés dans aucune session de ce lot. Toutes les
  vérifications de référence ont été faites en direct contre Crossref, l'OAI de Persée, le
  MARC de la Bibliothèque du Congrès et OpenLibrary.

---

# I. Théorie de la mesure — premier lot, publié

Premier domaine ouvert après la sociologie des organisations, et donc le premier à passer
par la procédure d'ouverture inscrite dans `corpus/perimeter.md` : le périmètre s'écrit, le
scout cartographie, **puis** les thèmes se déclarent, puis les concepts s'instruisent.
L'ordre compte — les neuf thèmes de la sociologie ont été posés de mémoire avant toute
lecture, et le périmètre le reconnaît lui-même comme un découpage a priori.

## Les neuf cartes

| id | thème | auteur·rice | tours |
|---|---|---|---:|
| `signification-et-invariance` | Échelles et nombres | Suppes, Zinnes | 0 |
| `echelles-de-mesure` | Échelles et nombres | Stevens | 0 |
| `quantifier-convenir-et-mesurer` | La quantification comme opération | Desrosières | 0 |
| `nombres-et-emotions` | La quantification comme opération | Didier | 0 |
| `loi-de-campbell` | Ce que la mesure fait au mesuré | Campbell | 0 |
| `reactivite-des-classements` | Ce que la mesure fait au mesuré | Espeland, Sauder | 1 |
| `mesure-devenue-cible` | Ce que la mesure fait au mesuré | Strathern | 2 |
| `performance-totale` | Audit, évaluation, reddition de comptes | Jany-Catrice | 1 |
| `gouvernement-par-les-chiffres` | Audit, évaluation, reddition de comptes | Bruno, Didier | 2 |

Aucune fiche perdue. **Quatorze passages de contrôle aveugle**, tous indépendants, aucun
contrôleur informé de ceux qui l'avaient précédé.

Deux résultats que `perimeter.md` demande de surveiller, obtenus sans qu'aucun quota ait été
appliqué : **quatre cartes sur neuf sont francophones**, et **quatre portent une signature
féminine** (Jany-Catrice, Bruno, Espeland, Strathern).

## Ce que le contrôle a réellement attrapé

| question | résultat sur neuf fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 9/9 dès le premier passage |
| sources qui résolvent | 9/9 dès le premier passage |
| prose fidèle aux sources | 9/9 dès le premier passage |
| attribution | 7/9, deux renvois |

**Tous les renvois portaient sur l'attribution, aucun sur autre chose.** C'est cohérent avec
ce que le champ contient : dans un domaine dont les énoncés circulent sous forme de « lois »
baptisées après coup, « qui a écrit ça » est le point faible structurel. Le dispositif l'a
trouvé sans qu'on le lui indique.

## Trois enseignements de méthode, à ne pas perdre

**1. Un `PASS` ne garantit pas que chaque mot de la carte soit exact.** Les quatre questions
du contrôle sont volontairement étroites : elles demandent si la carte *excède ses sources*,
pas si chaque énoncé est juste. Deux fiches de ce lot portaient une erreur de fait sur un
champ affiché — la « qualité totale » attribuée à Dejours, qui en est le critique ; Strathern
qui « ne cite pas une seule fois » Goodhart, qu'elle nomme pourtant dans le paragraphe de la
citation. **Les deux ont été trouvées par des contrôleurs qui rendaient `PASS`**, et
signalées hors de leur mandat. Cette consigne devrait entrer dans la définition de
`corpus-blind-reviewer` : *si une phrase affichée dit quelque chose de factuellement
inexact, l'écrire explicitement, quitte à rendre `PASS`.*

**2. L'indépendance produit ce que la profondeur ne produit pas.** Une vérification dédiée a
été lancée sur la seule question de la paternité de « When a measure becomes a target… ».
Trente-deux appels d'outils, HathiTrust, Open Library, Internet Archive, Google Books ;
conclusion « Strathern » ; et une réserve honnête — une phrase du début du chapitre de
Hoskin jamais affichable depuis son commencement. Cette réserve contenait la réponse. Le
contrôleur aveugle, qui ne savait rien de tout cela, a trouvé le chapitre entier en PDF
ailleurs, et la formulation équivalente en était la première ligne. **Il n'a pas cherché
mieux : il a cherché ailleurs.**

**3. Une absence ne vaut que ce que vaut sa couverture.** La vérification ci-dessus avait
cherché six formulations, n'en avait trouvé aucune, et avait rendu ces zéros interprétables
en jouant des témoins positifs sur le même moteur dans la même minute. La méthode était
bonne et la conclusion fausse : Hoskin écrit « every measure which becomes a target becomes
a bad measure », qu'aucune des chaînes cherchées ne recoupait. *Une absence de correspondance
littérale n'est pas une absence de formulation équivalente.* La note en est conservée sur la
fiche `mesure-devenue-cible`.

## Réserves conservées, fiche par fiche

Elles sont dans le champ `notes` de chaque carte, en clair.

- **`echelles-de-mesure`** — la définition la plus citée du texte s'ouvre par « Paraphrasing
  N. R. Campbell » : toute coupe sous 150 caractères retire ce crédit. Stevens écrit
  « numerals », non « numbers ». Il ne **proscrit** aucune opération — la lecture prescriptive
  qui circule est un durcissement postérieur. Michell 1986, qui conteste la typologie, est en
  `metadata-only` : `is_oa: false`, aucun dépôt ouvert.
- **`signification-et-invariance`** — le texte ouvert est le rapport technique Stanford de
  1962, non le chapitre publié de 1963, dont la pagination diffère. Les auteurs rangent
  eux-mêmes la signification parmi les problèmes qu'ils disent non centraux. Le résumé écrit
  « si » là où la définition écrit « si et seulement si » — écart qui affaiblit, non qui
  étend.
- **`quantifier-convenir-et-mesurer`** — la formule n'est pas dans l'article de 2003
  qu'on lui prête souvent ; elle est dans l'ouvrage de 2008. L'intertitre écrit « convenir
  **puis** mesurer », le corps « convenir **et** mesurer » : les deux sont de lui, sur la
  même page. 2008 n'est pas une date de première formulation — une note renvoie à un texte
  de 2007 non ouvert.
- **`nombres-et-emotions`** — le dépôt est une version auteur acceptée, sans la pagination
  de la revue ; le locator le dit. Deux millésimes coexistent, 2024 en ligne et 2025 imprimé.
  Le mot « statactivisme » n'apparaît pas dans l'article.
- **`loi-de-campbell`** — la republication ouverte est celle du document de décembre 1976,
  **non** de l'article de 1979, qui reste payant et non ouvert. L'énoncé complet porte deux
  versants ; la carte n'en garde qu'un, faute de coupe honnête sous 150 caractères. Campbell
  ne baptise rien : il écrit « laws » au pluriel, restreint à la scène américaine.
- **`reactivite-des-classements`** — la réactivité leur vient de Campbell et de Heimer, et
  ils le disent ; leur apport est le cadre à deux étages.
- **`mesure-devenue-cible`** — la formule resserre celle de Hoskin, elle ne la crée pas.
- **`performance-totale`** — l'ouvrage de 2012, qui porte l'énoncé le plus large, n'a pas pu
  être ouvert ; la carte repose sur l'article.
- **`gouvernement-par-les-chiffres`** — le livre coécrit de 2013 n'a pas été ouvert ; la
  cosignature repose sur le renvoi explicite de l'article solo, corroboré par l'introduction
  du livre publiée en accès libre. `id` et `slug` divergent volontairement depuis le
  retitrage du tour 2.

## Ce qui reste à reprendre sur ce lot

Aucun de ces points n'est bloquant ; tous sont documentés par un contrôleur.

- **`mesure-devenue-cible`** — la note écrit « c'est Hoskin qui la nomme "loi de Goodhart" ».
  Hoskin ne se présente pas en baptiseur : il donne le nom pour déjà en circulation
  (« is becoming recognized as one of the overriding laws of our times ») et renvoie la
  définition d'origine à Goodhart. Formulation plus sûre, proposée par le contrôle : *« c'est
  par Hoskin que Strathern reçoit le nom »*. Non appliquée : la fiche est au second de ses
  deux tours, et l'énoncé n'est pas faux.
- **`mesure-devenue-cible`** — le libellé de la source Hoskin tronque le sous-titre
  (« inscribing people into the measurement of objects »). Le « chap. 14 » n'a pas pu être
  vérifié sur une table des matières.
- **`reactivite-des-classements`** — la note donne une initiale que la bibliographie de
  l'article n'écrit pas ; le locator primaire s'arrête une page avant la fin de la section
  qu'il désigne.
- **`performance-totale`** — la collection s'écrit « Capitalisme**s** » chez l'éditeur ; la
  seconde source pourrait porter son ISBN en plus de son URL.

## Angles morts de la cartographie

Ils sont détaillés dans `corpus/map/measurement-theory.scouting.md` et alimentent le
prochain lot de ce domaine.

- **Trois auteurs majeurs sont dehors faute d'accès** : Michael Power (*The Audit Society*)
  et Theodore Porter (*Trust in Numbers*), en prêt numérique contrôlé sur Internet Archive ;
  Alain Supiot (*La gouvernance par les nombres*), dont cinq comptes rendus ont été trouvés
  et jamais le texte. Steven Kerr, Miller & O'Leary, Espeland & Stevens : `is_oa: false`.
- **Deux littératures que le périmètre demandait de balayer n'ont produit aucun candidat
  ouvrable** : la mesure de la performance en santé (Donabedian) et la mesure du bien-être.
  Elles n'ouvrent donc aucun thème — *un thème sans carte ne se déclare pas*.
- **Une voie d'accès découverte en cours de lot** : OpenEdition Books sert des ouvrages
  entiers en texte intégral. La cartographie l'ignorait, et c'est elle qui a débloqué
  Desrosières. Plusieurs francophones classés fermés méritent d'y être retentés.
- **La cartographie devrait être refaite** : elle a tourné sans OpenAlex ni Semantic Scholar
  (voir plus bas), et ses requêtes partaient nécessairement de noms déjà connus — limite que
  le scout signale lui-même.

---

# II. Sociologie des organisations — huit cartes, puis deux

Les huit premières cartes et leurs réserves n'ont pas bougé depuis la refonte du format. Le
dispositif produisait alors **171 624 caractères d'enregistrement pour 600 caractères
affichés** et n'avait jamais publié une seule fiche : les huit étaient bloquées en
correction, et **aucun blocage ne portait sur leur carte**. Le format a été ramené à la
carte ; les enregistrements complets sont conservés entiers dans `corpus/dossiers/`, et
chaque fiche y renvoie par son champ `dossier`.

| id | thème | auteur |
|---|---|---|
| `deplacement-des-buts` | Bureaucratie et règles | Merton |
| `garbage-can-model` | Décision | Cohen, March, Olsen |
| `inertie-structurelle-et-selection` | Changement organisationnel | Hannan, Freeman |
| `isomorphisme-institutionnel` | Changement organisationnel | DiMaggio, Powell |
| `organisation-genree` | Organisation réelle vs formelle | Acker |
| `rationalite-limitee` | Décision | Simon |
| `regulation-controle-autonome` | Organisation réelle vs formelle | Reynaud |
| `zones-incertitude` | Pouvoir | Crozier, Friedberg |

Réserves conservées : `garbage-can-model` cite la rétrospective de 2012, l'article de 1972
n'ayant jamais pu être ouvert ; `rationalite-limitee` décrit un des trois procédés que Simon
range sous la rubrique ; `regulation-controle-autonome` repose entièrement sur l'article de
1988, *Les règles du jeu* n'ayant ni DOI, ni ISBN, ni URL stable ; `zones-incertitude`
coattribue à Friedberg sur la réception de *L'Acteur et le système*, non ouvert ;
`isomorphisme-institutionnel` cite le résumé de l'article, le passage des trois mécanismes
n'admettant aucune coupe honnête sous 150 caractères.

**Deux thèmes restent sans aucune carte** : `autorite-domination` et
`apprentissage-organisationnel`. Weber et Argyris n'ont encore aucun concept instruit.

## Lot du 22 août 2026 — `reaction-insatisfaction`, publié

Le thème était déclaré depuis la première heure et n'avait jamais porté de carte. Il en porte
deux, prises au rang 6 de la file et à son voisinage immédiat.

| id | thème | auteur | citation |
|---|---|---|---|
| `exit-voice-loyalty` | Réaction à l'insatisfaction | Hirschman | entretien *Politix*, 1995, p. 22 |
| `compromis-defection-prise-de-parole` | Réaction à l'insatisfaction | R. B. Freeman | *QJE*, 1980, p. 645 |

Les deux ont passé le contrôle aveugle en **un tour**, `PASS` sur les quatre points, aucun
tour de correction consommé. La cartographie du thème, avec chaque voie d'accès essayée et
son code de retour, est dans `corpus/map/reaction-insatisfaction.scouting.md`.

**Ce lot a été instruit sans jamais ouvrir le livre qui le fonde**, et c'est le fait à en
retenir. *Exit, Voice, and Loyalty* (Harvard, 1970) est sur archive.org sous deux notices,
toutes deux en prêt contrôlé ; la recherche plein texte interne d'archive.org était hors
d'atteinte par la politique réseau de la session ; la traduction Fayard 1995 et l'édition
Éditions Ouvrières 1972 n'ont été localisées sous aucune forme numérique ; Milbank 1980
(JSTOR) et « Exit, Voice, and the State » 1978 (Cambridge) sont fermés. Ce qui a sauvé le lot
est une voie latérale : **deux textes signés de Hirschman, en français, ouverts page par page
sur Persée**, un essai de 1992 dans *Allemagne d'aujourd'hui* (doi 10.3406/alauj.1992.3170) et
un entretien de 1995 dans *Politix*. C'est la même route qui avait débloqué la cybernétique.

Réserves conservées :

- **`exit-voice-loyalty` ne repose sur aucune phrase du livre de 1970.** Ce qui en est su vient
  de ce que Hirschman en cite lui-même dans ces deux reprises tardives. Si une édition ouverte
  paraît, c'est la première fiche du corpus à rouvrir.
- **L'essai de 1992 est une traduction dont le traducteur n'est nommé nulle part** — ni page de
  titre, ni notice Persée, ni sommaire du numéro — alors que deux de ses notes portent « Ndt ».
  Aucune de ses phrases n'est donc affichée : il fonde le résumé, il ne fournit pas de verbatim.
- **La langue de l'entretien de 1995 n'est pas établie positivement.** `translation.kind: none`
  repose sur l'absence de toute mention de traducteur, pas sur un fait positif. Le lecteur
  primaire et le contrôleur le disent séparément.
- **`compromis-defection-prise-de-parole` affiche le même texte sous trois formes** — article
  *QJE*, fac-similé NBER, notice NBER — dont deux partagent le doi 10.3386/w0242. Le contrôleur
  l'a relevé comme remarque d'inventaire, sans en faire un motif ; le lecteur, lui, voit trois
  lignes voisines.
- **Aucune réception francophone n'existe sur la carte Freeman**, cherchée deux fois avec des
  termes différents.
- L'`app_author_id` de Freeman est nul **à dessein** : `freeman` désigne dans l'application
  John Freeman, l'écologie des populations, qui est un autre homme que Richard B. Freeman.

Trois candidats du thème ont été écartés faute de source primaire ouvrable, et non pour un
motif de périmètre : le silence organisationnel (Morrison et Milliken, 2000), le whistleblowing
(Near et Miceli, 1985) et le modèle EVLN (Farrell, 1983). Aucune fiche n'a été ouverte pour
eux ; leur état d'accès est consigné dans la cartographie du thème. **Farrell 1983 est le
concept le plus proche de ce thème qui reste sans carte.**

Reste enfin une décision de produit, qui n'est pas documentaire : les trois fiches
d'échafaudage `exit`, `voice` et `loyalty` de `src/content/fixtures/concepts.fixture.ts`
enseignent les trois options équivalentes que le rang 6 déclare fausses, et que les deux
nouvelles cartes contredisent. Elles ne sortent jamais en production, et ne partagent pas les
identifiants des cartes projetées, si bien que rien ne les a périmées.

## Le candidat qui doit rester sans carte

**`couplage-lache`** — l'article fondateur (Weick, ASQ 21(1), 1976) n'a jamais pu être
ouvert : quinze voies d'accès essayées. Tout ce que le dossier établit vient d'un commentaire
rétrospectif d'une page écrit treize ans plus tard. Écrire la carte reviendrait à enseigner le
commentaire de 1989 à la place de l'article de 1976. C'est le cas d'école du critère
d'entrée : **pas de source primaire ouvrable, pas de fiche.** Les sept avertissements de
`corpus:validate` portent tous sur cette fiche, et c'est normal — elle porte encore ses notes
d'instruction.

---

# III. Ce qui reste ouvert, tous domaines confondus

## Environnement d'exécution

Ces limites ont pesé sur tout le lot et se reproduiront si rien ne change.

- **OpenAlex** : échec sur toute la session (relais du proxy, `dailyRemainingUsd: 0`).
- **Semantic Scholar** : 429 systématique, faute de `SEMANTIC_SCHOLAR_API_KEY`.
- **Zotero local** : injoignable depuis un conteneur distant (`localhost:23119`). Il contient
  peut-être plusieurs des ouvrages classés « métadonnées seules » ci-dessus.
- **Le serveur MCP `documentary` n'était pas exposé aux sous-agents**, malgré `.mcp.json`.
  Tous ont basculé sur Crossref, HAL, Unpaywall et Internet Archive en direct. Cela a
  fonctionné, mais ce n'est pas ce que l'architecture prévoit — à regarder.
- **`poppler-utils` était absent** : aucun PDF n'était lisible. Installé en cours de session.
  Six des neuf textes du lot étaient des PDF.
- `CORPUS_CONTACT_EMAIL` remettrait OpenAlex dans son *polite pool*, au prix de transmettre
  une adresse personnelle à chaque requête. Décision non prise.

Deux constats ajoutés par le lot du 23 août, et le premier est le plus important :

- **`corpus-orchestrator` ne peut pas piloter la chaîne quand son outil `Task` est
  désactivé.** C'est arrivé le 23 août : l'agent n'a pu lancer ni lecteur primaire, ni
  rédacteur, ni contrôleur. Il a testé la voie de repli, constaté que les sessions filles
  n'héritent d'aucune permission réseau, et **refusé de s'accorder cette permission lui-même**
  par `--allowedTools` ou par un fichier de réglages écrit pour l'occasion. **C'était la bonne
  décision.** Le contournement, lui, est écrit ici pour la prochaine fois : **la session
  appelante conduit la chaîne elle-même, un agent par maillon**, ce qui préserve exactement ce
  qui compte, la séparation des contextes et l'aveuglement du contrôle. Ce qu'il ne faut
  surtout pas faire est ce que l'orchestrateur a refusé de faire : instruire, rédiger et
  contrôler dans un seul contexte, où le contrôleur aurait sous les yeux le brief et la
  confiance amont au moment de rendre son verdict.
- **Le répertoire de travail temporaire est partagé entre agents parallèles, et cela a
  contaminé trois agents en une nuit.** Un lecteur a téléchargé l'OCR d'un tout autre ouvrage
  que le sien. La mise en garde était déjà écrite dans `corpus/RESTE-A-FAIRE.md` depuis le lot
  des approfondissements et elle n'a pas suffi : **ce qui a sauvé les trois est le contrôle
  d'empreinte** (taille et MD5 comparés à la notice d'Internet Archive), pas la vigilance. Un
  agent qui télécharge un fichier doit vérifier son empreinte contre la notice, et préfixer ses
  fichiers de travail par l'identifiant de sa carte.

## Produit

- **Sept auteurs affichés sans page** dans `src/content/authors.ts` : Acker, Reynaud, Hannan
  et Freeman, DiMaggio et Powell, et désormais les neuf du nouveau domaine. Leurs cartes
  s'affichent par leur nom et sont atteignables par les thèmes ; leur donner une page demande
  une notice biographique, donc une instruction.
- **31 sujets d'échafaudage jamais instruits** (`src/content/fixtures/`). Ce sont des pistes,
  pas une dette : ces fiches ont été écrites de mémoire, avant tout dispositif de
  vérification, et ne servent jamais de point de départ.
- **Le bouton « Approfondir »** ouvre désormais un texte écrit à l'avance, et non plus le
  presse-papiers. Voir la section IV ci-dessous. Le passage de relais vers une IA existe
  toujours, en bas de ce texte.

## Une note d'exactitude sur l'historique

Un message de commit de cette session affirme que les dossiers aveugles produits par
`corpus:brief` sont versés au dépôt. C'est faux : `.gitignore` les exclut délibérément, ce
sont des artefacts régénérables. Seuls les **verdicts** sont versionnés, dans
`corpus/review/verdicts/`.

---

# IV. Les approfondissements — second étage du dispositif

`npm run corpus:deepen` : **32 approfondissements projetés, 53 243 mots** — chiffres du
19 août, quand le corpus comptait 32 cartes validées et que chacune avait son texte. Il en
compte 45 depuis, et **les treize cartes de `human-factors` n'en ont pas** : c'est la file de
travail rappelée en tête de ce fichier.

Un approfondissement est le texte d'environ 1 500 mots qu'affiche « Approfondir ». Il vit
dans `corpus/deepenings/<id>.json`, il est écrit une fois hors ligne, contrôlé, puis projeté
comme le reste. **L'application ne parle à aucun modèle** : elle est exportée en statique, et
le texte affiché existait avant le clic. C'est ce qui permet qu'il ait été relu.

## Ce que le contrôle tient, et ce qu'il ne tient pas

`corpus:deepen` refuse : un texte sans carte validée, un titre qui étiquette un palier de
difficulté au lieu de nommer son sujet, du Markdown rendu tel quel, un tiret cadratin, un
champ `limits` rempli de précautions sans objet, un volume hors bornes.

Il **avertit** sur les citations : chaque passage entre guillemets de cinq mots ou plus est
comparé à l'enregistrement validé de la carte, sérialisé tel quel. Averti et non bloquant,
parce que les guillemets français servent aussi à mettre un mot en relief : un contrôle
bloquant sur cette ambiguïté ferait retirer les guillemets plutôt que vérifier les citations.

Ce qu'il ne peut pas tenir, ce sont les quatre exigences documentaires elles-mêmes. Elles se
lisent. Le protocole les porte : `corpus/deepenings/PROTOCOLE.md`.

## Ce que les textes pèsent, et pourquoi cela ne se voit pas

356 Ko de matière, soit quatre fois et demie le corpus des cartes. C'est la raison de la
projection en **deux fichiers** : les textes d'un côté, leurs seuls identifiants de l'autre.
Mesuré sur la construction, la page d'accueil charge dix scripts et aucun ne porte les
textes ; l'écran d'approfondissement est le seul à référencer ce chunk. Le jour où un écran
quelconque importerait `deepenings.generated`, ces 340 Ko partiraient avec lui sans qu'aucun
test ne le dise : c'est `hasDeepening` qu'il faut appeler, jamais le module des textes.

## Ce que le premier lot a appris

**Le contrôle des citations a attrapé un cas sur les huit premiers textes, et un seul.** Un
point final ajouté à l'intérieur des guillemets d'un passage de Coutarel, dans
`marge-de-manoeuvre`. Aucune citation fabriquée, sur aucun texte. C'est le résultat qui
comptait : la matière citable vient des `notes` et du bloc `review` des fiches, qui portent
les verbatim relevés pendant l'instruction, et les rédacteurs s'y sont tenus.

**Le champ `consulted` fait tout le travail.** `full-text` autorise à parler du contenu d'une
source ; `metadata-only` n'établit que son existence. Les `limits` des textes produits le
reprennent presque systématiquement, et c'est là qu'ils sont le plus utiles : ils nomment
l'édition non ouverte, la traduction interne, le nom de réception sans date d'apparition.

**Trois défauts trouvés dans l'outillage lui-même**, tous par les tests, aucun par la
relecture : le motif qui refuse les titres de fonction ne connaissait que l'apostrophe
droite, quand le corpus impose la typographique, si bien qu'il ne se déclenchait sur rien ;
une citation coupée par `[…]` était comparée entière, crochets compris, donc toujours
signalée à tort ; et le retour depuis l'écran d'approfondissement remontait vers
`/explore/concept` sans son `?c=`, c'est-à-dire vers l'écran « introuvable », pour toute
arrivée directe.

## Comment on relance

`/corpus-deepen`, qui lance un agent `corpus-deepener` par carte. Les agents écrivent en
parallèle et ne projettent jamais : ils contrôlent leur seul fichier avec
`npm run corpus:deepen -- --check --only=<id>`. La projection est faite une fois, à la fin.

La file de travail n'est pas tenue de mémoire : `npm run corpus:deepen` affiche en fin de
sortie les cartes validées qui n'ont pas encore de texte.

---

# V. Cybernétique — domaine ouvert et cartographié, aucune carte

Cinquième domaine ouvert, le 20 août 2026, et premier de la famille « Comprendre la
production et les systèmes », restée entièrement vide jusque-là. **L'ouverture s'est arrêtée
à l'étape 2 sur les quatre que le périmètre impose** : le périmètre est écrit, la
cartographie est faite, les thèmes ne sont pas déclarés et aucun concept n'est instruit.
C'était l'ampleur décidée pour ce passage — le découpage se valide avant qu'une seule fiche
soit écrite, parce que c'est là qu'une erreur coûte le moins cher.

- Périmètre : `corpus/perimeter.md`, section « Domaine ouvert — `cybernetics` ».
- Cartographie : `corpus/map/cybernetics.scouting.md`, **treize candidats** classés par
  accessibilité constatée, quatre thèmes proposés, angles morts détaillés.

## Deux découvertes de méthode qui dépassent ce domaine

**1. Persée sert le texte intégral, page par page.** Les trois passages précédents avaient
conclu que `/doc/<id>` ne rend que la première page et que `docAsPDF` échoue — c'est exact,
mais la page de notice porte dans ses attributs `data-content-url` une route par page,
`/doc/page/<docid>/<pageid>_<numéro>_0000`, qui répond `200` et rend l'OCR de la page. Quatre
des treize candidats de ce lot en dépendent, et **ils sont tous francophones**. Deux
conséquences immédiates, hors de ce domaine :

- **le dossier `theorie-de-l-accident` (Faverge, 1964) doit être rouvert.** Il avait été
  arrêté en `human-factors` au motif que « Persée ne rend que la première page d'un article
  de dix » ;
- deux textes ouverts par cette route relèvent de domaines déjà ouverts et sont **transmis,
  pas instruits ici** : Weill-Fassina 1972 sur la notion de régulation en psychologie du
  travail (`activity-ergonomics`), et Papin *et al.* 1973 sur les systèmes hommes-machines
  (`human-factors`, dont la cartographie signalait précisément n'avoir trouvé aucun texte
  fondateur francophone ouvert).

**2. Un `is_oa: false` d'Unpaywall sur un DOI `10.3406/` ne clôt plus rien.** Unpaywall
déclare fermés des articles que Persée sert intégralement. Ce faux négatif a une portée
générale : il a probablement coûté des candidats aux passages précédents.

Une troisième trouvaille, plus étroite : le fonds `universallibrary` / `millionbooks`
d'Internet Archive porte des actes de colloque des années 1960 **sans restriction
d'emprunt**, là où les mêmes ouvrages en collection `inlibrary` sont en prêt contrôlé. Quatre
candidats sortent de la table des matières d'un seul de ces volumes, ouverte sans savoir ce
qu'elle contenait.

## Ce qui est resté fermé, et ce que cela coûte

Wiener en entier, Beer en entier (cinq voies), Rosenblueth, Wiener & Bigelow 1943 (six
voies — configuration identique à celle du couplage lâche : commentaire ouvert, source
fermée), Maturana & Varela, les transactions Macy, Cannon. Trois plateformes en échec dur :
la collection BCL de `digital.library.illinois.edu` en `403`, `cepa.info` et
`constructivist.info` derrière un mur de connexion, `asc-cybernetics.org` en `406`.

**Le W. Ross Ashby Digital Archive n'existe plus** : `rossashby.info` redirige vers un site
de casino. Vérifié deux fois, indépendamment.

## Les faiblesses de ce passage, assumées et écrites

- **Douze candidats sur treize sont antérieurs à 1980.** La seconde vague du champ — la
  cybernétique dite de second ordre — est presque absente, et le seul texte atteignable qui
  en relève l'est par un hébergement dont la légitimité n'est pas établie. Cause identifiée
  et réparable : les deux plateformes qui portent cette littérature sont l'une derrière un
  `403`, l'autre derrière un mur de connexion.
- **Trois candidats sur treize viennent du même ouvrage** — le manuel d'Ashby, seul texte
  fondateur du champ ouvert avec une autorisation d'ayant droit constatable sur le fichier
  lui-même. Le thème qu'ils formeraient serait un sommaire d'Ashby, et la cartographie le
  dit.
- **Deux des dix littératures du périmètre n'ont aucun candidat solide** : le comportement
  téléologique et sa critique, et la cybernétique de l'organisation.
- En revanche, **la couche francophone est la meilleure des passages anglophones du corpus** :
  quatre sources primaires en français sur treize, 31 % contre 13 % en `human-factors`.

Sur le biais de mémoire, que le périmètre demande de mesurer : huit candidats sur treize
portent un nom que le scout dit avoir pu écrire sans recherche, mais **un seul sur treize est
né d'un couple auteur-concept connu d'avance**. Le fichier refuse d'en tirer un satisfecit et
il a raison : les noms qu'on écrit spontanément dans ce champ — Wiener, Beer, Bateson,
Maturana — sont tous inaccessibles. C'est la fermeture de leurs textes, autant que la
discipline du balayage, qui les a écartés.

## L'étape suivante

Déclarer les thèmes **ne se fait pas maintenant** : ils se déclarent après l'instruction et
le contrôle, et un thème sans carte validée ne se déclare pas. La suite est donc
l'instruction d'un premier lot par `/corpus`, en partant des candidats les mieux ouverts.
Deux réserves à porter dans le brief du lot :

- le découpage thématique proposé compte quatre thèmes, dont **deux que la cartographie
  elle-même juge insuffisamment pourvus** (`commande-et-organisation`, deux candidats dont un
  lu au quart ; `la-boucle-et-ses-mots`, dont elle écrit que c'est peut-être un faux thème) ;
- cinq points de vigilance de non-doublon sont nommés, tous à la frontière et tous déjà
  tranchés par le périmètre. Le plus facile à manquer : le mot « régulation », déjà instruit
  deux fois dans le corpus, dans deux sens dont aucun n'est celui de ce domaine.
