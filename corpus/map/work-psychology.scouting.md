# Cartographie — `work-psychology`

Balayage d'ouverture du 26 août 2026. Neuvième domaine instruit, premier des trois derniers
de la famille « Comprendre les humains et les organisations ».

## Note méthodologique

Le domaine hérite du legs le plus maigre du dépôt : `human-factors`, `cybernetics` et
`operations-management` se sont déclarés vides pour lui. Deux textes du canon anglophone
sont vérifiés fermés avant même ce passage (Herzberg 1959, Walker & Guest 1952 — prêt
numérique Internet Archive, collection `internetarchivebooks`, non emprunté, conformément
à la règle d'accès). Ce passage part donc d'un vrai balayage, avec deux sources
pré-identifiées et vérifiées la nuit du 26 août (rapport DTIC Hackman & Oldham, numéro
spécial du *Bulletin de psychologie* 1980), complétées ici par une extension de la souche
anglophone (Locke et al., recherche Deci et Porter/Lawler) et un sondage francophone
supplémentaire (Lahy, psychotechnique).

**Outils réellement disponibles dans cette session** : le serveur MCP `documentary`
(`search_literature`, `search_francophone`, `verify_reference`, `zotero_search`) n'apparaît
dans aucune liste d'outils exposée à cet agent — même constat que le passage
`operations-management`. Le substitut employé ici : `curl` en ligne de commande contre
`archive.org` (téléchargement direct des OCR `_djvu.txt`, requêtes structurées
`advancedsearch.php` et `metadata` en JSON, qui rendent un vrai statut d'accès
`access-restricted-item` — un near-équivalent de `verify_reference` pour Internet Archive),
`curl` contre l'endpoint page de Persée (déjà balisé par la tâche), et `WebSearch` pour
trois requêtes de repérage initial. Aucune base bibliométrique structurée (Crossref,
OpenAlex, Semantic Scholar, scite) n'a été interrogée par API : elles ne sont pas exposées
non plus.

**Budget réseau : 25 requêtes, plafond atteint.** Détail complet dans
`/tmp/claude-0/-home-user-Curiosity/050c1f52-f837-567e-8e0e-49af07c34afe/scratchpad/wp-scout-budget.md`.
Conséquence directe : **la requête ciblée due à `behavioral-economics` n'a pas pu être
exécutée** dans ce passage — voir angle mort dédié, écrit comme un manque plutôt que
maquillé.

---

## Candidats retenus, par ordre de rendement

### 1. Hackman, J. R. & Oldham, G. R. (1974). *The Job Diagnostic Survey: An Instrument for
the Diagnosis of Jobs and the Evaluation of Job Redesign Projects*. Yale University,
Technical Report No. 4, contrat ONR N00014-67A-0097-0026, projet NR 170-744.

- **Concept pressenti** : le **modèle des caractéristiques de l'emploi** — cinq dimensions
  centrales de l'emploi (variété des compétences, identité de la tâche, signification de la
  tâche, autonomie, feed-back) produisant trois états psychologiques critiques (sens perçu
  du travail, responsabilité perçue, connaissance des résultats), eux-mêmes conditionnant la
  motivation interne et la satisfaction — sous réserve de la **force du besoin de
  développement** (growth need strength) comme modérateur. Un score composite
  (« motivating potential score ») résume la théorie.
- **Auteurs** : J. Richard Hackman et Greg R. Oldham, confirmés sur la page de titre du
  document (« AUTHORS: J. Richard Hackman and Greg R. Oldham »), Department of
  Administrative Sciences, Yale University. Le champ `creator` de l'item Internet Archive
  ne portait que « Defense Technical Information Center » : **l'attribution nominative est
  donc vérifiée par le texte lui-même, pas par les seules métadonnées.**
- **Périmètre** : dedans — un état de la personne (motivation interne, satisfaction) rapporté
  aux propriétés objectives de l'emploi, exactement le test d'entrée du domaine et sa
  frontière la plus canonique avec `operations-management` (« la cadence, la répétitivité et
  la charge prises comme fait psychique sont ici »). **Attention à la règle « un instrument
  n'est pas un concept »** : la carte doit porter la théorie (cinq dimensions → trois états →
  résultats, modérée par le besoin de développement), jamais le Job Diagnostic Survey comme
  questionnaire.
- **Source primaire** : item Internet Archive `DTIC_AD0779828`, collection `dticarchive`. OCR
  téléchargé et vérifié : `https://archive.org/download/DTIC_AD0779828/DTIC_AD0779828_djvu.txt`,
  **HTTP 200, 152 882 octets** (taille exactement conforme à celle annoncée par la tâche).
  Aucun champ `rights`, `licenseurl` ni `possible-copyright-status` sur l'item — même
  situation que les rapports techniques déjà admis par le dépôt : **l'URL se garde, la
  réserve se porte en clair dans les notes de la fiche future.**
- **Secondaire** : ABSENTE dans ce passage (aucune requête bibliométrique structurée
  disponible ; la publication en revue de référence, Hackman & Oldham, « Motivation through
  the Design of Work », *Organizational Behavior and Human Performance*, 1976, n'a pas été
  vérifiée en accès ici — piste pour un passage ultérieur).
- **Francophone** : cherchée dans le numéro spécial du *Bulletin de psychologie* 1980 sans la
  retrouver citée nommément dans les six articles lus ; pas de traduction française vérifiée.
- **Signal** : le rapport cite lui-même des travaux antérieurs convergents (Lawler, six
  dimensions de l'emploi, ligne 6712 de l'OCR) — signe d'un champ de recherche déjà disputé
  en 1974 sur le nombre et la nature des dimensions, pas d'un concept isolé. scite non
  interrogé (couverture faible attendue sur la littérature grise de toute façon).
- **Accessibilité** : texte intégral (OCR complet, dense, sections théorie/instrument/items
  bien séparées).
- **Citable** : oui — la définition des cinq dimensions (lignes ~509-549 de l'OCR) et le
  schéma de la Figure 1 (lignes ~445-493) sont des passages courts et autonomes, en anglais.
  Aucune traduction française publiée vérifiée.

### 2. Locke, E. A., Shaw, K. N., Saari, L. M. & Latham, G. P. (1980). *Goal Setting and Task
Performance: 1969-1980*. University of Maryland, College of Business and Management,
Technical Report GS-1, contrat ONR N00014-79-C-0680, projet NR 170-890.

- **Concept pressenti** : la **théorie de la fixation d'objectifs** (goal-setting theory) —
  des objectifs spécifiques et difficiles produisent une performance supérieure à des
  objectifs vagues, faciles ou absents ; mécanismes proposés : orientation de l'attention,
  mobilisation de l'effort, persistance. C'est la revue technique qui deviendra, retravaillée,
  Locke, Shaw, Saari & Latham, *Psychological Bulletin*, 1981, puis le socle du livre de
  Locke & Latham (1990).
- **Périmètre** : dedans — un état motivationnel (l'engagement envers un but) rapporté à une
  propriété de la tâche assignée (la difficulté et la spécificité de l'objectif), donc du
  côté « motivation durable », pas du côté `decision-science` (théorie du choix) ni
  `activity-ergonomics` (régulation de l'activité en cours de tâche) : c'est un mécanisme
  motivationnel stable étudié sur 90 % des études recensées, pas une décision instantanée.
- **Source primaire** : item Internet Archive `DTIC_ADA086584`, collections `dticarchive`,
  `usgovernmentmirrors`, `government-documents`. Page de titre confirmée (auteurs, contrat,
  90 pages). OCR téléchargé : HTTP 200, **139 865 octets**,
  `https://archive.org/download/DTIC_ADA086584/DTIC_ADA086584_djvu.txt`. Aucun champ
  `rights`/`licenseurl` — même réserve que le candidat 1, à porter en clair dans la fiche.
- **Secondaire** : ABSENTE vérifiée ici (la version *Psychological Bulletin* 1981 n'a pas été
  cherchée en accès faute de budget).
- **Francophone** : cherchée en creux dans le numéro du *Bulletin de psychologie* — non
  trouvée citée dans les six articles lus.
- **Signal** : c'est explicitement une **revue de littérature** (« a review of both
  laboratory and field studies »), pas une étude isolée — la thèse est déjà, dès 1980,
  présentée comme l'un des résultats les plus robustes et reproductibles de la psychologie
  du travail. Un futur contrôle devra vérifier que la carte porte bien la thèse et pas la
  méthode de revue.
- **Accessibilité** : texte intégral (OCR complet).
- **Citable** : oui, l'abstract lui-même (page de titre) est un résumé court et autonome de
  la thèse ; en anglais ; traduction française non vérifiée.

### 3. Ghesquière-Dierickx, B. (1980). « Signification de la rémunération chez le salarié.
Recherche d'un seuil d'insatisfaction ». *Bulletin de psychologie*, tome XXXIII, n° 344,
p. 413-416.

- **Concept pressenti** : le **niveau d'aspiration salarial** comme repère implicite du
  salarié (fonction de la rémunération perçue, de l'âge, de la catégorie socio-économique,
  de l'estime de soi), organisé en trois zones (rémunération jugée « bien payée », zone de
  neutralité, zone vécue comme « exploitation ») — et la thèse que le franchissement de
  seuil, pas le niveau absolu de salaire, gouverne la réaction affective (frustration,
  absence de réaction euphorique même après une augmentation).
- **Périmètre** : dedans — exactement le cas que le périmètre nomme lui-même : « le salaire
  comme source de satisfaction ou d'insatisfaction est ici », par opposition au salaire
  comme incitation de marché (`behavioral-economics`, fermé). L'état décrit (satisfaction ou
  frustration salariale) est rapporté à une propriété de l'emploi (le niveau de
  rémunération), pas à une position de classe.
- **Source primaire** : Persée, DOI `10.3406/bupsy.1980.11728` (pattern issu de la table
  fournie par la tâche, cohérent avec le DOI confirmé de l'article Lahy ci-dessous). Page 413
  lue en OCR complet via l'endpoint page :
  `https://www.persee.fr/doc/page/bupsy_0007-4403_1980_num_33_344_11728/bupsy_0007-4403_1980_num_33_344_T1_0413_0000`,
  **HTTP 200**. Article court (4 pages), contenu substantiel dès la première page.
- **Secondaire** : ABSENTE (recherche bibliométrique structurée non disponible).
- **Francophone** : c'est la source elle-même — pas de doublon cherché.
- **Signal** : article court, un seul auteur, non retrouvé cité ailleurs dans ce passage ;
  vulgarisation ou reprise ultérieure non vérifiée. À surveiller : proximité avec la
  littérature anglophone plus connue sur l'« équité » salariale (Adams, non cherchée ici).
- **Accessibilité** : texte intégral (page unique suffit pour l'essentiel de la thèse).
- **Citable** : oui, en français, passage court et autonome (le schéma des trois zones).

### 4. Gadbois, C. (1980). « Les conditions de travail comme facteurs d'asservissement du
système des activités hors travail ». *Bulletin de psychologie*, tome XXXIII, n° 344,
p. 449-455.

- **Concept pressenti** : la thèse que les contraintes de la situation de travail (cadence,
  parcellisation, horaires alternants) produisent une **altération durable, hors du temps de
  travail**, du fonctionnement du système des activités personnelles — l'« asservissement »
  de la vie hors travail aux conditions de travail, analysé par Gadbois via un emprunt
  explicite au vocabulaire des théories des systèmes.
- **Périmètre** : dedans — un état durable de la personne (l'empiètement du travail sur le
  reste de sa vie) rapporté aux propriétés de son emploi (cadence, horaires). **Dette de
  vocabulaire à signaler, pas à instruire** : Gadbois emprunte explicitement « la notion
  d'asservissement, dans son acception la plus précise, dérivée de la théorie des systèmes »
  — exactement le cas que le périmètre anticipe (« la dette se signale dans l'attribution,
  elle ne s'instruit pas ici »).
- **Source primaire** : Persée, DOI `10.3406/bupsy.1980.11736` (pattern fourni par la tâche).
  Page 449 lue en OCR complet :
  `https://www.persee.fr/doc/page/bupsy_0007-4403_1980_num_33_344_11736/bupsy_0007-4403_1980_num_33_344_T1_0449_0000`,
  **HTTP 200**. Auteur : Charles Gadbois, chargé de recherche au CNRS, Laboratoire de
  Psychologie du Travail de l'EPHE (même laboratoire que Leplat, sans collision de concept —
  l'article de Leplat, n° 344 également, est un texte d'orientation générale sans thèse
  propre, voir plus bas).
- **Secondaire** : ABSENTE.
- **Francophone** : c'est la source elle-même.
- **Signal** : l'article cite Marx et Friedmann (1964, « oppression de la personnalité ») en
  généalogie, et son propre article de 1975 en antécédent — signe d'une thèse construite
  progressivement par le même auteur, pas d'un concept isolé d'un article.
- **Accessibilité** : texte intégral.
- **Citable** : oui, en français ; le passage définissant la proposition générale (« les
  contraintes du travail entraînent une altération... ») est court et autonome.

### 5. Lahy, J.-M. (1924). « La sélection psycho-physiologique des machinistes de la Société
des Transports en commun de la région parisienne ». *L'année psychologique*, vol. 25,
p. 106-172.

- **Concept pressenti** : la thèse fondatrice de la **psychotechnique française** — un
  déficit d'**attention diffusée** (capacité à répartir son attention sur plusieurs objets
  simultanés), mesuré par test psychométrique stable de l'individu, prédit l'implication
  dans un accident grave de conduite, indépendamment de l'ancienneté et de la réputation
  professionnelle du machiniste (cas nommé « le sujet B. », 17 ans d'ancienneté, bon
  machiniste, classé parmi les derniers au test d'attention diffusée, responsable d'un
  accident grave).
- **Périmètre** : dedans avec réserve à signaler. Le périmètre nomme explicitement « la
  sélection et l'évaluation professionnelles, y compris la psychotechnique qui est l'origine
  historique du champ en France » comme point d'entrée légitime. Mais l'objet — une capacité
  attentionnelle mesurée par test — frôle la coupure héritée de `human-factors` (« ressource
  cognitive engagée dans une tâche »). La différence tenue ici : Lahy ne décrit pas une
  ressource qui se dégrade en cours de tâche (ce serait `human-factors`, cas Mackworth), mais
  une **aptitude stable de l'individu, utilisée à des fins de sélection professionnelle** —
  un trait durable rapporté à l'aptitude à occuper un emploi, exactement le sens que le
  périmètre donne à la psychotechnique. **À trancher explicitement en contrôle, ce n'est pas
  un cas évident.**
- **Source primaire** : Persée, DOI **confirmé** `10.3406/psy.1924.6140` (lu directement dans
  la page de référence bibliographique de la notice). Page 106 (début d'article) et page 170
  (démonstration du cas « sujet B. ») lues en OCR complet via l'endpoint page, **HTTP 200**
  sur les deux requêtes. Article long (66 pages), donc largement au-delà d'une simple
  description d'instrument : il développe une démonstration empirique complète (300 sujets
  examinés après accident).
- **Secondaire** : ABSENTE dans ce passage.
- **Francophone** : c'est la source elle-même — origine du champ en France, comme prévu par
  le périmètre.
- **Signal** : Lahy signale lui-même une littérature déjà « enthousiaste » sur la
  psychotechnique en 1924 et prend ses distances avec ses excès — signe d'un champ déjà
  disputé, pas d'un concept isolé. Aucune vérification scite (hors périmètre de couverture,
  article de 1924).
- **Accessibilité** : texte intégral, deux pages lues suffisent à établir la thèse ; le reste
  de l'article (106-172) n'a pas été lu en totalité, faute de budget.
- **Citable** : oui, en français ; le passage narratif sur le « sujet B. » (page 170) est un
  exemple court, concret et autonome.

---

## Thèmes que la cartographie propose (non déclarés)

Cinq candidats, cinq objets distincts — à ne déclarer, conformément à la règle du dépôt,
qu'après contrôle aveugle et seulement si une carte est validée :

- **propriétés de l'emploi et motivation interne** (candidat 1) ;
- **fixation d'objectifs et performance** (candidat 2) ;
- **rémunération et seuil de satisfaction** (candidat 3) ;
- **conditions de travail et vie hors travail** (candidat 4) ;
- **sélection psychotechnique et aptitude professionnelle** (candidat 5), à confirmer côté
  frontière `human-factors` avant toute déclaration.

## Rencontré, relevant de domaines ouverts — signalé, pas instruit

- **Lévy-Leboyer, C. (1980). « Les systèmes socio-techniques : tendances de la recherche »**,
  *Bulletin de psychologie*, p. 439-442 (DOI `10.3406/bupsy.1980.11734`, page lue en OCR,
  HTTP 200). C'est une revue de la littérature sur les systèmes socio-techniques (Tavistock,
  etc.), exactement le cas nommé par le périmètre : « la dette se signale dans l'attribution,
  elle ne s'instruit pas ici ». Signalé à `cybernetics`/`systems-thinking` comme texte de
  vocabulaire partagé, non retenu en candidat.
- **Leplat, J. (1980). « La psychologie du travail : un aperçu »**, même numéro, p. 195-200
  (page 195 lue en OCR, HTTP 200). Texte d'orientation généraliste sur la discipline, sans
  thèse propre au sens du test d'entrée — utilisé ici pour se repérer, non comme candidat,
  conformément à ce que la tâche anticipait. Leplat porte déjà deux cartes validées dans
  `activity-ergonomics` : aucune tentative de lui en ajouter une troisième depuis ce texte.
- **Francès, R. (1980). « Prédire la satisfaction au travail »**, p. 401-408 (DOI
  `10.3406/bupsy.1980.11726`, page 401 lue en OCR, HTTP 200). Synthèse de travaux tiers
  (Porter, Kendall, Hulin) sur les déterminants de la satisfaction selon le niveau
  hiérarchique et le contexte communal — pas une thèse propre à Francès. Non retenu en
  candidat faute d'attribution à un auteur premier dont le texte primaire serait atteint ;
  piste secondaire utile si un futur passage instruit Porter (besoins et satisfaction selon
  la position hiérarchique) ou Hulin/Kendall (niveau d'adaptation communal) avec un accès
  vérifié à leur texte propre.
- **Grisez, J. (1980). « Emploi et comportements de mobilité »**, p. 417-420 (DOI
  `10.3406/bupsy.1980.11729`, page 417 lue en OCR, HTTP 200). L'auteur lui-même met en garde
  contre le « psychologisme » et déplace l'explication vers les structures du marché du
  travail (segmentation, filières) plutôt que vers un trait individuel. **Consigné en angle
  mort vers `sociology-of-work`** (état rapporté à la position sur le marché du travail,
  pas aux propriétés de l'emploi occupé), conformément à la frontière écrite par le
  périmètre.
- **Savall, H. (1980). « La dimension psychologique de l'analyse socio-économique des
  conditions de vie au travail »**, p. 443-448 (DOI `10.3406/bupsy.1980.11735`, page 443 lue
  en OCR, HTTP 200, contenu clairsemé sur cette page). Présente une méthode d'analyse
  socio-économique des organisations (le « bilan socio-économique » de l'ISEOR) —
  l'objet apparent est une méthode de diagnostic organisationnel, pas un état de la personne
  pris pour lui-même. **Consigné en angle mort vers `organizational-sociology`**, sans
  lecture suffisante pour trancher fermement ; à revérifier avec la suite de l'article si un
  passage futur y revient.

## Angles morts — dette envers `sociology-of-work` et `behavioral-economics`

### `sociology-of-work` (fermé, requête ciblée exécutée)

Recherche structurée sur `archive.org` (`advancedsearch.php`, pas seulement du web
généraliste) : `title:("principles of scientific management") AND creator:(Taylor)`.
**Résultat exploitable, à la différence du legs laissé par `operations-management`** qui
n'avait pas vérifié l'accès de ce même texte : l'item `cu31924085713331` (« The Principles
of Scientific Management », Frederick Winslow Taylor, tirage 1919, exemplaire Cornell
University Library) est en collections `cornell` et `americana` — **`access-restricted-item`
absent, aucune restriction de prêt constatée**, à la différence des ouvrages
`internetarchivebooks` rencontrés ailleurs dans ce passage. Métadonnées vérifiées par
`https://archive.org/metadata/cu31924085713331`. **Ce texte est donc un candidat
d'ouverture pour `sociology-of-work` avec accès vérifié positif**, contrairement au
Herzberg et au Walker & Guest de ce domaine-ci — je le consigne ici, en angle mort côté
`work-psychology` (le domaine est fermé, il ne s'instruit pas), mais avec l'identifiant
exact pour que le passage d'ouverture de `sociology-of-work` n'ait pas à le rechercher. Le
pendant critique attendu (Braverman, *Labor and Monopoly Capital*, 1974) **n'a pas été
recherché** dans ce passage, faute de budget — à faire au prochain passage.

### `behavioral-economics` (fermé, requête ciblée NON exécutée)

**Le plafond de 25 requêtes réseau a été atteint avant qu'une requête dédiée à ce domaine
n'ait pu être lancée.** C'est un manque, écrit comme tel plutôt que comblé par un titre de
mémoire non vérifié : aucun candidat, aucun identifiant, aucun statut d'accès ne peut être
rapporté ici pour `behavioral-economics`. Le prochain passage qui doit cette dette devra
repartir de zéro sur ce domaine précis — ce n'est pas un vide vérifié, c'est un vide de
méthode (budget), au sens où `operations-management` distinguait déjà les deux catégories
pour ses propres legs.

## Angles morts — accès négatif ou non exploité

- **Herzberg, F. (1959). *The Motivation to Work***, item `motivationtowork0000unse` —
  **vérifié fermé avant ce passage** (prêt numérique `internetarchivebooks`), repris ici sans
  retentative, conformément à la consigne.
- **Walker, C. R. & Guest, R. H. (1952). *The Man on the Assembly Line***, item
  `manonassemblylin0000unse` — même statut, même consigne, non retenté.
- **Locke, E. A. (1990). *A Theory of Goal Setting and Task Performance*** (le livre, pas le
  rapport technique), item `theoryofgoalsett0000lock` — vérifié cette nuit :
  `access-restricted-item: true`, collections `internetarchivebooks`, `inlibrary`,
  `printdisabled`. **Prêt numérique, non emprunté.** Le rapport technique de 1980 (candidat 2
  ci-dessus) est la voie qui a effectivement rendu le texte ; ce livre reste fermé.
- **Deci, E. L. (1971). « Effects of Externally Mediated Rewards on Intrinsic
  Motivation »**, *Journal of Personality and Social Psychology*. Recherche `WebSearch`
  (repérage seulement) : indexé ERIC (`ej035993`, notice sans texte intégral déposé) et
  Semantic Scholar. Recherche structurée `archive.org` `collection:(dticarchive) AND
  (Deci) AND (reward)` : **0 résultat**. Ni Deci ni son financement (NSF plutôt qu'ONR)
  n'apparaissent dans le fonds `dticarchive` qui a servi pour Hackman/Oldham et Locke.
  **Statut : repéré, accès primaire non vérifié positivement — pas retenu en candidat.**
- **Porter, L. W. & Lawler, E. E.** — recherche structurée `archive.org`
  `collection:(dticarchive) AND (Porter Lawler)` : un seul résultat, `DTIC_ADA065892`
  (« An Integration of Contemporary Theories of Work Motivation: A Proposed Model and
  Partial Test with Implications for Job Design », 1978, collection incluant
  `theses-and-dissertations`). **`access-restricted-item` absent** (accès a priori ouvert),
  mais **contenu non lu** faute de budget — ni le titre exact ni l'auteur individuel ni le
  rattachement effectif à Porter & Lawler n'ont été vérifiés au-delà des métadonnées. **Non
  retenu en candidat** : c'est précisément le cas que le protocole interdit de promouvoir
  sur l'espoir. Piste à ouvrir en premier au prochain passage, identifiant en main.
- **ERIC_ED099580** (doublon annoncé de Hackman & Oldham) — non revérifié dans ce passage,
  faute de budget ; le candidat 1 est déjà établi par le mirror `dticarchive`, donc cette
  vérification n'était pas nécessaire à l'entrée du candidat.

## Vérifié fermé vs. non cherché — récapitulatif

**Vérifié fermé (accès négatif constaté) :**
- Herzberg 1959, Walker & Guest 1952 (légués, prêt numérique).
- Locke 1990 (livre) — prêt numérique confirmé cette nuit.
- Deci 1971 — absent du fonds `dticarchive`, pas d'accès positif trouvé (mais recherche
  limitée à une base ; pas un vide de méthode exhaustif).

**Repéré, accès non vérifié / contenu non lu (ni candidat ni rejet) :**
- Porter & Lawler via `DTIC_ADA065892`.
- Braverman 1974 (non cherché du tout, faute de budget).
- Hackman & Oldham, version revue (*OBHP* 1976) et ERIC_ED099580.

**Non cherché, faute de budget :**
- `behavioral-economics` dans son ensemble (voir angle mort dédié).
- Le reste de l'article Lahy (pages 107-169, 171-172) au-delà des deux pages lues.
- Cairn, HAL, OpenEdition Books, theses.fr — aucune requête n'y a été portée dans ce
  passage ; tout le francophone instruit ici vient de Persée (*Bulletin de psychologie* et
  *L'année psychologique*).
- La suite du numéro du *Bulletin de psychologie* au-delà des sept articles listés par la
  tâche (le numéro complet n'a pas été parcouru).

## Vérification de non-doublon

`ls corpus/validated/` exécuté en tout début de passage : **82 fiches**. Aucun des cinq
candidats retenus ne porte de slug ou d'id proche d'une fiche existante (vérification par
lecture de la liste complète des noms de fichiers, aucun outil supplémentaire nécessaire).

Points de contact conceptuels à garder en tête pour la rédaction et le contrôle futurs,
aucun n'étant un doublon avéré :

- `marge-de-manoeuvre.json` (`activity-ergonomics`) — proche par le mot « autonomie » du
  candidat 1 (Hackman & Oldham), mais objet distinct : la marge de manœuvre en ergonomie de
  l'activité porte sur ce que l'opérateur arbitre en cours de tâche, pas sur une propriété
  stable de conception de l'emploi.
- `echelles-de-mesure.json` (`measurement-theory`) — à vérifier avant rédaction de la fiche
  du candidat 3 (Ghesquière-Dierickx) : l'objet de ce candidat est le seuil psychologique
  révélé par la mesure, pas les propriétés de l'échelle elle-même, donc pas de doublon a
  priori, mais la frontière écrite par le périmètre pour ce cas précis mérite d'être relue en
  contrôle.
- Aucun autre point de contact identifié avec les 82 fiches existantes.

## Bases non appelées

- `search_literature`, `search_francophone`, `verify_reference`, `zotero_search` (MCP
  `documentary`) — non exposés dans cette session.
- Crossref, OpenAlex, Semantic Scholar, scite — non interrogés par API structurée.
- HAL, Cairn, OpenEdition Books, theses.fr — non interrogés du tout dans ce passage ; c'est
  un déséquilibre à signaler explicitement, comme `operations-management` l'avait fait pour
  sa propre couche francophone.
