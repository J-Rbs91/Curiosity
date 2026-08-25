# Rappel du concept du jour par l'icône

## Comportement produit

Tant que la carte du concept du jour n'a pas été découverte :

| Heure locale | Palier |
|---|---:|
| 00:00–10:59 | 0 — noir |
| 11:00 | 1 |
| 12:00 | 2 |
| … | … |
| 22:00 | 12 |
| 23:00–23:59 | 13 — rouge pur |

La découverte de la carte impose immédiatement le palier 0 jusqu'au changement de jour.
Le lendemain, la découverte de la veille ne vaut plus.

La palette complète est dans `src/domain/reminder/urgency-palette.json`. C'est la source commune
du favicon web et des ressources Android générées.

## Web / PWA

Une PWA ne dispose pas d'une API permettant de repeindre de façon fiable l'icône déjà installée
sur le launcher à chaque heure lorsque l'application est fermée.

Le web conserve donc les deux surfaces déjà prises en charge :

- favicon dynamique dans l'onglet ;
- badge lorsque la plateforme expose la Badging API.

Cette limite n'est plus utilisée pour dégrader le comportement Android : Android possède
désormais son propre shell natif.

## Android natif

Le shell Capacitor vit dans `native/`.

### Changement de l'icône

Le manifeste Android déclare quatorze `activity-alias` pointant tous vers `MainActivity`.
Chaque alias utilise la même marque avec un fond différent. Un seul alias est activé à la fois.

`DynamicIconManager` bascule l'alias avec
`PackageManager.setComponentEnabledSetting(..., DONT_KILL_APP)`.

L'alias cible est toujours activé avant la désactivation de l'ancien afin d'éviter un instant
sans entrée de launcher.

### Exécution lorsque l'app est fermée

`DynamicIconScheduler` programme un `PeriodicWorkRequest` d'une heure, initialement aligné sur le
prochain début d'heure. `DynamicIconWorker` recalcule l'état à partir de l'heure courante.

Des broadcasts système provoquent également un recalcul après :

- redémarrage ;
- mise à jour de l'application ;
- changement manuel de l'heure ;
- changement de fuseau ;
- changement de jour.

Android peut différer WorkManager sous Doze ou économie de batterie. Le changement n'est donc
pas garanti à la seconde exacte. En revanche, chaque réveil applique directement le bon palier
et ne dépend d'aucun compteur horaire.

Un **force stop** explicite de l'application par l'utilisateur suspend, par conception Android,
les travaux et broadcasts jusqu'à la prochaine ouverture.

### Source de vérité « carte découverte »

La progression reste dans le `localStorage` et reste la source de vérité web.

Pour que le worker Android connaisse le seul fait dont il a besoin lorsque le WebView est fermé,
`daily-discovery.ts` projette uniquement la date découverte (`AAAA-MM-JJ`) dans un cookie local
au conteneur Capacitor, `curiosity_daily_discovered`.

Ce cookie :

- n'est écrit que lorsque `window.Capacitor.getPlatform() === "android"` ;
- ne contient ni concept, ni historique, ni donnée personnelle ;
- est réparé depuis la progression à chaque lecture ;
- est supprimé lors d'un effacement de progression.

Le worker compare cette date à `LocalDate.now()`. Une découverte de la veille ne bloque donc
jamais le cycle du lendemain.

## Construction

Le projet Android généré n'est pas versionné. Il est reconstruit depuis le template officiel
Capacitor 8.5.0 puis enrichi par notre overlay :

```bash
npm ci
npm install --prefix native
npm run android:sync
```

Le CI Android effectue ensuite les tests unitaires natifs et `assembleDebug`.

Le shell natif utilise Android 8.0 (API 26) ou plus récent. La PWA reste disponible pour les
plateformes ne répondant pas à cette contrainte.
