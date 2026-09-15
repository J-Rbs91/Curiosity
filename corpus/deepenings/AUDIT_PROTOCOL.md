# Protocole d’audit pédagogique des approfondissements

Version : 4

Ce protocole est le **backstop pédagogique** du Content Pipeline v2.

Il répond d’abord à une question :

> Le lecteur apprend-il réellement quelque chose de nouveau à mesure qu’il avance ?

La véracité est un gate séparé. Dès qu’un concept possède un knowledge record v2, l’autorité factuelle est la chaîne `KNOWLEDGE_PASS -> CONTENT_PASS`. Pour les concepts historiques non migrés, `FACTCHECK_PROTOCOL.md` reste le contrôle documentaire de compatibilité.

## 0. Texte lecteur et frontière interne

Le fichier maître contient `lead`, `sections` et `limits`.

- `lead + sections` = texte lecteur ;
- `limits` = frontière documentaire interne.

`limits` n’est jamais une section éditoriale. Il n’est pas projeté vers l’application.

Une nuance réellement utile au lecteur peut apparaître dans `lead` ou `sections` si elle est autorisée par un claim vérifié. Le registre interne des lacunes n’est jamais exposé simplement parce qu’il existe.

## 1. Delta d’apprentissage

Chaque paragraphe doit produire au moins un delta identifiable par rapport à ce que le lecteur sait déjà à cet endroit.

Un delta valide peut être :

- un fait nouveau autorisé ;
- un mécanisme ;
- une distinction ;
- une conséquence correctement dérivée ;
- un exemple qui débloque une compréhension ;
- une limite ou condition d’application ;
- un changement de point de vue ;
- une connexion documentée avec une autre idée.

Ne comptent pas :

- reformuler la même proposition ;
- remplacer un mot courant par un synonyme savant ;
- ajouter une analogie qui ne résout rien ;
- annoncer qu’une idée est importante sans expliquer pourquoi ;
- étirer une définition ;
- multiplier des exemples qui démontrent tous la même chose ;
- répéter dans une section ce que le `lead` a déjà établi.

Test obligatoire :

> Qu’est-ce que le lecteur sait, comprend ou peut distinguer après ce paragraphe qu’il ne savait, ne comprenait ou ne pouvait distinguer avant ?

Si la réponse n’est pas précise, le paragraphe est suspect.

## 2. Progression sans gabarit imposé

Une bonne trajectoire peut passer par intuition, origine, mécanisme, distinction, exemple, conséquence, limite, controverse ou ouverture. L’ordre dépend du concept.

Deux défauts sont refusés :

1. **stagnation** : plusieurs passages accomplissent le même travail ;
2. **saut** : une section mobilise une notion que les précédentes n’ont pas construite.

La longueur ne prouve rien. Une version plus courte peut être meilleure.

## 3. Huit axes

Chaque axe reçoit 0 à 4, avec preuve textuelle précise.

### A. Fidélité documentaire

Sur v2, regarde surtout si le texte semble compatible avec son knowledge record et si le dernier content gate est valide sur le SHA exact. Cette note ne remplace jamais le gate.

### B. Progressivité pédagogique

4 : chaque section repose sur la précédente et ajoute un palier clair.

0 : ordre arbitraire, stagnation ou sauts bloquants.

### C. Densité / non-redondance

4 : presque chaque paragraphe possède un delta distinct.

0 : paraphrase ou expansion rhétorique dominante.

### D. Clarté

4 : un non-spécialiste peut suivre sans perte de précision.

0 : le texte exige les présupposés qu’il devait enseigner.

### E. Profondeur explicative

4 : mécanismes, relations, conséquences ou conditions sont expliqués.

0 : le lecteur reçoit surtout une définition plus longue.

### F. Valeur des exemples

4 : les exemples font comprendre quelque chose de difficile à saisir sans eux.

0 : ils décorent ou répètent.

L’absence d’exemple n’est pas une faute automatique.

### G. Limites / nuances / distinctions

4 : elles arrivent au moment où elles évitent un contresens ou complexifient utilement l’intuition.

0 : absentes, décoratives ou rejetées sans effet en fin de texte.

Cet axe porte sur le **contenu lecteur**, jamais sur l’affichage de `limits`.

### H. Pouvoir d’ouverture

4 : le texte laisse une question, une tension, une connexion ou une source qui donne une raison précise d’aller plus loin.

0 : conclusion répétitive ou précautions génériques.

## 4. Verdicts pédagogiques

- `PASS` : aucun défaut majeur ;
- `REVISE` : architecture saine, corrections locales ;
- `REWRITE` : structure mauvaise ou redondance systémique ;
- `BLOCKED_SOURCE` : la matière vérifiée disponible ne permet pas la profondeur recherchée.

`PASS` exige au minimum :

- aucune faute documentaire critique visible ;
- aucune séquence de trois paragraphes au même delta substantiel ;
- aucune section principalement redondante ;
- une progression explicable en une phrase par section.

Un `PASS` pédagogique ne vaut jamais publication si le gate factuel requis n’est pas passé.

## 5. Quel gate factuel utiliser ?

### Concept v2

Si `corpus/knowledge/<conceptId>.json` existe :

1. l’approfondissement exact doit avoir un `CONTENT_PASS` ;
2. le `candidate_sha256` du rapport doit correspondre au fichier courant ;
3. le `knowledge_sha256` doit correspondre au knowledge record courant.

Toute réécriture invalide automatiquement l’ancien content gate.

### Concept legacy

S’il n’existe pas encore de knowledge record :

- utiliser la chaîne de `FACTCHECK_PROTOCOL.md` héritée de la PR #107 ;
- tout `FACTCHECK_FAIL` ou `FACTCHECK_INVALID` bloque la publication.

Ne mélange jamais les deux régimes pour obtenir le verdict le plus favorable.

## 6. Diagnostic avant réécriture

Avant toute modification, produire :

1. trajectoire actuelle ;
2. delta de chaque paragraphe ;
3. groupes redondants ;
4. informations solides mais mal placées ;
5. claims disponibles mais sous-exploités, si v2 ;
6. frontières documentaires qui empêchent d’aller plus loin ;
7. trajectoire cible.

Le diagnostic sépare toujours **défaut pédagogique** et **manque de matière**.

## 7. Réécriture

Le réécrivain ne valide jamais son propre texte.

Pour un concept v2, il travaille exclusivement à partir du knowledge record vérifié et du plan pédagogique. Il ne retourne pas aux synthèses libres historiques pour ajouter de la matière.

Après toute réécriture v2 :

1. `npm run corpus:deepen -- --check --only=<id>` ;
2. `npm run corpus:content-check -- --prepare --artifact=deepening --only=<id>` ;
3. mapper frais ;
4. bundle ;
5. verifier frais ;
6. gate ;
7. seulement si `CONTENT_PASS`, review comparative.

Pour un concept legacy, refaire le fact-check v3 historique après la réécriture.

## 8. Revue indépendante

Le reviewer compare ancienne et nouvelle version et rend :

- `ACCEPT` si la progression est réellement meilleure sans régression documentaire ;
- `REJECT` sinon.

Pour v2, `ACCEPT` exige `CONTENT_PASS` sur le SHA exact. Pour legacy, il exige le gate factuel historique correspondant.

Un gain de style seul ne justifie jamais `ACCEPT`.

## 9. Contexte et récurrence

- un concept par contexte d’agent ;
- 3 cartes par lot par défaut ;
- 5 maximum explicite ;
- 300 000 tokens estimés maximum par pack ;
- au-delà : partition, jamais troncature ;
- rapports détaillés sur disque, pas recopiés dans l’orchestrateur.

Un concept redevient stale si son texte, son knowledge record / dossier validé, son gate factuel ou la version du protocole change.

Version courante : `protocol_version: 4`.
