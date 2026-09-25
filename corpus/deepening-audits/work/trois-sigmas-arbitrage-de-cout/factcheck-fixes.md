# Correction factuelle — trois-sigmas-arbitrage-de-cout

concept : trois-sigmas-arbitrage-de-cout
mode : FACTCHECK_FIX (boucle 1 sur 2)
entrée : `factcheck-gate.json` (FACTCHECK_FAIL, 68 claims, 57 soutenus, 11 en échec, 0 erreur structurelle)
matière autorisée : `corpus/validated/trois-sigmas-arbitrage-de-cout.json` seul.

## Matière : constat préalable

`corpus/evidence/trois-sigmas-arbitrage-de-cout/` **n’existe pas** (listage direct : le répertoire est
absent). `factcheck-pack.json` en témoigne du côté du pack, et tous les supports du bundle portent
`origin: validated`. Aucun appui du dossier n’est donc mobilisable, et aucune recherche n’a été faite.
Les cinq gestes autorisés se jouent contre les seuls champs de l’enregistrement validé.

Les 57 claims soutenus ne sont pas retouchés : aucun de leurs `claim_text` n’a été modifié, y compris
les grandeurs numériques (276-277, 1931, `P > 1 − 1/t²`, `t = 3`, 0,27 %), le bornage « ces deux pages »
et l’attribution du calcul de 0,27 % aux manuels. Leurs offsets bougent parce que le texte est plus
court, ce qui impose de toute façon un tour complet depuis `PREPARE`.

## Le cas à part : C023, CONFLICT

`C023` citait « we never know f(θ, n) in sufficient detail to set up such limits ». Les deux appuis
divergent sur la lettre : `notes[2]` donne `f(θ, n)`, `review.notes[5]`, qui déclare lire sur l’image
de page, donne `fθ(θ, n)`. Le gate ne peut certifier aucune des deux formes.

Geste appliqué : **NARROW** sur la citation, au sens « rendre la phrase sans la notation contestée ».
La citation est ramenée au fragment sur lequel les deux appuis sont mot pour mot d’accord,
« in sufficient detail to set up such limits », et la fonction n’est plus nommée du tout. Le texte
lecteur n’affirme donc ni `f(θ, n)` ni `fθ(θ, n)`.

Ce qui n’a **pas** été fait, et pourquoi : choisir la forme de la note PROSE au motif qu’elle déclare
une lecture sur image aurait tranché une question de preuve par préférence d’appui, ce qui n’est aucun
des cinq gestes. La divergence reste ouverte et est désormais inscrite dans `limits`, à l’intention du
prochain lecteur primaire.

## Famille 1 : la définition de P, et ce qui en dépend

Les appuis ne portent que « la probabilité P associée aux limites » (`notes[0]`) et « increasing the
value P » (`notes[3]`). Rien n’y définit P.

| claim | verdict | geste | détail |
|---|---|---|---|
| C016 | TOO_STRONG | **NARROW** | « la probabilité qu’un point relevé tombe à l’intérieur des limites » devient « une probabilité associée aux limites », qui est la formule de `notes[0]`. La définition avancée disparaît. |
| C017 | TOO_STRONG | **NARROW** | l’identification « L’augmenter, c’est écarter les limites » est retirée : elle ne tenait que par la définition refusée en C016. Ne reste que le compromis que les appuis portent effectivement, dans les termes de `notes[3]` : augmenter P réduit le coût de chercher un ennui qui n’existe pas, et laisse passer davantage d’ennuis réels. |
| C035 | TOO_STRONG | **REMOVE** puis NARROW | la glose « comptée en multiples t de l’unité qu’on note sigma et qui mesure la dispersion ordinaire des mesures, à la proportion des valeurs qui restent à l’intérieur » est supprimée : ni la définition de sigma ni P comme proportion ne figurent dans l’enregistrement, qui ne contient pas même le mot sigma hors du titre de la carte. Ne reste que la lecture de la formule imprimée : elle met en rapport la probabilité P et le nombre t. |

La prémisse et la conséquence tombent ensemble : aucune des trois phrases ne conserve un morceau qui
supposerait la définition retirée. Conséquence assumée : le lecteur n’apprend plus ce que sigma
désigne. C’est une perte pédagogique réelle, et elle est portée en `limits` comme frontière, faute de
pouvoir être comblée sans source.

## Famille 2 : les prémisses absentes

| claim | verdict | geste | détail |
|---|---|---|---|
| C019 | TOO_STRONG | **REMOVE** | « Aucune largeur de limites n’est donc bonne en soi : elle dépend de ce que chaque erreur coûte là où l’on travaille » est retiré en entier. Le gate relève que la source retient au contraire une valeur générale, `t = 3` : ce n’est pas une portée à border, c’est une affirmation que la matière contredit. Rien n’a été écrit à la place, et surtout pas le contraire (l’absence d’appui pour la relativité locale n’établit pas l’universalité de la largeur). |
| C020 | TOO_STRONG | **REMOVE** | « Le même écart n’y mérite pas la même réaction » tombe avec C019, dont il était la chute. La comparaison de deux ateliers voisins disparaît avec elle : opposer deux lieux impliquait la relativité locale même sans la conclure. Ce qui subsiste est un atelier unique, explicitement hypothétique, qui rend concrets les deux postes de dépense déjà nommés en S1.P1 et mis en balance par le verbatim de `notes[3]`. |
| C030 | TOO_STRONG | **NARROW** | « une limite empirique se défend par ce qu’elle a donné jusqu’ici, atelier après atelier » et « le théorème dont elle sort » sont retirés : l’accumulation de résultats et la défense par théorème ne sont portées par rien. La phrase est ramenée à ce que `notes[0]` énonce littéralement, la voie écartée tirant la valeur de t d’un niveau de confiance choisi sur une loi supposée connue, et à ce que `quotation` porte, l’expérience qui indique la valeur. |
| C031 | UNSUPPORTED | **REMOVE** | « la première se conteste par une erreur de calcul, la seconde par son coût : ni la même conversation, ni la même autorité » est supprimé en entier. Aucun appui, et le marquage « On peut en tirer que » ne fonde pas une conséquence dont la prémisse manque. |
| C037 | TOO_STRONG | **NARROW** | « juste après » devient « après ». L’ordre (loi inconnue p. 276, puis l’inégalité avant le choix de t) est porté par `notes[2]` et la note ATTRIBUTION ; l’adjacence ne l’est pas, les appuis montrant une question et sa réponse empirique interposées. Seul l’adverbe tombe. |
| C038 | TOO_STRONG | **REMOVE** | « on peut comprendre l’inégalité comme ce qui reste quand cette loi est inconnue » est supprimé. La prémisse (l’inégalité vaut sans connaître la loi) est absente du bundle ; le marquage interprétatif ne la fournit pas. La section tient sans elle sur « L’inégalité borne, elle ne choisit pas », qui est soutenu. |
| C002 | UNSUPPORTED | **REMOVE** | « et il arrive qu’on la dérègle en la corrigeant » est supprimé du `lead`. Rien ne le porte. Les deux autres coûts de la fausse alerte (machine démontée pour rien, heures perdues) restent, et ils sont soutenus (C001). |

## Ce qui n’a pas été fait

- Aucune affirmation neuve pour combler un trou : les sept `REMOVE` laissent le texte plus court, et
  les quatre `NARROW` ne réécrivent que vers des formulations déjà présentes dans l’enregistrement.
- Aucun échec réparé par renversement : ni « la largeur vaut partout la même », ni « l’inégalité
  suppose une loi connue », ni « Shewhart ne parle pas de sigma » n’ont été écrits. L’absence d’appui
  n’a servi à établir aucun contraire.
- Aucun `SUP-...` invoqué, aucun artefact de fact-check retouché.
- Les quatre paragraphes de `limits` existants sont inchangés ; un cinquième est ajouté, qui inscrit
  les deux frontières que cette passe a mises au jour (la lettre divergente, sigma non défini).
  `limits` passe de 201 à 246 mots, au-delà de la fourchette indicative de `PROTOCOLE.md` §5 :
  c’est un champ interne, et la précision de la frontière prime ici sur son volume. Réserve laissée à
  la prochaine passe.
- `limits` n’affleure nulle part dans le texte lecteur : aucun de ses contenus n’a été remonté en
  bloc visible.

## Volume

| | avant | après |
|---|---|---|
| texte lecteur (`lead` + `sections`) | 1217 mots | 1134 mots |
| `limits` (interne, non affiché) | 201 mots | 246 mots |
| total compté par le script | 1418 mots | 1380 mots |
| paragraphes lecteur | 17 | 17 |

Le texte lecteur perd 83 mots et reste au-dessus du plancher de 1 100 de `PROTOCOLE.md` §5, mais de
peu : sept suppressions ne se compensent pas, et rien ne devait être ajouté pour les compenser.

`npm run corpus:deepen -- --check --only=trois-sigmas-arbitrage-de-cout` : **PASS**
(« 1 approfondissement(s) contrôlé(s), 1380 mots. Rien projeté. »)

## Delta des paragraphes touchés, après correction

- `lead[0]` : inchangé dans sa fonction, une clause en moins.
- S1.P2 : le compromis dans les termes de l’auteur, une commande unique à deux effets opposés, sans
  définition de P.
- S1.P3 : ce que les deux postes de dépense pèsent, sur un cas explicitement imaginé. Delta
  illustratif, plus faible qu’avant la correction, puisque la conséquence qu’il servait est retirée.
- S2.P1 : la voie du calcul fermée, la loi n’étant pas connue « in sufficient detail to set up such
  limits ».
- S2.P3 : le changement de justification, et la voie écartée nommée dans les termes de `notes[0]`.
- S3.P1 : l’inégalité imprimée au-dessus, son unique nom tiers, sa forme stricte, et ce qu’elle met
  en rapport.
- S3.P2 : ce que l’inégalité borne sans choisir, d’où « We are still faced with the choice of t ».

Aucun paragraphe consécutif ne partage son delta. Aucune section ne répète principalement une section
antérieure.

## Réserves, non corrigées ici

1. **Sigma n’est plus expliqué au lecteur.** « trois sigmas » subsiste en S3.P3 (claim soutenu, appuyé
   par le titre et le hook de la carte), mais l’enregistrement ne définit nulle part l’unité. Combler
   ce trou demande une lecture primaire, pas une retouche. Porté en `limits`.
2. **S1.P3 est désormais illustratif plus que progressif.** Sa conséquence propre étant retirée, un
   audit pédagogique ultérieur peut légitimement le supprimer ; il est conservé ici parce que sa
   suppression ferait passer le texte lecteur sous 1 100 mots, et parce que le mandat de cette passe
   est la correction minimale, non la refonte de la trajectoire.
3. **La divergence `f(θ, n)` / `fθ(θ, n)` reste ouverte.** Elle ne se tranchera que sur l’image de la
   page 276, et le texte lecteur ne l’affirme plus dans aucun sens.
4. **« La voie qu’il écarte » (S2.P3) prend son antécédent à distance.** Shewhart est nommé au
   paragraphe précédent de la section, pas dans la phrase qui précède. C’est une gêne de lecture, non
   un défaut factuel, et la corriger imposerait une écriture de plus après un contrôle passé : laissée
   à la prochaine passe.
5. Toute modification du texte invalide le SHA : l’orchestrateur reprend à `PREPARE`. Aucune
   auto-validation n’est prononcée, ni `ACCEPT`, ni `FACTCHECK_PASS`.

---

# Boucle 2 sur 2 (dernière)

mode : FACTCHECK_FIX
entrée : `factcheck-gate.json` (FACTCHECK_FAIL, 73 claims, 65 soutenus, 8 en échec, tous TOO_STRONG,
0 erreur structurelle) et `verification-bundle.json`.
matière autorisée : `corpus/validated/trois-sigmas-arbitrage-de-cout.json` seul. Listage direct :
`corpus/evidence/trois-sigmas-arbitrage-de-cout/` n'existe toujours pas ; tous les supports du bundle
portent `origin: validated`. Aucune recherche faite.

## La racine commune : sigma n'est pas défini, donc t = 3 ne peut pas être « trois sigmas »

La réserve 1 de la boucle 1 est maintenant tirée jusqu'au bout. Aucun appui ne définit sigma, aucun ne
donne `t` pour un multiple d'une unité sigma, aucun ne place des limites à une distance d'une moyenne,
aucun ne porte le terme « trois sigmas ». Les appuis portent `t = 3`, valeur économique acceptable
tirée de l'expérience, et le 0,27 % comme taux de fausses alarmes sous la loi normale. Le texte cesse
donc de faire l'identification, **et ne la nie nulle part** : l'absence d'appui n'établit pas le
contraire.

| claim | geste | avant | après |
|---|---|---|---|
| C049 | **NARROW** | « trois sigmas tiennent leur légitimité d'un prix, non d'une garantie » | « ce t = 3 tient sa légitimité d'un prix, non d'une garantie ». Le sujet devient la seule grandeur portée par les appuis. La conclusion (prix, non garantie) est inchangée : elle est soutenue par `attribution_note` (« choix d'expérience, pas un théorème », l'inégalité qui « borne les limites sans fixer la valeur retenue »). |
| C058 | **NARROW** | « à peine 0,27 % des points tombent au delà de trois sigmas » | « les fausses alarmes ne seraient que de 0,27 % ». Le 0,27 % est conservé tel que `notes[1]` le porte, comme taux de fausses alarmes sous la loi normale, et non comme proportion de points au delà d'une distance. L'énoncé géométrique disparaît en entier. |
| C067 | **NARROW** | « Si trois sigmas valent parce que la loi normale le dit » | « Si t = 3 vaut parce que la loi normale le dit ». La dépendance à la normalité, seule chose que l'appui porte, reste ; le sujet cesse de supposer l'unité sigma. |
| C002 | **REMOVE** (partie géométrique) | « Trop près de la moyenne […] Trop loin […] » | toute la construction « près / loin d'une moyenne » est supprimée du `lead`. Les deux erreurs sont désormais nommées par ce qu'elles sont dans l'appui de la p. 276 : aller chercher un ennui qui n'existe pas, ou laisser passer un ennui qui existe. |
| C020 | **REMOVE** (glose) | « la loi de la grandeur qu'on suit, c'est-à-dire la façon dont ses valeurs se répartissent quand rien d'autre que le hasard n'agit » | la glose tombe. Reste la voie déductive dans les termes exacts de `notes[0]` : connaître la loi, choisir un niveau de confiance, en déduire la limite. L'état « où seul le hasard agit » n'est plus affirmé. |

## C002, second motif : les fréquences et les durées

`lead[0]` donnait pour réels une fréquence (« sans arrêt »), deux durées (« on perd des heures »,
« pendant des semaines ») et un processus (« la dérive s'installe »). Aucun appui ne porte de
fréquence ni de durée. Geste : **REMOVE**, pas d'atténuation, conformément au mandat (une durée
affaiblie reste une durée). Rien n'a été écrit à la place : la phrase nomme les deux erreurs et
s'arrête. Les seules grandeurs chiffrées d'atelier qui subsistent dans le texte sont celles de S1.P2,
explicitement ouvertes par « Imaginons un atelier », et le gate les tient pour soutenues à ce titre.

## Les trois échecs indépendants

| claim | geste | détail |
|---|---|---|
| C003 | **NARROW** | « Les deux erreurs se paient, mais pas au même guichet : l'une en temps perdu, l'autre en pièces mauvaises » devient « Les deux se paient, et ce sont deux dépenses distinctes ». La phrase de la p. 276 oppose bien deux coûts et ne nomme la monnaie d'aucun : l'opposition est gardée, la spécification retirée. « Deux dépenses » est le mot que porte déjà C019, soutenu. |
| C060 | **REMOVE** (attribution positive) | « Ce calcul est le leur, et c'est à Shewhart qu'ils l'attribuent couramment » devient « Ils l'attribuent couramment à Shewhart ». La moitié portée par `notes[1]` (l'attribution courante) reste ; l'attribution positive du calcul aux manuels, qui le retirerait à l'auteur, disparaît. Le bornage suivant est inchangé : « elle ne figure pas dans ces deux pages » (accord de genre seul, la justification étant devenue le sujet). C'est exactement le bornage tenu ailleurs dans le texte : absence de trouvaille sur deux pages, pas démonstration d'absence dans l'ouvrage. |
| C069 | **REMOVE** (condition de mise en défaut) | « une distribution qui s'écarte de la normale ne la met pas en défaut, c'est un atelier où le compte cesse d'y être qui l'y mettrait » perd sa seconde moitié. La règle n'est plus rendue relative à un atelier donné, et rien n'est dit de ce qui la réfuterait : les appuis retiennent une valeur générale et se taisent là-dessus. C068 (« elle survit à l'ignorance de la loi ») est intact. |

## Relecture de résidu

Passe mot à mot sur les 17 paragraphes lecteur, sur les racines *sigma*, *moyenne*, *écart*,
*dispersion*, *distance*, *unité*, *trois*, *fois* :

- `sigma` : **0 occurrence** dans le texte lecteur (3 avant).
- `moyenne`, `écart-type`, `dispersion`, `distance`, `unité`, « trois fois », « trois unités »,
  « trois écarts » : **0 occurrence**.
- `écart` n'apparaît plus que sous les verbes *écarter* (mettre de côté, S2.P2, S4.P1, S5.P1) et
  *s'écarter de la normale* (S5.P2). Aucun n'est un écart-type. Vérifié un par un.
- `trois` : **1 occurrence**, `lead[1]`, « Sa réponse est un nombre, trois, choisi sur l'expérience
  et non calculé ». C'est `t = 3`, porté par la citation, sans unité accolée. Conservé.

Aucun résidu n'a donc été trouvé sous une autre formulation ; le seul point qui demandait un examen
était le « nombre, trois » du `lead`, et il ne nomme aucune unité.

## Grandeurs intouchées

276-277, 1931, `P > 1 − 1/t²`, `t = 3`, 0,27 %, le bornage « ces deux pages », le fragment
« in sufficient detail to set up such limits », la fonction laissée sans nom, l'en-tête
« DETECTION OF LACK OF CONTROL », le mémorandum du 16 mai 1924 : aucun n'est modifié.

## `limits`

Le trou est inscrit comme frontière interne, dans un paragraphe dédié : sigma n'est défini par aucune
source disponible, aucune ne donne le `t = 3` de la p. 277 pour un multiple d'une unité sigma,
l'identification à « trois sigmas » n'est donc ni écrite ni niée, et aucun énoncé de distance à une
moyenne n'est permis avant lecture de l'ouvrage. La perte pour le lecteur y est nommée comme telle.

Le contrôle plafonne `limits` à cinq paragraphes : la divergence `f(θ, n)` / `fθ(θ, n)`, qui est aussi
une question de lecture d'image, a donc été fondue dans le paragraphe sur l'édition et les folios,
et le paragraphe libéré porte sigma. `limits` passe de 246 à 294 mots, toujours au-delà de la
fourchette indicative de `PROTOCOLE.md` §5 : champ interne, la précision de la frontière primant sur
son volume. Aucun de ses contenus n'affleure dans le texte lecteur.

## Volume

| | boucle 1 | boucle 2 |
|---|---|---|
| texte lecteur (`lead` + `sections`) | 1134 mots | 1073 mots |
| `lead` | 198 mots | 139 mots |
| `limits` (interne) | 246 mots | 294 mots |
| total compté par le script | 1380 mots | 1367 mots |
| paragraphes lecteur | 17 | 17 |

Le texte lecteur perd 61 mots et passe sous le plancher indicatif de 1 100 de `PROTOCOLE.md` §5. C'est
la conséquence directe et assumée du retrait : cinq échecs sur huit tenaient à une identification que
rien n'appuie, et la combler demanderait une lecture primaire, pas une écriture. Rien n'a été ajouté
pour compenser. Le contrôle mécanique n'impose aucun plancher de mots.

`npm run corpus:deepen -- --check --only=trois-sigmas-arbitrage-de-cout` : **PASS**
(« 1 approfondissement(s) contrôlé(s), 1367 mots. Rien projeté. »)

## Delta des paragraphes touchés

- `lead[0]` : la situation, la ligne à tracer, les deux erreurs qui coûtent. Delta conservé, sans
  géométrie ni durée. Il n'y a plus de scène chiffrée dans le `lead` : elle ne subsiste qu'en S1.P2,
  où elle est ouverte par « Imaginons ».
- S2.P0 : la voie du calcul, et sa fermeture par une loi non connue « in sufficient detail to set up
  such limits ». Delta inchangé, une glose en moins.
- S3.P2 : le constat d'expérience, et l'adjectif qui porte l'argument ; la légitimité tenue d'un prix
  est maintenant prédiquée de `t = 3`.
- S5.P0 : la justification qui circule et son attribution courante, bornée aux deux pages.
- S5.P1 : pourquoi cette justification contredirait l'argument. Inchangé hors accord de genre.
- S5.P2 : les deux régimes de validité, et ce que le régime empirique fait tenir malgré l'ignorance de
  la loi. La condition de mise en défaut est retirée ; le paragraphe s'arrête sur ce que les appuis
  portent.

Aucun paragraphe consécutif ne partage son delta. Aucune section ne répète principalement une section
antérieure. Aucun contenu de `limits` n'est remonté en bloc visible.

## Ce qui n'a pas été fait

- Aucune affirmation neuve. Trois `REMOVE` partiels et quatre `NARROW` vers des formulations déjà
  présentes dans l'enregistrement ; aucun `MARK_AS_INTERPRETATION` n'a été employé pour tenir lieu
  d'appui.
- Aucun renversement : ni « t = 3 n'est pas trois sigmas », ni « la règle vaut partout », ni « rien ne
  la met en défaut » n'ont été écrits.
- Aucun `SUP-...` invoqué, aucun artefact de fact-check retouché.
- Les 65 claims soutenus ne sont pas retouchés sur le fond. Deux reflows de pronom et un mot de
  liaison ont été nécessaires là où la clause supprimée était dans la même phrase : C061 « il » devient
  « elle », C062 « Il y contredirait » devient « Elle y contredirait », et le « ce qui donnerait un
  taux de fausses alertes acceptable » de C059 devient « taux qui passerait pour acceptable » pour ne
  pas répéter « fausses alarmes » à quatre mots d'intervalle. Substance identique dans les trois cas.

## Réserve

Le concept n'est pas vidé : ce qui fait la carte est l'arbitrage de coût et la base empirique, et les
deux tiennent entièrement sur les appuis (la phrase de la balance, la loi non connue, « the basis for
such limits must be, in the last analysis, empirical », l'inégalité qui borne sans choisir, `t = 3`
valeur économique acceptable). Ce n'est donc pas un `BLOCKED_SOURCE`. Ce qui est perdu est la
traduction du `t` en unité de dispersion, c'est-à-dire le mot du titre, et cette perte est tracée dans
`limits`. Le lecteur apprend sur quoi repose le choix ; il n'apprend pas en quelle unité il se compte.

Toute modification du texte invalide le SHA : l'orchestrateur reprend à `PREPARE`. Aucune
auto-validation n'est prononcée, ni `ACCEPT`, ni `FACTCHECK_PASS`.
