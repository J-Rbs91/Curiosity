# Journal de la routine nocturne

Une entrée par nuit, la plus récente en tête. Ce fichier existe pour qu'une nuit sache en un
coup d'œil ce que la précédente a fait, sur quelle branche elle l'a laissé, et par quel bout
reprendre. **Les scripts priment sur ce fichier** : il dit ce qui a été tenté et pourquoi, ils
disent ce qui est.

## Passage 04/15 — 2026-08-26

- branche      : `claude/zen-johnson-gg1vwh` (imposée par la session, pas `main`), pull request [#79](https://github.com/J-Rbs91/Curiosity/pull/79) vers `main`, **ouverte et non fusionnée à la clôture**. **Le travail du passage 03 est fusionné dans `main`** (PR [#78](https://github.com/J-Rbs91/Curiosity/pull/78), puis PR #77), et cette branche partait de `main` à jour, au commit `3ac78f8` : rien n'a été refait. Tant que la présente pull request n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**.
- phase        : 1 (ouverture de domaine) — `work-psychology`, **neuvième domaine sur onze**, premier des trois derniers de la famille « Comprendre les humains et les organisations ». Ouverture dans l'ordre complet et en une seule nuit : périmètre, puis cartographie, puis cartes, puis thèmes.
- validées     : 7 — `cinq-dimensions-de-l-emploi`, `trois-etats-psychologiques-critiques`, `force-du-besoin-de-developpement`, `objectif-specifique-et-difficile`, `mecanismes-de-l-objectif`, `seuil-d-insatisfaction-salariale`, `asservissement-des-activites-hors-travail` (**les 7 avec citation, toutes relues sur l'image de la page**)
- en review    : 1 — `attention-diffusee-et-selection` (Lahy 1924), **écrite et non contrôlée**, retenue avant le contrôle par une règle du dépôt et non par un défaut : sa source primaire est en `consulted: partial`, onze pages ouvertes sur soixante-sept, et une fiche publiée exige une source primaire lue en texte intégral. Reste en `corpus/candidates/`.
- rejetées     : 0
- approfondies : 0 (une nuit d'ouverture n'en écrit pas ; la file passe de 16 à 23)
- contrôles    : validate 0 erreur (92 enregistrements, 89 validés, 63 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre** · test 480/0 · lint 0 · audit : `work-psychology` passe de « corpus en cours de constitution » à **2 thèmes / 7 validés / 1 en cours**
- commit       : `b508362` pour la projection ; la nuit a été commitée par étapes plutôt qu'en un commit de clôture, chaque maillon étant poussé dès qu'il tenait debout.
- bloqué par   : **rien de documentaire.** Deux manques sont déclarés et non masqués. **La dette envers `behavioral-economics` n'a pas été payée** : le plafond de requêtes du scout a été atteint avant qu'une requête ciblée ait pu partir, et c'est un vide de méthode, pas un vide vérifié. Et **aucune source secondaire n'a été ouverte sur les sept cartes**, ce qui est la faiblesse structurelle du lot, déclarée fiche par fiche.
- la nuit suivante prend : **phase 1, `sociology-of-work`.** Deux domaines restent à zéro carte, la condition A est donc encore vraie, et l'ordre de rendement de la §2 désigne la sociologie du travail. **Elle ne part pas de rien** : ce passage lui lègue Taylor, *The Principles of Scientific Management*, item Internet Archive `cu31924085713331`, collections `cornell` et `americana`, **sans restriction de prêt constatée**, ce que le legs d'`operations-management` avait laissé en suspens. L'ordre d'ouverture reste non négociable : périmètre, puis scout, puis cartes, puis thèmes.

### Ce que cette nuit a établi, en une phrase

Le neuvième domaine sur onze est ouvert en une seule nuit, là où le huitième en avait demandé
deux, et il rend sept cartes dont la couche francophone est plus riche que la couche
anglophone, ce qui n'était jamais arrivé dans ce corpus.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **La reprise la moins chère est `attention-diffusee-et-selection`**, et ce qui lui manque est
  nommé : une lecture complète de l'article de Lahy, dont onze pages seulement ont été ouvertes.
  Trois sections sont désignées et non localisées : le protocole du test d'attention diffusée
  (probablement p. 131-142), les tableaux de corrélation (p. 168-169), et le barème des
  2 000 sujets. Une fois le texte lu en entier, la fiche passe en contrôle et son thème,
  `juger-quelqu-un-apte`, se déclare avec elle.
- **Le numéro 344 du *Bulletin de psychologie*, de 1980, est un gisement à moitié dépensé.**
  C'est un numéro entier de psychologie du travail, servi en texte intégral par l'endpoint page
  de Persée. Deux de ses articles ont rendu une carte ; **cinq autres ont été lus et écartés
  pour un motif écrit** (Leplat 11696 et Francès 11726 sont des textes d'orientation sans thèse
  propre, Lévy-Leboyer 11734 relève de la dette socio-technique, Grisez 11729 et Savall 11735
  penchent vers des voisins), et **le reste du numéro n'a pas été dépouillé**.
- **La couche anglophone ouverte tient sur deux rapports de l'Office of Naval Research**, et
  c'est tout ce que ce champ offre en accès libre : le canon que tout le monde nommerait,
  Herzberg 1959 et Walker & Guest 1952, est en prêt numérique et **un prêt numérique ne
  s'emprunte pas**. Ce n'est pas à retenter, c'est à contourner par la littérature grise.
- **Une piste ouverte et non lue** : `DTIC_ADA065892`, « An Integration of Contemporary Theories
  of Work Motivation » (1978), accès a priori ouvert, contenu non ouvert faute de budget.
- **Deux pièges d'exemplaire, payés cette nuit et transposables.** La couche OCR de
  `DTIC_AD0779828` est inexploitable pour citer, deux contrôleurs l'ont constatée séparément. Et
  le `page_numbers.json` d'Internet Archive est **une inférence automatique, pas une lecture** :
  il annonce 94 feuillets pour 88 sur cet item, et c'est lui qui a fait écrire une collation
  fausse à trois cartes.

## Passage 03/15 — 2026-08-25

- branche      : `claude/zen-johnson-f21p0e` (imposée par la session, pas `main`), pull request [#78](https://github.com/J-Rbs91/Curiosity/pull/78) vers `main`, **ouverte et non fusionnée à la clôture**. **Le travail du passage 02 est fusionné dans `main`** (PR #76, commit `45cbae0`), et cette branche part de `main` à jour : rien n'est refait. Tant que la présente pull request n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**.
- phase        : 1 (ouverture de domaine) — `operations-management`, huitième domaine, **le domaine rend enfin ses cartes**. Périmètre et cartographie existaient depuis le passage 02 : cette nuit a sauté ces deux étapes et instruit directement, comme le passage 02 l'avait prescrit.
- validées     : 8 — `cause-de-hasard-et-cause-assignable`, `trois-sigmas-arbitrage-de-cout`, `regle-de-commande-a-deux-niveaux`, `penalite-de-rupture`, `regle-lineaire-de-decision`, `absorber-les-fluctuations-de-commandes`, `attente-du-poste-aval`, `fragilite-d-un-ordonnancement-optimal` (**les 8 avec citation, toutes relues sur l'image de la page**)
- en review    : 1 — `etat-de-controle-statistique`, **`PASS` sur les quatre questions au premier tour**, retenue par le seul plafond de volume et non par un défaut. Reste en `corpus/candidates/` avec son verdict.
- rejetées     : 0
- approfondies : 0 (une nuit d'ouverture n'en écrit pas)
- contrôles    : validate 0 erreur (84 enregistrements, 82 validés, 55 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` après commit · test 476/0 · lint 0 · audit : `operations-management` passe de « corpus en cours de constitution » à **3 thèmes / 8 validés / 1 en cours**
- commit       : `379ed46`, commit unique de clôture du passage 03 (les huit cartes, les trois thèmes, la cartographie corrigée et les trois écritures de consignation).
- bloqué par   : **rien.** La leçon opératoire du passage 02 a été appliquée à la lettre et elle a tenu : sources pré-identifiées avant le lancement des agents, interdiction de relire les gros fichiers en entier, écriture du fichier de sortie exigée tôt, requêtes bornées. Les cinq agents de la première vague ont tous écrit dans les deux minutes et aucun n'a été arrêté, là où trois scouts consécutifs avaient consommé la nuit précédente. Deux manques subsistent, déclarés et non masqués : **aucune source secondaire n'a été ouverte sur les huit cartes**, et **le balayage francophone a rendu trois candidats atteignables sans qu'aucun soit lu**, son budget de vingt requêtes ayant été consommé par le triage de Persée et de Numdam.
- la nuit suivante prend : **phase 1, `work-psychology`.** Trois domaines restent à zéro carte, la condition A est donc encore vraie, et l'ordre de rendement de la §2 désigne la psychologie du travail. C'est un balayage entier : ni périmètre, ni cartographie, ni stock d'entrée, un seul cas de frontière consigné (Mackworth 1948 sur la vigilance, **tranché du côté de `human-factors` et donc pas à réclamer**). L'ordre d'ouverture est alors non négociable : périmètre, puis scout, puis thèmes, puis concepts.

### Ce que cette nuit a établi, en une phrase

Le huitième domaine sur onze, ouvert sans carte depuis deux passages, rend huit cartes qui portent
toutes une citation relue sur l'image, et trois thèmes dont aucun ne repose sur une carte unique.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **La reprise la moins chère du dépôt est `etat-de-controle-statistique`** : écrite, contrôlée,
  reçue `PASS`, et retenue par le plafond. Ce qui la ferait meilleure est nommé : son titre porte
  un syntagme que les deux pages qui la fondent n'emploient pas, et le contrôleur a établi que
  l'expression consacrée se lit p. 146, dans une partie du livre que personne n'a dépouillée.
- **Les identités bibliographiques des quatre candidats sont désormais établies sur la pièce**, et
  trois des quatre étaient mal décrites par la cartographie. Le détail est dans la section
  « Reprise du 25 août 2026 » de `corpus/map/operations-management.scouting.md`, qui fait foi
  contre les sections antérieures du même fichier.
- **Trois candidats francophones sont atteignables et non lus** : Guihéneuf 1956 sur Persée (DOI
  résolu), Fiore 1987 sur Persée (**identifiant non confirmé par DOI, à reconfirmer avant usage**),
  De Almeida 1998 sur Numdam (**GET du PDF non testé**). C'est la reprise la plus rentable du
  domaine, et elle comble le manque que le passage 02 déclarait comme son principal.
- **Deux gisements restent ouverts dans des textes déjà lus** : les parties V et VI de Shewhart
  (limites de contrôle contre limites de tolérance) et la partie III de Bellman (lissage
  industriel, stock optimal).

## Passage 02/15 — 2026-08-24

- branche      : `claude/zen-johnson-zfxtk9` (imposée par la session, pas `main`), pull request vers `main`. Le travail du passage 01 (PR #71) **est fusionné dans `main`**, et cette branche part de `main` à jour : rien n'est refait. Tant que la présente pull request n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**.
- phase        : 1 (ouverture de domaine) — `operations-management`, huitième domaine, dernier de la famille « Comprendre la production et les systèmes ».
- validées     : 0
- en review    : 0
- rejetées     : 0
- approfondies : 0
- contrôles    : validate 0 erreur (75 enregistrements, 74 validés, 50 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` · test 476/0 · lint 0 · audit : `operations-management` toujours 0 thème / 0 validé.
- commit       : commit unique de clôture du passage 02 (périmètre, cartographie, et les trois écritures de consignation).
- bloqué par   : **le maillon `corpus-scout` a coûté toute la nuit d'instruction.** L'ouverture a produit son périmètre (§`operations-management` de `corpus/perimeter.md`) et sa cartographie (`corpus/map/operations-management.scouting.md`, 244 lignes), **mais aucune carte**. Trois scouts ont été lancés : le premier a rassemblé une dizaine de sources (Shewhart, Bellman P-651, rapport HMMS, rapport de stock AD 422810, Sterman, deux PDF Pesqueux) puis a tourné plus d'une heure sans jamais écrire le fichier ; arrêté. Le deuxième, relancé avec les sources déjà en scratchpad et consigne d'écrire tôt, a écrit un squelette de sections puis a redéfilé sans remplir le corps ; arrêté. Le troisième, chirurgical (sources pré-identifiées, relecture des gros fichiers interdite, écriture d'abord), a écrit la cartographie en une passe après un rappel « écris maintenant ». **Leçon opératoire, à porter au prochain passage** : ces agents accumulent tout en contexte et n'écrivent qu'en toute dernière action ; il faut leur donner les sources déjà identifiées, leur interdire la relecture des gros textes, et borner explicitement le nombre de requêtes. Le décor était planté d'avance dans `corpus/RESTE-A-FAIRE.md` (« un agent lancé en parallèle doit préfixer ses fichiers de travail »), mais le coût réel n'était pas la contamination, c'était la latence de lecture.
- la nuit suivante prend : **phase 1, `operations-management` de nouveau** — le domaine reste à 0 validé (condition A), et son périmètre et sa cartographie existant désormais, elle saute périmètre et scout et **instruit directement**. Ordre de priorité donné par la cartographie : d'abord les deux candidats propres (Shewhart *Economic Control of Quality* 1931 ; Bellman *Mathematical Aspects of Scheduling Theory*, RAND P-651, 1965), dont l'accès est confirmé et la référence identifiable ; ensuite le rapport HMMS et le rapport AD 422810, dont **l'identité bibliographique est « à préciser »** avant toute fiche (une référence qui ne résout pas n'existe pas) ; en parallèle, le **balayage complémentaire** que la cartographie réclame avant toute déclaration de thème (couche francophone non cherchée, files d'attente, quantité économique de commande, flux tiré, contrainte).

### Ce que cette nuit a établi, en une phrase

Le huitième domaine sur onze est ouvert dans l'ordre exigé, périmètre puis cartographie, avec
quatre candidats atteignables dont deux propres ; il n'a pas rendu de carte, la chaîne d'agents
ayant consommé la nuit, et il s'instruira au passage suivant sans repartir de zéro.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Les quatre frontières déjà tranchées depuis l'autre côté ont été reprises telles quelles** dans le périmètre (`cybernetics`, `systems-thinking`, `human-factors`, `decision-science`), sans les rouvrir. Le legs des deux voisins qui avaient consigné des textes est **tout entier non ouvert** : trois rapports DoD de `cybernetics` (items `dticarchive` non ouverts) et Delatour et al. de `human-factors` (notices HAL sans fichier). Ils restent en angle mort, pas en rejet.
- **La couche francophone n'a pas été cherchée** : c'est le manque le plus net de la cartographie, à combler en priorité au balayage complémentaire (Persée, HAL, Cairn, OpenEdition Books, theses.fr — gestion industrielle, productique, génie industriel).
- **Les trois domaines fermés restants** (`sociology-of-work`, `work-psychology`, `behavioral-economics`) ont chacun reçu une requête ciblée obligatoire : Taylor/Braverman repérés mais accès non vérifié pour le premier ; littérature dispersée sans texte primaire identifié pour le deuxième ; Schweitzer & Cachon 2000 repéré mais paywallé pour le troisième. **Aucun candidat vérifié, aucun « vide » établi** : trois repérages sans accès, à reprendre avec une base bibliographique structurée quand le MCP `documentary` sera exposé.

## Passage 01/15 — 2026-08-23

- branche      : `claude/upbeat-archimedes-hhx6zg` (imposée par la session, pas `main`), pull request [#71](https://github.com/J-Rbs91/Curiosity/pull/71) vers `main`, **ouverte et non fusionnée à la clôture**. **La nuit suivante reprend depuis cette branche**, et non depuis `main`, tant que la pull request n'est pas fusionnée : sinon elle refera ce qui est déjà fait.
- phase        : 1 (ouverture de domaine)
- domaine      : `decision-science`
- validées     : 8 — `theorie-des-perspectives`, `effet-de-cadrage`, `heuristiques-de-jugement`, `theories-normatives-du-choix-sous-risque`, `critique-de-l-utilite-esperee-subjective`, `normatif-descriptif-prescriptif`, `penser-a-partir-des-valeurs`, `classement-multicritere-electre` (dont **8 avec citation**)
- en review    : 0
- rejetées     : 0
- approfondies : 0
- contrôles    : validate 0 erreur (75 enregistrements, 74 validés, 50 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` · test 419/0 · lint 0
- commit       : `15f09af` (projection des huit cartes ; le présent journal suit dans le commit de clôture)
- bloqué par   : **le sous-agent `corpus-orchestrator` n'a pas pu lancer la chaîne**, son outil `Task` étant désactivé dans cette session. Il a constaté que les sessions filles lancées en repli n'héritent d'aucune permission réseau, et il a refusé de s'accorder cette permission lui-même par `--allowedTools` ou par un fichier de réglages écrit pour l'occasion. **C'était la bonne décision** et elle a coûté un aller-retour, pas le lot : la chaîne a été conduite depuis la session elle-même, un agent par maillon, les contextes restant séparés. Le contrôle est donc resté aveugle, ce qui n'aurait pas été le cas si un seul agent avait tout fait.
- la nuit suivante prend : **phase 2**. Plus aucun domaine n'est vide au sens de la condition A, et `corpus:deepen` liste en fin de sortie **les huit cartes ci-dessus**, qui sont exactement la file. Aucune ouverture, aucune nouvelle carte.

### Ce que cette nuit a établi, en une phrase

Le septième domaine sur onze est ouvert dans l'ordre complet, périmètre puis cartographie puis
thèmes puis cartes, et il rend huit cartes qui portent toutes une citation relue sur l'image de
la page.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Deux thèmes seulement ont été déclarés là où la cartographie en proposait quatre.** Les deux
  écartés existent, leurs textes sont ouverts et lus, et ils attendent : « Agréger des
  préférences » n'aurait porté qu'une carte (Arrow 1948, rapport RAND ouvert, OCR dégradé), et
  « Chercher une solution plutôt que la calculer » repose sur deux textes du même trio d'auteurs
  sur le même programme, dont la cartographie dit elle-même qu'un seul concept devrait en sortir.
- **Le domaine n'a aucune signature féminine.** À surveiller et à porter au prochain passage, pas
  à corriger par quota.
- **Cinq des huit cartes reposent sur le même exemplaire numérisé**, le recueil de 1988. C'est la
  faiblesse structurelle du lot, déclarée dans les `notes` des cinq fiches.
