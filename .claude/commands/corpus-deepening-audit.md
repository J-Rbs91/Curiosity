---
description: Auditer périodiquement les approfondissements, réécrire ceux qui stagnent pédagogiquement, faire relire la réécriture et tracer la décision
argument-hint: [conceptId…] | --all | --stale | --batch=N
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Audite les approfondissements pour : **$ARGUMENTS**

Ce workflow est récurrent. Il ne doit pas retraiter aveuglément tout le corpus à chaque passage.
Il sélectionne les textes jamais audités ou devenus obsolètes, puis sépare strictement audit,
réécriture et revue.

Lis d’abord `corpus/deepenings/AUDIT_PROTOCOL.md` en entier.

## 1. Sélection

Le répertoire des rapports est `corpus/deepening-audits/`. Crée-le s’il n’existe pas.

Pour chaque `corpus/deepenings/<id>.json`, calcule :

```bash
sha256sum corpus/deepenings/<id>.json
sha256sum corpus/validated/<id>.json
```

Un rapport à jour doit contenir exactement ces deux hashes et `protocol_version: 1`.

Une carte est **stale** si :

- aucun rapport `corpus/deepening-audits/<id>.md` n’existe ;
- `deepening_sha256` diffère ;
- `validated_sha256` diffère ;
- `protocol_version` diffère ;
- elle est demandée explicitement.

Arguments :

| Argument | Sélection |
|---|---|
| liste d’identifiants | ces cartes, même si leur audit est à jour |
| `--stale` ou aucun argument | cartes jamais auditées ou devenues stale |
| `--all` | tous les approfondissements |
| `--batch=N` | limite le lot aux N premières cartes éligibles, triées par identifiant |

Sans `--batch`, traite au plus **6 cartes par lot**. Un audit approfondi vaut mieux qu’un lot
massif relu superficiellement.

## 2. Garde-fou du working tree

Avant de lancer un agent sur une carte, vérifie :

```bash
git status --short -- corpus/deepenings/<id>.json corpus/validated/<id>.json
```

Si l’approfondissement ou l’enregistrement validé avait déjà des modifications locales avant le
workflow, **ne touche pas à cette carte**. Marque-la `SKIPPED_DIRTY` et continue le lot.

Ne fais jamais `git reset --hard`, `git clean`, ni restauration globale.

Pour une carte propre, l’ancienne version de l’approfondissement est donc toujours disponible
avec :

```bash
git show HEAD:corpus/deepenings/<id>.json
```

## 3. AUDIT

Lance un agent `corpus-deepening-auditor` par carte éligible, avec uniquement son `conceptId`.

Les audits sont indépendants et peuvent être lancés en parallèle, au maximum six à la fois.

Conserve **la sortie complète** de chaque auditeur. Ne la résume pas avant la décision de
réécriture : les repères paragraphe par paragraphe sont l’entrée du réécrivain.

### Si verdict `PASS`

Aucune modification du texte.

Écris ou mets à jour le rapport final (§6) avec `result: unchanged`.

### Si verdict `BLOCKED_SOURCE`

Aucune réécriture. Une lacune documentaire ne se corrige pas avec les connaissances du modèle.

Écris le rapport avec `result: blocked_source` et les informations précises qui manquent.

### Si verdict `REVISE` ou `REWRITE`

Passe à l’étape suivante.

## 4. DIAGNOSE -> REWRITE

Lance un agent `corpus-deepening-rewriter` pour la carte concernée.

Transmets-lui :

- le `conceptId` ;
- **la sortie complète de l’auditeur**, sans la reformuler.

Un réécrivain par carte. Les cartes restent indépendantes.

À son retour, exige que :

```bash
npm run corpus:deepen -- --check --only=<id>
```

passe. Si le contrôle mécanique échoue encore, le réécrivain corrige. Ne passe pas au reviewer
avec un fichier mécaniquement invalide.

## 5. REVIEW indépendant

Lance ensuite un nouvel agent `corpus-deepening-reviewer`.

Transmets-lui :

- le `conceptId` ;
- la sortie complète de l’auditeur ;
- la sortie complète du réécrivain.

Le reviewer compare la proposition au contenu de `HEAD` et rend `ACCEPT` ou `REJECT`.

### `ACCEPT`

Conserve la nouvelle version.

### `REJECT`

Restaure **uniquement** l’approfondissement concerné :

```bash
git restore --source=HEAD -- corpus/deepenings/<id>.json
```

N’altère aucun autre fichier. Écris le rapport avec `result: rewrite_rejected` et conserve le
verdict du reviewer comme trace de la tentative.

## 6. TRACE

Après la décision finale, recalcule les hashes du fichier réellement conservé et de
l’enregistrement validé.

Écris `corpus/deepening-audits/<id>.md` sous cette forme :

```text
---
concept_id: <id>
deepening_sha256: <sha256 du fichier final>
validated_sha256: <sha256 de corpus/validated/<id>.json>
protocol_version: 1
audited_at: <date ISO-8601 UTC>
initial_verdict: PASS | REVISE | REWRITE | BLOCKED_SOURCE
result: unchanged | rewritten | rewrite_rejected | blocked_source
review_verdict: NOT_RUN | ACCEPT | REJECT
---

# Audit pédagogique : <id>

## Scores initiaux

| Axe | Score /4 | Preuve |
|---|---:|---|
| Fidélité documentaire | n | ... |
| Progressivité pédagogique | n | ... |
| Densité / non-redondance | n | ... |
| Clarté | n | ... |
| Profondeur explicative | n | ... |
| Valeur des exemples | n | ... |
| Limites / nuances | n | ... |
| Pouvoir d’ouverture | n | ... |

## Diagnostic

<défauts majeurs avec repères>

## Trajectoire actuelle

<delta paragraphe par paragraphe de l’audit>

## Trajectoire cible

<cible de l’audit, ou aucune réécriture nécessaire>

## Réécriture

<non exécutée, ou compte rendu complet du réécrivain>

## Revue indépendante

<NOT_RUN, ou compte rendu complet du reviewer>
```

Le rapport décrit ce qui s’est réellement passé. N’invente pas un score final si le reviewer
n’en a pas donné.

Git porte l’historique des versions successives de ce rapport. Ne crée pas un second système
d’historique.

## 7. Fermeture du lot

Après toutes les cartes :

1. `npm run corpus:deepen -- --check` passe sur l’ensemble ;
2. `npm test` passe ;
3. aucun fichier `corpus/deepenings/<id>.json` rejeté par un reviewer ne reste modifié ;
4. chaque carte traitée possède un rapport dont les hashes correspondent aux fichiers finaux ;
5. ne projette vers `src/content/generated/deepenings.generated.ts` qu’après ces contrôles, avec
   `npm run corpus:deepen` ;
6. vérifie le diff avant de rendre.

Si un test global échoue pour une cause préexistante et manifestement indépendante, ne masque
pas l’échec. Rends-le explicitement avec la preuve et n’attribue pas `PASS` au lot global.

## Compte rendu final

```text
lot              : n cartes
PASS             : n — <ids>
REVISE            : n — <ids>
REWRITE           : n — <ids>
BLOCKED_SOURCE    : n — <ids>
réécritures ACCEPT: n — <ids>
réécritures REJECT: n — <ids>
SKIPPED_DIRTY     : n — <ids>
rapports à jour   : n
stale restants    : n
gates             : corpus:deepen <PASS/FAIL> · tests <PASS/FAIL>
```

Principe final : **aucune carte n’est modifiée simplement parce qu’un modèle pense pouvoir
mieux écrire.** Une modification exige un diagnostic précis, puis une revue indépendante qui
prouve que la nouvelle version apprend davantage au lecteur sans fragiliser les sources.