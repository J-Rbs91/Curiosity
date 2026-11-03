concept : points-de-levier
verdict : REWRITE

CONSTAT DOCUMENTAIRE PRÉALABLE

- `corpus/validated/points-de-levier.json` ne porte pas de champ `dossier` (le pack le confirme :
  `dossier_declare.statut = non-declare`). Le répertoire conventionnel fait foi.
- `corpus/evidence/points-de-levier/` contient un seul fichier, `lecture.json` (pas de
  `scouting.json`). Il porte `sources_ouvertes` (rapport de 1999 `full-text`, Abson 2017 et
  Fischer & Riechers 2019 `metadata-only`), `definition_de_lauteur`, 67 `extraits_lus`
  verbatim paginés (`SUP-e7d18f493fc9bcee` … `SUP-b202cb822f50ec5c`) et six `reserves`
  (`SUP-2fc6818e79a553a0` … `SUP-a047a1762e4f2d4d`).
- `access_reconciliation` : trois déclarations, trois `corrobore`. Aucune divergence d'accès
  entre la fiche et le dossier.
- Les audits antérieurs (`corpus/deepening-audits/points-de-levier.md` et la version précédente
  de ce fichier) concluaient « la carte n'a pas de dossier ». Ce n'est plus vrai, et cela change
  le diagnostic : le texte actuel a été écrit contre le seul résumé de la fiche, et ses
  sections les plus « explicatives » (S2.P1, S2.P2, S3.P4, S4.P2) comblent par du raisonnement
  libre une matière que le rapport donne maintenant en toutes lettres, parfois en sens contraire.
- Aucune contradiction entre `notes`/`review` de la fiche et le dossier. Seul écart mineur :
  `notes[4]` cite « adjustments to faucets » (p. 5-6), formule absente des extraits ; ce n'est pas
  un démenti (les extraits ne prétendent pas à l'exhaustivité), le texte lecteur ne l'emploie pas.
- Texte actuel : 1 120 mots (lead 138, S1 260, S2 149, S3 228, S4 145, S5 200), soit à la limite
  basse de `PROTOCOLE.md` §5 (1 300-1 700 visés, « en dessous de 1 100, le texte n'a rien
  ajouté »).

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur passe de « faut-il agir » à « où appuyer », et apprend que les endroits
  possibles (montant, délai, règle, décideur, raison d'être) n'ont pas la même portée. Delta
  réel, en mots courants. « La personne qui décide » est soutenable (p. 17,
  `SUP-a63a2642d8b852de`), mais le texte n'exploitera jamais cette entrée.
- lead[1] : apprend l'auteur, son lien avec Forrester, l'existence d'une liste de douze endroits
  ordonnés, et qu'un avertissement l'accompagne. Delta réel, mais deux phrases sans appui :
  « a passé sa vie à observer des gens intelligents pousser très fort sur des endroits qui ne
  bougent pas » (biographie rhétorique, rien dans le dossier) et « l'un des textes les plus repris
  du domaine » (la réception n'est connue que par deux notices `metadata-only`, et
  `SUP-84acdf041d07a3e5` dit expressément qu'elles n'attestent pas la reprise). La définition que
  Meadows donne elle-même du terme (p. 1, `SUP-e7d18f493fc9bcee`) est absente de tout le texte.
- S1.P1 : apprend que la liste est un ordre croissant d'efficacité et que le n° 12 est le plus
  faible. Delta réel et utile (contresens de lecture prévenu). « chacun en connaît » est la
  généralité déjà refusée par le gate (C007).
- S1.P2 : apprend que les paramètres sont au bas de l'échelle et qu'ils concentrent l'attention.
  Delta réel mais maigre : ni le « 99 percent of our attention » ni l'exemple de la dette
  (p. 5-6) ne sont mobilisés ; « négociation interne » n'est pas dans le rapport.
- S1.P3 : énumère les onze autres niveaux. Delta : le lecteur voit l'échelle entière, sans
  comprendre aucun niveau. **Erreur de fidélité** : « le pouvoir de changer les règles » n'est pas
  une entrée de la liste révisée. Le n° 4 de la liste en douze est « The power to add, change,
  evolve, or selforganize system structure » (`SUP-a169d25e5e6fbc96`) ; « The distribution of
  power over the rules » est le n° 3 de la liste en neuf (`SUP-a07cb81899bc2053`). Le texte fond
  les deux versions qu'il prétend distinguer en S4.P1.
- S1.P4 : propose l'image de la baignoire (paramètre = robinet, réserve = niveau, délai, règle,
  but). Delta apparent, mais **inversé par rapport à la source** : la phrase finale « On sent
  immédiatement lequel de ces éléments […] changerait vraiment la situation » dit le contraire de
  ce que Meadows tire de la même baignoire : « Notice that the goal and the feedback connections
  are not visible in the system » (`SUP-b3263903ec60b7fe`), puis « That’s why leverage points are
  not intuitive » (`SUP-655dfcede1c2acdf`). En outre « le bouchon » remplace la vanne de
  `notes[4]`, « la règle, c'est ce qui décide qu'on ouvre ou qu'on ferme » n'est pas dans la
  baignoire de Meadows (chez elle, ce sont deux boucles correctrices qui règlent l'arrivée et la
  sortie, `SUP-92bceffd56f1b8ed`), et « la raison pour laquelle on veut de l'eau » déforme le but
  d'une boucle, qui est un niveau à tenir (`SUP-5ec6451bfb71af20`).
- S2.P1 : affirme que l'ordre « obéit à une logique simple » : paramètre < règle < but < idée,
  « plus on monte, plus on agit tôt dans la chaîne ». Delta : un principe d'ordre, mais en partie
  inventé. Le dernier maillon est soutenu (« Paradigms are the sources of systems », p. 18,
  `SUP-a6476543e39989ab`) ; le reste contredit la source : la liste « was not exactly tightly
  reasoned » (`SUP-a193a2898b0534b1`), « its order is slithery. Every item has exceptions »
  (`SUP-01cbdf81a02ad20e`), et Meadows place plusieurs niveaux pour des raisons de *faisabilité*
  et non de position dans une chaîne (délais, `SUP-5bd5758b923ca76e` ; structure physique,
  `SUP-00cbb4a2f594de25` ; tampons, `SUP-1038537805616f0f`/`SUP-e630e93572303ddb`).
- S2.P2 : affirme que le classement lu à l'envers est un classement par difficulté politique, un
  paramètre « ne menace personne ». Delta : une relation niveau/résistance. La relation est
  soutenue par p. 19 (« The higher the leverage point, the more the system will resist changing
  it », `SUP-5402cf481a060cd4`), mais « il ne menace personne » est **contredit** par p. 5-6
  (« politically charged parameters », `SUP-ef6279ab526086e2` ; « fight fierce battles over them »,
  `SUP-64bcbfebed301d75`), et la nuance de Meadows sur le paradigme (« nothing necessarily
  physical or expensive or even slow », `SUP-00df101d1f99a8f0`) manque là où elle compte.
- S2.P3 : l'effort va aux leviers faibles, d'où le sentiment d'avoir agi sans résultat.
  REDONDANT AVEC S1.P2 (concentration de l'attention sur les paramètres) ; seul ajout, le
  « parce qu'ils sont accessibles », est une cause que le rapport ne donne pas.
- S3.P1 : apprend la citation centrale et sa fin (« systematically worsening… »). Delta réel. La
  première phrase (« ne présente pas sa liste comme une méthode ») anticipe S4.P1.
- S3.P2 : apprend l'observation de Forrester (tout le monde pousse déjà le levier, dans le mauvais
  sens) et en tire : trouver l'endroit ne suffit pas, il faut le sens. Delta réel et bien sourcé
  (`SUP-2f9d07ce780e7e37`). Le meilleur paragraphe du texte.
- S3.P3 : apprend qu'un levier trouvé ne sera pas cru. Delta réel (`SUP-da88ef4e1f868844`).
  « que peu de textes de méthode reconnaissent » est un comparatif sans appui.
- S3.P4 : donne une « explication » du renversement : une boucle produit dans le temps l'inverse
  de ce qu'elle semble faire dans l'instant, et l'on agit d'autant plus fort qu'on a bien
  identifié l'endroit. Delta apparent, **mécanisme inventé** : aucune de ces deux propositions
  n'est dans le rapport. L'explication que Meadows donne est ailleurs et est disponible :
  invisibilité du but et des boucles (`SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf`), délais qui
  font dépasser et sous-corriger (`SUP-45ba50b7769e8088`, `SUP-037181d89d0fbcbe`).
- S4.P1 : apprend l'histoire de la liste (paperboard, neuf entrées, retravaillée en douze avec des
  analystes et des militants, « work in progress »). Delta réel et sourcé
  (`SUP-86bcdfa76c2fc546`, `SUP-a07cb81899bc2053`, `SUP-a193a2898b0534b1`,
  `SUP-ce493a26d6814629`). « une phrase jetée » : c'est une liste, pas une phrase.
- S4.P2 : la liste n'est pas une hiérarchie stricte ; agir sur un paramètre « vaut mieux que
  rien ». Delta : une nuance, mais sa justification est inventée (« seule action possible, vaut
  mieux que rien » n'est pas dans le rapport ; c'est le C036 du gate antérieur). La nuance réelle
  de Meadows est plus précise et plus intéressante : les paramètres comptent à court terme et pour
  qui est dans le flux (`SUP-64bcbfebed301d75`), ils deviennent leviers dans des plages critiques
  (`SUP-f9d8def49ae3267f`), plages plus rares qu'on ne croit (`SUP-71b8abf2fc83138f`) ; et l'ordre
  entier est « slithery » (`SUP-01cbdf81a02ad20e`).
- S4.P3 : la liste ne dit pas où se situent concrètement les niveaux dans un ensemble donné.
  Delta réel (`SUP-6e552c0e46adf9d7`, `SUP-1454538799f2a945`). Mais « C'est le travail de
  modélisation, et Meadows est claire sur le fait que sa liste ne le remplace pas » attribue à
  Meadows une thèse que le dossier ne porte pas, et la réserve `SUP-1454538799f2a945` interdit
  explicitement d'aller au-delà de « no quick or easy formulas ».
- S5.P1 : propose de demander à quel niveau intervient une action. Delta : un usage, extension non
  marquée comme telle ; légitime comme heuristique du rédacteur, aucun appui.
- S5.P2 : test de proportion entre diagnostic profond et remèdes de bas d'échelle. Delta faible
  (conséquence directe de S5.P1 et S2.P3), extension sans appui.
- S5.P3 : test de direction. REDONDANT AVEC S3.P2 (« il reste à déterminer de quel côté
  pousser »), avec en plus une prémisse forcée (« aussi souvent faux que le lieu est bien
  choisi » : Forrester dit « time after time », pas une fréquence égale).
- S5.P4 : la liste donne un vocabulaire pour déplacer un débat « sans accuser personne ».
  Delta : un usage social, entièrement hors dossier ; « ce qui est rarement possible autrement »
  est une généralité sans appui.

RÔLE DES SECTIONS

- S1 Un classement, et non un catalogue : poser l'ordre (12 faible → 1 fort) et faire voir
  l'échelle ; réussit le premier point, échoue le second (énumération sans un seul niveau
  compris, une entrée fausse, une image retournée contre la source).
- S2 Pourquoi les leviers forts restent inutilisés : donner la raison de l'ordre et celle de la
  sous-utilisation ; repose sur une « logique simple » que Meadows récuse, et contredit le
  rapport sur les paramètres.
- S3 L'avertissement qui accompagne la liste : enseigner le contre-intuitif (mauvais sens,
  incrédulité) ; trois paragraphes solides, un quatrième qui invente le mécanisme.
- S4 Ce que la liste n'est pas : histoire de la liste et ses bornes ; S4.P1 bon, S4.P2 et S4.P3
  justifient leurs nuances par des phrases sans appui.
- S5 Ce que l'on gagne à s'en servir : quatre usages proposés par le rédacteur ; aucun appui,
  une redondance avec S3.P2, et une section entière dont le lecteur ne peut pas savoir qu'elle ne
  vient pas de Meadows.

Progression : l'ordre général (ordre → raison → avertissement → bornes → usages) est lisible,
mais le palier central manque. Le lecteur n'apprend jamais **ce que fait un seul niveau** ni
**pourquoi Meadows le place là**, alors que c'est ce que le rapport passe dix-sept pages à
expliquer et que le dossier le donne niveau par niveau. S2 et S3.P4 remplacent ce palier par un
raisonnement inventé, et S5 grossit le texte par des usages qui ne sont pas enseignés par la
source.

SCORES

- fidélité documentaire : 1/4 — une entrée de liste fausse (S1.P3 « le pouvoir de changer les
  règles » au lieu de l'auto-organisation, n° 4) ; une conclusion inverse de la source (S1.P4
  « on sent immédiatement » contre p. 4-5 « not visible […] That’s why leverage points are not
  intuitive ») ; une contradiction (S2.P2 « il ne menace personne » contre « fight fierce battles »)
  ; deux mécanismes inventés (S2.P1 « logique simple », S3.P4 boucle inverse dans le temps) ;
  attributions sans appui (lead[1] réception et biographie, S4.P3 « Meadows est claire »). Aucune
  source `metadata-only` utilisée comme contenu, citations verbatim exactes.
- progressivité pédagogique : 2/4 — l'ordre des sections est lisible et S3 bâtit bien sur S1
  (S3.P2 → S3.P3) ; mais S2.P1 donne la raison de l'ordre avant que le lecteur ait vu un seul
  niveau fonctionner, et S5 s'appuie sur une échelle que le lecteur ne sait pas utiliser.
- densité / non-redondance : 2/4 — S2.P3 redit S1.P2, S5.P3 redit S3.P2, S5.P2 dérive de S5.P1 ;
  S3.P1 anticipe S4.P1 ; l'ensemble est court (1 120 mots) et pourtant une part notable est
  extension sans delta sourcé.
- clarté : 3/4 — langue simple, entrée concrète (lead[0]) ; S1.P3 enchaîne onze libellés
  techniques (« gain des boucles qui emballent ») sans les expliquer.
- profondeur explicative : 1/4 — aucun niveau n'est expliqué ; le seul mécanisme proposé (S3.P4)
  n'est pas celui de l'auteur ; la définition du terme (p. 1) manque.
- valeur des exemples : 1/4 — un seul exemple, la baignoire (S1.P4), et il est retourné contre
  la leçon que Meadows en tire ; aucun des cas du rapport (dette publique, compteur électrique,
  Toxic Release Inventory, nappe phréatique, « success to the successful ») n'est mobilisé ;
  S5 n'a que des cas génériques.
- limites / nuances : 2/4 — S4.P1 et S3.P3 placent bien deux nuances réelles ; S4.P2 et S4.P3
  portent la bonne nuance avec une mauvaise justification ; les nuances les plus fortes du
  rapport (paramètres qui deviennent leviers dans des plages critiques, délais qui seraient haut
  placés s'ils étaient modifiables, paradigme qui n'est pas forcément lent, ordre « slithery »)
  sont absentes.
- pouvoir d’ouverture : 2/4 — S5.P4 ouvre sur un usage social, mais non sourcé ; le texte ne
  nomme ni le niveau ultime (transcender les paradigmes, p. 19) ni la phrase finale de Meadows
  (« There are no cheap tickets to mastery »), qui fourniraient une ouverture tenue par la source.

défauts majeurs :
- S1.P3 : entrée fausse (fusion des deux listes) ; « le pouvoir de changer les règles » doit
  devenir la capacité de changer, faire évoluer ou auto-organiser la structure
  (`SUP-a169d25e5e6fbc96`, `SUP-83125ff2fbd00822`).
- S1.P4 : la conclusion de la baignoire est l'inverse de celle de Meadows
  (`SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf`) ; « bouchon », « règle » et « raison pour
  laquelle on veut de l'eau » ne sont pas sa baignoire.
- S2.P1 : « logique simple » contredite par `SUP-a193a2898b0534b1` et `SUP-01cbdf81a02ad20e` ;
  les raisons réelles de placement sont hétérogènes.
- S2.P2 : « il ne menace personne » contredit par `SUP-ef6279ab526086e2`, `SUP-64bcbfebed301d75`.
- S3.P4 : mécanisme inventé à la place de celui que le rapport donne.
- S4.P2, S4.P3 : bonnes nuances, justifications sans appui (« vaut mieux que rien »,
  « Meadows est claire sur le fait que »).
- S5 entière : extensions non marquées, une redondance (S5.P3/S3.P2) ; aucune n'est financée.
- lead[1] : deux affirmations sans appui (biographie, réception), la seconde expressément barrée
  par `SUP-84acdf041d07a3e5`.
- Le palier « ce que fait un niveau, et pourquoi il est là » manque, alors que le dossier le
  finance largement.

matière disponible mais sous-exploitée :
- Définition de l'auteur : un petit changement en un point produit de grands changements
  partout (p. 1, `SUP-e7d18f493fc9bcee`, repris par `SUP-7262836278f47a70`).
- Pourquoi les leviers ne sont pas intuitifs, dans la baignoire même : le but et les boucles ne
  se voient pas (`SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf`) ; stock, flux entrants/sortants,
  temps d'accumulation (`SUP-0848de8c3867605b`, `SUP-5ea1e91179a4b4d4`, `SUP-45ba50b7769e8088`) ;
  deux boucles correctrices (`SUP-92bceffd56f1b8ed`).
- Paramètres : la dette comme « negative bathtub », le débat sur les robinets fiscaux, le trou
  qui se creuse quel que soit le parti (`SUP-ef6279ab526086e2`) ; 90-95-99 % de l'attention,
  « deck chairs on the Titanic » (`SUP-3ad405d655d49237`) ; importants à court terme et pour qui
  est dans le flux, mais « rarely change behavior » (`SUP-64bcbfebed301d75`) ; ne relancent, ne
  stabilisent ni ne freinent (`SUP-1cb2a360fe47c52d`) ; exception des plages critiques et sa
  rareté (`SUP-f9d8def49ae3267f`, `SUP-71b8abf2fc83138f`).
- Raisons de faisabilité dans l'ordre : tampons qui stabilisent mais rigidifient et coûtent
  (`SUP-543531bbc6d198bf`, `SUP-1038537805616f0f`, `SUP-e630e93572303ddb`) ; structure physique
  rarement levier parce que rarement simple à changer, le levier étant dans la conception
  initiale (`SUP-00cbb4a2f594de25`) ; délais qui provoquent oscillations, dépassement,
  effondrement (`SUP-037181d89d0fbcbe`, `SUP-1c2091036ee7af6d`), et qui seraient haut placés
  s'ils étaient modifiables (`SUP-5bd5758b923ca76e`, `SUP-2eaaf37eb57acab7`).
- Information comme nouvelle boucle : compteur dans l'entrée, 30 % (`SUP-81014e24a6b284f3`, avec
  « the story goes » et la réserve `SUP-3421b0f99f5dee77`) ; « It’s a new loop »
  (`SUP-c15fd96c15a922a1`) ; Toxic Release Inventory, 1986, sans amende, 40 % en 1990
  (`SUP-b21d6c36a3400662`, même réserve) ; rétroaction manquante, cause fréquente, souvent moins
  chère que l'infrastructure (`SUP-97f584c40df141b1`) ; au bon endroit, sinon course au fond sur la
  nappe (`SUP-7d34709858340251`).
- Boucles : boucle négative qui corrige, positive qui s'auto-renforce (`SUP-9e9f96aaf51a1bd7`,
  `SUP-1ae345c6e78ee6f5`) ; réduire le gain plutôt que renforcer la correction
  (`SUP-6d75aa70f0d55eb5`) ; « success to the successful » (`SUP-e769b7a85dafa79b`) ; retirer les
  mécanismes d'urgence : aucun effet à court terme, survie rétrécie à long terme
  (`SUP-674564388b57eb35`).
- Règles et pouvoir sur les règles (`SUP-4716e963a1064909`, `SUP-3256fcc2ee6897d1`,
  `SUP-3a6f0b4b80bb8030`) ; auto-organisation, forme la plus forte de résilience
  (`SUP-83125ff2fbd00822`, `SUP-f986199036eb0399`).
- Buts : supérieurs à l'auto-organisation (`SUP-a49a30f55519f55f`) ; se lisent dans ce que fait
  le système, pas dans ce qu'on dit (`SUP-885bf54038df7e06`) ; changer les acteurs est un levier
  faible sauf au sommet (`SUP-a63a2642d8b852de`, qui donnerait enfin un contenu à « la personne
  qui décide » du lead[0]).
- Paradigmes : définition (`SUP-39f012bbb6fd24cd`), source de tout le reste
  (`SUP-a6476543e39989ab`), objection de Meadows à son propre classement et réponse
  (`SUP-00df101d1f99a8f0`), résistance des sociétés (`SUP-8f3721217a84eded`) ; transcender les
  paradigmes (`SUP-0acb3a5eec8634ca`).
- Statut de la liste : « tentative », « slithery », exceptions (`SUP-01cbdf81a02ad20e`) ;
  résistance croissante avec la hauteur (`SUP-5402cf481a060cd4`) ; « no cheap tickets to
  mastery » (`SUP-b202cb822f50ec5c`).

limites documentaires :
- Réception et discussion de la liste : seulement deux notices `metadata-only`
  (`SUP-f40853f34d0fc655`, `SUP-86778904db8639a5`), et `SUP-84acdf041d07a3e5` interdit d'en
  tirer quoi que ce soit sur la reprise. Rien sur « l'un des textes les plus repris ».
- Version Whole Earth 1997 non ouverte (`SUP-2fc6818e79a553a0`).
- Forrester n'est connu que par ce que Meadows en rapporte (`SUP-ba7f2648749c378a`) : toute
  phrase sur lui doit garder « elle rapporte ».
- Aucune méthode pour situer une intervention dans un système donné (`SUP-1454538799f2a945`) :
  le texte ne peut rien dire de ce que d'autres textes ou la modélisation apporteraient à cet
  égard.
- Chiffres (30 %, 40 %) non référencés par Meadows (`SUP-3421b0f99f5dee77`) : utilisables comme
  « elle rapporte », jamais comme résultats établis.
- Les extraits sont des passages, pas le rapport entier : ils financent ce qu'ils disent, pas
  l'exhaustivité d'un niveau. Les niveaux 10 (structure des stocks et flux) et 4 (auto-
  organisation) ont peu de matière (deux ou trois extraits chacun) ; la « suite » du passage p. 19
  sur la transcendance est coupée (`SUP-0acb3a5eec8634ca` s'arrête sur « your own worldview, ») et
  ne finance pas sa fin.
- Le mot « Growth » comme levier de Forrester (`SUP-c64eb8434b407090`) ne dit pas, dans
  l'extrait, dans quel sens il fallait le pousser : ne pas le relier à `SUP-6d75aa70f0d55eb5` pour
  lui faire dire « ralentir la croissance ».
- Les jugements personnels de Meadows (commerce mondial, Reagan) sont à rapporter comme tels
  (`SUP-a047a1762e4f2d4d`) ; ils ne sont d'ailleurs pas dans les extraits.

BUDGET DE L'AJOUT

- ajouts prescrits et supports qui les financent :
  1. définition de l'auteur, dans le lead : `SUP-e7d18f493fc9bcee` ;
  2. baignoire corrigée, dont la leçon est l'invisibilité du but et des boucles :
     `SUP-0848de8c3867605b`, `SUP-5ea1e91179a4b4d4`, `SUP-45ba50b7769e8088`,
     `SUP-92bceffd56f1b8ed`, `SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf`, `SUP-55531336999abd7e`
     (et `notes[4]` `SUP-3ffaa707ee114434` pour la vanne) ;
  3. un palier « paramètres » avec la dette publique et la part d'attention, plus l'exception des
     plages critiques : `SUP-ef6279ab526086e2`, `SUP-3ad405d655d49237`, `SUP-64bcbfebed301d75`,
     `SUP-1cb2a360fe47c52d`, `SUP-f9d8def49ae3267f`, `SUP-71b8abf2fc83138f` ;
  4. un palier « pourquoi l'ordre n'est pas une chaîne simple » : délais et structure physique,
     forts en principe mais difficiles à changer : `SUP-5bd5758b923ca76e`, `SUP-2eaaf37eb57acab7`,
     `SUP-00cbb4a2f594de25`, `SUP-037181d89d0fbcbe` (optionnellement tampons
     `SUP-1038537805616f0f`, `SUP-e630e93572303ddb`) ;
  5. un palier « information comme nouvelle boucle », un seul des deux cas chiffrés suffit (le
     compteur est le plus parlant), avec la condition du bon endroit : `SUP-81014e24a6b284f3`,
     `SUP-c15fd96c15a922a1`, `SUP-7d34709858340251`, réserve `SUP-3421b0f99f5dee77` ;
  6. haut de l'échelle : règles et pouvoir sur elles, buts qui se lisent dans ce que fait le
     système, paradigme source de tout et objection de Meadows à son propre rang :
     `SUP-3256fcc2ee6897d1`, `SUP-3a6f0b4b80bb8030`, `SUP-885bf54038df7e06`,
     `SUP-a6476543e39989ab`, `SUP-00df101d1f99a8f0`, `SUP-8f3721217a84eded`,
     `SUP-a63a2642d8b852de` ;
  7. statut de la liste et ouverture : `SUP-01cbdf81a02ad20e`, `SUP-5402cf481a060cd4`,
     `SUP-0acb3a5eec8634ca` (dans la limite de ce que l'extrait dit), `SUP-b202cb822f50ec5c`.
  Toutes ces matières sont des **explications** dans le rapport (mécanisme, raison de rang,
  exemple), pas de simples désignations : elles financent l'explication, dans les termes de
  l'extrait et pas au-delà (par ex. le TRI finance « sans loi, sans amende, juste
  l'information », pas une analyse de sa cause).
- prescriptions écartées faute de support :
  - toute phrase sur la réception académique de la liste (Abson, Fischer & Riechers
    `metadata-only`, barré par `SUP-84acdf041d07a3e5`) ;
  - la biographie de Meadows au-delà de l'attribution (`SUP-7225770a44d11547`) ;
  - le « test de proportion », le « vocabulaire pour déplacer un débat », le « test de
    direction » de S5 : aucun support ; à retirer ou, au plus, à fondre en une seule phrase
    d'extension marquée comme telle ;
  - « la liste ne remplace pas la modélisation » : non financé (`SUP-1454538799f2a945`) ;
  - « vaut mieux que rien » pour les paramètres : non financé ; remplacé par la nuance réelle
    (court terme, individu dans le flux, plages critiques) ;
  - le mécanisme « une boucle fait dans le temps l'inverse de l'instant » : non financé ;
  - tout développement du niveau 10 ou du niveau 4 au-delà d'une phrase (matière mince) ;
  - la fin du passage sur la transcendance des paradigmes (extrait tronqué).
- sens attendu du volume : plus long, modérément, et seulement par substitution financée. Le
  texte est à 1 120 mots, sous la cible ; on retire environ 300 mots sans appui (lead[1] deux
  phrases, S2.P1, S2.P3, S3.P4, S4.P3 dernière phrase, S5.P2-P4) et l'on ajoute les paliers 1-7
  ci-dessus. Cible 1 250-1 400 mots, pas davantage : la corrélation observée (cartes à +17 % et
  au-delà toutes rejetées) vaut ici aussi, et chaque phrase ajoutée doit pointer un extrait.
  Mieux vaut traiter quatre ou cinq niveaux bien que douze en survol.

TRAJECTOIRE CIBLE

- Lead.
  1. Entrée : rien.
  2. Apprend : la question « où appuyer » (garder lead[0]) ; la définition de Meadows (un petit
     changement en un point, de grands changements partout) ; qu'elle en a tiré une liste de
     douze endroits ordonnés, et qu'elle l'accompagne d'un avertissement.
  3. Matière : lead[0] actuel, `SUP-e7d18f493fc9bcee`, `SUP-7225770a44d11547`,
     `SUP-a169d25e5e6fbc96`.
  4. Ne pas : biographie rhétorique, « l'un des textes les plus repris ».

- S1 (l'ordre et la baignoire).
  1. Entrée : il existe une liste ordonnée.
  2. Apprend : le sens de l'ordre (12 faible → 1 fort) ; l'échelle exacte, sans erreur
     d'entrée (n° 4 = capacité de changer ou d'auto-organiser la structure) ; puis la baignoire
     de Meadows, stock, robinets, délai d'accumulation, deux boucles qui règlent le niveau vers un
     but, et la leçon qu'elle en tire : le but et les boucles ne se voient pas, d'où le
     contre-intuitif.
  3. Matière : `SUP-a169d25e5e6fbc96`, `SUP-8c80540dcb2e6c7c`, `SUP-0848de8c3867605b`,
     `SUP-5ea1e91179a4b4d4`, `SUP-45ba50b7769e8088`, `SUP-92bceffd56f1b8ed`,
     `SUP-b3263903ec60b7fe`, `SUP-655dfcede1c2acdf`, `SUP-3ffaa707ee114434`.
  4. Ne pas : « on sent immédiatement » ; « la règle décide d'ouvrir » ; « chacun en connaît ».
     L'énumération peut rester courte si la baignoire porte l'intuition.

- S2 (le bas de l'échelle : les paramètres).
  1. Entrée : l'échelle, la baignoire, l'invisibilité du but.
  2. Apprend : ce qu'est un paramètre dans la baignoire (ce qui règle tel robinet à telle
     vitesse) ; la dette publique comme cas : tout le débat sur les robinets fiscaux, le trou qui
     se creuse quel que soit le parti ; la part d'attention ; pourquoi ils comptent quand même
     (court terme, qui est dans le flux, batailles féroces) sans changer le comportement ; et
     l'exception des plages critiques, plus rare qu'on ne croit.
  3. Matière : `SUP-55531336999abd7e`, `SUP-ef6279ab526086e2`, `SUP-3ad405d655d49237`,
     `SUP-64bcbfebed301d75`, `SUP-1cb2a360fe47c52d`, `SUP-f9d8def49ae3267f`,
     `SUP-71b8abf2fc83138f`.
  4. Ne pas : « il ne menace personne » ; « vaut mieux que rien ». Cette section absorbe S1.P2
     et S2.P3 actuels, qui disparaissent.

- S3 (pourquoi l'ordre n'est pas une chaîne simple).
  1. Entrée : le bas de l'échelle est faible et l'on sait pourquoi.
  2. Apprend : le rang mêle puissance et faisabilité. Délais : causes d'oscillation et de
     dépassement, ils seraient un levier fort s'ils se changeaient facilement, d'où les taux de
     croissance placés plus haut ; structure physique : le levier est dans la conception
     initiale. Puis, par contraste, l'information : une nouvelle boucle, souvent moins chère que
     l'infrastructure, illustrée par le compteur (rapporté comme histoire), avec la condition du
     bon endroit (la nappe).
  3. Matière : `SUP-037181d89d0fbcbe`, `SUP-5bd5758b923ca76e`, `SUP-2eaaf37eb57acab7`,
     `SUP-00cbb4a2f594de25`, `SUP-81014e24a6b284f3`, `SUP-c15fd96c15a922a1`,
     `SUP-97f584c40df141b1`, `SUP-7d34709858340251`, réserve `SUP-3421b0f99f5dee77`.
  4. Ne pas : « logique simple », « plus on monte, plus on agit tôt » appliqué à toute l'échelle ;
     ne pas empiler compteur et TRI s'ils démontrent la même chose (un seul, ou le second en une
     proposition).

- S4 (le haut de l'échelle : règles, buts, paradigmes).
  1. Entrée : on sait que monter, c'est toucher la structure plutôt que les réglages.
  2. Apprend : le pouvoir sur les règles est le vrai pouvoir ; le but d'un système se lit dans ce
     qu'il fait, pas dans ce qu'on dit ; changer les acteurs est faible sauf au sommet (ce qui
     éclaire « la personne qui décide » du lead) ; le paradigme est la source du reste ;
     l'objection que Meadows se fait (« le plus dur à changer, donc il devrait être en bas ») et
     sa réponse (rien de nécessairement physique, coûteux ou lent), tempérée par la résistance des
     sociétés.
  3. Matière : `SUP-3256fcc2ee6897d1`, `SUP-3a6f0b4b80bb8030`, `SUP-885bf54038df7e06`,
     `SUP-a63a2642d8b852de`, `SUP-a6476543e39989ab`, `SUP-00df101d1f99a8f0`,
     `SUP-8f3721217a84eded`, `SUP-5402cf481a060cd4`.
  4. Ne pas : « classement par difficulté politique » comme thèse générale de l'auteur ; ne pas
     détailler l'auto-organisation au-delà d'une phrase.

- S5 (l'avertissement : à l'envers, et pas cru).
  1. Entrée : le lecteur sait que le but et les boucles sont invisibles et que le rang n'est pas
     évident.
  2. Apprend : la citation centrale et sa fin ; l'observation de Forrester rapportée par Meadows
     (tout le monde pousse déjà, dans le mauvais sens) ; d'où : trouver l'endroit ne suffit pas ;
     l'incrédulité qui suit la découverte. Le mécanisme est désormais celui de S1 (invisibilité)
     et de S3 (délais), déjà construit : aucun paragraphe d'« explication » supplémentaire.
  3. Matière : S3.P1-P3 actuels, `SUP-5acb1cee3a00e887`, `SUP-2f9d07ce780e7e37`,
     `SUP-da88ef4e1f868844`, `SUP-ba7f2648749c378a` (Forrester rapporté).
  4. Ne pas : S3.P4 actuel ; « peu de textes de méthode reconnaissent ». On peut placer cette
     section plus tôt (après S1) si le réécrivain préfère faire de l'avertissement le moteur ; dans
     ce cas S3 et S4 doivent y renvoyer sans le répéter.

- S6 (ce que la liste est et n'est pas).
  1. Entrée : le lecteur a compris plusieurs niveaux et l'avertissement.
  2. Apprend : la naissance de la liste (paperboard, neuf entrées, retravaillée en douze avec des
     analystes et des militants, « work in progress », pas une recette) ; son statut d'ordre
     « slithery » où chaque entrée a des exceptions ; l'absence de formule pour trouver les
     leviers ; le niveau ultime (rester non attaché aux paradigmes, dans la limite de l'extrait) ;
     ouverture sur « There are no cheap tickets to mastery ».
  3. Matière : S4.P1 actuel, `SUP-a193a2898b0534b1`, `SUP-ce493a26d6814629`,
     `SUP-01cbdf81a02ad20e`, `SUP-6e552c0e46adf9d7`, `SUP-0acb3a5eec8634ca`,
     `SUP-b202cb822f50ec5c`.
  4. Ne pas : « Meadows est claire sur le fait que sa liste ne remplace pas la modélisation » ;
     les trois « tests » de S5 actuel. Si un usage pratique est conservé, une seule phrase,
     marquée comme extension (« on peut s'en servir pour… »), sans « rarement possible
     autrement ».

Nombre de sections : six au plus (`PROTOCOLE.md` §5) ; S3 et S4 peuvent fusionner si le volume
le demande.

raison du verdict : REWRITE et non REVISE, parce que le défaut n'est pas local. Le texte a été
écrit sans le rapport, et il a comblé le palier central (ce que fait chaque niveau, pourquoi il
est à son rang) par des raisonnements de rédacteur dont trois contredisent la source
(S1.P4, S2.P1, S2.P2) et un invente le mécanisme (S3.P4) ; une section entière (S5) est de
l'extension non financée. Corriger ces phrases une à une laisserait une architecture dont le
cœur manque. Ce n'est pas BLOCKED_SOURCE : le dossier finance désormais largement ce palier,
niveau par niveau, avec les exemples et les raisons de l'auteur. Les paragraphes solides (lead[0],
S1.P1, S3.P1-P3, S4.P1) sont à conserver. PASS pédagogique éventuel après réécriture
n'autorisera rien sans FACTCHECK_PASS sur un pack reconstruit.
