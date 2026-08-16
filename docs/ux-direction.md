# Direction UX de Curiosity

Ce document fixe les décisions de navigation, de registre visuel et de mouvement.
Il existe pour une raison simple : un parti pris non écrit ne survit pas au
troisième contributeur. Toute modification d'interface se confronte à ce qui suit.

Travail conduit avec la méthode du plugin UXER (audit de navigation, politique de
mouvement, valeurs d'exécution du mouvement, registre sobre, signatures génériques).
Aucune plateforme d'inspiration externe n'a été consultée : les décisions ci-dessous
s'appuient sur le corpus de méthode local et sur la lecture du code existant.

---

## 1. Ce qu'est ce produit

| | |
|---|---|
| Utilisateur | Adulte curieux — étudiant, encadrant, consultant — pas un spécialiste de la discipline |
| Tâche principale | Faire une session courte qui fait découvrir, relier ou réviser un concept |
| Fréquence | Quotidienne, mais brève : 2, 5 ou 10 minutes, une ouverture ou deux par jour |
| Contexte | Téléphone, une main, souvent en déplacement. Application installable, données locales |
| Contrainte | Tout est côté client : la progression est lue dans le navigateur, jamais rendue par le serveur |

Cette ligne « quotidienne mais brève » commande tout ce qui suit. Elle n'autorise
pas ce qu'on s'autoriserait sur une page vue une fois, et elle interdit moins que
sur un outil ouvert huit heures par jour.

---

## 2. Le parti pris

```
Dimension porteuse  : le mouvement.
Écart assumé        : une grammaire de continuité spatiale. Le corpus est un
                      espace ; descendre dedans pousse le contenu vers la gauche,
                      remonter le ramène par la droite, entrer en session le fait
                      monter par-dessus l'application. Chaque changement d'état
                      est joué, aucun n'est décoré.
Où il se manifeste  : navigation entre écrans, phases de la session, changement
                      d'onglet, appui sur toute cible, remplissage des barres de
                      progression, révélation de la correction d'un quiz.
Ce qui reste neutre : la palette — achromatique, voir §2 bis —, la typographie
                      (deux familles, inchangées), le rythme (une colonne de
                      448 px), la matière (aucune ombre, aucun flou décoratif),
                      l'imagerie (aucune), la voix (déjà juste).
Coût accepté        : trois courbes et six durées à tenir comme des tokens ; un
                      repli en mouvement réduit à écrire pour chaque classe de
                      transition ; une dégradation silencieuse sur les
                      navigateurs sans View Transitions API.
```

**Pourquoi le mouvement, alors que c'est la dimension la plus chère.** Parce que
c'est ce qui a été demandé, et parce que la fréquence d'usage l'autorise ici : le
mouvement est exclu des surfaces vues des heures par jour, pas d'une application
ouverte cinq minutes. Ce qui reste exclu, y compris ici, c'est le mouvement
**continu** — rien ne pulse, ne flotte ni ne tourne au repos.

**Ce que « sobre, minimaliste, zéro distraction » veut dire, traduit en décisions
vérifiables** — un qualificatif non traduit ne s'implémente pas :

| Intention | Décision observable |
|---|---|
| Sobre | Aucune couleur décorative · aucun dégradé · aucune ombre : sur du noir, une élévation se dit par la luminosité |
| Minimaliste | Aucune information retirée pour épurer : ce qui est retiré est du bruit, et le seul retrait effectué est justifié au §5 |
| Zéro distraction | Rien ne bouge sans qu'un état ait changé · la barre de navigation disparaît pendant une session · aucun mouvement ne retarde une information attendue |
| Très animé | Tout changement d'état est joué : sept familles de transition, listées au §4 |

---

## 2 bis. La palette

**Application sombre, sans variante claire.** Fond noir, et une échelle de gris.

C'est une décision assumée, pas un défaut : la méthode considère normalement le
sombre-par-défaut comme un choix esthétique déguisé en décision, et son critère de
validation est « le mode clair existe-t-il et tient-il ». Ici il n'existe pas. Ce
qu'on y gagne — une seule palette à tenir, un noir qui éteint réellement l'écran
sur les dalles OLED, une lecture reposante le soir — se paie par une lisibilité
moindre en plein soleil. Les contrastes élevés retenus ci-dessous limitent ce coût
sans l'annuler.

### L'échelle

Onze valeurs, numérotées comme celles de Tailwind : **50 est la plus claire, 950 la
plus sombre.** Ce n'est pas un dégradé — c'est une échelle de nuances, et chaque
barreau a un emploi.

| Valeur | Contraste sur le noir | Ce qu'elle a le droit de porter |
|---|---|---|
| `--n-950` `#000000` | — | Le fond |
| `--n-850` `#121212` | 1,12:1 | Une surface levée : carte, encadré, ligne de liste |
| `--n-800` `#1c1c1c` | 1,23:1 | La même surface au contact |
| `--n-700` `#2a2a2a` | 1,46:1 | La piste d'une barre de progression |
| `--n-600` `#3d3d3d` | 1,93:1 | Un séparateur, un filet |
| `--n-500` `#6b6b6b` | 3,94:1 | Une bordure ou une icône **fonctionnelle** — au-dessus du seuil de 3 |
| `--n-400` `#8f8f8f` | 6,49:1 | Un intitulé en capitales, un texte tertiaire |
| `--n-300` `#b5b5b5` | 10,24:1 | Le texte secondaire |
| `--n-100` `#ededed` | 17,94:1 | Le texte principal |
| `--n-50` `#fafafa` | 20,12:1 | L'action principale, la position courante |

Les ratios sont calculés, pas estimés. Ils décident : `--n-500` ne peut pas porter
du texte courant (il lui manque 0,6 pour atteindre 4,5), et c'est exactement pour
ça qu'il porte les bordures, dont le seuil est de 3.

**Le texte principal n'est pas blanc pur**, et le fond ne remonte jamais vers le
gris moyen : sur du noir, du blanc pur produit un halo qui fatigue à la lecture
suivie, ce qui est précisément l'usage de ce produit.

### Deux règles

**L'accent n'est plus une couleur.** C'est `--n-50`, la valeur la plus claire de
l'échelle. Elle est rare et ne dit qu'une chose : voici l'action, ou voici où vous
êtes. Le bouton principal est un pavé blanc à texte noir, l'onglet actif une
pilule blanche, le repère de position une barre blanche.

**La couleur ne signale que ce qui est juste, ce qui est faux, et ce qui est
irréversible.** Deux teintes désaturées, `--good` et `--warn`, et rien d'autre dans
tout le produit. Elles ne sont jamais employées seules : « Exact. », « Pas tout à
fait. » et « Réinitialiser la progression » sont écrits, faute de quoi
l'information disparaîtrait pour qui ne distingue pas ces deux teintes.

### Ce qui remplace les bordures

Sur fond clair, une carte se délimitait par un filet. Sur du noir, un filet devrait
atteindre le seuil de contraste des éléments d'interface pour être perçu — il
deviendrait alors plus bruyant que la surface qu'il entoure. **Les cartes, les
lignes de liste, les tuiles et les réponses de quiz sont donc des surfaces levées**
(`--n-850`), qui s'éclaircissent au contact (`--n-800`). Une bordure ne réapparaît
que lorsqu'elle porte un état : la bonne réponse, la mauvaise, le contour d'un
bouton secondaire.

Conséquence à ne pas perdre de vue en modifiant le quiz : la bordure est déclarée
en permanence, transparente tant qu'aucun état n'est à porter. Sans cela, son
apparition décalerait la mise en page d'un pixel au moment de la réponse.

---

## 3. Navigation — ce qui a changé et pourquoi

| Décision | Ce qu'elle corrige |
|---|---|
| La barre de navigation disparaît sur `/learn` | Pendant une session, l'écran proposait quatre sorties concurrentes ; partir par un onglet abandonnait la session sans que rien ne l'ait dit |
| Un retour d'étape dans la session | Il n'y avait aucun moyen de relire l'explication après l'avoir dépassée. Le retour ne rejoue pas les enregistrements de progression, et le résultat reste terminal |
| L'écran de résultat mène à la fiche du concept | La session se terminait en cul-de-sac : le concept qu'on venait de travailler n'était atteignable qu'en repassant par Explorer, un auteur, puis la fiche |
| L'onglet d'Explorer vit dans l'URL | Revenir d'une fiche de thème ramenait systématiquement sur « Auteurs » ; il fallait refaire le chemin |
| Retour nommé sur toutes les fiches | La fiche de concept revenait par l'historique du navigateur — depuis une fin de session, cela renvoyait dans la session qu'on venait de quitter. Les quatre écrans de détail portent maintenant le même retour, vers une destination nommée |
| `/settings` a une sortie | On y entrait par une icône et on n'en sortait que par un onglet de la barre |
| « À revoir » liste ce qu'il compte | Un indicateur qui ne déclenche aucune action est décoratif. Les concepts sont maintenant listés, chacun ouvrant sa fiche, d'où la révision se lance |
| Focus visible partout | Il n'existait aucun style de focus : l'application n'était pas utilisable au clavier |
| Réserve sous le contenu calculée | Le retrait bas était une valeur fixe qui ne tenait pas compte de la zone sûre du système |

**Ce qui n'a pas changé, et pourquoi.** Les trois onglets sont les bons : ils
nomment trois intentions distinctes dans le vocabulaire de l'utilisateur. Les
réglages restent derrière l'écran de bilan — un quatrième onglet pour un écran
visité deux fois dans la vie du produit coûterait plus qu'il ne rapporte.

---

## 4. Le budget de mouvement

La règle qui décide : **plus une chose est vue souvent, plus son mouvement est
court.** Elle croise l'ordre de grandeur attendu par type d'élément, et la plus
contraignante des deux gagne.

| Ce qui bouge | Vu par session | Durée | Courbe |
|---|---|---|---|
| Appui sur une cible | 10 à 20 fois | 140 ms | `--ease-out-soft` |
| Onglet, sélection, repère de position | 2 à 5 fois | 180 ms | `--ease-out-soft` |
| Sortie d'un écran ou d'une phase | 5 à 10 fois | 150 ms | `--ease-out-soft` |
| Entrée d'un écran ou d'une phase | 5 à 10 fois | 280 ms | `--ease-firm` |
| Entrée et sortie de session | 1 à 2 fois | 320 ms | `--ease-lift` |
| Remplissage d'une barre, révélation d'un résultat | 1 à 2 fois | 420 ms | linéaire / `--ease-out-soft` |

Deux durées dépassent le plafond habituel de 300 ms, et c'est délibéré : l'entrée
en session est un panneau qui remonte, vu une à deux fois par session ; le
remplissage des barres est un moment de bilan. Les autres restent sous le plafond.

**Les règles d'exécution qui ne se renégocient pas :**

- **Aucune courbe entrante.** Une courbe qui démarre lentement retarde
  précisément l'instant que l'utilisateur regarde — celui qui suit son geste.
- **Une sortie est plus rapide qu'une entrée.** L'ancien contenu ne doit pas
  disputer l'attention au nouveau.
- **Rien n'apparaît à partir de rien.** Les entrées partent d'une échelle déjà
  visible, jamais de zéro.
- **Deux propriétés seulement sont animées** — le déplacement et l'opacité. Elles
  ne déclenchent pas de remise en page. Une exception assumée : la largeur des
  barres de progression, faute d'équivalent.
- **Jamais de transition sur « toutes les propriétés ».** Elles sont énumérées.
- **Aucune valeur en dur.** Courbes et durées sont des tokens dans `globals.css`.
  Cinq `cubic-bezier` presque identiques dispersés dans le code sont un défaut de
  design system, pas un détail.
- **Le mouvement ne porte jamais seul une information.** Le repère de l'onglet
  actif est une barre qui glisse, mais aussi une couleur, une graisse et un
  `aria-current`. La correction d'un quiz est une couleur, mais aussi un mot.

**Mouvement réduit.** `prefers-reduced-motion` est une préférence exprimée par des
personnes pour qui le mouvement provoque un malaise. Les entrées sont déclarées en
`no-preference` plutôt que neutralisées après coup : sans animation, l'état affiché
est directement l'état final, il n'y a rien qui puisse rester invisible ou mal
placé. Les déplacements disparaissent, les fondus restent.

---

## 5. Le seul retrait effectué, et sa justification

Sur l'écran de progression, chaque auteur et chaque thème affichaient un décompte
de concepts **rencontrés** au-dessus d'une barre qui mesurait, elle, les concepts
**compris** — deux mesures différentes sur la même ligne, d'où des barres vides en
face de « 1/6 ». Les deux écrans affichent désormais la même mesure, avec le même
mot. Le décompte des rencontres n'est pas perdu : il reste en haut de l'écran de
progression et, concept par concept, sur la page de chaque auteur.

---

## 6. Où vivent les décisions dans le code

| Fichier | Ce qu'il porte |
|---|---|
| `src/app/globals.css` | L'échelle de neutres et les rôles, tous les tokens de mouvement, les classes de transition, le focus, les replis en mouvement réduit |
| `src/components/motion/screen-motion.ts` | Les quatre sens de circulation, et eux seuls |
| `src/components/motion/Screen.tsx` | La correspondance sens → animation, à poser dans chaque `page.tsx` |
| `src/components/ui/AppShell.tsx` | Les écrans immersifs et la réserve sous le contenu |

Une seule implémentation par mécanisme. Deux implémentations divergent, toujours.

---

## 7. Ce qui reste à vérifier

Les points suivants n'ont pas pu être contrôlés dans cet environnement, et sont
listés plutôt que supposés :

- Le rendu sur un téléphone d'entrée de gamme réel — les transitions ont été
  vérifiées sur Chromium de bureau uniquement.
- Le comportement sur Safari, dont l'implémentation des transitions de vue diffère
  sur certains points. L'application reste fonctionnelle sans elles : sans support,
  le contenu se substitue instantanément.
- La zone sûre du système sur un appareil à encoche, `env(safe-area-inset-bottom)`
  valant zéro sur un navigateur de bureau.
- La lisibilité en plein soleil, qui est le coût connu d'une application sans mode
  clair et qui ne se mesure pas depuis un écran de bureau.
- Le rendu du noir pur sur une dalle OLED réelle — notamment le lissé des dégradés
  de gris aux valeurs les plus basses de l'échelle.
