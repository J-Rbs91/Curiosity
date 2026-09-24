concept : mesure-devenue-cible
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 567dc98fa8b61d42b203d2e5dcc1fedb71ec0e4a

GATE

- SHA-256 du fichier courant : 60f2c6e52a2f8d9959dc2af37720c1ea73bd84c0036e8d4b2f6892f335f3c674
- `factcheck-gate.json` : `verdict: FACTCHECK_PASS`, 42 claims, 42 soutenus, 0 refusé, 0 erreur
  structurelle, `candidate_sha256` identique au SHA courant.
- Chaîne remontée jusqu'à la source : `factcheck-pack.json` et `verification.json` portent le
  même `candidate_sha256`, et `verification.json` compte 42 résultats, tous `SUPPORTED`. Le gate
  n'est pas un résumé d'un autre état du fichier.
- Blob antérieur vérifié : `567dc98…` se lit, c'est bien du JSON d'approfondissement, et son
  `conceptId` vaut `mesure-devenue-cible`. Il correspond à l'état du fichier au dernier commit
  antérieur au cycle (`bededfc`), donc à la version que l'audit a examinée. Aucun état
  intermédiaire du cycle n'a servi de point de comparaison.

VOLUME, compté moi-même

- texte lecteur (`lead` + `sections`) : 1 265 mots avant, 1 113 après (mon compteur ; l'audit
  annonçait 1 299 et l'orchestrateur 1 158 sur la même matière, l'écart tient au découpage des
  mots à apostrophe et à trait d'union, pas au périmètre). Baisse réelle d'environ 12 %.
- `limits` : 136 mots avant, 398 après. C'est `limits` qui porte à lui seul la quasi-totalité de
  l'écart entre le total affiché par `corpus:deepen --check` (1 574) et ce que le lecteur voit.
- sections : 5 avant, 4 après, donc au plancher de la fourchette du protocole, pas en dehors.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     les cinq fragilités nommées par l'audit ont disparu : « l'historien de la comptabilité Keith Hoskin » et « un économiste, Charles Goodhart » (les deux auteurs sont désormais nommés sans métier), « un instrument de mesure de la monnaie » remplacé par le mécanisme exact des notes de la fiche (« la monnaie, prise pour instrument du contrôle monétaire, cesse d'être utilisée comme monnaie »), le cadrage historique non établi de S2.P1 (« classés selon des indicateurs de performance », « L'un de ces indicateurs concerne les diplômes ») retiré et consigné en `limits[3]`, l'explication causale non marquée de S4.P2 (« ce qui rend l'indicateur gouvernable ») retirée. Les neuf citations de cinq mots ou plus se retrouvent verbatim dans l'enregistrement validé ou dans `lecture.json` / `attribution-hoskin.json`. 42/42 `SUPPORTED` sur ce SHA exact.
progressivité pédagogique      3/4     4/4     avant : S2.P2 faisait reculer la pente et S5.P2 n'ouvrait aucun palier. après : cas réel, puis provenance de la formule, puis thèse sur l'audit, puis fausse issue et objection à la loi. Chaque section a besoin de la précédente et aucune n'y revient. Point de vigilance unique : S1.P2 est le paragraphe le plus chargé du texte (glissement d'`improvement`, examen écrit de la fin du XVIIIe, is / ought, renversement final) et son « De là l'effet » compresse une chaîne ; l'ensemble est cependant donné comme la chaîne de l'auteure (« selon elle », « dans ses propres termes »), le lecteur n'a pas à la dériver lui-même.
densité / non-redondance       2/4     4/4     la proposition centrale était énoncée quatre fois (lead[0], S1.P3, S2.P2, S5.P2) ; elle l'est une fois, dans lead[0]. Le patron « Le chiffre continue d'exister ; il ne mesure plus… », rejoué en S2.P2 (« La mention continue d'exister ; elle cesse de distinguer… »), ne reparaît nulle part. L'opposition informer / juger, posée deux fois, ne l'est plus qu'une, en S4.P1, et sous une forme désormais appuyée. Les trois clausules qui refermaient sur du déjà-dit (S1.P2, S3.P2, S5.P2) ont disparu avec leurs paragraphes. 11 paragraphes, 11 deltas distincts, aucune paire consécutive au même travail, aucune séquence de trois.
clarté                         4/4     4/4     `lead` intact, compréhensible sans un mot de discipline ; « 2.1 » expliqué à sa première occurrence ; « provision institutionnelle » glosé dans la phrase même (« non pas ce que les étudiants ont appris, mais les dispositifs par lesquels l'établissement est censé le leur fournir ») ; chaque passage anglais suivi de sa traduction. La note en moins qui n'a pas été retirée : la rampe douce de l'ancienne S1 a disparu, si bien que le texte demande davantage dès sa première section qu'à aucun endroit de la version antérieure. Rien n'y est pourtant employé sans être expliqué sur place.
profondeur explicative         3/4     4/4     le « pourquoi » que l'audit signalait comme disponible et inutilisé est là : la chaîne `improvement` / is-ought et son renversement « measuring the improvement leads to improving the measures », puis l'objection de Hoskin à la loi elle-même (« why that futility is so inherent »). En face, le texte a perdu la mécanique générale du substitut (raisons du recours, condition de validité, trois voies de découplage) ; la condition de validité revient en S4.P1 sous forme de statut, et cette fois appuyée (C038, `SUPPORTED`).
valeur des exemples           3/4     3/4     recomposition plus que perte. Disparaissent les trois voies de S1.P3, qui étaient le passage le plus parlant de l'ancienne version et dont aucune source ne portait la typologie. Apparaissent en contrepartie un cas monétaire qui enseigne ce que le cas scolaire ne peut pas enseigner (« ce n'est pas un instrument de mesure qui se dégrade sous l'observation : c'est la chose mesurée que ses utilisateurs désertent »), et un 2.1 qui cesse de rejouer le mécanisme général pour devenir le détail propre du cas. L'école de `lead[0]` reste explicitement hypothétique.
limites / nuances              2/4     4/4     le contresens que presque tout lecteur apporte avec lui est enfin levé, avec sa raison textuelle : phrase sans guillemets ni appel de note, absente des quinze références, Goodhart nommé une seule fois. La restriction de portée de `lead[1]` est conservée. Le texte se ferme sur une réserve, non sur une précaution.
pouvoir d'ouverture            2/4     4/4     avant : fin sur S5.P3, le paragraphe le moins appuyé du texte, qu'aucun matériau ne portait. après : fin sur une question ouverte posée par un auteur nommé dans un texte nommé, et qui est l'auteur même dont la formule vient.

défauts initiaux corrigés :
- les quatre énoncés de la même proposition ramenés à un seul ; environ 200 mots sans delta
  supprimés, sans que la longueur perdue soit compensée par de la paraphrase ailleurs.
- S2 exploite désormais le cas qu'elle annonce : objet réel de l'audit (la provision
  institutionnelle et non l'éducation), place exacte de l'aphorisme dans le paragraphe sur le
  système d'examen, glissement d'`improvement`, renversement de la p. 307.
- le flou d'attribution de l'ancien S3.P3 est remplacé par une chaîne nette : la formule est de
  Strathern, elle resserre la formulation de Hoskin de 1996, et le nom de Goodhart lui arrive
  par Hoskin, qui le donne pour déjà reconnu.
- les deux qualifications professionnelles non appuyées sont retirées, dont celle qui
  contredisait la seule caractérisation documentée de Hoskin.
- le texte ne se termine plus sur son paragraphe le moins soutenu, retiré en entier.

régressions détectées :
- aucune régression bloquante. Aucune répétition supprimée d'un côté et recréée de l'autre :
  vérifié sur les trois patrons de l'ancienne version (« continue d'exister », informer / juger,
  les trois voies). Aucune section principalement redondante. Aucune information solide de
  l'ancienne version perdue : les quatre claims de la section supprimée étaient des faits
  généraux sur la mesure, refusés faute d'appui, et `limits[4]` enregistre désormais cette
  frontière.
- trois observations, aucune ne justifiant un rejet :
  1. le texte lecteur tombe à environ 1 150 mots. Le contrôle mécanique passe parce que son
     total inclut `limits`, lequel a doublé la fourchette qui lui est prescrite (398 mots pour
     100-200). La conformité est réelle au sens de l'instrument du dépôt, mais elle est en
     partie portée par un champ que le lecteur ne voit pas. `AUDIT_PROTOCOL.md` §6 tranche le
     principe (« une version plus courte peut être meilleure ») et la densité par mot a monté,
     pas baissé ; le constat est à verser au cycle suivant, pas à opposer à cette version.
  2. si un futur cycle veut regagner ce volume sans rien inventer, la matière existe et reste
     inutilisée dans le texte lecteur : `lecture.json` porte le cadre de la conférence
     (Founders' Memorial Lecture, Girton College, 11 mars 1997), le « commentaire
     anthropologique » sur l'« audit explosion », et surtout la boucle de réplication culturelle
     (accountability inventée par le monde éducatif, passée aux affaires, ramenée par Strathern
     sur l'université). C'est le seul palier documenté que le texte laisse encore de côté.
  3. S1.P1 place l'exemple du 2.1 après l'aphorisme dans le même paragraphe, tandis que S2.P3
     écrit « Juste après son aphorisme, elle écrit que Hoskin décrit cela comme la loi de
     Goodhart ». Les deux formulations viennent de la fiche, qui dit elle-même « juste après sa
     formule » (`review.notes[4]`) et « elle ajoute aussitôt » (`notes[0]`), alors que
     `lecture.json` précise que l'exemple du 2.1 s'intercale. Le texte ne dit rien de faux ; la
     formule « juste après » est simplement plus serrée que la page. À surveiller, pas à
     corriger dans l'urgence.

raison de la décision : ACCEPT. Le gate est valide sur le SHA exact du fichier courant, et la
chaîne pack / verification / gate porte ce même SHA, donc le contenu jugé est bien celui qui est
en place. La comparaison au blob antérieur montre une amélioration nette sur six axes et aucune
baisse sur les deux autres. Les cinq défauts majeurs du diagnostic sont effectivement supprimés,
et non déplacés : la proposition centrale n'est plus énoncée qu'une fois, le cas universitaire
apprend enfin quelque chose de propre, la mésattribution à Goodhart est levée avec sa preuve
textuelle, les qualifications d'auteur non appuyées ont disparu, et le texte se ferme sur
l'objection de Hoskin au lieu de son paragraphe le plus fragile. La perte de la section « Ce qui
fait qu'une mesure est bonne » est la seule vraie question de ce cycle : elle coûte au lecteur le
passage le plus concret de l'ancienne version. Elle ne la rend pas pour autant refusable, pour
trois raisons. Cette section n'était pas un choix éditorial mais quatre claims refusés faute
d'appui, et le protocole interdit explicitement de combler par des connaissances générales ce
qu'aucune source ne porte. Le lecteur ne perd aucun palier de compréhension : `lead[0]` porte
déjà le mécanisme complet sur un cas imaginé, la condition de validité revient en S4.P1 sous une
forme cette fois appuyée, et le cas monétaire de S2.P3 donne une seconde instanciation que
l'ancienne version avait déformée. Enfin la suppression emportait avec elle deux des quatre
redites que l'audit condamnait : la corriger et corriger la redondance étaient le même geste.
