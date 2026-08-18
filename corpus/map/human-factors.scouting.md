# Cartographie — `human-factors`

Scouting réalisé le 18 août 2026. Domaine ouvert le même jour dans `corpus/perimeter.md`,
avec un stock d'entrée déjà écrit par `activity-ergonomics` (six ensembles consignés en
angle mort chez le voisin, cf. `corpus/map/activity-ergonomics.scouting.md`, section
« Candidats retenus pour `human-factors`, domaine déclaré mais fermé »). Ce stock a été
testé, pas simplement recopié : deux de ses six ensembles ont produit un candidat retenu
ici (l'erreur/fiabilité via Faverge, la résilience via Cuvelier & Falzon), les autres se
sont révélés soit inaccessibles (Leplat & de Terssac, prêt numérique), soit trop fragiles
pour porter seuls une carte (image opérative, conscience de la situation via de simples
comptes rendus).

Le reste du lot sort d'un balayage par **littératures**, mené en anglais et en français en
parallèle, avec une bascule méthodologique décisive : ce domaine étant massivement porté
par des éditeurs commerciaux (Sage, Elsevier, Taylor & Francis) et par des ouvrages fermés,
la voie qui a rendu le plus de candidats n'est pas la littérature académique elle-même mais
les **rapports techniques publics** qui la précèdent ou la reformulent : NASA NTRS, les
dépôts institutionnels danois (DTU Orbit, héritier de Risø, l'employeur de Jens Rasmussen),
et les rapports militaires américains déclassifiés et mirés sur Internet Archive sous la
collection `dticarchive`. C'est cette dernière découverte — DTIC est inatteignable en
direct, mais une bonne partie de son fonds est légalement mirée sur `archive.org` sans
aucune restriction d'accès — qui a le plus corrigé le biais commercial du champ.

---

## Note méthodologique — outils effectivement utilisés

Les outils `mcp__documentary__*` **n'étaient pas exposés** dans la liste d'outils de cette
session, comme aux trois passages précédents : ni `search_literature`, ni
`search_francophone`, ni `verify_reference`, ni `zotero_search` n'ont pu être appelés.
**Zotero est donc resté inaccessible**, ce qui est coûteux ici précisément parce que les
textes fondateurs manquants de ce domaine sont des ouvrages (Reason 1990, Hollnagel 2006,
Amalberti 1996, Hoc 1996) — le type de fonds qu'une bibliothèque locale porterait. Tout le
balayage a donc été fait par accès HTTP direct.

- **OpenAlex** — testé une fois, comme demandé : `"Rate limit exceeded" / dailyRemainingUsd
  proche de 0`. Non insisté. **Échec de base, pas constat de vide.**
- **Semantic Scholar** — testé une fois : `429 Too Many Requests`. Même conclusion.
- **Crossref** (`api.crossref.org`) — fonctionnel tout du long. Utilisé pour résoudre des
  titres en DOI, vérifier les métadonnées d'un DOI donné, et confirmer les cosignatures.
  Le vidage de sommaires par ISSN (la méthode qui avait le mieux rendu au passage précédent)
  n'a **pas** été la voie principale ici : la plupart des revues du champ (*Human Factors*,
  *Ergonomics*, *Applied Ergonomics*, *Safety Science*, *Le travail humain*) sont fermées y
  compris en métadonnées de sommaire utile, et l'énergie a été redirigée vers les rapports
  techniques.
- **Unpaywall** (`api.unpaywall.org`) — fonctionnel, utilisé systématiquement pour trancher
  vite si un DOI donné a une version ouverte avant d'aller plus loin. A évité plusieurs
  recherches inutiles (Rasmussen 1983 IEEE, Endsley 1995 *Human Factors*, Sarter & Woods
  1991, Flach 1995, Parasuraman & Riley 1997, Mackworth 1948 : tous `is_oa: false`).
- **NASA NTRS** (`ntrs.nasa.gov/api/citations/search` et `/downloads`) — **la base la plus
  productive de ce lot**. Fonctionnelle sans clé, recherche plein texte, et surtout : NTRS
  mire aussi des textes **non NASA** cités dans sa base bibliographique (Norman 1990 y est
  parce que Norman travaillait sur un contrat NASA Ames ; Reason n'y est pas). Chaque
  téléchargement a été vérifié par requête HTTP directe (code, `content-type`,
  `content-length`) puis, quand le texte comptait, par extraction de contenu.
- **Internet Archive, collection `dticarchive`** (`archive.org/advancedsearch.php` +
  `/metadata/<id>` + `/download/<id>/...`) — **deuxième base la plus productive**. DTIC
  (`apps.dtic.mil`) est inatteignable en direct dans cet environnement (voir plus bas), mais
  une grande partie de son fonds de rapports déclassifiés est mirée sans restriction sur
  Internet Archive sous les collections `dticarchive` / `usgovernmentmirrors` /
  `government-documents`. Chaque item a été vérifié par `access-restricted-item` (absent =
  pas de prêt contrôlé) avant d'être retenu. **Un item où ce champ vaut `true` a été écarté
  des candidats et consigné en angle mort** (voir plus bas, Leplat & de Terssac).
- **DTU Orbit / `backend.orbit.dtu.dk`** (dépôt institutionnel de la Technical University of
  Denmark, héritière de Risø National Laboratory où Jens Rasmussen a fait toute sa carrière)
  — découvert par recherche web ciblée puis vérifié en direct par `curl` : deux rapports
  Risø de Rasmussen, dont sa taxonomie de l'erreur de 1981, et l'article fondateur de la
  conception écologique d'interface (Vicente & Rasmussen, 1992) en version acceptée par les
  auteurs, y sont déposés en libre accès, alors que leurs versions publiées (IEEE, Elsevier)
  sont fermées. `orbit.dtu.dk` (le portail de recherche) renvoie 403 en `curl` direct ; c'est
  `backend.orbit.dtu.dk` (le serveur de fichiers) qui répond 200 sans détour.
- **PubMed Central** (`pmc.ncbi.nlm.nih.gov`) — fonctionnel pour la page HTML de l'article
  (`/articles/PMC<id>/`), qui rend le texte intégral en clair. **Piège identifié et à
  documenter pour la suite de la chaîne** : l'URL directe du PDF
  (`/articles/PMC<id>/pdf/<fichier>.pdf`) ne rend pas le PDF mais une page de chargement
  JavaScript avec un script nommé `pow-*.js` — un mécanisme de preuve de travail. **Cette
  voie n'a pas été empruntée.** La page HTML de l'article, elle, s'est ouverte normalement
  et porte le texte intégral : c'est elle qui a servi de source, et c'est la voie à utiliser
  pour ce domaine sur PMC.
- **DTIC** (`apps.dtic.mil`) — **inatteignable en direct** : `HTTP 403 "The request is
  blocked"` sur la recherche comme sur les PDF directs (`/sti/pdfs/<ID>.pdf`), avec ou sans
  `WebFetch`. Ce n'est pas un défi anti-robot résoluble (pas de CAPTCHA, pas de preuve de
  travail) : c'est un blocage réseau constaté et non contourné. Voir plus haut : le fonds
  est en grande partie accessible via le mirage Internet Archive, ce qui a compensé.
- **Persée** — même comportement qu'aux passages précédents : `/doc/<id>` rend la première
  page en HTML/OCR, `docAsPDF` échoue. Un seul candidat en dépend ici (Faverge 1964), et il
  porte la mention « première page seulement ».
- **OpenEdition (`journals.openedition.org`, `books.openedition.org`)** — **cette fois,
  aucun défi Anubis rencontré** : les quatre requêtes `curl` faites sur PISTES et sur
  OpenEdition Books ont toutes répondu 200 avec le contenu, HTML et PDF. Contrairement au
  passage précédent, aucun `WebFetch` n'a été nécessaire ici — ce qui confirme la note du
  domaine précédent : le blocage n'est pas déterministe, il faut toujours essayer avant de
  supposer.
- **HAL** — fonctionnel, mais **peu productif sur ce domaine** en dehors de ce qu'
  `activity-ergonomics` avait déjà trouvé : les recherches ciblées sur des auteurs
  francophones centraux du champ (Amalberti, Hoc, de Keyser) n'ont rendu aucun texte
  fondateur en dépôt intégral. Voir angles morts.
- **BnF, OpenLibrary** — non exploités : aucun candidat de ce lot ne s'appuyait sur un
  ouvrage dont il fallait vérifier l'édition par ce biais.
- **scite** — non connecté dans cette session. Aucun relevé automatique de reprise ou de
  contestation. Le signal de controverse le plus net de ce lot (la conscience de la
  situation) a été établi par lecture directe des sommaires et par vérification systématique
  d'ouverture (Unpaywall) des textes de contestation, pas par un indicateur de citation.
- **WebFetch** — utilisé deux fois pour contourner un blocage réseau qui n'était **pas** un
  défi anti-robot : le document officiel de la NRC (`nrc.gov`, bloqué en `curl` par un
  pare-feu applicatif renvoyant 403 sans challenge) et une page de recherche DTIC (bloquée de
  la même façon, sans succès cette fois). Dans le premier cas, `WebFetch` a rendu le PDF
  complet (728 pages) sans franchir aucune protection dédiée : ce n'est pas l'équivalent du
  script anti-Anubis détruit au passage précédent, c'est un client HTTP différent qui n'a pas
  déclenché le même filtre. Ce point est documenté en détail sur le candidat concerné parce
  qu'il est limite et qu'il ne doit pas servir de précédent mal lu.

Chaque candidat porte le code HTTP, le `content-type`, la taille et, quand elle a pu être
relevée, une citation localisée — plutôt qu'une affirmation d'accessibilité.

---

## Candidats — du plus solide au plus fragile (accessibilité de la source primaire)

### 1

```
CANDIDAT        : Probabilité d'erreur humaine et méthode THERP — quantifier la fiabilité
                  humaine dans les systèmes à risque
AUTEUR(S)       : Alan D. Swain & Henry E. Guttmann — coécrit à deux, Sandia National
                  Laboratories, pour le compte de l'US Nuclear Regulatory Commission.
                  Ne jamais réduire à « Swain » seul : le rapport est cosigné du début à la
                  fin et les deux noms apparaissent systématiquement dans la littérature qui
                  le cite sous l'acronyme THERP (Technique for Human Error Rate Prediction).
PÉRIMÈTRE       : dedans — porte sur l'erreur humaine prise comme grandeur qu'on définit et
                  qu'on quantifie pour la sûreté d'un système technique, littérature
                  « erreur humaine et ses taxonomies » du périmètre, versant quantitatif.
SOURCE PRIMAIRE : Swain, A. D. & Guttmann, H. E. (1983). Handbook of Human Reliability
                  Analysis with Emphasis on Nuclear Power Plant Applications. NUREG/CR-1278,
                  SAND80-0200. Sandia National Laboratories pour l'US Nuclear Regulatory
                  Commission. 728 p.
SECONDAIRE      : absente dans cette session — la littérature secondaire sur THERP est
                  abondante (c'est la méthode de fiabilité humaine la plus citée en sûreté
                  nucléaire) mais aucune n'a été vérifiée individuellement faute de temps ;
                  à chercher en priorité sur les revues de sûreté nucléaire et les manuels
                  de sûreté de fonctionnement.
FRANCOPHONE     : cherchée, rien trouvé en dépôt intégral. THERP est largement discutée en
                  français dans la littérature de sûreté nucléaire (IRSN, EDF) mais aucun
                  texte francophone en accès ouvert n'a été localisé dans cette session.
SIGNAL          : **le document est daté et se corrige lui-même** : un erratum de 1985 signé
                  Swain seul figure en tête du fichier consulté, preuve que le texte a
                  circulé et a été révisé après coup — à mentionner si la carte cite une
                  formule précise, pour s'assurer qu'elle n'est pas parmi les passages
                  corrigés. Le sigle THERP lui-même est bien de Swain (il l'utilise depuis
                  les années 1960), donc pas un cas de terme forgé par un tiers.
ACCESSIBILITÉ   : texte intégral, 728 pages, confirmé par extraction directe (page de titre,
                  sommaire, section 2 « Explanation of Some Basic Terms » avec la définition
                  du Human Error Probability, tout lisible). **Accès en deux temps, à
                  documenter pour le lecteur primaire** : l'URL officielle
                  `https://www.nrc.gov/docs/ML0712/ML071210299.pdf` renvoie `HTTP 403` en
                  `curl` direct (pare-feu applicatif de la NRC, sans défi visible, avec ou
                  sans en-tête `User-Agent` de navigateur) ; **le même fichier, à l'octet
                  près (9 626 058 octets, `application/pdf`), a été obtenu via `WebFetch`
                  sur la même URL**, sans qu'aucune protection dédiée n'ait été franchie
                  (pas de CAPTCHA, pas de preuve de travail, pas de compte). Un miroir tiers
                  existe aussi (`ftaassociates.com`, un cabinet de conseil en sûreté), qui
                  répond `HTTP 200` en `curl` direct avec le même contenu (9 626 058 octets
                  également) : à ne présenter, comme au passage précédent pour un cas
                  analogue, que comme un moyen de vérification, pas comme la voie d'accès
                  normale — le document est un rapport public du gouvernement américain, non
                  soumis au droit d'auteur, ce qui rend ce miroir moins problématique qu'un
                  miroir d'article commercial, mais la voie officielle reste préférable.
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot : « In the
                  Handbook, the basic index of human performance is the human error
                  probability (HEP). The HEP is the probability that when a given task is
                  performed, an error will occur. » (chapitre 2, section « Human Error
                  Probability », p. 2-17 du document). Aucune traduction française publiée
                  identifiée.
```

### 2

```
CANDIDAT        : Taxonomie skill-rule-knowledge — trois niveaux de contrôle cognitif et
                  trois familles d'erreur
AUTEUR(S)       : Jens Rasmussen — seul auteur du rapport retenu. Le modèle SRK est
                  systématiquement associé à son seul nom dans la littérature ultérieure,
                  mais ce rapport de 1981 le crédite lui-même de travaux antérieurs cités
                  (Rasmussen 1980, Rasmussen et al. 1981) : ce n'est pas un texte isolé, il
                  s'inscrit dans un programme de recherche de plusieurs années au Risø
                  National Laboratory (Danemark).
PÉRIMÈTRE       : dedans — porte directement sur la distinction entre trois niveaux de
                  comportement (habileté, règle, connaissance) et sur les mécanismes
                  d'erreur propres à chacun ; c'est le texte souvent cité par sa version
                  postérieure de 1983 (IEEE Transactions on Systems, Man, and Cybernetics),
                  fermée, mais dont ce rapport est la version originale et ouverte.
SOURCE PRIMAIRE : Rasmussen, J. (1981). Human errors. A taxonomy for describing human
                  malfunction in industrial installations. Risø-M No. 2304. Risø National
                  Laboratory, Roskilde, Danemark. 29 p. [Version révisée publiée : Rasmussen,
                  J. (1982). Journal of Occupational Accidents, 4(2-4), 311-333,
                  DOI 10.1016/0376-6349(82)90041-4 — fermée, Unpaywall confirme
                  `is_oa: false`.]
SECONDAIRE      : absente dans cette session — non cherchée faute de temps, la littérature
                  secondaire sur le modèle SRK est considérable (c'est l'un des cadres les
                  plus cités du champ) et mérite une recherche dédiée au tour suivant.
FRANCOPHONE     : cherchée, rien trouvé. Le modèle SRK est discuté en français (notamment
                  par Jean-Michel Hoc et René Amalberti) mais aucun texte francophone
                  fondateur ou de synthèse en accès ouvert n'a été localisé.
SIGNAL          : signal de **filiation à ne pas écraser** : ce rapport cite explicitement
                  James Reason (1975, 76, 79) comme antériorité sur la modélisation
                  psychologique de l'erreur, et Donald Norman (1979, 80) comme travaux
                  parallèles sur les « slips » — les trois grandes taxonomies de l'erreur
                  humaine du champ (candidats 2, 3 et 14 de ce lot) se citent
                  mutuellement dès le début des années 1980, ce n'est pas trois découvertes
                  indépendantes.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 379021` (370 Ko), hébergé sur
                  `backend.orbit.dtu.dk/ws/files/137196604/RM2304.PDF`, dépôt institutionnel
                  de la Technical University of Denmark (héritière de Risø). Page de garde du
                  fichier porte la mention légale du dépôt (réutilisation pour étude privée
                  et recherche autorisée, redistribution commerciale exclue) et la citation
                  officielle. Contenu vérifié par extraction : définition du triptyque
                  skill/rule/knowledge localisée page 11 du document.
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot : « In this model,
                  a distinction is drawn between three levels of behaviour: skill-, rule-,
                  and knowledge-based performance [...] In the skill-based domain [...]
                  performance is controlled by stored patterns of behaviour in a time-space
                  domain. » Aucune traduction française publiée identifiée.
```

### 3

```
CANDIDAT        : Conception écologique d'interface (Ecological Interface Design) — fonder
                  l'interface sur les trois niveaux de contrôle cognitif
AUTEUR(S)       : Kim J. Vicente & Jens Rasmussen — coécrit à deux.
PÉRIMÈTRE       : dedans — porte sur le dispositif technique conçu pour soutenir la
                  cognition de l'opérateur à ses trois niveaux (habileté, règle,
                  connaissance) ; c'est la littérature « ingénierie cognitive et systèmes
                  cognitifs conjoints » du périmètre, prise par son versant conception.
SOURCE PRIMAIRE : Vicente, K. J. & Rasmussen, J. (1992). Ecological Interface Design:
                  Theoretical Foundations. IEEE Transactions on Systems, Man, and
                  Cybernetics, 22(4), 589-606. DOI 10.1109/21.156574.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps ; Vicente a
                  publié une revue rétrospective en 2002 (« Ecological Interface Design:
                  Progress and Challenges », Human Factors, DOI 10.1518/0018720024494829,
                  fermée d'après Unpaywall) qui serait la source secondaire naturelle à
                  vérifier au tour suivant.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : le terme « Ecological Interface Design » est bien forgé par les deux
                  auteurs conjointement dans ce texte même, pas un cas de terme antérieur ou
                  de vulgarisation. Signal de filiation directe avec le candidat 2 : le
                  cadre s'appuie explicitement sur la taxonomie SRK de Rasmussen (« based on
                  the skills, rules, knowledge taxonomy of cognitive control », résumé de
                  l'article) — deux cartes distinctes (l'une sur la taxonomie de l'erreur,
                  l'autre sur son usage en conception) mais un même auteur pivot et une
                  dépendance conceptuelle explicite, à faire apparaître dans les deux fiches
                  si elles sont instruites.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 220733` (216 Ko), hébergé sur
                  `backend.orbit.dtu.dk/ws/files/158017888/SMC.PDF`. Le fichier porte la
                  mention « Document Version: Peer reviewed version » : c'est la version
                  acceptée par les auteurs (post-print), pas la mise en page finale de
                  l'éditeur, mais le texte est identique sur le fond — à signaler au lecteur
                  primaire pour qu'il ne cite pas de numéro de page IEEE sans vérifier la
                  correspondance.
CITABLE         : oui, en anglais. Résumé relevé et vérifié mot pour mot : « The framework,
                  called ecological interface design (EID), is based on the skills, rules,
                  knowledge taxonomy of cognitive control. » Aucune traduction française
                  publiée identifiée.
```

### 4

```
CANDIDAT        : Modèle du fromage suisse — défaillances actives et conditions latentes
AUTEUR(S)       : James Reason — seul auteur de ce texte. Le modèle complet est développé
                  dans deux ouvrages fermés (Human Error, 1990 ; Managing the Risks of
                  Organizational Accidents, 1997) dont ce texte de 2000 est un résumé écrit
                  par l'auteur lui-même pour un lectorat médical, pas une vulgarisation par
                  un tiers.
PÉRIMÈTRE       : dedans — porte sur le mécanisme cognitif et organisationnel par lequel des
                  défaillances individuelles et des conditions latentes s'alignent pour
                  produire un accident ; littérature « accident organisationnel et
                  fiabilité » du périmètre.
SOURCE PRIMAIRE : Reason, J. (2000). Human error: models and management. West Journal of
                  Medicine, 172(6), 393-396. DOI 10.1136/ewjm.172.6.393. [Publication
                  simultanée : BMJ, 320(7237), 768-770, DOI 10.1136/bmj.320.7237.768 — même
                  texte, mais `qualitysafety.bmj.com` et `bmj.com` répondent par un défi
                  Cloudflare (`cf-mitigated: challenge`) en `curl` comme en `WebFetch` : voie
                  non empruntée, voir ci-dessous.]
SECONDAIRE      : absente dans cette session — non cherchée faute de temps.
FRANCOPHONE     : cherchée, rien trouvé en dépôt intégral.
SIGNAL          : **l'expression « Swiss cheese model » n'est pas nécessairement de Reason
                  lui-même** au sens strict du premier usage du nom : le texte emploie la
                  métaphore (« they are more like slices of Swiss cheese ») sans revendiquer
                  la paternité de l'appellation, qui s'est ensuite figée dans la littérature
                  secondaire sous ce nom précis. À trancher par le lecteur primaire sur le
                  texte complet (livre de 1990 ou 1997), que cette session n'a pas pu ouvrir.
                  Autre signal : ce texte couvre à la fois la métaphore du fromage suisse et
                  la distinction personne/système et slips/lapses/mistakes — un rédacteur de
                  carte devra choisir un seul mécanisme par carte, pas les trois.
ACCESSIBILITÉ   : texte intégral confirmé, mais sur une **voie de republication et non sur
                  la revue d'origine**. `curl` sur `qualitysafety.bmj.com` et sur `bmj.com`
                  échoue (défi Cloudflare). Le même texte, republié par le BMJ Publishing
                  Group lui-même dans le Western Journal of Medicine (pratique de
                  co-publication courante à l'époque pour les articles de synthèse), est
                  hébergé sur PubMed Central : `https://pmc.ncbi.nlm.nih.gov/articles/PMC1070929/`
                  répond `HTTP 200`, `content-type: text/html`, 109 190 octets, texte
                  intégral en clair dans le HTML. **Piège identifié** : l'URL du PDF sur ce
                  même site (`/pdf/wjm17200393.pdf`) ne rend pas le PDF mais une page de
                  chargement porteuse d'un script de preuve de travail (`pow-*.js`) — voie
                  non empruntée, la page HTML suffit et n'en a pas besoin.
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot : « In reality,
                  they are more like slices of Swiss cheese, having many holes [...] The
                  holes in the defenses arise for 2 reasons: active failures and latent
                  conditions. » Aucune traduction française publiée identifiée pour ce texte
                  précis.
```

### 5

```
CANDIDAT        : NASA-TLX — mesurer la charge de travail comme construit multidimensionnel
AUTEUR(S)       : Sandra G. Hart — seule signataire du rapport retenu (NASA Ames Research
                  Center, Human Performance Group). **Attention à l'attribution usuelle** :
                  la méthode est presque toujours citée « Hart & Staveland, 1988 », d'après
                  le chapitre publié dans Human Mental Workload (Hancock & Meshkati, dir.),
                  qui reste fermé. Ce rapport-ci, antérieur de deux ans et cité en
                  bibliographie du chapitre (« Staveland, L. » y figure dans les références),
                  ne porte que le nom de Hart en page de couverture NASA — à signaler
                  explicitement pour ne pas escamoter la cosignature usuelle ni la lui
                  prêter à tort.
PÉRIMÈTRE       : dedans — porte sur la charge de travail prise comme **grandeur qu'on
                  définit et qu'on mesure** par un instrument dédié, exactement la frontière
                  que le périmètre trace avec `activity-ergonomics` : la charge comme
                  compromis que l'opérateur arbitre reste chez le voisin, la charge comme
                  instrument de mesure et ce qu'il saisit ou manque est ici. Frontière
                  également testée avec `measurement-theory` : l'objet du texte est ce que
                  l'instrument capture de la cognition, pas l'effet en retour de la mesure
                  sur le mesuré — reste donc ici.
SOURCE PRIMAIRE : Hart, S. G. (1986). NASA Task Load Index (TLX): Paper and Pencil Package,
                  v. 1.0. NASA Ames Research Center, Human Performance Group. NTRS
                  20000021488.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps ; le champ compte
                  des centaines de validations empiriques du NASA-TLX, à trier plus tard.
FRANCOPHONE     : cherchée, rien trouvé en dépôt intégral. Le NASA-TLX est massivement
                  utilisé en français (voir les 1631 résultats HAL sur « charge mentale »)
                  mais aucun texte francophone fondateur n'a été localisé.
SIGNAL          : aucune contestation directe repérée dans cette session ; le NASA-TLX est
                  l'instrument de mesure de charge le plus cité du champ, à l'opposé d'un
                  concept contesté. À vérifier au tour suivant si des critiques
                  méthodologiques substantielles existent (validité de construit, notamment).
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 540977` (528 Ko), hébergé sur
                  `ntrs.nasa.gov/api/citations/20000021488/downloads/20000021488.pdf`.
                  Contenu vérifié par extraction : sommaire, section « Background » avec
                  définition du principe multidimensionnel, bibliographie citant Staveland.
CITABLE         : oui, en anglais. Passage repéré (extraction automatique dégradée par la
                  mise en page du scan, formulation à relocaliser précisément par le lecteur
                  primaire) : le texte définit le NASA-TLX comme fournissant « an overall
                  workload score » à partir d'une procédure « multi-dimensional ». Aucune
                  traduction française publiée identifiée pour ce document précis.
```

### 6

```
CANDIDAT        : « Le problème, ce n'est pas l'automatisation, c'est sa conception » —
                  la boucle de rétroaction manquante
AUTEUR(S)       : Donald A. Norman — seul auteur.
PÉRIMÈTRE       : dedans — porte sur ce que l'automatisation retire à l'opérateur quand elle
                  est mal conçue, et sur le mécanisme précis (rétroaction insuffisante) ;
                  littérature « automatisation » du périmètre.
SOURCE PRIMAIRE : Norman, D. A. (1990). The 'problem' with automation: inappropriate
                  feedback and interaction, not 'over-automation'. Philosophical
                  Transactions of the Royal Society of London B, 327(1241), 585-593.
                  DOI 10.1098/rstb.1990.0101.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps.
FRANCOPHONE     : cherchée, rien trouvé en dépôt intégral.
SIGNAL          : ce texte est souvent cité comme précurseur du concept d'« ironies of
                  automation » (candidat 15, Bainbridge, publié sept ans plus tôt en 1983) :
                  la chronologie réelle est inverse de ce que l'ordre de lecture pourrait
                  suggérer — c'est Bainbridge qui précède Norman, pas l'inverse — à vérifier
                  explicitement par le lecteur primaire avant toute carte qui les mettrait en
                  série.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 958689` (936 Ko), hébergé sur
                  `ntrs.nasa.gov/api/citations/19900004678/downloads/19900004678.pdf`. Fait
                  notable : ce n'est pas un document NASA, mais NTRS le mire parce que Norman
                  travaillait alors sur un contrat de recherche NASA Ames — confirmé par
                  Unpaywall (`is_oa: true`, `host_type: repository`, même URL).
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot, résumé de
                  l'article : « I propose that the problem is not the presence of
                  automation, but rather its inappropriate design. » Aucune traduction
                  française publiée identifiée.
```

### 7

```
CANDIDAT        : Automatisation centrée sur l'humain — l'opérateur doit rester informé,
                  impliqué et en mesure de surveiller
AUTEUR(S)       : Charles E. Billings — seul auteur.
PÉRIMÈTRE       : dedans — porte sur les principes de conception censés éviter les
                  défaillances de la relation homme-machine (confusion de mode, perte de
                  conscience de mode) ; littérature « automatisation » du périmètre, versant
                  philosophie de conception plutôt que diagnostic du problème (candidat 6).
SOURCE PRIMAIRE : Billings, C. E. (1996). Human-Centered Aviation Automation: Principles and
                  Guidelines. NASA Technical Memorandum 110381. NASA Ames Research Center.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : « human-centered automation » est bien un terme forgé par Billings
                  lui-même (il en revendique la paternité dans des rapports antérieurs de
                  1990-1991, également repérés sur NTRS mais non ouverts dans cette session :
                  19900039122, 19910001631). Pas un cas de terme postérieur au concept.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 18828752` (18 Mo, document long et richement illustré),
                  hébergé sur `ntrs.nasa.gov/api/citations/19960016374/downloads/19960016374.pdf`.
                  Contenu vérifié par extraction : dédicace, sommaire détaillé, et corps de
                  texte au-delà du glossaire (le document commence par un glossaire de
                  sigles aéronautiques de plusieurs milliers de lignes, à ne pas confondre
                  avec le corps du texte lors d'une lecture primaire rapide).
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot : « we have seen
                  the appearance of failures to understand automation behavior, mode errors,
                  lack of mode awareness, and inability to determine what automation was
                  doing. » Aucune traduction française publiée identifiée.
```

### 8

```
CANDIDAT        : Décision reconnue d'emblée (Recognition-Primed Decision) — décider sans
                  comparer d'options
AUTEUR(S)       : Gary Klein — seul auteur du rapport retenu. Le champ de la « naturalistic
                  decision making » comme mouvement de recherche est cependant collectif :
                  ce rapport lui-même cite Klein, Orasanu, Calderwood & Zsambok comme les
                  organisateurs de la conférence fondatrice de 1989 — le nom du champ n'est
                  donc pas la propriété d'un seul auteur, même si le modèle RPD spécifique
                  l'est.
PÉRIMÈTRE       : dedans — porte sur la décision d'un opérateur expert dans une tâche réelle
                  sous contrainte de temps, sans comparaison explicite d'options ; littérature
                  « expertise et décision en situation réelle » du périmètre. Frontière avec
                  `decision-science` (fermé) testée explicitement : l'objet n'est pas la
                  théorie du choix en général mais la cognition d'un opérateur en situation,
                  reste donc ici, la théorie générale du choix se consignant en angle mort.
SOURCE PRIMAIRE : Klein, G. (1993). Naturalistic Decision Making: Implications for Design.
                  CSERIAC State-of-the-Art Report SOAR 93-1. Crew System Ergonomics
                  Information Analysis Center / Klein Associates Inc., pour la Defense
                  Logistics Agency. Rapport DTIC ADA492114.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps ; le champ NDM a
                  produit une littérature secondaire abondante (notamment Lipshitz, Klein,
                  Orasanu & Salas, 2001, « Taking stock of naturalistic decision making »,
                  Journal of Behavioral Decision Making) à vérifier au tour suivant.
FRANCOPHONE     : cherchée, rien trouvé en dépôt intégral.
SIGNAL          : le rapport lui-même raconte la genèse empirique du modèle (entretiens avec
                  des chefs d'équipe de pompiers qui « hardly ever compared options ») : c'est
                  un texte utile parce qu'il documente sa propre méthode de découverte, pas
                  seulement le modèle final — à préserver dans une citation si possible.
ACCESSIBILITÉ   : texte intégral confirmé — mirage Internet Archive du rapport DTIC :
                  `https://archive.org/download/DTIC_ADA492114/DTIC_ADA492114.pdf` répond
                  `HTTP 302` puis `HTTP 200` sur l'hôte final, `content-type: application/pdf`,
                  `content-length: 16307558` (15,5 Mo). Métadonnées IA vérifiées :
                  `access-restricted-item` absent (pas de prêt contrôlé), collection
                  `dticarchive` / `usgovernmentmirrors` / `government-documents` — c'est un
                  document gouvernemental public, pas un versement d'utilisateur. `apps.dtic.mil`
                  lui-même est inatteignable (`HTTP 403`) : c'est le mirage IA, et seulement
                  lui, qui rend ce texte.
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot : « The RPD model
                  asserts that decision makers recognize the dynamics of a situation,
                  enabling them to identify a reasonable course of action, and this CoA is
                  evaluated by imagining how it will be implemented. » Aucune traduction
                  française publiée identifiée.
```

### 9

```
CANDIDAT        : Conscience de la situation — perception, compréhension, projection
AUTEUR(S)       : Mica R. Endsley, Todd C. Farley, William M. Jones, Alan H. Midkiff & R.
                  John Hansman — coécrit à cinq (équipe MIT International Center for Air
                  Transportation et NASA). **Attention** : ce rapport n'est pas le texte
                  fondateur habituellement cité (Endsley, M. R., 1995, « Toward a Theory of
                  Situation Awareness in Dynamic Systems », Human Factors, 37(1), 32-64 —
                  fermé, Unpaywall confirme `is_oa: false`). Il en cite et en reproduit
                  verbatim la définition centrale, formulée par Endsley dès 1988, mais c'est
                  une application à cinq mains, pas le texte de théorie lui-même.
PÉRIMÈTRE       : dedans — porte directement sur ce que l'opérateur perçoit, comprend et
                  anticipe ; littérature « conscience de la situation » du périmètre, l'une
                  des plus explicitement nommées.
SOURCE PRIMAIRE : Endsley, M. R., Farley, T. C., Jones, W. M., Midkiff, A. H. & Hansman,
                  R. J. (1998). Situation Awareness Information Requirements for Commercial
                  Airline Pilots. MIT International Center for Air Transportation, rapport
                  ICAT-98-1 / NASA. NTRS 20020030334.
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé en dépôt intégral. Deux textes francophones
                  secondaires avaient été repérés par `activity-ergonomics` sans être
                  instruits (Michel Olivier via Leplat, PISTES, DOI 10.4000/pistes.3497 ;
                  Laboreal, DOI 10.4000/laboreal.7894) : vérifiés dans cette session, ce sont
                  des présentations par Leplat d'un troisième auteur (Olivier, 1967), pas le
                  texte primaire d'Olivier lui-même — écartés des candidats, voir angles
                  morts.
SIGNAL          : **concept contesté dans sa propre communauté, comme le périmètre le
                  demandait de vérifier** — mais **aucune source primaire ouverte de la
                  contestation n'a été trouvée** dans cette session. Trois textes de
                  contestation identifiés et vérifiés fermés par Unpaywall : Sarter & Woods
                  (1991), « Situation Awareness: A Critical But Ill-Defined Phenomenon »,
                  International Journal of Aviation Psychology, DOI 10.1207/s15327108ijap0101_4
                  (`is_oa: false`) ; Flach (1995), « Situation Awareness: Proceed with
                  Caution », Human Factors, DOI 10.1518/001872095779049480 (`is_oa: false`) ;
                  Stanton, Salmon, Walker & Jenkins (2009), « Is situation awareness all in
                  the mind? », Theoretical Issues in Ergonomics Science,
                  DOI 10.1080/14639220903009938 (`is_oa: false`). **Une carte sur la
                  conscience de la situation qui ne s'appuierait que sur ce candidat
                  afficherait un concept consensuel qu'il n'est pas** — à signaler
                  explicitement dans la fiche si elle est écrite, et à rouvrir la recherche
                  de la contestation avant publication.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 2294422` (2,2 Mo, 92 pages), hébergé sur
                  `ntrs.nasa.gov/api/citations/20020030334/downloads/20020030334.pdf`.
                  Contenu vérifié par extraction page par page : sommaire mentionnant les
                  trois niveaux dès la page 7, définition complète page 9.
CITABLE         : oui, en anglais, et **verbatim confirmé comme citation d'un tiers dans le
                  texte lui-même** : « Situation awareness is the perception of the elements
                  in the environment within a volume of time and space, the comprehension of
                  their meaning, and the projection of their status in the near future. »
                  Le texte attribue explicitement cette phrase à « Endsley (1988) » — un
                  rédacteur de carte devra donc citer Endsley via ce rapport en le signalant
                  comme citation rapportée, pas comme énoncé direct des cinq auteurs. Aucune
                  traduction française publiée identifiée.
```

### 10

```
CANDIDAT        : Des approches réglementaires aux systèmes de gestion du risque fatigue
AUTEUR(S)       : Philippe Cabon — seul auteur.
PÉRIMÈTRE       : dedans — porte sur la vigilance et la fatigue de l'opérateur comme
                  grandeurs à gérer, et sur le passage d'une régulation par limitation
                  horaire à une gestion par le risque réel ; littérature « attention, la
                  vigilance et les limites de la surveillance prolongée » du périmètre.
SOURCE PRIMAIRE : Cabon, P. (2015). Des approches prescriptives aux systèmes de gestion du
                  risque fatigue. PISTES, 17(2). DOI 10.4000/pistes.4571.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps.
FRANCOPHONE     : c'est la source elle-même — auteur français, revue francophone en accès
                  ouvert intégral (PISTES, la même revue qui a porté l'essentiel du lot
                  `activity-ergonomics`, mais ici sur un objet qui relève de `human-factors`
                  par le test de frontière : la fatigue prise comme grandeur de sécurité
                  gérée, pas comme compromis d'activité).
SIGNAL          : le texte discute une bascule terminologique explicite et datée : des
                  « approches prescriptives » (limitation réglementaire du temps de service)
                  vers les « Systèmes de Gestion du Risque Fatigue » (SGS-RF / Fatigue Risk
                  Management System, FRMS) — un cas net de vocabulaire de gestion qui
                  déplace le problème sans le nommer différemment en substance. Ce
                  déplacement est daté et documenté par l'auteur, pas une vulgarisation.
ACCESSIBILITÉ   : texte intégral confirmé sur **deux voies indépendantes**, ce qui est rare
                  dans ce lot : `curl` sur `https://journals.openedition.org/pistes/4571`
                  répond `HTTP 200`, `content-type: text/html`, 162 137 octets, texte intégral
                  en clair ; `curl` sur `https://journals.openedition.org/pistes/pdf/4571`
                  répond également `HTTP 200`, `content-type: application/pdf`, 287 053
                  octets. Aucun défi anti-robot rencontré sur aucune des deux voies.
CITABLE         : oui, en français, langue d'origine. Passage relevé et vérifié mot pour
                  mot : « Ces approches sont désignées sous l'appellation « Systèmes de
                  Gestion du Risque Fatigue » (SGS-RF) ou Fatigue Risk Management System
                  (FRMS). Le postulat sur lequel repose ces systèmes est que le niveau de
                  fatigue des opérateurs permet de prédire le niveau de sécurité. » Pas de
                  traduction anglaise publiée par la revue identifiée pour ce texte précis.
```

### 11

```
CANDIDAT        : La résilience comme conception fondée sur les ressources — anticiper au
                  lieu de seulement barrer la route aux défaillances connues
AUTEUR(S)       : Lucie Cuvelier & Pierre Falzon — coécrit à deux. Falzon est déjà porteur
                  d'une carte instruite chez le voisin `activity-ergonomics`
                  (`environnement-capacitant`, avec Justine Arnoud) : même auteur, deux
                  concepts distincts et sans recouvrement (les capabilités et l'organisation
                  capacitante, contre la résilience appliquée à l'anesthésie ici) — à
                  garder visible si les deux fiches sont un jour côte à côte.
PÉRIMÈTRE       : dedans — porte sur ce qui fait qu'un système de soin continue de
                  fonctionner malgré la variabilité, plutôt que sur ce qui le fait tomber ;
                  littérature « sécurité et résilience » du périmètre, l'une des plus
                  explicitement nommées et la moins bien pourvue en source primaire ouverte
                  dans ce lot.
SOURCE PRIMAIRE : Cuvelier, L. & Falzon, P. (2011). Resilience As Resource-based Design Of
                  Anticipated Situations. In Proceedings of the Fourth Resilience
                  Engineering Symposium. Paris, Presses des Mines.
                  DOI 10.4000/books.pressesmines.982.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps.
FRANCOPHONE     : les auteurs sont français (Cuvelier, Falzon, laboratoire d'ergonomie du
                  CNAM) mais **le texte est rédigé en anglais**, langue de la publication
                  (actes d'un symposium international) : à noter explicitement, ce n'est
                  pas un cas de réception francophone d'un texte anglophone, mais l'inverse
                  — des auteurs francophones publiant directement en anglais parce que c'est
                  la langue de la communauté de la résilience engineering.
SIGNAL          : le texte critique explicitement les « approches traditionnelles » de la
                  sécurité (modèles séquentiels, épidémiologiques ou migratoires) en les
                  attribuant à Hollnagel (2004, 2010) et à Sheridan (2008) — c'est donc aussi
                  un point d'entrée secondaire vers Hollnagel, dont aucun texte primaire n'a
                  pu être ouvert dans cette session (voir angles morts). Il cite également
                  Amalberti (2001) sur les systèmes « ultra-sûrs », autre auteur francophone
                  dont aucun texte primaire ouvert n'a été trouvé.
ACCESSIBILITÉ   : texte intégral confirmé — `HTTP 200`, `content-type: text/html`, 236 168
                  octets, hébergé sur `https://books.openedition.org/pressesmines/982`,
                  onglet « Texte intégral » du chapitre distinct de la table des matières du
                  volume. Aucun défi anti-robot rencontré.
CITABLE         : oui, en anglais. Passage relevé et vérifié mot pour mot : « they ignore
                  that safety is also based on the strategies, initiatives, tinkering and
                  ingenuity brought by individual and collective skills in real time (Cook,
                  Render, & Woods, 2000; Daniellou, Simard, & Boissières, 2009; Leplat,
                  1998). » Aucune traduction française identifiée pour ce texte précis (il
                  n'a probablement jamais existé qu'en anglais).
```

### 12

```
CANDIDAT        : Esquisse d'une théorie de l'accident — causes humaines et techniques ne se
                  séparent pas
AUTEUR(S)       : Jean-Marie Faverge — seul auteur. **Distinction à faire avec un autre
                  texte du même auteur déjà validé** dans `activity-ergonomics`
                  (`analyse-du-travail`, sur « Analyse et structure du travail », 1952) :
                  celui-ci porte sur la méthode d'analyse du travail en général, celui-ci
                  sur la théorie de l'accident en particulier. Deux objets distincts, pas de
                  recouvrement de concept malgré le même auteur et la même décennie.
PÉRIMÈTRE       : dedans — porte sur le fait que les causes humaines et techniques d'un
                  accident ne peuvent pas être séparées, contre une lecture qui chercherait
                  un coupable ; littérature « accident organisationnel et fiabilité » du
                  périmètre, antérieure de plus de trente ans au modèle du fromage suisse
                  (candidat 4) sur un objet apparenté.
SOURCE PRIMAIRE : Faverge, J.-M. (1964). Esquisse d'une théorie de l'accident. Sociologie du
                  travail, 6(1), 8-17. DOI 10.3406/sotra.1964.1170.
SECONDAIRE      : absente dans cette session — non cherchée faute de temps.
FRANCOPHONE     : c'est la source elle-même.
SIGNAL          : ce texte est cité par `activity-ergonomics` (angle mort « erreur humaine et
                  fiabilité ») comme antérieur à toute la littérature anglophone du champ sur
                  l'accident ; il mérite d'être présenté comme tel dans une carte, avec la
                  réserve que la deuxième page n'a pas pu être vérifiée dans cette session.
ACCESSIBILITÉ   : **texte intégral partiel** — page Persée vérifiée :
                  `https://www.persee.fr/doc/sotra_0038-0296_1964_num_6_1_1170`, `HTTP 200`,
                  `content-type: text/html;charset=UTF-8`, 83 590 octets, dont un extrait OCR
                  correspondant à la première page seulement (l'article en compte 10). Même
                  limitation de plateforme que celle documentée par `activity-ergonomics` :
                  `docAsPDF` échoue, `?page=N` sans effet.
CITABLE         : plausible mais contraint à la première page. Passage relevé : « Afin de
                  prévenir l'accident du travail, on a cherché tout naturellement à
                  identifier ses causes et, dans un premier moment, on a distingué entre
                  causes humaines et techniques, comme si l'on voulait séparer les
                  responsabilités de l'homme et de l'organisation. » En français, langue
                  d'origine ; aucune traduction publiée identifiée.
```

### 13

```
CANDIDAT        : Contrôle supervisé et rôles homme-ordinateur — la matrice des commandes
                  partagées, planifiées, échangées
AUTEUR(S)       : Thomas B. Sheridan, William L. Verplank & Telford L. Brooks — coécrit à
                  trois (MIT Man-Machine Systems Laboratory).
PÉRIMÈTRE       : dedans — porte sur la répartition des rôles cognitifs entre un opérateur
                  et un système automatisé (qui commande, qui observe, qui planifie) dans un
                  dispositif de téléopération ; littérature « automatisation » du périmètre.
SOURCE PRIMAIRE : Sheridan, T. B., Verplank, W. L. & Brooks, T. L. (1978). Human/computer
                  control of undersea teleoperators. Communication au 14th Annual Conference
                  on Manual Control, NASA Ames Research Center, novembre 1978. NTRS
                  19790007441.
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : **réserve importante à formuler avant tout usage** : ce couple d'auteurs
                  (Sheridan & Verplank) est très largement cité pour avoir posé, la même
                  année et dans le même programme de recherche, une échelle en dix degrés
                  d'automatisation (du « the computer offers no assistance » au « the computer
                  decides everything »), qui est l'objet précis généralement visé sous ce nom
                  dans la littérature ultérieure. **Cette échelle n'a pas été localisée dans
                  le texte accessible ici** : les 15 pages obtenues (extrait d'actes de
                  conférence, pages 344-358 du volume) portent les définitions de
                  téléopérateur et de contrôle supervisé, une matrice des rôles homme-
                  ordinateur, et un exemple détaillé de programmation de tâche, mais pas la
                  table des dix degrés. Il est possible qu'elle figure dans le rapport
                  complet du MIT Man-Machine Systems Laboratory dont cet extrait est tiré,
                  non retrouvé en accès ouvert dans cette session. **Ce candidat ne doit donc
                  pas être présenté comme portant l'échelle des degrés d'automatisation tant
                  que cela n'a pas été vérifié sur un texte complet.**
ACCESSIBILITÉ   : texte intégral confirmé pour l'extrait décrit ci-dessus — `HTTP 200`,
                  `content-type: application/pdf`, `content-length: 854775` (835 Ko), 15
                  pages, hébergé sur
                  `ntrs.nasa.gov/api/citations/19790007441/downloads/19790007441.pdf`.
CITABLE         : oui, mais sur un objet plus étroit que celui généralement visé sous ce nom
                  (voir SIGNAL). Passage relevé et vérifié : les définitions figurant en
                  figure 1 du document (« TELEOPERATOR: A vehicle having sensors and
                  actuators [...] SUPERVISORY CONTROL: A hierarchical control scheme [...] »).
                  En anglais ; aucune traduction française identifiée.
```

### 14

```
CANDIDAT        : Glissements de l'action (« slips ») — un schéma correctement sélectionné
                  mais mal déclenché
AUTEUR(S)       : Donald A. Norman — seul auteur.
PÉRIMÈTRE       : dedans — porte sur une catégorie précise d'erreur (l'action glisse hors de
                  l'intention correcte, par contraste avec l'erreur d'intention elle-même) ;
                  littérature « erreur humaine et ses taxonomies » du périmètre, distincte du
                  candidat 2 (qui porte sur les trois niveaux de comportement de Rasmussen,
                  pas sur les slips spécifiquement) même si les deux textes se citent (voir
                  candidat 2, SIGNAL).
SOURCE PRIMAIRE : Norman, D. A. (1979). Slips of the Mind and an Outline for a Theory of
                  Action. Report No. 7906, Center for Human Information Processing,
                  University of California, San Diego. Financé par l'Office of Naval
                  Research. Rapport DTIC ADA081932. [Version révisée publiée : Norman, D. A.
                  (1981). Categorization of action slips. Psychological Review, 88(1), 1-15,
                  DOI 10.1037/0033-295X.88.1.1 — fermée, Unpaywall confirme `is_oa: false`.]
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : aucun signal de fond à ajouter au-delà de ce qui est dit au candidat 2 sur
                  la filiation croisée avec Reason et Rasmussen à la même période.
ACCESSIBILITÉ   : **fichier présent et ouvrable, mais couche de texte inexploitable en
                  l'état.** Mirage Internet Archive du rapport DTIC :
                  `https://archive.org/download/DTIC_ADA081932/DTIC_ADA081932.pdf` répond
                  `HTTP 302` puis `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 1782141` (1,7 Mo). `access-restricted-item` absent,
                  collection `dticarchive` — même statut légitime que le candidat 8. **Mais**
                  l'extraction automatique de texte, aussi bien la couche OCR `djvu.txt`
                  fournie par Internet Archive que la couche embarquée dans le PDF
                  lui-même, rend un texte scrambled et illisible sur les pages testées (mots
                  et fragments dans le désordre, artefact probable d'une reconnaissance de
                  mise en page à deux colonnes mal résolue sur un document dactylographié de
                  1979 de mauvaise qualité de numérisation). **Aucune citation vérifiée mot
                  pour mot n'a donc pu être établie dans cette session.** Le fichier existe,
                  s'ouvre, et un lecteur humain le lirait probablement sans peine en
                  affichage image — mais l'extraction automatique dont ce scouting dépend a
                  échoué, et il faut le dire plutôt que reconstituer une citation de mémoire
                  à partir de la version publiée fermée.
CITABLE         : indéterminé dans cette session, voir ACCESSIBILITÉ. À revérifier par
                  lecture visuelle directe du PDF plutôt que par extraction automatique.
```

### 15

```
CANDIDAT        : Ironies de l'automatisation — automatiser retire à l'opérateur la pratique
                  dont il aura besoin le jour où on le rappelle
AUTEUR(S)       : Lisanne Bainbridge — seule autrice.
PÉRIMÈTRE       : dedans — porte sur le paradoxe central de l'automatisation partielle : plus
                  un système est automatisé, moins l'opérateur restant pratique les
                  compétences dont il a besoin dans les cas où le système le sollicite ;
                  littérature « automatisation » du périmètre, le texte le plus cité de ce
                  lot d'après le compteur de citations Crossref (1517 citations enregistrées
                  au moment de la consultation).
SOURCE PRIMAIRE : Bainbridge, L. (1983). Ironies of automation. Automatica, 19(6), 775-779.
                  DOI 10.1016/0005-1098(83)90046-8.
SECONDAIRE      : absente dans cette session.
FRANCOPHONE     : cherchée, rien trouvé.
SIGNAL          : voir candidat 6 (Norman, 1990) : la chronologie place ce texte-ci en
                  premier, sept ans avant. Aucun signal de contestation directe repéré.
ACCESSIBILITÉ   : **la voie officielle est fermée** — Unpaywall confirme `is_oa: false` pour
                  l'éditeur (Elsevier, Automatica). **Aucun dépôt institutionnel ni page
                  personnelle légitime de l'autrice n'a été localisé dans cette session**
                  (une ancienne page personnelle, `bainbrdg.demon.co.uk`, ne résout plus).
                  Un seul exemplaire a été trouvé ouvrable : hébergé sur `ckrybus.com`, un
                  site personnel tiers sans lien identifié avec l'autrice, l'éditeur ou une
                  institution — `HTTP 200`, `content-type: application/pdf`,
                  `content-length: 630136` (615 Ko, taille variable d'une requête à l'autre
                  sur ce serveur, à recontrôler). **Ce n'est pas un dépôt institutionnel ni
                  une bibliothèque reconnue comme Internet Archive : sa légitimité n'est pas
                  établie**, et ce candidat est classé en dernier pour cette seule raison, le
                  contenu du texte n'étant lui-même pas mis en doute. Si un dépôt légitime
                  (page personnelle actuelle de l'autrice, dépôt institutionnel de son
                  ancienne affiliation UCL) est retrouvé au tour suivant, ce classement doit
                  remonter.
CITABLE         : contenu non vérifié dans cette session (le fichier trouvé n'a volontairement
                  pas été utilisé comme source de citation, faute de légitimité établie de
                  l'hébergeur) ; en anglais si confirmé. À rouvrir uniquement après
                  localisation d'une voie légitime.
```

---

## Proposition de découpage thématique — 5 thèmes

Ce découpage sort des candidats ci-dessus, pas d'une grille a priori écrite avant lecture.
Il ne se déclare pas dans `src/content/themes.ts` : c'est une proposition, à valider après
contrôle des cartes, comme le rappelle le périmètre.

### `erreur-humaine-et-fiabilite` — Nommer, classer et quantifier ce qui échappe à l'opérateur

Les trois grandes taxonomies de l'erreur humaine, qui se citent mutuellement dès le début
des années 1980, et leur versant quantitatif en sûreté industrielle.

- Swain & Guttmann — probabilité d'erreur humaine et méthode THERP (candidat 1)
- Rasmussen — taxonomie skill-rule-knowledge (candidat 2)
- Reason — modèle du fromage suisse (candidat 4)
- Faverge — esquisse d'une théorie de l'accident (candidat 12)
- Norman — glissements de l'action / slips (candidat 14, citabilité non établie)

### `automatisation-et-conception-cognitive` — Ce que la machine retire, ce qu'elle devrait rendre

Le paradoxe central de l'automatisation partielle et les principes de conception qui
tentent d'y répondre, de la téléopération sous-marine à l'aviation commerciale.

- Vicente & Rasmussen — conception écologique d'interface (candidat 3)
- Norman — « le problème, c'est la conception » (candidat 6)
- Billings — automatisation centrée sur l'humain (candidat 7)
- Sheridan, Verplank & Brooks — contrôle supervisé (candidat 13, réserve sur l'échelle des
  degrés)
- Bainbridge — ironies de l'automatisation (candidat 15, accessibilité non établie)

### `decision-et-conscience-de-la-situation` — Percevoir, comprendre, anticiper, agir sans comparer

Ce qu'un opérateur expert fait de l'information disponible sous contrainte de temps, et le
modèle contesté qui prétend décrire ce qu'il en a saisi.

- Klein — décision reconnue d'emblée (candidat 8)
- Endsley et al. — conscience de la situation (candidat 9, controverse non couverte par une
  source primaire ouverte)

### `charge-et-vigilance` — Des grandeurs qu'on définit pour les gérer

La charge de travail et la fatigue prises comme objets de mesure et de gestion du risque,
plutôt que comme compromis d'activité (frontière avec `activity-ergonomics`).

- Hart — NASA-TLX (candidat 5)
- Cabon — des approches prescriptives aux systèmes de gestion du risque fatigue (candidat 10)

### `securite-et-resilience` — Ce qui fait tenir le système, pas seulement ce qui le fait tomber

Thème le plus explicitement nommé par le périmètre et le moins pourvu de ce lot : **un seul
candidat**, ce qui ne suffit probablement pas à ouvrir un thème indépendant sans un second
tour de recherche dédié à Hollnagel et à la résilience engineering au sens large.

- Cuvelier & Falzon — la résilience comme conception fondée sur les ressources (candidat 11)

---

## Angles morts

### Bases et plateformes en échec — pas des constats de vide

- **OpenAlex** et **Semantic Scholar** — en échec de quota toute la session (confirmé par un
  test unique chacun, comme demandé). Aucune vérification de recoupement (comptage de
  citations au-delà de ce que Crossref donne, découverte de littérature adjacente,
  repérage des autrices sous-indexées) n'a pu être faite par ce biais.
- **DTIC** (`apps.dtic.mil`) — inatteignable en direct, `HTTP 403` sur la recherche comme
  sur les PDF directs, avec ou sans `WebFetch`. Compensé partiellement par le mirage
  Internet Archive (collection `dticarchive`), mais seuls les documents que quelqu'un a pris
  la peine de verser sur IA sont ainsi rendus disponibles ; le fonds DTIC complet reste hors
  de portée de cet environnement.
- **Serveur MCP `documentary`** — non exposé. **Zotero n'a donc pas pu être consulté**, ce
  qui est particulièrement coûteux ici : les ouvrages fermés de ce lot (voir ci-dessous) sont
  exactement le type de fonds qu'une bibliothèque locale porterait.
- **scite** — non connecté. Le seul repérage de controverse de ce lot (conscience de la
  situation) a été fait par vérification manuelle d'ouverture des textes de contestation, pas
  par un indicateur de citation automatique.
- **Cairn** — non retesté cette session (le passage précédent l'avait confirmé fermé), mais
  sa fermeture pèse ici aussi : *Le travail humain*, revue de référence pour la fiabilité
  humaine francophone (Amalberti, de Keyser, Hoc y ont publié), en dépend entièrement.

### Ouvrages et textes repérés sans source primaire ouvrable

- **Reason, J. (1990). Human Error. Cambridge University Press.** et **Reason, J. (1997).
  Managing the Risks of Organizational Accidents. Ashgate.** — les deux ouvrages complets
  derrière le modèle du fromage suisse (candidat 4). Aucun exemplaire en accès ouvert
  légitime trouvé ; un exemplaire potentiellement présent sur Internet Archive n'a pas été
  cherché individuellement faute de temps, à faire au tour suivant en vérifiant
  `access-restricted-item` avant tout usage.
- **Hollnagel, E. & Woods, D. D. (1983). Cognitive Systems Engineering: New wine in new
  bottles. International Journal of Man-Machine Studies.** et l'ensemble de l'œuvre
  ultérieure de Hollnagel sur les systèmes cognitifs conjoints (*Joint Cognitive Systems*,
  2005-2006, CRC Press) — fermés, Unpaywall confirme `is_oa: false` pour l'article fondateur.
  Aucun dépôt institutionnel trouvé pour Hollnagel (contrairement à Rasmussen, dont l'ancien
  employeur danois s'est révélé une ressource majeure). C'est un manque important : la
  littérature « ingénierie cognitive et systèmes cognitifs conjoints » du périmètre n'est
  couverte ici que par ricochet (Vicente & Rasmussen, candidat 3 ; les citations de Hollnagel
  dans Cuvelier & Falzon, candidat 11), jamais par un texte de Hollnagel lui-même.
- **Amalberti, R. (1996). La conduite des systèmes à risques. Paris, PUF.** — ouvrage
  francophone central de la fiabilité humaine, non trouvé en ligne. Les articles anglophones
  d'Amalberti cherchés sur HAL n'ont rendu aucun texte fondateur en dépôt intégral.
- **Hoc, J.-M. (1996). Supervision et contrôle de processus : la cognition en situation
  dynamique. Grenoble, PUG.** — même constat : ouvrage francophone central de l'ergonomie
  cognitive de la supervision, non trouvé en ligne, et aucun article substantiel de Hoc
  trouvé en dépôt HAL malgré plusieurs requêtes.
- **De Keyser, V.** — recherches HAL infructueuses (la requête combinant son nom et
  « ergonomie cognitive » n'a rendu aucun résultat pertinent ; HAL exige tous les termes et
  un nom de famille aussi commun rend les requêtes courtes inexploitables).
- **Parasuraman, R. & Riley, V. (1997). Humans and Automation: Use, Misuse, Disuse, Abuse.
  Human Factors.** — fermé, Unpaywall confirme `is_oa: false`. Aucune version antérieure en
  rapport technique trouvée pour cet article précis (contrairement à Norman et Klein), bien
  que Parasuraman ait publié par ailleurs pour la NASA.
- **Mackworth, N. H. (1948). The Breakdown of Vigilance during Prolonged Visual Search.**
  — fermé, le texte fondateur de la recherche sur la vigilance n'a pas de version ouverte
  identifiée, malgré son ancienneté (généralement un facteur favorable à l'ouverture).
- **Sarter, N. B. & Woods, D. D. (1991)**, **Flach, J. M. (1995)**, **Stanton, N. A. et al.
  (2009)** — les trois textes de contestation de la conscience de la situation identifiés,
  tous fermés (voir candidat 9, SIGNAL). C'est le manque le plus dommageable de ce lot au
  regard du périmètre, qui demandait explicitement de « chercher activement les textes de
  dispute, pas seulement les textes de fondation ».
- **Michel Olivier (1967)**, « Contribution à une introduction aux études des systèmes
  hommes-machines » — texte historique repéré uniquement par la présentation qu'en fait
  Leplat (PISTES, DOI 10.4000/pistes.3497 ; version portugaise du même commentaire, Laboreal,
  DOI 10.4000/laboreal.7894). Le texte d'Olivier lui-même n'a été retrouvé nulle part.
- **Leplat, J. & de Terssac, G. (dir.) (1985). Erreur humaine, fiabilité humaine dans le
  travail. Paris, Octarès.** — exemplaire Internet Archive
  (`erreurhumainefia0000lepl`) **vérifié `access-restricted-item: true`** : c'est un prêt
  numérique contrôlé, explicitement exclu par la règle d'accès de ce domaine. Ni ouvert ni
  contourné. C'était le premier item du stock d'entrée hérité d'`activity-ergonomics` ; il
  ne devient pas candidat ici pour cette raison précise.
- **Bainbridge, L. (1983)** — voir candidat 15 : source trouvée mais sur un hébergeur dont la
  légitimité n'est pas établie. Ni retenu en position haute, ni écarté du lot : signalé.

### Candidats rencontrés relevant de domaines déclarés mais fermés

Consignés ici et **non rejetés**, conformément au périmètre : leur objet n'est pas hors
sujet, il relève d'un domaine voisin qui n'est pas ouvert. Contrairement à la section
précédente (« Candidats retenus pour `human-factors` »), cette liste-ci part de zéro pour ce
domaine : elle ne recopie pas un stock hérité, elle consigne ce qui a été rencontré **pendant
ce balayage-ci**, pour que le prochain scout qui ouvrira l'un de ces cinq domaines n'ait pas
à refaire cette recherche à l'aveugle.

#### `work-psychology`

- **Mackworth, N. H. (1948). The Breakdown of Vigilance during Prolonged Visual Search.**
  Décrit dans les angles morts ci-dessus comme un ouvrage sans source ouvrable, mais sa place
  dépendait d'abord d'une décision de frontière, explicitée ici : la vigilance qu'il étudie
  est la **dégradation d'une ressource attentionnelle pendant une tâche de surveillance
  continue** (détection de signaux rares sur un écran radar simulé pendant une heure), pas un
  état affectif ou motivationnel durable au sens où le périmètre définit `work-psychology`
  (stress, épuisement professionnel, motivation). **Décision : ce texte reste du côté
  `human-factors`**, dans la littérature « attention, vigilance et limites de la surveillance
  prolongée » explicitement nommée par le périmètre de ce domaine, et non dans les angles
  morts de `work-psychology`. Il y reste néanmoins sans source primaire ouvrable (Taylor &
  Francis, `is_oa: false` confirmé par Unpaywall sur le DOI 10.1080/17470214808416738), ce qui
  est une question d'accès et non de frontière.
- Aucun autre texte rencontré pendant ce balayage ne relevait de `work-psychology` : ni le
  stress, ni l'épuisement professionnel, ni la motivation n'ont été le sujet spontané d'aucune
  des recherches menées (les mots-clés du périmètre `human-factors` ne recoupent pas ceux de
  ce domaine voisin de façon naturelle). **Le domaine se déclare donc vide pour ce passage**,
  hormis le cas de frontière ci-dessus.

#### `decision-science`

- **Tversky, A. & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases.**
  Rencontré comme référence extensivement citée dans le rapport de Klein retenu au candidat
  8 (« Naturalistic Decision Making: Implications for Design »), qui construit son
  argumentaire en s'y opposant explicitement. Relève de `decision-science` par le test du
  périmètre : l'objet y est la théorie du choix et les biais de jugement pris en général, pas
  la cognition d'un opérateur dans une tâche réelle. **État d'accès constaté** : la version
  publiée (Science, 185(4157), 1124-1131) est fermée, Unpaywall confirme `is_oa: false` pour
  le DOI 10.1126/science.185.4157.1124. Une version antérieure existe sous forme de rapport
  technique ONR (Oregon Research Institute), DOI Crossref 10.21236/ad0767426, mirée sur
  Internet Archive sous `DTIC_AD0767426` (`access-restricted-item` absent, collection
  `dticarchive`) — repérée mais **non ouverte ni lue**, le concept relevant d'un domaine qui
  n'est pas ouvert.
- **Tversky, A. (1972). Elimination by aspects: A theory of choice.** Rencontré dans la même
  bibliographie, cité par Klein comme antériorité sur les modèles de choix par élimination
  séquentielle de critères, exactement le type de modèle rationnel que le NDM prend pour
  contre-exemple. Relève de `decision-science` pour la même raison. **État d'accès** : non
  testé dans cette session (repéré par sa seule référence bibliographique, DOI non résolu).
- **Kahneman, D., Slovic, P. & Tversky, A. (dir.) (1982). Judgment under uncertainty:
  Heuristics and biases.** Ouvrage collectif (Cambridge University Press), cité à plusieurs
  reprises dans le même rapport. Relève de `decision-science` pour la même raison. **État
  d'accès** : non testé, ouvrage d'éditeur commercial, probablement fermé par analogie avec
  les autres ouvrages de ce lot.
- **Multi-Attribute Utility Theory**, discutée dans le même rapport comme méthode de
  comparaison d'options que le modèle RPD de Klein prend précisément pour repoussoir (« the
  results were usually [...] »). Pas un texte unique identifiable mais un courant ; relève de
  `decision-science` au même titre. Non recherché plus avant.

#### `cybernetics`

Aucun texte ni concept rencontré pendant ce balayage ne relevait explicitement de ce domaine.
Recherche de vérification faite a posteriori sur les trois textes les plus susceptibles d'en
porter la dette signalée par le périmètre (Rasmussen 1981, candidat 2 ; Vicente & Rasmussen
1992, candidat 3 ; Sheridan, Verplank & Brooks 1978, candidat 13) : aucun des trois ne cite
Ashby, Wiener, la variété requise ou un vocabulaire cybernétique explicite dans le texte
intégral obtenu. **Le domaine se déclare vide pour ce passage.** Cela ne signifie pas que la
dette signalée par le périmètre est fausse — la notion de contrôle supervisé de Sheridan doit
manifestement à la théorie du contrôle — seulement qu'aucun texte identifiable et distinct
n'a été rencontré ici pour la porter.

#### `systems-thinking`

Même constat que pour `cybernetics`, et pour la même vérification : aucun texte rencontré ne
portait sur la modélisation systémique du danger ou sur l'analyse d'accident par modèle de
contrôle (type STAMP de Leveson, non cherché spécifiquement faute d'y être tombé dessus).
**Le domaine se déclare vide pour ce passage.** À chercher explicitement au tour suivant si
`systems-thinking` s'ouvre : Rasmussen (candidat 2 et son entourage bibliographique à Risø)
en est probablement le point d'entrée le plus direct côté `human-factors`, mais cela reste à
vérifier et non à présumer.

#### `operations-management`

- **Delatour, G., Laclemence, P., Calcei, D. & Mazri, C. (2014/2015). Système de gestion de
  la sécurité : quel modèle canonique pour la maîtrise des risques industriels ?** Coécrit à
  quatre. Rencontré sur HAL en cherchant une réception francophone du concept de « systèmes
  ultra-sûrs » d'Amalberti ; il s'agit d'un modèle générique de système de gestion de la
  sécurité industrielle, sans objet cognitif spécifique à un opérateur — relève de
  `operations-management` par le test du périmètre (« l'objet est le système, pas l'humain
  dans le système »). **État d'accès constaté** : deux notices HAL trouvées (hal-02271544,
  article 2015 ; hal-02953423, communication 2014), **aucune des deux ne porte de fichier
  déposé** (`fileMain_s` absent) ni de DOI renseigné dans la notice — notice seule, texte non
  atteignable par cette voie.
- Aucun autre texte rencontré ne relevait explicitement de la fiabilité industrielle, de la
  maintenance ou de la qualité au sens de l'ingénieur en dehors de ce cas.


### Vérification de non-doublon

Comparé aux **32 fiches déjà validées** dans `corpus/validated/` : 17 en
`organizational-sociology` et `measurement-theory` (déplacement des buts, échelles de
mesure, modèle de la poubelle, benchmarking, inertie structurelle, isomorphisme
institutionnel, loi de Campbell, mesure devenue cible, nombres et émotions, organisation
genrée, performance totale, quantifier, rationalité limitée, réactivité des classements,
régulation de contrôle et autonome, signification et invariance, zones d'incertitude) et 15
en `activity-ergonomics` (activité empêchée, analyse du travail, catachrèse, concevoir pour
l'activité, débats de normes, documents prescripteurs, environnement capacitant, ergonomie
tâche/activité, genèse instrumentale, genre professionnel et style, marge de manœuvre,
régulation de l'activité, sexe des opérateurs, simulation de l'activité future, travail
collectif). **Aucun chevauchement d'identifiant ni de concept constaté.** Points de
vigilance explicites :

1. **Faverge apparaît dans deux domaines** (`analyse-du-travail`, déjà validé en
   `activity-ergonomics`, et le candidat 12 ici). Textes distincts (méthode d'analyse du
   travail contre théorie de l'accident), objets distincts par le test du périmètre : à
   garder visible si les deux fiches coexistent, comme signalé au candidat 12.
2. **Falzon apparaît dans deux domaines** (`environnement-capacitant`, déjà validé en
   `activity-ergonomics`, coécrit avec Arnoud, et le candidat 11 ici, coécrit avec
   Cuvelier). Textes et concepts distincts (capabilités et organisation capacitante contre
   résilience appliquée aux soins) : même remarque.
3. **Klein (candidat 8) et Simon (`rationalite-limitee`, déjà validé)** portent tous deux sur
   une critique du choix rationnel classique, mais à des niveaux différents : Simon décrit
   une limite générale de la cognition administrative (satisficing), Klein décrit un
   mécanisme spécifique de reconnaissance experte sans comparaison d'options en situation
   opérationnelle réelle. Proximité de thème, pas de concept : à faire apparaître dans la
   fiche si elle est écrite, pour que le lecteur ne les confonde pas.
4. **La charge de travail (candidat 5) et le couple charge/régulation déjà instruit chez le
   voisin** (`regulation-de-l-activite`, Leplat) : la frontière posée par le périmètre est
   tenue ici (le candidat 5 porte sur l'instrument de mesure, pas sur le compromis
   d'activité), mais c'est le point de bascule le plus facile à manquer de tout ce lot — à
   revérifier explicitement par le lecteur primaire avant toute rédaction.

### Combien de candidats viennent d'une liste écrite de mémoire ?

Le périmètre prévenait que ce domaine est celui dont les noms circulent le plus dans la
culture générale de l'ingénierie, et que partir de mémoire y est particulièrement tentant.
Compte honnête sur 15 candidats :

- **2 candidats viennent du stock d'entrée hérité d'`activity-ergonomics`**, donc d'une
  recherche antérieure et non de cette session : Faverge (candidat 12) et Cuvelier & Falzon
  (candidat 11). Ils ont été retestés, pas simplement recopiés.
- **6 candidats sont sortis d'une recherche par nom d'auteur connu d'avance** : Reason
  (candidat 4), Klein (candidat 8), Endsley (candidat 9), Bainbridge (candidat 15), et les
  deux Norman (candidats 6 et 14). Ces noms faisaient partie de ce qu'un praticien du champ
  connaît sans recherche préalable — le périmètre avait raison de s'en méfier.
- **4 candidats sont sortis d'une recherche par littérature puis vérification croisée sur
  une plateforme inhabituelle** (NTRS, DTU Orbit, Internet Archive) plutôt que d'un nom
  connu d'avance : la taxonomie SRK et l'article sur la conception écologique d'interface
  ont été trouvés en cherchant « qui, à Risø, a un dépôt institutionnel ouvert » plutôt qu'en
  partant du nom Rasmussen (candidats 2 et 3) ; Hart et Billings ont été trouvés en cherchant
  respectivement « mesure de charge NASA » et « automatisation centrée sur l'humain NASA »
  dans NTRS sans partir de leur nom (candidats 5 et 7).
- **1 candidat est sorti d'une recherche de plateforme pure**, sans nom ni concept précis en
  tête au départ : Sheridan, Verplank & Brooks (candidat 13), trouvé en cherchant des
  rapports NTRS sur le contrôle supervisé après avoir lu la définition de « levels of
  automation » ailleurs sans savoir qui l'avait écrite.
- **1 candidat francophone est sorti d'un vidage ciblé d'OpenEdition** sur les mots du
  périmètre (« gestion du risque fatigue ») : Cabon (candidat 10).
- **1 candidat est sorti de la lecture d'un autre candidat** : Rasmussen (candidat 2) cite
  Norman (candidat 14) et Reason (candidat 4) comme travaux contemporains, ce qui a
  directement guidé la recherche de ces deux textes plutôt que de partir de leur seule
  notoriété — un cas de méthode plus saine que la moyenne du lot, à reproduire.

**Soit 8 candidats sur 15 dont la première trace remonte à un nom connu d'avance** (les 6 de
recherche directe, plus les 2 hérités qui portaient déjà des noms bien identifiés). C'est
**plus de la moitié**, et c'est moins bon que les deux domaines francophones précédents. Le
périmètre l'avait annoncé : ce champ est celui où les noms circulent le plus, et la
bascule vers les rapports techniques (NTRS, DTU Orbit, DTIC via Internet Archive) a corrigé
l'**accès** aux textes de ces auteurs connus, pas le **biais de départ** qui a conduit à les
chercher eux plutôt que d'autres. Un vidage systématique de sommaires de revues n'a pas pu
être reproduit ici comme au passage précédent, parce que les revues centrales du champ
(*Human Factors*, *Ergonomics*, *Le travail humain*) sont fermées jusqu'au niveau du
sommaire utile : c'est la limite structurelle la plus sérieuse de ce lot, et elle doit se
lire comme un avertissement pour le tour suivant, pas comme une excuse.

**Sur la couche francophone** : 2 candidats sur 15 sont d'auteurs francophones publiant en
français (Faverge, Cabon), 1 candidat est d'auteurs francophones publiant en anglais
(Cuvelier & Falzon). Trois auteurs francophones centraux du champ — Amalberti, Hoc, de
Keyser — ont été cherchés activement et n'ont produit aucun candidat, faute de texte
fondateur en accès ouvert. **Ce lot est majoritairement anglophone (12 candidats sur 15) et
le périmètre demandait de signaler ce déséquilibre plutôt que de le masquer** : il est réel,
il n'a pas pu être corrigé dans le temps disponible, et il constitue la plus grande lacune de
cette cartographie.
