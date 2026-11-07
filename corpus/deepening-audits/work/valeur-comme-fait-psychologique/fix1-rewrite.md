# FACTCHECK_FIX n°1 — valeur-comme-fait-psychologique

Gate : FACTCHECK_FAIL (56/58), SHA candidat 46ac3a88…

## C015 — CONFLICT — NARROW
Locator : sections[1].paragraphs[1].
Avant : « Elle se divise en trois espèces, la valeur-vérité, la valeur-utilité, la valeur-beauté, qui correspondent à ces deux états. »
Après : « Elle se divise en valeur-vérité, valeur-utilité et valeur-beauté, qui correspondent à ces deux états. »
Motif : notes[2] (SUP-5ee58891585dddc0) déclare une divergence non tranchée sur le dénombrement (trois espèces selon la lecture primaire, « quatre expressions » selon le dossier Milet, p. 910, qui nomme les trois mêmes). Le décompte « trois espèces » est retiré ; les trois noms, communs aux deux dossiers, et la correspondance avec croyance et désir (SUP-b6d52c0cfbc2ee3a, SUP-5136efe5dbd66340) sont conservés.

## C026 — TOO_STRONG — REMOVE
Locator : sections[2].paragraphs[2].
Avant : « Le prix affiché confond les trois, et la psychologie économique commence à l’endroit où l’on demande laquelle des trois s’est produite. »
Après : « Le prix affiché confond les trois. »
Motif : aucune pièce du pack ne définit la discipline par cette question ; la proposition est retirée, pas reformulée.

## Bilan
Aucune affirmation nouvelle, aucun support ajouté. `limits` inchangé.
Mots texte lecteur (lead + titres + paragraphes) : 1532 avant, 1513 après.
Check mécanique : `npm run corpus:deepen -- --check --only=valeur-comme-fait-psychologique` PASS (1 approfondissement contrôlé, 1700 mots).
Le SHA du deepening a changé : reprendre à PREPARE.
