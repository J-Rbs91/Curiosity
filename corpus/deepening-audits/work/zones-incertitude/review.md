concept : zones-incertitude
verdict : ACCEPT
factcheck_sha_match : PASS

GATE

SHA-256 recalculé sur `corpus/deepenings/zones-incertitude.json` :
`4258e1797df20043c5057e04051cf8a0a37b5fb5022f9568ba546f96a4baba75`.
`factcheck-gate.json` : `candidate_sha256` identique caractère pour caractère,
`verdict: FACTCHECK_PASS`, 71 claims, 71 supported, 0 failed, aucune erreur structurelle.
Le gate porte donc bien sur le texte examiné ici.

Contrôle mécanique refait : `npm run corpus:deepen -- --check --only=zones-incertitude`
passe (1 784 mots, rien projeté). Aucun tiret cadratin, aucune apostrophe droite, 23 paires
de guillemets toutes pourvues de l'espace fine, aucun titre de 60 caractères ou plus, aucune
expression de dispositif. Texte lecteur : 1 522 mots (plancher de 1 100 franchi, plafond de
1 700 respecté).

Réserves de forme, mineures et non bloquantes : `lead` fait 206 mots pour une fourchette
indicative de 120-200 ; `limits` compte 5 entrées et 262 mots pour une fourchette indicative
de 2-4 entrées et 100-200 mots. Le schéma admet `maxItems: 5` et le validateur passe ; la
cinquième entrée a été ajoutée par le tour de fact-check pour consigner une frontière
nouvellement découverte, ce qui est l'usage prévu du champ. Aucune de ces deux mesures ne
touche la qualité du texte lecteur.

VÉRIFICATION INDÉPENDANTE DE LA PIÈCE CENTRALE (1960 vs 1966)

L'affirmation sur laquelle repose la réécriture a été recontrôlée directement, sans passer
par l'audit ni par l'orchestrateur. `corpus/validated/zones-incertitude.json` l'établit trois
fois, de trois manières indépendantes :

- `attribution_note` : « L'expression apparaît d'abord chez Crozier seul (1966) ; la
  cosignature est attestée à partir de 1979. »
- `review.notes[0]` : « chaîne d'attestation du terme refaite page par page (1966, 1971
  Crozier seul ; 1975 avec Thoenig ; 1979 avec Friedberg) ».
- `notes[1]` : « le texte de 1960 d'où vient la citation, celui de 1966 où l'expression
  apparaît » — les deux rôles y sont explicitement disjoints.

Le dossier de preuve confirme au niveau de la page : l'entrée 1966 du fichier de lecture
primaire porte « PLUS ANCIENNE ATTESTATION ÉTABLIE de l'expression », occurrence unique
p. 232, confrontée au fac-similé Persée. L'ancienne version écrivait « dans un texte de 1960
puis de nouveau en 1966 » : l'affirmation de l'audit était donc exacte, et la réécriture
retire bien une erreur au lieu d'en introduire une.

Corollaires recontrôlés : la nouvelle S5.P1 dit que l'expression « se lit » en 1966, jamais
qu'elle y paraît pour la première fois — la condition sous laquelle la carte était passée au
contrôle aveugle (« la fiche n'affirme aucune antériorité », attestation tierce Touraine 1964)
est donc tenue, et la réserve est consignée dans `limits`. Le calcul refait, « treize ans »,
vaut 1979 − 1966 et remplace la « quinzaine d'années » qui n'avait de sens qu'avec la date
fausse.

VÉRIFICATION DOCUMENTAIRE COMPLÉMENTAIRE

Dix-neuf des vingt-trois passages cités ont été recherchés à la main dans
`corpus/evidence/zones-incertitude/`, après normalisation typographique : tous résolvent
verbatim dans `evidence.primary-reading.json`, y compris les pièces neuves de la réécriture
(contre-épreuve des usines étrangères, « incompétents devant le seul problème stratégique »,
« une sorte de cas limite », loi d'intensification, note 3 de 1971 sur la pertinence graduée,
reconstitution de 1966, alliance de l'ingénieur d'exploitation, automobile, vulnérabilité
notée avec Thoenig, « ne sont donc pas également irremplaçables »).

Niveaux d'accès vérifiés sur les objets porteurs : Crozier 1960, Friedberg 1992 et 2009,
entretien Crozier sont `full-text` ; 1966, 1971, 1975, 1979 sont `excerpt` aux pages citées ;
Le Phénomène bureaucratique (1963), L'Acteur et le système (1977) et Hickson et al. (1971)
sont `metadata-only` et ne sont jamais caractérisés par leur contenu dans le texte lecteur.
`evidence.reception.json` ne porte aucun `consulted` et n'a fourni aucune matière : la
réciproque de PROTOCOLE §3 est respectée.

Deux points de détail contrôlés parce qu'ils auraient pu passer : « un entretien donné en
2003 » est exact (entretien réalisé le 12 décembre 2003, publié en 2008 ; la citation le
dit) ; et S1.P1 conserve la couverture de Crozier (« se comportent comme s'ils dépendaient »
pour « se comportent comme s'ils souffraient d'une situation de dépendance »), au lieu de la
durcir en dépendance constatée.

Aucune fragilité documentaire non détectée par le gate n'a été trouvée.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          1/4     4/4     l'erreur de datation de l'ancien S4.P1 et de son titre est supprimée et remplacée par la chaîne du contrôleur aveugle ; le contresens de l'ancien S6.P2 est coupé ; les trois sources en notice seule ne sont plus caractérisées par leur contenu ; 19 citations recontrôlées verbatim
progressivité pédagogique      2/4     4/4     cinq paliers qui montent tous : cas observé (S1.P1), contre-épreuve qui écarte le pouvoir de l'expert (S1.P2), cause (S2.P1), portée et condition de validité (S2.P2), condition de pertinence (S3), défense/reconstitution/extinction (S4), histoire de la formule (S5) ; plus aucun palier plat, l'ancienne S5 vide ayant disparu
densité / non-redondance       1/4     3/4     la chaîne lead[0] → S1.P1 → S2.P1 → S3.P1 de l'ancienne version n'a plus d'équivalent ; chaque paragraphe porte un delta nommable en une phrase ; subsistent deux échos légers, la clausule de S2.P2 qui frôle celle de S2.P1, et le « supérieur hiérarchique démuni » de lead[0] repris en S1.P2 (mais là en paiement de l'énigme, avec un mécanisme en plus)
clarté                         3/4     3/4     le point noir de l'ancien texte disparaît (« l'analyse stratégique » cité sans être expliqué) ; le vocabulaire reste courant et aucun terme n'arrive sans emploi ; en regard, la densité de citations augmente et rend S2.P2 et S3.P3 exigeants. Non dégradée
profondeur explicative         2/4     4/4     la condition que l'audit signalait absente est fournie et graduée (note 3 de 1971), son référent variable est montré comme fait de texte (1971, 2003, Friedberg), et trois mécanismes neufs sont expliqués : la loi d'intensification, l'alliance verticale protectrice, la reconstitution des zones
valeur des exemples            1/4     4/4     le photocopieur inventé, qui doublait le lead, est remplacé par le cas de 1960 avec sa contre-épreuve (mêmes produits, conditions techniques semblables, « à peu près aucune conséquence »), seul matériau capable de séparer le concept de « l'expert rare » ; s'y ajoute l'exemple de l'automobile choisi par Crozier lui-même
limites / nuances              2/4     4/4     le « cas limite » et la pression d'efficacité réduite bornent la généralisation à l'endroit où elle se tente ; S3.P3 sépare explicitement la zone d'incertitude de la rétention d'information et garde l'opacité de l'expert comme cas particulier assorti de sa condition, là où l'ancien texte fermait sur le contresens
pouvoir d'ouverture            1/4     4/4     l'ancienne dernière phrase était une généralité sur la circulation de l'information ; S5.P3 nomme le livre, dit précisément ce qui reste ouvert (« dans quels mots et à quelle place dans son argument ») et écrit la frontière du côté du lecteur (« il faudra l'ouvrir pour le voir »), conformément à PROTOCOLE §1

défauts initiaux corrigés :
- ERREUR DOCUMENTAIRE CENTRALE : la datation de l'expression en 1960 disparaît du texte, du
  titre de section et du calcul d'années. Vérifiée indépendamment contre l'enregistrement
  validé et le fac-similé de 1966 référencé au dossier. C'est le défaut majeur exigé.
- Le contresens terminal de l'ancien S6.P2 (la rétention d'information comme ressort général)
  est non seulement retiré mais retourné en distinction explicite (S3.P3), avec le critère de
  Friedberg substitué et l'opacité conservée comme cas particulier conditionné.
- La redondance systémique est levée : quatre paragraphes en chaîne pour un seul delta, une
  section (S3) dont le rôle était de répéter le lead, une autre (S5) sans proposition.
- L'exemple inventé doublé est remplacé par le cas documenté avec contre-épreuve, ce que
  l'audit avait posé comme la correction non réductible à une coupe.
- La condition manquante (pertinence, graduée) est fournie ; le texte ne peut plus se lire
  comme « savoir-faire rare ».
- Le plancher de 1 100 mots est franchi sans étirement : 1 522 mots lecteur, gagnés sur les
  redites.
- Les guillemets sans espace fine de l'ancien S1.P2 et S5.P2 sont corrigés.

régressions détectées :
- Aucune régression bloquante.
- Une perte réelle, assumée et compensée : la formulation explicite du caractère relationnel
  du pouvoir, que l'ancien S2.P2 posait tôt, n'arrive plus sous cette forme qu'en S5.P2 (le
  pouvoir comme prix obtenu dans un échange qu'on ne peut pas quitter). La dépendance est
  toutefois présente dès lead[1] et montrée en S1.P1 : le lecteur n'a pas besoin de S5 pour
  comprendre, et S5.P2 approfondit au lieu d'introduire. Non bloquant.
- Une perte de contraste : le retrait, au tour de fact-check, de « une autorité hiérarchique
  subsiste les jours où personne n'en a besoin » ôte une opposition pédagogiquement vive.
  Le retrait était juste (propriété générale non soutenue hors du cas de 1960) et la
  révocabilité reste portée, mieux, par l'exemple que Crozier choisit lui-même. Non bloquant.
- Une matière laissée de côté : la lecture francophone d'Olgierd Kuty est `full-text` et
  n'est pas employée, de sorte que le voyage de l'idée hors du texte d'origine ne se dit plus
  du tout. L'audit l'autorisait explicitement (« se dit en une phrase adossée à la lecture
  francophone réellement ouverte, ou ne se dit pas »). C'est un appauvrissement possible, pas
  une régression par rapport à l'ancienne S5, qui ne transmettait rien et tirait d'une source
  en notice seule un « écho » et une « confirmation ».
- Aucune remontée de `limits` dans le texte lecteur : les cinq entrées internes nomment
  source, état d'accès et affirmation interdite, et rien de ce registre n'apparaît en bloc
  visible. La seule formule de frontière qui atteint le lecteur est écrite au futur, du côté
  du lecteur.

raison de la décision : ACCEPT. Le gate préalable est valide, le SHA recalculé correspond
exactement, et la pièce sur laquelle la réécriture repose a été recontrôlée à la source
plutôt que reprise sur parole : l'enregistrement validé disjoint explicitement l'article de
1960, d'où vient la citation, et celui de 1966, où l'expression apparaît. La réécriture
supprime donc une erreur réelle, et non une erreur supposée. Elle supprime en outre le
contresens que le texte enseignait en dernière position, ce qui est à soi seul le défaut
majeur que le protocole exige de voir tomber. Le gain n'est pas stylistique : aucune séquence
de trois paragraphes ne porte un delta substantiellement identique, aucune section n'a pour
rôle principal d'en répéter une autre, et la profondeur augmente au lieu de baisser, le texte
gagnant une condition d'application, une contre-épreuve, une loi d'intensification, un
mécanisme d'alliance et un mécanisme de reconstitution qui étaient tous disponibles et
inemployés. Le remplacement de l'exemple inventé par le cas documenté est la correction
décisive, parce qu'elle seule empêche la lecture « l'expert rare ». Les deux échos résiduels
de S2 et de S1.P2, l'arrivée tardive de la formulation relationnelle et le dépassement
indicatif des volumes de `lead` et de `limits` sont des réserves de finition ; aucune ne
justifie de restaurer un texte qui datait faussement l'expression et fermait sur le
contresens que le dossier combat.
