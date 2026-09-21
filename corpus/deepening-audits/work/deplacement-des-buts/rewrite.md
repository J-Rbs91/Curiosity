concept : deplacement-des-buts
mode    : REVISE, puis FACTCHECK_FIX (boucles 1 et 2 sur 2 — dernière boucle autorisée)
contrôle mécanique : `npm run corpus:deepen -- --check --only=deplacement-des-buts` → PASS,
1 717 mots au total (1 496 mots de texte lecteur, 221 mots de `limits`, qui ne s'affichent pas),
aucun avertissement de citation.

La première partie de ce compte rendu décrit la révision auditée. « BOUCLE DE CORRECTION 1
(FACTCHECK_FIX) » décrit les quatre corrections appliquées après le premier `FACTCHECK_FAIL`
déterministe. La dernière section, « BOUCLE DE CORRECTION 2 (FACTCHECK_FIX) », décrit la
correction unique appliquée après le second, et c'est elle qui décrit l'état actuel du fichier.

SOURCES RELUES

`corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`,
`corpus/deepenings/deplacement-des-buts.json` (version auditée),
`corpus/validated/deplacement-des-buts.json`, et le répertoire `corpus/evidence/deplacement-des-buts/`
listé puis lu en entier : `evidence.primary-reading.json` et `evidence.reception.json`
(pas de `scouting.json` dans ce dossier). Aucune recherche web, aucun fait ajouté de mémoire.

CE QUI A ÉTÉ CONSERVÉ

La colonne vertébrale, que l'audit demandait de garder : scène concrète → fonction légitime de
la règle → mécanisme → cas atypique → conséquence structurelle → point de vue de l'usager.
Conservés quasiment tels quels : lead[0] (scène du guichet), S1.P1 (l'arbitraire que la règle
écrite supprime), le noyau de S3.P1 (la condition d'apparition : le cas non anticipé), le noyau
de l'ancien S4.P2 (remplacer les personnes ne change rien), la citation de Merton et sa place
dans le texte, le titre « Ce que les règles sont censées garantir » et le titre « Quand la règle
ne correspond plus à la situation ».

CE QUI A ÉTÉ SUPPRIMÉ

1. La seconde scène du lead (l'enseignant) : elle illustrait une deuxième fois sans distinguer.
   La généralité qu'elle portait implicitement est désormais affirmée, et sourcée, en S1.P2
   (discipline aussi développée dans une bureaucratie religieuse ou économique que dans l'armée,
   p. 562).
2. L'affirmation de fréquence de lead[1] (« l'un des comportements les plus réguliers des
   administrations »). L'article ne fournit aucune donnée (`limitations[1]`). Remplacée par ce
   que le texte autorise : Merton décrit un processus déjà observé avant lui et sous d'autres
   noms, et ce qu'il revendique est l'ancrage structurel (note 11, p. 563).
3. L'ancien S1.P2 en tant que redite de lead[1]. Sa demi-phrase utile (la fiabilité exige un
   attachement indépendant du résultat obtenu dans le cas particulier) est devenue la première
   prémisse, développée en S1.P2 nouveau.
4. L'ancien S4.P1 en entier : l'argument tiré du titre de l'article et l'universelle « chez toute
   personne qui y passe assez de temps ». Le dossier donne « bureaucratic personality » pour
   absent de l'article (0 occurrence) et la question personnalité/structure pour ouverte
   (p. 568). Cette question ouverte est désormais utilisée pour ce qu'elle est, en clôture.
5. La section « Une question de degré, pas de nature » en entier. Son P1 répétait S1 et S3 ; sa
   seule idée non redondante (la tension est constitutive, pas un défaut retirable) tient en une
   phrase, placée en fin de S4. Son P2 disparaît avec elle : il faisait parler Warner & Havens,
   que le dossier déclare `CONSULTÉ EN MÉTADONNÉES SEULEMENT`, et contenait la phrase écrite du
   côté du rédacteur (« demanderait à rouvrir ces textes pour être vérifié au cas par cas »),
   forme fautive du §0 de PROTOCOLE.md.
6. L'exemple inventé du remboursement en S3.P2, qui rejouait la scène du lead.
7. La seconde moitié de l'ancien S6.P2, qui refermait sur S4.P2.

CE QUI A ÉTÉ AJOUTÉ, ET SUR QUOI

- La chaîne causale, qui était promise et jamais démontée. S2 la porte maintenant maillon par
  maillon : la discipline ne tient que par des dispositions inculquées et entretenues (p. 562) →
  ces dispositions sont délibérément plus intenses que techniquement nécessaire, marge de
  sécurité que Merton compare aux surdimensionnements de l'ingénieur calculant les appuis d'un
  pont (p. 563) → c'est cette insistance même qui transfère l'attachement des buts vers le détail
  des comportements prescrits (p. 563) → le moyen devient fin (citation, p. 563) → la discipline
  vaut par elle-même et organise la vie entière de l'intéressé (p. 563).
- La nuance qui empêche le contresens le plus répandu (S2.P3) : transfert et non perte ; le but
  n'est pas oublié, c'est l'attachement qui a changé d'objet, d'où un excès de zèle et non une
  négligence (`common_misinterpretations`, p. 563-564).
- La récapitulation de Merton en S3.P1, réduite à son point 4 : une seule cause pour l'efficacité
  générale et l'inefficacité locale (p. 564).
- Le cas Bernt Balchen (S3.P2), réel, daté, attribué, lu en plein texte (p. 563-564 ; fait divers
  de presse de 1931), et la figure du « virtuose bureaucratique » avec sa glose exacte.
- Le seuil (S3.P3) : le virtuose est un produit extrême et non le cas ordinaire ; le déplacement
  peut être poussé jusqu'au point où la conformité contrarie les buts, et c'est alors seulement
  qu'apparaissent paperasserie et technicisme ; ce qui fait franchir ce seuil, le texte ne le dit
  pas (p. 563, `known_ambiguities[1]`). Déplacement et contre-performance cessent d'être traités
  comme une seule chose, ce que la version auditée faisait.
- La clause d'aveuglement (S3.P4), qui fonde documentairement ce que l'ancien S3.P3 affirmait
  sans appui (p. 564).
- Les sources structurelles nommées de l'attachement déplacé (S4) : carrière graduée, promotion à
  l'ancienneté, pensions, salaires à échelons (p. 564) ; esprit de corps et faible concurrence
  interne, jusqu'à la défense des positions acquises contre la clientèle et les responsables élus
  (p. 564-565) ; sanctification de normes introduites pour des raisons techniques (p. 565) ; et
  le refus explicite de Merton d'expliquer la résistance par le seul intérêt matériel (p. 565).
- La cause propre du conflit avec l'usager (S5.P1) : impersonnalité et traitement par catégories,
  particularités des cas ignorées par construction, et objection du client au nom du caractère
  spécial de son problème (p. 565-566).
- La condition de sortie (S5.P2) : concurrence contre monopole (p. 566).
- La clôture (S6), qui ouvre au lieu de refermer : l'article ne propose aucun remède et s'achève
  sur des questions offertes à des enquêtes empiriques, dont celle de la sélection ou de la
  transformation des personnalités (p. 568, `limitations[0]`) ; et le même attachement affectif
  qui déplace les buts est ce qui protège la structure de la désagrégation (p. 567-568).

DELTA DE CHAQUE PARAGRAPHE

- lead[0] : reconnaître le renversement sur une scène observable, et savoir qu'il naît de
  l'exécution correcte, pas de la négligence.
- lead[1] : le renversement a un auteur, une date, et une thèse contre-intuitive ; ce que Merton
  revendique est l'explication, pas la découverte du phénomène.
- S1.P1 : à quoi sert une règle écrite avant qu'on en voie le piège, et que Merton part du mérite
  de ce type d'organisation.
- S1.P2 : la fiabilité exige un degré inhabituel de conformité, qui ne s'obtient pas par la
  surveillance mais par des dispositions inculquées ; et le propos n'est pas réservé à
  l'administration publique.
- S2.P1 : pourquoi l'attachement est délibérément surdosé, et que ce surdosage est rationnel
  (analogie de l'ingénieur).
- S2.P2 : c'est le surdosage lui-même qui transfère l'attachement vers le détail prescrit ; le
  moyen devient fin.
- S2.P3 : ce déplacement est un transfert et non un oubli, d'où un excès de zèle.
- S3.P1 : où l'effet devient visible, et qu'efficacité générale et inefficacité locale ont une
  cause unique.
- S3.P2 : un cas réel où la règle parfaitement appliquée produit l'inverse de son objet, et le
  nom que Merton donne à la figure extrême.
- S3.P3 : déplacement n'égale pas contre-performance ; le seuil existe, et son déclencheur n'est
  pas donné par le texte.
- S3.P4 : pourquoi celui qui est le mieux placé pour voir le problème ne peut pas le voir.
- S4.P1 : quels dispositifs d'organisation fabriquent l'attachement, et que ce sont ceux qui
  fonctionnent.
- S4.P2 : deux autres sources (esprit de corps, sanctification) et le refus de l'explication par
  l'intérêt.
- S4.P3 : conséquence pratique (remplacer les personnes ne change rien) et impossibilité de
  retirer la tension.
- S5.P1 : le conflit avec l'usager a sa cause propre, et personne n'y a tort de son point de vue.
- S5.P2 : la possibilité ou non d'aller ailleurs change entièrement la situation de l'usager.
- S6.P1 : l'article ne donne aucun remède et laisse la question de la personnalité ouverte.
- S6.P2 : le même attachement qui déplace les buts est ce qui tient la structure.

Aucune séquence de deux paragraphes consécutifs ne partage un delta. La thèse « c'est la
structure, pas les personnes » n'est plus énoncée qu'une fois comme thèse (lead[1]), puis
démontée (S2), instanciée (S3), instrumentée (S4) et retournée (S6.P2).

`limits` RÉÉCRIT

- Ancien `limits[1]` supprimé : il affirmait que Merton « retravaille » et « nuance » son propos
  dans Social Theory and Social Structure, ouvrage dont le dossier écrit « AUCUN CONTENU ÉTABLI
  PAR CETTE SOURCE ». Le nouveau `limits[0]` réunit cet ouvrage et la traduction Mendras, nomme
  leur état d'accès (notice seule) et l'interdiction qui en découle : rien sur une révision, rien
  sur une pagination de chapitre, rien sur le terme français du traducteur.
- Ancien `limits[2]` (« les travaux plus tardifs ») remplacé par un `limits[1]` qui nomme Warner
  & Havens 1968, Selznick 1943 et Cohen 1970, leur état d'accès, et le seul fait établi (le terme
  au titre d'un article d'ASQ en 1968). Aucune phrase sur leur contenu, ni dans le texte lecteur,
  qui n'en parle plus du tout.
- Ancien `limits[3]` corrigé : il disait l'inverse du dossier. La réserve exacte est désormais
  écrite (portée affirmée générale p. 562, illustrations toutes publiques p. 566), assortie de
  l'absence de données de l'article, qui interdit toute affirmation de fréquence.

POINT À TRANSMETTRE À LA CHAÎNE DE FACT-CHECK

La divergence de niveau d'accès relevée par l'audit subsiste et n'est pas réparable ici : pour
Warner & Havens 1968 et Selznick 1943, l'enregistrement de la carte porte `full-text` tandis que
le dossier de preuve écrit « CONSULTÉ EN MÉTADONNÉES SEULEMENT ». Le pack ramasse les deux. Le
texte lecteur a été mis à l'abri de cette divergence : il ne mentionne plus aucune de ces deux
sources, ni leur contenu, ni leur existence. Aucun `SUP-...` n'a été fabriqué, aucun artefact de
fact-check n'a été touché.

Le fichier a changé : le SHA précédent est invalide, l'orchestrateur doit reprendre à `PREPARE`.
Aucune auto-validation n'est rendue ici, ni `ACCEPT`, ni `FACTCHECK_PASS`.

---

BOUCLE DE CORRECTION 1 (FACTCHECK_FIX)

Entrée : `factcheck-gate.json` (verdict `FACTCHECK_FAIL`, 73 claims, 69 soutenus, 4 en échec,
`structural_errors` vide), `verification.json` pour les motifs des quatre claims, `claim-map.json`
pour leur localisation exacte. Relus en entier avant correction : les trois protocoles,
`corpus/validated/deplacement-des-buts.json`, et le répertoire `corpus/evidence/deplacement-des-buts/`
listé de nouveau (`evidence.primary-reading.json`, `evidence.reception.json`, pas de `scouting.json`).
Aucune recherche web, aucun fait ajouté de mémoire, aucun `SUP-...` fabriqué, aucun artefact de
fact-check modifié.

Les quatre échecs sont `TOO_STRONG` et relèvent d'une seule espèce : une modalité ou un
quantificateur de l'auteur perdu à la traduction. Chacun a reçu une seule des opérations
autorisées, et rien d'autre n'a été touché : les 69 claims soutenus sont inchangés mot pour mot.

1. C015, `sections[0].paragraphs[1]` : BORNER (restitution de la restriction supprimée).
   Ancien : « Une telle régularité ne s’obtient pas par la surveillance, mais, observe Merton, par
   des dispositions que l’organisation inculque et entretient ». Le support dit « Discipline can be
   effective ONLY IF the ideal patterns are buttressed by strong sentiments » (mechanism[3], p. 562)
   et, côté conditions, « obtenue par le sentiment et NON PAR LA SEULE CONTRAINTE »
   (`conditions.appears_when[1]`). Le texte avait transformé un « seule » en exclusion pure, et
   remplacé la contrainte par la surveillance, que nul support ne mentionne. Nouveau : « Une telle
   régularité ne s’obtient pas par la seule contrainte. La discipline, écrit Merton, n’est efficace
   que si les conduites attendues sont étayées par des dispositions que l’organisation inculque et
   entretient ». Les deux modaux de l'auteur, « seule » et « que si », sont rendus l'un et l'autre.
   L'attribution à Merton est conservée parce qu'elle porte maintenant sur ce qu'il écrit.

2. C016, même paragraphe : RETIRER (suppression de l'ajout non soutenu).
   Le troisième terme de l'énumération, « un attachement au devoir qui ne dépende pas du résultat
   obtenu dans tel cas », importait dans l'exigence initiale une propriété de la discipline DÉJÀ
   déplacée : « conformance with regulations, whatever the situation », « not as a measure designed
   for specific purposes » (mechanism[7], p. 563). La subordonnée est supprimée ; il reste « un
   attachement au devoir », qui correspond à « devotion to one's duties » de mechanism[3]. Aucun
   terme n'a été ajouté à l'énumération, même soutenu : la correction reste soustractive. L'idée
   d'indifférence au cas n'est pas perdue pour le lecteur, elle est dite à sa place réelle, en
   `sections[1].paragraphs[1]` (C025, soutenu) : « La discipline n’est plus une mesure prise en vue
   de résultats déterminés ».

3. C026, `sections[1].paragraphs[2]` : RETIRER.
   « Ce déplacement exclut la lecture la plus répandue. » transformait une existence en prévalence.
   Les supports établissent que le contresens existe (« perdre de vue ses objectifs », « oublient
   leur mission »), et `non_etabli[9]` de la réception dit expressément le contraire de la phrase :
   le repérage porte sur des pages pédagogiques et un polycopié non enregistrés, et « un décompte
   sérieux de la lecture dominante » n'existe pas. Aucune formulation ne rend disponible ce que le
   dossier range en non établi : la phrase est retirée, sans substitut atténué du type « une lecture
   courante », qui serait le même quantificateur en plus discret. Le paragraphe ouvre désormais sur
   « Il ne s’agit ni d’un oubli du but, ni d’un relâchement. » (C027, soutenu), qui enchaîne sur la
   fin du paragraphe précédent sans rupture et garde intact le delta de la section.

4. C059, `sections[4].paragraphs[0]` : BORNER, par replacement du quantificateur et du modal.
   Le support porte « the client who, QUITE UNDERSTANDABLY, is convinced of the ‘special features’
   of his own problem OFTEN objects to such categorical treatment » (mechanism[16], p. 565-566).
   Le texte avait déplacé « often » de l'objection vers la validité de la conviction (« souvent à
   bon droit »), rendu l'objection inconditionnelle (« c’est exactement à ce traitement […]
   qu’elle objecte ») et effacé les guillemets de distance. Nouveau : « Or la personne qui se
   présente est convaincue, ce qui se comprend aisément, que son problème a quelque chose de
   « spécial », et elle objecte souvent à ce traitement par catégories. » Merton juge la conviction
   compréhensible, pas fondée : le texte dit maintenant cela et rien de plus, « souvent » est
   revenu sur l'objection, et les guillemets de distance de l'auteur sont restitués (mise en relief
   de trois mots, sous le seuil du contrôle de citation).

`limits` : une seule addition, en fin de `limits[2]`, pour la frontière que C026 a révélée et
qu'aucune limite ne nommait : « La prévalence du contresens qui y voit un oubli de mission n’est
pas davantage établie : aucune formule de lecture dominante n’est permise. » `limits[2]` interdisait
déjà toute affirmation de fréquence, mais seulement au titre de l'absence de données dans l'article
de 1940 ; la prévalence de la lecture vulgarisée est une autre frontière, et elle est désormais
écrite. `limits` passe ainsi à 221 mots, légèrement au-dessus des 200 mots visés, ce qui reste
interne et invisible au lecteur ; le texte lecteur est inchangé à 1 496 mots.

Contrôles refaits après correction : aucun paragraphe n'a perdu son delta, les suppressions ne
laissent aucune phrase orpheline, aucune section ne répète une section précédente, rien de `limits`
n'est remonté en bloc visible, et le texte reste en deçà des frontières documentaires. Aucune
affirmation nouvelle n'a été introduite ; les trois corrections de texte sont soustractives ou
restitutives, la quatrième est un déplacement de modal.

Le fichier a de nouveau changé : le SHA `3bb4481436094b5397c4f963cc4a6d851c1e73d5159f10cd595a1f14302f724b`
contrôlé par ce gate est invalide, et l'orchestrateur doit reprendre à `PREPARE`. Aucun
`FACTCHECK_PASS` n'est déclaré ici. Une seconde boucle de correction reste disponible.

BOUCLE DE CORRECTION 2 (FACTCHECK_FIX)

Entrée : `factcheck-gate.json` du second tour (verdict `FACTCHECK_FAIL`, 77 claims, 76 soutenus,
1 en échec, `structural_errors` vide), `verification.json` pour le motif du claim fautif,
`claim-map.json` pour sa localisation par locator et offsets. Les quatre corrections de la boucle 1
sont tenues pour acquises : aucune n'a été rouverte. Relus avant correction : `FACTCHECK_PROTOCOL.md`,
le fichier `corpus/deepenings/deplacement-des-buts.json` en entier, et le répertoire
`corpus/evidence/deplacement-des-buts/` listé de nouveau (`evidence.primary-reading.json`,
`evidence.reception.json`, pas de `scouting.json`). Aucune recherche web, aucun fait ajouté de
mémoire, aucun `SUP-...` fabriqué, aucun artefact de fact-check modifié à la main.

Un seul échec, `TOO_STRONG`, et de la même espèce que les quatre précédents : une modalité de
l'auteur perdue à la traduction, ici un absolu mis à la place d'une réduction.

1. C011, `sections[0].paragraphs[0]`, offsets 246-372 : BORNER.
   Claim contrôlé : « Écrire la règle, l’appliquer de la même façon à tout le monde et former
   chacun à la respecter élimine cette part d’arbitraire. » Les deux supports résolus
   (`SUP-85286ab8755c0583`, `$.evidence.mechanism[16]`, p. 565-566, et `SUP-dae828baa8a376a7`,
   `$.evidence.conditions.appears_when[3]`, p. 561) n'attestent qu'une minimisation et une
   dispense, jamais un effet accompli : « Since functionaries MINIMIZE personal relations and
   resort to categorization », « The personality pattern of the bureaucrat is nucleated about this
   NORM of impersonality », et des règles générales et abstraites qui « PRECLUDE the necessity for
   the issuance of specific instructions for each specific case ». Une norme d'impersonnalité et
   une minimisation des relations personnelles sont une réduction structurelle de l'arbitraire ;
   elles ne sont pas sa disparition, et aucun support du dossier ne donne l'élimination pour
   obtenue. Le verbe « élimine » faisait donc du résultat un absolu.
   Nouveau : « Écrire la règle, l’appliquer de la même façon à tout le monde et former chacun à la
   respecter réduit cette part d’arbitraire. »
   La correction porte sur un mot et un seul, `élimine` → `réduit`, dans le span exact du claim.
   Aucune affirmation nouvelle n'est introduite, aucune source n'est réattribuée, aucune borne
   chiffrée n'est ajoutée : le verbe absolu est remplacé par le verbe de degré que les supports
   autorisent. Le reste du paragraphe, y compris la phrase sur l'efficacité technique qui le
   referme, est intact mot pour mot.

Rien d'autre n'a été touché dans le fichier : le `git diff` porte sur une seule ligne et une
seule substitution de mot, et les 76 claims soutenus au second tour sont inchangés lettre pour
lettre. Les offsets des claims situés après C011 dans ce paragraphe se décalent d'un caractère,
conséquence mécanique que `PREPARE` recalculera ; ce n'est pas une modification de leur texte.

`limits` : aucune addition. La frontière en cause — le dossier n'atteste qu'une réduction, pas une
élimination de l'arbitraire — est déjà couverte par `limits[2]`, qui interdit toute affirmation de
fréquence et signale que l'article ne fournit aucune donnée. Aucune nouvelle frontière utile aux
agents n'est apparue, et `limits` reste à 221 mots.

Contrôles refaits après correction : le paragraphe garde exactement son delta (la règle écrite
comme solution au traitement inégal de deux demandes identiques), il ne devient pas redondant avec
`sections[4].paragraphs[0]`, qui dit la réduction de la relation personnelle du côté de l'usager et
non du côté de la garantie ; aucune section ne répète une section précédente ; rien de `limits`
n'est remonté en bloc visible ; le texte reste en deçà des frontières documentaires. Le libellé
« l'arbitraire que la règle écrite supprime », employé plus haut dans la section « CE QUI A ÉTÉ
CONSERVÉ » de ce compte rendu, désignait la version auditée : il est à lire désormais comme
« l'arbitraire que la règle écrite réduit ».

Contrôle mécanique après correction : `npm run corpus:deepen -- --check --only=deplacement-des-buts`
→ PASS, 1 717 mots, aucun avertissement de citation (le nombre de mots est inchangé, la
substitution étant mot pour mot).

Le fichier a de nouveau changé : le SHA `a4a2a0fffccfeac4edd182b237a5eb4e1ff5b578ee2258faeb7ba1662bc40444`
contrôlé par le second gate est invalide, et l'orchestrateur doit reprendre à `PREPARE`. Aucun
`FACTCHECK_PASS` n'est déclaré ici, et aucune auto-validation : la décision appartient au gate
déterministe. C'était la seconde et dernière boucle de correction autorisée.
