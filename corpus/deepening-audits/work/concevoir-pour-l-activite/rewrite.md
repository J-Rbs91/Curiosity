# concevoir-pour-l-activite — FACTCHECK_FIX (boucle 1/2)

Gate : FACTCHECK_FAIL, 56/57 soutenus. Seul claim refusé : C008 (TOO_STRONG, lead[1]).

Motif : les supports (SUP-33a861d1aaa9792d, SUP-e3ef6f80e004d986, SUP-b667a792a52cccd7,
SUP-27db2ad867e44050, SUP-79268ec80adeab6f) établissent « cristallise » entre guillemets dans
l'idée centrale portant sur tout dispositif technique ; l'escalier n'y est qu'un exemple ultérieur.
Le claim faisait du mot une description de l'effet de l'escalier.

Correction (réattribution de la fonction du terme, aucune affirmation nouvelle) :

- avant : « Pour dire ce que l'escalier fait à son usager, il emploie un mot qu'il place entre guillemets : l'objet « cristallise » un modèle de celui qui s'en sert. »
- après : « Pour sa thèse centrale, qui porte sur tout dispositif technique, il emploie un mot qu'il place entre guillemets : l'objet « cristallise » un modèle de celui qui s'en sert. »

Financement : mêmes supports que C008 (definition_de_lauteur / quotation.text : « l'idée centrale
est que tout dispositif technique […] « cristallise » »). Aucun autre passage touché.

Mots du texte lecteur (selon le check) : 1300 avant, 1301 après.

`npm run corpus:deepen -- --check --only=concevoir-pour-l-activite` : PASS.
Le SHA du candidat change : reprendre à PREPARE.

## Boucle de correction factuelle 2/2 (FACTCHECK_FIX)

- Claim refusé : C022 (TOO_STRONG). La clause « avant que les solutions soient arrêtées » était rattachée à la consigne « rendre la réalité du travail visible et pensable », alors que les appuis la rattachent à « identifier les contraintes du contexte ».
- Correction minimale : clause retirée. La phrase devient « Rendre la réalité du travail visible et pensable pendant la construction du problème, et non après. »
- Aucune affirmation ajoutée, aucun autre passage modifié. Mots du texte lecteur : 1295 après correction (5 mots retirés).
- `npm run corpus:deepen -- --check --only=concevoir-pour-l-activite` : PASS.
- Le SHA du deepening a changé : il faut recommencer à PREPARE.
