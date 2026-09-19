concept : signification-et-invariance
mode : REVISE (verdict d'audit REVISE, architecture conservée)
protocol_version : 3

volume : avant 1 364 mots comptés (1 190 lecteur) ; après 1 802 mots comptés (1 518 lecteur, 284 en frontière interne).
structure : avant 2 + 5 sections / 10 paragraphes ; après 2 + 5 sections / 11 paragraphes. Les titres des cinq sections sont inchangés.
check mécanique : `npm run corpus:deepen -- --check --only=signification-et-invariance` → 1 approfondissement contrôlé, 1 802 mots, aucune erreur, aucune citation signalée.

## 1. Les cinq affirmations trop fortes, et ce qui les remplace

1. **Nationalité des auteurs.** « Deux chercheurs américains, Patrick Suppes et Joseph L. Zinnes » (lead[1]). Rien dans les sources disponibles ne donne la nationalité de Zinnes. Remplacé par « Patrick Suppes et Joseph L. Zinnes ont posé cette question dans un rapport de mars 1962 » : la date est celle de la source (15 mars 1962), et la mention disparue n'est remplacée par aucune autre attribution biographique.

2. **Unicité de la transformation.** « Ce type précis de transformation, et lui seul, respecte la façon dont l'échelle de température a été construite » (S1.P1), doublé de la description de la forme (« multiplie par un facteur fixe, puis ajoute une constante »). Ni la forme ni l'unicité ne figurent dans les sources : c'est de la connaissance générale sur les échelles d'intervalle. Les deux gloses sont supprimées. Ce qui les remplace est dérivé des seuls nombres que la source porte : les deux échelles « ne placent ni leur zéro ni leur graduation au même endroit », puisque la même journée s'écrit 110 d'un côté et 43,3 de l'autre. Aucune forme mathématique n'est plus attribuée à la conversion, et `limits` porte désormais explicitement cette interdiction.

3. **Attribution d'une définition de l'admissibilité.** « Suppes et Zinnes appellent une transformation de ce genre, celle qui respecte les conventions propres à un type de mesure donné, une transformation d'échelle admissible » (S1.P1) leur prêtait une définition qu'ils ne donnent pas. Réattribué à ce que les sources portent réellement : ils emploient le terme, et « admissible » y est un terme technique, non une appréciation, qui désigne les transformations que le type d'échelle autorise. C'est exactement la note de traduction de « admissible scale transformations », et rien de plus.

4. **Généralisation d'un cas unique.** « Un rapport peut très bien résister au changement d'échelle dans un contexte, et y échouer dans un autre » (S3.P2) généralisait à partir du seul couple documenté. Phrase supprimée. À sa place, la règle que les auteurs énoncent (l'admissibilité d'une opération dépend de l'énoncé numérique entier dont elle fait partie) et un second couple réellement documenté : la somme de deux températures comparée à une troisième n'est pas douée de sens, la même somme pour des masses l'est, parce que le type d'échelle diffère. L'affirmation générale est donc portée par les auteurs, et l'illustration par deux cas attestés au lieu d'un.

5. **Extension à des grandeurs non listées.** « qu'il s'agisse de longueurs, de poids, de scores, ou de toute autre grandeur » (ancien S2.P2). Paragraphe supprimé en entier. La généralisation restante est celle que la citation elle-même autorise : la définition parle d'énoncés numériques et ne mentionne pas la température. Le cas des masses est nommé parce qu'il est documenté ; longueurs et scores ne le sont plus.

Effet de bord voulu : l'exemple construit de l'enquête (S5.P1) ne conclut plus qu'une comparaison de moyennes y serait douée de sens. Il dit que la question ne peut être tranchée sans dire d'abord quelles réécritures cette échelle autorise, ce qui est le geste que le critère impose et non un résultat attribué aux auteurs.

## 2. Ce qui a été retiré

- **Ancien S2.P2 (123 mots), supprimé.** C'était la généralisation qui consommait par avance la fonction de S5 et qui listait des grandeurs hors sources. Défaut n° 1 de l'audit.
- **Ancien S5.P2 (67 mots), supprimé.** Aucun delta propre : il généralisait une généralisation déjà faite. La place est rendue à une sortie.
- **Seconde moitié de S1.P2**, « La question que pose alors ce travail est la suivante… » : re-posait la question du lead et frôlait l'annonce de programme.
- **Dernière proposition de S2.P1**, « ce qu'il affirme dépend alors de l'instrument, pas seulement du monde » : redite exacte de lead[1].
- **Première phrase de l'ancien S3.P2**, qui répétait la dernière de S3.P1. Les deux paragraphes sont refondus.
- **Trois des quatre occurrences de « dans une acception technique bien particulière »** (lead[1], S2.P1, S3.P1, S4.P1). Le lecteur était prévenu quatre fois qu'un mot était piégé sans qu'on lui dise jamais lequel. La précaution est remplacée, une fois, par la distinction elle-même.
- **Généalogie Scott développée (S4.P2)** : ramenée à une phrase, orientée vers ce que les auteurs ne revendiquent pas, et non vers l'attribution de paternité.

## 3. Ce qui a été ajouté, et sur quel appui

| Ajout | Appui |
|---|---|
| S2.P2 entier : « meaningful » rendu par « a un sens » et non « significatif », parce que « significatif » ferait entendre la significativité statistique ; et « a un sens » ne veut pas dire « compréhensible » | note de traduction de l'enregistrement validé (`quotation.translation.translator`) et sa version développée dans `corpus/evidence/.../lecture.json`, qui nomme le contresens statistique |
| S3.P2 : pourquoi la comparaison de deux moyennes survit là où le rapport se brise (une comparaison ne demande que l'ordre, que la conversion ne renverse pas ; un rapport demande de compter depuis un zéro qui se déplace) | dérivé des quatre nombres de la source (110/100 et 43,3/37,8, p. 109) et corroboré par l'exemple 2, p. 115, que les auteurs déclarent doué de sens |
| S3.P1 : janvier contre février, et « dans les conditions qu'ils précisent » | exemple 2, p. 115 (`notes` de l'enregistrement, et « Hence (8) is meaningful under these conditions » dans lecture.json) |
| S3.P3 : la règle générale de l'admissibilité, énoncée par les auteurs | verbatim des `notes` : « The admissibility of any mathematical operation depends not only on the scale type […] but on the entire numerical statement of which the operation is a part. » Rendu en français sans guillemets, la traduction n'étant pas portée par les sources |
| S3.P3 : somme de deux températures comparée à une troisième vs somme de deux masses | exemple 1, p. 113-114, rapporté dans lecture.json |
| S3.P3 : les deux positions adverses, Weitzenhoffer et Guilford | section 6.3 du rapport, rapportée dans lecture.json ; les deux positions ne sont données que comme ce dont les auteurs se démarquent, et `limits` le borne |
| S4.P2 : les auteurs baptisent eux-mêmes le problème, et ce sont les propriétés d'unicité qui décident | « a third problem which we shall term the meaningfulness problem » (p. 108, `attribution_note` et `review`) ; 6.3, p. 121-122, sur l'unicité contre la nature des opérations |
| S5.P2 : la sortie, la tension du nécessaire non suffisant laissée ouverte, le texte de 1959 et la controverse | note 6, p. 111 ; renvoi à Suppes [1959] consigné dans la `review` ; « it has engendered considerable controversy », p. 108, dans lecture.json |

Aucun fait n'a été ajouté de mémoire, aucune citation nouvelle n'est entre guillemets : le seul passage cité reste la Definition 33, verbatim de l'enregistrement. Les verbatim anglais des `notes` sont rendus en discours rapporté, sans guillemets, parce qu'aucune traduction française n'en est portée par les sources.

## 4. Delta de chaque paragraphe de la version rendue

- **lead[0]** : la même paire de journées donne 10 % ou 15 % selon l'échelle. Inchangé, à l'exception de rien.
- **lead[1]** : le problème n'est pas arithmétique mais sémantique ; qui le pose, quand, et le critère en une phrase.
- **S1.P1** : ce qui se passe quand on change d'échelle (les deux échelles nomment les mêmes journées avec des nombres différents parce que zéro et graduation diffèrent) et le nom technique de ces réécritures.
- **S1.P2** : la frontière de l'admissible par contre-exemple : le carré est licite en arithmétique et n'est la lecture d'aucun instrument, la conversion Celsius donne ce qu'on aurait mesuré sur cette échelle.
- **S2.P1** : la formulation exacte des auteurs, la force du « si et seulement si », et un test applicable.
- **S2.P2** : ce que « a un sens » exclut ici, la significativité statistique et l'intelligibilité. Distinction neuve, elle défait le contresens le plus coûteux au moment où le terme vient d'être posé.
- **S3.P1** : le fait discriminant, une moyenne comparée passe là où un rapport échoue. L'idée d'opérations interdites par type d'échelle tombe.
- **S3.P2** : le mécanisme de ce contraste. C'est le paragraphe que l'audit réclamait : le lecteur ne sait plus seulement que c'est vrai, il voit pourquoi.
- **S3.P3** : la règle générale des auteurs, un second couple attesté, et la position polémique contre deux thèses nommées.
- **S4.P1** : les deux concessions, condition nécessaire non suffisante et problème non central, lié à l'usage des mesures.
- **S4.P2** : la place du problème dans une série de trois, la paternité du nom, et le fait que le troisième problème se règle par le deuxième.
- **S5.P1** : le critère hors de la météorologie, et ce qu'il oblige à faire avant de conclure sur une échelle dont on ignore les réécritures admissibles.
- **S5.P2** : ce que le critère ne fera pas, et deux endroits précis où le lecteur peut aller le chercher.

Aucune séquence de trois paragraphes ne partage un delta. Aucune section ne reprend principalement le travail d'une précédente : S5 ne généralise plus, elle transpose et ouvre.

## 5. Frontière interne

`limits` passe de trois à quatre paragraphes. Les deux premiers sont conservés (version révisée de 1963 non ouverte, correspondance de pagination non établie ; article de 1959 nommé par les auteurs). Deux sont nouveaux et sortent directement de cette révision :

- l'interdiction, désormais explicite, d'attribuer une forme ou une unicité aux transformations admissibles pour la température, et de prêter aux auteurs une définition de l'admissibilité ;
- la borne sur Weitzenhoffer et Guilford, connus uniquement par le résumé qu'en donnent Suppes et Zinnes, adossée à la limite déjà portée sur la réception ultérieure.

Rien de `limits` n'est remonté dans le texte lecteur : les quatre paragraphes nomment une source, un état d'accès et l'affirmation qu'ils interdisent, et le texte lecteur reste en deçà.

## 6. Contrôles

- Relecture paragraphe par paragraphe, delta formulé pour chacun : section 4 ci-dessus.
- Aucune section ne répète principalement une section antérieure.
- Aucun contenu de `limits` remonté en bloc visible.
- Citations : un seul passage entre guillemets de cinq mots ou plus, la Definition 33, verbatim de l'enregistrement validé ; le contrôle n'émet aucun avertissement.
- Typographie : guillemets français avec fines insécables U+202F, apostrophes typographiques, aucun tiret cadratin, aucun balisage.
- `npm run corpus:deepen -- --check --only=signification-et-invariance` : PASS.

Cette réécriture invalide tout fact-check antérieur : le SHA du texte a changé, la chaîne doit reprendre à PREPARE. Aucune validation pédagogique ni factuelle n'est déclarée ici.
