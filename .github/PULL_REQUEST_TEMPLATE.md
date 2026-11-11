## Description

Que fait cette pull request et pourquoi ?

## Type de changement

- [ ] Correction de bug
- [ ] Nouvelle fonctionnalité
- [ ] Changement de contenu du corpus (fiche instruite via le pipeline documentaire)
- [ ] Documentation
- [ ] Autre (préciser)

## Comment ça a été testé

Décrivez les vérifications effectuées (`npm test`, `npm run lint`, `npm run build`,
vérification manuelle dans le navigateur...).

## Checklist

- [ ] `npm run lint` passe
- [ ] `npm test` passe
- [ ] `npm run build` passe
- [ ] Si la pull request touche au corpus, la fiche a suivi le pipeline documentaire
      (`docs/corpus-workflow.md`) et n'a pas été rédigée de mémoire
- [ ] La documentation pertinente (README, docs/) a été mise à jour si nécessaire

## Fusion automatisée

- [ ] Si cette PR est prête, elle n'est pas en brouillon et les gates requis ont été vérifiés.
- [ ] Si la PR modifie un approfondissement, FACTCHECK_PASS et review ACCEPT sont attestés.
- [ ] En cas de blocage réel, ajouter `needs-manual-review` avec la raison ; ne pas prétendre à une validation non obtenue.

Les PR prêtes sont fusionnées automatiquement conformément à
`docs/pr-merge-policy.md`. Ne pas ajouter de mention générique demandant une
décision de fusion par une routine centrale.
