concept : ligne-d-approvisionnement-ignoree
mode    : FACTCHECK_FIX (boucle 1 sur 2)
check mécanique : PASS (`npm run corpus:deepen -- --check --only=ligne-d-approvisionnement-ignoree`
→ « 1 approfondissement(s) contrôlé(s), 1766 mots. Rien projeté. », code de sortie 0, aucun
avertissement de citation non sourcée)

SHA256 avant : `3ad3ef1641ef6f06cdf48cb7f7f8570db07aaa36057dfd18dd8a2e1ddbf1da9d`
SHA256 après : `1de5c31ae823e4dac13cbea25e09e2e681eb5caeaabeda52bba2e4ae87335f35`

La méthode a été vérifiée et non supposée : `deepening-factcheck.mjs` calcule
`candidate_sha256: sha256(deepRaw)` sur le fichier lu en utf8, donc `sha256sum` du fichier donne
la même valeur. Contre-épreuve faite sur la version d'avant, prise à `HEAD` :
`git show HEAD:corpus/deepenings/ligne-d-approvisionnement-ignoree.json | sha256sum` rend
exactement le `candidate_sha256` du rapport de gate.

## Périmètre relu pour cette correction

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`, en entier ;
- `factcheck-gate.json`, puis `verification.json` pour les trois seuls claims fautifs, puis
  `claim-map.json` pour connaître les offsets et les appuis exacts de chacun ;
- `audit.md`, section sur les divergences de pagination (l. 208-215) ;
- `rewrite.md`, ma propre réserve « folios non déplacés » ;
- `corpus/deepenings/ligne-d-approvisionnement-ignoree.json` ;
- `corpus/validated/ligne-d-approvisionnement-ignoree.json`, `review.notes` et `notes` en entier ;
- champ `dossier` relu avant toute liste :
  `corpus/evidence/ligne-d-approvisionnement-ignoree/lecture.json`, chemin conventionnel, même
  répertoire que l'identifiant. Répertoire listé moi-même : un seul fichier, `lecture.json`, lu en
  entier (`attribution`, `quotation`, `sources_ouvertes[0..6]`, `definition_de_lauteur`,
  `reserves[0..11]`). Pas de `scouting.json`, rien d'autre à ouvrir ;
- `scripts/corpus/deepening-factcheck.mjs` et `scripts/corpus/lib/deepenings.mjs`, pour le calcul du
  SHA et le périmètre du contrôle.

Aucune recherche web. Aucune source sollicitée. Aucun fait ajouté de mémoire. Aucun `SUP-...`
touché ni fabriqué ; aucun artefact de fact-check réparé à la main.

## Les trois refus, et le geste appliqué à chacun

### C004 — CONFLICT — `lead[0]`, offsets 412-494

Claim : « C’est John D. Sterman qui pose cette scène, à la page 9 d’une étude écrite en 1987 ».

Le motif du gate est une divergence de folio à l'intérieur du même document de travail de 1987 :
`SUP-4881606b2e4d059c` (couche `review`, PROSE 3/3) écrit « l'exemple du restaurant, p. 9 »,
`SUP-771365f96132d2be` (`lecture.json`, `definition_de_lauteur`) écrit « Puis le restaurant, p. 6
et 7 ». Le gate note explicitement que l'auteur et l'année, eux, sont soutenus.

Geste : **borner**. La localisation disparaît, l'attribution et la date restent.

> « C’est John D. Sterman qui pose cette scène, dans une étude écrite en 1987, avant d’en venir aux
> entrepôts. »

Je n'ai pas choisi entre p. 9 et p. 6-7. Rien dans les fichiers autorisés ne réconcilie les deux :
la couche `review` déclare une concordance folio/index PDF vérifiée sur trois ancrages
indépendants, ce qui est un argument, mais pas un appui qui réconcilierait la seconde
localisation, et le gate juge sur les appuis, non sur la vraisemblance des couches. Trancher
aurait été exactement l'erreur : cela réintroduirait comme acquis ce qu'aucun appui n'établit, et
au prochain tour le gate refuserait la page choisie tout autant.

Ce que le lecteur perd : un numéro de page. Ce qu'il garde intégralement : la scène, le verbatim
anglais (claim C003, soutenu, non touché), le nom de l'auteur, l'année, et le fait que le
restaurant précède les entrepôts dans le texte (C005, soutenu, non touché).

### C023 — CONFLICT — `sections[1].paragraphs[0]`, offsets 338-426

Claim : « « In use for nearly three decades, the game has been played all over the world » (p. 10) ».

Même nature de divergence : `SUP-07eb5c6aab4e585a` (couche `review`, ATTRIBUTION 2/2) lit le
passage « sur l'image de la p. 10 », p. 10-11 ; `SUP-485b84a6b1a5bdb7` et `SUP-0dff2bd362a88987`
(`attribution.note` du dossier et `notes[5]` de la fiche) le donnent p. 13 du même document. Le
gate dit que le verbatim, lui, est bien porté.

Geste : **borner**. Le folio disparaît, le verbatim reste mot pour mot.

> « … l’exercice est déjà ancien quand il écrit, « In use for nearly three decades, the game has
> been played all over the world ». »

La phrase qui porte le verbatim l'introduit déjà par « quand il écrit », donc la suppression du
folio ne laisse aucun trou : le passage reste attribué au document de 1987, sans prétendre à un
endroit dans ce document.

### C015 — TOO_STRONG — `sections[0].paragraphs[1]`, offsets 108-165

Claim : « et un délai sépare presque toujours le geste de son effet ». Appui unique,
`SUP-771365f96132d2be`, qui porte « Often there are lags between the initiation of a control
action and its effect ».

Geste : **réduire la portée** à la fréquence que l'appui autorise, mot contre mot, « often » rendu
par « souvent ».

> « Un stock ne s’attrape pas directement : on ne l’influence qu’en modifiant ce qui y entre et ce
> qui en sort, et un délai sépare souvent le geste de son effet. »

Le paragraphe garde son delta entier : il enchaîne sur les trois tâches du décideur, dont la
troisième n'existe que parce qu'un délai existe, et le contre-exemple du marteau et du clou, où
« rien ne se perd et rien n’est différé », dit déjà que le délai n'est pas universel. « Souvent »
est donc plus cohérent avec la suite du paragraphe que « presque toujours ».

## Contrôle des titres, demandé explicitement

Les titres sont du texte lecteur qu'aucun claim ne couvre : le gate ne peut pas les voir. J'ai donc
vérifié à la main qu'aucun excédent retiré d'un paragraphe n'avait migré dans un titre. Les cinq
titres sont inchangés, et contrôlés par recherche littérale sur l'ensemble « titres + paragraphes
lecteur » : les chaînes « page 9 », « p. 9 », « p. 10 », « page 10 », « p. 13 » et « presque
toujours » n'apparaissent plus nulle part dans le texte destiné au lecteur, titres compris. Aucun
titre ne portait ni folio ni adverbe de fréquence avant la correction, et aucun n'en porte après.

| Titre | Ce qu'il nomme | Excédent retiré qui aurait pu y passer |
|---|---|---|
| Ce qui est en route, et où cela se trouve | la ligne d'approvisionnement et sa composition | aucun |
| Un plateau de jeu, quarante-quatre joueurs | le dispositif et l'échantillon | aucun ; le folio du verbatim n'y est pas remonté |
| Un nombre entre zéro et un | le paramètre β et ses deux bornes déclarées | aucun |
| Grizzly et Suds, deux issues du même choc | les deux cas contrastés | aucun |
| Non pas l’oubli, mais l’agrégation | ce que Sterman écarte et ce qu'il met à la place | aucun |

Observation relevée et **non corrigée**, parce qu'elle sort du périmètre d'une correction minimale
et qu'aucun refus du gate ne la vise : le titre « Un nombre entre zéro et un » nomme les deux
bornes que le texte de 1987 déclare (« If β = 1… If β = 0 », p. 17), alors que l'usine Suds est
estimée à 1,05, valeur que la section suivante donne et que son paragraphe annonce lui-même
(« compte ce qui est en route en entier, et même un peu plus »). Ce n'est donc pas une affirmation
dissimulée dans un titre, et le texte ne cache pas le dépassement. Je le signale pour que la revue
en décide, je ne le modifie pas dans une boucle de correction factuelle.

## `limits[0]`, mis en accord avec le texte

`limits` est interne, et sa fonction est de dire où le texte doit s'arrêter. L'ancien `limits[0]`
écrivait que les folios « fixent ici le restaurant page 9 et la description du jeu page 10 » :
c'était la description exacte d'un texte qui affichait ces deux pages, et cette description est
maintenant fausse. Elle laisserait surtout croire à un futur rédacteur que la couche `review`
tranche la question, ce qui est précisément la prémisse que le gate a refusée.

Nouveau `limits[0]` :

> « Le verbatim ne se localise que sur le document de travail de septembre 1987. Deux localisations
> du même document divergent sur deux passages : le restaurant est donné page 9 par la relecture
> sur image et p. 6-7 par l’autre, la description du jeu page 10 par la première et p. 13 par la
> seconde. Rien ne les réconcilie et rien n’autorise à trancher : ces deux passages se citent donc
> sans folio. »

La frontière est renforcée, pas relâchée : elle nomme les quatre localisations, dit qu'aucune ne
l'emporte, et pose l'interdit de fait qui en découle. `limits[1]`, `limits[2]` et `limits[3]` sont
inchangés. Quatre paragraphes, 248 mots contre 222. Le contrôle ne borne pas le volume de `limits`
(il vérifie 1 à 5 paragraphes et le refus des précautions sans objet) ; la fourchette annoncée de
100-200 mots du protocole de rédaction est dépassée, comme elle l'était déjà avant cette
correction, et cela reste à arbitrer par la revue.

Aucun contenu de `limits` n'a été remonté en bloc visible. La divergence de folios ne se raconte
pas au lecteur : elle se traduit chez lui par l'absence de deux numéros de page, et par rien
d'autre.

## Ce qui n'a pas été fait, et pourquoi

- **Aucune compensation.** Les soixante-cinq claims soutenus sont inchangés au caractère près. Le
  diff porte sur quatre lignes : trois de texte lecteur, une de `limits`.
- **Aucune affirmation nouvelle.** Les trois gestes sont un retrait de localisation, un retrait de
  localisation et un abaissement de fréquence. Rien n'a été ajouté nulle part.
- **Aucun autre folio touché.** Les autres pages affichées par le texte (p. 7, p. 14, p. 15, p. 16,
  p. 17, p. 17-20, p. 20, p. 21, p. 22, p. 23, p. 23-24, p. 25, p. 26) ne sont contredites par
  aucune des deux couches et le gate les a toutes acceptées. Les corriger aurait été du travail
  hors mandat.
- **Aucun `SUP-...` inventé, aucun artefact de fact-check réécrit.** `claim-map.json`,
  `factcheck-pack.json`, `verification-bundle.json`, `verification.json` et `factcheck-gate.json`
  sont laissés tels quels : ils décrivent la version `3ad3ef16…`, qui n'est plus celle du dépôt, et
  ils doivent le rester comme trace.

## Effet des trois retraits sur les deltas

Aucun paragraphe ne perd son delta, et aucun ne devient redondant avec son voisin.

| Bloc | Delta après correction | Ce que le retrait a coûté |
|---|---|---|
| `lead[0]` | une règle qui regarde l'écart visible commande plusieurs fois le même manque dès qu'il y a un délai ; la scène est de Sterman, 1987 | la page, pas la scène ni l'attribution |
| S1.P2 | trois tâches et non deux, la troisième portant sur l'invisible ; sans perte ni délai elle disparaît, avec délai son absence prédispose à l'instabilité | une fréquence surévaluée, remplacée par celle de la source |
| S2.P1 | le dispositif, sa paternité non revendiquée, l'ancienneté, l'échantillon | la page, pas le verbatim ni le fait |

Les quinze autres paragraphes ne sont pas touchés.

## Contrôles effectués

1. Delta reformulé pour les trois paragraphes modifiés : ci-dessus. Aucun n'est devenu vide.
2. Aucun paragraphe à fusionner ou supprimer : la correction ne retire aucune proposition entière.
3. Aucune section ne répète principalement une précédente ; la structure n'a pas bougé.
4. Frontières documentaires : rien du contenu des deux sources `metadata-only` (article de
   *Management Science* de 1989, *Business Dynamics*) ; aucune localisation sur l'extrait EOLSS ;
   plus aucune localisation sur les deux passages dont les folios divergent.
5. Aucun contenu de `limits` remonté en bloc visible.
6. Recherche littérale : plus aucune occurrence de « page 9 », « p. 9 », « p. 10 », « page 10 »,
   « p. 13 », « presque toujours » dans `lead` + `sections` + titres. Aucun tiret cadratin.
7. `npm run corpus:deepen -- --check --only=ligne-d-approvisionnement-ignoree` : PASS, 1766 mots.
8. Rien à corriger après le contrôle.

## Ce qui reste, et qui n'est pas de mon ressort

Le SHA a changé : le fact-check de `3ad3ef16…` est invalidé, les offsets des soixante-huit claims
sont décalés, et l'orchestrateur doit reprendre à `PREPARE` sur `1de5c31a…`.

Je ne rends ni `ACCEPT` ni `FACTCHECK_PASS`.

Note de propreté d'arbre : `corpus/deepenings/conscience-de-la-situation.json` apparaît toujours
modifié dans `git diff`. Cette modification ne vient pas de moi et n'a pas été touchée.
