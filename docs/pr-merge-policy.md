# Politique de qualification et de fusion des pull requests

## Responsabilités

Les agents qui écrivent le code **produisent** une PR, exécutent des tests proportionnés
au risque, documentent les écarts connus et publient la PR prête pour revue. Ils ne
certifient pas eux-mêmes la qualité de leur propre contribution.

Le contrôleur indépendant mandaté par le propriétaire, notamment l'assistant
ChatGPT disposant d'un accès GitHub authentifié lorsque l'utilisateur lui demande
de traiter les PR, **qualifie** la PR et prend la décision de la fusion.

Cette politique n'installe aucune routine centrale autonome et ne prétend pas
qu'une conversation ChatGPT exerce une surveillance permanente. Une qualification
et une fusion ne sont exécutées que dans une session autorisée ou via une
automatisation distincte explicitement configurée et autorisée par le propriétaire.

## Examen obligatoire par le contrôleur

1. Relever l'état GitHub réel, le dépôt, la cible `main`, la tête exacte (SHA),
   le nombre de commits et la relation avec les autres PR.
2. Lire le diff complet et les fichiers concernés ; vérifier que le comportement
   demandé est respecté et identifier les risques de régression, de sécurité et
   de perte de données. Une CI verte ne garantit pas la conformité métier.
3. Vérifier **sur le SHA courant** les checks applicables (dont `corpus`,
   `app`, `gitleaks`), leur conclusion et les journaux utiles. Aucun check
   obligatoire en attente, annulé ou en échec n'est réputé réussi.
4. Analyser les reviews, approbations exigées, demandes de changements,
   limitations et étiquettes de blocage.
5. Pour les modifications de `corpus/deepenings/*.json`, contrôler la preuve
   factuelle liée au candidat : `FACTCHECK_PASS`, SHA concordant, verdict
   indépendant `ACCEPT` et traçabilité documentaire. Les exceptions doivent
   rester visibles et ne pas être assimilées à un PASS.
6. Examiner l'état actuel de `main` et les conflits. Si un conflit apparaît,
   corriger sur la branche de la PR sans écraser l'historique, puis relancer les
   contrôles du nouveau SHA avant toute fusion.
7. Si toutes les conditions sont remplies, fusionner via l'API GitHub en
   passant le SHA de tête attendu, puis **revérifier** que la PR est marquée
   `merged` et que le changement se trouve sur `main`.

Une PR en brouillon n'est pas fusionnée sans avoir résolu la raison du
brouillon. Les changements de workflow CI, de permissions, de déploiement,
de sécurité et les migrations destructrices nécessitent une revue renforcée ;
le fait qu'ils soient techniquement fusionnables n'autorise pas à les accepter
aveuglément.

## Décision et compte rendu

Décisions possibles :

- **FUSIONNÉE** : vérifications documentées, fusion GitHub confirmée.
- **FUSIONNABLE** : contrôles satisfaits, mais fusion non encore exécutée.
- **À CORRIGER** : conflit, échec de test, manque de preuve ou régression
  corrigeable ; action à réaliser avant un nouveau contrôle.
- **BLOQUÉE** : incertitude ou risque matériel non résolu ; expliciter
  précisément la raison et la condition de déblocage.
- **NON VÉRIFIABLE** : l'outil ou les preuves nécessaires sont indisponibles.
  Ne jamais confondre cette absence de preuve avec une réussite.

Toute fusion doit être attestée par l'état retourné par GitHub, et non
seulement par une promesse d'agent ou un statut de CI.

## Organisation des agents

- L'auteur de la PR doit résoudre les problèmes qu'il est capable de corriger
  et publier ses vérifications. Il n'ajoute pas de consigne générique de
  « décision de routine centrale » qui conduirait à laisser les PR en attente.
- Le contrôleur indépendant peut demander des corrections ciblées, ou les
  effectuer directement si son accès et le mandat utilisateur le permettent.
- Le propriétaire peut demander une qualification et une fusion par ChatGPT.
  Le contrôleur agit alors sur GitHub, avec les permissions réellement
  disponibles. En l'absence de session ou d'automatisation explicitement
  programmée, aucune fusion n'a lieu en arrière-plan.
