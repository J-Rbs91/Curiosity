concept : apprentissage-comme-recherche-heuristique
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=apprentissage-comme-recherche-heuristique`)

Version de départ : SHA b3e4a8d4… (celle du pack). Le SHA a changé : le pack doit être reconstruit
(`PREPARE`) avant tout mapping.

## Volume du texte lecteur (lead + sections, découpage aux espaces)

- avant : 1 425 mots
- après : 1 537 mots (+7,9 %, dans la cible de l'audit, 1 400 à 1 560)

Répartition après : lead 2 paragraphes (inchangés sauf « Imaginons ») ; S1 2 ; S2 3 ; S3 2 ; S4 2 ; S5 4.

## Lecture préalable

Protocoles (PROTOCOLE, AUDIT_PROTOCOL, FACTCHECK_PROTOCOL), deepening, fiche validée, champ
`dossier` (= `corpus/evidence/apprentissage-comme-recherche-heuristique/lecture.json`, seul fichier du
répertoire, pas de `scouting.json`), lu en entier, et pack. `reserves[6]` (SUP-910ac3c77700889e) respecté :
aucune nouvelle citation entre guillemets tirée des pages lues en OCR seule (154, 158-160, 163-165,
185-186). Les seuls guillemets conservés ou ajoutés sont des verbatim de la fiche (review/notes) ou de
pages relues sur image (p. 161 « at random or by rote »).

## Retraits (sans support nécessaire)

- S2.P2 ancien (redite du statut « incomplet / conditionnel ») : supprimé.
- S3.P3 ancien (redite du lead + anticipation de S5) : supprimé.
- S5.P4 ancien (redite « proposition de conception, non compte rendu ») : supprimé.
- S5.P2 ancien réduit à la seule citation p. 186 (« quite untested »), fondu dans S5.P2 nouveau ;
  la citation p. 180 « in a very tentative spirit » est retirée.
- S1.P1 : retrait de l'appareil bibliographique (deux rapports avec mois/thèmes, « p. 155 ») ;
  remplacé par « renvoie pour le détail à des rapports antérieurs des mêmes auteurs ».
- S1.P2 : retrait de « il en donne lui-même la teneur p. 155 et p. 160 ».
- S4 : « folio » supprimé partout.

## Corrections de fragilités signalées par l'audit

- S2.P1, repoussoir « mécanisme séparé… une autre route » : supprimé ; remplacé par le dispositif à
  deux étages tel que le texte le pose (SUP-637de5e3c93e090b) et S2.P2 dit que le second étage n'est pas
  supprimé mais occupé par le solveur.
- S3.P1, « l'un des rares du texte à n'être pas au conditionnel » : supprimé.
- S1.P1, règle conditionnelle « si cette opération ne s'applique pas telle quelle… » : supprimée,
  remplacée par la formulation du dossier (table de connexions, application, « engendre à son tour de
  nouveaux buts ») ; « l'expression renvoie à deux rapports » : supprimé.
- Lead[0] : vignette marquée « Imaginons ».
- S5.P2 : « A-Environment » reste dans le titre cité du tableau, mais le mécanisme simulé est
  désormais exposé (S5.P1) avant d'être dit simulé ; aucune glose non soutenue du « A- » n'a été
  ajoutée.
- S4.P2 : retrait de « elle ne dit pas comment les humains s'y prennent », que la p. 162 (induction)
  aurait contredit.

## Ajouts et supports qui les financent

1. S1.P1 : nom du General Problem Solver (GPS), table de connexions, application de l'opération qui
   engendre de nouveaux buts, « en trois pages », renvoi aux rapports antérieurs :
   SUP-637de5e3c93e090b, SUP-6ebd0be3b4b64594, SUP-d45ffc9e789914b6, SUP-9e1642828ff7fa53 (verbatim
   « what we usually call means-end analysis »).
2. S1.P2 : pivot p. 160 (différences et tests propres à chaque environnement, noyau sans contenu du
   domaine) : SUP-637de5e3c93e090b, SUP-a4b2c7454b645dd5.
3. S2.P1 : dispositif à deux étages, programme d'apprentissage qui prend le programme de performance
   pour objet ; thèse générale p. 155 (programmes de résolution heuristique, au sens des programmes
   d'échecs et de démonstration de théorèmes) : SUP-637de5e3c93e090b, SUP-a25940e0ad90ecac.
4. S2.P2 : thèse spécifique (« pretensions » de GPS, son propre programme d'apprentissage, verbatim
   conservé) ; second étage occupé par le solveur : SUP-637de5e3c93e090b, SUP-2dc0b3967b7bb64f,
   SUP-1de2495de279e279.
5. S2.P3 : espace des pièces possibles pour un aspect du programme ; Friedberg (phrase conservée) ;
   règle p. 164 (recherche aveugle si l'on n'observe que les performances, procédés plus efficaces que
   l'essai et l'erreur si d'autres informations sont disponibles) : SUP-637de5e3c93e090b,
   SUP-6fa0d556a957f216. Phrase finale marquée comme interprétation (« On peut comprendre ainsi… »).
6. S3.P1 : « apprendre les heuristiques propres à un environnement donné » : SUP-637de5e3c93e090b ;
   citation p. 161 conservée : SUP-2dc0b3967b7bb64f, SUP-1de2495de279e279.
7. S3.P2 : la table qui associe différences et opérations ; section p. 162 ; renforcement statistique
   écarté parce qu'il se prive d'une information disponible ; solution par tests appliqués aux formes
   d'entrée et de sortie, sans essais ni erreurs : SUP-637de5e3c93e090b, SUP-cc7f969d388e00b5.
   Paraphrase seule (p. 163-164 en OCR).
8. S4.P1 : coût de l'absence de bonnes différences, « at random or by rote » (p. 161, image),
   progrès difficile à mesurer : SUP-637de5e3c93e090b, SUP-a25940e0ad90ecac ; emploi parallèle
   « effective » conservé : SUP-fb1304ecc393af79.
9. S4.P2 : résolveur expérimenté / novice, pisteur en forêt (p. 161) ; enseignement humain qui laisse
   acquérir différences et connexions par induction, supposition des auteurs (p. 162) :
   SUP-637de5e3c93e090b, SUP-99e6411c129f50cb.
10. S5.P1 : jeu de différences tenu pour le problème difficile ; langage des tests aux notions plus
    élémentaires que les différences visées (anti-circularité) ; GPS mis au travail sur l'environnement
    des programmes de différences ; buts qui donnent une direction sans point d'arrivée :
    SUP-637de5e3c93e090b. Paraphrase seule (p. 164-185).
11. S5.P2 : bilan p. 185 (bons indices, mécanismes essentiels, « au moins une variété d'apprentissage
    intelligent », en paraphrase, sans guillemets) : SUP-637de5e3c93e090b, SUP-e7006a69ae683971.
12. S5.P4 (clôture) : question empirique p. 164 ; deux objections p. 186 (jeu universel, environnements
    indépendants contre monde et sens communs chez l'humain) : SUP-637de5e3c93e090b. Paraphrase seule.

Conservés mot pour mot : lead[1], la phrase Friedberg de S2.P3, la citation p. 161 de S3.P1, la phrase
« effective » de S4.P1, l'essentiel de S4.P2, la citation du tableau 5, la citation p. 186, et S5.P3
(Newell seul en séance) en entier.

## Prescriptions de l'audit écartées ou non suivies

- Ajout 8 (tension p. 160 / p. 187) : non repris, faute de volume, et pour ne pas glisser vers
  l'inférence du contrôleur sur P1584.
- Choix de GPS plutôt que LT (optionnel) : non repris ; le motif « séparation noyau / environnement »
  est la lecture du dossier, la p. 153 ne fait que l'annoncer.
- Refus de définir en général l'« adaptive change » (p. 153) : écrit puis retiré pour tenir le budget.
- Psychological Review 1958 : non utilisé dans le texte lecteur.

## Delta par paragraphe (contrôle)

- lead[0] : progresser peut consister à mieux voir l'écart, non à calculer plus vite.
- lead[1] : cadre 1959 et statut de proposition (seule occurrence du statut avant S5).
- S1.P1 : le mécanisme moyens-fins et le fait que le chapitre ne le fonde pas.
- S1.P2 : l'environnement de la tâche, et le pivot : le savoir du domaine n'est pas dans le noyau.
- S2.P1 : dispositif à deux étages et thèse générale (apprendre exige une résolution heuristique).
- S2.P2 : thèse spécifique : GPS occuperait lui-même le second étage.
- S2.P3 : pourquoi c'est une recherche : un espace, Friedberg, aveugle contre guidé.
- S3.P1 : où porte l'apprentissage : la spécification de l'environnement, pas le noyau.
- S3.P2 : les deux pièces apprenables, et comment la table s'apprend sans essais.
- S4.P1 : efficace = qui fait résoudre ; preuve par le contraire (au hasard, sans mesure du progrès).
- S4.P2 : thèse humaine (pisteur, enseignement par induction) distinguée du mécanisme machine.
- S5.P1 : comment s'apprend le jeu de différences (langage, anti-circularité, buts sans arrivée).
- S5.P2 : rien n'a tourné ; bilan positif et réserve des auteurs, en une seule fois.
- S5.P3 : même GPS ne résolvait rien (Newell seul).
- S5.P4 : questions laissées ouvertes par les auteurs eux-mêmes.

## `limits` (interne, non affiché)

- `limits[2]` ramené à « aucune traduction publiée identifiée » (l'ancien « Rien de ce chapitre
  n'existe en français » était plus fort que la fiche, SUP-2de08b9d7e531485, SUP-585a5045aaa4dc0e).
- `limits[3]` ajouté : pages lues en OCR seule (paraphrase, pas de citation hors verbatim de la revue),
  folio 157 illisible, accès partiel à l'article de 1958.

Aucune auto-validation : ni `ACCEPT` ni `FACTCHECK_PASS` ne sont revendiqués. Prochaine étape :
`PREPARE` sur le nouveau SHA.

---

## FACTCHECK_FIX (gate 57/60, SHA 6f9313be…)

Correction minimale des trois claims `TOO_STRONG` ; aucune autre phrase touchée, aucune affirmation ajoutée.

- **C024** (`sections[1].paragraphs[2]`) : « les auteurs posent une règle » → « les auteurs ajoutent » ;
  « des procédés bien plus efficaces » → « des procédés qui peuvent être bien plus efficaces »
  (rétablit le « may be » de SUP-637de5e3c93e090b).
- **C028** (`sections[2].paragraphs[1]`) : retrait de « qu’on confond volontiers » (généralisation
  de fréquence sans support) ; la séparation des deux questions reste.
- **C037** (`sections[3].paragraphs[0]`) : phrase « Une description peut être exacte et rester
  inutile ; … son rendement pour la recherche. » retirée (opposition vérité/rendement non portée).

Mots du texte lecteur : environ 1868 avant, 1846 après (contrôle mécanique). Aucun ajout, donc
aucun support à citer. `npm run corpus:deepen -- --check --only=apprentissage-comme-recherche-heuristique` :
PASS. Le SHA a changé : reprendre à `PREPARE`.
