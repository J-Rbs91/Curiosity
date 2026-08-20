# Cartographie — `cybernetics`

Scouting réalisé le 20 août 2026. Domaine ouvert le même jour dans `corpus/perimeter.md`,
cinquième domaine instruit du corpus et premier de la famille « Comprendre la production et
les systèmes ».

**Ce passage part de zéro.** Contrairement à `human-factors`, qui avait hérité de six
ensembles consignés en angle mort par `activity-ergonomics`, ce domaine n'a **aucun stock
d'entrée**. La cartographie précédente a cherché explicitement ce qui, chez elle, relevait de
la cybernétique — vérification faite sur Rasmussen 1981, Vicente & Rasmussen 1992 et
Sheridan, Verplank & Brooks 1978 — et a conclu « le domaine se déclare vide pour ce
passage ». Il n'y avait donc rien à retester ni à recopier : tout ce qui suit sort d'un
balayage mené ici, par les dix littératures que le périmètre nomme, et non par une liste de
noms.

Deux bascules méthodologiques ont décidé du lot, et aucune n'était prévue au départ :

1. **Persée sert le texte intégral, page par page, sur une route que les trois passages
   précédents n'avaient pas trouvée.** La note de `human-factors` disait « `/doc/<id>` rend la
   première page en HTML/OCR, `docAsPDF` échoue », et un candidat entier (Faverge 1964) était
   tombé pour cette raison. C'est exact pour `/doc/<id>`, mais la page de notice porte, dans
   ses attributs `data-content-url`, une **URL par page** de la forme
   `https://www.persee.fr/doc/page/<docid>/<pageid>_<numéro>_0000` qui répond `200` et rend
   l'OCR de cette page-là. Les dix pages de Piaget 1953, les seize d'Atlan 1972, les douze de
   Brender 1978 ont été obtenues ainsi, une requête par page. **Quatre des treize candidats de
   ce lot en dépendent, et ils sont tous francophones.** Cette route est à réessayer sur les
   dossiers arrêtés des passages précédents.
2. **Le fonds `universallibrary` / `millionbooks` d'Internet Archive porte les actes de
   colloque des années 1960 sans aucune restriction d'emprunt**, là où les mêmes ouvrages en
   collection `inlibrary` sont en prêt contrôlé. C'est ce fonds qui a rendu *Self-Organizing
   Systems* (1960), d'où sortent trois candidats, et une seconde copie de l'ouvrage d'Ashby.

---

## Note méthodologique — outils effectivement utilisés

Les outils `mcp__documentary__*` **n'étaient pas exposés** dans la liste d'outils de cette
session, comme aux quatre passages précédents : ni `search_literature`, ni
`search_francophone`, ni `verify_reference`, ni `zotero_search` n'ont pu être appelés.
**Zotero est donc resté inaccessible**, ce qui coûte cher ici : les textes fondateurs
manquants de ce domaine sont des ouvrages toujours exploités (Wiener 1948, Beer 1972-1979,
Maturana & Varela 1980, Bateson 1972), exactement le fonds qu'une bibliothèque locale
porterait. Tout le balayage a été fait par accès HTTP direct.

`poppler-utils` était absent : installé en cours de session (`apt-get update` puis
`apt-get install poppler-utils`, la première tentative échouant en `404` sur un paquet
périmé). `pdftotext` a servi sur cinq documents.

- **OpenAlex** — **une seule requête a abouti** (`200`, 4 834 résultats sur
  « requisite variety cybernetics »), la suivante a rendu
  `"Rate limit exceeded" / dailyRemainingUsd: 0 / retryAfter: 14387`. Le budget quotidien
  était épuisé dès le deuxième appel. **Échec de base, pas constat de vide** : aucun balayage
  bibliométrique n'a pu être conduit par cette voie.
- **Semantic Scholar** — testé une fois : `429 Too Many Requests`. Même conclusion.
- **Crossref** (`api.crossref.org`) — fonctionnel tout du long, sans incident. Utilisé pour
  résoudre des titres en DOI, confirmer les cosignatures, et vérifier l'existence de la
  littérature secondaire. C'est la base la plus fiable de cette session.
- **Unpaywall** (`api.unpaywall.org`) — fonctionnel, utilisé systématiquement avant toute
  recherche d'accès. A évité beaucoup de temps perdu : `is_oa: false` confirmé pour
  Rosenblueth, Wiener & Bigelow 1943 (`10.1086/286788`), Cannon 1929
  (`10.1152/physrev.1929.9.3.399`), Conant & Ashby 1970 (`10.1080/00207727008920220`),
  Beer 1984 (`10.1057/jors.1984.2`), Powers 1978 (`10.1037/0033-295X.85.5.417`),
  McCulloch & Pitts 1943 (`10.1007/BF02478259`), Shannon 1948
  (`10.1002/j.1538-7305.1948.tb01338.x`), Glanville 2004 (`10.1108/03684920410556016`),
  Powers, Clark & McFarland 1960 (`10.2466/pms.1960.11.1.71`).
  **Piège identifié et à documenter pour la suite de la chaîne** : Unpaywall déclare
  `is_oa: false` sur les DOI Persée (`10.3406/comm.1972.1256`, `10.3406/psy.1953.8725`,
  `10.3406/ecoap.1978.4249`) alors que **Persée sert le texte intégral de ces trois articles**.
  Un `is_oa: false` sur un DOI `10.3406/` ne doit jamais clore une recherche.
- **Persée** — **la base la plus productive de ce lot pour le français**, et sur une route
  différente de celle documentée jusqu'ici (voir préambule). La recherche
  (`/search?ta=article&q=...`) fonctionne et rend des identifiants de document ; la notice
  `/doc/<id>` ne rend qu'une page ; l'endpoint `/doc/page/<docid>/<pageid>` rend chaque page.
  Sur 45 requêtes de page, deux ont rendu `000` (échec réseau transitoire) et ont abouti à la
  reprise. Aucun défi anti-robot, aucun mur de connexion rencontré.
- **Internet Archive** (`advancedsearch.php` + `/metadata/<id>` + `/download/<id>/...`) —
  fonctionnel. Chaque item a été vérifié par `access-restricted-item` **avant** tout usage.
  Le constat qui structure ce lot : **presque tout le canon du domaine y est en prêt numérique
  contrôlé** (`inlibrary`, `access-restricted-item: true`) — Wiener 1948 et 1961, *The Human
  Use of Human Beings*, *An Introduction to Cybernetics* dans ses deux exemplaires
  bibliothèque, *Principles of Self-Organization* (1962), *Cybernetics and Management* (1959),
  *The Heart of Enterprise*, *Platform for Change*, *The Wisdom of the Body*, *Behavior: The
  Control of Perception*, le recueil de Buckley (1968). Aucun n'a été emprunté ni contourné.
  Le fonds `universallibrary` / `millionbooks`, lui, est sans restriction et a rendu deux
  volumes utiles.
- **HAL** — fonctionnel, requêtes courtes conformément à la règle (tous les termes exigés).
  **Productif sur la littérature secondaire francophone, muet sur les sources primaires** :
  aucun texte fondateur de cybernétique française n'y est déposé. `"variété requise"` rend
  2 documents, `"système viable" cybernétique` en rend 1, aucun n'étant une source primaire du
  champ. En revanche Ronan Le Roux, Mathieu Triclot, Jérôme Segal, Fabien Ferri y déposent en
  texte intégral — voir la section secondaire de chaque candidat.
- **theses.fr** (`api.v1`) — fonctionnel. A confirmé l'existence de la thèse de Ronan Le Roux
  (2010EHES0107) et de celle de Jérôme Segal (1998LYO20076), les deux travaux de référence sur
  l'histoire française du champ.
- **OpenEdition Books** (`books.openedition.org`) — **les pages de livre répondent `200` en
  `curl` direct, sans défi Anubis** (deux vérifications). En revanche le moteur de recherche
  a échoué : `/search?q=` rend `404`, et `search.openedition.org/results` rend `301` puis une
  page vide de 973 octets (interface JavaScript). **La plateforme est ouverte mais je n'ai pas
  su l'interroger** : c'est une limite de ce passage, pas un constat de vide, et elle est
  d'autant plus gênante que c'est cette voie qui avait débloqué `measurement-theory`.
- **Gallica / BnF** — `SRU` a rendu `403`. Non exploitée. Voir angles morts : la piste Claude
  Bernard n'a donc pas pu être vérifiée.
- **Numdam** — deux formes d'URL de recherche essayées, `400 Bad request` les deux fois. Non
  exploitée.
- **`pespmc1.vub.ac.be` (Principia Cybernetica Web)** — fonctionnel, et **c'est la seule
  autorisation de diffusion explicite rencontrée dans tout ce balayage** : le PDF de
  l'ouvrage d'Ashby porte en page de garde « Copyright © 1956, 1999 by The Estate of W. Ross
  Ashby. Non-profit reproduction and distribution of this text for educational and research
  reasons is permitted providing this copyright statement is included » et « With kind
  permission of the Estate trustees : Jill Ashby, Sally Bannister, Ruth Pettit ». La page
  d'hébergement le confirme en toutes lettres. Trois candidats en sortent.
- **`livingcontrolsystems.com`** — fonctionnel. Site de l'éditeur des œuvres de William T.
  Powers (Living Control Systems Publishing), qui met en téléchargement gratuit un recueil de
  425 pages dont la page de crédits liste nommément les autorisations de reproduction
  obtenues. Un candidat en sort.
- **`cepa.info` (Constructivist E-Paper Archive)** et **`constructivist.info` (Constructivist
  Foundations)** — **mur de connexion**. Les pages de notice, la FAQ et le sommaire des
  numéros rendent tous « You are not logged in » / « Register / Log in to download the text
  for free ». Les fichiers `/fulltexts/<id>.pdf` répondent `200 application/pdf` sans
  authentification et sont indexés publiquement, mais les identifiants ne se découvrent que
  par les pages fermées. **Cette voie n'a pas été retenue comme route d'accès** et aucun
  candidat ne s'appuie dessus ; un seul fichier a été téléchargé pour établir le
  comportement du serveur. C'est un manque sérieux : c'est là que sont Maturana, Varela et von
  Foerster.
- **`digital.library.illinois.edu`** — `403 Forbidden` en `curl` **et** en `WebFetch`. C'est
  là que se trouvent les *Biological Computer Laboratory Publications (Digital Surrogates)*,
  1957-1976, numérisées par les University of Illinois Archives, dont la notice publique
  (`archon.library.illinois.edu`, accessible) indique qu'elles contiennent des textes de von
  Foerster, Ashby, Pask, Maturana, Varela et Günther, avec la mention de droits « provided for
  personal use only ». **C'est la perte la plus lourde de ce passage.**
- **`rossashby.info`** — **le W. Ross Ashby Digital Archive n'existe plus**. Le domaine
  redirige aujourd'hui vers `lizaro-casino.click` et rend `HTTP 522`. À signaler : toute
  référence bibliographique pointant vers `rossashby.info` dans la littérature secondaire est
  désormais morte.
- **`asc-cybernetics.org`** (American Society for Cybernetics) — `406` sur la racine comme sur
  une page profonde. Inatteignable dans cet environnement.
- **`metaphorum.org`** (société dédiée à l'œuvre de Stafford Beer) — accessible, mais sa page
  « papers » ne contient **aucun PDF hébergé** : uniquement des liens DOI vers *Kybernetes*
  (Emerald, fermé). Aucune voie vers Beer.
- **`repositorio.uchile.cl`** — la page de notice répond `200`, le fichier PDF est servi
  derrière un **défi de preuve de travail Anubis** (`anubis_version` dans le corps de la
  réponse). Non résolu, non contourné. Voir angles morts, Maturana & Varela.
- **scite** — non connecté dans cette session. Aucun relevé automatique de reprise ou de
  contestation. Les signaux de controverse consignés plus bas (le statut de la téléologie
  cybernétique, la dérive métaphorique de la rétroaction) ont été établis par lecture directe
  des textes, pas par un indicateur de citation.
- **WebFetch** — utilisé une fois, sur le `403` de `digital.library.illinois.edu`, sans
  succès (même code). Jamais utilisé pour franchir un défi anti-robot.
- **Le web général** (recherche) — utilisé uniquement pour **détecter** des hébergeurs
  candidats, jamais enregistré comme source. Il a servi à trouver `cepa.info`, la collection
  BCL d'Illinois et le recueil PCT ; il a aussi révélé que les copies les plus faciles de
  Rosenblueth 1943 et de Beer sont sur des pages de cours, ResearchGate, Academia, Scribd ou
  des hébergeurs anonymes — **aucune n'est une mise à disposition autorisée constatable**, et
  aucune n'a été empruntée.

Chaque candidat porte le code HTTP, le `content-type`, la taille et, quand elle a pu être
relevée, une citation localisée — plutôt qu'une affirmation d'accessibilité.

---

## Candidats — du plus solide au plus fragile (accessibilité de la source primaire)

### 1

```
CANDIDAT        : Loi de la variété requise / Law of Requisite Variety
AUTEUR(S)       : W. Ross Ashby — auteur unique. Le nom de la loi est de lui et figure en
                  toutes lettres dans le texte (« This is the law of Requisite Variety »),
                  ce n'est donc pas un cas de terme forgé par un tiers. Ashby était
                  psychiatre de formation et directeur de recherche à Barnwood House
                  (Gloucester) au moment de la rédaction — ni mathématicien ni ingénieur,
                  ce que le périmètre annonçait comme la règle plutôt que l'exception dans
                  ce champ.
PÉRIMÈTRE       : dedans — porte sur la condition qu'un régulateur doit remplir pour tenir
                  un système, prise comme principe général et démontrée sur un jeu abstrait
                  avant toute application. Littérature « la variété et sa loi » du
                  périmètre. Frontière avec `systems-thinking` tenue : le texte énonce une
                  condition de possibilité de la régulation, il ne décrit aucun comportement
                  dans le temps.
SOURCE PRIMAIRE : Ashby, W. R. (1956). An Introduction to Cybernetics. London : Chapman &
                  Hall, seconde impression 1957, catalogue n° 567/4. Chapitre 11
                  « Requisite Variety », section 11/5, p. 206-207. Pas de DOI (antérieur).
                  Édition électronique préparée pour Principia Cybernetica Web, 1999,
                  156 pages en présentation deux pages par feuillet.
SECONDAIRE      : Le Roux, R. (2009). « L'impossible constitution d'une théorie générale des
                  machines ? La cybernétique dans la France des années 1950 ». Revue de
                  synthèse, 130(1), DOI 10.1007/s11873-009-0065-8 — Unpaywall confirme
                  `is_oa: true`, dépôt HAL hal-00478459 vérifié `HTTP 200`,
                  `content-type: application/pdf`. Situe Ashby dans la réception française.
FRANCOPHONE     : la loi est presque absente de HAL en dépôt intégral : la requête
                  `"variété requise"` avec filtre fichier rend **2 documents**, aucun n'étant
                  une source primaire ni une étude dédiée. Sur Persée, la requête « Ashby
                  variété régulateur » ne rend aucun texte portant sur la loi elle-même.
                  Signalé comme un vide, pas comme un constat d'absence de littérature.
SIGNAL          : **attribution nette, mais formulation multiple.** Ashby a redonné la loi
                  en 1958 sous le titre « Requisite Variety and its Implications for the
                  Control of Complex Systems » (Cybernetica 1(2)), texte réédité en 1991
                  dans Facets of Systems Science (DOI 10.1007/978-1-4899-0718-9_28, fermé) :
                  une carte qui citerait « la formulation d'Ashby » doit dire laquelle. Le
                  corollaire le plus cité de la loi — « every good regulator of a system must
                  be a model of that system » — n'est **pas** dans ce livre : il est de
                  Conant & Ashby (1970), texte fermé (voir angles morts). Ne pas fusionner
                  les deux.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 2 023 477` (1,9 Mo), 156 pages, hébergé sur
                  `pespmc1.vub.ac.be/books/IntroCyb.pdf`. **Mise à disposition autorisée,
                  constatée sur le fichier lui-même** : page de garde portant « Copyright ©
                  1956, 1999 by The Estate of W. Ross Ashby. Non-profit reproduction and
                  distribution of this text for educational and research reasons is permitted
                  providing this copyright statement is included », « With kind permission of
                  the Estate trustees », et les noms des trois ayants droit. La page
                  d'hébergement (`/ASHBBOOK.html`) confirme que l'autorisation a été obtenue
                  par le petit-fils de l'auteur auprès de la succession. Contenu vérifié par
                  extraction : sommaire, chapitre 11 entier, index.
                  Seconde copie ouverte indépendante : Internet Archive, item
                  `AnIntroductionToCybernetics`, collections `millionbooks` /
                  `universallibrary`, `access-restricted-item` **absent**, OCR intégral servi
                  en `HTTP 200 text/plain`. À utiliser comme vérification, pas comme voie
                  normale : elle ne porte pas la mention de droits.
CITABLE         : oui, en anglais, passage court et autonome, relevé et vérifié mot pour mot :
                  « This is the law of Requisite Variety. To put it more picturesquely: only
                  variety in R can force down the variety due to D; variety can destroy
                  variety. » (section 11/5, p. 206-207). Une traduction française de
                  l'ouvrage existe (« Introduction à la cybernétique », Dunod, 1958) mais
                  n'a **pas** été localisée ni vérifiée dans cette session : ne pas citer de
                  traduction sans l'avoir ouverte.
```

### 2

```
CANDIDAT        : Le régulateur commandé par l'écart ne peut jamais être parfait /
                  The error-controlled regulator cannot be perfect
AUTEUR(S)       : W. Ross Ashby — auteur unique, même ouvrage que le candidat 1, chapitre
                  différent. Le résultat est démontré par lui ; l'expression « error-
                  controlled servomechanism » qu'il emploie est empruntée au vocabulaire de
                  l'asservissement de son époque, il ne la revendique pas.
PÉRIMÈTRE       : dedans, et c'est le cœur du périmètre — porte sur le mécanisme même par
                  lequel un système corrige son écart, et sur sa limite intrinsèque.
                  Littérature « la boucle de rétroaction et la régulation par l'écart ».
                  Frontière avec `measurement-theory` : l'objet est ce que la boucle exige du
                  signal (le canal par lequel le régulateur s'informe), pas l'effet en retour
                  d'une mesure sur le mesuré.
SOURCE PRIMAIRE : Ashby, W. R. (1956). An Introduction to Cybernetics. Chapman & Hall.
                  Chapitre 12 « The Error-Controlled Regulator », sections 12/4 et 12/5,
                  p. 222-224.
SECONDAIRE      : absente dans cette session — non cherchée spécifiquement faute de temps.
                  La littérature secondaire sur ce chapitre existe (il est le point de départ
                  de tout ce qui a été écrit sur les limites de la régulation par l'écart)
                  mais aucune référence n'a été vérifiée individuellement.
FRANCOPHONE     : cherchée sur Persée (« servomécanisme régulation modèle », « boucle
                  rétroaction système ») : les résultats francophones portant sur les boucles
                  de rétroaction sont soit de l'hydraulique appliquée, soit de la génétique
                  formelle (Richelle, voir angles morts), aucun n'énonçant ce résultat
                  général. Rien trouvé.
SIGNAL          : **résultat contre-intuitif et facile à déformer.** Ashby ne dit pas que la
                  régulation par l'écart est mauvaise, il dit qu'elle est nécessairement
                  imparfaite parce que son succès même ferme le canal d'information dont elle
                  vit. Une carte qui écrirait « la rétroaction arrive toujours trop tard »
                  dirait autre chose. Le texte insiste au contraire (12/5) sur le fait que
                  cette forme est « of the greatest importance and widest applicability » et
                  que tout le reste du livre lui est consacré.
ACCESSIBILITÉ   : texte intégral confirmé — même fichier et même autorisation que le
                  candidat 1 (`pespmc1.vub.ac.be/books/IntroCyb.pdf`, `HTTP 200`,
                  `application/pdf`, 2 023 477 octets). Chapitre 12 vérifié par extraction.
CITABLE         : oui, en anglais, passage court, relevé et vérifié mot pour mot : « the more
                  successful R is in keeping E constant, the more does R block the channel by
                  which it is receiving its necessary information. Clearly, any success by R
                  can at best be partial. » (section 12/5, p. 223-224). Même réserve que le
                  candidat 1 sur la traduction Dunod 1958, non ouverte.
```

### 3

```
CANDIDAT        : L'amplification de la régulation / Amplifying regulation
AUTEUR(S)       : W. Ross Ashby — auteur unique, même ouvrage, chapitre 14.
PÉRIMÈTRE       : dedans — porte sur ce qu'un régulateur peut obtenir au-delà de ce qu'il
                  contient, et sur le fait que la loi de la variété requise interdit la
                  magnification directe mais pas la supplémentation par étapes. Littérature
                  « la variété et sa loi », versant conséquences pratiques. C'est le chapitre
                  qui parle le plus directement à « qui régule sans en avoir les moyens »,
                  formule du périmètre.
SOURCE PRIMAIRE : Ashby, W. R. (1956). An Introduction to Cybernetics. Chapman & Hall.
                  Chapitre 14 « Amplifying Regulation », sections 14/2 à 14/4, p. 265-268
                  (pagination à revérifier, voir la réserve ci-dessous).
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : **concept rarement repris sous ce nom, et c'est un signal en soi.** Là où
                  la loi de la variété requise circule partout (jusque dans des rapports
                  d'acquisition militaire, voir angles morts), son corollaire opérationnel —
                  on peut fabriquer un grand régulateur en en sélectionnant un petit, à
                  condition que la perturbation soit répétitive — est presque absent de la
                  littérature de reprise. Une carte sur ce point apporterait quelque chose que
                  la vulgarisation du champ ne porte pas. À vérifier tout de même par une
                  recherche de citations dédiée, que cette session n'a pas pu faire (scite non
                  connecté, OpenAlex épuisé).
ACCESSIBILITÉ   : texte intégral confirmé — même fichier et même autorisation que les
                  candidats 1 et 2. Chapitre 14 vérifié par extraction, exemple du thermostat
                  et du calcul en bits inclus.
CITABLE         : oui, en anglais : « The law of Requisite Variety, like the law of
                  Conservation of Energy, absolutely prohibits any direct and simple
                  magnification but it does not prohibit supplementation. » (chapitre 14,
                  autour de la section 14/3). Relevé et vérifié mot pour mot dans le fichier.
                  **Réserve de localisation** : la mise en page deux pages par feuillet de
                  l'édition électronique désordonne les en-têtes et les numéros de page à
                  l'extraction, et l'ordre des sections y apparaît par endroits inversé
                  (14/4 avant 14/3). Le numéro de section est fiable, **le numéro de page ne
                  l'est pas** et doit être relu sur l'image du feuillet avant d'entrer dans
                  une carte. La même réserve vaut pour les candidats 1 et 2. Même remarque sur
                  la traduction Dunod, non ouverte.
```

### 4

```
CANDIDAT        : L'ordre à partir du bruit / Order from noise
AUTEUR(S)       : Heinz von Foerster — auteur unique de la communication, Department of
                  Electrical Engineering, University of Illinois. Le principe est nommé par
                  lui dans ce texte même (« I shall call the principle I am going to introduce
                  to you presently the "order from noise" principle »), en opposition explicite
                  aux deux principes qu'il attribue à Schrödinger (« order from disorder » et
                  « order from order »). Attribution documentable sur le texte, pas seulement
                  sur la tradition.
PÉRIMÈTRE       : dedans — porte sur le mécanisme par lequel un système gagne en organisation
                  en se nourrissant du désordre de son environnement, énoncé comme principe
                  général et illustré sur un dispositif matériel trivial (des cubes aimantés
                  secoués dans une boîte). Littérature « l'information, le signal et le bruit
                  en tant qu'ils servent la commande » et « la cybernétique de second ordre »
                  par son auteur, sinon encore par sa thèse.
SOURCE PRIMAIRE : von Foerster, H. (1960). « On Self-Organizing Systems and Their
                  Environments ». Dans M. C. Yovits & S. Cameron (dir.), Self-Organizing
                  Systems: Proceedings of an Interdisciplinary Conference, 5 and 6 May 1959.
                  Oxford : Pergamon Press, International Tracts in Computer Science and
                  Technology, vol. 2, p. 31-50. Le principe est énoncé p. 43-44. Conférence
                  organisée par l'Armour Research Foundation et l'Information Systems Branch
                  de l'Office of Naval Research.
SECONDAIRE      : Atlan, H. (1972), candidat 7 de ce lot, discute et reprend explicitement ce
                  principe en français vingt ans avant sa diffusion large — c'est à la fois
                  une source secondaire et un candidat autonome. Voir le signal du candidat 7.
FRANCOPHONE     : oui, par Atlan 1972 (candidat 7), Persée, texte intégral vérifié.
SIGNAL          : **le titre du texte contredit sa thèse d'ouverture, et cela se perd
                  toujours dans la reprise.** Von Foerster ouvre sa communication en soutenant
                  qu'il n'existe pas de systèmes auto-organisateurs au sens strict, avant de
                  proposer le principe qui l'a rendu célèbre : citer le principe sans dire
                  qu'il est énoncé dans un texte qui commence par nier son objet serait un
                  contresens de fond. Second signal : la formule circule aujourd'hui hors de
                  tout contexte cybernétique, comme slogan d'innovation. Le corpus n'instruit
                  pas la métaphore.
ACCESSIBILITÉ   : texte intégral confirmé — Internet Archive, item `SelfOrganizingSystems`,
                  collections `millionbooks` / `universallibrary`, `access-restricted-item`
                  **absent** (vérifié sur `/metadata/`). OCR complet obtenu en `HTTP 200`,
                  `content-type: text/plain`, `content-length: 695 215` (679 Ko) sur
                  `archive.org/download/SelfOrganizingSystems/SelfOrganizingSystems_djvu.txt`.
                  Un PDF image de 22 150 627 octets est listé dans les métadonnées mais **n'a
                  pas été téléchargé** (délai dépassé sur une tentative) : la pagination du
                  volume est néanmoins lisible dans l'OCR. **Réserve à transmettre au lecteur
                  primaire** : c'est un OCR de numérisation de masse, avec des coquilles
                  visibles (guillemets, césures) ; toute citation doit être relue caractère
                  par caractère avant d'entrer dans une carte.
CITABLE         : oui, en anglais : « I have sufficiently illustrated the principle I called
                  "order from noise," because no order was fed to the system, just cheap
                  undirected energy; however, thanks to the little demons in the box, in the
                  long run only those components of the noise were selected which contributed
                  to the increase of order in the system. » (p. 44). Relevé sur l'OCR, à
                  revérifier sur l'image. Aucune traduction française publiée identifiée du
                  texte lui-même.
```

### 5

```
CANDIDAT        : La redondance du commandement potentiel / Redundancy of potential command
AUTEUR(S)       : Warren S. McCulloch — auteur unique de la communication. Neurophysiologiste
                  et psychiatre, l'un des animateurs des conférences Macy. Il forge et nomme
                  la notion dans ce texte, en la distinguant explicitement de trois autres
                  redondances (de code, de canal, de calcul) et en datant sa propre
                  distinction de « deux ou trois semaines » avant la conférence — l'un des
                  rares cas où une source primaire porte la trace du moment de la
                  distinction.
PÉRIMÈTRE       : dedans — porte sur la façon dont une commande se répartit dans un système
                  sans centre unique : la station qui a l'information prend la main. C'est un
                  mécanisme de commande pris comme tel, et son enseignabilité est directement
                  démontrée par l'auteur, qui l'illustre en parallèle sur la formation
                  réticulaire du cerveau **et** sur une flotte navale.
SOURCE PRIMAIRE : McCulloch, W. S. (1960). « The Reliability of Biological Systems ». Dans
                  M. C. Yovits & S. Cameron (dir.), Self-Organizing Systems. Oxford :
                  Pergamon Press, p. 262-281. La notion est exposée p. 265-266.
SECONDAIRE      : absente dans cette session — non cherchée. La discussion qui suit la
                  communication dans le volume même (Newell y revient nommément) constitue
                  une première trace de réception, contemporaine et située dans la source.
FRANCOPHONE     : cherchée, rien trouvé. Persée rend un article « Cybernétique et biologie »
                  (Raison présente, n° 8, 1968, Gaston Richard, 10 pages en texte intégral)
                  qui n'a pas été lu faute de temps et pourrait porter une réception française
                  de McCulloch : piste à reprendre.
SIGNAL          : **le nom du concept ne dit pas ce qu'il fait**, et c'est le piège principal :
                  « redondance » suggère un doublon de sécurité, alors que McCulloch décrit un
                  principe d'autorité — « knowledge constitutes authority ». Second signal :
                  l'auteur lui-même écarte la notion en séance (« This needs study; but not
                  discussion here ») pour parler d'autre chose ; le concept le plus repris de
                  sa communication est celui qu'il refuse d'y développer.
ACCESSIBILITÉ   : texte intégral confirmé — même item Internet Archive que le candidat 4,
                  même absence de restriction, même OCR (`HTTP 200`, `text/plain`,
                  695 215 octets). Même réserve sur la qualité de l'OCR.
CITABLE         : oui, en anglais, court et autonome : « Thus we have a redundancy of
                  potential command in which knowledge constitutes authority. » (p. 266).
                  Relevé sur l'OCR, à revérifier sur l'image. Aucune traduction française
                  publiée identifiée.
```

### 6

```
CANDIDAT        : Le comportement est le contrôle de la perception / Behavior is the control
                  of perception
AUTEUR(S)       : William T. Powers — auteur unique des deux ouvrages dont les extraits sont
                  reproduits. Ingénieur en systèmes de contrôle de formation, il énonce la
                  théorie hors de la psychologie académique, ce qui explique une partie de sa
                  réception. Le recueil consulté est édité par Dag Forssell, éditeur de
                  Powers : il faut citer Powers, pas Forssell.
PÉRIMÈTRE       : dedans — porte sur la boucle perception-action prise comme mécanisme :
                  ce qu'un organisme maintient constant n'est pas son comportement mais une
                  perception, et son comportement est ce qu'il fait varier pour y parvenir.
                  Littérature « la boucle perception-action et le contrôle de ce qui est
                  perçu » du périmètre, qui la nomme explicitement. **Frontière avec
                  `human-factors` à surveiller** : l'objet ici est la structure de la boucle,
                  pas ce que l'opérateur perçoit ou manque dans une tâche donnée.
SOURCE PRIMAIRE : Powers, W. T. (2005). Behavior: The Control of Perception, seconde édition
                  révisée. Bloomfield (NJ) : Benchmark Publications, ISBN 978-0-9647121-7-1
                  (première édition 1973, Aldine). Extraits du chapitre 3 « Premises ».
                  Et : Powers, W. T. (1998-2004). Making Sense of Behavior: The Meaning of
                  Control. Benchmark Publications, ISBN 978-0-9647121-5-7. Extraits du
                  chapitre 2 « Perceptual Control ».
                  Les deux dans : Forssell, D. (dir.) (2016). Perceptual Control Theory: An
                  Overview of the Third Grand Theory in Psychology — Introductions, Readings,
                  and Resources. Menlo Park : Living Control Systems Publishing, 425 p.,
                  ISBN 978-1-938090-12-7.
SECONDAIRE      : absente dans cette session — le recueil lui-même contient des textes de
                  Marken, Carey, Nevin et Bourbon sur PCT, mais ce sont des textes de
                  praticiens de la théorie, pas une littérature secondaire indépendante. À
                  chercher au tour suivant, en particulier du côté des critiques.
FRANCOPHONE     : cherchée, rien trouvé. Aucun dépôt HAL, aucun article Persée sur la théorie
                  du contrôle perceptuel.
SIGNAL          : **théorie marginale revendiquée comme telle, à ne pas présenter comme un
                  acquis.** Le recueil se présente lui-même comme le manifeste d'« une
                  révolution scientifique en cours » et de « la troisième grande théorie de la
                  psychologie » : c'est la position de ses partisans, pas un état du champ.
                  Une carte doit dire d'où parle ce texte. Second signal : la filiation
                  cybernétique est explicite et assumée dans le texte (Powers discute Wiener
                  et McCulloch nommément, et le recueil s'ouvre sur l'amplificateur à
                  contre-réaction de Harold Black, 1927).
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 6 751 936` (6,4 Mo), 425 pages, sur
                  `www.livingcontrolsystems.com/download/pct_readings_ebook_2016.pdf`.
                  **Mise à disposition par l'éditeur lui-même**, constatée sur le fichier :
                  page de crédits listant nommément les autorisations de reproduction obtenues
                  (« Thanks to the following for reprint permissions: Benchmark Publications
                  and Bill Powers for selections from Behavior: The Control of Perception… »).
                  Le même fichier interdit sa re-publication ailleurs (« may not be posted at
                  any web site without permission ») : à citer par son URL d'origine, jamais à
                  miroiter.
                  **Piège technique identifié** : une partie du PDF est composée avec une table
                  d'encodage de caractères défectueuse ; `pdftotext` en rend des blocs décalés
                  de trois positions et sans espaces (« $QXQIRUWXQDWH… » pour « An
                  unfortunate… »). Ce n'est pas une protection, c'est un défaut de fabrication,
                  mais **aucune citation ne doit être relevée dans ces blocs** : ils perdent
                  les espaces et la ponctuation. Les autres blocs s'extraient proprement.
CITABLE         : oui, en anglais, sur un bloc proprement extrait : « behavior is the process
                  by which we act on the world to control perceptions that matter to us »
                  (épigraphe du chapitre 2 de Making Sense of Behavior, p. 147 du recueil).
                  Relevé et vérifié mot pour mot. Aucune traduction française publiée
                  identifiée.
```

### 7

```
CANDIDAT        : Le bruit comme principe d'auto-organisation / la complexité par le bruit
AUTEUR(S)       : Henri Atlan — auteur unique. Biophysicien et médecin. Le texte est
                  antérieur de trois mois à son ouvrage L'organisation biologique et la
                  théorie de l'information (Hermann, 1972) et en porte la thèse centrale.
                  L'article s'appuie explicitement sur von Foerster (candidat 4) et sur
                  Ashby (candidats 1 à 3), tous deux cités et traduits dans le corps du texte.
PÉRIMÈTRE       : dedans — porte sur le mécanisme par lequel un système gagne en organisation
                  sous l'effet d'une perturbation, et sur la condition qui rend ce gain
                  possible (un système à plusieurs sous-systèmes reliés, une redondance
                  initiale suffisante). Littérature « l'information, le signal et le bruit en
                  tant qu'ils servent la commande ». Ce n'est pas de la théorie de
                  l'information pour elle-même : Atlan s'en sert pour énoncer une condition
                  d'organisation, ce que le périmètre autorise explicitement.
SOURCE PRIMAIRE : Atlan, H. (1972). « Du bruit comme principe d'auto-organisation ».
                  Communications, n° 18 « L'événement », p. 21-36. Paris : Seuil / EHESS.
                  DOI 10.3406/comm.1972.1256.
SECONDAIRE      : absente dans cette session — non cherchée spécifiquement. La littérature
                  française sur Atlan existe (il est l'un des rares auteurs francophones du
                  champ à avoir une postérité continue) mais n'a pas été vérifiée.
FRANCOPHONE     : c'est le candidat francophone le plus solide du lot : source primaire en
                  français, texte intégral ouvert, revue de sciences humaines de référence.
SIGNAL          : **le texte dit deux choses opposées et il faut les tenir ensemble.** Atlan
                  insiste sur le fait que le rôle « positif » du bruit coexiste avec son rôle
                  destructeur classique, et que la quantité d'information est la somme de deux
                  termes de signes contraires. Une carte qui ne retiendrait que « le bruit
                  organise » trahirait le texte. Second signal : Atlan attribue explicitement
                  le principe à von Foerster et se présente comme celui qui lui donne une
                  formulation dans le cadre de la théorie de l'information — l'attribution du
                  concept est donc partagée, et la carte doit le dire.
ACCESSIBILITÉ   : texte intégral confirmé — Persée, seize pages obtenues une par une sur
                  `www.persee.fr/doc/page/comm_0588-8018_1972_num_18_1_1256/comm_0588-8018_1972_num_18_1_T1_<page>_0000`,
                  toutes en `HTTP 200` après reprise sur deux échecs réseau transitoires.
                  31 973 octets de texte OCR extraits pour les pages 27 à 36, 18 900 pour les
                  pages 21 à 26. **Unpaywall déclare `is_oa: false` sur ce DOI : c'est faux
                  pour cette route.** Réserve : l'OCR Persée abîme les caractères accentués en
                  fin de ligne et coupe certains mots par un tiret ; toute citation doit être
                  relue sur l'image de la page.
CITABLE         : oui, en français, sous réserve de relecture sur l'image : « On voit ainsi
                  comment un rôle positif, "organisationnel" du bruit peut être conçu dans le
                  cadre de la théorie de l'information, sans contredire pour autant le théorème
                  de la voie avec bruit ». Relevé sur l'OCR des pages 27-36. Pas de problème de
                  traduction : le texte est écrit en français par son auteur.
```

### 8

```
CANDIDAT        : Le feed-back comme régulation non encore équilibrée
AUTEUR(S)       : Jean Piaget — auteur unique. Communication à la première session de
                  l'Association de psychologie scientifique de langue française, consacrée
                  aux relations entre neurologie et psychologie. Le texte cite McCulloch &
                  Pitts nommément.
PÉRIMÈTRE       : dedans, mais **c'est la frontière la plus discutable du lot** — le texte
                  porte sur le développement des structures logiques, donc sur un objet
                  cognitif ; ce qui le fait entrer, c'est qu'il énonce un rapport général
                  entre rétroaction et équilibre : le feed-back fonctionne tant qu'il y a
                  déséquilibre, et l'opération est la forme limite, entièrement réversible, de
                  la régulation. C'est un énoncé sur le mécanisme de correction d'écart et sur
                  ce qui arrive quand il s'annule. **À trancher explicitement par le lecteur
                  primaire avant toute rédaction** : si la carte porte sur le développement de
                  l'enfant, elle n'est pas ici.
SOURCE PRIMAIRE : Piaget, J. (1953). « Structures opérationnelles et cybernétique ».
                  L'Année psychologique, 53(1), p. 379-388. DOI 10.3406/psy.1953.8725.
SECONDAIRE      : absente dans cette session. Persée rend deux textes d'Intellectica qui
                  situent le champ et ont été repérés sans être lus : Livet, P. (2004), « La
                  notion de récursivité, de la première cybernétique au connexionnisme »,
                  Intellectica n° 39, p. 125-137 (13 pages en texte intégral) ; Cassou-Noguès,
                  P. (2009), « Le temps et la mémoire, l'homme et la machine : autour de la
                  cybernétique », Intellectica n° 52, p. 141-159 (19 pages). Les deux sont des
                  entrées naturelles pour la littérature « histoire et critique du champ ».
FRANCOPHONE     : source primaire francophone.
SIGNAL          : **texte de circonstance, pas de doctrine.** C'est une communication de
                  congrès de dix pages, dans laquelle Piaget rapproche son propre appareil
                  conceptuel de modèles cybernétiques qu'il ne pratique pas. Une carte doit
                  le présenter comme une rencontre datée entre deux vocabulaires, pas comme la
                  position de Piaget sur la cybernétique. Second signal : le mot « feed back »
                  y est écrit en deux mots et non traduit, indice que le terme n'est pas encore
                  stabilisé en français en 1953 — utile pour situer le candidat 11.
ACCESSIBILITÉ   : texte intégral confirmé — Persée, dix pages obtenues une par une, neuf en
                  `HTTP 200` du premier coup et une à la reprise, 23 947 octets de texte OCR.
                  **Réserve sérieuse sur la citabilité** : l'OCR de cette numérisation-ci perd
                  systématiquement les apostrophes et les élisions (« une transformation du
                  système » pour « d'une transformation », « est erre » pour « c'est
                  l'erreur »). Le texte est parfaitement lisible pour comprendre, il ne l'est
                  pas pour citer sans revenir à l'image de la page.
CITABLE         : **oui sur le fond, non en l'état.** Le passage voulu existe et se lit
                  (« Le feed back est donc comparable [à] une régulation, c'est-à-dire […]
                  [à] une opération non encore équilibrée » ; « Le feed back fonctionne en
                  effet tant [qu'il y a] déséquilibre, c'est-à-dire tant que le problème posé
                  [à] la machine [n'est] pas résolu »), mais l'OCR en a mangé les mots
                  grammaticaux. Une citation sur cette carte exige une relecture sur l'image
                  de la page 386 ou sur l'imprimé. Français d'origine, pas de traduction en
                  jeu.
```

### 9

```
CANDIDAT        : L'objet de la cybernétique économique
AUTEUR(S)       : Anton Brender — auteur unique. Économiste. Le texte est un essai de
                  définition, publié dans un numéro thématique intitulé « Équilibre et
                  Régulation ».
PÉRIMÈTRE       : dedans, avec réserve de frontière — porte sur ce qui constitue l'objet
                  propre d'une cybernétique appliquée à un système économique : les mécanismes
                  de communication et de contrôle qui y fonctionnent quotidiennement.
                  Littérature « la cybernétique appliquée à l'organisation et à la gestion ».
                  **Frontières à surveiller** : avec `operations-management` (si l'objet
                  devenait le pilotage d'une production) et avec `behavioral-economics` (si
                  l'objet devenait le comportement des agents) — ni l'un ni l'autre n'est le
                  cas dans les pages lues, mais le texte n'a été lu qu'en partie.
SOURCE PRIMAIRE : Brender, A. (1978). « L'objet de la cybernétique économique : un essai de
                  définition ». Économie appliquée, 31(3-4), numéro « Équilibre et
                  Régulation », p. 353-364. DOI 10.3406/ecoap.1978.4249.
SECONDAIRE      : absente dans cette session. Repéré sans être lu, dans la même revue :
                  Lesourne, J. (1985), « Introduction : à la recherche d'une théorie de
                  l'auto-organisation », Économie appliquée, 38(3-4), p. 559-567 (9 pages en
                  texte intégral sur Persée) — voir angles morts, il relève probablement de
                  `systems-thinking`.
FRANCOPHONE     : source primaire francophone.
SIGNAL          : **le texte est lui-même un avertissement contre la métaphore**, ce qui en
                  fait un candidat inhabituellement utile pour ce domaine : Brender ouvre en
                  imputant à Wiener la responsabilité partielle des « avatars » de la
                  discipline, et soutient qu'« il n'existe pas une cybernétique mais des
                  cybernétiques, chacune constituant un moment du développement d'une science ».
                  C'est exactement le risque que le périmètre nomme, formulé de l'intérieur et
                  en 1978. Second signal : la citation de Wiener dans le texte est une
                  traduction française non sourcée précisément — ne pas la reprendre comme une
                  citation de Wiener.
ACCESSIBILITÉ   : texte intégral disponible — Persée, douze pages listées et accessibles par
                  l'endpoint page ; **trois pages seulement ont été effectivement téléchargées
                  et lues dans cette session** (353 à 355, `HTTP 200`). Les neuf autres sont
                  listées dans la notice avec la même construction d'URL et n'ont pas été
                  tirées faute de temps. À compléter par le lecteur primaire avant toute
                  rédaction : la thèse du texte n'est pas établie sur trois pages.
CITABLE         : probablement, en français, sous réserve de relecture sur l'image : « Ce
                  moment est caractérisé par le souci de comprendre les mécanismes de
                  communication et de contrôle qui fonctionnent quotidiennement au sein d'une
                  économie concrète » (p. 353). Même défaut d'OCR que les autres textes Persée
                  (tirets de césure conservés). Français d'origine.
```

### 10

```
CANDIDAT        : Contrôle proportionnel, dérivé et intégral dans l'homéostasie
AUTEUR(S)       : Stanford Goldman — auteur unique, Department of Electrical Engineering,
                  Syracuse University. Travail financé par l'Information Systems Branch de
                  l'Office of Naval Research.
PÉRIMÈTRE       : dedans, **mais c'est le candidat dont la frontière est la plus tendue** :
                  le périmètre rejette « la biologie de la régulation dès lors que l'objet du
                  texte est le phénomène étudié et non le principe qu'il permet d'énoncer », et
                  rejette aussi « la théorie du contrôle au sens de l'ingénieur ». Ce texte est
                  aux deux frontières à la fois. Ce qui le fait entrer : son objet déclaré est
                  un point de principe — qu'un système vivant n'utilise pas une information
                  d'écart mais six, et qu'il les distingue et les emploie différemment. C'est
                  la littérature « l'homéostasie et la régulation du vivant » du périmètre,
                  et c'est le seul candidat qui la couvre en anglais.
SOURCE PRIMAIRE : Goldman, S. (1960). « Further Consideration of Cybernetic Aspects of
                  Homeostasis ». Dans M. C. Yovits & S. Cameron (dir.), Self-Organizing
                  Systems. Oxford : Pergamon Press, p. 108-121. Le point de principe est
                  énoncé p. 108-111.
SECONDAIRE      : absente dans cette session. Le texte renvoie lui-même à un rapport
                  antérieur du même auteur (Syracuse University Research Institute, Report
                  EE494-581T1, janvier 1958) et à un chapitre de l'ouvrage collectif Mineral
                  Metabolism (Academic Press, 1960) : ni l'un ni l'autre n'a été cherché.
FRANCOPHONE     : cherchée sur Persée (« homéostasie régulation ») : les résultats francophones
                  sont soit de la physiologie pure, soit de la didactique. Le candidat le plus
                  proche, Soulairac (1955), a été ouvert et écarté — voir angles morts. Rien
                  retenu.
SIGNAL          : **le texte présuppose son lecteur** : Goldman écrit d'emblée « It is assumed
                  that the reader already has a working knowledge of both of these theories ».
                  Le critère d'enseignabilité du périmètre n'est donc pas rempli par le texte
                  lui-même, seulement par ce qu'il énonce. Une carte devrait porter sur le
                  point de principe (proportionnel / dérivé / intégral, et la distinction que
                  le corps opère entre eux), jamais sur l'appareil. Second signal : la note de
                  bas de page où Goldman définit « cybernétique » et « homéostasie » est une
                  définition d'époque parfaitement située, utile en soi.
ACCESSIBILITÉ   : texte intégral confirmé — même item Internet Archive que les candidats 4 et
                  5, même absence de restriction, même OCR. Chapitre lu p. 108-111.
CITABLE         : oui, en anglais : « A concept which is not as widely appreciated in
                  biological circles as it should be is that proportional, derivative and
                  integral controls may all be used in homeostasis. » (p. 108). Relevé sur
                  l'OCR, à revérifier sur l'image. Aucune traduction française identifiée.
```

### 11

```
CANDIDAT        : La rétroaction dénaturée — un concept emprunté et vidé
AUTEUR(S)       : Guy Paquette — auteur unique. Le texte s'inscrit explicitement dans la
                  suite d'un article de Gabriel Veraldi publié vingt ans plus tôt dans la même
                  revue, sur l'incommunicabilité des travaux en communication.
PÉRIMÈTRE       : dedans par un chemin inhabituel — le texte ne porte pas sur un mécanisme de
                  régulation, il porte sur **ce que devient le concept de rétroaction quand
                  une discipline l'emprunte** : la prolifération des traductions françaises
                  (rétroaction, rétroinformation, réinjection, retour, réponse, réaction,
                  boucle informationnelle) comme symptôme d'une notion mal saisie. C'est la
                  littérature « histoire et critique du champ » prise par son versant le plus
                  utile au corpus, puisque le périmètre annonce que le rejet le plus fréquent
                  à prévoir ici sera l'emploi métaphorique. **C'est aussi le candidat le plus
                  contestable du lot** : si le lecteur primaire juge que critiquer l'usage d'un
                  concept ne revient pas à éclairer un mécanisme, il tombe.
SOURCE PRIMAIRE : Paquette, G. (1987). « Feedback, rétroaction, rétroinformation, réponse…
                  du pareil au même ». Communication et langages, n° 73, 3e trimestre 1987,
                  p. 5-18. DOI 10.3406/colan.1987.984.
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : source primaire francophone, et sur un objet — la francisation du terme —
                  qui n'existe que dans cette langue.
SIGNAL          : **risque de doublon d'objet avec `measurement-theory`** : un texte sur la
                  dénaturation d'un concept par ses usagers ressemble à ce que le corpus
                  instruit déjà sur les effets en retour de la mesure. La différence est que
                  l'objet ici est le concept de boucle lui-même, pas un indicateur. À vérifier.
                  Second signal : le texte est de 1987 et vise les sciences de la
                  communication ; sa portée hors de ce champ n'est pas établie par le texte.
ACCESSIBILITÉ   : texte intégral disponible — Persée, quatorze pages listées et accessibles
                  par l'endpoint page ; **une seule page a été effectivement téléchargée et
                  lue** (p. 5, `HTTP 200`). Le reste n'a pas été tiré faute de temps. La thèse
                  du texte n'est donc **pas** établie : elle est présumée à partir de son
                  ouverture. À compléter avant toute décision.
CITABLE         : probablement, en français, sous réserve : « La notion de feedback constitue
                  l'un des concepts — en communication — parmi les plus souvent utilisés, mais
                  c'est aussi l'un de ceux dont l'apparente simplicité se traduit par des
                  usages aussi divers qu'inappropriés » (p. 5). Relevé sur l'OCR d'une seule
                  page. Français d'origine.
```

### 12

```
CANDIDAT        : L'observateur comme historien naturel du réseau
AUTEUR(S)       : Gordon Pask — auteur unique, Systems Research Ltd., Londres. La note de bas
                  de page du texte précise qu'il a été rédigé pendant son association comme
                  Assistant Research Professor auprès de Heinz von Foerster à l'Electrical
                  Engineering Research Laboratory de l'University of Illinois, sur contrat de
                  l'Office of Naval Research — la filiation avec le candidat 4 est donc
                  documentée dans la source, pas déduite.
PÉRIMÈTRE       : dedans par son objet, fragile par sa netteté — Pask soutient que pour
                  utiliser les potentialités auto-organisatrices d'un réseau, un observateur
                  doit se placer dans une posture d'histoire naturelle, c'est-à-dire
                  interactive et non classificatoire. C'est la littérature « la cybernétique
                  de second ordre : l'observateur inclus dans ce qu'il observe », dans une
                  formulation antérieure de quatorze ans à l'expression consacrée.
SOURCE PRIMAIRE : Pask, G. (1960). « The Natural History of Networks ». Dans M. C. Yovits &
                  S. Cameron (dir.), Self-Organizing Systems. Oxford : Pergamon Press,
                  p. 232-261. La thèse est posée p. 232.
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : **le concept n'a pas de nom chez son auteur**, ce qui est un obstacle réel
                  pour une carte : Pask énonce « une paire de thèses » sans les baptiser, et
                  la postérité l'a retenu pour sa théorie de la conversation, publiée quinze
                  ans plus tard et non consultée ici. Une carte sur ce texte devrait forger un
                  intitulé, ce que le corpus n'aime pas. Retenu quand même parce que c'est le
                  seul accès ouvert et vérifié à un texte de Pask, et parce que le périmètre
                  demande explicitement de ne pas laisser la seconde vague du champ sans
                  couverture.
ACCESSIBILITÉ   : texte intégral confirmé — même item Internet Archive que les candidats 4, 5
                  et 10, même absence de restriction, même OCR. Seules les deux premières
                  pages ont été lues.
CITABLE         : oui, en anglais : « if an observer wishes to use any self-organizing
                  potentialities the network may have, then he must look at the network as
                  though he were a natural historian. » (p. 232). Relevé sur l'OCR, à
                  revérifier sur l'image. Aucune traduction française identifiée.
```

### 13

```
CANDIDAT        : Construire une réalité / On Constructing a Reality
AUTEUR(S)       : Heinz von Foerster — auteur unique. C'est le texte de référence de sa
                  position de second ordre, treize ans après le candidat 4.
PÉRIMÈTRE       : dedans — porte sur l'observateur inclus dans ce qu'il observe, c'est-à-dire
                  la littérature « cybernétique de second ordre » que ce lot couvre autrement
                  très mal.
SOURCE PRIMAIRE : von Foerster, H. (1973). « On Constructing a Reality ». Dans W. F. E.
                  Preiser (dir.), Environmental Design Research, vol. 2. Stroudsburg :
                  Dowden, Hutchinson & Ross, p. 35-46. Repris dans Understanding
                  Understanding (Springer, 2003), DOI de chapitre 10.1007/0-387-21722-3_1
                  pour le texte de 1960 du même recueil — **la référence exacte de l'édition
                  originale de 1973 n'a pas été vérifiée sur une source bibliographique
                  indépendante dans cette session** et doit l'être avant toute rédaction.
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : voir ci-dessous — le problème de ce candidat n'est pas son contenu, c'est
                  son hébergement.
ACCESSIBILITÉ   : **fichier ouvrable, légitimité de la mise à disposition non établie.**
                  Internet Archive, item `constructing_reality`, collection `opensource`
                  (versement de particulier, `uploader: grr@lo2.org`),
                  `access-restricted-item` **absent**, aucune `licenseurl` déclarée. Le PDF
                  image répond `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 10 969 566`, 13 pages ; un second fichier
                  (`constructing_reality_text.pdf`) rend `HTTP 500`. Aucun élément sur la page
                  ni dans le fichier n'atteste d'une autorisation de l'ayant droit — le texte
                  est un chapitre d'ouvrage d'un éditeur commercial. **Ce candidat est dans la
                  même situation que Bainbridge 1983 au passage précédent** : il est signalé,
                  il n'est ni promu ni écarté, et **aucune citation ne doit reposer dessus**
                  tant qu'une voie légitime n'a pas été trouvée. La voie légitime probable est
                  `cepa.info`, qui est derrière un mur de connexion (voir note
                  méthodologique).
CITABLE         : non établi. Le fichier n'a pas été lu au-delà de ses caractéristiques
                  techniques, précisément parce que son statut n'est pas clair.
```

---

## Proposition de découpage thématique — 4 thèmes

Ce découpage sort des treize candidats ci-dessus, pas d'une grille écrite avant lecture.
**C'est une proposition, pas une décision** : les thèmes ne se déclarent dans
`src/content/themes.ts` qu'après instruction et contrôle des cartes, et un thème sans carte
validée ne se déclare pas. Deux des quatre thèmes proposés ci-dessous n'ont, en l'état, pas
assez de matière pour être ouverts.

### `regulation-et-ecart` — Ce qu'il faut posséder pour tenir un système

Le noyau du domaine et le seul thème que ce lot pourvoit solidement : la condition de
possibilité de la régulation, sa limite intrinsèque, et ce qu'on peut en obtenir au-delà de
ses moyens.

- Ashby — loi de la variété requise (candidat 1)
- Ashby — le régulateur commandé par l'écart ne peut être parfait (candidat 2)
- Ashby — l'amplification de la régulation (candidat 3)
- Goldman — proportionnel, dérivé, intégral dans l'homéostasie (candidat 10, frontière tendue)

**Réserve** : trois cartes sur quatre viendraient du même ouvrage. C'est acceptable pour un
premier lot — c'est le seul manuel du champ et le seul texte fondateur ouvert avec
autorisation — mais un thème qui n'est qu'un sommaire d'Ashby ne serait pas un thème.

### `bruit-et-auto-organisation` — Ce qu'un système gagne à être dérangé

Le seul thème du lot où l'anglais et le français se répondent sur le même objet, à douze ans
d'écart et avec filiation documentée.

- von Foerster — l'ordre à partir du bruit (candidat 4)
- Atlan — le bruit comme principe d'auto-organisation (candidat 7)
- Pask — l'observateur comme historien naturel du réseau (candidat 12, concept sans nom)

### `commande-et-organisation` — Où se décide ce qui se décide

Thème embryonnaire : deux candidats seulement, et le texte de référence du domaine sur ce
point (Beer) est inaccessible. **À ne pas ouvrir sans un second tour dédié.**

- McCulloch — la redondance du commandement potentiel (candidat 5)
- Brender — l'objet de la cybernétique économique (candidat 9, texte lu au quart)

### `la-boucle-et-ses-mots` — Ce que devient une boucle quand on la raconte

Thème le plus fragile et le plus discutable, mais il porte quelque chose que le périmètre
demande explicitement de surveiller : la dérive métaphorique du vocabulaire du champ.

- Powers — le comportement est le contrôle de la perception (candidat 6)
- Piaget — le feed-back comme régulation non encore équilibrée (candidat 8)
- Paquette — la rétroaction dénaturée (candidat 11)

**Réserve forte** : ces trois candidats ne partagent pas un objet, ils partagent un rapport
au vocabulaire. C'est peut-être un faux thème. Si le lecteur primaire le juge tel, Powers
rejoint `regulation-et-ecart` et les deux autres restent en attente.

---

## Angles morts

### Bases et plateformes en échec — pas des constats de vide

- **OpenAlex** — une requête aboutie, puis budget quotidien épuisé
  (`dailyRemainingUsd: 0`, `retryAfter: 14387`). **Aucun balayage bibliométrique n'a pu être
  fait** : ni comptage de citations, ni découverte de littérature adjacente, ni repérage des
  autrices sous-indexées. C'est la perte instrumentale la plus large de ce passage.
- **Semantic Scholar** — `429` au premier appel.
- **scite** — non connecté. Le périmètre le demandait explicitement pour repérer si un
  concept est repris sans discussion ou contesté : cela n'a pas pu être fait, et les signaux
  de controverse consignés reposent sur la lecture des textes.
- **Serveur MCP `documentary`** — non exposé, cinquième passage consécutif. **Zotero n'a donc
  pas pu être consulté**, ce qui est le manque le plus coûteux : ce domaine est un domaine
  d'ouvrages, et une bibliothèque locale est le seul endroit où Wiener, Beer, Bateson et
  Maturana & Varela auraient pu être ouverts.
- **`digital.library.illinois.edu`** — `403 Forbidden` en `curl` et en `WebFetch`. Bloque
  l'accès aux *Biological Computer Laboratory Publications (Digital Surrogates)*, 1957-1976,
  numérisées par les University of Illinois Archives, qui contiennent d'après leur notice
  publique des textes de von Foerster, Ashby, Pask, **Maturana** et **Varela**, avec une
  mention de droits explicite (« provided for personal use only »). **C'est la ressource qui
  aurait le plus corrigé ce lot**, et elle est hors de portée de cet environnement. À
  réessayer au tour suivant : le blocage est réseau, pas un défi.
- **`cepa.info` et `constructivist.info`** — mur de connexion sur toutes les pages de
  navigation et de notice. Voie non retenue. C'est là que sont les textes de second ordre.
- **`asc-cybernetics.org`** — `406` sur toutes les URL essayées.
- **`rossashby.info`** — **archive disparue** : `HTTP 522`, redirection vers un nom de domaine
  de casino. Le fonds Ashby numérisé qui y était hébergé n'est plus atteignable par cette
  adresse, et les références bibliographiques qui y pointent sont mortes.
- **Gallica / BnF** — `SRU` en `403`. Non exploitée : la piste des textes francophones
  antérieurs à 1900 sur la régulation du vivant (Claude Bernard, milieu intérieur) n'a donc
  **pas** été vérifiée, alors qu'elle est probablement ouverte. À faire en priorité au tour
  suivant.
- **Numdam** — `400 Bad request` sur deux formes d'URL de recherche. Non exploitée. La revue
  *Mathématiques et sciences humaines*, fondée par G.-Th. Guilbaud et entièrement ouverte, n'a
  donc pas été balayée : c'est une lacune sur la cybernétique française mathématique.
- **Moteur de recherche d'OpenEdition** — `404` puis `301` vers une page vide. Les pages de
  livre, elles, sont ouvertes et répondent `200` en `curl` direct : **la plateforme est
  accessible, c'est son index qui ne l'est pas par cette voie.** À reprendre par une autre
  route (OAI-PMH, ou parcours de collection).
- **Cairn** — non testé cette session. Sa fermeture pèse : la *Revue d'histoire des sciences*
  récente et une part de la réception française du champ en dépendent.

### Textes repérés sans source primaire ouvrable — voies essayées et résultat

- **Rosenblueth, A., Wiener, N. & Bigelow, J. (1943). « Behavior, Purpose and Teleology ».
  Philosophy of Science, 10(1), 18-24. DOI 10.1086/286788.** Le texte fondateur de la
  littérature « comportement téléologique » du périmètre, et **la seule des dix littératures
  que ce lot ne couvre par aucun candidat**. Voies essayées : Unpaywall (`is_oa: false`,
  aucune localisation OA) ; Crossref (métadonnées confirmées, cosignature à trois confirmée) ;
  Cambridge Core (`404` sur l'URL construite, pas d'article libre trouvé) ; Internet Archive
  (un item existe, versement de particulier, sans licence déclarée, **légitimité non
  établie — non ouvert**) ; recueil de Buckley (1968) qui le réimprime : deux exemplaires sur
  Internet Archive, **tous deux `access-restricted-item: true`**, prêt numérique contrôlé, non
  emprunté ; pages de cours universitaires repérées par recherche web (UCSD, CSULB, MIT) :
  **mises à disposition non autorisées de manière constatable, non empruntées.**
  **Signal utile pour le tour suivant** : la littérature secondaire, elle, est ouverte —
  « Revisiting Rosenblueth, Wiener, and Bigelow's "Behavior, Purpose and Teleology" (1943) »,
  Biological Theory, 2026, DOI 10.1007/s13752-026-00535-w, Unpaywall confirme `is_oa: true`.
  **C'est exactement la configuration du couplage lâche** : commentaire abondant et ouvert,
  source primaire fermée. Le périmètre dit ce qu'il faut en faire — ne pas instruire sur le
  commentaire.
- **Wiener, N. (1948). Cybernetics: or Control and Communication in the Animal and the
  Machine. MIT Press.** Ouvrage toujours exploité. Six exemplaires repérés sur Internet
  Archive (éditions 1948, 1961, 1965), **tous `access-restricted-item: true`**. Idem pour
  *The Human Use of Human Beings* (1950 et 1954) et *God and Golem, Inc.* Aucune voie
  légitime trouvée. **L'auteur qui a nommé le domaine n'a aucun candidat dans ce lot** : c'est
  à dire explicitement, et c'est la meilleure illustration de l'avertissement du périmètre
  selon lequel l'ancienneté n'ouvre rien.
- **Ashby, W. R. (1952/1960). Design for a Brain.** L'homéostat et l'ultrastabilité, absents
  du lot. Deux exemplaires de bibliothèque sur Internet Archive en
  `access-restricted-item: true` ; un troisième item (`designforabrain`) est en collection
  `opensource` sans restriction, avec une `licenseurl` de marque du domaine public **apposée
  par le déposant** (`almuhalabsaleh@gmail.com`) et non par un ayant droit. La succession
  Ashby a autorisé Principia Cybernetica pour *An Introduction to Cybernetics* seulement — la
  page d'hébergement le dit. **Légitimité non établie, item non ouvert.**
- **Conant, R. C. & Ashby, W. R. (1970). « Every good regulator of a system must be a model
  of that system ». International Journal of Systems Science, 1(2), 89-97.
  DOI 10.1080/00207727008920220.** Unpaywall : `is_oa: false`, aucune localisation. Le
  théorème le plus cité du couple Ashby après la variété requise reste fermé.
- **Stafford Beer, l'œuvre entière.** La littérature « viabilité, récursivité, ce qu'un centre
  de décision peut absorber », que le périmètre nomme explicitement, **n'a aucun candidat**.
  Voies essayées : Unpaywall sur l'article de synthèse (« The Viable System Model: Its
  Provenance, Development, Methodology and Pathology », JORS 35(1), 1984,
  DOI 10.1057/jors.1984.2) : `is_oa: false` ; Internet Archive par auteur : aucun résultat, et
  par titre : *Cybernetics and Management* (1959), *The Heart of Enterprise*, *Platform for
  Change* tous `access-restricted-item: true`, *Designing Freedom* présent en versement de
  particulier sans licence pour un ouvrage toujours en catalogue chez House of Anansi
  (**légitimité non établie, non ouvert**) ; `metaphorum.org`, la société consacrée à son
  œuvre : page « papers » accessible mais **sans aucun PDF hébergé**, uniquement des DOI vers
  *Kybernetes* (Emerald, fermé) ; Stafford Beer Collection de la Liverpool John Moores
  University : fonds d'archives physique, pas de numérisation en ligne repérée.
  **À reprendre en priorité au tour suivant** : c'est le manque le plus voyant de la
  cartographie au regard du périmètre.
- **Maturana, H. R. & Varela, F. J. — l'autopoïèse.** Voie la plus prometteuse trouvée puis
  perdue : Varela, F. J., Maturana, H. R. & Uribe, R. (1974), « Autopoiesis: The organization
  of living systems, its characterization and a model », BioSystems, 5(4), 187-196,
  DOI 10.1016/0303-2647(74)90031-8, que **Unpaywall déclare `is_oa: true`** avec une unique
  localisation, le dépôt institutionnel de l'Universidad de Chile
  (`repositorio.uchile.cl/handle/2250/160309`, licence `cc-by-nc-nd`, version soumise). La
  page de notice répond `200` et donne le chemin du fichier ; **le fichier lui-même est servi
  derrière un défi de preuve de travail (Anubis)**, identifié par le script `anubis_version`
  dans le corps de la réponse. Défi non résolu, non contourné, aucun autre client essayé.
  Aucune autre localisation OA n'existe d'après Unpaywall. `cepa.info` héberge très
  probablement les textes de Maturana (« Biology of Cognition », BCL Report 9.0, 1970) mais
  est derrière un mur de connexion. La collection BCL d'Illinois les héberge aussi et rend
  `403`. **Trois voies, trois obstacles de nature différente, aucun contourné.**
- **Bateson, G.** — *Steps to an Ecology of Mind* (1972) et « Toward a Theory of
  Schizophrenia » (DOI 10.1002/bs.3830010402, Unpaywall `is_oa: false`). Non couvert.
- **McCulloch, W. S. & Pitts, W. (1943). « A logical calculus of the ideas immanent in nervous
  activity ». DOI 10.1007/BF02478259 — `is_oa: false`.** Le texte est cité nommément par
  Piaget (candidat 8) et par Powers (candidat 6) : sa dette est donc visible dans le lot sans
  que le texte le soit.
- **Shannon, C. E. (1948). DOI 10.1002/j.1538-7305.1948.tb01338.x — `is_oa: false`.**
  Le périmètre ne le ferait entrer que par ce qu'il fait à la commande ; la question est
  restée théorique, le texte n'est pas ouvert par cette voie.
- **Les transactions des conférences Macy** (Josiah Macy Jr. Foundation, 1946-1953 ; édition
  intégrale Claus Pias, Diaphanes, 2016). Recherche Internet Archive sur le titre officiel des
  actes : aucun résultat. Édition Diaphanes : ouvrage en catalogue, aucune version ouverte
  repérée. **Le centre de gravité daté du champ, que le périmètre désigne comme tel, n'est
  atteignable par aucune source primaire dans ce passage.**
- **Cannon, W. B.** — « Organization for Physiological Homeostasis », Physiological Reviews,
  9(3), 1929, DOI 10.1152/physrev.1929.9.3.399, Unpaywall `is_oa: false` ; *The Wisdom of the
  Body* (1932, 1939, 1963), cinq exemplaires Internet Archive, **tous
  `access-restricted-item: true`**. Celui qui a forgé le mot « homéostasie » n'a pas de source
  ouverte dans ce lot. La piste Claude Bernard (Gallica) n'a pas pu être testée, `SRU` en
  `403`.
- **Powers, W. T. (1960 et 1978)** — les deux articles de revue fondateurs
  (DOI 10.2466/pms.1960.11.1.71 et 10.1037/0033-295X.85.5.417) sont fermés. Le candidat 6 ne
  tient qu'aux extraits reproduits dans le recueil de l'éditeur : la carte devra citer ces
  extraits, pas les articles.
- **Glanville, R. (2004). « The purpose of second-order cybernetics ». Kybernetes, 33(9/10).
  DOI 10.1108/03684920410556016 — `is_oa: false`.** Voie possible via `cepa.info`
  (`/fulltexts/2294.pdf` repéré par recherche web), non empruntée pour la raison dite plus
  haut.
- **Soulairac, A. (1955). « L'homéostasie et la régulation des comportements ». Bulletin de
  psychologie, 8(12), 692-707. DOI 10.3406/bupsy.1955.6553.** **Ouvert et écarté**, ce qui est
  différent d'un texte non trouvé : les seize pages sont accessibles sur Persée et ont été
  partiellement lues. Le texte est une transcription de cours de physiologie (cycles de
  Krebs et d'Embden-Meyerhof, régulation de la glycémie) dont l'objet est le phénomène
  biologique et non le principe : **rejet direct par le périmètre**, littéralement prévu par
  la clause « biologie de la régulation dès lors que l'objet du texte est le phénomène
  étudié ». Consigné ici pour qu'on ne le rouvre pas.
- **Richelle, J. (1977). « Boucles de rétroaction négatives : un parallèle entre diverses
  analyses formelles ». Bulletin de la Classe des sciences (Académie royale de Belgique), 63,
  534-546. DOI 10.3406/barb.1977.58256.** **Ouvert et écarté** de la même façon : treize pages
  accessibles, lues en partie, formalisme booléen appliqué aux réseaux de régulation
  génétique dans la lignée de René Thomas et de Prigogine. Objet : le formalisme et le
  phénomène, pas le principe. Non enseignable au sens du périmètre. Le même auteur a une suite
  en 1980 (23 pages) et une en 1996, également ouvertes.

### Candidats rencontrés relevant de domaines déclarés mais fermés

Consignés ici et **non rejetés**, conformément au périmètre : leur objet n'est pas hors sujet,
il relève d'un domaine voisin qui n'est pas ouvert. Cette liste part de zéro pour ce domaine.

#### `systems-thinking`

C'est la frontière que le périmètre annonçait comme la seule qui puisse coûter cher, et elle
a effectivement produit des rencontres.

- **Roig, C. (1970). « La théorie générale des systèmes et les perspectives de développement
  dans les sciences sociales ». Revue française de sociologie, numéro spécial « Analyse de
  systèmes en sciences sociales (I) », p. 47 et suivantes.** Rencontré sur Persée en cherchant
  « Ashby variété régulateur ». Relève de `systems-thinking` par le test du périmètre : l'objet
  est la théorie générale des systèmes comme cadre, pas un mécanisme de régulation.
  **État d'accès constaté et remarquable : 51 pages de texte intégral accessibles par
  l'endpoint page de Persée.** C'est un cadeau pour qui ouvrira ce domaine.
- **Lesourne, J. (1985). « Introduction : à la recherche d'une théorie de l'auto-organisation ».
  Économie appliquée, 38(3-4), 559-567.** Rencontré dans la même revue que le candidat 9.
  Relève probablement de `systems-thinking` (recherche d'une théorie générale) plutôt que
  d'ici. **État d'accès : 9 pages listées en texte intégral sur Persée, non téléchargées.**
- **Buckley, W. (dir.) (1968). Modern Systems Research for the Behavioral Scientist.**
  Sourcebook qui réimprime notamment Rosenblueth, Wiener & Bigelow. **État d'accès : deux
  exemplaires Internet Archive, `access-restricted-item: true` les deux.**
- **Bertalanffy, Forrester, et la modélisation-simulation en général** : non rencontrés
  spontanément pendant ce balayage, ce qui est en soi une information — les requêtes par
  littérature du périmètre `cybernetics` ne les font pas remonter. Non cherchés
  spécifiquement.

#### `decision-science`

- **Newell, A., Shaw, J. C. & Simon, H. A. (1960). « A Variety of Intelligent Learning in a
  General Problem Solver ». Dans Self-Organizing Systems, p. 153-189.** Rencontré dans le même
  volume que les candidats 4, 5, 10 et 12. Ne relève pas d'ici : c'est de l'intelligence
  artificielle comme technique, que le périmètre rejette explicitement ; l'objet de
  `decision-science` (résolution de problème, heuristique de recherche) en est plus proche.
  **État d'accès constaté : texte intégral ouvert, même item Internet Archive sans
  restriction que les candidats de ce lot.** Repéré, non lu.
- **Campbell, D. T. (1960). « Blind Variation and Selective Survival as a General Strategy in
  Knowledge-Processes ». Dans Self-Organizing Systems, p. 205-231.** Même volume, même accès
  ouvert. Décision de frontière explicitée : le mécanisme décrit est la variation aveugle et
  la rétention sélective dans les processus de connaissance — une sélection, pas une
  correction d'écart. **Ne relève donc pas de `cybernetics` par le test du périmètre.** Il
  relève plutôt d'une épistémologie évolutionnaire qu'aucun des onze domaines ne couvre
  clairement ; consigné ici faute de meilleur endroit, avec son accès ouvert vérifié.

#### `operations-management`

- **Une série de rapports du Department of Defense appliquant la loi de la variété requise à
  l'acquisition de systèmes d'armes et à la conception des forces** : `DTIC_AD1046519`
  (« Applicability of the Law of Requisite Variety in Major Military System Acquisition »,
  2017), `DTIC_ADA371943` (1999), `DTIC_ADA341017` (1997), tous mirés sur Internet Archive en
  collection `dticarchive`. Relèvent de `operations-management` par le test du périmètre :
  l'objet est le dimensionnement d'un dispositif, pas le principe. **État d'accès : items
  publics, restriction non vérifiée individuellement, non ouverts.** Ils constituent
  accessoirement une preuve de la diffusion de la loi d'Ashby hors du champ, utile au signal
  du candidat 1.

#### `work-psychology`, `behavioral-economics`, `sociology-of-work`

**Les trois domaines se déclarent vides pour ce passage.** Aucun texte rencontré pendant ce
balayage n'avait pour objet le stress, la motivation, l'épuisement, les préférences des
agents économiques, ni les rapports sociaux de travail. Le cas le plus proche, Soulairac 1955,
a été tranché autrement (voir plus haut : rejet direct, objet biologique). Ce vide est
cohérent : les mots-clés des dix littératures de ce périmètre ne recoupent pas ceux de ces
trois domaines.

### Textes rencontrés relevant de domaines **ouverts** — à transmettre, pas à instruire ici

Deux trouvailles Persée qui ne sont pas de la cybernétique et que la route « endpoint page »
rend désormais accessibles :

- **Weill-Fassina, A. (1972). « La notion de régulation en psychologie du travail : définitions
  et cadres généraux ». Bulletin de psychologie, 25(298), 546-551.
  DOI 10.3406/bupsy.1972.10338.** Six pages en texte intégral. Relève d'`activity-ergonomics`,
  où `regulation-de-l-activite` est déjà instruite d'après Leplat : texte distinct, autrice
  distincte, à signaler au domaine voisin.
- **Papin, J.-P., Hanauer, M. T., Hanauer, C., Bobillon, P. & Defayolle, M. (1973). « Les
  systèmes hommes-machines. Les tâches de pistage ». Bulletin de psychologie, 27(309),
  128-145. DOI 10.3406/bupsy.1973.10485.** Dix-huit pages en texte intégral, cosigné à cinq.
  Relève de `human-factors`, dont la cartographie signalait n'avoir trouvé aucun texte
  fondateur francophone en accès ouvert. **C'est précisément le type de texte qui lui
  manquait**, et il était accessible : la route Persée n'était pas connue à ce moment-là.

### Vérification de non-doublon

Comparé aux **45 fiches déjà validées** dans `corpus/validated/` — 17 en
`organizational-sociology` et `measurement-theory`, 15 en `activity-ergonomics`, 13 en
`human-factors`. **Aucun chevauchement d'identifiant ni de concept constaté.** Points de
vigilance explicites, tous à la frontière et tous nommés par le périmètre :

1. **`retroaction-et-automatisation`** (Norman, déjà validé en `human-factors`) et le
   candidat 2 (Ashby, le régulateur commandé par l'écart) portent tous deux sur l'absence ou
   l'insuffisance d'une rétroaction. Objets distincts par le test du périmètre : Norman décrit
   ce que l'opérateur ne peut plus mettre à jour faute de retour ; Ashby décrit pourquoi un
   régulateur qui réussit ferme son propre canal d'information. **Proximité de formulation,
   pas de concept.** À faire apparaître dans la carte si elle est écrite, pour que le lecteur
   ne les confonde pas.
2. **`controle-supervise`** (Sheridan, Verplank & Brooks, déjà validé en `human-factors`) :
   le périmètre a tranché à l'avance que cette dette envers la théorie du contrôle **se
   signale et ne se réinstruit pas**. Aucun candidat de ce lot ne la reprend.
3. **`regulation-de-l-activite`** (Leplat, déjà validé en `activity-ergonomics`) et
   `regulation-controle-autonome` (Reynaud, déjà validé en `organizational-sociology`) :
   le mot « régulation » est déjà instruit deux fois dans le corpus, dans deux sens dont aucun
   n'est celui de ce domaine. **Aucun candidat de ce lot ne porte sur la conduite de quelqu'un
   en situation ni sur ce que des acteurs font des règles.** La frontière tient, mais c'est le
   point de bascule le plus facile à manquer, et il faut le revérifier à la rédaction.
4. **`niveaux-de-controle-cognitif`** (Rasmussen, déjà validé) et le candidat 6 (Powers) :
   les deux parlent de niveaux de contrôle. Rasmussen décrit trois niveaux de comportement
   humain en situation industrielle ; Powers décrit une hiérarchie de systèmes de contrôle
   perceptuel. Objets et disciplines distincts, mais l'homonymie est réelle et doit être
   signalée dans la carte.
5. **Le candidat 11 (Paquette) et les cartes d'effet en retour de la mesure**
   (`loi-de-campbell`, `mesure-devenue-cible`, `reactivite-des-classements`, déjà validées en
   `measurement-theory`) : parenté de forme — un concept qui se dégrade par son usage — sans
   parenté d'objet. C'est la raison pour laquelle ce candidat est le plus contestable du lot.

### Combien de candidats viennent d'un nom écrit de mémoire ?

Le périmètre prévenait que le risque est ici à son maximum, « trois ou quatre noms de ce champ
circul[a]nt dans la culture générale de l'ingénierie et du management ». Compte honnête sur
13 candidats, et il faut distinguer deux choses que le décompte de `human-factors` mélangeait
un peu :

**Par le nom de l'auteur** — noms que j'aurais pu écrire sans aucune recherche :

- **8 candidats sur 13** portent un tel nom : Ashby (candidats 1, 2, 3), von Foerster
  (candidats 4 et 13), McCulloch (5), Powers (6), Pask (12).
- **5 candidats sur 13** portent un nom que je n'aurais pas écrit dans une liste de
  cybernéticiens : Atlan (7), Piaget (8) — connu, mais jamais comme auteur de ce champ —,
  Brender (9), Goldman (10), Paquette (11).

**Par le chemin qui y a mené**, ce qui est le contrôle plus honnête :

- **1 candidat sur 13** est sorti d'une recherche partant du nom et du concept déjà connus :
  la loi de la variété requise (candidat 1). C'est le seul.
- **4 candidats sont sortis de la lecture d'un sommaire**, sans que je sache d'avance ce que
  le volume contenait : von Foerster, McCulloch, Goldman et Pask ont été trouvés en ouvrant la
  table des matières de *Self-Organizing Systems* (1960), lui-même trouvé en cherchant quels
  actes de colloque de cette période sont hors prêt contrôlé sur Internet Archive. Aucun de
  ces quatre concepts n'était dans ma tête au départ ; « redondance du commandement
  potentiel » en particulier a été trouvé en lisant.
- **2 candidats sont sortis de la lecture du texte d'un autre candidat** : les chapitres 12 et
  14 d'Ashby (candidats 2 et 3) ont été trouvés en lisant l'ouvrage ouvert pour le candidat 1,
  pas en les cherchant.
- **4 candidats sont sortis d'un balayage Persée par les mots du périmètre**, sans nom
  d'auteur en tête : « auto-organisation bruit complexité » a rendu Atlan, « Guilbaud
  cybernétique » a rendu Piaget par ricochet, « rétroaction cybernétique » a rendu Brender et
  Paquette.
- **1 candidat est sorti d'une recherche d'hébergeur** : le recueil PCT, trouvé en cherchant
  si l'éditeur de Powers met quelque chose en libre accès (candidat 6).
- **1 candidat est sorti d'un versement Internet Archive repéré par recherche web** et reste
  pour cette raison le plus fragile du lot (candidat 13).

**Soit 1 candidat sur 13 dont la première trace remonte à un couple auteur-concept connu
d'avance.** C'est nettement meilleur que le rapport de `human-factors` (8 sur 15), mais il ne
faut pas en tirer trop de fierté : **cette proportion est le produit d'une contrainte d'accès
autant que d'une méthode.** Les noms que j'aurais spontanément écrits — Wiener, Beer, Bateson,
Maturana, Varela — sont tous inaccessibles, et c'est la fermeture de leurs textes, pas la
discipline du balayage, qui les a écartés. Si Wiener et Beer avaient été ouverts, ce lot leur
ressemblerait davantage.

### Ce que le lot ne couvre pas, littérature par littérature

Le périmètre nomme dix littératures. Bilan explicite :

| littérature | couverture |
|---|---|
| boucle de rétroaction et régulation par l'écart | **couverte** — candidats 2, 8, 11 |
| comportement téléologique et sa critique | **aucune couverture** — Rosenblueth 1943 fermé, aucune voie légitime |
| homéostasie et régulation du vivant | **faible** — candidat 10 seul, Cannon et Claude Bernard non ouverts |
| la variété et sa loi | **couverte** — candidats 1 et 3 |
| information, signal et bruit au service de la commande | **couverte** — candidats 4 et 7 |
| cybernétique de second ordre | **très faible** — candidats 12 (concept sans nom) et 13 (hébergement douteux) ; ni Maturana, ni Varela, ni von Foerster tardif accessibles |
| cybernétique de l'organisation et de la gestion | **faible** — candidats 5 et 9 ; **Beer entièrement absent** |
| boucle perception-action et contrôle du perçu | **couverte** — candidat 6 |
| histoire et critique du champ | **secondaire seulement** — Le Roux, Triclot, Segal, Ferri repérés en dépôt HAL intégral, Livet et Cassou-Noguès sur Persée ; aucun n'est candidat, et c'est normal : ces textes situent, ils ne fondent pas |
| couche francophone | **couverte, et mieux qu'aux passages précédents** — 4 candidats sur 13 sont des sources primaires en français (7, 8, 9, 11), soit 31 % contre 13 % en `human-factors` |

**Deux littératures sur dix ne sont couvertes par aucun candidat solide, et la seconde vague
du champ est presque absente.** Le périmètre avertissait : « Si le lot final ne tient qu'aux
trois noms les plus cités du champ, ou qu'à sa seule vague fondatrice alors qu'il en compte au
moins deux, la cartographie n'a pas fait son travail, et cela se signale. » Ce lot ne tient pas
aux trois noms les plus cités — Wiener, Beer et Bateson n'y sont pas du tout — mais **il tient
très majoritairement à la première vague** : douze des treize candidats sont antérieurs à 1980,
et le seul texte de second ordre atteignable l'est par un hébergement dont la légitimité n'est
pas établie. C'est la faiblesse assumée de ce passage, et elle a une cause identifiée et
réparable : les deux plateformes qui portent cette littérature (`cepa.info` et la collection
BCL d'Illinois) sont l'une derrière un mur de connexion et l'autre derrière un `403`.
