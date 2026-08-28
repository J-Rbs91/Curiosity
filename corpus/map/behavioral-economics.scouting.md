# Cartographie — `behavioral-economics`

Balayage d'ouverture du 28 août 2026. **Onzième et dernier domaine** du corpus. Après lui,
aucun domaine n'est fermé : un candidat mal placé part chez un voisin ouvert ou ne s'instruit
pas.

**requêtes consommées : 12/30**

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

**Tarde, la source de la lignée, semble ouverte par deux routes indépendantes** (Internet
Archive sans restriction d'accès ; Classiques des sciences sociales). C'est le résultat le
plus important de ce balayage à ce stade, et il doit être confirmé sur l'OCR avant d'être
tenu pour acquis.

Autres pièces de la lignée repérées par OpenAlex (R7), **non vérifiées** :

- **Roche-Agussol, Maurice** — « Étude bibliographique des sources de la psychologie
  économique chez les Anglo-Américains » (1929), item Internet Archive `IA41555614_0038`
  (repéré en R1). Et un compte rendu anglophone de son travail : Dickinson, Z. C. (1920),
  « Roche-Agussol's *Psychologie Économique chez les Anglo-Américains* », *QJE*, DOI
  `10.2307/1883573` — `oa: closed`, mais item Internet Archive `jstor-1883573` repéré en R1.
  **Roche-Agussol est un nom que le périmètre ne portait pas** : il constitue un troisième
  jalon de la lignée, entre Tarde et Reynaud.
- Albou, P. (1981), « Niveau de comportement et prise de conscience en psychologie
  économique », *Journal of Economic Psychology*, DOI `10.1016/0167-4870(81)90037-4` —
  OpenAlex donne `oa: closed`. Revue Elsevier : **à traiter comme fermé**, même motif de
  droits que Thaler 1980.
- Un compte rendu de 1903 de *Psychologie économique* dans l'*Economic Journal*, DOI
  `10.2307/2221341`, `oa: closed`.

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

## Direction 3 — la veine des rapports techniques (`dticarchive`, RAND, ONR)

**Première requête (R4) : rendement nul.** `collection:dticarchive` + titres
bargaining/utility/economic behavior/risk taking donne 783 résultats **dominés par le bruit
lexical de « utility »** au sens de véhicule ou de réseau électrique militaire (« Truck,
Utility, 1/4-Ton », « Utility Tax Avoidance Program »). Trois seuls titres pertinents
apparus : `DTIC_AD0267309` « Coalition Bargaining in N-Person Games » (1961),
`DTIC_ADA149287` « Two Papers on Sequential Bargaining » (1984), `DTIC_ADA197135` « Deriving
a Utility Function For the U.S. Economy » (1988). **Aucun vérifié.** Une seconde requête
mieux ciblée (auteurs Siegel/Fouraker, ONR, « experiment ») reste à faire.

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
