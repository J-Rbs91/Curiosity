# Journal de la routine nocturne

Une entrée par nuit, la plus récente en tête. Ce fichier existe pour qu'une nuit sache en un
coup d'œil ce que la précédente a fait, sur quelle branche elle l'a laissé, et par quel bout
reprendre. **Les scripts priment sur ce fichier** : il dit ce qui a été tenté et pourquoi, ils
disent ce qui est.

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
