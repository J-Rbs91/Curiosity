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
