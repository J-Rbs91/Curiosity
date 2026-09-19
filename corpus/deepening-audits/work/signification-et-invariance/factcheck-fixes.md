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
