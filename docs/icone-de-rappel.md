# Le rappel porté par l'icône

> Tant que la carte du jour n'a pas été découverte, le fond de l'icône passe du noir au rouge
> par paliers d'une heure, de 11 h à 23 h. Découvrir la carte le remet au noir jusqu'au
> lendemain.

Ce document dit deux choses : **ce que les plateformes autorisent réellement**, vérifié
plateforme par plateforme avant d'écrire une ligne, et **ce qui a été implémenté** en
conséquence.

---

## 1. La conclusion, d'abord

**Aucune plateforme ne permet à cette application — qui est une PWA — de repeindre l'icône
posée sur l'écran d'accueil, et encore moins de la repeindre toutes les heures en arrière-plan.**

Ce n'est pas une limite de l'implémentation : c'est une limite des API. Il existe des
contournements — republier un manifeste, faire tourner un service worker en tâche de fond,
espérer qu'un lanceur relise une icône — et aucun ne tient : ils dépendent d'un comportement
que ni la spécification ni les navigateurs ne garantissent. Ils n'ont donc pas été employés.

Ce qui a été implémenté à la place :

| Surface | Ce qu'elle fait | Où |
|---|---|---|
| **Favicon de l'onglet** | La progression complète, telle que décrite : même pictogramme, seul le fond change, treize paliers du noir au rouge. | `src/lib/app-icon.ts` |
| **Pastille de l'icône installée** (`setAppBadge`) | Le comportement natif le plus proche : l'icône installée porte un point tant que la carte n'a pas été découverte, à partir de 11 h. Pas de couleur — la plateforme n'en propose pas. | `src/lib/app-icon.ts` |

La logique, elle, est complète et indépendante de tout cela : le palier se calcule à partir de
la date, de l'heure locale et du statut « découvert », dans un module pur qui ne connaît ni le
DOM ni la plateforme (`src/domain/reminder/daily-urgency.ts`). Le jour où une plateforme
ouvrirait l'icône installée à l'écriture, il n'y aurait qu'une surface à brancher de plus.

---

## 2. Ce que chaque plateforme permet — vérification

### PWA installée depuis le navigateur — **le cas de cette application**

Le seul cas qui la concerne aujourd'hui : Curiosity est un export statique servi par GitHub
Pages, installable, sans code natif.

- **Les icônes du manifeste sont figées à l'installation.** Chrome sait mettre à jour un
  manifeste déjà installé, mais les icônes sont explicitement **hors du champ** de cette mise
  à jour, sur Android comme sur le bureau. Sur Android la mise à jour passe en outre par la
  reconstruction du WebAPK — déclenchée au plus une fois par jour, quand l'application est
  fermée, l'appareil branché et en Wi-Fi. Une progression horaire est hors de question, et un
  changement d'icône ne passerait de toute façon pas.
  ([web.dev — How Chrome handles updates to the web app manifest](https://web.dev/articles/manifest-updates))
- **iOS copie l'icône au moment de l'ajout à l'écran d'accueil** et ne relit plus
  l'`apple-touch-icon` ensuite. Rien à espérer de ce côté-là.
- **Il n'existe aucun réveil horaire fiable en arrière-plan.** La synchronisation périodique
  en arrière-plan n'existe que sur Chrome, dépend d'un score d'engagement, ne garantit aucune
  fréquence — et n'aurait servi à rien, puisqu'il n'y a pas d'API à appeler au réveil.
- **Le favicon de l'onglet, lui, s'écrit à l'exécution** — c'est un `<link rel="icon">` dans
  le document, et c'est standard partout. C'est la seule icône de l'application qu'on ait le
  droit de repeindre.
- **La pastille** (`navigator.setAppBadge`) est le seul mécanisme prévu par les plateformes
  pour donner de la présence à une icône installée. Elle n'accepte pas de couleur. Sa
  disponibilité est inégale et vérifiée à l'exécution plutôt que supposée :

  | | `setAppBadge` |
  |---|---|
  | Chrome / Edge de bureau (PWA installée) | oui |
  | **Chrome Android** | **non — l'API n'est pas exposée** |
  | Safari iOS / iPadOS 16.4+ (écran d'accueil) | oui, sous réserve de l'autorisation de notification |
  | Onglet de navigateur, quel qu'il soit | non |

  ([Chrome for Developers — Badging API](https://developer.chrome.com/docs/capabilities/web-apis/badging-api) ·
  [WebKit — Badging for Home Screen Web Apps](https://webkit.org/blog/14112/badging-for-home-screen-web-apps/))

  L'autorisation de notification **n'est pas demandée** : l'application n'envoie aucune
  notification, et réclamer une permission pour un point sur une icône serait payer très cher
  un signal secondaire. Sur iOS, la pastille n'apparaîtra donc que si le lecteur a par ailleurs
  accordé cette autorisation.

**Conséquence honnête :** sur un téléphone Android où Curiosity est installée depuis le
navigateur, l'icône de l'écran d'accueil **ne changera pas**. C'est la configuration la plus
probable, et c'est la limite la plus dure. Le rappel s'y voit dans l'onglet du navigateur, et
nulle part ailleurs.

### Android natif — si l'application était un jour empaquetée

Possible, mais pas gratuit, et pas par une API de couleur : on déclare autant d'`activity-alias`
que d'icônes voulues dans le manifeste, puis on bascule entre elles avec
`PackageManager.setComponentEnabledSetting`. C'est le mécanisme sanctionné, et c'est celui que
les applications à icône dynamique emploient.

Ce qu'il coûterait ici :

- **quatorze icônes embarquées** dans l'APK, une par palier, plus quatorze alias dans le
  manifeste — ce sont des ressources, pas des couleurs calculées ;
- **le processus est tué** à chaque bascule si l'on n'emploie pas `DONT_KILL_APP`, et certains
  lanceurs ne rafraîchissent qu'après un délai ou un redémarrage ;
- **treize bascules par jour** demanderaient un travail périodique (`WorkManager`), dont le
  système ne garantit ni l'heure ni l'exécution en économie de batterie.

Autrement dit : faisable, mais un changement horaire ne serait ni ponctuel ni garanti. Le
comportement à implémenter serait celui-ci, avec **le palier recalculé à chaque réveil du
travail périodique** plutôt qu'une suite de bascules programmées.

### iOS natif — si l'application était un jour empaquetée

`UIApplication.setAlternateIconName` existe, mais trois de ses contraintes tuent le cas
d'usage :

- **l'application doit être au premier plan** — un appel en arrière-plan échoue (erreur 3072),
  et une notification silencieuse n'y change rien : il n'y a pas de changement horaire
  automatique possible ;
- **une alerte système est présentée au lecteur** à chaque changement, et elle ne peut pas être
  supprimée sans API privée ;
- les icônes doivent être **embarquées dans le paquet**, en 1024 × 1024.

  ([Apple — `setAlternateIconName(_:completionHandler:)`](https://developer.apple.com/documentation/uikit/uiapplication/setalternateiconname(_:completionhandler:)))

Treize alertes système par jour ne sont pas un rappel discret. Sur iOS, le comportement le plus
proche resterait la pastille — qui y est native, propre, et déjà branchée.

---

## 3. Ce qui a été implémenté

### La règle, en trois entrées

Le palier ne dépend que de la date, de l'heure locale, et du statut « concept du jour
découvert ». **Pas du nombre d'ouvertures de l'application** : ouvrir dix fois dans l'heure ne
change rien, ne pas ouvrir de la journée non plus.

```
découvert            → palier 0 (noir)
non découvert, < 11h → palier 0 (noir)
non découvert, ≥ 11h → palier = heure − 10, borné à 13
```

| Heure | Palier | Fond |
|---|---|---|
| 00:00 – 10:59 | 0 | `#000000` |
| 11:00 | 1 | `#1f0000` |
| 12:00 | 2 | `#2e0000` |
| 13:00 | 3 | `#3e0000` |
| 14:00 | 4 | `#4f0000` |
| 15:00 | 5 | `#610000` |
| 16:00 | 6 | `#730000` |
| 17:00 | 7 | `#860000` |
| 18:00 | 8 | `#990000` |
| 19:00 | 9 | `#ad0000` |
| 20:00 | 10 | `#c10000` |
| 21:00 | 11 | `#d50000` |
| 22:00 | 12 | `#ea0000` |
| 23:00 – 23:59 | 13 | `#ff0000` |

### Pourquoi cette rampe et pas une interpolation d'octets

La rampe est calculée **en OKLab**, pas en sRGB. Une interpolation linéaire des octets aurait
donné une progression que l'œil ne lit pas comme régulière : les premiers paliers auraient
sauté, les derniers se seraient tassés. OKLab est construit pour que des écarts égaux de clarté
se voient comme égaux — exactement la propriété demandée.

Teinte et rapport chroma/clarté sont ceux du rouge pur et **ne bougent d'aucun palier** : seule
la clarté varie. La rampe reste donc exactement sur l'axe noir → `#ff0000`, ce qu'un test
vérifie plutôt que de le supposer (les composantes verte et bleue sont nulles partout).

**Le plancher de la rampe n'est pas à zéro**, et c'est la seule liberté prise avec l'énoncé —
pour le servir. Partie du noir absolu, elle donnerait `#010000` à 11 h et `#0c0000` à midi :
deux heures de progression que personne ne voit sur une pastille de quelques millimètres. Le
premier palier doit se *voir* comme un début. À 0,15 de clarté OKLab il vaut `#1f0000`, un rouge
sombre à peine là — ce que « rouge très léger » décrit.

### La source de vérité, et pourquoi minuit ne demande aucun code

Le statut « découvert » est un drapeau **porté par l'enregistrement de la carte du jour**
(`DailyPick.discovered`), à côté du jour civil auquel il se rapporte. Le lire, c'est comparer ce
jour-là au jour courant.

Il en découle qu'il n'y a **aucune réinitialisation à programmer à minuit** : passé minuit, le
jour enregistré n'est plus le jour courant, et le statut ne vaut plus. Rien à réveiller, rien à
purger, rien qui puisse rester faux. Un téléphone éteint toute la nuit, un fuseau changé en vol,
un passage à l'heure d'hiver : la comparaison est refaite à chaque lecture et reste juste.

C'est aussi ce qui rend impossible le défaut que l'énoncé redoutait — une icône rouge restée
affichée alors qu'elle ne correspond plus à rien. Il n'y a pas d'état d'icône mémorisé : il n'y
a qu'un calcul, refait à chaque réveil.

### Découverte, et non tirage

Le tirage enregistre la carte du jour **au montage de l'écran d'Aujourd'hui, seuil compris** —
avant donc que quoi que ce soit ait été lu. Déclarer la découverte là aurait éteint le rappel
sans que personne n'ait rien vu.

La découverte est déclarée là où la carte s'affiche réellement (`src/app/page.tsx`) : écran
monté, carte tirée, seuil franchi. C'est la différence entre ouvrir l'application et ouvrir la
carte, et c'est précisément ce que le rappel existe pour distinguer.

### Un état se calcule, il ne se rejoue pas

L'application peut rester fermée onze heures. Au réveil, le palier se déduit de l'heure qu'il
est — jamais d'une suite de paliers manqués. Il n'y a aucun compteur, donc rien à remettre
d'accord avec l'horloge après un redémarrage, un changement de fuseau ou une correction réseau.

Le recalcul est déclenché par tout ce qui peut signaler qu'on sait de nouveau l'heure :

- une minuterie visant le **début de l'heure suivante** — qui porte aussi minuit, sans qu'aucune
  échéance particulière n'ait à être déclarée ;
- **plafonnée à dix minutes**, parce que l'horloge murale peut bouger sous l'application et
  qu'une minuterie armée pour cinquante minutes ne l'apprendrait qu'après coup ;
- le retour au premier plan (`visibilitychange`), la restauration depuis le cache de navigation
  arrière (`pageshow`), le retour du focus de fenêtre (`focus`) ;
- la découverte de la carte, annoncée à l'instant où elle a lieu — c'est le seul retour au noir
  qui ne s'explique pas par l'heure ;
- une découverte faite dans un **autre onglet** (`storage`) ;
- la réouverture après une absence longue (`onReentry`, voir `src/lib/app-entry.ts`).

Chaque repeinte est idempotente : un palier inchangé n'écrit rien.

---

## 4. Où cela vit

```
src/domain/reminder/daily-urgency.ts   La règle et la rampe. Aucune dépendance : ni DOM, ni
                                       stockage, ni plateforme. C'est ce qui la rend vérifiable.
src/lib/daily-discovery.ts             « La carte du jour a-t-elle été découverte ? » — la
                                       question, et le seul endroit où le jour civil se compare.
src/lib/app-icon.ts                    Ce que la plateforme accepte d'en afficher : le favicon
                                       du palier, et la pastille.
src/components/ui/AppIconReminder.tsx  Ce qui tient les deux d'accord avec l'heure. Vit dans la
                                       coque, à côté de `ThemeKeeper`, et survit à la navigation.
src/app/page.tsx                       Le seul endroit qui déclare la découverte.
```

---

## 5. Ce qui reste à vérifier

- **La pastille sur une PWA réellement installée**, sur Chrome de bureau et sur iOS 16.4+ avec
  l'autorisation de notification accordée. Le code a été vérifié dans un onglet, où l'API
  n'existe pas et où l'absence de pastille est le comportement attendu.
- **Le rendu du favicon de rappel à 16 px sur un onglet réel**, clair et sombre. Il a été rendu
  et regardé au pilote de navigateur aux tailles réelles ; un onglet réel a d'autres voisins.
- **Le cadrage `FILL.reminder`, à l'usage.** Il est plus large que celui de l'icône
  d'application et plus étroit que celui du favicon ordinaire, pour laisser au fond une marge
  qui se voie. La valeur a été choisie sur rendu, pas mesurée.
