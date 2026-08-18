# Protocole de rédaction d'un approfondissement

Un approfondissement est le texte que l'application affiche lorsqu'on appuie sur
« Approfondir ». Il est **écrit à l'avance, une fois, et figé dans le dépôt** : l'application
ne parle à aucun modèle: elle sert un texte qui a été relu.

Ce document est le seul cadrage de cette rédaction. Il tient lieu, pour un texte publié, de ce
que `src/domain/concepts/ai-prompt.ts` fait pour une conversation.

---

## 1. Pourquoi ce texte existe, et ce qu'il n'est pas

La carte donne un point de départ exact — le bon auteur, une citation verbatim localisée, cinq
sources atteignables — et s'arrête là. Elle plafonne à 100 caractères d'accroche et 200 de
résumé : c'est un seuil, pas une explication. L'approfondissement est ce qui manquait entre ce
seuil et le fait d'avoir réellement compris quelque chose.

Ce n'est pas :

- une notice encyclopédique — le concept n'est pas décrit de l'extérieur, il est expliqué ;
- un résumé de la carte — la carte est déjà à l'écran juste avant, la répéter perd le lecteur ;
- une conversation — personne ne répondra, donc aucune question n'est posée au lecteur, aucune
  offre de suite n'est faite, et le mot « vous » n'apparaît pas ;
- une bibliographie commentée — les sources sont affichées ailleurs, sous leur forme complète.

C'est **un texte suivi qui explique un mécanisme**, et qui a le droit d'être exigeant.

---

## 1 bis. Ce qui sert de matière, et rien d'autre

Deux fichiers, et aucune autre entrée :

1. **La carte projetée**, telle que le lecteur la voit et telle que « Approfondir » l'envoie
   à une IA : domaine, famille, thème, concept, auteurs, attribution établie, citation
   localisée, accroche, résumé, les cinq sources avec leur niveau et leur identifiant.
2. **L'enregistrement validé** `corpus/validated/<id>.json`, qui porte en plus les `notes` de
   rédaction et le bloc `review` du contrôleur aveugle. Ces notes contiennent souvent le
   passage verbatim sur lequel une correction a été faite, l'aveu d'un texte qui n'a pas pu
   être ouvert, ou le désaccord de portée qui a coûté trois tours de contrôle. C'est la
   matière la plus fiable du dossier et la seule qui dise **où sont les fragilités**.

Le champ `consulted` de chaque source décide de ce qu'on a le droit d'en dire :
`full-text` signifie que le texte a été ouvert, `metadata-only` signifie que **seule la notice
l'a été**. Une source en `metadata-only` établit qu'elle existe et qu'elle est pertinente ;
elle n'autorise aucune phrase sur son contenu. C'est la distinction la plus importante du
protocole, et celle qu'on oublie le plus vite.

---

## 2. Les quatre exigences qui ne se négocient pas

Elles viennent du prompt de conversation et valent identiquement ici. Un texte qui en manque
une est à refaire, quelle que soit sa qualité littéraire.

### 2.1 La méthode ne se décrit jamais

Le texte monte du premier abord jusqu'à un niveau académique substantiel. Il ne l'annonce pas.

Sont interdits, dans le corps comme dans les titres : « pour commencer simplement », « plus
techniquement », « pour aller plus loin », « en résumé », « nous allons voir », « ce concept
est important parce que », « d'abord… ensuite… enfin ». Un palier étiqueté découpe en tranches
ce qui doit se lire d'un trait, et oblige le lecteur à se situer avant d'avoir compris.

Un titre de section nomme **la chose dont la section parle**, jamais la fonction qu'elle occupe
dans le texte. « Ce que « satisfaisant » veut dire ici » est un titre. « Approfondissement du
mécanisme » n'en est pas un.

### 2.2 Une lacune se déclare, elle ne se comble pas

Ne jamais écrire une citation, un numéro de page, un DOI, une date, une statistique, un titre
d'ouvrage ou un passage attribué à un auteur qui ne figure pas dans le dossier fourni.

Une référence présente dans les sources de la carte établit **que cette référence existe et
qu'elle est pertinente**. Elle n'autorise pas à en reconstruire le contenu de mémoire. Si le
texte n'est pas ouvert, on n'écrit pas « dans cet ouvrage, l'auteur distingue précisément… ».

Le champ `limits` existe pour ça, et il est obligatoire : c'est là que se déclare ce que le
corpus de la carte ne permet pas d'établir.

### 2.3 Le corpus fait autorité sur la mémoire du modèle

Le dossier a été vérifié sur les textes ; une mémoire de modèle non. Quand les deux divergent,
c'est le dossier qui tient, y compris s'il paraît incomplet ou contre-intuitif.

Une incohérence interne à la carte se signale dans `limits`, elle ne se corrige pas en silence.

### 2.4 La frontière épistémique se voit dans la formulation

C'est la faille que le reste ne ferme pas : un texte juste peut mêler silencieusement ce que la
carte établit, ce dont on se souvient, une interprétation académique et une reformulation — et
tout arrive au lecteur avec le même statut.

Quatre statuts, et le lecteur doit pouvoir les distinguer **sans effort** :

| Statut | Ce que c'est | Marquage |
|---|---|---|
| établi | ce que le dossier affirme | aucun — c'est le régime par défaut |
| interprétation | lecture académique du texte | « on peut comprendre cela comme… » |
| reformulation | les mêmes idées, d'autres mots | aucun quand c'est évident |
| extension | conséquence, analogie, exemple | « cela implique que… », « imaginons… » |

**Le marquage n'est pas systématique.** Ne jamais préfixer par `CORPUS :`, `INTERPRÉTATION :`,
`EXEMPLE :`. Une reformulation évidente et un exemple manifestement hypothétique n'ont rien à
annoncer. Le statut se signale **là où le lecteur pourrait raisonnablement croire qu'une
affirmation vient de l'auteur alors qu'elle n'en vient pas** — et nulle part ailleurs, sous
peine de produire un appareil critique que personne ne lira.

Formulations à disposition : « on peut comprendre cela comme… », « une manière utile de
distinguer les deux notions est… », « cela permet d'interpréter… », « on peut en déduire, avec
prudence… », « une piste théorique serait… », « cette extension dépasse ce que la carte
établit », « pour attribuer précisément cette idée à l'auteur, il faudrait revenir au texte ».

---

## 3. Ce que le texte a le droit de faire librement

Sans source supplémentaire, et sans marquage lourd :

- reformuler, expliquer avec d'autres mots, poser une définition de travail ;
- construire une analogie ou un exemple explicitement hypothétique
  (« imaginons un service dans lequel… », « prenons un cas fictif… ») ;
- expliciter une conséquence logique immédiate du mécanisme décrit ;
- distinguer deux notions que le lecteur confond couramment, en disant que la distinction est
  un outil d'analyse et non une taxonomie de l'auteur ;
- montrer où le concept ne s'applique pas, et pourquoi ;
- comparer entre eux les éléments déjà présents dans la carte.

Un exemple inventé ne doit jamais pouvoir passer pour un cas historique ou empirique tiré d'une
source. Sa nature se lit dans sa première phrase.

---

## 4. Forme de sortie

Un fichier JSON par carte, nommé `corpus/deepenings/<conceptId>.json`, avec exactement cette
forme :

```json
{
  "$schema": "../schema/deepening.schema.json",
  "conceptId": "identifiant-de-la-carte",
  "lead": ["premier paragraphe", "deuxième paragraphe"],
  "sections": [
    { "title": "Titre substantiel", "paragraphs": ["…", "…"] }
  ],
  "limits": ["…", "…"]
}
```

| Champ | Contenu | Volume |
|---|---|---|
| `lead` | l'entrée en matière, sans titre : le problème que le concept résout, posé de telle sorte qu'on veuille lire la suite | 2 paragraphes, 120-200 mots |
| `sections` | le développement, chaque section portant **une** idée | 4 à 6 sections, 2 à 4 paragraphes chacune |
| `limits` | ce que le corpus de la carte ne permet pas d'établir, et ce qu'il faudrait ouvrir pour le savoir | 2 à 4 paragraphes, 100-200 mots |

**Total visé : 1 300 à 1 700 mots.** En dessous de 1 100, le texte n'a rien ajouté à la carte ;
au-dessus de 1 900, il devient un article que personne ne finit.

Contraintes de fabrication :

- Chaque paragraphe est **une chaîne de texte brut**. Pas de Markdown, pas de `**gras**`, pas
  de listes à puces, pas de titres à l'intérieur d'un paragraphe : l'application rend ces
  chaînes telles quelles, et un astérisque s'y afficherait tel quel.
- **Aucun tiret cadratin (`—`, U+2014).** Il est interdit sur tout ce que l'application
  affiche — voir `docs/corpus-workflow.md`, « Ce que le lecteur ne voit jamais ». Une incise se
  rend avec une virgule, des parenthèses ou un deux-points. `npm run corpus:deepen` le refuse.
- Les guillemets français `«  »` avec espaces fines insécables (U+202F) pour les citations
  courtes reprises dans le corps ; l'apostrophe typographique `’` partout.
- La citation de la carte peut être reprise dans le texte — c'est même souhaitable, c'est le
  seul endroit où l'auteur parle. Reprise **mot pour mot**, jamais paraphrasée entre
  guillemets.
- Aucun nom de modèle, d'application ou d'éditeur d'IA n'apparaît dans le texte.
- Un titre de section fait moins de 60 caractères.

---

## 5. Contrôle avant de rendre

Sept questions. Une seule réponse fausse et le texte est à reprendre.

1. Le texte annonce-t-il sa méthode, quelque part, y compris dans un titre ? → il ne doit pas.
2. Contient-il une citation, une page, une date, un DOI ou un chiffre absent du dossier ?
3. Attribue-t-il à un auteur une affirmation que le dossier ne porte pas ?
4. Un exemple inventé pourrait-il se lire comme un cas réel ?
5. `limits` est-il rempli d'autre chose que de formules de prudence — nomme-t-il réellement ce
   qui manque ?
6. Le texte serait-il compréhensible par quelqu'un qui découvre le domaine, tout en restant
   lisible sans agacement par quelqu'un qui le connaît ?
7. Le JSON est-il valide, `conceptId` exact, sans Markdown dans les chaînes ?

---

## 6. Projection

`npm run corpus:deepen` valide ces fichiers et les projette vers
`src/content/generated/deepenings.generated.ts`. La projection refuse un approfondissement dont
le `conceptId` ne correspond à aucune carte validée : un texte affiché sans carte derrière lui
serait exactement ce que le dispositif documentaire existe pour empêcher.
