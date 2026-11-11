@AGENTS.md

## Pull requests et fusion

Lire `docs/pr-merge-policy.md` avant d'ouvrir une PR. Une PR qualifiée
doit être prête pour revue : le workflow GitHub vérifie les gates et fusionne
automatiquement sur `main`. Ne pas inscrire par défaut une interdiction de
fusion automatique ni renvoyer systématiquement la décision à une routine
centrale. En cas de conflit ou de CI rouge, réparer, retester puis republier.
Les changements sensibles et les échecs documentaires réels restent bloquants.
