concept : cout-de-remonter-l-effectif
verdict : REVISE

Version auditée : corpus/deepenings/cout-de-remonter-l-effectif.json, sha256 4e6cbda2e430e49f31ab3120bc091c7d149932db8dded13eb2ddcaf6b2abce65 (identique au `candidate_sha256` du pack). Enregistrement validé sha256 f33ea2ba… (identique au pack).
Texte lecteur : 1 248 mots (lead 183 ; S1 243 ; S2 127 ; S3 206 ; S4 226 ; S5 263). Sous la cible de 1 300 à 1 700 mots, au-dessus du plancher de 1 100.

Dossier : l'enregistrement validé ne porte pas de champ `dossier` (le pack l'indique `non-declare`). Le répertoire conventionnel `corpus/evidence/cout-de-remonter-l-effectif/` contient un seul fichier, `lecture.json`, lu en entier. Il n'y a pas de `scouting.json`. Le pack a ramassé ce fichier (100 appuis) ; `access_reconciliation` corrobore les trois déclarations : P-651 en `full-text`, JSIAM 1956 et Bellman-Glicksberg-Gross 1954 en `metadata-only`.

TRAJECTOIRE ACTUELLE
- lead[0] : le lecteur apprend la situation-problème : une charge qui varie, une capacité excédentaire payée en salaires inutiles, et le réflexe de coller au besoin. Le delta est réel et concret.
- lead[1] : le lecteur apprend qu'il existe un second coût, attaché au changement et non à l'état. Il apprend aussi l'auteur, le support (rapport RAND, 1955) et l'idée d'un critère unique. C'est le delta central du texte, et il est livré en entier dès le lead. Défaut : le coût de remontée y est rempli d'un contenu concret (« retrouver des gens, les installer, attendre qu'ils tiennent le rythme ») que S3.P3 déclare absent du texte de Bellman. Ce contenu n'est pas marqué comme une image du lecteur.
- S1.P1 : le lecteur apprend le titre, le numéro, la date de révision et la place du problème dans le rapport, ainsi que la phrase d'ouverture du § 2. C'est surtout de la notice. Le delta conceptuel est faible : il se limite à la formule « a staff of employees capable of turning out a certain quantity of work ».
- S1.P2 : le lecteur apprend les deux grandeurs x(t) et r(t), que x(t) mesure du travail et non des têtes, et la contrainte x ≥ r à chaque instant. Delta net et nécessaire.
- S1.P3 : le lecteur apprend que le modèle ne connaît aucun stock, et donc que le seul levier est le niveau et le moment où on le change. Delta net : c'est ce qui distingue ce modèle des modèles de lissage par stock.
- S2.P1 : le lecteur apprend la forme exacte du premier coût, proportionnel à l'écart et à la durée, avec le verbatim. Le delta est partiel : lead[0] avait déjà donné le principe, ce paragraphe ajoute la proportionnalité.
- S2.P2 : REDONDANT AVEC S2.P1 et lead[1]. Le paragraphe redit la proportionnalité, puis « le prix d'un état », déjà posé en lead[1]. Seul apport propre : ce coût, pris seul, recommande de réduire l'écart à zéro. Son illustration est en outre inexacte : « Deux fois plus haut que le besoin » n'est pas un écart double.
- S3.P1 : le lecteur apprend que la remontée « cannot be done without cost » et que ce coût est proportionnel à la vitesse de montée (dx/dt), et non à l'ampleur du saut. Delta net.
- S3.P2 : le lecteur apprend que seule la pente positive est facturée, par max(dx/dt, 0). Delta net, mais il arrive avant l'hypothèse qui le fonde (S4.P1). La phrase finale (« ne dépend pas de l'endroit… mais du fait que l'on bouge ») est REDONDANTE AVEC lead[1].
- S3.P3 : le lecteur apprend que Bellman ne dit pas de quoi ce coût est fait et ne chiffre pas la constante. Le delta est une limite utile, mais elle contredit lead[1] sans le dire. La dernière phrase (« attachée au mouvement, et non à la position ») est une troisième reformulation de lead[1].
- S4.P1 : le lecteur apprend que la gratuité de la baisse est une hypothèse écrite, posée pour simplifier, et non un constat. Delta net, et c'est la nuance qui évite le principal contresens. Fragilités : « Reste un troisième terme » (le critère n'en a que deux, il s'agit d'une hypothèse) et « et souvent cher » (non financé).
- S4.P2 : REDONDANT AVEC lead[1] et S1.P3. Le paragraphe redit la distinction état / changement (« Le premier se règle en restant, le second en bougeant ») et les « deux questions », niveau et moment, déjà posées en fin de S1.P3. Il emploie en outre « asymétrie » pour la distinction état / changement, alors que le titre de la section l'emploie pour la distinction montée / descente.
- S4.P3 : le lecteur apprend l'arbitrage, puisque descendre au plus juste achète une facture future, et que Bellman ne recommande pas de garder de la capacité d'avance : il rend la comparaison calculable. Delta net. Mais « calculable » reste une affirmation, car le critère n'est jamais montré.
- S5.P1 : le lecteur apprend la nature du rapport, qui est un exposé de problèmes avec des crédits à d'autres (exemple de Jacobs). Delta net sur le statut du texte.
- S5.P2 : le lecteur apprend que la solution du cas continu est « simple » et renvoyée ailleurs, et que le cas discret, renvoyé à Karlin, lui est semblable. Delta net. « La solution existe, elle est simple, et elle est ailleurs » est la meilleure ouverture du texte, et elle est enfouie à l'avant-dernier paragraphe.
- S5.P3 : AUCUN DELTA pour l'essentiel. Le paragraphe aligne une maxime générale (« Poser un problème proprement est un acte de recherche à part entière… ») et répète la signature unique (déjà dans le lead) et les renvois de S5.P2. Seul apport : les noms de Glicksberg et Gross.

RÔLE DES SECTIONS
- S1 Ce qu'il faut faire, ce que l'équipe peut faire : poser le modèle (x, r, contrainte, absence de stock). Le rôle est réel, mais P1 le dilue dans la notice bibliographique.
- S2 Des salaires payés au-dessus du besoin : donner la forme du premier coût. La section est mince et se répète en P2 ; elle peut se fondre.
- S3 Le prix de la remontée : donner la forme du second coût (vitesse, pente positive) et dire ce que le texte laisse vide. C'est la section la plus utile, mais son ordre (max avant l'hypothèse) et sa contradiction avec le lead l'affaiblissent.
- S4 Descendre gratuit, monter payant : l'hypothèse de gratuité de la baisse, puis l'arbitrage. P1 et P3 portent de vrais deltas ; P2 refait le lead.
- S5 Un problème posé, une solution renvoyée ailleurs : le statut d'exposé et le renvoi de la solution. P1 et P2 sont utiles ; P3 s'épuise en maxime.

La progression générale (situation, modèle, coût 1, coût 2, hypothèse, arbitrage, statut) est saine. Le défaut est la répétition, cinq fois, du noyau « état contre changement » : lead[1], S2.P2, S3.P2, S3.P3 et S4.P2. Les trois paragraphes S3.P2, S3.P3 et S4.P1 n'ont pas des deltas identiques. Il n'y a donc pas de stagnation systémique au sens du verdict REWRITE.

SCORES
- fidélité documentaire : 2/4. Verbatim exacts et attributions solides (S2.P1, S3.P1, S4.P1, S5.P1 et S5.P2 concordent avec les appuis SUP-079a95da56ea8995, SUP-dac242ba32f415af et SUP-81b8eee51fdf2402). Mais six fragilités sont visibles :
  (a) lead[1] remplit le coût de remontée (« retrouver des gens, les installer, attendre qu'ils tiennent le rythme ») alors que SUP-90d253780b3f39bb dit qu'il n'y a aucun exemple d'atelier réel. S3.P3 dit lui-même « Ni recrutement, ni apprentissage du poste ». Le texte se contredit.
  (b) lead[1] « en deux paragraphes ». SUP-8a18ad697e763e0c (review.notes[2]) cite les deux coûts sous « Le paragraphe s'y lit » ; SUP-90d253780b3f39bb parle de « ces deux paragraphes » sans qu'on sache lesquels. Les deux couches ne s'accordent pas, et je ne tranche pas. La formule n'est pas établie et doit être évitée, pas corrigée en « un paragraphe ».
  (c) lead[1] « Au printemps 1955… Bellman les écrit » : les appuis ne donnent qu'une date de révision (« Revised 23 May 1955 », SUP-1dbf1b7c41d6c2c3, SUP-220581fb2b7519c4), pas la date de rédaction.
  (d) S1.P1 « le deuxième d'entre eux [des problèmes] » : le § 1 est « Preliminaries » et n'est pas un problème (SUP-079a95da56ea8995, SUP-dac242ba32f415af). Le lissage industriel est le § 2, c'est-à-dire le premier problème. De même, « problèmes d'ordonnancement » pour la partie III est lâche : Bellman parle d'une « class of problems which are occasionally called "smoothing" problems ».
  (e) S2.P2 « Deux fois plus haut que le besoin, deux fois plus de perte » : faux au regard de la formule (x−r) donnée par SUP-079a95da56ea8995. Une capacité double du besoin donne un écart égal au besoin, pas une perte double. C'est l'écart qui double, pas le niveau.
  (f) S4.P1 « et souvent cher » n'est porté par aucun appui. SUP-3a1f08f32d8d151a dit seulement « licencier coûte ».
  Points mineurs : S5.P2 « Deux folios plus loin » (de quoi ? les deux coûts sont au folio 39, la solution au folio 40) ; S5.P3 « Il n'y a là aucun manque » est une évaluation de rédacteur.
- progressivité pédagogique : 3/4. L'arc est bon (lead, S1, S2, S3, S4, S5). Deux accrocs : max(dx/dt, 0) est expliqué en S3.P2 avant l'hypothèse « Assuming that it costs us nothing to decrease x(t) » qui le fonde (S4.P1), alors que Bellman écrit les deux dans la même phrase (SUP-079a95da56ea8995) ; et S4.P2 fait revenir le lecteur au lead.
- densité / non-redondance : 2/4. Le noyau état / changement revient cinq fois (lead[1], S2.P2, fin de S3.P2, fin de S3.P3, S4.P2). S5.P3 n'a pratiquement aucun delta. S1.P1 est surtout de la notice. Environ quatre paragraphes sur seize n'ajoutent rien de net.
- clarté : 3/4. La langue est simple et le lead est concret. Points obscurs : « Reste un troisième terme » (S4.P1) laisse croire que le critère a trois termes ; « asymétrie » désigne deux choses différentes entre le titre de S4 et S4.P2 ; « folio » (S5.P2) est un mot d'archiviste non expliqué ; l'exemple « deux fois plus haut » (S2.P2) induit en erreur.
- profondeur explicative : 3/4. Les deux formes de coût, le rôle de la pente positive, le statut d'hypothèse et l'arbitrage sont expliqués. En revanche, le critère qui « rend la comparaison calculable » (S4.P3, lead[1] « un seul critère ») n'est jamais montré. Le lecteur ne voit pas comment les deux dépenses s'additionnent, ni que tout tient à une seule constante positive a. Les appuis le permettent.
- valeur des exemples : 2/4. Le seul exemple est l'atelier du lead, efficace, mais il déborde sur le contenu du coût (défaut A-a). L'illustration chiffrée de S2.P2 est fausse. S4.P3 raisonne sans cas, alors qu'une vignette stipulée rendrait l'arbitrage visible.
- limites / nuances : 3/4. Les nuances arrivent au bon moment : l'hypothèse de gratuité de la baisse (S4.P1), le silence sur la nature du coût et sur la constante (S3.P3), l'absence de recommandation sur la capacité d'avance (S4.P3) et la solution renvoyée (S5.P2). Elles sont affaiblies par la contradiction avec lead[1] et par la surenchère « souvent cher ».
- pouvoir d'ouverture : 2/4. Le texte se clôt sur une maxime générale (S5.P3, « Savoir où une réponse se trouve… »). Les vraies ouvertures sont absentes ou enfouies : la solution simple que le lecteur ne voit pas (S5.P2), le modèle voisin de lissage avec stock dans le même rapport (seulement dans `limits`) et le mémorandum contemporain qui compte, lui, un coût de licenciement (dans les notes, pas dans le texte).

défauts majeurs :
- Contradiction interne entre lead[1] (le coût de remontée rempli par recruter, installer, former) et S3.P3 (« Ni recrutement, ni apprentissage du poste »). Sans marquage, le lecteur attribue à Bellman ce que S3.P3 lui retire ensuite.
- Redondance du noyau état / changement (cinq occurrences) ; S4.P2 et S5.P3 presque sans delta ; S2.P2 en partie redondant.
- Le critère J n'est jamais rendu. L'affirmation centrale de S4.P3 (« la comparaison devient calculable ») reste donc déclarative.
- Ordre de S3 et S4 : le max(dx/dt, 0) est expliqué avant l'hypothèse qui le produit.
- Inexactitudes ponctuelles à risque de gate : « deux fois plus haut » (S2.P2), « le deuxième d'entre eux » (S1.P1), « au printemps 1955… écrit » et « en deux paragraphes » (lead[1]), « souvent cher » (S4.P1).
- Clôture rhétorique (S5.P3) au lieu d'une ouverture précise.

matière disponible mais sous-exploitée :
- Le critère lui-même. On peut le rendre en mots, avec la constante a comme seul paramètre : J(x) = ∫₀ᵀ [(x(t)−r(t)) + a Max(dx/dt, 0)] dt, « where a is some positive constant », à minimiser parmi les x(t) absolument continus sous la contrainte x(t) ≥ r(t), avec sa version discrète (somme sur k). Ce rendu fonde « calculable » et donne un sens précis à « selon la valeur des deux coûts » : un seul nombre, a, pèse une unité de montée contre une unité d'excédent. Appuis : SUP-079a95da56ea8995 (definition_de_lauteur, folio 40). Ce qui est financé est la forme du critère, pas un ordre de grandeur de a (SUP-90d253780b3f39bb : aucun).
- Le cadre du § 1, qui dit ce que « lissage » veut dire chez Bellman : « we wish to maintain a system in a given state, with penalties for deviations from this state », avec parfois une pénalité différente pour le dépassement et pour l'incapacité à satisfaire le besoin. Appuis : SUP-079a95da56ea8995, SUP-c8f6805cce300810. Ce cadre peut remplacer une part de la notice bibliographique de S1.P1. La seule lecture permise est textuelle : au § 2, ne pas couvrir le besoin n'est plus une pénalité mais une contrainte (« come what may »). Cette mise en regard est une lecture et doit être marquée comme telle.
- La contrainte en verbatim : « we are required to meet our committments come what may ». Appuis : SUP-079a95da56ea8995, SUP-c8f6805cce300810. Elle donne du poids à S1.P2 sans l'allonger. Attention : « committments » est la graphie de l'original et doit être conservée telle quelle si elle est citée.
- Le besoin r(t) « oscillatory » : « In general, the function r(t) will be oscillatory as a function of time ». Appui : SUP-079a95da56ea8995. Il fonde la charge qui monte et descend du lead[0] sur le texte même.
- Le mémorandum contemporain de Holt, Modigliani et Simon, qui compte un coût d'embauche et de licenciement, c'est-à-dire précisément ce que Bellman pose à zéro. Il répartit les fluctuations entre stock, heures et effectif ; Bellman ne le cite pas. Appuis : SUP-3a1f08f32d8d151a, SUP-5127db0208c54f63, SUP-9540c7a3f4e41d4a. Cette matière finance le remplacement de « et souvent cher » (S4.P1) et une ouverture. Elle ne finance rien sur le contenu du mémorandum au-delà de ces deux propriétés.
- Le second modèle de lissage du même rapport (partie V, § 2 « Production Smoothing », folios 50 à 52), traité par la programmation linéaire avec un coût de stockage de l'excédent accumulé. Appuis : SUP-703c62d71d9397a2, SUP-393e88a2d2c9e1a1. Il est utilisable comme ouverture au niveau de la désignation seulement. Les deux appuis disent que ces pages ne sont pas instruites (« telle que je la lis ») : aucun détail au-delà de « l'excédent s'y accumule et paie un coût de stockage ».

limites documentaires :
- Le contenu de la solution (forme « quite simple ») est inaccessible : Bellman-Glicksberg-Gross 1954 est `metadata-only` (SUP-6ca9e2ad8339202e, SUP-ae90397a1b3ecb79), et le renvoi imprimé [4] désigne un autre texte du même trio, annoncé « to appear » (SUP-7f7f0de72270aec9, SUP-058ea3deb3227042). Aucune phrase sur la forme de la solution n'est possible.
- La référence Karlin n'est pas résolue (SUP-ec236bb164c83341, SUP-924983a8fb9519a1).
- La version en revue de 1956 est `metadata-only` (SUP-5fe34d1bcc5ba7e7, SUP-d08d619745733523) : rien sur son contenu.
- Bellman ne dit pas de quoi est fait le coût de remontée et ne chiffre pas a (SUP-90d253780b3f39bb). Toute concrétisation (recrutement, formation) doit rester une image explicitement extérieure au texte.
- Bellman n'écrit pas qu'il vaut mieux garder de la capacité d'avance (SUP-90d253780b3f39bb). La conclusion de S4.P3 doit rester ouverte.
- Le second dossier tiré des mêmes pages (limitation-de-l-expansion, § 4 : la capacité ne monte pas aussi vite qu'on veut) n'est financé qu'en désignation (SUP-73f6de3fb15b96e9, SUP-a74dd5e8a38993ac). Il ne doit pas être développé.
- Aucune source secondaire n'a été ouverte (SUP-140f667d44691d00) : aucune réception ni postérité du modèle n'est dicible.

BUDGET DE L'AJOUT
- ajouts prescrits et supports qui les financent :
  1. Le critère J rendu en mots (somme des deux coûts, constante positive a, minimisation sous x ≥ r), à la place de S4.P2. Financé par SUP-079a95da56ea8995. C'est une substitution, pas une croissance.
  2. Le cadre « lissage » du § 1, à la place de la notice de S1.P1. Financé par SUP-079a95da56ea8995 et SUP-c8f6805cce300810. Substitution.
  3. Le verbatim « come what may » dans S1.P2. Financé par SUP-079a95da56ea8995 et SUP-c8f6805cce300810. Ajout d'une demi-phrase au plus.
  4. Le coût d'embauche et de licenciement compté par Holt, Modigliani et Simon, à la place de « et souvent cher » (S4.P1) ou en ouverture. Financé par SUP-3a1f08f32d8d151a, SUP-5127db0208c54f63 et SUP-9540c7a3f4e41d4a. Une phrase.
  5. Le modèle voisin avec stock (partie V), en ouverture, au niveau de la désignation. Financé par SUP-703c62d71d9397a2 et SUP-393e88a2d2c9e1a1. Une phrase, à la place de la maxime de S5.P3.
- prescriptions écartées faute de support :
  - Toute précision sur la nature du coût de montée (recrutement, formation, désorganisation) attribuée à Bellman : SUP-90d253780b3f39bb l'exclut.
  - Tout ordre de grandeur de a, toute valeur numérique ou tout cas chiffré présenté comme tiré du texte.
  - La forme de la solution (« garder une marge », « monter par paliers », etc.) : metadata-only.
  - Tout développement de limitation-de-l-expansion (vitesse maximale de montée) : désignation seulement.
  - Tout contenu du mémorandum de Holt, Modigliani et Simon au-delà de « stock, heures, effectif » et « coût d'embauche et de licenciement ».
  - Toute description de la partie V au-delà de « programmation linéaire, excédent accumulé, coût de stockage ».
  - Toute affirmation sur la réception, l'influence ou la postérité du modèle.
- sens attendu du volume : constant, entre −5 % et +5 % autour de 1 248 mots. Les ajouts 1, 2, 4 et 5 sont des substitutions de passages sans delta (S4.P2, notice de S1.P1, « souvent cher », maxime de S5.P3). L'ajout 3 est compensé par la fusion de S2. Le texte reste sous 1 300 mots, et c'est acceptable : la matière s'arrête au folio 40.

TRAJECTOIRE CIBLE
- lead (2 paragraphes, 120-200 mots)
  1. Entrée : rien.
  2. Gain : une charge qui fluctue ; l'excédent de capacité payé en salaires ; le réflexe de coller au besoin ; puis la face cachée : remonter coûte, et c'est une dépense d'une autre nature (le changement, pas l'état). L'image concrète de la remontée (retrouver des gens, les former) peut rester, mais elle doit se lire comme l'intuition du lecteur et non comme le contenu du texte de Bellman. Exemple de geste : « on pense à… ; Bellman, lui, ne dira pas de quoi ce coût est fait ». Présenter ensuite l'auteur et le rapport révisé le 23 mai 1955, sans « au printemps… écrit » ni « en deux paragraphes » (dire « l'une à la suite de l'autre »).
  3. Matière : SUP-9b54f703f0472315, SUP-0eb4a5be61704e6f, SUP-1dbf1b7c41d6c2c3 ; r(t) « oscillatory » (SUP-079a95da56ea8995) pour fonder la fluctuation.
  4. À ne pas faire : livrer déjà le critère et l'hypothèse de gratuité.
- S1 (le modèle)
  1. Entrée : deux coûts de nature différente existent.
  2. Gain : ce que « lissage » veut dire chez Bellman (maintenir un système dans un état, avec des pénalités pour les écarts), puis le § 2 : x(t) est une quantité de travail et non un effectif, r(t) est le besoin, la contrainte x ≥ r tient « come what may », et rien ne se stocke. Donc le seul levier est le niveau et le moment où on le change. La référence bibliographique se réduit à ce qui sert : titre et numéro, en une demi-phrase au plus. Corriger : le lissage industriel est le premier problème posé, au § 2, et non « le deuxième ».
  3. Matière : SUP-079a95da56ea8995, SUP-c8f6805cce300810, SUP-dac242ba32f415af, SUP-90d253780b3f39bb (absence de stock), SUP-dbd8217f510c3ab3 (x(t) n'est pas un effectif).
  4. À ne pas faire : répéter la distinction état / changement du lead.
- S2 (premier coût), fondu en un seul paragraphe
  1. Entrée : le modèle et la contrainte.
  2. Gain : le verbatim « excess wages proportional to (x(t)-r(t))dt », c'est-à-dire proportionnel à l'écart et à la durée, illustré correctement (un écart deux fois plus grand ou tenu deux fois plus longtemps double la perte). Pris seul, ce coût pousse à réduire l'écart à zéro.
  3. Matière : SUP-079a95da56ea8995, SUP-8a18ad697e763e0c.
  4. À ne pas faire : « C'est le prix d'un état » en reprise du lead ; « deux fois plus haut que le besoin ». S2 peut aussi devenir le premier paragraphe d'une section « deux coûts » fusionnée avec S3.
- S3 (second coût et hypothèse), avec l'hypothèse avancée avant le max
  1. Entrée : le premier coût et sa recommandation.
  2. Gain : (a) la phrase qui retourne la recommandation, « cannot be done without cost », et le coût proportionnel à la vitesse de montée ; (b) l'hypothèse écrite « Assuming that it costs us nothing to decrease x(t) », donc max(dx/dt, 0) et seule la montée facturée. L'ordre est celui de la phrase de Bellman. (c) Le statut de cette hypothèse : posée pour simplifier, alors que licencier coûte, ce que le mémorandum contemporain de Holt, Modigliani et Simon compte justement. (d) Bellman ne dit pas de quoi ce coût est fait ni combien vaut la constante, ce qui renvoie explicitement à l'image du lead, laissée hors du texte de Bellman.
  3. Matière : SUP-079a95da56ea8995, SUP-5f42e9238997b248, SUP-ed631393b3b5a9cf (litote), SUP-3a1f08f32d8d151a, SUP-71169a297336aded, SUP-5127db0208c54f63, SUP-90d253780b3f39bb.
  4. À ne pas faire : « troisième terme » ; « souvent cher » ; « attachée au mouvement, et non à la position » (troisième reformulation du lead) ; le mot « asymétrie » pour autre chose que montée / descente.
- S4 (le critère et l'arbitrage), à la place de l'actuel S4.P2-P3
  1. Entrée : les deux coûts et l'hypothèse.
  2. Gain : les deux coûts additionnés sur toute la période, la montée pesée par une seule constante positive a, puis le choix d'une trajectoire x(t) qui minimise ce total sans jamais passer sous r(t). De là l'arbitrage : descendre au plus juste achète une facture future, se tenir au-dessus coûte des salaires maintenant, et c'est la valeur de a et l'allure de r(t) qui décident. Bellman ne dit pas lequel l'emporte. Une vignette stipulée (« imaginons une baisse d'un mois suivie d'un retour au niveau ») est possible si sa conséquence est marquée comme telle et ne chiffre rien.
  3. Matière : SUP-079a95da56ea8995 (formule (2), « a is some positive constant », « absolutely continuous », « minimizes J(x) while satisfying the requirement x(t) ≥ r(t) »), SUP-90d253780b3f39bb (pas de recommandation de capacité d'avance).
  4. À ne pas faire : redire « l'un est le prix d'être au mauvais niveau, l'autre le prix de changer » (lead) ; donner une valeur à a ; laisser entendre la forme de la solution.
- S5 (un problème posé, une solution ailleurs)
  1. Entrée : le critère et son arbitrage.
  2. Gain : le rapport est un exposé (verbatim du SUMMARY, crédit à Jacobs) ; la solution du cas continu est « quite simple » et renvoyée à un travail coécrit avec Glicksberg et Gross ; le cas discret est semblable et renvoyé à Karlin. Clore sur des ouvertures précises plutôt que sur une maxime : la solution simple que le lecteur ne voit pas encore ; et, quinze pages plus loin dans le même rapport, un autre « lissage » où l'excédent s'accumule et paie un coût de stockage, soit exactement ce que ce modèle-ci exclut.
  3. Matière : SUP-81b8eee51fdf2402, SUP-dac242ba32f415af, SUP-04f913376a84c1c2, SUP-5031fed8d0181306, SUP-703c62d71d9397a2, SUP-393e88a2d2c9e1a1.
  4. À ne pas faire : répéter la signature unique déjà donnée dans le lead ; « Il n'y a là aucun manque » ; « Poser un problème proprement est un acte de recherche à part entière » ; « Deux folios plus loin » (dire « à la page suivante » ou nommer le folio 40) ; toute phrase sur le contenu de l'article de 1954.
- limits : inchangé sur le fond. limits[3] devient en partie redondant si la partie V passe dans S5 ; il reste alors utile comme borne (désignation seulement).

raison du verdict : l'architecture est saine et la plupart des paragraphes ont un vrai delta (modèle, deux formes de coût, pente positive, hypothèse, arbitrage, statut d'exposé). Les citations sont exactes et la frontière avec les sources non lues est tenue. Mais le texte n'atteint pas PASS pour trois raisons. Il se contredit entre lead[1] et S3.P3 sur le contenu du coût de remontée. Il reformule cinq fois le noyau état / changement, avec deux paragraphes quasi sans delta (S4.P2, S5.P3). Et il porte plusieurs inexactitudes ponctuelles exposées au gate : « deux fois plus haut », « le deuxième d'entre eux », « au printemps… écrit », « en deux paragraphes », « souvent cher ». Le remède passe par la fusion, le déplacement (hypothèse avant le max) et la substitution de passages vides par de la matière financée (critère J, cadre du § 1, Holt-Modigliani-Simon, partie V en désignation), à volume constant. Ce n'est pas un REWRITE.
