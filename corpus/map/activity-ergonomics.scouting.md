# Cartographie — `activity-ergonomics`

Scouting réalisé le 18 août 2026. Domaine ouvert le même jour dans `corpus/perimeter.md`,
sans liste d'auteurs fournie : les candidats ci-dessous sortent d'un balayage par
**littératures** (distinction tâche/activité et prescrit/réel ; analyse ergonomique du
travail ; régulation de l'activité, variabilité, marges de manœuvre ; charge de travail et
ses définitions concurrentes ; clinique de l'activité et psychodynamique du travail ;
activité instrumentée ; travail collectif), **en français d'abord** et non après coup.

Le champ s'est laissé cartographier d'abord par ses **revues en accès ouvert intégral**
(*Activités*, *PISTES*, *Laboreal*) et par ses **archives numérisées** (Persée), c'est-à-dire
par les endroits où le champ se relit lui-même : numéros d'hommage, rééditions de textes
fondateurs, entretiens avec les fondateurs, articles rétrospectifs. C'est ce qui a permis de
partir de textes plutôt que de noms — voir la section « Combien de candidats viennent d'une
liste écrite de mémoire ? », qui en donne le compte exact et ne le maquille pas.

---

## Note méthodologique — outils effectivement utilisés

Le serveur MCP `documentary` (`search_literature`, `search_francophone`, `verify_reference`,
`zotero_search`) **n'était pas exposé dans la liste d'outils de cette session** (seuls
`github` et les outils standard l'étaient), comme au passage précédent. J'ai donc balayé les
mêmes strates par accès HTTP direct :

- **Crossref** (`api.crossref.org`) — fonctionnel tout du long. Utilisé de trois façons :
  résolution des DOI, recherche par auteur restreinte à un préfixe éditeur
  (`filter=prefix:10.4000` pour OpenEdition, `filter=prefix:10.3406` pour Persée), et
  surtout **vidage complet des sommaires de revues par ISSN**
  (`/journals/<ISSN>/works?rows=1000`), qui a rendu 653 notices pour *Activités*
  (1765-2723), 602 pour *PISTES* (1481-9384) et 956 pour *Laboreal* (1646-5237). C'est ce
  vidage, et non une requête par mots-clés, qui a fait apparaître la plupart des candidats.
- **Persée** (`www.persee.fr`) — fonctionnel, et **décisif pour la strate 1952-1980** qui
  n'existe nulle part ailleurs en ligne : *Bulletin de psychologie*, *L'année psychologique*,
  *Sociologie du travail*, *BINOP*. **Nuance d'accès importante et vérifiée** : la page
  `/doc/<id>` renvoie en HTTP 200 le texte OCR de la **première page seulement** ; les pages
  suivantes ne sont servies que par le visualiseur d'images JavaScript, le paramètre `?page=N`
  est sans effet (testé sur les pages 2, 5 et 19 d'un même article : contenu identique), et
  l'endpoint `docAsPDF/<id>.pdf` renvoie **HTTP 403 avec corps vide**, y compris avec
  en-tête `User-Agent` de navigateur et `Referer` correct. Chaque candidat Persée porte
  donc la mention « première page seulement ».
- **HAL** (`api.archives-ouvertes.fr`) — fonctionnel. Le champ `fileMain_s` a servi à
  distinguer les notices des dépôts réels. HAL s'est révélé **riche en littérature
  secondaire et en thèses, pauvre en textes primaires fondateurs** de ce champ — à une
  exception majeure et décisive (l'ouvrage de Rabardel, candidat 1).
- **OpenEdition Journals** — **accès en deux régimes, à documenter pour la suite de la
  chaîne** : `curl` sur `journals.openedition.org/...` ne rend **pas** l'article mais une
  page de vérification anti-robot **Anubis** (HTTP 200, `text/html`, 5,3 Ko constants, quel
  que soit l'article, y compris sur les variantes `/pdf/<id>` et `?format=xml`). L'outil
  `WebFetch` **passe** et rend le texte intégral : c'est par lui que chaque citation
  ci-dessous a été relevée. Le lecteur primaire devra donc utiliser `WebFetch` (ou un
  navigateur), pas `curl`, sur cette plateforme.
- **Correction apportée par la lecture primaire, le 18 août 2026** : le blocage Anubis
  d'OpenEdition ne porte que sur la page HTML de l'article. La route
  `journals.openedition.org/<revue>/pdf/<id>` répond en `curl` — HTTP 200,
  `content-type: application/pdf`, couche texte exploitable (constaté sur `pistes/pdf/3328`,
  427 845 octets, 28 pages). Deux lecteurs l'ont établie indépendamment, et l'un d'eux a pu
  contrôler sa citation sur deux rendus indépendants du même texte grâce à elle. C'est la
  voie à prendre pour tout contrôle qui doit porter sur le texte de l'éditeur.

- **OAI-PMH d'OpenEdition** (`oai.openedition.org`) — fonctionnel en `GetRecord`, mais
  **étranglé en `ListRecords`** : trois tentatives de moisson complète, dont deux avec
  temporisation et reprises, se sont arrêtées sur `Connection reset by peer` après 100 à 280
  notices. Contourné par le vidage Crossref par ISSN, qui a rendu le même service. Échec
  d'outil, pas constat de vide.
- **Internet Archive** (`advancedsearch.php` + `metadata` + têtes HTTP) — fonctionnel,
  utilisé pour les ouvrages. Rendement faible sur ce champ : les éditeurs du domaine (PUF,
  Octarès, ANACT, La Dispute, Armand Colin) y sont très peu représentés.
- **Unpaywall** — non sollicité : aucun des candidats retenus ne repose sur un DOI d'éditeur
  commercial dont l'ouverture serait en doute. Les DOI `10.4000/...` et `10.3406/...` sont
  d'emblée sur des plateformes en accès ouvert, et l'accessibilité a été vérifiée
  directement sur la plateforme plutôt que déduite d'une base tierce.
- **Semantic Scholar** — **1 requête aboutie sur 2** (la seconde en 429). Aucune exploitation
  n'en a été tirée : la couverture anglophone de cette base ramène l'ergonomie cognitive
  anglo-saxonne, c'est-à-dire précisément le domaine `human-factors` qui n'est pas ouvert.
- **OpenAlex** — **en échec sur toute la session**, comme au passage précédent : le relais
  renvoie `"Rate limit exceeded" / "Insufficient budget", dailyRemainingUsd: 0`. Aucune
  requête n'a abouti. **C'est un échec de base, pas une absence de littérature.**
- **Cairn** — **HTTP 403** (redirection vers `shs.cairn.info`, puis 403). Testé une fois,
  comme prévu, non insisté. Conséquence lourde, détaillée dans les angles morts : la revue
  centrale du champ, *Le travail humain* (fondée en 1933), n'est accessible que là.
- **theses.fr** — API fonctionnelle (`/api/v1/theses/recherche/`), 102 thèses sur
  « analyse de l'activité » + ergonomie, 62 sur « ergonomie de l'activité ». Non exploitée
  pour des candidats : une thèse n'est pas le texte fondateur d'un concept, mais c'est un
  gisement de littérature secondaire pour la suite.
- **scite** — non connecté dans cette session. Aucun relevé de reprise/contestation n'a pu
  être fait automatiquement. Rappel du dispositif : sa couverture serait de toute façon
  faible ici (champ à forte proportion d'ouvrages et de revues francophones peu indexées).
- **WebSearch / WebFetch** — `WebFetch` a servi de **client HTTP de vérification** sur
  OpenEdition (voir ci-dessus), pas de source. Aucune page de web général n'est enregistrée
  comme source dans ce fichier.

Chaque candidat porte la trace de la vérification effectuée (code HTTP, `content-type`,
taille, nom de fichier serveur, ou extrait relevé) plutôt qu'une affirmation d'accessibilité.

---

## Candidats — du plus solide au plus fragile (accessibilité de la source primaire)

### 1

```
CANDIDAT        : Genèse instrumentale — l'instrument comme entité mixte (artefact + schèmes)
                  / Genèse instrumentale, approche instrumentale
AUTEUR(S)       : Pierre Rabardel — seul auteur de l'ouvrage. Attention : le terme
                  « catachrèse » qu'il reprend n'est pas de lui (voir candidat 2) ; et
                  l'expression « approche instrumentale » est largement le fait de la
                  réception, en didactique des mathématiques notamment (Trouche, Artigue),
                  pas nécessairement de l'auteur — à trancher par la lecture directe.
PÉRIMÈTRE       : dedans — porte sur ce que l'outil fait à l'activité et sur ce que
                  l'activité fait à l'outil ; c'est la littérature « activité instrumentée »
                  nommée par le périmètre.
SOURCE PRIMAIRE : Rabardel, P. (1995). Les hommes et les technologies ; approche cognitive
                  des instruments contemporains. Paris, Armand Colin. Dépôt auteur sur HAL :
                  hal-01017462 (https://hal.science/hal-01017462v1). Pagination de l'édition
                  imprimée non relevée dans cette session (à établir sur le PDF).
SECONDAIRE      : Vidal-Gomel, C. (2002). « Systèmes d'instruments des opérateurs. Un point
                  de vue pour analyser le rapport aux règles de sécurité ». PISTES, 4(2).
                  DOI 10.4000/pistes.3367. — Voir aussi Bationo-Tillon, A., Folcher, V. &
                  Rabardel, P. (2010). « Les instruments transitionnels : une proposition
                  pour étudier la diachronie des activités narratives ». Activités, 7(2).
                  DOI 10.4000/activites.2437.
FRANCOPHONE     : c'est la source elle-même — ouvrage français, éditeur français, auteur
                  français ; la réception francophone est massive (44 notices HAL sur
                  « genèse instrumentale », principalement en didactique et en sciences de
                  l'éducation).
SIGNAL          : signal de **migration disciplinaire** à surveiller : le concept est né en
                  ergonomie cognitive et psychologie du travail, mais l'essentiel de sa
                  reprise francophone repérée se fait aujourd'hui en **didactique des
                  mathématiques et des sciences** (élèves, logiciels, géométrie dynamique),
                  loin de la situation de travail. Le rédacteur de carte devra choisir s'il
                  présente le concept dans son terrain d'origine ou dans son terrain de
                  reprise, et le dire.
ACCESSIBILITÉ   : texte intégral — PDF confirmé par requête HEAD suivie de redirections :
                  HTTP 200, `content-type: application/pdf`, `content-length: 692421`
                  (676 Ko), `content-disposition: inline;
                  filename="Hommes_et_technologie_Rabardel1995.pdf"`, hébergé par HAL
                  (`hal.science/hal-01017462/document`). Notice HAL vérifiée par API :
                  `docType_s: OUV`, `publisher_s: Armand Colin`, `producedDateY_i: 1995`,
                  `language_s: fr`. C'est un dépôt de l'auteur sur une archive
                  institutionnelle, pas un miroir tiers.
                  **Réserve à lever par le lecteur primaire** : aucun outil de lecture PDF
                  n'est installé dans cet environnement (`pdftotext`, `PyPDF2`, `pdfminer`,
                  `fitz` tous absents) — la correspondance page à page entre ce PDF et
                  l'édition Armand Colin n'a donc pas pu être contrôlée, seule la résolution
                  HTTP l'a été.
CITABLE         : très probablement, en français, langue d'origine. **Point remarquable pour
                  la carte** : une traduction anglaise par l'auteur lui-même existe et est
                  également ouverte — Rabardel, P. (2002). People and Technology, Université
                  Paris 8, HAL hal-01020705 ; PDF confirmé HTTP 200,
                  `content-type: application/pdf`, `content-length: 1015281` (991 Ko),
                  `filename="people_and_technology.pdf"`, `language_s: en`.
```

### 2

```
CANDIDAT        : Catachrèse — l'usage d'un outil pour ce à quoi il n'était pas destiné
AUTEUR(S)       : Pierre Rabardel pour la mise en circulation ergonomique ; **le terme est
                  emprunté à la rhétorique** et son introduction dans l'analyse du travail
                  est habituellement attribuée à Jean-Marie Faverge (années 1960-1970). Cas
                  net de terme antérieur repris et redéfini : à trancher par lecture directe
                  des pages où Rabardel l'introduit, qui doivent porter l'attribution.
PÉRIMÈTRE       : dedans — porte sur ce que l'opérateur fait réellement de l'artefact pour
                  tenir sa tâche, y compris contre la prescription d'usage.
SOURCE PRIMAIRE : même ouvrage que le candidat 1 : Rabardel, P. (1995). Les hommes et les
                  technologies ; approche cognitive des instruments contemporains. Paris,
                  Armand Colin. HAL hal-01017462. **Localisation exacte du passage sur la
                  catachrèse non établie dans cette session** (pas d'outil PDF disponible,
                  voir candidat 1) — c'est la première chose à faire pour ce candidat.
SECONDAIRE      : cherchée sur HAL (« catachrèse instrument ») : **1 seul résultat**, sans
                  rapport direct (thèse sur l'identité professionnelle des psychologues).
                  La littérature secondaire dédiée n'a pas été isolée dans le temps
                  disponible. À reprendre : le terme est probablement discuté dans les
                  comptes rendus de l'ouvrage.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : signal d'attribution le plus net du lot : trois paternités possibles
                  circulent (la rhétorique classique, Faverge, Rabardel) et aucune n'a été
                  confirmée par une source ouverte dans cette session. **Si le lecteur
                  primaire ne peut pas établir l'attribution sur le texte, ce candidat doit
                  s'arrêter là** plutôt que de porter une carte à attribution douteuse.
ACCESSIBILITÉ   : texte intégral, même fichier et même vérification HTTP qu'au candidat 1.
CITABLE         : indéterminé tant que le passage n'est pas localisé dans le PDF.
```

### 3

```
CANDIDAT        : Documents prescripteurs — ce que la prescription écrit et ce qu'elle
                  laisse à faire
AUTEUR(S)       : Jacques Leplat — seul auteur
PÉRIMÈTRE       : dedans — porte sur le versant « travail prescrit » de la distinction
                  fondatrice, saisi par son support matériel (consigne, procédure, mode
                  d'emploi) plutôt que par une définition abstraite.
SOURCE PRIMAIRE : Leplat, J. (2004). « Éléments pour l'étude des documents prescripteurs ».
                  Activités, 1(2). DOI 10.4000/activites.1293. Revue électronique : pas de
                  pagination imprimée, paragraphes numérotés (localisateur à donner sous
                  cette forme).
SECONDAIRE      : Heddad, N. (2024). « Dissonances dans le travail, interpellations
                  contemporaines de la prescription ». Activités, 21(1).
                  DOI 10.4000/12hue. — Voir aussi Casse, C. (2024). « Des prescriptions aux
                  ressources pour l'intervention en ergonomie ». Activités.
                  DOI 10.4000/12hut. Accessibilité de ces deux textes non vérifiée
                  individuellement (même plateforme, ouverture présumée mais non testée).
FRANCOPHONE     : c'est la source elle-même — auteur français, revue française en accès
                  ouvert intégral.
SIGNAL          : Leplat est une figure consensuelle du champ ; aucun signal de contestation
                  repéré. Signal inverse à noter : **un numéro d'hommage entier** lui a été
                  consacré par PISTES en 2024 (dont Clot, Y., « J. Leplat, l'ouverture et la
                  force d'esprit », DOI 10.4000/1356u, et Yvon, F., « Analyser l'organisation
                  du travail avec Jacques Leplat », DOI 10.4000/13g8o) — c'est une réception
                  d'hommage, pas une discussion critique, et il faudra le dire plutôt que de
                  l'utiliser comme preuve de solidité.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, citation relevée dans le
                  corps du texte : « Le document prescripteur vise à orienter l'action, à
                  dire ce qui doit être fait dans des conditions données pour obtenir un
                  certain résultat. » (verbatim et localisation exacte **à recontrôler par le
                  lecteur primaire** : le rendu passe par un intermédiaire, ce n'est pas une
                  lecture directe du HTML). Accès `curl` bloqué par Anubis (200, 5,3 Ko, page
                  de vérification) : utiliser `WebFetch` ou un navigateur.
CITABLE         : oui, en français, langue d'origine ; aucune traduction publiée identifiée
                  (cet article n'a pas de version anglaise dans Activités, contrairement à
                  d'autres du même numéro).
```

### 4

```
CANDIDAT        : La régulation dans l'analyse de l'activité — modèle de double régulation
AUTEUR(S)       : Jacques Leplat pour ce texte de synthèse. **Le modèle de double régulation
                  lui-même est habituellement attribué à Leplat et Xavier Cuny** (années
                  1970) : cosignature à confirmer, et à ne pas écraser au profit du seul
                  Leplat.
PÉRIMÈTRE       : dedans — porte sur la façon dont l'opérateur ajuste son activité aux
                  variations de la situation et à son propre état ; c'est la littérature
                  « régulation de l'activité, variabilité, compromis » du périmètre.
SOURCE PRIMAIRE : Leplat, J. (2006). « La notion de régulation dans l'analyse de
                  l'activité ». PISTES, 8(1). DOI 10.4000/pistes.3101. Revue électronique,
                  paragraphes numérotés.
SECONDAIRE      : Toralla, M.-P. & Morais, A. (2024). « Compromis et arbitrages dans
                  l'activité : réflexions à partir du modèle de double régulation ». PISTES,
                  26(1). DOI 10.4000/13g8p. — Prévot-Carpentier, M. & Toupin, C. (2024).
                  « Le modèle de double régulation de l'activité : un modèle-guide pour la
                  formation en ergonomie à l'Université ». PISTES. DOI 10.4000/130lc. Deux
                  textes récents qui traitent le modèle **pour lui-même**, ce qui est rare et
                  précieux ; accessibilité non vérifiée individuellement.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **risque de collision de vocabulaire à signaler explicitement au
                  rédacteur** : « régulation » désigne ici l'ajustement de l'activité par
                  l'opérateur, et non la production de règles au sens de Reynaud — dont la
                  fiche `regulation-controle-autonome` est déjà publiée en sociologie des
                  organisations. Deux objets différents sous un même mot. Voir la section
                  « Vérification de non-doublon ».
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue ; le texte s'ouvre sur une
                  définition empruntée à l'automatique (Naslin, 1958) avant d'en faire la
                  transposition à l'activité humaine. Article long (plusieurs dizaines de
                  milliers de signes). Même régime d'accès qu'au candidat 3 (Anubis sur
                  `curl`, rendu via `WebFetch`).
CITABLE         : probablement, en français ; **attention** : la phrase la plus définitionnelle
                  du début est une **citation d'un tiers** (Naslin) et non de Leplat — il
                  faudra une phrase de l'auteur lui-même. Aucune traduction publiée
                  identifiée.
```

### 5

```
CANDIDAT        : Réel de l'activité et activité empêchée (clinique de l'activité)
AUTEUR(S)       : Yves Clot — seul auteur pour ce texte ; le courant « clinique de
                  l'activité » est collectif (Clot, Faïta, Scheller, Fernandez, Kostulski,
                  Bonnefond) et s'appuie explicitement sur Vygotski et sur Ivar Oddone.
PÉRIMÈTRE       : dedans — porte sur ce que le travailleur n'a pas pu faire, sur l'écart
                  entre l'activité réalisée et ce qu'elle a coûté d'empêchements ; c'est la
                  littérature « clinique de l'activité » nommée par le périmètre.
SOURCE PRIMAIRE : Clot, Y. (2004). « Action et connaissance en clinique de l'activité ».
                  Activités, 1(1). DOI 10.4000/activites.1145. Revue électronique,
                  paragraphes numérotés.
SECONDAIRE      : Sznelwar, L. I., Mascia, F. L. & Bouyer, G. (2006). « L'empêchement au
                  travail : une source majeure de TMS ? ». Activités, 3(2).
                  DOI 10.4000/activites.1339. — Bonnefond, J.-Y. & Clot, Y. (2018).
                  « Clinique du travail et santé au travail : ouvertures, perspectives et
                  limites ». PISTES, 20(1). DOI 10.4000/pistes.5538 (cosigné par Clot :
                  c'est donc autant une source primaire tardive qu'une secondaire).
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : signal de **vulgarisation dominante** : « activité empêchée » et
                  « souffrance au travail » circulent très largement hors du champ (presse,
                  formation, discours syndical et managérial sur les RPS), souvent en
                  confondant Clot et Dejours (candidat 18), qui s'opposent sur le fond. Le
                  contrôle devra tenir les deux séparés.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue ; un passage sur le « volume »
                  du réel de l'activité par rapport à l'activité réalisée a été repéré, ainsi
                  qu'un verbatim d'opérateur (« Je ne comprends pas. Dans ce bureau c'est
                  devenu la course »). **Le libellé exact de la phrase théorique n'est pas
                  fiable en l'état** (rendu par intermédiaire) : la formule la plus connue de
                  l'auteur circule sous plusieurs variantes et doit être relevée mot pour mot
                  sur le texte, sans quoi la citation sera renvoyée par le contrôle.
CITABLE         : oui, en français, langue d'origine ; aucune traduction publiée identifiée
                  pour ce texte précis.
```

### 6

```
CANDIDAT        : Genre professionnel et style — et l'autoconfrontation croisée
AUTEUR(S)       : Yves Clot, Daniel Faïta, Gabriel Fernandez, Livia Scheller — **coécrit à
                  quatre**. L'attribution usuelle du couple genre/style au seul duo
                  Clot & Faïta (1er texte souvent cité : Travailler, 2000, n°4) est à
                  vérifier : le texte ouvert que voici porte quatre signatures.
PÉRIMÈTRE       : dedans — porte sur ce que le métier prescrit collectivement à ceux qui
                  l'exercent (genre) et sur la marge personnelle de retouche (style), donc
                  sur ce qui rend l'activité tenable ; et sur la méthode par laquelle on le
                  fait dire aux opérateurs eux-mêmes.
SOURCE PRIMAIRE : Clot, Y., Faïta, D., Fernandez, G. & Scheller, L. (2000). « Entretiens en
                  autoconfrontation croisée : une méthode en clinique de l'activité ».
                  PISTES, 2(1). DOI 10.4000/pistes.3833. Revue électronique.
SECONDAIRE      : Bonnemain, A., Perrot, E. & Kostulski, K. (2015). « Le processus
                  d'observation, son développement et ses effets dans la méthode des
                  autoconfrontations croisées en clinique de l'activité ». Activités, 12(2).
                  DOI 10.4000/activites.1111. — Collard, D. & Suquet, J.-B. (2013).
                  « Indicateurs de gestion et difficultés de renouvellement du "genre
                  professionnel" ». Activités, 10(1). DOI 10.4000/activites.772.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **le texte le plus canonique de ce concept n'est pas celui-ci** : Clot, Y.
                  & Faïta, D. (2000), « Genres et styles en analyse du travail. Concepts et
                  méthodes », Travailler, 4, p. 7-42, est la référence habituelle et **n'a
                  été trouvée ouverte nulle part** (revue *Travailler* diffusée par Cairn,
                  403 ; rien sur HAL : la requête « genres styles analyse du travail » ne
                  rend aucun résultat pertinent). Deuxième entrée possible mais dans une
                  autre langue : l'entrée de dictionnaire signée Clot, « Géneros y estilos
                  profesionales » / « Géneros e estilos profissionais », Laboreal, 2014
                  (DOI 10.4000/laboreal.5469 et 10.4000/laboreal.5460) — **publiée en
                  espagnol et en portugais seulement**, l'original français n'étant pas
                  diffusé. Le candidat repose donc sur un texte ouvert qui contient les deux
                  notions sans être leur texte de référence : à assumer explicitement.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; définitions du
                  genre, du style et de la méthode d'autoconfrontation croisée toutes trois
                  présentes et localisables dans le corps du texte.
CITABLE         : oui, en français ; aucune traduction publiée identifiée pour ce texte.
```

### 7

```
CANDIDAT        : Ergonomie de la tâche / ergonomie de l'activité — la dispute fondatrice
AUTEUR(S)       : François Hubault & Fabrice Bourgeois — coécrit
PÉRIMÈTRE       : dedans — porte frontalement sur la distinction tâche/activité, et sur le
                  fait qu'elle **est disputée** à l'intérieur même du champ ; c'est le
                  premier item de la liste de littératures du périmètre.
SOURCE PRIMAIRE : Hubault, F. & Bourgeois, F. (2004). « Disputes sur l'ergonomie de la tâche
                  et de l'activité, ou la finalité de l'ergonomie en question ». Activités,
                  1(1). DOI 10.4000/activites.1149. Revue électronique.
SECONDAIRE      : Karnas, G. & Salengros, P. (2017 [1985]). « L'analyse du travail trente ans
                  après Ombredane et Faverge ». PISTES, 19(2). DOI 10.4000/pistes.5122 —
                  réédition d'un bilan disciplinaire, exactement le type de texte
                  rétrospectif que le périmètre demande de mobiliser. Accessibilité non
                  vérifiée individuellement.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **c'est le candidat qui porte le plus d'information sur l'état du champ** :
                  il montre que la distinction fondatrice n'est pas un acquis paisible mais
                  une ligne de fracture sur la finalité même de la discipline. À ce titre il
                  est aussi le plus exposé au risque de carte « trop large » : le texte parle
                  d'une querelle entre courants, pas d'un mécanisme observable dans son
                  propre travail (troisième condition du test d'entrée). À trancher par
                  lecture directe.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; une phrase
                  posant la distinction comme fondatrice de l'ergonomie a été repérée dans le
                  corps du texte (libellé exact à recontrôler par lecture directe).
CITABLE         : probablement, en français ; aucune traduction publiée identifiée.
```

### 8

```
CANDIDAT        : Marge de manœuvre — l'espace laissé aux modes opératoires possibles
AUTEUR(S)       : Fabien Coutarel, François Daniellou, Bernard Dugué — coécrit à trois. Le
                  concept est plus ancien que ce texte et **collectif** : il circule dans
                  l'ergonomie francophone depuis au moins les années 1990 sans texte
                  fondateur univoque repéré — point à documenter, pas à masquer.
PÉRIMÈTRE       : dedans — porte sur ce qui autorise ou interdit à l'opérateur de varier ses
                  façons de faire, donc sur les conditions de possibilité de la régulation.
SOURCE PRIMAIRE : Coutarel, F., Daniellou, F. & Dugué, B. (2003). « Interroger l'organisation
                  du travail au regard des marges de manœuvre en conception et en
                  fonctionnement. La rotation est-elle une solution aux TMS ? ». PISTES,
                  5(2). DOI 10.4000/pistes.3328.
SECONDAIRE      : Norval, M., Zare, M., Brunet, R. et al. (2019). « Intérêt de la Marge de
                  Manœuvre Situationnelle pour le ciblage des situations à risque de Troubles
                  Musculo-Squelettiques ». Activités, 16(2). DOI 10.4000/activites.4588. —
                  Coutarel, F., Zare, M. & Caroly, S. (2024). « Marge·s de manœuvre : des
                  concepts à la transformation du travail » (notice HAL repérée, **sans
                  fichier déposé**). — Cromer, D., Bonnemain, A. & Coutarel, F. (2023). « Du
                  développement du pouvoir d'agir au développement des marges de manœuvre ».
                  Activités, 20(2). DOI 10.4000/activites.8620.
FRANCOPHONE     : c'est la source elle-même ; c'est aussi le concept le plus densément
                  travaillé en français du lot (333 notices HAL sur « marges de manœuvre
                  travail », dont plusieurs thèses en texte intégral).
SIGNAL          : **concept en cours de scission** : la littérature récente distingue « marge
                  de manœuvre situationnelle » (Norval et al.) et l'usage générique, et un
                  texte de 2024 pose explicitement la question de son « statut ontologique »
                  (Coutarel, Récopé, Compan, notice HAL sans fichier). Un rédacteur qui
                  traiterait « la » marge de manœuvre au singulier passerait à côté de cette
                  discussion vive.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; deux
                  formulations complémentaires du concept (en conception et en
                  fonctionnement) localisées dans le corps du texte.
CITABLE         : oui, en français ; aucune traduction publiée identifiée.
```

### 9

```
CANDIDAT        : Simulation de l'activité future probable
AUTEUR(S)       : François Daniellou — seul auteur pour ce texte
PÉRIMÈTRE       : dedans — porte sur le fait qu'on ne peut pas prescrire l'activité future,
                  seulement l'espace dans lequel elle pourra se déployer ; c'est le versant
                  « conception » de la distinction prescrit/réel.
SOURCE PRIMAIRE : Daniellou, F. (2007). « Des fonctions de la simulation des situations de
                  travail en ergonomie ». Activités, 4(2). DOI 10.4000/activites.1696.
SECONDAIRE      : Daniellou, F. (2007). « Simulating future work activity is not only a way
                  of improving workstation design ». Activités, 4(2).
                  DOI 10.4000/activites.1704 — **version anglaise du même texte publiée par
                  la revue**, ce qui en fait une traduction publiée disponible, pas une
                  secondaire. — Van Belleghem, L. (2021). « Vers de nouveaux territoires
                  d'intervention : émergence et usages de la simulation du travail à
                  distance ». Activités, 18(1). DOI 10.4000/activites.7083.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : signal de **confusion terminologique probable** : « simulation » désigne
                  aujourd'hui massivement, dans la littérature de formation (santé, aviation,
                  enseignement), un dispositif pédagogique — les sommaires d'*Activités*
                  montrent au moins une douzaine d'articles récents en ce sens. Le concept
                  visé ici est autre : simuler l'activité future dans un projet de conception.
                  Risque élevé de carte qui glisse vers le sens pédagogique.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; passage repéré
                  sur l'impossibilité de prévoir en détail l'activité réelle des utilisateurs
                  futurs (libellé exact à recontrôler par lecture directe).
CITABLE         : oui, en français, avec **traduction publiée par la revue elle-même** — cas
                  favorable et rare dans ce champ.
```

### 10

```
CANDIDAT        : L'activité comme débat de normes et usage de soi (ergologie)
AUTEUR(S)       : Yves Schwartz — seul auteur pour ce texte. L'ergologie est un programme
                  collectif (Schwartz, Durrive, Di Ruzza, Efros) et la notion d'activité qu'il
                  mobilise est explicitement présentée comme héritée (Canguilhem, Marx) : le
                  texte est un aperçu historique, pas une revendication de paternité.
PÉRIMÈTRE       : dedans — porte sur ce que travailler exige de celui qui travaille (arbitrer
                  entre des normes qui ne se recouvrent pas), donc sur le coût de l'écart
                  prescrit/réel.
SOURCE PRIMAIRE : Schwartz, Y. (2007). « Un bref aperçu de l'histoire culturelle du concept
                  d'activité ». Activités, 4(2). DOI 10.4000/activites.1728.
SECONDAIRE      : Efros, D. & Schwartz, Y. (2009). « Résistances, transgressions,
                  transformations : l'impossible invivable dans les situations de travail ».
                  HAL halshs-00505855, PDF déposé (accessibilité non vérifiée
                  individuellement ; cosigné Schwartz, donc autant primaire que secondaire). —
                  Schwartz, Y. (2005). « Actividade », entrée du dictionnaire de Laboreal,
                  DOI 10.4000/laboreal.14272 — **en portugais seulement**.
FRANCOPHONE     : c'est la source elle-même. L'ergologie est un courant intégralement
                  francophone, adossé à l'université d'Aix-Marseille, et sa diffusion se fait
                  surtout vers le Brésil et le Portugal (d'où la place de *Laboreal*).
SIGNAL          : **candidat le plus exposé au reproche de non-enseignabilité** (troisième
                  condition du test d'entrée) : le vocabulaire ergologique — « dramatiques
                  d'usage de soi », « corps-soi », « renormalisation », « entités
                  collectives relativement pertinentes » — est réputé difficile, et le texte
                  retenu est un aperçu historique et non une démonstration sur un terrain. Si
                  le lecteur primaire ne trouve pas de passage court, autonome et
                  reconnaissable par un non-spécialiste, ce candidat s'arrête.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; l'auteur y
                  qualifie l'activité de concept « transgressif, synthétique et non
                  localisable » et mobilise le débat de normes (libellés à recontrôler par
                  lecture directe).
CITABLE         : à établir — voir SIGNAL. En français, langue d'origine ; aucune traduction
                  française à chercher, mais des versions lusophones et hispanophones
                  existent pour d'autres textes du même auteur.
```

### 11

```
CANDIDAT        : Travail collectif et collectif de travail — deux choses distinctes
AUTEUR(S)       : Sandrine Caroly & Annie Weill-Fassina — coécrit
PÉRIMÈTRE       : dedans — porte sur ce que coopérer suppose et ce qu'il coûte dans
                  l'activité réelle ; dernier item de la liste de littératures du périmètre.
SOURCE PRIMAIRE : Caroly, S. & Weill-Fassina, A. (2007). « En quoi différentes approches de
                  l'activité collective des relations de services interrogent la pluralité
                  des modèles de l'activité en ergonomie ? ». Activités, 4(1).
                  DOI 10.4000/activites.1414.
SECONDAIRE      : Caroly, S. & Weill-Fassina, A. (2007). « How do different approaches to
                  collective activity in service relations call into question the plurality
                  of ergonomic models of activity ? ». Activités, 4(1).
                  DOI 10.4000/activites.1429 — **version anglaise publiée par la revue**. —
                  Caroly, S. (2013). « Les conditions pour mobiliser les acteurs de la
                  prévention des TMS : construire du collectif de travail entre pairs pour
                  développer le métier et favoriser le travail collectif
                  pluri-professionnel ». PISTES, 15(2). DOI 10.4000/pistes.3400.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **le texte de référence du champ sur ce point est un ouvrage non
                  ouvrable** : de Terssac, G. (2002), Le travail : une activité collective,
                  Toulouse, Octarès — repéré uniquement par son compte rendu signé Leplat
                  dans PISTES (DOI 10.4000/pistes.3791), jamais en texte intégral. Le
                  candidat retenu ici est donc un article de discussion des modèles, plus
                  étroit que le livre mais réellement ouvrable — même figure de cas que
                  Bruno/Benchmarking au passage précédent.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; distinction
                  entre coopération, travail collectif et collectif de travail présente et
                  localisable, avec au moins une formule courte sur le collectif comme
                  construction et non comme donnée (libellé à recontrôler).
CITABLE         : oui, en français, avec version anglaise publiée par la revue.
```

### 12

```
CANDIDAT        : Concevoir en tenant compte de l'activité — l'artefact porte des hypothèses
                  sur son usager
AUTEUR(S)       : Pascal Béguin — seul auteur
PÉRIMÈTRE       : dedans — porte sur ce que la conception décide à l'avance de l'activité
                  possible, et donc sur ce qu'elle empêche ; adossé à l'activité
                  instrumentée (candidats 1 et 2) sans se confondre avec elle.
SOURCE PRIMAIRE : Béguin, P. (2007). « Prendre en compte l'activité de travail pour
                  concevoir ». Activités, 4(2). DOI 10.4000/activites.1719.
SECONDAIRE      : Béguin, P. (2007). « Taking activity into account during the design
                  process ». Activités, 4(2). DOI 10.4000/activites.1727 — **version anglaise
                  publiée par la revue**. — Béguin, P. & Cerf, M. (2004). « Formes et enjeux
                  de l'analyse de l'activité pour la conception des systèmes de travail ».
                  Activités, 1(1). DOI 10.4000/activites.1156. — Béguin, P. & Clot, Y. (2004).
                  « L'action située dans le développement de l'activité ». Activités, 1(2).
                  DOI 10.4000/activites.1237.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **frontière à surveiller de près avec `human-factors`** : « conception de
                  systèmes techniques » figure explicitement dans les rejets du périmètre.
                  Ce qui maintient ce candidat dedans, c'est que son objet est le
                  développement conjoint de l'artefact et de l'activité de celui qui s'en
                  sert, et non la performance du système. À retrancher si la lecture directe
                  fait apparaître l'inverse.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; passages
                  repérés sur les « espaces d'activités futures possibles » et sur les
                  hypothèses cristallisées dans le système technique (libellés à recontrôler
                  par lecture directe).
CITABLE         : oui, en français, avec version anglaise publiée par la revue.
```

### 13

```
CANDIDAT        : Environnement capacitant — des ressources aux capabilités
AUTEUR(S)       : Justine Arnoud & Pierre Falzon — coécrit. **Le concept vient d'ailleurs** :
                  il transpose les « capabilités » d'Amartya Sen, et sa mise en circulation
                  ergonomique est habituellement portée au crédit de Falzon (et de Falzon &
                  Mollo). Attribution en trois temps à documenter précisément : Sen →
                  Falzon/Mollo → Arnoud & Falzon.
PÉRIMÈTRE       : dedans — porte sur ce qui, dans l'organisation, permet ou empêche que
                  l'activité développe celui qui la mène ; c'est le versant « ergonomie
                  constructive » du champ.
SOURCE PRIMAIRE : Arnoud, J. & Falzon, P. (2013). « Changement organisationnel et
                  reconception de l'organisation : des ressources aux capabilités ».
                  Activités, 10(2). DOI 10.4000/activites.760.
SECONDAIRE      : Barcellini, F. (2017). « Intervention Ergonomique Capacitante : bilan des
                  connaissances actuelles et perspectives de développement ». Activités,
                  14(1). DOI 10.4000/activites.3041 — revue de littérature dédiée, exactement
                  le type de texte demandé par le périmètre. — Raspaud, A. & Falzon, P.
                  (2020). « De Sen à la pratique ergonomique : conditions et moyens pour une
                  intervention ergonomique capacitante ». PISTES. DOI 10.4000/pistes.6753.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **le texte fondateur du couple n'a été trouvé qu'en portugais** : Falzon, P.
                  & Mollo, V. (2009), « Para uma ergonomia construtiva : as condições para um
                  trabalho capacitante », Laboreal, 5(1), DOI 10.4000/laboreal.10429 —
                  l'original français (« Pour une ergonomie constructive : les conditions d'un
                  travail capacitant ») n'apparaît pas au sommaire de Laboreal et n'a pas été
                  retrouvé ailleurs. L'ouvrage de référence, Falzon, P. (dir.) (2013),
                  Ergonomie constructive, Paris, PUF, n'a pas été trouvé en ligne (repéré
                  seulement par son compte rendu signé Leplat, DOI 10.4000/activites.400) :
                  **métadonnées seules pour le livre**.
ACCESSIBILITÉ   : texte intégral confirmé pour l'article retenu — page rendue et lue, en
                  français ; formulations sur les ressources « disponibles et effectives » et
                  sur la conversion en possibilités effectives d'agir repérées dans le corps
                  du texte (libellés à recontrôler par lecture directe).
CITABLE         : probablement, en français ; aucune traduction publiée identifiée pour ce
                  texte précis.
```

### 14

```
CANDIDAT        : Tenir compte du sexe des opérateurs dans l'analyse de l'activité
AUTEUR(S)       : Karen Messing — seule autrice pour ce texte. Autrice québécoise
                  anglophone d'origine **écrivant et publiant en français** : cas utile à
                  signaler, la couche francophone de ce champ n'est pas seulement française.
PÉRIMÈTRE       : dedans — porte sur le fait que deux personnes soumises à la même
                  prescription ne réalisent pas la même activité, et sur ce que l'analyse
                  manque quand elle prend un opérateur générique.
SOURCE PRIMAIRE : Messing, K. (1999). « La pertinence de tenir compte du sexe des
                  "opérateurs" dans les études ergonomiques : bilan de recherches ». PISTES,
                  1(1). DOI 10.4000/pistes.3840. — C'est le **tout premier numéro** de la
                  revue.
SECONDAIRE      : Cloutier, E., Seifert, A. M. & Vézina, N. (2009). « Entrevue guidée avec
                  Karen Messing ». PISTES, 11(2). DOI 10.4000/pistes.2327. — Vézina, N.,
                  Chatigny, C. & Calvet, B. (2016). « L'intervention ergonomique : que
                  fait-on des caractéristiques personnelles comme le sexe et le genre ? ».
                  PISTES, 18(2). DOI 10.4000/pistes.4847. — Caroly, S. (2016). « L'ergonomie
                  du genre : quelles influences sur l'intervention et la formation ? ».
                  PISTES, 18(2). DOI 10.4000/pistes.4867.
FRANCOPHONE     : c'est la source elle-même ; le dossier PISTES 18-2 (2016) consacré au genre
                  constitue une réception francophone dense et repérée.
SIGNAL          : **deux risques de doublon à trancher avant instruction**, tous deux
                  signalés dans la section « Vérification de non-doublon » : (a) avec
                  `organisation-genree` (Acker), déjà publiée en sociologie des organisations
                  — objets différents (structure organisationnelle vs activité en situation),
                  mais proximité de libellé ; (b) avec le domaine `measurement-theory` pour le
                  texte voisin de la même autrice, Chadoin, Messing, Daly, Armstrong &
                  Vézina (2016), « "Si ce n'est pas documenté, ça n'a pas été fait" : quand
                  les indicateurs de gestion escamotent le travail invisible des femmes »,
                  PISTES 18(2), DOI 10.4000/pistes.4830 — celui-là porte sur l'indicateur et
                  non sur l'activité : **il ne s'instruit pas ici**.
ACCESSIBILITÉ   : texte intégral confirmé — page rendue et lue, en français ; passages
                  repérés sur les différences de postes, de tâches et de modes opératoires
                  selon le sexe (libellés à recontrôler par lecture directe).
CITABLE         : probablement, en français ; l'article a une version anglaise possible dans
                  la revue (non vérifiée pour ce numéro précis, contrairement à d'autres
                  textes de la même autrice qui en ont une, ex. DOI 10.4000/pistes.3285).
```

### 15

```
CANDIDAT        : L'analyse du travail — l'observation avant la mesure
AUTEUR(S)       : Jean-Marie Faverge — seul auteur des textes retenus ; l'ouvrage fondateur
                  du champ est **cosigné** : Ombredane, A. & Faverge, J.-M. (1955),
                  L'analyse du travail, Paris, PUF. Cosignature à ne pas écraser : la
                  littérature récente parle systématiquement d'« Ombredane et Faverge ».
PÉRIMÈTRE       : dedans — c'est le texte d'origine de la méthode que tout le domaine
                  suppose : observer ce qui est fait plutôt que déduire ce qui devrait
                  l'être.
SOURCE PRIMAIRE : deux voies, toutes deux ouvertes et complémentaires.
                  (a) Réédition : Faverge, J.-M. (2011 [1952]). « Analyse et structure du
                  travail ». PISTES, 13(2). DOI 10.4000/pistes.1789 — republication du texte
                  paru dans le premier numéro du Bulletin du CERP, janvier-juin 1952.
                  (b) Archives : Faverge, J.-M. (1956). « L'analyse du travail » (cours),
                  Bulletin de psychologie, 9(9), p. 509-521, DOI 10.3406/bupsy.1956.6849 ;
                  suite, 9(10), p. 587-591, DOI 10.3406/bupsy.1956.6864 ; fin, 9(11-12),
                  p. 695, DOI 10.3406/bupsy.1956.6886.
                  **L'ouvrage de 1955 lui-même n'a pas été retrouvé en ligne** (0 résultat
                  sur Internet Archive pour titre + auteurs) : métadonnées seules.
SECONDAIRE      : Ouvrier-Bonnaz, R. (2011). « Analyse et structure du travail de Jean-Marie
                  Faverge ». PISTES, 13(2). DOI 10.4000/pistes.2537 — présentation qui
                  accompagne la réédition. — Karnas, G. & Salengros, P. (2017 [1985]).
                  « L'analyse du travail trente ans après Ombredane et Faverge ». PISTES,
                  19(2). DOI 10.4000/pistes.5122.
FRANCOPHONE     : c'est la source elle-même ; la réception est aussi lusophone et hispanophone
                  (Laboreal a traduit les mêmes textes : DOI 10.4000/laboreal.9901 et
                  10.4000/laboreal.9913).
SIGNAL          : signal historiographique à porter : le champ **se réédite lui-même** — PISTES
                  et Laboreal republient régulièrement des textes de 1952-1974 avec une
                  présentation contextuelle. C'est une chance documentaire, et c'est aussi un
                  signal : ces textes ne sont pas lus dans leur édition d'origine mais dans
                  une remise en circulation datée, ce que la carte doit refléter dans sa
                  référence.
ACCESSIBILITÉ   : texte intégral confirmé sur les deux voies.
                  (a) PISTES : page rendue et lue ; l'ouverture du texte a été relevée
                  (« L'étude psychotechnique du travail comporte des démarches analytiques
                  destinées à isoler les éléments importants. »), à recontrôler mot pour mot.
                  (b) Persée : `https://www.persee.fr/doc/bupsy_0007-4403_1956_num_9_9_6849`
                  HTTP 200, `text/html`, 89 943 octets, texte OCR de la première page présent
                  dans le HTML (mention « Cours des 13, 20, 27 février… ») ;
                  `.../bupsy_0007-4403_1956_num_9_10_6864` HTTP 200, 75 204 octets ;
                  `.../bupsy_0007-4403_1956_num_9_11_6886` HTTP 200, 69 130 octets — ce
                  dernier tient sur **une page** (p. 695) et est donc **intégralement** dans
                  le HTML. Pour les deux autres : **première page seulement** (voir la note
                  méthodologique sur Persée).
CITABLE         : oui, en français, langue d'origine. La voie (a) est la plus sûre pour un
                  passage court et autonome ; la voie (b) ne garantit qu'une citation prise
                  dans la première page.
```

### 16

```
CANDIDAT        : Charge de travail et variation des modes opératoires
AUTEUR(S)       : Jean-Claude Sperandio — seul auteur
PÉRIMÈTRE       : dedans — porte sur ce que l'opérateur change dans sa façon de faire quand
                  la charge monte, c'est-à-dire sur la régulation par les modes opératoires ;
                  c'est l'item « charge de travail et ses définitions concurrentes » du
                  périmètre, pris par son versant activité et non par sa mesure.
SOURCE PRIMAIRE : Sperandio, J.-C. (1972). « Charge de travail et variations des modes
                  opératoires ». Bulletin de psychologie, 25(302), p. 1068-1073.
                  DOI 10.3406/bupsy.1972.10377. Texte de soutenance du Doctorat d'État,
                  Université René Descartes, 3 juin 1972.
SECONDAIRE      : Leplat, J. & Sperandio, J.-C. (1967). « La mesure de la charge de travail
                  par la technique de la tâche ajoutée ». L'année psychologique, 67(1),
                  p. 255-277. DOI 10.3406/psy.1967.27563 — cosigné, donc autant primaire que
                  secondaire ; même régime d'accès Persée. — Cazabat, S., Barthe, B. &
                  Cascino, N. (2008). « Charge de travail et stress professionnel : deux
                  facettes d'une même réalité ? ». PISTES, 10(1). DOI 10.4000/pistes.2159.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : **frontière avec `human-factors` à surveiller** : la charge de travail est
                  aussi, dans la littérature anglophone, un objet de mesure (charge mentale,
                  NASA-TLX, workload) qui relève du domaine fermé. Ce qui maintient ce
                  candidat dedans est que Sperandio étudie la **variation des façons de
                  faire** des contrôleurs aériens en fonction de la charge, pas l'indice de
                  charge lui-même. La bascule est facile à manquer.
ACCESSIBILITÉ   : **texte intégral partiel** — page Persée vérifiée :
                  `https://www.persee.fr/doc/bupsy_0007-4403_1972_num_25_302_10377`,
                  HTTP 200, `text/html;charset=UTF-8`, 78 094 octets, dont 5 154 caractères
                  de texte OCR exploitable, correspondant à la **première page** de l'article
                  (l'extrait se termine sur la note de bas de page « Texte de soutenance pour
                  le Doctorat d'État… »). Les pages 2 à 6 ne sont pas servies en texte :
                  `?page=N` sans effet, `docAsPDF` en 403 (voir note méthodologique).
CITABLE         : plausible mais **contraint** : la citation devra être prise dans la première
                  page, où l'auteur situe son objet (« problèmes d'analyse des modes
                  opératoires utilisés dans le travail réel, sur le terrain »). En français,
                  aucune traduction publiée identifiée. Si le lecteur primaire ne trouve pas
                  d'autre voie d'accès au texte complet, la carte devra se passer de citation
                  ou s'en tenir à la première page — le dire.
```

### 17

```
CANDIDAT        : Contenu des tâches et charge de travail
AUTEUR(S)       : Alain Wisner — seul auteur
PÉRIMÈTRE       : dedans — porte sur ce que le contenu réel d'une tâche impose à celui qui
                  l'exécute, contre les discours d'enrichissement/élargissement des tâches
                  des années 1970.
SOURCE PRIMAIRE : Wisner, A. (1974). « Contenu des tâches et charge de travail ». Sociologie
                  du travail, 16(4), p. 339-357. DOI 10.3406/sotra.1974.1800.
SECONDAIRE      : Schwartz, Y. (2013). « Les deux paradoxes d'Alain Wisner.
                  Anthropotechnologie et Ergologie ». Ergologia — notice HAL repérée,
                  **sans fichier déposé**. — Benchekroun, T.-H. & Weill-Fassina, A. (2020).
                  « Combats du travail réel : des legs d'Alain Wisner » — notice HAL,
                  **sans fichier**. La littérature secondaire francophone sur Wisner existe
                  mais n'est pas auto-archivée : angle mort partiel.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : l'autre concept de Wisner, l'**anthropotechnologie**, n'a **pas** de source
                  primaire francophone ouverte : Laboreal a republié « L'anthropotechnologie,
                  outil ou leurre ? » **en portugais et en espagnol seulement**
                  (DOI 10.4000/laboreal.6516 et 10.4000/laboreal.6526), et l'original français
                  n'a pas été retrouvé. Ce second concept part donc en angle mort, pas en
                  candidat.
ACCESSIBILITÉ   : **texte intégral partiel** — page Persée vérifiée :
                  `https://www.persee.fr/doc/sotra_0038-0296_1974_num_16_4_1800`, HTTP 200,
                  `text/html;charset=UTF-8`, 98 165 octets, dont 2 695 caractères de texte OCR
                  exploitable, correspondant à la **première page** (l'article en compte 19).
                  Même limitation de plateforme que le candidat 16, vérifiée explicitement
                  sur ce document (pages 2, 5 et 19 rendent un contenu identique).
CITABLE         : plausible mais contraint à la première page, où l'auteur ouvre sur les
                  réticences suscitées par « alternance, élargissement, enrichissement des
                  tâches, direction par objectifs ». En français ; aucune traduction publiée
                  identifiée.
```

### 18

```
CANDIDAT        : Le travail répétitif n'est pas un travail sans activité mentale
AUTEUR(S)       : Catherine Teiger, Antoine Laville & Jacques Duraffourg — coécrit à trois.
                  L'équipe du laboratoire d'ergonomie du CNAM ; travail collectif documenté
                  et revendiqué comme tel par les intéressés (voir le texte rétrospectif à
                  sept signatures cité en SECONDAIRE).
PÉRIMÈTRE       : dedans — porte sur ce que font réellement des ouvrières spécialisées dont
                  la tâche prescrite est réputée n'exiger aucune activité ; c'est le cas
                  d'école du domaine et l'un des plus enseignables du lot.
SOURCE PRIMAIRE : Teiger, C., Laville, A. & Duraffourg, J. (1974). « Nature du travail des
                  O.S. : une recherche dans l'industrie électronique ». BINOP / L'Orientation
                  scolaire et professionnelle, 3(1), p. 7-21. DOI 10.3406/binop.1974.1976.
SECONDAIRE      : Teiger, C., Barbaroux, L., David, M., Duraffourg, J., Galisson, M.-T.,
                  Laville, A. & Thareaut, L. (2006). « Quand les ergonomes sont sortis du
                  laboratoire… à propos du travail des femmes dans l'industrie électronique
                  (1963-1973) ». PISTES, 8(2). DOI 10.4000/pistes.3045 — retour des auteurs
                  eux-mêmes sur cette recherche, trente ans après. — Jedlicki, F. & Legrand,
                  M. (2017). « Grand entretien avec Catherine Teiger ». PISTES, 19(2).
                  DOI 10.4000/pistes.4918.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : ce candidat croise **deux littératures du périmètre à la fois** (l'analyse
                  ergonomique du travail et, sans le nommer, la question du sexe des
                  opérateurs — les O.S. étudiées sont des ouvrières) ; il croise aussi le
                  candidat 14. Signal de collectif : le texte de 2006 est signé par sept
                  personnes, ce qui montre que l'attribution à trois du texte de 1974 est
                  déjà une simplification d'un travail d'équipe. À documenter, pas à lisser.
ACCESSIBILITÉ   : **texte intégral partiel** — page Persée vérifiée :
                  `https://www.persee.fr/doc/binop_0249-6739_1974_num_3_1_1976`, HTTP 200,
                  `text/html;charset=UTF-8`, 95 728 octets, dont 3 408 caractères de texte OCR
                  exploitable correspondant à la **première page** (introduction sur les
                  O.S., le « travail en miettes » et les conflits sociaux récents). Même
                  limitation de plateforme que les candidats 16 et 17.
CITABLE         : plausible mais contraint à la première page ; en français. Le texte
                  rétrospectif de 2006 (PISTES, accès intégral) offre une voie de repli pour
                  une citation, mais elle serait alors **postérieure de trente ans** au
                  travail décrit : à signaler si elle est utilisée.
```

### 19 — accessibilité à réserve

```
CANDIDAT        : Psychodynamique du travail — stratégies défensives et souffrance
AUTEUR(S)       : Christophe Dejours — seul auteur pour l'ouvrage retenu. **Le nom même du
                  courant a changé** : l'ouvrage de 1980 relève de la « psychopathologie du
                  travail » et le sous-titre de l'édition ultérieure signale explicitement le
                  passage « de la psychopathologie à la psychodynamique du travail ». Cas net
                  de terme postérieur au texte fondateur.
PÉRIMÈTRE       : dedans — porte sur ce que l'écart prescrit/réel coûte psychiquement et sur
                  les stratégies collectives que les travailleurs élaborent pour le tenir.
                  Frontière avec « psychologie ou clinique sans situation de travail »
                  (rejet direct du périmètre) : elle est franchie **dans le bon sens** ici,
                  le terrain étant industriel, mais à revérifier sur le texte.
SOURCE PRIMAIRE : Dejours, C. Travail, usure mentale. De la psychopathologie à la
                  psychodynamique du travail. Paris, Bayard (1re éd. 1980, Le Centurion ;
                  éditions augmentées ultérieures). **Année et éditeur de l'exemplaire
                  numérisé non établis** — la notice Internet Archive ne porte ni année ni
                  langue. ISBN non relevé : à établir avant toute rédaction de carte.
SECONDAIRE      : Dejours, C. (2000). « Travail, souffrance et subjectivité ». Sociologie du
                  travail, 42(2). DOI 10.1016/s0038-0296(00)00111-4 — accessibilité non
                  vérifiée (DOI Elsevier). — Dejours, C., Le Lay, S. & Lemozy, F. (2024).
                  « Les effets subjectifs des "nouvelles" organisations du travail », rapport,
                  HAL hal-04689654, PDF déposé.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : deux signaux forts. (a) **Opposition théorique documentée avec Clot**
                  (candidat 5) sur le statut de la souffrance et sur ce qu'il faut faire du
                  collectif : les deux courants sont régulièrement confondus dans la
                  vulgarisation RPS. (b) **Vulgarisation dominante** : « souffrance au
                  travail » est passé dans le langage courant et dans l'offre de conseil,
                  très loin du texte — c'est exactement le profil que le périmètre range en
                  « management prescriptif » quand il s'agit de dispositifs vendus.
ACCESSIBILITÉ   : **texte intégral, mais sur un dépôt tiers dont la légitimité n'est pas
                  établie.** Item Internet Archive
                  `travail-usure-mentale-de-la-psychopathologie-a-la-psychodynamique-du-travail-christophe-dejours` :
                  métadonnées vérifiées par l'API (`access-restricted-item` absent, donc pas
                  de prêt contrôlé), fichiers présents et testés — PDF, HTTP 200,
                  `content-type: application/pdf`, `content-length: 15889117` (15,2 Mo), plus
                  une couche OCR `_djvu.txt` de 570 Ko. **Ce n'est ni un dépôt de l'éditeur ni
                  un dépôt institutionnel** : c'est un versement d'utilisateur, sans mention
                  d'édition, pour un ouvrage sous droits. À traiter comme le cas Strathern du
                  passage précédent : utilisable pour vérifier, à ne pas présenter comme la
                  voie d'accès normale, et à recouper avec un exemplaire imprimé ou une
                  bibliothèque (Zotero local non consultable, MCP absent).
CITABLE         : probablement — la couche OCR de 570 Ko rend le texte cherchable, ce
                  qu'aucun autre ouvrage du lot ne permet. En français, langue d'origine.
                  Mais **la pagination citée devra être celle d'une édition identifiée**, ce
                  que ce fichier ne garantit pas en l'état.
```

---

## Proposition de découpage thématique — 4 thèmes

Ce découpage sort des candidats ci-dessus, pas d'une grille a priori. Deux ensembles que le
périmètre demandait de balayer — **la charge de travail comme objet de définitions
concurrentes** et **la variabilité / le couple contrainte-astreinte** — n'ont produit aucune
source primaire pleinement ouvrable (voir angles morts) : ils n'ouvrent donc pas de thème
propre, et les deux candidats qui s'en approchent (16, 17) sont rattachés au thème de la
régulation. Un thème sans carte instruisable ne se déclare pas.

### `tache-et-activite` — Ce qui est demandé, ce qui est fait

La distinction fondatrice du domaine et la méthode qui la rend observable : ce que la
prescription écrit, ce qu'elle ne peut pas écrire, et comment on va voir.

- Hubault & Bourgeois — Disputes sur l'ergonomie de la tâche et de l'activité (candidat 7)
- Leplat — Éléments pour l'étude des documents prescripteurs (candidat 3)
- Faverge — L'analyse du travail / Analyse et structure du travail (candidat 15)
- Teiger, Laville & Duraffourg — Nature du travail des O.S. (candidat 18, accès à la
  première page seulement)

### `regulation-et-marges` — Ce que l'opérateur ajuste, et ce qui le lui permet

Comment l'activité se réajuste en permanence aux variations de la situation, à la charge et
à l'état de celui qui travaille — et à quelles conditions organisationnelles cet ajustement
reste possible.

- Leplat — La notion de régulation dans l'analyse de l'activité (candidat 4)
- Coutarel, Daniellou & Dugué — Marges de manœuvre (candidat 8)
- Sperandio — Charge de travail et variations des modes opératoires (candidat 16, accès à la
  première page seulement)
- Wisner — Contenu des tâches et charge de travail (candidat 17, accès à la première page
  seulement)
- Arnoud & Falzon — Des ressources aux capabilités (candidat 13)

### `activite-empechee-et-metier` — Ce que le travail empêche, ce que le métier soutient

Le versant clinique : ce que le travailleur n'a pas pu faire, ce que cela lui coûte, et ce
que le collectif de métier lui donne pour le tenir.

- Clot — Action et connaissance en clinique de l'activité (candidat 5)
- Clot, Faïta, Fernandez & Scheller — Genre professionnel, style, autoconfrontation croisée
  (candidat 6)
- Schwartz — L'activité comme débat de normes (candidat 10)
- Caroly & Weill-Fassina — Travail collectif et collectif de travail (candidat 11)
- Messing — Tenir compte du sexe des opérateurs (candidat 14)
- Dejours — Travail, usure mentale (candidat 19, accès sur dépôt tiers non légitimé)

### `activite-instrumentee-et-conception` — L'outil, l'activité, et ce qui se décide avant

Ce que l'artefact fait à l'activité, ce que l'activité fait à l'artefact, et le fait que la
conception décide à l'avance de ce qui sera possible.

- Rabardel — Genèse instrumentale (candidat 1)
- Rabardel — Catachrèse (candidat 2, attribution à établir)
- Béguin — Prendre en compte l'activité de travail pour concevoir (candidat 12)
- Daniellou — Simulation de l'activité future probable (candidat 9)

---

## Angles morts

### Bases et plateformes en échec — pas des constats de vide

- **OpenAlex** : échec total, identique au passage précédent (`dailyRemainingUsd: 0`).
  Aucune des vérifications de recoupement prévues (comptages de citations, découverte de
  littérature adjacente, repérage des autrices sous-indexées) n'a pu être faite.
- **Semantic Scholar** : 1 requête sur 2, la seconde en 429. Non exploitée sur le fond, mais
  cela reste un échec de disponibilité à consigner.
- **Cairn** : 403 confirmé. **C'est la perte la plus lourde de ce passage** : *Le travail
  humain* (PUF, fondée en 1933) est la revue de référence du domaine et n'est diffusée que
  là. Plusieurs textes qui auraient été des candidats de premier rang en dépendent, dont
  Clot, Y. & Simonet, P. (2015), « Pouvoirs d'agir et marges de manœuvre », Le travail
  humain (notice HAL repérée, **sans fichier**), et la revue *Travailler* (voir candidat 6).
  À reprendre dès qu'un accès existe.
- **OAI-PMH d'OpenEdition** : `ListRecords` étranglé (`Connection reset by peer`) sur trois
  tentatives, dont deux avec temporisation et reprise. Contourné par Crossref, mais le
  contournement ne rend pas les résumés ni les langues déclarées : une moisson complète
  permettrait de repérer d'un coup les articles ayant une version anglaise publiée, ce qui
  a dû être fait à la main ici.
- **Serveur MCP `documentary`** : non exposé, comme au passage précédent. **Zotero n'a donc
  pas pu être consulté**, ce qui est particulièrement coûteux dans ce domaine : les textes
  fondateurs manquants sont presque tous des ouvrages (PUF, Octarès, ANACT, La Dispute) et
  c'est exactement le type de fonds qu'une bibliothèque locale porterait. À faire avant
  d'écarter définitivement les entrées ci-dessous.
- **scite** : non connecté. Aucun repérage automatique de « repris sans discussion » vs
  « activement contesté ». Les signaux de controverse notés dans les fiches ci-dessus ont
  été inférés de la lecture des sommaires (numéros d'hommage, textes de « disputes »,
  rééditions commentées), pas d'un indicateur de citation.

### Courants et concepts repérés sans source primaire ouvrable

- **Le manuel du champ** — Guérin, F., Laville, A., Daniellou, F., Duraffourg, J. &
  Kerguelen, A., *Comprendre le travail pour le transformer. La pratique de l'ergonomie*
  (ANACT, 1991, rééditions 1997 et 2006). C'est le texte par lequel la majorité des
  ergonomes francophones apprennent la variabilité, le couple contrainte/astreinte et le
  schéma de l'activité comme régulation. **Introuvable en ligne** : 0 résultat sur Internet
  Archive pour le titre exact comme pour les auteurs. Sans lui, deux littératures du
  périmètre restent sans texte fondateur ouvrable. **Première chose à chercher au prochain
  passage.**
- **Le travail : une activité collective** — de Terssac, G. (2002), Octarès. Repéré
  uniquement par son compte rendu (PISTES, DOI 10.4000/pistes.3791). Le travail collectif
  est donc instruit ici par un article de discussion (candidat 11) et non par son ouvrage de
  référence.
- **Ergonomie constructive** — Falzon, P. (dir.) (2013), PUF. Repéré par son compte rendu
  (Activités, DOI 10.4000/activites.400). Idem : le thème existe, le livre non.
- **Anthropotechnologie** — Wisner, A. L'article de référence n'existe en accès ouvert
  qu'en **portugais et en espagnol** (Laboreal, DOI 10.4000/laboreal.6516 et
  10.4000/laboreal.6526), avec une introduction de Ferreira (10.4000/laboreal.6446) et deux
  commentaires (Geslin, 10.4000/laboreal.6533 ; Cohen, 10.4000/laboreal.6558). L'original
  français n'a pas été retrouvé. Concept francophone dont la source ouverte n'est pas
  francophone : cas remarquable, à reprendre.
- **Image opérative** — Ochanine, D. Concept russe naturalisé par l'ergonomie francophone.
  La **présentation** en français est ouverte (Weill-Fassina, PISTES 2016,
  DOI 10.4000/pistes.4655, texte intégral vérifié) mais **les textes d'Ochanine eux-mêmes
  n'y sont pas republiés en français** ; ils ne sont ouverts qu'en espagnol et en portugais
  sur Laboreal (DOI 10.4000/laboreal.5844 et 10.4000/laboreal.6308). L'original français
  (traduction de 1969 parue dans *L'image opérative*, dir. Cazamian, 1981) est en
  métadonnées seules. Écarté des candidats aussi pour une seconde raison : il touche à la
  représentation mentale pour l'action, donc à la frontière ci-dessous.
- **Savoir-faire de prudence** — Cru, D. (& Dejours, C.). Concept régulièrement cité,
  repéré par plusieurs textes secondaires sur HAL et par un compte rendu de l'ouvrage
  *Le risque et la règle* (PISTES, DOI 10.4000/pistes.4014), mais **aucun texte de Cru en
  fichier déposé** : les deux notices HAL les plus directes n'ont pas de PDF. À reprendre.
- **Entretien d'explicitation** — Vermersch, P. Non cherché de façon dédiée dans le temps
  disponible, alors que c'est l'une des méthodes de verbalisation les plus utilisées du
  champ. Angle mort assumé.
- **Didactique professionnelle** — Pastré, Samurçay, Rabardel, Vergnaud. Repérée en
  abondance dans les sommaires d'*Activités* et de *PISTES* (comptes rendus signés Leplat,
  ouvrages collectifs), mais aucune recherche dédiée n'a été menée : ce courant est
  frontalier avec les sciences de l'éducation et mérite une décision de périmètre explicite
  avant d'y consacrer une recherche.
- **Âge, expérience et sélection par le travail** — Gaudart, Volkoff, Molinié, Delgoulet.
  Deux textes ouverts ont été repérés (Gaudart, PISTES 2000, DOI 10.4000/pistes.3814 ;
  Gaudart, PISTES 2003, DOI 10.4000/pistes.3323) mais leur accessibilité n'a pas été
  vérifiée individuellement et aucun n'a été instruit comme candidat faute de temps. C'est
  probablement le **cinquième thème manquant** de ce domaine.
- **Ergotoxicologie** — Garrigou et al. (PISTES, DOI 10.4000/pistes.2137 et
  10.4000/130ld). Courant francophone original (l'efficacité réelle des protections
  individuelles au regard de l'activité). Non instruit : la frontière avec « ergonomie
  physique / normes de poste », rejetée par le périmètre, n'a pas été tranchée.

### Candidats retenus pour `human-factors`, domaine déclaré mais fermé

Consignés ici et **non rejetés**, conformément au périmètre : leur objet n'est pas hors
sujet, il relève d'un domaine qui n'est pas ouvert. Tous ont été rencontrés au cours de ce
balayage.

- **Erreur humaine et fiabilité** — Leplat, J. & de Terssac, G. (dir.), *Erreur humaine,
  fiabilité humaine dans le travail* (1985) : exemplaire repéré sur Internet Archive
  (`erreurhumainefia0000lepl`, régime d'accès non testé). Faverge, J.-M. (1964), « Esquisse
  d'une théorie de l'accident », Sociologie du travail, DOI 10.3406/sotra.1964.1170 (Persée,
  ouvert). Bourrier, M., *Organiser la fiabilité* (compte rendu PISTES
  DOI 10.4000/pistes.3760).
- **Résilience et ingénierie de la résilience** — Hollnagel, Woods & Leveson : au moins
  quatre comptes rendus signés Leplat dans PISTES et *Activités*
  (DOI 10.4000/pistes.2135, 10.4000/pistes.2898, 10.4000/pistes.3019,
  10.4000/activites.2284, ce dernier sur le principe ETTO). Cuvelier, L. & Falzon, P.
  (2011), « Resilience As Resource-based Design Of Anticipated Situations »,
  DOI 10.4000/books.pressesmines.982.
- **Image opérative et représentation pour l'action** — Ochanine (voir ci-dessus) : à
  reprendre le jour où le domaine ouvre, si la décision de frontière le range de ce côté.
- **Charge mentale mesurée** — Leplat & Sperandio (1967), « La mesure de la charge de
  travail par la technique de la tâche ajoutée », DOI 10.3406/psy.1967.27563. Ce texte-ci
  est bien un texte de **mesure** de la charge : il est cité en secondaire du candidat 16
  mais ne doit pas devenir une carte de ce domaine.
- **Gestion du risque fatigue** — Cabon, P. (2015), « Des approches prescriptives aux
  systèmes de gestion du risque fatigue », PISTES, DOI 10.4000/pistes.4571.
- **Conscience de la situation, systèmes hommes-machines** — repérés par les rééditions
  commentées de textes anciens (Michel Olivier, PISTES DOI 10.4000/pistes.3497 ; Leplat,
  Laboreal DOI 10.4000/laboreal.7894). Non instruits.

### Vérification de non-doublon

Comparé aux **17 fiches déjà validées** dans `corpus/validated/` (`déplacement des buts`,
`échelles de mesure`, `modèle de la poubelle`, `benchmarking / gouvernement par les
chiffres`, `inertie structurelle et sélection`, `isomorphisme institutionnel`, `loi de
Campbell`, `quand la mesure devient cible`, `nombres et émotions`, `organisation genrée`,
`performance totale`, `quantifier : convenir et mesurer`, `rationalité limitée`,
`réactivité des classements`, `régulation de contrôle et régulation autonome`,
`signification et invariance`, `zones d'incertitude`) : **aucun chevauchement d'identifiant
ni de concept constaté.** Trois points de vigilance, tous signalés dans les fiches
concernées :

1. **`regulation-controle-autonome` (Reynaud) vs candidat 4 (Leplat).** Même mot,
   deux objets : chez Reynaud, la production de règles par des acteurs en conflit ; chez
   Leplat, l'ajustement de son activité par un opérateur en situation. Le test de frontière
   du périmètre tranche : la règle → sociologie des organisations, l'activité de quelqu'un
   en situation → ergonomie de l'activité. Le libellé de la future carte devra rendre la
   différence visible sans lire le corps du texte.
2. **`organisation-genree` (Acker) vs candidat 14 (Messing).** L'une porte sur la structure
   organisationnelle comme productrice de genre, l'autre sur ce que l'analyse de l'activité
   manque quand elle suppose un opérateur générique. Objets distincts, proximité de libellé
   à surveiller.
3. **Frontière avec `measurement-theory`, déjà instruit.** Un texte rencontré dans ce
   balayage relève de l'autre domaine et **n'est pas retenu ici** : Chadoin, Messing, Daly,
   Armstrong & Vézina (2016), « "Si ce n'est pas documenté, ça n'a pas été fait" : quand les
   indicateurs de gestion escamotent le travail invisible des femmes », PISTES 18(2),
   DOI 10.4000/pistes.4830. Son objet est ce que l'indicateur omet — c'est le test d'entrée
   de la théorie de la mesure, mot pour mot. Signalé ici pour que la trace ne se perde pas.

### Combien de candidats viennent d'une liste écrite de mémoire ?

Aucune liste n'a été fournie (c'est la consigne). Le compte honnête est le suivant, sur
19 candidats :

- **8 candidats sont sortis d'un vidage de sommaires** — le dépouillement des 653 notices
  d'*Activités*, 602 de *PISTES* et 956 de *Laboreal* obtenues par Crossref, puis filtrage
  par mots-clés issus des **littératures** du périmètre et non de noms : candidats 3, 7, 8,
  9, 11, 12, 13, 14. Le candidat 7 (Hubault & Bourgeois) et le candidat 14 (Messing) en
  particulier n'auraient pas été trouvés autrement.
- **4 candidats sont sortis d'une recherche par auteur sur un préfixe éditeur**, donc d'un
  nom connu d'avance : candidats 4, 5, 6, 10 (Leplat, Clot, Schwartz).
- **4 candidats sont sortis d'une recherche Persée par auteur**, également guidée par des
  noms : candidats 15, 16, 17, 18 (Faverge, Sperandio, Wisner, Teiger). Ce sont les
  candidats les plus anciens du lot, et c'est là que la méthode est la plus faible : la
  strate 1950-1980 n'a pas d'index thématique exploitable, seulement des index d'auteurs.
- **3 candidats sont sortis d'une recherche par concept sur HAL** : candidats 1, 2
  (Rabardel, trouvés en cherchant « genèse instrumentale » et non « Rabardel ») et 19
  (Dejours, trouvé en cherchant le couple souffrance/travail sur Internet Archive).

Soit **11 sur 19 obtenus sans partir d'un nom**, et 8 sur 19 obtenus en partant d'un nom.
C'est mieux que le passage précédent, mais la limite structurelle demeure : formuler une
requête par littérature suppose déjà de connaître le vocabulaire du champ, et ce vocabulaire
a été appris quelque part. Le correctif le plus efficace ici a été le vidage de sommaires
complets, qui expose l'inventaire réel d'une revue plutôt que ce qu'on savait y chercher —
à refaire systématiquement, et à étendre à *Laboreal* (956 notices non dépouillées faute de
temps) et aux archives Persée.

**Un déséquilibre à corriger et non à masquer** : sur 19 candidats, **9 reposent sur des
textes publiés dans deux revues seulement** (*Activités* et *PISTES*), et une part
importante des auteurs retenus gravitent autour de deux institutions (le CNAM et
l'université de Grenoble/Bordeaux pour la filière ergonomie de l'activité). Le périmètre
prévenait : « si le lot final ne tient qu'à des textes anglophones, ou qu'à une seule équipe
de recherche, la cartographie n'a pas fait son travail ». Le premier écueil est évité, le
second ne l'est qu'à moitié — la présence du Québec (Messing, Vézina, Coutarel via PISTES)
et de l'ergologie aixoise (Schwartz) corrige partiellement, mais Cairn fermé prive le lot de
toute la production de *Le travail humain*, qui est précisément l'autre pôle du champ.
