# Chaîne documentaire du corpus

Ce document décide comment un concept entre dans Curiosity : ce qu'on cherche, qui vérifie
quoi, et à quelles conditions le concept devient visible dans l'application. Il est la
référence : un désaccord sur une fiche se tranche ici.

---

## 0. Ce que ce dispositif produit

**Des cartes.** Sept éléments — thème, concept, citation, auteur, accroche, résumé,
sources — dont chacun soit exact. Le lecteur les emporte ensuite vers l'IA de son choix par
le bouton « Approfondir » : l'application ne produit rien au-delà de la carte, et ce n'est
pas une lacune, c'est le produit.

Le corpus documentaire n'est pas le livrable : c'est le moyen. Un dossier de preuve qui ne
devient jamais une carte n'a servi à rien.

Toute décision de méthode se tranche par une question, et une seule :

> *Est-ce que cela rend la carte plus juste ?*

Si la réponse est non, cela ne se fait pas — quelle que soit la qualité documentaire de ce
qu'on y perd.

---

## 1. Le problème que ce dispositif a créé, et comment il a été réparé

Il faut le lire avant tout le reste, parce que c'est la seule chose qui explique la forme
actuelle du dispositif.

La première version demandait un enregistrement complet par concept : définition dans les
termes de l'auteur, mécanisme en douze étapes, conditions d'apparition, d'intensification et
de disparition, contresens répertoriés avec leur réfutation, notes de traduction terme à
terme, réception internationale et francophone, ambiguïtés connues, limites, drapeaux de
confiance, traçabilité de chaque phrase affichée vers un champ de preuve. Le contrôle
portait sur l'ensemble, en deux passes.

Le résultat, mesuré sur les fiches produites :

| | |
|---|---|
| Poids d'un enregistrement | jusqu'à **171 624 caractères** |
| Poids de la carte affichée | environ **600 caractères** |
| Fiches instruites | 8 |
| Fiches publiées | **0** |

Les huit fiches ont toutes été renvoyées en correction par le contrôleur aveugle. Aucun de
ces renvois ne portait sur la carte : ils visaient `traceability`, `difficulty_rationale`,
`common_misinterpretations`, la manière de citer une source francophone dans le dossier —
des champs que le lecteur ne voit jamais. Les six verdicts rendus concluaient tous
`attribution : confirmée`, `source primaire : confirmée`, `sources : concordantes`.

Une fiche a épuisé ses trois tours sur un désaccord de classement dans un champ qui
n'atteignait pas l'écran. Une autre est restée candidate parce que sa chaîne d'étapes ne
passait pas un « test de suffisance », alors que sa carte était établie.

**Le dispositif ne protégeait plus la carte : il l'empêchait.**

Ce qui a été supprimé — tout ce qui n'atteint pas le lecteur. Ce qui a été gardé, et ne doit
pas bouger : citation verbatim et localisée sur une source réellement ouverte, attribution
confirmée, références qui résolvent, prose qui n'ajoute rien.

L'enregistrement complet des huit fiches instruites sous l'ancien format est conservé dans
`corpus/dossiers/`. Rien n'a été détruit ; rien de tout cela n'est plus exigé.

---

## 2. La carte

Sept éléments, dont un seul facultatif. Le schéma est
[`corpus/schema/carte.schema.json`](../corpus/schema/carte.schema.json).

| élément | champ | plafond |
|---|---|---|
| thème | `themes[0]` + `theme_labels` | — |
| domaine | hérité du thème, `domain` en dernier recours | — |
| concept | `title` | 48 caractères |
| citation | `quotation` | 150 caractères, **facultative** |
| auteur | `authors`, `attribution_note` | — |
| accroche | `hook` | 85 caractères |
| résumé | `summary` | 170 caractères |
| sources | `sources` | 5 au plus |

Les plafonds sont **mesurés**, pas stylistiques : la carte est rendue dans un navigateur,
tous les champs à leur maximum simultané, sur 375 × 667 — le plus petit écran encore en
circulation. Elle doit tenir sans défiler. Le premier lot a produit des accroches de 311
caractères et des résumés de 805, tous excellents et tous inaffichables.

La citation est facultative parce que beaucoup de concepts n'ont pas de passage court et
autonome qui les énonce. En exiger un partout ferait fabriquer la belle phrase que ce
dispositif existe pour empêcher.

### Un champ affiché n'est pas un champ de preuve

C'est la règle qui a coûté le plus cher, et elle se réapprend à chaque lot.

`label` et `locator` d'une source **s'affichent tels quels**. Écrits pour un contrôleur,
ils ont produit : une ligne d'attribution de 1 600 caractères ; un localisateur de 889
caractères sous une source ; la notice de Reynaud affichant le numéro thématique, la note
liminaire **et l'adresse postale du CNAM**.

Un champ qui atterrit sur la carte doit donc être écrit deux fois — une fois pour
l'affichage, une fois pour la preuve. Le validateur plafonne désormais `label` et `locator`
pour que le défaut ne puisse plus atteindre l'écran, et `notes` recueille ce qu'on voulait
dire en plus.

Même raison pour `attribution_note` : elle s'écrit **en toutes lettres**, jamais composée
par un script à partir de champs séparés. La composition automatique prenait l'année de la
première source primaire et a rendu « Concept coécrit par Michel Crozier et Erhard Friedberg
(1960) » — pour une cosignature attestée en 1979.

### Ce que le lecteur ne voit jamais : le tiret cadratin

Le tiret cadratin (`—`, U+2014) est **interdit sur toute carte affichée**. Un lecteur de
l'application ne doit jamais le rencontrer, dans aucun champ que la carte projette : `title`,
`hook`, `summary`, `attribution_note`, `theme_labels`, `authors[].name`, `quotation.text`,
`quotation.reference`, `quotation.locator`, `sources[].label`.

Ce n'est pas une préférence typographique de cette documentation, qui l'emploie elle-même
sans retenue : c'est une règle de ce que l'application montre. Une incise se rend avec une
virgule, des parenthèses ou un deux-points ; la prose du corpus n'a jamais besoin du tiret
cadratin pour dire ce qu'elle a à dire.

La règle ne se tient pas à la relecture : `checkForbiddenCharacters` dans
`scripts/corpus/lib/validate.mjs` la contrôle sur les mêmes champs, et `npm run
corpus:validate` refuse de valider une fiche qui en porte un. C'est la même discipline que
pour les longueurs de carte : ce qui protège le lecteur ne peut pas dépendre de la vigilance
de qui écrit.

---

## 3. La hiérarchie des sources

Quatre niveaux, et le niveau est affiché au lecteur : sans lui, la carte ferait passer un
article peer-reviewed pour une glose de notre fait.

| `kind` | ce que c'est |
|---|---|
| `primary` | le texte de l'auteur |
| `secondary-academic` | article peer-reviewed, chapitre, handbook |
| `francophone-reception` | la réception française, cherchée en parallèle et non après coup |
| `pedagogical-interpretation` | vulgarisation universitaire, signalée comme telle |

Trois règles, appliquées par `npm run corpus:validate` :

1. **Une référence introuvable n'existe pas.** DOI, ISBN ou URL, sinon la source sort.
2. **On ne cite pas un texte qu'on n'a pas ouvert.** Une carte publiée porte au moins une
   source primaire en `consulted: full-text`.
3. **Une lacune se déclare, elle ne se comble pas.** Ce qui n'a pas pu être atteint va dans
   `notes`, en clair.

Le web général (Wikipédia, blogs, cours en ligne) sert **uniquement à détecter**. Quinze
pages concordantes qui ne remontent à aucun texte académique ne valent rien.

### Combler le trou plutôt que changer l'étiquette

La règle 3 dit qu'une lacune se déclare. Elle ne dit pas *quand* : c'est après avoir essayé
de l'atteindre, jamais avant. Et combler le trou n'est pas combler la lacune, qui reste
interdit : ce n'est pas écrire ce qu'on ne sait pas, c'est aller le chercher.

Quand une affirmation se révèle plus forte que ce qui a été établi, deux gestes la rendent
honnête.

- **Changer l'étiquette** : abaisser l'affirmation au niveau de ce qui a réellement été
  fait. Un `full-text` redevient `metadata-only`, une source sort, une accroche se rétracte
  jusqu'à ne plus rien affirmer.
- **Combler le trou** : aller faire ce qui manquait, et garder l'affirmation. Ouvrir la
  page, résoudre le DOI, chercher l'édition française.

Les deux produisent une fiche exacte. Le second produit en plus un fait, et un fait ne se
réacquiert jamais.

La règle est nécessaire parce que les deux gestes sont indiscernables là où on les relit :
dans un diff, c'est la même ligne et quelques mots, et rien ne signale que l'un a coûté
trente secondes et l'autre dix minutes. Le contrôle qui voit passer une rétrogradation voit
une fiche devenue correcte, et il a raison ; il ne voit pas la question restée sans réponse.
Cette question ne disparaît pas : elle est repayée en entier par le prochain agent qui
rencontre la même fiche.

Dans l'ordre :

1. Un contrôle qui se déclenche demande du travail. Il nomme un écart ; il ne dit jamais de
   rendre l'affirmation plus petite.
2. Ouvrir la source d'abord. Elle répond plus souvent qu'on ne l'anticipe, et « ce n'est
   sûrement pas accessible » est elle-même une affirmation non vérifiée.
3. Ne rétrograder qu'après une tentative réelle, et dire alors, en clair, ce qui a été
   demandé, où, et comment cela a échoué. Sans ce compte rendu, la tentative sera refaite à
   l'identique.

Une rétrogradation motivée n'est pas un échec : c'est le compte rendu exact d'une limite
réelle. Ce qu'elle n'est pas, c'est du travail terminé.

Ce n'est pas propre au champ `consulted`. Même forme partout où une contrainte peut être
satisfaite en abaissant ce qu'on affirme plutôt qu'en établissant ce qu'on ignore : une
citation abandonnée au lieu d'être cherchée ailleurs dans le même texte, une source retirée
au lieu d'être résolue, un résumé rendu vague au lieu d'être fondé — c'est le verdict
`trop-etroite`. Chaque fois, la fiche redevient exacte et la question passe à quelqu'un
d'autre.

Le test qui discrimine, à poser avant de valider le geste : **est-ce que je viens de
répondre à la question, ou de la rendre plus petite ?**

---

## 4. La chaîne — quatre agents

```
corpus-scout  →  corpus-primary-reader  →  corpus-card-writer  →  corpus-blind-reviewer
                                                                          │
                          corpus/rejected/  ◀── REJECT                 PASS │ REWORK ──┐
                                                                          ▼          │
                                                    corpus-editor → l'application     │
                                                                                      │
                                              ◀───────────────────────────────────────┘
                                                  deux tours au maximum
```

1. **`corpus-scout`** — repère les concepts du périmètre et, pour chacun, une source
   primaire **réellement atteignable**. C'est le seul critère d'entrée. Écarter tôt coûte
   une recherche ; retenir par optimisme coûte toute la chaîne.
2. **`corpus-primary-reader`** — ouvre le texte, relève la citation verbatim et localisée,
   établit l'attribution. L'étape irremplaçable : tout le reste se reformule, la citation
   non.
3. **`corpus-card-writer`** — écrit l'accroche et le résumé, choisit les cinq sources.
   **En lot** : le travail documentaire est sériel par nature, la rédaction ne doit pas
   l'être.
4. **`corpus-blind-reviewer`** — quatre questions, une passe.
5. **`corpus-editor`** — déplace en `validated/`, projette, rapporte.

Aucun agent ne contrôle son propre travail.

**Deux tours de correction au maximum.** Au troisième, la fiche se rejette : trois tours sur
une carte de 600 caractères signalent un désaccord que la prose ne réglera pas.

---

## 5. Le contrôle aveugle

`npm run corpus:brief -- <id>` produit `corpus/review/<id>.brief.json` : la carte et ses
sources, **rien d'autre**. Verdict précédent, notes internes, statut et chemin du dossier en
sont retirés mécaniquement — l'aveuglement est une propriété du script, pas une promesse.

Le contrôleur refait sa propre recherche et tranche quatre questions :

| question | valeurs |
|---|---|
| **attribution** — le concept est-il de cet auteur ? | `confirmee` · `douteuse` · `fausse` |
| **quotation** — verbatim, à l'endroit annoncé, dans un texte qu'il a ouvert ? | `verbatim` · `ecart` · `absente` |
| **sources** — chaque référence résout-elle vers ce qu'elle annonce ? | `resolvent` · `partielles` · `introuvables` |
| **prose** — l'accroche et le résumé excèdent-ils les sources ? | `fidele` · `deborde` · `trop-etroite` |

**Ne relever que ce qui touche ces quatre points.** C'est une contrainte sur le contrôleur
autant que sur les rédacteurs : le dispositif précédent trouvait de vrais défauts, page
après page, sur des champs qui n'atteignaient personne — et n'a jamais rien publié.

La quatrième question est la plus facile à manquer, parce qu'un adjectif suffit. Deux cas
réels : une accroche demandait pourquoi des organisations **concurrentes** finissent par se
ressembler, alors que l'article dit « structural change in organizations seems less and less
driven by competition » ; un résumé parlait d'**imitation** là où le texte dit *modeling* —
l'imitation suppose une intention de ressembler, le modelage suppose seulement qu'un modèle
soit disponible.

---

## 6. Le verrou de publication

`checkGating()` dans [`scripts/corpus/lib/validate.mjs`](../scripts/corpus/lib/validate.mjs).
Une fiche n'est projetée que si :

- `review.verdict === "PASS"` ;
- `attribution === "confirmee"`, `sources === "resolvent"`, `prose === "fidele"` ;
- `quotation === "verbatim"`, ou `"absente"` si la fiche n'en porte pas ;
- au moins une source primaire en `full-text` ;
- les longueurs d'affichage tiennent.

Ces règles sont dans un script et non dans une consigne parce qu'une consigne s'oublie. Les
assouplir demande de modifier ce document d'abord.

---

## 7. Commandes

| commande | ce qu'elle fait |
|---|---|
| `npm run corpus:validate` | vérifie chaque fiche et le corpus. Sort en erreur si une règle tombe. |
| `npm run corpus:build` | projette `corpus/validated/` vers `src/content/generated/`. Refuse si la validation échoue. |
| `npm run corpus:brief -- <id>` | produit le dossier aveugle. |
| `npm run corpus:audit` | état du corpus : couverture par auteur, par thème, sujets non instruits. |
| `npm run corpus:deepen` | projette `corpus/deepenings/` vers `src/content/generated/`. En fin de sortie, la liste des cartes validées sans approfondissement : c'est la file de travail. |
| `npm run corpus:deepen -- --check --only=<id>` | contrôle un seul approfondissement sans rien écrire. C'est ce que lance un agent rédacteur, puisqu'ils écrivent tous en parallèle. |

Le fichier généré ne s'édite jamais à la main : une correction manuelle disparaît à la
projection suivante, et aura vécu entre-temps sans enregistrement sourcé derrière elle.

---

## 8. Les approfondissements

Une carte validée peut porter un **approfondissement** : le texte d'environ mille cinq cents
mots que l'application affiche lorsqu'on appuie sur « Approfondir ». Il vit dans
`corpus/deepenings/<id>.json`, au format `corpus/schema/deepening.schema.json`.

C'est un second étage du même dispositif, avec la même règle : **rien ne s'affiche qui n'ait un
fichier relu derrière lui.** L'application ne parle à aucun modèle au moment du clic ; le texte
a été écrit une fois, hors ligne, et projeté.

Le cadrage de rédaction est dans [`corpus/deepenings/PROTOCOLE.md`](../corpus/deepenings/PROTOCOLE.md).
Il porte les quatre exigences documentaires, et surtout la distinction qui décide de tout :
le champ `consulted` de chaque source. `full-text` autorise à parler du contenu du texte ;
`metadata-only` n'établit que l'existence de la référence, et aucune phrase sur ce qu'elle
contient.

La chaîne est nommée et se relance : `/corpus-deepen`, qui lance un agent `corpus-deepener`
par carte. Une fiche d'échafaudage n'en reçoit jamais, et la projection le refuse : un texte
long écrit sur une carte non vérifiée propagerait l'invérifié au lieu de le contenir.
