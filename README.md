# Curiosity — Sociologie des organisations

Une application web mobile-first, installable en PWA, pour apprendre progressivement la
sociologie des organisations. Ce n'est pas un jeu de flashcards : à chaque ouverture,
l'application choisit l'action pédagogique la plus pertinente — découvrir, réviser,
approfondir, relier, comparer ou appliquer — à partir d'un graphe de connaissances reliant
auteurs, concepts, thèmes et cas pratiques.

## Stack

- Next.js (App Router) · React · TypeScript strict · Tailwind CSS
- PWA (manifest + service worker, installable, fonctionne hors-ligne pour le contenu déjà visité)
- Stockage 100 % local (`localStorage`) — aucun compte, aucun serveur applicatif
- Vitest pour les tests unitaires

## Démarrer

```bash
npm install
npm run dev
```

```bash
npm run build   # build de production
npm test        # tests unitaires (moteur pédagogique, progression, persistance)
npm run lint
```

```bash
npm run corpus:audit      # état du corpus : vérifié / hérité / en cours
npm run corpus:validate   # contrôle documentaire du corpus maître
npm run corpus:build      # projette les fiches validées vers src/content/generated/
```

## Architecture

```
src/
├── app/           # Écrans (Aujourd'hui, Learn, Explore, Progress, Settings)
├── components/    # UI : learning/ concept/ quiz/ progress/ ui/
├── domain/        # Logique pure : graphe de concepts, maîtrise, auteurs, thèmes, sessions
├── services/      # Orchestration : moteur pédagogique, répétition espacée, progression
├── repositories/  # Persistance (localStorage aujourd'hui, remplaçable par Supabase/Postgres)
├── content/       # Corpus servi à l'application (hérité + projeté)
└── types/         # Modèle de données partagé

corpus/            # Corpus maître : fiches sourcées, contrôlées, versionnées
scripts/corpus/    # Validation, projection, audit, dossiers de contrôle aveugle
.claude/agents/    # Les neuf sous-agents du pipeline documentaire
```

Le moteur pédagogique (`services/learning-engine`) ne connaît que des données pures
(`Concept[]`, `Author[]`, `Theme[]`, `ProgressState`) : il est testable sans React ni
localStorage. La couche `repositories/` isole complètement la persistance : passer à une
base distante plus tard ne demande qu'une nouvelle implémentation de `ProgressRepository`.

## Le corpus

Un concept n'est pas rédigé : il est **instruit**. Un pipeline de neuf sous-agents établit
ce que dit le texte de l'auteur, comment la littérature l'attribue et le discute, puis un
contrôleur aveugle — qui ignore tout du travail amont — revérifie fait par fait avant
qu'une ligne n'atteigne l'application. Les fiches validées sont projetées mécaniquement
vers `src/content/generated/`, et remplacent une à une les 35 fiches héritées de la phase
prototype.

La méthode, les critères de validation et le protocole sont dans
[`docs/corpus-workflow.md`](docs/corpus-workflow.md) ; le périmètre dans
[`corpus/perimeter.md`](corpus/perimeter.md).

> Une référence introuvable n'existe pas. Une source qui ne dit pas ce qu'on lui fait dire
> n'est pas une preuve. Une affirmation n'est pas validée par celui qui l'a produite.

## Principe directeur

> Chaque ouverture de l'application doit faire progresser la compréhension de la
> sociologie des organisations.
