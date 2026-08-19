# Curiosity — Comprendre le travail et les organisations

**→ [j-rbs91.github.io/Curiosity](https://j-rbs91.github.io/Curiosity/)**

Une application web mobile-first, installable en PWA, qui fait découvrir **une carte à la
fois** les concepts qui expliquent comment le travail et les organisations fonctionnent
réellement. À chaque ouverture, un concept : son thème, son nom, une accroche, une citation
de son auteur quand il en existe une, un résumé court, et ses sources. Rien d'autre — le
lecteur qui veut aller plus loin emporte la carte vers l'IA de son choix par le bouton
« Approfondir ».

Ce que la carte affiche a été **instruit**, pas rédigé de mémoire : c'est là que se trouve
le vrai travail du projet.

## Stack

- Next.js 16 (App Router, export statique) · React 19 · TypeScript strict · Tailwind CSS 4
- PWA (manifeste + service worker, installable, consultable hors-ligne)
- Stockage 100 % local (`localStorage`) — aucun compte, aucun serveur applicatif
- Vitest pour les tests unitaires

## Démarrer

```bash
npm install
npm run dev
```

```bash
npm run build   # export statique dans out/
npm test        # tests unitaires
npm run lint
npm run icons   # regénère la marque : vecteurs, icônes PWA, favicon
```

```bash
npm run corpus:audit      # état du corpus : validé, en cours, sujets à instruire
npm run corpus:validate   # contrôle documentaire du corpus maître
npm run corpus:build      # projette les fiches validées vers src/content/generated/
```

## Taxonomie et corpus

Deux couches, et elles ne se confondent pas.

La **taxonomie** dit *où l'on est* : quatre familles, onze domaines. C'est une
configuration, déclarée une fois dans [`src/content/taxonomy.ts`](src/content/taxonomy.ts),
d'où dérivent la navigation, les pages de domaine, les listes et le tirage de la carte.

| Famille | Question directrice | Domaines |
|---|---|---|
| Comprendre les humains et les organisations | Pourquoi les individus et les collectifs se comportent-ils ainsi ? | Sociologie des organisations · Sociologie du travail · Psychologie du travail · Économie comportementale |
| Comprendre le travail réel | Que se passe-t-il réellement lorsque quelqu'un essaie de faire son travail ? | Ergonomie de l'activité · Human Factors / ergonomie cognitive |
| Comprendre la production et les systèmes | Comment le système produit-il ses résultats ? | Operations Management · Systems Thinking · Cybernétique |
| Comprendre le pilotage | Comment savons-nous ce qui se passe et comment décidons-nous quoi faire ? | Théorie de la mesure / KPI · Science de la décision |

Le **corpus** dit *ce qu'on apprend* : thèmes, concepts, auteurs, citations, sources. Il est
produit fiche par fiche par le pipeline documentaire, et **quatre domaines en ont un
aujourd'hui** — la sociologie des organisations, la théorie de la mesure, l'ergonomie de
l'activité et les human factors. Les sept autres sont déclarés et vides, ce que l'interface
dit en toutes lettres plutôt que d'afficher « 0 résultat ».

Une carte se rattache à son domaine **par son thème** : aucune des huit fiches instruites
avant que les domaines n'existent n'a eu à être rouverte. Le champ `domain` d'une fiche
n'existe que pour celle dont aucun thème n'est encore déclaré — dès qu'il l'est, le champ
doit disparaître, et un test le vérifie plutôt que de faire confiance à qui projette.

**Ajouter un domaine, c'est ajouter une entrée dans `taxonomy.ts`.** Sa page, sa route
statique, sa place dans la navigation et son état de corpus en découlent. Aucun composant,
aucune condition, aucun menu n'est à écrire — et un test le vérifie.

## Architecture

```
src/
├── app/           # Écrans (Aujourd'hui, Explorer, domaine, thème, auteur, concept, Réglages)
├── components/    # UI : concept/ motion/ navigation/ ui/
├── domain/        # Logique pure : taxonomie, tirage de la carte, prompt d'approfondissement
├── services/      # Progression (ce qui a déjà été vu)
├── repositories/  # Persistance (localStorage, remplaçable)
├── content/       # Taxonomie + corpus projeté + échafaudage de développement
└── types/         # Modèle de données partagé

corpus/            # Corpus maître : fiches sourcées, contrôlées, versionnées
scripts/corpus/    # Validation, projection, audit, dossiers de contrôle aveugle
scripts/icons/     # Génère la marque depuis sa géométrie, sans aucune dépendance
scripts/mcp/       # Serveur MCP : OpenAlex, Crossref, Semantic Scholar, Zotero, HAL
.claude/agents/    # Les huit sous-agents du pipeline documentaire
```

La couche `repositories/` isole complètement la persistance : passer à une base distante
plus tard ne demande qu'une nouvelle implémentation de `ProgressRepository`.

**La carte doit tenir dans un écran, sans défilement.** C'est la contrainte qui commande
tout le reste. Les longueurs affichables (titre 48, accroche 85, résumé 170, citation 150,
5 sources) sont mesurées sur le rendu réel du plus petit écran encore en circulation, et le
validateur du corpus les fait respecter — voir `CARD_LIMITS` dans
`scripts/corpus/lib/validate.mjs`.

## Le corpus

Un concept n'est pas rédigé : il est **instruit**. Un pipeline de huit sous-agents établit
ce que dit le texte de l'auteur, comment la littérature l'attribue et le discute, puis un
contrôleur aveugle — qui ignore tout du travail amont — revérifie fait par fait avant
qu'une ligne n'atteigne l'application. Les fiches validées sont projetées mécaniquement
vers `src/content/generated/` — et c'est tout le corpus.

Les 35 fiches de `src/content/fixtures/` ne sont pas un corpus mais un échafaudage : elles
ont été écrites de mémoire pour que les écrans puissent être construits. Elles ne sont
servies qu'en développement, portent une marque à l'écran, et aucune fiche vérifiée n'a le
droit de s'appuyer sur elles.

Les agents interrogent les bases par un serveur MCP local — OpenAlex, Crossref, Semantic
Scholar, Zotero et HAL derrière sept outils, dont un `verify_reference` qui confronte une
référence à sa notice réelle.

La méthode, les critères de validation et le protocole sont dans
[`docs/corpus-workflow.md`](docs/corpus-workflow.md) ; le périmètre dans
[`corpus/perimeter.md`](corpus/perimeter.md) ; le branchement des bases dans
[`scripts/mcp/README.md`](scripts/mcp/README.md).

> Une référence introuvable n'existe pas. Une source qui ne dit pas ce qu'on lui fait dire
> n'est pas une preuve. Une affirmation n'est pas validée par celui qui l'a produite.

## Publication

`npm run build` produit un export statique complet dans `out/` : tout le contenu est
compilé dans le bundle et le seul état persistant vit dans le navigateur du lecteur, si
bien qu'aucun serveur applicatif n'est nécessaire.

`.github/workflows/pages.yml` publie cet export sur GitHub Pages à chaque poussée sur
`main` — le site est servi sur <https://j-rbs91.github.io/Curiosity/>. Un dépôt de projet
étant servi sous `/<nom-du-dépôt>/`, la construction reçoit ce préfixe par
`NEXT_PUBLIC_BASE_PATH` ; les chemins écrits à la main — manifeste, icônes, service
worker — passent tous par `src/lib/base-path.ts`.

**À faire une fois, à la main :** dans Settings → Pages, choisir « GitHub Actions » comme
source. Sans cela le déploiement échoue sur une erreur d'environnement.

## Principe directeur

> Chaque ouverture de l'application doit faire découvrir un concept — et rien de ce qui
> s'affiche ne doit pouvoir être faux.
