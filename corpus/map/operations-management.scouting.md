# Cartographie — `operations-management`

Balayage d'ouverture du 24 août 2026. Huitième domaine instruit, troisième et dernier de la
famille « Comprendre la production et les systèmes ».

## Note méthodologique

Ce passage n'est pas le premier à toucher ce domaine, et ce n'est pas non plus un balayage de
recherche classique. Deux scouts précédents ont ouvert et lu en texte intégral quatre sources
(les fichiers `om-scout-shewhart.txt`, `om-scout-sched1955.txt`, `om-scout-hmms.txt`,
`om-scout-invpolicy.txt` du scratchpad), plus une série de sources non exploitables, sans
jamais écrire le corps de cette cartographie. **Ce passage-ci n'a rouvert aucun de ces gros
fichiers.** Leur identité et leur état d'accès, tels que rapportés par la consigne de tâche,
sont pris pour acquis et organisés ici sans relecture — c'est un choix délibéré pour sortir de
la boucle où les deux scouts précédents se sont perdus, pas une économie de vérification qui se
dissimule.

**Outils réellement disponibles dans cette session, par opposition à ceux annoncés par le
prompt système :** le serveur MCP `documentary` (`search_literature`, `search_francophone`,
`verify_reference`, `zotero_search`) **n'est pas exposé** dans cet environnement — aucun de ces
outils n'apparaît dans la liste des fonctions appelables. Ce qui l'a remplacé, dans les limites
strictes de la tâche (trois appels de vérification au plus, aucun balayage large), c'est
`WebSearch`, utilisé pour deux vérifications d'identité de rapport (HMMS, AD 422810) et trois
requêtes ciblées vers les domaines fermés. **Ce n'est pas un substitut équivalent** : `WebSearch`
ne rend ni DOI structuré, ni ISBN, ni statut d'accès Unpaywall, et ses résultats sont pour
l'essentiel secondaires ou tertiaires (pages d'éditeurs, agrégateurs, sites de vulgarisation). Il
sert ici à détecter, pas à attester — exactement le rôle que le protocole assigne au web général.
Aucune base bibliométrique structurée (Crossref, OpenAlex, Semantic Scholar) n'a été interrogée
par API dans ce passage ; voir « Bases non appelées ».

## Ce dont ce domaine a hérité, et ce qui en est sorti

Deux voisins ouverts lui ont consigné des candidats avec leur état d'accès constaté. Le tableau
reprend leurs legs **tels quels**, sans re-recherche :

| Legs | Origine | Objet | Identifiants | État d'accès constaté |
|---|---|---|---|---|
| Trois rapports DoD sur la loi de la variété requise appliquée à l'acquisition de systèmes d'armes | `corpus/map/cybernetics.scouting.md` §operations-management | Dimensionnement d'un dispositif d'acquisition, pas le principe de régulation | `DTIC_AD1046519` (2017), `DTIC_ADA371943` (1999), `DTIC_ADA341017` (1997), miroir IA collection `dticarchive` | Items publics, restriction non vérifiée individuellement, **non ouverts** |
| Delatour, Laclemence, Calcei & Mazri (2014/2015), modèle canonique d'un système de gestion de la sécurité industrielle | `corpus/map/human-factors.scouting.md` §operations-management | Le système, et non l'humain dans le système | Notices HAL `hal-02271544`, `hal-02953423` | **Négatif** : aucune des deux notices ne porte de fichier déposé ni de DOI — texte non atteignable par cette voie |

Ces cinq candidats hérités sont donc **tous non ouverts en l'état**. Ils restent consignés
plutôt que rejetés : ce sont des candidats de frontière, pas des candidats hors sujet, et un
passage futur peut retenter une autre voie d'accès (le miroir `dticarchive` a servi ailleurs sans
restriction — voir Bellman ci-dessous — donc l'échec constaté ici est un échec d'item, pas de
collection).

Deux voisins se sont déclarés vides pour ce domaine, et il faut distinguer les deux vides :
`systems-thinking` et `decision-science` écrivent tous deux ne pas avoir cherché de façon ciblée
vers `operations-management` — **vide de méthode, pas résultat sur le champ**, à la différence du
vide vérifié qu'avaient établi `human-factors` et `cybernetics` en leur temps sur leur propre
dette de vocabulaire.

## Candidats — du plus solide au plus fragile

Quatre candidats retenus, tous issus de sources lues en texte intégral par le passage
précédent. Aucun autre candidat n'est ajouté : le champ est bien connu par ailleurs (loi de
Little, quantité économique de commande, théorie des files d'Erlang, contrainte de Goldratt,
production à flux tiré...), mais aucune de ces pistes n'a fait l'objet, dans ce passage borné,
d'une vérification d'accès qui permette de la porter en candidat plutôt qu'en supposition. Les
ajouter sans cette vérification serait exactement la faute que la tâche demande d'éviter :
retenir un candidat en espérant que la source apparaisse plus tard. Elles sont donc listées en
angle mort « non cherché », pas en candidat.

### Groupe A — Full-text confirmé, lu par le passage précédent

#### 1. Shewhart, W. A. (1931). *Economic Control of Quality of Manufactured Product*. New York, D. Van Nostrand Company.

- **Objet** : fondateur de la maîtrise statistique de la qualité — carte de contrôle, distinction
  entre causes assignables et variation due au hasard.
- **Accès** : full-text lu par le scout précédent (`om-scout-shewhart.txt`), servi par Internet
  Archive. **Réserve non résolue ce passage-ci** : l'édition/le tirage exact et l'état précis de
  l'item IA (identifiant, drapeau `access-restricted-item`) n'ont pas été reconfirmés cette nuit.
  La source **a été ouverte** (elle s'est extraite en texte), ce qui la distingue d'un candidat
  seulement repéré ; mais l'édition précise reste à documenter avant toute rédaction de fiche.
- **Langue** : anglais.

#### 2. Bellman, R. (1965). *Mathematical Aspects of Scheduling Theory*. RAND Corporation, P-651 (révisé le 23 mai 1965).

- **Objet** : l'ordonnancement pris comme problème mathématique structuré — problème de chaîne de
  montage, problème de reliure (« bookbinding problem »), lemmes de structure.
- **Accès** : full-text lu (`om-scout-sched1955.txt`). Rapport RAND en littérature grise, voie
  d'accès ouverte et déjà identifiée comme rentable pour ce domaine par le périmètre
  (`corpus/perimeter.md` §operations-management, « la littérature grise est ici une voie
  principale, et non un recours »).
- **Langue** : anglais.

#### 3. Rapport ASTIA/DTIC du filon Holt–Modigliani–Muth–Simon (HMMS) sur la planification agrégée de la production, des stocks et de la main-d'œuvre.

- **Objet** : programme des règles de décision linéaires pour la planification agrégée
  (production, stocks, effectifs) — c'est le filon dont la publication de référence en revue est
  Holt, Modigliani & Simon, « A Linear Decision Rule for Production and Employment Scheduling »,
  *Management Science*, octobre 1955, suivie du recueil *Planning Production, Inventories, and
  Workforce* (Prentice-Hall, 1960). **L'identité précise du rapport ASTIA/DTIC lu par le scout
  précédent n'a pas pu être confirmée** par la recherche web menée dans ce passage (une requête
  ciblée n'a rendu que les publications en revue, pas le rapport technique antérieur) —
  **déclarée « à préciser »**, conformément à la consigne plutôt que de lui attribuer un titre
  inventé.
- **Accès** : full-text lu (`om-scout-hmms.txt`).
- **Langue** : anglais.
- **Statut** : angle mort partiel — candidat solide sur l'objet et l'accès, fragile sur
  l'identité bibliographique exacte.

#### 4. Rapport DTIC `AD 422810`, politique de stock (inventory policy).

- **Objet** : théorie des stocks, vraisemblablement une politique de type (s, S), à confirmer.
- **Accès** : full-text lu (`om-scout-invpolicy.txt`). Une requête ciblée sur l'identifiant
  `AD 422810` n'a rendu aucun résultat exploitable (le moteur de recherche web ne résout pas les
  identifiants DTIC anciens comme des chaînes de recherche) — **titre, auteur(s) et année
  déclarés « à préciser »**, sans reconstitution de mémoire.
- **Langue** : anglais.
- **Statut** : angle mort partiel, même nature que le candidat 3.

## Découpage thématique proposé

Quatre thèmes, chacun porté par exactement un candidat solide — c'est peu, et le périmètre
prévient explicitement ce cas : « un thème sans carte validée ne se déclare pas ». Cette
proposition n'est donc qu'une hypothèse de travail pour un balayage complémentaire, pas une
déclaration dans `src/content/themes.ts`.

- **Qualité et maîtrise statistique du procédé** — Shewhart (candidat 1).
- **Ordonnancement comme problème structuré** — Bellman (candidat 2).
- **Planification agrégée production–stocks–main-d'œuvre** — HMMS (candidat 3, identité à
  préciser).
- **Théorie des stocks et politique de commande** — rapport `AD 422810` (candidat 4, identité à
  préciser).

Aucun de ces quatre thèmes n'atteint aujourd'hui le seuil de plusieurs candidats indépendants
que les domaines précédents ont exigé avant déclaration. Un balayage complémentaire — élargi aux
files d'attente, à la quantité économique de commande, au flux tiré, à la contrainte — est
nécessaire avant toute déclaration de thème.

## Les trois domaines fermés

Trois requêtes ciblées et bornées, une par domaine, conformément à l'obligation du périmètre
(« ce balayage-ci doit les chercher de façon ciblée »). Aucune des trois n'a produit de candidat
retenable dans les limites de ce passage — voir le détail :

- **`sociology-of-work`** — requête : « Taylor scientific management shop floor deskilling
  primary text sociology of work open access ». La littérature attendue par le périmètre existe
  bien et elle est repérable sans effort : Taylor, *The Principles of Scientific Management*
  (1911), et sa critique par Braverman, *Labor and Monopoly Capital* (1974), sur la déqualification.
  **Aucun des deux textes primaires n'a été vérifié en accès dans ce passage** — la recherche n'a
  rendu que des pages secondaires (encyclopédies en ligne, notes de cours). Statut : **repéré
  conceptuellement, accès non vérifié** — ni « trouvé et ouvert », ni « vérifié vide ».
- **`work-psychology`** — requête : « assembly line monotony repetitive work psychology primary
  source open access job satisfaction ». La littérature attendue existe et se signale dans la
  culture du champ (le classique associé est Walker & Guest, *The Man on the Assembly Line*,
  Harvard University Press, 1952) mais **la recherche menée ici ne l'a pas fait remonter** — elle
  n'a rendu que des articles secondaires récents et dispersés sur la monotonie et la satisfaction
  au travail, sans converger vers un texte primaire identifiable et vérifiable dans le temps
  imparti. Statut : **non concluant** — je ne porte aucun titre de mémoire en candidat, faute
  d'avoir vérifié son accès ; à retenter avec une base bibliographique structurée plutôt qu'un
  moteur web généraliste.
- **`behavioral-economics`** — requête : « newsvendor inventory ordering behavior behavioral
  economics primary source open access ». La littérature attendue existe (le texte souvent cité
  comme fondateur du courant est Schweitzer & Cachon, « Decision Bias in the Newsvendor
  Problem », *Management Science*, 2000) mais la recherche a explicitement rapporté que les
  sources trouvées « appear to be behind paywalls or subscription walls » — donc pas de texte
  primaire en accès confirmé. Statut : **repéré, accès a priori fermé, non vérifié
  individuellement**.

Aucun des trois domaines fermés n'a donc produit de candidat à consigner en angle mort précis
avec DOI/identifiant vérifié — ce qui diffère du legs de `cybernetics` et de `human-factors`, qui
avaient pu nommer des identifiants exacts. Le résultat de ce passage est plus faible qu'eux sur
ce point, et il faut le dire plutôt que le maquiller derrière trois noms d'auteurs invérifiés.

## Angles morts

**(a) Non ouvrable (accès constaté négatif ou bloqué)**

- `om-scout-pesqueux1.pdf` / `om-scout-pesqueux2.pdf` — francophone, extraction de texte vide.
  Angle mort d'accès : le fichier existe, son contenu n'a pas pu être extrait.
- `om-scout-randp189.html` — RAND P-189, 403 anti-robot non contourné (conformément à la règle
  d'accès du domaine, qui interdit tout contournement). Angle mort d'accès.
- Les trois rapports DoD légués par `cybernetics` (`DTIC_AD1046519`, `DTIC_ADA371943`,
  `DTIC_ADA341017`) — items publics de la collection `dticarchive`, restriction individuelle non
  vérifiée, non ouverts par le passage qui les a légués ni par celui-ci.
- Les deux notices HAL léguées par `human-factors` (`hal-02271544`, `hal-02953423`) — sans
  fichier déposé ni DOI, accès négatif constaté par le voisin.
- `om-scout-sterman.pdf` — non exploité comme candidat ici par construction : Sterman relève de
  la frontière avec `systems-thinking` (comportement dynamique d'une chaîne logistique), pas
  d'`operations-management` (dimensionnement stock/file). Il sert à raisonner la frontière, pas
  comme source.
- `om-scout-mit.json` — page 404, sans contenu, ignoré.

**(b) Non cherché ou insuffisamment cherché dans ce passage**

- La couche francophone du domaine (gestion industrielle, productique, génie industriel,
  logistique — Persée, HAL, Cairn, OpenEdition Books, theses.fr) : le périmètre en fait une
  couche à chercher « en parallèle et non après coup », et ce passage ne l'a pas fait — il s'est
  concentré sur l'organisation des quatre sources déjà lues et sur les trois requêtes obligatoires
  vers les domaines fermés. **C'est un déséquilibre à signaler explicitement, pas à masquer.**
- Files d'attente (Erlang, Little), quantité économique de commande (Harris), production à flux
  tiré, théorie des contraintes : littératures que le périmètre demande de balayer et qu'aucun
  scout n'a encore vérifiées en accès. Elles ne sont ni candidates ni rejetées — simplement pas
  encore instruites.
- Les trois domaines fermés au-delà de la requête unique effectuée pour chacun : une base
  bibliographique structurée (le MCP `documentary`, non disponible ici) serait nécessaire pour
  transformer les repérages ci-dessus en candidats vérifiés.

**(c) Vérifié vide**

- Aucun élément de ce passage n'atteint ce statut : chaque piste explorée s'est arrêtée soit sur
  un accès non vérifié, soit sur une identité à préciser, jamais sur une absence de littérature
  confirmée par un balayage complet.

**Identités à préciser** (candidats 3 et 4 ci-dessus) : consignées comme telles plutôt que
comblées par une reconstitution de mémoire, conformément à l'interdit du protocole.

## Bases non appelées

- `search_literature`, `search_francophone`, `verify_reference`, `zotero_search` (MCP
  `documentary`) — non exposés dans cette session, voir Note méthodologique.
- Crossref, OpenAlex, Semantic Scholar — non interrogés par API structurée ; seul `WebSearch`
  généraliste a été utilisé, pour un total de cinq requêtes (deux de vérification d'identité, trois
  ciblées vers les domaines fermés), conformément au plafond de la tâche.
- scite — non appelé ; le périmètre note par ailleurs sa faible couverture sur les ouvrages et
  rapports techniques, qui composent l'essentiel de ce lot.
- Internet Archive (recherche structurée au-delà des items déjà identifiés), Unpaywall, DTIC
  `discover.dtic.mil` en recherche structurée — non interrogés directement ; seule une requête web
  généraliste a visé l'identifiant `AD 422810`, sans résultat exploitable.
- Persée, Cairn, HAL, OpenEdition Books, theses.fr — non interrogés, voir angle mort (b).

## Vérification de non-doublon

`ls corpus/validated/` a été exécuté (80 fiches). **Aucune collision d'`id` ni de `slug`** avec
les quatre candidats retenus (`shewhart-*`, `bellman-*` ou équivalents ne figurent pas dans la
liste — aucun slug n'a d'ailleurs été proposé, ces candidats restant en angle mort partiel ou en
réserve d'édition, donc en amont de toute rédaction de fiche).

Points de contact conceptuels déjà instruits ailleurs, à garder en tête pour la rédaction
future :

- `loi-de-la-variete-requise.json` (`cybernetics`) — la loi d'Ashby, dont les trois rapports DoD
  légués ici sont une application au dimensionnement d'acquisition ; la frontière est déjà
  tranchée par le périmètre (principe → cybernétique, dimensionnement → ici).
- `mesure-devenue-cible.json` et `loi-de-campbell.json` (`measurement-theory`) — pertinents si un
  futur candidat de ce domaine porte sur un indicateur de production pris comme cible plutôt que
  comme grandeur physique ; la frontière est également déjà tranchée par le périmètre.
- `regulateur-commande-par-l-ecart.json`, `regulation-proportionnelle-derivee-integrale.json`
  (`cybernetics`) — voisinage de vocabulaire avec l'ordonnancement et la régulation de production,
  sans chevauchement d'objet identifié à ce stade.

Aucun des quatre candidats retenus ne recoupe un concept déjà validé dans un autre domaine.

---

# Reprise du 25 août 2026 (passage 03) — ce que la lecture a corrigé de cette cartographie

Cette section est ajoutée plutôt que la cartographie n'est réécrite : elle dit ce que quatre
lectures primaires ont établi **sur la pièce**, contre ce que les sections ci-dessus affirmaient
depuis un fichier de travail perdu. Là où les deux divergent, **c'est cette section qui fait foi**,
et le motif est écrit à chaque fois.

## Les quatre candidats ont désormais une identité, et trois sur quatre étaient mal décrits

| ancienne entrée | ce que la pièce dit | établi sur |
|---|---|---|
| Candidat 1, Shewhart 1931, « édition et item IA exacts à reconfirmer » | Item ouvrable : `in.ernet.dli.2015.150272`. L'autre exemplaire, `economiccontrolo0000shew`, porte `access-restricted-item: true` et **n'a pas été ouvert**. La pièce ouverte est un **septième tirage postérieur à 1943**, sans année sur la page de titre. | Page de titre et verso lus en image ; adresse « 250 Fourth Avenue, New York 3 », zone postale introduite en 1943 |
| Candidat 2, Bellman, « P-651, révisé le 23 mai **1965** » | **P-651, révisé le 23 mai 1955.** La cartographie se trompait de dix ans, et **la couche OCR de l'item la trompe encore** : elle transcrit « 1965 » là où la couverture imprime « 1955 ». Item : `DTIC_AD0604647`. | Couverture lue en image, corroborée par le tampon de réception de 1964, par la référence la plus tardive de la bibliographie (janvier 1955) et par le voisinage de série |
| Candidat 3, « rapport ASTIA/DTIC du filon HMMS, identité à préciser » | **O.N.R. Research Memorandum No. 30**, « A Linear Decision Rule for Production and Employment Scheduling », **Charles C. Holt, Franco Modigliani et Herbert A. Simon**, mai 1955, Graduate School of Industrial Administration, Carnegie Institute of Technology. Item : `DTIC_AD0089515`. **Muth n'est pas auteur de cette pièce** : il est remercié parmi sept étudiants. Le sigle HMMS est celui du livre de 1960. | Page de titre lue en image |
| Candidat 4, « rapport DTIC AD 422810, politique de stock, identité à préciser » | **RAND, papier P-189, « Optimal Inventory Policy », Kenneth Arrow, Theodore Harris et Jacob Marschak**, 5 septembre 1950, révisé le 16 novembre 1950. Item : `DTIC_AD0422810`. | Page de titre RAND présente dans le scan, image `n3`, les trois noms lus en clair ; DOI `10.2307/1906813` résolu en confirmation indépendante |

**Le candidat 4 lève un angle mort d'accès de cette cartographie.** La section « Angles morts »
consigne un `om-scout-randp189.html` fermé par un 403 anti-robot chez RAND. C'est le même texte.
**Le mur n'a pas été franchi ; le texte a été atteint par une autre voie légitime**, le miroir
`dticarchive`. C'est la conduite que le protocole prescrit devant un défi anti-robot, et elle a
rendu deux fois cette nuit.

## Deux pièges d'accès, constatés indépendamment par plusieurs lecteurs

**Le dérivé d'image `.../page/n<N>_x1600.jpg` d'Internet Archive rogne le feuillet à gauche** sur
ces items, et ampute le début de chaque ligne sans que rien ne le signale : 3 126 pixels rendus
pour 4 726 réels sur un des rapports, ce qui fait perdre à la page de titre le « O. » de
« O. N. R. » et le « Ch » de « Charles ». **Le dérivé sans suffixe, `.../page/n<N>.jpg`, rend la
page entière.** Deux lecteurs l'ont trouvé séparément. Un agent qui citerait sur `_x1600`
citerait des lignes tronquées en croyant relire une image.

**La couche texte d'un de ces rapports porte une date fausse**, et c'est probablement l'origine
de l'erreur de dix ans ci-dessus. La règle du corpus tient sans amendement : l'image fait foi,
l'OCR ne suffit jamais.

## La question de droits, tranchée dans deux sens opposés, et pour deux motifs distincts

**Les trois rapports techniques gardent leur URL.** Aucun des trois items `dticarchive` ne porte
de champ `rights`, `licenseurl` ni `possible-copyright-status`, et les mentions imprimées sur les
pièces (« for OTS release », tampon DDC) sont des autorisations administratives de diffusion,
pas des licences d'éditeur. La réserve est portée en clair dans les `notes` des six cartes. Elle
n'empêche pas la carte, **cette voie étant déjà celle de deux cartes publiées de
`decision-science`**, qui citent leur source primaire sous la forme
`https://archive.org/details/DTIC_<identifiant>` en `consulted: full-text`.

**Shewhart perd la sienne, et le motif n'est pas le même.** L'exemplaire ouvert appartient à
`digitallibraryindia` / `JaiGyan`, numérisation de masse dont l'item ne porte **aucun** champ de
droits sur Internet Archive ; sa seule mention, `dc.rights: In Public Domain`, est une
auto-déclaration du numériseur logée dans un champ descriptif qui contient par ailleurs deux
erreurs bibliographiques avérées (`dc.date.citation: 1923`, `dc.publisher: [...] London`). Trois
vérifications ont été jouées et écrites avec leur issue :

1. aucune autorisation lisible sur l'hébergeur ;
2. **aucun renouvellement de copyright retrouvé** dans la base de Stanford, et **le zéro est
   interprétable** : `Shewhart` et `Economic Control of Quality` rendent 0 dans la même fenêtre de
   quatre secondes où `Van Nostrand` rend 5, `Nostrand` 7 et `Eddington` 1. Le défi anti-robot F5
   de l'interface HTML **n'a pas été contourné** : la voie employée est l'API JSON publique de
   Blacklight, `catalog.json?q=<terme>&search_field=search`, servie sans challenge. La réserve
   reste entière, un renouvellement introuvable n'étant pas un renouvellement inexistant ;
3. la pièce n'est pas l'original, et son bloc de copyright est illisible sur le scan.

**Décision : les trois cartes de Shewhart se font sans l'URL de cet exemplaire**, `consulted`
restant `full-text` puisque le texte a été lu, la référence résolue seule par son **LCCN
`31032090`** contre l'export MODS de la Bibliothèque du Congrès (la page HTML de ce service est
une application JavaScript inutilisable). C'est la même règle que celle qui avait fait retirer les
URL de six sources au lot de cybernétique, et **elle vaut désormais pour toute la collection
`digitallibraryindia` dans ce dépôt**.

## Trois attributions que la lecture a corrigées, et qui auraient faussé une carte

- **Le lot économique n'est pas d'Arrow, Harris et Marschak, et leur propre texte le dit** :
  page 9, « We believe this is, in essence, the solution advanced by R. H. Wilson, formerly of the
  Bell Telephone Company ». Ce qui leur revient en propre est le traitement de l'incertitude.
- **Le résultat sur deux postes n'est pas de Bellman, et son rapport le crédite trois fois** :
  « Lemmas of S. Johnson », « The Result of S. Johnson », « the original one due to S. Johnson ».
  Référence de Johnson vérifiée par DOI `10.1002/nav.3800010110` ; le rapport écrit d'ailleurs le
  titre de la revue à l'envers, la forme juste étant *Naval Research Logistics Quarterly*.
- **Shewhart n'invente pas le terme « assignable »** : il écrit « these causes were called
  assignable », au passif et au passé, en rapportant une pratique antérieure des Bell Labs sans
  nommer personne.

Un homonyme à écarter, signalé par le lecteur de Bellman : **Bellman, Esogbue et Nabeshima,
*Mathematical Aspects of Scheduling and Applications*, Pergamon, 1982**. Une source mal libellée
y basculerait et daterait faussement une coécriture de 1955.

## Ce que le balayage francophone a rendu, et ce qu'il n'a pas cherché

Le manque le plus net de la cartographie d'ouverture est comblé pour un tiers. **Trois candidats
atteignables, aucun lu**, chacun avec son URL testée et son code de retour :

1. **Robert Guihéneuf, « Remarques sur la gestion des stocks dans l'entreprise »**, *Revue
   économique*, vol. 7, n° 1, 1956, p. 68-91. DOI `10.3406/reco.1956.407156` **résolu**, et
   l'identifiant Persée `reco_0035-2764_1956_num_7_1_407156` en vient, il n'a pas été deviné.
   Page servie en 200. Porte le dimensionnement des stocks et la discussion du lot économique.
2. **Claude Fiore, « Une démarche nouvelle : la production en flux tendus »**, *Revue française de
   gestion*, n° 63, 1987, p. 51-61. Persée `rfg_0338-4551_1987_num_63_1_2668`, page servie en 200.
   **Réserve à lever avant toute lecture** : cet identifiant vient d'un moteur de recherche et
   **non d'une résolution de DOI**, aucun DOI n'ayant été trouvé. La règle du dépôt n'est donc pas
   honorée sur ce candidat, et elle doit l'être avant qu'il serve.
3. **David De Almeida, « Agrégation des données pour l'évaluation des performances de systèmes
   flexibles de production par modèles à réseaux de files d'attente »**, *RAIRO Recherche
   opérationnelle*, vol. 32, n° 2, 1998, p. 145-192. Numdam `RO_1998__32_2_145_0`, page servie en
   200 ; **le GET du PDF n'a pas été testé**, seul un HEAD a rendu 405. Vigilance de périmètre
   transmise telle quelle : ce texte vient de la souche mathématisée, et c'est la lecture qui doit
   trancher s'il éclaire le comportement d'un système ou seulement ses résultats propres. Sa
   thèse de 1996 au LIMOS est citée dans sa bibliographie et pourrait être la meilleure source.

**Un vide vérifié, et il est étroit** : l'API de theses.fr rend 0 pour la requête « théorie des
contraintes » et « goulot ». C'est un vide **pour cette requête**, pas sur le sujet.

**Ce que ce balayage n'a pas fait, et qui reste donc entier** : HAL, Cairn et OpenEdition Books
n'ont reçu que des recherches web générales, **jamais une interrogation de leur propre moteur**.
Quatre points d'entrée du périmètre n'ont reçu aucune requête ciblée : les files d'attente pour le
service, la maintenance et la fiabilité au sens de l'ingénieur, la conception des systèmes de
service, et la variabilité propagée le long d'une chaîne. Le budget de vingt requêtes a été
consommé par le triage de Persée et de Numdam.

## Ce qui reste en réserve dans les textes déjà ouverts

Ce sont les reprises les moins chères du domaine, leur accès étant constaté et leur texte lu :

- **Shewhart, parties V et VI** : la carte de contrôle comme objet graphique, et surtout **limites
  de contrôle contre limites de tolérance**. Non instruites, lues en OCR seulement, donc aucune
  citation relevable en l'état.
- **Bellman, partie III** (p. 37-48) : lissage industriel, problème du traiteur, stock optimal.
  Le lecteur la donne pour le second gisement du texte.
- **Le rapport de planification** : son appendice de démonstration, annoncé au folio 43, **est
  absent du scan**, qui s'arrête au folio 42.
- **Les cinq candidats hérités des voisins restent tous non ouverts** : les trois rapports DoD de
  `cybernetics` et les deux notices HAL de `human-factors`. Ce passage ne les a pas retentés.

---

# Balayage du 6 septembre 2026 (passage 14) — la couche francophone et les quatre points d'entrée jamais interrogés

## Mandat et dispositif

Ce passage ne reprend aucun des candidats déjà cartographiés ci-dessus, ne les revérifie pas, et
ne touche pas aux trois candidats francophones réservés à d'autres agents cette nuit (Guihéneuf
1956, Fiore 1987, De Almeida 1998). Son objet est exclusivement ce que la section « Angles
morts » du passage du 25 août déclarait sur elle-même : la couche francophone non cherchée « en
parallèle », et quatre points d'entrée du périmètre sans requête ciblée (files d'attente pour le
service, maintenance et fiabilité au sens de l'ingénieur, conception des systèmes de service,
variabilité propagée le long d'une chaîne), plus cinq concepts listés « ni candidats ni rejetés » :
loi de Little, quantité économique de commande (Harris), théorie des files d'Erlang, contrainte et
goulot (Goldratt), production à flux tiré.

**Le serveur MCP `documentary` n'était pas exposé dans cette session** : aucun outil
`mcp__documentary__*` disponible. Tout ce qui suit vient de `WebSearch`, `WebFetch`, `curl` et
l'API Crossref/Semantic Scholar/HAL en accès direct, conformément à la consigne de tâche. Chaque
code HTTP cité a été obtenu par `curl -s -o /dev/null -w "%{http_code}"` depuis cette session, pas
recopié d'un résultat de recherche.

## Candidats retenus, avec preuve d'accès constatée sur pièce

### 1. Quantité économique de commande — Ford W. Harris (1913)

- **CANDIDAT** : la quantité économique de commande (lot économique) / *Economic Order Quantity*.
- **AUTEUR(S)** : Ford W. Harris, « Production Engineer », seul auteur. Le sigle EOQ et
  l'attribution moderne sont consolidés a posteriori, par la republication éditoriale de 1990 (voir
  Secondaire) — le terme lui-même n'est pas de Harris.
- **PÉRIMÈTRE** : dedans a priori — le texte expose un arbitrage explicite entre coût de
  lancement et coût de possession pour fixer une taille de lot, exactement ce que le périmètre vise
  par « les stocks et leur dimensionnement : ce qu'un lot économique suppose ».
- **SOURCE PRIMAIRE** : Harris, F. W. (1913). « How Many Parts to Make at Once. » *Factory, The
  Magazine of Management*, vol. 10, n° 2, février 1913, pp. 135-136, 152. Republié intégralement
  dans *Operations Research*, vol. 38, n° 6 (nov.-déc. 1990), pp. 947-950, sous la rubrique « OR
  Forum », immédiatement à la suite de l'article d'accompagnement d'Erlenkotter (pp. 937-946). Le
  texte lu dans ce passage est cette republication de 1990, pas l'original *Factory* de 1913
  (aucune version de cette pagination-là n'a été localisée).
  **Accès constaté** : PDF téléchargé et lu intégralement (5 pages) depuis
  `http://userhome.brooklyn.cuny.edu/irudowsky/CIS10.31/articles/EOQModel-OriginalPaper.pdf` — HTTP
  200, `application/pdf`, texte extrait avec succès page par page (`pymupdf`). L'accès officiel
  INFORMS (DOI `10.1287/opre.38.6.947`) n'a pas été testé directement ; le reste de la collection OR
  testée cette nuit répond systématiquement 403.
- **SECONDAIRE** : Erlenkotter, D. (1990). « Ford Whitman Harris and the Economic Order Quantity
  Model. » *Operations Research*, 38(6), 937-946. DOI `10.1287/opre.38.6.937`. **Accès négatif
  constaté** : `curl` sur `pubsonline.informs.org/doi/pdf/10.1287/opre.38.6.937` → 403 ;
  Semantic Scholar (`api.semanticscholar.org`) rend `openAccessPdf.status: "CLOSED"`. Identifié,
  non lu.
- **FRANCOPHONE** : Guihéneuf (1956), déjà réservé à un autre agent, discute justement le lot
  économique — non retouché ici. Au-delà, aucune réception française de Harris spécifiquement
  cherchée dans ce passage, faute de temps.
- **SIGNAL** : la paternité de la formule est disputée dans la littérature déjà légitimement lue
  par ce même dossier : Arrow, Harris et Marschak (1950), lus en texte intégral par le passage du 25
  août, écrivent eux-mêmes attribuer la solution à « R. H. Wilson, formerly of the Bell Telephone
  Company » plutôt qu'à (Ford W.) Harris — un contresens d'attribution est donc déjà repéré et
  documenté dans ce dossier même, à transmettre tel quel au lecteur primaire. La republication de
  1990 intervient 77 ans après l'original : rien ne garantit qu'elle en respecte la mise en page
  d'origine (elle en respecte a minima le texte, sous l'autorité éditoriale d'INFORMS).
- **ACCESSIBILITÉ** : texte intégral, anglais.
- **CITABLE** : oui, en anglais ; aucune traduction française publiée localisée.

### 2. Files d'attente pour le service, en français — J. P. Imhof (1964)

- **CANDIDAT** : le nombre de clients servis pendant une période de service ininterrompu dans une
  file d'attente simple.
- **AUTEUR(S)** : J. P. Imhof, Université de Lausanne, seul auteur.
- **PÉRIMÈTRE** : **risque de frontière signalé, pas tranché**. Le texte lu (introduction, citée
  ci-dessous) est d'un registre purement combinatoire — transformée de Laplace, chemins dans le
  plan, résultat de Champernowne — sans vocabulaire ni cadrage de décision de gestion dans les
  passages consultés. C'est exactement le cas que le périmètre annonce : « la recherche
  opérationnelle prise comme branche des mathématiques... entre par ce qu'elle fait comprendre d'un
  système, jamais par ses résultats propres ». À trancher par une lecture complète, pas ici.
- **SOURCE PRIMAIRE** : Imhof, J. P. (1964). « Sur le nombre d'unités servies lors d'une période
  de service ininterrompu pour une file d'attente simple. » *Annales de l'ISUP* (Publications de
  l'Institut de Statistique de l'Université de Paris), vol. XIII, n° 4, pp. 181-190.
  **Accès constaté** : notice HAL `hal-04085222`, fichier déposé, HTTP 200 sur
  `https://hal.science/hal-04085222v1/file/(1964)-201-210.pdf`, PDF de 11 pages, texte français lu
  et extrait avec succès (introduction citée intégralement ci-dessous). Page de garde HAL indique
  explicitement « Distributed under a Creative Commons CC BY 4.0 » et `peerReviewing_s: "1"`
  (avec comité de lecture) dans les métadonnées de l'API HAL.
- **SECONDAIRE** : non cherchée dans ce passage. ABSENTE, pas vérifiée.
- **FRANCOPHONE** : la source primaire elle-même est francophone, publiée à Paris — c'est la
  réponse directe au point d'entrée du périmètre resté sans requête.
- **SIGNAL** : à transmettre explicitement, pas à trancher : premier paragraphe du texte lu, « Dans
  la littérature relative aux files d'attente, les méthodes utilisant la transformation de Laplace
  ont longtemps joué un rôle prédominant. Un argument combinatoire a été employé pour la première
  fois par Champernowne [...] » — aucune mention de coût, de capacité ni de conception dans les
  deux premières pages lues.
- **ACCESSIBILITÉ** : texte intégral, français, licence CC BY 4.0 déclarée.
- **CITABLE** : oui, en français, verbatim disponible.

### 3. Maintenance et fiabilité, en français — Raymond A. Marie (1973)

- **CANDIDAT** : la maintenance corrective modélisée par un réseau de files d'attente, sous une
  contrainte de disponibilité minimale à satisfaire au moindre coût.
- **AUTEUR(S)** : Raymond A. Marie, seul auteur ; thèse de troisième cycle soutenue sous la
  direction de M. Métivier.
- **PÉRIMÈTRE** : dedans a priori — le résumé HAL le formule explicitement en termes de décision
  (« un ensemble de variables de décision [nombre de réparateurs, niveaux alloués aux stocks de
  rechange] », « un algorithme original [...] minimisant le coût global de la maintenance sous une
  contrainte de disponibilité minimale »). C'est très exactement le point d'entrée du périmètre
  « maintenance et fiabilité au sens de l'ingénieur », en français, jamais interrogé jusqu'ici.
- **SOURCE PRIMAIRE** : Marie, R. A. (1973). *Maintenance en univers stochastique. Modèle et
  Optimisation.* Thèse de 3e cycle, Université de Rennes, soutenue le 28 mai 1973.
  **Accès constaté** : notice HAL `tel-01730564` (dépôt Inria), fichier déposé, HTTP 200 sur
  `https://inria.hal.science/tel-01730564v1/file/RAM_Ma_these_3eme_cycle_avril_1973.pdf`, PDF de
  189 pages téléchargé (8,65 Mo). **Réserve constatée sur pièce** : les pages du corps du texte
  vérifiées (pp. 6, 11, 16, 21 sur 189) ne portent aucune couche de texte extractible — ce sont des
  images de pages scannées sans OCR, à la différence de la page de garde HAL générée
  automatiquement par le dépôt. Le texte n'est donc pas cherchable, et **aucune citation verbatim
  n'a pu être extraite par ce passage**, qui n'a pas ouvert les pages une à une en image. Le
  document est ouvrable ; il reste à lire.
- **SECONDAIRE** : non cherchée.
- **FRANCOPHONE** : la source primaire elle-même.
- **SIGNAL** : la notice HAL classe cette thèse de 1973 en « Réseaux et télécommunications
  [cs.NI] » — une nomenclature qui n'existait pas en 1973 (dépôt fait en 2018, reclassification
  a posteriori par le déposant, à ne pas prendre pour argent comptant comme preuve de rattachement
  disciplinaire d'époque). Objet voisin de `regle-de-commande-a-deux-niveaux.json` et
  `penalite-de-rupture.json`, déjà validés dans ce domaine, mais distinct : la ressource gérée ici
  est la réparation (personnel technique, pièces détachées), pas le produit fini en stock — pas de
  collision de concept identifiée.
- **ACCESSIBILITÉ** : texte intégral (image scannée, sans couche OCR), français. Lisible page par
  page, non cherchable par mot-clé.
- **CITABLE** : vraisemblablement oui, en français — non vérifié verbatim par ce scout, nécessite
  une lecture image par le lecteur primaire.

### 4. Maintenance et fiabilité, l'origine anglophone — le rapport AGREE (1957)

- **CANDIDAT** : la définition quantifiée de la fiabilité (probabilité de fonctionnement sans
  panne pendant une durée donnée, dans des conditions données) et la méthode d'essai normalisée qui
  en découle — le texte fondateur de l'ingénierie de la fiabilité comme discipline distincte.
- **AUTEUR(S)** : collectif — *Advisory Group on Reliability of Electronic Equipment* (AGREE),
  Office of the Assistant Secretary of Defense (Research and Engineering). Pas d'auteur individuel :
  même nature d'attribution que les trois rapports DoD déjà légués à ce domaine par `cybernetics`.
- **PÉRIMÈTRE** : dedans a priori sur la partie qui expose la définition opérationnelle et le
  protocole d'essai — non vérifié faute d'avoir pu lire un passage citable (voir Accessibilité) ;
  frontière possible avec `human-factors` si le texte dérive vers l'erreur humaine, non vérifiée non
  plus.
- **SOURCE PRIMAIRE** : *Advisory Group on Reliability of Electronic Equipment* (1957).
  *Reliability of Military Electronic Equipment.* Washington : Office of the Assistant Secretary of
  Defense (Research and Engineering), 4 juin 1957.
  **Accès constaté** : item Internet Archive `DTIC_AD0141476`, collections `dticarchive`,
  `usgovernmentmirrors`, `government-documents` — exactement la voie déjà établie comme rentable
  pour ce domaine. Métadonnées complètes interrogées via `https://archive.org/metadata/DTIC_AD0141476` :
  les cinq champs `access-restricted-item`, `restricted`, `rights`, `licenseurl` et
  `possible-copyright-status` rendent tous `None`. 375 pages scannées à 300 ppi. Le dérivé
  `DTIC_AD0141476_djvu.txt` répond HTTP 200 (24 143 lignes récupérées), mais **son OCR est
  gravement dégradé** sur toutes les occurrences vérifiées du mot « reliability » (ex.
  « acceptability figure for reliability established for the equljweBt t.jw » — fautes de
  reconnaissance sur la quasi-totalité des lignes). **Aucun passage n'a donc pu être cité verbatim**
  par ce scout : conformément à la règle déjà établie dans ce même document pour Bellman et HMMS,
  *l'image fait foi, l'OCR ne suffit jamais* — la lecture doit se faire sur le dérivé image
  (`.../page/n<N>.jpg`, jamais le `_x1600` rogné, cf. plus haut dans ce fichier), non testé ici.
- **SECONDAIRE** : non cherchée.
- **FRANCOPHONE** : sans objet, rapport militaire américain.
- **SIGNAL** : rapport collectif, pas d'auteur individuel au sens strict du test d'entrée n°2 du
  périmètre — à trancher par le lecteur primaire comme cela l'a déjà été pour les rapports DoD légués
  par `cybernetics` (rattachement institutionnel plutôt que personnel, précédent déjà accepté dans ce
  domaine).
- **ACCESSIBILITÉ** : image scannée disponible en intégralité ; couche OCR présente mais
  inutilisable pour citation.
- **CITABLE** : vraisemblablement oui, en anglais — non vérifié par ce scout, nécessite une lecture
  image.

### 5. Variabilité propagée le long d'une chaîne — Lee, Padmanabhan & Whang (1997)

- **CANDIDAT** : l'amplification de la variabilité de la demande le long d'une chaîne
  d'approvisionnement, ses quatre causes opérationnelles et les contre-mesures de gestion qu'elles
  appellent (l'« effet coup de fouet »).
- **AUTEUR(S)** : Hau L. Lee, V. Padmanabhan, Seungjin Whang — trois coauteurs, Stanford Graduate
  School of Business pour Lee et Whang.
- **PÉRIMÈTRE** : dedans a priori, **avec un motif de frontière à vérifier explicitement à la
  lecture**, exactement le cas limite que le périmètre annonce vis-à-vis de `systems-thinking` : le
  texte identifie quatre causes opérationnelles (traitement du signal de demande, rationnement,
  groupage des commandes, variations de prix) et des contre-mesures de pilotage (partage
  d'information, réduction des lots, stabilisation des prix) — registre de décision de gestion,
  « combien faut-il en tenir », plutôt que modèle de comportement dynamique global.
- **SOURCE PRIMAIRE** : Lee, H. L., Padmanabhan, V., & Whang, S. (1997). « Information Distortion
  in a Supply Chain: The Bullwhip Effect. » *Management Science*, 43(4), 546-558. DOI
  `10.1287/mnsc.43.4.546`.
  **Accès constaté** : PDF hébergé sur un site de cours universitaire (Bilkent University),
  `https://courses.ie.bilkent.edu.tr/ie460/wp-content/uploads/sites/12/2019/02/Lee-Padmanabhan-Whang-1997-MS.pdf`,
  HTTP 200, `application/pdf`. Le fichier est un scan JSTOR complet (première page : en-tête JSTOR
  standard, DOI, mention de copyright INFORMS/JSTOR ; dernière page : bibliographie se terminant
  page 558, « MANAGEMENT SCIENCE/Vol. 43, No. 4, April 1997 »), 14 pages, texte extrait avec succès
  en tête et en fin d'article. L'accès officiel INFORMS reste fermé :
  `pubsonline.informs.org/doi/10.1287/mnsc.43.4.546` → 403 en curl.
  **Réserve de droits, même nature que celle déjà tranchée pour Shewhart dans ce document** : ce
  mirroir est une reproduction non officielle d'un scan JSTOR hébergée sur un site de cours tiers,
  pas une édition ouverte par l'éditeur. Le texte est lu (`consulted: full-text` légitime), mais
  l'URL de ce mirroir n'est probablement pas celle à faire figurer sur une carte sans vérification
  de droits supplémentaire — décision à reprendre au stade de la rédaction, pas ici.
- **SECONDAIRE** : non cherchée.
- **FRANCOPHONE** : non cherchée dans ce passage (requête HAL « effet coup de fouet » /
  « bullwhip » à faire).
- **SIGNAL** : ce texte partage son année et son objet (chaîne de distribution, stocks, délais) avec
  Sterman, déjà exclu de ce domaine par la cartographie du 25 août (`om-scout-sterman.pdf`, rangé
  côté `systems-thinking`) — vigilance de frontière à transmettre dans les deux sens au lecteur
  primaire.
- **ACCESSIBILITÉ** : texte intégral, anglais, via mirroir tiers non officiel.
- **CITABLE** : oui, en anglais ; aucune traduction française cherchée.

## Angles morts (a) — non ouvrable, accès constaté négatif ou bloqué

- **Little, J. D. C. (1961). « A Proof for the Queuing Formula: L = λW. »** *Operations Research*,
  9(3), 383-387. DOI `10.1287/opre.9.3.383`. Point d'entrée : loi de Little. `curl` sur
  `pubsonline.informs.org/doi/pdf/10.1287/opre.9.3.383` → 403. Semantic Scholar :
  `openAccessPdf.status: "CLOSED"`, url vide. **Alternative repérée et vérifiée, à ne jamais
  substituer silencieusement** : Little, J. D. C. (2011). « Little's Law as Viewed on Its 50th
  Anniversary. » *Operations Research*, 59(3), 536-549, DOI `10.1287/opre.1110.0940` — texte ouvert
  (`https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/OS/Littles-Law-50-Years-Later.pdf`,
  HTTP 200, 14 pages, lu et vérifié), écrit par l'auteur lui-même, contenant une nouvelle
  démonstration de L = λW sur intervalle de temps fini. Ce n'est pas le texte de 1961 : si utilisé,
  cela doit être déclaré comme tel (rétrospective de l'auteur, pas l'article original), jamais
  présenté comme la source primaire de 1961.
- **Chase, R. B. (1981). « The Customer Contact Approach to Services: Theoretical Bases and
  Practical Extensions. »** *Operations Research*, 29(4), 698-706. DOI `10.1287/opre.29.4.698`.
  Point d'entrée : conception des systèmes de service. `curl` sur
  `pubsonline.informs.org/doi/pdf/10.1287/opre.29.4.698` → 403. Semantic Scholar :
  `openAccessPdf.status: "CLOSED"`, url vide. Aucun mirroir de cours trouvé dans le temps imparti,
  contrairement au cas Lee-Padmanabhan-Whang ci-dessus.
- **Sugimori, Y., Kusunoki, K., Cho, F., & Uchikawa, S. (1977). « Toyota Production System and
  Kanban System... »** *International Journal of Production Research*, 15(6), 553-564. DOI
  `10.1080/00207547708943149`. Point d'entrée : production à flux tiré. `curl` sur
  `tandfonline.com/doi/pdf/10.1080/00207547708943149` → 403. Semantic Scholar rend
  `openAccessPdf.status: "BRONZE"` mais l'URL rendue (`?needAccess=true&role=button`) est la même
  page à accès conditionnel qui a répondu 403 au test direct — un statut « bronze » n'est donc pas
  ici un accès réel, à noter pour éviter qu'un passage futur s'y fie sans retester.
- **Goldratt, E. M. (1988). « Computerized shop floor scheduling. »** *International Journal of
  Production Research*, 26(3). DOI `10.1080/00207548808947875` (identifié via Crossref, seul texte
  de Goldratt trouvé en revue à comité de lecture plutôt qu'en ouvrage de méthode). Point d'entrée :
  contrainte et goulot. `curl` sur `tandfonline.com/doi/pdf/10.1080/00207548808947875` → 403.
  Semantic Scholar : `openAccessPdf.status: "CLOSED"`.

## Angles morts (b) — non cherché ou insuffisamment cherché

- **Théorie des files d'Erlang.** Identité bibliographique connue de la littérature secondaire :
  Erlang, A. K. (1909). « Sandsynlighedsregning og Telefonsamtaler » / « The Theory of Probabilities
  and Telephone Conversations. » *Nyt Tidsskrift for Matematik* B, 20, 33-39 ; republié en anglais
  dans Brockmeyer, E., Halstrøm, H. L., & Jensen, A. (1948). *The Life and Works of A. K. Erlang.*
  Copenhagen Telephone Company / Transactions of the Danish Academy of Technical Sciences n° 2.
  **Aucune des deux pièces n'a été localisée en accès dans ce passage** : recherche Internet Archive
  par titre (`title:(life and works of A K Erlang)`) → 0 résultat ; recherche plein texte plus large
  (`Erlang telephone traffic theory`) → 1 résultat sans rapport (dépôt GitHub de cryptographie). Non
  interrogé : HathiTrust, les bibliothèques numériques danoises (Det Kongelige Bibliotek), le site de
  l'ITU. Statut : **repéré, accès non vérifié** — à reprendre par un passage qui interroge
  spécifiquement ces trois fonds plutôt que `WebSearch` généraliste.
- **Conception des systèmes de service, au-delà de Chase.** La requête HAL
  `"systèmes de service" conception` n'a rendu que deux résultats, tous deux contemporains et
  appliqués (`hal-02919111`, `tel-03166626` sur les véhicules autonomes partagés) — aucun candidat de
  texte source. Un autre classique du point d'entrée, Levitt, T. (1972). « Production-Line Approach
  to Service. » *Harvard Business Review*, n'a fait l'objet d'aucune requête dans ce passage, faute
  de temps.
- **OpenEdition Books, browsing de collections.** Une tentative
  (`books.openedition.org/oep/browse/discipline`) a rendu 404 ; abandonnée faute de connaître la
  structure d'URL correcte pour ce domaine. **Non résolu, à reprendre en identifiant d'abord la page
  d'accueil disciplinaire correcte plutôt qu'à conclure à un vide.**
- **Persée, hors ce que ce passage a fait.** Interrogé uniquement par `WebSearch` générique (pas par
  le moteur propre de Persée), pour la théorie des files d'attente et pour l'EOQ. Reste non fait pour
  la maintenance, la conception de service et la variabilité — comme la section du 25 août l'avait
  déjà signalé pour l'ensemble de la couche, ce passage ne comble le manque que partiellement.
- **theses.fr.** Non interrogé dans ce passage : aucun titre candidat côté français, au-delà de
  Marie (1973), n'a nécessité de vérification d'existence par ce canal (Marie a été trouvé
  directement et intégralement via HAL).
- **Cairn.** Non interrogé, conformément à la consigne (403 DataDome constaté les nuits
  précédentes, traité comme définitif, non re-diagnostiqué ici).

## Angles morts (c) — vérifié vide

- **Théorie des contraintes / goulot, dans la couche francophone, sur HAL précisément.** Deux
  requêtes exactes menées : `text:("théorie des contraintes")` → 36 résultats, tous relevant du
  droit comparé (une querelle homonymique avec la « théorie des contraintes juridiques »), de
  mémoires de master appliquant la doctrine anglo-saxonne sans la discuter, ou d'une thèse en
  anglais sur le secteur de la santé chypriote citant Goldratt sans en être une source ;
  `text:("goulet d'étranglement" production)` → 5 résultats, aucun sur le mécanisme productif
  (géoéconomie des semi-conducteurs, programmation générative, environnements virtuels de
  formation, génétique du sorgho). **Aucun texte source du concept, en français, n'a été trouvé sur
  HAL.** C'est un vide vérifié **pour ce concept précis et pour cette seule base** — Persée, Cairn et
  OpenEdition Books n'ont pas été interrogés sur ce point précis dans ce passage, donc le vide ne
  s'étend pas au-delà de HAL.

## Vérification de non-collision

`ls corpus/validated/` (127 fiches) et `ls corpus/candidates/` exécutés. Aucun `id` ni `slug`
proposé ci-dessus (`quantite-economique-de-commande`, `imhof`/`file-d-attente-service`,
`maintenance-en-univers-stochastique`, `fiabilite-agree`, `effet-coup-de-fouet`/`bullwhip`, ou
équivalents) ne figure dans l'une ou l'autre liste — aucun de ces cinq candidats n'ayant d'ailleurs
reçu de slug définitif ici, cette étape restant en amont de toute rédaction de fiche. Recherche par
mots-clés (`harris`, `lot économique`, `EOQ`, `bullwhip`, `variabilit`, `Imhof`, `file d'attente`,
`Erlang`, `Little`, `maintenance`, `fiabilit`) dans `corpus/validated/*.json` : aucune collision de
concept identifiée, seulement des correspondances partielles sans rapport (`catachrese.json`,
`nasa-tlx.json`, etc., contenant le mot « fiabilité » ou « variabilité » dans un tout autre sens).

Les trois candidats francophones réservés à d'autres agents cette nuit (Guihéneuf 1956, Fiore 1987,
De Almeida 1998) n'ont pas été rouverts ni recherchés par ce passage, conformément au mandat.
