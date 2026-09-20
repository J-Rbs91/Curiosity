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

---

# Tour 2 — correction après le second FACTCHECK_FAIL

Tour : 2 sur les 2 autorisés, dernier tour.
Mode : FACTCHECK_FIX.

Gate d'entrée : `corpus/deepening-audits/work/inertie-structurelle-et-selection/factcheck-gate.json`
(`FACTCHECK_FAIL`, 61 claims, 60 `SUPPORTED`, 1 `TOO_STRONG`, `structural_errors` vide).
SHA de la version jugée : `c6bb2f8cbf4446352a13578baa56ecb8c6b2feb33d83dead7d1f47323e473060`,
c'est-à-dire exactement la version produite au tour 1.

Un seul échec, sémantique, et du même genre que les quatre du tour précédent : une portée plus forte
que celle du support. C'est le troisième affaiblissement de modal du lot. Correction de portée
uniquement : aucun support cherché après coup, aucun `SUP-...` ajouté, aucun artefact de fact-check
retouché.

## Matière relue

- `PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md` ;
- `corpus/deepenings/inertie-structurelle-et-selection.json` ;
- `factcheck-gate.json`, puis `verification.json` pour le seul claim fautif, `claim-map.json` pour
  son ancrage exact et `factcheck-pack.json` pour le texte du support résolu ;
- le dossier `corpus/evidence/inertie-structurelle-et-selection/` :
  `evidence.primary-reading.json` et `evidence.reception.json` (`scouting.json` écarté,
  PROTOCOLE §3), en particulier `$.evidence.mechanism[8..12]` pour lire la modalité dans son
  contexte d'argument.

## La correction

### C018 — `sections[1].paragraphs[1]`, offsets 0-72 — rétablissement de la modalité du support

Support unique proposé et résolu : `SUP-a5fdd6c3a3a8c09a`,
`evidence:evidence.primary-reading.json`, `$.evidence.mechanism[10]` :

> 11. Comment la reproductibilité est obtenue : « organizations attain reproducibility of structure
> through processes of institutionalization and by creating highly standardized routines » (p. 154).
> Renégocier chaque jour la structure serait concevable mais « seems unlikely ».

Reproche du verifier : le support porte une improbabilité jugée par les auteurs, explicitement
adossée à une possibilité concevable ; le texte lecteur en faisait un fait, « ne se renégocie pas
chaque matin ». La différence n'est pas de style : le support dit que la renégociation quotidienne
est pensable et que les auteurs la tiennent pour peu vraisemblable, pas qu'elle n'a pas lieu.

Geste : la proposition factuelle devient un jugement attribué aux auteurs, avec le degré exact du
support, « peu vraisemblable » pour « seems unlikely ». Le second membre de la phrase d'origine,
« ne va pas de soi », que le verifier ne contestait pas, est conservé mot pour mot et relié par
« pour autant », qui maintient l'opposition dont le paragraphe a besoin : ni renégociation
quotidienne, ni automatisme, donc deux voies d'obtention.

- avant : « Cette reproduction ne va pas de soi et ne se renégocie pas chaque matin. »
- après : « Hannan et Freeman jugent peu vraisemblable qu'une organisation renégocie chaque matin sa
  structure. Cette reproduction ne va pas de soi pour autant. »

Le membre « concevable » du support n'a pas été écrit explicitement : « jugent peu vraisemblable »
dit déjà que la chose est possible et improbable, et non impossible. Rien n'a été ajouté au-delà.

Ordre des deux propositions : l'inversion est délibérée et non cosmétique. La phrase suivante,
C019, commence par « Elle s'obtient par deux voies » et n'avait pas le droit d'être touchée. En
terminant sur « Cette reproduction ne va pas de soi pour autant », l'antécédent de ce « Elle » reste
immédiatement adjacent, ce qui n'aurait pas été le cas si la phrase s'était achevée sur
« sa structure ».

## Ce qui n'a pas été touché

Les 60 claims `SUPPORTED` sont intacts. En particulier C017, qui précède immédiatement dans
`sections[1].paragraphs[0]`, et C019, C020, C021, qui suivent dans le même paragraphe : aucun de
leurs empans n'a été modifié, déplacé mot à mot ou reformulé. Le `lead`, les sections 0, 2, 3, 4, 5
et les quatre entrées de `limits` sont inchangés. C'étant le dernier tour autorisé, aucune
amélioration d'opportunité n'a été faite ailleurs.

`limits` n'a pas été modifié : la frontière en cause était déjà couverte, et la correction porte sur
la modalité d'un énoncé, pas sur une frontière documentaire nouvelle. Aucun contenu de `limits` n'a
été remonté dans le texte lecteur.

## Contrôles

Delta du paragraphe retouché, revérifié : `sections[1].paragraphs[1]` explique comment la
reproduction quotidienne de la structure est obtenue, institutionnalisation et routines
standardisées, après que le paragraphe précédent a établi qu'elle est exigée. Delta inchangé, et
désormais introduit par le jugement des auteurs plutôt que par une affirmation catégorique. Aucun
paragraphe ne devient sans delta ni doublon d'un autre ; aucune section ne reprend principalement
le travail d'une précédente.

Typographie : aucun tiret cadratin, apostrophes typographiques, aucune citation entre guillemets
n'a été ajoutée ni déplacée.

Contrôle mécanique :

```
npm run corpus:deepen -- --check --only=inertie-structurelle-et-selection
1 approfondissement(s) contrôlé(s), 1944 mots. Rien projeté.
```

PASS. Texte lecteur (`lead` + `sections`) : 1 732 mots, contre 1 723 au tour précédent.

## Suite

Le fichier a changé, donc son SHA-256 a changé :

- ancien, jugé par le gate du tour 2 : `c6bb2f8cbf4446352a13578baa56ecb8c6b2feb33d83dead7d1f47323e473060`
- nouveau : `665bd0532b9b06ced1a71070bcc9697617a9c9b6fd09642340da37c8bcc82a81`

Le fact-check précédent est invalidé (`FACTCHECK_PROTOCOL.md` §6). L'orchestrateur reprend à
`PREPARE` : nouveau pack, nouveau claim map, nouveau bundle, nouveau gate. Aucun verdict n'est rendu
ici, ni `ACCEPT` ni `FACTCHECK_PASS`.
