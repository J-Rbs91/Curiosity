---
description: Enrichir Curiosity : découvrir et exploiter des sources, publier de nouvelles cartes et améliorer les approfondissements utiles.
argument-hint: [thème, concept ou priorité facultative]
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

# Routine éditoriale de Curiosity

Mission : faire progresser les connaissances **que le lecteur trouve réellement dans
Curiosity**. Ce n'est PAS une routine d'audit. Le travail n'est réussi que s'il aboutit
à une carte publiée, un approfondissement publié, une correction factuelle/pédagogique
utile, ou de nouvelles sources exploitées pour l'un de ces contenus.

Lis `CLAUDE.md`, `docs/corpus-workflow.md`, `corpus/perimeter.md`,
`corpus/deepenings/PROTOCOLE.md` et les commandes de rédaction concernées.
L'état actuel du dépôt et les décisions du propriétaire priment sur les anciennes
notes, statistiques et exemples historiques.

## 1. Prendre connaissance de l'état réel

- Relève `main`, son SHA, les PR ouvertes sur le corpus, la branche de travail et
  `git status --short`. Ne traite pas simultanément une carte déjà modifiée par
  un autre agent ou couverte par une PR ouverte.
- Utilise `npm run corpus:audit` pour les données de couverture (sortie console
  uniquement) et la liste effective de `corpus/validated/`, `corpus/deepenings/`,
  `corpus/candidates/`, `corpus/review/` et `corpus/rejected/`.
- Lis `corpus/map/queue.json` comme une **liste de pistes** datée : elle n'est
  ni la preuve de disponibilité des sources, ni un ordre intangible.
  Écarte les concepts déjà validés et les doublons. Actualise les pistes
  documentaires si le corpus a évolué.
- Si une priorité explicite est fournie dans les arguments, elle prime dans
  les limites du périmètre scientifique et des exigences de vérification.

**Interdit** : utiliser la présence, l'absence, la date ou les hashes d'un
rapport d'audit pour constituer la file. Les rapports historiques ont été
supprimés. Ne les recrée pas.

## 2. Chercher activement du contenu nouveau

Avant de choisir une réécriture, cherche ce qui pourrait **ajouter de la
connaissance** : concept absent du corpus, mécanisme manquant, nouveau texte
primaire réellement accessible, publication académique récente et pertinente,
réception francophone, contradiction scientifique sérieuse, source désormais
disponible pour un dossier auparavant bloqué.

Mobilise `corpus-scout`, puis les lecteurs/documentalistes du pipeline
`/corpus` pour vérifier l'accès au texte et sa valeur réelle. Recherche
primaire et réception francophone en parallèle. DOI ou métadonnées seuls ne
prouvent pas la lecture intégrale : consigne honnêtement le niveau d'accès.
Respecte `corpus/perimeter.md` et les règles d'attribution, de citation
et de droits. N'invente ni texte, ni auteur, ni citation, ni pagination.

**Recherche documentaire ne signifie pas collecte d'archives.**
Les essais, rapports de recherche et extractions provisoires sont jetables.
Une source rejoint durablement `corpus/evidence/` ou une fiche seulement
si elle a été consultée et utilisée pour soutenir un contenu réel
(ou si elle est une preuve documentaire intrinsèquement requise par une fiche
en cours de publication). Pas de moisson de liens inexploités.

## 3. Choisir un livrable éditorial, pas un lot d'audits

À partir de la matière vraiment vérifiable, choisis le travail qui maximise
l'intérêt du lecteur, sans quota artificiel ni remplissage :

A. **Nouvelle carte** : un concept encore absent, structurant et sourçable.
   Utilise `/corpus <sujet>` et son pipeline scout, lecteur primaire, rédacteur,
   contrôleur aveugle, puis `/corpus-publish`. Accompagne-la d'un
   approfondissement si la matière documentaire le permet ; ne bloque pas
   la carte sur un texte long artificiel.

B. **Approfondissement manquant** sur une carte déjà validée :
   utilise `/corpus-deepen <conceptId>` avec les sources établies.
   Une nouvelle explication doit apporter des faits, mécanismes, distinctions
   et exemples pédagogiques, pas allonger un texte sans apport.

C. **Amélioration d'un approfondissement existant** uniquement lorsqu'un
   motif a été découvert : nouvelle source consultée utile, affirmation
   insuffisamment fondée, lacune pédagogique identifiable, erreur signalée
   ou changement substantiel de la fiche mère. Utilise
   `/corpus-deepening-audit <conceptId>`, **jamais --stale ni --all**.
   L'audit produit une décision temporaire puis, si nécessaire, déclenche
   la réécriture et le fact-check. S'il rend PASS, ne réécris pas.

D. **Réparation ciblée d'une carte ou de ses sources** lorsque c'est la
   meilleure contribution : relire la primaire, corriger attribution,
   citation, résumé ou lien, faire contrôler et reprojeter la carte.

Ne fabrique pas une modification cosmétique pour « produire quelque chose ».
Si aucune amélioration vérifiable n'est possible, explique ce qui manque
en quelques lignes, ne crée aucune PR vide et n'ouvre aucun chantier
d'audit de substitution.

## 4. Contrôler les changements réels

- Tous les faits nouveaux sont confrontés à des sources réellement consultées.
  Respecte les gates documentaires existants. Une carte n'entre dans
  `corpus/validated/` qu'après PASS indépendant. Une réécriture d'un
  approfondissement exige `FACTCHECK_PASS` sur le SHA exact et `ACCEPT`
  du reviewer indépendant ; sur échec, restaure uniquement l'ancien texte.
- Vérifie séparément la qualité pédagogique : chaque section doit ajouter
  une compréhension nouvelle au lieu de paraphraser la précédente.
- Effectue les projections via `npm run corpus:build` et
  `npm run corpus:deepen`, jamais par édition des fichiers générés.
- Vérifie `npm run corpus:validate`, `npm run corpus:deepen -- --check`,
  `npm test`, `npm run lint` et `npm run build` si les modifications
  touchent le contenu publié. Les tests applicables doivent passer.
- Inspecte le diff des fichiers maîtres **et** générés. Écarte les artefacts
  transitoires, les rapports d'audit, les journaux, les sorties de modèles,
  les preuves dupliquées et les fichiers qui ne profitent pas au lecteur.
  Une grosse projection générée doit correspondre à une vraie modification
  de sa source maître, vérifiable dans le diff.

## 5. Nettoyer sans accumuler

Travaille sur une branche à partir d'un SHA connu, sans écraser les
travaux concurrents. Ne commite pas d'étapes intermédiaires d'audit.
Tout fichier sous `corpus/deepening-audits/` est éphémère, ignoré par Git,
et doit être effacé après consommation, qu'un texte soit accepté ou rejeté.
Ne conserve **aucun** résumé, rapport final ou journal d'audit dans le dépôt,
un dossier d'archives, une PR ou un artefact CI. Seules les sources effectivement
utiles et les connaissances publiées sont pérennes.

Ne supprime jamais globalement un répertoire de travail partagé, un contenu
validé ni un fichier modifié par un autre agent. Termine chaque contrôle puis
nettoie uniquement son espace temporaire. N'utilise ni `git reset --hard`
ni `git clean`. En cas d'échec, ne publie pas le contenu rejeté.

Une PR n'est justifiée que par des changements éditoriaux ou de sources utiles
et qualifiés. L'agent auteur ne fusionne pas sa propre PR ; il fournit les
tests et laisse la qualification indépendante prévue par `CLAUDE.md`.

## 6. Compte rendu orienté résultat

Réponds succinctement avec les résultats vérifiables du lot :

- Nouvelles cartes publiables : nombre, IDs et sujets.
- Approfondissements créés : nombre, IDs et nouvelle valeur pédagogique.
- Articles réellement améliorés : nombre, IDs, et **ce qui a changé sur le fond**.
- Sources **nouvelles et réellement exploitées** : référence, usage concret.
- Bloquants documentaires : seulement les informations nécessaires
  à une reprise utile (pas de longue trace d'audit).
- Tests effectivement exécutés et verdicts.
- Lien de PR et SHA, ou « aucun changement publiable, aucune PR ».
- Diff utile : fichiers maîtres et projection ; **0 fichier d'audit conservé**.

Ne valorise jamais le nombre de lignes, le nombre d'audits, les tokens
dépensés ou la taille du diff. Leur croissance n'est pas un résultat.
