# Correction factuelle n°1 — absorber-les-fluctuations-de-commandes

Mode : FACTCHECK_FIX. Gate d'entrée : `FACTCHECK_FAIL`, 61 claims, 57 soutenus, 4 refusés
(C002, C004, C059, C060), aucune erreur structurelle, `mapping_incomplete` vide.

SHA contrôlé par le gate : `1dc7016d477aedc5c71f05f9338d6eb862aa8d77fa4512e7c4ec7d64f5501588`.
Le texte a été modifié : ce SHA est mort, la reprise repart de `PREPARE`.

## Matière opposable

Cette carte n'a **aucun dossier de preuve** : `corpus/evidence/absorber-les-fluctuations-de-commandes/`
n'existe pas, et `corpus/validated/absorber-les-fluctuations-de-commandes.json` ne porte pas de champ
`dossier` (vérifié, donc rien à résoudre hors convention). La seule matière est
`hook`, `summary`, `quotation`, `notes`, `review.notes` et les libellés de sources de
l'enregistrement validé. Le mémorandum n'est pas accessible ; l'article de *Management Science*
est `metadata-only`.

Aucune matière nouvelle n'a été ajoutée. Aucune recherche. Aucun `SUP-...` invoqué.

## Les quatre gestes

### C002 — NARROW

`lead[0]`. Appui unique fourni : `SUP-bbbd302ca2eb0391` = `$.hook`,
« Par où faire passer une fluctuation de commandes qu'on ne peut pas supprimer ? ». Motif du gate :
le claim ajoutait un mécanisme (la relation aux clients) et une impossibilité absolue interne
(« personne, à l'intérieur, n'a le moyen »).

- avant : « Personne, à l'intérieur, n'a le moyen de demander aux clients d'étaler leurs achats. »
- après : « Et cette variation ne se supprime pas. »

La proposition restante est exactement celle de l'appui : la fluctuation n'est pas supprimable.
Le mécanisme, les clients, les moyens de l'atelier : retirés, non remplacés.

### C004 — REMOVE

`lead[0]`. Aucun appui, et aucun n'existe : il n'y a rien dans `notes`, `review.notes`, `quotation`
ou les libellés de sources qui porte l'absence de contrainte à choisir cadence et effectif
séparément. Cherché avant de couper (règle « combler le trou plutôt que changer l'étiquette ») :
rien à combler.

- avant : « Rien n'oblige à les choisir ensemble, et c'est pourtant la même variation qu'ils ont
  tous deux à encaisser. »
- après : « C'est la même variation qu'ils ont tous deux à encaisser. »

La seconde moitié de la phrase est C005, `SUPPORTED`, et elle est conservée telle quelle ; seul le
« pourtant », qui n'avait plus d'antécédent, tombe avec la proposition retirée. Rien n'est écrit à
la place.

### C059 et C060 — NARROW, traités ensemble et de la même manière

`sections[5].paragraphs[0]`. Les deux portaient la même proposition : localiser dans l'annexe du
folio 43 la démonstration de la recommandation de la page 8. `$.notes[0]` établit que la
démonstration « vient ensuite, par la fonction de coût » ; `$.notes[10]` établit que la table des
matières annonce « APPENDIX: Derivation of the Conditions for Minimum Costs 43 » ; `$.notes[5]`
établit que cette annexe est absente de l'exemplaire numérisé. Aucun appui ne dit son contenu.

- avant : « Ce sont ces pages qui démontrent ce que la page 8 se contente de recommander, et c'est
  là qu'il faudra aller voir pourquoi une combinaison pondérée vaut mieux qu'une voie pure. »
- après : « Ce que cette dérivation établit, ces pages seules le diront. »

Ce qui reste n'affirme rien de plus que le titre relevé dans la table des matières, déjà porté par
C058 (`SUPPORTED`) : des pages annoncées, une dérivation nommée. L'annexe reste l'objet de clôture
de la section et la raison d'aller y voir, sans que le texte dise ce qu'elle démontre. C'est la
frontière que `limits[3]` posait déjà et que le texte lecteur franchissait.

Une seule et même formulation pour les deux claims : le prochain passage du gate ne peut pas en
accepter un et refuser l'autre.

## Règle 5 — positions d'annonce

**`lead` relu en entier.** `lead[0]` ne porte plus, après correction, que : des commandes
irrégulières (C001), une fluctuation non supprimable (portée de `$.hook`), deux nombres à décider
(C003, tiré du titre du chapitre II relevé dans la table des matières) et la variation commune à
ces deux nombres (C005). Aucun excédent de portée ne subsiste. `lead[1]` est inchangé : ses cinq
claims (C006 à C010) sont tous `SUPPORTED` et tous adossés à la page de titre relevée, à sa note
et au libellé de la source primaire ; rien n'y annonce plus que ce qui reste établi.

**Titre de la section finale.** « L'appendice où le calcul se fait » affirmait, en position de
titre et donc hors de portée du gate, que le calcul se fait là : c'est précisément ce que C059
s'est fait refuser. Devenu « L'appendice annoncé au folio 43 », qui ne dit que ce que la table des
matières annonce (31 caractères, sous la limite de 60). Les cinq autres titres sont inchangés.

## `limits`

Deux frontières internes resserrées, puisque la correction vient de les éprouver :

- `limits[0]` ajoute que la fluctuation non supprimable est tout ce qui est établi du régime des
  commandes, ni ses causes ni les moyens d'agir sur la demande des clients (frontière franchie
  par C002) ;
- `limits[3]` ajoute que le contenu de l'annexe n'est connu que par son titre, et qu'aucune phrase
  ne peut lui attribuer la démonstration de la page 8 ni y situer la justification de la
  combinaison pondérée (frontière franchie par C059 et C060).

`limits` reste interne. Rien n'en a été remonté dans `lead` ou `sections`.

## Delta d'apprentissage des passages touchés

- `lead[0]` : pose la situation observable, l'irréductibilité de la variation, et les deux
  grandeurs à décider. Le paragraphe perd deux propositions non fondées et garde ses quatre
  paliers ; aucun paragraphe voisin ne fait le même travail.
- `sections[5].paragraphs[0]` : le titre du mémorandum promet une règle, la page 8 n'en donne que
  la forme, le calcul est renvoyé à des pages nommées. Le delta est la localisation du calcul, non
  son contenu. `sections[5].paragraphs[1]` garde seul la charge de laisser la question ouverte, ce
  qui supprime la redondance que l'ancienne fin créait avec lui.

## Comptes

| | avant | après |
|---|---|---|
| mots lecteur (`lead` + `sections`) | 1 414 | 1 379 |
| dont `lead` | 197 | 183 |
| `limits` (interne, hors compte lecteur) | 212 | 267 |
| sections | 6 | 6 |

Le texte lecteur reste dans la fourchette 1 300-1 700 ; le `lead` dans 120-200.

## Contrôle

`npm run corpus:deepen -- --check --only=absorber-les-fluctuations-de-commandes` : PASS
(« 1 approfondissement(s) contrôlé(s) »). Aucun tiret cadratin. Aucun terme de dispositif.

Aucune auto-validation : ni `FACTCHECK_PASS` ni `ACCEPT` n'est déclaré ici. Le texte doit
repasser par `PREPARE`, un nouveau mapping et le gate.

---

# Correction factuelle n°2 — absorber-les-fluctuations-de-commandes

Mode : FACTCHECK_FIX. Dernière boucle autorisée. Gate d'entrée : `FACTCHECK_FAIL`, 57 claims,
53 soutenus, 4 refusés (C001, C017, C030, C045), tous en `TOO_STRONG`, aucune erreur structurelle,
`mapping_incomplete` vide.

SHA contrôlé par ce gate : `5b8115f95133cd5cbe7460fcace4b310f673109197a23d500c73196fb7407c79`.
Le texte est modifié : ce SHA est mort, la reprise repart de `PREPARE`.

Les quatre claims refusés ne sont pas ceux du tour 1 (C002, C004, C059, C060). Un mapping
indépendant a redécoupé le texte ; les quatre corrections du tour 1 ont tenu et n'ont pas été
rouvertes. Les 53 claims soutenus n'ont pas été réécrits.

## Matière opposable (inchangée)

Aucun dossier de preuve : `corpus/evidence/absorber-les-fluctuations-de-commandes/` n'existe pas, et
`corpus/validated/absorber-les-fluctuations-de-commandes.json` ne porte pas de champ `dossier`
(revérifié : `dossier` est absent, il n'y a donc aucun répertoire à résoudre hors convention).
Matière : `hook`, `summary`, `quotation`, `notes`, `review.notes`, libellés de sources. Aucune
recherche, aucun fait de mémoire, aucun `SUP-...` invoqué, aucune citation nouvelle.

Les quatre défauts sont d'une seule espèce : une précision ajoutée que les appuis ne portent pas.
Dans les quatre cas le geste est un retrait, et rien n'est écrit à la place.

## Les quatre gestes

### C001 — NARROW (fréquence et échelle de temps)

`lead[0]`. Appuis fournis : `$.review.notes[6]` (p. 5, « orders (or more precisely, ordered
shipments) are subject to substantial fluctuation ») et `$.hook`. Motif du gate : ni l'échelle
annuelle ni l'alternance mois par mois ne sont portées.

- avant : « Les commandes d’un atelier ne tombent pas au même rythme toute l’année : un mois elles
  s’entassent, le mois suivant elles se font rares. Et cette variation ne se supprime pas. »
- après : « Les commandes qu’un atelier reçoit varient, et fortement. Cette variation ne se
  supprime pas. »

Ce qui reste est exactement ce que portent les deux appuis : une fluctuation substantielle
(« substantial »), et son caractère non supprimable. L'année, le mois, l'alternance : retirés, non
remplacés par une autre périodicité. Le « Et » initial de la phrase suivante tombe, la première
phrase étant devenue brève.

### C017 — NARROW (périodicité saisonnière)

`sections[0].paragraphs[1]`. Appuis : `quotation.original_text` et `quotation.text`
(« partly by hiring and layoffs »), la note du traducteur, `$.review.notes[6]`. Aucun rythme
saisonnier n'y figure.

- avant : « en embauchant puis en licenciant au fil des saisons. »
- après : « en embauchant et en licenciant. »

« au fil des saisons » est retiré sans substitut. Le « puis », qui posait un ordre entre les deux
gestes là où l'anglais donne un couple (« hiring and layoffs »), devient « et ».

### C030 — NARROW (portée de la formule)

`sections[1].paragraphs[2]`. Appuis : `$.notes[0]` (« la démonstration vient ensuite, par la
fonction de coût »), `$.notes[10]` et `$.review.notes[9]` (l'appendice annoncé au folio 43).
Aucun n'établit la structure de la fonction, et `$.notes[5]` rappelle que l'appendice manque à
l'exemplaire numérisé.

- avant : « À cet endroit, la recommandation n’est pas encore démontrée. Elle clôt un examen des
  coûts, et ce qui la justifie vient après : les auteurs construisent une fonction de coût, une
  formule qui met un prix sur chaque combinaison possible de stock, d’heures et d’effectif, puis
  cherchent celle qui rend ce prix le plus bas. »
- après : « À cet endroit, la recommandation n’est pas encore démontrée : elle clôt un examen des
  coûts, et la démonstration ne vient qu’ensuite, par une fonction de coût. »

La proposition restante est celle de `$.notes[0]`, presque mot pour mot. Les variables de la
fonction, la quantification sur « chaque combinaison possible » et la minimisation comme opération
attribuée aux auteurs sont retirées ; aucune autre description du modèle ne les remplace. Le point
devenu deux-points fond l'ancienne première phrase dans la suivante : le paragraphe, raccourci de
vingt-cinq mots, disait sinon trois fois la même chose. La dernière phrase (« La phrase de la page 8
annonce ce que la suite a pour tâche d’établir. ») est conservée telle quelle.

### C045 — NARROW (certitude de l'erreur de prévision)

`sections[3].paragraphs[1]`. Appuis : `$.review.notes[3]` (titre « Errors in Forecasting Orders »,
table des matières et bas de p. 8) et `quotation.original_text`. Un titre de section ne porte pas ce
que la section dit des erreurs.

- avant : « ce sont des décisions prises sur des commandes anticipées, donc sur des nombres dont on
  sait qu’ils seront faux de quelque chose. »
- après : « ce sont des décisions prises sur des commandes prévues. »

Le « on sait qu’ils seront faux » est retiré : ni l'ampleur de l'erreur, ni la certitude qu'il y en
ait une, ne sont portées. « anticipées » devient « prévues », qui rattache la phrase au titre
réellement relevé sans rien affirmer de l'erreur. Le paragraphe garde son marquage d'interprétation,
inchangé et en tête : « On peut lire dans cet enchaînement une conséquence que la page 8 ne porte
pas seule. »

## Règle 4 — positions d'annonce, et un excédent adjacent

**Titre de `sections[1]`.** « Une phrase qui recommande, et ce qui la soutient » promettait, en
position de titre et donc hors de portée du gate, un soutien que la section, une fois C030 corrigé,
ne décrit plus : elle établit au contraire qu'à cet endroit la recommandation n'est pas démontrée.
Devenu « Une phrase qui conseille, et ne démontre pas encore » (51 caractères), qui ne dit que
`$.notes[0]`. Les cinq autres titres sont relus et inchangés ; celui de `sections[3]`, « Là où le
rapport place l’erreur de prévision », ne dit que la localisation, seule chose établie.

**`lead` relu en entier.** `lead[0]` ne porte plus que : une fluctuation forte des commandes (p. 5),
son caractère non supprimable (`$.hook`), les deux grandeurs à décider (titre du chapitre II relevé
à la table des matières) et la variation commune aux deux. `lead[1]` est inchangé : page de titre,
titre du mémorandum, note de bas de page citée mot pour mot, projet ONR. Aucun excédent de portée,
aucune fréquence, aucune périodicité ne subsiste dans le `lead`.

**Un excédent adjacent, retiré par précaution et déclaré comme tel.** Dans le paragraphe même que
C045 ancre, la phrase suivante portait « le dosage n’est pas arrêté une fois pour l’année ». Ce
fragment appartenait à C046, que le vérificateur a rendu `SUPPORTED` ; mais il réaffirme
exactement l'échelle annuelle que le gate vient de refuser à C001. Retiré, sans substitut de
périodicité : « le dosage ne se fixe pas en une seule fois : il se reprend à chaque période. » C'est
un retrait de deux mots, il ne peut rien affaiblir, et il évite qu'un nouveau découpage ne refuse au
tour suivant ce que le précédent avait laissé passer. Aucun autre claim soutenu n'est touché :
« Imaginons deux ateliers voisins, dans la même saison » (`sections[2]`) est un exemple
explicitement hypothétique, et « ce qui convenait une année » (`sections[2]`) illustre le changement
de régime documenté par `$.notes[1]` sans rien affirmer d'un rythme annuel ; les deux restent en
place.

## `limits`

Trois frontières internes précisées, puisque la correction vient de les éprouver, et formulées en
nommant la source, son état d'accès et l'affirmation interdite :

- `limits[0]` : ni la fréquence ni l'échelle de temps de la fluctuation ne sont documentées
  (frontière franchie par C001 et par le fragment de C046) ;
- `limits[2]` : le titre relevé au bas de la p. 8 n'autorise rien sur l'ampleur de l'erreur de
  prévision ni sur sa certitude (frontière franchie par C045) ;
- `limits[3]` : de la fonction de coût, seule son intervention après la p. 8 est documentée, ni ses
  variables ni sa forme (frontière franchie par C030).

`limits` reste interne, aucun de ses contenus n'est remonté dans `lead` ou `sections`. Le champ
totalise 329 mots, au-dessus de la fourchette indicative de 100-200 : la longueur vient des
frontières accumulées aux deux tours, chacune nommant une source et une affirmation précises, et le
contrôle mécanique ne la refuse pas.

## Delta d'apprentissage des passages touchés

- `lead[0]` : la variation des commandes, son irréductibilité, les deux grandeurs à décider. Perd
  une périodicité inventée, garde ses quatre paliers.
- `sections[0].paragraphs[1]` : les trois voies pures. Perd un rythme saisonnier ; la troisième voie
  reste distincte des deux autres, ce qui est son seul travail.
- `sections[1].paragraphs[2]` : le statut de la recommandation à cet endroit du texte, non démontrée
  et renvoyée à un calcul ultérieur. Le delta est le décalage entre la recommandation et sa preuve,
  non le contenu de la preuve. La section 6 garde seule la charge de localiser ce calcul.
- `sections[3].paragraphs[1]` : la lecture que l'enchaînement des sections autorise. Le delta est
  que répartir engage des commandes encore à venir, et que les décisions se reprennent. Ce que le
  rapport dit de l'erreur elle-même n'est plus affirmé.

## Comptes

| | avant (tour 2) | après (tour 2) |
|---|---|---|
| mots lecteur (`lead` + `sections`) | 1 444 | 1 383 |
| dont `lead` | 191 | 174 |
| `limits` (interne, hors compte lecteur) | 277 | 329 |
| sections | 6 | 6 |

Compte établi sur `lead` + `sections` par découpage sur les blancs. Le texte lecteur reste dans la
fourchette 1 300-1 700, le `lead` dans 120-200.

## Contrôle

`npm run corpus:deepen -- --check --only=absorber-les-fluctuations-de-commandes` : PASS
(« 1 approfondissement(s) contrôlé(s), 1712 mots. Rien projeté. »). Aucun tiret cadratin, aucun
terme de dispositif, aucune citation nouvelle, six titres sous 60 caractères.

Aucune auto-validation : ni `FACTCHECK_PASS` ni `ACCEPT` n'est déclaré ici. Le texte doit repasser
par `PREPARE`, un nouveau mapping et le gate.
