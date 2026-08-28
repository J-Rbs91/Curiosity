# Cartographie — `behavioral-economics`

Balayage d'ouverture du 28 août 2026. **Onzième et dernier domaine** du corpus. Après lui,
aucun domaine n'est fermé : un candidat mal placé part chez un voisin ouvert ou ne s'instruit
pas.

**requêtes consommées : 23/30**

## Méthode et budget réseau

Le serveur MCP `documentary` n'est pas exposé dans cette session (dépendance `node_modules`
installée après le démarrage du client MCP). Aucun appel `search_literature`,
`search_francophone`, `verify_reference` ni `zotero_search` n'a été possible. Substituts
employés, tous par `curl` : `archive.org/advancedsearch.php` et `archive.org/metadata/`,
`api.archives-ouvertes.fr/search/` (HAL), `api.openalex.org/works` (**joignable par curl,
contrairement au MCP**), l'endpoint page de Persée, et la recherche Persée en HTML.
`WebSearch`/`WebFetch` réservés au repérage.

Répertoire de travail privé :
`/tmp/claude-0/-home-user-Curiosity/1119d836-fd85-59e3-842b-ba9e6a1ef24f/scratchpad/scout-be/`,
fichiers préfixés `be-`.

**Journal des requêtes** (une ligne par appel réseau) :

| # | cible | code | taille |
|---|---|---|---|
| R1 | `archive.org/advancedsearch` — Tarde / « psychologie economique » | 200 | 3 936 o |
| R2 | `gallica.bnf.fr/SRU` — Tarde | **403** | 34 o (« Access Denied », refus côté Gallica/proxy — non retenté) |
| R3 | HAL — titres « économie expérimentale », « jeu de l'ultimatum », « jeu du dictateur » | 200 | 12 116 o |
| R4 | `archive.org/advancedsearch` — `collection:dticarchive` + bargaining/utility/risk | 200 | 9 923 o |
| R5 | `archive.org/advancedsearch` — `access-restricted-item` des 8 items Tarde | 200 | 1 664 o |
| R6 | HAL — réciprocité / dotation / biens publics / confiance, `submitType_s:file` | 200 | 16 092 o |
| R7 | OpenAlex — `title.search:psychologie economique` | 200 | 109 202 o |
| R8 | Persée — recherche HTML « psychologie économique » | 200 | 370 393 o |
| R9 | `archive.org` — OCR `psychologiecono00tardgoog_djvu.txt` (Tarde t. 1) | 200 | 836 659 o |
| R10 | HAL — PDF `hal-04086005` (effet de dotation, pays kanak) | 200 | 839 103 o |
| R11 | HAL — PDF `hal-04108632` (« Don, droit, coutume, cultures ») | 200 | 499 074 o |
| R12 | HAL — PDF `halshs-01082352` (marché du travail, éco. expérimentale) | 200 | 474 593 o |
| R13 | `archive.org` — OCR `psychologiecono01tardgoog_djvu.txt` (Tarde t. 2) | 200 | 990 188 o |
| R14 | `archive.org` — image `psychologiecono00tardgoog/page/n170.jpg` | 200 | 1 573 756 o |
| R15 | Persée — page Albou 1962 (`…_16_211_T1_0001_0000`) | **000** | 0 o (échec de connexion, **pas un 404** — à retenter) |
| R16 | Persée — page Milet 1982 (`…_35_357_T1_0907_0000`) | **404** | 0 o (motif d'URL à corriger : fascicule probablement découpé en T2/T3) |
| R17 | `archive.org/advancedsearch` — `dticarchive` resserré sur l'expérimentation | 200 | 13 509 o |
| R18 | Persée — notice article Milet 1982 | 200 | 81 909 o |
| R19 | Persée — page Albou 1962, 2ᵉ tentative `curl` | **000** | 0 o (connexion réinitialisée) |
| R20 | Persée — notice article Albou 1962 | 200 | 198 419 o |
| R21 | Persée — page Milet 1982 en `_F_` | **000** | 0 o (connexion réinitialisée) |
| R22 | Persée — page Albou 1962 en `--http1.1` | **000** | 0 o (`Recv failure: Connection reset by peer`) |
| R23 | **`WebFetch`** — page Albou 1962, même URL que R19/R22 | **200** | texte rendu |

---

## Legs d'entrée — quatre pièces Persée déjà vérifiées (non revérifiées ici)

Reprises telles quelles du périmètre, vérifiées `HTTP 200` la nuit du 28 août. Elles ne
consomment aucune requête de ce passage.

1. **Reynaud, Pierre-Louis (1962)**, « Nature et contenu de la psychologie économique »,
   *Bulletin de psychologie* 15(207), 865-872, DOI `10.3406/bupsy.1962.8719`, id Persée
   `bupsy_0007-4403_1962_num_15_207_8719`.
2. **Albou, Paul (1982)**, « Contribution à une définition de la psychologie économique »,
   *Bulletin de psychologie* 36(358), 195-205, DOI `10.3406/bupsy.1982.12417`, id
   `bupsy_0007-4403_1982_num_36_358_12417`. **Page 195 déjà lue en OCR (4 401 caractères).**
3. **Albou, Paul (1982)**, « La psychologie économique : questions fondamentales et problèmes
   d'actualité », *Bulletin de psychologie* 35(354), 340-353, DOI `10.3406/bupsy.1982.11959`,
   id `bupsy_0007-4403_1982_num_35_354_11959`.
4. **Bonein, Aurélie (2008)**, « La réciprocité, entre psychologie et rationalité économique »,
   *Revue française d'économie* 23(1), 203-232, DOI `10.3406/rfeco.2008.1664`, id
   `rfeco_0769-0479_2008_num_23_1_1664`.

Plus un candidat de frontière hérité de `sociology-of-work`, vérifié ouvert :
**Brunet, C. & Havet, N., « Propriété immobilière et déqualification dans l'emploi »**, HAL
`halshs-00267041`, PDF 200, 342 870 octets.

---

## Candidats retenus, par ordre de rendement

Un bloc n'est écrit ici **qu'après constat d'accès sur la pièce**, code HTTP et taille à
l'appui. Ce qui n'est que repéré reste dans les sections « Direction ».

### 1. Tarde, Gabriel (1902). *Psychologie économique*, tome premier — VÉRIFIÉ OUVERT

- **Concept pressenti** : **la valeur comme composée du désir et de la croyance**. La table
  des matières du tome I porte les chapitres « La valeur et les sciences sociales » (p. 63,
  qui distingue valeur-vérité, valeur-gloire, valeur-crédit), « Rôle économique du désir »
  (p. 151, où l'offre et la demande sont traitées comme un **couple de désirs**), « Rôle
  économique de la croyance » (p. 185), « Les besoins » (p. 202, « besoins, combinaison de
  croyances et de désirs »), « Les travaux » (p. 222), « La monnaie » (p. 281, dont le
  « caractère tout subjectif »). Deux concepts distincts sont extractibles de ce seul tome :
  **la valeur comme quantité psychologique** et **l'offre et la demande comme couple de
  désirs**.
- **Auteur** : Gabriel Tarde, seul signataire. L'avant-propos déclare : « Ce livre est la
  substance d'un cours professé au Collège de France en 1900-1901 » — lu dans l'OCR.
- **Périmètre** : dedans, et il fonde la lignée que le périmètre désigne comme la voie
  principale du domaine. Seconde branche du test d'entrée (texte qui fonde la discipline),
  **avec thèse propre** : la valeur n'est pas une propriété de la chose mais un fait
  inter-mental, écart assumé au modèle de l'économie politique de son temps (le chapitre IV,
  p. 107, discute « Adam Smith psychologue »).
- **Source primaire** : Tarde, G., *Psychologie économique*, tome premier, Paris, Félix
  Alcan (ancienne librairie Germer Baillière), 1902. Page de titre « TOME PREMIER / PARIS /
  FÉLIX ALCAN, ÉDITEUR / … / 1902 » **lue dans l'OCR**.
- **Accès constaté** :
  `https://archive.org/download/psychologiecono00tardgoog/psychologiecono00tardgoog_djvu.txt`,
  **HTTP 200, 836 659 octets, `text/plain`**, OCR complet du volume, table des matières
  incluse. Le champ `access-restricted-item` est **absent** sur les huit items Tarde
  interrogés (R5) : aucun verrou de prêt numérique. La page liminaire du scan porte la
  notice Google « the copyright to expire and the book to enter the public domain ».
- **Autres exemplaires vérifiés non restreints** (R5, même statut) :
  `psychologiecono03tardgoog` (t. 1), `psychologieecono0001gabr` (t. 1),
  `psychologiecono01tardgoog` et `psychologiecono02tardgoog` (t. 2),
  `psychologieecono0000gabr` (t. 2), `psychologiecono05tardgoog`.
- **Seconde route repérée, non vérifiée** : Les Classiques des sciences sociales (UQAC), DOI
  `10.1522/cla.tag.psy2` (t. 2), PDF annoncé `oa: bronze` à
  `classiques.uqac.ca/classiques/tarde_gabriel/psycho_economique_t2/psycho_economique_t2.pdf` ;
  t. 1 sous DOI `10.1522/cla.tag.psy`, sans URL dans OpenAlex.
- **Secondaire** : repérée, non vérifiée — « Tarde's *Psychologie Économique*: An Unknown
  Classic by a Forgotten Sociologist », DOI `10.4324/9781315135045-57` (`oa: closed`) ;
  compte rendu de 1903 dans l'*Economic Journal*, DOI `10.2307/2221341` (`oa: closed`).
- **SIGNAL** : Tarde est aujourd'hui lu comme sociologue, et sa *Psychologie économique* est
  le volume le moins repris de son œuvre — attribution non contestée, mais **réception
  tardive** (la secondaire repérée date de 2017). Le texte est un cours, donc discursif.
  **Piège d'OCR** : le scan Google de 1902 dégrade les accents (« thaï » pour « that ») ; la
  citation devra être relue sur l'image de la page, ce que le périmètre exige déjà.
- **ACCESSIBILITÉ** : texte intégral (OCR complet, 836 Ko).
- **CITABLE** : oui, en français, sans traduction à chercher. Pagination d'origine
  disponible ; les chapitres cibles sont courts et localisés (p. 151-185 pour le désir,
  p. 185-202 pour la croyance).

- **Image de page vérifiée sur la pièce** :
  `https://archive.org/download/psychologiecono00tardgoog/page/n170.jpg`, **HTTP 200,
  1 573 756 octets, `image/jpeg`**, feuillet **entier et non rogné**, 2744 × 4912 px, titre
  courant « RÔLE ÉCONOMIQUE DU DÉSIR » et folio imprimé **157** lisibles. Le piège du 25 août
  est évité : c'est bien la forme `/page/n<N>.jpg` **sans suffixe** qui est employée, et non
  `_x1600`. **Décalage établi : `n<N>` = page imprimée + 13** (n170 → p. 157). Une citation
  de ce volume est donc relisible sur l'image, condition 3 du test d'entrée satisfaite.

### 3. Tarde, Gabriel (1902). *Psychologie économique*, tome second — VÉRIFIÉ OUVERT

Volume distinct du précédent, et **plus économique que lui** : c'est le tome qui traite le
prix. Il est consigné à part parce qu'il porterait un autre concept et parce que **sa couche
OCR n'a pas la même qualité**.

- **Concept pressenti** : **le prix comme fait psychologique**, contre l'explication par des
  considérations objectives. La table des matières du Livre second (« L'OPPOSITION
  ÉCONOMIQUE ») porte au chapitre II, « Les prix » : « Deux sens du mot valeur » ;
  « Double échelle des consommateurs suivant l'intensité de leur désir ou le degré de leur
  fortune » ; « Comparaison avec la théorie de l'utilité finale » ; « **Rôle grandissant du
  prestige personnel, de la contagion psychologique dans les marchés. Influence de la
  conversation** » ; « L'idée du juste prix. Son action sur le prix réel » ;
  « **Impossibilité de rendre compte des prix par des considérations simplement
  objectives** » ; « La loi de l'offre et de la demande ». Trois concepts au moins y sont
  distincts : la **contagion psychologique dans les marchés**, le **juste prix** et le refus
  de l'explication objective des prix.
- **Périmètre** : dedans, et sans la réserve du tome I : il y a un prix, un marché, une offre
  et une demande, et l'écart au modèle objectif est la thèse même du chapitre.
- **Source primaire** : Tarde, G., *Psychologie économique*, tome second, Paris, Félix Alcan,
  1902.
- **Accès constaté** :
  `https://archive.org/download/psychologiecono01tardgoog/psychologiecono01tardgoog_djvu.txt`,
  **HTTP 200, 990 188 octets, `text/plain`**. Contenu confirmé comme étant bien le tome
  second **par le corps du texte et la table des matières** (Livre second, « L'opposition
  économique », titres courants « L'OPPOSITION ÉCONOMIQUE »), et **non par la notice**.
- **Réserve à ne pas escamoter** : sur cet item, **la page de titre n'est pas dans la couche
  OCR** — la chaîne « TOME » y est introuvable, alors qu'elle est nette sur le tome I. La
  mention « tome second » est donc établie par le contenu, pas par la page de titre imprimée.
  Un lecteur primaire devra la constater sur l'image avant de citer la collation.
- **Seconde réserve, plus lourde** : **l'OCR de ce volume est nettement plus dégradé que
  celui du tome I** (« Chapitbe », « L'OI'POSITION ^CONOMIQUli », « rien de phu Euu » pour
  « rien de plus faux »). Le texte reste lisible pour repérer, **il n'est pas citable en
  l'état** : toute citation devra être transcrite depuis l'image de page. Le dérivé image
  n'a pas été vérifié sur cet item faute de budget ; il l'a été sur le tome I et le schéma
  d'URL est le même.
- **SIGNAL** : Tarde discute explicitement la théorie de l'utilité marginale (« utilité
  finale ») de son époque — le texte se situe donc lui-même par rapport au modèle
  économique standard, ce qui sert la condition 2. À vérifier au moment de la lecture : quel
  décalage `n<N>` s'applique à cet item, qui n'a aucune raison d'être le même que sur le
  tome I.
- **ACCESSIBILITÉ** : texte intégral (OCR complet, 990 Ko), qualité médiocre.
- **CITABLE** : oui en français, **mais uniquement par transcription depuis l'image**.

### 2. Baratgin, J., Godin, P. & Jamet, F. (2022). « How the Custom Suppresses the Endowment Effect: Exchange Paradigm in Kanak Country » — VÉRIFIÉ OUVERT

- **Concept pressenti** : **l'effet de dotation** pris comme fait d'échange, et sa
  **suppression par une norme sociale**. Le résumé lu dans le PDF définit l'effet dans le
  paradigme d'échange de Knetsch : le participant reçoit un objet, se voit offrir de
  l'échanger contre un objet équivalent, et refuse — « the observed refusal to exchange is
  called the endowment effect ». Thèse propre : ce refus vient d'une **implicature** sur les
  attentes de l'expérimentateur (l'objet reçu est perçu comme un don, que les normes de
  politesse occidentales interdisent d'échanger), et des participants de culture kanak, chez
  qui le don appelle un contre-don, ne devraient pas produire cette implicature.
- **Auteurs** : Jean Baratgin (Université Paris 8, LCHA ; correspondant), Patrice Godin
  (Université de la Nouvelle-Calédonie, TROCA), Frank Jamet (Paris 8 / CY Cergy Paris
  Université). Trois signataires.
- **Périmètre** : dedans — un échange de biens réels est engagé, l'écart au modèle est
  établi et **orienté** (refus d'échanger). **Frontière avec `decision-science` à
  surveiller** : le périmètre nomme explicitement l'effet de dotation comme ce que la
  science de la décision n'a pas pris, donc la voie est libre, mais l'article paraît dans la
  section « Cognition » de la revue et argumente en pragmatique — c'est le point de contrôle.
- **Source primaire** : *Frontiers in Psychology*, 12:785721, publié le 25 janvier 2022,
  DOI `10.3389/fpsyg.2021.785721`. Reçu le 29 septembre 2021, accepté le 13 décembre 2021 —
  dates lues sur la première page du PDF.
- **Accès constaté** : `https://hal.science/hal-04086005/document`, **HTTP 200, 839 103
  octets, `application/pdf`**. Texte extrait localement (146 303 caractères), résumé et
  corps lisibles. Revue en accès libre intégral : route HAL et route éditeur légitimes.
- **Secondaire** : ABSENTE dans ce passage (aucune base de citations interrogée, scite non
  connecté).
- **Francophone** : le même objet est traité en français par `hal-04108632` (voir plus bas),
  dont l'accès est constaté mais la lecture bloquée.
- **SIGNAL** : l'article **conteste l'interprétation standard** de l'effet de dotation
  (aversion à la perte) au profit d'une explication par la norme sociale. À traiter comme
  **mécanisme contesté**, non comme attribution de concept contestée : Knetsch est crédité du
  paradigme. Intérêt de chaîne : c'est une voie légitime pour instruire l'effet de dotation
  **sans passer par Kahneman, Knetsch & Thaler 1991, vérifié fermé**.
- **ACCESSIBILITÉ** : texte intégral.
- **CITABLE** : oui, en **anglais**. Aucune traduction publiée repérée. Le résumé est
  autonome et court.

---

## Direction 1 — la lignée francophone de la « psychologie économique »

C'est la voie principale, et elle a rendu davantage que les deux autres réunies. **Tarde est
ouvert et vérifié** (candidats 1 et 3). Autour de lui, une seule requête de recherche Persée
(R8), exploitée localement sans consommer d'appel supplémentaire, a produit **dix notices
supplémentaires de la lignée, toutes marquées `title-free`** :

| id Persée | auteur | année | titre | pages |
|---|---|---|---|---|
| `bupsy_0007-4403_1962_num_16_211_8918` | Albou, Paul | 1962 | **Initiation à la psychologie économique** | pp. 1-81 |
| `bupsy_0007-4403_1962_num_16_212_9457` | Albou, P. | 1962 | Initiation à la psychologie économique : bibliographie sommaire | pp. 156-157 |
| `bupsy_0007-4403_1982_num_35_357_12030` | Milet, Jean | 1982 | **Gabriel Tarde (1843-1904) : créateur de la psychologie économique** | pp. 907-913 |
| `bupsy_0007-4403_1978_num_32_338_11565` | Albou, Paul | 1978 | La psychologie économique aujourd'hui (Augsbourg, 27-29 juillet 1978) | pp. 75-85 |
| `bupsy_0007-4403_1984_num_37_364_12592` | Albou, Paul | 1984 | Psychologie économique et problèmes de travail (VIII<sup>e</sup> colloque, Bologne, 1983) | pp. 438-439 |
| `bupsy_0007-4403_1993_num_46_412_15431` | Albou, Paul | 1993 | Psychologie économique et tourisme international | pp. 794-802 |
| `colan_1268-7251_1968_num_19_1_5048` | Albou, Paul | 1968 | Formation : la psychologie économique et les consommateurs | pp. 116-118 |
| `tiers_0040-7356_1965_num_6_23_2145…` | Austruy, Jacques | 1965 | compte rendu de **P.-L. Reynaud, *La psychologie économique*** | pp. 790-791 |

**La lignée que le périmètre décrit est donc entièrement documentée sur une seule
plateforme ouverte** : Tarde (1902) → Reynaud (1962, plus un compte rendu de son livre en
1965) → Albou (1962, 1968, 1978, 1982 ×2, 1984, 1993) → Bonein (2008). Le legs d'entrée en
avait quatre pièces ; il y en a au moins douze.

### Correction de méthode sur l'endpoint page de Persée — à reprendre par les passages suivants

Deux constats coûteux, faits ici, qui contredisent la consigne d'entrée :

1. **Le segment central du nom de page n'est pas toujours `T1`.** Il vaut `T1` sur Albou 1962
   (fascicule 16-211), mais **`F`** sur Milet 1982 (fascicule 35-357) : la page 907 en `T1`
   rend **404**, et la notice de l'article publie la forme
   `…_35_357_F_0907_0000`. Le segment ne se présume pas : **il se lit sur la notice de
   l'article** (`https://www.persee.fr/doc/<id_article>`, HTTP 200), qui liste une URL de
   page par page de l'article. Cette route de notice a fonctionné à chaque appel.
2. **`curl` est réinitialisé par Persée sur le chemin `/doc/page/` dans cette session**, avec
   `Recv failure: Connection reset by peer` (curl 35) — quatre tentatives, y compris en
   `--http1.1`, toutes en `000`. Ce n'est **pas** un 404 et **pas** un vide : le proxy
   sortant est sain (`recentRelayFailures: []`). **`WebFetch` passe sur la même URL et rend
   le texte.** C'est la route à employer pour ce chemin.

### Albou, Paul (1962). « Initiation à la psychologie économique » — VÉRIFIÉ OUVERT, à qualifier

- **Notice constatée** : `https://www.persee.fr/doc/bupsy_0007-4403_1962_num_16_211_8918`,
  **HTTP 200, 198 419 octets**. `DC.rights: free`, `DC.language: fre`, `DC.creator: Albou,
  Paul`, `DC.date: 1962`, DOI **`10.3406/bupsy.1962.8918`**. La notice lie **82 URL de
  page** (`…_T1_0001_0000` à `…_T1_0081_0000`, plus une page `P_0001_0000`) : l'article
  entier est servi page à page, ce n'est pas un article servi partiellement.
- **Page 1 lue** (par `WebFetch`, `curl` étant réinitialisé) : c'est le **plan détaillé** du
  texte. On y lit le chapitre IV, « Domaine de la psychologie économique », dont le § 1 est
  « **Le programme de Katona et Lauterbach. 1. Présentation ; 2. Critique de ce
  programme.** », puis un § 2 qui découpe le domaine (théorie générale du comportement
  économique, psychologie du consommateur, psychologie du producteur, le marché, la
  psychologie économique appliquée, « la psychiatrie économique : la fraude fiscale,
  psychopathologie de la transposition, l'angoisse économique »), puis un § 3 sur les
  rapports avec la psychologie, la psychologie sociale, l'économique et la sociologie
  économique.
- **Ce que cela vaut pour le test d'entrée** : une monographie de 81 pages qui **critique
  explicitement le programme de Katona** peut porter une thèse propre — et ce serait
  précieux, puisque **Katona lui-même est vérifié fermé** (prêt numérique). Mais le plan lu
  est aussi celui d'un texte d'orientation, et le périmètre a déjà rejeté deux fois ce genre
  au motif de la condition 2. **Statut : accès vérifié, thèse non établie.** Une seule page
  de contenu suffira à trancher, et elle n'a pas été lue faute de budget.
- **ACCESSIBILITÉ** : texte intégral, page par page, par `WebFetch`.
- **CITABLE** : oui, en français, sous réserve que la thèse existe. Attention au piège que le
  périmètre signale : une page servie n'est pas une page lue, et la page 1 lue ici est un
  sommaire, non du corps de texte.

---

## Direction 2 — économie expérimentale, réciprocité, jeux

Le gisement HAL est réel mais **la majorité des références repérées n'ont pas de fichier
déposé** (`fileMain_s` absent) : sur les 40 premiers résultats de R3, seuls 8 portent un
PDF. Les travaux d'**Emmanuel Petit** sur le jeu de l'ultimatum et le jeu du dictateur
(`hal-00650140`, `hal-00650146`, `hal-00646554`, `hal-00650178`) sont **tous en notice
seule** : repérés, non accessibles par HAL.

Manuels et traités de référence du champ francophone, repérés en notice (utiles pour
cartographier, **non citables**) : Eber & Willinger, *L'économie expérimentale* (La
Découverte, `hal-02833413`, `hal-03701292`) ; Jacquemet, Le Lec & L'Haridon, *Précis
d'économie expérimentale* (`halshs-02283347`).

---

## Direction 3 — la veine des rapports techniques (`dticarchive`, RAND, ONR) : RENDEMENT NUL, ET C'EST UN RÉSULTAT

**Deux requêtes structurées contre `archive.org/advancedsearch.php`, aucune pièce retenue.**
Ce n'est pas un vide de méthode : c'est un constat, et il contredit une attente du dépôt.

- **R4**, `collection:dticarchive` croisé avec `bargaining`, `economic behavior`, `utility`,
  `risk taking` : 783 résultats, **dominés par le bruit lexical de « utility »** au sens
  militaire de véhicule ou de réseau technique (« Truck, Utility, 1/4-Ton, 4X4, M151 »,
  « Utility Tax Avoidance Program in Germany », « Replace Utility Poles »). Trois titres
  seulement approchaient l'objet : `DTIC_AD0267309` « Coalition Bargaining in N-Person
  Games » (1961), `DTIC_ADA149287` « Two Papers on Sequential Bargaining » (1984),
  `DTIC_ADA197135` « Deriving a Utility Function For the U.S. Economy » (1988).
- **R17**, requête resserrée sur les formes de titre propres à l'expérimentation
  (`"bargaining behavior"`, `"experimental study of"`, `"decision making under risk"`,
  `"choice behavior"`, `"risk taking behavior"`, `"economic decision"`), triée par année :
  562 résultats, dont les 45 premiers sont **de la mécanique des fluides, de l'antenne et du
  matériau** (« An Experimental Study of Boundary Layer Transition », « … of Pressure Waves
  in Gun Chambers »). **Une seule pièce pertinente est apparue** : `DTIC_AD0130718` (1957),
  « A Theory of Individual Choice Behavior » — selon toute vraisemblance le rapport
  technique de R. D. Luce, mais **l'auteur n'a pas été vérifié et l'accès non plus**. Et
  quand bien même : un modèle probabiliste du choix est un **fait de raisonnement**, pas un
  écart économique orienté. Il relèverait de `decision-science` ou de `measurement-theory`,
  tous deux ouverts, et non d'ici.

**Conclusion à consigner pour les passages suivants** : la veine des rapports techniques,
établie comme la voie la plus rentable du dépôt sur d'autres domaines, **ne l'est pas sur
celui-ci**, et le motif est structurel, non conjoncturel. L'économie comportementale ne
s'est pas constituée dans la littérature grise de la défense américaine : elle s'est
constituée dans des revues d'économie, qui sont précisément les plus fermées. Deux requêtes
bien formées suffisent à l'établir ; une troisième ne se justifie pas.

---

## Concepts repérés sans source atteignable

- **Effet de dotation / aversion à la perte / biais de statu quo** dans leur formulation
  canonique (Kahneman, Knetsch & Thaler 1991) : **vérifié fermé** au passage précédent
  (filtrage anti-robot `pubs.aeaweb.org`, 403). Non retenté ici, conformément au périmètre.
- **Comptabilité mentale / théorie positive du choix du consommateur** (Thaler 1980) :
  **fermé pour motif de droits** (revue Elsevier, seul miroir un site de cours). Non retenté.
- **Comportement économique psychologique** (Katona 1951) : prêt numérique contrôlé.
- **Albou 1981 en *Journal of Economic Psychology*** : Elsevier, `oa: closed`.

---

## Angles morts

- **Gallica n'a pas répondu** : `HTTP 403` sur son endpoint SRU (R2). C'est un **vide de
  méthode**, pas un vide vérifié : la BnF porte certainement Tarde 1902 en mode texte, et
  cette route n'a pas été ouverte.
- **Crossref, Semantic Scholar, scite, Zotero** : non appelés (voir dernière section).

---

## Proposition de thèmes

*(section en cours — aucun thème ne se déclare à ce stade)*

---

## Bases et plateformes non appelées

- **Crossref**, **Semantic Scholar**, **scite**, **Zotero (bibliothèque locale)** : aucun
  appel, le MCP `documentary` n'étant pas connecté et aucune de ces bases n'ayant été
  interrogée par `curl` dans ce passage.
- **Cairn**, **OpenEdition**, **theses.fr**, **Érudit** : non appelés.
- **Gallica** : appelé une fois, refus `403`.
