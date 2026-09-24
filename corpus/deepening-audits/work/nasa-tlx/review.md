concept : nasa-tlx
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 122a06a0741f0af79129cf534bfa4a79a5eef87a

GATE PRÉALABLE

- SHA-256 courant de `corpus/deepenings/nasa-tlx.json` :
  4c8cd0b1806b831e62a68dde93f921a4eab025bc47087977fabb9bc7f4cfafd4
- `factcheck-gate.json` : `verdict: FACTCHECK_PASS`, `candidate_sha256` identique au SHA courant,
  79 claims, 79 supportés, 0 échec, aucune erreur structurelle. Correspondance exacte, gate valide.
- Blob antérieur 122a06a0 : lisible, JSON d'approfondissement, `conceptId` = `nasa-tlx`. C'est bien
  la version examinée par l'audit (mêmes six sections, même lead à phrase d'annonce finale, même
  S2.P3 portant le moment du relèvement).
- Contrôle mécanique rejoué en lecture seule : `npm run corpus:deepen -- --check --only=nasa-tlx`
  rend « 1 approfondissement contrôlé, 1837 mots. Rien projeté. »

MESURES

| | avant | après |
|---|---|---|
| paragraphes lecteur | 20 | 21 |
| mots lecteur | 1 404 | 1 636 |
| `limits` | 197 mots | 201 mots |
| sections | 6 | 6 (S2 passe à 4 paragraphes) |

Titres tous sous 60 caractères, aucun tiret cadratin, aucun terme de dispositif interdit
(« la carte », « la fiche », « le corpus », « le dossier », « il faudrait pouvoir », « hors de
portée »), aucun fragment de `limits` remonté dans `lead` + `sections`.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     Les trois fragilités de l'audit sont traitées : S6.P3 « les autres méthodes de mesure de la charge en circulation à la même époque » devient « une autre méthode comme SWAT », exactement ce que porte la onzième réserve de `lecture.json` ; la négation sans reste de S3.P1 devient « La raison mise en avant n'est pas d'abord que… », compatible avec « Because workload may be caused by many different factors » (p. 11) ; la dérivation du point par comparaison est désormais séparée de la source (« c'est, dit le livret, la somme des poids. On voit pourquoi cette somme est fixe : … »). Deux énoncés non soutenus de l'ancienne version ont en outre disparu par les boucles de fact-check (« aucun appareil ne le relève du dehors », « celle qu'un observateur pourrait à la rigueur estimer sans rien demander à personne »). Le chapitre de 1988 reste hors du texte lecteur sauf comme renvoi, ce que le livret autorise lui-même (p. 3, « The results of the first validation study are summarized in Hart & Staveland (in press) »). `limits` nomme maintenant les niveaux d'accès (`metadata-only` du chapitre, statut de donnée de catalogue du millésime 1986) et l'affirmation qu'ils interdisent.
progressivité pédagogique      3/4     4/4     Les deux accrocs relevés sont supprimés. (a) La contradiction S2.P3 / S5.P1 n'existe plus : le moment du relèvement quitte S2 et les deux cas sont énoncés ensemble en tête de S5, « après une tâche ou un segment de tâche, et … aussi … pendant la tâche », suivis de ce qui les réunit ; la prémisse de la section n'est plus démentie ailleurs. Le point est couvert par le bloc `review` de l'enregistrement (§2.1 « after each performance of a task or task segment », §2.3 ouvrant le relevé « during a task »). (b) L'annonce de programme fermant lead[1] (« C'est ce parti pris qu'il faut suivre, car il décide de ce que l'instrument saisit… ») est retirée, conformément à PROTOCOLE §2 ; rien ne la remplace. Le lead fournit désormais la brique qui manquait en amont de tout le texte (il n'existe pas de règle graduée, la charge est éprouvée individuellement), de sorte que S1 ne commence plus par un découpage dont la nécessité était supposée.
densité / non-redondance       3/4     4/4     Les deux redondances franches ont disparu. S5.P3 ne rejoue plus le problème de lead[0] : il tire la conséquence propre à la sortie de la procédure (le livret demande d'évaluer les facteurs un à un « plutôt que de les fondre dans une appréciation globale unique », puis fond les six notes dans une moyenne), et il nomme l'écho au lieu de le subir. S6.P2 ne redit plus « simple mode d'emploi » : il porte trois faits jamais employés (aucune date imprimée, signature collective, l'écart « Human Performance Research Group » / « Human Performance Group »). Le paragraphe ajouté S2.P4 possède un delta distinct. Vérification faite paragraphe par paragraphe sur les 21 paragraphes : aucune séquence de trois deltas substantiellement identiques, aucune section dont le rôle principal soit de répéter une section antérieure. Résidu signalé plus bas : la dernière phrase de S6.P2 recoupe encore partiellement lead[1].
clarté                         3/4     4/4     Les deux manques identifiés sont comblés. « Sensibilité » reçoit sa glose sur place (« l'aptitude d'une mesure à faire apparaître les différences réelles »). Le lecteur sait enfin à quoi ressemble un score : « Les vingt et un traits qui découpent cette ligne la graduent de 0 à 100 de cinq en cinq », repris mot pour mot du support (« The 21 vertical tick marks on each scale divide the scale from 0 to 100 in increments of 5 »), ce qui rend lisible l'idée de « ramener le total pondéré à l'échelle des notes ». Le lead reste sans terme savant. Coût mineur introduit : le sigle SWAT n'est pas glosé, mais son contexte (« une autre méthode comme SWAT ») suffit à le situer.
profondeur explicative         3/4     4/4     Quatre mécanismes s'ajoutent, tous puisés dans la documentation de travail et aucun de mémoire : l'argument fondateur du recours au jugement du sujet (p. 11) qui manquait et que l'accroche de la carte supposait ; la graduation 0-100 qui rend intelligible la division par quinze ; l'effet arithmétique des poids à notes égales ; et surtout le retournement de S5.P3, où la moyenne finale réinstalle la confusion que le découpage en six venait de défaire. Rien n'est obtenu par raccourcissement : la hausse de 232 mots lecteur porte de la matière, pas de la reformulation, et le texte reste dans le gabarit.
valeur des exemples            2/4     3/4     Le second exemple demandé existe et met en scène le mécanisme le plus contre-intuitif du texte (S2.P4 : mêmes six positions, scores différents par les seuls poids). Il est explicitement hypothétique, ne peut pas se lire comme un cas historique, et il fait comprendre quelque chose que la formule seule ne montre pas. L'exemple du lead n'est plus réemployé tel quel en S5.P3. Pas 4/4 : la correction de fact-check C033 a ramené « diffèrent dès que… » à « peuvent différer », ce qui est exact mais émousse la démonstration, et le cadre « Imaginons deux personnes » sert deux fois.
limites / nuances              3/4     4/4     Toutes les nuances utiles de l'ancienne version sont conservées (la performance comptée comme coût, les poids qui ne sont pas un tempérament, l'ambiguïté d'un score bas, ce que le livret ne discute pas), et la seule qui était fausse telle qu'écrite, « L'instrument porte sur une tâche terminée », est reformulée pour couvrir les deux cas de relevé. S4.P3 dispose enfin de son appui, puisque S1.P2 porte maintenant « stressée » et « agacée » selon l'annexe A, ce qui rend l'élargissement de l'échelle de frustration vérifiable par le lecteur sur ce qu'on lui a montré.
pouvoir d'ouverture            2/4     4/4     La fin n'est plus un cul-de-sac. Elle explique l'écart que le lecteur pouvait constater entre les deux noms usuels et un document signé d'un collectif, puis donne une destination précise et dicible : « ce sont ceux des auteurs de la démonstration, et c'est elle qu'il faudra aller lire ». Futur, côté lecteur, conforme à PROTOCOLE §1, et sans rien dire du contenu d'un chapitre `metadata-only`.

défauts initiaux corrigés :
- Contradiction interne entre S2.P3 et la prémisse de S5.P1 sur le moment du relèvement : supprimée par déplacement, et la prémisse de S5 est reformulée pour couvrir les deux cas.
- Annonce de programme en fin de lead[1], interdite par PROTOCOLE §2 : phrase retirée.
- S5.P3 redondant avec lead[0] : refondu en une conséquence propre, la moyenne qui réinstalle la confusion, avec l'écho au lead explicitement nommé.
- S6.P2 redondant avec lead[1] : la caractérisation dupliquée disparaît, le paragraphe repose sur trois faits nouveaux du dossier.
- Fin sans ouverture : remplacée par une destination sourcée.
- Argument fondateur absent (il n'existe pas de règle pour estimer la charge, elle est éprouvée individuellement) : ajouté au lead, ce qui fonde enfin l'accroche de la carte.
- Trois fragilités documentaires de degré (sur-généralisation SWAT, négation sans reste, dérivation non marquée) : toutes traitées.
- Deux manques de clarté (« sensibilité », étendue du score) : comblés.
- Axe exemples : un second exemple fonctionnel ajouté.

régressions détectées :
- Aucune régression bloquante. Aucune information solide de l'ancienne version n'est perdue : les deux seuls énoncés disparus sans reprise (« aucun appareil ne le relève du dehors », « celle qu'un observateur pourrait à la rigueur estimer sans rien demander à personne ») ont été retirés parce que le gate les avait déclarés UNSUPPORTED, et leur retrait est un gain de fidélité, pas une perte.
- Résidu mineur, non bloquant : la dernière phrase de S6.P2, « C'est un outil de travail mis en circulation », recoupe encore partiellement lead[1] (« distribué afin que d'autres s'en servent dans leurs propres expériences »). Le rôle principal du paragraphe reste la facture du document, donc la règle « aucune section principalement redondante » tient, mais cette phrase de clôture pourrait être supprimée sans perte lors d'un cycle ultérieur.
- Nit de clarté : le sigle SWAT apparaît sans glose, là où l'ancienne version disait « les autres méthodes de mesure de la charge ». Le contexte le situe et la précision gagnée en fidélité vaut mieux que la formulation antérieure, qui sur-généralisait.
- Nit de forme : `limits` compte 201 mots au décompte manuel, soit un mot au-dessus du gabarit 100-200. Champ interne, contrôle mécanique PASS, sans effet lecteur.
- Répétition stylistique : « Imaginons deux personnes » ouvre lead[0] et S2.P4. Les deux contenus sont entièrement distincts ; c'est un écho de procédé, pas de delta.

raison de la décision : le gate est valide et porte sur le SHA exact du fichier courant. La
comparaison avec le blob 122a06a0 montre que les cinq défauts majeurs du diagnostic sont
effectivement supprimés, à commencer par la contradiction interne, les deux redondances avec le
lead et l'annonce de programme, et que les ajouts proviennent tous de matière déjà présente dans
`lecture.json`, les `notes` et le bloc `review` de l'enregistrement validé. La progression est plus
claire qu'avant, parce que le lead fournit désormais la prémisse que tout le texte supposait, et la
profondeur monte au lieu de baisser : la hausse de 232 mots lecteur correspond à quatre mécanismes
nouveaux, pas à de la reformulation. Aucune séquence de trois paragraphes ne partage son delta,
aucune section n'est principalement redondante, `limits` ne remonte nulle part dans le texte
lecteur, et aucune fragilité documentaire échappée au fact-check n'a été trouvée. Les trois réserves
restantes sont des nits stylistiques sans effet sur la compréhension. ACCEPT.
