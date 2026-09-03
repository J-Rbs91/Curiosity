# Cartographie — `sociology-of-work`

Balayage d'ouverture du 27 août 2026. Dixième domaine instruit, deuxième des trois derniers
de la famille « Comprendre les humains et les organisations ». Il ne reste ensuite que
`behavioral-economics`.

## Méthode et budget réseau

**Outils réellement disponibles dans cette session** : le serveur MCP `documentary` n'est pas
exposé (échec de connexion au démarrage, avant `npm ci`). Substituts employés : `curl` contre
`archive.org` (`/metadata/<id>` pour le statut d'accès réel, `advancedsearch.php` pour les
requêtes structurées, `_djvu.txt` pour l'OCR), `curl` contre l'endpoint page de Persée
(pattern vérifié : `https://www.persee.fr/doc/page/<id_article>/<id_fascicule>_T1_<page sur
4 chiffres>_0000`, distinct du pattern annoncé par la tâche mais confirmé par les cartes
`work-psychology` déjà écrites), `curl` direct contre l'API HAL
(`api.archives-ouvertes.fr/search/`), et `WebSearch`/`WebFetch` pour le repérage. Aucune base
bibliométrique structurée (Crossref, OpenAlex, Semantic Scholar, scite) interrogée par API
dans cette session — elles ne sont pas exposées non plus.

**Budget réseau : 30 requêtes au maximum, 29 consommées** (compte tenu dans
`/tmp/claude-0/-home-user-Curiosity/cab4dc4c-e2f7-5c96-89a8-7d780096e911/scratchpad/budget.txt`,
recompté ligne à ligne en fin de passage). Répartition approximative : 6 requêtes pour clore
le legs (Braverman, Taylor), 5 `WebSearch` de repérage large, 3 `WebSearch` ciblés
supplémentaires, ~12 vérifications d'accès Persée/HAL/archive.org (dont 3 tentatives, toutes
en échec 429, contre le PDF MIT DSpace de Piore), 1 requête HAL structurée. 1 requête de
marge non consommée, volontairement gardée pour ne pas dépasser le plafond en cours d'écriture.

Ce domaine s'ouvre avec un legs plus riche que son prédécesseur : un texte primaire déjà
vérifié en accès (Taylor 1919), un candidat déjà consigné ailleurs (Grisez 1980, non
réinstruit ici), un gisement francophone à moitié dépensé (*Bulletin de psychologie* n° 344),
et une recherche explicitement due (Braverman 1974) — **close dans ce passage, négativement**.

---

## Candidats retenus, par ordre de rendement

### 1. Kergoat, Danièle (1992). « Des rapports sociaux de sexe et de la division sexuelle du
travail »

- **Concept pressenti** : l'articulation entre **division sexuelle du travail** (DST) et
  **rapports sociaux de sexe** (RSS) — la DST comme forme historiquement située d'un rapport
  social plus général, contre une lecture qui les traiterait comme un seul et même continuum
  théorique. Texte de séminaire fondateur pour la sociologie française du genre au travail.
- **Auteur** : Danièle Kergoat, seule signataire (le texte s'appuie sur des séances de
  séminaire tenues avec Hélène Le Doaré, nommée en note).
- **Périmètre** : dedans — rapport social (division sexuelle, rapports sociaux de sexe), pas
  un état intérieur ni une organisation prise pour elle-même. Littérature explicitement
  nommée par le périmètre du domaine.
- **Source primaire** : *Les Cahiers du Genre*, n° 3 (1992), vol. 3, n° 1, pp. 23-26. Persée,
  id `genre_1165-3558_1992_num_3_1_879`, `DC.rights: free`. OCR vérifié à la page 23 :
  `https://www.persee.fr/doc/page/genre_1165-3558_1992_num_3_1_879/genre_1165-3558_1992_num_3_1_T1_0023_0000`,
  **HTTP 200**, texte propre et continu.
- **Secondaire** : ABSENTE dans ce passage (pas de requête bibliométrique structurée
  disponible).
- **Francophone** : c'est la source primaire elle-même.
- **Signal** : article très court (4 pages) et dense — bon candidat pour un passage citable
  autonome ; à vérifier que la définition de la DST qu'il porte n'est pas déjà instruite via
  l'ergonomie (le périmètre note que ce corpus a « déjà croisé » la question par l'ergonomie
  de l'activité, mais sans y instruire cette articulation DST/RSS précise).
- **Accessibilité** : texte intégral (OCR complet).
- **Citable** : oui, en français, passage court et autonome atteignable dès la première page.

### 2. Chapoulie, Jean-Michel (1973). « Sur l'analyse sociologique des groupes
professionnels »

- **Concept pressenti** : critique des théories fonctionnalistes de la profession (trait
  culturel), et de l'approche interactionniste symbolique, au profit d'une analyse des
  groupes professionnels par leur **rapport objectif à la structure de classe** — fonction
  sociale du groupe, appartenance de classe de ses membres, trajectoire sociale et
  professionnelle. Prend pour terrain le corps enseignant du secondaire.
- **Auteur** : Jean-Michel Chapoulie, seul signataire.
- **Périmètre** : dedans — sociologie des professions, littérature explicitement nommée par
  le périmètre.
- **Source primaire** : *Revue française de sociologie*, 1973, 14-1, pp. 86-114, DOI
  `10.2307/3320324`. Persée, id `rfsoc_0035-2969_1973_num_14_1_2179`, `DC.rights: free`. OCR
  vérifié à la page 86 :
  `https://www.persee.fr/doc/page/rfsoc_0035-2969_1973_num_14_1_2179/rfsoc_0035-2969_1973_num_14_1_T1_0086_0000`,
  **HTTP 200**, texte dense et complet dès la première page, notes de bas de page incluses.
- **Secondaire** : ABSENTE dans ce passage.
- **Francophone** : c'est la source primaire elle-même.
- **Signal** : article de 1973, prend explicitement position contre le canon anglo-américain
  de la sociologie des professions (fonctionnalisme, interactionnisme) — signale un champ
  déjà disputé, pas un concept isolé. À signaler pour la fiche : la discussion vise les
  écoles anglophones, un contrôle croisé avec Hughes/Freidson serait pertinent mais n'a pas
  été fait ici (aucun de leurs textes n'a été vérifié en accès dans ce passage).
- **Accessibilité** : texte intégral (OCR complet, 28 pages).
- **Citable** : oui, en français, passage autonome atteignable dès la première page.

### 3. Durand, Michelle (1979). « La grève : conflit structurel, système de relations
industrielles ou facteur de changement social »

- **Concept pressenti** : typologie des **trois cadres théoriques concurrents** pour analyser
  la grève — comme mouvement dans un système de négociation (*bargaining*), comme conflit
  structurel évacuant une tension, comme facteur de changement social — présentée comme choix
  conceptuel préalable à toute étude empirique. Communication au Congrès mondial de
  sociologie, Uppsala, 1978.
- **Auteur** : Michelle Durand, seule signataire.
- **Périmètre** : dedans — le conflit pris par le mécanisme (les cadres théoriques
  eux-mêmes), pas par le récit d'un conflit particulier ; correspond exactement à la mise en
  garde du périmètre contre « le récit sans mécanisme transposable ».
- **Source primaire** : *Sociologie du travail*, 21ᵉ année, n° 3 (1979), pp. 274-296. Persée,
  id `sotra_0038-0296_1979_num_21_3_1609`. OCR vérifié à la page 274 :
  `https://www.persee.fr/doc/page/sotra_0038-0296_1979_num_21_3_1609/sotra_0038-0296_1979_num_21_3_T1_0274_0000`,
  **HTTP 200**.
- **Secondaire** : ABSENTE dans ce passage.
- **Francophone** : c'est la source primaire elle-même.
- **Signal** : article-cadrage explicitement méta-théorique — c'est sa force (typologie
  transposable) et son risque (vérifier en fiche qu'il ne se réduit pas à une revue de
  littérature sans thèse propre ; une lecture complète, non faite ici, reste nécessaire).
- **Accessibilité** : texte intégral (OCR complet).
- **Citable** : oui, en français.

### 4. Grelet, Yvette & Mansuy, Michèle (2004). « De la précarité de l'emploi à celle des
trajectoires : une analyse de l'insertion en évolution »

- **Concept pressenti** : déplacement de l'analyse de la précarité, d'une lecture par
  **statut d'emploi** à une lecture par **trajectoire** — la précarité comme propriété d'un
  parcours plutôt que d'un contrat à un instant donné.
- **Auteurs** : Yvette Grelet et Michèle Mansuy (Céreq).
- **Périmètre** : incertain, à trancher en fiche — relève bien des « transformations de
  l'emploi » nommées par le périmètre, mais le texte s'appuie fortement sur l'appareil
  statistique national (enquêtes Céreq/INSEE) et le périmètre écarte explicitement « la
  statistique publique commentée sans thèse ». La thèse (déplacement statut → trajectoire)
  semble propre à l'article et pas un simple commentaire de chiffres, mais **cette lecture
  n'a pas été faite au-delà de la première page** — à vérifier avant toute rédaction.
- **Source primaire** : *Formation Emploi*, n° 85 (2004), pp. 87 sq. Persée, id
  `forem_0759-6340_2004_num_85_1_1655`, `DC.rights: free`. OCR vérifié à la page 87 :
  `https://www.persee.fr/doc/page/forem_0759-6340_2004_num_85_1_1655/forem_0759-6340_2004_num_85_1_T1_0087_0000`,
  **HTTP 200**, mais **couche OCR bruitée sur le titre** (« l'ernpltf' ** insert^11 ») — le
  corps de texte reste lisible, la réserve porte sur le titre seulement.
- **Secondaire** : ABSENTE dans ce passage.
- **Francophone** : c'est la source primaire elle-même.
- **Signal** : candidat le plus fragile des quatre retenus — frontière hors-périmètre à
  trancher explicitement avant toute instruction, pas seulement à signaler.
- **Accessibilité** : texte intégral (OCR complet, page 87 lisible malgré le titre bruité).
- **Citable** : à confirmer — dépend de la lecture complète, non faite ici.

### 5 (piste non close). Dassa, Sami (1983). « Conflit ou négociation ? Les grèves, leurs
résultats et la taille des entreprises »

- **Concept pressenti** : effet de la taille de l'entreprise sur le choix entre conflit ouvert
  et négociation, et sur les résultats obtenus par la grève — même littérature que Durand
  ci-dessus, angle empirique complémentaire.
- **Source primaire présumée** : *Sociologie du travail*, 25ᵉ année, n° 1 (1983), pp. 32-44.
  Persée, id `sotra_0038-0296_1983_num_25_1_1912` — **repéré par `WebSearch` uniquement, accès
  jamais vérifié par requête directe** (budget épuisé avant d'y arriver). À vérifier en
  premier lors d'un prochain passage : la route est la même que Durand, donc à faible coût.
- **Accessibilité** : non vérifiée — candidat en attente, pas retenu au même rang que les
  quatre précédents.

### Legs clos dans ce passage — Braverman, H. (1974). *Labor and Monopoly Capital*

- **Recherche explicitement due, exécutée et close négativement.** Deux éditions identifiées
  sur Internet Archive : `labormonopolycap00brav` et `labormonopolycap00harr` (toutes deux
  1974, la troisième et quatrième trouvées sont des rééditions 1998 non vérifiées). Les deux
  éditions 1974 portent `access-restricted-item: true` et appartiennent aux collections
  `internetarchivebooks`, `inlibrary`, `printdisabled` — **prêt numérique contrôlé, non
  emprunté, conformément à la règle d'accès du dépôt.**
- **Conclusion** : ABSENTE en accès direct. Conforme à la prédiction du périmètre
  (« le canon anglophone de ce champ est en prêt numérique »). Ne pas retenter sans une
  nouvelle piste (traduction française chez Maspero 1976 non cherchée faute de budget — piste
  pour un prochain passage, voir angles morts méthode).
- **Concept concerné** : division du travail, séparation conception/exécution, déqualification
  — **reste sans source primaire atteignable à l'issue de ce passage** (voir section
  suivante).

### Legs vérifié — Taylor, F. W. (1919). *The Principles of Scientific Management*

- Non recherché à nouveau (identifiant exact hérité : item Internet Archive
  `cu31924085713331`). **Vérification complémentaire faite ici** : OCR exploitable pour
  citer — premières ~3000 caractères relues via
  `https://archive.org/download/cu31924085713331/cu31924085713331_djvu.txt` (redirection
  302 vers serveur régional, **HTTP 206** en suivant la redirection), texte propre, continu,
  fautes d'OCR mineures et isolées (« I9I9 » pour 1919). Pas de piège OCR illisible comme
  celui redouté par le périmètre.

---

## Concepts repérés sans source atteignable

- **Qualification du travail (Naville, Pierre)** — *Essai sur la qualification du travail*
  (1956, Marcel Rivière, coll. « Recherches de sociologie du travail »). Cherché sur Gallica
  et archive.org via `WebSearch` : rien trouvé en texte intégral libre. Seul résultat
  atteignable : un compte rendu (pas le livre) sur Persée,
  `https://www.persee.fr/doc/pop_0032-4663_1956_num_11_3_4707` (revue *Population*) — c'est
  de la littérature secondaire sur 148 pages d'original, insuffisant comme source primaire.
  Réédité par Syllepse (2012), édition commerciale, non vérifiée en accès.
- **Évolution du métier ouvrier / déqualification par la rationalisation (Touraine, Alain)** —
  *L'évolution du travail ouvrier aux usines Renault* (1955, CNRS). Repéré au catalogue BnF
  (CCFr) et discuté dans un chapitre Cairn qui *en parle*, mais aucun texte intégral libre
  trouvé. Un compte rendu d'époque existe sur Persée (`binop_0005-3147_1955...`), à nouveau
  secondaire.
- **Segmentation du marché du travail, marchés internes (Piore, Michael J. — avec ou sans
  Doeringer)** — « Notes for a Theory of Labor Market Stratification » (1975). Un PDF en
  accès libre existe bien (MIT DSpace,
  `https://dspace.mit.edu/bitstream/handle/1721.1/64001/notesfortheoryof00pior.pdf`), **mais
  trois tentatives d'accès ont toutes rendu HTTP 429** (limitation de débit côté MIT DSpace,
  vraisemblablement via le proxy). **C'est un échec, pas un vide** : à retenter en priorité
  au prochain passage, hors période de rate-limit. Le livre *Internal Labor Markets and
  Manpower Analysis* (Doeringer & Piore, 1971) n'a pas été cherché en accès faute de budget.
  Le pendant francophone de cette littérature est déjà couvert par le legs (Grisez 1980,
  déjà instruit).
- **Métier et collectif de travail comme forme sociale** — littérature nommée par le
  périmètre mais **non sondée du tout dans ce passage** (budget et frontière avec
  `activity-ergonomics`/`organizational-sociology` déjà chargées — Reynaud, `exit-voice-loyalty`,
  `travail-collectif-collectif-de-travail` étant déjà instruits ailleurs, la prudence a fait
  reporter cette recherche plutôt que risquer un doublon mal vérifié). À reprendre en
  premier lors d'un prochain passage, en visant un auteur distinct de Reynaud (p. ex. les
  monographies de métier plutôt que la théorie de la régulation conjointe).

---

## Angles morts (dont ceux vers `behavioral-economics`)

- **Brunet, Carole & Havet, Nathalie. « Propriété immobilière et déqualification dans
  l'emploi ».** Deux dépôts HAL identifiés (`halshs-00267041`, 2008 ; `halshs-00406500`,
  2009, révision du même travail), repérés par requête directe à l'API HAL
  (`api.archives-ouvertes.fr/search/`). **PDF vérifié en accès : HTTP 200,
  `content-type: application/pdf`, 342 870 octets**, à l'URL
  `https://shs.hal.science/halshs-00267041/document`. L'article traite l'effet de la
  propriété immobilière (« housing lock ») sur l'appariement emploi-qualification par une
  analyse économétrique du marché du travail — offre, demande, frictions de mobilité :
  exactement le cas que le périmètre attribue à `behavioral-economics` (« l'économie du
  travail prise comme modèle de marché », « préférences, incitations, effets de marché »).
  **C'est la requête dédiée que ce passage devait à `behavioral-economics`, exécutée et
  positive** : un candidat avec source primaire vérifiée en accès existe, prêt à être repris
  par ce domaine quand il ouvrira.
- Deux autres pistes voisines, repérées mais non vérifiées, à consigner pour mémoire sans
  requête supplémentaire : « Emploi précaire et stratégies de crise » (OpenEdition,
  `journals.openedition.org/articulo/878`) et « Précarité du contrat de travail et risque de
  perte d'emploi » (OpenEdition, `journals.openedition.org/sociologie/2246`) — l'un et
  l'autre à trier entre `sociology-of-work` et `behavioral-economics` selon qu'ils rapportent
  la précarité à un rapport social ou à un effet de marché ; ni l'un ni l'autre n'a été ouvert.
- **Le salaire comme incitation économique** — la frontière est déjà écrite par le périmètre
  (angle mort vers `behavioral-economics`), mais aucun candidat concret n'a été cherché ici
  faute de budget : la piste reste à ouvrir, pas seulement à répéter la règle.

### La dette envers `behavioral-economics`, payée séparément et sur budget propre

Le passage précédent avait laissé cette dette impayée, son plafond de requêtes ayant été atteint
avant qu'une requête dédiée ait pu partir. Pour que le même accident ne se reproduise pas, la
dette a été traitée cette nuit **par un balayage distinct, avec son propre budget de dix
requêtes**, et non sur le reliquat de celui-ci. `behavioral-economics` est le onzième et dernier
domaine : ce passage est l'avant-dernier, et donc la dernière occasion de lui léguer autre chose
qu'une page blanche.

**Accès vérifié positif, sous une réserve de droits qui n'est pas levée :**

- **Thaler, R. H. (1980), « Toward a Positive Theory of Consumer Choice »**, *Journal of Economic
  Behavior & Organization*, 1(1), 39-60, DOI `10.1016/0167-2681(80)90051-7`. PDF atteint en
  **HTTP 200**, `application/pdf`, 1 602 864 octets.
- **Kahneman, D., Knetsch, J. L. & Thaler, R. H. (1991), « Anomalies: The Endowment Effect, Loss
  Aversion, and Status Quo Bias »**, *Journal of Economic Perspectives*, 5(1), 193-206, DOI
  `10.1257/jep.5.1.193`. PDF atteint en **HTTP 200**, `application/pdf`, 361 121 octets.

**La réserve, et elle décide de l'usage de ces deux textes.** Les deux PDF ont été atteints sur
le **miroir d'une page de cours universitaire**, qui n'est ni le site de l'éditeur, ni un dépôt
institutionnel, ni le site de l'auteur. Un code 200 sans mur de connexion constate qu'un fichier
est **atteignable** ; il ne constate pas une **autorisation d'ayant droit**, et la règle du dépôt
est explicite : une autorisation se constate, elle ne se déduit pas. Les deux cas ne sont donc
pas de même valeur et il ne faut pas les confondre :

- **Kahneman, Knetsch & Thaler 1991 est propre sur le fond** : le *Journal of Economic
  Perspectives* est éditorialement en accès libre chez l'American Economic Association. Une voie
  légitime existe donc, et c'est elle qu'il faudra emprunter. Le `curl` brut contre
  `pubs.aeaweb.org` a rendu **403**, ce qui est un filtrage anti-robot et non un paywall
  constaté ; il n'a pas été contourné, et il ne doit pas l'être.
- **Thaler 1980 ne l'est pas** : la *JEBO* est une revue Elsevier sous abonnement, l'édition
  officielle est derrière un paywall non ambigu, et le miroir de cours est la **seule** route
  connue. **À traiter comme fermé tant qu'une route légitime n'est pas établie** (dépôt d'auteur,
  version acceptée déposée, ou accès institutionnel constaté). Ne pas citer depuis ce miroir.

**Accès vérifié négatif :**

- **Katona, G. (1951), *Psychological Analysis of Economic Behavior***, item Internet Archive
  `psychologicalana0000geor_l5v4` : `access-restricted-item: true`, dérivés en `LCP Encrypted
  PDF` marqués `private`. Prêt numérique contrôlé, non emprunté. Fondateur de la lignée
  « psychologie économique », et fermé.

**Repéré, non vérifié — à ne pas lire comme un vide :**

- **Katona, G. (1975), *Psychological Economics***, item `psychologicaleco00kato` : **même
  signature technique** que l'item de 1951 (dérivés `LCP Encrypted PDF`, fichiers `private`),
  mais le champ `access-restricted-item` n'a **pas** été extrait pour cet item précis. Il est
  probablement restreint, sur indice et non sur constat.
- **Quatre candidats francophones sur Persée**, repérés et **aucun testé** faute de requêtes
  restantes. Ils valent la première dépense du passage d'ouverture, la route étant à un appel :
  *Bulletin de psychologie* 15/207 (1962), `bupsy_0007-4403_1962_num_15_207_8719` ; *Bulletin de
  psychologie* 36/358 (1982), `bupsy_0007-4403_1982_num_36_358_12417` ; *Bulletin de psychologie*
  35/354 (1982), `bupsy_0007-4403_1982_num_35_354_11959` ; *Revue française d'économie* 23/1
  (2008), `rfeco_0769-0479_2008_num_23_1_1664`. **Deux avertissements les accompagnent** : les
  trois premiers sont dans le *Bulletin de psychologie*, revue déjà partagée avec
  `work-psychology`, et la frontière se tranchera par la lecture et non par la revue ; et un
  article Persée en `bupsy_*` n'est pas ouvert en texte intégral par principe, Persée servant
  parfois une page sur plusieurs.
- **Kahneman & Tversky (1979), « Prospect Theory »** — délibérément **non recherché** par ce
  balayage, et c'est la bonne décision : `theorie-des-perspectives` est **déjà instruit** en
  `decision-science`. Il ne se réinstruit pas ici.
- **Vernon Smith, Selten, Camerer & Loewenstein, Thaler & Benartzi, Loewenstein & Prelec,
  *Econometrica* ancien, le fonds `dticarchive`** — noms et pistes cités de mémoire, **aucun
  recherché, aucun vérifié**. Ce sont des noms, pas des candidats : le prochain passage ne doit
  pas les lire autrement.

**Ce que la dette laisse donc au dernier domaine** : un texte propre sur le fond dont la route
légitime reste à emprunter (KKT 1991), un texte à traiter comme fermé (Thaler 1980), un fondateur
vérifié fermé (Katona 1951), un candidat de frontière vérifié ouvert et rapporté plus haut
(Brunet & Havet), et quatre pistes francophones à un appel de la vérification. Ce n'est pas une
cartographie, et cela ne prétend pas l'être : c'est le premier legs non vide que ce domaine
reçoit en quatre passages.

---

## Bases et plateformes non appelées

- **Crossref, OpenAlex, Semantic Scholar, scite** — aucune requête API dans cette session (le
  serveur MCP `documentary` qui les exposait n'est pas connecté). Tout ce qui précède vient
  de `WebSearch`, de `curl` direct sur Persée/archive.org/HAL, jamais de ces bases.
- **Cairn.info, OpenEdition Books** — vus uniquement à travers des extraits de résultats
  `WebSearch` (donc jamais comme source), jamais interrogés directement ; Cairn en particulier
  paywall la plupart du contenu récent et n'a pas été testé en accès.
- **theses.fr** — non interrogé.
- **Gallica (BnF)** — cherché uniquement via `WebSearch` général pour Naville, jamais interrogé
  par son propre moteur ou son API SRU.
- **archive.org `advancedsearch.php`** — utilisé une seule fois (Braverman) ; pas réutilisé
  pour Naville, Touraine, Doeringer & Piore, Hughes ou Freidson faute de budget.
- **Zotero (bibliothèque locale du dépôt)** — outil non disponible dans cette session
  (dépendait aussi du serveur MCP non connecté) ; aucune vérification de ce que la
  bibliothèque locale contient déjà pour ce domaine.

---

## Proposition de thèmes

**Aucun thème déclaré à l'ouverture** — règle du domaine, se déclare après contrôle aveugle
des cartes, pas ici. Regroupements possibles selon les candidats retenus, avec le nombre qui
les porterait (aucun ne dépasse deux candidats confirmés à l'issue de ce passage — à ne
déclarer qu'après un lot plus large) :

- **Conflit, grève et négociation** — 2 candidats (Durand 1979 confirmé en accès ; Dassa 1983
  repéré mais non vérifié). Le thème le mieux porté de ce passage, mais encore fragile tant
  que Dassa n'est pas vérifié.
- **Sociologie des professions** — 1 candidat (Chapoulie 1973). *Se signale comme thème à un
  seul candidat.*
- **Genre au travail et division sexuelle du travail** — 1 candidat (Kergoat 1992). *Se
  signale comme thème à un seul candidat.*
- **Transformations de l'emploi** — 1 candidat fragile (Grelet & Mansuy 2004, frontière
  hors-périmètre non tranchée). *Se signale comme thème à un seul candidat, et incertain.*
- **Division du travail et déqualification** — 0 candidat nouveau ; seul le legs Taylor
  couvre cette entrée, et son pendant critique (Braverman) est fermé. *Ne porte aucun
  candidat propre à ce passage.*

Aucun thème ne se propose donc avec une base large ; le passage suivant devrait prioriser la
vérification de Dassa (coût quasi nul, même route que Durand) et la reprise de Piore (échec
réseau à retenter) avant tout élargissement.

---

# Enrichissement du 3 septembre 2026 (passage 11/15, phase 3)

Deux passes de repérage, 57 requêtes réseau au total (38 + 19), puis quatre lectures primaires
et quatre contrôles aveugles. **Quatre cartes validées, quatre `PASS` au premier tour**, ce qui
porte le domaine de 7 à 11 cartes. Le serveur MCP `documentary` était toujours en échec de
connexion, constaté par appel réel (`⏸ Pending approval`, aucun outil `mcp__documentary__*`
exposé) : tout ce qui suit vient de `WebSearch`, `WebFetch`, `curl`, de l'API Crossref directe
et de l'API Unpaywall.

## Ce que le lot a produit

| carte | texte primaire | accès |
|---|---|---|
| `predominance-du-conflit-sur-la-negociation` | Dassa 1983, *Sociologie du travail* 25-1, p. 32-44 | Persée, motif `_T1_` |
| `travail-sale-et-division-morale-du-travail` | Hughes 1958, *Men and Their Work* | Internet Archive `mentheirwork00hugh` |
| `effet-societal` | Maurice, Sellier & Silvestre 1979, *RFS* 20-2, p. 331-365 | Persée, motif `_T1_` |
| `classification-negociee-et-salaire-effectif` | Dubois 1982, *Économie et statistique* 140, p. 3-13 | Persée, motif `_T1_` |

**La dette dominante du domaine est soldée.** Les sept cartes antérieures portaient toutes
l'avertissement « aucune source secondaire affichée » ; les quatre nouvelles portent chacune au
moins une secondaire ouverte et lue dans son corps, avec sa réserve écrite en `notes`.

Un thème nouveau a été forgé, `qualification-et-hierarchie` (« La qualification et la
hiérarchie »), porté par **deux** cartes de deux auteurs distincts. **Rien n'a été ajouté à
`src/content/themes.ts`** : les quatre fiches déclarent `domain: "sociology-of-work"` et portent
leur thème par `theme_labels`, selon la convention du domaine.

## Accès vérifiés, positifs

Ils ne se repaient pas.

- **Persée, image de page** : `https://www.persee.fr/renderPage/<id_article>/<id_page>_<largeur>.jpg`.
  Le fragment `https://www.persee.fr/doc/page/<id_article>/<id_page>` publie l'URL de l'image en
  plus de l'OCR. **`_1000` est le dérivé le plus lisible** (480 ko sur la page testée) ; `_1400`
  et `_2000` rendent un fichier **plus petit** que `_1000`, et `_710` fait 154 ko.
- `sotra_0038-0296_1983_num_25_1_1912` (Dassa 1983), motif `_T1_`, 13 pages, HTTP 200. DOI
  d'article `10.3406/sotra.1983.1912`, résolu 200 par Crossref.
- `rfsoc_0035-2969_1979_num_20_2_6697` (Maurice, Sellier & Silvestre 1979), motif `_T1_`, HTTP 200.
- `estat_0336-1454_1982_num_140_1_4566` (Dubois 1982), motif `_T1_`, HTTP 200.
- `estat_0336-1454_1976_num_81_1_2368` (Salais 1976, « Qualification individuelle et
  qualification de l'emploi »), motif `_T1_`, HTTP 200. **Texte adjacent, non instruit** : c'est
  lui qui porte la distinction individu/emploi que Dubois reprend comme acquise.
- `socco_1150-1944_1997_num_27_1_1465` (Chapoulie 1997 sur Hughes), **motif de page atypique
  `_T12_`**, ni `_T1_` ni `_F_`, HTTP 200 : la preuve concrète que le motif se lit sur la notice
  et ne se présume jamais.
- `arss_0335-5322_1996_num_115_1_3207` (Hughes, « Le drame social du travail », *ARSS* 115),
  HTTP 200, lu en entier. **Fait acquis, à ne pas repayer** : ce n'est pas la traduction du
  chapitre de 1958 mais celle du texte de 1976, et il **ne contient pas** le passage sur le
  « dirty work ». Il n'existe donc pas de traduction publiée accessible de ce passage.
- **Internet Archive, `mentheirwork00hugh`** (exemplaire University of Florida) et
  `mentheirwork00hugh_0` (Princeton) : `access-restricted-item` **absent** sur les deux, OCR
  intégral en HTTP 200 (401 431 caractères), images de page par
  `archive.org/download/mentheirwork00hugh/page/n<N>_w1200.jpg`, **décalage constant n = page
  imprimée + 5**. Le `page_numbers.json` de l'item répond vide, contourner par le `_djvu.xml`.
- **OpenEdition** sert en accès libre intégral, sans mur : `journals.openedition.org/sdt/18092`
  (Segrestin 2019 sur Reynaud), `journals.openedition.org/travailemploi/4652` (Saglio 2007).

## Accès vérifiés, négatifs

- **`mentheirwork0000hugh`** (Trent University), troisième exemplaire du même livre :
  `access-restricted-item: true`. **Ne pas le confondre avec les deux ouverts, ne pas le retenter.**
- **Braverman, traduction française Maspero 1976** (*Travail et capitalisme monopoliste*) :
  recherche Internet Archive par titre exact → **0 résultat**. Aucune source ouverte en texte
  intégral. Seuls des comptes rendus sur Persée (`reco_0035-2764_1977_num_28_5_408352`,
  `forem_0759-6340_2001_num_76_1_2454`) et une préface de réédition sur ORBI Liège, qui est du
  paratexte de commentateur. **La piste est close** : avec les deux éditions anglaises 1974 déjà
  vérifiées fermées (`labormonopolycap00brav`, `labormonopolycap00harr`), la déqualification
  reste sans source primaire atteignable, et c'est un constat, pas une lacune à combler par
  autre chose.
- **Roy, Donald (1952), « Quota Restriction and Goldbricking in a Machine Shop »**, *AJS* 57(5),
  DOI `10.1086/221011`. **API Unpaywall, HTTP 200** : `"is_oa": false`,
  `"has_repository_copy": false`, `"oa_status": "closed"`, `"oa_locations": []`. Unpaywall
  interroge les dépôts institutionnels et les archives ouvertes déclarées : c'est le résultat le
  plus proche d'une preuve d'absence qu'on obtienne sans ouvrir chaque dépôt. JSTOR et University
  of Chicago Press en paywall, aucun contournement tenté. **Piste close.**
- **Segrestin, Denis (1985), *Le phénomène corporatiste*** : Cairn **403** sans même la page de
  redirection ; Internet Archive, 0 résultat par titre. Persée n'indexe que des comptes rendus
  (`sotra_0038-0296_1986_num_28_1_2033`, `rfsoc_0035-2969_1987_num_28_2_2410`,
  `mots_0243-6450_1987_num_14_1_1346`), donc de la secondaire. Pas de source primaire.
- **Cairn ferme en 403** tout ce qui a été tenté cette nuit, y compris « Revisiter l'analyse
  sociétale aujourd'hui », *Terrains & Travaux* 2012-2 p. 109 (301 puis 403). Ne pas y retourner
  sans route nouvelle.
- **Penissat 2009**, *Politix* 86, sur l'histoire des fiches de conflits : échec par trois voies,
  Cairn 403, HAL 404 sur le fichier, LILLOA 404. Non versé au dossier, même en `metadata-only`,
  faute d'avoir pu en lire une ligne de corps.
- **Le PDF `docAsPDF` de Persée répond 403** (« protected by altcha »), quatrième confirmation.
  Non contourné.

## Angle mort qui reste un échec réseau, et non un vide

- **Piore, Michael J. (1975), « Notes for a Theory of Labor Market Stratification »**.
  `https://dspace.mit.edu/bitstream/handle/1721.1/64001/notesfortheoryof00pior.pdf` → **HTTP 429**,
  **sixième échec cumulé** toutes nuits confondues ; notice `dspace.mit.edu/handle/1721.1/64001`
  → 429 en `curl`, 405 par `WebFetch`. Routes alternatives essayées et closes : EconPapers/RePEc
  `mit/worpap/95` (200, mais lien institutionnel `econ-www.mit.edu` mort) ; le volume
  *Labor market segmentation* sur Internet Archive, `labormarketsegme0000conf`,
  `access-restricted-item: true` ; **API CORE `api.core.ac.uk/v3/search/works` → 429** (clé
  requise pour un usage non anonyme) ; **API Semantic Scholar → 429** également.
  **Aucun `access-restricted-item` n'a jamais été vu sur l'item MIT** : le texte n'est pas fermé
  par nature, il est rate-limité. À retenter hors période de limitation, ou avec une clé d'API
  CORE si une nuit en obtient une.

## Angles morts que ce lot laisse ouverts

- **Hughes, « Licence and Mandate »**, *Men and Their Work*, chapitre 6, p. 78-87. Repéré par le
  lecteur primaire **dans un volume déjà ouvert et vérifié**, et délibérément non instruit pour
  ne pas écrire deux cartes sur un même texte dans un même lot. C'est l'angle mort le moins cher
  du domaine : l'accès est acquis, le décalage de pagination des images est connu, la secondaire
  francophone (Chapoulie 1997) est déjà lue. **À prendre en premier.**
- **Touraine, Alain (1957), « Qualification, salaire et homogénéité du groupe ouvrier »**,
  *Revue économique* 8-5, p. 841-850, Persée `reco_0035-2764_1957_num_8_5_407260`, listé
  « title-free » donc libre présumé, **non vérifié page à page**. C'est un texte **différent** du
  Touraine 1955 clos au balayage d'ouverture : autre revue, autre objet, une critique
  méthodologique d'une étude de Lecaillon sur l'hétérogénéité des salaires ouvriers. Route
  nouvelle et concrète, donc à vérifier avant de la retenir ou de la classer. Risque à trancher
  sur pièce : une note de discussion dans une revue d'économie peut n'être ni un concept ni du
  périmètre.
- **Salais, Robert (1976)**, ci-dessus, accès vérifié : porte la distinction qualification de
  l'individu / qualification de l'emploi, que Dubois reprend sans la revendiquer. Sa frontière
  n'est pas tranchée : son objet penche vers la statistique de planification du marché du travail
  (projections INSEE pour le VII<sup>e</sup> Plan), ce qui peut le faire tomber dans le
  hors-périmètre « statistique publique commentée sans thèse ». À trancher par la lecture.
- **Le salaire comme rapport de force reste à moitié ouvert.** Une carte l'aborde désormais
  (Dubois), mais par la classification et non par le conflit salarial lui-même. HAL n'a rien
  rendu de pertinent sur ce thème en deux requêtes (`salaire rapport de force qualification`,
  `grille qualification convention collective`).
- **Les déterminants de marché des écarts de salaire inter-entreprises**, exposés par Dubois
  p. 11-12, sont **consignés en angle mort vers `behavioral-economics`** et non rejetés,
  conformément à la frontière écrite du périmètre.
- **Le reste du numéro 344 du *Bulletin de psychologie* (1980) est clos, et négativement.** Le
  sommaire a été dépouillé en entier (55 articles hors notes de lecture) depuis
  `https://www.persee.fr/issue/bupsy_0007-4403_1980_num_33_344`. Un seul titre méritait la
  vérification, Labrousse, « Projets d'autogestion et psychologie sociale », p. 493-495, lu en
  texte intégral (`bupsy_0007-4403_1980_num_33_344_11741`, motif `_T1_`, HTTP 200) : l'auteur y
  écrit que ce n'est pas au psychologue de définir l'autogestion comme fait social, seulement
  d'en étudier le vécu et les représentations. Il rapporte donc son objet à un fait psychosocial
  individuel et **reste côté `work-psychology`**. Ce gisement ne doit plus recevoir de budget.

## Ce que le contrôle aveugle a réellement attrapé

**Rien qui ait renvoyé une carte** : quatre `PASS` au premier tour, sur les quatre questions.
Ce que les contrôleurs ont relevé **hors** des quatre questions, et qui a été traité :

- Le `doi_isbn` de la source primaire de Dassa portait l'ISSN de la revue là où l'article a son
  DOI propre. Le trou a été comblé plutôt que l'étiquette changée : `10.3406/sotra.1983.1912`
  résolu 200 par Crossref avant écriture, notice concordante, DOI porté sur la fiche, note
  écrite. C'est exactement le geste déjà appliqué à `fonctions-sociales-de-la-greve`.
- Le titre de Dassa a **trois états**, et la fiche suit l'imprimé : la page de titre porte
  « **Conflits** ou négociation ? » au pluriel, les titres courants des pages impaires portent le
  singulier, et Persée comme Crossref ont suivi les titres courants. La bibliographie de
  Segrestin 2019 porte elle aussi le pluriel.
- La conclusion « Entreprise et société » de Maurice, Sellier & Silvestre commence p. 362 et non
  p. 363 ; la page de la citation, elle, est juste.

## Ce que la relecture sur image a réellement corrigé

Elle n'a été formelle sur aucune des quatre fiches, et sur l'une d'elles elle a décidé du
périmètre.

- **Dubois** : l'encadré méthodologique de la page 7, qui déclare que les quatre entreprises ne
  prétendent pas être représentatives et que l'objet de l'étude est le lien entre formation,
  qualification et salaire, **n'existe que sur l'image** : la couche texte de Persée l'omet
  purement et simplement. C'est la pièce qui fait passer le test « une monographie n'est pas un
  concept ». Une lecture faite sur le seul OCR aurait manqué ce qui décidait de la fiche.
- **Maurice, Sellier & Silvestre** : l'OCR de Persée écrit « societal » sans accent aux quatre
  occurrences ; l'image montre l'accent.
- **Dassa** : l'OCR rend « résultais » pour *résultats* p. 39 et insère une espace parasite dans
  les décimales p. 40. **Piège inverse à la page 44** : l'imprimé porte lui-même *trarail* et
  *sup*, que l'OCR reproduit fidèlement. L'imprimé porte aussi « Laboratoire de Sociologie du
  Travail et des Relations **Proportionnelles** », coquille de l'imprimé signalée pour qu'elle ne
  soit pas recopiée.
- **Hughes** : aucun écart d'OCR sur la phrase citée, mais une variation de l'imprimé lui-même,
  « self-conception » p. 50 contre « self concept » p. 71, que l'OCR restitue fidèlement.

## Ce que les agents ont refusé d'écrire

- **Le chapeau liminaire d'un article n'est pas de son auteur.** Deux lecteurs ont écarté le
  passage le plus net de leur texte pour cette seule raison : le chapeau de la page 32 de Dassa,
  et celui de la page 3 de Dubois, où rien sur la page ne permet de dire s'il est de l'auteur ou
  de la rédaction de la revue.
- **Une citation qui se retourne hors de son contexte.** La phrase en italique de Dassa p. 39,
  « la grande entreprise est donc un handicap », 112 caractères et parfaitement citable, se lit
  hors contexte comme un handicap **pour l'entreprise** alors que Dassa parle du point de vue des
  grévistes. Écartée.
- **Une définition trop longue ne se coupe pas de force.** La définition canonique de l'effet
  sociétal, p. 364, fait 225 caractères et sa meilleure coupe honnête 153 : elle a été écartée au
  profit d'une phrase de la p. 363, et conservée en entier dans les réserves. De même chez
  Dubois, la récapitulation de la p. 10 a trois membres solidaires et toute coupe sous 150
  caractères supprime un étage de l'escalier.
- **Une traduction publiée qu'on n'a pas lue ne se cite pas.** *Le regard sociologique*
  (Chapoulie dir., EHESS, 1996) n'a pas été ouvert, donc pas cité, et la carte de Hughes déclare
  sa traduction comme `in-house`.
- **Une paternité ne se déduit pas d'un titre.** Le terme « effet sociétal » figure déjà au titre
  du rapport LEST d'octobre 1977 des mêmes auteurs ; l'article de 1979 ne le rattache à personne
  et n'en revendique pas la paternité, et l'`attribution_note` s'arrête là. De même, la
  distinction qualification de l'individu / de l'emploi n'est pas de Dubois, qui la donne pour
  acquise en renvoyant au CEREQ 1978 et à Salais 1976 : la fiche nomme ce qui est de lui,
  l'emboîtement des trois niveaux et la déconnexion.
- **Une secondaire ne s'autorise pas au delà de son corps.** La leçon du 2 septembre s'est
  appliquée quatre fois : Chapoulie 1997 porte sur la manière de faire de Hughes et n'expose
  jamais le sale boulot, et avertit p. 108 que le privilège des positions de faible statut est
  seulement méthodologique ; Segrestin 2019 ne mentionne ni Dassa ni l'article de 1983 et
  n'atteste donc rien de sa réception ; Saglio 2007 ne cite pas Dubois et impute le décrochage à
  une autre cause ; d'Iribarne 1991 n'est pas un commentaire favorable mais une objection, et il
  discute l'ouvrage de 1982 et non l'article de 1979. Chacune de ces réserves est écrite dans les
  `notes` de la carte qui porte la source.
