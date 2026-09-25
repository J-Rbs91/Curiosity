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
