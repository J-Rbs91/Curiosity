# Audit — navigation, hiérarchie et fatigue de lecture

Conduit avec la méthode du plugin UXER : audit de navigation (dix-neuf contrôles), grille de
diagnostic visuel (onze dimensions), règles de gravité et contrôles d'accessibilité opposables.
Aucune plateforme d'inspiration externe n'a été consultée — les constats viennent du corpus de
méthode local, de la lecture du code, et **de mesures faites sur le rendu réel**.

**Comment les chiffres ont été obtenus.** `npm run build`, export statique servi en local, puis
Chromium piloté sur trois formats (375×667, 390×844, 430×932). Les tailles, graisses, couleurs,
interlignes, positions et hauteurs de cible citées ici sont des valeurs calculées lues sur le
document, pas des valeurs lues dans le code. Là où une valeur du code diffère de la valeur
rendue — c'est le cas pour au moins une graisse —, c'est la valeur rendue qui fait foi.

---

## Contexte

| | |
|---|---|
| Utilisateur | Adulte curieux, non spécialiste des disciplines couvertes |
| Tâche principale | Rencontrer un concept et le comprendre ; secondairement, aller chercher un concept par son domaine, son thème ou son auteur |
| Fréquence | Quotidienne et brève — une ou deux ouvertures, quelques minutes |
| Contexte | Téléphone, une main, souvent en déplacement. PWA installable, tout en local |
| Corpus au moment de l'audit | 11 domaines déclarés, 1 pourvu · 9 thèmes · 8 concepts |

Le cadrage de l'étape 1 de la méthode n'a pas été refait : [`ux-direction.md`](ux-direction.md)
le porte déjà et il est à jour. Cet audit part donc directement de l'inspection.

## Tâche principale

Ouvrir l'application, lire une carte, la comprendre — et, quand l'envie vient, descendre dans
le corpus par les domaines pour en trouver une autre.

---

## Ce que l'audit confirme du constat initial

> « La hiérarchie visuelle des différents domaines et familles n'est pas terrible. Les
> interlignes et les espaces sont les mêmes, ça manque de cloisonnement. »

Le constat est exact, et il se mesure. Sur `/explore` en vue « Domaines », les trois écarts
verticaux qui doivent se distinguer les uns des autres valent :

| Écart | Ce qu'il doit dire | Valeur mesurée |
|---|---|---|
| Bloc d'en-tête de famille → sa première ligne de domaine | « ces domaines appartiennent à cette famille » | **32 px** |
| Ligne de domaine → ligne de domaine | « ce sont des frères » | **36 px** |
| Dernière ligne d'une famille → en-tête de la suivante | « on change de famille » | **64 px** |

Deux choses en découlent, et ce sont exactement les deux moitiés du constat.

**L'ancrage ne se voit pas.** L'en-tête est à 32 px de sa première ligne, les lignes sont à
36 px les unes des autres : 4 px d'écart, imperceptibles. Rien ne dit visuellement que
l'en-tête commande la liste qui suit — il se lit comme une ligne de plus.

**Le cloisonnement ne tient pas.** La règle de proximité veut que l'écart entre deux groupes
soit **au moins le double** de l'écart intra-groupe. Ici : 64 / 36 = **1,78**. Sous le seuil,
et sans aucun autre séparateur — ni filet, ni surface, ni retrait — pour compenser. Quatre
familles et onze domaines se lisent donc comme une seule liste continue de quinze éléments.

À quoi s'ajoute une inversion que la mesure a révélée et que l'œil ne sait qu'attribuer à un
malaise général : **la question de famille et le nom de domaine sont rendus au même poids et
dans la même couleur.**

| | Taille | Graisse rendue | Couleur | Famille |
|---|---|---|---|---|
| Question de famille (`FamilyList`) | 19 px | **500** | `#ededed` | Source Serif 4 |
| Nom de domaine (`ListRow`) | 17 px | **500** | `#ededed` | Inter |

Deux pixels séparent un niveau 1 de son niveau 2, à graisse et à couleur identiques. La
graisse de la question est déclarée à 400 dans le code, mais `next/font` ne charge la Source
Serif qu'en 500, 600 et 700 : le navigateur rend la demande de 400 avec la fonte 500 — vérifié
en mesurant la largeur d'une même phrase aux quatre graisses (417 px en 400 comme en 500,
430 px en 600). La hiérarchie voulue n'existe donc pas dans le rendu.

Et il y a onze noms de domaine pour quatre questions. Au test du plissement d'yeux, ce n'est
pas la question qui domine sa famille : c'est la masse des lignes qui la composent.

---

# Problèmes constatés

Quatorze entrées, groupées par nature. Chacune porte sa gravité, sa recommandation et son
critère de validation — une entrée d'audit sans critère observable n'est pas terminée.

---

## A — Fatigue de lecture

### A1. Le lecteur ne peut agrandir aucun texte, par aucun moyen

**Constat.** Deux mécanismes existent pour agrandir un texte sur téléphone. Aucun ne
fonctionne ici.

- Le zoom par pincement est bloqué : `src/app/layout.tsx` déclare `maximumScale: 1`, servi
  tel quel — `<meta name="viewport" content="width=device-width, initial-scale=1,
  maximum-scale=1">`.
- La préférence de taille de police du navigateur n'agit pas : les tailles de contenu sont
  écrites en pixels (`text-[17px]`, `text-[15px]`, `text-[13px]`…), unité qui ne s'indexe sur
  rien.

Vérifié en portant la police par défaut du navigateur de 16 à 24 px sur `/explore` :

| Élément | Unité | 16 px | 24 px |
|---|---|---|---|
| Onglet « Domaines » | `text-sm` (rem) | 14 px | **21 px** |
| Barre de navigation | `text-xs` (rem) | 12 px | **18 px** |
| Libellé de famille | `text-[13px]` | 13 px | **13 px** |
| Question de famille | `text-[19px]` | 19 px | **19 px** |
| Nom de domaine | `text-[17px]` | 17 px | **17 px** |

Le résultat est pire que si rien ne réagissait. Seuls les quelques utilitaires Tailwind restés
en rem grossissent — c'est-à-dire **le chrome, jamais le contenu**. À 24 px, l'étiquette de la
barre de navigation (18 px) est plus grosse que l'intitulé de famille (13 px) et rejoint le nom
de domaine (17 px) : la hiérarchie s'inverse. Et le sélecteur d'onglets déborde, le pastille
blanche gardant une largeur fixe de `calc((100% - 0.5rem) / 3)` pendant que son libellé grossit.

**Impact.** Une personne dont la vue baisse — c'est-à-dire, à terme, tout le monde — ne dispose
d'aucun levier sur une application dont l'unique fonction est de lire. Elle abandonne, ou lit
en fatigue.

**Gravité : bloquant.** Violation de WCAG 1.4.4 *Resize text* (AA), et exclusion d'une catégorie
d'utilisateurs de la tâche principale.

**Recommandation.** Retirer `maximumScale`. Exprimer les tailles de texte en `rem`, ce qui les
rattache à la préférence du lecteur ; le rapport entre les niveaux ne change pas, seul le point
d'ancrage devient réglable.

**Modification technique.** `src/app/layout.tsx` — supprimer `maximumScale: 1` du `viewport`.
Puis remplacer les tailles littérales en px par une échelle en rem déclarée une fois dans
`globals.css` (voir B4). Rendre le sélecteur d'onglets robuste : indicateur positionné sur la
cellule active plutôt que sur une fraction calculée de la largeur.

**Critère de validation.** À 200 % de zoom navigateur et à police par défaut 24 px, sur 375 px
de large : aucun texte tronqué, aucun débordement du sélecteur, et le rapport entre l'intitulé
de famille et le nom de domaine inchangé.

---

### A2. Sur la carte du jour, le texte courant descend à 13 px et les libellés à 9,7 px

**Constat.** `CARD_SCALE` vaut `clamp(0.78rem, 0.105rem + 1.695vh, 1rem)` : toute la carte est
exprimée en `em` de cette base, qui est **une fonction de la hauteur du viewport et de rien
d'autre**. Mesures sur la carte « Modèle de la poubelle » :

| Élément | 375×667 | 390×844 | 430×932 |
|---|---|---|---|
| Libellé de thème (`0.75em`) | **9,7 px** | 12,0 px | 12,0 px |
| Citation (`1.05em`) | 13,6 px | 16,8 px | 16,8 px |
| Référence de la citation (`0.75em`) | **9,7 px** | 12,0 px | 12,0 px |
| Accroche (`1.15em`) | 14,9 px | 18,4 px | 18,4 px |
| **Résumé — le texte qu'on vient lire** (`1em`) | **13,0 px** | 16,0 px | 16,0 px |
| Auteur (`0.94em`) | 12,2 px | 15,0 px | 15,0 px |
| Notices de sources (`0.8em`) | **10,4 px** | 12,8 px | 12,8 px |

Un écran de 667 points n'est pas un cas limite : c'est l'iPhone SE et l'iPhone 8, et c'est
précisément l'écran sur lequel les plafonds de longueur du corpus ont été calibrés.

Deux remarques sur le mécanisme lui-même. La base ne dépend que de la hauteur du viewport,
jamais de la hauteur réelle du contenu : une carte courte est rétrécie exactement autant qu'une
carte maximale. Et le bouton « Approfondir » est le seul élément à taille fixe (15 px) au milieu
d'un bloc qui, lui, se met à l'échelle — il grossit relativement au texte à mesure que l'écran
rapetisse.

**Impact.** L'écran vu tous les jours, celui qui porte toute la valeur du produit, est celui où
l'on lit le plus petit. Sur un écran de 667 points, la référence bibliographique et le libellé
de thème passent sous le seuil de lecture confortable de la plupart des lecteurs.

**Gravité : important.** La tâche reste possible, elle coûte plus cher.

**Recommandation.** Relever le plancher du `clamp` et calculer l'échelle sur la place réellement
disponible plutôt que sur la seule hauteur d'écran. Alléger la carte de ce qui la fait déborder
(voir A3) plutôt que rétrécir ce qu'on doit lire.

**Modification technique.** `src/app/page.tsx` — plancher de `CARD_SCALE` à `0.875rem` au
minimum ; ajuster la pente pour que la borne haute soit atteinte plus tôt.

**Critère de validation.** Sur 375×667, aucun texte de la carte sous 11 px, et le résumé au
moins à 14 px, la carte tenant toujours sans défilement.

---

### A3. La référence de la citation occupe plus de place que la citation

**Constat.** Sur la carte de « Modèle de la poubelle », `ConceptQuotation` rend une légende de
**5 lignes à 9,7 px sur 375×667** (79 px de haut), et de **6 lignes à 12 px sur 390×844** (117 px
de haut) — contre 109 px pour la citation elle-même. La légende cumule l'attribution, la
référence complète avec pagination et la mention de traduction, en un seul paragraphe gris de
`#8f8f8f`.

**Impact.** Le bloc le plus long, le plus dense et le moins lisible de l'écran principal est un
appareil de notes. Il sépare la citation de l'accroche, c'est-à-dire coupe en deux la partie de
la carte qui se lit d'un trait. Hiérarchie inversée au sens strict : ce qui se lit en dernier,
et seulement par qui vérifie, occupe le plus de surface.

**Gravité : important.**

**Recommandation.** Sur la carte du jour, ne garder de la légende que ce qui rattache la phrase
à son auteur, et renvoyer la notice complète — pagination, édition, mention de traduction — à la
vue des sources, qui existe déjà et qui est faite pour ça. La fiche de concept, elle, n'a aucune
contrainte de hauteur et garde la légende entière.

**Modification technique.** `src/components/concept/ConceptQuotation.tsx` — un mode compact pour
la carte du jour ; la notice longue reste sur `ConceptDetail` et dans la vue des sources.

**Critère de validation.** Sur 375×667, la légende de citation tient en deux lignes au plus, et
la hauteur du bloc de citation reste inférieure à celle de la citation.

---

### A4. Sur les pages de domaine, la prose passe avant les destinations

**Constat.** Sur `/explore/domains/sociologie-des-organisations/` en 390×844 :

- la description occupe **276 px** — dix lignes de 17 px à interligne 27,6 ;
- l'en-tête « Thèmes · 9 » est à y = 546 ;
- le premier thème cliquable est à **y = 574**, alors que la zone visible s'arrête à ~776 px
  (barre de navigation déduite).

Deux lignes et demie de la liste de neuf sont visibles à l'arrivée. Sur `/explore/themes/pouvoir/`,
même forme : 193 px de description, premier concept cliquable à y = 470.

**Impact.** La page de domaine existe pour donner accès à ses thèmes. Ce pour quoi on l'a ouverte
n'est pas visible sans défiler, derrière un paragraphe de registre académique — celui-là même
que l'utilisateur, non spécialiste, est le moins susceptible de lire d'emblée.

**Gravité : important.**

**Recommandation.** Faire passer la liste au-dessus de la ligne de flottaison. Deux voies, non
exclusives : raccourcir la description affichée à sa première phrase, le reste étant déplié à la
demande ; ou faire remonter la liste et reléguer la description sous elle. La première préserve
le rôle de situation qu'a la description ; la seconde est plus radicale.

**Modification technique.** `DomainDetail.tsx` et `ThemeDetail.tsx` — plafonner la description
affichée, ou inverser l'ordre des blocs.

**Critère de validation.** Sur 375×667, au moins deux entrées de la liste sont visibles sans
défiler, sur les onze domaines et les neuf thèmes.

---

## B — Hiérarchie et systématicité

### B1. Le cloisonnement des familles ne tient pas

**Constat.** Voir le tableau d'ouverture : 32 / 36 / 64 px, ratio inter-groupe sur intra-groupe
de 1,78 pour un seuil de 2. Aucun séparateur ne compense. La page mesure 2 373 px pour
onze lignes.

**Impact.** L'écran de découverte du corpus — celui qui doit apprendre à un non-spécialiste
comment le champ est organisé — ne transmet pas son organisation. La taxonomie existe dans les
données et se perd à l'affichage.

**Gravité : important.**

**Recommandation.** Porter l'écart entre familles à au moins le double de l'écart entre
domaines, et resserrer l'ancrage de l'en-tête sur sa liste : l'en-tête doit être visiblement
plus proche de sa première ligne que les lignes ne le sont entre elles. Ordre de grandeur
cohérent avec le reste : 24 px d'ancrage, 32 px entre frères, 72 px entre familles. Le
cloisonnement se fait par l'espace, pas par une bordure — sur du noir, un filet devrait
atteindre le seuil de contraste des éléments d'interface pour être perçu, et serait alors plus
bruyant que ce qu'il sépare. C'est la règle déjà posée au §3 de `ux-direction.md`, et elle
n'est pas en cause : c'est l'espace qui n'a pas été dépensé.

**Modification technique.** `src/app/explore/page.tsx` — `space-y-12` sur la liste des familles,
`mt-4` avant la liste et `space-y-1` entre les lignes, avec `py-4` sur chaque ligne : ce sont
ces quatre valeurs qui produisent 32/36/64.

**Critère de validation.** Mesuré sur le rendu : écart entre familles ≥ 2 × écart entre domaines,
et écart d'ancrage ≤ 0,75 × écart entre domaines.

---

### B2. Un niveau de titre ne se distingue pas de son niveau inférieur

**Constat.** Question de famille : 19 px, graisse rendue 500, `#ededed`. Nom de domaine : 17 px,
graisse 500, `#ededed`. Voir le tableau d'ouverture et la vérification de graisse par mesure de
largeur.

S'y ajoute une inversion entre écrans : le titre de `/explore` fait **28 px**, celui d'une page
de domaine ou de thème **30 px**. L'écran le plus profond porte le plus gros titre.

**Impact.** Les niveaux de titre doivent se distinguer isolément, pas seulement côte à côte. Ici
ils ne se distinguent même pas côte à côte.

**Gravité : important.**

**Recommandation.** Faire porter la hiérarchie par la graisse et le contraste avant la taille —
deux graisses bien choisies remplacent trois tailles, et réduire le contraste d'un niveau
secondaire coûte moins en lisibilité que réduire sa taille. Concrètement : la question de famille
monte en graisse 600, le nom de domaine redescend en 400 ou 500 selon ce que la lecture confirme,
et l'écart de taille se creuse. Aligner les deux `h1` de premier niveau sur la même valeur.

**Modification technique.** `src/app/explore/page.tsx` (`FamilyList`, `ListRow`) et les quatre
écrans de détail.

**Critère de validation.** Sur une capture floutée à 4 px, les quatre questions de famille
restent identifiables comme les éléments dominants de la page.

---

### B3. Douze pas d'espacement vertical, employés indifféremment

**Constat.** Relevé sur `src/` : `mt-` en 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12 ; `space-y-` en
1, 4, 10, 12 ; `gap-` en 1, 1.5, 2, 3, 5, 8, 10 ; `py-` en 1, 1.5, 3, 3.5, 4, 6. Union :
**douze pas distincts**.

Le nombre n'est pas le problème en soi — l'emploi l'est. Le même rôle « en-tête de section →
sa liste » vaut `mt-4` sur `/explore` et `mt-3` sur les pages de détail. Le même rôle
« paragraphe → paragraphe suivant » vaut `mt-5`, `mt-4` et `mt-6` dans la même colonne sur
`ThemeDetail`.

**Impact.** Une échelle courte appliquée strictement produit un résultat plus net qu'une échelle
longue appliquée approximativement. Ici c'est l'inverse, et c'est la seconde moitié du
« les espaces sont les mêmes » : ils ne le sont pas tout à fait, et les micro-écarts n'ayant
aucune signification, le lecteur ne peut rien en déduire.

**Gravité : amélioration.**

**Recommandation.** Une échelle de cinq à six pas, nommée par rôle plutôt que par valeur —
intra-bloc, inter-bloc, ancrage d'en-tête, inter-section, inter-groupe — et appliquée sans
exception. Les valeurs hors échelle deviennent alors visibles et justifiables.

**Modification technique.** Déclarer l'échelle dans `globals.css`, puis la substituer écran par
écran.

**Critère de validation.** Un relevé automatique des classes d'espacement vertical rend au plus
six valeurs distinctes, et chacune est employée pour un seul rôle.

---

### B4. Onze tailles de texte absolues, dont sept dans une plage de sept pixels

**Constat.** Tailles littérales rencontrées : 12, 13, 14, 15, 16, 17, 19, 28, 30, 32, 34 px —
auxquelles s'ajoutent six tailles relatives sur la carte (0,75 / 0,8 / 0,94 / 1 / 1,05 / 1,15 /
1,85 em). Cinq à sept tailles couvrent une application complète ; au-delà, les niveaux cessent
d'être distinguables et perdent leur fonction. C'est ce qui se produit ici : **sept valeurs
tiennent entre 12 et 19 px**, un intervalle où deux niveaux voisins ne se distinguent pas.

**Impact.** Le lecteur ne peut plus déduire une importance d'une taille, puisque la taille ne
varie plus assez pour signifier. C'est l'origine mécanique de la platitude constatée.

**Gravité : amélioration.**

**Recommandation.** Une échelle de six pas en rem, déclarée une fois, et le retrait des valeurs
qui n'ont aucun rôle propre. Le passage en rem sert aussi A1 : c'est la même modification.

**Modification technique.** Tokens `--text-*` dans `globals.css`, substitution des classes
`text-[Npx]`.

**Critère de validation.** Au plus six tailles distinctes hors carte du jour, et deux niveaux
voisins séparés d'au moins 15 %.

---

### B5. Un même rôle typographique existe en trois variantes

**Constat.** L'intitulé en capitales espacées — le « chapeau » qui situe — est rendu de trois
façons :

| Où | Balise | Taille | Famille rendue |
|---|---|---|---|
| Libellé de famille sur `/explore` | `<h2>` | 13 px | **Source Serif 4** |
| « Thèmes · 9 », « Concepts · 2 », « Sources » | `<h2>` | 12 px | **Source Serif 4** |
| Chapeau de famille sur `DomainDetail`, de domaine sur `ThemeDetail`, de thème sur la carte | `<p>` | 13 px | **Inter** |

La bascule de famille n'est pas voulue : elle vient de la règle globale
`h1, h2, h3, .font-serif-display { font-family: serif }` de `globals.css`, qui attrape tout `h2`
quel que soit son rôle. Un même chapeau change donc de fonte selon qu'il a été marqué comme
titre ou comme paragraphe — décision de structure de document, sans rapport avec le registre
typographique voulu.

Cela contredit d'ailleurs la règle posée au §5 de `ux-direction.md` : « la serif porte ce qui se
lit, le sans porte ce qui se choisit ». Un chapeau en capitales espacées ne se lit pas, il
étiquette.

**Impact.** Traitement systémique instable : les mêmes choses ne sont pas traitées de la même
façon selon l'écran, ce qui use la confiance dans les repères sans que le lecteur puisse nommer
pourquoi.

**Gravité : important.**

**Recommandation.** Un seul traitement pour ce rôle, porté par une classe et non par la balise :
une taille, une famille (Inter, par la règle du §5), une graisse, un interlettrage. Restreindre
la règle serif de `globals.css` à `.font-serif-display`, et la poser explicitement là où elle
est voulue.

**Modification technique.** `globals.css` — sortir `h1, h2, h3` du sélecteur serif ; ajouter une
classe `.eyebrow` ; l'appliquer aux six emplacements concernés.

**Critère de validation.** Sur les cinq écrans, tous les intitulés en capitales rendent la même
taille, la même famille et la même graisse — vérifié sur le rendu, pas dans le code.

---

### B6. Une ligne de liste, deux traitements selon l'écran

**Constat.**

| | `/explore` (`ListRow`) | `DomainDetail`, `ThemeDetail`, `AuthorDetail` |
|---|---|---|
| Titre | 17 px, graisse **500**, interligne **23,4** | 17 px, graisse **400**, interligne **25,5** |
| Sous-titre | **15 px**, interligne 20,6 | **14 px**, interligne 19,25 |
| Remplissage vertical | `py-4` | `py-3.5` |
| Écart entre lignes | 36 px | 31 px |

Même objet — une destination avec son intitulé et sa phrase de présentation —, deux jeux de
valeurs. Aucune des différences ne porte de sens.

**Gravité : amélioration.**

**Recommandation.** Extraire un composant unique de ligne de liste et l'employer sur les quatre
écrans. `ListRow` existe déjà dans `explore/page.tsx` et fait le travail ; il n'est simplement
pas partagé.

**Modification technique.** Déplacer `ListRow` vers `src/components/ui/`, l'employer partout, et
lui donner le champ optionnel dont les pages de détail ont besoin.

**Critère de validation.** Un seul composant rend toutes les lignes de liste de l'application ;
les valeurs mesurées sont identiques sur les quatre écrans.

---

### B7. Le seul domaine utilisable est signalé par une absence

**Constat.** Sur `/explore`, dix des onze domaines portent la ligne « Corpus en cours de
constitution » (13 px, `#8f8f8f`). Le onzième — le seul qui contienne quelque chose — ne porte
rien. Le signal est donc porté par le vide, et répété neuf fois par le plein.

Effet secondaire mesurable : les lignes portant la mention font 129 px de haut contre 103 à
108 px pour les autres, ce qui donne à la liste un rythme irrégulier sans que l'irrégularité
signifie ce qu'elle a l'air de signifier.

**Impact.** Sur l'écran dont la fonction est de faire choisir où aller, ce qui est atteignable
ne se distingue pas au premier regard. L'action principale doit se distinguer sans qu'on lise le
libellé ; ici il faut lire onze libellés pour trouver le seul qui manque.

**Gravité : important.**

**Recommandation.** Renverser le signal : marquer positivement ce qui est pourvu — le nombre de
cartes disponibles, par exemple, information que la page de domaine affiche déjà en pied
(« 8 cartes instruites dans ce domaine ») — et réduire la mention d'absence à une marque
compacte plutôt qu'à une phrase répétée dix fois. Ne pas la supprimer : la décision de la
montrer dans la liste, et pas seulement sur la page, est juste — c'est dans la liste qu'on
choisit, et l'apprendre après avoir ouvert est le pire moment.

**Modification technique.** `src/app/explore/page.tsx`, `FamilyList` — dériver la marque de
`taxonomy.hasCorpus` et du nombre de cartes ; réduire la hauteur de la mention d'absence.

**Critère de validation.** Sur une capture floutée à 4 px, le domaine pourvu se repère sans
lire ; les onze lignes ont des hauteurs qui ne varient qu'avec la longueur réelle du texte.

---

### B8. Deux formats pour le même comptage, et un compteur mal placé

**Constat.** Le nombre d'éléments d'un groupe s'écrit « **4 domaines** » sur `/explore` et
« **Thèmes · 9** » sur une page de domaine. Deux formes pour une même information.

Le compteur d'`/explore` pose un second problème, de position celui-là : il s'intercale entre la
question de famille et la liste, à l'endroit précis où l'ancrage visuel de l'en-tête sur son
groupe doit se faire. Il ajoute un quatrième niveau typographique dans un bloc d'en-tête qui en
a déjà trois, et il compte des lignes qui sont toutes visibles juste en dessous.

**Gravité : amélioration.**

**Recommandation.** Une seule forme, appliquée partout. Et retirer le compteur de familles : il
mesure ce qui est visible, ce que le §5 de `ux-direction.md` a précisément écarté pour les
compteurs de progression — la même raison vaut ici.

**Critère de validation.** Un seul format de comptage dans toute l'application ; le bloc
d'en-tête de famille ne porte plus que deux niveaux.

---

## C — Navigation

### C1. Descendre dans un domaine puis ouvrir un de ses thèmes efface le domaine

**Constat.** Le parcours a été rejoué dans un navigateur, en relevant l'URL, l'étiquette du lien
de retour, la longueur de la pile d'historique et la trace enregistrée en `sessionStorage` :

| Étape | URL | Lien de retour | Pile | Trace |
|---|---|---|---|---|
| 1. Explorer | `/explore/` | — | 2 | `/explore/` |
| 2. clic sur « Sociologie des organisations » | `/explore/domains/sociologie-des-organisations/` | **Explorer** | 3 | `/explore/ > /explore/domains/…/` |
| 3. clic sur le thème « Pouvoir » | `/explore/themes/pouvoir/` | **Explorer** | **3** | `/explore/ > /explore/themes/pouvoir/` |
| 4. retour système | `/explore/` | — | 3 | `/explore/` |

À l'étape 3, la pile n'a pas grandi et **le domaine a disparu de la trace**. Un seul retour
depuis le thème sort du domaine.

**Cause.** `src/lib/navigation-tree.ts` place les domaines, les thèmes et les auteurs au même
niveau 2 — décision explicite, et couverte par un test : « un domaine est une coupe d'Explorer
comme un thème ou un auteur, pas un palier de plus ». `intentBetween` en déduit donc `sibling`
pour un lien domaine → thème, et `TreeLink` remplace l'entrée d'historique au lieu de l'empiler.

Cette décision est cohérente tant que les trois coupes sont parallèles. Elle cesse de l'être
parce que **la page de domaine, elle, contient la liste de ses thèmes** : le lien qu'on y suit
est une descente dans le contenu, traitée comme un pas de côté dans l'arbre.

**Impact.** La page de domaine liste neuf thèmes. En consulter deux coûte : domaine → thème →
retour (on sort du domaine) → rouvrir le domaine → défiler → second thème. Six gestes au lieu de
trois. La page qui existe pour faire parcourir un domaine est celle qu'on ne peut pas parcourir.

Effet secondaire : la transition joue le mouvement « latéral » — c'est-à-dire aucun — là où le
modèle spatial du §2 de `ux-direction.md` annonce une descente. Et l'étiquette de retour annonce
« Explorer » alors qu'on vient d'un domaine.

**Gravité : important.**

**Recommandation.** Reconnaître que l'arbre a quatre niveaux quand on entre par les domaines, et
trois quand on entre par les thèmes ou les auteurs. Le niveau d'un nœud ne peut donc plus être
une propriété de sa seule route. Deux voies :

- **Fonder l'intention sur la trace plutôt que sur la table des niveaux** : si la cible n'est
  pas dans la trace et qu'on l'a atteinte depuis un écran qui la listait, c'est une descente.
  C'est la voie la plus fidèle au contrat déjà écrit, qui repose déjà sur la trace.
- **Ou déclarer le domaine au niveau 2 et le thème au niveau 3**, en remontant le concept au
  niveau 4 et en donnant au thème un parent de repli calculé depuis son domaine.

La première est la moins invasive et ne touche pas la table. La seconde est plus lisible mais
oblige à revoir les replis et les tests.

**Modification technique.** `src/lib/navigation-tree.ts` — `intentBetween` et `NIVEAUX` ;
`src/lib/navigation-labels.ts` pour l'étiquette ; `src/lib/navigation-tree.test.ts` porte
aujourd'hui l'assertion contraire et devra être mis à jour avec sa raison.

**Critère de validation.** Depuis un domaine, ouvrir un thème puis revenir ramène **sur le
domaine**, avec sa position de défilement, et le lien de retour porte le nom du domaine. Ouvrir
un thème depuis l'onglet « Thèmes » continue de ramener sur l'onglet « Thèmes ».

---

### C2. Sur l'écran Réglages, aucun onglet n'est marqué

**Constat.** Sur `/settings/`, `aria-current` est absent des deux entrées de la barre de
navigation, et le repère de position est masqué (`opacity: 0`). Cause : `isActive` teste
`pathname.startsWith("/explore")`, or `/settings` est une route de premier niveau bien qu'elle
soit un enfant d'Explorer dans l'arbre (`parentOf("/settings") === "/explore"`).

**Impact.** « Où suis-je » n'a pas de réponse sur cet écran — c'est le premier des quatre
contrôles de synthèse d'un audit de navigation. L'écran paraît hors de l'application.

**Gravité : important.**

**Recommandation.** Faire dépendre l'onglet actif de l'arbre plutôt que d'une comparaison de
chaînes : l'entrée active est l'ancêtre de premier niveau du chemin courant. `navigation-tree.ts`
sait déjà le calculer.

**Modification technique.** `src/components/ui/BottomNav.tsx` — remplacer `isActive` par une
remontée via `parentOf` jusqu'au niveau 1.

**Critère de validation.** Sur les sept écrans, exactement un onglet porte `aria-current` et le
repère de position est visible.

---

### C3. Une adresse de concept périmée tombe sur un 404 en anglais, sans issue

**Constat.** `/explore/concept/?c=<slug inconnu>` rend la page par défaut de Next : « 404 — This
page could not be found. » Texte anglais, hors du système visuel, et **aucun lien** dans la page
(seule la barre de navigation, héritée de `AppShell`, offre une sortie). Aucun `not-found.tsx`
n'existe dans `src/app/`.

Ce n'est pas un cas théorique : c'est exactement l'adresse que « Approfondir » place dans le
dossier envoyé à l'IA, comme lien de retour vers la fiche. Un slug qui change au fil de
l'instruction documentaire rend caduc tout ce qui a été partagé.

**Impact.** Le seul contenu que l'application diffuse hors d'elle-même peut mener à un écran qui
n'est pas le sien, dans une langue qui n'est pas la sienne, et qui n'explique rien.

**Gravité : important.**

**Recommandation.** Un `not-found.tsx` de l'application : en français, dans le registre du
produit, disant ce qui a pu se passer — une fiche a pu changer d'adresse — et proposant une
sortie nommée vers Explorer et vers la carte du jour.

**Modification technique.** `src/app/not-found.tsx`, utilisant `Screen` et le lien de retour.

**Critère de validation.** `/explore/concept/?c=nimportequoi` et une route inexistante rendent
un écran en français, avec au moins un lien de sortie nommé.

---

### C4. Un lien de concept partagé ouvre sur un écran vide

**Constat.** Le HTML pré-rendu de `/explore/concept/` ne contient, texte visible, que
« Curiosity — … Aujourd'hui Explorer ». Toute la fiche est rendue côté client derrière un
`<Suspense>` **sans `fallback`** (`src/app/explore/concept/page.tsx`), imposé par
`useSearchParams` sur une page exportée statiquement. Même situation sur `/` : `TodayPage` rend
`<div className="min-h-svh" aria-hidden />` tant que le montage n'a pas eu lieu.

**Impact.** Sur une connexion lente, celui qui suit un lien partagé regarde un écran noir sans
titre, sans squelette et sans message, jusqu'à ce que le script soit chargé et exécuté. Rien ne
distingue ce délai d'une panne. Conséquence annexe : le lien partagé n'a aucun aperçu, puisque
son HTML ne contient rien.

**Gravité : important.**

**Recommandation.** Donner un `fallback` à la frontière de suspension et un état d'attente à
`TodayPage` : un squelette qui réserve la place du titre et du texte, pas un tourniquet. Il ne
raccourcit pas l'attente, il la rend lisible.

**Modification technique.** `src/app/explore/concept/page.tsx` et `src/app/page.tsx`.

**Critère de validation.** Réseau bridé à 3G lente : un contenu de forme reconnaissable est
visible en moins d'une seconde sur les deux écrans.

---

### C5. Deux cibles tactiles sous le seuil, dont la seule sortie de la vue des sources

**Constat.** Hauteurs mesurées :

| Cible | 375×667 | 390×844 |
|---|---|---|
| « Approfondir » | 135 × 47 | 135 × 47 |
| « Sources · 5 » | 74 × **15** | 91 × **18** |
| « Revenir au concept » | 134 × **15** | 161 × **18** |
| Entrées de la barre de navigation | 188 × 64 | 195 × 64 |
| Lien de retour, lignes de liste | ≥ 44 | ≥ 44 |

Le bouton des sources n'a ni `min-h`, ni remplissage : sa hauteur est celle de son texte, qui
suit `CARD_SCALE` et rétrécit donc avec l'écran.

Deux aggravations. « Revenir au concept » est **le seul moyen de quitter la vue des sources** —
un aller-retour au sein de la carte dont le retour fait 15 px de haut. Et les notices de sources
elles-mêmes portent des liens `target="_blank"` dans un texte de 10,4 px.

**Impact.** Une catégorie d'utilisateurs — motricité fine réduite, usage à une main en
déplacement, ce qui est le contexte déclaré du produit — n'atteint pas la cible de façon fiable,
sur la seule action de retour d'un état de l'écran principal.

**Gravité : bloquant.** Violation de WCAG 2.5.8 *Target Size (Minimum)*, AA, qui fixe 24 × 24 px ;
la recommandation au doigt est 44 × 44.

**Recommandation.** Donner à ces deux boutons la hauteur minimale de cible du reste de
l'application (`min-h-11`), avec un remplissage horizontal, et détacher leur taille de texte de
`CARD_SCALE` — un contrôle n'est pas du contenu et n'a pas à rétrécir avec lui, comme
« Approfondir » le fait déjà.

**Modification technique.** `src/app/page.tsx`, `ConceptCard` — le bouton `aria-expanded`.

**Critère de validation.** Toute cible interactive de l'application mesure au moins 44 × 44 px
sur 375×667, marge de clic comprise.

---

### C6. Le jeton `--dur-screen` n'existe pas

**Constat.** `globals.css` ligne 409 écrit `animation-duration: var(--dur-screen)` pour
`::view-transition-old(root)` et `::view-transition-new(root)`. Ce jeton n'est déclaré nulle
part : `getComputedStyle(document.documentElement).getPropertyValue('--dur-screen')` rend la
chaîne vide. Une propriété personnalisée non résolue rend la déclaration invalide au calcul, et
`animation-duration` retombe alors sur sa valeur initiale, `0s`.

Le fondu de l'instantané racine — le fond et la barre de navigation — est donc supprimé, et non
réglé. Le commentaire qui l'entoure décrit par ailleurs un comportement de sortie de session,
alors que les sessions n'existent plus.

**Impact.** Faible à l'écran : entre deux onglets, la barre est identique et l'absence de fondu
ne se voit pas. Réel dans le code : une valeur qui ne résout rien ne produit pas d'erreur, elle
produit un réglage qui ne joue jamais — c'est précisément la panne que `npm test` a été écrit
pour attraper sur la marque, et elle est ici sur une autre surface.

**Gravité : amélioration.**

**Recommandation.** Retirer la déclaration, ou déclarer le jeton et dire ce qu'il porte. Ne pas
laisser une troisième possibilité.

**Modification technique.** `src/app/globals.css`, bloc `::view-transition-*(root)`.

**Critère de validation.** Aucune propriété personnalisée référencée dans `globals.css` n'est
absente de sa déclaration — vérifiable par un contrôle automatique.

---

## Ce que l'audit n'a pas trouvé à redire

À dire aussi, parce qu'un audit qui ne liste que des défauts fait croire que tout est à refaire,
et parce que ces points-là sont ce qui rend les autres réparables à peu de frais.

- **Le contrat de navigation arrière est solide.** L'invariant « la pile est le chemin de la
  racine au nœud courant », la trace recalculée depuis l'état affiché plutôt que journalisée, le
  passage unique par `TreeLink` et `climbTo` : c'est une architecture juste, et C1 est un défaut
  *dans* cette architecture, pas un défaut *de* cette architecture.
- **Les contrastes tiennent.** Texte principal 17,9:1, secondaire 10,2:1, tertiaire 6,5:1,
  onglet inactif 5,8:1 sur sa surface. Tous au-dessus des seuils, et calculés plutôt qu'estimés.
- **Le focus est visible partout**, l'ordre de tabulation suit l'ordre visuel, `lang="fr"` est
  déclaré, la structure de titres est correcte sur les cinq écrans.
- **Les cibles de navigation et de liste sont généreuses** — 44 à 64 px. Les deux exceptions de
  C5 sont des exceptions, pas une tendance.
- **Rien n'est tronqué** dans les listes, y compris à 320 px : les phrases sont écrites courtes
  plutôt que rognées, et cette décision tient.
- **La grammaire de mouvement est cohérente et le repli en mouvement réduit est correct** —
  déclaré en `no-preference` plutôt que neutralisé après coup, ce qui est la bonne façon.
- **Le vide se dit en toutes lettres.** « Corpus en cours de constitution » plutôt que
  « 0 résultat » est juste ; c'est sa répétition et son inversion de signal que B7 met en cause,
  pas la décision.
- **Les états vides des thèmes et des auteurs distinguent « rien » de « rien encore ».**

---

## Ordre de traitement proposé

| Rang | Entrées | Pourquoi d'abord |
|---|---|---|
| 1 | A1, C5 | Les deux bloquants. Ils excluent, et ils se corrigent en quelques lignes |
| 2 | B1, B2, B5 | Le constat initial. Ils se traitent ensemble, sur les mêmes fichiers |
| 3 | C1, C2, C3, C4 | La circulation. C1 est le plus coûteux, et le plus rentable |
| 4 | A2, A3, A4, B7, B8 | La carte et les pages de détail |
| 5 | B3, B4, B6, C6 | Systématisation. Sans elle, les rangs 2 et 4 se déferont avec le temps |

Les rangs 2 et 5 gagnent à être menés dans cet ordre et pas l'inverse : décider la hiérarchie
d'abord, puis figer l'échelle qui la porte. Poser l'échelle avant de savoir ce qu'elle doit
distinguer reviendrait à choisir des valeurs sans critère.

---

## Références

Aucune source externe consultée. Les critères employés viennent du corpus de méthode local du
plugin UXER — grille de diagnostic visuel (hiérarchie, rythme, espacements, typographie), règle
de proximité, dix-neuf contrôles de navigation, quatre niveaux de gravité, contrôles
d'accessibilité opposables. Les seuils normatifs cités (WCAG 1.4.4, 2.5.8) sont nommés par leur
référence, et chaque écart est accompagné de la mesure qui l'établit.
