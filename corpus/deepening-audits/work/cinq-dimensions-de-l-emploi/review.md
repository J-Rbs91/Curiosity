concept : cinq-dimensions-de-l-emploi
verdict : REJECT
factcheck_sha_match : PASS

gate : `FACTCHECK_PASS`, 43 claims, 43 SUPPORTED, 0 échec, 0 erreur structurelle.
`candidate_sha256` = b6080da250d17a9b40eec07012f8b6586447f53b467776195775cb933f8274aa
SHA-256 recalculé sur `corpus/deepenings/cinq-dimensions-de-l-emploi.json` : identique.
Le gate est valide et n'est pas rediscuté. Le `REJECT` est pédagogique.

volumes (comptés par la même méthode sur les deux versions) : texte lecteur 1 282 → 1 227 mots
(-55) ; lead 198 → 158 ; sections 5 → 5 ; paragraphes 13 → 12 (S2 perd un paragraphe) ;
`limits` 208 → 243.

---

COMPARAISON

axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     La description de la Figure 1 (S2.P1 de HEAD) disparaît ; la généralisation « chacune reçoit une définition d'une seule phrase » est ramenée aux deux bornes attestées par `notes[6]` (Task Identity la plus brève, Autonomy la plus longue) ; « La liste n'est pas née en 1974 » devient ce que le rapport écrit de lui-même p. 2. Le texte lecteur ne franchit plus sa propre frontière interne. Réserve portée plus bas sur `limits[3]`.
progressivité pédagogique      3/4     2/4     Le lead perd sa thèse (« ce qui les sépare n'est pas dans les deux personnes, il est dans les deux postes ») pour une question, et introduit « trois états psychologiques » sans l'expliquer, contre la spécification du `lead` (PROTOCOLE §5 : aucun terme savant qui ne soit immédiatement expliqué) que HEAD respectait (« quelque chose chez la personne qui travaille »). S2.P1 rouvre ensuite sur la même proposition que lead[1]. La marche S1 → S2 est plus faible qu'avant : HEAD expliquait pourquoi le détour comptait, le candidat se borne à affirmer qu'il existe.
densité / non-redondance       3/4     3/4     Deux redondances réelles supprimées (S3.P3 disait trois fois l'exclusion ; S5.P1 recommençait sur l'acquis de S1.P2). Deux créées : lead[1] et S2.P1 portent la même proposition (« cinq créent trois états »), et S5.P1 comme S5.P2 se terminent tous deux sur un renvoi au rapport n° 6. Bilan net nul, sur 55 mots de moins.
clarté                         3/4     3/4     Rien ne s'obscurcit dans le corps ; « core » reste expliqué avant usage, l'articulation S2 → S3 par les guillemets de « centrales » est bonne. Mais « états psychologiques » puis « les auteurs les disent critiques » restent des étiquettes non dépliées, là où HEAD dépliait l'idée dans la phrase même.
profondeur explicative         3/4     2/4     HEAD exposait trois mécanismes (médiation, asymétrie du câblage, critère d'appartenance) plus une condition d'application. Le candidat n'en garde que deux : la médiation et sa conséquence pratique (S2.P3 de HEAD, supprimé en entier) ont disparu, ainsi que la causalité forme/fonction de S1.P2 (« C'est cet usage qui explique la forme de la liste », coupée en boucle 2) que l'audit tenait pour le meilleur delta de S1. Aucun mécanisme n'est ajouté en échange.
valeur des exemples            3/4     3/4     L'exemple fondateur est enfin réinvesti, mais deux fois sur une seule dimension (le retour donné par le travail, en S1.P1 puis S3.P3, avec un bon ajout : la seconde personne en est précisément privée). Les trois autres rattachements prévus par la trajectoire cible sont tombés au fact-check. Le « gaspillage net » relevé par l'audit persiste pour quatre dimensions sur cinq.
limites / nuances              4/4     3/4     Gains d'honnêteté épistémique réels (« il faudra les lire », « la phrase citée plus haut les compte sans les nommer »). Pertes : la conditionnalité du redesign (S2.P3), la conclusion « cinq et non sept » qui prévenait le contresens de comptage, et la tension finale sur ce qu'une note unique écrase, devenue un second renvoi documentaire.
pouvoir d'ouverture            3/4     3/4     S5.P1 nomme enfin l'enjeu de l'autre rapport (« ce qui mettrait la théorie à l'épreuve »), ce que l'audit réclamait. Mais la sortie n'est plus une question ouverte, c'est le même renvoi répété une seconde fois.

total : 22/32 → 20/32.

---

défauts initiaux corrigés :

- **Défaut majeur n° 2** (S3.P3 énonçait trois fois l'exclusion) : corrigé nettement. Ne restent
  que les deux micro-exemples, plus un delta neuf (l'information est dans ce qu'on a sous les
  mains, ce dont la seconde personne du lead est privée).
- **Défaut majeur n° 3** (S5.P1 recommençait sur l'acquis de S1.P2) : corrigé, et la section
  entre directement sur le renvoi en nommant ce qu'il détient.
- **Défaut majeur n° 4** (S2.P1 racontait la Figure 1 contre la propre `limits[3]` du fichier) :
  corrigé par suppression.
- **Signal documentaire n° 2** (généralisation des définitions d'une phrase aux cinq) : corrigé.
- **Matière sous-exploitée** : la note 1 p. 39 est enfin exploitée en entier. S4.P3 compte les
  quatre entrées relationnelles sur douze (required interaction, optional interaction, friendship
  opportunities, dealing with others) et montre qu'aucune n'entre dans le noyau de 1974. C'est le
  meilleur gain de la réécriture : le critère de S3.P2 est appliqué au lieu d'être redit. Le
  rattachement institutionnel (Yale, Illinois) est également repris d'`attribution_note`.
- **La citation la plus autorisée** (`quotation.text`, p. 4) est enfin donnée à lire.

**Défaut majeur n° 1 non corrigé** (« S1 ne convertit pas le lead ») : la trajectoire cible
demandait quatre rattachements, le fact-check en a retiré trois (C008, C009, C010). Il en reste un.
C'est le défaut le plus coûteux du texte selon l'audit, et il reste ouvert à 75 %.

**Défaut majeur n° 5 aggravé** : l'audit reprochait 1 238 mots « sous la cible de 1 300, alors que
de la matière sourcée reste au dossier ». Le candidat descend à 1 178.

---

régressions détectées :

1. **Perte de la thèse du `lead`.** « Dire que la première est plus motivée que la seconde
   n'explique rien : ce qui les sépare n'est pas dans les deux personnes, il est dans les deux
   postes » disparaît. C'était, selon l'audit, le delta le plus fort du texte et son geste
   conceptuel fondateur : c'est ce qui fait qu'un concept s'appelle « dimensions de l'emploi ».
   La question de remplacement (« Qu'est-ce qui, au juste, sépare ces deux postes ? ») pose le
   problème mais n'enseigne rien, et présuppose sans l'établir le déplacement qu'elle a cessé
   de faire.

2. **Le texte n'enseigne plus à quoi le modèle sert.** HEAD nommait les résultats attendus (« une
   forte motivation interne au travail et une qualité de travail élevée »). Le candidat ne les
   nomme nulle part, et la chaîne s'arrête à « cinq dimensions créent trois états ». Le lecteur
   sort du texte sachant qu'un poste crée trois états dont un seul est nommé, sans savoir ce que
   ces états produisent ni pourquoi quiconque les mesurerait. La section pivot, rebaptisée « Ce que
   les cinq dimensions créent », n'a plus de suite : les trois états ne reviennent jamais.

3. **S2 perd son paragraphe de conséquence** (« Le même aménagement, apporté à deux postes
   différents, peut donc réussir ici et ne rien donner là »). C'était le seul « et alors ? » du
   texte, et la seule condition d'application énoncée.

4. **S2.P1 n'a plus de delta propre.** Après lead[1] (« ces cinq caractéristiques créent chez la
   personne qui occupe le poste trois états psychologiques ») vient la citation, qui dit la même
   chose, puis sa glose, qui la redit une troisième fois (« Ce que ces cinq caractéristiques créent
   […] ce sont des états […] ils en comptent exactement trois »). C'est exactement ce que
   `AUDIT_PROTOCOL.md` §1 exclut : redire la même proposition avec d'autres mots. La phrase
   « L'expression est technique, l'idée l'est moins » annonce une explication qui ne vient plus :
   dans HEAD, elle était suivie d'un mécanisme.

5. **Fragilité documentaire introduite dans la frontière interne.** `limits[3]` du candidat
   affirme : « Aucune phrase disponible ne relie non plus les trois états à un résultat de
   travail : ce maillon ne s'écrit pas, ni sa négation. » Or `review.notes[7]` du dossier atteste
   la Figure 1 du folio 3, « qui relie les Core Job Dimensions aux Personal and Work Outcomes
   "High Internal Work Motivation" et "High Quality Work Performance" », relue à l'image à 170 dpi
   par le contrôle aveugle. La négation d'effet direct était bien interdite, et le gate a eu raison
   de la refuser ; mais le versant positif, le fait que le modèle vise des résultats nommés, était
   disponible. Le candidat l'a amputé au lieu de le refonder, et inscrit désormais dans la
   frontière interne une interdiction plus large que le dossier, qui fermera la porte aux agents
   suivants. `PROTOCOLE.md` §4 prescrit l'inverse : « le premier geste n'est pas de l'affaiblir :
   c'est d'aller voir si elle l'appuie ailleurs ».

6. **Raccourcissement non compensé.** Les deux boucles retirent 236 puis 39 mots et le compte
   rendu de correction le dit lui-même : « aucune n'a été compensée ». La baisse de profondeur est
   obtenue par coupe, sur un texte que l'audit jugeait déjà trop court au regard de la matière
   disponible.

---

raison de la décision :

`REJECT`. Le gate est valide et le SHA correspond ; la réécriture supprime réellement trois des
cinq défauts majeurs du diagnostic et apporte un gain net en S4.P3. Mais les minima de l'ACCEPT ne
sont pas réunis sur deux points :

- **progression pédagogique au moins aussi claire** : non. Le `lead`, que `PROTOCOLE.md` désigne
  comme « le passage le plus important du texte », perd sa thèse et gagne un terme savant non
  expliqué ; la section pivot ouvre sur une reformulation de ce que le `lead` vient de dire.
- **profondeur explicative non dégradée** : non. Trois mécanismes plus une condition
  d'application deviennent deux mécanismes et aucune conséquence. Aucun mécanisme n'est ajouté.

Ce que le candidat gagne est local (un compte historique, deux resserrements, une citation, une
description de figure retirée) ; ce qu'il perd est la colonne vertébrale explicative : pourquoi
c'est le poste et non la personne, et ce que la chaîne produit au bout. Un lecteur du candidat
apprend à nommer et à trier ; il n'apprend plus à comprendre.

Ce `REJECT` n'est pas une validation de HEAD. HEAD porte les propositions que le gate a refusées
(C001, C002, C005, C012, C014, C021, C022, C023, C029, C030, C041, C058), dont une erreur
conceptuelle et pas seulement documentaire : « elle ne relie pas directement les cinq
caractéristiques aux résultats attendus » contredit la Figure 1 telle que `review.notes[7]` la
décrit. HEAD est restauré comme état antérieur, pas comme état satisfaisant, et la carte reste
éligible.

Le prochain cycle a une cible précise, et elle ne demande aucune matière nouvelle :

1. garder les quatre gains du candidat (S4.P3 et son compte, S3.P3 resserré, S5.P1 resserré et
   son enjeu nommé, la citation de la p. 4 donnée à lire) ;
2. refonder le « à quoi ça sert » sur `review.notes[7]` : les résultats visés sont nommés au
   dossier, et se disent sans médiation ni négation d'effet direct ;
3. rendre au `lead` un geste conceptuel compatible avec les supports : le concept mesure des
   emplois, pas des personnes, ce que le titre même de l'instrument (`An Instrument for the
   Diagnosis of Jobs…`, déjà cité en S1.P2) établit sans rien présupposer sur la valeur
   explicative de la motivation individuelle ;
4. corriger `limits[3]`, dont l'interdiction actuelle excède le dossier ;
5. remonter vers la cible de 1 300 mots par ces refondations, non par du commentaire.
