# Correction après FACTCHECK_FAIL

concept : objectif-specifique-et-difficile
gate lu : `corpus/deepening-audits/work/objectif-specifique-et-difficile/factcheck-gate.json`
(verdict FACTCHECK_FAIL, 54 claims, 47 SUPPORTED, 7 échecs : 4 TOO_STRONG, 2 SOURCE_NOT_CONSULTED,
1 CONFLICT)

Aucune recherche, aucune source nouvelle, aucun `SUP-...` invoqué. Les seuls gestes employés sont
REMOVE, NARROW, REATTRIBUTE, MARK_AS_INTERPRETATION. Rien n'a été touché en dehors des empans
nommés par le gate, à deux exceptions internes signalées en fin de compte rendu (`limits`).

## C012 — TOO_STRONG — geste : NARROW

`sections[0].paragraphs[1]`

Avant : « La précision seule ne suffit pas. Chiffrer une exigence sans la relever revient à peu près
à ne rien chiffrer du tout, et c'est exactement le compromis que l'on croit prudent. »

Après : « La précision seule ne suffit pas, et le compromis que l'on croit prudent, chiffrer sans
relever la barre, est justement l'un des termes que la cible haute devance. »

Raison : les supports n'établissent qu'une hiérarchie (spécifique difficile > spécifique facile,
« do best », aucun objectif assigné). La quasi-équivalence entre objectif spécifique facile et
absence de chiffre n'y est nulle part. La phrase est ramenée à ce que la hiérarchie autorise :
l'objectif chiffré mais bas est un des termes battus, sans énoncé d'équivalence. Le delta du
paragraphe (le compromis prudent est du côté perdant) est conservé ; aucune matière nouvelle n'a
été ajoutée pour compenser.

## C032 — TOO_STRONG — geste : REMOVE

`sections[2].paragraphs[1]`

Avant : « La cible précise et raisonnable, celle que retient d'ordinaire une organisation soucieuse
de ne décourager personne, tombe dans la zone où l'écart avec un simple encouragement cesse d'être
garanti. »

Après : « La cible précise et raisonnable tombe dans la zone où l'écart avec un simple
encouragement cesse d'être garanti. »

Raison : seule l'apposition était en cause. Elle généralisait sur la pratique des organisations,
ce qu'aucun support ne porte. Elle est retirée sans remplacement ; la conséquence de la réserve
sur les objectifs modérés, elle, reste appuyée par le passage de la conclusion déjà cité au
paragraphe précédent. Le paragraphe se clôt plus court, il ne se remplit pas.

## C047 — TOO_STRONG — geste : REMOVE

`sections[4].paragraphs[1]`

Avant : « On cite volontiers la version du résumé, parce qu'elle est courte. »

Après : « On cite volontiers la version du résumé. »

Raison : `review.notes[1]` établit que la formulation la plus répandue est proche du résumé, et
rien d'autre. L'explication causale par la brièveté est ajoutée au dossier : elle disparaît. Le
fait de circulation, lui, reste appuyé.

## C050 — TOO_STRONG — geste : NARROW (suppression de la genèse causale)

`sections[4].paragraphs[2]`

Avant : « C'est ce qui est arrivé à la formule lisse qui circule aujourd'hui sous les noms de Locke
et Latham, et qui n'est déjà plus celle de la page 59. »

Après : « La formule lisse qui circule aujourd'hui sous les noms de Locke et Latham n'est déjà plus
celle de la page 59. »

Raison : `notes[2]` rattache la formule circulante « très probablement » à l'article de 1981 ou au
livre de 1990, et non à un détachement de la tête de phrase de l'Abstract. « C'est ce qui est
arrivé » installait une filiation que le dossier n'établit pas. Ne reste que le constat de
divergence, qui est, lui, documenté. Le paragraphe précédent garde intact son analyse
grammaticale de l'Abstract, qui n'était pas contestée : elle n'est simplement plus présentée comme
la cause de la formule qui circule.

## C052 — SOURCE_NOT_CONSULTED — geste : REMOVE
## C053 — SOURCE_NOT_CONSULTED — geste : REMOVE

`sections[4].paragraphs[2]`

Avant : « D'où vient-elle au juste ? Les quatre mêmes signatures publient l'année suivante dans
Psychological Bulletin, et un ouvrage a suivi en 1990 : c'est là que se lisent les termes exacts
qu'on leur prête. »

Après : phrase entièrement retirée.

Raison : `notes[6]` déclare expressément que ni l'article de 1981 ni le livre de 1990 n'ont été
ouverts, et `notes[2]` ne les désigne que comme origine « très probable ». Une source non
consultée n'autorise aucune phrase sur ce qu'elle contient : « c'est là que se lisent les termes
exacts » présentait comme lu un texte jamais ouvert, et la mention incidente d'un ouvrage de 1990,
sans titre, sans auteurs, sans notice, ne pouvait pas non plus être servie au lecteur.

La question « D'où vient-elle au juste ? » et la mention de la publication de 1981 (C051, pourtant
SUPPORTED) tombent avec elles, pour une raison documentaire et non par retouche gratuite : une
fois la réponse retirée, la question restait ouverte sans réponse, et la seule mention de l'article
de 1981 immédiatement après le constat de divergence rétablissait par juxtaposition exactement
l'insinuation de genèse que C050 et C053 interdisent. Conformément à la consigne, l'ouverture est
absente plutôt que fondée sur un texte non ouvert. Le renvoi au texte à lire subsiste là où il est
légitime, dans `limits`, et sous la forme prudente que les notes autorisent.

## C054 — CONFLICT — geste : NARROW

`sections[4].paragraphs[2]`

Avant : « … une conclusion ne démontre rien, elle récapitule, et ce qu'elle récapitule ici tient
dans les quatre-vingt-dix pages qui la précèdent. »

Après : « … une conclusion ne démontre rien, elle récapitule, et ce qu'elle récapitule ici tient
dans les pages qui la précèdent. »

Raison : contradiction interne, et non durcissement. La conclusion citée est à la p. 59 d'un texte
folioté p. 1 à p. 90 (`notes[7]`) : cinquante-huit pages la précèdent, pas quatre-vingt-dix. Le
décompte est retiré, la relation conclusion/corps est conservée. Le dossier ne permet pas de
chiffrer autrement sans compter les feuillets liminaires et les tableaux non foliotés, ce que la
lecture déclare expressément ne pas avoir fait.

Texte final du paragraphe : « La formule lisse qui circule aujourd'hui sous les noms de Locke et
Latham n'est déjà plus celle de la page 59. Reste la question que cette page ne traite pas, celle
du pourquoi : une conclusion ne démontre rien, elle récapitule, et ce qu'elle récapitule ici tient
dans les pages qui la précèdent. »

## Frontières consignées dans `limits` (champ interne, jamais une section visible)

Deux corrections internes, toutes deux appelées par les échecs ci-dessus, parce que `limits`
portait la formulation même qui a produit la faute et l'aurait reproduite au tour suivant :

1. `limits[0]` affirmait que l'article de 1981 et l'ouvrage de 1990 « portent les termes qu'on leur
   prête ». Ramené au statut réel du dossier : l'origine des termes exacts reste à établir,
   l'article de 1981, seul titre pourvu d'une notice résolue, en est le candidat le plus
   vraisemblable. L'ouvrage de 1990, dont aucune notice n'existe dans le dossier, n'y est plus
   nommé.
2. `limits[3]` reprenait le décompte fautif des « quatre-vingt-dix pages qui la précèdent ». Même
   correction que C054.

`limits` n'a reçu aucun contenu nouveau et n'a été remonté nulle part dans le texte visible.

## Contrôles

- Relecture paragraphe par paragraphe : aucun paragraphe vidé de son delta par les retraits.
  `sections[2].paragraphs[1]` et `sections[4].paragraphs[2]` sont plus courts et conservent chacun
  leur apport propre ; aucune reformulation n'a été ajoutée pour compenser la longueur perdue.
- Aucune affirmation nouvelle introduite en remplacement d'une affirmation retirée.
- Aucun `support_id`, aucune citation, aucune page, aucune date nouvelle.
- `npm run corpus:deepen -- --check --only=objectif-specifique-et-difficile` :
  « 1 approfondissement(s) contrôlé(s), 1689 mots. Rien projeté. » PASS.

Le SHA du texte a changé : le fact-check précédent est caduc et le cycle doit reprendre à
`PREPARE`. Aucune auto-validation n'est prononcée ici.
