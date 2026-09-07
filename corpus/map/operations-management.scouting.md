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

# Reprise du 7 septembre 2026 (balayage complémentaire) — la couche francophone par moteur propre, les quatre points d'entrée jamais interrogés, et les cinq réserves héritées

Cette section est ajoutée, non réécrite, et se lit contre les deux précédentes là où elles
divergent — la « Reprise du 25 août 2026 » continue de faire foi sur les quatre candidats
Groupe A et sur les pièges d'accès qu'elle documente. Ce passage n'a rouvert aucun de ces
quatre textes ; il a fait ce que les deux précédents avaient explicitement laissé de côté :
(a) HAL par son propre moteur avec syntaxe conjonctive, OpenEdition Books par navigation de
collection, theses.fr en vérification d'existence nommée ; (b) les quatre points d'entrée du
périmètre jamais requêtés ; (c) les deux réserves d'accès nommément désignées ; (d) le test
d'ouverture réel des cinq candidats hérités des voisins, jamais tenté depuis leur legs.

**Outils réellement disponibles cette nuit** : le serveur MCP `documentary` n'est exposé sous
aucune forme (aucun `mcp__documentary__*`). Travail mené par `WebSearch` (détection
uniquement), `WebFetch`, `curl` direct, l'API Crossref (`api.crossref.org`) et l'API Unpaywall
(`api.unpaywall.org`), conformément à la liste des instruments en état de marche. Cairn n'a
reçu aucune requête — le 403 DataDome est traité comme définitif, sans nouvelle tentative.
`scite` n'a pas été appelé, non plus disponible.

## (d) Les cinq candidats hérités : trois s'ouvrent, deux restent fermés à l'identique

**Résultat le plus net de ce passage : les trois rapports DoD légués par `cybernetics`
s'ouvrent tous les trois, contredisant leur statut « non ouvert » porté sans nouvelle
vérification depuis l'ouverture du domaine.** Testés individuellement sur `archive.org`,
métadonnées puis GET direct du PDF (en suivant la redirection HTTP→HTTPS, nécessaire — un GET
sans `-L` rend un 302 vide) :

1. **Naval Postgraduate School (auteur du MBA Professional Report non nommé dans les
   métadonnées IA), « Applicability of the Law of Requisite Variety in Major Military System
   Acquisition »**, MBA Professional Report, Naval Postgraduate School, Monterey, juin 2017.
   Identifiant `DTIC_AD1046519`. `access-restricted-item` : absent. Mention de diffusion lue
   sur la pièce : « Approved for public release. Distribution is unlimited. » **GET
   `https://archive.org/download/DTIC_AD1046519/DTIC_AD1046519.pdf` → 200**, PDF 1,32 Mo, 113
   pages (PyPDF2), texte extractible dès la première page. Anglais.
2. **Auteur non identifié à ce stade, « A Systematic Approach to Prioritizing Weapon System
   Requirements and Military Operations Through Requisite Variety »**, 1999. Identifiant
   `DTIC_ADA371943`. `access-restricted-item` : absent. Diffusion : « DISTRIBUTION STATEMENT A
   — Approved for Public Release — Distribution Unlimited ». **GET
   `https://archive.org/download/DTIC_ADA371943/DTIC_ADA371943.pdf` → 200**, PDF 1,38 Mo, 20
   pages, texte extractible. Anglais.
3. **Douglas B. Bushey, Major, United States Army, « A Conceptual Framework for Providing
   Requisite Variety in the Future Operational Forces of the United States Army »**, thèse de
   Master of Science in Management, Naval Postgraduate School, Department of Systems
   Management, décembre 1997. Identifiant `DTIC_ADA341017`. Diffusion, lue en page 3 du texte
   OCR : « Approved for public release; distribution is unlimited. » Le fichier principal
   (`DTIC_ADA341017.pdf`, scan image) sert un texte vide sur les pages testées ; la variante
   `DTIC_ADA341017_text.pdf` porte une couche OCR exploitable. **GET
   `https://archive.org/download/DTIC_ADA341017/DTIC_ADA341017_text.pdf` → 200**, 14,9 Mo, 132
   pages. Anglais.

**Le motif de frontière déjà tranché par le périmètre reste entier et n'est pas rouvert ici** :
ces trois pièces appliquent la loi de la variété requise au dimensionnement d'un dispositif
d'acquisition, ce qui est le motif exact qui les place ici plutôt qu'en cybernétique. Ce que ce
passage change, c'est uniquement le constat d'accès — de « non ouvert » à **ouvert, texte lu
en extraction, à évaluer par une lecture qui n'a pas eu lieu**. Aucune fiche n'est rédigée ici.

**Les deux notices HAL léguées par `human-factors` n'ont pas été retentées**, conformément à
la consigne — leur négatif (aucun fichier déposé, aucun DOI) reste le dernier constat.

## (c) Les deux réserves : l'une confirmée absente, l'autre levée

**Fiore 1987 — l'absence de DOI est confirmée, pas seulement supposée.** Trois vérifications
convergentes :
1. Recherche Crossref par titre bibliographique sous le préfixe Persée `10.3406` : aucun
   résultat correspondant à l'article de Fiore.
2. Recherche Crossref au niveau de la revue entière par ISSN (`0338-4551`, *Revue française de
   gestion*) filtrée sur le préfixe `10.3406` : **`total-results: 0`** — Persée n'a déposé
   **aucun** DOI pour cette revue, pas seulement pour cet article. À comparer avec *Revue
   économique* (ISSN de Guihéneuf 1956), qui en porte.
3. Lecture directe de la page Persée `rfg_0338-4551_1987_num_63_1_2668` (GET → 200) : **aucune
   occurrence de la chaîne « doi » dans le HTML**, alors que la même recherche sur la page de
   Guihéneuf (`reco_0035-2764_1956_num_7_1_407156`) fait apparaître cinq occurrences dont la
   balise `content="10.3406/reco.1956.407156"`. La différence de structure de page confirme
   l'absence, elle n'est pas un artefact de requête.

**Conclusion : Fiore 1987 n'a pas de DOI, point final pour cette pièce et pour la revue
entière sur la période.** Le candidat reste identifié par son seul identifiant Persée
(`rfg_0338-4551_1987_num_63_1_2668`, page servie en 200), sans que la règle du dépôt en DOI ne
puisse être honorée — exactement le cas que le passage 13 avait rencontré pour Lesourne 1985.

**De Almeida 1998 — le GET est désormais testé, et il réussit.** `HEAD` continue de rendre 405
(le serveur Numdam ne l'implémente pas), mais un `GET` sur
`http://www.numdam.org/article/RO_1998__32_2_145_0.pdf` rend un **301 vers l'HTTPS**, suivi
d'un **200** : PDF de 4,65 Mo, 49 pages, couche texte exploitable (première page extraite avec
succès, en-tête RAIRO lisible). **Accessibilité : texte intégral**, plus seulement « page
servie ». La vigilance de périmètre transmise par la Reprise précédente reste entière et n'est
pas tranchée ici : c'est à la lecture de dire si le texte éclaire le comportement d'un système
flexible de production ou seulement les résultats propres du modèle à réseaux de files
d'attente.

## (b) Les quatre points d'entrée jamais interrogés

### 1. Files d'attente pour le service

**Candidat identifié et DOI résolu, accès fermé et constaté comme tel.** John D. C. Little,
« A Proof for the Queuing Formula: L = λW », *Operations Research*, vol. 9, n° 3, juin 1961,
p. 383-387. DOI `10.1287/opre.9.3.383` (résolu par Crossref, auteur et affiliation
correspondants : Case Institute of Technology). **Unpaywall : `is_oa: false`,
`oa_locations: []`, `oa_status: "closed"`.** Aucune archive institutionnelle, aucun dépôt
d'auteur trouvé. Une copie circule sur Scribd et est mentionnée sur ResearchGate — ce ne sont
pas des voies légitimes (dépôt non autorisé d'un article sous droits INFORMS), et elles ne se
comptent pas comme accès. **Statut : non ouvrable par une voie légitime identifiée ce
passage.** C'est le texte qui porte le mieux la relation encours-débit-délai que le périmètre
signale comme angle mort depuis l'ouverture (« loi de Little ») ; il reste fermé.

### 2. Maintenance et fiabilité au sens de l'ingénieur

**Candidat trouvé et ouvert : le rapport fondateur du champ.** Advisory Group on Reliability
of Electronic Equipment (AGREE), Office of the Assistant Secretary of Defense (Research and
Engineering), *Reliability of Military Electronic Equipment*, Washington D.C., 4 juin 1957.
Identifiant `DTIC_AD0141476` (collection `dticarchive`, trouvé par recherche croisée
titre+collection sur `archive.org/advancedsearch.php`, et non deviné). Métadonnées :
`access-restricted-item` absent, `rights` absent — même régime que les trois candidats DoD
ci-dessus. **GET `https://archive.org/download/DTIC_AD0141476/DTIC_AD0141476.pdf` → 200**, PDF
de 27,1 Mo, 375 pages. **Réserve à écrire honnêtement** : la couche OCR de ce scan est de très
mauvaise qualité (première page quasi illisible en extraction : caractères aléatoires), donc
seule l'image fait foi ici, non testée page à page dans ce passage. Anglais. C'est le rapport
qui introduit, pour l'électronique militaire, l'exigence de fiabilité chiffrée (temps moyen
entre pannes) comme grandeur de conception d'un système — exactement le point d'entrée que
trois domaines fermés avaient renvoyé ici sans qu'aucun scout ne l'ait cherché depuis.

### 3. Conception des systèmes de service

**Deux candidats de référence identifiés par citation, aucun résolu en DOI propre.** Richard
B. Chase, « Where Does the Customer Fit in a Service Operation? », *Harvard Business Review*,
1978 ; Theodore Levitt, « Production-Line Approach to Service », *Harvard Business Review*,
1972. Crossref ne rend, pour aucun des deux, de DOI correspondant à l'article original de HBR
— seulement des republications tardives sans rapport direct (un chapitre de 2010 « Revisiting…
» pour Chase, DOI `10.1007/978-1-4419-1628-0_2` ; un chapitre de recueil de 2012 pour Levitt,
DOI `10.1007/978-3-642-27922-5_20`). **Statut : angle mort insuffisamment cherché** — HBR
n'attribue pas systématiquement de DOI rétroactif à ses articles anciens, et une recherche
propre sur le site de l'éditeur (`hbr.org`) n'a pas été menée dans ce passage. Ni candidat
retenu, ni vide vérifié : à reprendre par une requête ciblée sur `hbr.org` ou sur un recueil
qui republie l'article avec DOI.

### 4. Variabilité propagée le long d'une chaîne

**Candidat identifié et DOI résolu, accès fermé et constaté comme tel.** Hau L. Lee,
V. Padmanabhan, Seungjin Whang, « Information Distortion in a Supply Chain: The Bullwhip
Effect », *Management Science*, vol. 43, n° 4, avril 1997, p. 546-558. DOI
`10.1287/mnsc.43.4.546` (résolu par Crossref). **Unpaywall : `is_oa: false`,
`has_repository_copy: false`, `oa_locations: []`.** Des copies circulent sur ResearchGate et
sur un site de cours universitaire (Bilkent) — ni l'une ni l'autre n'est un dépôt d'auteur
identifié ni un mandat d'accès ouvert constaté, donc aucune des deux ne compte comme voie
légitime. **Statut : non ouvrable par une voie légitime identifiée ce passage.**

**Un vide vérifié sur ce même point, distinct de l'échec ci-dessus** : la relecture de
l'entrée de De Almeida 1998 (candidat francophone désormais en texte intégral, voir ci-dessus)
montre qu'elle porte elle-même sur l'agrégation de données de performance dans des réseaux de
files d'attente représentant des systèmes flexibles de production — un objet voisin de la
propagation de variabilité dans une chaîne, mais à l'échelle d'un atelier et non d'une chaîne
d'approvisionnement inter-entreprises. Elle ne remplace pas un candidat sur la propagation
inter-maillons, elle l'avoisine.

## (a) La couche francophone par moteur propre — HAL, OpenEdition Books, theses.fr

**HAL, interrogé par son propre moteur (`api.archives-ouvertes.fr/search/`) avec la syntaxe
conjonctive `text:"expression"` ou `text:mot1 AND text:mot2`, jamais en langage naturel.** Un
premier essai en syntaxe `text:"..."` simple sans guillemets internes correctement échappés a
rendu des zéros artefactuels sur les quatre points d'entrée ; corrigé avec des expressions
entre guillemets et l'opérateur `AND` explicite, il rend une littérature réelle et abondante :

| requête | `numFound` | nature des résultats |
|---|---|---|
| `"file d'attente" AND service` | 77 | théorie mathématique des files (Avrachenkov, Moyal…), aucun candidat individualisable en concept enseignable d'OM |
| `variabilité AND "chaîne logistique"` | 19 | thèses et articles récents d'application (optimisation, résilience de chaîne), pas de source fondatrice |
| `conception AND "système de service"` | 5 | thèses d'ingénierie de service, dont une modélisation de systèmes de production de services en santé (Sbayou) |
| `"goulot d'étranglement"` | 285 | terme largement réemployé hors du champ (physique, IA, réseaux) ; le sens gestion de production s'y noie |

**Constat honnête** : ce n'est ni un vide vérifié, ni un candidat retenable. HAL rend une
matière réelle sur les quatre points d'entrée, mais aucune pièce ne s'est détachée comme
source primaire d'un concept nommé et enseignable au sens du test d'entrée — la plupart des
résultats sont des thèses récentes d'application ou des travaux de mathématiques pures des
files, rejetables comme « recherche opérationnelle prise comme branche des mathématiques » au
sens du périmètre. **Statut : (b) insuffisamment cherché** — un tri fin, pièce par pièce,
reste à faire et n'a pas pu l'être dans ce passage ; les requêtes et leurs comptes sont
consignés pour ne pas être rejouées à l'identique.

**OpenEdition Books, parcouru par ses pages de collection et non par son moteur (confirmé une
nouvelle fois hors service côté client)**. La page `/collections` n'existe pas (404) ; la
page `/catalogue` est statique et paginée (551 pages), mais ses facettes affichées sont des
catégories BISAC (« LANGUAGE ARTS & DISCIPLINES… ») et des filtres par éditeur, sans facette
de discipline « gestion » ou « ingénierie » isolable par URL. Une piste a été détectée par
recherche web puis vérifiée directement sur la plateforme : **Nathalie Fabbe-Costes et Gilles
Paché, « Introduction », dans *La logistique : une approche innovante des organisations*,
Presses universitaires de Provence, 2013.** DOI `10.4000/books.pup.30345` (résolu par
Crossref). **GET `https://books.openedition.org/pup/30375` → 200**, licence OpenEdition
Books, PDF du chapitre servi (`https://books.openedition.org/pup/pdf/30375`). **Réserve de
périmètre à écrire plutôt qu'à trancher** : c'est un chapitre d'introduction généraliste à la
logistique comme discipline, retraçant une école de recherche (CRET, Aix-en-Provence) plutôt
qu'exposant un mécanisme unique attribuable ; il se rapproche du « manuel généraliste » que le
périmètre ne rejette pas explicitement mais qu'il ne vise pas non plus. **Statut : détecté et
ouvert, évaluation de pertinence renvoyée à une lecture.** Le reste du catalogue OpenEdition
Books pour ce domaine n'a pas été balayé exhaustivement — la navigation par éditeur (`/pup`,
`/pur`, `/septentrion`, `/igpde`…) reste à faire systématiquement, ce que ce passage n'a pas eu
le temps de couvrir. **Statut global : (b) insuffisamment cherché.**

**theses.fr, utilisé uniquement pour vérifier une thèse déjà nommée, jamais pour découvrir par
mots-clés — conformément à la règle.** La thèse de David De Almeida, annoncée par la Reprise
du 25 août comme « pourrait être la meilleure source », existe et est identifiée : **David De
Almeida, « Modélisation par réseaux de files d'attente de systèmes de production »**, thèse de
doctorat, Université Clermont-Ferrand 2 (Blaise Pascal), directeur Michel Gourgand, soutenue en
1996. NNT `1996CLF21819`. **Aucun DOI, aucun lien de texte intégral sur la fiche
`theses.fr/1996CLF21819`** — la thèse est antérieure au dépôt électronique obligatoire (TEF) et
n'a pas été numérisée rétroactivement, au moins sur cette plateforme. **Statut : existence
confirmée, accès non constaté — non ouverte.** L'article RAIRO 1998 du même auteur, désormais
en texte intégral confirmé (voir ci-dessus), reste la voie d'accès la plus proche de son
contenu.

**Un vide vérifié supplémentaire, HAL cette fois et non theses.fr** : `text:"quantité
économique de commande"` et `text:"loi de Little"` rendent tous deux `numFound: 0` sur l'API
HAL — recherché en phrase exacte, syntaxe correctement conjonctive, donc un vide de requête
réel et non un artefact d'encodage. **C'est un vide pour ces expressions précises**, pas un
vide sur le sujet : la théorie des files et la gestion de stock existent abondamment dans HAL
sous d'autres formulations (voir tableau ci-dessus), simplement pas sous le nom propre du
résultat mathématique.

## Ce que ce passage n'a toujours pas fait, et qui reste entier

- **HAL n'a pas reçu de tri fin** sur les quatre points d'entrée : la matière existe (386
  résultats cumulés sur les quatre requêtes), aucune lecture individuelle n'a eu lieu.
- **OpenEdition Books n'a pas été balayé éditeur par éditeur** ; un seul chapitre a été
  vérifié, trouvé par détection web et non par navigation systématique de collection.
- **Cairn reste entièrement non interrogé**, conformément à la règle du 403 définitif.
- **Chase 1978 et Levitt 1972** n'ont pas reçu de recherche sur le site de l'éditeur HBR ni de
  vérification Unpaywall — seul Crossref a été interrogé, sans résultat direct.
- **L'AGREE report (`DTIC_AD0141476`) n'a pas été lu au-delà de sa première page** ; sa couche
  OCR étant dégradée, une lecture devra s'appuyer sur l'image, pas sur le texte extrait.
- **Les trois rapports DoD sur la variété requise n'ont reçu aucune lecture de fond** : seul
  leur accès a été retesté et confirmé. Leur pertinence pour une carte reste à évaluer par une
  lecture, pas supposée depuis ce constat d'accès.

## Vérification de non-doublon

Aucun des candidats ou pièces mentionnés dans ce passage (rapports DoD sur la variété requise,
AGREE 1957, Little 1961, Harris/EOQ 1990 et 2014, Lee-Padmanabhan-Whang 1997, Fabbe-Costes &
Paché 2013, De Almeida thèse 1996) ne recoupe l'un des huit cartes déjà publiées du domaine
(Shewhart ×2, Bellman ×2, Arrow-Harris-Marschak ×2, Holt-Modigliani-Simon ×2) ni les concepts
déjà validés cités par la cartographie d'ouverture (`loi-de-la-variete-requise`,
`mesure-devenue-cible`, `loi-de-campbell`, `regulateur-commande-par-l-ecart`,
`regulation-proportionnelle-derivee-integrale`).
