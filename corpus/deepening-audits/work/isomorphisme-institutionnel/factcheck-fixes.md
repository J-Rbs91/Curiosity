# Correction factuelle : isomorphisme-institutionnel

Mode : FACTCHECK_FIX (premier tour sur les deux autorisés)
Gate d'entrée : `factcheck-gate.json`, verdict `FACTCHECK_FAIL`, 78 claims, 72 SUPPORTED,
6 en échec (C002 UNSUPPORTED ; C003, C004, C027, C049, C051 TOO_STRONG).
Aucune erreur structurelle au gate.

SHA de la version contrôlée : `b7ebf838…`
SHA après correction : `3cb1d065b264d7b279ce6c93ef1dc83938b606bd5f882118fd84d54f1384831b`
La version fact-checkée est donc invalidée : il faut recommencer à `PREPARE`.

## Ce que j'ai lu

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`
- `corpus/deepenings/isomorphisme-institutionnel.json`
- `corpus/validated/isomorphisme-institutionnel.json`
- le répertoire `corpus/evidence/isomorphisme-institutionnel/` listé par moi-même :
  `evidence.primary-reading.json`, `evidence.reception.json` (`scouting.json` écarté)
- `factcheck-gate.json`, `verification.json`, `claim-map.json`, `factcheck-pack.json`
  (résolution des supports cités par le verifier), `audit.md`

Aucune recherche extérieure. Aucun support ajouté, aucun identifiant `SUP-...` fabriqué.
Les 72 claims SUPPORTED n'ont pas été touchés : les quatre paragraphes modifiés sont
`lead[0]`, `sections[1].paragraphs[0]`, `sections[3].paragraphs[0]`,
`sections[3].paragraphs[1]`, et dans chacun je n'ai réécrit que l'empan du claim fautif.

## C002 — UNSUPPORTED (lead[0], « Mêmes services qualité… intitulés de poste »)

Le dossier ne porte nulle part de « services qualité », de « certifications » ni
d'« intitulés de poste » ; le texte les donnait pourtant comme observés. Conformément à la
consigne, je n'ai pas atténué un exemple non couvert : je l'ai remplacé par des exemples que
le dossier porte réellement.

`evidence.primary-reading.json`, `$.evidence.mechanism[8]` (SUP-b51f6e4eea07691b), registre (a)
du mécanisme coercitif, énumère : normes antipollution, comptabilité et embauche de comptables
pour satisfaire au droit fiscal, chargés de l'égalité professionnelle « to fend off allegations
of discrimination », programmes scolaires conformes aux standards de l'État.

Avant :
« Mêmes services qualité, mêmes certifications, mêmes intitulés de poste, mêmes rapports annuels
au format quasi identique. »

Après :
« Mêmes comptables recrutés pour satisfaire au droit fiscal, mêmes postes créés pour parer les
accusations de discrimination, mêmes normes antipollution à respecter. »

J'ai délibérément puisé dans le registre (a) et non dans le registre (b) du même support
(cycle budgétaire, exercices comptables, rapports annuels, obligations de reporting), qui sert
déjà C028 en `sections[1]`. Les deux passages restent ainsi documentés par la même preuve sans
que le lecteur lise deux fois la même énumération.

## C003 — TOO_STRONG (lead[0], « au format quasi identique »)

SUP-b51f6e4eea07691b établit que l'environnement juridique et gestionnaire commun impose des
rapports annuels, jamais une similitude de leur format. La proposition entière disparaît dans
la réécriture ci-dessus : correction par retrait, pas par atténuation, puisqu'il n'existe
aucune version affaiblie de « format quasi identique » qui reste informative.

## C004 — TOO_STRONG (lead[0], le mobile prêté aux institutions)

La citation résolue (SUP-6aa956ab45fc7633 et son original SUP-d971a1a6d8629ad8) porte sur des
acteurs qui cherchent à changer leur organisation : « rational actors make their organizations
increasingly similar as they try to change them ». « Qui voulaient devenir plus elles-mêmes »
prêtait un mobile de singularisation, que la note 5 p. 149 (SUP-38aa11ac413b2225) exclut
justement du domaine de la théorie : elle porte sur le menu des options, pas sur les motifs.

Avant : « Des institutions qui voulaient devenir plus elles-mêmes finissent par devenir plus
semblables aux autres. »
Après : « Ceux qui cherchaient à changer leur organisation la rendent plus semblable aux
autres. »

Le paradoxe reste le même, l'agent redevient celui du texte source, et le mobile disparaît.
La formule reste assez différente de la traduction citée en `sections[0].paragraphs[1]` pour
ne pas la doubler.

## C027 — TOO_STRONG (sections[1], « le plus visible »)

SUP-50e0b1091ab542b2 énumère les trois mécanismes et leurs antécédents sans les hiérarchiser
par visibilité. La hiérarchie « du plus au moins visible » n'existe qu'à l'intérieur du
mécanisme coercitif, dans SUP-b51f6e4eea07691b, et elle ne se transpose pas aux trois.

Avant : « Le premier mécanisme est le plus visible. »
Après : « Le premier mécanisme est celui de la dépendance. »

« Premier » reste soutenu par l'énumération de SUP-50e0b1091ab542b2 (« 1) coercive
isomorphism ») ; « dépendance » par la définition de SUP-b51f6e4eea07691b (pressions exercées
par les organisations « upon which they are dependent »). Le classement de visibilité, lui,
n'est pas remplacé par un autre classement.

## C049 — TOO_STRONG (sections[3], quantificateur supprimé)

SUP-ec9601a910d6f305 porte : « Many professional career tracks are so closely guarded, both at
the entry level and throughout the career progression, that individuals who make it to the top
are virtually indistinguishable » (p. 152-153). Le texte avait supprimé « many » et généralisé
à « les carrières », tout en maintenant l'attribution aux auteurs.

Après : « Beaucoup de carrières professionnelles sont si étroitement gardées, écrivent les
auteurs, à l'entrée comme tout au long de la progression, que ceux qui parviennent au sommet
sont pratiquement indiscernables les uns des autres. »

« Beaucoup de » rétablit le quantificateur ; « à l'entrée comme tout au long de la
progression » rend « both at the entry level and throughout the career progression », que le
support porte et que le texte avait laissé tomber. L'attribution aux auteurs devient exacte
parce que l'énoncé qu'elle couvre l'est. Ce passage n'est pas entre guillemets : il ne relève
pas du contrôle de citation de `npm run corpus:deepen`.

## C051 — TOO_STRONG (sections[3], modal passé à l'indicatif)

SUP-8693f495273535e3 et SUP-175fe447fd4610e2 portent un modal : « socialization could
reinforce, not erode, differences among organizations » (p. 153). Le texte était passé de la
possibilité à la régularité.

Avant : « la socialisation renforce les différences au lieu de les éroder : chacun prend les
habitudes de sa maison. »
Après : « la socialisation peut renforcer les différences au lieu de les éroder : chacun
prendrait alors les habitudes de sa maison. »

Le « peut » rétablit le modal. La glose qui suit passe au conditionnel pour rester sous le
régime de la possibilité ouverte par la phrase principale, au lieu d'énoncer un effet constaté.
C050 (« elle peut inverser son effet »), déjà SUPPORTED, n'a pas bougé, et C052 (« c'est
l'autre socialisation qui homogénéise »), également SUPPORTED, non plus : la seconde moitié du
support est bien assertive, c'est seulement la première qui est modale.

## Contrôles

1. Delta de chaque paragraphe touché : inchangé. `lead[0]` pose toujours l'observation puis le
   paradoxe ; `sections[1].paragraphs[0]` nomme toujours le mécanisme puis l'illustre ;
   `sections[3].paragraphs[0]` va toujours de la définition de la professionnalisation à son
   opérateur de recrutement ; `sections[3].paragraphs[1]` porte toujours la condition qui
   inverse l'effet. Aucune fusion ni suppression de paragraphe n'était requise.
2. Aucune section ne répète principalement une section précédente ; le choix du registre (a)
   plutôt que (b) pour le lead écarte le seul risque de doublon créé par la correction.
3. Le texte reste en deçà des frontières documentaires : tous les énoncés ajoutés se résolvent
   sur `evidence.primary-reading.json`, niveau d'accès inchangé.
4. `limits` n'a pas été modifié et aucun de ses contenus n'a été remonté en bloc visible.
   Les réserves du dossier (typologie analytique, note 5 sur les mobiles) restent respectées :
   la correction de C004 les sert plutôt qu'elle ne les entame.
5. Volume : 1 692 mots lecteur, `lead` à 164 mots. Inchangé par rapport à la version auditée.
6. `npm run corpus:deepen -- --check --only=isomorphisme-institutionnel` : PASS
   (« 1 approfondissement(s) contrôlé(s), 1958 mots. Rien projeté. » ; le compteur du script
   inclut `limits`, que le lecteur ne voit pas).

## Note d'environnement

Pendant la session, un commit `d425a27` « audit(corpus): point d'étape de la correction
factuelle d'isomorphisme » a capturé le fichier modifié sans que je lance de commande git
d'écriture. Le contenu du fichier de travail est bien celui décrit ci-dessus ; je le signale
parce que l'arbre n'apparaît plus comme modifié.

Aucun verdict rendu ici : ni ACCEPT, ni FACTCHECK_PASS. Le gate reste l'autorité, et il doit
être rejoué depuis `PREPARE` sur le nouveau SHA.

---

# Second tour de correction (dernier autorisé)

Mode : FACTCHECK_FIX, tour 2 sur 2.
Gate d'entrée : `factcheck-gate.json`, verdict `FACTCHECK_FAIL`, 77 claims, 75 SUPPORTED,
2 en échec (C004 et C007, tous deux TOO_STRONG). `structural_errors` vide.

SHA de la version contrôlée : `3cb1d065b264d7b279ce6c93ef1dc83938b606bd5f882118fd84d54f1384831b`
SHA après correction : `3651c8ab2d9d242ce696218c19d88417bfaf2175d6e0fe7634cd629fc9b9a26a`
La version fact-checkée est donc invalidée : il faut recommencer à `PREPARE`.

Attention à la renumérotation : les identifiants `C004` et `C007` de ce tour ne désignent pas
les claims que portaient ces mêmes identifiants au tour 1. Le mapper a redécoupé le texte
corrigé, et le nombre de claims est passé de 78 à 77.

## Ce que j'ai lu

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`
- `corpus/deepenings/isomorphisme-institutionnel.json`
- `corpus/validated/isomorphisme-institutionnel.json`
- le répertoire `corpus/evidence/isomorphisme-institutionnel/` listé par moi-même :
  `evidence.primary-reading.json`, `evidence.reception.json` (`scouting.json` écarté)
- `factcheck-gate.json`, `verification.json`, `claim-map.json`, `factcheck-pack.json`
  (résolution des supports cités par le verifier), et le présent compte rendu du tour 1

Aucune recherche extérieure. Aucun support ajouté, aucun identifiant `SUP-...` fabriqué.
Les deux corrections tiennent dans le seul paragraphe `lead[1]`, et dans chacune je n'ai
réécrit que l'empan du claim fautif.

## C004 — TOO_STRONG (`lead[1]`, « Deux sociologues américains »)

Claim : `lead[1]` 0-59, « Deux sociologues américains, Paul DiMaggio et Walter Powell ».
Supports proposés : SUP-f6921f5c48c85828 et SUP-8d55afda00c45d40 (les deux noms, registre
validé), SUP-157000375461e8c2 (note d'astérisque p. 147 : collaboration intégrale, adresse
commune School of Organization and Management, Yale University, présentation par Powell au
congrès de l'American Sociological Association, Toronto, août 1981).

Ces supports donnent des noms, une adresse institutionnelle et un lieu de présentation. Ils ne
donnent ni nationalité ni profession. Une affiliation à Yale et une parution dans l'*American
Sociological Review* sont compatibles avec les deux attributs, elles ne les établissent pas :
les supports tiendraient intégralement si l'un des deux auteurs n'était ni américain ni
sociologue. C'est exactement le défaut qui a fait tomber « sociologues » sur une autre carte
du lot.

J'ai retiré les deux attributs plutôt que de leur chercher un appui, conformément à la
consigne. Je n'ai pas non plus tenté de les remplacer par un descripteur de substitution
— « chercheurs », « universitaires », « qui signent ensemble un article de l'*American
Sociological Review* » : chacun aurait introduit dans `lead[1]` un claim neuf, absent des 75
qui passent, au dernier tour autorisé. Correction par retrait sec.

Avant : « Deux sociologues américains, Paul DiMaggio et Walter Powell, ont pris ce paradoxe au
sérieux au début des années 1980. »
Après : « Paul DiMaggio et Walter Powell ont pris ce paradoxe au sérieux au début des années
1980. »

Ce que le lecteur perd est faible et rattrapé plus bas sans claim supplémentaire : la suite du
même paragraphe et `sections[0].paragraphs[1]` les désignent comme « les deux auteurs » et
parlent de « leur article », de sorte que leur statut d'auteurs d'un texte reste posé par des
énoncés déjà SUPPORTED.

Le retrait laisse intact, au caractère près, l'empan de C005 (« ont pris ce paradoxe au sérieux
au début des années 1980 »), qui passait.

## C007 — TOO_STRONG (`lead[1]`, « montrent que »)

Claim : `lead[1]` 308-379, « Les deux auteurs montrent que cette explication tient de moins en
moins ».
Supports proposés : SUP-50c860462e2289a5 (partage entre les deux isomorphismes, p. 149-150 :
l'isomorphisme compétitif « does not present a fully adequate picture of the modern world of
organizations ») et SUP-092bf8f34085aed8 (note validée citant p. 147 : « structural change in
organizations seems less and less driven by competition »).

Les deux supports portent une thèse énoncée, et une thèse prudente : le verbe du texte source
est « seems », et le jugement sur l'isomorphisme compétitif est celui d'une image « pas
pleinement adéquate », pas d'une hypothèse réfutée. « Montrent que » convertissait cela en
résultat démontré. Aucun support du dossier n'établit de démonstration — et les `limits`
l'indiquaient déjà par un autre chemin, en notant que l'article propose son explication sans la
mettre à l'épreuve et renvoie à d'autres l'examen empirique de ses douze hypothèses. Le verdict
du verifier et la frontière documentaire interne disent ici la même chose.

Avant : « Les deux auteurs montrent que cette explication tient de moins en moins, et qu'une
autre logique, plus discrète, produit l'essentiel de cette convergence. »
Après : « Les deux auteurs avancent que cette explication tient de moins en moins, et qu'une
autre logique, plus discrète, produit l'essentiel de cette convergence. »

« Avancent » rend le geste que les supports portent : une thèse mise en avant, sans preuve
annoncée. « De moins en moins » reste le décalque de « less and less » et n'est pas touché.

Le verbe changé est le seul mot de l'empan modifié. La coordination « et qu'une autre logique…
» qui suit dépend syntaxiquement de ce verbe : elle reste grammaticale sous « avancent que »,
et l'empan de C008, qui passait, est conservé au caractère près.

## Contrôles

1. Delta des paragraphes touchés : inchangé. `lead[1]` présente toujours les auteurs, expose
   l'explication concurrente, puis annonce qu'une autre logique la supplante. Les deux
   corrections portent sur un syntagme d'attribution et sur un verbe, pas sur l'architecture
   du paragraphe. Aucune fusion ni suppression de paragraphe n'était requise ni permise.
2. Aucune section ne répète principalement une section précédente : la structure est celle,
   déjà auditée, de la version 3cb1d065.
3. Le texte reste en deçà des frontières documentaires. Les deux corrections l'y ramènent :
   elles retirent des énoncés qui dépassaient le dossier, elles n'en ajoutent aucun.
4. `limits` n'a pas été modifié et aucun de ses contenus n'a été remonté en bloc visible. La
   correction de C007 rend le texte public cohérent avec la réserve interne sur l'absence de
   mise à l'épreuve, sans l'exposer au lecteur.
5. Minimalité vérifiée mécaniquement, et pas seulement par relecture : j'ai repris les 77
   `claim_text` de `claim-map.json` et cherché chacun comme sous-chaîne exacte dans le
   paragraphe correspondant du fichier corrigé. Deux seulement ont disparu, C004 et C007,
   c'est-à-dire exactement les deux claims en échec. Les 75 SUPPORTED subsistent au caractère
   près, à leur emplacement d'origine. Seuls leurs offsets bougent, et le mapper les
   recalculera à `PREPARE`.
6. Volume : 1 955 mots au compteur du script, contre 1 958 avant correction — trois mots de
   moins, cohérents avec le retrait de « Deux sociologues américains ». Le compteur inclut
   `limits`, que le lecteur ne voit pas.
7. `npm run corpus:deepen -- --check --only=isomorphisme-institutionnel` : PASS
   (« 1 approfondissement(s) contrôlé(s), 1955 mots. Rien projeté. »).

Aucun verdict rendu ici : ni ACCEPT, ni FACTCHECK_PASS. Le gate reste l'autorité, et il doit
être rejoué depuis `PREPARE` sur le SHA `3651c8ab…`.
