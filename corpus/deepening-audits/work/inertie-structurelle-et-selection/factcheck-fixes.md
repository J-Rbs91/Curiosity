# Correction après FACTCHECK_FAIL — inertie-structurelle-et-selection

Tour : 1 sur les 2 autorisés.
Mode : FACTCHECK_FIX.

Gate d'entrée : `corpus/deepening-audits/work/inertie-structurelle-et-selection/factcheck-gate.json`
(`FACTCHECK_FAIL`, 67 claims, 63 `SUPPORTED`, 4 `TOO_STRONG`, `structural_errors` vide).
SHA de la version jugée : `900d4673597cb7afe5f4ddd34e33f266d11a2f5627cad81bfc6c47bb3a9c70a7`.

Aucun `structural_error` : les quatre échecs sont tous sémantiques, et tous du même genre, une
portée plus large que celle du support. La correction est donc de portée, jamais d'appui : aucun
support n'a été cherché après coup, aucun `SUP-...` n'a été ajouté, aucun artefact de fact-check
n'a été touché.

## Matière relue

- `PROTOCOLE.md`, `FACTCHECK_PROTOCOL.md` ;
- `corpus/deepenings/inertie-structurelle-et-selection.json` ;
- `factcheck-gate.json`, puis `verification.json` pour les quatre claims fautifs ;
- `verification-bundle.json`, pour lire le texte exact des supports que le verifier avait sous les
  yeux quand il a tranché ;
- le dossier `corpus/evidence/inertie-structurelle-et-selection/` : `evidence.primary-reading.json`
  et `evidence.reception.json` (`scouting.json` écarté, PROTOCOLE §3).

Les quatre corrections se lisent toutes dans les supports déjà résolus par le pack. Aucune n'a
demandé d'ouvrir une matière nouvelle, et rien n'a été ajouté de mémoire.

## Les quatre corrections

### C003 — `lead[1]` — retrait d'une attribution professionnelle

Reproche : les supports établissent les noms (`validated $.authors[0..1]`), la coécriture
(`evidence.primary-reading $.attribution_input.authorship` = `COAUTHORED`) et le rattachement à
l'écologie des populations (`validated $.attribution_note`), mais rien n'attribue aux deux auteurs
la qualité de sociologues.

Geste : retrait du seul qualificatif. Le claim devient exactement ce que les supports portent, les
deux noms.

- avant : « Les sociologues Michael Hannan et John Freeman ont pris ces deux attentes au sérieux »
- après : « Michael Hannan et John Freeman ont pris ces deux attentes au sérieux »

Le `lead` ne perd rien de son travail : ce qui y portait la compréhension était les deux attentes
et leur coût, pas la discipline des auteurs. Rien n'a été ajouté pour compenser le mot retiré, en
particulier pas un rattachement disciplinaire de remplacement qui aurait rouvert la même question.

### C019 — `sections[1].paragraphs[0]` — suppression d'un agent inventé, retour à la forme négative

Reproche : deux glissements dans une même phrase. Le support
(`$.evidence.mechanism[7]` et `$.evidence.common_misinterpretations[4].why_wrong`) est une réserve
prudente et négative, « it is not obvious that a permanent organization has any technical
advantage », posée du point de vue d'une action collective unique et complexe. Le texte en faisait
une affirmation positive (« ne demande rien de particulier ») et y ajoutait un acteur que les
supports ne connaissent pas (« il suffit qu'une personne compétente traite un cas avec soin »).

Geste : l'agent non documenté disparaît, et la phrase reprend la forme négative du support ainsi
que sa restriction au cas de l'action isolée.

- avant : « Obtenir ce résultat une fois ne demande rien de particulier : il suffit qu'une personne
  compétente traite un cas avec soin. L'obtenir de façon répétée, … »
- après : « Pour une action isolée, même complexe, Hannan et Freeman remarquent qu'il n'est pas
  évident qu'une organisation permanente offre un avantage technique. Obtenir le même résultat de
  façon répétée, … »

La bascule pédagogique du paragraphe, une fois contre de façon répétée, est conservée : c'est elle
qui prépare la reproduction continue de la structure au paragraphe suivant. Ce qui change est que
le premier terme de l'opposition est maintenant porté par les auteurs et non par un exemple fabriqué
pour les besoins de la phrase. La reprise anaphorique a été ajustée en conséquence (« le même
résultat » au lieu de « l'obtenir ») pour que le paragraphe reste lisible.

### C033 — `sections[2].paragraphs[2]` — resserrement d'une concession

Reproche : le support (`$.evidence.common_misinterpretations[1].why_wrong`) cite
« organizational changes of some kinds occur frequently ». La concession des auteurs vise certains
types de changements, et le texte l'élargissait à « des changements de toutes sortes », précisément
là où l'article distingue noyau et périphérie. Le verifier note que la seconde moitié de la phrase
était, elle, exacte, et elle n'a pas été touchée.

Geste : « de toutes sortes » devient « de certains types ». Trois mots.

La correction est plus qu'orthographique du point de vue de l'argument : la section qui suit
(« Ce qui résiste et ce qui se remanie ») est justement celle qui montre que la résistance se
distribue. Une concession universelle y contredisait le paragraphe suivant ; la concession restreinte
l'annonce.

### C056 — `sections[4].paragraphs[2]` — retrait d'un énoncé universel non porté

Reproche : les supports établissent que l'inertie n'est ni voulue ni une précondition (Theorem 1,
`$.evidence.mechanism[14]`, et `$.evidence.translation_notes[4].note`), et que la condition minimale
est qu'une partie de la population initiale ait une forte reproductibilité et que les pressions
soient « reasonably strong » (`$.evidence.conditions.appears_when[2]`). Rien n'autorise en revanche
le second membre, « aucune ne décide non plus de devenir fiable » : les auteurs font venir la
fiabilité de l'institutionnalisation et des routines standardisées, sans nier qu'elle puisse être
recherchée.

Geste : le membre non porté est retiré, et remplacé par ce que les supports disent réellement, la
conséquence plutôt que la précondition, puis la condition minimale du théorème.

- avant : « Aucune organisation ne décide de devenir inerte ; aucune ne décide non plus de devenir
  fiable : ce sont celles qui l'étaient déjà que leur environnement maintient plus volontiers en
  vie. »
- après : « Aucune organisation ne décide de devenir inerte : l'inertie est ici une conséquence de
  la sélection plutôt qu'une condition de départ. Il suffit que certaines organisations de la
  population initiale se reproduisent déjà fidèlement et que les pressions de sélection soient assez
  fortes, pour que ce soient celles-là que leur environnement maintienne plus volontiers en vie. »

Le premier membre est conservé tel quel : le verifier ne le contestait pas, et il est explicitement
porté par la note de traduction. La clause finale conservée dit maintenant de qui il s'agit (celles
qui se reproduisent fidèlement) et non plus de quoi (fiables et inertes à la fois), ce qui était le
point exact où l'énoncé débordait.

## Ce qui n'a pas été touché

Les 63 claims `SUPPORTED` sont intacts, y compris ceux qui bordent les passages corrigés dans les
mêmes paragraphes. `lead[0]`, les sections 0, 3 et 5, et les quatre entrées de `limits` sont
inchangés. Aucune amélioration d'opportunité n'a été faite sur ce tour.

`limits` n'a pas été modifié : les quatre corrections portent sur la portée d'énoncés dont la
frontière documentaire était déjà correctement décrite. Aucune n'a fait apparaître une frontière
nouvelle qui manquerait aux agents suivants. Aucun contenu de `limits` n'a été remonté dans le texte
lecteur.

## Contrôles

Delta de chaque paragraphe retouché, revérifié après correction :

- `lead[1]` : pose la question des auteurs, ce que coûtent les deux attentes. Inchangé.
- `sections[1].paragraphs[0]` : distingue l'obtention unique de l'obtention répétée, et fait de la
  seconde le lieu de la reproduction de structure. Delta conservé, et désormais adossé aux auteurs.
- `sections[2].paragraphs[2]` : borne le mot inertie, forte inertie ne veut pas dire immobilité.
  Delta inchangé, concession resserrée.
- `sections[4].paragraphs[2]` : dissocie ce que la sélection vise de ce qu'elle emporte avec. Delta
  inchangé ; la phrase finale explicite maintenant la condition minimale du théorème, ce qui ajoute
  un cran de précision sans ajouter de palier.

Aucun paragraphe ne se retrouve sans delta ni en doublon d'un autre après ces retouches ; aucune
section ne reprend principalement le travail d'une précédente.

Typographie : aucun tiret cadratin, apostrophes typographiques, aucune citation entre guillemets
n'a été ajoutée ou déplacée.

Contrôle mécanique :

```
npm run corpus:deepen -- --check --only=inertie-structurelle-et-selection
1 approfondissement(s) contrôlé(s), 1936 mots. Rien projeté.
```

PASS. Texte lecteur (`lead` + `sections`) : 1 723 mots, dans la fourchette visée.

## Suite

Le fichier a changé, donc son SHA-256 a changé :

- ancien, jugé par le gate : `900d4673597cb7afe5f4ddd34e33f266d11a2f5627cad81bfc6c47bb3a9c70a7`
- nouveau : `c6bb2f8cbf4446352a13578baa56ecb8c6b2feb33d83dead7d1f47323e473060`

Le fact-check précédent est donc invalidé (`FACTCHECK_PROTOCOL.md` §6). L'orchestrateur reprend à
`PREPARE` : nouveau pack, nouveau claim map, nouveau bundle, nouveau gate. Aucun verdict n'est rendu
ici, ni `ACCEPT` ni `FACTCHECK_PASS`.
