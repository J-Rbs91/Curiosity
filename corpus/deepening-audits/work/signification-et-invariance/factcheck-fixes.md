concept : signification-et-invariance
mode : FACTCHECK_FIX (boucle 1 sur 2)
gate lu : corpus/deepening-audits/work/signification-et-invariance/factcheck-gate.json
verdict du gate : FACTCHECK_FAIL — 55 claims, 54 SUPPORTED, 1 en échec (C016, TOO_STRONG)

## 1. Le claim en échec

C016, dernière phrase de sections[0].paragraphs[1] (section « Ce qu'une échelle a le droit de changer », second paragraphe).

Texte fautif :

> La différence entre les deux réécritures n'est pas mathématique : l'une correspond à une manière réelle de mesurer, l'autre à rien.

Reproche du gate, confirmé par l'entrée C016 de verification.json : le seul support résolu (SUP-ea63ac6a) établit que « admissible » désigne les transformations autorisées par le type d'échelle. Il n'établit ni la classe des transformations admissibles pour une échelle de température, ni que la mise au carré ne correspondrait « à rien ». La prudence de la phrase précédente (« rien ne dit qu'une échelle de température produirait ces nombres-là », C014, SUPPORTED) basculait ici en assertion catégorique : l'absence de preuve était traitée comme preuve.

## 2. Nature de la correction

Type appliqué : **bornage** — la portée de la phrase est ramenée à ce que porte le support déjà résolu, sans retrait du paragraphe ni réattribution.

Texte rendu :

> La différence entre les deux réécritures ne se joue donc pas dans l'arithmétique : elle se joue dans ce que le type d'échelle autorise, et c'est précisément ce que le mot « admissible » sert à trancher.

Ce qui disparaît :

- « l'une correspond à une manière réelle de mesurer » : jugement d'existence sur la conversion, non porté comme tel ;
- « l'autre à rien » : jugement d'inexistence sur le carré, tiré d'un silence des sources.

Ce qui reste :

- le contraste entre arithmétique et admissibilité, qui est la fonction du paragraphe ;
- l'ancrage sur SUP-ea63ac6a, seul support résolu du passage : ce qui décide est le type d'échelle, et c'est le sens technique de « admissible » déjà posé au paragraphe précédent.

La phrase ne dit plus ce que le carré est ou n'est pas ; elle dit où se prend la décision. L'asymétrie reste lisible pour le lecteur parce que les deux phrases qui précèdent, toutes deux SUPPORTED (C014 et C015), la portent déjà : « rien ne dit qu'une échelle de température produirait ces nombres-là » d'un côté, le contrefactuel attribué aux auteurs de l'autre.

## 3. Périmètre

Une seule phrase modifiée dans tout le fichier. Aucune autre valeur touchée :

- `lead` inchangé ;
- sections[0].paragraphs[0] inchangé, sections[1] à sections[4] inchangées ;
- `limits` inchangé — le troisième paragraphe interdisait déjà d'attribuer une forme ou une classe de transformations admissibles pour la température, et couvre donc exactement la frontière que C016 franchissait. Aucune frontière nouvelle n'est découverte par cette correction.

Aucune affirmation nouvelle n'est introduite. Aucun support ID n'est invoqué dans le texte. Aucune citation nouvelle : le seul passage entre guillemets de cinq mots ou plus reste la Definition 33. Le mot « admissible » entre guillemets est repris à l'identique du paragraphe précédent, avec fines insécables U+202F.

Le delta du paragraphe est conservé : la frontière de l'admissible montrée par contre-exemple, le carré licite en arithmétique, la conversion présentée par les auteurs comme ce qu'on aurait mesuré. Seule la conclusion du paragraphe cesse de surqualifier ce contre-exemple.

## 4. Contrôle

`npm run corpus:deepen -- --check --only=signification-et-invariance`
→ 1 approfondissement contrôlé, 1 818 mots, rien projeté. Aucune erreur, aucune citation signalée. PASS.

Volume : 1 802 → 1 818 mots comptés (+16, la phrase de remplacement est plus longue de seize mots que celle qu'elle borne).

## 5. Suite

La modification du deepening invalide le SHA candidat `41e2b1d2b68b0c21aceb9285c72e8949e813d882cd2f67b5b940a8edd744e399` : factcheck-gate.json et verification.json portent encore l'ancien état et ne doivent pas être édités. La chaîne doit reprendre à PREPARE.

Aucun FACTCHECK_PASS n'est déclaré ici, aucune auto-validation pédagogique ou factuelle.


---

concept : signification-et-invariance
mode : FACTCHECK_FIX (boucle 2 sur 2, dernière)
gate lu : corpus/deepening-audits/work/signification-et-invariance/factcheck-gate.json
verdict du gate : FACTCHECK_FAIL — 58 claims, 57 SUPPORTED, 1 en échec (C030, TOO_STRONG)

## 1. Le claim en échec

C030, locator sections[2].paragraphs[1], offsets 154-300.

Texte fautif :

> le passage d’une échelle à l’autre ne renverse pas l’ordre des mesures, puisque 110 dépasse 100 en Fahrenheit et que 43,3 dépasse 37,8 en Celsius.

Reproche du gate, confirmé par l’entrée C030 de verification.json : aucun support n’établit que les transformations d’échelle admissibles préservent l’ordre des mesures. Les deux supports résolus (SUP-98d72b4f60715313, SUP-106c334769abc2bc) ne portent que les quatre nombres de l’exemple Fahrenheit/Celsius, p. 109. La phrase énonçait au présent général une propriété de tout passage d’échelle à partir de ce seul cas, et fournissait du même coup une justification de la signification de l’exemple 2 (comparaison des moyennes de janvier et février, p. 115) que les supports ne donnent pas : ils déclarent l’exemple 2 doué de sens, ils n’en produisent pas la raison.

## 2. Nature de la correction

Type appliqué : **bornage à l’exemple**. La phrase ne parle plus de « passage d’une échelle à l’autre » en général, mais de ce qui se lit sur les quatre nombres déjà donnés au lecteur dans le lead.

Texte rendu :

> Comparer deux moyennes, c’est demander laquelle est la plus grande ; or, sur les quatre nombres de nos deux journées, l’ordre ne bouge pas d’une écriture à l’autre : 110 dépasse 100 en Fahrenheit, et 43,3 dépasse 37,8 en Celsius.

Ce qui disparaît : le présent général « le passage d’une échelle à l’autre ne renverse pas l’ordre des mesures », c’est-à-dire la quantification universelle sur les transformations d’échelle.

Ce qui reste : l’observation arithmétique sur les quatre valeurs portées par SUP-98d72b4f60715313, et le contraste entre ce que demande une comparaison et ce que demande un rapport, qui est le delta du paragraphe.

Aucune affirmation nouvelle n’est introduite ; aucun support ID n’est invoqué dans le texte ; aucune citation nouvelle.

## 3. Relecture du paragraphe entier

Le remapping redécoupera le texte : les autres phrases du même paragraphe ont donc été relues pour la même faute.

- « Le contraste s’éclaire quand on regarde ce que chaque énoncé demande aux nombres. » : phrase de cadrage, aucune assertion factuelle. Inchangée.
- C031, « La question reçoit donc la même réponse des deux côtés. » : le « donc » s’appuyait sur une prémisse générale qui vient d’être bornée ; la phrase, lue seule après remapping, pouvait à son tour se lire comme une propriété générale de toute comparaison de moyennes. Elle est bornée elle aussi : « Pour cette paire-là, la question reçoit la même réponse des deux côtés. » La version rendue est strictement plus faible que celle qui était SUPPORTED.
- C032, « Un rapport, lui, ne demande pas laquelle est la plus grande mais combien de fois, et pour répondre à cela il faut compter depuis le zéro de l’échelle » : dérivation arithmétique non attribuée aux auteurs, SUPPORTED à ce titre, sans généralisation tirée d’un cas. Inchangée.
- C033, « ce zéro, les deux écritures de la même journée viennent de le montrer, n’est pas au même endroit d’une échelle à l’autre » : déjà explicitement ancrée sur l’exemple, et non l’inverse. Inchangée.
- C034, « L’opération n’est pas en cause ; ce qui l’est, c’est ce que l’énoncé fait dépendre d’une convention. » : reformulation de la règle que les auteurs énoncent eux-mêmes en général (« The admissibility of any mathematical operation depends not only on the scale type […] but on the entire numerical statement of which the operation is a part »). Elle ne généralise pas depuis un cas unique : elle rapporte une généralité portée par les supports. Inchangée.

## 4. Périmètre

Deux phrases modifiées dans le texte lecteur, toutes deux dans sections[2].paragraphs[1]. `lead` inchangé, toutes les autres sections inchangées.

`limits` : une frontière nouvelle a été découverte par cette correction, et elle est consignée au troisième paragraphe, à la suite de la frontière déjà écrite sur la forme des transformations admissibles. Les sources ne disent pas que ces transformations préserveraient l’ordre des mesures ; sur ce point seuls les quatre nombres de l’exemple sont disponibles. Ce paragraphe reste un garde-fou interne : rien n’en est remonté dans le texte lecteur.

## 5. Contrôle

`npm run corpus:deepen -- --check --only=signification-et-invariance`
→ 1 approfondissement contrôlé, 1 858 mots, rien projeté. Aucune erreur, aucune citation signalée. PASS.

Répartition : 1 539 mots de texte lecteur (212 de lead, 1 327 de sections), dans la cible ; 319 mots de `limits`, non affichés.

## 6. Suite

La modification du deepening invalide le SHA candidat `97999fb8252a689484e703d2b89e5ef75ab064c8338e7e3c95b756ca311b0791` : factcheck-gate.json et verification.json portent encore l’ancien état et n’ont pas été édités. La chaîne doit reprendre à PREPARE.

Aucun FACTCHECK_PASS n’est déclaré ici, aucune auto-validation pédagogique ou factuelle.
