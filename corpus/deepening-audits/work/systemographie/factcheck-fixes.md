# Correction factuelle — systemographie

concept : systemographie
mode : FACTCHECK_FIX, boucle 1 sur 2
gate d'entrée : `factcheck-gate.json`, `FACTCHECK_FAIL`, 63 claims, 58 soutenus, 5 en échec,
aucune erreur structurelle
matière autorisée : `corpus/validated/systemographie.json` seul
date : 2026-09-25

## État documentaire vérifié par moi

- `ls corpus/evidence/systemographie/` rend « No such file or directory ». Aucun dossier de preuve
  au format que `FACTCHECK_PROTOCOL.md` §3 ramasse ; le pack a bien vu `evidence_files: []`.
- `corpus/dossiers/systemographie.json` n'est pas ramassé par le pack. Je ne l'ai pas ouvert.
  **Rien n'entre de ce fichier dans cette correction**, en particulier pas les définitions
  formelles de l'homomorphie et de l'isomorphie des p. 76-77, qui sont précisément ce qui
  manquait aux trois claims en échec de S3.P1.
- Aucune recherche web. Aucun fait ajouté de mémoire. Aucun `SUP-...` fabriqué : je n'ai touché ni
  au pack, ni au bundle, ni à `verification.json`, ni au gate.
- `limits` n'est pas dans le pack de claims (`factcheck-pack.json`, `paragraphs` ne porte que
  `lead[*]` et `sections[*].paragraphs[*]`). Les retouches que j'y fais ne peuvent donc casser
  aucun claim ; elles mettent le registre interne d'accord avec le texte corrigé.

## Les cinq gestes, claim par claim

### C003 — `lead[1]` — `TOO_STRONG` — geste : `REMOVE`

Claim jugé : « Au lieu de demander si le dessin ressemble assez à la chose, il demande avec quel
instrument on l'a obtenu, et il décrit cet instrument comme on décrirait un appareil
photographique, avec son mode d'emploi. »

Motif du gate : les deux appuis (`review.notes[4]`, `notes[7]`) autorisent la description de
l'instrument, pas la substitution de question qu'on prête à l'auteur.

Ce que j'ai fait : la proposition subordonnée de substitution disparaît, et avec elle « il demande
avec quel instrument on l'a obtenu », qui n'était que l'autre moitié de la même bascule attribuée.
Ce qui reste est ce que les appuis portent : le chapitre décrit un instrument, sur le modèle d'un
appareil photographique, avec son mode d'emploi.

Avant : « … prend le problème par l'autre bout. Au lieu de demander si le dessin ressemble assez à
la chose, il demande avec quel instrument on l'a obtenu, et il décrit cet instrument comme on
décrirait un appareil photographique, avec son mode d'emploi. »

Après : « … prend le problème par l'autre bout : il décrit un instrument, comme on décrirait un
appareil photographique, avec son mode d'emploi. »

Pourquoi pas `NARROW` : il n'y a pas de version bornée de « au lieu de demander X, il demande Y ».
Le claim est une thèse sur le geste de l'auteur, et aucun appui ne dit ce que l'auteur cesse de
demander. Le borner aurait produit une formule plus prudente et toujours non portée.

Ce que je n'ai pas fait : je n'ai pas remplacé la clause par sa négation, « le chapitre ne demande
pas si le dessin ressemble ». L'absence d'appui n'établit pas le contraire. « Prend le problème par
l'autre bout » est conservé tel quel : ce membre n'était pas dans le claim en échec, il est le
raccord de `lead[0]` à `lead[1]`, et il ne dit rien du contenu du chapitre.

### C021 — `sections[1].paragraphs[3]` — `TOO_STRONG` — geste : `NARROW`

Claim jugé : « La correspondance stricte, celle qui ne tolère aucun reste, est donc réclamée du
côté de l'objet que nous avons fabriqué, et c'est au monde que s'applique la plus lâche. »

Motif du gate : la répartition est attestée, mais aucun appui ne caractérise l'homomorphie comme la
correspondance « la plus lâche ».

Ce que j'ai fait : un seul mot change de portée. « c'est au monde que s'applique la plus lâche »
devient « c'est au monde que s'applique l'autre ». La répartition, qui est ce que le gate déclare
attesté, est intégralement conservée ; la qualification comparative disparaît.

Effet sur le voisinage : `C019` et `C020`, dans le même paragraphe, ne sont pas touchés d'un
caractère. `C022` (« On aurait spontanément demandé l'inverse : de la rigueur envers l'hôpital, de
la souplesse envers nos constructions ») n'est pas touché non plus : il dit ce qu'un lecteur
attendrait, pas ce que l'auteur exige, et c'est ce que `review.notes[10]` soutient en nommant le
sens contre-intuitif.

### C023 — `sections[2].paragraphs[0]` — `TOO_STRONG` — geste : `REMOVE`

Claim jugé : « Que le modèle soit homomorphe de l'objet demande moins ».

Motif du gate : aucun appui ne compare la force logique des deux exigences, et `review.notes[11]`
dit plutôt le contraire, l'homomorphie y étant « difficile et a priori jamais parfaitement
validée ».

Ce que j'ai fait : le comparatif est retiré, pas borné. Le gate ne signale pas une imprécision de
degré : il signale un appui qui va dans l'autre sens. Un « demande peut-être moins » aurait gardé
la même affirmation sous une politesse. L'exigence elle-même est conservée, dans les termes de la
citation : le modèle doit être homomorphe « de l'objet à représenter ».

### C024 — `sections[2].paragraphs[0]` — `UNSUPPORTED` — geste : `REMOVE`

Claim jugé : « plusieurs traits de l'objet peuvent se retrouver ramassés dans un seul trait du
modèle, la correspondance va dans un sens et ne se rend pas. »

Motif du gate : aucun appui ne définit l'homomorphie, ni par le regroupement de plusieurs traits en
un seul, ni par le caractère unidirectionnel de la correspondance.

Ce que j'ai fait : la glose entière disparaît. C'est la conclusion à tirer de `limits[4]`, que la
passe précédente avait écrit elle-même : la matière disponible ne définit pas l'homomorphie et ne
la compare pas en force logique à la bijection. Elle porte deux choses, et seulement deux :
l'exigence, par `quotation.text`, et son sort, « difficile et a priori jamais parfaitement
validée », par `review.notes[11]` et `notes[0]`. Le texte s'en tient désormais à cela.

C023 et C024 occupant à eux deux la quasi-totalité de S3.P1, le paragraphe est réécrit court. La
troisième phrase, « On attendrait qu'une exigence si accommodante soit facile à satisfaire »,
tombe avec eux : « accommodante » est la même caractérisation non portée, sous un autre mot.

Avant (S3.P1) : « Que le modèle soit homomorphe de l'objet demande moins, et le mot dit en quoi :
plusieurs traits de l'objet peuvent se retrouver ramassés dans un seul trait du modèle, la
correspondance va dans un sens et ne se rend pas. On attendrait qu'une exigence si accommodante
soit facile à satisfaire. »

Après : « La seconde vérification ne porte pas sur l'appareil, mais sur l'objet : Le Moigne demande
que le modèle soit homomorphe « de l'objet à représenter ». Cette fois, c'est l'hôpital qui est en
jeu. »

Pourquoi le paragraphe n'est pas simplement supprimé : S3.P2 commence par « C'est pourtant celle-là
qui ne se termine jamais », claim `C025`, soutenu. Supprimer S3.P1 aurait privé « celle-là » de son
antécédent et m'aurait obligé à réécrire un claim soutenu. La phrase gardée existe pour porter cet
antécédent et pour rien d'autre : elle nomme la seconde vérification et sa cible, sans définir le
mot. Le « pourtant » s'appuie désormais sur ce que S2 a établi, une vérification qu'on peut
déclarer terminée, et sur la surprise que S2.P4 a déjà nommée.

Ce que le lecteur perd, et pourquoi c'est le bon prix : il n'apprend plus ce que « homomorphe »
veut dire formellement. Il apprend son rôle, la seconde des deux vérifications, sa cible, l'objet,
et son sort, jamais achevée. C'est exactement ce que les sources disponibles portent. Le définir
demanderait les p. 76-77, où renvoie l'index du volume (`review.notes[3]`), dont aucune source
disponible ici ne donne le libellé.

### C052 — `sections[4].paragraphs[1]` — `UNSUPPORTED` — geste : `REMOVE`

Claim jugé : « analyser, au sens classique, c'est découper un objet en parties simples pour les
examiner séparément, alors que la démarche décrite ici part d'un modèle entier qu'on ajuste. »

Motif du gate : `notes[8]`, seul appui, ne définit pas l'analyse cartésienne et ne dit pas que la
démarche part d'un modèle entier qu'on ajuste.

Ce que j'ai fait : la phrase est retirée, y compris son amorce « On peut comprendre le reproche
ainsi : ». `MARK_AS_INTERPRETATION` était déjà appliqué dans la version jugée, et le gate a refusé
quand même, à bon droit : marquer une interprétation ne dispense pas d'avoir de quoi l'interpréter.
Les deux propositions étaient deux définitions, l'une de l'analyse cartésienne, l'autre de la
démarche de Le Moigne, et `notes[8]` n'en porte aucune.

Ce qui reste : la citation que `notes[8]` porte mot pour mot, « ultime tentative de récupération de
l'analyse cartésienne », suivie de `C053`, soutenu, « Reprendre le mot aurait ramené par l'étiquette
ce que l'opération prétend quitter ». L'enchaînement se tient sans la définition intercalée.
`C051` n'est pas touché.

## Claims soutenus : ce que j'ai vérifié ne pas avoir touché

Les 58 claims soutenus sont intacts, à la réserve près que quatre paragraphes ont changé de
contenu. Paragraphe par paragraphe :

- `lead[1]` : `C002` et `C004` sont conservés caractère pour caractère. Seul le segment de `C003`
  est retiré.
- `sections[1].paragraphs[3]` : `C019`, `C020`, `C022` conservés caractère pour caractère. Un seul
  groupe nominal de `C021` est remplacé.
- `sections[2].paragraphs[0]` : le paragraphe ne portait que `C023` et `C024`, tous deux en échec.
  Aucun claim soutenu n'y vivait.
- `sections[4].paragraphs[1]` : `C051` et `C053` conservés caractère pour caractère. Seule la
  phrase de `C052` est retirée.

Aucun autre paragraphe du fichier n'est modifié. Les sections 1, 4 et 6 du texte lecteur, ainsi que
`lead[0]`, sont identiques à la version jugée.

## `limits`

`limits` n'entre pas dans le pack de claims et ne s'affiche pas au lecteur. Une seule mise à jour,
pour que le registre interne dise l'état réel du texte à l'agent suivant :

- `limits[4]` est réécrit. Il annonçait la glose de l'homomorphie comme le claim le plus exposé du
  texte ; cette glose n'existe plus, et un registre qui décrit une phrase disparue égare l'agent
  suivant. Il enregistre maintenant le fait utile en aval : les sources disponibles ici ne
  définissent pas l'homomorphie et ne comparent pas sa force logique à celle de la correspondance
  bijective, elles portent l'exigence et son sort, et le texte lecteur s'arrête donc au rôle du
  mot. La retenue est voulue, elle n'est pas un oubli à combler. La localisation des définitions,
  p. 76-77 par l'index du volume, est conservée : c'est elle qui dit où la frontière se lèverait.
- `limits[0]` à `limits[3]` sont conservés mot pour mot. Je les ai relus : aucun ne décrit une
  phrase que cette correction retire.

Aucun contenu de `limits` n'est remonté en bloc visible. Le texte lecteur reste `lead` +
`sections`.

## Volume et contrôles

- Texte lecteur : **1 490 mots avant, 1 417 après**. La correction raccourcit de 73 mots, dans la
  fourchette 1 300-1 700 de `PROTOCOLE.md` §5. Aucun mot n'a été ajouté pour compenser un retrait.
- `lead` : 171 mots avant, 151 après, dans la fourchette 120-200. `sections` : 1 319 avant,
  1 266 après.
- Structure inchangée : 6 sections, titres inchangés, paragraphes 2 / 4 / 3 / 4 / 2 / 3.
- Aucun tiret cadratin, aucun balisage, guillemets français avec espaces fines insécables,
  apostrophes typographiques.
- Toutes les citations restantes sont verbatim dans `quotation.text`, `notes` ou `review.notes` de
  `corpus/validated/systemographie.json`. Aucune citation n'a été introduite par cette passe.
- `npm run corpus:deepen -- --check --only=systemographie` : **PASS**
  (« 1 approfondissement(s) contrôlé(s), 1781 mots. Rien projeté. »), sans avertissement. Le
  décompte du script additionne `limits`, champ interne ; le volume lecteur est bien 1 417.

## Deltas des paragraphes retouchés

- `lead[1]` : un chapitre de Le Moigne décrit un instrument sur le modèle d'un appareil
  photographique, et son produit reçoit un nom propre. Delta conservé ; ce qui disparaît est une
  thèse sur le geste de l'auteur, pas un palier d'apprentissage.
- S2.P4 : la répartition des deux exigences est l'inverse de celle qu'on attendrait. Delta
  inchangé : il tenait à laquelle porte sur quoi, pas à la force comparée des deux.
- S3.P1 : il existe une seconde vérification, elle vise l'objet, et cette fois c'est l'hôpital qui
  est en jeu. Delta plus étroit que celui de la version jugée, et entièrement porté.
- S5.P2 : le second refus porte sur les noms courants de l'instrument, et reprendre le mot aurait
  ramené par l'étiquette ce que l'opération quitte. Le delta est intact : c'est `C051` et `C053`
  qui le portaient, pas la définition retirée.

Aucun paragraphe n'est resté sans delta. Aucune section ne répète principalement une section
antérieure.

Une tension subsiste, et je la déclare plutôt que de l'effacer : S3.P1 redit, en pivot, que
l'homomorphie vise l'objet, ce que S2.P4 a déjà dit en le citant. C'est le prix de ne pas toucher à
`C025`, dont le « celle-là » a besoin d'un antécédent dans le paragraphe précédent. Le paragraphe
est réduit à 33 mots pour que ce pivot ne coûte que ce qu'il vaut. Un audit pédagogique ultérieur
pourra juger s'il faut fondre S3.P1 dans S3.P2 ; cela demanderait de réécrire un claim soutenu, ce
qu'une correction factuelle n'a pas à faire.

## Suite

Le fichier a changé, donc le SHA a changé. `factcheck-pack.json`, `claim-map.json`,
`verification-bundle.json`, `verification.json` et `factcheck-gate.json` de cette boucle portent
tous le SHA `41354fe7…` et sont périmés. L'orchestrateur doit reprendre à `PREPARE`.

Je ne prononce ni `FACTCHECK_PASS` ni `ACCEPT` : le gate est la seule autorité sur l'état factuel
de cette version.
