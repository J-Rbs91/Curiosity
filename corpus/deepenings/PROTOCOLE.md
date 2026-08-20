# Protocole de rédaction d'un approfondissement

Un approfondissement est le texte que l'application affiche lorsqu'on appuie sur
« Approfondir ». Il est **écrit à l'avance, une fois, et figé dans le dépôt** : l'application
ne parle à aucun modèle, elle sert un texte qui a été relu.

Ce document est le seul cadrage de cette rédaction. Il transpose au texte écrit ce que
`src/domain/concepts/ai-prompt.ts` fait pour une conversation, et il en garde les exigences
mot pour mot là où elles s'appliquent.

---

## 0. Les trois défauts qui ont fait refaire le premier lot

À lire avant tout le reste. Les trente-deux textes du premier lot étaient documentairement
irréprochables et **inutilisables**. Deux raisons l'expliquaient d'abord ; la troisième s'est
vue une fois les deux premières corrigées, et elle tenait au même geste.

### Le dispositif était exhibé au lecteur

224 occurrences sur 32 textes. « Le dossier porte l'énoncé en entier. » « La carte, faute de
place, n'a gardé que la première proposition. » « Ce que le corpus établit. » Chacune de ces
phrases est vraie, et chacune renvoie le lecteur à une plomberie qui n'est pas la sienne : il
ouvrait un concept, il tombait sur l'appareil de production.

**Le lecteur ne sait pas qu'une carte existe.** Il ne sait pas ce qu'est un corpus, un
dossier, une fiche, un enregistrement validé. Il ne doit pas l'apprendre ici.

### Le texte commençait par l'abstraction

« Presque tous les modèles qui décrivent un choix supposent trois choses acquises… » C'est
une phrase juste, et c'est la pire manière d'ouvrir : elle demande de tenir trois abstractions
avant d'avoir compris de quoi il s'agit. Un rédacteur à qui l'on transmet une fiche
documentaire en reprend le vocabulaire savant dès la première ligne, et rend une explication
exacte que personne ne peut suivre.

### La limite était racontée du côté du rédacteur

Troisième défaut, découvert plus tard, et il tenait en une phrase : « Pour établir depuis quand
et en quels termes exacts ce texte pose la distinction, il faudrait pouvoir l'ouvrir. »

Rien n'y nomme la plomberie, et pourtant elle s'y voit. « Il faudrait pouvoir » raconte
quelqu'un qui a cherché un livre et ne l'a pas eu ; le lecteur, lui, n'a rien demandé de tel.
Écrite dans l'autre sens, la même phrase devient une raison d'aller au texte : « il faudra le
lire ». La limite n'a pas bougé d'un mot, elle a changé de destinataire.

---

## 1. L'invisibilité du dispositif

**Aucune de ces expressions n'apparaît dans le texte**, ni dans un titre, ni dans une limite :

la carte · la fiche · le corpus · le dossier · l'enregistrement validé · le contenu structuré ·
les éléments fournis · les éléments de référence · le résumé de la carte

`npm run corpus:deepen` les refuse. Ne les remplace pas par un autre nom technique inventé
(« le contenu transmis », « la notice de référence ») : le problème n'est pas le mot, c'est
qu'on parle au lecteur d'une structure dont il ignore l'existence.

**Ce qui reste dicible, et qui suffit à tout dire :** le concept, l'idée, l'auteur, le texte,
l'article, l'ouvrage, la citation, les sources disponibles.

| Au lieu de | Écris |
|---|---|
| « le dossier ne porte pas de définition » | « l'auteur n'en donne pas de définition dans ce texte » |
| « la carte n'établit pas ce point » | « les sources disponibles ne permettent pas de l'établir » |
| « le corpus rapporte que » | « dans ce texte, l'auteur écrit que » |
| « le résumé reprend le second versant » | (rien : c'est une information interne, elle se supprime) |
| « le contrôleur a relevé » | « la formulation exacte est » |
| « ce que la carte n'a pas la place d'afficher » | (rien : le lecteur n'a pas vu la contrainte de place) |

La frontière documentaire, elle, **reste due**. Elle se dit simplement autrement :

- « Les éléments dont nous disposons permettent d'établir que… »
- « Ce point n'est pas établi par les sources actuellement disponibles. »
- « Pour attribuer précisément cette idée à l'auteur, il faudrait revenir au texte original. »
- « Cette extension va au-delà de ce qui est actuellement documenté. »

### La limite se dit du côté du lecteur

Une lacune se déclare toujours (§4), mais jamais comme un compte rendu de recherche
infructueuse. Un ouvrage non lu n'est pas un manque dans la préparation du texte : c'est un
livre qui contient encore quelque chose, et qui reste à ouvrir. Écris donc ce qu'il porte
d'irremplaçable, puis dis qu'il faudra le lire.

`npm run corpus:deepen` refuse la forme fautive : l'ouvrage déclaré non consulté au passif,
« il faudrait pouvoir », « faute d'avoir pu », « hors de portée de ce texte », et tout renvoi à
la fabrication du texte lui-même.

| Au lieu de | Écris |
|---|---|
| « il faudrait pouvoir l'ouvrir » | « il faudra le lire » |
| « cet ouvrage n'a pas été consulté ici » | « ce que ce livre en fait, il faudra l'ouvrir pour le voir » |
| « son contenu reste hors de portée de ce texte » | « ses phrases attendent leur lecteur » |
| « aucune traduction publiée n'a pu être consultée » | « pour la formule qui fait référence en français, c'est cette édition » |
| « ces travaux n'ont pas été ouverts pour préparer ce texte » | « ce sont les racines de la notion, et l'auteur les nomme lui-même » |

Le temps de la phrase suffit souvent à faire le travail : le conditionnel décrit ce qu'on
aurait fallu pouvoir faire, le futur décrit ce que le lecteur va faire. Et la limite reste
entière : rien n'autorise à dire d'un texte non lu ce qu'il contient. Ce qui change, c'est
qu'on nomme ce qu'il détient plutôt que ce qui a manqué.

---

## 2. L'ordre d'introduction des idées

**Commence par ce qui permet de comprendre le problème auquel le concept répond**, avec des
mots courants, une situation observable, une opposition simple ou un exemple.

N'introduis pas le vocabulaire spécialisé de la discipline simplement parce qu'il figure dans
la documentation. Un terme technique n'apparaît que lorsqu'il apporte quelque chose à une
idée que le lecteur peut déjà commencer à comprendre. Quand il devient nécessaire :
introduis-le à ce moment, explique immédiatement ce qu'il signifie ici, rattache-le à une idée
déjà comprise, et ne fais pas dépendre sa compréhension d'un autre terme non encore expliqué.

Préfère :

> « Ce qui est demandé à une personne ne correspond pas toujours exactement à tout ce qu'elle
> doit réellement faire. En ergonomie, cette différence conduit notamment à distinguer la
> tâche de l'activité. »

à :

> « La distinction entre tâche prescrite et activité réelle constitue un principe fondamental
> permettant d'interroger le statut de la prescription. »

La seconde formulation peut venir plus tard. Elle n'est pas le point d'entrée.

Évite en particulier, dans les premiers paragraphes :

- de remplacer les mots simples par leurs équivalents savants ;
- de multiplier les synonymes conceptuels ;
- de définir plusieurs termes spécialisés avant d'avoir montré pourquoi ils servent ;
- de poser toutes les nuances qui évitent les contresens ;
- de faire de l'ouverture un résumé condensé de toute la théorie ;
- de faire précéder l'intuition par une définition académique longue.

**Chaque partie doit valoir seule.** Un lecteur qui s'arrête après la deuxième section doit
avoir compris quelque chose de complet et d'utile. Ne place donc jamais une idée
indispensable à la compréhension élémentaire dans une section tardive et technique.

**La progression ne s'annonce jamais.** Ni dans le corps, ni dans un titre : pas de « pour
commencer simplement », « plus techniquement », « pour aller plus loin », « en résumé ». Un
titre nomme **la chose dont la section parle**, jamais la fonction qu'elle occupe dans le
texte. « Ce que « satisfaisant » veut dire ici » est un titre ; « Approfondissement du
mécanisme » n'en est pas un.

---

## 3. Ce qui sert de matière, et rien d'autre

Deux fichiers, et aucune autre entrée :

1. **La carte projetée** dans `src/content/generated/concepts.generated.ts` : domaine, thème,
   concept, auteurs, attribution, citation localisée, accroche, résumé, sources.
2. **L'enregistrement** `corpus/validated/<id>.json`, qui porte en plus les `notes` de
   rédaction et le bloc `review`. Ces notes contiennent souvent le passage verbatim sur lequel
   une correction a été faite, l'aveu d'un texte qui n'a pas pu être ouvert, ou le désaccord
   de portée qui a coûté trois tours de contrôle. C'est la matière la plus fiable, et la seule
   qui dise **où sont les fragilités**.

Ces fichiers sont ta documentation de travail. **Ils ne se mentionnent pas dans le texte.**

Le champ `consulted` de chaque source décide de ce que tu as le droit d'en dire :

- `full-text` : le texte a été ouvert. Ce qui en est rapporté est utilisable.
- `metadata-only` : **seule la notice l'a été.** La source existe et elle est pertinente ;
  aucune phrase sur son contenu n'est permise. Pas de « dans cet ouvrage, l'auteur
  distingue… ».

C'est la distinction la plus importante du protocole, et celle qu'on oublie le plus vite.

---

## 4. Les règles documentaires

### Une lacune se déclare, elle ne se comble pas

Ne jamais écrire une citation, un numéro de page, un DOI, une date, une statistique, un titre
d'ouvrage ou un passage attribué à un auteur qui ne figure pas dans la documentation de
travail.

**Toute citation est vérifiée automatiquement.** `npm run corpus:deepen` compare chaque
passage entre guillemets de cinq mots ou plus à l'enregistrement de la carte. Tu peux citer ce
que la carte porte, et aussi les verbatim relevés dans les `notes` et le bloc `review`, qui
sont souvent les plus utiles. Rien d'autre. Mot pour mot, ponctuation comprise.

### La frontière épistémique se voit dans la formulation

Quatre statuts, que le lecteur doit distinguer sans effort :

| Statut | Marquage |
|---|---|
| ce que l'auteur affirme | aucun : c'est le régime par défaut |
| interprétation académique | « on peut comprendre cela comme… » |
| reformulation | aucun quand c'est évident |
| extension, conséquence, exemple | « cela implique que… », « imaginons… » |

**Le marquage n'est pas systématique.** Jamais de `CORPUS :`, `INTERPRÉTATION :`, `EXEMPLE :`.
Une reformulation évidente et un exemple manifestement hypothétique n'ont rien à annoncer. Le
statut se signale **là où le lecteur pourrait croire qu'une affirmation vient de l'auteur
alors qu'elle n'en vient pas**, et nulle part ailleurs.

### Ce que tu peux faire librement

Reformuler, expliquer autrement, poser une définition de travail, construire une analogie ou
un exemple explicitement hypothétique, expliciter une conséquence immédiate, distinguer deux
notions couramment confondues en disant que la distinction est un outil d'analyse et non une
taxonomie de l'auteur, montrer où le concept ne s'applique pas.

Un exemple inventé ne doit jamais pouvoir passer pour un cas historique ou empirique. Sa
nature se lit dans sa première phrase : « imaginons un service dans lequel… ».

---

## 5. Forme de sortie

Un fichier JSON par carte, `corpus/deepenings/<conceptId>.json` :

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
| `lead` | l'entrée en matière, sans titre. **Le passage le plus important du texte.** Il pose le problème auquel le concept répond, avec des mots courants et si possible une situation concrète. Aucun terme savant qui ne soit immédiatement expliqué. | 2 paragraphes, 120-200 mots |
| `sections` | le développement, une idée par section, du plus immédiat au plus technique | 4 à 6 sections, 2 à 4 paragraphes |
| `limits` | ce que les sources disponibles ne permettent pas d'établir, et le texte qu'il faudra lire pour le savoir | 2 à 4 paragraphes, 100-200 mots |

**`limits` s'affiche sous le titre « Ce que les sources ne permettent pas d'établir ».** Écris
donc ces paragraphes comme la suite naturelle de ce titre, sans jamais nommer la carte ni le
dossier, et du côté du lecteur plutôt que du tien (§1) : non pas « l'article de 1955 n'a pas
été consulté au-delà de sa notice », mais « ce que l'article de 1955 en dit, il faudra l'ouvrir
pour le savoir ». C'est le champ que le lecteur quitte en dernier : bien écrit, il lui laisse
une pile de livres plutôt qu'une liste de manques. Des formules de prudence sans objet précis
ne suffisent pas, le contrôle les refuse.

**Total visé : 1 300 à 1 700 mots.** En dessous de 1 100, le texte n'a rien ajouté ; au-dessus
de 1 900, il devient un article que personne ne finit.

Contraintes de fabrication :

- Chaque paragraphe est **une chaîne de texte brut**. Pas de Markdown, pas de `**gras**`, pas
  de listes, pas de titres à l'intérieur d'un paragraphe : l'application rend ces chaînes
  telles quelles.
- **Aucun tiret cadratin (`—`, U+2014).** Interdit sur tout ce que l'application affiche, voir
  `docs/corpus-workflow.md`. Une incise se rend avec une virgule, des parenthèses ou un
  deux-points.
- Guillemets français `«  »` avec espaces fines insécables (U+202F), apostrophe typographique
  `’` partout.
- Un titre de section fait moins de 60 caractères.
- Aucun nom de modèle, d'application ou d'éditeur d'IA.

---

## 6. Contrôle avant de rendre

Lance `npm run corpus:deepen -- --check --only=<conceptId>`. Il contrôle ton seul fichier et
n'écrit rien. Ne rends pas la main sur un contrôle en échec.

Puis relis ton texte avec ces questions, dans cet ordre :

1. Le début peut-il être compris **sans connaître le vocabulaire de la discipline** ?
2. Ai-je introduit un terme spécialisé avant que le lecteur puisse comprendre à quoi il sert ?
3. Un lecteur qui s'arrêterait après les deux premières sections aurait-il compris quelque
   chose de complet et d'utile ?
4. Ai-je fait référence à la carte, à la fiche, au corpus, au dossier, ou à une autre
   structure interne que le lecteur n'a aucune raison de connaître ?
5. Le texte annonce-t-il sa méthode, quelque part, y compris dans un titre ?
6. Une citation, une page, une date ou un chiffre y figurent-ils sans être dans la
   documentation de travail ?
7. Un exemple inventé pourrait-il se lire comme un cas réel ?
8. `limits` nomme-t-il réellement ce qui manque, et donne-t-il envie d'aller le lire ?
9. Une phrase raconte-t-elle qu'un texte n'a pas pu être ouvert, plutôt que ce qu'il contient ?

---

## 7. Projection

`npm run corpus:deepen` valide l'ensemble et projette vers
`src/content/generated/deepenings.generated.ts`. La projection refuse un approfondissement
dont le `conceptId` ne correspond à aucune carte validée.
