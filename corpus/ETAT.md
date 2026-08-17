# État du corpus — 17 août 2026

Écrit sur le disque parce qu'une session a déjà été coupée en cours de route : ce fichier
existe pour qu'une reprise reparte des fichiers, et non de la mémoire de quelqu'un.

`npm run corpus:validate` : **9 enregistrements, 0 erreur, 0 avertissement, 0 validé.**

L'application n'affiche donc toujours aucune carte, et c'est correct : aucune fiche n'a
reçu les deux verdicts PASS du contrôleur aveugle qu'exige `checkGating()`.

---

## Le protocole a été allégé — à lire avant de reprendre

Le dispositif produisait **891 octets de matière documentaire par caractère affiché**, et
exigeait des champs que rien n'affiche. Deux fiches s'y sont perdues :
`rationalite-limitee` a épuisé ses trois tours sur un désaccord de classement dans
`conditions.appears_when`, et `couplage-lache` est resté candidat parce que sa chaîne
d'étapes ne passait pas un « test de suffisance » — alors que sa carte, elle, était
établie.

Ce qui a changé :

1. **Champs supprimés du schéma** : `evidence.mechanism`, `evidence.conditions`,
   `pedagogy.detailed_explanation`, `concrete_example`, `example_setting`,
   `analysis_questions`, `quiz`, `graph.difficulty`, `difficulty_rationale`. Aucun
   n'atteignait la carte ; les sept derniers servaient une session d'apprentissage que
   l'application avait déjà supprimée. Les neuf fiches ont été nettoyées en conséquence.
2. **Une seule passe de contrôle aveugle.** `npm run corpus:brief -- <id>` — sans
   `--pass` — rend un dossier unique portant preuve **et** prose. Le contrôleur tranche
   les deux questions en une lecture et remplit les deux verdicts. Le gating est
   inchangé : `evidence_review` et `pedagogy_review` doivent toujours être en PASS, et
   `no_new_claims` à `true`.

Ce qui n'a **pas** changé, et ne doit pas changer : citation verbatim et localisée sur une
source réellement ouverte, attribution confirmée, sources qui résolvent, deux tours de
correction au maximum.

---

## Ce qui bloque, en une phrase

**Les cartes sont écrites, la preuve est là, le contrôle n'est pas allé à son terme.**

La première session a perdu ses outils d'agent en cours de route (`SendMessage`, puis
`Agent`, puis `Edit`). La seconde a été coupée par une limite de session, en plein tour de
correction. Les fiches restent en `review/` avec `evidence_review` et `pedagogy_review` en
`PENDING`.

**Acquis du 17 août** — le contrôleur aveugle a rendu quatre verdicts, tous REWORK mais
tous confirmant le fond :

| fiche | attribution | source primaire | interprétation |
|---|---|---|---|
| `inertie-structurelle-et-selection` | confirmée | confirmée | fidèle |
| `isomorphisme-institutionnel` | confirmée | confirmée | fidèle |
| `organisation-genree` | confirmée | confirmée | fidèle |
| `regulation-controle-autonome` | confirmée | confirmée | trop large |

Les corrections correspondantes sont appliquées et versionnées, et `zones-incertitude` a
vu son attribution tranchée sur pièces. Aucune de ces fiches n'a encore repassé le
contrôle depuis correction : **c'est exactement là qu'il faut reprendre.**

---

## Les neuf enregistrements

### Prêts pour le contrôle aveugle — 4

Cartes composées le 17 août à partir de dossiers de preuve complets. Aucune ne dépasse les
limites d'affichage ; toutes portent une citation localisée, vérifiée en première main par
le lecteur primaire, avec son statut de traduction. **Les quatre ont été regardées à
l'écran** (Playwright, 375 × 667, parcours de navigation réel) : voir plus bas ce que ce
passage a corrigé.

| id | citation | longueurs (nom / accroche / résumé / citation) |
|---|---|---|
| `inertie-structurelle-et-selection` | oui, 134 c. | 33/48 · 78/85 · 166/170 · 134/150 |
| `isomorphisme-institutionnel` | oui, 120 c. | 27/48 · 80/85 · 153/170 · 120/150 |
| `organisation-genree` | oui, 134 c. | 19/48 · 73/85 · 168/170 · 134/150 |
| `regulation-controle-autonome` | oui, 111 c. | 45/48 · 82/85 · 161/170 · 111/150 |

**Prochain geste** : `npm run corpus:brief -- <id>`, puis `corpus-blind-reviewer` sur ce
seul dossier, sans rien lui transmettre d'autre.

Trois points à soumettre au contrôleur, parce qu'ils relèvent d'un arbitrage et non d'une
copie :

1. **`isomorphisme-institutionnel` — la citation n'est pas celle du dossier.** Le lecteur
   primaire a établi que la citation principale (p. 150, les trois mécanismes) n'admet
   *aucune* coupe honnête sous 150 caractères : toute élision supprime deux des trois
   antécédents. La carte porte donc un **autre passage**, tiré du résumé de l'article
   (p. 147), que le lecteur avait préparé et vérifié pour cet usage. Le locator dit bien
   « résumé de l'article », comme il le demandait.
2. **`isomorphisme-institutionnel` — le titre a été raccourci.** Le nom établi par le
   lecteur, « Isomorphisme institutionnel (coercitif, mimétique, normatif) », fait
   60 caractères pour 48 admis. Les trois mécanismes sont portés par le résumé.
3. **`regulation-controle-autonome` — une source primaire est sortie du dossier.**
   *Les règles du jeu* (Armand Colin, 1989) n'a ni DOI, ni ISBN, ni URL stable, et n'a pas
   été ouvert ; la recherche Crossref refaite le 17 août ne remonte que ses comptes rendus.
   Règle 2 de la hiérarchie documentaire. La référence est conservée dans
   `evidence._source_primaire_visee_non_atteinte` et la lacune est déclarée en
   `confidence_flags` : la fiche repose entièrement sur l'article de 1988.

### Sorti du lot, tours épuisés — 1

**`rationalite-limitee`** — passe A en PASS, passe B en REWORK aux trois tours. Voir le
bloc `_sortie_de_lot` de la fiche.

Le point à retenir dépasse cette fiche. Le contrôleur l'a renvoyée pour portée **trop
large**, puis, une fois corrigée, pour portée **trop étroite**. Il ne se contredit pas :
c'est le dossier de preuve qui envoie deux signaux incompatibles. La phrase de la p. 349
de la conférence Nobel — le domaine où l'argument plaide le *remplacement* de la théorie
classique en économie — est rangée dans `conditions.appears_when`, c'est-à-dire parmi les
conditions d'apparition du *phénomène*. Or le même texte écrit p. 353 : « The phenomenon
observed in Milwaukee is ubiquitous in human decision making. » Tant que cette phrase de
programme est classée comme condition d'apparition, le rédacteur qui suit le dossier
restreint la portée, celui qui suit le texte l'étend, et aucun des deux ne peut aboutir.

**La réparation est dans `corpus/evidence/rationalite-limitee/evidence.primary-reading.json`,
pas dans la prose.** Un dossier qui classe un énoncé de programme théorique parmi les
conditions d'apparition d'un phénomène produira la même oscillation sur n'importe quel
concept : c'est un point à vérifier à la lecture primaire, en amont.

### En attente d'un tour de correction — 3

Instruites lors d'un lot antérieur, elles n'ont pas été reprises ici : sans contrôleur
aveugle disponible, corriger une carte n'a aucun sens, puisque rien ne pourrait juger la
correction.

| id | où elle en est |
|---|---|
| `deplacement-des-buts` | passe A en PASS (2ᵉ tour) ; passe B tour 1 en REWORK, `no_new_claims: false`. Il lui reste un tour. |
| `garbage-can-model` | passe A en REWORK au tour 2. Verdict courant dans `corpus/review/garbage-can-model.verdict.json`. |
| `zones-incertitude` | passe A en REWORK, **`attribution: douteuse`**. À traiter en premier : une attribution non tranchée invalide la carte entière, il est inutile de corriger la prose avant. |

Historique complet des verdicts : `corpus/review/.history/`.

### Instruit mais non cartographiable — 1

**`couplage-lache`** → `corpus/candidates/`, avec `key_quotation: null`.

L'article fondateur (Weick, ASQ 21(1), 1976) n'a jamais pu être ouvert : quinze voies
d'accès essayées, aucune n'a rendu le texte. Tout ce que le dossier établit vient d'un
commentaire rétrospectif d'**une page** écrit treize ans plus tard, et le lecteur primaire
consigne lui-même que sa chaîne d'étapes « NE PASSE PAS le test de suffisance » —
conditions d'apparition, d'intensification et de disparition sont toutes en « NON ÉTABLI ».

Écrire la carte reviendrait à enseigner le commentaire de 1989 à la place de l'article de
1976. Le blocage et la voie de déblocage sont écrits dans
`_pourquoi_candidat_et_non_review`. **Le travail de réception, lui, est solide et n'est pas
à refaire** : attribution du texte à Weick seul, antériorité du terme chez Glassman (1973),
genèse collective revendiquée par Weick lui-même, et le fait que la définition citée
aujourd'hui comme « la » définition de Weick est en réalité celle d'Orton & Weick (1990).

---

## Ce que le passage à l'écran a appris

Les quatre cartes ont été ouvertes dans l'application (Playwright, Chromium, 375 × 667 —
l'écran sur lequel les longueurs sont calibrées), en n'empruntant que la navigation
qu'un lecteur emprunte : premier lancement, carte du jour, Explorer, Thèmes, fiche.

Un défaut de fond est apparu, qu'aucun comptage de caractères n'aurait montré.

> **La projection affiche certains champs du dossier tels quels — et ces champs sont
> écrits pour un contrôleur, pas pour un lecteur.**

Trois champs sont concernés, et le défaut s'est présenté trois fois de suite avant d'être
reconnu comme un seul :

| champ | ce qu'il contenait | effet à l'écran |
|---|---|---|
| `attribution.term_origin.coined_by` / `coined_in` | le raisonnement complet sur l'origine du terme, en trois strates | ligne d'attribution de **1 600 caractères** sur l'isomorphisme |
| `evidence.key_quotation.locator` | le pointeur **plus** le détail de vérification (coupure de page, relecture sur image et non sur OCR, phrase entière d'où la coupe est tirée) | jusqu'à **458 caractères** sous la citation |
| `evidence.primary_sources[].citation` | la notice **plus** la note de dossier | la source de Reynaud affichait le numéro thématique, la note liminaire et **l'adresse postale du CNAM** |

Les trois sont rangés : le pointeur et la notice restent dans le champ affiché, le
raisonnement passe dans `_locator_note`, `_citation_note` et `term_origin.note`, à côté,
où le contrôleur aveugle le retrouvera intact. **Rien n'a été supprimé.**

La leçon vaut pour la suite du corpus : un champ du dossier qui atterrit sur la carte doit
être écrit deux fois — une fois pour l'affichage, une fois pour la preuve. Ce n'est pas au
rédacteur de la carte de le découvrir source par source.

### Un défaut d'application, non corrigé

Sur les quatre cartes, **le nom de l'auteur s'affiche deux fois** sous la citation :

> Jean-Daniel Reynaud, Jean-Daniel Reynaud, « Les régulations dans les organisations… »

`buildQuotation()` (`scripts/corpus/lib/project.mjs`) rend `attributedTo` — le nom — puis
`reference`, construite à partir de `source.citation`, laquelle commence par convention par
ce même nom. Les deux sont justes séparément ; leur juxtaposition ne l'est pas.

Ce n'est pas un défaut de fiche et il n'a pas été corrigé ici : il touche la projection,
donc toutes les cartes à venir, et mérite une décision plutôt qu'un correctif discret.
Deux voies possibles — ne composer `reference` qu'avec le titre et le support, en laissant
`attributedTo` porter le nom ; ou n'afficher `attributedTo` que lorsqu'il diffère de
l'auteur de la source citée (cas d'un ouvrage collectif).

### `corpus:preview` écrit un fichier que rien ne lit

`npm run corpus:preview` produit `src/content/generated/concepts.preview.ts`, et **aucun
module de l'application ne l'importe** : la commande existe pour regarder une carte avant
son contrôle, mais il n'y a nulle part où la regarder.

Le branchement a été fait localement pour ce passage, puis retiré. Il n'a pas été conservé
parce qu'il n'est pas sûr en l'état : le fichier d'aperçu est ignoré par git, donc un import
statique casse le build sur un dépôt fraîchement cloné. Le rendre durable demande soit un
fichier d'aperçu vide versionné, soit un import dynamique, soit que `corpus:preview` écrive
toujours le fichier, fût-il vide.

---

## Les scripts de composition

`scripts/corpus/tmp-*.mjs` sont des scripts de circonstance, écrits parce que
`corpus-card-writer` n'était plus disponible. Ils sont conservés et référencés dans les
blocs `provenance` des fiches : ils disent exactement ce qui a été recopié des fragments et
ce qui a été rédigé à la main. Rien n'y est fabriqué — la seule partie rédigée est la table
`authored` de `tmp-compose.mjs` (périmètre, accroche, résumé, thèmes, difficulté).

Ils n'ont pas vocation à durer : le jour où la chaîne d'agents fonctionne à nouveau, c'est
`corpus-card-writer` qui écrit les cartes.
