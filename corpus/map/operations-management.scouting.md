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
