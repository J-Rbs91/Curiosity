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

## Architecture

```
src/
├── app/           # Écrans (Aujourd'hui, Learn, Explore, Progress, Settings)
├── components/    # UI : learning/ concept/ quiz/ progress/ ui/
├── domain/        # Logique pure : graphe de concepts, maîtrise, auteurs, thèmes, sessions
├── services/      # Orchestration : moteur pédagogique, répétition espacée, progression
├── repositories/  # Persistance (localStorage aujourd'hui, remplaçable par Supabase/Postgres)
├── content/       # Corpus : auteurs, thèmes, ~35 concepts, cas pratiques
└── types/         # Modèle de données partagé
```

Le moteur pédagogique (`services/learning-engine`) ne connaît que des données pures
(`Concept[]`, `Author[]`, `Theme[]`, `ProgressState`) : il est testable sans React ni
localStorage. La couche `repositories/` isole complètement la persistance : passer à une
base distante plus tard ne demande qu'une nouvelle implémentation de `ProgressRepository`.

## Principe directeur

> Chaque ouverture de l'application doit faire progresser la compréhension de la
> sociologie des organisations.
