---
description: Auditer périodiquement les approfondissements, réécrire ceux qui stagnent, fact-checker avec preuves déterministes et tracer la décision
argument-hint: [conceptId…] | --all | --stale | --batch=N
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Audite les approfondissements pour : **$ARGUMENTS**

Lis d'abord, en entier :

1. `corpus/deepenings/AUDIT_PROTOCOL.md` ;
2. `corpus/deepenings/FACTCHECK_PROTOCOL.md`.

La chaîne est :

`SELECT -> PREPARE -> AUDIT -> REWRITE éventuel -> RE-PREPARE -> CLAIM MAP -> BUNDLE -> VERIFY -> DETERMINISTIC GATE -> REVIEW -> TRACE`

`PREPARE` vient **avant** `AUDIT`, et ce n'est pas un détail d'ordonnancement.

Tant que le pack de preuve était construit après l'audit, ni l'auditeur ni le réécrivain ne
voyaient le registre des supports résolus : ils lisaient `corpus/validated/<id>.json` brut. Un
auditeur pouvait donc prescrire « déplier cette section » en voyant une notion *nommée* dans les
sources, sans pouvoir vérifier qu'un support en porte l'*explication*. Le réécrivain exécutait,
fournissait le mécanisme lui-même, et le gate le refusait à juste titre — trop tard, après deux
boucles dépensées.

Le lot du 2026-09-18 a mesuré le coût de cette inversion : les trois réécritures qui ont grossi
(+17 %, +22 %, +29 %) ont toutes échoué, et les 28 échecs de la plus grosse étaient massés dans
la seule section que l'audit demandait de déplier. Le lot précédent, dont les audits prescrivaient
« matière inchangée », « fondre », « ne surtout pas se développer », a produit trois réécritures
à −4 %, −2 % et +9 % : les trois ont obtenu `FACTCHECK_PASS`.

Le pack est donc construit d'abord et transmis en lecture à l'auditeur puis au réécrivain, pour
qu'une prescription d'ajout puisse nommer le support qui la finance.

## 0. Invariants de contexte

- Un agent travaille sur **un seul concept** et dans un contexte frais.
- Le lot par défaut est de **3 cartes**.
- `--batch=N` est accepté uniquement pour `1 <= N <= 5`.
- Toute valeur supérieure à 5 est refusée, même si le modèle possède une fenêtre plus grande.
- L'orchestrateur ne recopie jamais les sorties détaillées des agents dans ses prompts suivants.
- Les sorties détaillées sont écrites dans `corpus/deepening-audits/work/<conceptId>/` ; l'agent ne
  rend à l'orchestrateur que verdicts, compteurs et chemins.
- Aucun pack d'entrée d'un agent ne dépasse **300 000 tokens estimés**. Le seuil est un plafond,
  pas une cible. Un dépassement impose une partition, jamais une troncature.

Le texte lecteur est uniquement `lead` + `sections`. `limits` reste une frontière documentaire
interne et n'est jamais rendu au lecteur.

## 1. Sélection

Le répertoire des rapports finaux est `corpus/deepening-audits/`.

Pour chaque `corpus/deepenings/<id>.json`, calcule les SHA-256 du deepening et du fichier
`corpus/validated/<id>.json`.

Un rapport est à jour uniquement s'il contient ces deux hashes et :

`protocol_version: 4`

Une carte est stale si :

- aucun rapport final n'existe ;
- le deepening a changé ;
- le fichier validated a changé ;
- la version du protocole a changé ;
- elle est demandée explicitement.

Arguments :

| Argument | Sélection |
|---|---|
| identifiants explicites | ces cartes |
| aucun argument / `--stale` | cartes stale |
| `--all` | toutes les cartes |
| `--batch=N` | limite le lot, maximum 5 |

Sans `--batch`, sélectionne au plus **3 cartes**.

## 2. Working tree

Avant toute mutation :

```bash
git status --short -- corpus/deepenings/<id>.json corpus/validated/<id>.json corpus/evidence/<id>/
```

Si le deepening, le validated ou les preuves de la carte étaient déjà modifiés, marque
`SKIPPED_DIRTY` et ne touche pas à cette carte.

Interdictions : `git reset --hard`, `git clean`, restauration globale.

## 3. PREPARE initial

Avant l'audit, construis le pack de preuve :

```bash
npm run corpus:factcheck -- --prepare --only=<id>
```

Il écrit `corpus/deepening-audits/work/<id>/factcheck-pack.json`, qui porte le registre des
supports `SUP-...` réellement disponibles et leur niveau d'accès.

Ce pack est le **budget documentaire** de la carte. Il ne sert pas encore à juger le texte : il
sert à ce que l'audit et la réécriture sachent ce que les sources financent avant d'écrire.

Si `status = PARTITION_REQUIRED`, ne charge pas le pack tel quel dans un agent : partitionne comme
au §6.

## 4. AUDIT pédagogique

Lance `corpus-deepening-auditor` avec :

- le `conceptId` ;
- le chemin `corpus/deepening-audits/work/<id>/factcheck-pack.json`.

Ne recopie pas le pack dans le prompt : l'agent le lit sur disque.

L'agent écrit sa sortie complète dans :

`corpus/deepening-audits/work/<id>/audit.md`

et rend seulement une synthèse courte à l'orchestrateur.

**Toute prescription d'ajout doit nommer le ou les `support_id` qui la financent.** Une
recommandation de déplier, développer ou définir qui ne cite aucun support n'est pas exécutable :
le réécrivain doit la traiter comme une invitation à resserrer, pas à écrire.

Verdicts : `PASS`, `REVISE`, `REWRITE`, `BLOCKED_SOURCE`.

- `PASS` : texte inchangé, mais FACTCHECK obligatoire.
- `BLOCKED_SOURCE` : aucune invention pour combler le manque. Trace et passe à la carte suivante.
- `REVISE` / `REWRITE` : étape 5.

## 5. REWRITE éventuel

Lance `corpus-deepening-rewriter` avec :

- le `conceptId` ;
- le chemin `corpus/deepening-audits/work/<id>/audit.md` ;
- le chemin `corpus/deepening-audits/work/<id>/factcheck-pack.json`.

Ne recopie ni l'audit ni le pack dans le prompt.

Budget de croissance, à rappeler dans la consigne : **toute augmentation nette du texte lecteur
doit être financée par des supports nommés du pack.** Le réécrivain doit pouvoir citer, pour
chaque phrase ajoutée, le `support_id` qui l'autorise. Une réécriture plus courte est un résultat
normal, et souvent le bon.

Après écriture :

```bash
npm run corpus:deepen -- --check --only=<id>
```

Le contrôle doit passer avant fact-check.

## 6. RE-PREPARE déterministe

Toute réécriture change le SHA et invalide le pack initial. Reconstruis-le :

```bash
npm run corpus:factcheck -- --prepare --only=<id>
```

Le script réécrit :

`corpus/deepening-audits/work/<id>/factcheck-pack.json`

Si l'audit a rendu `PASS` et que rien n'a été réécrit, le pack du §3 est encore valide et cette
étape est un no-op : le SHA est inchangé.

Il fixe notamment :

- SHA exact du deepening candidat ;
- paragraphes lecteur et locators ;
- registre des supports `SUP-...` dérivés du contenu réellement présent ;
- niveaux d'accès hérités des objets réellement marqués `consulted` ;
- estimation de taille.

Si `status = PARTITION_REQUIRED`, ne charge pas ce pack tel quel dans un agent. Partitionne par
sections et groupes de supports de manière à ce que chaque invocation reste <= 300k estimés. Ne
supprime aucune matière pour respecter le plafond.

## 7. CLAIM MAP

Lance un **nouvel agent frais** `corpus-deepening-claim-mapper` sur une seule carte.

Il lit le pack et écrit :

`corpus/deepening-audits/work/<id>/claim-map.json`

### Report des cycles de correction

Si `RE-PREPARE` a écrit `corpus/deepening-audits/work/<id>/carry-over.json`, passe-le au mappeur.

Cet artefact liste les paragraphes dont le texte est **inchangé octet pour octet** depuis le cycle
précédent, avec leurs claims et leurs `support_ids`. Le mappeur les réutilise **verbatim** et ne
mappe à neuf que les `changed_locators`.

La raison est mesurée : le mapping était refait sur tout le texte à chaque cycle, donc le
découpage et le rattachement des supports bougeaient là où le texte n'avait pas bougé. Le
2026-09-18, une phrase rigoureusement identique est passée de `SUPPORTED` à `TOO_STRONG` parce
qu'un mappeur lui avait attaché un support de plus. Avec un plafond de deux boucles, la cible se
déplaçait plus vite qu'on ne la corrigeait.

**Aucun verdict n'est reporté.** `carry-over.json` ne contient que du découpage ; le vérificateur
repasse au §9 sur *tous* les claims contre le texte final, et le gate du §10 est inchangé. La
propriété « tout claim publié est jugé contre le texte publié » reste donc entière.

Le script refuse de reporter un paragraphe dès qu'un offset ne retombe pas exactement sur son
`claim_text`, ou si le mapping ne correspond pas au pack qu'il accompagne : ce paragraphe repart
au mapping.

Il ancre chaque claim par `locator + start + end + claim_text exact` et ne peut proposer que des
`support_ids` existants. Il ne rend aucun verdict de vérité.

L'orchestrateur ne reçoit que le nombre de claims et le chemin de l'artefact.

## 8. BUNDLE déterministe

Valide mécaniquement le mapping et résous les supports :

```bash
npm run corpus:factcheck -- --bundle --only=<id>
```

Le script refuse :

- claim text différent des offsets réels ;
- locator inconnu ;
- support ID inventé ;
- paragraphe oublié dans la déclaration de mapping.

Il écrit :

`corpus/deepening-audits/work/<id>/verification-bundle.json`

Si ce bundle dépasse 300k estimés, partitionne la vérification en sous-bundles de claims. La
validation finale doit néanmoins couvrir tous les claims du map original.

## 9. VERIFY indépendant

Lance un **nouvel agent frais** `corpus-deepening-entailment-verifier`.

Il lit uniquement le bundle de sa carte, jamais le texte libre ou un verdict du mapper. Il écrit :

`corpus/deepening-audits/work/<id>/verification.json`

Verdicts claim par claim :

`SUPPORTED | TOO_STRONG | UNSUPPORTED | CONFLICT | SOURCE_NOT_CONSULTED`

Il ne produit jamais lui-même `FACTCHECK_PASS`.

## 10. DETERMINISTIC GATE

Exécute :

```bash
npm run corpus:factcheck -- --gate --only=<id>
```

Le script relit le deepening actuel et invalide le contrôle si son SHA a changé depuis PREPARE.
Il vérifie aussi les claims, supports et résultats du verifier.

Verdicts du script :

- `FACTCHECK_PASS` : tous les claims sont mécaniquement valides et sémantiquement `SUPPORTED` ;
- `FACTCHECK_FAIL` : structure valide, au moins un claim non soutenu ;
- `FACTCHECK_INVALID` : incohérence mécanique, artefact obsolète ou incomplet.

### FAIL après réécriture

Retourne au réécrivain avec le **chemin** du rapport gate et des artefacts, pas leur contenu collé
dans le prompt. Correction minimale seulement : retirer, borner, réattribuer ou marquer comme
interprétation.

Puis recommence **depuis PREPARE**, car toute modification invalide le SHA.

Maximum deux boucles de correction factuelle. Au-delà, restaure uniquement le deepening de la
carte et marque `rewrite_rejected_factcheck`.

### FAIL sur texte inchangé

Le `PASS` pédagogique ne protège rien. Corrige uniquement si le corpus existant le permet ; sinon
`BLOCKED_SOURCE`.

## 11. REVIEW indépendant

Uniquement si une réécriture a été conservée et que le gate exact a rendu `FACTCHECK_PASS`.

Lance `corpus-deepening-reviewer` avec :

- `conceptId` ;
- chemins de `audit.md`, `factcheck-gate.json` et du compte rendu de réécriture.

Le reviewer ne peut rendre `ACCEPT` que si le `candidate_sha256` du gate correspond au fichier
qu'il examine.

`REJECT` restaure uniquement :

```bash
git restore --source=HEAD -- corpus/deepenings/<id>.json
```

## 12. TRACE finale

Écris `corpus/deepening-audits/<id>.md` avec :

```text
---
concept_id: <id>
deepening_sha256: <sha final>
validated_sha256: <sha validated>
protocol_version: 4
audited_at: <ISO-8601 UTC>
initial_verdict: PASS | REVISE | REWRITE | BLOCKED_SOURCE
result: unchanged | rewritten | rewrite_rejected | rewrite_rejected_factcheck | blocked_source
factcheck_verdict: FACTCHECK_PASS | FACTCHECK_FAIL | FACTCHECK_INVALID | NOT_RUN_BLOCKED_SOURCE
review_verdict: NOT_RUN | ACCEPT | REJECT
---
```

Le corps peut résumer les conclusions, mais les traces détaillées restent dans les artefacts de
travail. Ne gonfle pas le rapport final avec les sorties intégrales des agents.

## 13. Fermeture du lot

Après toutes les cartes :

1. toute carte publiable possède un `FACTCHECK_PASS` correspondant exactement à son SHA final ;
2. `npm run corpus:deepen -- --check` passe ;
3. `npm test` passe ;
4. aucun fichier rejeté ne reste modifié ;
5. chaque rapport final porte les hashes finaux ;
6. `npm run corpus:deepen` ne projette qu'après ces gates ;
7. inspecte le diff.

Compte rendu final compact :

```text
lot                 : n cartes
PASS pédagogique    : n
REVISE              : n
REWRITE             : n
BLOCKED_SOURCE       : n
FACTCHECK_PASS       : n
FACTCHECK_FAIL       : n
FACTCHECK_INVALID    : n
ACCEPT               : n
REJECT               : n
SKIPPED_DIRTY        : n
stale restants       : n
gates                : corpus:deepen <PASS/FAIL> · tests <PASS/FAIL>
```

Principe final : **le modèle propose, le dépôt fournit la preuve, un autre modèle juge
l'entailment, et le code décide si les conditions de publication sont réunies.**