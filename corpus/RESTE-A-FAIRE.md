# Ce qui reste à faire

Ce fichier existe pour qu'une session qui reprend le corpus sache **par où commencer**, sans
relire tout le dépôt et sans redécouvrir ce que quatre lots ont déjà appris.

Il ne double pas `corpus/ETAT.md`, qui dit ce que le corpus **est** ; celui-ci dit ce qu'il
lui **manque**. Et il ne remplace aucun script : les chiffres ci-dessous sont un instantané
du 21 août 2026, les commandes sont la vérité.

```bash
npm run corpus:audit    # domaines, thèmes, cartes validées, sujets jamais instruits
npm run corpus:deepen   # projette les approfondissements, et liste en fin de sortie
                        # les cartes validées qui n'en ont pas : c'est la file, pas ce fichier
```

**Un décompte écrit à la main ment tôt ou tard.** Ce qui suit ne vaut donc que pour ce qu'un
script ne peut pas dire : quel travail est possible aujourd'hui, ce qu'il coûte, ce qui a déjà
été trouvé pour lui, et dans quel ordre les prendre.

---

## Les trois chantiers, par coût croissant

| chantier | volume | recherche documentaire ? | état |
|---|---|---|---|
| ~~**A.** Approfondissements~~ | ~~25 cartes~~ | non | **fait le 21 août 2026** |
| **B.** File de la sociologie des organisations | 26 entrées | oui, cartographie déjà faite | ouvert |
| **C.** Six domaines vides | 6 domaines | oui, **tout est à faire** | ouvert |

Le chantier A est vidé : les vingt-cinq approfondissements manquants ont été écrits et
projetés, et **plus aucune carte validée n'en attend**. Ce que ce passage a appris est gardé
plus bas ; ce qui reste à faire commence au chantier B.

---

# A. Les approfondissements, faits

**Vidé le 21 août 2026.** Les vingt-cinq cartes qui n'avaient pas d'approfondissement en ont
un : les treize de human factors, ouvertes le 19 août, et les douze de cybernétique, ouvertes
le 21. `corpus:deepen` projette désormais **57 approfondissements, 83 469 mots, 1 464 en
moyenne**, et sa fin de sortie ne liste plus aucune carte.

C'était le seul écart du corpus entre ce qui est validé et ce qui est servi.

## Ce que ce passage a appris, et qui resservira

Un rédacteur par carte, aucune recherche documentaire, la matière étant la carte elle-même,
sa lecture primaire et son verdict de contrôle. Trois choses valent d'être gardées.

**Le contrôle cherche des chaînes littérales, et il attrape donc des métaphores.** Un texte a
été renvoyé sur « la carte », qui expose le dispositif au lecteur : c'était « le seul plat de
la carte », une image du menu. Le renvoi était un faux positif, et la réécriture était quand
même la bonne décision, l'ambiguïté faisant trébucher un lecteur qui vient de fermer une
carte. Un rédacteur qui rencontre ce refus doit d'abord regarder ce que sa phrase dit
vraiment.

**Le meilleur signe qu'un texte est bien écrit est la liste de ce qu'il a refusé d'écrire.**
Les comptes rendus les plus solides du lot consacraient l'essentiel de leur place à cela :
l'appareil d'établissement laissé dehors, les sources jamais ouvertes nommées par ce qu'elles
détiennent et jamais par ce qu'elles diraient, les passages que seule une couche océrisée
portait reformulés sans guillemets plutôt que présentés comme du verbatim.

**Le répertoire de travail temporaire est partagé entre agents parallèles.** Trois rédacteurs
ont vu leur script de fabrication écrasé par celui d'un voisin, et l'un d'eux a régénéré le
fichier d'un autre. Rien n'a été perdu, vérification faite fichier par fichier, mais un lot
lancé en parallèle doit préfixer ses fichiers de travail par l'identifiant de sa carte.

---

# B. La file de la sociologie des organisations

**Vingt-six entrées sur trente restent à instruire** dans `corpus/map/queue.json`, établie par
le cartographe le 16 août. Le domaine est le plus ancien du corpus et reste à huit cartes.

C'est le chantier au meilleur rendement documentaire : **la cartographie est faite**,
l'accessibilité de chaque entrée a déjà été constatée et écrite, et le rang de chacune est
motivé. Un lot y démarre sans passage de scout.

Les premières entrées encore ouvertes, avec l'accessibilité telle que le cartographe l'a
constatée :

| rang | id | auteur pressenti | accès |
|---:|---|---|---|
| 3 | `couplage-lache` | Karl E. Weick | bonne, DOI résolu — **déjà en `corpus/candidates/`** |
| 6 | `exit-voice-loyalty` | Albert O. Hirschman | moyenne, ouvrage sans DOI |
| 7 | `dependance-aux-ressources` | Pfeffer et Salancik | moyenne, ouvrage sans DOI |
| 8 | `loi-airain-oligarchie` | Robert Michels | bonne, par une voie inhabituelle |
| 9 | `mythe-et-ceremonie-decouplage` | Meyer et Rowan | bonne, DOI résolu |
| 10 | `apprentissage-double-boucle` | Argyris et Schön | moyenne à bonne |
| 11 | `differenciation-integration` | Lawrence et Lorsch | bonne, DOI résolu |
| 13 | `routines-organisationnelles` | Feldman et Pentland | bonne, DOI résolu |

**`couplage-lache` est la seule fiche non validée du corpus.** Elle est en `CANDIDATE`, sans
notes ni verdict, et `corpus:audit` la compte comme « 1 en cours » depuis plusieurs lots.
C'est la reprise la plus courte du dépôt.

## Trois thèmes déclarés ne portent aucune carte

`autorite-domination` · `reaction-insatisfaction` · `apprentissage-organisationnel`

Ce sont des thèmes de la première heure, écrits **avant** toute instruction documentaire pour
construire l'application, et `corpus/perimeter.md` le reconnaît en toutes lettres. Ils
affichent aujourd'hui une page vide.

Deux se combleraient par une entrée de la file, et le rapprochement est direct plutôt
qu'approximatif :

- **`reaction-insatisfaction`**, dont le titre déclaré est « Réaction à l'insatisfaction
  (Exit/Voice/Loyalty) », attend `exit-voice-loyalty` (Hirschman), rang 6 ;
- **`apprentissage-organisationnel`**, « ajuster ses moyens, ou remettre en cause ses
  présupposés », attend `apprentissage-double-boucle` (Argyris et Schön), rang 10.

**`autorite-domination` n'a aucune entrée dans la file qui le pourvoie**, et c'est un écart à
signaler plutôt qu'à combler par un rapprochement commode. Le thème porte sur ce qui fait
qu'un ordre est obéi sans contrainte, c'est-à-dire sur la légitimité au sens wébérien. Les
entrées qui en approchent visent autre chose : `loi-airain-oligarchie` (Michels, rang 8) porte
sur la dérive oligarchique, `cooptation` (Selznick, rang 26) sur le pouvoir et la légitimité
d'une organisation face à son environnement, et `bureaucratie-type-ideal` (Weber, rang 17) est
rangée par le cartographe sous « bureaucratie et rationalisation », donc vers un thème déjà
pourvu. Pourvoir ce thème demande de le chercher, pas de le déduire.

## Ce que la cartographie demande de refaire avant le prochain lot

Écrit dans `queue.json`, sous `prochain_passage_de_cartographie`. En résumé : ouvrir Davis &
Zald sur le canon de la discipline, repéré sans être lu ; relancer OpenAlex et Semantic
Scholar hors période de saturation, **les courants qu'ils auraient fait remonter étant
inconnus et non absents** ; et interroger explicitement l'institutionnalisme scandinave et la
tradition germanophone, que la file ne couvre pas.

---

# C. Les six domaines vides

| famille | domaine | périmètre | cartographie | stock d'entrée |
|---|---|---|---|---|
| Humains et organisations | Sociologie du travail | — | — | aucun |
| Humains et organisations | Psychologie du travail | — | — | 1 cas de frontière |
| Humains et organisations | Économie comportementale | — | — | aucun |
| Production et systèmes | Operations Management | — | — | 3 rapports repérés |
| Production et systèmes | Systems Thinking | — | — | **3 textes, dont un ouvert** |
| Pilotage | Science de la décision | — | — | **5 textes repérés** |

**Aucun des six n'a de périmètre écrit ni de cartographie.** Les ouvrir, c'est refaire l'ordre
complet, et cet ordre n'est pas négociable : il a été appris en le violant.

> le périmètre s'écrit → le scout cartographie → **puis** les thèmes se déclarent → puis les
> concepts s'instruisent

Les neuf thèmes de la sociologie des organisations ont été posés de mémoire avant toute
lecture, et le périmètre le reconnaît lui-même comme un découpage a priori : c'est pourquoi
trois d'entre eux affichent une page vide. La règle qui en découle vaut pour les six :
**un thème sans carte validée ne se déclare pas.**

## Ce dont l'ouverture hérite déjà, et qui n'est pas à rechercher

Trois de ces domaines ne partent pas de rien. Les périmètres et cartographies existants ont
tranché leurs frontières **depuis l'autre côté**, et consigné en angle mort ce qui leur
revient plutôt que de le rejeter. Un scout qui ouvre l'un des trois commence par lire ces
sections.

**`systems-thinking`** — `corpus/perimeter.md` lui consacre la frontière que le périmètre de
la cybernétique appelle « la seule qui puisse coûter cher », avec un tableau de départage
déjà écrit : le **principe** de la régulation est en cybernétique, le **comportement dans le
temps** qu'engendre une structure de boucles est ici. Et
`corpus/map/cybernetics.scouting.md` lui lègue Roig 1970 sur la théorie générale des systèmes
en sciences sociales, **51 pages de texte intégral vérifiées sur Persée** — la cartographie
écrit elle-même que « c'est un cadeau pour qui ouvrira ce domaine ». Plus Lesourne 1985, neuf
pages listées, et un sourcebook de Buckley en accès restreint. Signal à ne pas manquer :
Bertalanffy et Forrester **n'ont pas été rencontrés spontanément**, ce qui est une information
sur les requêtes, pas sur le champ.

**`decision-science`** — deux cartographies lui ont légué cinq textes avec leur état d'accès
constaté : Tversky & Kahneman 1974 (version publiée fermée, mais **un rapport technique ONR
antérieur miré sur Internet Archive sans restriction**, repéré non ouvert), Tversky 1972,
l'ouvrage collectif de 1982, la théorie de l'utilité multi-attributs, et Newell, Shaw & Simon
1960 dans les actes de 1960, **texte intégral ouvert et repéré non lu**.

**`operations-management`** — trois rapports du Department of Defense appliquant la loi de la
variété requise à l'acquisition de systèmes d'armes, mirés sur Internet Archive, repérés non
ouverts.

**`work-psychology`, `sociology-of-work`, `behavioral-economics`** — les deux cartographies
qui les ont explicitement balayés **se déclarent vides pour eux**, et disent pourquoi : les
mots-clés de leurs périmètres ne recoupent pas naturellement ceux de ces domaines. C'est un
résultat, pas un manque, et il signifie qu'ouvrir ces trois-là demandera un balayage entier.
Un seul cas de frontière est consigné, Mackworth 1948 sur la vigilance, **tranché du côté de
`human-factors`** et donc pas à réclamer.

## Le piège que ces six domaines partagent

La cybernétique a montré ce que coûte un champ dont le vocabulaire est disponible pour
n'importe quel usage métaphorique. Les six le sont autant : « système », « décision »,
« flux », « motivation », « biais » circulent partout. Le rejet le plus fréquent à prévoir
sera le même — **un texte qui invoque le mot sans mécanisme identifiable ni auteur
rattachable** — et il se traite de la même façon : `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un candidat gris non tranché
revient toujours par une autre porte.

---

# Ce qui n'est pas un chantier

**Les 31 sujets d'échafaudage jamais instruits** que `corpus:audit` liste en fin de sortie.
`src/content/fixtures/` est un pool à drainer, pas une source à enrichir ni une liste de
travail : ces fiches ont été écrites de mémoire pour construire les écrans, ne sont servies
qu'en développement, et portent une marque à l'écran. Un sujet ne s'instruit pas parce qu'il
y figure ; il s'y trouve remplacé quand la file l'amène.

**`corpus/rejected/`** est vide, et c'est normal.

---

# Pièges d'accès et de méthode, transversaux

Payés par les lots précédents. Les relire évite de les repayer.

**Persée sert le texte intégral, page par page.** L'identifiant se résout **en résolvant le
DOI**, jamais en devinant la forme de l'URL : un ISSN inventé rend 404. Le numéro de page
s'écrit sur quatre chiffres. `renderPage` sert les images en pleine résolution, ce qui lève la
réserve d'OCR là où l'on cite. Le PDF `docAsPDF` est derrière un défi anti-robot qui **ne se
résout pas**. Attention enfin à une anomalie de cache constatée par trois contrôleurs
indépendants : les premières requêtes peuvent rendre un article étranger, il faut rejouer.

**L'OCR ne suffit jamais pour citer.** Persée perd les apostrophes et les élisions, abîme les
accents en fin de ligne, et confond « organisationnel » avec « organisational ». Les
numérisations de masse d'Internet Archive ont des coquilles sur les guillemets. **Toute
citation se relit sur l'image de la page**, et une carte du dernier lot a eu raison contre la
couche texte pour cette seule raison.

**L'édition électronique d'Ashby met deux pages par feuillet**, dans un A4 portrait portant
`/Rotate 90`, l'impaire en haut et la paire en bas. C'est cette inversion, et non un défaut de
numérisation, qui fait croire à une extraction linéaire que les sections sont désordonnées.
Redressé et découpé, le texte redevient continu.

**La table des matières des actes de 1960 de Pergamon contredit ses propres folios**, constaté
trois fois indépendamment. Les paginations de ce volume se prennent sur les folios.

**Une autorisation d'ayant droit se constate, elle ne se déduit ni de l'âge du texte ni de
l'absence de restriction d'emprunt.** Le dernier lot a retiré les URL de six sources pour
cette raison, en gardant les références imprimées identifiées par leur numéro de catalogue de
la Bibliothèque du Congrès. Un contrôleur a ensuite résolu l'un de ces numéros contre le MARC
de la Bibliothèque du Congrès : **privée de son URL, la référence résout seule.** L'indice
contraire, l'absence de renouvellement de copyright dans la base de Stanford, est conservé
dans le verdict de `ordre-a-partir-du-bruit` : un renouvellement introuvable n'est pas un
renouvellement inexistant, et la question peut être rouverte sur pièce.

**Une traduction trouvée chez un tiers n'est pas la parole de l'auteur, même quand le tiers
est un auteur du corpus.** La version française de « order from noise » qui circule vient
d'Atlan 1972, qui réunit sous une seule référence une phrase de la page 43 et une réponse en
séance de la page 49, jointes par des points de suspension.

**Les outils `mcp__documentary__*` n'ont été exposés dans aucune session des cinq lots**, et
Zotero est resté inaccessible tout du long. Les vérifications de référence se font en direct
contre Crossref, l'entrepôt OAI de Persée, le MARC de la Bibliothèque du Congrès et
OpenLibrary. **OpenAlex a répondu « Insufficient budget » et Semantic Scholar en 429** : ce
que ces deux bases auraient fait remonter est inconnu, pas absent, et plusieurs cartographies
le signalent comme leur limite principale.

**OpenEdition Books sert des ouvrages entiers en texte intégral.** Voie découverte en cours de
lot sur la théorie de la mesure, où elle a débloqué l'ouvrage central du domaine. Plusieurs
francophones classés fermés dans les cartographies antérieures méritent d'y être retentés.
