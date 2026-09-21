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

`SELECT -> AUDIT -> REWRITE éventuel -> PREPARE -> CLAIM MAP -> BUNDLE -> VERIFY -> DETERMINISTIC GATE -> REVIEW -> TRACE`

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

`protocol_version: 3`

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

**Et relève dès maintenant le SHA de blob de la version que l'audit va examiner**, une fois pour
chaque carte du lot, avant toute écriture et avant tout commit d'étape :

```bash
git rev-parse HEAD:corpus/deepenings/<id>.json
```

C'est ce SHA que le reviewer recevra à l'étape 10. Il ne se recalcule pas plus tard : dès que le
cycle commite au fil de l'eau, `HEAD` porte un état intermédiaire du lot et non la version
auditée.

Si le deepening, le validated ou les preuves de la carte étaient déjà modifiés, marque
`SKIPPED_DIRTY` et ne touche pas à cette carte.

Interdictions : `git reset --hard`, `git clean`, restauration globale.

## 3. AUDIT pédagogique

Lance `corpus-deepening-auditor` avec uniquement le `conceptId`.

L'agent écrit sa sortie complète dans :

`corpus/deepening-audits/work/<id>/audit.md`

et rend seulement une synthèse courte à l'orchestrateur.

Verdicts : `PASS`, `REVISE`, `REWRITE`, `BLOCKED_SOURCE`.

- `PASS` : texte inchangé, mais FACTCHECK obligatoire.
- `BLOCKED_SOURCE` : aucune invention pour combler le manque. Trace et passe à la carte suivante.
- `REVISE` / `REWRITE` : étape 4.

## 4. REWRITE éventuel

Lance `corpus-deepening-rewriter` avec :

- le `conceptId` ;
- le chemin `corpus/deepening-audits/work/<id>/audit.md`.

Ne recopie pas l'audit dans le prompt.

Après écriture :

```bash
npm run corpus:deepen -- --check --only=<id>
```

Le contrôle doit passer avant fact-check.

## 5. PREPARE déterministe

Construis le pack :

```bash
npm run corpus:factcheck -- --prepare --only=<id>
```

Le script écrit :

`corpus/deepening-audits/work/<id>/factcheck-pack.json`

Il fixe notamment :

- SHA exact du deepening candidat ;
- paragraphes lecteur et locators ;
- registre des supports `SUP-...` dérivés du contenu réellement présent ;
- niveaux d'accès hérités des objets réellement marqués `consulted` ;
- estimation de taille.

Si `status = PARTITION_REQUIRED`, ne charge pas ce pack tel quel dans un agent. Partitionne par
sections et groupes de supports de manière à ce que chaque invocation reste <= 300k estimés. Ne
supprime aucune matière pour respecter le plafond.

## 6. CLAIM MAP

Lance un **nouvel agent frais** `corpus-deepening-claim-mapper` sur une seule carte.

Il lit le pack et écrit :

`corpus/deepening-audits/work/<id>/claim-map.json`

Il ancre chaque claim par `locator + start + end + claim_text exact` et ne peut proposer que des
`support_ids` existants. Il ne rend aucun verdict de vérité.

L'orchestrateur ne reçoit que le nombre de claims et le chemin de l'artefact.

## 7. BUNDLE déterministe

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

## 8. VERIFY indépendant

Lance un **nouvel agent frais** `corpus-deepening-entailment-verifier`.

Il lit uniquement le bundle de sa carte, jamais le texte libre ou un verdict du mapper. Il écrit :

`corpus/deepening-audits/work/<id>/verification.json`

Verdicts claim par claim :

`SUPPORTED | TOO_STRONG | UNSUPPORTED | CONFLICT | SOURCE_NOT_CONSULTED`

Il ne produit jamais lui-même `FACTCHECK_PASS`.

## 9. DETERMINISTIC GATE

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
carte, **par le SHA de blob relevé à l'étape 2** (voir « Restaurer une carte » ci-dessous), et
marque `rewrite_rejected_factcheck`.

### FAIL sur texte inchangé

Le `PASS` pédagogique ne protège rien. Corrige uniquement si le corpus existant le permet ; sinon
`BLOCKED_SOURCE`.

## 10. REVIEW indépendant

Uniquement si une réécriture a été conservée et que le gate exact a rendu `FACTCHECK_PASS`.

Lance `corpus-deepening-reviewer` avec :

- `conceptId` ;
- chemins de `audit.md`, `factcheck-gate.json` et du compte rendu de réécriture ;
- le **SHA de blob relevé à l'étape 2**, qui désigne la version antérieure.

Le reviewer rend `REJECT` s'il ne reçoit pas ce SHA : sans lui, il ne peut pas établir ce que la
réécriture a changé.

Le reviewer ne peut rendre `ACCEPT` que si le `candidate_sha256` du gate correspond au fichier
qu'il examine.

### Restaurer une carte

`REJECT`, comme le dépassement du plafond de boucles, restaure **uniquement** le deepening de la
carte, et il le restaure **par son SHA de blob**, celui relevé à l'étape 2 :

```bash
git cat-file -p <baseline_blob_sha> > corpus/deepenings/<id>.json
```

**N'utilise pas `git restore --source=HEAD`.** Dès que le cycle a commité un état d'étape — ce
que fait tout lot qui pousse au fil de l'eau — `HEAD` porte déjà la réécriture, et la commande
devient un no-op silencieux : elle rend `REJECT` sans rien restaurer, et la carte refusée reste
publiée. C'est le même défaut que celui corrigé côté reviewer le 21 septembre 2026, au même
endroit : une version désignée par sa position dans l'historique plutôt que par son contenu.

Vérifie la restauration plutôt que de la supposer :

```bash
sha256sum corpus/deepenings/<id>.json   # doit redonner le SHA d'avant le cycle
```

## 11. TRACE finale

Écris `corpus/deepening-audits/<id>.md` avec :

```text
---
concept_id: <id>
deepening_sha256: <sha final>
validated_sha256: <sha validated>
protocol_version: 3
audited_at: <ISO-8601 UTC>
initial_verdict: PASS | REVISE | REWRITE | BLOCKED_SOURCE
result: unchanged | rewritten | rewrite_rejected | rewrite_rejected_factcheck | blocked_source
factcheck_verdict: FACTCHECK_PASS | FACTCHECK_FAIL | FACTCHECK_INVALID | NOT_RUN_BLOCKED_SOURCE
review_verdict: NOT_RUN | ACCEPT | REJECT
---
```

Le corps peut résumer les conclusions, mais les traces détaillées restent dans les artefacts de
travail. Ne gonfle pas le rapport final avec les sorties intégrales des agents.

## 12. Fermeture du lot

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