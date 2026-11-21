@AGENTS.md

## Routine éditoriale de Curiosity

Pour tout travail périodique ou nocturne sur le corpus, exécuter
`/corpus-nightly` selon `.claude/commands/corpus-nightly.md`.
**Ne pas remplacer cette mission par un audit général** : le livrable est
l'enrichissement documentaire et éditorial réellement publiable. Aucune
réexécution automatique des audits sur la base de leur absence d'historique.
Les audits et contrôles restent éphémères, y compris leurs verdicts détaillés
et rapports finaux ; seuls les contenus, sources exploitées et projections
nécessaires à l'application sont enregistrés.

## Pull requests et qualification

Lire `docs/pr-merge-policy.md`. L'agent auteur produit et teste ses modifications, publie une PR prête pour revue si les vérifications de son périmètre sont réussies, et documente les preuves et limites.

**Ne pas fusionner sa propre PR ni s'auto-attribuer une certification indépendante.**
La décision de fusion appartient au contrôleur distinct mandaté par le propriétaire (notamment l'assistant ChatGPT connecté à GitHub), qui inspecte le diff, le risque, les validations et le SHA courant avant fusion.

Pas de mécanisme de fusion automatique autonome dans ce dépôt. En cas de conflit, CI rouge ou garde métier non satisfaite, l'agent propose ou implémente une correction, puis renouvelle les vérifications. Ne pas laisser de brouillon par inertie, ni retirer des tests pour obtenir un résultat vert.
