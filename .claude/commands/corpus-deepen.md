---
description: Écrire les approfondissements manquants des cartes validées. Les textes existants passent par le workflow d’audit avant toute réécriture.
argument-hint: [conceptId…] | --missing
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Écris les approfondissements pour : **$ARGUMENTS**

Un approfondissement est le texte de mille cinq cents mots que l'application affiche lorsqu'on
appuie sur « Approfondir » sur une carte. Il est écrit à l’avance, contrôlé et figé dans le
dépôt : l'application ne parle à aucun modèle au moment du clic.

## Le périmètre

| Argument | Ce qui est traité |
|---|---|
| une liste d'identifiants | uniquement les cartes de cette liste qui n'ont pas encore d'approfondissement |
| `--missing`, ou rien | toutes les cartes validées sans approfondissement |

**Un approfondissement existant n'est jamais réécrit par cette commande.**

S'il faut évaluer ou améliorer un texte déjà présent, utilise le workflow
`/corpus-deepening-audit <conceptId>` ou `/corpus-deepening-audit --stale`. Il impose un
diagnostic, une réécriture uniquement si elle est nécessaire, puis une revue indépendante.
Cette séparation empêche qu'un texte déjà bon soit remplacé simplement parce qu'un modèle
peut produire une autre version.

La liste des cartes sans approfondissement est donnée par `npm run corpus:deepen`, en fin de
sortie. Commence toujours par là : c'est la file de travail, et elle est tenue par le script
plutôt que de mémoire.

**Seules les cartes validées sont éligibles.** Une fiche d'échafaudage n'en reçoit jamais :
un texte long écrit sur une carte non vérifiée propagerait l'invérifié au lieu de le contenir,
et la projection le refuse.

## Comment tu t'y prends

Un agent `corpus-deepener` **par carte**, tous lancés en parallèle. Le travail est indépendant
carte par carte.

Chaque agent reçoit un seul `conceptId` et rien d'autre. Il lit lui-même :

- `corpus/validated/<conceptId>.json` ;
- la carte projetée ;
- `corpus/deepenings/PROTOCOLE.md` ;
- `corpus/deepenings/AUDIT_PROTOCOL.md`.

Ne lui transmets ni exemple d'un autre approfondissement ni plan copié d'une autre carte. Un
modèle à qui l'on montre un texte déjà écrit en reproduit facilement la charpente.

Par lots de huit au plus. Au-delà, la sortie devient illisible et une correction se perd.

## Contrôle pédagogique des nouveaux textes

Le `corpus-deepener` doit appliquer le test du **delta d'apprentissage** à chaque paragraphe :

> Qu'est-ce que le lecteur sait, comprend ou peut distinguer après ce paragraphe qu'il ne
> savait, ne comprenait ou ne pouvait distinguer avant ?

Une reformulation n'est pas un approfondissement. Deux paragraphes qui accomplissent le même
travail doivent être fusionnés, supprimés ou différenciés par un apport réel.

## Ce qui ferme le lot

1. `npm run corpus:deepen` passe sans erreur de projection.
2. `npm test` passe.
3. Tu as lu toi-même un texte du lot en entier.
4. Pour ce texte, tu peux résumer le delta de chaque section sans donner deux fois la même réponse.

La projection contrôle ce qui est mécanique : volumes, balisage, tirets cadratins, titres qui
étiquettent leur fonction, `limits` rempli de précautions sans objet. Elle ne peut pas mesurer
la progression pédagogique. Celle-ci est donc explicitement contrôlée par le protocole et par
le test du delta.

## Rends compte ainsi

```text
lot        : n cartes
écrits     : n, <ids>
mots       : moyenne n, min n, max n
refusés    : n, <ids>, motif de la projection
ignorés    : n textes déjà existants, à envoyer vers corpus-deepening-audit si nécessaire
restants   : n cartes validées sans approfondissement
```
