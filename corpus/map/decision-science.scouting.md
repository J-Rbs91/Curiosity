# Cartographie — `decision-science`

Balayage d'ouverture du 23 août 2026. Septième domaine instruit, deuxième de la famille
« Comprendre le pilotage ».

**Ce domaine ne repart pas de zéro.** Deux cartographies voisines lui ont légué cinq textes :
`corpus/map/cybernetics.scouting.md` (Newell, Shaw & Simon 1960, en texte intégral ouvert non
lu) et `corpus/map/human-factors.scouting.md` (Tversky & Kahneman 1974 sous sa forme de
rapport technique ONR, Tversky 1972, l'ouvrage collectif de 1982, et le courant MAUT). Ce
passage a repris chacun des cinq, vérifié ou approfondi leur état d'accès, et balayé au-delà
par littérature plutôt que par nom.

## Note méthodologique — outils effectivement utilisés

Les outils `mcp__documentary__*` (`search_literature`, `search_francophone`,
`verify_reference`, `zotero_search`) **n'étaient pas exposés** dans la liste d'outils de cette
session, comme aux six passages précédents. Zotero est resté inaccessible. Ce n'est pas un
vide de champ, c'est un vide d'outil : ce que ces bases auraient rendu est inconnu, pas absent.

Les vérifications ont été faites en direct contre : **Crossref** (métadonnées, DOI),
**Unpaywall** (statut d'accès ouvert par DOI), **Internet Archive** (`advancedsearch`,
`metadata`, téléchargement direct des `_djvu.txt` et de PDF), **HAL** (API de recherche),
**Numdam** (résolution directe d'un article RIRO/RAIRO), et **WebSearch/WebFetch** pour la
détection et la résolution d'identifiants (jamais comme source elle-même). OpenAlex et
Semantic Scholar n'ont pas été appelés (non exposés). Persée a été interrogé une fois par mots
clés larges (« aide multicritère décision », « Sfez decision ») sans qu'aucun résultat
pertinent n'ait pu être creusé faute de temps — c'est un manque de ce passage, signalé plus bas.

Deux défis anti-robot rencontrés et **non contournés**, conformément à la règle : Project
Euclid (Incapsula, sur le DOI ouvert de Shafer, « Savage Revisited ») et rairo-ro.org
(DataDome, sur le DOI ouvert de Roy 1968). Dans les deux cas, une voie alternative légitime a
été trouvée (respectivement : la reprise en recueil de 1988, et le miroir Numdam).

## Ce dont ce domaine a hérité, et ce qui en est sorti

| legs | état annoncé | résultat de ce passage |
|---|---|---|
| Newell, Shaw & Simon (1960), *A Variety of Intelligent Learning in a General Problem Solver* | texte intégral ouvert sur Internet Archive, item sans restriction, repéré non lu | **confirmé et lu** : `access-restricted-item` absent sur l'item `SelfOrganizingSystems`, PDF 22 Mo. Piège de pagination hérité vérifié sur ce texte précis : le folio 190 porte encore la note de bas de page de Newell/Shaw/Simon, alors que la table des matières annonce le chapitre suivant (Milner) à partir de la page 190 — c'est en réalité le folio 191. La pagination retenue est 153-190 (folios), conforme à la table des matières pour le début, en désaccord d'un folio pour la fin. |
| Tversky & Kahneman (1974), rapport technique ONR *Judgment under uncertainty* | mirée sur Internet Archive sous `DTIC_AD0767426`, sans `access-restricted-item`, non ouverte | **confirmé et lu** : `access-restricted-item: None`, PDF 2,3 Mo, contenu vérifié (page de titre ONR, Oregon Research Institute, contrat n° N00014-73-C-0438). La version publiée (*Science* 185(4157), DOI 10.1126/science.185.4157.1124) reste fermée, `is_oa: false` reconfirmé. |
| Tversky (1972), *Elimination by aspects: A theory of choice* | accès non testé | **testé et fermé** : *Psychological Review* 79(4), DOI 10.1037/h0032955, `is_oa: false` confirmé par Unpaywall. Un texte apparenté du même auteur et de la même année, « Choice by elimination » (*Journal of Mathematical Psychology*, DOI 10.1016/0022-2496(72)90011-9), également fermé. Aucun rapport technique précurseur trouvé sur Internet Archive (recherche par titre et par auteur dans la collection `dticarchive`, zéro résultat). Le texte n'est pas non plus repris dans l'anthologie de 1988 décrite plus bas — seulement cité dans sa bibliographie. **Fermé, confirmé.** |
| Kahneman, Slovic & Tversky (dir.) (1982), *Judgment under uncertainty: Heuristics and biases* | accès non testé, probablement fermé | **testé et fermé** : recherche par titre exact sur Internet Archive, un seul résultat, qui est le rapport technique de 1974 déjà connu (`DTIC_AD0767426`) — pas l'ouvrage collectif de 1982 lui-même. **Fermé, confirmé.** |
| MAUT (théorie de l'utilité multi-attributs) | courant, pas un texte, non recherché | **toujours un courant.** Le chapitre de Keeney retenu plus bas (candidat 8) s'y oppose explicitement plutôt que de l'incarner ; il ne le remplace donc pas comme point d'entrée. |

## Candidats — du plus solide au plus fragile

### Groupe A — Rapports techniques et tirés à part en accès ouvert direct

Le même filon que celui qui a rendu le legs T&K 1974 s'est révélé être une **voie
systématique** pour ce champ : plusieurs textes fondateurs, publiés dans des revues
aujourd'hui fermées, existent sous forme de rapport ONR/ARPA/RAND mirés sans restriction sur
Internet Archive dans la collection `dticarchive`.

#### 1. Kahneman, D. & Tversky, A. (1977). *Prospect Theory: An Analysis of Decision Making Under Risk*

**Précurseur direct** de Kahneman & Tversky (1979), « Prospect Theory: An Analysis of Decision
under Risk », *Econometrica* 47(2), 263-291, DOI 10.2307/1914185 — **fermé**, JSTOR,
`is_oa: false` confirmé. Rapport pour l'Advanced Decision Technology Program (DARPA/ONR),
Decision Research (branche de Perceptronics), avril 1977.

- **DOI Crossref du rapport** : 10.21236/ada045771.
- **Accès** : Internet Archive, identifiant `DTIC_ADA045771`, collection `dticarchive`.
  `access-restricted-item` **absent** des métadonnées (vérifié). PDF 20,5 Mo,
  `DTIC_ADA045771_djvu.txt` téléchargé et lu : page de titre confirmée (« PROSPECT THEORY: AN
  ANALYSIS OF DECISION MAKING UNDER RISK », Daniel Kahneman, Amos Tversky, Decision
  Research–A Branch of Perceptronics).
- **Ce que le texte porterait** : la fonction de valeur (concave sur les gains, convexe sur les
  pertes, plus pentue sur les pertes) et la pondération non linéaire des probabilités —
  le cœur du camp descriptif sur le choix sous risque, en position de contre-modèle de la
  théorie de l'utilité espérée.
- **Identifiant proposé** : `theorie-des-perspectives`.
- **Accessibilité** : texte intégral, anglais, pas de traduction française identifiée.

#### 2. Arrow, K. J. (1948). *The Possibility of a Universal Social Welfare Function*

RAND Paper P-41, 26 octobre 1948. **Précurseur direct** de Arrow, K. J. (1950), « A Difficulty
in the Concept of Social Welfare », *Journal of Political Economy* 58(4), 328-346, DOI
10.1086/256963 — **fermé**, `is_oa: false` confirmé — et du livre qui en découle, *Social
Choice and Individual Values* (1951/1963), dont **toutes** les éditions trouvées sur Internet
Archive (`socialchoiceindi0000arro_k6v2`, `socialchoiceindi0000arro`, `socialchoiceindi02edarro`,
`socialchoiceindi0000kenn`) portent `access-restricted-item: true`.

- **Accès** : Internet Archive, identifiant `DTIC_AD0603806`, collection `dticarchive`.
  `access-restricted-item` **absent** (vérifié). PDF 6,2 Mo, texte lu : page de titre confirmée
  (« THE POSSIBILITY OF A UNIVERSAL SOCIAL WELFARE FUNCTION », Kenneth J. Arrow, P-41,
  10/26/48).
- **Réserve d'OCR notable, et elle est déclarée par le document lui-même** : la première page
  porte un avis du Clearinghouse for Federal Scientific and Technical Information : « WE REGRET
  THAT LEGIBILITY OF THIS DOCUMENT IS IN PART UNSATISFACTORY ». La couche texte confirme :
  passages dégradés (« PoosIBILITI » pour « Possibility », etc.). **Toute citation devra se
  relire à l'image**, plus encore que sur les autres textes de ce lot.
- **Ce que le texte porterait** : la démonstration, dans sa forme la plus ancienne, de
  l'impossibilité de construire une fonction de bien-être social cohérente à partir de
  préférences individuelles ordinales — décision collective comme problème d'agrégation.
- **Identifiant proposé** : `impossibilite-de-l-agregation-des-preferences`.
- **Accessibilité** : texte intégral, anglais, OCR dégradé (relecture à l'image nécessaire),
  pas de traduction française identifiée pour ce texte précis (la traduction française du
  *Choix collectif et préférences individuelles* de 1974 par Michel Dévoluy, Calmann-Lévy, porte
  sur le livre de 1951, non sur ce rapport).

### Groupe B — Un recueil de 1988 entièrement ouvert, plusieurs textes distincts dedans

**Bell, D. E., Raiffa, H. & Tversky, A. (dir.) (1988). *Decision Making: Descriptive,
Normative, and Prescriptive Interactions*. Cambridge, Cambridge University Press.**
ISBN 9780521351492 (édition reliée) / 9780521368513 (broché). DOI du recueil :
10.1017/cbo9780511598951.

- **Accès** : Internet Archive, identifiant `DecisionMaking`, collections `millionbooks` /
  `universallibrary` — le même fonds que l'item hérité de Newell, Shaw & Simon 1960.
  `access-restricted-item` **absent** (vérifié). Scan complet en pages image (631 fichiers
  TIFF/JP2, similaire à un `renderPage` de Persée) et en OCR (`_djvu.txt`, 1,9 Mo, `_hocr`,
  `_abbyy`). C'est la trouvaille la plus riche de ce passage : elle rend accessibles d'un coup
  neuf textes distincts, dont deux du camp normatif, deux du camp descriptif, un de méthode
  d'aide à la décision, un de critique de l'axiomatique, et le texte qui nomme lui-même le
  différend normatif/descriptif/prescriptif du champ.
- **Origine du recueil** : actes d'une conférence tenue à la Harvard Business School en juin
  1983 pour son 75ᵉ anniversaire. Chaque chapitre a été confirmé présent en cherchant son en-tête
  dans la couche OCR, et lu en substance sur son paragraphe d'ouverture au minimum.

#### 3. Bell, D. E., Raiffa, H. & Tversky, A. « Descriptive, Normative, and Prescriptive Interactions in Decision Making » (chap. 1, p. 9-22)

- **Ce que le texte porterait** : c'est le texte qui **nomme** le différend du champ. Il ne se
  contente pas d'opposer normatif et descriptif, il ajoute un troisième pôle — le prescriptif,
  ce qu'on peut faire pour aider un décideur réel, ni automate rationnel ni simple sujet
  d'expérience — et le justifie sur l'exemple de la transitivité des préférences. C'est un
  candidat rare : un texte qui expose et discute lui-même la ligne de fracture que le périmètre
  demande de représenter.
- **Identifiant proposé** : `normatif-descriptif-prescriptif`.
- **Accessibilité** : texte intégral, anglais.

#### 4. Fishburn, P. C. « Normative Theories of Decision Making under Risk and under Uncertainty » (chap. 4, p. 78-98)

DOI du chapitre : 10.1017/cbo9780511598951.006 — pas de publication antérieure distincte
identifiée, ce texte semble original à ce recueil.

- **Ce que le texte porterait** : exposé et défense des théories normatives du choix sous
  risque et sous incertitude par l'un des axiomaticiens du champ — le versant normatif exposé
  de l'intérieur, en position de contrepoint aux textes descriptifs du même volume.
- **Identifiant proposé** : `theories-normatives-du-choix-sous-risque`.
- **Accessibilité** : texte intégral, anglais.

#### 5. Tversky, A. & Kahneman, D. « Rational Choice and the Framing of Decisions » (chap. 9, p. 167-192)

Reprise de Tversky, A. & Kahneman, D. (1986), *The Journal of Business* 59(4), S251-S278, DOI
10.1086/296365 — **fermé**, `is_oa: false` confirmé. Un texte apparenté et antérieur des mêmes
auteurs, « The Framing of Decisions and the Psychology of Choice », *Science* 211(4481),
453-458 (1981), DOI 10.1126/science.7455683, est également **fermé** (`is_oa: false`
confirmé) ; il n'a pas été retrouvé en accès ouvert par ailleurs dans ce passage.

- **Ce que le texte porterait** : l'effet de cadrage — un même problème de choix, formulé en
  gains ou en pertes, inverse la préférence au risque (le problème dit « de la maladie
  asiatique » est développé dans ce texte). C'est le texte le plus directement enseignable du
  lot : un lecteur peut reconnaître le mécanisme dans n'importe quelle formulation d'options.
- **Identifiant proposé** : `effet-de-cadrage`.
- **Accessibilité** : texte intégral, anglais. **Réserve à écrire dans la fiche si elle est un
  jour rédigée** : le verbatim doit se localiser sur cette reprise de 1988 (ou sur l'article de
  1986 s'il est un jour ouvert), jamais sur l'article de *Science* de 1981, plus célèbre mais
  non lu ici.

#### 6. Shafer, G. « Savage Revisited » (chap. 10, p. 193-236 environ)

Reprise de Shafer, G. (1986), *Statistical Science* 1(4), 463-485, DOI 10.1214/ss/1177013518.
**Cas notable** : Unpaywall annonce `is_oa: true` avec une localisation chez l'éditeur
(`projecteuclid.org`), mais la page **est protégée par un défi anti-robot Incapsula** — la
requête directe rend une page de challenge JavaScript, jamais le PDF. **Non contourné**,
conformément à la règle d'accès ; la voie retenue est la reprise dans le recueil de 1988.

- **Accès confirmé** : lu sur plusieurs paragraphes (introduction complète relue, p. 193 du
  recueil, folio confirmé par une marque de pagination dans la couche OCR). Le texte discute
  les postulats de Savage, son « sure-thing principle », et propose de comprendre l'utilité
  espérée subjective comme une simple analogie avec le pari, parmi d'autres outils possibles,
  plutôt que comme la norme unique de la rationalité.
- **Ce que le texte porterait** : une critique interne de l'axiomatique normative — ce que
  l'utilité espérée subjective peut et ne peut pas prétendre fonder. C'est le candidat le plus
  proche de la littérature « critique du concept même de décision » demandée par le périmètre,
  même s'il critique une norme du choix plutôt que la notion même de moment décisionnel.
- **Identifiant proposé** : `critique-de-l-utilite-esperee-subjective`.
- **Accessibilité** : texte intégral (via le recueil), anglais. La version originale de 1986,
  bien que déclarée ouverte par Unpaywall, reste **non atteinte** dans ce passage.

#### 7. Keeney, R. L. « Value-Focused Thinking and the Study of Values » (chap. 21, p. 465-491 environ)

DOI du chapitre : 10.1017/cbo9780511598951.023. Antérieur à l'ouvrage que Keeney en tirera en
1992 (*Value-Focused Thinking*, Harvard University Press) — ce chapitre en est la première
formulation développée.

- **Ce que le texte porterait** : la thèse que la décision commence mal si elle commence par
  les alternatives — un décideur devrait d'abord formuler ce qu'il valorise, et n'engendrer les
  alternatives qu'ensuite, à partir de ces valeurs. C'est un texte qui porte directement sur
  « ce qu'un décideur construit comme espace de recherche, et ce que ce cadrage décide déjà du
  résultat » — la littérature de représentation du problème nommée par le périmètre, du côté de
  l'aide à la décision plutôt que de la psychologie cognitive.
- **Identifiant proposé** : `penser-a-partir-des-valeurs`.
- **Accessibilité** : texte intégral, anglais.

#### 8. Einhorn, H. J. & Hogarth, R. M. « Behavioral Decision Theory: Processes of Judgment and Choice » (chap. 6, à partir de p. 113 environ) — priorité plus faible

DOI du chapitre : 10.1017/cbo9780511598951.008 ; un chapitre 7 séparé (DOI …0.009) porte une
« Reply to commentaries » liée. La lecture faite dans ce passage (recherche de l'en-tête
« Hillel J. Einhorn and Robin M. Hogarth » dans la couche OCR) est tombée sur un passage qui
ressemble davantage à cette réponse aux commentaires (anecdote de Bertrand Russell sur les
propositions inconsistantes, ligne ~9186) qu'au corps de la revue elle-même — **la pagination
exacte du chapitre 6 seul n'a pas été établie avec certitude dans ce passage**.

- **Ce que le texte porterait**, sous réserve d'une relecture complète : une synthèse du camp
  descriptif — cohérence contre changement de règle selon le contexte, reprise du programme de
  recherche des biais. C'est davantage une revue de synthèse qu'un mécanisme isolé, ce qui le
  rend moins immédiatement « enseignable » au sens du test d'entrée : **à relire en entier
  avant toute instruction**.
- **Identifiant proposé (provisoire)** : `theorie-comportementale-de-la-decision`.
- **Accessibilité** : texte intégral (via le recueil), anglais, **pagination du chapitre à
  reconfirmer**.

### Groupe C — Francophone

#### 9. Roy, B. (1968). « Classement et choix en présence de points de vue multiples ». *Revue française d'informatique et de recherche opérationnelle* [Série verte], t. 2, n° V1, p. 57-75

DOI 10.1051/ro/196802v100571. **C'est le texte fondateur de la méthode ELECTRE et de l'école
française d'aide multicritère à la décision** — exactement la littérature que le périmètre
signale comme ne pouvant remonter d'aucune base anglophone.

- **Piège rencontré et évité** : Unpaywall annonce `is_oa: true` avec une localisation chez
  l'éditeur, `rairo-ro.org`. La requête directe sur cette URL rend **un défi anti-robot
  DataDome** (script de vérification, cookie de challenge) — non contourné. La voie alternative
  légitime est **Numdam**, qui republie en accès libre les anciens numéros de RIRO/RAIRO sous
  l'identifiant `RO_1968__2_1_57_0` (résolu par recherche du titre exact, pas deviné).
- **Accès confirmé** : `https://www.numdam.org/article/RO_1968__2_1_57_0.pdf`, `HTTP 200`,
  PDF de 1,88 Mo, 20 pages.
- **Ce que le texte porterait** : la construction d'une relation de surclassement à partir de
  plusieurs préordres complets (les critères), pour fonder un classement ou un choix sans
  agréger les points de vue en un critère unique — le geste fondateur qui distingue l'aide
  multicritère française de l'optimisation d'une fonction d'utilité unique.
- **Identifiant proposé** : `classement-multicritere-electre`.
- **Accessibilité** : texte intégral, français.

### Groupe D — Legs hérité, texte lu en détail

#### 10. Newell, A., Shaw, J. C. & Simon, H. A. (1960). « A Variety of Intelligent Learning in a General Problem Solver ». Dans *Self-Organizing Systems* (M. C. Yovits & S. Cameron, dir.), Pergamon Press / Spartan Books, p. 153-190 (folios)

Accès confirmé sur l'item Internet Archive `SelfOrganizingSystems` (`access-restricted-item`
absent, PDF 22,1 Mo, collections `millionbooks`/`universallibrary`). Voir la note sur le piège
de pagination hérité, ci-dessus.

- **Ce que le texte porterait** : une extension du General Problem Solver (GPS) présentée
  explicitement comme une théorie de l'apprentissage humain en résolution de problèmes,
  fondée sur une recherche heuristique dans un espace de moyens et de fins — pas une technique
  d'IA prise pour elle-même, ce qui la fait entrer par la clause du périmètre qui exige qu'un
  texte d'IA « expose une procédure de choix présentée comme un modèle de celle d'un humain ».
- **Identifiant proposé** : `recherche-heuristique-dans-gps`.
- **Accessibilité** : texte intégral, anglais, pagination à établir sur les folios (voir
  piège ci-dessus), pas de traduction française identifiée.

#### 11. Newell, A., Shaw, J. C. & Simon, H. A. (1958). « Elements of a Theory of Human Problem Solving ». *Psychological Review*, 65(3), 151-166

DOI 10.1037/h0048495 — **fermé**, `is_oa: false` confirmé par Unpaywall (American
Psychological Association). Trouvaille de ce passage, hors du legs.

- **Accès** : tiré à part numérisé et hébergé par les **Archives de l'Université Carnegie
  Mellon** (fonds Allen Newell, mais le même document est aussi indexé dans le fonds Herbert
  Simon), servi par le serveur IIIF de la bibliothèque :
  `https://iiif.library.cmu.edu/file/Newell_box00049_fld04210_doc0005/Newell_box00049_fld04210_doc0005.pdf`,
  `HTTP 200`, PDF de 700 Ko, 6 pages. **Lu intégralement** : la pagination imprimée (151 à 166)
  correspond exactement au contenu, la page de titre porte « Psychological Review, Vol. 65,
  No. 3, 1958 » et les trois auteurs avec leurs affiliations (RAND Corporation pour Newell et
  Shaw, Carnegie Institute of Technology pour Simon). Un doublon existe dans le fonds Simon :
  `Simon_box00064_fld04878_bdl0001_doc0001` (repéré par recherche web, non re-téléchargé, la
  page CMU de la notice n'ayant pas répondu — voir plus bas).
- **Réserve honnête sur l'autorisation** : la page de la notice d'archives elle-même
  (`findingaids.library.cmu.edu/repositories/2/resources/202`) a répondu `HTTP 503` à chaque
  tentative de cette session ; l'énoncé explicite d'une autorisation de republication n'a donc
  **pas** pu être lu sur cette page précise. Ce qui est constaté, c'est que le fichier est servi
  publiquement, sans mur d'authentification, par le serveur IIIF d'une bibliothèque
  universitaire qui documente son fonds d'archives à cette adresse — la même classe de source
  que les mises à disposition institutionnelles déjà retenues pour Forrester et Meadows dans le
  lot `systems-thinking`. Ce n'est pas un octroi de droits explicite lu noir sur blanc ; c'est le
  degré de certitude honnête atteint dans cette session.
- **Ce que le texte porterait** : le programme Logic Theorist (LT) présenté comme théorie des
  processus d'information du raisonnement humain — la source la plus ancienne et la plus
  explicite du lot sur la thèse « un programme est une théorie psychologique », condition même
  d'entrée de ce type de texte dans le périmètre.
- **Identifiant proposé** : `programme-comme-theorie-du-probleme`.
- **Réserve de doublon interne, à trancher avant instruction** : ce texte (1958) et le
  précédent (1960, candidat 10) portent sur le même programme (GPS/LT), le même trio d'auteurs,
  et une thèse quasiment identique — « un programme heuristique est un modèle du raisonnement
  humain ». Il est probable qu'**un seul** concept doive en sortir, pas deux cartes qui se
  répéteraient. Les deux sont consignés séparément ici parce que leur accès a été établi
  séparément et que la décision de fusion ou de partage revient à l'instruction, pas à la
  cartographie.
- **Accessibilité** : texte intégral, anglais, pas de traduction française identifiée.

## Candidats flagués — risque de doublon avec `organizational-sociology`, à ne pas instruire sans examen

Ces deux textes viennent du même recueil de 1988 (Groupe B). Ils sont consignés à part parce
que le périmètre prévient explicitement que Simon et March peuvent avoir leur place ici, mais
seulement si l'**objet** du texte est neuf par rapport à `rationalite-limitee` et
`garbage-can-model`, déjà publiées chez le voisin.

#### March, J. G. « Bounded Rationality, Ambiguity, and the Engineering of Choice » (chap. 2, p. 23-57 environ)

DOI 10.1017/cbo9780511598951.004. Lu en ouverture (p. 23, anecdote d'un étudiant demandant si
la théorie de la décision améliore vraiment les choix). L'objet apparent est **l'ambiguïté des
préférences** et la tension entre l'ingénierie normative du choix et le comportement réel — un
angle distinct de la rationalité procédurale de Simon déjà instruite, mais assez proche pour
demander une lecture complète et une comparaison explicite à `garbage-can-model` (dont March
est coauteur) avant toute instruction. **Risque de doublon : moyen.** Identifiant provisoire, à
confirmer seulement après cette comparaison : `ambiguite-des-preferences`.

#### Simon, H. A. « Rationality as Process and as Product of Thought » (chap. 3, p. 58-77 environ)

DOI 10.1017/cbo9780511598951.005 — dérivé de la Richard T. Ely Lecture de Simon, *American
Economic Review Papers and Proceedings* 68(2), 1978, p. 1-16. Lu en ouverture : le texte
mentionne explicitement le satisficing et distingue rationalité procédurale et substantive —
c'est-à-dire **l'objet même** de la carte `rationalite-limitee` déjà validée, qui s'appuie sur
la conférence Nobel de Simon (1978 également, un texte distinct mais sur le même sujet).
**Risque de doublon : fort.** Ce passage ne le propose donc **pas** comme candidat autonome ;
il est signalé pour mémoire, avec la conclusion que ce texte ne devrait probablement pas être
instruit séparément à moins qu'un examen serré ne montre que « rationalité comme processus »
et « rationalité comme produit » ajoutent une distinction absente de la carte existante.

## Textes vérifiés et fermés dans ce passage (au-delà du legs)

- **Tversky (1972), « Elimination by aspects »** — voir tableau du legs ci-dessus. Fermé,
  confirmé, aucune voie alternative trouvée.
- **Kahneman, Slovic & Tversky (dir.) (1982)** — voir tableau du legs ci-dessus. Fermé,
  confirmé.
- **Simon, H. A. (1973). « The Structure of Ill-Structured Problems ». *Artificial
  Intelligence*, 4(3-4), 181-201.** DOI 10.1016/0004-3702(73)90011-8, `is_oa: false` confirmé
  par Unpaywall. Cherché sur Internet Archive : le texte existe en réédition dans *Models of
  Discovery* (Simon, D. Reidel, 1977), identifiant `modelsofdiscover0000simo`, mais
  `access-restricted-item: true` (vérifié), comme les trois autres ouvrages de Simon testés
  dans la même session (`sciencesofartifi00simo`, `administrativebe00simo`,
  `newscienceofmana00simo`, tous restreints). **Fermé, confirmé.** C'est pourtant l'un des
  textes les plus directement pertinents pour la littérature « représentation du problème avant
  sa résolution » nommée par le périmètre — sa fermeture est un manque réel, pas un détail.

## Repéré mais non confirmé — à retenter en priorité

- **Newell, A. (1969). « Heuristic Programming: Ill-Structured Problems ». Dans J. S.
  Aronofsky (dir.), *Progress in Operations Research*, vol. III, New York, Wiley.** Repéré par
  recherche web comme hébergé sur les Digital Collections de l'Université Carnegie Mellon
  (`https://digitalcollections.library.cmu.edu/node/19441`). **Cette page a répondu `HTTP 503`
  à quatre tentatives indépendantes dans cette session** (deux par `curl` direct — dont une
  avec échec de certificat TLS distinct du proxy de l'environnement — et deux par l'outil de
  récupération web). **Ni confirmé ni infirmé.** C'est la reprise la plus prometteuse pour le
  prochain passage sur la littérature « représentation du problème avant sa résolution » : le
  titre même du texte porte directement sur les problèmes mal structurés, sujet sur lequel le
  texte de Simon 1973 (fermé, voir ci-dessus) aurait dû être la source de référence.

## Angles morts — littérature par littérature du périmètre

- **Représentation du problème avant sa résolution.** Couverte partiellement par le candidat 7
  (Keeney) et, plus indirectement, par les candidats 10 et 11 (GPS/LT, qui représentent le
  problème comme espace d'états avant de le résoudre par recherche). La source la plus
  directement nommée par le périmètre pour cette littérature, Simon 1973, est fermée ; son
  complément probable (Newell 1969) n'a pas pu être vérifié. **C'est la littérature la moins
  bien servie de ce passage.**
- **Recherche heuristique d'une solution.** Bien couverte par les candidats 10 et 11 (GPS,
  Logic Theorist), avec la réserve de doublon interne déjà signalée entre les deux.
- **Jugement de probabilité et ses écarts systématiques.** Couverte par le legs (T&K 1974) et
  touchée obliquement par le candidat 1 (la pondération des probabilités en théorie des
  perspectives). **Non cherché spécifiquement dans ce passage** : les textes distincts sur
  l'heuristique de disponibilité (Tversky & Kahneman, 1973, *Cognitive Psychology*) et sur la
  représentativité (Kahneman & Tversky, 1972, *Cognitive Psychology*) n'ont fait l'objet
  d'aucune recherche dédiée — pur manque de temps, à reprendre en priorité, probablement par la
  même voie ONR/DTIC que les candidats 1 et le legs.
- **Choix sous risque et sa modélisation.** La littérature la mieux couverte de ce passage :
  candidats 1, 4, 5, 6 — normatif et descriptif tous deux représentés.
- **Aide à la décision comme méthode.** Couverte par les candidats 7 (anglophone, analyse de la
  décision) et 9 (francophone, ELECTRE) — un bon équilibre sur ce point précis, contrairement à
  l'avertissement du périmètre sur le risque d'un lot uniquement anglophone. La **valeur de
  l'information** nommément citée par le périmètre (Howard, « Information Value Theory », 1966)
  n'a fait l'objet d'aucune recherche dans ce passage.
- **Décision collective et vote.** Couverte par le seul candidat 2 (Arrow 1948). Aucun texte
  postérieur ou complémentaire cherché (par exemple sur le paradoxe de Condorcet pris comme
  objet moderne, ou sur les procédures de vote comme mécanismes d'agrégation étudiés
  empiriquement).
- **Critique du concept même de décision.** La littérature la plus fragile de ce passage. Le
  candidat 6 (Shafer) en est le meilleur représentant trouvé, mais il critique une norme du
  choix, non le concept même de moment décisionnel. **La recherche francophone dédiée sur
  Sfez, *Critique de la décision* (1973), a échoué** (voir ci-dessous) : c'est précisément le
  texte que le périmètre semblait appeler par son titre, et il reste fermé.
- **Couche francophone.** Un candidat solide (Roy 1968), un angle mort majeur nommé
  explicitement (Sfez), et un manque de méthode réel : Persée n'a été interrogé qu'une fois,
  par mots-clés larges (« aide multicritère décision », « Sfez decision »), sans qu'aucun des
  quelques résultats retournés (`pomap_0758`, `sciso_1168`, `rfg_0338`, `barb_0001`) n'ait pu
  être ouvert et évalué faute de temps. **OpenEdition Books, nommé par le périmètre comme
  voie prioritaire pour ce domaine, n'a fait l'objet d'aucune recherche aboutie** — une requête
  a été tentée sans résultat exploitable, et la piste n'a pas été creusée davantage. theses.fr
  n'a été interrogé qu'une fois, sur « Sfez decision », sans résultat pertinent.

### Sfez, L. (1973). *Critique de la décision*. Paris, Armand Colin, 368 p. — recherche documentée, échec

Cherché sur HAL (aucun résultat sur le livre lui-même, seulement des citations tierces),
theses.fr (aucun résultat pertinent), Internet Archive (`creator:Sfez AND title:decision`,
zéro résultat), et par recherche web générale. Le seul texte relié trouvé est un **compte
rendu** — donc une source secondaire, jamais la voix de l'auteur — publié dans *Sociologie du
travail* : `https://www.persee.fr/doc/sotra_0038-0296_1974_num_16_4_1805_t1_0431_0000_2`. La
réédition chez les Presses de la Fondation nationale des sciences politiques n'a pas non plus
été localisée en ligne dans ce passage. **Angle mort déclaré, pas simplement une case vide** :
c'est le texte que le périmètre semble avoir en tête en nommant « la critique française de la
décision », et il n'a pas cédé.

### Candidats relevant de domaines déclarés mais fermés

**Aucun rencontré pendant ce balayage.** Les quatre domaines fermés que le périmètre nomme
(`operations-management`, `work-psychology`, `sociology-of-work`, `behavioral-economics`) n'ont
fait l'objet d'aucune requête dédiée, et aucun texte croisé en cherchant les littératures
ouvertes n'a semblé en relever clairement. **C'est un vide de méthode, pas un résultat sur le
champ** : contrairement aux passages `human-factors` et `cybernetics`, qui avaient
explicitement vérifié l'absence de dette sur des textes précis, ce passage n'a pas cherché ces
quatre domaines de façon ciblée. Ne pas lire ce silence comme une déclaration de vide établie.

### Bases et plateformes non appelées

**OpenAlex**, **Semantic Scholar**, **scite**, **Zotero** (outils `mcp__documentary__*` non
exposés) ; **Cairn**, **OpenEdition Books**, **theses.fr** (interrogé une seule fois, sans
succès) ; **Persée** (interrogé une seule fois, par mots-clés larges, résultats non
exploités) ; **la Bibliothèque du Congrès (MARC)** et **OpenLibrary** (non interrogées, alors
qu'elles ont résolu des cas difficiles dans des lots précédents). Aucune de ces absences ne vaut
vide du champ.

## Proposition de découpage thématique

**Proposition, pas un découpage arrêté** — aucun thème ne sera déclaré avant le contrôle des
cartes, conformément au périmètre.

### « Choisir sous risque : deux modèles qui s'opposent » — 4 candidats (1, 4, 5, 6)

Kahneman & Tversky (théorie des perspectives, candidat 1), Fishburn (défense normative,
candidat 4), Tversky & Kahneman (effet de cadrage, candidat 5), Shafer (critique de
l'axiomatique, candidat 6). **C'est le thème le mieux pourvu et le plus solide** : les deux
camps y sont représentés par des voix qui se répondent explicitement (Fishburn défend ce que
Shafer conteste ; T&K produisent l'anomalie empirique que la théorie normative doit absorber).
**Réserve** : trois candidats sur quatre viennent du même recueil de 1988 — un thème pourvu
depuis une seule source, même si les textes sont distincts et de camps opposés, mérite d'être
signalé comme tel plutôt que masqué.

### « Chercher une solution plutôt que la calculer » — 2 candidats (10, 11)

Newell, Shaw & Simon 1958 et 1960. **Réserve forte, déjà signalée plus haut** : ces deux
candidats portent sur le même programme et la même thèse. Si l'instruction n'en retient qu'un,
ce thème n'aura plus qu'une carte, et le périmètre est explicite sur ce cas : un thème sans
carte validée ne se déclare pas, et un thème à une seule carte se déclare à la condition que le
courant qu'il représente ne se range nulle part ailleurs sans perte — ce qui devra être
réexaminé selon ce que l'instruction retient.

### « Construire le problème et la méthode pour le trancher » — 2 candidats (3, 7)

Bell, Raiffa & Tversky (le différend normatif/descriptif/prescriptif nommé, candidat 3) et
Keeney (penser à partir des valeurs, candidat 7). **Réserve** : ce sont deux objets assez
différents — l'un est une réflexion sur ce que le champ fait de lui-même, l'autre une méthode
de structuration — réunis surtout par leur position commune en amont du choix plutôt que par un
mécanisme partagé. C'est le type de regroupement que le périmètre met en garde de ne pas
déclarer s'il ne tient que par le vocabulaire.

### « Agréger des préférences » — 1 candidat (2)

Arrow 1948, seul. Un thème à une carte ne se déclare pas selon la règle qui s'est répétée à
chaque domaine — consigné ici comme fonction de rappel pour le prochain passage, pas comme
proposition ferme.

### Roy (candidat 9) et Einhorn & Hogarth (candidat 8) restent hors thème dans cette proposition

Roy porte sur l'aide multicritère française, objet suffisamment distinct des candidats
anglophones de choix sous risque pour ne pas y être rattaché de force ; un seul candidat ne
suffit pas à proposer un thème « aide multicritère ». Einhorn & Hogarth est retenu à priorité
plus faible (pagination à reconfirmer) et n'est pas comptabilisé dans une proposition tant que
sa lecture n'est pas complète.

## Vérification de non-doublon

Les identifiants proposés dans ce passage —
`theorie-des-perspectives`, `impossibilite-de-l-agregation-des-preferences`,
`normatif-descriptif-prescriptif`, `theories-normatives-du-choix-sous-risque`,
`effet-de-cadrage`, `critique-de-l-utilite-esperee-subjective`, `penser-a-partir-des-valeurs`,
`theorie-comportementale-de-la-decision`, `classement-multicritere-electre`,
`recherche-heuristique-dans-gps`, `programme-comme-theorie-du-probleme` — ont été confrontés
aux 66 fiches de `corpus/validated/` (liste relue en entier) et à la fiche candidate
`couplage-lache`. **Aucune collision d'identifiant ni de slug.**

Le point de vigilance réel n'est pas lexical mais **conceptuel**, et il porte sur les deux
candidats flagués (March et Simon, voir plus haut) face à `rationalite-limitee` et
`garbage-can-model`, déjà publiées en `organizational-sociology`. Ce passage a tranché March en
« risque moyen, à comparer avant instruction » et Simon en « risque fort, non proposé comme
candidat autonome » plutôt que de laisser la décision à un stade ultérieur où elle coûterait
plus cher.

## Combien de candidats viennent d'un nom écrit de mémoire ?

**Quatre sur onze**, en comptant strictement les cas où la recherche est partie d'un nom déjà
connu plutôt que d'une littérature : Newell/Shaw/Simon (candidats 10 et 11, hérités et
prolongés — le nom était donné par le legs, pas choisi ici), Kahneman/Tversky pour la théorie
des perspectives (candidat 1, cherché nommément une fois le filon des rapports techniques ONR
identifié sur le legs), et Arrow (candidat 2, cherché nommément parce que « décision
collective » appelait un nom canonique pour amorcer la recherche). **Sept candidats sur onze
viennent en revanche d'un balayage documentaire au sens strict** : les candidats 3 à 8 sont
tous sortis de l'exploration d'un seul recueil trouvé en cherchant l'accès du legs et non en
cherchant leurs auteurs (Fishburn, Shafer, Keeney, Einhorn & Hogarth, Bell & Raiffa n'étaient
pas des noms de départ), et Roy (candidat 9) vient d'une recherche par littérature explicite
« aide multicritère française », explicitement nommée par le périmètre.

**La proportion reste correcte au regard de la mise en garde du périmètre**, mais avec une
nuance à ne pas cacher : la découverte du recueil de 1988 a été un coup de chance méthodique
autant qu'un balayage — il a été trouvé en cherchant l'auteur déjà connu Tversky sur Internet
Archive pour vérifier l'accès du candidat 1, pas en cherchant une littérature du périmètre pour
elle-même. C'est une variante du risque que le périmètre nomme : ne pas confondre un candidat
riche trouvé par accident heureux avec un balayage systématique des huit littératures.
