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
