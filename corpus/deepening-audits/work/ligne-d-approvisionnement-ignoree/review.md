concept : ligne-d-approvisionnement-ignoree
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 767b8ea60d746429a35fef8463b3341f7f1ea43b

GATE PRÉALABLE

- `sha256sum corpus/deepenings/ligne-d-approvisionnement-ignoree.json` =
  `1de5c31ae823e4dac13cbea25e09e2e681eb5caeaabeda52bba2e4ae87335f35`.
- `factcheck-gate.json` : `verdict: FACTCHECK_PASS`, `claims: 57`, `supported: 57`, `failed: 0`,
  `mapping_incomplete: []`, `structural_errors: []`, `candidate_sha256` identique au SHA ci-dessus.
  Correspondance exacte, gate valide.
- Blob antérieur lu par `git cat-file -p 767b8ea6…` : JSON d'approfondissement, `conceptId`
  `ligne-d-approvisionnement-ignoree`, c'est bien la version décrite par `audit.md` (on y retrouve
  au mot près les trois défauts majeurs qu'il vise : S4.P3 « L'amplification n'est pas inscrite
  dans la longueur des délais ni dans la forme de la chaîne », S5 sans contenu d'agrégation,
  S3.P3 asserté). 224 mots de `limits`, 1 292 mots de texte lecteur, comme l'audit l'avait compté.
- Artefacts `-fail-65-sur-68` ignorés : ils décrivent `3ad3ef16…`, qui n'est pas le fichier en place.
- Contrôle mécanique rejoué par moi (n'écrit rien) : « 1 approfondissement(s) contrôlé(s),
  1766 mots. Rien projeté. », aucun avertissement de citation. `git status` ne montre aucune
  modification de cette carte ni d'un artefact de son cycle.

VOLUMES RECOMPTÉS MOI-MÊME (comptage par blancs)

| | avant | après |
|---|---|---|
| `lead` | 179 | 173 (2 paragraphes, cible 120-200) |
| `sections` + titres | 1 113 | 1 380 |
| texte lecteur | 1 292 | 1 553 |
| `limits` | 224 | 248 |
| total fichier | 1 516 | 1 801 (script : 1 766) |

5 sections, paragraphes 2/3/4/3/4, titre le plus long 42 caractères, aucun tiret cadratin dans
le fichier, aucune expression de dispositif dans le texte lecteur (recherche littérale sur
« la carte », « la fiche », « le corpus », « le dossier », « enregistrement validé », « résumé »,
« sources disponibles », « il faudrait pouvoir », « hors de portée »).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     avant : S4.P3 tirait, pour refuser la fatalité, la proposition inverse de celle que `lecture.json` attribue à Sterman p. 26 ; `limits[0]` localisait « the larger the supply line must be » sur l'article de 1989, `metadata-only`, que `notes[1]` et `reserves[2]` interdisent deux fois de localiser. Après : S4.P3 porte les deux énoncés que le dossier fournit pour cette fonction (p. 7 question empirique, p. 26 structure de rétroaction) ; `limits[0]` ne localise plus rien hors du document de 1987 et `limits[1]` nomme les deux sources de notice seule avec l'interdit qui en découle. J'ai retrouvé dans `lecture.json` chacun des chiffres nouveaux (21 semaines, 4 à 8 caisses, pic 32, 700 %, coût 10 fois le repère p. 14, deux tiers de l'écart pendant trois semaines et « factor of three » pour Grizzly, 1,05 et 85 % pour Suds, 1947-1987 « retail sales to materials »), plus « Interrogés à la fin » pour S3.P3 et les trois tâches du décideur pour S1.P2. 57/57 claims soutenus.
progressivité pédagogique      3/4     4/4     les deux sauts relevés par l'audit sont réparés sur place : S2.P1 pose « Onze équipes de quatre s'y installent, un détaillant, un grossiste, un distributeur et une usine » avant que « l'usine Grizzly » n'arrive, et S4.P2 glose le retard accumulé (« les commandes reçues et non servies ») en le rattachant à la composition de S1.P1. Nouveau palier utile : S2.P3 plante la demande constante et l'oscillation endogène, brique sans laquelle S3.P3 et S3.P4 ne tiendraient pas. L'équivalence supply line / ligne d'approvisionnement est posée en apposition dès S1.P1, ce qui raccorde enfin le titre français.
densité / non-redondance       3/4     4/4     les trois passages sans delta sont supprimés (seconde moitié de l'ancien S1.P2, seconde citation anglaise de S4.P2, ancien S5.P3). Delta refait par moi sur les 18 paragraphes : aucun vide, aucune paire consécutive identique, aucune séquence de trois. Redondance recréée : cherchée, non trouvée. Le seul écho est S5.P3 (« les cycles gagnent en amplitude à mesure qu'on va des ventes de détail vers les matériaux ») face à S2.P2 (« l'ampleur des variations grandit à mesure qu'on s'éloigne du client ») : la forme est la même mais l'objet change, jeu de plateau contre production américaine réelle, et c'est précisément ce que la corroboration doit faire voir. Le texte lecteur passe de 1 292 à 1 553 mots en remplissant les manques que l'audit avait localisés, pas en s'étirant.
clarté                         3/4     4/4     citations anglaises ramenées de onze à cinq, chacune doublée d'une phrase française qui en donne le sens ; les deux passages que l'audit désignait comme illisibles pour un francophone (« the backlog of the subject's supplier (if any) », la seconde citation de S4.P2) sont rendus en français ; la citation centrale est désormais en français, mot pour mot le `quotation.text` de l'enregistrement. L'entrée reste exemplaire et β est toujours borné à l'instant où il paraît. Réserve légère : S2.P2 porte cinq grandeurs en 77 mots, c'est le paragraphe le plus dense du texte ; chacune a une fonction distincte, la limite n'est pas franchie.
profondeur explicative         2/4     4/4     le défaut central de l'audit est levé. Avant : « On voit alors pourquoi une meilleure prévision ne réglerait rien » était une assertion en trois phrases. Après : S2.P3 établit que la seule perturbation externe ne bouge pas, S3.P3 ce que les joueurs en croient et ce que cette attribution coûte (l'effort quitte le point de levier), puis S3.P4 fait tomber la phrase de la p. 23 comme conséquence, dans l'ordre même où le document de 1987 l'amène (le dossier note que la phrase citée suit immédiatement « towards efforts to anticipate and react to external shocks »). S'ajoutent trois mécanismes neufs : régulation d'un stock par ses flux avec délai et trois tâches du décideur, débordement complet de Grizzly, agrégation comme problème d'information.
valeur des exemples           4/4     4/4     le restaurant est conservé intact ; le clou est ajouté et travaille (il montre par contraste que la troisième tâche n'existe que là où il y a perte ou délai), il ne décore pas ; Grizzly contre Suds n'illustre toujours pas une définition et gagne son mécanisme temporel.
limites / nuances              3/4     4/4     l'agrégation, annoncée par le titre de S5 et jamais livrée, est livrée en S5.P2 : ligne répartie entre concurrents, chacun ne connaissant que sa part, puis ce sur quoi la vérification devra porter (disponibilité, fraîcheur, saillance, précision prêtée), et le déplacement qui en résulte, d'un trait prêté aux personnes à une information qu'une organisation rend visible ou non. La nuance fautive de S4.P3 est remplacée par les deux nuances justes. Le statut d'hypothèse non vérifiée est conservé.
pouvoir d'ouverture            2/4     4/4     l'ancienne formule d'équilibre finale est supprimée. S5.P4 pose la question empirique que le texte laisse ouverte (là où cette information est disponible, à jour et tenue pour fiable, le défaut se réduit-il ?) puis nomme l'ouvrage de 2000, dans la forme que §1 du protocole de rédaction exige : « il faudra l'ouvrir pour le voir », et non un aveu de lecture manquée.

défauts initiaux corrigés :
- défaut majeur 1, S4.P3 à contre-sens de la source p. 26 : supprimé, remplacé par p. 7 et p. 26, conclusion désormais dans le sens de la source.
- défaut majeur 2, S5 promettant l'agrégation sans la livrer : livrée, avec son contenu et sa conséquence.
- défaut majeur 3, l'affirmation centrale assertée sans mécanisme : la chaîne causale complète est en place sur trois paragraphes et la citation de la carte en est la conclusion.
- les deux resserrements demandés, faits.
- les deux sauts de prérequis, réparés.
- la matière sous-exploitée (demande constante, coût à dix fois le repère, amplification chiffrée, structure du problème et trois tâches, clou, quatre rôles et onze équipes), employée.
- `limits[0]`, qui plaçait la frontière au mauvais endroit, replacé ; `limits[1]` ne fait plus désigner Business Dynamics par le sujet grammatical « l'extrait de neuf pages ».

régressions détectées :
- aucune régression conceptuelle ni de clarté.
- perte documentaire mineure : le verbatim de la p. 20 (« most subjects failed to account adequately for the supply line ») disparaît. Sa proposition est intégralement conservée, et plus précisément dite, par 0,34 de moyenne et cinq joueurs sur quarante-quatre en S3.P2. Non bloquant.
- deux folios disparaissent du texte lecteur (restaurant, ancienneté du jeu). Ce n'est pas une régression imputable à la réécriture : c'est le bornage exigé par les deux CONFLICT du tour refusé, sur une divergence interne que l'audit demandait expressément de signaler et de ne pas trancher. Le lecteur perd deux numéros de page, aucune scène, aucun verbatim, aucune attribution.
- aucune remontée de `limits` dans le texte lecteur : la divergence de folios ne se raconte nulle part au lecteur, elle s'y traduit par l'absence de ces deux numéros et par rien d'autre.

LES TROIS POINTS LAISSÉS À ARBITRER

1. Volume : conforme, et je l'ai recompté plutôt que de le croire. Le texte lecteur, seul objet de la
   borne, fait 1 553 mots, dans la fourchette 1 300-1 700. Les 1 766 mots du script et les 1 801 de
   mon comptage incluent `limits`, que l'application n'affiche pas et que personne ne lit d'affilée ;
   la raison même de la borne haute (« un article que personne ne finit ») ne porte que sur ce qui
   s'affiche. Au demeurant, même le total avec `limits` reste sous 1 900. L'audit avait fait le même
   partage pour la version antérieure (1 257 mots lecteur sur 1 481). Rien à reprendre.
2. `limits` à 248 mots pour 100-200 : non-conformité formelle réelle, non bloquante, à reprendre au
   prochain passage sur cette carte. Trois raisons de ne pas rejeter là-dessus. Le champ est interne
   et n'atteint aucun lecteur. Le dépassement préexiste (224 mots au blob antérieur) : ce n'est donc
   pas une régression de cette réécriture, et rejeter restaurerait une version qui dépassait déjà la
   fourchette tout en plaçant la frontière au mauvais endroit, puisque son `limits[0]` commettait la
   localisation sur l'article `metadata-only` de 1989. Enfin les 24 mots ajoutés sont exactement le
   motif des refus du gate : quatre localisations nommées, aucune tranchée, l'interdit qui en
   découle. Chacun des quatre paragraphes nomme une source, son état d'accès et l'affirmation qu'il
   interdit, ce que §5 demande sur le fond. Le gras à retirer, s'il faut le faire, est dans la
   redite de `limits[1]` sur l'état d'accès des deux sources de notice, pas dans `limits[0]`.
3. Titre « Un nombre entre zéro et un » face aux 1,05 de Suds : imprécision mineure, non bloquante,
   et non imputable à la réécriture, le titre étant identique au blob antérieur. Il nomme les deux
   bornes que le texte de 1987 déclare lui-même p. 17 (« If β = 1… If β = 0 »), c'est-à-dire la chose
   dont la section parle, ce que §2 attend d'un titre. Surtout, le texte ne dissimule pas le
   dépassement : S4.P2 l'annonce en clair, « compte ce qui est en route en entier, et même un peu
   plus : son paramètre vaut 1,05 ». Le lecteur rencontre donc une surprise instructive, la valeur
   estimée pouvant excéder la borne d'interprétation, et non une contradiction avec ce qu'on lui a
   dit. Le réécrivain a eu raison de ne pas y toucher dans une boucle de correction factuelle.
   Retouche possible un jour, sans urgence : un titre qui nomme la fraction plutôt que ses bornes.

Fragilité documentaire que le gate aurait ratée : aucune. J'ai contrôlé sur `lecture.json` les
passages que le gate ne couvre pas de la même façon, à commencer par les titres, et les
affirmations les plus exposées du texte neuf : les trois tâches du décideur et la régulation par
les flux (extrait EOLSS, employés sans aucun folio, comme `reserves[3]` l'exige), le clou introduit
sans page puisque sa seule localisation est dans la couche dont les folios divergent, les quatre
rôles et onze équipes, « Interrogés en fin de partie », le mécanisme de Grizzly, la corroboration
1947-1987. Rien du contenu des deux sources `metadata-only` n'est affirmé : l'article de 1989 n'est
pas mentionné dans le texte lecteur, et Business Dynamics n'y paraît que par des éléments de notice
(année, extension arrondie à mille pages, sujet du titre) suivis de ce qu'il faudra ouvrir.

raison de la décision : le gate est valide au SHA exact, 57 claims sur 57. Les trois défauts
majeurs du diagnostic sont supprimés, et non déplacés : l'argument qui contredisait sa source est
remplacé par les deux énoncés que la source fournit, l'agrégation promise est livrée, et
l'affirmation centrale de la carte devient la conclusion d'un mécanisme établi paragraphe par
paragraphe au lieu d'une assertion. Les deux axes faibles de l'audit, profondeur et ouverture, sont
ceux qui montent le plus, et aucun autre ne baisse : j'ai refait le delta des dix-huit paragraphes
et cherché la répétition déplacée, l'exemple décoratif, la transition qui masque un saut et
l'information solide perdue. Le seul retrait de substance est un verbatim dont la proposition est
mieux dite par un chiffre, et les deux pertes de folio sont le bornage qu'imposait le gate sur une
divergence que l'audit interdisait de trancher. Restent deux réserves formelles, `limits` à 248 mots
et un titre qui nomme des bornes que le texte lui-même dépasse en le disant : l'une et l'autre
préexistaient à la réécriture, aucune n'atteint la compréhension du lecteur, et rejeter pour elles
restaurerait un texte strictement moins bon sur les huit axes et fautif sur la frontière
documentaire. Amélioration nette et sûre.
