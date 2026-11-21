---
description: Évaluer et, si nécessaire, améliorer un approfondissement précisément identifié. Contrôles temporaires, sans rapports conservés.
argument-hint: <conceptId> [autres conceptId] | --stale (ancien appel redirigé)
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

# Révision éditoriale ciblée d'un approfondissement

Ce workflow est un **outil de correction**, pas une routine nocturne.
La routine de création/enrichissement utilise `/corpus-nightly`.

Lis `corpus/deepenings/AUDIT_PROTOCOL.md`,
`corpus/deepenings/FACTCHECK_PROTOCOL.md` et
`corpus/deepenings/PROTOCOLE.md`.

## 0. Sélection obligatoire et absence d'archives

**Compatibilité avec l'ancienne routine nocturne :** si les arguments
contiennent `--stale`, ne lance aucun audit périodique. Lis
`.claude/commands/corpus-nightly.md` et exécute **à la place**
son cycle éditorial de découverte, production et vérification.
Il s'agit d'une redirection temporaire des anciennes tâches externes,
pas d'une sélection des textes supposés « stale ». N'utilise
aucun rapport pour choisir les travaux, même si `--batch=3`
accompagne cet appel. Cette branche se termine ici.

Pour l'audit manuel, n'accepte que les **IDs explicitement demandés**,
accompagnés d'un motif documentaire ou pédagogique réel (nouvelle
source exploitée, défaut identifié, erreur signalée, changement de la
fiche mère). Si aucun ID n'est fourni, demande le sujet à traiter.
Rejette `--all` et tout filtrage basé sur d'anciens rapports.
L'absence d'audit n'est jamais une anomalie à réparer.

Par défaut, au maximum 3 cartes par lot, 5 seulement sur demande
explicite. Un agent frais par concept. Aucun pack d'agent ne doit dépasser
300 000 tokens estimés : partitionne si nécessaire sans tronquer.

Les diagnostics et vérifications sont écrits **seulement pendant le cycle** dans
`corpus/deepening-audits/work/<id>/`. Ils sont ignorés par Git.
Aucun fichier sous `corpus/deepening-audits/` ne doit être commité, archivé
ou réintroduit comme rapport final.

## 1. Préparer une intervention sans risque

Pour chaque ID, vérifie que `corpus/validated/<id>.json` et
`corpus/deepenings/<id>.json` existent et que ni le texte, ni sa
fiche, ni ses sources ne présentent de modifications concurrentes.
Vérifie l'absence de cycle actif sur ce concept : ne supprime ni
n'écrase le travail d'un autre agent.

Relève avant toute écriture le blob SHA de la version initiale :
`git rev-parse HEAD:corpus/deepenings/<id>.json`.
Ce SHA permet au reviewer de lire **la vraie version antérieure**
même si HEAD évolue. N'effectue aucun commit intermédiaire.

## 2. Diagnostiquer avec de vraies preuves

Construis le pack de supports :
`npm run corpus:factcheck -- --prepare --only=<id>`.
Lance `corpus-deepening-auditor` avec ce pack et l'ID.
Le résultat temporaire `work/<id>/audit.md` indique :
`PASS | REVISE | REWRITE | BLOCKED_SOURCE`.

- `PASS` : ne modifie pas le texte ; il n'y a pas de livrable.
- `BLOCKED_SOURCE` : n'invente rien. Cherche une source primaire
  exploitable si le besoin est documenté ; sinon texte inchangé.
- `REVISE` ou `REWRITE` : transmis au réécrivain uniquement avec
  les supports identifiés. Une source qui nomme une notion ne
  prouve pas son mécanisme. Aucun ajout non sourcé.

L'audit sert à décider, **pas à rédiger un rapport pour Git**.

## 3. Réécrire seulement ce qui apporte un progrès

Lance `corpus-deepening-rewriter` avec le pack et le diagnostic,
pour cet ID seulement. Préserve les passages exacts et pédagogiquement
utiles ; supprime les répétitions ; réorganise et développe uniquement
si les sources réellement disponibles le permettent.
Une réécriture plus courte peut être meilleure.

Exécute `npm run corpus:deepen -- --check --only=<id>`.
Sur échec, corrige le texte avant de le soumettre à la suite.

## 4. Contrôle documentaire indépendant

Après toute modification du texte, reconstruis le pack pour le nouveau
SHA avec `--prepare --only=<id>`. Lance dans des contextes frais :

1. `corpus-deepening-claim-mapper`, qui produit
   `work/<id>/claim-map.json` à partir du pack exact.
2. `npm run corpus:factcheck -- --bundle --only=<id>`,
   qui résout les supports et les offsets.
3. `corpus-deepening-entailment-verifier`, qui examine le bundle
   indépendamment et écrit `work/<id>/verification.json`.
4. `npm run corpus:factcheck -- --gate --only=<id>`,
   qui calcule le verdict déterministe lié au SHA.

Exige `FACTCHECK_PASS`, pas un verdict suggéré par un agent.
En cas de `FACTCHECK_INVALID` causé par mapping incomplet,
refais le mapping une ou deux fois uniquement pour corriger
l'incomplétude prouvée, jamais pour chercher un verdict favorable.
En cas d'affirmation non soutenue, deux corrections factuelles
maximum, chacune suivie d'un nouveau pack, mapping, bundle et gate.

Après `FACTCHECK_PASS`, lance `corpus-deepening-reviewer`
en lui donnant le SHA de blob initial et les fichiers temporaires
nécessaires. Il compare précisément avant/après et rend
`ACCEPT` ou `REJECT` ; il doit voir un gate PASS sur le
SHA exact du candidat. L'auteur ne s'auto-approuve jamais.

En cas de `REJECT`, de gate FAIL ou de dépassement de budget,
restaure **seulement** `corpus/deepenings/<id>.json` depuis
le blob initial (avec `git cat-file -p <baseline_sha>`) et
vérifie son empreinte. Ne conserve aucune réécriture refusée.

## 5. Publier uniquement la version acceptée

Si une réécriture est acceptée, exécute
`npm run corpus:deepen`, `npm run corpus:deepen -- --check`,
`npm run corpus:validate`, `npm test` et les autres contrôles
proportionnés au diff. Inspecte les fichiers sources puis la
projection `src/content/generated/` pour vérifier qu'aucun texte
accepté n'a disparu. Ne modifie jamais la projection à la main.

**Après** le verdict final et les contrôles, détruis les fichiers
temporaires du concept traité. Supprime seulement
`corpus/deepening-audits/work/<id>/` de cette exécution,
jamais les dossiers d'un autre lot. Prévois aussi le nettoyage
en sortie d'erreur, une fois les verdicts utiles recueillis.

Avant tout commit : vérifie que `git ls-files -- corpus/deepening-audits/`
ne retourne rien ; inspecte les fichiers à ajouter. Les seuls
livrables éditoriaux autorisés sont le texte accepté, ses sources
véritablement exploitées et la projection exacte. Aucun
`audit.md`, claim map, bundle, gate, rapport final, historique,
journal ou fichier de validation ne doit apparaître dans le diff.

## 6. Réponse compacte

Pour chaque concept : `inchangé / amélioré / bloqué / rejeté`,
le défaut initial, l'amélioration **visible par le lecteur**
si acceptée, la nouvelle source exploitée éventuelle et les
vérifications exécutées. Aucun rapport d'audit à conserver.
Si aucun texte n'a progressé : aucun commit éditorial, aucune PR.
