---
description: Instruire un ou plusieurs concepts par le pipeline documentaire, jusqu'à la carte affichable
argument-hint: <auteur, thème ou concept> [nombre de candidats]
allowed-tools: Task, Read, Write, Edit, Glob, Grep, Bash
---

Lance le pipeline documentaire du corpus sur : **$ARGUMENTS**

Délègue à l'agent `corpus-orchestrator`. Tu ne produis toi-même aucune connaissance : tu
transmets la demande, tu rends compte de ce qui revient.

## Ce qui doit sortir

Une fiche n'est terminée que si elle permet de composer la carte de l'application. Sept
éléments, tous issus du même enregistrement validé :

| Carte | Champ de la fiche | Exigé |
|---|---|---|
| THÈME | `graph.themes` | oui — au moins un thème existant |
| CONCEPT | `canonical_name_fr` | oui |
| CITATION | `evidence.key_quotation` | **non** — voir plus bas |
| AUTEUR | `attribution` → `attributionNote` | oui — coauteurs rétablis |
| ACCROCHE | `pedagogy.hook_question` | oui |
| RÉSUMÉ | `pedagogy.short_explanation` | oui |
| SOURCES | `primary_sources` + `secondary_sources` | oui — une primaire et une secondaire au minimum |

**La citation reste facultative, et cela ne se négocie pas.** Beaucoup de concepts sont
distribués sur un chapitre entier sans phrase courte qui les énonce. Une carte sans
citation est complète ; une carte avec une citation recomposée, sortie de son contexte ou
tirée d'un texte qui cite l'auteur au lieu de l'auteur lui-même est une faute. Si aucun
passage citable n'a été établi, `key_quotation` reste à `null` et on le dit.

## Le protocole

Le corpus n'est pas le livrable : **les cartes le sont.** Le travail documentaire n'existe
que pour qu'elles soient justes, et un dossier de preuve qui ne devient pas une carte n'a
servi à rien. Le protocole est donc organisé pour aboutir, pas pour archiver.

**Cartographier — une fois, puis à rafraîchir :**

0. `corpus-cartographer` — si `corpus/map/cartography.json` est absent ou périmé. Il part
   de la **discipline**, jamais d'une liste de noms : manuels, handbooks, encyclopédies,
   revues de référence. Sa carte alimente la file, et son bloc `angles_morts` dit ce que
   la liste de départ ne couvre pas. Sans lui, on n'instruit que ce qu'on connaissait déjà.

**Instruire — un agent par concept, tous les concepts en parallèle :**

1. `corpus-scout` — périmètre et sources atteignables. `search_literature` et
   `search_francophone` dans le **même message** : la couche francophone se cherche en
   amont.
2. `corpus-primary-reader` et `corpus-reception-analyst` en parallèle, qui déposent leurs
   dossiers dans `corpus/evidence/<id>/`.

**Rédiger — un seul agent, tout le lot d'un coup :**

3. `corpus-card-writer` — prend tous les dossiers du lot et écrit **N cartes**. Il n'écrit
   que la carte : ni mécanisme détaillé, ni exemple, ni quiz, ni relations entre concepts.
   Ce contenu servait une session d'apprentissage qui n'existe plus — le lecteur qui veut
   approfondir emporte la carte vers l'IA de son choix.

**Contrôler et publier :**

4. `corpus-blind-reviewer` sur chaque carte, à partir du dossier produit par
   `npm run corpus:brief -- <id> --pass=B`. Il ne reçoit ni le brief, ni la confiance
   amont : ce dossier est vidé mécaniquement, ne lui transmets rien d'autre. Il vérifie
   en une passe la preuve **et** la fidélité de la prose.
5. `npm run corpus:validate`, puis `/corpus-publish`.

Deux tours de correction maximum par carte ; au-delà, la carte sort du lot et attend un
complément documentaire plutôt que de retenir les autres.

Huit agents en tout, et c'est délibérément peu : produire une carte de 500 caractères a
coûté, sur le premier lot, 178 octets de matière documentaire par caractère affiché.
L'essentiel de cette matière alimentait une session qui n'existe plus.

## Le rythme

Pas de quota, pas d'équilibrage entre auteurs, pas d'objectif de volume. **Pas de preuve
documentaire suffisante, pas de fiche** — un lot qui ne rend rien est un résultat
documenté, pas un échec. Sans argument après `/corpus`, prends les concepts en tête de
`corpus/map/queue.json`. Si la carte n'existe pas encore, commence par le cartographe :
instruire les concepts d'une liste d'auteurs fournie, c'est reproduire la connaissance de
celui qui l'a écrite.

## Rends compte ainsi

```
lot        : <sujet>
candidats  : n
validés    : n — <ids>, dont n avec citation
en review  : n — <ids>, motif, tour
rejetés    : n — <ids>, rejection_reason
```

Puis rappelle que `/corpus-publish` projette les fiches validées vers l'application.
