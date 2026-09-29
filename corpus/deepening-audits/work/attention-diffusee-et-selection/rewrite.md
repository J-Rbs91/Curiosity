concept : attention-diffusee-et-selection
mode    : REVISE
contrôle mécanique : PASS (`npm run corpus:deepen -- --check --only=attention-diffusee-et-selection`,
1 approfondissement contrôlé, 1793 mots, aucune citation signalée)

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md` ;
- `corpus/deepening-audits/work/attention-diffusee-et-selection/audit.md` (verdict REVISE) ;
- `corpus/deepenings/attention-diffusee-et-selection.json` (version auditée) ;
- `corpus/validated/attention-diffusee-et-selection.json` : champ `dossier` absent, donc le
  répertoire conventionnel est le seul dossier ;
- répertoire listé moi-même : `corpus/evidence/attention-diffusee-et-selection/` contient
  `lecture.json` et `reception.json`, tous deux lus en entier, y compris leurs blocs `reserves`.
  Pas de `scouting.json`.

Aucune recherche web, aucun fait ajouté de mémoire, aucun support inventé. Les trois sources
secondaires de l’enregistrement sont `full-text` et le dossier les déclare `full-text` aussi ; la
quatrième (nécrologie de 1940) n’est présente que dans le dossier, `full-text` également. Aucune
source `metadata-only` (les deux notices Crossref et OAI) n’est utilisée pour un contenu.

## Ce que l’architecture devient

Inchangée, comme le demandait la trajectoire cible : six sections, mêmes rôles, même ordre (le nom,
l’instrument, l’échelle, la preuve, la contre-épreuve, l’institution). Le travail a porté sur le
remplissage.

Volume : 1 793 mots comptés par le script, dont 1 583 de texte lecteur et 210 de `limits`. L’ancienne
version faisait 1 687 mots dont 1 461 lecteur et 226 de `limits`. Le texte lecteur gagne donc 122 mots
et `limits` en perd 16, ce qui corrige le dépassement signalé par l’audit (fourchette 100-200) et
reste sous le plafond de 1 900 que l’audit prenait pour référence. Le compte du script inclut les
guillemets comme mots, le texte a donc en réalité une vingtaine de mots de moins que le chiffre
affiché.

## Les cinq défauts majeurs de l’audit, et ce qu’ils sont devenus

1. **S6.P2, attribution indue de la mise en garde à la réception syndicale.** Corrigé, et c’était le
   seul point de fidélité vraiment fautif. Le paragraphe sépare désormais trois choses que
   l’ancienne rédaction amalgamait : ce que les syndicats reprochent, dans leurs termes rapportés
   (« de produire un discours normatif », « un outil instrumentalisé par la direction pour produire
   des licenciements de masse », Passalacqua p. 105) ; le chiffre et sa date (1926, accidents
   inférieurs de 16,5 % chez les machinistes sélectionnés, p. 100) ; et la réserve, rendue à
   l’historien qui rapporte le chiffre (la crise des années 1930 a fait baisser la circulation, donc
   les accidents, p. 101). Le paragraphe passe ainsi de trois informations vidées de contenu à trois
   informations qui disent chacune ce qu’elles affirment.
2. **S1.P3, delta quasi nul.** Fusionné dans S1.P1 : il ne reste du « nous » et des titres imprimés
   que la seule chose qui était neuve, le fait que le baptême a lieu dans une section de mesure. La
   phrase de Lahy qui suit immédiatement le baptême le dit mieux que les titres : « Il importe de la
   mesurer chez les candidats. » (p. 117, verbatim du dossier). S1 passe de trois paragraphes à deux,
   et le second gagne un delta de distinction que l’auteur fournit lui-même : « a beaucoup de
   similitude avec l’épreuve des temps de réaction de choix » (p. 111), qui range l’aptitude du côté
   du choix rapide plutôt que d’une vigilance vague.
3. **Première moitié de S2.P3, plan des sous-sections.** Supprimée. Le plan d’outilleur (technique et
   outillage, organisation, apprentissage, calcul, constance) n’enseignait rien que les deux
   paragraphes précédents n’avaient déjà montré. Ce qui subsistait de fait, « on n’est pas noté au
   premier contact », est passé dans la phrase qui porte la substitution, à sa place logique.
4. **lead[0], scène reconstruite sans marque d’hypothèse.** Le paragraphe s’ouvre désormais sur
   « Imaginons le siège d’un autobus parisien… », et les détails qui pouvaient se lire comme un cas
   rapporté (l’enfant, le cycliste, la sonnerie) ont été remplacés par ce que le texte porte
   réellement : des sollicitations qui arrivent sans ordre, « tantôt coup sur coup, tantôt une seule
   pendant une longue période calme » (rendu des « séries irrégulières » de la p. 117) et une rue qui
   ne cesse pas de bouger (« la rue, avec ses spectacles mobiles »). La force d’entrée est conservée,
   l’ambiguïté de statut a disparu.
5. **S5.P3, la prudence de l’auteur cohabitant avec une curiosité typographique.** La singularité du
   + 0,55 est sortie du texte lecteur : elle apprenait au lecteur qu’un chiffre imprimé est
   incohérent, sans rien changer à sa compréhension de l’attention diffusée. La prudence, elle, est
   maintenue et resserrée dans S5.P2, où elle sert enfin à quelque chose, adossée à l’aveu de la
   p. 168.

Deux évaluations sans appui ont également disparu : « l’épreuve la plus emblématique du laboratoire »
(S3.P3) et la généralité finale sur « la question que les syndicats ont posée », qui prêtait aux
syndicats une question un peu différente de celle que le dossier leur attribue.

## Matière sourcée entrée dans le texte

Toutes ces matières ont été revérifiées dans `lecture.json` ou `reception.json` avant emploi, la
trajectoire cible n’étant pas une autorité documentaire.

- **Le film validé par une baisse de rendement** (p. 118-119) : « la valeur du rendement de divers
  sujets s’est trouvée diminuée lorsque le film a été introduit dans la technique », et il ne compte
  pour rien dans la note. C’est le fait le plus pédagogique du dossier sur l’instrument, S2.P2 est
  désormais construit sur lui.
- **La raison du classement en rangs** (p. 158) : le rendement brut « prend une signification
  différente selon les tests considérés » contre « la place qu’occupe le sujet parmi ceux à qui on
  veut le comparer est une expression commune à tous les tests ». S3.P1 affirmait la relativité, il
  la fonde.
- **Le décile retraduit en mots** (p. 162-163) : « très bien, bien, passable, mal ou très mal », des
  termes « habituellement employés pour des appréciations subjectives » mais « déterminés par le
  décile dans lequel se place chaque sujet dans chaque test ». Nouveau paragraphe S3.P2, dont le
  delta est un mécanisme et non un fait : le vocabulaire de l’appréciation ne change pas, sa
  provenance change. C’est aussi ce qui donne à la clôture de S6.P3 un appui dans le texte même, là
  où elle reposait sur une formule du rédacteur.
- **La borne de la compensation** (p. 157) : « au delà d’une certaine valeur, l’infériorité dans un
  test ne peut pas être compensée par une supériorité dans un autre », qui manquait à S3.P3 et qui
  empêche de lire « elle ne décide pas seule » comme « elle se rachète toujours ».
- **La défense de Lahy sur ses coefficients** (p. 169) : « elles sont toutes positives, ce qui prouve
  que nos tests mettent bien en œuvre des fonctions psycho-motrices nécessaires à l’exercice de la
  profession de machiniste ». S5.P1 portait un raisonnement du rédacteur là où l’argument de l’auteur
  existe.
- **L’aveu sur l’étalon** (p. 168) : le classement professionnel est « à quelque degré subjectif ».
  C’était exactement le point de S5.P2, qui l’affirmait de son propre chef ; il est maintenant
  autorisé par l’auteur.
- **Le mobile de l’employeur** (Passalacqua p. 98) : déceler « avec une certitude à peu près absolue,
  les candidats auxquels il serait dangereux de confier une voiture », le chiffre d’accidents d’où
  naît la commande (18 000, Turbiaux p. 974) et le second mobile, abaisser la consommation
  d’électricité du réseau de tramways, qui empêche de croire que la sécurité était seule en jeu.
- **Le contenu de la critique syndicale** (Passalacqua p. 105), au lieu de « fut critique ».
- **La série de laboratoires** (Piéron p. 664) : chemins de fer du Nord, tramways de Marseille, pour
  que la clôture laisse un changement d’échelle plutôt qu’une généralité.
- **Le cas B. resserré sur ce qu’il démontre** : la faute y est un resserrement sur un seul objet, ce
  qui referme le texte sur la première intuition du lead sans la répéter.

## Matière disponible laissée dehors, et pourquoi

Le plafond de volume ne permettait pas tout, et le choix s’est fait sur le delta, non sur l’intérêt
documentaire. Sont restées hors du texte, et restent disponibles pour un tour ultérieur :

- **le bruit conservé exprès** (p. 118) : son delta est le même que celui du film, la difficulté est
  fabriquée pour ressembler au métier ; deux illustrations d’un même palier auraient été une
  redondance au sens de `AUDIT_PROTOCOL.md` §1 ;
- **l’apprentissage réglé et chiffré** (p. 125-126, huit épreuves, neuf essais, « Nous n’éliminons
  donc pas a priori les candidats dont l’apprentissage est trop long ») : le fait est maintenu sous
  sa forme utile au lecteur, « nul n’est noté au premier contact », sans son chiffrage, qui informe
  sur la procédure et non sur le concept ;
- **les pourcentages d’accord** (p. 168 : 10,81 % d’écart sur 37 machinistes ; p. 171 : 73,7 %, 88 %,
  77 %, et 80 % sur 136 sujets) : c’est un delta réel, le verdict change selon la statistique choisie,
  mais il double S5.P2 dont la thèse est déjà que la référence décide ;
- **la discordance du titre de section de la p. 169** (« classement professionnel » contre
  « classement psychotechnique ») : curiosité d’imprimé, même statut que le + 0,55.

## La contradiction entre couches, portée et non tranchée

L’audit signale un point qu’il refuse explicitement de trancher, et je ne le tranche pas non plus.

- `reception.json`, notice Passalacqua : « Le prénom donné à l’ingénieur de la STCRP, “Raymond
  Guyot” (p. 99), contredit celui que donne deux fois Marcel Turbiaux, “Gaston Guyot” (1983, p. 975 ;
  2004, p. 213) ; je n’ai pas tranché et je ne fais donc reposer aucune affirmation sur ce prénom. »
- Le bloc `review` de l’enregistrement validé retient « Gaston Guyot » d’après Turbiaux p. 975, et
  conclut que « la mention “l’ingénieur Guyot” est exacte ». `attribution_note` n’écrit que
  « l’ingénieur Guyot », sans prénom.

**Ce que j’en ai fait.** Le texte lecteur ne porte plus aucun prénom ni aucun titre : S6.P1 écrit
« un ingénieur de la compagnie » et rien de plus. Et `limits[3]` consigne les deux couches, la
divergence et son interdit.

**Pourquoi.** Trois raisons, dans cet ordre.

1. La réserve du dossier lie comme `limits` (`PROTOCOLE.md` §3), et elle est formulée comme un
   interdit d’appui, non comme une hésitation : « je ne fais donc reposer aucune affirmation sur ce
   prénom ». La revue de l’enregistrement ne la lève pas, parce qu’elle ne la connaît pas : elle
   valide une autre proposition, que « l’ingénieur Guyot » est exact, ce qui est vrai des trois
   sources, le patronyme n’étant contesté par aucune.
2. Les deux couches sont donc compatibles sur ce qui compte et divergent sur ce qui ne compte pas. Le
   geste qui les respecte toutes deux sans rien perdre est celui que l’enregistrement emploie
   lui-même, un ingénieur nommé par sa fonction. Le prénom n’apporte aucun delta au lecteur : le fait
   qui porte le paragraphe est que les appareils ont été construits par un homme de l’entreprise qui
   recrute, et ce fait est établi par les trois sources indépendamment de son état civil.
3. Ce choix n’est pas une conclusion sur l’identité de l’ingénieur, et ne doit pas se lire comme
   telle. Aucune source n’a été inventée ni sollicitée pour résoudre la divergence, et rien du texte
   ne donne implicitement raison à l’une des deux graphies. Si un tour ultérieur ouvre les archives
   ou Turbiaux 2006, la question se rouvre intacte.

Le titre de l’ingénieur est traité de la même façon, et pour la même raison : « ingénieur en chef »
(Turbiaux 1983 p. 975), « Ingénieur à l’exploitation commerciale » (Turbiaux 2004 p. 213) et
« ingénieur de la STCRP mis à sa disposition » (Passalacqua p. 99) ne se réduisent pas l’un à
l’autre. L’ancienne version écrivait « un ingénieur en chef, Gaston Guyot » : elle choisissait deux
fois, sans le dire.

## Les autres frontières documentaires, et leur tenue dans le texte

- **Aucun tiers ne commente l’article de 1924.** Le texte ne fait nulle part dire à Turbiaux,
  Passalacqua ou Piéron quelque chose sur le contenu de l’article, ni sur le cas B. S6 les emploie
  pour ce que leur corps établit, la commande industrielle, la durée du dispositif, la réception
  syndicale, le chiffre de 1926 et la série de laboratoires. `limits[1]` le redit.
- **Aucune date de naissance de l’épreuve ni d’ouverture du laboratoire.** Le texte lecteur n’en
  porte aucune ; les seules dates écrites sont 1924 pour l’article, 1926 pour la comparaison
  d’accidents et les années 1930 pour la crise, toutes trois directement sourcées. La date
  d’autorisation de 1923 a été délibérément écartée, le dossier signalant que la même étude porte
  deux dates différentes (corps et note).
- **L’ouvrage Dunod de 1927 n’est décrit nulle part.** `limits[0]` nomme la source, son état d’accès
  et l’interdit, et dit du côté du lecteur ce qui reste à faire.
- **La population de rangement n’est pas réconciliée.** Le texte juxtapose 1.000 candidats (titre du
  Tableau II) et « se classe parmi les derniers sur 2.000 sujets » (p. 170) sans les expliquer l’un
  par l’autre, comme le dossier l’exige.
- **Rien sur un emploi de « attention diffusée » antérieur à Lahy**, ni dans un sens ni dans l’autre :
  Gallica et Turbiaux 2006 n’ont pas été atteints par le dossier, et le texte ne dit ni qu’il en
  existe un, ni qu’il n’en existe pas.

## Contrôles obligatoires

**1. Delta de chaque paragraphe.**

- lead[0] : le lecteur comprend que ce métier demande l’inverse de ce qu’on appelle d’ordinaire
  l’attention, et que s’absorber y serait une faute. Scène explicitement imaginée.
- lead[1] : il comprend le problème pratique qui force à nommer l’aptitude, la chercher chez un
  candidat qu’on ne verra pas conduire, et il apprend qui la nomme, quand, dans quel cadre.
- S1.P1 : il lit la phrase de baptême et découvre qu’elle décrit une tâche avant de nommer une
  faculté, et que le mot naît dans des pages qui vont le mesurer.
- S1.P2 : il peut distinguer diffusée de distraite, et situer l’aptitude du côté du choix rapide
  entre des réponses, d’après le rapprochement que l’auteur fait lui-même.
- S2.P1 : il voit la machine, donc ce à quoi une aptitude a été réduite matériellement.
- S2.P2 : il apprend que le film ne compte pas dans la note et qu’il est pourtant justifié par une
  baisse de rendement mesurée : la difficulté est fabriquée, et l’instrument s’en porte garant.
- S2.P3 : il comprend la substitution décisive, un comptage de réponses justes à la place d’une
  aptitude, et que l’épreuve existe en deux conditions.
- S3.P1 : il apprend pourquoi le brut ne sert pas, dans les termes de l’auteur, et que la note est un
  rang dans une population nommée.
- S3.P2 : il découvre que le rang se retraduit en mots d’appréciation, et donc que le vocabulaire du
  jugement change de provenance sans changer de forme.
- S3.P3 : il tire deux conséquences neuves, le seuil relève du marché du travail, et la compensation
  entre épreuves a une borne.
- S4.P1 : il change de terrain, des candidats aux trois cents machinistes examinés après accident, et
  lit la conclusion.
- S4.P2 : il peut distinguer deux questions qui se ressemblent, et comprend ce qu’un dispositif
  rétrospectif sans groupe de comparaison ne peut pas établir.
- S4.P3 : il voit le cas, comprend que la faute est un resserrement, et lit la thèse la plus lourde de
  l’article, une infériorité réelle invisible à ceux qui voient l’homme travailler.
- S5.P1 : il apprend que l’épreuve tenue pour centrale est celle qui s’accorde le moins avec le
  jugement des chefs, et comment l’auteur retourne l’objection.
- S5.P2 : il comprend que le même coefficient sert deux thèses selon la mesure prise pour référence,
  et que l’auteur lui-même accorde à son étalon d’être subjectif.
- S6.P1 : il apprend d’où vient la commande, ce qu’elle demandait et qu’elle avait un second mobile,
  et que les instruments sortent de chez l’employeur.
- S6.P2 : il apprend ce que l’examen est devenu après l’embauche, ce que les syndicats lui
  reprochent, et ce que vaut le chiffre qu’on cite en sa faveur.
- S6.P3 : il distingue mesurer une capacité de décider qui conduit, voit que le second acte a changé
  de forme, et apprend que l’affaire ne s’est pas arrêtée là.

**2. Paragraphes sans delta.** Aucun ne subsiste : les trois creux signalés ont été fusionnés,
supprimés ou refaits. Le texte compte dix-huit paragraphes lecteur, tous porteurs d’un delta
distinct.

**3. Sections redondantes.** Aucune section ne répète principalement une autre. Les deux endroits qui
parlent du même objet le font pour des raisons différentes : S3.P2 établit la retraduction du décile
en mots, S6.P3 s’en sert pour séparer deux actes ; S4.P2 limite ce que la preuve établit, S5 examine
la contre-épreuve chiffrée.

**4. Frontières documentaires.** Tenues, voir ci-dessus.

**5. Contenu de `limits` remonté en bloc visible.** Non : `limits` est resté interne, aucun de ses
quatre paragraphes n’a d’écho sous forme de section ou de titre, et aucune formule du type « ce que
les sources ne permettent pas d’établir » n’apparaît dans le texte lecteur. Les limites que le lecteur
voit sont conceptuelles et placées où elles empêchent un contresens (S4.P2, S3.P3, S5.P2).

**6. Contrôle mécanique.**

```
npm run corpus:deepen -- --check --only=attention-diffusee-et-selection
1 approfondissement(s) contrôlé(s), 1793 mots. Rien projeté.
```

Aucune erreur, et surtout aucun avertissement « Citations absentes de la fiche » : les seize passages
cités de cinq mots ou plus se retrouvent tous verbatim dans l’enregistrement ou dans le répertoire de
preuve, ponctuation comprise, le contrôle passant par le même résolveur que le pack de fact-check.

## Suite

Le fichier a changé, donc le SHA a changé : tout fact-check antérieur est invalidé et l’orchestrateur
doit reprendre à `PREPARE`. Aucune auto-validation, aucun `ACCEPT`, aucun `FACTCHECK_PASS` n’est
déclaré ici.
