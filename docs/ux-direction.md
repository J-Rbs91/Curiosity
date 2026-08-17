# Direction UX de Curiosity

Ce document fixe les décisions de structure, de registre visuel et de mouvement.
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
| Tâche principale | Rencontrer un concept, le comprendre, éventuellement le prolonger ailleurs |
| Fréquence | Quotidienne, mais brève : une ouverture ou deux par jour, quelques minutes |
| Contexte | Téléphone, une main, souvent en déplacement. Application installable, données locales |
| Contrainte | Tout est côté client : la progression est lue dans le navigateur, jamais rendue par le serveur |

---

## 2. Le parti pris

```
Dimension porteuse  : le mouvement.
Écart assumé        : une grammaire de continuité spatiale, jouée avec ampleur.
                      Le corpus est un espace ; descendre dedans pousse le contenu
                      vers la gauche, remonter le ramène par la droite, entrer en
                      session le fait monter par-dessus l'application. Les
                      déplacements sont longs et larges, les fondus courts.
Où il se manifeste  : navigation entre écrans, phases de la session, changement
                      d'onglet, appui sur toute cible, arrivée de tout contenu.
Ce qui reste neutre : la palette — achromatique, §3 —, la typographie (deux
                      familles), le rythme (une colonne), la matière (aucune
                      ombre, aucun flou décoratif), l'imagerie (aucune, hors la
                      marque du §4 — qui est elle-même du mouvement).
Coût accepté        : trois courbes et huit durées à tenir comme des tokens ; un
                      repli en mouvement réduit pour chaque classe de transition ;
                      une dégradation silencieuse sans View Transitions API.
```

**Ce que « dépouillé » veut dire ici, traduit en décisions vérifiables** — un
qualificatif non traduit ne s'implémente pas :

| Intention | Décision observable |
|---|---|
| Dépouillé | Aucun compteur, aucune barre, aucun pourcentage, aucun réglage. Un écran ne porte que ce qu'il y a à comprendre |
| Sobre | Aucune couleur décorative · aucun dégradé · aucune ombre : sur du noir, une élévation se dit par la luminosité |
| Zéro distraction | Rien ne bouge sans qu'un état ait changé · la barre de navigation disparaît pendant une session · aucun mouvement ne retarde une information attendue |
| Ample | Le déplacement dure 560 ms sur 16 % de la largeur, quand le fondu en dure 300 |

**La distinction qui fait tout le travail :** ce qui sépare une application
volontairement minimaliste d'une application inachevée n'est pas la quantité de
choses retirées, c'est la **tenue de ce qui reste**. Un écran vide sans rythme
typographique, sans grammaire de mouvement et sans état soigné ressemble à un
chantier. C'est pourquoi le dépouillement s'accompagne ici d'un mouvement plus
long, pas plus discret.

---

## 3. La palette

**Application sombre, sans variante claire.** Fond noir, et une échelle de gris.

C'est une décision assumée : la méthode considère normalement le sombre-par-défaut
comme un choix esthétique déguisé en décision, et son critère de validation est
« le mode clair existe-t-il et tient-il ». Ici il n'existe pas. Ce qu'on y gagne se
paie par une lisibilité moindre en plein soleil ; les contrastes élevés ci-dessous
limitent ce coût sans l'annuler.

### L'échelle

Onze valeurs, numérotées comme celles de Tailwind : **50 est la plus claire, 950 la
plus sombre.** Ce n'est pas un dégradé — c'est une échelle de nuances, et chaque
barreau a un emploi.

| Valeur | Contraste sur le noir | Ce qu'elle a le droit de porter |
|---|---|---|
| `--n-950` `#000000` | — | Le fond |
| `--n-850` `#121212` | 1,12:1 | Une surface levée : onglet, réponse de quiz, pastille |
| `--n-800` `#1c1c1c` | 1,23:1 | La même surface au contact |
| `--n-600` `#3d3d3d` | 1,93:1 | Un séparateur, un filet |
| `--n-500` `#6b6b6b` | 3,94:1 | Une bordure ou une icône **fonctionnelle** — au-dessus du seuil de 3 |
| `--n-400` `#8f8f8f` | 6,49:1 | Un intitulé en capitales, un auteur, un texte tertiaire |
| `--n-300` `#b5b5b5` | 10,24:1 | Le texte secondaire |
| `--n-100` `#ededed` | 17,94:1 | Le texte principal |
| `--n-50` `#fafafa` | 20,12:1 | L'action principale, la position courante |

Les ratios sont calculés, pas estimés. Ils décident : `--n-500` ne peut pas porter
du texte courant (il lui manque 0,6 pour atteindre 4,5), et c'est exactement pour
ça qu'il porte les bordures, dont le seuil est de 3.

**Le texte principal n'est pas blanc pur** : sur du noir, le blanc pur produit un
halo qui fatigue à la lecture suivie, ce qui est précisément l'usage de ce produit.

### Deux règles

**L'accent n'est pas une couleur.** C'est `--n-50`, la valeur la plus claire de
l'échelle. Elle est rare et ne dit qu'une chose : voici l'action, ou voici où vous
êtes.

**La couleur ne signale que ce qui est juste, ce qui est faux, et ce qui est
irréversible.** Deux teintes désaturées, `--good` et `--warn`, et rien d'autre.
Jamais employées seules : « Exact. », « Pas tout à fait. » et « Effacer mes
données » sont écrits, faute de quoi l'information disparaîtrait pour qui ne
distingue pas ces deux teintes.

### Ce qui remplace les bordures

Sur du noir, un filet devrait atteindre le seuil de contraste des éléments
d'interface pour être perçu — il deviendrait alors plus bruyant que ce qu'il
entoure. Ce qui se manipule est donc une **surface levée** qui s'éclaircit au
contact. Une bordure ne réapparaît que lorsqu'elle porte un état : la bonne
réponse, la mauvaise, le contour d'un bouton secondaire. Cette bordure est
déclarée en permanence, transparente au repos — son apparition décalerait sinon la
mise en page d'un pixel au moment de la réponse.

---

## 4. La marque

Le nom porte un œil : le **O** de Curi**O**sity est un anneau avec une pupille, et cette
pupille regarde.

### La décision qui fait tout le travail

Un anneau d'épaisseur constante avec un point au milieu **ne se lit pas comme un œil**. Il se
lit comme une cible, ou comme un bouton d'enregistrement. Les deux ont été dessinés côte à
côte, de 16 à 160 px, avant de trancher : trois cercles concentriques et réguliers sont
exactement ce que le regard reconnaît le moins comme un regard.

Ce qui renverse la lecture est d'ouvrir la contre-forme **plus large que haute**. Le contour
extérieur reste un cercle parfait — donc un O —, l'intérieur devient une ouverture. L'anneau
est alors fin sur les côtés et épais en haut et en bas, ce qui est l'inverse du contraste d'un
O de labeur. Ce n'est pas une coquetterie typographique : c'est la seule chose qui empêche la
figure de retomber sur le disque concentrique, et elle ne s'applique qu'à ce caractère, qui
n'est plus tout à fait une lettre.

Deux graisses, pour une seule raison — la taille optique. Un favicon de 16 px rend un filet de
moins de 1,5 px comme une tache grise ; à l'inverse, la graisse d'icône ferait du O le seul
caractère gras du mot. Le rapport entre les deux épaisseurs de l'anneau, lui, ne change pas :
c'est lui qui fait la forme.

**Le mot est en sans-serif.** La règle du §5 s'applique — la serif porte ce qui se lit, le sans
porte ce qui se choisit, et un nom est une étiquette. Elle se double d'une raison de dessin :
l'anneau est d'épaisseur presque constante comme les fûts d'Inter, et détonnerait à côté du
contraste de la Source Serif. La capitale au milieu du mot n'est pas décorative non plus :
en bas de casse, l'œil serait plus petit que les hampes qui l'entourent et disparaîtrait.

### Le regard

La pupille joue **deux regards de trois fixations**, articulés par un double clignement rapide
et refermés par un clignement long. La séquence dure 4 800 ms, se repose au centre, puis se
relance après une pause tirée entre 2,34 et 5,67 secondes, tant que l'écran de premier
lancement est affiché.

**Ce que cette boucle ne remet pas en cause, et ce qu'elle coûte.** La règle « aucun mouvement
continu » du §7 tient. Elle n'admet pas d'exception, et ce n'en est pas une : la règle de
fréquence tranche avant tout le reste, et cette séquence se joue sur l'unique écran que
l'utilisateur ne reverra pas, où rien n'attend derrière elle. C'est la ligne « rare et
marquante » du tableau du §7, la seule qui autorise une séquence expressive. Nulle part
ailleurs la marque ne s'affiche — pas d'en-tête permanent, pas de favicon animé.

Le coût est réel et il est nommé : **la boucle est solidaire de cet écran, pas de la marque.**
Le jour où quelqu'un posera la marque dans un en-tête, ou même sur un second écran, c'est la
boucle qu'il faudra retirer, pas la règle qu'il faudra assouplir. Le fichier animé du dépôt le
montre déjà : il joue la séquence **une fois**, parce qu'une image qui boucle sur une page
qu'on défile est exactement le mouvement permanent qu'on s'interdit.

Ce qui fait qu'un point se lit comme un œil n'est pas l'amplitude, c'est le **rythme** : l'œil
humain ne balaie pas, il saute — quelques dizaines de millisecondes de saccade, puis deux à
trois cents millisecondes d'arrêt. C'est la raison pour laquelle une séquence trois fois plus
longue **n'est pas la même trois fois ralentie** : étirer quatre saccades sur 4 800 ms
donnerait des fixations de 1,1 s, c'est-à-dire un point qui fixe, plus un œil qui regarde. Le
temps supplémentaire achète des événements, pas de la lenteur.

| Ce qui se joue | Combien | Durée unitaire |
|---|---|---|
| Saccades | 8 | 144 ms — la durée d'un retour à l'appui |
| Fixations | 6, trois par regard | 264 ms au premier regard, 240 au second |
| Clignements rapides | 2, à la charnière des deux regards | 108 ms de chute, 36 clos, 132 de relevé |
| Clignement long | 1, à la fin | 204 ms de chute, 276 clos, 336 de relevé |

Les six fixations sont à distance sensiblement égale du bord de la contre-forme — la pupille en
occupe entre 52 et 60 % du dégagement disponible. Une orbite régulière, donc, et non six écarts
d'amplitudes différentes. Le second regard emprunte le côté droit de l'orbite là où le premier
tient le gauche : rejouer le même arc se lirait comme une boucle dans la boucle. Le déplacement
latéral est le plus ample, comme dans un regard réel, et c'est ce que la contre-forme ouverte
permet.

**Le clignement est une paupière, pas un clignotement.** Trois décisions le tiennent, et
chacune corrige un défaut constaté à l'arrêt sur image :

- Ce qui descend est une **courbe rase** — cinq unités de creux sur cinquante-cinq de hauteur —
  et non un hémisphère. Une paupière aussi bombée que la contre-forme voit sa propre pointe
  entrer dans le champ à mi-parcours : l'ouverture prend alors une forme d'amande crantée, et
  le clignement se lit comme une encoche.
- Elle **déborde de trois unités dans l'encre de l'anneau**. À l'identique, son contour et
  celui de l'anneau coïncident, deux bords lissés couvrent à moitié le même pixel, et l'œil
  clos apparaît cerné d'un liséré sombre au lieu d'être un disque plein.
- Les fermetures sont espacées de **480 ms au plus serré**, et la fermeture est un balayage de
  108 ms plutôt qu'une bascule. Fermé, le O est un disque d'encre pleine : le seuil opposable
  est de trois clignements par seconde, on en compte un peu plus de deux, et ce qu'on voit est
  un bord qui descend.

Ces trois valeurs sont des tokens de géométrie, et `npm test` vérifie la couverture de la
contre-forme aux deux extrêmes, dans les deux graisses, sur toute sa largeur.

**En mouvement réduit, la pupille est au centre, la paupière est relevée, et rien ne se
relance.** La séquence n'existe pas, donc aucune fin de séquence n'est annoncée et la pause ne
s'arme jamais — le repli n'est pas neutralisé après coup, il est l'état de repos. La marque n'y
perd rien : elle ne porte aucune information par son mouvement.

### Où elle se montre, et où elle ne se montre pas

| Support | Ce qui s'affiche |
|---|---|
| Écran de premier lancement | Le mot entier, et c'est le seul endroit où le regard joue |
| Onglet du navigateur, écran d'accueil, feuille de partage | L'œil seul, immobile |
| README, page de dépôt | `mark.svg`, ou `mark-animated.svg` qui joue la séquence une fois, sans boucler |

**Il n'y a pas d'en-tête permanent avec une signature.** Le §5 dit ce qu'un écran a le droit de
porter, et un logo n'y figure pas : il n'apprendrait rien à quelqu'un qui a déjà ouvert
l'application. On se présente une fois.

**Le favicon n'est pas animé**, et pas seulement par convention : un onglet qui bouge est un
mouvement qu'on n'a pas déclenché, dans une zone qu'on ne regardait pas.

### Les fichiers

Un seul dessin, neuf fichiers. Aucun ne se retouche à la main : ils sont générés depuis
`src/components/ui/mark-geometry.mjs`, qui est la seule définition de la géométrie et que
partagent le composant React et le générateur.

```bash
npm run icons   # regénère les quatre vecteurs, les quatre PNG et le favicon.ico
```

Le générateur n'a **aucune dépendance** : il dessine par distances signées et encode le PNG
avec le `zlib` de Node. Ajouter plusieurs dizaines de mégaoctets de binaires natifs pour
tracer un anneau et un disque aurait été hors de proportion.

`npm test` vérifie ce qui casse silencieusement : que la pupille ne touche jamais son anneau
dans aucune fixation et dans les deux graisses, que l'anneau reste visible à 16 px, et que
chaque fixation de la géométrie est bien celle que la feuille de style réclame. Ce dernier
contrôle existe parce que la panne est arrivée : une propriété personnalisée qui ne résout
rien ne produit pas d'erreur, elle produit une animation qui tourne sans que rien ne bouge.

---

## 5. Ce que l'interface affiche, et ce qu'elle n'affiche plus

**Quatre éléments, et rien d'autre, sur l'écran du jour :** le thème, le concept,
son résumé, son auteur.

Ont été retirés, et ne doivent pas revenir sans une raison écrite :

| Retiré | Pourquoi |
|---|---|
| Les durées annoncées (« 5 min ») | Une lecture ne s'annonce pas par un chiffre ; l'annonce crée une attente que le texte ne tient jamais exactement |
| Le réglage de niveau d'explication | La difficulté d'un concept se lit dans son texte, pas dans une préférence choisie une fois pour toutes |
| Le réglage de durée préférée | Même raison, et il ne pilotait qu'un chiffre affiché |
| Les compteurs et les barres de progression | Ils mesuraient l'application, pas la compréhension |
| Le niveau de maîtrise affiché (« Découvert », « Compris ») | Une étiquette de score sur un concept qu'on vient de lire déplace l'attention du contenu vers le tableau de bord |
| L'écran de progression | Il ne contenait que ce qui précède |
| Le type de session affiché (« Découverte · ») | Information sur le mécanisme interne, pas sur ce qu'il y a à comprendre |

**Le suivi n'a pas disparu, il a cessé d'être une interface.** La progression, la
répétition espacée et le score de maîtrise continuent de fonctionner : c'est eux
qui choisissent le concept du jour et qui décident si l'on découvre ou si l'on
revoit. Ils ne se consultent simplement plus, et ne se règlent plus.

**Deux destinations.** « Aujourd'hui » et « Explorer ». Les réglages, réduits à
l'effacement des données, sont derrière une icône dans l'en-tête d'Explorer.
Retirer cet effacement enfermerait l'utilisateur dans un historique qu'il ne
pourrait plus défaire — c'est la seule raison pour laquelle cet écran existe
encore.

### La liste d'Explorer

Trois niveaux de gris, trois natures d'information : le **nom** qu'on cherche, la
**phrase** qui dit ce qu'on y trouvera, les **notions** qui permettent de
reconnaître un terrain sans le lire.

Deux règles y sont tenues, et une contribution qui les casserait se verrait :

- **Rien n'est tronqué.** Une phrase coupée oblige à ouvrir pour savoir si l'on
  voulait ouvrir — exactement le contraire du service que rend une liste. Les
  phrases sont donc écrites courtes (46 à 61 caractères) plutôt que rognées à
  l'affichage, et un contrôle en vérifie l'absence de troncature à 320 px.
- **Le nom est en sans-serif.** La serif porte ce qui se lit — un titre de
  concept, un texte ; le sans porte ce qui se choisit. Un nom propre dans une
  liste de destinations est une étiquette, pas un texte.

Les champs correspondants sont `tagline` et `keywords` sur `Author` et `Theme`.
Les textes longs — `bio`, `description` — restent réservés aux fiches, où ils
sont lus plutôt que balayés.

---

## 6. Le bouton « + » — envoyer un concept à une IA

Présent sur l'écran du jour, sur la fiche d'un concept, et à la fin d'une session.

**Aucune application d'IA n'est nommée ni détectée.** Le partage passe par la
feuille de partage du système, qui liste déjà les applications capables de recevoir
du texte : c'est le système qui sait ce qui est installé, pas nous. Une liste
maintenue à la main serait fausse le jour de sa première mise en ligne. Là où le
partage natif n'existe pas — un navigateur de bureau —, le texte part dans le
presse-papiers, et on le dit.

**Ce n'est pas un partage, c'est une commande.** Les quatre éléments visibles à
l'écran ne sont que le contexte ; l'essentiel du texte envoyé dit quoi en faire :
une explication continue qui monte du débutant au spécialiste, trois exemples de
nature différente, les limites du concept, les voisins avec lesquels on le confond,
des sources datées et trois recommandations classées.

Deux exigences du prompt sont structurelles et ne doivent pas disparaître d'une
réécriture — `src/domain/concepts/ai-prompt.ts` et ses tests les tiennent :

1. **La progression ne se nomme jamais.** Le prompt interdit explicitement d'écrire
   « débutant », « intermédiaire » ou « expert ». Sans cette interdiction, tous les
   modèles produisent trois sections étiquetées, ce qui découpe en paliers ce qui
   doit se lire d'un trait.
2. **Une lacune se déclare, elle ne se comble pas.** Le prompt demande de signaler
   une référence incertaine plutôt que de l'inventer. C'est la seule protection
   possible, à distance, contre une bibliographie plausible et fausse.

---

## 7. Le budget de mouvement

| Ce qui bouge | Durée | Courbe |
|---|---|---|
| Appui sur une cible | 140 ms | `--ease-out-soft` |
| Onglet, sélection, repère de position | 220 ms | `--ease-out-soft` |
| Sortie d'un écran ou d'une phase | 220 ms | `--ease-out-soft` |
| Apparition du nouveau contenu (fondu) | 300 ms | `--ease-out-soft` |
| Glissement d'un écran ou d'une phase | 560 ms sur 16 % / 10 % | `--ease-lift` |
| Entrée et sortie de session | 640 ms | `--ease-lift` |
| Le concept qu'on vient de travailler | 720 ms | `--ease-lift` |
| Le regard de la marque | 4 800 ms, sur le seul écran de premier lancement | `--ease-out-soft` |

**La marque est la seule durée à dépasser la seconde, et la seule chose qui se relance.** La
séquence ne joue qu'à l'écran de premier lancement — voir §4 —, et elle y boucle avec une pause
tirée entre 2,34 et 5,67 secondes. Elle n'est pas une durée d'interface : c'est huit saccades de
144 ms, six fixations et trois clignements, et aucune information n'attend derrière elle. Une
valeur de cet ordre sur quoi que ce soit d'autre serait à refuser, et la boucle plus encore.

**Ce que la règle « aucun mouvement continu » interdit, et ce qu'elle n'interdit pas.** Elle
interdit qu'une chose bouge alors que rien n'a changé, sur une surface qu'on revient voir. La
règle de fréquence tranche avant elle : cet écran-ci est vu une fois par installation, et c'est
la seule raison pour laquelle la boucle y est admissible. Elle ne se déduit pas de la marque, ne
se transpose à aucune autre surface, et disparaît avec l'écran qui la porte.

**Le déplacement et le fondu sont dissociés, et c'est ce qui rend un mouvement long
agréable plutôt que lent.** Le contenu est entièrement lisible en 300 ms pendant
qu'il continue de glisser jusqu'à son repos pendant 560. Réunir les deux durées
donnerait une interface qu'on attend ; les séparer donne une interface qui arrive
vite et se pose doucement. C'est la seule raison pour laquelle on peut dépasser
ici le plafond de 300 ms que la méthode retient par défaut — et le retour à
l'appui, lui, ne le dépasse pas : il est vu vingt fois par session.

**Les règles d'exécution qui ne se renégocient pas :**

- **Aucune courbe entrante.** Une courbe qui démarre lentement retarde précisément
  l'instant que l'utilisateur regarde — celui qui suit son geste.
- **Rien n'apparaît à partir de rien.** Les entrées partent d'une échelle déjà
  visible.
- **Deux propriétés seulement sont animées** — le déplacement et l'opacité. Elles
  ne déclenchent pas de remise en page.
- **Les amplitudes sont en pourcentage**, jamais en pixels : la même valeur tient
  sur toutes les tailles d'écran.
- **Jamais de transition sur « toutes les propriétés ».** Elles sont énumérées.
- **Aucune valeur en dur.** Courbes, durées et amplitudes sont des tokens.
- **Le mouvement ne porte jamais seul une information.** Le repère de l'onglet
  actif est une barre qui glisse, mais aussi une couleur et un `aria-current`.
- **Aucun mouvement continu.** Rien ne pulse, ne flotte ni ne tourne au repos. La seule
  séquence qui se relance est celle de la marque, sur le seul écran vu une fois par
  installation — voir le paragraphe ci-dessus, qui dit pourquoi ce n'est pas une exception.
- **Une transition en cours n'avale pas les clics** — sans quoi un déplacement de
  560 ms serait un blocage de 560 ms.

**Mouvement réduit.** Les entrées sont déclarées en `no-preference` plutôt que
neutralisées après coup : sans animation, l'état affiché est directement l'état
final, il n'y a rien qui puisse rester invisible ou mal placé. Les déplacements
disparaissent, les fondus restent.

---

## 8. Navigation — les décisions tenues

| Décision | Ce qu'elle corrige |
|---|---|
| La barre de navigation disparaît sur `/learn` | Pendant une session, l'écran proposait des sorties concurrentes ; partir par un onglet abandonnait la session sans que rien ne l'ait dit |
| Un retour d'étape dans la session | Il n'y avait aucun moyen de relire l'explication après l'avoir dépassée. Le retour ne rejoue pas les enregistrements de progression, et le résultat reste terminal |
| L'écran de fin mène à la fiche du concept | La session se terminait en cul-de-sac |
| L'onglet d'Explorer vit dans l'URL | Revenir d'une fiche ramenait systématiquement sur « Auteurs » |
| Retour nommé sur toutes les fiches | La fiche de concept revenait par l'historique du navigateur — depuis une fin de session, cela renvoyait dans la session qu'on venait de quitter |
| Focus visible partout | Il n'existait aucun style de focus |
| Réserve sous le contenu calculée | Le retrait bas était une valeur fixe qui ne tenait pas compte de la zone sûre du système |

---

## 9. Où vivent les décisions dans le code

| Fichier | Ce qu'il porte |
|---|---|
| `src/app/globals.css` | L'échelle de neutres, les rôles, tous les tokens de mouvement, le focus, les replis en mouvement réduit |
| `src/components/motion/screen-motion.ts` | Les quatre sens de circulation, et eux seuls |
| `src/components/motion/Screen.tsx` | La correspondance sens → animation, à poser dans chaque `page.tsx` |
| `src/components/ui/AppShell.tsx` | Les écrans immersifs et la réserve sous le contenu |
| `src/domain/concepts/ai-prompt.ts` | Le texte envoyé aux applications d'IA |
| `src/components/ui/mark-geometry.mjs` | La géométrie de la marque, et elle seule |
| `src/components/ui/Mark.tsx`, `Wordmark.tsx` | L'œil et le mot, aux deux tailles optiques |
| `scripts/icons/build-icons.mjs` | Les neuf fichiers d'icônes, dérivés de la géométrie |

Une seule implémentation par mécanisme. Deux implémentations divergent, toujours.

---

## 10. Ce qui reste à vérifier

Listé plutôt que supposé :

- Le rendu sur un téléphone d'entrée de gamme réel — les transitions ont été
  vérifiées sur Chromium de bureau uniquement. C'est le point le plus sensible
  depuis que les déplacements durent 560 ms.
- Le comportement sur Safari, dont l'implémentation des transitions de vue diffère.
  Sans support, le contenu se substitue instantanément et l'application reste
  fonctionnelle.
- La feuille de partage réelle d'iOS et d'Android : quelles applications d'IA
  apparaissent, et si le prompt complet leur parvient sans troncature.
- La lisibilité en plein soleil, coût connu d'une application sans mode clair.
- La zone sûre sur un appareil à encoche, `env(safe-area-inset-bottom)` valant zéro
  sur un navigateur de bureau.
