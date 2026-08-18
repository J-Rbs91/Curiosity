---
description: Écrire les approfondissements des cartes validées qui n'en ont pas encore — le texte qu'affiche « Approfondir »
argument-hint: [conceptId…] | --all | --missing
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Écris les approfondissements pour : **$ARGUMENTS**

Un approfondissement est le texte de mille cinq cents mots que l'application affiche lorsqu'on
appuie sur « Approfondir » sur une carte. Il est **écrit une fois, contrôlé, et figé dans le
dépôt** : l'application ne parle à aucun modèle au moment du clic, et c'est ce qui permet que
ce texte ait été relu.

## Le périmètre

| Argument | Ce qui est traité |
|---|---|
| une liste d'identifiants | ces cartes, qu'elles aient déjà un texte ou non |
| `--missing`, ou rien | les cartes validées sans approfondissement |
| `--all` | toutes les cartes validées, les textes existants sont réécrits |

La liste des cartes sans approfondissement est donnée par `npm run corpus:deepen`, en fin de
sortie. Commence toujours par là : c'est la file de travail, et elle est tenue par le script
plutôt que de mémoire.

**Seules les cartes validées sont éligibles.** Une fiche d'échafaudage n'en reçoit jamais :
un texte long écrit sur une carte non vérifiée propagerait l'invérifié au lieu de le contenir,
et la projection le refuse.

## Comment tu t'y prends

Un agent `corpus-deepener` **par carte**, tous lancés en parallèle. Le travail est
indépendant carte par carte : rien n'y est sériel, et rien n'y gagne à être groupé, à
l'inverse de la rédaction des cartes elle-même.

Chaque agent reçoit un seul `conceptId` et rien d'autre. Il lit lui-même l'enregistrement
validé, la carte projetée et `corpus/deepenings/PROTOCOLE.md` : ne lui transmets ni résumé, ni
consigne de style, ni exemple d'un autre approfondissement. Un modèle à qui l'on montre un
texte déjà écrit en reproduit le plan, et l'on obtient trente fois la même charpente.

Par lots de huit au plus. Au delà, la sortie devient illisible et une correction se perd.

## Ce qui ferme le lot

1. `npm run corpus:deepen` passe, sans erreur de projection.
2. `npm test` passe.
3. Tu as lu toi-même un texte du lot, entier, et il ne redit pas la carte.

La projection contrôle ce qui est mécanique : volumes, balisage, tirets cadratins, titres qui
étiquettent leur fonction, `limits` rempli de précautions sans objet. Elle ne peut rien dire
des quatre exigences documentaires du protocole. Celles-là se lisent.

## Rends compte ainsi

```
lot        : n cartes
écrits     : n — <ids>
mots       : moyenne n, min n, max n
refusés    : n — <ids>, motif de la projection
restants   : n cartes validées sans approfondissement
```
