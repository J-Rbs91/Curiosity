# Contribuer à Curiosity

Merci de l'intérêt porté à ce projet. Ce document explique comment proposer un
changement, qu'il s'agisse de code ou de contenu du corpus.

## Code de conduite

Ce projet suit le [Code de conduite](CODE_OF_CONDUCT.md). En participant, vous acceptez
de le respecter.

## Avant de commencer

- Pour un bug ou une idée, ouvrez d'abord une issue en utilisant le modèle correspondant
  — ça évite de dupliquer un travail déjà en cours.
- Pour une question sur le fonctionnement du projet, lisez le `README.md` et
  `docs/corpus-workflow.md` : la plupart des questions sur le pipeline documentaire y
  trouvent leur réponse.

## Mettre en place l'environnement

```bash
npm install
npm run dev
```

Avant de proposer un changement :

```bash
npm run lint
npm test
npm run build
```

## Contribuer au code de l'application

- Respectez le style existant (TypeScript strict, composants déjà en place) plutôt que
  d'introduire de nouvelles conventions.
- Un changement qui touche à la marque (icônes, favicon) doit passer par
  `npm run icons` plutôt que d'éditer les fichiers générés à la main.
- Ouvrez une pull request avec une description claire du problème résolu et de
  l'approche choisie ; le modèle de pull request guide les informations attendues.

## Contribuer au corpus

Le corpus n'est pas rédigé librement : chaque carte suit le pipeline décrit dans
[`docs/corpus-workflow.md`](docs/corpus-workflow.md) et le périmètre défini dans
[`corpus/perimeter.md`](corpus/perimeter.md). N'ouvrez pas de pull request ajoutant une
fiche directement dans `src/content/generated/` sans être passé·e par ce pipeline — une
fiche qui n'a pas été instruite et contrôlée n'est pas acceptée, quelle que soit sa
qualité apparente.

Si vous repérez une erreur factuelle ou une source douteuse dans une carte déjà publiée,
ouvrez une issue plutôt qu'une correction directe : la fiche doit être revérifiée par le
contrôleur documentaire avant toute republication.

## Pull requests

- Une pull request traite un seul sujet ; scindez les changements sans rapport.
- Les tests et le lint doivent passer avant la revue.
- Les mainteneurs peuvent demander des changements ou fermer une pull request qui sort du
  périmètre du projet.
