# Politique de fusion des pull requests

## Principe

Une PR de Curiosity ouverte, prête pour revue et ciblant `main` doit être
fusionnée automatiquement après qualification. L'absence d'une personne
disponible pour cliquer sur Merge n'est pas un motif d'attente.

Le dispositif est `.github/workflows/auto-merge-qualified.yml`, dont le
moteur est `scripts/ci/auto-merge-prs.mjs`. Il réévalue les PR à chaque fin
de workflow `ci` ou `Secret scan` et toutes les 15 minutes. Il appelle
directement l'API de fusion GitHub : le réglage `allow_auto_merge=false` du
dépôt ne l'empêche pas de fonctionner. En revanche, les permissions accordées
au `GITHUB_TOKEN` doivent autoriser la fusion.

## Conditions obligatoires

- PR ouverte, non brouillon, base `main`, branche interne au dépôt.
- Absence de conflit, état `mergeable_state: clean` au moment de la décision.
- Checks `corpus`, `app` et `gitleaks` tous terminés avec `success`.
- Aucun statut de commit en échec/en attente, aucune revue `CHANGES_REQUESTED`
  non levée, aucun reviewer explicitement en attente.
- Absence d'étiquette de blocage `no-auto-merge`, `do-not-merge`,
  `manual-review`, `needs-manual-review`, `hold`, `blocked`,
  `security-review` ou `wip`.
- Les modifications de `corpus/deepenings/*.json` exigent un gate
  `FACTCHECK_PASS`, un `review.md` avec verdict `ACCEPT` et une preuve de
  correspondance SHA-256 exacte du contenu contrôlé.
- Les modifications de `.github/`, `.claude/settings.json` et du moteur
  d'auto-fusion exigent une qualification et une fusion manuelles.

Le moteur ne checkout jamais le contenu d'une PR, vérifie une nouvelle fois
l'état de la PR, et soumet le SHA attendu à GitHub pour refuser une fusion
concurrente involontaire. Les PR fusionnées utilisent un squash.

## Règle pour les agents

L'agent qui produit une PR doit l'ouvrir en **ready for review** si les
vérifications réelles du périmètre sont satisfaites. Il ne doit pas écrire
par défaut « pas de merge automatique, décision de la routine centrale ».
Il ne doit pas déplacer en brouillon une PR qualifiée par simple précaution.

Si une CI échoue, un conflit apparaît, une preuve est manquante ou une revue
bloquante est active, l'agent doit **corriger et requalifier** plutôt que
laisser la PR ouverte indéfiniment. Une PR dont les contrôles métier échouent
reste non fusionnable. Ne jamais contourner les checks ou forcer `main`.
Une vraie exception nécessitant une décision humaine doit porter l'étiquette
`needs-manual-review` et une explication explicite dans la PR.

La CI GitHub vérifie le fonctionnement du moteur ; l'auto-fusion n'est
considérée opérationnelle qu'après observation d'une exécution GitHub Actions
réelle réussie sur une PR éligible. Un test local réussi ne suffit pas.

## Diagnostic des PR en attente

Si une PR ne fusionne pas après les contrôles, consulter le journal du workflow
`Auto-merge qualified PRs` dans GitHub Actions. Le moteur rapporte la raison
du refus, notamment un check absent, un conflit, un refus documentaire ou une
revue requise. Ne pas assimiler un run de CI sur un ancien SHA à la validation
du nouveau commit.

En cas d'incident transitoire GitHub Actions (timeout réseau ou run annulé par
un commit plus récent), n'effectuer aucune fusion tant que les contrôles du
SHA actuel ne sont pas tous réussis. Une nouvelle exécution ou un contrôle
ultérieur doit confirmer la réussite avant la fusion.
