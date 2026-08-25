# Curiosity — shell Android natif

Le site/PWA reste la source principale du produit. Ce dossier ajoute uniquement le shell
Android nécessaire aux capacités qu'une PWA ne possède pas, en particulier l'icône de launcher
dynamique.

## Pré-requis

- Node.js 22 ou plus récent (Capacitor 8)
- JDK 21
- Android Studio / Android SDK avec la plateforme Android 36

## Première installation

```bash
npm ci
npm install --prefix native
npm run android:sync
npm run android:open
```

`android:sync` :

1. construit l'export statique Next.js avec un `basePath` vide ;
2. crée le projet Android Capacitor s'il n'existe pas ;
3. synchronise l'export web ;
4. applique `native/android-overrides/` ;
5. ajoute WorkManager ;
6. génère les 14 variantes d'icône depuis
   `src/domain/reminder/urgency-palette.json`.

Le dossier `native/android/` est volontairement ignoré par Git : c'est un produit généré,
reconstructible par cette commande. Le code qui nous appartient reste donc petit et relisible.

## Icône dynamique

Le launcher possède 14 `activity-alias`, `Icon00` à `Icon13`.

- `Icon00` : noir ;
- `Icon01` à `Icon13` : progression de 11 h à 23 h ;
- le pictogramme ne change jamais.

Android recalcule l'état :

- à chaque ouverture / retour au premier plan / sortie de l'app ;
- après un redémarrage, un changement de date, d'heure ou de fuseau ;
- via WorkManager, environ une fois par heure.

WorkManager est volontairement **inexact** : Android peut retarder un travail en veille profonde
ou en économie de batterie. Lorsqu'il s'exécute, il ne rejoue jamais les paliers manqués : il
applique directement le palier correspondant à l'heure locale courante.

La PWA reste utilisable indépendamment. Sur le web, le rappel continue à passer par le favicon
et, lorsque disponible, la Badging API.
