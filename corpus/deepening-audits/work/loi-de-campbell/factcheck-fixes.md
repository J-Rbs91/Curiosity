# loi-de-campbell — corrections après FACTCHECK_FAIL (boucle 1/2)

Gate : `factcheck-gate.json`, verdict FACTCHECK_FAIL, 62/66 claims soutenus,
SHA candidat `c6db62a8266637e846fcf2bc0aa267c9777b4495a511d11e845ba17ccfe6cac2`.

Correction minimale : aucune affirmation nouvelle, aucun support ajouté.

## C001 — TOO_STRONG (lead[0])

- Avant : « Dès que ce chiffre commande les primes des employés, il ne faut pas longtemps pour apprendre à le faire baisser sans améliorer le service rendu »
- Après : « Dès que ce chiffre commande les primes des employés, on peut apprendre à le faire baisser sans améliorer le service rendu »
- Motif : la rapidité (« il ne faut pas longtemps ») n'est portée par aucun des supports
  (SUP-ed95af10edd7229c, SUP-44e43baae10fe353). Elle est retirée ; le reste du claim, que les
  supports établissent (tendance à la corruption de l'indicateur et du processus), est gardé.

## C036, C037, C038 — UNSUPPORTED (sections[2].paragraphs[1])

- Paragraphe retiré en entier : « Cela implique qu'un chiffre qui s'améliore ne dit pas, à lui
  seul, laquelle des trois voies a été prise. La troisième est la plus difficile à voir : aucune
  donnée n'y est retouchée, de sorte qu'un contrôle de l'exactitude du chiffre ne la ferait pas
  apparaître. »
- Motif : les trois claims constituent tout le paragraphe et aucun support du pack ne les finance.
  Les borner ou les marquer comme interprétation laisserait des affirmations non financées
  (l'évaluation « la plus difficile à voir », l'effet d'un contrôle d'exactitude). La section garde
  son paragraphe de l'hôpital, dont les claims étaient soutenus.

## Effets

- Mots du texte lecteur : 1392 après correction (environ 50 de moins qu'avant).
- Aucun ajout, donc aucun support_id à citer.
- `limits` inchangé.
- `npm run corpus:deepen -- --check --only=loi-de-campbell` : PASS.
- Le SHA du deepening a changé : reprendre à `PREPARE`.

---

# Boucle de correction 2/2 (dernière) — FACTCHECK_FIX

Gate : FAIL 60/61, un seul claim fautif.

## C015 — TOO_STRONG (sections[0].paragraphs[1])

- Avant : « La seconde porte sur ce qu’il mesure : il finit par déformer et corrompre les processus
  sociaux qu’il devait surveiller »
- Après : « La seconde porte sur ce qu’il mesure : plus il pèse, plus il tend à déformer et
  corrompre les processus sociaux qu’il devait surveiller »
- Motif : SUP-44e43baae10fe353 et `review.notes[1]` portent « the more apt it will be to distort and
  corrupt » : une propension graduée, pas un aboutissement. Le comparatif est rétabli et
  « finit par » devient « tend à ». Aucune affirmation nouvelle.

## Alignement préventif dans le lead (lead[1])

- « et plus il finit par déformer la réalité » devient « et plus il tend à déformer la réalité ».
  Ce claim avait passé grâce au comparatif, mais il emploie le même « finit par » ; on l’aligne sur
  la même tendance graduée, sans changer sa portée autrement.

## Effets

- Mots du texte lecteur : 1392 avant, 1396 après (+4, uniquement le comparatif rétabli, financé par
  SUP-44e43baae10fe353).
- `limits` inchangé.
- `npm run corpus:deepen -- --check --only=loi-de-campbell` : PASS.
- Le SHA du deepening a changé : reprendre à `PREPARE`.
