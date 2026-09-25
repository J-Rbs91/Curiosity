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

---

# Correction factuelle — systemographie — boucle 2 sur 2

concept : systemographie
mode : FACTCHECK_FIX, boucle 2 sur 2 (dernière)
gate d'entrée : `corpus/deepening-audits/work/systemographie/factcheck-gate.json`, `FACTCHECK_FAIL`,
74 claims, 73 soutenus, 1 en échec, aucune erreur structurelle
candidat jugé : `candidate_sha256` `2a7f45fe…`
matière autorisée : `corpus/validated/systemographie.json` seul
date : 2026-09-25

## État documentaire revérifié par moi à cette passe

- `ls corpus/evidence/systemographie/` rend « No such file or directory ». Aucun dossier de preuve.
  Le pack confirme `evidence_files: []`.
- `corpus/dossiers/systemographie.json` n'est pas ramassé par le pack ; je ne l'ai pas ouvert, rien
  n'en entre ici. En particulier, aucune définition formelle des p. 76-77 n'a été mobilisée.
- Aucune recherche web. Aucun fait ajouté de mémoire. Aucun `SUP-...` fabriqué. Je n'ai touché ni au
  pack, ni à `claim-map.json`, ni au bundle, ni à `verification.json`, ni au gate.
- `factcheck-pack.json` ne porte que `lead[*]` et `sections[*].paragraphs[*]` : `limits` reste hors
  du pack de claims, vérifié à nouveau à cette passe.

## Le geste unique : C026 — `sections[1].paragraphs[3]` — `UNSUPPORTED` — `REMOVE`

Claim jugé : « de la rigueur envers l'hôpital, de la souplesse envers nos constructions ».
`supports: []` dans le bundle : aucun appui, pas même un appui faible à border.

Motif du gate : la glose de « l'inverse » attribue par contrecoup la souplesse à l'exigence tournée
vers l'objet, ce que rien du bundle n'établit et que `review.notes[11]` contrarie, l'homomorphie y
étant « difficile et a priori jamais parfaitement validée ». C'est le comparatif de rigueur déjà
refusé au tour précédent sous « la plus lâche » et « demande moins », revenu sous une troisième
formulation que le gate d'alors n'avait pas nommée parce qu'aucun de ses claims ne la portait.

Ce que j'ai fait : la glose disparaît entièrement, avec le deux-points qui l'introduisait.

Avant : « On aurait spontanément demandé l'inverse : de la rigueur envers l'hôpital, de la souplesse
envers nos constructions. »

Après : « On aurait spontanément demandé l'inverse. »

Pourquoi `REMOVE` et non `NARROW` : ce qui est en cause n'est pas le degré de deux mots, c'est la
**comparaison**. « une moindre exigence », « une contrainte plus légère », « un peu plus de
souplesse » rangeraient encore les deux exigences l'une par rapport à l'autre en force et auraient
exactement le même défaut. Il n'existe pas de version bornée d'un classement dont aucun terme n'est
attesté.

Pourquoi pas `MARK_AS_INTERPRETATION` : je l'ai constaté sur `C052` à la passe précédente, où
l'amorce « On peut comprendre le reproche ainsi : » n'a rien sauvé. Marquer une interprétation ne
crée pas l'appui qui manque, et ici il n'y a pas d'appui du tout.

Pourquoi je n'ai pas écrit le contraire : je n'ai pas remplacé la glose par « de la souplesse envers
l'hôpital, de la rigueur envers nos constructions », ni par une formule d'égale force du genre « ni
l'une ni l'autre n'est plus exigeante ». L'absence d'appui n'établit rien dans aucun sens. Aucun
jugement de force relative n'entre à la place de celui qui sort.

Ce qui est conservé, parce que le gate le déclare attesté : la répartition elle-même, quelle
exigence porte sur quoi, et le fait qu'elle surprenne. `C021` (« La façon dont les deux exigences se
répartissent a de quoi surprendre »), `C022` (la citation), `C023` (« La correspondance stricte […]
réclamée du côté de l'objet que nous avons fabriqué »), `C024` (« et c'est au monde que s'applique
l'autre ») et `C025` (« On aurait spontanément demandé l'inverse ») sont conservés caractère pour
caractère. `C025` garde son antécédent : « l'inverse » renvoie à la phrase qui précède
immédiatement, et il est porté par `review.notes[10]`, « on attendrait l'isomorphie du côté de
l'objet », qui dit une attente de répartition et non un classement de force.

## Relecture intégrale à la recherche d'une troisième formulation

J'ai relu `lead` et les six sections phrase par phrase, en cherchant la caractérisation de rigueur
ou de souplesse relative sous les formes qui n'emploient ni « lâche », ni « souple », ni « moins » :
un « il suffit que », un « seulement », un « en revanche », un « facile » appliqué par contraste,
une concessive qui oppose une exigence forte à une exigence faible. Ce que j'ai examiné et pourquoi
je l'ai laissé :

- S2.P1, « que chaque propriété de l'un ait son répondant exact dans l'autre, terme pour terme, sans
  reste d'un côté ni de l'autre » (`C015`) : caractérise la seule isomorphie, sur la « correspondance
  bijective » de `review.notes[11]`. Ne dit rien de l'homomorphie, donc ne la classe pas.
- S2.P2 : « La vérification de l'isomorphie sera facile » est dans les guillemets, mot de l'auteur
  cité verbatim depuis `review.notes[11]`. « Facile » y qualifie une vérification, pas la force
  d'une exigence, et ce n'est pas ma voix.
- S2.P3, « ce contrôle sans mystère » (`C020`) : porte sur le caractère fini du balayage d'une liste
  connue par construction. Registre de la terminaison, attesté pour les deux vérifications en sens
  opposé, et non de l'exigence comparée.
- S2.P4, « La correspondance stricte, celle qui ne tolère aucun reste » (`C023`) : qualifie
  l'isomorphie sur un appui explicite, et laisse l'autre exigence nommée « l'autre », sans
  qualificatif. C'est précisément le `NARROW` de la boucle 1, que le gate a validé cette fois-ci. Le
  laisser est ce qui distingue une répartition attestée d'un classement : un seul terme est
  caractérisé, et il l'est par sa source.
- S3.P2 « C'est pourtant celle-là qui ne se termine jamais » et S3.P3 : registre de la terminaison,
  cité et attesté ; aucune comparaison de force.
- S4.P2, « chacun se laisse rapporter à des traits observables de l'établissement, donc la seconde ne
  rejette ni l'un ni l'autre » (`C042`) : c'est la forme la plus proche d'un « il suffit que », et je
  l'ai instruite avant de la laisser. Elle ne compare pas les deux exigences : elle tire la
  non-exclusion de la conclusion que l'auteur tire lui-même, « toutes homomorphes de cet objet et
  toutes isomorphes du Système Général » (`review.notes[12]`), et les « traits observables » viennent
  de la « correspondance homomorphique du modèle avec les traits perçus du phénomène » de Pesqueux
  (`review.notes[7]`). Deux appuis, aucun jugement de force.
- `lead[0]`, `lead[1]`, S1, S5, S6 : rien qui range les deux exigences l'une par rapport à l'autre.

**Conclusion de la relecture : aucune quatrième occurrence trouvée.** La caractérisation comparative
ne vivait plus qu'en un seul endroit du texte lecteur, celui que le gate a nommé, et il est retiré.
Après cette passe, le texte ne qualifie en force que l'isomorphie, et seulement là où une source le
porte ; il ne qualifie l'homomorphie que par son sort, jamais parfaitement validée, qui est cité.

## Claims soutenus

Les 73 claims soutenus sont intacts. Un seul paragraphe change, `sections[1].paragraphs[3]`, et il y
perd exactement le segment de `C026` : le point final remonte après « l'inverse ». Aucun autre
caractère du fichier ne bouge, hors `limits` ci-dessous. `lead` et les sections 1, 3, 4, 5, 6 sont
identiques à la version jugée.

## `limits`

`limits` n'entre pas dans le pack de claims et ne s'affiche pas au lecteur. Une seule phrase ajoutée
à `limits[4]`, pour que l'agent suivant ne réintroduise pas ce qui vient d'être retiré trois fois :
la matière disponible ne permet aucun classement en force des deux exigences, dans aucun sens, et le
texte lecteur ne doit pas en porter, pas même sous une formule qui évite les mots.

`limits[0]` à `limits[3]` sont conservés mot pour mot. Aucun contenu de `limits` n'est remonté en
bloc visible ; le texte lecteur reste `lead` + `sections`.

## Delta du paragraphe retouché

S2.P4 : la répartition des deux exigences est l'inverse de celle qu'un lecteur attendrait —
l'exigence tournée vers notre propre construction est celle dont la correspondance ne tolère aucun
reste. Le delta est inchangé par le retrait : il tenait à laquelle porte sur quoi, jamais à la force
comparée des deux. Le paragraphe garde ses quatre mouvements — l'annonce de la surprise, la
citation qui fixe la répartition, sa traduction en clair, l'attente contraire — et ne répète aucun
paragraphe antérieur : S2.P1 à S2.P3 portaient sur la première vérification seule, non sur la
répartition des deux.

## Volume et contrôles

- Texte lecteur, métrique du script (`words()` de `scripts/corpus/lib/deepenings.mjs`, qui segmente
  aussi sur l'espace fine insécable) : **1 417 mots avant, 1 405 après**, soit le seul segment retiré.
  Dans la fourchette 1 300-1 700 de `PROTOCOLE.md` §5. Aucun mot n'a été ajouté pour compenser le
  retrait.
- `lead` : 151 mots, inchangé, dans la fourchette 120-200.
- Structure inchangée : 6 sections, titres inchangés, paragraphes 2 / 4 / 3 / 4 / 2 / 3.
- Aucun tiret cadratin dans le texte lecteur, aucun balisage, guillemets français avec espaces fines
  insécables, apostrophes typographiques. Vérifié après édition.
- Aucune citation n'a été introduite, déplacée ni retouchée par cette passe. Toutes celles qui
  restent étaient déjà verbatim dans `quotation.text`, `notes` ou `review.notes` de
  `corpus/validated/systemographie.json`.
- `npm run corpus:deepen -- --check --only=systemographie` : **PASS**
  (« 1 approfondissement(s) contrôlé(s), 1883 mots. Rien projeté. »), sans avertissement. Le 1 883
  additionne `limits`, champ interne : 1 405 lecteur + 478 `limits`.

## Suite

Le fichier a changé, donc le SHA a changé : la version jugée portait
`2a7f45fe5c8ea6a74609eb812cc5d4502c2094ef000e9a511ad52a0d94596e83`, que j'ai vérifié identique au
blob `HEAD:corpus/deepenings/systemographie.json`. `factcheck-pack.json`, `claim-map.json`,
`verification-bundle.json`, `verification.json` et `factcheck-gate.json` de cette boucle sont donc
périmés. L'orchestrateur doit reprendre à `PREPARE`.

Je ne prononce ni `FACTCHECK_PASS` ni `ACCEPT` : le gate est la seule autorité sur l'état factuel de
cette version. Je n'écris plus rien sur cette carte.
