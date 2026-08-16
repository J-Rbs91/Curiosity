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
                      ombre, aucun flou décoratif), l'imagerie (aucune).
Coût accepté        : trois courbes et sept durées à tenir comme des tokens ; un
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

## 4. Ce que l'interface affiche, et ce qu'elle n'affiche plus

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

## 5. Le bouton « + » — envoyer un concept à une IA

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

## 6. Le budget de mouvement

| Ce qui bouge | Durée | Courbe |
|---|---|---|
| Appui sur une cible | 140 ms | `--ease-out-soft` |
| Onglet, sélection, repère de position | 220 ms | `--ease-out-soft` |
| Sortie d'un écran ou d'une phase | 220 ms | `--ease-out-soft` |
| Apparition du nouveau contenu (fondu) | 300 ms | `--ease-out-soft` |
| Glissement d'un écran ou d'une phase | 560 ms sur 16 % / 10 % | `--ease-lift` |
| Entrée et sortie de session | 640 ms | `--ease-lift` |
| Le concept qu'on vient de travailler | 720 ms | `--ease-lift` |

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
- **Aucun mouvement continu.** Rien ne pulse, ne flotte ni ne tourne au repos.
- **Une transition en cours n'avale pas les clics** — sans quoi un déplacement de
  560 ms serait un blocage de 560 ms.

**Mouvement réduit.** Les entrées sont déclarées en `no-preference` plutôt que
neutralisées après coup : sans animation, l'état affiché est directement l'état
final, il n'y a rien qui puisse rester invisible ou mal placé. Les déplacements
disparaissent, les fondus restent.

---

## 7. Navigation — les décisions tenues

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

## 8. Où vivent les décisions dans le code

| Fichier | Ce qu'il porte |
|---|---|
| `src/app/globals.css` | L'échelle de neutres, les rôles, tous les tokens de mouvement, le focus, les replis en mouvement réduit |
| `src/components/motion/screen-motion.ts` | Les quatre sens de circulation, et eux seuls |
| `src/components/motion/Screen.tsx` | La correspondance sens → animation, à poser dans chaque `page.tsx` |
| `src/components/ui/AppShell.tsx` | Les écrans immersifs et la réserve sous le contenu |
| `src/domain/concepts/ai-prompt.ts` | Le texte envoyé aux applications d'IA |

Une seule implémentation par mécanisme. Deux implémentations divergent, toujours.

---

## 9. Ce qui reste à vérifier

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
