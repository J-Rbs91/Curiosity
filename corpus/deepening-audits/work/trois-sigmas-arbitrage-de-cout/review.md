concept : trois-sigmas-arbitrage-de-cout
verdict : REJECT
factcheck_sha_match : PASS
baseline_blob_sha : aacc982e9fa6cf1b77578d334045d367c94fcd11

GATE PRÉALABLE

- SHA-256 recalculé de `corpus/deepenings/trois-sigmas-arbitrage-de-cout.json` :
  `34596d12d292c27c5753d47aa2f1186da288079eb9bde76682f64523489ede22`.
- `factcheck-gate.json` : `candidate_sha256` identique, `verdict: FACTCHECK_PASS`, 59/59 claims
  soutenus, 0 échec, 0 erreur structurelle. Liaison établie, le gate est valide.
- Blob de base contrôlé : `git cat-file -p aacc982e…` rend un JSON d'approfondissement portant
  `conceptId: trois-sigmas-arbitrage-de-cout`, 5 sections de 3 paragraphes, 1252 mots lecteur.
  C'est bien la version décrite par `audit.md`. Le rejet ne porte donc pas sur le gate.

Volumes mesurés (non repris des comptes rendus) :

|                        | base  | proposition |
|---|---|---|
| texte lecteur          | 1252  | **1073**    |
| `limits` (interne)     | 191   | **294**     |
| paragraphes par section| 3/3/3/3/3 | 3/3/3/2/4 |

Le texte lecteur passe sous le plancher de `PROTOCOLE.md` §5 (« en dessous de 1 100, le texte n'a
rien ajouté ») et le total ne reste dans la fourchette que parce que `limits` a gagné 103 mots
pendant que le lecteur en perdait 179. `limits` compte désormais 5 paragraphes et 294 mots, contre
« 2 à 4 paragraphes, 100-200 mots » au tableau de `PROTOCOLE.md`. Le champ reste interne et
n'affleure nulle part dans le texte lecteur : ce point, lui, est tenu.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     « Le calcul est juste » retiré (S5.P1) ; la propriété « ne suppose aucune forme particulière de distribution » remplacée par ce que Shewhart fait de l'inégalité, comme l'audit le prescrivait ; `notes[12]` exploitée (signe strict signalé) ; bornage « ces deux pages » conservé mot pour mot, `notes[1]` respectée ; source `metadata-only` toujours confinée à `limits`. Aucune fragilité visible ne subsiste. C'est le seul axe où le cycle gagne franchement.
progressivité pédagogique      3/4     2/4     Gain : la réponse (« un nombre, trois, choisi sur l'expérience ») arrive enfin en lead[1], et la phrase de Shewhart qui la pose est donnée en S3.P3 avec sa traduction validée. Pertes : (a) `t` n'est plus jamais interprété — S3.P1 dit seulement « elle met en rapport cette probabilité P et le nombre t », de sorte que le lecteur ne peut relier la valeur 3 à la ligne qu'il s'agit de tracer ; (b) S2.P3 ne fait plus avancer, il reformule S2.P1 puis S2.P2 ; (c) S5.P2 conclut « elle aboutit au bon nombre » alors que S5.P1, ramené à « les fausses alarmes ne seraient que de 0,27 % », ne dit plus à quel seuil ce taux correspond : la transition est fluide et le chaînon manque ; (d) le bloc lead[0] → S1.P1 → S1.P2 → S1.P3 stagne (voir ci-dessous).
densité / non-redondance       3/4     2/4     Gain : S4.P3, le paragraphe sans delta, est bien supprimé (S4 passe à 2 paragraphes) ; l'observation sur les mots italiques ne vit plus qu'en S2.P2 (groupe 2 réellement traité) ; la conclusion « le coût, pas la loi » n'est plus servie trois fois. Pertes, toutes nouvelles : (a) le groupe 1 de l'audit (lead[0]/S1.P1) est **aggravé**, pas corrigé — lead[0], que l'audit donnait « à conserver tel quel, le meilleur passage », est réduit à « aller chercher un ennui qui n'existe pas, ou laisser passer un ennui qui existe », soit exactement la glose française que S1.P1 sert quatre lignes plus bas (« le coût de chercher un ennui qui n'existe pas, et ce qu'on perd à laisser passer ceux qui existent ») ; (b) S1.P2 ajoute alors la seule structure du compromis, et S1.P3 se clôt sur « ce sont ces deux dépenses que la phrase de la page 276 met en balance », c'est-à-dire un renvoi à S1.P1 : quatre paragraphes consécutifs sur la même proposition ; (c) **répétition recréée ailleurs** : S2.P3 « La voie qu'il écarte tirerait la valeur de t d'un niveau de confiance choisi sur une loi supposée connue » et S4.P2 « la voie déductive, celle qui tirerait t d'un niveau de confiance posé sur une loi connue » sont quasi mot pour mot ; la base ne portait cette phrase qu'une fois, en S4.P2. Un paragraphe sans delta a été supprimé, un autre créé.
clarté                         4/4     3/4     P n'est plus que « une probabilité associée aux limites », si bien que « Une seule commande, deux effets contraires » (S1.P2) affirme un mécanisme dont le lecteur ne sait plus quelle est la commande ; `t` reste une lettre sans grandeur ; « La voie qu'il écarte » prend son antécédent au paragraphe précédent (réserve 4 du réécrivain, exacte) ; l'entrée en matière perd toute situation concrète alors que `PROTOCOLE.md` fait du `lead` « le passage le plus important du texte », posé « si possible » sur une situation concrète. Le gain réel : « le graphique » non introduit a disparu de S2.P1.
profondeur explicative         4/4     3/4     Restent intacts les deux meilleurs paliers : S3.P2 (borner n'est pas choisir, « We are still faced with the choice of t ») et S5.P2-P3 (la justification par la normalité refait en déduction un choix d'expérience ; une règle empirique survit à l'ignorance de la loi). Sont perdus : le mécanisme de S1.P2, que l'audit appelait « le cœur du texte » (P = probabilité qu'un point tombe à l'intérieur, l'augmenter c'est écarter les limites) ; la distinction des deux régimes de justification en S2.P3, que l'audit notait « delta fort, une distinction qu'il ne pouvait pas faire avant » ; la conséquence propre de S1.P3 ; l'unité dans laquelle la valeur se compte. Trois pertes contre zéro ajout : la profondeur est obtenue en moins d'endroits qu'avant, et uniquement par retrait.
valeur des exemples           3/4     2/4     Les deux ateliers voisins deviennent un atelier unique (C020). L'exemple ne fait plus voir que le même écart n'appelle pas la même réaction selon qui paie : il chiffre deux dépenses déjà nommées et renvoie à la phrase qui le précède. Il illustre, il n'ouvre plus rien. Le réécrivain le dit lui-même : « S1.P3 est désormais illustratif plus que progressif ».
limites / nuances              4/4     4/4     Inchangé et bien tenu. S4 désarme le contresens avant qu'il se forme, S5 avant que le lecteur croie la règle adossée à la loi normale, et l'absence du 0,27 % reste bornée « dans ces deux pages » dans le texte lecteur comme dans `limits[1]`, exactement ce que `notes[1]` exige. Le piège propre à cette carte n'a pas été franchi.
pouvoir d'ouverture            3/4     4/4     S5.P4 donne enfin un objet nommé : le mémorandum du 16 mai 1924 des Bell Telephone Laboratories, avec son existence et sa date seules, et « il faudra l'ouvrir pour le savoir ». Le fait sortait de `limits` et y reste correctement borné. Second gain net du cycle.

défauts initiaux corrigés :
- S4.P3, le paragraphe sans aucun delta, est supprimé ; sa seule idée propre est logée en S4.P2.
- La conclusion « le coût, pas la loi », servie trois fois, ne l'est plus qu'en annonce (lead[1])
  et en résolution (S3.P3) : c'est un couple annoncer/tenir, acceptable.
- Les deux mots italiques ne sont plus commentés qu'à un seul endroit, S2.P2.
- La phrase que le concept attendait est donnée : « Experience indicates that t = 3 seems to be an
  acceptable economic value », avec la traduction validée « une valeur économique acceptable » et
  l'explicitation de l'adjectif. La formule fautive « économiquement acceptable » disparaît. C'est
  la meilleure page du cycle, et elle répond à la prescription centrale de l'audit.
- « Le calcul est juste » et la propriété sans appui de S3.P2 sont retirés ; la valeur arrive en
  proposition principale et non en subordonnée.

régressions détectées :
- Groupe redondant 1 aggravé, non traité : lead[0] a été vidé de sa scène d'atelier et se
  superpose maintenant à la glose de S1.P1. Le bloc lead[0]/S1.P1/S1.P2/S1.P3 sert quatre fois la
  même proposition — deux erreurs, deux dépenses, effets opposés — avec un seul incrément réel
  (l'absence d'optimum commun). C'est la séquence de trois paragraphes au delta substantiellement
  identique que §4 interdit à un `PASS` et que ma consigne d'`ACCEPT` interdit aussi.
- Répétition recréée : S2.P3 et S4.P2 énoncent la même voie déductive dans des termes presque
  identiques, là où la base ne l'énonçait qu'une fois.
- Paragraphe sans delta déplacé, non éliminé : S2.P3 était noté « delta fort » ; il ne contient
  plus qu'une étiquette (« un changement de justification ») suivie de deux redites.
- Profondeur dégradée en trois points par retrait sans compensation (mécanisme de P, deux régimes
  de justification, conséquence de S1.P3), et texte lecteur sous le plancher de 1 100 mots.
- Le concept n'est plus raccordé à son unité. La carte a pour titre validé « Trois sigmas, un
  arbitrage de coût » et pour hook validé « Sur quoi repose le choix de trois sigmas plutôt que
  d'une autre limite ? » : le texte répond sur `t = 3` sans jamais relier `t` à une largeur, à une
  unité ni à la ligne du `lead`. Le lecteur ne peut faire l'identification que par le titre, donc
  par le seul endroit que le fact-check n'a pas pu contrôler.
- Dommage collatéral en S5 : le 0,27 % ayant perdu son ancrage géométrique, la coïncidence qui
  fait tout l'intérêt de la section — la voie déductive retombe sur le même nombre — n'est plus
  vérifiable par le lecteur, et S5.P2 la lui demande sur parole.

sur les deux questions posées :
1. Le retrait de l'identification est **honnête** : `factcheck-fixes.md` montre des `NARROW` et
   des `REMOVE` vers des formulations de l'enregistrement, aucun renversement (« t = 3 n'est pas
   trois sigmas » n'est écrit nulle part), et la perte est inscrite en `limits[4]`. Le geste n'est
   pas une amputation malhonnête. Mais il n'est pas non plus une amélioration pédagogique : il
   laisse une trajectoire construite pour une matière qui s'est révélée non soutenue, et ce qui
   reste est le cadre à demi vidé de cette trajectoire, non une trajectoire conçue pour la matière
   réellement disponible. Le texte enseigne encore quelque chose — l'arbitrage de coût et la base
   empirique passent entièrement —, donc je ne conclus pas à l'inintelligibilité ; je conclus que
   la question « sur quoi repose le choix » est traitée alors que la question « le choix de quoi »
   ne l'est plus.
2. Les quatre groupes redondants ne sont traités qu'à moitié : les groupes 2 et 4 le sont
   proprement, le groupe 3 est ramené à un couple annonce/résolution acceptable, mais le groupe 1
   est aggravé par les corrections factuelles du `lead`, et deux redondances neuves apparaissent
   (S2.P3/S4.P2, S1.P3 renvoyant à S1.P1). Le resserrement s'est bien perdu en partie dans les
   boucles factuelles : `rewrite.md` décrit encore, dans sa table de deltas, un S2.P3 à « deux
   régimes de justification », un S3.P1 portant « les unités t et sigma » et un S1.P3 où « la même
   mesure n'appelle pas la même réaction » — aucun de ces trois n'existe dans le fichier soumis.
   L'assertion « aucun paragraphe consécutif ne partage son delta », répétée à l'identique dans
   les trois comptes rendus, n'a jamais été re-testée sur le bloc S1 de l'état final ; elle y est
   fausse.
3. Des trois réserves du réécrivain, deux sont acceptables (l'antécédent à distance de « La voie
   qu'il écarte », gêne de lecture réelle mais locale ; sigma non expliqué, tracé en `limits`), et
   la troisième ne l'est pas : un S1.P3 devenu illustratif fait basculer toute la section S1 dans
   la stagnation, puisque c'était le seul de ses paragraphes à porter une conséquence.

raison de la décision : REJECT. Le gate est valide et je ne le rouvre pas : le texte soumis ne
dépasse aucune de ses preuves, et deux axes progressent réellement (fidélité 3→4, ouverture 3→4),
avec une vraie réussite en S3.P3. Mais §7 demande une amélioration de la progression, et cinq axes
sur huit reculent. Les deux conditions d'`ACCEPT` qui se vérifient mécaniquement échouent : il
subsiste une séquence de plus de trois paragraphes au delta substantiellement identique
(lead[0]/S1.P1/S1.P2/S1.P3), et la profondeur explicative est dégradée en trois points par retrait
sans compensation. Le défaut central du diagnostic — la redondance — est déplacé plus que résolu :
un paragraphe sans delta supprimé, un autre créé ; un groupe redondant dissous, deux redondances
neuves installées ; et le groupe que l'audit citait en premier est aggravé par le vidage du `lead`,
que l'audit demandait expressément de ne pas toucher. Le texte lecteur tombe à 1073 mots, sous le
plancher de `PROTOCOLE.md` §5, et le total ne tient que grâce à un `limits` de 294 mots qui excède
lui-même sa propre fourchette.

Ce rejet n'est pas une demande de restaurer la base telle quelle : elle contient précisément les
affirmations que les trois gates ont refusées (P défini, l'inégalité dite indépendante de la forme
de la loi, « Le calcul est juste », sigma glosé), et les réintroduire serait pire. Il demande un
nouveau diagnostic : cette carte a besoin soit d'une lecture primaire de l'ouvrage qui fournisse
l'unité et la définition de P — c'est-à-dire ce qui manque pour que le titre et le hook validés
soient honorés —, soit d'une trajectoire pensée d'emblée pour les deux pages réellement lues, où
lead[0], S1 et S2.P3 seraient réécrits au lieu d'être rognés. Les acquis du cycle à conserver dans
ce travail : S3.P3 avec la citation et sa traduction validée, la suppression de S4.P3,
l'observation sur les italiques à un seul endroit, S3.P2 refondu, et S5.P4 sur le mémorandum de
1924.
