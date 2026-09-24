concept : precarite-des-trajectoires
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 9f3a2e5d0bc5336026f419b1647eb0ef76928a92

GATE

- SHA-256 actuel de `corpus/deepenings/precarite-des-trajectoires.json` :
  `e8132f75abb62351c42036d6e0fc6ea278a8efbc561b91357f44926428c42eee`.
- `factcheck-gate.json` : `verdict: FACTCHECK_PASS`, `candidate_sha256` identique au SHA actuel,
  57 claims, 57 soutenus, 0 échec, `structural_errors` vide, `failures` vide. Gate valide.
- Le blob `9f3a2e5d` se lit, est du JSON d'approfondissement, et porte
  `conceptId: "precarite-des-trajectoires"` : c'est bien la version antérieure de cette carte.
  16 paragraphes lecteur, 1 178 mots, `limits` de 3 paragraphes, 181 mots. La version courante
  porte 20 paragraphes lecteur, 1 606 mots, `limits` de 4 paragraphes, 276 mots.
- `npm run corpus:deepen -- --check --only=precarite-des-trajectoires` : 1 approfondissement
  contrôlé, 1 882 mots, aucune erreur, aucun avertissement de citation.
- Aucun tiret cadratin, aucun terme de dispositif, aucune formule de lecture empêchée dans le
  texte lecteur des deux versions.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     3/4     `limits` cesse de déclarer non ouverte la troisième partie que le dossier déclare « ouverte et vérifiée » ; il nomme désormais les vraies frontières (encadré 4 p. 95, titre seul ; résumé du bas de la p. 99 ; aucune source secondaire ; aucun seuil chiffré ; conditions de collecte ; action publique) et déclare la seule dérivation non triviale. Les trois citations conservées restent verbatim et les sept citations nouvelles se retrouvent mot pour mot dans `evidence/lecture.json` (p. 89, 91, 94-97). Reste un 3 et non un 4 : voir « fragilités résiduelles ».
progressivité pédagogique      3/4     4/4     S1 donne maintenant l'histoire de l'indicateur avant le mécanisme, au lieu de rejouer le `lead` ; S4, retitrée « Un pont entre les enquêtes et la recherche », a enfin un prérequis à servir après S3 (elle explique d'où vient l'instrument que S3 décrit) alors qu'elle s'intercalait auparavant sans fonction ; S5 reste la conséquence décisionnelle. Progression explicable en une phrase par section : histoire de l'instrument, élargissement en halo, instrument longitudinal, co-évolution enquêtes/recherche, coût décisionnel.
densité / non-redondance       2/4     4/4     Les quatre passages sans delta relevés par l'audit ont disparu : ancien S1.P1 (scène du `lead` en langue abstraite) supprimé, seconde moitié de l'ancien S1.P3 supprimée, ancien S3.P3 (aphorisme) supprimé, ancien S4.P2 (notice bibliographique, phrase adressée à un citateur) refondu avec une fonction. Aucune séquence de trois paragraphes au delta substantiellement identique : S1 (succession d'instruments / supposition de corrélation / réfutation empirique / appréciation a posteriori), S2 (description plurielle / descripteur subjectif / statut non univoque / halo sans bord), S4 (non-attribution / thèse propre / forme de l'effet en retour / trois enrichissements), S5 (la difficulté change de nature / fenêtre d'observation / action publique / règle de méthode). Aucune section ne répète principalement une section antérieure.
clarté                         4/4     4/4     « Longitudinal » reste défini à l'endroit exact où il devient nécessaire ; « halo » reste explicité par sa propriété ; le `lead` est inchangé au mot près et reste une scène. Les quatre paragraphes nouveaux n'introduisent aucun terme savant non expliqué. Seule réserve, mineure : « la cohorte 1979 » et « la Génération 98 » ne sont pas glosés, mais la phrase qui les porte rend leur fonction lisible, et les gloser aurait exigé une matière que le dossier ne donne pas.
profondeur explicative         3/4     4/4     L'audit reprochait au texte de ne donner qu'un sens de la flèche. Les deux sens y sont : S4.P2 porte la thèse annoncée p. 88 et le « pont » entre appareil statistique et usages scientifiques, S4.P3 en donne la forme (« quelquefois direct », « plus souvent induit », enquêtes devant « rester ouvertes à une pluralité d'hypothèses »), S4.P4 les trois enrichissements et le « double mouvement » de la conclusion. S1.P2 ajoute le mécanisme qui manquait (le contrat valait comme indicateur par une corrélation supposée), S2.P3 celui du statut juridique non univoque.
valeur des exemples            4/4     4/4     Les trois exemples que l'audit donnait pour les meilleurs du dépôt sont conservés intacts : les deux signataires du `lead`, les deux mondes sous une même courbe (S3.P2), les fenêtres de trois et sept ans (S5.P2). Leur caractère hypothétique reste lisible dès leur première phrase. Aucun exemple décoratif ajouté ; les deux chiffres de S1.P3 sont des données de l'article, pas un exemple, et portent la fonction que le dossier leur donne.
limites / nuances              3/4     4/4     Les nuances utiles arrivent toujours au bon moment (S2.P1 contre « un critère remplace l'autre », S2.P4 et S5.P1 contre le seuil naturel, S4.P1 contre l'attribution abusive) et S2.P3 en ajoute une qui manquait partout. Le point retiré par l'audit portait sur le champ interne qui n'identifiait pas correctement ce qu'il interdit : il l'identifie désormais source, état d'accès et affirmation interdite.
pouvoir d'ouverture            2/4     4/4     L'ancienne chute non sourcée (« ce que les années enchaînées font apprendre ou désapprendre, et ce qu'elles laissent espérer ») est remplacée par S5.P4 : la conclusion ne tranche pas la durée, elle la transforme en règle de méthode (« la stabilité de l'emploi ne se mesure bien que dans la durée »), suivie de la contrainte pratique qui en découle, savoir si un emploi signé aujourd'hui était stable suppose d'avoir décidé aujourd'hui de suivre assez longtemps. C'est une tension, pas un résumé.

défauts initiaux corrigés :
- défaut majeur n° 1 : l'ancien S1.P1, qui rejouait en abstrait la scène de `lead[0]` au premier
  paragraphe du développement, est supprimé. S1 ouvre désormais sur une matière neuve, la
  succession historique des indicateurs.
- défaut majeur n° 2 : l'ancien S3.P3 et son aphorisme (« un instrument d'enquête […] décide de ce
  qui pourra devenir visible ») sont supprimés ; le mécanisme réel que ce paragraphe singeait est
  traité et sourcé en S4.P3 et S4.P4.
- défaut majeur n° 3 : l'ancien S4.P2 livrait deux rattachements institutionnels comme information
  de notice, avec une phrase adressée à un citateur. Les rattachements sont conservés, mais
  rapportés au « pont » que les autrices revendiquent, et la phrase au citateur a disparu.
- défaut majeur n° 4 : `limits` ne présente plus comme non ouverte une troisième partie que le
  dossier déclare lue, et le texte a récupéré la matière qui lui était ouverte.
- défaut majeur n° 5 : 1 606 mots lecteur contre 1 178, dans la cible 1 300-1 700, et
  l'augmentation est portée par quatre paragraphes de matière documentée, non par de l'étirement.
- gain non demandé mais réel : la citation centrale de la carte (« ce n'est pas tant la fragilité
  instantanée de l'emploi qui pose problème que le maintien durable dans la précarité ») était
  absente de toute l'ancienne version ; elle est maintenant en S3.P1.
- dérivation non appuyée supprimée : l'ancien S2.P2 finissait sur « un contrat court, dans un
  métier où l'usage est de travailler ainsi, peut ne pas y figurer », que l'audit signalait comme
  non soutenu. La clause est retirée sans que le paragraphe perde son delta.

régressions détectées :
- aucune régression conceptuelle ou de clarté. Vérifié paragraphe par paragraphe : rien de solide
  de l'ancienne version n'a été perdu. Le `lead` est inchangé au mot près ; S2.P1, S2 dernier
  paragraphe, S3.P2, S4.P1, S5.P1 et S5.P2 sont conservés. Les trois seuls retraits de contenu
  non redondant (« La réponse n'est pas dans les données, elle précède leur traitement »,
  l'indicatif assertif sur l'action publique, la généralité sur le temps d'observation) sont
  exactement les quatre claims fermés par la boucle FACTCHECK_FIX : ce sont des retraits imposés
  par le gate, non des pertes documentaires.
- aucune répétition recréée ailleurs : la suppression de l'ancien S1.P1 n'a pas déplacé la scène du
  `lead` dans une autre section, et le rappel de S2 opéré par S4.P4 est une relecture rétrospective
  d'un descripteur déjà posé, pas une redite.
- aucun exemple séduisant sans fonction, aucune transition fluide masquant un saut : chaque section
  s'appuie sur une brique posée avant elle.
- `limits` n'est pas remonté dans le texte lecteur. Aucun titre ni bloc du registre interne n'y
  figure, aucune phrase ne raconte une lecture empêchée, aucun renvoi à la fabrication du texte.

fragilités résiduelles, signalées et non bloquantes :
- S4.P4 écrit « et c'est par les questionnaires qu'elle y est entrée » à l'indicatif, alors que le
  compte rendu de réécriture annonçait n'avoir gardé que la condition (« ne peut entrer […] que si
  une enquête la recueille »). Le lien est déclaré comme dérivé dans `limits[3]`, il est soutenu
  par deux passages du dossier (l'enrichissement « Des approches plus subjectives apparaissent »
  p. 96, et la présence de chercheurs dans les groupes de construction des questionnaires p. 95),
  et le gate l'a examiné et soutenu. La clause mériterait néanmoins la même marque de dérivation
  que sa première moitié.
- S1.P4 paraphrase en prose le passage de la page 91 sur l'appréciation a posteriori, que
  l'enregistrement validé range parmi les passages écartés pour n'avoir été vus que sur l'OCR.
  C'est un état hérité de l'ancienne version, où le même argument occupait S1.P2 ; la réécriture ne
  l'aggrave pas, et le dossier, autorité selon PROTOCOLE §3 et FACTCHECK_PROTOCOL §3, déclare
  l'article lu en entier avec `consulted: "full-text"`.
- la divergence amont subsiste : `corpus/validated/precarite-des-trajectoires.json` porte encore
  `locator: "p. 87-93, ici p. 92"` et les notes 4 et 6 qui déclarent la troisième partie non
  ouverte, alors que le texte s'appuie désormais sur les pages 94 à 97. Le dossier lève
  explicitement cette réserve, le gate a résolu les supports dessus et rendu PASS, et le compte
  rendu de réécriture signale le point comme à réparer en amont. Ce n'est pas un motif de REJECT
  ici, l'audit l'ayant lui-même exclu du `BLOCKED_SOURCE`, mais l'enregistrement validé doit être
  mis à jour pour que sa déclaration d'accès cesse de contredire son propre dossier.

raison de la décision : ACCEPT. Le gate est valide sur le SHA exact du fichier courant, les quatre
défauts majeurs du diagnostic sont effectivement supprimés, et la suppression n'a pas été obtenue
par raccourcissement : les 200 mots sans delta ont été remplacés par quatre paragraphes de matière
documentée que l'ancienne version laissait dehors, dont la thèse que les autrices revendiquent en
propre et la citation centrale de la carte. La progression est plus claire qu'avant, la profondeur
et le pouvoir d'ouverture montent nettement, aucun paragraphe lecteur n'est désormais sans delta,
aucune section ne répète une section antérieure, et rien de solide de l'ancienne version n'a été
perdu. Les fragilités résiduelles sont déclarées dans la frontière interne ou relèvent d'une
réparation amont de l'enregistrement validé, hors de portée d'une réécriture de l'approfondissement.
