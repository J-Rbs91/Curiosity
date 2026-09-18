# Correction après FACTCHECK_FAIL — force-du-besoin-de-developpement

Boucle de correction 1 sur 2.

- SHA audité en échec : `fc7d8938a27067ef5d9ecce56f6260dc2d964f73b47f7ebb351f0354bb67af16`
- Gate : `FACTCHECK_FAIL`, 55 claims, 47 `SUPPORTED`, 8 échecs, 0 erreur structurelle.
- Artefacts lus : `factcheck-gate.json`, `verification.json`, `factcheck-pack.json`,
  `corpus/deepenings/FACTCHECK_PROTOCOL.md` §6, `corpus/deepenings/PROTOCOLE.md`,
  `corpus/deepenings/force-du-besoin-de-developpement.json`,
  `corpus/validated/force-du-besoin-de-developpement.json` (via le registre des supports du pack).

Aucun support n'a été ajouté à aucun claim. Aucun identifiant `SUP-...` n'a été écrit, modifié
ou inventé. Aucune affirmation nouvelle n'a été introduite pour combler un défaut documentaire.
`limits` n'a pas été modifié et reste interne : il porte déjà les frontières concernées
(Technical Report No. 6 non ouvert, p. 27 OCR seul et non citable, p. 4 sans données, sujet
grammatical de la p. 6).

## Une décision par claim en échec

### C001 — `lead[0]`, `UNSUPPORTED` — REMOVE

Énoncé retiré : « On met en général ce cas sur le compte de la résistance au changement, ou
d'un accompagnement mal conduit. »

C'était une affirmation sur un usage social répandu (« on met en général »), qu'aucun support du
pack n'établit, et qui ne pouvait pas l'être : le dossier ne porte rien sur les attributions
courantes en conduite du changement. La portée assertive est donc supprimée, et la phrase devient
une question : « Faut-il mettre ce cas sur le compte de la résistance au changement, ou d'un
accompagnement mal conduit ? »

Une question n'affirme rien, y compris sur la fréquence de ces attributions : c'est exactement le
raisonnement que le contrôle aveugle applique au hook de la carte (SUP-4ec247e950280a3f, « il
n'affirme rien »). Le tour pédagogique du `lead` est conservé sans qu'aucun fait sur les pratiques
ne soit avancé, et l'enchaînement de `lead[1]` (« Il existe une autre lecture ») reste lisible :
la question ouvre deux lectures, le paragraphe suivant en apporte une troisième, celle des auteurs.

### C019 — `sections[1].paragraphs[1]`, `TOO_STRONG` — NARROW

Avant : « La question utile devant un projet de refonte n'est plus de savoir qui est dans quel
camp, à quoi rien ne permet de répondre, mais avec quelle force ce besoin est présent chez
quelqu'un, ce dont un questionnaire peut au moins chercher la mesure. »

Après : « Ranger quelqu'un dans un camp n'est alors plus la question ; elle devient de savoir avec
quelle force ce besoin est présent chez quelqu'un, ce dont un questionnaire peut au moins chercher
la mesure. »

Deux excès signalés par le verifier sont retirés, et non atténués :

1. la prescription pratique (« la question utile devant un projet de refonte ») : le dossier ne
   porte aucun usage prêté à ce score ni aucune consigne d'application ;
2. l'impossibilité totale (« à quoi rien ne permet de répondre ») : une impossibilité absolue de
   réponse n'est établie par rien.

Ce qui reste est borné à la relecture posée juste avant (C018, `SUPPORTED`) et au claim C020,
`SUPPORTED`, dont la formulation est conservée mot pour mot.

### C023 — `sections[2].paragraphs[0]`, `UNSUPPORTED` — REMOVE

Énoncé retiré : « Un modérateur est une troisième grandeur qui n'ajoute rien au résultat et n'en
retranche rien non plus, mais qui décide de la force du lien ».

Définition méthodologique générique, sans support dans le pack. Elle n'est pas adossable : le
dossier porte la place de modérateur telle que la Figure 1 la pose, pas une définition de
méthode. Elle n'est pas donnée non plus comme raisonnement, une définition ne pouvant pas se
présenter comme une conséquence dérivée. Elle disparaît.

Ce que le lecteur en perdait est déjà porté, sans glose ajoutée, par le paragraphe suivant :
la citation de la p. 4 (C026) et la description « ni en amont ni en aval, mais en travers des
relations » (C027), tous deux `SUPPORTED`.

### C024 — `sections[2].paragraphs[0]`, `TOO_STRONG` — REMOVE

Énoncé retiré : « selon qu'il est haut ou bas, le même changement apporté au poste produit
beaucoup, un peu, ou rien ».

Il formait la seconde moitié de la même phrase que C023. La gradation et l'effet nul excèdent
SUP-0c5c2e55511ca07c, qui n'établit que la place de modérateur posée en Figure 1, et glissaient
vers un énoncé d'effet que la p. 4 ne porte pas : cette page n'a aucune donnée. Une version
bornée aurait redit ce que la section « Une réserve posée juste après un score » établit déjà par
la citation elle-même ; la phrase entière est donc supprimée plutôt que réécrite.

Conséquence assumée sur le titre de section : « Une grandeur qui règle la force d'un lien »
glosait précisément la définition retirée. Le titre devient « La place de ce besoin dans leur
schéma », qui reste dans C026 et C027.

### C028 — `sections[2].paragraphs[2]`, `UNSUPPORTED` — REMOVE

### C029 — `sections[2].paragraphs[2]`, `UNSUPPORTED` — REMOVE

Le paragraphe entier est retiré. Il portait, après une phrase d'annonce non mappée, deux
raisonnements statistiques généraux : l'agrégation d'effets hétérogènes dans une moyenne (C028) et
la non-identifiabilité de cette hétérogénéité à partir de la seule moyenne (C029). Aucun support
du pack ne les établit, et le seul énoncé empirique voisin du dossier, celui de la p. 27, est
déclaré non citable en l'état parce qu'il n'a été atteint que par l'OCR (SUP-c4a1c4a9ecd80611).

Ces deux énoncés n'ont pas été conservés en les donnant explicitement comme raisonnement : la p. 4
n'avance aucun résultat moyen, et faire porter au texte lecteur une argumentation sur
l'interprétation des moyennes aurait laissé croire qu'un effet mesuré est en jeu quelque part dans
ce rapport. La section garde ses deux premiers paragraphes.

### C042 — `sections[4].paragraphs[1]`, `UNSUPPORTED` — NARROW + MARK_AS_INTERPRETATION

Avant : « La différence est lourde de conséquences pratiques. Tenu pour un trait stable, ce besoin
sert à trier : celui-ci est fait pour un poste enrichi, celle-là ne l'est pas, et l'on distribue
les emplois d'après un classement des personnes. »

Après : « Deux façons de le lire s'offrent alors, et le mot en écarte une. Tenu pour un trait
stable, ce besoin décrirait une propriété acquise de la personne, qu'il n'y aurait plus qu'à
constater. »

Le scénario de tri des personnes et de distribution des emplois d'après un classement est retiré :
rien dans le pack ne porte un usage de sélection, et l'indicatif (« sert à trier », « l'on
distribue ») le donnait comme un fait. Ce qui reste est au conditionnel, borné à ce qu'une lecture
en trait figé impliquerait, et immédiatement désavoué par la phrase finale du paragraphe, qui est
déjà `SUPPORTED` (C044) : cette première lecture va au-delà de ce que le texte autorise, et c'est
la seconde que le mot « malleable » soutient (SUP-c29c26f776666b70, « ce n'est pas présenté comme
un trait figé »).

C044 a été touché sur un seul point, par nécessité grammaticale et sans changement de portée :
« Le premier usage… le second » devient « La première lecture… la seconde », les deux branches
n'étant plus décrites comme des usages.

### C050 — `sections[5].paragraphs[1]`, `UNSUPPORTED` — REMOVE

Énoncé retiré : « Ils ne disent pas ce que ces travaux antérieurs contenaient. »

C'est une affirmation d'absence adossée à SUP-f77e516d2d9d873b, qui cite la p. 2 avec une ellipse
« […] » entre les deux phrases. Le contenu élidé n'est pas visible et le reste du rapport n'est pas
couvert : l'absence de contradiction ne prouve rien. Cet énoncé ne pouvait pas être sauvé par une
reformulation, et une version bornée (« ces deux phrases posent un rattachement et renvoient
ailleurs ») aurait seulement redit ce que les deux citations disent déjà juste avant (C048, C049).
La phrase est donc supprimée ; l'enchaînement vers C051, « Chez Hackman et Lawler, ce même
modérateur porte déjà un autre nom », se fait directement depuis la citation qui les nomme.

## Volume

| | mots texte lecteur | mots avec `limits` |
|---|---|---|
| avant | 1425 | 1643 |
| après | 1281 | 1499 |

Le texte perd 144 mots. Aucun mot n'a été ajouté ailleurs pour compenser : un défaut documentaire
ne se rattrape pas par du volume.

## Contrôle mécanique

```
npm run corpus:deepen -- --check --only=force-du-besoin-de-developpement
1 approfondissement(s) contrôlé(s), 1499 mots. Rien projeté.
```

Structure après correction : `lead` 2 paragraphes, 6 sections (2, 2, 2, 2, 2, 3 paragraphes),
`limits` 5 entrées inchangées.

## Suite

Le texte a changé : le SHA `fc7d8938…` est invalidé, et avec lui le mapping et les verdicts de
cette passe. Le fact-check doit reprendre à `PREPARE` sur un pack neuf. Aucun verdict n'est rendu
ici, ni `ACCEPT`, ni `FACTCHECK_PASS`.
