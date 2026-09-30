concept : amenagement-onereux-du-monde-exterieur
mode    : FACTCHECK_FIX (boucle 1 sur 2)
gate lu : factcheck-gate.json, verdict FACTCHECK_FAIL, 72 claims, 69 soutenus, 3 refusés (C008, C051, C057), mapping_incomplete vide, structural_errors vide.
check mécanique : PASS — `npm run corpus:deepen -- --check --only=amenagement-onereux-du-monde-exterieur`,
« 1 approfondissement(s) contrôlé(s), 1812 mots. Rien projeté. »

matière relue pour cette boucle
- corpus/deepening-audits/work/amenagement-onereux-du-monde-exterieur/factcheck-gate.json,
  verification.json (les trois verdicts TOO_STRONG), verification-bundle.json (appuis résolus de
  C008), claim-map.json (claim_text et locators exacts de C008, C051, C057 et de leurs voisins
  C007, C039, C050, C052, C056, C058), rewrite.md.
- corpus/validated/amenagement-onereux-du-monde-exterieur.json : champ `dossier` absent (None),
  donc le répertoire conventionnel est le seul dossier de cette carte. `notes` (20) et
  `review.notes` (9) relues.
- corpus/evidence/amenagement-onereux-du-monde-exterieur/ listé moi-même : un seul fichier,
  `lecture.json`, relu en entier (`definition_de_lauteur`, `sources_ouvertes` 0-3, `reserves` 0-15).
  Pas de `scouting.json`.
- corpus/deepenings/PROTOCOLE.md (table de volumes, statut interne de `limits`),
  AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md, scripts/corpus/lib/deepenings.mjs (les contrôles
  DISPOSITIF, AVEU et aveuDeLecture s'appliquent aussi à `limits`, qui entre dans `affiches` :
  les ajouts ci-dessous sont écrits pour ne déclencher aucun de ces motifs).
- Isolation (chantier O) : aucun répertoire de preuve d'une autre carte n'a été ouvert, aucun
  fichier portant un autre conceptId. Les fiches nommées par notes[14], notes[16] et reserves[10]
  (definition-de-la-psychologie-economique, conduite-economique, niveaux-de-rationalite-economique,
  seuils-de-rupture-et-d-ajustement) n'ont pas été touchées. Aucune recherche web.

---

1. LES TROIS GESTES

C051 — catégorie NARROW (retour à ce que les appuis écrivent).
  locator sections[4].paragraphs[1].
  avant : « Le cas qui l'occupe vraiment est celui de Pierre-Louis Reynaud, dont La Psychologie
  Economique avait paru chez Marcel Rivière en 1954, dans une collection de bilans. »
  après : « Le cas qui l'occupe vraiment est celui de P.L. Reynaud, dont La Psychologie Economique
  avait paru chez Marcel Rivière en 1954, dans une collection de bilans. »
  Vérifié sur pièce avant d'écrire : ni `notes[16]`, ni `reserves[9]`, ni `reserves[10]`, ni
  `notes[5]` n'écrivent autre chose que « P.L. Reynaud ». Le prénom développé n'existe nulle part
  dans la matière ouverte, et `notes[16]` / `reserves[10]` signalent que la même pièce cite page 49
  le sociologue J.D. Reynaud : la forme développée n'était pas seulement non portée, elle était
  risquée. Aucune précision de remplacement n'a été introduite. L'éditeur Marcel Rivière, l'année
  1954 et la collection de bilans, que le gate déclare portés, sont conservés tels quels.

C008 — catégorie REMOVE (de la comparaison, et d'elle seule).
  locator sections[0].paragraphs[0].
  avant, première phrase du paragraphe : « Le mot de cet énoncé qui reçoit le commentaire le plus
  fourni est l'adjectif. »
  après : la phrase est retirée. Le paragraphe s'ouvre désormais sur sa deuxième phrase, inchangée :
  « Page 12, Albou écrit que le qualificatif onéreux "rappelle que la réalisation des objectifs que
  l'homme poursuit en tant qu'agent économique est loin d'être aisée". »
  Pourquoi REMOVE et non NARROW : la seule version bornée possible (« l'adjectif est le terme qu'il
  commente en trois problèmes ») est déjà dite par les deux phrases suivantes du même paragraphe,
  qui nomment la rareté, le choix et le coût. La narrower aurait été un doublon de delta. Aucune
  autre comparaison n'a été mise à la place : le gate note lui-même que `definition_de_lauteur`
  développe « aménagement » en trois notions d'ampleur comparable, et rien dans la matière ouverte
  ne hiérarchise les commentaires.
  Non touché, parce que le gate le donne SUPPORTED : C039, « Le terme le plus discret de cet énoncé
  est celui qui exclut le plus » (sections[2].paragraphs[2]). Même famille de tournure, verdict
  différent : je m'en tiens au verdict.

C057 — catégories REATTRIBUTE + NARROW.
  locator sections[4].paragraphs[2].
  avant : « Publier le premier sur un sujet ne fonde donc pas une discipline : il faut encore
  énoncer ce dont elle se charge, et depuis quel point de vue. »
  après : « Aux yeux d'Albou, publier le premier ne suffit donc pas à fonder la discipline : il faut
  encore énoncer ce dont elle se charge, et depuis quel point de vue. »
  Deux mouvements dans une seule retouche. REATTRIBUTE : « Aux yeux d'Albou » rend la proposition à
  celui qui la tient, et elle ne s'énonce plus dans la voix du texte, ce qui la rend compatible avec
  la phrase voisine (C056, soutenue) qui rappelle que la position de Reynaud n'a pas été ouverte.
  NARROW : « ne fonde pas une discipline » (quantificateur universel) devient « ne suffit pas à
  fonder la discipline », c'est-à-dire celle dont il est question, la psychologie économique.
  Ce qui reste porté par `notes[16]` / `reserves[9]` : Albou reconnaît l'antériorité de publication
  de Reynaud, écrit page 7 que l'ouvrage ne définit nulle part la discipline dont il traite, et
  ajoute page 10 que l'histoire ne doit pas s'écrire du point de vue de l'économiste. Le critère
  énoncé est bien le sien, lu sur ces deux reproches ; il n'est plus donné pour une loi.

Aucun claim soutenu n'a été retouché, et en particulier aucun des treize claims bornés sur l'origine
de la formule : les paragraphes de la section 6 (« L'origine incertaine de la formule ») et les
phrases d'attribution de la section 5 sont inchangés au caractère près.

2. TITRES ET LEAD (règle 3, chantier M point 4)

Deux excédents de portée non ancrés par un claim, donc invisibles au gate, ont été corrigés parce
que les trois gestes ci-dessus venaient de retirer exactement ces termes du corps du texte.

a) Titre de sections[4], la section touchée par C051 et C057.
   avant : « Un ouvrage qui ne définissait pas son objet »
   après : « Un ouvrage qui, selon Albou, ne définissait pas son objet » (57 caractères, sous la
   borne de 60 du contrôle)
   C'était le cas d'école : le titre affirmait dans la voix du texte, sur un ouvrage que personne
   n'a ouvert, le verdict que le corps de la section attribue explicitement à Albou seul (« Ce
   verdict est le sien, et c'est le seul qu'on entende ici »). Il portait donc en position de titre
   l'excès même que C057 venait de se faire refuser en position de phrase. L'attribution suffit à le
   régler, sans toucher au sujet annoncé.

b) Dernière phrase du lead[1], l'annonce.
   avant : « Tout le poids de la phrase est dans ses cinq derniers mots. »
   après : « Albou en commente ensuite les termes un à un. »
   Trois raisons. C'était la même pesée des parties de l'énoncé les unes contre les autres que le
   superlatif refusé en C008, en position d'annonce et sans claim pour l'arrêter. Elle entrait de
   plus en contradiction avec C039, soutenu, qui donne le terme le plus excluant à « problèmes
   humains », lequel ne fait pas partie des cinq derniers mots. Et elle annonçait un plan que le
   texte ne suit pas, puisque la section 3 traite justement « problèmes humains ». La phrase de
   remplacement n'ajoute rien : elle reprend `definition_de_lauteur`, « Il en commente ensuite les
   termes un à un », et elle assure la transition vers la section 1, qui s'ouvre maintenant sur
   « Page 12, Albou écrit que… ».

c) Titres relus et laissés tels quels, faute d'excédent : « Ce que "onéreux" veut dire ici »
   (section touchée par C008 : le titre ne comporte aucune comparaison ni aucune primauté, il nomme
   son sujet), « Aménager : une activité, un plan, un but », « Un monde extérieur qui est d'abord
   social », « La psychologie sociale, revendiquée puis regrettée », « L'origine incertaine de la
   formule ». Aucun ne nomme une fonction, un palier ni une méthode.

3. `limits`

Reste interne : aucun de ces quatre paragraphes n'apparaît en section visible ni en prose lecteur,
et rien n'y est remonté dans `lead` ou `sections`. Écrits en évitant les motifs que
`deepenings.mjs` applique aussi à ce champ (DISPOSITIF, AVEU, aveuDeLecture) : ni « la carte », ni
« la fiche », ni « le corpus », ni « le dossier » suivi d'un verbe de portage, ni tiret cadratin.

Ajouté, `limits[2]`, ce que l'ancien état ne nommait pas et qui a mécaniquement laissé passer C051
et C057 :
  « Reynaud n'est nommé que par ses initiales, P.L. Reynaud : développer l'initiale en prénom est
  interdit, le même article citant page 49 le sociologue J.D. Reynaud. Interdit aussi d'énoncer
  comme règle générale que l'antériorité de publication ne fonde pas une discipline : ce critère ne
  se lit que dans les deux reproches d'Albou, pages 7 et 10. »
Deux interdits, chacun avec sa raison : l'initiale non développable, avec le motif d'homonymie qui
la rend dangereuse ; et le critère de fondation à laisser attribué à Albou.

Ajouté, `limits[3]`, l'anomalie documentaire consignée et non tranchée (règle 5) :
  « Le nom du recenseur de Barre dans la Revue économique de 1956, page 675, n'est pas assuré :
  donné tantôt à Pierre Dieterlen, tantôt à Henri Guitton. Rien ne s'y appuie ; l'image de la page
  675 tranchera. »
État exact de la contradiction, pour le passage qui la tranchera : `review.notes[4]` écrit « la
recension d'Henri Guitton, Revue économique, 1956, p. 675 » ; `notes[9]` et `sources_ouvertes[2]`
donnent le même compte rendu, même revue, volume 7, n° 4, p. 675-678, même URL Persée, à Pierre
Dieterlen ; `reserves[0]` parle du « compte rendu Dieterlen ». Aucun claim n'affirme ce nom et le
texte lecteur ne le nomme pas : je ne tranche pas, et je n'ai pas ouvert la page pour trancher.
Ce que la contradiction ne met pas en cause : l'adresse bibliographique lue sur cette page, donc le
« sept ans » de l'antériorité de Barre, sur lequel les deux notes concordent.

Conservé, resserré : l'ancien `limits[0]` (Barre tome I non ouvert, absence de page, piste Perroux,
interdit dans les deux sens) devient `limits[0]` ; l'ancien `limits[1]` (portée du constat d'absence
de crédit, portée de l'argument Persée et Érudit) et l'ancien `limits[2]` (Reynaud 1954 et Wärneryd
connus par le seul Albou, réception nulle, rapport au Commissariat Général du Plan) sont fondus en
`limits[1]`. Aucun interdit ni aucune lacune de l'état antérieur n'est perdu. Une seule perte de
précision, assumée pour tenir le volume : la portée du constat d'absence de crédit dit maintenant
« sur la couche texte des 81 pages, non sur les 81 images » sans énumérer les quatre pages relues en
image, ce qui borne le constat de la même façon.

Volume de `limits` : 195 mots avant, 237 après, en 4 paragraphes (contrôle : 1 à 5). La fourchette
indicative du protocole est de 100 à 200 mots : elle est dépassée de 37 mots, et je le signale plutôt
que de le masquer. Les 142 mots de l'état antérieur ont été comprimés à leur minimum utile, et les
95 mots ajoutés sont le prix des deux exigences de cette boucle, l'interdit sur l'initiale avec son
motif et la contradiction nommée assez précisément pour qu'un futur passage puisse la lever. Le
champ n'étant ni affiché ni borné en mots par le contrôle, j'ai préféré l'excès de précision interne
à une réserve trop vague pour servir.

4. VOLUME

- texte lecteur (lead + paragraphes de sections, titres exclus) : 1590 mots avant, 1575 après.
  Détail : lead 178 puis 175 (fourchette 120-200 tenue) ; sections 1412 puis 1400.
  Mouvements : C008 retire 13 mots, C051 en retire 0 (deux jetons dans les deux états), C057 en
  ajoute 3, la phrase d'annonce du lead en retire 3, le titre ne compte pas.
- `limits` : 195 avant, 237 après.
- total compté par le script : 1785 avant, 1812 après, sous la borne dure de 2100 et sous le seuil
  de 1900 du protocole.

5. RELECTURE DE DELTA SUR LES PARAGRAPHES TOUCHÉS

lead[1] — inchangé dans son delta : ces traces non comptables sont l'objet revendiqué d'une
discipline, et le lecteur lit l'énoncé. La dernière phrase ne pèse plus les termes les uns contre
les autres, elle annonce que le commentaire va les prendre un à un.
sections[0].paragraphs[0] — delta inchangé : « onéreux » ne désigne pas un prix affiché mais un
équilibre des fins et des moyens, décomposé en trois problèmes nommés. Le paragraphe perd une phrase
de cadrage comparatif, pas un palier de compréhension.
sections[4].paragraphs[1] — delta inchangé : contre qui la définition se pose, ce qu'Albou concède à
Reynaud, ce qu'il lui refuse, et le fait que ce jugement n'a qu'une voix.
sections[4].paragraphs[2] — delta inchangé : publier le premier ne fonde pas la discipline, et la
correction de 1982 n'est pas un désaveu de paternité. Le premier temps est désormais donné pour ce
qu'il est, le critère d'Albou lu sur ses deux reproches.
Aucun paragraphe n'est devenu sans delta, aucun ne fait le travail de son voisin, aucune section ne
répète principalement une section antérieure, et la charpente des six sections est intacte.

6. CE QUE JE NE RENDS PAS

Aucun verdict : ni FACTCHECK_PASS, ni ACCEPT. Aucun support `SUP-...` n'a été inventé, touché ni
renuméroté, et aucun artefact de fact-check n'a été réparé à la main. Ces quatre modifications
invalident le SHA du candidat : `factcheck-gate.json`, `verification.json`,
`verification-bundle.json` et `claim-map.json` portent tous
candidate_sha256 = d8b11544e367d3a55a0868ec78168ba4c7b3ce5e8c791838f694172327e6e903, qui ne
correspond plus au fichier. Le cycle doit repartir de PREPARE.
