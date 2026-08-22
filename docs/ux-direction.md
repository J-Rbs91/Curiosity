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
| Contexte | Téléphone, une main, souvent en déplacement — c'est l'usage qui commande. Aussi un navigateur de bureau, où la mise en page s'ouvre sans que le produit change (§9). Application installable, données locales |
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
| `--n-200` `#d4d4d4` | 14,17:1 | Le texte d'une lecture suivie — et lui seul |
| `--n-100` `#ededed` | 17,94:1 | Le texte principal |
| `--n-50` `#fafafa` | 20,12:1 | L'action principale, la position courante |

Les ratios sont calculés, pas estimés. Ils décident : `--n-500` ne peut pas porter
du texte courant (il lui manque 0,6 pour atteindre 4,5), et c'est exactement pour
ça qu'il porte les bordures, dont le seuil est de 3.

**Le texte principal n'est pas blanc pur** : sur du noir, le blanc pur produit un
halo qui fatigue à la lecture suivie, ce qui est précisément l'usage de ce produit.

**Et le halo commence avant le blanc pur.** C'est la raison d'être de `--n-200`, qui
n'existait pas et dont l'absence se voyait sur un seul écran. Le texte long ne peut
prendre ni le gris du texte secondaire, qui tient sur trois lignes et coûte à chaque
paragraphe sur huit minutes, ni celui du texte principal, qui rayonne au bout du même
temps. 14,17:1 est le point entre les deux, et il reste **sous** le texte principal :
un titre se repère, un texte se lit, et l'ordre des valeurs dit lequel est lequel.

Ce barreau n'a qu'un emploi. Le poser ailleurs ferait quatre gris de texte là où trois
suffisent, et le contraste cesserait de porter une information.

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

Il y a **deux partitions**, et il n'y en aura pas de troisième. Elles partagent le dessin,
l'orbite et les fixations ; ce qui les sépare est le **temps**, et c'est la seule chose qui
décide si un œil cherche ou s'il attend.

| | `scanning` — l'ouverture | `waiting` — le titre d'Explorer |
|---|---|---|
| Durée | 4 800 ms | 7 200 ms |
| Saccades | 8 | 4 |
| Fixations | 6, de 240 à 264 ms | 3, de 864 à 1 656 ms |
| Clignements | 3, dont un double rapide | 2, tous deux lents |
| Pause entre deux passages | 2,34 à 5,67 s | 4,68 à 9,36 s |
| Part du temps où quelque chose bouge, pause moyenne comprise | 24,7 % | 16,7 % |

**Pourquoi la seconde n'est pas la première rejouée.** C'était le geste facile, et il aurait dit
le contraire de l'écran. Un œil qui visite six positions en 4,8 secondes **cherche quelque
chose** ; Explorer est précisément la page où c'est le lecteur qui cherche et qui choisit, et où
l'interface n'a rien à trouver à sa place. Le mouvement aurait raconté l'inverse de ce que la
page demande — et deux écrans jouant la même séquence auraient fait de la marque un motif décoratif
plutôt qu'un regard.

**Ce que `waiting` fait de moins, et pourquoi c'est le sujet.** Quatre saccades au lieu de huit,
et **toutes dans le même sens** : l'œil quitte le centre par le haut, descend le flanc gauche de
l'orbite — `up`, `left`, `down` —, puis revient d'un seul mouvement. Aucun demi-tour, aucune
position reprise, un seul quart d'orbite parcouru lentement. C'est ce qui manque au regard qui
parcourt, et c'est ce qui fait toute la différence : un œil qui change huit fois de direction
fouille ; celui-ci n'attend rien de précis.

**Ce n'est pas la même séquence ralentie, et la distinction n'est pas rhétorique.** Ralentir les
saccades donnerait une pupille qui glisse, c'est-à-dire un point qui flotte et non plus un œil —
c'est le rythme saut/arrêt qui fait lire un regard, et il ne se négocie dans aucune des deux
partitions. Les saccades de `waiting` durent donc 216 ms, à peine plus que les 144 de
l'ouverture : un mouvement sans urgence n'est pas un mouvement lent. Ce qui s'allonge, c'est ce
qui se passe entre elles, c'est-à-dire rien. `npm test` vérifie que les deux ne convergent pas :
la fixation la plus courte de `waiting` doit dépasser la plus longue de `scanning`, ses
clignements être plus lents que le plus lent de l'autre, et son parcours ne jamais s'inverser.

**Le second endroit se revoit, et c'est là que la boucle coûte quelque chose.** L'écran
d'ouverture était la surface idéale d'une séquence expressive : on ne la regarde pas deux fois de
suite, et rien n'attend derrière elle. L'en-tête d'Explorer n'est pas cette surface — c'est un
onglet, on y revient plusieurs fois par ouverture. Le §7 dit ce que ce coût change au budget de
mouvement, et à quelle condition il reste payé ; l'essentiel tient dans la dernière ligne du
tableau ci-dessus, où `waiting` rend en immobilité ce qu'elle prend en durée. Ce dernier chiffre
compte les saccades **et** les paupières en mouvement, rapportées au cycle entier — séquence plus
pause moyenne. Sur l'en-tête qu'on revient voir, il y a donc un tiers de mouvement en moins que
sur l'écran qu'on ne revoit pas.

Ce que ce second endroit ne fait pas, en revanche, c'est ajouter une signature : **ce n'est pas
la marque qui est dans cet en-tête, c'est le titre de l'écran.** Il est dans la serif des titres,
à la taille des titres, et il se lit « Explorer » ; une seule de ses lettres est dessinée au lieu
d'être composée, et elle en garde la casse, la hauteur d'œil et la chasse. Le §5 continue donc
d'exclure ce qu'il excluait — un logo posé en en-tête, qui n'apprendrait rien à qui est déjà
entré. Le nom du produit, lui, ne s'affiche toujours qu'au seuil.

Le fichier animé du dépôt, lui, joue la séquence **une fois**, sans boucler : une image qui
boucle sur une page qu'on défile est exactement le mouvement permanent qu'on s'interdit.

#### `scanning` — le regard qui parcourt

La pupille joue **deux regards de trois fixations**, articulés par un double clignement rapide
et refermés par un clignement long.

Ce qui fait qu'un point se lit comme un œil n'est pas l'amplitude, c'est le **rythme** : l'œil
humain ne balaie pas, il saute — quelques dizaines de millisecondes de saccade, puis deux à
trois cents millisecondes d'arrêt. C'est la raison pour laquelle une séquence trois fois plus
longue que celle qui la précédait **n'est pas la même trois fois ralentie** : étirer quatre
saccades sur 4 800 ms donnerait des fixations de 1,1 s, c'est-à-dire un point qui fixe, plus un
œil qui regarde. Le temps supplémentaire achète des événements, pas de la lenteur.

| Ce qui se joue | Combien | Durée unitaire |
|---|---|---|
| Saccades | 8 | 144 ms — la durée d'un retour à l'appui |
| Fixations | 6, trois par regard | 264 ms au premier regard, 240 au second |
| Clignements rapides | 2, à la charnière des deux regards | 108 ms de chute, 36 clos, 132 de relevé |
| Clignement long | 1, à la fin | 204 ms de chute, 276 clos, 336 de relevé |

#### `waiting` — le regard qui attend

Un seul regard, trois fixations tenues, et un quart d'orbite descendu sans jamais revenir sur
ses pas.

| Ce qui se joue | Combien | Durée unitaire |
|---|---|---|
| Saccades | 4, toutes dans le même sens | 216 ms, et 288 pour le retour au repos |
| Fixations | 3, sur le flanc gauche | 1 368 ms, 1 656 et 864 |
| Clignements lents | 2 — au creux de la fixation latérale, puis sur le repos final | 288 ms de chute, 360 clos, 432 de relevé |

Le retour au repos est la seule saccade plus lente que les autres, dans les deux partitions comme
dans un œil réel : revenir sur ce qu'on regardait est un mouvement décidé, pas un mouvement
attiré. Le double clignement rapide de l'ouverture n'a rien à faire ici — il articulait deux
regards, et il n'y en a qu'un.

**Les amplitudes ne changent pas d'une partition à l'autre**, et c'est délibéré : l'orbite est
la marque. Elles se trouvent déjà réduites de fait, le titre d'Explorer rendant la marque à
15,6 px là où le nom la rend à 25,6 — les déplacements y valent de 4,4 à 6,2 pixels d'écran,
mesurés à l'écran et non déduits. Les réduire encore aurait rendu le regard illisible avant de le
rendre calme ; c'est le temps qui porte le calme, jamais l'amplitude.

Les six fixations de l'orbite sont à distance sensiblement égale du bord de la contre-forme — la
pupille en occupe entre 52 et 60 % du dégagement disponible. Une orbite régulière, donc, et non
six écarts d'amplitudes différentes. Le déplacement latéral est le plus ample, comme dans un
regard réel, et c'est ce que la contre-forme ouverte permet. C'est cette même orbite que les deux
partitions parcourent : `scanning` en visite les six positions — son second regard empruntant le
côté droit là où le premier tient le gauche, rejouer le même arc se lisant comme une boucle dans
la boucle —, `waiting` n'en descend qu'un quart.

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
  un bord qui descend. `waiting` est trois fois plus large sur les trois valeurs, et ses deux
  clignements sont séparés de plus de trois secondes ; le contrôle porte sur les deux partitions
  sans distinction, parce que c'est celle qu'on écrira ensuite qui en aura besoin.

Ces trois valeurs sont des tokens de géométrie, et `npm test` vérifie la couverture de la
contre-forme aux deux extrêmes, dans les deux graisses, sur toute sa largeur.

**En mouvement réduit, la pupille est au centre, la paupière est relevée, et rien ne se
relance.** Aucune des deux séquences n'existe, donc aucune fin de séquence n'est annoncée et la
pause ne s'arme jamais — le repli n'est pas neutralisé après coup, il est l'état de repos. La
marque n'y perd rien : elle ne porte aucune information par son mouvement.

**Le nom de la partition est ce qui la choisit, et il n'y a pas de booléen.** `Mark` reçoit
`gaze="scanning"`, `gaze="waiting"`, ou rien — auquel cas la marque est immobile. Un `animate`
vrai ou faux ne saurait pas dire laquelle des deux, il faudrait une seconde propriété pour le
préciser, et l'on pourrait alors demander une séquence sans l'animer. Les deux mots, eux, gardent
un `animate` booléen : **laquelle** jouer appartient au mot et se lit à côté de ses autres cotes,
**si** elle joue appartient à l'écran et se paie sur le budget du §7.

### Où elle se montre, et où elle ne se montre pas

| Support | Ce qui s'affiche |
|---|---|
| Écran d'ouverture | Le mot entier, et `scanning` y joue |
| En-tête d'Explorer | Le seul o du titre, et `waiting` y joue |
| Onglet du navigateur, écran d'accueil, feuille de partage | L'œil seul, immobile |
| README, page de dépôt | `mark.svg`, ou `mark-animated.svg` qui joue `scanning` une fois, sans boucler |

**Il n'y a toujours pas d'en-tête permanent avec une signature.** Le §5 dit ce qu'un écran a le
droit de porter, et un logo n'y figure pas : il n'apprendrait rien à quelqu'un qui est déjà
entré. Le o d'Explorer n'en est pas un — c'est une lettre du titre, pas le nom du produit posé à
côté. La marque, elle, se montre au seuil et nulle part après.

**Le dessin s'ajuste à la lettre qu'il remplace, et les cotes se relèvent, elles ne se
choisissent pas.** Trois valeurs en em : la hauteur de l'encre du glyphe, ce qu'elle descend sous
la ligne de base, et l'approche qui rend au mot la chasse qu'il aurait sans substitution. Prendre
la hauteur de l'encre plutôt que la hauteur de référence règle le débord d'un seul geste — une
forme ronde doit dépasser en haut et en bas pour paraître aussi haute qu'une forme plate, et le
glyphe remplacé le fait déjà. Le O d'Inter en capitale et le o de la Source Serif en bas de casse
ne demandent donc pas deux méthodes, seulement deux relevés : ils sont dans
`src/components/ui/Wordmark.tsx`, chacun avec le sien.

**Le seuil se franchit à chaque ouverture, et non plus une seule fois.** L'écran était celui du
premier lancement ; il est devenu celui de l'ouverture. On ouvre cette application pour une
carte et une seule : la franchir volontairement est ce qui sépare la lire de tomber dessus, et
c'est ce que la phrase de cet écran annonce depuis le début — « à chaque ouverture ». Ce qui le
rend tenable quotidiennement tient à la définition d'une ouverture : revenir de ses messages au
bout de dix secondes n'en est pas une, aller d'Explorer à Aujourd'hui non plus. Le critère est
dans `src/lib/app-entry.ts`.

**Une ouverture se dépense au franchissement, pas à l'affichage.** La distinction n'est pas
scolastique : l'écran d'Aujourd'hui se démonte dès qu'on passe sur Explorer, et le tenir pour
franchi parce qu'il s'est montré suffisait à perdre le rituel. Quitter le seuil sans l'avoir
touché puis revenir — par le geste retour ou par l'onglet — affichait la carte d'elle-même, et
la découverte était faite à la place du lecteur. Tant que « Concept du jour » n'a pas été
pressé, l'ouverture reste en attente et l'accueil se retrouve intact. Une fois pressé, il ne
revient qu'à l'ouverture suivante — sans quoi il serait bien la taxe qu'on refuse.

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

### Les trois coupes d'Explorer

**Domaines · Thèmes · Auteurs**, dans cet ordre, « Domaines » par défaut.

Le corpus est organisé en quatre familles et onze domaines, et le lecteur doit pouvoir s'y
situer sans connaître les disciplines académiques. D'où l'ordre de lecture de la coupe
« Domaines » : le nom de la famille en petites capitales, puis **sa question directrice en
serif, en gros** — c'est elle qui dit ce qu'on vient chercher, quand « pilotage » ne dit
rien à personne. Puis les domaines de la famille, en lignes ordinaires.

**Et « en gros » veut dire quelque chose de vérifiable.** La question est deux fois plus
appuyée que ce qu'elle commande : 20,7 px en graisse 600 contre 17,3 px en graisse 400. Une
version antérieure les rendait à la même graisse et dans la même couleur, à deux pixels de
taille près — un niveau 1 indiscernable de son niveau 2, et quatre questions noyées sous onze
noms de domaine. Le rapport de graisse est ce qui porte l'écart ; la taille seule ne suffisait
pas, et augmenter la taille seule aurait coûté des lignes sans gagner en clarté.

Trois décisions, et une contribution qui les casserait se verrait :

- **Une famille n'est pas cliquable.** Lui donner une page ajouterait un palier qui ne
  contiendrait que ce qui est déjà à l'écran. La hiérarchie se voit, elle ne se traverse pas.
- **L'état du corpus se dit dans la liste**, pas seulement sur la page du domaine : c'est dans
  la liste qu'on choisit où aller, et l'apprendre après avoir ouvert est le pire moment. Il se
  dit **par la positive** — « 8 cartes », dans le gris du texte principal — et l'absence garde
  sa phrase entière, en gris tertiaire : « Corpus en cours de constitution », jamais
  « 0 résultat », qui se lit comme une panne. L'inverse a été essayé et mesuré : quand seule
  l'absence était marquée, le seul domaine utilisable était signalé par un vide, et il fallait
  lire onze lignes pour trouver celle qui manquait.
- **Aucun compte de ce qui est déjà à l'écran.** Les domaines d'une famille sont tous visibles
  sous elle ; les compter n'apprend rien, et le chiffre s'intercalait exactement là où
  l'en-tête doit s'ancrer sur son groupe. Un compte n'apparaît que devant une liste qu'on ne
  voit pas entière — « Thèmes · 9 » —, et sous un seul format dans toute l'application.
- **Thèmes et auteurs ne se regroupent par domaine que lorsqu'il y en a plusieurs.** La
  condition porte sur les données, jamais sur un domaine nommé : tant qu'un seul domaine est
  pourvu, un en-tête unique n'apprendrait rien et la liste reste celle de la V1.

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

### Le rythme vertical d'une liste

Trois écarts, et c'est leur **rapport** qui fait comprendre un regroupement — pas leur valeur.

| Écart | Rôle | Valeur |
|---|---|---|
| `--gap-anchor` | Un en-tête et la liste qu'il commande | 24 px |
| `--gap-row` | Deux frères d'une même liste | 32 px |
| `--gap-group` | Deux groupes de premier niveau | 72 px |

Deux règles les gouvernent, et elles sont mesurables sur le rendu :

- **L'écart entre deux groupes vaut au moins le double de l'écart entre frères.** 72 / 32 =
  2,25. Une version antérieure valait 64 / 36 = 1,78, et quatre familles se lisaient alors
  comme une seule liste continue.
- **L'écart d'ancrage est nettement inférieur à l'écart entre frères.** 24 / 32 = 0,75. Il
  valait 32 / 36, soit une différence de 4 px : rien ne disait qu'un en-tête commandait la
  liste sous lui, et il se lisait comme une ligne de plus.

**Le cloisonnement se fait par l'espace, jamais par un filet.** C'est la même raison qu'au §3 :
sur du noir, une bordure devrait atteindre le seuil de contraste des éléments d'interface pour
être perçue, et serait alors plus bruyante que ce qu'elle sépare. Quand une liste paraît plate,
c'est de l'espace qui manque, pas une ligne.

Les lignes de liste portent un remplissage qui agrandit la cible tactile sans déplacer le
texte : les marges du CSS en retranchent ce remplissage, et c'est la seule raison de leurs
`calc`. Les valeurs ci-dessus sont des écarts **de texte à texte**, qui sont ce que l'œil
mesure.

### L'échelle typographique

Six pas, **en rem**, de rapport 1,2 — le plus petit auquel deux niveaux voisins se distinguent
isolément, et pas seulement côte à côte.

| Jeton | Valeur | Emploi |
|---|---|---|
| `--text-xs` | 0,75 rem · 12 px | Chapeau, méta, barre de navigation |
| `--text-sm` | 0,9 rem · 14,4 px | Texte tertiaire, phrase d'une ligne de liste |
| `--text-md` | 1,08 rem · 17,3 px | Texte courant, intitulé de liste |
| `--text-lg` | 1,295 rem · 20,7 px | Question de famille, accroche |
| `--text-xl` | 1,555 rem · 24,9 px | Titre de l'écran de présentation |
| `--text-2xl` | 1,866 rem · 29,9 px | Titre d'écran |

**Six pas, et une taille qui n'en est pas un septième.** Le texte de l'écran de lecture est
rendu à 1,17 rem, valeur qui ne figure pas dans le tableau parce qu'elle n'y a pas sa place :
c'est `--text-md` **rendu dans l'autre famille**, et non un niveau de hiérarchie de plus. La
hauteur d'x de la Source Serif vaut 0,500 em contre 0,547 pour Inter ; à taille nominale égale,
changer de famille aurait rapetissé le texte de 9 % au moment précis où l'on cherchait à le
rendre plus lisible. Le rendu confirme la parité — 9,36 px de hauteur d'x contre 9,45 avant.

La règle qui en découle : une taille optique se justifie par une mesure sur les deux familles,
et elle ne devient jamais un pas de l'échelle. Une seconde valeur de ce genre, sans mesure
derrière elle, serait un septième pas déguisé.

**L'unité n'est pas un détail.** Une taille écrite en pixels ne s'indexe sur rien : la
préférence de taille de police du lecteur reste alors sans effet. L'application en comptait
onze, littérales, dont sept entre 12 et 19 px — trop proches pour se distinguer, et toutes
figées. Pire, les quelques utilitaires restés en rem grossissaient, eux : à police 24 px,
l'étiquette de la barre de navigation devenait plus grosse que l'intitulé de famille.

**Le zoom par pincement n'est pas bloqué**, et c'est la même décision : `maximumScale` ne
figure pas dans le `viewport`. Les deux vont ensemble — rétablir l'un sans l'autre laisse le
lecteur sans levier.

**Un chapeau, un seul traitement.** L'intitulé en capitales espacées qui situe sans être lu est
porté par la classe `.eyebrow`, jamais par une balise. La règle serif ne s'applique plus à
`h1, h2, h3` : elle attrapait tout `h2` quel qu'en soit le rôle, et le même chapeau se rendait
en deux familles selon une décision de structure de document. C'est aussi ce que dit la règle
du §5 — la serif porte ce qui se lit, le sans porte ce qui se choisit —, et un chapeau ne se
lit pas, il étiquette.

**Ce qui reste discutable, et qui est écrit ici pour ne pas être oublié :** les libellés de
famille font quatre à six mots et sont rendus en capitales forcées, ce qui supprime les repères
de forme des mots au moment précis où l'on balaie. Deux des quatre passent sur deux lignes à
375 px. La décision de l'ordre famille → question tient ; la casse, elle, n'a pas été
rearbitrée. Voir B9 de [`audit-navigation-lecture.md`](audit-navigation-lecture.md).

### La situation d'abord, la dissertation ensuite

Sur la page d'un domaine, d'un thème ou d'un auteur, ce qui s'affiche d'emblée est la **phrase
de situation** — `tagline` —, et le texte long — `description`, `bio` — attend qu'on le
demande.

Ce n'est pas une troncature : le corpus porte les deux champs, écrits pour deux usages. La
description entière en tête repoussait le premier lien à 574 px sur une zone visible de 599, et
la page qui existe pour donner accès à ses neuf thèmes n'en montrait aucun à l'arrivée. Le
critère est observable : **au moins deux entrées de liste visibles sans défiler, en 375 × 667.**

---

## 6. Le bouton « Approfondir » — un texte, puis le relais

Présent sur l'écran du jour et sur la fiche d'un concept. Il ouvre un texte d'environ mille
cinq cents mots qui développe le concept : `/explore/concept/approfondir/?c=<slug>`.

**Ce texte est écrit à l'avance, et c'est tout le sujet.** Il est produit hors ligne, une
carte à la fois, contrôlé, puis projeté dans le dépôt comme le corpus lui-même
(`corpus/deepenings/`, `npm run corpus:deepen`). L'application ne parle à aucun modèle : ni au
moment du clic, ni ailleurs. Elle est exportée en statique, sans serveur ni clé d'API, et le
texte affiché existait avant qu'on appuie.

Ce n'est pas un renoncement technique, c'est ce qui rend le texte relisable. Une réponse
produite au moment du clic n'a été lue par personne quand elle s'affiche ; celle-ci a passé le
même contrôle que le reste — les volumes, l'absence de balisage, l'interdiction du tiret
cadratin, les titres qui ne peuvent pas étiqueter un palier de difficulté, et un champ
`limits` qui doit nommer ce qui manque plutôt que de multiplier les précautions.

### Ce que le texte fait, et ce qu'il ne fait pas

Il **prolonge** la carte, il ne la répète pas. Elle était à l'écran l'instant d'avant : le
premier paragraphe qui la paraphrase perd le lecteur pour de bon. Ce qu'il ajoute est le
mécanisme — pourquoi le concept produit ce qu'il produit, où il cesse de s'appliquer, ce qu'il
ne dit pas.

Il monte du premier abord jusqu'à un niveau académique substantiel **sans jamais l'annoncer**.
C'est la première des quatre exigences documentaires, et la seule que le validateur peut
partiellement tenir : il refuse les titres de fonction (« Pour aller plus loin », « En
résumé », « Ce qu'il faut retenir »), parce qu'un palier étiqueté découpe en tranches ce qui
doit se lire d'un trait et oblige le lecteur à se situer avant d'avoir compris.

Il se termine par **« Ce que la carte n'établit pas »**, et ce bloc est obligatoire. Un texte
de mille cinq cents mots écrit à partir de cinq sources dépasse nécessairement ce que ces
sources établissent ; ce champ est l'endroit où ce dépassement se déclare au lieu de se
dissimuler. Il est placé en fin de lecture et non en tête : avant, il se lirait comme un
avertissement sur la fiabilité de ce qui suit, alors qu'il dit l'inverse.

Le cadrage complet de la rédaction est dans `corpus/deepenings/PROTOCOLE.md`. Il tient, pour
un texte publié, ce que `src/domain/concepts/ai-prompt.ts` tient pour une conversation.

### Comment cet écran se lit — et pourquoi il ne se règle pas comme les autres

C'est le seul écran qui se lit en défilant. Tous les autres se balaient. Ce sont deux gestes,
et les régler avec les mêmes valeurs revient à n'en régler aucun : le texte long rendu avec les
réglages d'une liste se lit comme une liste très longue. Il portait donc, jusqu'ici, les
réglages de l'écran qu'il n'est pas.

Quatre décisions, une classe — `.reading` dans `globals.css` — et aucune valeur écrite au point
d'usage. Le relevé complet, avant et après, est dans
[`audit-navigation-lecture.md`](audit-navigation-lecture.md), entrée A5.

| Décision | Ce qu'elle répare |
|---|---|
| Le texte courant est en **serif**, graisse 400 | La règle du §5 était contredite sur le seul écran où elle porte à conséquence : titre, accroche et intertitres en serif, mille cinq cents mots en sans |
| À **1,17 rem**, taille optique et non nominale | À taille égale, la serif aurait rendu le texte 9 % plus petit qu'avant |
| Dans **`--ink-reading`**, 14,17:1 | Il était dans le gris du texte secondaire, choisi pour des phrases de trois lignes |
| Écarts de paragraphe et de section en **interlignes** | 1,35 em entre paragraphes, `--gap-group` entre sections : le rapport section/paragraphe passe de 2,5 à 2,9, au-dessus du double qu'exige le rythme vertical |

**La colonne est plus large ici que partout ailleurs**, et c'est la seule chose qui distingue
cet écran des autres en mise en page : 32 rem contre 28. Elle ne le distingue pas par goût, elle
paie le changement de famille. À hauteur d'x égale, la Source Serif occupe 7 % de plus par signe
qu'Inter ; sur une tablette, la colonne de 400 px serait tombée de 47 à 42 signes par ligne,
sous le plancher de 45 admis pour du texte courant. À 472 px elle en porte 52, au milieu de la
fourchette au lieu de son bord.

**Ce que cela coûte, et il est écrit ici pour ne pas être redécouvert.** Sur un téléphone, la
largeur est bornée par l'appareil : la ligne y perd deux signes, le premier paragraphe passe de
63 à 77 % de la hauteur visible, et le défilement total gagne 15 %. La seule façon de rendre ces
deux signes serait de réduire le corps, c'est-à-dire de défaire la correction. Le coût porte sur
la longueur du défilement, que cet écran assume depuis le début, et non sur la lisibilité d'une
ligne.

**Aucun repère de progression n'a été ajouté**, et ce n'est pas un oubli. Un texte de neuf
écrans est exactement le cas où l'on est tenté d'en poser un ; le §5 range les barres de
progression parmi ce qui a été retiré, et le fait qu'un écran soit long ne rétablit pas ce qui
mesurait l'application plutôt que la compréhension. La durée annoncée en tête suffit à dire
l'engagement, et elle est là pour ça.

### Les espaces de la ponctuation double

Le corpus emploie trois caractères d'espace différents devant un même deux-points — 526
ordinaires, 86 fines insécables, 47 insécables, sur trente-deux fichiers. Devant une espace
ordinaire, le navigateur a le droit de couper : sur une colonne de trente-huit signes, le point
d'interrogation partait seul en tête de la ligne suivante, y compris sur l'accroche en tête
d'écran.

La normalisation est faite **au rendu**, par `src/lib/typographie.ts`, et jamais dans les
fichiers maîtres. Le motif est celui qui vaut pour tout le reste du corpus : corriger les
fichiers corrigerait ceux qui existent et pas ceux qui viendront, et une règle qui ne tient que
tant que personne ne l'oublie n'est pas une règle.

La fonction **remplace** une espace, elle n'en **ajoute** jamais. C'est cette propriété, et non
la convention typographique qu'elle applique, qui la rend sûre : une adresse, une heure, un
point d'interrogation collé à son mot ressortent inchangés. La convention, elle, est celle du
Lexique des règles typographiques — fine insécable devant les trois signes hauts, insécable de
chasse pleine devant le deux-points et à l'intérieur des guillemets.

**L'accroche passe partout par la fonction, et c'est une invariante, pas une commodité.** Elle
s'affiche sur cinq écrans — la carte du jour, la fiche, les listes d'un thème et d'un auteur,
et le texte long. Une même phrase rendue de deux façons selon l'écran est un défaut qu'on
introduit soi-même en corrigeant à un seul endroit : on quitte la fiche où le point
d'interrogation est seul sur sa ligne, on arrive sur le texte où il ne l'est plus.

**Le reste de la prose française n'y passe pas encore.** La citation d'une fiche, le résumé
d'une carte et les libellés de sources portent le même défaut à une échelle où il se manifeste
rarement. Les y faire passer est la suite naturelle ; le cas des libellés de sources demande
d'abord de trancher une question documentaire, puisqu'un titre d'article s'y reproduit tel
qu'il a été publié.

### Le relais vers une IA, rétrogradé mais pas supprimé

Il était l'unique action de la carte. Il est maintenant en bas du texte, sous le libellé
« Continuer avec une IA ».

L'ordre est le bon : le texte répond aux questions qu'on avait en arrivant, il ne peut pas
répondre à celles qu'il fait naître, et c'est pour celles-là qu'un interlocuteur sert à
quelque chose. Ce qui partait continue de partir, à l'identique — le dossier autonome de
22 000 caractères, instructions documentaires puis carte et corpus.

**Une carte sans approfondissement garde l'ancien comportement.** Le corpus avance carte par
carte, et les fiches d'échafaudage n'en recevront jamais : dans ce cas, « Approfondir » reprend
exactement le geste d'avant plutôt que de disparaître ou de mener à un écran vide. C'est
`hasDeepening` qui tranche, et il ne charge que des identifiants — les textes eux-mêmes ne
partent qu'avec l'écran qui les affiche.

### Ce qui n'a pas changé du passage de relais

**Le dossier passe par le presse-papiers, pas par la feuille de partage.** L'action a d'abord
appelé `navigator.share()`, ce qui rendait la main au système. La feuille d'Android classe ses
cibles par usage : elle proposait Gmail, WhatsApp et un réseau social, et rangeait les
applications d'IA derrière « Plus ». Le bouton annonçait une intention et ouvrait un écran qui
en proposait une autre. Aucune API web ne permet de filtrer ni de réordonner cette feuille ; la
seule sortie était de ne plus commencer par elle.

Un appui copie donc le dossier — 22 000 caractères, que le presse-papiers transporte sans
troncature et sans différence entre téléphone et bureau — puis ouvre une feuille qui dit ce qui
vient d'être copié et propose où le coller.

**Les destinations sont nommées, et c'est un coût assumé.** La liste
(`src/lib/ai-destinations.ts`) est écrite à la main, donc elle vieillira. Elle reste courte,
ordonnée alphabétiquement — aucun classement par préférence, l'application ne recommande pas —,
et la feuille du système demeure accessible juste en dessous pour tout ce qu'elle ne couvre
pas. Rien n'est détecté : savoir ce qui est installé est hors de portée d'une page web, et un
schéma d'application propriétaire échoue en silence quand l'application manque. Ce sont de
simples liens https, que le système route vers l'application quand elle revendique le domaine,
vers le site sinon.

Le prompt ne voyage jamais dans l'adresse : 22 000 caractères en paramètre d'URL, c'est une
troncature silencieuse quelque part sur le chemin — et donc des règles documentaires perdues
sans que personne ne le voie.

**Ce n'est pas un partage de carte, c'est un passage de relais.** Le message est un dossier
autonome, qui tient sans aucun contexte préalable : les instructions d'abord, la carte et son
corpus ensuite. La carte y va entière — domaine, famille, thème, concept, auteurs, attribution
établie, citation localisée, accroche, résumé, les cinq sources avec leur niveau, leur DOI ou
leur ISBN, et le lien de retour vers la fiche.

**La conversation appartient au lecteur.** Aucune question n'est posée à sa place, aucun niveau
ne lui est demandé : l'IA commence à partir du dossier, et ajuste sa profondeur au fil de
l'échange. La dernière ligne se contente d'autoriser le départ.

### Les quatre exigences, communes au texte écrit et à la conversation

Elles valent des deux côtés. `src/domain/concepts/ai-prompt.ts` et ses tests les tiennent pour
la conversation ; `corpus/deepenings/PROTOCOLE.md` et `npm run corpus:deepen` les tiennent pour
le texte écrit.

1. **La méthode ne se décrit jamais.** L'explication monte du premier abord jusqu'au niveau
   académique, et il est interdit de l'annoncer. Sans cette interdiction, les modèles
   produisent des paliers étiquetés — « pour un débutant », « pour aller plus loin » — qui
   découpent en tranches ce qui doit se lire d'un trait.
2. **Une lacune se déclare, elle ne se comble pas.** Citation, page, DOI, date, statistique :
   ce dont on n'a pas réellement le texte ne se reconstruit pas de mémoire. C'est la seule
   protection possible contre une bibliographie plausible et fausse. Côté texte écrit, le champ
   `consulted` de chaque source décide : `full-text` autorise à parler du contenu,
   `metadata-only` n'établit que l'existence de la référence.
3. **Le corpus fait autorité sur la mémoire du modèle**, sans devenir un dogme : une source
   extérieure peut le contredire, à condition d'être examinée pour ce qu'elle est. Une
   incohérence interne à la carte se signale, elle ne se corrige pas en silence.
4. **La connaissance du modèle n'est pas une source, et une référence citée n'est pas un texte
   lu.** Les deux confusions produisent la même chose : une affirmation probablement correcte
   présentée comme documentairement établie. Le corpus reste pour autant une base, pas un
   plafond.

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
| Le regard de la marque, à l'ouverture | 4 800 ms — `scanning` | `--ease-out-soft` |
| Le regard de la marque, dans le titre d'Explorer | 7 200 ms — `waiting` | `--ease-out-soft` |

**La marque porte les deux seules durées à dépasser la seconde, et la seule chose qui se
relance.** Ce ne sont pas des durées d'interface : ce sont des partitions, huit saccades et six
fixations pour l'une, quatre et trois pour l'autre, suivies d'une pause tirée au hasard. Une
valeur de cet ordre sur quoi que ce soit d'autre serait à refuser, et la boucle plus encore.

**Et la plus longue des deux est la moins chère.** `waiting` dure une fois et demie `scanning`,
mais elle ne contient que la moitié de ses saccades et la pause qui la suit est deux fois plus
longue. Rapporté au cycle entier — séquence plus pause moyenne —, **quelque chose bouge 16,7 %
du temps contre 24,7 %**. C'est le seul chiffre qui compte ici : une durée n'est pas une dépense,
une fréquence de mouvement en est une.

Depuis que cet écran revient à chaque ouverture, la carte du jour attend bel et bien derrière
lui — ce qui n'était pas le cas quand il ne servait qu'une fois. **Ce qui rend la durée
acceptable n'est donc plus qu'aucune information n'attende, mais que l'animation ne retienne
rien** : « Concept du jour » est présent et actif dès la première image, la séquence ne conditionne
aucun affichage, et personne n'a jamais à attendre qu'elle finisse. Le jour où elle
conditionnerait quelque chose, c'est la durée qu'il faudrait revoir, pas l'attente.

**Ce que la règle « aucun mouvement continu » interdit, et ce qu'elle n'interdit pas.** Elle
interdit qu'une chose bouge alors que rien n'a changé, sur une surface qu'on revient voir. Sur
l'écran d'ouverture, la règle de fréquence tranche avant elle et la boucle y est admissible sans
discussion : on n'y revient pas.

**Le o d'Explorer, lui, est bel et bien sur une surface qu'on revient voir, et c'est une dépense
assumée.** Ce qui la rend tenable est ce qui la borne, et il faut que les quatre tiennent
ensemble :

- **C'est une autre partition, et c'est la première des bornes.** Rejouer `scanning` ici aurait
  posé un œil qui fouille sur l'écran où c'est le lecteur qui cherche. `waiting` fait moitié
  moins de saccades, toutes dans le même sens, et tient ses fixations plus d'une seconde — voir
  le §4. Un contributeur qui les ferait converger casserait cette borne avant toutes les autres,
  et `npm test` échouerait.
- **La séquence est petite et elle est loin.** Elle occupe une lettre de 15,6 px dans un titre
  d'en-tête, à un demi-écran de la liste qu'on lit, et ses déplacements valent de 4,4 à 6,2
  pixels d'écran. Ce n'est pas le mouvement qu'on s'interdit — une surface entière qui bouge
  sous le texte —, c'est un caractère qui vit dans son propre corps.
- **Elle ne retient rien et ne dit rien.** Aucun affichage ne l'attend, aucune information n'y
  est portée, et le titre reste lisible et complet à la première image. Le jour où elle
  conditionnerait quoi que ce soit, c'est elle qu'il faudrait retirer.
- **Elle s'arrête là.** Elle ne se déduit pas de la marque et ne se transpose à aucune autre
  surface : deux endroits, pas trois, et aucun sous le contenu qu'on lit. Le favicon ne bouge
  toujours pas, et une page de fiche n'aura jamais d'œil dans son titre.

Le levier de retrait est d'un mot, et c'est délibéré : `<ExploreTitle animate />` sans son
`animate` laisse le titre exactement où il est, œil ouvert et pupille au centre. C'est aussi
l'état qu'affiche le mouvement réduit.

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
- **Aucun mouvement continu.** Rien ne pulse, ne flotte ni ne tourne au repos. Les seules
  séquences qui se relancent sont celles de la marque, à deux endroits nommés, une partition
  par endroit, et à aucun autre — voir les paragraphes ci-dessus, qui disent ce que le second
  coûte et ce qui le borne.
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
| Chaque coupe d'Explorer remonte sur son propre onglet | À trois coupes, un parent unique renvoyait sur une liste qu'on n'avait pas ouverte |
| Le domaine se dit sur la fiche et sur le thème, jamais sur la carte du jour | La carte tient dans un écran : son thème suffit à la situer. La fiche, qu'on est allé chercher, est l'endroit où l'on veut savoir d'où vient ce qu'on lit |
| Retour nommé sur toutes les fiches | La fiche de concept revenait par l'historique du navigateur — depuis une fin de session, cela renvoyait dans la session qu'on venait de quitter |
| Focus visible partout | Il n'existait aucun style de focus |
| Réserve sous le contenu calculée | Le retrait bas était une valeur fixe qui ne tenait pas compte de la zone sûre du système |
| **Un thème est sous son domaine, pas à côté** | Les deux portaient le même niveau : ouvrir un thème depuis un domaine remplaçait l'entrée d'historique au lieu de l'empiler. Le domaine disparaissait de la pile et de la trace, un seul retour en sortait, et consulter deux thèmes d'un même domaine coûtait six gestes au lieu de trois — sur la page dont c'est la fonction |
| **L'onglet actif se déduit de l'arbre** | Une comparaison de préfixes d'adresse laissait `/settings` sans aucun onglet allumé : route de premier niveau dans l'URL, enfant d'Explorer dans l'arbre. « Où suis-je » n'avait pas de réponse sur cet écran |
| **Une adresse morte a son écran** | Sans `not-found.tsx`, une fiche au slug périmé servait la page par défaut de Next — en anglais, hors du système visuel, sans un lien. C'est pourtant l'adresse que « Approfondir » diffuse |
| **Les deux écrans sans pré-rendu ont un squelette** | La carte du jour a besoin du `localStorage`, la fiche de la chaîne de recherche : leur HTML ne contenait que la barre de navigation, et un lien partagé ouvrait sur un écran noir que rien ne distinguait d'une panne |
| **Rouvrir l'application, c'est entrer par Aujourd'hui** | Une application installée n'est presque jamais fermée : le système la ramène telle qu'elle était, et on rouvrait sur l'écran quitté la veille — la carte du jour n'était jamais atteinte, et le premier appui sur retour rejouait la session précédente. Une absence de plus de trente minutes, ou un changement de jour, ramène à la racine en dépilant. Revenir après dix secondes rend l'écran quitté : c'est le cas le plus fréquent, et le perdre serait pire que le défaut corrigé |
| **La version publiée entre en service à la réouverture** | Une application installée n'est jamais fermée : le document chargé un jour exécute son code indéfiniment, et une correction publiée n'atteignait personne. On compare l'empreinte de la page d'entrée à celle retenue au chargement, et on ne recharge que si elle a changé — au point d'entrée, jamais pendant une lecture, jamais sur une supposition |
| **L'accueil est le seuil de chaque ouverture** | Il ne servait qu'au premier lancement, et l'application s'ouvrait donc directement sur la carte — sans le geste qui distingue venir lire de tomber sur un écran. Il ne s'interpose ni au retour de dix secondes, ni quand on vient d'Explorer : sur ces deux cas, ce serait une taxe |
| **Le seuil se dépense au franchissement** | Il se consommait à l'affichage : quitter l'accueil pour Explorer sans l'avoir franchi, puis revenir — geste retour ou onglet Aujourd'hui —, retrouvait une ouverture déjà dépensée et la carte s'affichait d'elle-même. La découverte était faite à la place du lecteur, sur le seul écran que l'application ait à montrer |
| **Aucune cible sous 44 px** | Le bouton des sources mesurait 15 px de haut sur un écran de 667 points — sous le seuil de 24 px de WCAG 2.5.8 —, et « Revenir au concept » est le seul moyen de quitter cette vue |

---

## 9. Desktop — ce que la largeur change, et ce qu'elle ne change pas

L'application est née sur un téléphone et n'avait aucun point de rupture : les
neuf écrans portaient la même colonne de 448 px, et la barre de navigation
tenait le bas de la fenêtre. Sur un écran de 1440, cela produit une colonne au
milieu du noir surmontée d'une barre de pouce — non pas une interface sobre,
mais une capture de téléphone posée là.

La version desktop répond à ce défaut. Elle ne réécrit pas le produit.

### La décision qui commande les autres

**Mêmes routes, même arbre, même grammaire de mouvement.** Ce qui change est la
mise en page ; ce qui la traverse ne change pas.

L'alternative sérieuse était un maître-détail : la liste tenue à gauche en
permanence, la fiche s'ouvrant à droite sans quitter la liste. C'est la
convention de bureau pour un corpus, et elle a été écartée pour trois raisons
qui tiennent ensemble :

| Raison | Ce qu'un maître-détail coûterait |
|---|---|
| Le budget d'écart est déjà dépensé | La dimension porteuse est le mouvement (§2). Une seconde signature portée par la mise en page ne s'ajouterait pas à la première, elle la contredirait : rien ne descend ni ne remonte quand un panneau se remplit sur place |
| La promesse est « une chose à la fois » | Une liste permanente à côté d'une fiche permanente est exactement l'inverse de ce que l'application produit |
| Le contrat de retour est bâti sur des écrans | `parentOf`, la trace et `climbTo` supposent qu'un écran remplace un écran. Un panneau demanderait un second modèle de navigation, c'est-à-dire deux implémentations d'un même mécanisme |

Ce n'est pas un refus de principe. C'est le constat qu'un maître-détail est un
autre produit, pas une version large de celui-ci.

### Deux seuils, parce que deux choses cessent d'être vraies à deux moments

| Seuil | Ce qui cesse d'être vrai | Ce qui change |
|---|---|---|
| **48 rem** (768 px) | La largeur est la ressource rare | La colonne d'un écran de liste s'ouvre à 736 px ; les listes passent à deux colonnes ; la prose qu'elles contiennent reste bornée |
| **64 rem** (1024 px) | Il y a un pouce | La barre devient un rail ; la carte récupère la hauteur que la barre retenait ; sa base typographique passe de 16 à 18 px ; l'amplitude des déplacements est plafonnée |

Le second n'est pas placé plus bas parce qu'en dessous l'appareil est
plausiblement tenu en main. `--card-scale` y descend jusqu'à 12,8 px sur un
téléphone couché, et une colonne de 544 px à cette taille repasserait au-dessus
de 75 signes par ligne — soit une carte moins lisible que sur un téléphone
debout, ce qui serait l'inverse du but.

Les deux valeurs sont celles de `md` et `lg` de Tailwind. Inventer des seuils
propres aurait fait deux échelles de rupture dans un même projet.

### Le rail, et pourquoi pas les deux autres réponses

Une barre basse est une commodité du pouce. Il n'y en a pas sur un écran de
bureau, où le bord bas est le point le plus long à atteindre à la souris quand le
coin haut-gauche est le plus court.

Une barre haute était l'autre convention. Elle aurait demandé de poser la marque
en en-tête permanent, ce que le §4 interdit — et amender une décision d'identité
pour loger deux entrées de navigation aurait été un mauvais échange.

Reste le rail, 104 px, deux entrées, et rien d'autre :

- **Il ne porte pas la marque.** Le seuil reste le seul endroit où elle se
  montre. Un rail vide sous ses deux entrées est un rail honnête : le produit a
  deux destinations.
- **Réglages n'y entre pas.** C'est un enfant d'Explorer dans l'arbre, atteint
  par la roue de son en-tête. Lui ouvrir une seconde porte ferait deux chemins
  vers un écran qu'on visite une fois, et `rootSectionOf` ne saurait plus dire
  quelle branche allumer.
- **Le repère de position se transpose, il ne se réinvente pas.** Le même filet
  d'un pixel, la même couleur, le même calcul : il glisse en x au bas de la
  barre, en y au bord droit du rail. La géométrie est paramétrée dans
  `globals.css` ; le composant ne fournit que l'indice et le compte.
- **La navigation passe en tête du document.** Sa position à l'écran ne dépend
  pas de sa place dans le document — elle est `fixed` dans les deux cas —, mais
  l'ordre de tabulation, lui, en dépend. Un rail annoncé au bord gauche et
  atteint au clavier après l'écran entier aurait été la navigation la plus
  visible et la plus longue à joindre.
- **Le contenu se centre dans ce qui reste, pas dans la fenêtre.** La colonne
  est donc décalée vers la droite de **52 px** — la moitié de la largeur du
  rail, et cette valeur ne dépend ni de la largeur de la fenêtre ni de celle de
  la colonne : le centre de ce qui reste vaut toujours `rail / 2 + fenêtre / 2`.
  C'est le comportement attendu d'une mise en page à rail, et le tenir sur les
  neuf écrans vaut mieux qu'une exception optique sur celui du jour.

### Les trois mesures

Une seule mesure ne peut pas servir une liste et un texte suivi : la première
gagne à s'étaler, le second y perd dès 75 signes par ligne.

| Mesure | Largeur | Contenu utile | Ce qu'elle porte | Signes par ligne |
|---|---|---|---|---|
| `--container-note` | 416 px | 416 px | Une mention en petit corps, à 12 px | 69 |
| `--container-read` | 544 px | 496 px | Ce qui se lit ligne à ligne, à 17,3 px | 57 |
| `--container-page` | 736 px | 688 px | Un en-tête et sa liste | — |

**La mesure suit le corps.** La fourchette de 45 à 75 compte des signes, pas des
pixels : une mention à 12 px dans la colonne calibrée pour 17,3 en porte 82.
C'est la raison d'être de la première ligne, et elle ne sert qu'aux deux
mentions de la fiche de concept — provenance et note d'attribution —, qui sont
déjà ce qu'un écran a de plus coûteux à lire.

Les trois se composent. Une page de domaine porte `--container-page` sur sa
colonne, `--container-read` sur sa phrase de situation, et sa liste de thèmes en
deux colonnes. C'est le cas nominal, pas l'exception.

**Deux colonnes, et pas trois.** Sur 688 px utiles, deux colonnes en donnent 328
à chacune, où la phrase de situation d'une ligne tient en deux lignes de texte.
Trois la feraient tomber à 208 px et à quatre lignes : la liste gagnerait en
hauteur ce que la troisième colonne prétendait lui faire économiser.

### La carte du jour : la cérémonie ne bouge pas

Le seuil, puis une carte, centrée, une seule colonne. La largeur ne sert qu'à
deux choses, et elles vont ensemble : la colonne passe à 544 px et la base
typographique à 18 px. L'une sans l'autre aurait empiré la carte — agrandir le
texte seul l'aurait ramenée à 44 signes par ligne, élargir seul l'aurait poussée
à 62 pour un texte inchangé.

Ce qui n'y entre pas, et qui était l'autre option : mettre la citation et les
sources en regard sur une seconde colonne. La carte est l'écran vu tous les
jours, et la fréquence d'usage prime sur ce que la largeur permet.

### Le mouvement, plafonné

`--shift-screen` est un pourcentage de la surface qui bouge : les 16 % qui
donnent 62 px sur un téléphone de 390 en donneraient 230 sur 1440, en 560 ms
inchangées. Le même geste sur presque quatre fois la distance ne se lit plus
comme le même geste. Au-delà de 64 rem, l'amplitude tombe à 8 % — 115 px, dans
la même bande perceptive que le téléphone. La grammaire reste reconnaissable au
lieu d'être littérale.

### Ce que le desktop ne change pas

La palette, les deux familles typographiques, l'échelle de six pas, les six
rôles d'écart vertical, l'arbre de navigation, le contrat de retour, les quatre
sens de circulation, les durées, les courbes, le repli en mouvement réduit, le
budget de mouvement du §7, et la règle du §5 sur ce que l'interface affiche.

Aucun écran n'a gagné ni perdu une information.

---

## 10. Où vivent les décisions dans le code

| Fichier | Ce qu'il porte |
|---|---|
| `src/app/globals.css` | L'échelle de neutres, les rôles, l'échelle typographique, les trois mesures de colonne, les six rôles d'écart vertical, tous les tokens de mouvement, les deux seuils du desktop et tout ce qu'ils changent, la charpente — réserve de navigation, rail, repère de position —, le focus, les replis en mouvement réduit |
| `src/lib/navigation-tree.ts` | Les niveaux de l'arbre, l'intention d'une navigation, la trace, la branche de premier niveau |
| `src/lib/app-entry.ts` | Le critère qui distingue une reprise d'une réouverture, la mémoire de la sortie, et l'ouverture en attente que le seuil dépense |
| `src/lib/app-version.ts` | L'empreinte de la version servie, et la seule question « faut-il recharger » |
| `src/components/ui/ListRow.tsx` | La ligne de destination et l'en-tête de liste, pour toute l'application |
| `src/components/ui/SituatingText.tsx` | L'ordre situation → liste → texte long, sur les trois pages de détail |
| `src/components/motion/screen-motion.ts` | Les quatre sens de circulation, et eux seuls |
| `src/components/motion/Screen.tsx` | La correspondance sens → animation, à poser dans chaque `page.tsx` |
| `src/components/ui/AppShell.tsx` | L'ordre du document — navigation puis contenu — et la réserve que la navigation prend au contenu |
| `src/components/ui/MainNav.tsx` | Les deux destinations, la branche allumée, et rien de la géométrie |
| `src/content/taxonomy.ts` | Les quatre familles et les onze domaines, et eux seuls |
| `src/domain/taxonomy/index.ts` | Rattachement, ordre, périmètres de sélection, état du corpus |
| `src/domain/concepts/ai-prompt.ts` | Les instructions envoyées aux applications d'IA, et elles seules |
| `src/domain/concepts/ai-handoff.ts` | L'assemblage du message : instructions, carte, corpus, lien |
| `src/lib/ai-destinations.ts` | Les applications d'IA proposées, et elles seules |
| `src/components/ui/DeepenSheet.tsx` | Ce qui suit l'appui : copie faite, où coller, reprises |
| `src/domain/concepts/sources.ts` | L'ordre de lecture des sources et le nom de leur niveau |
| `src/components/ui/mark-geometry.mjs` | La géométrie de la marque, et elle seule |
| `src/components/ui/Mark.tsx`, `Wordmark.tsx` | L'œil, et les deux mots qui le portent à la place d'une lettre — un par partition |
| `scripts/icons/build-icons.mjs` | Les neuf fichiers d'icônes, dérivés de la géométrie |

Une seule implémentation par mécanisme. Deux implémentations divergent, toujours.

---

## 11. Ce qui reste à vérifier

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
- Le rendu du filet d'un pixel du repère de position sur un écran non HiDPI. Il
  a été rendu et mesuré à un pixel au facteur d'échelle 1 ; ce qu'un écran réel
  en fait n'est pas la même question.
- Le décalage de 52 px du contenu vers la droite, conséquence assumée du
  centrage dans ce qui reste : à confirmer qu'il ne se remarque pas sur l'écran
  du jour, qui est le seul où la colonne est isolée dans le noir.
- L'amplitude plafonnée à 8 % : la valeur est raisonnée, pas mesurée sur des
  yeux. C'est le réglage à reprendre en premier si le déplacement paraît court
  sur un grand écran.

### Ce que le desktop a réellement établi

Distingué du reste, parce que la méthode suivie interdit de compter une
vérification qui n'a pas eu lieu — et que la réciproque vaut aussi : laisser en
attente ce qui est fait rend la liste inutile.

Mesuré au pilote de navigateur **sur l'artefact publié** — le build local a la
même empreinte de fichier CSS que celui que la CI a déployé, `1mlm4i-vcc5m4` :

| Ce qui est établi | Mesure |
|---|---|
| Le rail | 104 px, collé à gauche, pleine hauteur ; réserve du contenu 104 px |
| Ses cibles | 104 × 66 px, au-dessus des 44 px de WCAG 2.5.8 |
| Le focus au clavier | contour de 2 px, décalé de 3 px, sur les entrées du rail |
| L'ordre de tabulation | `Aujourd'hui → Explorer → Réglages → onglets`, la navigation d'abord |
| Le survol d'une ligne de liste | passe de transparent à `--paper-raised` `#121212`, cible de 328 × 120 px |
| Les listes à deux colonnes | `328px 328px` exactement, à partir de 768 px |
| Les quatre largeurs charnières | 767 et 768 pour la colonne et la grille, 1023 et 1024 pour le rail et la carte |
| La carte | 448 px et 16 px jusqu'à 1023 ; 544 px et 18 px à partir de 1024, soit 55 signes par ligne |
| L'ancrage de la navigation | géométrie identique avant et après un changement d'écran |

Et le comportement que la collision de deux travaux avait laissé sans preuve : le
seuil se dépense au franchissement **par le rail comme par la barre**. Les sept
étapes — affichage, départ vers Explorer, retour par la navigation, retour par le
geste du navigateur, franchissement, absence de rejeu, entrée directe ailleurs
qu'au point d'entrée — passent à l'identique à 1440 × 900 et à 390 × 844.
