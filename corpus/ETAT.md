# État du corpus — 17 août 2026

Écrit sur le disque parce qu'une session a déjà été coupée en cours de route : ce fichier
existe pour qu'une reprise reparte des fichiers, et non de la mémoire de quelqu'un.

`npm run corpus:validate` : **18 fiches, 17 validées, 0 erreur.**
`npm run corpus:build` : **17 cartes projetées vers l'application.**
`npm test` : **155 tests, 0 échec.**

**Deux domaines instruits sur onze déclarés** — la sociologie des organisations et la
théorie de la mesure. Les neuf autres sont configurés dans la taxonomie et n'ont pas de
corpus ; `corpus:audit` les affiche « en cours de constitution ».

| domaine | thèmes | cartes |
|---|---:|---:|
| Sociologie des organisations | 9 | 8 |
| Théorie de la mesure / KPI | 4 | 9 |

---

# I. Théorie de la mesure — premier lot, publié

Premier domaine ouvert après la sociologie des organisations, et donc le premier à passer
par la procédure d'ouverture inscrite dans `corpus/perimeter.md` : le périmètre s'écrit, le
scout cartographie, **puis** les thèmes se déclarent, puis les concepts s'instruisent.
L'ordre compte — les neuf thèmes de la sociologie ont été posés de mémoire avant toute
lecture, et le périmètre le reconnaît lui-même comme un découpage a priori.

## Les neuf cartes

| id | thème | auteur·rice | tours |
|---|---|---|---:|
| `signification-et-invariance` | Échelles et nombres | Suppes, Zinnes | 0 |
| `echelles-de-mesure` | Échelles et nombres | Stevens | 0 |
| `quantifier-convenir-et-mesurer` | La quantification comme opération | Desrosières | 0 |
| `nombres-et-emotions` | La quantification comme opération | Didier | 0 |
| `loi-de-campbell` | Ce que la mesure fait au mesuré | Campbell | 0 |
| `reactivite-des-classements` | Ce que la mesure fait au mesuré | Espeland, Sauder | 1 |
| `mesure-devenue-cible` | Ce que la mesure fait au mesuré | Strathern | 2 |
| `performance-totale` | Audit, évaluation, reddition de comptes | Jany-Catrice | 1 |
| `gouvernement-par-les-chiffres` | Audit, évaluation, reddition de comptes | Bruno, Didier | 2 |

Aucune fiche perdue. **Quatorze passages de contrôle aveugle**, tous indépendants, aucun
contrôleur informé de ceux qui l'avaient précédé.

Deux résultats que `perimeter.md` demande de surveiller, obtenus sans qu'aucun quota ait été
appliqué : **quatre cartes sur neuf sont francophones**, et **quatre portent une signature
féminine** (Jany-Catrice, Bruno, Espeland, Strathern).

## Ce que le contrôle a réellement attrapé

| question | résultat sur neuf fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 9/9 dès le premier passage |
| sources qui résolvent | 9/9 dès le premier passage |
| prose fidèle aux sources | 9/9 dès le premier passage |
| attribution | 7/9, deux renvois |

**Tous les renvois portaient sur l'attribution, aucun sur autre chose.** C'est cohérent avec
ce que le champ contient : dans un domaine dont les énoncés circulent sous forme de « lois »
baptisées après coup, « qui a écrit ça » est le point faible structurel. Le dispositif l'a
trouvé sans qu'on le lui indique.

## Trois enseignements de méthode, à ne pas perdre

**1. Un `PASS` ne garantit pas que chaque mot de la carte soit exact.** Les quatre questions
du contrôle sont volontairement étroites : elles demandent si la carte *excède ses sources*,
pas si chaque énoncé est juste. Deux fiches de ce lot portaient une erreur de fait sur un
champ affiché — la « qualité totale » attribuée à Dejours, qui en est le critique ; Strathern
qui « ne cite pas une seule fois » Goodhart, qu'elle nomme pourtant dans le paragraphe de la
citation. **Les deux ont été trouvées par des contrôleurs qui rendaient `PASS`**, et
signalées hors de leur mandat. Cette consigne devrait entrer dans la définition de
`corpus-blind-reviewer` : *si une phrase affichée dit quelque chose de factuellement
inexact, l'écrire explicitement, quitte à rendre `PASS`.*

**2. L'indépendance produit ce que la profondeur ne produit pas.** Une vérification dédiée a
été lancée sur la seule question de la paternité de « When a measure becomes a target… ».
Trente-deux appels d'outils, HathiTrust, Open Library, Internet Archive, Google Books ;
conclusion « Strathern » ; et une réserve honnête — une phrase du début du chapitre de
Hoskin jamais affichable depuis son commencement. Cette réserve contenait la réponse. Le
contrôleur aveugle, qui ne savait rien de tout cela, a trouvé le chapitre entier en PDF
ailleurs, et la formulation équivalente en était la première ligne. **Il n'a pas cherché
mieux : il a cherché ailleurs.**

**3. Une absence ne vaut que ce que vaut sa couverture.** La vérification ci-dessus avait
cherché six formulations, n'en avait trouvé aucune, et avait rendu ces zéros interprétables
en jouant des témoins positifs sur le même moteur dans la même minute. La méthode était
bonne et la conclusion fausse : Hoskin écrit « every measure which becomes a target becomes
a bad measure », qu'aucune des chaînes cherchées ne recoupait. *Une absence de correspondance
littérale n'est pas une absence de formulation équivalente.* La note en est conservée sur la
fiche `mesure-devenue-cible`.

## Réserves conservées, fiche par fiche

Elles sont dans le champ `notes` de chaque carte, en clair.

- **`echelles-de-mesure`** — la définition la plus citée du texte s'ouvre par « Paraphrasing
  N. R. Campbell » : toute coupe sous 150 caractères retire ce crédit. Stevens écrit
  « numerals », non « numbers ». Il ne **proscrit** aucune opération — la lecture prescriptive
  qui circule est un durcissement postérieur. Michell 1986, qui conteste la typologie, est en
  `metadata-only` : `is_oa: false`, aucun dépôt ouvert.
- **`signification-et-invariance`** — le texte ouvert est le rapport technique Stanford de
  1962, non le chapitre publié de 1963, dont la pagination diffère. Les auteurs rangent
  eux-mêmes la signification parmi les problèmes qu'ils disent non centraux. Le résumé écrit
  « si » là où la définition écrit « si et seulement si » — écart qui affaiblit, non qui
  étend.
- **`quantifier-convenir-et-mesurer`** — la formule n'est pas dans l'article de 2003
  qu'on lui prête souvent ; elle est dans l'ouvrage de 2008. L'intertitre écrit « convenir
  **puis** mesurer », le corps « convenir **et** mesurer » : les deux sont de lui, sur la
  même page. 2008 n'est pas une date de première formulation — une note renvoie à un texte
  de 2007 non ouvert.
- **`nombres-et-emotions`** — le dépôt est une version auteur acceptée, sans la pagination
  de la revue ; le locator le dit. Deux millésimes coexistent, 2024 en ligne et 2025 imprimé.
  Le mot « statactivisme » n'apparaît pas dans l'article.
- **`loi-de-campbell`** — la republication ouverte est celle du document de décembre 1976,
  **non** de l'article de 1979, qui reste payant et non ouvert. L'énoncé complet porte deux
  versants ; la carte n'en garde qu'un, faute de coupe honnête sous 150 caractères. Campbell
  ne baptise rien : il écrit « laws » au pluriel, restreint à la scène américaine.
- **`reactivite-des-classements`** — la réactivité leur vient de Campbell et de Heimer, et
  ils le disent ; leur apport est le cadre à deux étages.
- **`mesure-devenue-cible`** — la formule resserre celle de Hoskin, elle ne la crée pas.
- **`performance-totale`** — l'ouvrage de 2012, qui porte l'énoncé le plus large, n'a pas pu
  être ouvert ; la carte repose sur l'article.
- **`gouvernement-par-les-chiffres`** — le livre coécrit de 2013 n'a pas été ouvert ; la
  cosignature repose sur le renvoi explicite de l'article solo, corroboré par l'introduction
  du livre publiée en accès libre. `id` et `slug` divergent volontairement depuis le
  retitrage du tour 2.

## Ce qui reste à reprendre sur ce lot

Aucun de ces points n'est bloquant ; tous sont documentés par un contrôleur.

- **`mesure-devenue-cible`** — la note écrit « c'est Hoskin qui la nomme "loi de Goodhart" ».
  Hoskin ne se présente pas en baptiseur : il donne le nom pour déjà en circulation
  (« is becoming recognized as one of the overriding laws of our times ») et renvoie la
  définition d'origine à Goodhart. Formulation plus sûre, proposée par le contrôle : *« c'est
  par Hoskin que Strathern reçoit le nom »*. Non appliquée : la fiche est au second de ses
  deux tours, et l'énoncé n'est pas faux.
- **`mesure-devenue-cible`** — le libellé de la source Hoskin tronque le sous-titre
  (« inscribing people into the measurement of objects »). Le « chap. 14 » n'a pas pu être
  vérifié sur une table des matières.
- **`reactivite-des-classements`** — la note donne une initiale que la bibliographie de
  l'article n'écrit pas ; le locator primaire s'arrête une page avant la fin de la section
  qu'il désigne.
- **`performance-totale`** — la collection s'écrit « Capitalisme**s** » chez l'éditeur ; la
  seconde source pourrait porter son ISBN en plus de son URL.

## Angles morts de la cartographie

Ils sont détaillés dans `corpus/map/measurement-theory.scouting.md` et alimentent le
prochain lot de ce domaine.

- **Trois auteurs majeurs sont dehors faute d'accès** : Michael Power (*The Audit Society*)
  et Theodore Porter (*Trust in Numbers*), en prêt numérique contrôlé sur Internet Archive ;
  Alain Supiot (*La gouvernance par les nombres*), dont cinq comptes rendus ont été trouvés
  et jamais le texte. Steven Kerr, Miller & O'Leary, Espeland & Stevens : `is_oa: false`.
- **Deux littératures que le périmètre demandait de balayer n'ont produit aucun candidat
  ouvrable** : la mesure de la performance en santé (Donabedian) et la mesure du bien-être.
  Elles n'ouvrent donc aucun thème — *un thème sans carte ne se déclare pas*.
- **Une voie d'accès découverte en cours de lot** : OpenEdition Books sert des ouvrages
  entiers en texte intégral. La cartographie l'ignorait, et c'est elle qui a débloqué
  Desrosières. Plusieurs francophones classés fermés méritent d'y être retentés.
- **La cartographie devrait être refaite** : elle a tourné sans OpenAlex ni Semantic Scholar
  (voir plus bas), et ses requêtes partaient nécessairement de noms déjà connus — limite que
  le scout signale lui-même.

---

# II. Sociologie des organisations — inchangée

Les huit cartes publiées et leurs réserves n'ont pas bougé depuis la refonte du format. Le
dispositif produisait alors **171 624 caractères d'enregistrement pour 600 caractères
affichés** et n'avait jamais publié une seule fiche : les huit étaient bloquées en
correction, et **aucun blocage ne portait sur leur carte**. Le format a été ramené à la
carte ; les enregistrements complets sont conservés entiers dans `corpus/dossiers/`, et
chaque fiche y renvoie par son champ `dossier`.

| id | thème | auteur |
|---|---|---|
| `deplacement-des-buts` | Bureaucratie et règles | Merton |
| `garbage-can-model` | Décision | Cohen, March, Olsen |
| `inertie-structurelle-et-selection` | Changement organisationnel | Hannan, Freeman |
| `isomorphisme-institutionnel` | Changement organisationnel | DiMaggio, Powell |
| `organisation-genree` | Organisation réelle vs formelle | Acker |
| `rationalite-limitee` | Décision | Simon |
| `regulation-controle-autonome` | Organisation réelle vs formelle | Reynaud |
| `zones-incertitude` | Pouvoir | Crozier, Friedberg |

Réserves conservées : `garbage-can-model` cite la rétrospective de 2012, l'article de 1972
n'ayant jamais pu être ouvert ; `rationalite-limitee` décrit un des trois procédés que Simon
range sous la rubrique ; `regulation-controle-autonome` repose entièrement sur l'article de
1988, *Les règles du jeu* n'ayant ni DOI, ni ISBN, ni URL stable ; `zones-incertitude`
coattribue à Friedberg sur la réception de *L'Acteur et le système*, non ouvert ;
`isomorphisme-institutionnel` cite le résumé de l'article, le passage des trois mécanismes
n'admettant aucune coupe honnête sous 150 caractères.

**Trois thèmes restent sans aucune carte** : `autorite-domination`,
`reaction-insatisfaction`, `apprentissage-organisationnel`. Weber, Hirschman et Argyris n'ont
encore aucun concept instruit.

## Le candidat qui doit rester sans carte

**`couplage-lache`** — l'article fondateur (Weick, ASQ 21(1), 1976) n'a jamais pu être
ouvert : quinze voies d'accès essayées. Tout ce que le dossier établit vient d'un commentaire
rétrospectif d'une page écrit treize ans plus tard. Écrire la carte reviendrait à enseigner le
commentaire de 1989 à la place de l'article de 1976. C'est le cas d'école du critère
d'entrée : **pas de source primaire ouvrable, pas de fiche.** Les sept avertissements de
`corpus:validate` portent tous sur cette fiche, et c'est normal — elle porte encore ses notes
d'instruction.

---

# III. Ce qui reste ouvert, tous domaines confondus

## Environnement d'exécution

Ces limites ont pesé sur tout le lot et se reproduiront si rien ne change.

- **OpenAlex** : échec sur toute la session (relais du proxy, `dailyRemainingUsd: 0`).
- **Semantic Scholar** : 429 systématique, faute de `SEMANTIC_SCHOLAR_API_KEY`.
- **Zotero local** : injoignable depuis un conteneur distant (`localhost:23119`). Il contient
  peut-être plusieurs des ouvrages classés « métadonnées seules » ci-dessus.
- **Le serveur MCP `documentary` n'était pas exposé aux sous-agents**, malgré `.mcp.json`.
  Tous ont basculé sur Crossref, HAL, Unpaywall et Internet Archive en direct. Cela a
  fonctionné, mais ce n'est pas ce que l'architecture prévoit — à regarder.
- **`poppler-utils` était absent** : aucun PDF n'était lisible. Installé en cours de session.
  Six des neuf textes du lot étaient des PDF.
- `CORPUS_CONTACT_EMAIL` remettrait OpenAlex dans son *polite pool*, au prix de transmettre
  une adresse personnelle à chaque requête. Décision non prise.

## Produit

- **Sept auteurs affichés sans page** dans `src/content/authors.ts` : Acker, Reynaud, Hannan
  et Freeman, DiMaggio et Powell, et désormais les neuf du nouveau domaine. Leurs cartes
  s'affichent par leur nom et sont atteignables par les thèmes ; leur donner une page demande
  une notice biographique, donc une instruction.
- **31 sujets d'échafaudage jamais instruits** (`src/content/fixtures/`). Ce sont des pistes,
  pas une dette : ces fiches ont été écrites de mémoire, avant tout dispositif de
  vérification, et ne servent jamais de point de départ.
- **Le bouton « Approfondir »** ouvre désormais un texte écrit à l'avance, et non plus le
  presse-papiers. Voir la section IV ci-dessous. Le passage de relais vers une IA existe
  toujours, en bas de ce texte.

## Une note d'exactitude sur l'historique

Un message de commit de cette session affirme que les dossiers aveugles produits par
`corpus:brief` sont versés au dépôt. C'est faux : `.gitignore` les exclut délibérément, ce
sont des artefacts régénérables. Seuls les **verdicts** sont versionnés, dans
`corpus/review/verdicts/`.

---

# IV. Les approfondissements — second étage du dispositif

`npm run corpus:deepen` : **32 cartes validées, 32 approfondissements projetés, 53 243 mots.**
Le corpus est complet : aucune carte n'est servie sans son texte.

Un approfondissement est le texte d'environ 1 500 mots qu'affiche « Approfondir ». Il vit
dans `corpus/deepenings/<id>.json`, il est écrit une fois hors ligne, contrôlé, puis projeté
comme le reste. **L'application ne parle à aucun modèle** : elle est exportée en statique, et
le texte affiché existait avant le clic. C'est ce qui permet qu'il ait été relu.

## Ce que le contrôle tient, et ce qu'il ne tient pas

`corpus:deepen` refuse : un texte sans carte validée, un titre qui étiquette un palier de
difficulté au lieu de nommer son sujet, du Markdown rendu tel quel, un tiret cadratin, un
champ `limits` rempli de précautions sans objet, un volume hors bornes.

Il **avertit** sur les citations : chaque passage entre guillemets de cinq mots ou plus est
comparé à l'enregistrement validé de la carte, sérialisé tel quel. Averti et non bloquant,
parce que les guillemets français servent aussi à mettre un mot en relief : un contrôle
bloquant sur cette ambiguïté ferait retirer les guillemets plutôt que vérifier les citations.

Ce qu'il ne peut pas tenir, ce sont les quatre exigences documentaires elles-mêmes. Elles se
lisent. Le protocole les porte : `corpus/deepenings/PROTOCOLE.md`.

## Ce que les textes pèsent, et pourquoi cela ne se voit pas

356 Ko de matière, soit quatre fois et demie le corpus des cartes. C'est la raison de la
projection en **deux fichiers** : les textes d'un côté, leurs seuls identifiants de l'autre.
Mesuré sur la construction, la page d'accueil charge dix scripts et aucun ne porte les
textes ; l'écran d'approfondissement est le seul à référencer ce chunk. Le jour où un écran
quelconque importerait `deepenings.generated`, ces 340 Ko partiraient avec lui sans qu'aucun
test ne le dise : c'est `hasDeepening` qu'il faut appeler, jamais le module des textes.

## Ce que le premier lot a appris

**Le contrôle des citations a attrapé un cas sur les huit premiers textes, et un seul.** Un
point final ajouté à l'intérieur des guillemets d'un passage de Coutarel, dans
`marge-de-manoeuvre`. Aucune citation fabriquée, sur aucun texte. C'est le résultat qui
comptait : la matière citable vient des `notes` et du bloc `review` des fiches, qui portent
les verbatim relevés pendant l'instruction, et les rédacteurs s'y sont tenus.

**Le champ `consulted` fait tout le travail.** `full-text` autorise à parler du contenu d'une
source ; `metadata-only` n'établit que son existence. Les `limits` des textes produits le
reprennent presque systématiquement, et c'est là qu'ils sont le plus utiles : ils nomment
l'édition non ouverte, la traduction interne, le nom de réception sans date d'apparition.

**Trois défauts trouvés dans l'outillage lui-même**, tous par les tests, aucun par la
relecture : le motif qui refuse les titres de fonction ne connaissait que l'apostrophe
droite, quand le corpus impose la typographique, si bien qu'il ne se déclenchait sur rien ;
une citation coupée par `[…]` était comparée entière, crochets compris, donc toujours
signalée à tort ; et le retour depuis l'écran d'approfondissement remontait vers
`/explore/concept` sans son `?c=`, c'est-à-dire vers l'écran « introuvable », pour toute
arrivée directe.

## Comment on relance

`/corpus-deepen`, qui lance un agent `corpus-deepener` par carte. Les agents écrivent en
parallèle et ne projettent jamais : ils contrôlent leur seul fichier avec
`npm run corpus:deepen -- --check --only=<id>`. La projection est faite une fois, à la fin.

La file de travail n'est pas tenue de mémoire : `npm run corpus:deepen` affiche en fin de
sortie les cartes validées qui n'ont pas encore de texte.
