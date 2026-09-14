---
description: Auditer périodiquement les approfondissements, réécrire ceux qui stagnent pédagogiquement, fact-checker le texte final, faire relire les réécritures et tracer la décision
argument-hint: [conceptId…] | --all | --stale | --batch=N
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Audite les approfondissements pour : **$ARGUMENTS**

Ce workflow est récurrent. Il ne doit pas retraiter aveuglément tout le corpus à chaque passage.
Il sélectionne les textes jamais audités ou devenus obsolètes, puis sépare strictement audit pédagogique,
réécriture, contrôle de véracité et revue.

Lis d’abord `corpus/deepenings/AUDIT_PROTOCOL.md` en entier.

## Invariant de publication

`corpus/deepenings/<id>.json` contient un champ `limits` utile au travail éditorial. Ce champ est une
**frontière documentaire interne**. Il sert aux agents pour savoir ce qu’ils n’ont pas le droit
d’affirmer. Son contenu ne doit jamais être présenté comme une section destinée au lecteur.

Le texte lecteur à contrôler est uniquement `lead` + `sections`.

## 1. Sélection

Le répertoire des rapports est `corpus/deepening-audits/`. Crée-le s’il n’existe pas.

Pour chaque `corpus/deepenings/<id>.json`, calcule :

```bash
sha256sum corpus/deepenings/<id>.json
sha256sum corpus/validated/<id>.json
```

Un rapport à jour doit contenir exactement ces deux hashes et `protocol_version: 2`.

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

Sans `--batch`, traite au plus **6 cartes par lot**.

## 2. Garde-fou du working tree

Avant de lancer un agent sur une carte, vérifie :

```bash
git status --short -- corpus/deepenings/<id>.json corpus/validated/<id>.json
```

Si l’approfondissement ou l’enregistrement validé avait déjà des modifications locales avant le
workflow, **ne touche pas à cette carte**. Marque-la `SKIPPED_DIRTY` et continue le lot.

Ne fais jamais `git reset --hard`, `git clean`, ni restauration globale.

Pour une carte propre, l’ancienne version de l’approfondissement est disponible avec :

```bash
git show HEAD:corpus/deepenings/<id>.json
```

## 3. AUDIT pédagogique

Lance un agent `corpus-deepening-auditor` par carte éligible, avec uniquement son `conceptId`.

Conserve **la sortie complète** de chaque auditeur.

### Si verdict `PASS`

Ne modifie pas le texte. Passe directement au FACTCHECK (§5). Un texte pédagogiquement bon n’est
pas dispensé de contrôle factuel.

### Si verdict `BLOCKED_SOURCE`

Aucune réécriture. Une lacune documentaire ne se corrige pas avec les connaissances du modèle.
Écris le rapport avec `result: blocked_source`. Le FACTCHECK peut être omis si le texte ne peut
honnêtement être publié en l’état ; indique alors `factcheck_verdict: NOT_RUN_BLOCKED_SOURCE`.

### Si verdict `REVISE` ou `REWRITE`

Passe à l’étape suivante.

## 4. DIAGNOSE -> REWRITE

Lance un agent `corpus-deepening-rewriter` pour la carte concernée.

Transmets-lui :

- le `conceptId` ;
- **la sortie complète de l’auditeur**, sans la reformuler.

Le champ `limits` reste interne. Le réécrivain peut l’améliorer pour resserrer la frontière
documentaire, mais ne doit jamais déplacer son contenu dans une section destinée au lecteur
simplement pour « être transparent ».

À son retour, exige que :

```bash
npm run corpus:deepen -- --check --only=<id>
```

passe. Si le contrôle mécanique échoue, le réécrivain corrige avant toute suite.

## 5. FACTCHECK obligatoire

Lance `corpus-deepening-factchecker` sur **la version finale candidate**, qu’elle soit inchangée
après `PASS` ou réécrite après `REVISE` / `REWRITE`.

Le fact-checker contrôle proposition par proposition le texte lecteur (`lead` + `sections`) en
utilisant uniquement la matière autorisée du dossier. Il ne réécrit rien et ne cherche rien sur
le web.

Verdicts :

- `FACTCHECK_PASS` : tous les claims lecteur sont soutenus ;
- `FACTCHECK_FAIL` : au moins un claim est trop fort, non soutenu, contradictoire ou appuyé sur
  une source non consultée au niveau nécessaire.

### Si `FACTCHECK_FAIL` sur un texte réécrit

Retourne au réécrivain avec **la sortie complète du fact-checker**. Le réécrivain doit effectuer
la correction minimale autorisée : retirer, borner, réattribuer ou marquer clairement comme
interprétation. Il n’a jamais le droit d’inventer une source ni d’utiliser ses connaissances
générales.

Relance ensuite `npm run corpus:deepen -- --check --only=<id>` puis le FACTCHECK. Maximum deux
boucles de correction factuelle. Si l’échec persiste, restaure uniquement le fichier concerné
et marque `rewrite_rejected_factcheck`.

### Si `FACTCHECK_FAIL` sur un texte inchangé après `PASS`

Le verdict pédagogique `PASS` ne protège pas le texte. Requalifie la carte en besoin de correction
documentaire. Corrige uniquement si la matière existante permet de borner ou réattribuer le claim ;
sinon `BLOCKED_SOURCE`.

**Aucun reviewer ne peut accepter un texte dont le dernier FACTCHECK n’est pas `FACTCHECK_PASS`.**

## 6. REVIEW indépendant des réécritures

Si aucune réécriture n’a eu lieu, le FACTCHECK clôt la validation du contenu et aucun reviewer
comparatif n’est nécessaire.

Si une réécriture a eu lieu et que le dernier FACTCHECK est `FACTCHECK_PASS`, lance
`corpus-deepening-reviewer`.

Transmets-lui :

- le `conceptId` ;
- la sortie complète de l’auditeur ;
- la sortie complète du réécrivain ;
- la sortie complète du fact-checker avec `FACTCHECK_PASS`.

Le reviewer compare la proposition au contenu de `HEAD` et rend `ACCEPT` ou `REJECT`.

### `ACCEPT`

Conserve la nouvelle version.

### `REJECT`

Restaure **uniquement** l’approfondissement concerné :

```bash
git restore --source=HEAD -- corpus/deepenings/<id>.json
```

N’altère aucun autre fichier.

## 7. TRACE

Après la décision finale, recalcule les hashes du fichier réellement conservé et de
l’enregistrement validé.

Écris `corpus/deepening-audits/<id>.md` avec au minimum :

```text
---
concept_id: <id>
deepening_sha256: <sha256 du fichier final>
validated_sha256: <sha256 de corpus/validated/<id>.json>
protocol_version: 2
audited_at: <date ISO-8601 UTC>
initial_verdict: PASS | REVISE | REWRITE | BLOCKED_SOURCE
result: unchanged | rewritten | rewrite_rejected | rewrite_rejected_factcheck | blocked_source
factcheck_verdict: FACTCHECK_PASS | FACTCHECK_FAIL | NOT_RUN_BLOCKED_SOURCE
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
<delta paragraphe par paragraphe>

## Trajectoire cible
<cible de l’audit>

## Réécriture
<non exécutée, ou compte rendu>

## Fact-check proposition par proposition
<sortie complète du fact-checker>

## Revue indépendante
<NOT_RUN, ou compte rendu complet du reviewer>
```

Git porte l’historique. Ne crée pas un second système d’historique.

## 8. Fermeture du lot

Après toutes les cartes :

1. chaque carte publiable a `factcheck_verdict: FACTCHECK_PASS` ;
2. `npm run corpus:deepen -- --check` passe sur l’ensemble ;
3. `npm test` passe ;
4. aucun fichier rejeté ne reste modifié ;
5. chaque rapport possède des hashes correspondant aux fichiers finaux ;
6. ne projette qu’après ces contrôles, avec `npm run corpus:deepen` ;
7. vérifie le diff avant de rendre.

Si un test global échoue pour une cause préexistante et indépendante, rends l’échec explicitement.

## Compte rendu final

```text
lot                 : n cartes
PASS pédagogique    : n — <ids>
REVISE              : n — <ids>
REWRITE             : n — <ids>
BLOCKED_SOURCE       : n — <ids>
FACTCHECK_PASS       : n — <ids>
FACTCHECK_FAIL       : n — <ids>
réécritures ACCEPT   : n — <ids>
réécritures REJECT   : n — <ids>
SKIPPED_DIRTY        : n — <ids>
rapports à jour      : n
stale restants       : n
gates                : corpus:deepen <PASS/FAIL> · tests <PASS/FAIL>
```

Principe final : **une carte ne devient pas sûre parce qu’elle est bien écrite.** La pédagogie
et la véracité sont deux gates séparés. Une réécriture exige un diagnostic précis, un
FACTCHECK proposition par proposition, puis une revue indépendante de l’amélioration.