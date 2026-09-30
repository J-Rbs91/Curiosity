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
