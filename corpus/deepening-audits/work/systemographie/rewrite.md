# Réécriture — systemographie

concept : systemographie
mode : REVISE (architecture, six sections et titres conservés)
protocole : PROTOCOLE.md, AUDIT_PROTOCOL.md version 3, FACTCHECK_PROTOCOL.md version 1
date : 2026-09-25

## État documentaire vérifié par moi, et non repris de l'audit

- `ls corpus/evidence/systemographie/` rend « No such file or directory ». Il n'y a aucun
  dossier de preuve au format que `FACTCHECK_PROTOCOL.md` §3 ramasse ; le pack aval verra
  `evidence_files: []`.
- `corpus/dossiers/systemographie.json` est déclaré par le champ `dossier` de la fiche validée.
  §3 du protocole de fact-check n'énumère pas ce chemin. Je ne l'ai pas ouvert et **rien de ce
  fichier n'entre dans cette version** : ni les définitions formelles de p. 77, ni la définition
  ramassée de p. 81, ni les niveaux de résolution, ni les zones faiblement tissées, ni
  l'autocritique de 2006, ni Motulsky, Degenne, Arnaud, Rodhain. Un fait tiré de là arriverait au
  vérificateur sans support résolvable.
- Ma matière est donc `corpus/validated/systemographie.json` seul : `quotation`, `summary`,
  `attribution_note`, les onze `notes` et les quatorze notes de `review`. Ces appuis arrivent au
  vérificateur en `access: "n/a"` (§5, dernier paragraphe) et se pèsent sur leur contenu.
- Aucune recherche web, aucun fait ajouté de mémoire. Le traité de Le Moigne n'est pas dans le
  dépôt et je n'ai employé aucune connaissance générale sur lui.

## Ce que j'ai retiré

1. **S1.P3 entier** (environ 60 mots). L'analogie photographique y était reposée alors que
   lead[1] la pose déjà (« comme on décrirait un appareil photographique, avec son mode
   d'emploi ») et le refus du grain à grain redisait le « trait par trait » de lead[0]. Ce qu'il
   avait d'utile, on ne juge pas une photographie grain par grain, tient désormais en une
   proposition de S1.P2.
2. **La tête de S2.P3** (environ 25 mots) : « La liste à parcourir est courte et close, parce que
   c'est nous qui l'avons faite » était la troisième occurrence de ce que S1.P2 établit et que
   S2.P2 cite. La queue est gardée, y compris son vrai delta, « il n'apprend rien sur l'hôpital ».
3. **S5.P3 entier** (23 mots). Le paragraphe retournait S5.P2 en avertissement et suivait
   `notes[8]` presque mot pour mot : une consigne interne recyclée en texte lecteur, sans delta.
4. **La tête de S6.P3** (environ 35 mots) : « Les deux vérifications y sont… privées du nom de
   l'instrument » récapitulait S6.P1 et S6.P2, et « le mécanisme survit à l'étiquette »
   reformulait le titre de la section. La queue, l'emploi inversé de la paire de termes dans les
   premières pages du même document, est gardée et devient l'entrée du dernier paragraphe.
5. **La troisième idée de S4.P3** n'est pas supprimée mais déplacée (voir ci-dessous) : le
   paragraphe empilait trois deltas et lâchait « prédéterminables et ne dépendant que de
   l'appareil utilisé » sans glose possible à cet endroit.

Total retiré : environ 145 mots de texte lecteur.

## Ce que j'ai déplacé

- **« prédéterminables et ne dépendant que de l'appareil utilisé »** (`review.notes`, PROSE 3e)
  quitte S4.P3 pour clore S1.P2. À cet endroit la citation se glose d'elle-même, puisque
  l'appareil est la seule chose en scène : ce qui sort de lui dépend de lui, et peut donc être
  connu d'avance. En S4 elle arrivait après deux autres deltas et le lecteur ne pouvait pas
  savoir de quoi ces caractéristiques étaient prédéterminées. S4.P4 n'a plus que deux idées, la
  contrepartie publique et le critère de remplacement.

## Ce que j'ai corrigé

- **S1.P1, « un modèle tout fait » disparaît.** L'appareil n'est pas le modèle : c'est ce contre
  quoi le modèle se vérifie, et toute la section S2 en dépend. La phrase dit maintenant les deux
  choses qu'il n'est pas, l'appareil de mesure et le schéma de l'hôpital, avant de dire ce qu'il
  est. Appui : `notes[0]` pour la ligne citée, `review.notes` (PROSE 2e) pour « construction
  artificielle » et les propriétés connues par construction.
- **S5.P1, « apparemment » est restitué et le sujet du verbe est désambiguïsé.** La fiche porte
  « aux qualités apparemment peu différentes » (`review.notes`, ATTRIBUTION) ; l'ancienne version
  supprimait l'adverbe et faisait concéder à l'auteur plus qu'il ne concède. La nouvelle cite
  l'adverbe et dit qu'il porte la réserve. Le sujet est nommé, « que Le Moigne vise en note de bas
  de page : il y accorde… », là où « où il reconnaît » laissait hésiter entre Le Moigne et
  de Rosnay.
- **S6.P1 ne conclut plus à une absence.** L'ancienne version écrivait « on ne le rencontre
  pratiquement pas dans les dépôts d'articles francophones », au pluriel, là où `notes[5]`
  n'établit qu'une interrogation exacte sur un dépôt. La phrase est ramenée à ce que la fiche
  porte sans extrapolation : deux textes de 2020 et 2024 qui reviennent sur le travail de
  Le Moigne ne l'emploient pas une seule fois, y compris là où ils portent sur la modélisation.
  **Je n'ai pas durci l'énoncé et je ne l'ai pas non plus remplacé par un constat de recherche.**
  `limits[3]` et `notes[6]` nomment Géry Lecas 2006 comme texte francophone qui reprend le mot
  sous son nom et dont le contenu est « inconnu, non absent » : cette réserve écrite l'emporte sur
  la recherche d'absence, `AUDIT_PROTOCOL.md` §5. Elle est désormais visible dans le texte
  lecteur, en clôture, sous la forme que `PROTOCOLE.md` §1 impose : ce que l'article porte, et
  qu'il faudra le lire.
- **S3.P1 perd sa première phrase.** Comme le delta de la répartition contre-intuitive s'installe
  en fin de S2 (voir ci-dessous), « La seconde vérification porte, elle, sur l'objet. Le Moigne la
  veut homomorphe, exigence plus lâche que la première » devenait une redite. Le paragraphe ouvre
  maintenant sur la glose mécanique, qui est son delta propre, et garde mot pour mot l'attente
  qu'il construit pour S3.P2. C'est la seule entorse à la consigne « S3 telle quelle » de l'audit,
  et elle existe pour ne pas fabriquer une redondance neuve.

## Ce que j'ai ajouté, et avec quelle matière

1. **S2.P4, la répartition va à l'envers de ce qu'on attend** (environ 85 mots). C'est le delta
   que l'audit désignait comme le plus rentable, et il était absent : le lecteur découvre que
   l'exigence de correspondance exacte porte sur l'objet que nous avons fabriqué, et l'exigence
   lâche sur le monde. Matière : `quotation.text`, qui n'était citée nulle part dans l'ancienne
   version, pour les deux membres et leur ordre ; `review.notes` (PROSE 1re) pour le constat que
   c'est le sens contre-intuitif. Le constat est écrit comme une attente du lecteur qu'on redresse
   et non comme une thèse de l'auteur, puisque c'est le contrôle de la carte qui le formule.
   Vérifications : « la représentation que construit l'observateur sera à la fois » et
   « de l'objet à représenter » sont verbatim dans `quotation.text`.
2. **S4.P2, le cas hypothétique du même hôpital systémographié deux fois** (environ 130 mots).
   L'affirmation centrale de S4, plusieurs modèles tous valides, restait entièrement abstraite :
   « Deux modélisateurs peuvent produire deux représentations différentes » énonçait ce qu'un
   exemple devait faire voir. Le nouveau paragraphe ouvre par « Imaginons », comme
   `PROTOCOLE.md` §4 l'exige, et **n'introduit aucun fait** : il n'emploie que les cinq propriétés
   de la définition citée en S1 (finalités, fonctionnement, structure, évolution, environnement),
   la conséquence que l'auteur tire lui-même dans `notes[0]` (« toutes homomorphes de cet objet et
   toutes isomorphes du Système Général ») et le critère des objectifs du modélisateur de
   `notes[9]`. Rien n'y vient des niveaux de résolution ni des zones faiblement tissées du dossier
   archivé, qui auraient permis de construire le même exemple sur pièce mais qu'aucun support ne
   résoudrait. L'exemple ne peut pas se lire comme un cas historique : deux personnes
   hypothétiques, deux intentions hypothétiques, aucun établissement nommé, aucune date.
3. **La date de parution, en S5.P1** : « Le livre paraît en 1977, aux Presses universitaires de
   France, deux ans après Le macroscope, l'ouvrage de vulgarisation que Joël de Rosnay publie
   en 1975 ». Matière : `attribution_note` pour 1977 et les PUF, `review.notes` (ATTRIBUTION) pour
   de Rosnay 1975. **Forme surveillée** : `notes[3]` et `limits[1]` réservent expressément
   l'antériorité du chapitre à la première édition, attestée par une phrase de 1984 qui atteste
   sans prouver. Le texte date donc la parution de l'ouvrage et le conflit de vocabulaire entre
   deux livres, et n'affirme nulle part que le chapitre disait ceci en 1977.
4. **Une phrase en S6.P2** : « Ce troisième temps dit à quoi le modèle sert, ce que les deux
   vérifications ne disaient pas. » Elle remonte le seul delta que la tête supprimée de S6.P3
   portait réellement, et elle explicite pourquoi la troisième phase de Pesqueux mérite d'être
   citée.

## Delta de chaque paragraphe, après réécriture

- lead[0] : il existe un problème là où le lecteur croyait n'avoir qu'une vérification à faire ;
  comparer un schéma à la chose ne comporte aucune règle d'arrêt. Inchangé.
- lead[1] : on peut juger l'instrument au lieu de juger la ressemblance, et le produit de cet
  instrument reçoit un nom propre. Inchangé.
- S1.P1 : l'instrument a un nom, un contenu tenant en une ligne, et il n'est ni un appareil de
  mesure ni le modèle lui-même.
- S1.P2 : la liste est close parce qu'elle a été décidée, et ce qui sort de l'appareil a des
  caractéristiques qui ne dépendent que de lui.
- S2.P1 : il y a deux vérifications et non une ; la première porte sur l'instrument ; ce
  qu'« isomorphe » veut dire ici.
- S2.P2 : la raison pour laquelle cette vérification aboutit, dans les mots de l'auteur, avec
  l'opération (balayer une par une) et la bijection.
- S2.P3 : une opération qui a une fin peut être déclarée terminée, et elle n'apprend rien sur
  l'hôpital.
- S2.P4 : la répartition des deux exigences est l'inverse de celle qu'on attendrait.
- S3.P1 : ce que « demander moins » veut dire mécaniquement, et l'attente que le plus lâche
  devrait être le plus facile.
- S3.P2 : l'attente est démentie, avec la raison que l'auteur donne entre parenthèses.
- S3.P3 : l'obstacle est de principe et non pratique ; la boucle avec lead[0] se ferme.
- S4.P1 : la conséquence tirée par l'auteur, et ce que le double « toutes » veut dire.
- S4.P2 : à quoi ressemblent concrètement deux modèles concurrents qui passent tous deux les deux
  vérifications, et pourquoi ils n'ont presque aucune case commune.
- S4.P3 : ce n'est pas un permis, et la condition est continue, non acquise au départ.
- S4.P4 : la contrepartie est l'explicitation publique, et ce qui remplace le critère de
  ressemblance, ce sont les objectifs du modélisateur.
- S5.P1 : l'auteur a refusé un mot existant, contre quel ouvrage, avec quelle réserve exacte
  (« apparemment ») et à quelle date.
- S5.P2 : le second refus distingue analyser et concevoir, et l'étiquette aurait ramené ce que
  l'opération quitte.
- S6.P1 : fait de réception, le nom n'a pas pris chez deux auteurs qui reviennent sur ce travail.
- S6.P2 : la procédure a circulé au mot près, augmentée d'un troisième temps qui dit à quoi le
  modèle sert.
- S6.P3 : le même document emploie ailleurs les deux termes en sens inverse, donc le lecteur a de
  quoi vérifier lui-même ; et le mot n'a pas disparu, un article de 2006 le reprend sous son nom
  et reste à lire.

Aucun paragraphe sans delta. Aucune paire consécutive de delta identique. Aucune section dont le
rôle principal soit de répéter une section antérieure.

## `limits`

Les quatre paragraphes existants sont conservés : chacun nomme une source, son état d'accès et
l'affirmation qu'il interdit, ce que `PROTOCOLE.md` §5 exige. Deux frontières nouvelles, découvertes
en écrivant, y sont inscrites :

- `limits[3]` reçoit une seconde phrase : l'absence du mot vaut pour une interrogation exacte de
  HAL, sur ce dépôt et sur cette chaîne, non sur la littérature francophone, et le texte lecteur
  ne doit pas la généraliser. C'est la contradiction que l'audit signalait entre `notes[5]` et
  `notes[6]` ; elle est maintenant tranchée du bon côté, et écrite pour l'agent suivant.
- `limits[4]`, nouveau, nomme le claim le plus exposé du texte : la glose de l'homomorphie en
  S3.P1 s'appuie sur la seule « correspondance bijective » réservée à l'isomorphie et sur le
  caractère plus lâche de la seconde exigence. Les définitions formelles sont p. 76-77, où renvoie
  l'index du volume (`review.notes`, LOCALISATION), et aucune source disponible ici n'en donne le
  libellé. Aucun libellé n'y est cité : le contenu de ces pages ne vit que dans le dossier archivé
  et n'entre nulle part.

`limits` n'est remonté nulle part comme bloc visible ; le texte lecteur est `lead` + `sections`.

## Contrôles

- Volume : texte lecteur **1 309 mots avant, 1 490 après** (lead 171, sections 1 319), dans la
  fourchette 1 300-1 700 de `PROTOCOLE.md` §5. `limits` passe de 206 à 321 mots, champ interne.
- Sections : 6, titres inchangés. Paragraphes : 2 / 4 / 3 / 4 / 2 / 3.
- Aucun tiret cadratin, aucun balisage, guillemets français avec espaces fines insécables,
  apostrophes typographiques.
- Citations : toutes verbatim dans `quotation.text`, `notes` ou `review.notes` de
  `corpus/validated/systemographie.json`. Le contrôle mécanique ne signale aucune citation
  suspecte.
- `npm run corpus:deepen -- --check --only=systemographie` : **PASS**
  (« 1 approfondissement(s) contrôlé(s), 1811 mots. Rien projeté. »), sans avertissement.

## Suite

Le fichier a changé, donc le SHA a changé : le fact-check antérieur, s'il existait, est invalidé
et l'orchestrateur doit recommencer à `PREPARE`. Je ne rends ni `ACCEPT` ni `FACTCHECK_PASS`.

Deux points à savoir pour le gate : la glose de l'homomorphie en S3.P1 reste le passage le plus
exposé (`limits[4]`), et le cas hypothétique de S4.P2 n'affirme aucun fait, ce que son
« Imaginons » initial rend explicite. Si le dossier `corpus/dossiers/systemographie.json` était un
jour repris sous `corpus/evidence/systemographie/`, S3.P1 gagnerait un appui direct et `limits`
devrait accueillir la figure 3.1 non lue et l'absence de balayage anglophone.
