# Cartographie — `measurement-theory`

Scouting réalisé le 17 août 2026. Domaine ouvert le même jour dans `corpus/perimeter.md`,
sans liste d'auteurs fournie : les candidats ci-dessous sortent d'un balayage par
littératures (effets en retour de la mesure, mesure de la performance publique/santé,
sociologie de la quantification, théorie de la mesure, audit/évaluation/reddition de
comptes), en français et en anglais en parallèle, et non d'une liste écrite de mémoire.

## Note méthodologique — outils effectivement utilisés

Le serveur MCP `documentary` (`search_literature`, `search_francophone`, `verify_reference`,
`zotero_search`) **n'était pas exposé dans la liste d'outils de cette session** malgré la
consigne de l'agent. J'ai donc balayé les mêmes strates par accès direct :

- **Crossref** (`api.crossref.org`) — fonctionnel tout du long, utilisé pour identifier DOI,
  auteurs, titres exacts, revues.
- **HAL** (`api.archives-ouvertes.fr`) — fonctionnel tout du long, y compris le champ
  `fileMain_s` qui signale un PDF auto-archivé et permet de vérifier l'accessibilité réelle,
  pas seulement la présence d'une notice.
- **OpenAlex** — **en échec sur toute la session** : le relais du proxy renvoie
  `"Rate limit exceeded" / "Insufficient budget", dailyRemainingUsd: 0`, quel que soit
  l'endpoint. Aucune requête OpenAlex n'a abouti. C'est un échec, pas une absence de
  littérature — à refaire dès que le budget se réinitialise (minuit UTC selon le message
  d'erreur).
- **Semantic Scholar API** — **429 systématique** sur toutes les requêtes tentées (6/6),
  y compris après un délai. Même remarque : échec de la base, pas signal sur le champ.
- **Unpaywall API** — fonctionnel, utilisé pour trancher l'accessibilité réelle (`is_oa`,
  `best_oa_location`) plutôt que de la présumer depuis un DOI qui résout.
- **Internet Archive** (`advancedsearch.php` + têtes HTTP sur les fichiers) — fonctionnel,
  utilisé pour les ouvrages (Power, Porter, Goodhart, Strathern-mirror).
- **WebSearch / WebFetch** — utilisés uniquement pour détecter des dépôts institutionnels
  ou des miroirs, jamais enregistrés comme source ; chaque URL retenue a été retestée par
  une requête HTTP directe (HEAD ou téléchargement partiel) pour confirmer qu'elle renvoie
  bien un PDF exploitable et pas une page de blocage.

Chaque candidat ci-dessous porte la trace de la vérification effectuée (code HTTP,
`content-type`, taille, nom de fichier serveur quand il est significatif) plutôt qu'une
simple affirmation d'accessibilité.

---

## Candidats — du plus solide au plus fragile (accessibilité de la source primaire)

### 1

```
CANDIDAT        : Théorie de base de la mesure / Basic Measurement Theory
AUTEUR(S)       : Patrick Suppes & Joseph L. Zinnes — coécrit, à parts égales sur la page de
                  titre
PÉRIMÈTRE       : dedans — porte directement sur ce qu'une échelle autorise à faire de ses
                  nombres (théorie représentationnelle de la mesure), cœur du test d'entrée
SOURCE PRIMAIRE : Suppes, P. & Zinnes, J. L. (1963). « Basic Measurement Theory ». In
                  R. D. Luce, R. R. Bush & E. Galanter (dir.), Handbook of Mathematical
                  Psychology, vol. I, New York, Wiley, p. 1-76.
SECONDAIRE      : Luce, R. D. (1979). « Suppes' Contributions to the Theory of
                  Measurement ». In Patrick Suppes, Synthese Library, Springer.
                  DOI 10.1007/978-94-009-9397-6_3 (accessibilité non vérifiée en texte
                  intégral).
FRANCOPHONE     : cherchée sur HAL (« Suppes mesure », « théorie représentationnelle de la
                  mesure »), rien trouvé — le texte fondateur n'a pas de discussion
                  francophone substantielle identifiée à ce stade.
SIGNAL          : texte technique (axiomatique), très cité en psychométrie et en philosophie
                  de la mesure, quasiment jamais mobilisé tel quel hors de ces champs — la
                  vulgarisation qui en circule (typologie nominale/ordinale/intervalle/
                  rapport) passe presque toujours par Stevens (1946, candidat suivant) et
                  non par ce texte-ci.
ACCESSIBILITÉ   : texte intégral — PDF confirmé à deux adresses institutionnelles
                  indépendantes : Stanford Suppes Corpus
                  (suppescorpus.stanford.edu/.../basic_measurement_theory_43.pdf, HTTP 200,
                  1,68 Mo, content-type application/pdf) et Stanford CSLI Technical Reports
                  (web.stanford.edu/group/csli-suppes/techreports/IMSSS_45.pdf, HTTP 200,
                  3,37 Mo). Les deux sont hébergés par Stanford lui-même, pas des miroirs
                  tiers.
CITABLE         : passage court probable dans les premières pages (définition d'une échelle
                  comme homomorphisme), en anglais, aucune traduction publiée identifiée —
                  à confirmer par lecture directe.
```

### 2

```
CANDIDAT        : Théorie des échelles de mesure / On the Theory of Scales of Measurement
AUTEUR(S)       : S. S. Stevens — seul auteur
PÉRIMÈTRE       : dedans — fonde la distinction nominale/ordinale/intervalle/rapport que
                  toute discussion ultérieure sur « ce qu'un indicateur autorise à faire de
                  ses nombres » présuppose, explicitement ou non
SOURCE PRIMAIRE : Stevens, S. S. (1946). « On the Theory of Scales of Measurement ».
                  Science, 103(2684), 677-680. DOI 10.1126/science.103.2684.677.
SECONDAIRE      : Michell, J. (1986). « Measurement scales and statistics: A clash of
                  paradigms ». Psychological Bulletin, 100(3), 398-407 — repérée par
                  recherche web, DOI non encore vérifié par Crossref à ce stade.
FRANCOPHONE     : cherchée sur HAL (« échelles de mesure Stevens », « niveaux de mesure »),
                  rien de substantiel trouvé — la réception francophone directe de ce texte
                  précis n'est pas repérée ; elle passe surtout par la psychométrie et la
                  méthodologie des sciences sociales sans citer Stevens nommément dans les
                  résultats obtenus.
SIGNAL          : la typologie des quatre échelles est devenue un lieu commun enseigné sans
                  qu'on remonte au texte de 1946 ; plusieurs méthodologistes (dont Michell,
                  cité ci-dessus) la contestent comme fondement statistique légitime — donc
                  reprise massive, mais aussi discussion critique documentée, pas un
                  consensus silencieux.
ACCESSIBILITÉ   : texte intégral — PDF confirmé (HTTP 200, content-type application/pdf,
                  905 Ko) hébergé par une page de cours à UC Merced ; second miroir
                  identifié à UCLA (pages.gseis.ucla.edu). Ce sont des pages d'enseignement,
                  pas l'éditeur (Science/AAAS, payant) : à noter pour le lecteur suivant,
                  le fichier lui-même n'a pas pu être ouvert (outils PDF absents de
                  l'environnement), seule la résolution HTTP a été vérifiée.
CITABLE         : très probable — le texte est court (4 pages) et sa phrase d'ouverture sur
                  la définition de la mesure est réputée citable ; à confirmer par lecture
                  directe, en anglais, sans traduction publiée identifiée.
```

### 3

```
CANDIDAT        : La sociologie de la quantification (statistique publique) / La politique
                  des grands nombres — courant, pas un texte unique
AUTEUR(S)       : Alain Desrosières — seul auteur pour les textes retenus ci-dessous ;
                  attention, son ouvrage le plus cité, « La politique des grands nombres.
                  Histoire de la raison statistique » (La Découverte, 1993), n'a pas été
                  retrouvé en texte intégral ouvrable (voir ACCESSIBILITÉ) — le candidat
                  s'appuie donc sur ses articles courts, pas sur cet ouvrage
PÉRIMÈTRE       : dedans — porte sur ce que la statistique publique fait au réel qu'elle
                  quantifie, exactement l'objet du domaine
SOURCE PRIMAIRE : Desrosières, A. (2003). « Les qualités des quantités ». Courrier des
                  Statistiques, 105-106, p. 51-63. HAL : hal-05515796. Neuf autres articles
                  du même auteur, tous publiés dans Courrier des Statistiques (revue de
                  l'INSEE) entre 1982 et 2004, sont auto-archivés en texte intégral sur
                  HAL/INSEE (ex. « Enquêtes versus registres administratifs », 2004,
                  hal-05494209 ; « L'État, le marché et les statistiques », 2000,
                  hal-05526366).
SECONDAIRE      : Gilles, M. (2014). « Des chiffres pour quels usages ? [...] De la
                  "politique des grands nombres" à la "politique du chiffre" ». Les
                  sciences sociales de la quantification, Springer. HAL : halshs-00982585.
FRANCOPHONE     : c'est la source elle-même — Desrosières est l'auteur de référence de la
                  sociologie française de la quantification ; un colloque entier lui a été
                  consacré en 2022 (« La politique des grands nombres... aura bientôt 30
                  ans ! », ENTPE), repéré sur HAL mais non retenu comme source (ce sont des
                  actes de colloque sur lui, pas de lui).
SIGNAL          : figure consensuelle et quasi jamais contestée dans la littérature
                  francophone repérée — aucun signal de controverse d'attribution ; le
                  risque est plutôt que ses articles courts (Courrier des Statistiques)
                  soient perçus comme mineurs par rapport à l'ouvrage de 1993, inaccessible
                  ici.
ACCESSIBILITÉ   : texte intégral confirmé pour « Les qualités des quantités » — HEAD HTTP
                  200, content-type application/pdf, 681 Ko, nom de fichier serveur
                  « CS105-106_Desrosières.pdf », hébergé directement par HAL/INSEE. L'ouvrage
                  de 1993 : métadonnées seules — aucune édition en ligne trouvée sur
                  Internet Archive (recherche par titre : 0 résultat) ni ailleurs.
CITABLE         : oui, en français, langue d'origine — un article de 12 pages destiné à un
                  lectorat de statisticiens, donc rédigé pour être lu, pas seulement cité.
```

### 4

```
CANDIDAT        : Quantification et gouvernement par les nombres — Emmanuel Didier
AUTEUR(S)       : Emmanuel Didier — seul auteur pour le texte retenu ; a coécrit
                  « Benchmarking. L'État sous pression statistique » (2013) avec Isabelle
                  Bruno (candidat séparé, source primaire de ce livre non ouvrable non plus,
                  voir plus bas)
PÉRIMÈTRE       : dedans — porte sur les effets de la quantification en gestion de crise
                  sanitaire (ce que les nombres font au gouvernement de l'épidémie, pas sur
                  l'estimation statistique elle-même)
SOURCE PRIMAIRE : Didier, E. (2024). « Numbers and emotions in the governance of the
                  Covid-19 datademic ». Social Studies of Science. DOI
                  10.1177/03063127241262457. HAL : halshs-04859285.
SECONDAIRE      : Didier, E. (2018). « Globalization of Quantitative Policing: Between
                  Management and Statactivism ». Annual Review of Sociology, 44(1),
                  515-534. DOI 10.1146/annurev-soc-060116-053308 — repéré sur HAL
                  (hal-04072875) mais sans fichier auto-archivé (métadonnées seules pour
                  celui-ci).
FRANCOPHONE     : l'auteur écrit ici en anglais (revue anglophone) ; son versant francophone
                  passe par « Statactivisme » (2014, codirigé avec Bruno et Prévieux),
                  repéré sur HAL en notice seule, sans texte intégral.
SIGNAL          : Didier est associé au courant du « statactivisme » (l'usage militant des
                  statistiques contre le pouvoir qui les produit) — un positionnement
                  engagé, à signaler au lecteur plutôt qu'à neutraliser.
ACCESSIBILITÉ   : texte intégral confirmé — HEAD HTTP 200, content-type application/pdf,
                  1,12 Mo, nom de fichier serveur « Didier--penultimateED.pdf » (version
                  pénultième, donc proche du texte publié mais pas la mise en page finale de
                  l'éditeur — à signaler), hébergé par HAL (halshs-04859285).
CITABLE         : probablement, en anglais — article récent, écriture journal, pas de
                  traduction publiée identifiée.
```

### 5

```
CANDIDAT        : De l'évaluation des politiques publiques à la « performance totale »
AUTEUR(S)       : Florence Jany-Catrice — seule auteure
PÉRIMÈTRE       : dedans — porte explicitement sur le glissement de l'évaluation vers un
                  chiffrage de la performance, et sur ce que ce chiffrage fait à l'action
                  publique évaluée
SOURCE PRIMAIRE : Jany-Catrice, F. (2013). « De l'évaluation des politiques publiques à la
                  "performance totale" ». Économie et institutions, 18-19. DOI
                  10.4000/ei.485.
SECONDAIRE      : Kirat, T. (2013). Compte rendu de « La performance totale : nouvel esprit
                  du capitalisme ? ». Travail et Emploi, 3(135). HAL : hal-01520543
                  (compte rendu académique de l'ouvrage complémentaire de la même auteure).
FRANCOPHONE     : c'est la source elle-même — revue française en accès ouvert
                  (OpenEdition/Économie et institutions).
SIGNAL          : l'ouvrage complémentaire de la même auteure, « La performance totale :
                  nouvel esprit du capitalisme ? » (2012, Presses du Septentrion), est
                  largement recensé (au moins trois comptes rendus repérés sur HAL) mais son
                  texte intégral n'a pas été retrouvé en ligne — le candidat s'appuie donc
                  sur l'article, pas sur le livre.
ACCESSIBILITÉ   : texte intégral confirmé — page OpenEdition Journals consultée
                  directement, citation vérifiée mot pour mot dans l'introduction :
                  « L'article défend la thèse suivante : l'évaluation des politiques
                  publiques s'aménage de plus en plus en une succession de dispositifs
                  concrets visant, dans les faits, à mesurer les performances des services
                  publics. » Plateforme en accès ouvert, pas de restriction constatée.
CITABLE         : oui, en français, langue d'origine, citation déjà localisée en
                  introduction.
```

### 6

```
CANDIDAT        : Gouvernement par les chiffres et données probantes / benchmarking en
                  éducation
AUTEUR(S)       : Isabelle Bruno — seule auteure pour le texte retenu ; coauteure avec
                  Emmanuel Didier de « Benchmarking. L'État sous pression statistique »
                  (2013), texte de référence du courant mais non ouvrable (voir SIGNAL)
PÉRIMÈTRE       : dedans — porte sur ce que le pilotage par indicateurs standardisés
                  (tests, palmarès) fait aux systèmes éducatifs qu'il compare
SOURCE PRIMAIRE : Bruno, I. (2014). « "Des faits, des faits, des faits!" À propos du
                  gouvernement par les chiffres et autres données probantes (dans
                  l'éducation et ailleurs) ». Revista Lusófona de Educação, 28, p. 25-42.
SECONDAIRE      : Bruno, I. (2013). « Le Malcolm Baldrige National Quality Award : des
                  "gourous" aux "missionnaires" de la qualité ». Sociétés contemporaines,
                  89(1), 47-71. DOI 10.3917/soco.089.0047 — repéré sur HAL
                  (hal-03179972), accessibilité en texte intégral non vérifiée (Cairn,
                  probablement payant).
FRANCOPHONE     : c'est la source elle-même — auteure française, revue lusophone en accès
                  ouvert (choix éditorial notable : la revue de référence de ce texte n'est
                  ni française ni anglophone).
SIGNAL          : le livre « Benchmarking » (2013, avec Didier) est très recensé (au moins
                  quatre comptes rendus académiques repérés sur HAL — Raisons politiques,
                  Sociologie, La Vie des idées, Réseaux) mais aucun de ces comptes rendus
                  n'est le texte lui-même, et aucune édition en ligne du livre n'a été
                  trouvée. Le candidat retenu ici est donc l'article isolé, plus étroit que
                  le livre mais réellement ouvrable.
ACCESSIBILITÉ   : texte intégral confirmé — HEAD HTTP 200, content-type application/pdf,
                  92,7 Ko, hébergé par Redalyc (base de revues latino-américaines/ibériques
                  en accès ouvert), pas de restriction constatée.
CITABLE         : oui — l'article s'ouvre sur un extrait des « Temps difficiles » de Dickens
                  (1854) transposé à l'évaluation contemporaine, un passage probablement
                  citable ; en français, langue d'origine.
```

### 7

```
CANDIDAT        : Loi de Campbell (Campbell's Law) — la mesure sociale se corrompt à mesure
                  qu'elle pèse sur la décision
AUTEUR(S)       : Donald T. Campbell — seul auteur
PÉRIMÈTRE       : dedans — énonce directement le mécanisme central du domaine : plus un
                  indicateur pèse sur une décision, plus il devient sujet à corruption et
                  distord ce qu'il est censé surveiller
SOURCE PRIMAIRE : Campbell, D. T. (1979). « Assessing the Impact of Planned Social Change ».
                  Evaluation and Program Planning, 2(1), 67-90. DOI
                  10.1016/0149-7189(79)90048-x. Republié en 2011 : Journal of
                  MultiDisciplinary Evaluation, 7(15). DOI 10.56645/jmde.v7i15.297.
SECONDAIRE      : à chercher plus avant — aucune synthèse académique dédiée spécifiquement à
                  ce texte n'a été isolée dans le temps disponible (beaucoup de citations en
                  passant, peu de traitement dédié repéré).
FRANCOPHONE     : cherchée sur HAL (« loi de Campbell », « Donald Campbell évaluation »),
                  rien de substantiel trouvé — la réception francophone directe de ce texte
                  précis n'est pas repérée.
SIGNAL          : le nom « Campbell's Law » circule très largement dans la littérature
                  grise (blogs, cours de data science) souvent réduit à une phrase isolée
                  sans le contexte du texte de 1979, qui porte plus largement sur
                  l'évaluation des politiques sociales — signal de vulgarisation à
                  distinguer du texte source, plus long et plus nuancé.
ACCESSIBILITÉ   : texte intégral confirmé — republication en accès ouvert via le Journal of
                  MultiDisciplinary Evaluation : lien de téléchargement direct trouvé et
                  résolu (HTTP 200, content-type application/pdf, en-tête
                  content-disposition confirmant le nom du fichier). L'édition originale de
                  1979 (Evaluation and Program Planning, Elsevier) est payante (confirmé via
                  Unpaywall : `is_oa: false`) — c'est la republication de 2011, revue par
                  l'auteur du champ (evaluation studies), qui rend le texte ouvrable, pas
                  l'originale.
CITABLE         : oui, très probablement — la phrase qui donne son nom à la « loi » est
                  courte et largement citée ; en anglais, aucune traduction publiée
                  identifiée.
```

### 8

```
CANDIDAT        : Classements et réactivité (Rankings and Reactivity)
AUTEUR(S)       : Wendy Nelson Espeland & Michael Sauder — coécrit
PÉRIMÈTRE       : dedans — porte sur la manière dont un classement public (ex. classements
                  des facultés de droit américaines) transforme le comportement de ce qu'il
                  classe, cœur du test d'entrée
SOURCE PRIMAIRE : Espeland, W. N. & Sauder, M. (2007). « Rankings and Reactivity: How
                  Public Measures Recreate Social Worlds ». American Journal of Sociology,
                  113(1), 1-40. DOI 10.1086/517897.
SECONDAIRE      : Ringel, L., Espeland, W., Sauder, M. & Werron, T. (dir., 2021). « Worlds
                  of Rankings ». Research in the Sociology of Organizations, vol. 74. DOI
                  10.1108/S0733-558X20210000074026 — recueil académique postérieur, situe
                  le texte de 2007 dans le champ plus large des classement studies.
FRANCOPHONE     : cherchée sur HAL, rien trouvé directement sur ce texte précis ; la
                  réception francophone des classements (ex. classement de Shanghai) existe
                  mais n'a pas été reliée à cet article précis dans le temps disponible —
                  angle mort à noter.
SIGNAL          : très fréquemment cité comme texte fondateur des « rankings studies » ;
                  aucun signal de contestation d'attribution repéré, les deux auteurs sont
                  systématiquement cités ensemble.
ACCESSIBILITÉ   : texte intégral confirmé — dépôt institutionnel de l'Australian National
                  University (openresearch-repository.anu.edu.au), redirection suivie
                  jusqu'au fichier final : HTTP 200, content-type application/pdf,
                  content-disposition confirmant le nom de fichier
                  « 01_Espeland_Rankings_and_Reactivity_How_2007.pdf ». Confirmé également
                  en accès ouvert par Unpaywall (`is_oa: true`, host: repository).
CITABLE         : oui, en anglais, aucune traduction publiée identifiée — article long
                  (40 pages), probablement plusieurs passages courts et autonomes
                  disponibles.
```

### 9

```
CANDIDAT        : « Quand la mesure devient la cible » — la reformulation strathernienne de
                  l'audit (souvent confondue avec la loi de Goodhart, candidat n°12)
AUTEUR(S)       : Marilyn Strathern — seule auteure. Attention à l'attribution : la formule
                  « when a measure becomes a target, it ceases to be a good measure » lui
                  est largement attribuée dans la littérature secondaire comme une
                  reformulation ou généralisation de la loi de Goodhart (économie
                  monétaire, 1975) appliquée à l'audit universitaire — pas une paternité
                  indépendante, mais pas non plus une simple citation. Ce point précis mérite
                  vérification par lecture directe et n'a pas été tranché ici.
PÉRIMÈTRE       : dedans — porte sur l'effet de l'audit et de l'évaluation notée sur le
                  comportement du monde universitaire britannique évalué
SOURCE PRIMAIRE : Strathern, M. (1997). « 'Improving ratings': audit in the British
                  University system ». European Review, 5(3), 305-321. DOI
                  10.1002/(SICI)1234-981X(199707)5:3<305::AID-EURO184>3.0.CO;2-4. Adapté de
                  la Founders' Memorial Lecture, Girton College, Cambridge, 11 mars 1997.
SECONDAIRE      : Strathern, M. (2005, dir.). Audit Cultures: Anthropological Studies in
                  Accountability, Ethics and the Academy. Routledge. DOI
                  10.4324/9780203449721 — ouvrage collectif dirigé par la même auteure,
                  accessibilité non vérifiée.
FRANCOPHONE     : cherchée, rien trouvé directement sur ce texte ; la notion d'« audit
                  culture » circule en français mais sans réception académique francophone
                  isolée dans le temps disponible.
SIGNAL          : point d'attribution à surveiller en priorité — plusieurs sources
                  secondaires (repérées par recherche web, non enregistrées comme preuve)
                  nomment cette reformulation « la loi de Strathern », d'autres la
                  présentent comme une simple paraphrase de Goodhart. Le contrôleur devra
                  trancher lequel des deux noms porte la carte.
ACCESSIBILITÉ   : texte intégral — fichier PDF confirmé (HTTP 200, content-type
                  application/pdf, 1,21 Mo) hébergé sur Internet Archive
                  (`ImprovingRatingsAuditInTheBritishUniversitySystem`), qui semble être un
                  dépôt tiers du texte plutôt qu'un dépôt institutionnel de l'auteure ou de
                  l'éditeur (Cambridge University Press, payant selon Unpaywall :
                  `is_oa: false`) — à re-vérifier par la lecture primaire, qui doit confirmer
                  que le texte du fichier correspond page à page à l'article publié.
CITABLE         : probablement, en anglais, aucune traduction publiée identifiée.
```

### 10

```
CANDIDAT        : La société de l'audit (The Audit Society)
AUTEUR(S)       : Michael Power — seul auteur
PÉRIMÈTRE       : dedans — thèse centrale : la prolifération de l'audit ne vérifie plus
                  la qualité de ce qu'il contrôle, il la remplace comme régime de confiance
SOURCE PRIMAIRE : Power, M. (1997). The Audit Society: Rituals of Verification. Oxford,
                  Oxford University Press. Identifiant Internet Archive :
                  `auditsocietyritu0000powe`.
SECONDAIRE      : Martin, S. (1998). Compte rendu dans Evaluation, 4(4). DOI
                  10.1177/135638909800400408.
FRANCOPHONE     : cherchée, rien de substantiel trouvé directement sur ce livre en français
                  dans le temps disponible — angle mort probable étant donné l'importance du
                  thème de l'audit dans la littérature française (Hibou, Bezes) ; à
                  reprendre.
SIGNAL          : texte fondateur très cité de la littérature sur l'audit, quasiment jamais
                  contesté sur l'attribution ; l'expression « audit society » elle-même est
                  devenue un lieu commun au point de se détacher parfois du livre.
ACCESSIBILITÉ   : **nuance importante** — le livre est présent sur Internet Archive en prêt
                  numérique contrôlé (« controlled digital lending ») : c'est un texte
                  intégral réellement consultable, mais via inscription et emprunt à durée
                  limitée, pas un PDF librement téléchargeable. Existence de l'item
                  confirmée (recherche par titre + auteur, un seul résultat, univoque).
                  Aucune édition en accès ouvert sans emprunt n'a été trouvée.
CITABLE         : probablement, en anglais — à vérifier par lecture directe une fois
                  l'emprunt effectué ; aucune traduction française identifiée.
```

### 11

```
CANDIDAT        : La confiance dans les nombres (Trust in Numbers)
AUTEUR(S)       : Theodore M. Porter — seul auteur
PÉRIMÈTRE       : dedans — thèse centrale sur l'« objectivité mécanique » : la quantification
                  remplace le jugement expert quand la confiance dans les experts fait
                  défaut, ce qui éclaire directement pourquoi on quantifie et ce que cela
                  déplace
SOURCE PRIMAIRE : Porter, T. M. (1995). Trust in Numbers: The Pursuit of Objectivity in
                  Science and Public Life. Princeton, Princeton University Press.
                  Identifiant Internet Archive : `trustinnumberspu0000port` (et une seconde
                  numérisation `trustinnumberspu0000port_m0k1`). Édition augmentée en ligne
                  chez l'éditeur : DOI 10.23943/princeton/9780691208411.001.0001 (accès
                  Princeton Scholarship Online non vérifié, probablement payant).
SECONDAIRE      : à documenter plus avant — de nombreuses recensions existent, aucune
                  isolée et vérifiée dans le temps disponible.
FRANCOPHONE     : cherchée, rien trouvé — pas de traduction française identifiée, pas de
                  réception francophone isolée dans le temps disponible.
SIGNAL          : texte fondateur de l'histoire des sciences sur la quantification comme
                  substitut de la confiance interpersonnelle ; aucun signal de contestation
                  d'attribution.
ACCESSIBILITÉ   : même nuance que Power ci-dessus — deux exemplaires numérisés présents sur
                  Internet Archive en prêt numérique contrôlé, existence confirmée par
                  recherche titre + auteur. Pas de PDF librement téléchargeable trouvé ; la
                  version éditeur (Princeton Scholarship Online) est structurée en chapitres
                  DOI séparés, ce qui suggère un accès payant par chapitre plutôt qu'un
                  livre ouvert.
CITABLE         : probablement, en anglais, pas de traduction française identifiée — à
                  vérifier par lecture directe une fois l'emprunt effectué.
```

### 12

```
CANDIDAT        : Loi de Goodhart (Goodhart's Law)
AUTEUR(S)       : Charles A. E. Goodhart — attribution single-auteur pour l'idée initiale,
                  mais le **nom** « Goodhart's Law » et sa formulation la plus citée
                  circulent surtout via des reformulations tierces (Chrystal & Mizen 2001 ;
                  Strathern 1997, candidat n°9) — un cas net de terme forgé/popularisé par
                  des tiers, à documenter précisément par le lecteur primaire
PÉRIMÈTRE       : dedans — énoncé princeps du mécanisme central du domaine (« toute
                  régularité statistique observée tend à s'effondrer dès qu'on exerce une
                  pression de contrôle sur elle »)
SOURCE PRIMAIRE : Goodhart, C. A. E. (1975). « Problems of Monetary Management: The U.K.
                  Experience ». Communication, Reserve Bank of Australia, Papers in
                  Monetary Economics, vol. I. Repris dans Goodhart, C. A. E. (1984).
                  Monetary Theory and Practice: The UK Experience. Londres, Macmillan.
                  DOI du chapitre repris : 10.1007/978-1-349-17295-5_4. Identifiant Internet
                  Archive du livre de 1984 : `monetarytheorypr0000good`.
SECONDAIRE      : Chrystal, K. A. & Mizen, P. D. (2001/2003). « Goodhart's Law: Its Origins,
                  Meaning and Implications for Monetary Policy » — repéré par recherche web
                  (Semantic Scholar, CORE), DOI non confirmé par Crossref à ce stade,
                  accessibilité en texte intégral non vérifiée (une tentative CORE a expiré
                  en timeout).
FRANCOPHONE     : cherchée, rien trouvé directement — la loi de Goodhart circule en français
                  presque uniquement par transposition à la politique publique du chiffre
                  (proche du travail de Bruno & Didier, candidats déjà retenus), sans texte
                  académique francophone isolé sur Goodhart lui-même.
SIGNAL          : signal fort de vulgarisation — la formulation la plus citée sur le web
                  général (« quand une mesure devient un objectif, elle cesse d'être une
                  bonne mesure ») n'est pas dans le texte de 1975 mais dans la
                  reformulation de Strathern 1997 (candidat n°9) attribuée à Goodhart après
                  coup. C'est exactement le schéma « terme postérieur / paternité
                  disputée » que le contrôle aveugle doit trancher, et le risque principal
                  de ce candidat.
ACCESSIBILITÉ   : la publication originale de 1975 (communication à la Reserve Bank of
                  Australia) n'a pas été retrouvée numérisée. Le texte identique repris
                  dans le livre de 1984 est disponible sur Internet Archive en prêt
                  numérique contrôlé (`monetarytheorypr0000good`, existence confirmée par
                  recherche titre + auteur) — c'est donc un texte intégral réellement
                  atteignable, mais par un chemin détourné (le livre qui réimprime la
                  communication, pas la communication elle-même), et avec la même
                  restriction d'emprunt que Power et Porter ci-dessus.
CITABLE         : incertain — la phrase la plus citée n'est peut-être pas dans ce texte au
                  mot près (voir SIGNAL) ; à trancher impérativement par la lecture directe
                  avant toute rédaction de carte.
```

### 13

```
CANDIDAT        : La commensuration comme processus social (Commensuration as a Social
                  Process)
AUTEUR(S)       : Wendy Nelson Espeland & Mitchell L. Stevens — coécrit. Attention à ne pas
                  confondre Mitchell L. Stevens (sociologue, Hamilton College puis Stanford)
                  avec S. S. Stevens (candidat n°2, psychophysicien, sans lien) : même nom de
                  famille, deux auteurs distincts sur deux textes différents du corpus.
PÉRIMÈTRE       : dedans — théorise l'opération même de rendre commensurables des choses
                  hétérogènes par un nombre commun, préalable logique à toute quantification
                  évaluative
SOURCE PRIMAIRE : Espeland, W. N. & Stevens, M. L. (1998). « Commensuration as a Social
                  Process ». Annual Review of Sociology, 24, 313-343. DOI
                  10.1146/annurev.soc.24.1.313.
SECONDAIRE      : Yung, V. & Espeland, W. N. (2025). « Commensuration ». Reference Module
                  in Social Sciences. DOI 10.1016/b978-0-443-26629-4.00218-5 — entrée
                  d'encyclopédie récente, actualise le texte de 1998, accessibilité non
                  vérifiée (Elsevier, probablement payante).
FRANCOPHONE     : cherchée, rien trouvé directement sur ce texte précis.
SIGNAL          : texte très cité (les recherches web renvoient plus de 1 600 citations
                  rapportées par des agrégateurs tiers, chiffre non vérifié directement),
                  au point d'être devenu un point de passage quasi obligé de toute
                  discussion sur la quantification en sociologie — aucun signal de
                  contestation d'attribution.
ACCESSIBILITÉ   : **motif de fragilité principal** — Unpaywall confirme `is_oa: false` pour
                  ce DOI ; la tentative directe sur `annualreviews.org` a renvoyé une erreur
                  HTTP 403 (accès bloqué, pas nécessairement payant mais non résolu ici) ;
                  aucun dépôt institutionnel ouvert n'a été trouvé (Northwestern, où
                  Espeland enseigne, n'héberge pas ce texte à l'URL testée — 404). Des
                  mentions de copies sur ResearchGate et Scribd existent mais n'ont pas été
                  vérifiées par requête HTTP directe faute de temps — à confirmer ou infirmer
                  en priorité avant d'aller plus loin sur ce candidat.
CITABLE         : indéterminé tant que l'accès n'est pas confirmé.
```

### 14

```
CANDIDAT        : De la folie de récompenser A en espérant B (On the Folly of Rewarding A,
                  While Hoping for B)
AUTEUR(S)       : Steven Kerr — seul auteur
PÉRIMÈTRE       : dedans (à la marge) — porte sur le décalage entre ce qu'un système
                  d'incitation mesure et récompense et ce qu'il prétend obtenir ; proche de
                  la frontière avec la sociologie des organisations (le texte parle autant
                  de systèmes de récompense que de mesure au sens strict) — à trancher par
                  lecture directe si le candidat est repris
SOURCE PRIMAIRE : Kerr, S. (1975). « On the Folly of Rewarding A, While Hoping for B ».
                  Academy of Management Journal, 18(4), 769-783. DOI 10.2307/255378.
                  Republié : Kerr, S. (1995). « An Academy Classic: On the folly of
                  rewarding A, while hoping for B ». Academy of Management Executive,
                  9(1). DOI 10.5465/ame.1995.9503133466.
SECONDAIRE      : aucune synthèse académique dédiée isolée dans le temps disponible — texte
                  très cité en passant, peu traité pour lui-même dans les résultats obtenus.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : signal d'alerte net — la littérature secondaire (Academy of Management
                  Perspectives elle-même, dans sa note de republication) rapporte que
                  l'article a d'abord été refusé pour présentation, jugé par des relecteurs
                  d'un ton inapproprié pour un public académique, et n'a été publié qu'après
                  arbitrage de l'éditeur. C'est un texte à la réception mouvementée, pas un
                  consensus tranquille.
ACCESSIBILITÉ   : **absente en texte intégral gratuit** — Unpaywall confirme `is_oa: false`
                  pour l'article original (10.2307/255378) et pour la republication de 1995
                  (10.5465/ame.1995.9503133466). Aucun dépôt institutionnel trouvé ; les
                  seules copies repérées par recherche web sont des résumés d'étudiants
                  (Cram, Bartleby, Studocu) ou des synthèses militaires (armée américaine),
                  aucune n'est le texte de l'auteur. **C'est exactement le profil qui a fait
                  échouer le couplage lâche** : si aucune voie d'accès légitime n'apparaît à
                  la lecture, ce candidat s'arrête là.
CITABLE         : indéterminé — pas de texte ouvert identifié pour vérifier.
```

### 15

```
CANDIDAT        : Comptabilité et construction de la personne gouvernable (Accounting and
                  the Construction of the Governable Person)
AUTEUR(S)       : Peter Miller & Ted O'Leary — coécrit
PÉRIMÈTRE       : dedans (à la marge) — porte sur la manière dont les techniques comptables
                  (coût standard, budget) construisent un sujet mesurable et gouvernable ;
                  proche de la frontière avec la sociologie des organisations
                  (gouvernementalité foucaldienne appliquée à l'entreprise) — à trancher par
                  lecture directe
SOURCE PRIMAIRE : Miller, P. & O'Leary, T. (1987). « Accounting and the Construction of the
                  Governable Person ». Accounting, Organizations and Society, 12(3),
                  235-265. DOI 10.1016/0361-3682(87)90039-0.
SECONDAIRE      : Boland, R. J. Jr. (1987). « Discussion of "Accounting and the
                  Construction of the Governable Person" ». Accounting, Organizations and
                  Society, 12(3). DOI 10.1016/0361-3682(87)90040-7 — commentaire
                  contemporain publié dans le même numéro, accessibilité non vérifiée.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : texte très cité dans les « accounting studies » d'inspiration
                  foucaldienne ; aucun signal de contestation d'attribution repéré.
ACCESSIBILITÉ   : **absente en texte intégral gratuit** — Unpaywall confirme `is_oa: false` ;
                  tentative sur le dépôt institutionnel LSE (Peter Miller y était
                  professeur) bloquée (HTTP 403, probable protection anti-robot, non
                  résolue dans le temps disponible — à retenter). Aucun autre dépôt trouvé.
                  Motif de fragilité identique aux deux candidats précédents.
CITABLE         : indéterminé — pas de texte ouvert identifié pour vérifier.
```

---

## Proposition de découpage thématique — 4 thèmes

Ce découpage sort des candidats ci-dessus, pas d'une grille a priori. Deux littératures que
le périmètre demandait de balayer (santé publique, économétrie de la mesure du bien-être)
n'ont produit aucun candidat accessible — voir « angles morts » — et n'ouvrent donc pas de
thème pour l'instant : un thème sans carte ne se déclare pas.

### `theorie-des-echelles-et-nombres` — Théorie de la mesure : échelles et nombres

Ce qu'une échelle de mesure autorise formellement à faire de ses nombres, indépendamment de
tout usage social. Le socle technique dont le reste du domaine se sert sans toujours le
citer.

- Suppes & Zinnes — Basic Measurement Theory (candidat 1)
- Stevens — On the Theory of Scales of Measurement (candidat 2)

### `quantification-operation-sociale` — La quantification comme opération sociale

Rendre commensurable, compter, faire tenir dans une catégorie statistique : ce que ces
opérations font au réel qu'elles saisissent, avant même la question de l'usage de
l'indicateur produit.

- Desrosières — sociologie de la quantification / statistique publique (candidat 3)
- Didier — gouvernement par les nombres, quantification sanitaire (candidat 4)
- Espeland & Stevens — Commensuration as a Social Process (candidat 13, accessibilité
  fragile)
- Porter — Trust in Numbers (candidat 11)

### `effets-retour-de-la-mesure` — Ce que la mesure fait à ce qu'elle mesure

Le cœur du périmètre : gaming, corruption de l'indicateur, réactivité du mesuré à sa propre
mesure.

- Campbell — Campbell's Law (candidat 7)
- Espeland & Sauder — Rankings and Reactivity (candidat 8)
- Strathern — 'Improving ratings' (candidat 9)
- Goodhart — Goodhart's Law (candidat 12, accessibilité fragile, attribution disputée)
- Kerr — On the Folly of Rewarding A, While Hoping for B (candidat 14, accessibilité
  absente à ce stade)

### `audit-evaluation-reddition-de-comptes` — Audit, évaluation, reddition de comptes

Les dispositifs institutionnels qui produisent et font vivre l'indicateur : audit,
évaluation des politiques publiques, benchmarking, comptabilité de gestion.

- Power — The Audit Society (candidat 10)
- Jany-Catrice — De l'évaluation des politiques publiques à la « performance totale »
  (candidat 5)
- Bruno — gouvernement par les chiffres, benchmarking (candidat 6)
- Miller & O'Leary — Accounting and the Construction of the Governable Person (candidat 15,
  accessibilité absente à ce stade)

---

## Angles morts

### Bases en échec — pas des constats de vide

- **OpenAlex** : échec systématique sur toute la session (relais proxy à budget épuisé,
  `dailyRemainingUsd: 0`). Aucune des requêtes OpenAlex prévues (recoupement des DOI,
  découverte de littérature complémentaire) n'a pu être menée. À refaire intégralement.
- **Semantic Scholar API** : 429 sur les six tentatives faites à des moments différents de
  la session. Aucun signal `openAccessPdf` n'a pu être récupéré pour aucun candidat — cette
  information, quand elle existe, aurait pu trancher l'accessibilité de plusieurs candidats
  fragiles (13, 14, 15) plus vite.
- **Serveur MCP `documentary`** (`search_literature`, `search_francophone`,
  `verify_reference`, `zotero_search`) : non exposé dans les outils disponibles pour cette
  session, malgré la consigne. Zotero en particulier n'a pas pu être consulté — la
  bibliothèque locale peut contenir des ouvrages (Desrosières 1993, Power, Porter, Supiot)
  dont l'absence de texte intégral en ligne serait comblée par une copie déjà détenue. À
  vérifier en priorité avant d'écarter les candidats marqués « métadonnées seules » ou
  « prêt numérique contrôlé ».

### Courants repérés sans candidat accessible

- **Mesure de la performance en santé** — le texte le plus évident (Donabedian, 1966,
  « Evaluating the Quality of Medical Care », modèle structure-processus-résultat de la
  qualité des soins) n'a pas de version en texte intégral gratuit repérée : Unpaywall
  confirme `is_oa: false`, et le seul lien « accès libre » trouvé sur le site du Milbank
  Quarterly renvoie en fait vers JSTOR. N'a pas été retenu comme candidat par prudence,
  plutôt que retenu par optimisme. À reprendre si un dépôt PMC ou une republication en
  accès libre apparaît.
- **Administration publique anglophone, mesure des finalités multiples de la performance**
  — Robert Behn, « Why Measure Performance? Different Purposes Require Different
  Measures » (2003, Public Administration Review). Non retenu : Unpaywall confirme
  `is_oa: false`, et le seul PDF trouvé est hébergé sur un site personnel italien non
  institutionnel (robertoformato.it) sans lien clair avec l'auteur ou son institution — pas
  une preuve d'accessibilité fiable. Aurait été un bon candidat sur le fond (typologie des
  usages de la mesure de performance).
- **La « gouvernance par les nombres » comme critique française de la quantification** —
  Alain Supiot, La gouvernance par les nombres. Cours au Collège de France (2012-2014),
  Fayard, 2015. Très recensé (au moins cinq comptes rendus académiques repérés sur HAL :
  Revue française des sciences de l'information, Archives de philosophie du droit, RTD
  Civ., Études, Nouvelle Revue du Travail) mais aucun texte intégral du cours ou du livre
  n'a été retrouvé en ligne — seulement des comptes rendus, jamais le texte lui-même. Le
  Collège de France publie pourtant certains cours en accès libre (audio/vidéo/texte) ;
  cette piste n'a pas pu être vérifiée, la page du cours testée renvoyant une erreur 404.
  À reprendre : si le cours est en ligne sur le site du Collège de France, c'est un
  candidat fort pour la couche francophone qui manque encore de représentation dans le
  thème `effets-retour-de-la-mesure`.
- **Économie des conventions et catégories statistiques** (Desrosières & Thévenot,
  Salais/Thévenot, Boltanski) — littérature identifiée comme pertinente par la lecture
  du périmètre mais aucune recherche dédiée n'a été menée dans le temps disponible ; aucun
  candidat n'en est sorti. Angle mort à combler dans un prochain passage.
- **Statistique publique et catégories socioprofessionnelles** — le travail conjoint
  Desrosières/Thévenot sur les nomenclatures (une opération de mesure au sens fort :
  classer, c'est déjà quantifier) n'a pas été cherché spécifiquement ; probable extension
  naturelle du candidat 3.

### Ce qui a été cherché sans trouver de candidat du tout

- Économétrie et mesure du bien-être / indicateurs de richesse alternatifs (PIB vert,
  indicateurs de Stiglitz-Sen-Fitoussi) — non cherché faute de temps, alors que le
  périmètre mentionne explicitement l'« économie monétaire » comme littérature à balayer.
- Psychométrie au sens large au-delà de Stevens et Suppes/Zinnes (tests d'intelligence,
  fidélité/validité) — non cherché, alors que la théorie de la mesure « proprement dite »
  s'y ancre historiquement.

### Vérification de non-doublon

Comparé aux huit fiches déjà validées en `organizational-sociology`
(`déplacement des buts`, `modèle de la poubelle`, `inertie structurelle et sélection`,
`isomorphisme institutionnel`, `organisation genrée`, `rationalité limitée`, `régulation de
contrôle et régulation autonome`, `zones d'incertitude`) : aucun chevauchement direct
constaté. Le point de vigilance le plus proche est le candidat 15 (Miller & O'Leary) et le
candidat 14 (Kerr), tous deux à la frontière avec la sociologie des organisations — signalé
explicitement dans leur champ PÉRIMÈTRE.

### Combien de candidats viennent d'une liste écrite de mémoire ?

Aucune liste n'a été fournie pour ce domaine (c'est la consigne). La liste ci-dessus est
sortie de requêtes par littérature (Crossref, HAL) et non de noms tapés a priori — à
l'exception du point de départ des requêtes elles-mêmes, qui reposait nécessairement sur
une connaissance préalable du champ pour formuler les bonnes requêtes (Campbell, Goodhart,
Stevens, Desrosières, etc. étaient les points d'entrée des recherches, pas leur résultat).
C'est une limite structurelle de la méthode, pas seulement de cette session : la
cartographie devrait être répétée avec des requêtes plus larges et moins guidées par des
noms déjà connus, en particulier pour combler les angles morts ci-dessus (santé publique,
économétrie du bien-être, économie des conventions).
