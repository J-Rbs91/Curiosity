# Cartographie — `behavioral-economics`

Balayage d'ouverture du 28 août 2026. **Onzième et dernier domaine** du corpus. Après lui,
aucun domaine n'est fermé : un candidat mal placé part chez un voisin ouvert ou ne s'instruit
pas.

**requêtes consommées : 29/30** (1 de marge volontairement non consommée)

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
| R15 | Persée — page Albou 1962 (`…_16_211_T1_0001_0000`) | **000** | 0 o (échec de connexion ; le motif, lui, était **correct**, confirmé par R20) |
| R16 | Persée — page Milet 1982 (`…_35_357_T1_0907_0000`) | **404** | 0 o (**mauvais motif** : ce fascicule emploie `_F_`, pas `_T1_`) |
| R17 | `archive.org/advancedsearch` — `dticarchive` resserré sur l'expérimentation | 200 | 13 509 o |
| R18 | Persée — notice article Milet 1982 | 200 | 81 909 o |
| R19 | Persée — page Albou 1962, 2ᵉ tentative `curl` | **000** | 0 o (connexion réinitialisée) |
| R20 | Persée — notice article Albou 1962 | 200 | 198 419 o |
| R21 | Persée — page Milet 1982 en `_F_` | **000** | 0 o (connexion réinitialisée) |
| R22 | Persée — page Albou 1962 en `--http1.1` | **000** | 0 o (`Recv failure: Connection reset by peer`) |
| R23 | **`WebFetch`** — page Albou 1962 p. 1, même URL que R19/R22 | **200** | texte rendu |
| R24 | **`WebFetch`** — page Milet 1982 p. 907 (forme `_F_`) | **200** | texte rendu |
| R25 | **`WebFetch`** — page Albou 1962 p. 10 (corps de texte) | **200** | texte rendu |
| R26 | HAL — notice `hal-04108632` (résumé, pagination) | 200 | 3 290 o |
| R27 | OpenAlex — concepts francophones OA | **429** | 350 o (**quota journalier épuisé**, `retryAfter: 71621 s`) |
| R28 | UQAC — PDF Tarde t. 2, `curl` | **000** | 0 o |
| R29 | UQAC — PDF Tarde t. 2, `WebFetch` | **503** | serveur indisponible, **pas un refus d'accès** |

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

### 4. Albou, Paul (1962). « Initiation à la psychologie économique » — VÉRIFIÉ OUVERT, THÈSE PROPRE ÉTABLIE

- **Concept pressenti** : **la psychologie économique comme discipline autonome, définie par
  le comportement économique et non par l'application de la psychologie à l'économie.** Deux
  définitions sont explicitement opposées dans le texte : celle de Wärneryd (Stockholm),
  dite « classique » — « l'application des principes et des méthodes psychologiques à la
  solution des problèmes économiques » — et celle qu'Albou propose et dit « assez
  généralement acceptée par les chercheurs français ».
- **Auteur** : Paul Albou, seul signataire.
- **Périmètre** : dedans, **par la seconde branche du test d'entrée, et sans la réserve
  habituelle**. Le texte ne se contente pas de récapituler : il **prend parti contre
  Reynaud**, l'autre pilier de la lignée, en toutes lettres — « l'histoire de la Psychologie
  économique ne doit pas se faire, contrairement aux efforts de P.L. REYNAUD, du point de
  vue de l'économiste, mais bien en fonction de son évolution propre, dans le cadre des
  Sciences de l'Homme » (p. 10). Et il annonce une « critique » du programme de Katona et
  Lauterbach (plan, chap. IV, § 1). **C'est une thèse propre sur ce que l'économie doit à la
  psychologie, ce que la condition 2 exige exactement.**
- **Source primaire** : *Bulletin de psychologie*, tome XVI, n° 211 (1962), pp. 1-81. DOI
  **`10.3406/bupsy.1962.8918`**, id Persée `bupsy_0007-4403_1962_num_16_211_8918`.
  `DC.rights: free`, `DC.language: fre`.
- **Accès constaté** : notice `https://www.persee.fr/doc/bupsy_0007-4403_1962_num_16_211_8918`,
  **HTTP 200, 198 419 octets**, liant **82 URL de page**. Deux pages lues sur la pièce par
  `WebFetch` : la **page 1** (plan détaillé) et la **page 10** (corps de texte, chapitre I
  § 2 « Vers une approche unitaire » et début du chapitre II « Définitions »), toutes deux
  rendues en texte continu et lisible, avec appels de notes et références en bas de page
  (Albou 1956 ; Wärneryd, *Ekonomisk Psykologi*, Stockholm, 1959, 220 p.).
- **Secondaire** : ABSENTE (aucune base de citations interrogée). Mais le texte est lui-même
  en dialogue direct avec deux pièces du corpus : **Reynaud 1962** (même revue, même année,
  déjà vérifié ouvert) et **Katona 1951** (vérifié fermé).
- **Francophone** : c'est la source primaire elle-même.
- **SIGNAL** : **désaccord documenté entre les deux tenants français de la discipline**,
  publiés la même année dans la même revue — Albou p. 10 contre Reynaud. C'est le contraire
  d'un concept repris sans discussion, et cela se voit sans scite. Second signal : le texte
  fait de Katona l'adversaire théorique, ce qui donne une **voie francophone ouverte pour
  parler du programme de Katona sans avoir à ouvrir Katona**, vérifié fermé. Réserve
  d'attribution : Albou, dans un autre texte de 1982, se présente comme définisseur de la
  discipline ; ici, en 1962, il en écrit l'« initiation ». La chronologie interne à cet
  auteur est à établir par le lecteur primaire.
- **ACCESSIBILITÉ** : texte intégral, page par page, **par `WebFetch` uniquement**
  (`curl` réinitialisé sur ce chemin, voir la correction de méthode ci-dessus).
- **CITABLE** : oui, en français, sans traduction à chercher. Le passage de la p. 10 sur la
  définition de Wärneryd et le désaccord avec Reynaud est court et autonome. **Attention** :
  81 pages, dont la p. 1 est un sommaire — le repérage de la page utile coûte des appels.

### 5. Jamet, F., Baratgin, J. & Godin, P. (2017). « Don, droit, coutume, cultures. Études expérimentales sur "l'effet de dotation" » — FICHIER VÉRIFIÉ SERVI, TEXTE NON LU

C'est le pendant francophone du candidat n° 2, par les mêmes trois auteurs, cinq ans plus
tôt et sous un ordre de signature différent.

- **Concept pressenti** : **l'effet de dotation expliqué par le droit coutumier**, contre les
  explications classiques. Le résumé, lu sur la notice HAL, annonce « une série de
  recherches originales développée depuis quatre années par les auteurs », rappelle
  « brièvement ce qu'est l'effet de dotation », expose « les principales explications
  classiques », puis en présente une nouvelle « étayée sur la base d'une série d'études »,
  qui mobilise « le droit et, plus spécifiquement, le droit coutumier » et « une
  compréhension anthropologique fine ».
- **Auteurs** : Frank Jamet, Jean Baratgin, Patrice Godin.
- **Périmètre** : dedans, sous la même réserve de frontière que le candidat n° 2 — le résumé
  qualifie lui-même l'effet de dotation de « l'un des biais cognitifs les plus connus en
  sciences cognitives » et situe le travail « dans le cadre de travaux sur la prise de
  décision ». **C'est la formule qui appellerait `decision-science`.** Ce qui le maintient
  ici est l'objet : un échange de biens réels, et la reprise explicite du paradigme d'échange.
  À trancher par le lecteur primaire, sur le texte et non sur le résumé.
- **Source primaire** : chapitre in *Décision et prise de décision*, 2017, **pp. 123-152**,
  langue déclarée `fr`. Éditeur et ISBN **non établis** : le champ `publisher_s` est absent
  de la notice HAL, et aucun ISBN n'a été vérifié. **Ne pas reconstituer cette référence de
  mémoire.**
- **Accès constaté** : `https://hal.science/hal-04108632/document`, **HTTP 200, 499 074
  octets, `application/pdf`**. Notice HAL vérifiée (`HTTP 200`, 3 290 o), `fileMain_s`
  présent.
- **Limite à ne pas maquiller** : **le texte du PDF n'a pas pu être extrait dans cette
  session.** Les polices du fichier n'exposent ni `/Differences` ni table exploitable par
  l'extracteur écrit sur place, et l'environnement ne dispose ni de `pdftotext` ni de
  `pypdf`. **Le fichier est servi, son contenu n'a pas été lu.** C'est une limite de mon
  outillage, pas une restriction d'accès : un lecteur muni d'un lecteur PDF ordinaire
  l'ouvrira. **Statut : accès vérifié positif, lecture à faire.**
- **SIGNAL** : même contestation de mécanisme que le candidat n° 2, formulée cette fois en
  français et adossée au droit coutumier plutôt qu'à la pragmatique. Les deux textes sont du
  même collectif : **ce n'est pas une confirmation indépendante**, et il ne faut pas les
  compter deux fois comme deux appuis.
- **ACCESSIBILITÉ** : PDF intégral servi ; résumé lu ; corps non lu.
- **CITABLE** : vraisemblablement, en français, avec pagination d'ouvrage (123-152). À
  confirmer sur le texte.

### Appui secondaire vérifié — Milet, Jean (1982). « Gabriel Tarde (1843-1904) : le créateur de la psychologie économique »

Ce n'est pas un candidat mais **la littérature secondaire francophone qui manquait aux
candidats 1 et 3**, et elle est ouverte.

- **Référence** : *Bulletin de psychologie*, tome XXXV, n° 357 (1982), pp. 907-913, rubrique
  « Feuilles volantes de l'histoire de la psychologie ». Id Persée
  `bupsy_0007-4403_1982_num_35_357_12030`.
- **Accès constaté** : page 907 lue sur la pièce par `WebFetch` à
  `…/doc/page/bupsy_0007-4403_1982_num_35_357_12030/bupsy_0007-4403_1982_num_35_357_F_0907_0000`
  — **texte rendu, continu et lisible**. La notice (`HTTP 200`, 81 909 o) publie les sept
  URL de page.
- **Ce que le texte établit** : Milet soutient que « le véritable créateur » de la
  psychologie économique est Tarde, qui « va déterminer l'objet de cette science, en
  préciser les méthodes et en élaborer tout le programme », et rattache la *Psychologie
  économique* aux *Lois de l'imitation* (1890) par la thèse des « réseaux d'imitation ».
- **SIGNAL, à ne pas escamoter** : c'est une **revendication d'antériorité**, formulée en
  1982 par un tardien, dans la revue même où Albou et Reynaud tenaient la discipline. Elle
  atteste que **l'attribution de la fondation est disputée** dans la lignée elle-même. Un
  lecteur primaire doit la traiter comme une position, pas comme un fait.
- **Coquille d'OCR à connaître** : la signature est rendue « J. MUET » par la couche texte de
  Persée ; l'auteur déclaré en notice est **Jean Milet**.

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
  au motif de la condition 2. **Statut : tranché — la page 10 a été lue et la thèse est établie.** Voir le bloc
  candidat n° 4 ci-dessus, qui fait foi.
- **ACCESSIBILITÉ** : texte intégral, page par page, par `WebFetch`.
- **CITABLE** : oui, en français, sous réserve que la thèse existe. Attention au piège que le
  périmètre signale : une page servie n'est pas une page lue, et la page 1 lue ici est un
  sommaire, non du corps de texte.

---

## Direction 2 — économie expérimentale, réciprocité, jeux

Le legs y a déjà une entrée ouverte (**Bonein 2008**, réciprocité, Persée). Deux requêtes HAL
(R3, R6) ont cartographié le champ francophone, et le résultat est net : **le champ est
abondant en notices et pauvre en fichiers**. Sur les 40 premiers résultats de R3, **8
seulement portent un PDF déposé**.

**Ce qui est repéré et fermé sur HAL, faute de dépôt** — c'est un vide vérifié, pas un vide
de méthode : les quatre articles d'**Emmanuel Petit** sur le jeu de l'ultimatum et le jeu du
dictateur (`hal-00650140`, *Négociations*, 2010 ; `hal-00650146`, *Cahiers internationaux de
psychologie sociale*, 2009 ; `hal-00646554`, avec S. Rouillon, *Négociations*, 2010 ;
`hal-00650178`, avec A. Tcherkassof) sont **tous en notice seule**. Même chose pour
`hal-01723719` (Attanasi & Boun My, *L'Actualité économique*, 2016, jeu du dictateur et jeu
de la confiance), `hal-02634673` (Ibanez, Moureau & Roussel, *Revue d'économie politique*,
2014) et `halshs-00661110` (Villeval, biens publics et préférences sociales, 2011).

**Ce qui est ouvert mais écarté sur le fond** — et le motif est celui, déjà appliqué deux
fois en psychologie du travail, du texte d'orientation sans thèse :

- **Jacquemet, N., L'Haridon, O. & Vialle, I. (2014), « Marché du travail, évaluation et
  économie expérimentale »**, *Revue française d'économie*, HAL `halshs-01082352`. **Accès
  vérifié : HTTP 200, 474 593 octets, `application/pdf`**, texte extrait et lu. Le résumé
  déclare : « L'objectif de cet article est de présenter, au travers d'un cadre général
  d'analyse et d'exemples d'applications, l'intérêt de l'économie expérimentale pour
  l'évaluation des politiques publiques sur le marché du travail. » L'introduction lue
  définit la méthode expérimentale et énumère ses avantages de contrôle. **Aucun écart
  orienté n'y est établi : c'est une présentation de méthode.** Condition 2 non satisfaite —
  **candidat non retenu, accès pourtant ouvert.** Il est consigné ici pour qu'un passage
  suivant ne le redécouvre pas comme une trouvaille.
- Mêmes réserves, non vérifiées faute de budget, sur `halshs-00921105` (Jacquemet, L'Haridon
  & Morin, « Économie expérimentale et comportements : **introduction** », RFE 2013),
  `halshs-01562649` (Jacquemet & L'Haridon, introduction, *L'Actualité économique* 2016) et
  `halshs-00879205` (Ferey, Gabuthy & Jacquemet, « L'apport de l'économie expérimentale dans
  l'élaboration des politiques publiques », RFE 2013). Les trois portent un PDF déclaré ;
  **une introduction de numéro est le cas type du rejet par la condition 2.**

**Manuels et traités repérés, utiles pour cartographier et non citables comme primaires** :
Eber & Willinger, *L'économie expérimentale* (`hal-02833413`, `hal-03701292`) ; Jacquemet,
Le Lec & L'Haridon, *Précis d'économie expérimentale* (`halshs-02283347`). Aucun n'a de
fichier déposé.

**Ce que cette direction n'a pas produit, et qu'il faut dire** : aucun texte primaire ouvert
présentant un **résultat expérimental propre** sur l'ultimatum, le dictateur, la confiance ou
les biens publics n'a été atteint dans ce passage, en dehors de Bonein 2008 hérité. Ce n'est
pas un vide vérifié du champ : c'est un vide d'accès sur HAL, et deux plateformes qui
pourraient le combler — **Cairn et Érudit** — n'ont pas été appelées.

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

Distinguer, ici plus qu'ailleurs, ce qui est **vérifié fermé** de ce qui est **non ouvert
faute de budget**.

**Vérifié fermé (constat d'accès, non retenté dans ce passage) :**

- **Effet de dotation, aversion à la perte, biais de statu quo** dans leur formulation
  canonique — Kahneman, Knetsch & Thaler (1991), *JEP* 5(1), DOI `10.1257/jep.5.1.193` :
  filtrage anti-robot `pubs.aeaweb.org`, 403, vérifié au passage précédent. **Contournement
  trouvé, et il est légitime** : les candidats n° 2 et n° 5 permettent d'instruire l'effet de
  dotation par d'autres textes primaires ouverts, qui définissent l'effet et le discutent.
- **Comptabilité mentale, théorie positive du choix du consommateur** — Thaler (1980),
  *JEBO* 1(1), DOI `10.1016/0167-2681(80)90051-7` : fermé pour motif de droits. **Aucun
  substitut ouvert trouvé dans ce passage** : la comptabilité mentale reste sans source.
- **Comportement économique psychologique** — Katona (1951) : prêt numérique contrôlé.
  **Substitut partiel trouvé** : Albou 1962 annonce une critique du programme de Katona et
  Lauterbach (candidat n° 4). On peut donc instruire *la discussion française du programme
  de Katona* ; on ne peut toujours pas instruire *Katona*.
- **Albou, P. (1981), « Niveau de comportement et prise de conscience en psychologie
  économique »**, *Journal of Economic Psychology*, DOI `10.1016/0167-4870(81)90037-4` :
  OpenAlex donne `oa: closed`, revue Elsevier. Même motif de droits que Thaler 1980.
- **Compte rendu de *Psychologie économique* dans l'*Economic Journal* (1903)**, DOI
  `10.2307/2221341` : `oa: closed`.
- **Tarde, tome 2 chez les Classiques des sciences sociales (UQAC)** : **route non
  confirmée, et le motif n'est pas un refus d'accès.** Deux tentatives sur
  `classiques.uqac.ca/.../psycho_economique_t2.pdf` — `curl` en `000` (connexion), `WebFetch`
  en **503 Service Unavailable**. Le serveur était indisponible pendant le passage. **À
  retenter** : c'est la route qui réglerait la réserve d'OCR du candidat n° 3.

**Non ouvert faute de budget ou de dépôt, à ne pas confondre avec un vide :**

- Les quatre articles d'Emmanuel Petit sur l'ultimatum et le dictateur, et cinq autres
  pièces d'économie expérimentale francophone : **notices HAL sans fichier** (voir direction
  2). Une route éditeur (Cairn, Érudit) n'a pas été essayée.
- **Reynaud, P.-L., *La psychologie économique*** (l'ouvrage, dont Persée porte un compte
  rendu de 1965 par J. Austruy) : l'ouvrage lui-même n'a pas été cherché. Année, éditeur et
  ISBN **non établis** — ne pas les reconstituer.
- Les six autres articles de la lignée repérés sur Persée (Albou 1968, 1978, 1984, 1993 ;
  Albou 1962 bibliographie ; Austruy 1965) : `title-free`, **accès non constaté page à page**.
- `DTIC_AD0130718` (1957), « A Theory of Individual Choice Behavior » : ni auteur ni accès
  vérifiés, et probablement hors périmètre de toute façon.

---

## Angles morts

**Vides vérifiés** (une recherche a eu lieu, elle a rendu un constat) :

- **La veine des rapports techniques ne porte pas ce domaine.** Deux requêtes structurées sur
  `dticarchive`, 1 345 résultats cumulés, une seule pièce approchante et hors objet. Le motif
  est structurel : ce champ ne s'est pas constitué dans la littérature grise de la défense.
  **Un passage suivant ne doit pas y revenir** sans raison neuve.
- **Le canon anglophone reste fermé par trois causes distinctes**, et ce passage n'en a levé
  aucune. Il a en revanche établi qu'**on peut instruire l'effet de dotation sans lui**.

**Vides de méthode** (personne n'a regardé, ou l'instrument n'a pas répondu) :

- **OpenAlex s'est épuisé en cours de passage** : `HTTP 429`, « Insufficient budget […]
  Resets at midnight UTC », `retryAfter: 71621`. Les deux requêtes passées avant l'épuisement
  ont été très productives (c'est OpenAlex qui a révélé la route UQAC et le corpus
  Roche-Agussol). **Tout ce qu'OpenAlex aurait pu dire après R27 est un silence
  d'instrument, pas une absence de littérature.**
- **Gallica n'a pas été ouverte** : `HTTP 403` sur son endpoint SRU au premier appel, non
  retenté. La BnF porte très probablement Tarde 1902 en mode texte, avec une couche OCR
  possiblement meilleure que celle du scan Google du tome 2.
- **Cairn, OpenEdition, Érudit, theses.fr, Persée-OAI** : non appelés. Érudit et Cairn sont
  les routes les plus prometteuses pour les articles d'économie expérimentale francophone
  repérés sans fichier sur HAL (*L'Actualité économique*, *Revue d'économie politique*,
  *Négociations*).
- **Roche-Agussol, Maurice**, troisième jalon de la lignée entre Tarde et Reynaud, apparu par
  R1 et R7 (items `IA41555614_0038`, 1929 ; `jstor-1883573`, 1920) : **repéré, aucun accès
  vérifié**. C'est l'angle mort le plus regrettable de ce passage, parce que le périmètre ne
  connaissait pas ce nom et que les items sont sur une plateforme qui a répondu à tous les
  autres appels.
- **Le PDF du candidat n° 5 est servi mais n'a pas été lu**, faute d'extracteur PDF dans
  l'environnement. Vide d'outillage, pas vide d'accès.

**Ce qui n'existe plus comme catégorie** : ce domaine étant le dernier, il n'y a pas d'« angle
mort vers un domaine fermé ». Deux candidats touchent des voisins **ouverts** et la frontière
est déjà tranchée depuis l'autre côté : Brunet & Havet (marché du travail) revient de
`sociology-of-work` et reste ici ; `DTIC_AD0130718`, s'il devait être instruit, partirait vers
`decision-science` ou `measurement-theory`.

---

## Proposition de thèmes

**Aucun thème n'est déclaré ici** — ils se déclarent après le contrôle aveugle des cartes du
premier lot. Ce qui suit est une proposition, avec le nombre de candidats qui la porteraient.

1. **La lignée francophone de la psychologie économique** — **7 candidats potentiels** :
   Tarde t. 1 (n° 1), Tarde t. 2 (n° 3), Albou 1962 (n° 4), plus les quatre pièces du legs
   (Reynaud 1962, Albou 1982 ×2, Bonein 2008). C'est le seul thème largement porté, et il est
   soutenu par une secondaire ouverte (Milet 1982) et par une controverse interne documentée
   (Albou contre Reynaud, 1962). **Réserve** : ce thème risque d'être un thème d'*histoire de
   la discipline* plutôt que de *concepts*. S'il est déclaré, il faut qu'il porte des concepts
   (la valeur, le prix, le besoin, l'objet de la discipline), pas une chronologie.
2. **L'effet de dotation et la contestation de son mécanisme** — **2 candidats** (n° 2 et
   n° 5). **Signal à ne pas manquer : les deux sont du même collectif d'auteurs** (Baratgin,
   Godin, Jamet), l'un en anglais, l'autre en français. Ce n'est **pas** une double
   attestation indépendante, et un thème bâti sur eux seuls reposerait sur une seule équipe.
3. **La valeur et le prix comme faits psychologiques** — **2 candidats**, mais tous deux
   tirés de Tarde (t. 1 et t. 2) : **il recoupe entièrement le thème 1** et ne doit pas être
   déclaré en plus de lui sans arbitrage.
4. **Réciprocité et économie expérimentale** — **1 seul candidat** (Bonein 2008, hérité).
   **Thème mono-candidat : à ne pas déclarer en l'état.** La direction 2 n'a produit aucun
   second texte primaire ouvert avec résultat propre.
5. **Comportement économique sur le marché du travail** — **1 seul candidat** (Brunet &
   Havet, hérité). **Thème mono-candidat : à ne pas déclarer en l'état.**

**Bilan d'accès du passage** : **5 candidats avec accès vérifié positif** (n° 1 à 5), dont 4
lus sur la pièce et 1 servi mais non lu ; **1 appui secondaire vérifié** (Milet 1982) ; **1
candidat ouvert mais écarté sur le fond** (Jacquemet et al. 2014) ; **6 pièces héritées déjà
vérifiées**. La cible de 6 à 10 candidats vérifiés n'est pas atteinte : il y en a 5. Les deux
qui manquent sont à portée immédiate et identifiés — Roche-Agussol et une seconde page de
corps sur Reynaud 1962.

---

## Bases et plateformes non appelées

- **Le serveur MCP `documentary` n'était pas connecté** (dépendance `node_modules`, installée
  après le démarrage du client MCP). Aucun appel `search_literature`, `search_francophone`,
  `verify_reference`, `zotero_search`.
- **Crossref** : **non appelé par API**, dans cette session, ni par MCP ni par `curl`. Aucun
  DOI n'a été validé contre Crossref ; les DOI cités ici viennent des notices Persée, des
  PDF eux-mêmes ou d'OpenAlex.
- **Semantic Scholar** : non appelé.
- **scite** : non connecté. Conséquence directe : **aucun candidat ne porte d'indication
  quantitative de reprise ou de contestation.** Les signaux de contestation écrits plus haut
  (Albou contre Reynaud, Milet sur l'antériorité de Tarde, Baratgin et al. contre
  l'explication standard de l'effet de dotation) ont été lus **dans les textes eux-mêmes**,
  pas dans une base de citations. Rappel du périmètre : scite est de toute façon faible sur
  les ouvrages, donc sur Tarde.
- **Zotero (bibliothèque locale)** : non interrogée. On ne sait pas si le dépôt possède déjà
  Tarde 1902 ou les traités d'économie expérimentale repérés en notice.
- **OpenAlex** : appelé **deux fois**, puis **épuisé (429, quota journalier)**. Ce n'est pas
  une absence de couverture.
- **Gallica** : appelée une fois, **403**.
- **Cairn, OpenEdition, Érudit, theses.fr, HathiTrust, Google Books** : non appelées.
- **Persée** : appelée par recherche HTML et par notice d'article (`curl`, `HTTP 200`), et
  par endpoint page (**`WebFetch` uniquement** — `curl` y est réinitialisé, voir la
  correction de méthode en direction 1).
