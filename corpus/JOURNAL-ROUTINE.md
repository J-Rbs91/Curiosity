# Journal de la routine nocturne

Une entrée par nuit, la plus récente en tête. Ce fichier existe pour qu'une nuit sache en un
coup d'œil ce que la précédente a fait, sur quelle branche elle l'a laissé, et par quel bout
reprendre. **Les scripts priment sur ce fichier** : il dit ce qui a été tenté et pourquoi, ils
disent ce qui est.

## Passage 05/15 — 2026-08-27

- branche      : `claude/zen-johnson-hjfz2m` (imposée par la session, pas `main`). **Le travail du passage 04 est fusionné dans `main`** (PR [#79](https://github.com/J-Rbs91/Curiosity/pull/79), commit de merge `ff3a443`), et cette branche partait de `main` à jour : rien n'a été refait. Pull request [#81](https://github.com/J-Rbs91/Curiosity/pull/81) vers `main`, **ouverte et non fusionnée à la clôture**. Tant qu'elle n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**, et non depuis `main`, sinon elle refera ce qui est déjà fait.
- phase        : 1 (ouverture de domaine) — `sociology-of-work`, **dixième domaine sur onze**, deuxième des trois derniers de la famille « Comprendre les humains et les organisations ». Ouverture dans l'ordre complet et en une seule nuit : périmètre, cartographie, cartes, puis thèmes.
- validées     : 7 — `flanerie-systematique`, `savoir-ouvrier-mis-en-regles`, `division-sexuelle-et-rapports-de-sexe`, `analyse-des-groupes-professionnels`, `fonctions-sociales-de-la-greve`, `mobilite-et-segmentation-de-l-emploi`, `precarite-des-trajectoires` (**les 7 avec citation, toutes relues sur l'image de la page**). Trois au premier tour, quatre au second.
- en review    : 0
- rejetées     : 0
- approfondies : 0 (une nuit d'ouverture n'en écrit pas ; la file passe de 23 à 30)
- contrôles    : validate 0 erreur (99 enregistrements, 96 validés, 75 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre** · test 480/0 · lint 0 · audit : `sociology-of-work` passe de « corpus en cours de constitution » à **1 thème / 7 validés / 0 en cours**
- commit       : `81b3f1f` pour la projection ; la nuit a été commitée par étapes, chaque maillon poussé dès qu'il tenait debout, ce qui a sauvé le lot quand le quota a coupé la session en deux.
- bloqué par   : **le plafond hebdomadaire de l'API, atteint en plein vol.** Cinq des sept agents lancés simultanément sont morts en HTTP 429 (« weekly limit, resets 7pm UTC »), dont trois qui avaient déjà écrit leur fichier. La reprise, agent par agent et non plus par vagues de sept, a tout récupéré : **le lot est complet, rien n'a été perdu**. Deux manques subsistent, déclarés et non masqués. **Aucune source secondaire n'a été ouverte sur les sept cartes**, faiblesse structurelle du lot déclarée fiche par fiche. Et **le serveur MCP `documentary` n'était pas exposé**, pour une raison enfin identifiée (voir plus bas) : aucune base bibliométrique structurée n'a été interrogée de la nuit.
- la nuit suivante prend : **phase 1, `behavioral-economics`.** C'est le **onzième et dernier domaine**, le seul encore à zéro carte, la condition A est donc encore vraie et l'ordre de rendement de la §2 le désigne seul. **Il ne part pas de rien, et c'est le fait notable de cette nuit** : la dette envers lui a enfin été payée, sur budget propre, et le legs est détaillé dans la section « La dette envers `behavioral-economics` » de `corpus/map/sociology-of-work.scouting.md`. L'ordre d'ouverture reste non négociable : périmètre, puis scout, puis cartes, puis thèmes.

### Ce que cette nuit a établi, en une phrase

Le dixième domaine sur onze est ouvert en une seule nuit et rend sept cartes, toutes citées et
toutes relues sur l'image, dont six reposent sur la seule couche francophone servie par Persée,
et le dernier domaine fermé reçoit enfin un legs vérifié après trois passages de promesses.

### Le fait de méthode de la nuit : quatre pièges d'OCR, tous attrapés par l'image

C'est la leçon transposable de ce passage, et elle vaut d'être portée telle quelle. La règle
« l'OCR ne suffit pas à citer, la citation se relit sur l'image » a été payante **quatre fois en
une nuit**, sur trois exemplaires différents, et deux de ces cas auraient produit un faux :

1. **Taylor, p. 19** : l'OCR donne « more intricate**'** second thought ». L'image montre une
   salissure d'impression au-dessus de la ligne ; le mot imprimé n'a pas d'apostrophe. Citer sur
   l'OCR écrivait un faux verbatim. Deux contrôleurs l'ont constaté séparément.
2. **Taylor, p. 36** : l'imprimé porte la ligature **formulæ**, que la couche texte aplatit en
   « formulae ».
3. **Chapoulie, p. 86** : l'OCR de Persée corrompt la tomaison en « R. franc. Social. » ; le
   fac-similé donne « R. franç. Sociol. ».
4. **Grelet et Mansuy, p. 97, et c'est le plus grave** : **la conclusion de l'article est
   entièrement absente de la couche OCR de Persée**, l'endpoint de cette page ne rendant que la
   bibliographie qui la suit, et la page 96 se terminant sur une phrase coupée dont la suite
   n'existe nulle part dans l'OCR. **Lire l'OCR seul faisait conclure que l'article n'a pas de
   conclusion.** Or c'est cette conclusion qui établit que les autrices rendent au champ le
   déplacement du statut vers la trajectoire, au lieu de le revendiquer : sans l'image, la carte
   leur attribuait une paternité qu'elles refusent. Le même article a un encadré, page 95, dont
   l'OCR ne donne que le titre.

**À retenir pour Persée** : une page servie en HTTP 200 par l'endpoint OCR n'est pas une page
lue. Le rendu peut omettre des blocs entiers sans le signaler, et les tableaux, encadrés et
conclusions en page pleine sont les premiers concernés.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Le contrôle aveugle a rendu quatre `REWORK` sur sept, tous sur la quatrième question**, et
  aucun sur l'attribution, la citation ou les sources. C'est la question de la prose qui porte
  tout le risque de ce corpus, et les quatre défauts étaient du même genre : un mot qui élargit
  ou rétrécit ce que le texte dit. La flânerie naissait « des relations entre ouvriers » quand
  Taylor l'impute au rapport employeur-ouvrier ; Kergoat faisait de la division sexuelle du
  travail « l'enjeu » quand elle écrit « un enjeu fondamental », et l'imprimé oppose les deux
  formulations par la graisse à trois lignes d'écart ; Durand faisait varier les trois fonctions
  avec la conjoncture quand sa conclusion ne fait varier que le bargaining ; Chapoulie visait
  l'interactionnisme quand le corps de l'article combat le fonctionnalisme d'un bout à l'autre,
  l'interactionnisme lui servant de munition avant de devenir cible en conclusion.
- **Deux de ces quatre défauts venaient de la conclusion ou de l'annonce d'un article, pas de son
  corps.** Durand annonce page 276 plus qu'elle ne démontre, et le corps corrige en variation
  asymétrique ; Chapoulie récapitule page 114 dans des termes qui ne rendent pas la hiérarchie de
  ses vingt-six pages de critique. **Une carte écrite sur la seule conclusion d'un article est une
  carte à risque**, et c'est le complément de lecture qui l'a révélé dans les deux cas.
- **Trois cartes ont été retenues par le verrou de publication avant de passer**, et c'est le
  dispositif qui a fonctionné : le rédacteur a écrit `consulted: "partial"` plutôt qu'un
  `full-text` inexact sur Chapoulie, Durand et Grelet et Mansuy, dont les lectures étaient
  incomplètes. Les trois lectures ont été complétées dans la nuit, et **les trois compléments ont
  rapporté quelque chose** : Chapoulie établit sa thèse dès la page 96 et non en conclusion,
  Durand valide son hypothèse mot pour mot page 286, Grelet et Mansuy voient leur prudence
  d'attribution confirmée page 97.
- **Deux sources ne portaient pas leur DOI** : Durand affichait l'ISSN de la revue, Kergoat rien
  du tout. Les deux contrôleurs l'ont signalé hors des quatre questions. Les DOI ont été résolus
  avant écriture (code 200, vers exactement les URL Persée déjà portées) : `10.3406/sotra.1979.1609`
  et `10.3406/genre.1992.879`. **Réflexe à généraliser** : un article Persée a presque toujours un
  DOI propre, plus résolvant que l'ISSN de sa revue.
- **Un seul thème est déclaré là où cinq étaient disponibles**, et c'est une décision, pas un
  oubli. `marche-du-travail-et-trajectoires` porte deux cartes de deux auteurs distincts, Grisez
  1980 et Grelet et Mansuy 2004 : c'est un thème. `organisation-scientifique-du-travail` porte lui
  aussi deux cartes, **mais toutes deux de Taylor et du même livre**, et le précédent de la
  cybernétique a établi qu'un thème pourvu par un seul ouvrage n'en est pas un : il se déclarera
  quand un second auteur le rejoindra, et la littérature francophone sur l'organisation
  scientifique du travail existe pour cela. `division-sexuelle-du-travail`, `conflit-et-greve` et
  `groupes-professionnels` ne portent qu'une carte chacun. **Les quatre thèmes non déclarés restent
  affichés par leur libellé** : aucune carte n'est perdue, et aucune page vide n'est créée.
- **Braverman est clos, négativement et vérifiablement** : les deux éditions de 1974 sur Internet
  Archive (`labormonopolycap00brav`, `labormonopolycap00harr`) portent `access-restricted-item:
  true` en prêt numérique contrôlé. Trois passages se léguaient ce nom sans jamais vérifier son
  accès ; c'est désormais un résultat et non une dette. **La traduction française chez Maspero
  (1976) n'a pas été cherchée** : c'est la seule piste restante sur ce texte.
- **La reprise la moins chère du domaine est Dassa 1983** (« Conflit ou négociation ? Les grèves,
  leurs résultats et la taille des entreprises », *Sociologie du travail* 25-1, Persée
  `sotra_0038-0296_1983_num_25_1_1912`), repéré et **jamais vérifié en accès**, sur la même route
  que Durand donc à coût quasi nul. Il donnerait à `conflit-et-greve` sa seconde carte.
- **Piore 1975 est un échec réseau, pas un vide** : le PDF MIT DSpace
  (`dspace.mit.edu/bitstream/handle/1721.1/64001/notesfortheoryof00pior.pdf`) a rendu **HTTP 429
  trois fois de suite**. À retenter hors période de limitation.
- **Deux gisements francophones restent ouverts et non dépouillés** : le numéro 344 du *Bulletin
  de psychologie* (1980), toujours à moitié dépensé, et les pages impaires 91 à 109 de Chapoulie,
  jamais servies ou jamais ouvertes, dont la page 109 que le serveur n'a jamais rendue.

### Un faux rouge de `gitleaks` à connaitre, il se reproduira

Le scan de secrets est passé au rouge sur cette pull request, et **ce n'était pas une fuite** :
il n'a rien scanné du tout. Le job a rendu `fatal: Invalid revision range c23486f^..fe6120b`,
puis « scanned ~0 bytes », puis un code de sortie 1.

**Cause** : `gitleaks-action` résout le SHA de tête par l'API, mais travaille sur le `merge` ref
déjà construit. Cette nuit ayant été commitée par étapes et poussée plusieurs fois de suite, un
run lancé pour `d1e6f0e` s'est vu demander de scanner jusqu'à `fe6120b`, poussé quelques secondes
plus tard et absent de son graphe d'objets. Le run suivant, sur la tête à jour, a scanné
**28 commits et 388 Ko** et rendu « no leaks found ». `fetch-depth: 0` est déjà réglé dans
`.github/workflows/gitleaks.yml` : ce n'est pas le problème.

**Ce qu'il faut en faire** : rien, sinon ne pas s'en alarmer. Le rouge porte sur un commit
dépassé, il se résout seul au run suivant, et la concurrence du workflow annule déjà les runs
périmés hors `main`. **Une nuit qui voit `gitleaks` au rouge doit d'abord lire le log** : si elle
y trouve « Invalid revision range » et « scanned ~0 bytes », c'est cette course et non un secret.
Le seul geste qui l'éviterait serait de grouper les pushes, ce qui coûterait la garantie que le
commit par étapes a apportée cette nuit quand le quota a coupé la session.

### Le serveur MCP `documentary` échouera à chaque nuit, et la cause est identifiée

Ce n'est pas un aléa : c'est structurel, et aucun des quatre passages précédents ne l'avait
diagnostiqué, tous le constatant comme une fatalité. Le serveur est lancé par `node
scripts/mcp/documentary-server.mjs` et dépend de `@modelcontextprotocol/sdk`, une devDependency.
**Le client MCP se connecte au démarrage de la session, avant que `npm ci` de l'étape 0 n'ait
installé `node_modules`** : la connexion échoue donc toujours en `CONNECTION_CLOSED`, et le client
ne se reconnecte pas en cours de session.

Vérifié cette nuit : une fois `npm ci` passé, le serveur répond correctement à une poignée de main
JSON-RPC (`{"result":{"protocolVersion":"2024-11-05","serverInfo":{"name":"documentary"}}}`). **Le
serveur fonctionne, c'est l'ordre de démarrage qui est faux.** La correction n'a pas été faite
cette nuit parce qu'elle sort du périmètre documentaire de la routine, mais elle est simple et
elle rendrait Crossref, OpenAlex, Semantic Scholar et Zotero à toutes les nuits suivantes : il
faut que `node_modules` existe **avant** que la session ne démarre, par un hook `SessionStart` ou
par une installation dans l'image de l'environnement. **C'est la reprise à plus fort rendement du
dépôt**, et elle ne coûte pas une nuit d'instruction.

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
