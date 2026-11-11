@AGENTS.md

## Pull requests et qualification

Lire `docs/pr-merge-policy.md`. L'agent auteur produit et teste ses modifications, publie une PR prête pour revue si les vérifications de son périmètre sont réussies, et documente les preuves et limites.

**Ne pas fusionner sa propre PR ni s'auto-attribuer une certification indépendante.**
La décision de fusion appartient au contrôleur distinct mandaté par le propriétaire (notamment l'assistant ChatGPT connecté à GitHub), qui inspecte le diff, le risque, les validations et le SHA courant avant fusion.

Pas de mécanisme de fusion automatique autonome dans ce dépôt. En cas de conflit, CI rouge ou garde métier non satisfaite, l'agent propose ou implémente une correction, puis renouvelle les vérifications. Ne pas laisser de brouillon par inertie, ni retirer des tests pour obtenir un résultat vert.
