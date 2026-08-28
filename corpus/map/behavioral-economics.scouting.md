# Cartographie — `behavioral-economics`

Balayage d'ouverture du 28 août 2026. **Onzième et dernier domaine** du corpus. Après lui,
aucun domaine n'est fermé : un candidat mal placé part chez un voisin ouvert ou ne s'instruit
pas.

**requêtes consommées : 8/30**

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

*(section en cours — chaque bloc n'est écrit qu'après constat d'accès sur la pièce)*

### En cours de vérification (repérés, accès non encore constaté)

- **Tarde, Gabriel (1902), *Psychologie économique*, 2 vol., Félix Alcan.** Huit items
  Internet Archive identifiés (R1), et **les huit portent `access-restricted-item: None`**
  (R5), c'est-à-dire aucun verrou de prêt numérique : `psychologiecono00tardgoog` (vol. 1),
  `psychologiecono03tardgoog` (vol. 1), `psychologiecono01tardgoog` (vol. 2),
  `psychologiecono02tardgoog` (vol. 2), `psychologiecono05tardgoog`,
  `psychologieecono0000gabr` (vol. 2), `psychologieecono0001gabr` (vol. 1). **Statut :
  ouvert d'après le champ d'accès, texte non encore lu — à confirmer sur l'OCR.**
  Seconde route repérée par OpenAlex (R7) : **Les Classiques des sciences sociales (UQAC)**,
  DOI `10.1522/cla.tag.psy2`, PDF annoncé `oa: bronze` à
  `http://classiques.uqac.ca/classiques/tarde_gabriel/psycho_economique_t2/psycho_economique_t2.pdf`
  (tome 2). Le tome 1 y porte le DOI `10.1522/cla.tag.psy`, sans URL PDF dans OpenAlex.
- **« How the Custom Suppresses the Endowment Effect: Exchange Paradigm in Kanak Country »**,
  HAL `hal-04086005` (2022), *Frontiers in Psychology*, `submitType_s:file`. Porte
  explicitement l'**effet de dotation**, que le périmètre désigne comme la veine que
  `decision-science` n'a pas prise. Accès non encore constaté.
- **« Don, droit, coutume, cultures — Études expérimentales sur "l'effet de dotation" »**,
  HAL `hal-04108632` (2017), chapitre d'ouvrage (`COUV`), `submitType_s:file`. Même veine,
  en français. Accès non encore constaté.
- **Jacquemet, N., L'Haridon, O. & Vialle, I. (2014), « Marché du travail, évaluation et
  économie expérimentale »**, *Revue française d'économie*, HAL `halshs-01082352`, PDF
  déclaré présent. Frontière `sociology-of-work` déjà tranchée en faveur d'ici (marché du
  travail pris comme modèle de marché).
- **Ferey, S., Gabuthy, Y. & Jacquemet, N. (2013), « L'apport de l'économie expérimentale
  dans l'élaboration des politiques publiques »**, *RFE*, HAL `halshs-00879205`, PDF déclaré
  présent. **Risque de condition 2** : texte d'orientation, à écarter s'il ne porte pas de
  thèse propre.
- **Jacquemet, N., L'Haridon, O. & Morin, P. (2013), « Économie expérimentale et
  comportements : introduction »**, *RFE*, HAL `halshs-00921105`, PDF déclaré présent.
  **Risque de condition 2 élevé** : une introduction de numéro est le cas type du texte
  d'orientation sans thèse, déjà rejeté deux fois en psychologie du travail.

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
