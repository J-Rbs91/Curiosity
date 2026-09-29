concept : ligne-d-approvisionnement-ignoree
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=ligne-d-approvisionnement-ignoree`
→ « 1 approfondissement(s) contrôlé(s), 1746 mots. Rien projeté. », aucun avertissement de
citation non sourcée)

## Périmètre lu

- `corpus/deepenings/PROTOCOLE.md`, `corpus/deepenings/AUDIT_PROTOCOL.md`,
  `corpus/deepenings/FACTCHECK_PROTOCOL.md` ;
- `corpus/deepening-audits/work/ligne-d-approvisionnement-ignoree/audit.md` (verdict `REVISE`) ;
- `corpus/deepenings/ligne-d-approvisionnement-ignoree.json` (version auditée) ;
- `corpus/validated/ligne-d-approvisionnement-ignoree.json`, `notes` et bloc `review` en entier ;
- champ `dossier` = `corpus/evidence/ligne-d-approvisionnement-ignoree/lecture.json` : chemin
  conventionnel, même répertoire que l'identifiant. Répertoire listé moi-même
  (`ls -la corpus/evidence/ligne-d-approvisionnement-ignoree/`) : un seul fichier, `lecture.json`,
  33 Ko, lu intégralement champ par champ (`attribution`, `quotation`, `sources_ouvertes[0..6]`,
  `definition_de_lauteur`, `reserves[0..11]`). Pas de `scouting.json`, rien d'autre à ouvrir ;
- `scripts/corpus/lib/deepenings.mjs` et `scripts/corpus/deepen.mjs`, pour connaître le périmètre
  exact du contrôle de citations (il compare à l'enregistrement validé **et** aux fichiers de
  dossier résolus, donc les verbatim de `lecture.json` sont citables) et les bornes de volume.

Aucune recherche web, aucun fait ajouté de mémoire.

Niveaux d'accès respectés : `metadata-only` sur l'article de *Management Science* de mars 1989 et
sur *Business Dynamics* (2000). Le texte lecteur ne dit **rien** du contenu de ces deux sources :
l'article de 1989 n'y est pas mentionné du tout, et *Business Dynamics* n'y paraît que par des
éléments de notice (année, extension, sujet du titre) suivis de « il faudra l'ouvrir pour le voir ».
L'extrait EOLSS est `partial` et déclaré lu en entier pour ses neuf pages : sa matière (régulation
d'un stock, trois tâches du décideur) est employée sans y localiser aucun verbatim, comme
`reserves[0]`, `reserves[2]` et `reserves[3]` l'exigent.

## Ce qui a été fait, défaut par défaut de l'audit

**1. S4.P3, argument pris à contre-sens de la source (défaut majeur).** L'ancienne conclusion
(« L'amplification n'est pas inscrite dans la longueur des délais ni dans la forme de la chaîne :
elle dépend d'un nombre ») est supprimée. Le nouveau S4.P3 tient la même fonction (interdire la
fatalité) avec les deux énoncés que le dossier fournit pour cela : la question empirique de la p. 7
(`definition_de_lauteur` : « Whether managers account for the supply line is an empirical question
in any particular situation. ») et la p. 26 (« The same heuristic may produce stable behavior in one
setting and oscillation in another solely as a function of the feedback structure in which that
[rule is embedded] », commentée dans le dossier comme déplaçant la cause de l'individu vers la
structure). Le paragraphe conclut donc désormais dans le sens de la source : la cause n'est pas
tout entière chez le décideur, elle est aussi dans l'agencement de stocks et de délais.

**2. S5, l'agrégation annoncée et jamais livrée (défaut majeur).** Nouveau paragraphe S5.P2, qui
dit ce qu'est l'agrégation : la ligne d'approvisionnement qui compte pour une entreprise réelle
n'est pas la sienne seule, elle est répartie entre concurrents et chacun ne connaît bien que sa
propre part (`reserves[6]` et `notes[3]`) ; d'où ce sur quoi la vérification devra porter, « not
only on the decision processes of individual firms but also on the availability, timeliness,
salience, and perceived accuracy of supply line information » (p. 25), rendu en français. Le
paragraphe se ferme sur le déplacement que cela opère : d'un trait prêté aux personnes à une
information qu'une organisation rend visible ou non.

**3. S3, l'affirmation centrale restée assertée (défaut majeur).** La chaîne causale du dossier est
maintenant dans le texte, répartie sur deux paliers : S2.P3 établit le fait (la demande du client,
seule perturbation externe, monte une fois puis ne bouge plus, et l'oscillation est produite par la
rencontre des décisions avec la structure, p. 15) ; S3.P3 établit ce que les joueurs en croient
(la majorité juge invariablement la demande oscillante, presque aucun n'incrimine ses propres
décisions, p. 22-23) et la conséquence pratique que Sterman en tire (l'effort quitte le point de
levier, la règle de gestion du stock, pour aller vers l'anticipation des chocs externes). S3.P4
fait alors **tomber** la phrase centrale au lieu de l'asserter, et la cite pour la première fois,
en français, dans les termes exacts de l'enregistrement : « Même une prévision parfaite n'empêchera
pas un gestionnaire qui ignore la ligne d'approvisionnement de commander en excès. » (p. 23).

**4. Les deux resserrements demandés.** La seconde moitié de l'ancien S1.P2 (« une règle de
décision qui compare le stock à sa cible et commande la différence… recommence le même calcul à
chaque période »), qui reformulait le restaurant du `lead` en vocabulaire abstrait, est supprimée.
La seconde citation anglaise de S4.P2, qui redisait mot pour mot le « facteur tombe à 85 % » de la
phrase française précédente, est supprimée.

**5. Les deux sauts de prérequis.** S2.P1 nomme les onze équipes de quatre et les quatre rôles
(détaillant, grossiste, distributeur, usine) : l'« usine Grizzly » de S4.P1 n'arrive plus de nulle
part. S4.P2 glose le retard accumulé sur place (« les commandes reçues et non servies »), ce qui le
rattache à la composition donnée en S1.P1.

**6. La continuité avec le titre français.** S1.P1 pose l'équivalence en apposition, « un nom,
supply line, la ligne d'approvisionnement », sans prétendre à un usage francophone attesté, que
`limits` continue d'interdire.

**7. La sortie (pouvoir d'ouverture 2/4).** L'ancien S5.P3, formule d'équilibre dont l'audit ne
retenait qu'une proposition neuve et rhétorique, est supprimé. S5.P4 pose la question que le texte
de 1987 laisse ouverte, sous la forme que le dossier lui donne (là où l'information sur ce qui est
commandé et non reçu est disponible, à jour et tenue pour fiable, le défaut se réduit-il ?), puis
nomme le livre de 2000 qui reste à ouvrir.

**8. Matière sous-exploitée, employée.** Structure du problème et trois tâches du décideur en
S1.P2 (extrait EOLSS, `definition_de_lauteur`), avec le clou en contraste ; méthode d'estimation en
S3.P1 ; chiffres de l'amplification et du coût en S2.P2 (700 %, pic moyen de 32 caisses contre 4 à
8 commandées, période moyenne de 21 semaines, coût d'équipe à dix fois le repère) ; mécanisme de
débordement de Grizzly en S4.P1 (« the orders already in the pipeline continue to arrive,
ultimately swelling inventory above desired levels by nearly a factor of three ») ; corroboration
1947-1987 en S5.P3.

**9. `limits`, frontière replacée et raccourcie.** L'ancien `limits[0]` attribuait la variante
« the larger the supply line must be » à « sa reprise ultérieure » puis renvoyait aux p. 321-339 de
l'article de 1989, `metadata-only` : c'est exactement la localisation que `reserves[2]` et
`notes[1]` interdisent deux fois. L'ancien `limits[1]` faisait par ailleurs désigner *Business
Dynamics* par « ces mille huit pages » au milieu d'une phrase dont le sujet était l'extrait de neuf
pages. Nouveau découpage : `limits[0]` dit que tout verbatim se localise sur le document de travail
de 1987 et sur lui seul, et signale la divergence de folios entre les deux couches sans la trancher
(restaurant p. 9 et jeu p. 10 retenus, p. 6-7 et p. 13 signalés) ; `limits[1]` dit que l'extrait de
2005 ne porte aucun folio, que son texte a été réécrit, que rien ne s'y localise, et nomme les deux
sources qu'il recompose avec leur état d'accès et l'interdit qui en découle ; `limits[2]` et
`limits[3]`, jugés en règle par l'audit, sont conservés et légèrement resserrés. Volume : 222 mots
contre 224, en quatre paragraphes, chacun nommant une source, son accès et l'affirmation qu'il
interdit.

## Choix documentaires assumés

- **Folios non déplacés.** Le texte garde « page 9 » pour le restaurant et « (p. 10) » pour la
  description du jeu, c'est-à-dire la couche `review` (relecture sur image, concordance
  folio/index vérifiée sur trois ancrages), là où `lecture.json` écrit « p. 6 et 7 » et p. 13.
  Conformément à l'audit, la divergence est signalée dans `limits` et non tranchée. Pour la même
  raison, le clou et les trois tâches du décideur sont introduits **sans page** : l'extrait EOLSS
  ne porte aucun folio (`reserves[3]`) et le clou est localisé p. 6 par la seule couche dont les
  folios divergent.
- **Anglais réduit de onze à cinq citations**, chacune adossée à une phrase française qui en donne
  le sens : le restaurant (`lead`), l'ancienneté du jeu (S2.P1), les deux bornes de β (S3.P1),
  Grizzly (S4.P1), l'agrégation (S5.P1). Les passages que l'audit désignait comme demandant au
  lecteur francophone de faire le travail lui-même (« the backlog of the subject's supplier (if
  any) », la seconde citation de S4.P2) sont rendus en français. La citation centrale est désormais
  donnée en français, dans les termes exacts de l'enregistrement.
- **Une donnée écartée volontairement :** la variance des commandes de l'usine à 5,5 fois celle du
  détaillant. Elle mesure le même phénomène que le facteur de 700 % retenu, et la garder coûtait
  seize mots sans nouveau delta.

## Delta de chaque paragraphe, texte lecteur

| Bloc | Delta |
|---|---|
| `lead[0]` | une règle qui regarde l'écart visible et commande la différence commande plusieurs fois le même manque dès qu'il y a un délai ; la scène est de Sterman, 1987. |
| `lead[1]` | la même position vaut à l'échelle d'un magasin ou d'une usine, avec des semaines au lieu de minutes ; d'où la question qui organise le texte : le décideur compte-t-il ce qui roule ? |
| S1.P1 | cette quantité a un nom et une composition en trois endroits, dont aucun n'est chez soi, et c'est pourquoi son omission est facile. |
| S1.P2 | un stock ne s'influence que par ses flux, avec délai ; le décideur a donc trois tâches et non deux, la troisième portant sur l'invisible ; sans perte ni délai (le clou) elle disparaît, avec délai son absence prédispose à l'instabilité. |
| S2.P1 | le dispositif, sa paternité (MIT, déjà ancien en 1987) et l'échantillon : onze équipes de quatre rôles, quarante-quatre joueurs. |
| S2.P2 | ce que les onze parties produisent, mesuré : oscillation de période 21 semaines, amplification de 700 % du client à l'usine, coût d'équipe à dix fois le repère. |
| S2.P3 | le fait contre-intuitif : la seule perturbation externe ne bouge pratiquement pas, l'oscillation est produite à l'intérieur. |
| S3.P1 | comment le résultat est obtenu (règle générale ajustée sur les commandes réelles, pas sur des déclarations) et ce que β mesure, avec ses deux bornes ; ignorer est une fraction. |
| S3.P2 | l'ordre de grandeur : 0,34 en moyenne, cinq joueurs sur quarante-quatre au-dessus des deux tiers, optimum simulé à 1. |
| S3.P3 | ce que les joueurs croient (demande jugée oscillante, causes attribuées au dehors) et ce que cette attribution coûte : l'effort quitte le point de levier. |
| S3.P4 | la phrase centrale devient une conséquence du mécanisme : le paramètre porte sur ses propres envois, donc mieux prévoir ne répare rien. |
| S4.P1 | à paramètre nul, le mécanisme complet du débordement (commandes coupées trop tard, stock presque triplé) et l'amplification à 290 %. |
| S4.P2 | à paramètre 1,05, un choc plus fort reçu et plus faible transmis, avec la raison temporelle (commandes redescendues avant le maximum du retard accumulé) et 85 %. |
| S4.P3 | la bonne portée à donner au contraste : question empirique cas par cas, et régime déterminé par la structure de rétroaction autant que par le décideur. |
| S5.P1 | l'auteur écarte lui-même l'oubli ; l'oubli n'est que la borne basse du paramètre. |
| S5.P2 | ce qu'est l'agrégation, et le déplacement qu'elle opère : d'un trait de caractère vers la disponibilité, la fraîcheur et la fiabilité perçue d'une information. |
| S5.P3 | le statut du résultat : hypothèse non vérifiée hors du laboratoire, adossée à 44 joueurs et à une concordance de forme avec la production américaine de 1947 à 1987. |
| S5.P4 | la question laissée ouverte, et l'ouvrage de 2000 qui reste à ouvrir. |

Aucun paragraphe sans delta, aucune paire consécutive au delta identique, aucune section dont le
rôle principal serait de répéter une section antérieure (S1 objet et structure, S2 dispositif et
mesure, S3 méthode et grandeur, S4 deux régimes, S5 explication de rechange et statut).

## Contrôles

1. Delta formulé pour chacun des dix-huit paragraphes : ci-dessus.
2. Paragraphes sans delta supprimés ou fusionnés : ancienne seconde moitié de S1.P2, ancien
   S2.P3 (« la plupart tiennent trop peu compte », que 0,34 et 11 % disent plus précisément),
   ancien S5.P3.
3. Aucune section ne répète principalement une précédente.
4. Frontières documentaires : rien du contenu des deux sources `metadata-only` ; aucune
   localisation sur l'extrait EOLSS ; aucune citation, page, date ou chiffre absent de
   l'enregistrement ou de `lecture.json` (le contrôle de citations passe sans avertissement).
5. Aucun contenu de `limits` remonté en bloc visible ; les seules limites qui atteignent le lecteur
   sont conceptuelles et sourcées (S4.P3, S5.P1 à S5.P3).
6. `npm run corpus:deepen -- --check --only=ligne-d-approvisionnement-ignoree` : PASS, 1746 mots
   (1 524 de texte lecteur, 222 de `limits`).
7. Rien à corriger après le contrôle.

## Ce qui reste à faire, et qui n'est pas de mon ressort

Le SHA du fichier a changé : tout fact-check antérieur est invalidé et l'orchestrateur doit
reprendre à `PREPARE`. Je ne rends ni `ACCEPT` ni `FACTCHECK_PASS`.

Volume à 1 746 mots, soit 46 au-dessus de la cible haute de 1 700 du protocole de rédaction, pour
1 000-2 100 de bornes dures dans le contrôle : c'est le prix des trois compléments de mécanisme exigés par l'audit,
obtenu après quatre passes de resserrement (le premier état de la réécriture faisait 2 173 mots).
`limits` est à 222 mots pour une fourchette annoncée de 100-200, avec quatre frontières distinctes
à tenir (folios divergents, extrait sans folio et réécrit, deux sources de notice seule, rendu
français sans usage attesté, paternité du jeu non établie).

Note de propreté d'arbre : `corpus/deepenings/conscience-de-la-situation.json` apparaît modifié
dans `git diff`. Cette modification ne vient pas de moi et n'a pas été touchée.
