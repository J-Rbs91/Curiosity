concept : criticite-technique-contre-poids-financier
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=criticite-technique-contre-poids-financier` : « 1 approfondissement(s) contrôlé(s), 1596 mots. Rien projeté. », limits comprises)

## Volume du texte lecteur (lead + sections)

- avant : 1 443 mots (SHA audité b506bb55…)
- après : 1 256 mots (−187, −13 %)
- 17 paragraphes lecteur (avant : 17). Fusion de S3.P1/S3.P2 et de S5.P1/S5.P3 ; ajout d'un paragraphe en tête de S4.

## Matière lue

PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md, le deepening, `corpus/validated/…json` (pas de champ `dossier` : répertoire conventionnel seul), `corpus/evidence/criticite-technique-contre-poids-financier/` (un seul fichier, `lecture.json`, lu en entier ; pas de `scouting.json`), audit.md, factcheck-pack.json.

## Corrections des défauts majeurs de l'audit

- lead[0] : scène marquée hypothétique dès la première phrase (« Imaginons… »), détails non financés retirés (« acheté par milliers », « depuis la veille », « machines et personnes »), chute monétaire (« Le montant que représente l'arrêt ») remplacée par l'opposition valeur dormante / production bloquée. Plus de contradiction avec S4.P3 (SUP-68f79274ce2635c6, SUP-57654be4b08e19de).
- lead[1] : « des milliers de références » et « parce qu'il se mesure et qu'il se compare » retirés ; justification du tri ramenée à la source (coûts propres, articles « qui n'en valent pas la peine ») — SUP-1ed68e823684afe0, SUP-b5dc90df8c9e3c4c. « sur deux pages, sans réserve » retiré (redite avec S4.P2).
- S1.P3 : « temps, relevés, calculs » et « néglige sciemment » retirés ; la souplesse est dite « pas un oubli » et rattachée au coût d'une gestion rigoureuse (SUP-1ed68e823684afe0).
- S2.P1 : « au dernier paragraphe de la section » remplacé par « à la fin de la section consacrée au coût de passation des commandes », compatible avec toutes les couches (SUP-724fa7bddea32e61, SUP-57d2a99966f2eea1).
- S2.P3 : redite de l'inventaire des emprunts (S1.P1) et phrase « un auteur qui présentait cesse de présenter » retirées ; reste le neuf (pas d'appel de note, formule éditoriale) — SUP-53a76dd0d27cc9e4.
- S3 : P1 et P2 fondus ; « massif, rare ou fabriqué sur mesure » et « aucune substitution » retirés ; un seul exemple hypothétique (pièce chère non bloquante), qui couvre le versant absent du lead ; « le second aucune [attention] » retiré. S3.P2 (ancien P3) : phrase de fréquence « tous les jours » retirée, conséquence marquée « Cela implique », et « coûterait peu » remplacé par « ne bloquerait rien » pour ne pas réintroduire le cadrage monétaire.
- S4.P1 : le saut « hiérarchie fonctionnelle qu'il appelle au paragraphe suivant » est résolu par le nouveau paragraphe d'ouverture de S4 qui cite ce paragraphe.
- S4.P2 : « sans réserve sur deux pages » retiré.
- S5 : « le lire, c'est lire l'état de ce qui se pratiquait alors » retiré ; Béquart retiré de la liste ; seconde moitié de S5.P2 (« remarque faite en passant par quelqu'un qui présente… ») retirée ; coquilles compressées et déplacées dans le premier paragraphe pour que le texte ne se ferme plus sur elles. Le texte se ferme sur les travaux nommés en note 21 et une invitation à les lire, sans rien affirmer de leur contenu.

## Ajouts et supports qui les financent

1. S1.P2, répartition complète A 8 %/75 %, B 23 %/21 %, C 69 %/4 % (remplace la seule mention du groupe C) — SUP-1ed68e823684afe0, SUP-b5dc90df8c9e3c4c.
2. S1.P3, « puisque de la sorte on contrôle 75 % des stocks investis » (verbatim) et la reformulation arithmétique « moins d'un article sur dix … trois quarts de l'argent investi » — SUP-1ed68e823684afe0.
3. S2.P2, écho de la page 78 : « Si l'on se place du pur point de vue financier », « point de vue financier » en italique ; marqué comme lecture (« On peut y entendre un écho ») — SUP-1ed68e823684afe0.
4. S4.P1 (nouveau), verbatim du paragraphe des forfaits, italiques de « forfaits » et « toutes », et la conclusion marquée comme interprétation (« On peut comprendre que… pas seulement financier ») — SUP-1ed68e823684afe0 ; bornée par SUP-f9c31dd571ecfd35 (pas de définition de la hiérarchie fonctionnelle, reprise en S4.P2).
5. S5.P2, désignation des travaux de la note 21 : Dvoretzky, Kiefer et Wolfowitz (Econometrica, avril 1952), Arrow, Harris et Marschak, « Optimal inventory policy » (Econometrica, juillet 1951), deux noms écorchés — SUP-c65a3ed8bc3b37d5, SUP-230867dbb5dd7e44, SUP-2a2c1cdcdd56eb45. Désignation seulement ; la phrase de clôture renvoie à leur lecture « s'ils en disent quelque chose », sans rien affirmer de leur contenu (SUP-06aa41ef5085ce82 : non ouverts).
6. S5.P1, « Aucune n'est présentée comme sienne » — SUP-c65a3ed8bc3b37d5 (« il ne les présente jamais comme siennes »).
7. lead[1], « dans la Revue économique » — SUP-21325e75fc8026d4 ; « une phrase qui la restreint » — SUP-f9c31dd571ecfd35 (« il y ajoute une restriction »).

Phrases neuves non sourcées de nature stipulée (vignettes « Imaginons… » du lead[0] et de S3.P1) : hypothétiques explicites, sans attribution ni donnée.

## Prescriptions de l'audit écartées

- La phrase de clôture suggérée (« la même note … désigne les travaux qui chiffreront la rupture ») n'est pas écrite telle quelle : dire que ces travaux chiffrent la rupture serait une affirmation de contenu sur des textes non ouverts ; seul `notes[4]` le dit d'une autre carte. Remplacée par une question ouverte sans contenu attribué.
- Rien sur la hiérarchie fonctionnelle au-delà du verbatim (SUP-f9c31dd571ecfd35), rien sur la disparité des rythmes (interdit par SUP-1ed68e823684afe0).

## Points à surveiller pour le fact-check

- Les verbatims « Si l'on se place du pur point de vue financier » et le paragraphe des forfaits ne figurent que dans `lecture.json` ; le contrôle des citations les a acceptés.
- `lecture.json` `$.quotation.locator` (SUP-4960ae7ab3175d6f) place la citation « section 4° », contredit par `notes[1]` et `review.notes[2]` de l'enregistrement validé. Le texte n'emploie que la formulation commune « fin de la section » 3°. Divergence ajoutée à `limits`.

## limits

Trois paragraphes conservés ; un quatrième ajouté : divergence de localisation entre couches (SUP-724fa7bddea32e61, SUP-9a956c93e0059447, SUP-57d2a99966f2eea1, SUP-4960ae7ab3175d6f) et interdiction de relier l'objection à la disparité des rythmes ou de définir la hiérarchie fonctionnelle (SUP-1ed68e823684afe0, SUP-f9c31dd571ecfd35). Aucun contenu de `limits` remonté dans le texte lecteur.

## Delta par paragraphe (contrôle)

- lead[0] : un article sans valeur peut bloquer la production (scène hypothétique).
- lead[1] : pourquoi on trie, que l'argent est un critère possible, qu'un auteur de 1956 expose puis restreint.
- S1.P1 : la constatation est d'autrui (experts américains, Rambaux).
- S1.P2 : nom et principe de la méthode, déséquilibre chiffré des trois groupes.
- S1.P3 : règle de conduite et sa justification (75 % contrôlés).
- S2.P1 : l'objection verbatim et sa place.
- S2.P2 : deux grandeurs distinctes, italique préparé dès p. 78.
- S2.P3 : l'objection est de l'auteur.
- S3.P1 : deux questions, deux ordres qui peuvent s'inverser (cas cher non bloquant).
- S3.P2 : le risque d'arrêt n'a pas été examiné.
- S4.P1 : la règle positive de l'auteur (forfaits choisis sur toutes les exigences).
- S4.P2 : ce qu'il ne fait pas.
- S4.P3 : restriction, pas réfutation.
- S4.P4 : pas une affaire de chiffrage.
- S5.P1 : l'article est une revue d'autrui ; précaution sur les coquilles.
- S5.P2 : la recherche technique nommée et écartée ; ouverture vers ces textes.

Aucune auto-validation : la version doit repasser par PREPARE (SHA modifié), puis fact-check et revue indépendante.

## Correction FACTCHECK_FIX — boucle 1/2 (2026-11-20)

Gate FACTCHECK_FAIL sur deux claims ; correction minimale, aucune affirmation nouvelle.

- **C011 TOO_STRONG** (`sections[0].paragraphs[0]`) : « qu’une note appelle au bas de la page » → « auquel renvoie une note ». La position « au bas de la page » est retirée ; reste seulement le renvoi par note, établi par SUP-53a76dd0d27cc9e4 / SUP-8ac51b893ed9f17d.
- **C066 CONFLICT** (`sections[4].paragraphs[1]`) : « deux noms étant écorchés par l’imprimé » → « des noms étant écorchés par l’imprimé ». Le nombre est retiré, puisque les appuis divergent (deux selon SUP-c65a3ed8bc3b37d5 / SUP-230867dbb5dd7e44, trois avec le prénom d’Arrow selon SUP-2a2c1cdcdd56eb45 / review.notes[7]).
- **limits[1]** (interne, non lecteur) : « avec deux noms fautifs » → « avec des graphies fautives », pour la même raison.

Mots du texte lecteur (`--check`) : 1596 → 1592 (−4). Aucun ajout, donc aucun support à citer.
`npm run corpus:deepen -- --check --only=criticite-technique-contre-poids-financier` : PASS.
Le SHA du deepening a changé : repasser par PREPARE.
