# État du corpus — 17 août 2026

Écrit sur le disque parce qu'une session a déjà été coupée en cours de route : ce fichier
existe pour qu'une reprise reparte des fichiers, et non de la mémoire de quelqu'un.

`npm run corpus:validate` : **9 fiches, 8 validées, 0 erreur.**
`npm run corpus:build` : **8 cartes projetées vers l'application.**

L'application affiche donc une carte par jour, et les huit sont atteignables depuis
Explorer → Thèmes → concept.

---

## Ce qui a changé, et pourquoi

Le dispositif produisait **171 624 caractères d'enregistrement pour 600 caractères
affichés**, et n'avait jamais publié une seule fiche. Les huit fiches instruites étaient
toutes bloquées en correction — et **aucun des blocages ne portait sur leur carte** :
`traceability` renvoyant à un champ supprimé du schéma, `difficulty_rationale`,
`common_misinterpretations`, la manière de citer une source francophone dans le dossier. Les
six verdicts rendus concluaient tous `attribution : confirmée`, `source primaire :
confirmée`, `sources : concordantes`.

Le format a donc été ramené à la carte. Ce qui a été supprimé du schéma : `evidence`
(définition, mécanisme, sources détaillées, notes de traduction, ambiguïtés, contresens,
limites, réception), `scope`, `attribution.term_origin`, `pedagogy.traceability`, `graph`
(relations, prérequis, difficulté), `validation.confidence_flags`, `provenance`. Aucun
n'atteignait le lecteur.

Ce qui n'a **pas** changé, et ne doit pas changer : citation verbatim et localisée sur une
source réellement ouverte, attribution confirmée, références qui résolvent, prose qui
n'ajoute rien, deux tours de correction au maximum.

**Rien n'a été détruit.** Les neuf enregistrements complets sont dans `corpus/dossiers/`,
entiers, et chaque fiche y renvoie par son champ `dossier`.

Effet mesuré sur les fiches :

| fiche | avant | après |
|---|---:|---:|
| `zones-incertitude` | 159 587 | 5 834 |
| `regulation-controle-autonome` | 138 093 | 4 306 |
| `rationalite-limitee` | 136 302 | 6 973 |
| `organisation-genree` | 135 115 | 4 223 |
| `isomorphisme-institutionnel` | 129 942 | 6 407 |
| `inertie-structurelle-et-selection` | 105 745 | 4 928 |
| `garbage-can-model` | 108 303 | 5 166 |
| `deplacement-des-buts` | 89 057 | 5 216 |

La chaîne d'agents passe de sept à quatre : `corpus-cartographer` et
`corpus-reception-analyst` sont supprimés, leur production n'atteignant pas la carte.

---

## Les huit cartes publiées

Toutes portent une citation verbatim, localisée, vérifiée en première main par le contrôleur
aveugle, avec son statut de traduction. Toutes tiennent sur un écran de 375 × 667 sans
défiler (vérifié au navigateur, les huit).

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

### Corrections d'affichage appliquées à la migration

Quatre seulement touchaient un champ affiché. Chacune est motivée dans le champ `notes` de
sa fiche, en citant la note du contrôleur qui la fonde.

- **`isomorphisme-institutionnel`** — l'accroche disait « organisations **concurrentes** »,
  que l'article contredit p. 147 (« less and less driven by competition ») ; le résumé disait
  « imitation » là où le texte dit *modeling*, réduction que la fiche rangeait elle-même
  parmi les contresens.
- **`rationalite-limitee`** — l'accroche énumérait deux défaillances de l'omniscience sur
  trois, en laissant tomber la borne externe (l'incertitude du monde) ; le résumé posait
  « les options se cherchent » comme une propriété, alors que Simon l'énonce sous condition.
- **`zones-incertitude`** — la note d'attribution, composée automatiquement, datait de 1960
  une coécriture avec Friedberg attestée en 1979. Elle est désormais écrite en toutes
  lettres.
- **Toutes** — les `locator` de source portaient le pointeur *et* le détail de vérification,
  jusqu'à 889 caractères affichés sous une source. Ramenés au pointeur ; le validateur les
  plafonne désormais à 40 caractères.

### Réserves conservées, fiche par fiche

Elles sont dans le champ `notes` de chaque carte, en clair :

- **`garbage-can-model`** — l'article fondateur de 1972 n'a jamais pu être ouvert. La
  citation vient de la rétrospective de 2012 signée des trois mêmes auteurs, lue
  intégralement, et le locator le dit.
- **`rationalite-limitee`** — le résumé décrit un des trois procédés que Simon range sous la
  rubrique (p. 354), celui qu'il privilégie lui-même (p. 356). Il n'épuise pas le concept.
- **`regulation-controle-autonome`** — *Les règles du jeu* (1989) n'a ni DOI, ni ISBN, ni URL
  stable et n'a pas été ouvert. La fiche repose entièrement sur l'article de 1988.
- **`zones-incertitude`** — la coattribution à Friedberg ne repose pas sur le terme mais sur
  la réception de *L'Acteur et le système* (1977), non ouvert.
- **`isomorphisme-institutionnel`** — la citation n'est pas le passage des trois mécanismes
  (p. 150), qui n'admet aucune coupe honnête sous 150 caractères ; c'est celui du résumé de
  l'article, p. 147.

---

## Le seul candidat restant

**`couplage-lache`** — sans carte, et il doit le rester en l'état.

L'article fondateur (Weick, ASQ 21(1), 1976) n'a jamais pu être ouvert : quinze voies
d'accès essayées, aucune n'a rendu le texte. Tout ce que le dossier établit vient d'un
commentaire rétrospectif d'**une page** écrit treize ans plus tard. Écrire la carte
reviendrait à enseigner le commentaire de 1989 à la place de l'article de 1976.

Le travail de réception, lui, est solide et n'est pas à refaire : attribution du texte à
Weick seul, antériorité du terme chez Glassman (1973), genèse collective revendiquée par
Weick lui-même, et le fait que la définition citée aujourd'hui comme « la » définition de
Weick est en réalité celle d'Orton & Weick (1990).

C'est le cas d'école du critère d'entrée : **pas de source primaire ouvrable, pas de fiche**,
et cela se décide au scout, avant que la chaîne n'ait rien dépensé.

---

## Ce qui reste ouvert

- **Trois thèmes sans aucune carte** : `autorite-domination`, `reaction-insatisfaction`,
  `apprentissage-organisationnel`. Weber, Hirschman et Argyris n'ont encore aucun concept
  instruit.
- **Quatre auteurs affichés sans page** : Acker, Reynaud, Hannan et Freeman, DiMaggio et
  Powell. Leurs cartes s'affichent par leur nom et sont atteignables par les thèmes ; leur
  donner une page dans `src/content/authors.ts` est une décision de produit, qui demande une
  notice biographique — donc une instruction.
- **31 sujets d'échafaudage jamais instruits** (`src/content/fixtures/`). Ce sont des pistes,
  pas une dette : ces fiches ont été écrites de mémoire, avant tout dispositif de
  vérification, et ne servent jamais de point de départ.
- **Le bouton « Approfondir »** partage la carte et son prompt vers une IA. Le mécanisme de
  partage lui-même reste à reprendre : c'est une conversation à avoir, pas un détail
  d'implémentation.
