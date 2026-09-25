concept : systemographie
verdict : REVISE

protocole : AUDIT_PROTOCOL.md version 3
date : 2026-09-25
texte lecteur : 1 309 mots (lead 171, sections 1 138), 6 sections, 18 paragraphes de section + 2 de lead
limits : 206 mots, 4 paragraphes
aucun tiret cadratin

ÉTAT DOCUMENTAIRE CONSTATÉ (vérifié, non supposé)

- `corpus/evidence/systemographie/` N'EXISTE PAS. Le répertoire a été listé : `ls` rend
  « No such file or directory ». Il n'y a donc aucun dossier de preuve au format que
  `FACTCHECK_PROTOCOL.md` §3 ramasse. Le pack aval verra `evidence_files: []`.
- L'enregistrement validé porte en revanche `"dossier": "corpus/dossiers/systemographie.json"`,
  un enregistrement candidat de l'ancien format, daté du 5 septembre 2026, lu ici en entier.
  Le pack déterministe **ne le lira pas** : §3 n'énumère que `corpus/deepenings/<id>.json`,
  `corpus/validated/<id>.json` et `corpus/evidence/<id>/*.json`.
- Conséquence mécanique à connaître avant toute réécriture : pour cette carte, toute déclaration
  de source de la fiche arrivera au vérificateur avec `access_corroboration: "dossier-absent"`
  (§3bis), et un claim de contenu qui ne tiendrait que par une telle déclaration recevra
  `SOURCE_NOT_CONSULTED`. Les appuis tirés de `quotation`, `summary`, `notes` et `review`, eux,
  arrivent avec `access: "n/a"` et se pèsent sur leur contenu (§5, dernier paragraphe).
- Conséquence pratique : ce texte est en réalité solide parce qu'il s'appuie presque partout sur
  les verbatim des `notes` et du bloc `review`, et non sur les libellés de `sources`. C'est le
  bon réflexe, et il faut le préserver dans la révision.

CE QUI EST SOUTENU PAR L'ENREGISTREMENT VALIDÉ SEUL

Toutes les citations du texte lecteur, sans exception, se retrouvent mot pour mot dans
`quotation.text`, `notes` ou `review.notes` de `corpus/validated/systemographie.json` :

- « un objet qui, doté de finalités, fonctionne se structure et évolue dans un environnement » :
  `notes[0]`.
- « La vérification de l'isomorphie sera facile puisque le Système Général… » : `review.notes`
  (PROSE, 2e occurrence).
- « L'homomorphie du modèle et de l'objet sera difficile et a priori jamais parfaitement
  validée » et la parenthèse « pour qu'elle le soit, il aurait fallu que les systèmes soient dans
  la nature et que nous en ayons la preuve ! » : `notes[0]` et `review.notes` (PROSE).
- « les systèmes ne sont pas dans la nature » : `notes[1]`, avec sa page (p. 74).
- « Il sera donc a priori toujours possible de concevoir et de construire bien des systémographies
  différentes du même objet, toutes homomorphes de cet objet et toutes isomorphes du Système
  Général » : `notes[0]` et `review.notes` (PROSE).
- « peut laisser divaguer l'imagination de l'observateur à sa guise, dès lors qu'il assure en
  permanence de la validité de ces deux correspondances » et « explicitement, publiquement,
  loyalement » : `notes[9]`.
- « prédéterminables et ne dépendant que de l'appareil utilisé » : `review.notes` (PROSE, 3e).
- « hélas assez peu défini et son mode d'emploi n'est guère précisé » et « en donnant un autre
  nom... à un autre outil ! » : `review.notes` (ATTRIBUTION).
- « ultime tentative de récupération de l'analyse cartésienne » : `notes[8]`.
- Les trois membres Pesqueux (« cadrage… », « documentation du modèle… », « simulation
  d'actions possibles… ») : `review.notes` (SOURCES 3/5), verbatim.
- « la primauté que l'on avait introduite, dès la première édition, à la présentation de la
  systémographie » (dans `limits`) : `notes[3]`.

Sont également soutenus par la fiche seule : le titre du chapitre 3 (`review.notes`, EXEMPLAIRE 2
et LOCALISATION), l'analogie photographique et l'intertitre « Photographie et systémographie »
(`review.notes`, ATTRIBUTION), de Rosnay 1975 et son « ouvrage populaire » (idem), le fait que les
objectifs du modélisateur, et non la fidélité, départagent les modèles (`notes[9]`, p. 82), la
non-circulation du mot chez Pesqueux et Schmitt (`notes[5]`), et l'emploi inversé de la paire de
termes dans les premières pages de Pesqueux (`review.notes`, dernière note « hors des quatre
points »). Le texte lecteur ne va nulle part chercher un fait que la fiche ne porte pas.

CE QUI N'EST SOUTENU QUE PAR LE DOSSIER ARCHIVÉ (invisible au gate)

Matière réelle, riche, et qui n'entrera dans aucun claim tant qu'aucun
`corpus/evidence/systemographie/*.json` n'existe :

- les définitions formelles de p. 77, « Isomorphisme : correspondance bijective… » et
  « Homomorphisme : correspondance surjective telle qu'à tout élément de l'ensemble d'arrivée
  corresponde un élément au moins de l'ensemble de départ, sans que la réciproque soit vraie »,
  avec l'avertissement sur le sens de la flèche (arrivée = modèle, départ = objet)
  (`evidence.translation_notes[1]`) ;
- la définition ramassée de p. 81, « La conception de modèles isomorphes du Système Général »
  (`_alternatives_verbatim_meme_source[1]`) ;
- les deux réglages laissés au modélisateur, « niveaux de résolution » et « objectifs », et le
  modélisateur « habituellement économe sinon paresseux » cherchant les zones « faiblement
  tissées » (p. 81-82, `concept_definition`) ;
- la figure 3.1, « l'appareil à systémographier », p. 80, déclarée non lue ;
- la restitution de Motulsky 1978 (« elle construit des modèles qui en offrent une représentation
  communicable… clarification du code… consensus ») ;
- l'autocritique de 2006, p. VIII, « une modélisation analytique qui n'avait de systémique que le
  nom », que le dossier assortit lui-même d'un « À TRAITER AVEC PRUDENCE » ;
- Degenne 1978, Arnaud 1991, Rodhain 2024, Schmitt et « les quatre questions génériques ».

Point remarquable : le texte lecteur actuel gagne le plus important de cette liste sans y toucher.
Sa glose de l'homomorphie en S3.P1 (« plusieurs traits de l'objet peuvent se retrouver ramassés
dans un seul trait du modèle, la correspondance va dans un sens et ne se rend pas ») est la lecture
exacte de la définition de p. 77, sens de la flèche compris, mais la seule chose que la fiche
porte pour l'appuyer est le « sans que la réciproque soit vraie » absent de la fiche et le
« correspondance bijective » de la citation d'isomorphie. C'est le claim le plus exposé du texte
devant le gate, et il est juste. Voir « limites documentaires ».

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur apprend qu'il existe un problème là où il croyait n'avoir qu'une
  vérification à faire : comparer un schéma à la chose ne comporte aucune règle d'arrêt. Delta
  fort, posé sans un mot de vocabulaire spécialisé, sur une situation observable.
- lead[1] : il apprend qu'un auteur retourne la question, qu'on peut juger l'instrument au lieu de
  juger la ressemblance, et que le produit de cet instrument reçoit un nom propre. Delta fort : le
  geste du concept est là avant son nom.
- S1.P1 : il apprend le nom de l'instrument et son contenu exact, cinq propriétés tenant en une
  ligne. Delta net. Réserve de clarté : « c'est un modèle tout fait » fait du Système Général un
  modèle, au moment précis où le texte va devoir distinguer le modèle du référent contre lequel on
  le vérifie.
- S1.P2 : il comprend pourquoi la liste est close : ces propriétés ont été décidées, pas relevées.
  Delta décisif, et c'est le prérequis que S2 utilisera. Bien placé.
- S1.P3 : REDONDANT AVEC lead[1] et lead[0]. L'analogie photographique a déjà été posée en
  lead[1] (« comme on décrirait un appareil photographique, avec son mode d'emploi ») et le refus
  du grain à grain redit le « trait par trait » de lead[0]. Le seul ajout est documentaire (le
  vocabulaire est celui du chapitre), ce qui n'est pas un delta pour le lecteur.
- S2.P1 : il apprend qu'il y a deux vérifications et non une, que la première porte sur
  l'instrument, et ce que « isomorphe » veut dire ici. Delta fort, terme introduit après son
  besoin.
- S2.P2 : il apprend la raison pour laquelle cette vérification aboutit, dans les mots de
  l'auteur. Demi-delta : la raison a déjà été donnée en S1.P2 ; ce qu'ajoute la citation est
  l'opération (« en les balayant une par une ») et la bijection.
- S2.P3 : les deux premières phrases sont REDONDANTES AVEC S1.P2 et S2.P2 (la liste est courte et
  close parce que c'est nous qui l'avons faite : déjà dit deux fois). La dernière proposition, « il
  n'apprend rien sur l'hôpital », est un vrai delta et c'est elle qui fait tenir le paragraphe.
- S3.P1 : il apprend la seconde vérification, que l'exigence y est plus faible, dans quel sens
  elle va, et il se forme une attente (le plus facile devrait être le plus lâche). Delta fort, et
  l'attente est construite exprès.
- S3.P2 : l'attente est démentie et il apprend l'asymétrie, avec la raison que l'auteur donne
  entre parenthèses. Delta fort ; c'est le sommet du texte et il tombe au bon endroit.
- S3.P3 : il comprend que l'obstacle est de principe et non pratique, et pourquoi : il n'y a rien,
  en face, dont la liste serait close. Delta fort, et la boucle avec lead[0] se ferme
  exactement (« rien ne dit à quel moment on aurait le droit de s'arrêter »).
- S4.P1 : il apprend la conséquence, tirée par l'auteur lui-même : plusieurs modèles du même objet,
  tous valides, et la ressemblance ne les départage pas. Delta fort.
- S4.P2 : il apprend que ce n'est pas un permis, et que la condition est continue et non acquise au
  départ. Delta fort, et la nuance arrive là où le contresens se produit, pas en fin de texte.
- S4.P3 : trois deltas empilés dans un paragraphe : la contrepartie publique, le critère de
  remplacement (les objectifs du modélisateur), et la citation « prédéterminables et ne dépendant
  que de l'appareil utilisé ». Le troisième arrive sans glose et le lecteur ne peut pas savoir de
  quoi ces caractéristiques sont prédéterminées. Paragraphe surchargé, pas redondant.
- S5.P1 : il apprend que l'auteur a refusé un mot existant, contre quel ouvrage, et pour quel
  motif déclaré. Delta réel, documentaire. Deux réserves : « où il reconnaît » laisse le lecteur
  hésiter sur le sujet du verbe, et la fiche porte « aux qualités *apparemment* peu différentes »,
  couvert d'hésitation que le texte supprime.
- S5.P2 : il apprend le second refus, qu'il distingue analyser et concevoir, et pourquoi
  l'étiquette aurait ramené ce que l'opération quitte. Delta fort, correctement marqué (« On peut
  comprendre le reproche ainsi »), et il bloque un contresens réellement répandu.
- S5.P3 : AUCUN DELTA. Vingt-trois mots qui redisent S5.P2 en la retournant en avertissement. La
  phrase est d'ailleurs presque celle de `notes[8]`, c'est-à-dire une consigne écrite pour le
  rédacteur et le contrôleur, repassée telle quelle au lecteur.
- S6.P1 : il apprend un fait de réception : le nom n'a pas pris. Delta réel. Mais la portée de la
  phrase dépasse ce qui a été cherché, voir « défauts majeurs ».
- S6.P2 : il apprend que la procédure a survécu au mot près chez un tiers, et il découvre une
  troisième phase, la simulation d'actions possibles, qui dit à quoi le modèle sert. Delta fort, et
  c'est la seule information du texte sur l'usage du modèle.
- S6.P3 : les deux premières phrases sont REDONDANTES AVEC S6.P1 et S6.P2 (« les deux
  vérifications y sont… augmentées d'une troisième phase et privées du nom » énumère ce que les
  deux paragraphes précédents viennent d'établir, et « le mécanisme survit à l'étiquette »
  reformule le titre de la section). La dernière phrase, la même paire de termes employée en sens
  inverse dans les premières pages du même document, est un delta réel et une vraie ouverture.

Comptage : 1 paragraphe sans delta (S5.P3), 3 groupes redondants (lead[1] + S1.P3 ;
S5.P2 + S5.P3 ; S6.P1 + S6.P2 + tête de S6.P3), 2 paragraphes à tête redondante et queue utile
(S2.P3, S6.P3), 1 paragraphe surchargé (S4.P3). Aucune séquence de trois paragraphes de delta
identique. Aucune section dont le rôle principal soit de répéter une section antérieure.

RÔLE DES SECTIONS

- S1 « L'appareil s'appelle Système Général » : donne à l'instrument un nom, un contenu et la
  propriété qui rendra la suite intelligible, à savoir que sa liste est finie parce qu'elle est
  décidée.
- S2 « Vérifier le modèle contre l'appareil » : installe la première des deux vérifications et
  montre qu'elle s'achève, au prix de ne rien dire de l'objet.
- S3 « Vérifier le modèle contre l'objet » : installe la seconde, retourne l'attente du lecteur, et
  explique que son inachèvement est de principe.
- S4 « Plusieurs modèles du même objet, tous valides » : tire la conséquence, puis en retire
  aussitôt la lecture relativiste en montrant où la contrainte s'est déplacée.
- S5 « Un autre nom pour un autre outil » : explique pourquoi l'instrument porte un mot forgé, et
  quelle confusion ce mot était censé empêcher.
- S6 « Ce qui a circulé sans le mot » : sépare le destin du nom de celui de la procédure, et rend
  le lecteur capable de reconnaître le mécanisme sous un autre vocabulaire.

La progression est réelle et se dit en une phrase par section. Aucun terme n'arrive avant son
prérequis : « isomorphe » n'apparaît qu'après que S1.P2 a établi la liste close, « homomorphe »
qu'après que S2 a donné le premier terme du couple, et les deux sont glosés sur place. Le seul
enchaînement discutable est S1.P3, qui interrompt la montée pour redire lead[1].

SCORES

- fidélité documentaire : 3/4 — chaque citation est un verbatim présent dans `quotation`, `notes`
  ou `review`, et le sens de la flèche isomorphie/homomorphie, qui est le piège du chapitre, n'est
  pas inversé (S2.P1 et S3.P1). Trois fragilités visibles, aucune critique : S6.P1 étend une
  recherche d'absence menée sur un dépôt (`notes[5]` : « absent de HAL, où l'interrogation exacte
  rend un seul document sans rapport ») à « les dépôts d'articles francophones » au pluriel, alors
  que `limits[3]` de ce même fichier nomme un texte francophone qui reprend le mot sous son nom ;
  S5.P1 supprime le « apparemment » de « aux qualités apparemment peu différentes » et fait
  concéder à l'auteur un peu plus qu'il ne concède ; S1.P1 appelle le Système Général « un modèle
  tout fait » là où la fiche le donne comme un objet aux propriétés connues par construction.
- progressivité pédagogique : 4/4 — la difficulté monte parce que les briques sont posées :
  S1.P2 fournit la liste close que S2.P2 va balayer, S3.P1 construit l'attente que S3.P2 démolit,
  et S3.P3 ne mobilise « les systèmes ne sont pas dans la nature » qu'après que la parenthèse de
  l'auteur en a créé le besoin. Aucun saut.
- densité / non-redondance : 3/4 — S5.P3 est sans delta, S1.P3 redit lead[0] et lead[1], et
  S2.P3 comme S6.P3 ouvrent sur du déjà-dit avant de livrer leur vraie information. Environ 130
  mots du texte lecteur ne font rien avancer, sur 1 309.
- clarté : 3/4 — l'entrée se lit sans vocabulaire de discipline et les deux termes techniques sont
  glosés au moment de leur besoin. Trois accrocs locaux : « un modèle tout fait » (S1.P1) risque
  de confondre l'appareil et le modèle qu'on en tire, « prédéterminables et ne dépendant que de
  l'appareil utilisé » (S4.P3) est lâché sans explication dans un paragraphe déjà chargé, et « où
  il reconnaît un appareil aux qualités peu différentes du sien » (S5.P1) rend le sujet du verbe
  ambigu entre Le Moigne et de Rosnay.
- profondeur explicative : 4/4 — le texte explique des mécanismes et pas seulement des noms :
  pourquoi une liste décidée se balaie jusqu'au bout (S2.P2-P3), pourquoi l'exigence la plus lâche
  est celle qui ne s'achève pas (S3.P2), et pourquoi l'obstacle n'est ni le temps ni les données
  (S3.P3). S4.P2 va jusqu'à montrer que la contrainte ne disparaît pas mais change de lieu.
- valeur des exemples : 2/4 — l'hôpital de lead[0] fait très bien son travail d'entrée, puis n'est
  plus qu'une allusion deux fois (S2.P3, S3.P3) et n'est jamais travaillé. L'affirmation centrale
  de S4.P1, deux modélisateurs produisent deux représentations différentes et valides, reste
  entièrement abstraite : « Deux modélisateurs peuvent produire deux représentations différentes »
  énonce ce qu'un exemple devait faire voir. L'analogie photographique, elle, est celle de
  l'auteur et S1.P3 la répète plus qu'elle ne l'exploite.
- limites / nuances : 4/4 — les nuances arrivent là où elles empêchent un contresens, non en
  appendice : S4.P2 coupe la lecture « chacun son modèle » à la phrase qui suit celle qui
  l'autorise, S4.P3 dit ce qui remplace le critère de ressemblance, S5.P2 bloque l'assimilation à
  l'analyse de système, et S6.P3 prévient que le même document emploie ailleurs les deux termes en
  sens inverse. Le registre interne `limits` n'est jamais exposé au lecteur.
- pouvoir d'ouverture : 3/4 — la dernière phrase donne au lecteur quelque chose à faire et à
  vérifier lui-même, ce qui est le bon geste. Mais le texte se referme sur une curiosité
  bibliographique concernant un document de cours, et non sur la tension qu'il avait construite ;
  rien ne renvoie à l'ouvrage lui-même, dont `limits` montre pourtant qu'il porte encore la
  figure, la définition ramassée et le mot.

défauts majeurs :

- S5.P3 est une consigne interne recyclée en paragraphe lecteur. Sa formulation suit
  `notes[8]` presque mot pour mot (« Écrire que la systémographie est l'analyse de système de
  Le Moigne le contredirait dans la page même où il définit son terme ») et elle ne fait que
  retourner S5.P2. À supprimer ou à fondre dans S5.P2.
- S6.P1 sur-étend une recherche d'absence. `notes[5]` établit que le mot est absent de HAL pour une
  interrogation exacte, et que deux textes lus ne l'emploient pas ; le texte en tire « on ne le
  rencontre pratiquement pas dans les dépôts d'articles francophones ». Or `limits[3]` du même
  fichier, comme `notes[6]` de la fiche, nomme Géry Lecas 2006 comme un texte francophone qui
  reprend la systémographie sous son nom et dont le contenu est « inconnu, non absent ». Le
  correctif est de resserrer la phrase sur ce qui a réellement été cherché, pas de la durcir.
  **La révision ne doit en aucun cas conclure que le mot est absent de la littérature
  francophone** : la fiche porte la réserve inverse, et c'est elle qui l'emporte (§5).
- L'exemple d'entrée n'est pas rentabilisé. Le lecteur reçoit un hôpital au premier paragraphe et
  ne le revoit jamais en fonctionnement, alors que S4 est exactement l'endroit où deux modèles
  concurrents du même hôpital rendraient visible ce que « tous valides » veut dire.
- Trois têtes de paragraphe répètent (S1.P3 en entier, S2.P3 et S6.P3 sur leurs deux premières
  phrases). Le texte étant à 1 309 mots, soit tout en bas de la fourchette visée, ces répétitions
  occupent la place d'un développement au lieu de la partager avec lui.
- S4.P3 empile trois idées dont la dernière est opaque sans glose.

matière disponible mais sous-exploitée :

Dans l'enregistrement validé, donc utilisable et visible par le gate :

- **Le sens contre-intuitif du couple**, relevé par le contrôle lui-même : `review.notes` (PROSE,
  1re) écrit « C'est le sens contre-intuitif : on attendrait l'isomorphie du côté de l'objet ». Le
  texte actuel construit une autre surprise (la plus lâche est la plus rétive) mais laisse passer
  celle-là, qui est la première que le lecteur se formule : pourquoi l'exigence de correspondance
  exacte porte-t-elle sur l'objet fabriqué et non sur le monde ? C'est la matière la plus
  rentable du dossier pour un delta supplémentaire, et elle tient dans les deux membres de
  `quotation.text`.
- **Le redoublement du couple à la page suivante** : `review.notes` (PROSE, 1re) cite « isomorphie
  avec le Système Général, homomorphie avec l'objet considéré », déjà utilisé partiellement en
  S4.P2 à travers `notes[9]`. Il permettrait de refermer S2/S3 sans reformuler.
- **La date et l'exemplaire** : `attribution_note` porte que l'ouvrage paraît aux Presses
  universitaires de France en 1977. Le texte lecteur ne donne aucune date, ce qui prive S5 et S6
  de leur repère : le refus d'« analyse de système » et la survie de la procédure sans son nom se
  lisent tout autrement si l'on sait de quelle décennie on parle. **Attention à la forme** :
  `notes[3]` et `limits[1]` réservent expressément l'antériorité du chapitre à la première
  édition, attestée par une phrase de 1984 qui « atteste sans prouver ». Une révision peut donc
  dater la parution de l'ouvrage ; elle ne peut pas affirmer sans réserve que le chapitre disait
  ceci en 1977.
- **L'aveu de fragilité de l'auteur sur la troisième section du chapitre** n'est pas dans la fiche
  et ne doit pas être importé : il n'est que dans le dossier archivé. Voir ci-dessous.

Dans le dossier archivé seulement, donc à ne pas verser dans le texte tant qu'aucun
`corpus/evidence/systemographie/` n'existe :

- les définitions formelles de p. 77 et l'avertissement sur le sens de la flèche, qui appuieraient
  la glose de S3.P1 ;
- la définition ramassée de p. 81, « La conception de modèles isomorphes du Système Général », que
  le dossier écarte d'ailleurs comme citation principale parce qu'elle n'enseigne qu'une moitié de
  la procédure ;
- les « niveaux de résolution », les « objectifs » et les zones « faiblement tissées » de p. 81-82,
  qui sont précisément ce qui permettrait de construire l'exemple manquant de S4 sur pièce ;
- l'autocritique de 2006, p. VIII, sur la modélisation « qui n'avait de systémique que le nom »,
  que le dossier lui-même assortit d'un avertissement de prudence ;
- Motulsky 1978 sur la communicabilité et le consensus, Degenne 1978, Arnaud 1991, Rodhain 2024.

limites documentaires :

- **Pas de dossier de preuve au format ramassé.** L'absence de `corpus/evidence/systemographie/`
  signifie que la fidélité de ce texte n'est vérifiable, dans la chaîne aval comme dans cet audit,
  qu'au regard d'un résumé, l'enregistrement validé. Ce résumé est ici exceptionnellement riche
  (onze `notes`, quatorze notes de `review` avec verbatim, paginations et relectures sur image),
  ce qui rend le contrôle praticable, mais il reste un résumé : il peut ne pas contredire une
  affirmation fausse. Cet audit note donc A à 3 sur ce qu'il voit, et non à 4.
- **Le champ `dossier` ne sauve rien mécaniquement.** `corpus/dossiers/systemographie.json` est
  un enregistrement candidat de l'ancien format ; `FACTCHECK_PROTOCOL.md` §3 ne l'énumère pas.
  Tant qu'il n'est pas repris sous `corpus/evidence/systemographie/`, chaque déclaration de source
  de la fiche arrivera au vérificateur en `dossier-absent`, et aucun claim de contenu ne pourra
  tenir sur elle seule. Une réécriture qui irait chercher ses faits dans ce fichier fabriquerait
  des claims non résolvables.
- **Le claim le plus exposé du texte actuel** est la glose de l'homomorphie en S3.P1 : elle est
  exacte au regard des définitions de p. 77, mais ces définitions ne sont que dans le dossier
  archivé. La fiche porte « correspondance bijective » pour l'isomorphie et rien pour
  l'homomorphie hors « exigence plus lâche ». Si le gate refuse ce passage, ce sera une lacune
  documentaire et non une faute de rédaction : ne pas l'affaiblir sans avoir d'abord constaté le
  refus, et préférer alors verser le dossier en `corpus/evidence/`.
- **Ce qui manque et qui manquera** : l'édition PUF de 1977 n'a pas été ouverte, la seconde page du
  compte rendu de 1978 n'est pas servie, l'article de Lecas 2006 est fermé, aucune réception
  anglophone n'a été cherchée. Rien de cela n'empêche le texte lecteur d'aller là où la trajectoire
  cible l'emmène ; en particulier, aucune des révisions proposées ci-dessous ne demande un fait
  absent de l'enregistrement validé.
- Ce n'est donc pas un cas `BLOCKED_SOURCE` : les deltas manquants sont pédagogiques, pas
  documentaires, et l'un d'eux (l'exemple de S4) s'obtient sans aucune source neuve, par un cas
  explicitement hypothétique que `PROTOCOLE.md` §4 autorise.

TRAJECTOIRE CIBLE

Architecture conservée, six sections conservées, titres conservés. Le budget gagné par les coupes
(S5.P3, S1.P3, têtes de S2.P3 et S6.P3 : environ 130 à 150 mots) plus la marge jusqu'à 1 700 mots
finance deux ajouts, un dans S2/S3 et un dans S4.

- lead : inchangé. Il fait exactement son travail, il ne contient aucun terme savant, et lead[0]
  fournit la règle d'arrêt manquante que S3.P3 viendra refermer. Ne pas y toucher.

- S1 « L'appareil s'appelle Système Général »
  1. Le lecteur entre en sachant qu'on va juger l'instrument plutôt que la ressemblance, et que
     son produit porte un nom.
  2. Il doit en sortir en sachant quel est cet instrument, ce qu'il contient exactement, et
     surtout pourquoi son contenu est énumérable : parce qu'il a été décidé.
  3. Matière : `notes[0]` pour les cinq propriétés ; `review.notes` (ATTRIBUTION) pour l'intertitre
     photographique et pour « nous établirons une systémographie de l'objet à l'aide de l'appareil
     Système Général ».
  4. Ne doit surtout pas reposer l'analogie photographique que lead[1] a déjà posée : S1.P3
     disparaît comme paragraphe autonome, ce qu'il garde d'utile (on ne juge pas une photographie
     grain par grain) tient en une incise de S1.P2. Deux paragraphes suffisent. Et revoir « un
     modèle tout fait » : l'appareil n'est pas le modèle, c'est ce contre quoi le modèle se
     vérifie, et toute la section S2 en dépend.

- S2 « Vérifier le modèle contre l'appareil »
  1. Le lecteur entre en sachant que la liste des propriétés est close parce qu'elle est décidée.
  2. Il doit en sortir en sachant qu'il y a deux vérifications et non une, que la première porte
     sur l'instrument, qu'elle s'achève, et qu'elle ne lui apprend rien sur l'hôpital.
  3. Matière : `quotation.text` pour les deux membres numérotés ; `review.notes` (PROSE, 2e) pour
     le balayage un par un et la bijection.
  4. Ne doit pas redire une troisième fois que la liste est courte parce que nous l'avons faite.
     S2.P3 se réduit à sa conclusion, qui est son seul delta. C'est ici, ou en tête de S3, que
     s'installe le delta le plus rentable qui manque : dire au lecteur que la répartition va à
     l'envers de ce qu'il attend, la correspondance exacte étant exigée du côté de l'objet
     fabriqué et la correspondance lâche du côté du monde. La matière est dans `quotation.text`
     et le constat est écrit par le contrôle dans `review.notes` (PROSE, 1re).

- S3 « Vérifier le modèle contre l'objet »
  1. Le lecteur entre avec une vérification qui s'achève et une répartition qui l'étonne.
  2. Il doit en sortir en comprenant que l'exigence la plus faible est celle qui ne se termine
     jamais, et que l'obstacle est de principe.
  3. Matière : `notes[0]` et `review.notes` (PROSE, 2e) pour la phrase et sa parenthèse ;
     `notes[1]` pour « les systèmes ne sont pas dans la nature » et sa page.
  4. Ne doit rien répéter : cette section est la meilleure du texte, elle est à conserver telle
     quelle à la virgule près. Garder en particulier l'usage instrumental de la thèse de p. 74, qui
     sert ici à expliquer la parenthèse de l'auteur et non à fonder le concept : `notes[1]` écarte
     cette thèse comme socle de la carte, pas comme explication du mécanisme, et la distinction
     doit rester lisible dans la révision.

- S4 « Plusieurs modèles du même objet, tous valides »
  1. Le lecteur entre en sachant que la ressemblance ne peut pas trancher.
  2. Il doit en sortir en ayant vu, et non seulement lu, ce que « plusieurs modèles tous valides »
     veut dire, puis en sachant que ce n'est pas un permis et ce qui remplace le critère de
     fidélité.
  3. Matière : `notes[0]` pour la conséquence tirée par l'auteur ; `notes[9]` pour la divagation
     bornée, l'explicitation publique et les objectifs du modélisateur ; `review.notes` (PROSE,
     3e) pour « prédéterminables ». Pour le cas concret, aucun fait neuf n'est requis : un cas
     explicitement hypothétique, ouvert par « imaginons » comme `PROTOCOLE.md` §4 l'exige, où deux
     personnes systémographient le même hôpital avec des finalités différentes et obtiennent deux
     schémas qui satisfont tous deux les deux vérifications. Il rend visible l'affirmation de
     S4.P1 et prépare le critère des objectifs.
  4. Ne doit pas se contenter d'énoncer que deux modélisateurs peuvent différer, et doit désencombrer
     S4.P3 : soit gloser « prédéterminables » en une proposition (ce qui varie d'un modèle à
     l'autre ne vient pas de l'objet mais de l'instrument et de ce qu'on lui demande), soit
     déplacer cette citation en clôture de S1 où elle rejoindrait l'appareil.

- S5 « Un autre nom pour un autre outil »
  1. Le lecteur entre en sachant ce que fait l'instrument et ce que sa pluralité de produits
     n'autorise pas.
  2. Il doit en sortir en sachant pourquoi ce mot a été forgé plutôt qu'emprunté, et quelle
     confusion précise le mot emprunté aurait installée.
  3. Matière : `review.notes` (ATTRIBUTION) pour la note 2 sur le macroscope, avec son
     « apparemment » restitué ; `notes[8]` pour le refus d'« analyse de système » et « approche
     système » et pour la récupération cartésienne ; `attribution_note` pour la parution de 1977,
     qui donne au conflit de vocabulaire sa date.
  4. Ne doit pas se conclure par une phrase d'avertissement qui retourne le paragraphe précédent :
     S5.P3 tombe. Deux paragraphes, dont le second garde la glose marquée « on peut comprendre le
     reproche ainsi », qui est exactement le bon marquage.

- S6 « Ce qui a circulé sans le mot »
  1. Le lecteur entre en sachant pourquoi l'auteur tenait à son mot.
  2. Il doit en sortir capable de reconnaître la procédure sous un autre vocabulaire, averti qu'un
     troisième temps s'y est ajouté, et muni d'une raison précise de lire par lui-même.
  3. Matière : `notes[5]` pour ce qui a été cherché et ce qui n'a pas été trouvé, à la portée
     exacte de la recherche ; `review.notes` (SOURCES 3/5) pour les trois phases verbatim ;
     `review.notes` (dernière note) pour l'emploi inversé des deux termes dans les premières pages
     du même document.
  4. Ne doit pas récapituler en tête de son troisième paragraphe ce que les deux premiers viennent
     d'établir. Et ne doit pas durcir l'énoncé d'absence : la portée se resserre sur ce qui a été
     interrogé, sans prétendre que le mot n'existe nulle part, puisque la frontière interne de ce
     même fichier nomme un article qui l'emploie et dont le contenu reste à lire. Si une ouverture
     plus forte est cherchée, c'est vers l'ouvrage qu'elle va : il porte encore le schéma de
     l'appareil et la définition que l'auteur donne de son mot, et ces pages attendent leur
     lecteur.

- `limits` : à conserver. Les quatre paragraphes nomment chacun une source, son état d'accès et
  l'affirmation qu'il interdit, ce que `PROTOCOLE.md` §5 exige, et le texte lecteur reste en deçà
  de cette frontière. Si le dossier archivé est un jour repris sous `corpus/evidence/`, y ajouter
  la figure 3.1 non lue et l'absence de balayage anglophone, qui sont aujourd'hui les deux lacunes
  déclarées par le dossier et muettes dans `limits`.

raison du verdict : REVISE, et non PASS, parce qu'un paragraphe entier ne produit aucun delta
(S5.P3, qui recycle une consigne interne en texte lecteur), qu'un autre ne fait que redire le lead
(S1.P3), que deux ouvrent sur du déjà-dit (S2.P3, S6.P3), et surtout parce que l'affirmation
centrale de S4 n'est jamais montrée alors que l'hôpital du premier paragraphe était l'instrument
tout prêt pour le faire et qu'aucune source nouvelle n'est nécessaire. Une fragilité documentaire
de portée s'y ajoute en S6.P1, qui étend au pluriel des dépôts une recherche menée sur un seul,
contre ce que la frontière interne du fichier dit elle-même de Lecas 2006. REVISE et non REWRITE
parce que l'architecture est bonne et la progression réelle : les six sections font six travaux
distincts, les prérequis précèdent leurs usages, S3 et S4.P2 sont excellents, et les corrections
demandées sont des coupes, un déplacement, une glose et deux ajouts que la fiche finance sans
emprunter au dossier archivé. REVISE et non BLOCKED_SOURCE parce que rien de ce que la trajectoire
cible demande ne manque dans l'enregistrement validé.
