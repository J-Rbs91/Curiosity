concept : performance-totale
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 5960ac50373daf141831586088d540e34f7aebb7

GATE ET IDENTIFICATION
- sha256(corpus/deepenings/performance-totale.json) = 675351b546c531575d02f67f595f1509abce76ca159f7792a1270d4e3643b545
  = candidate_sha256 de factcheck-gate.json ; verdict FACTCHECK_PASS, 48/48, 0 failed,
  mapping_incomplete [], structural_errors [].
- Blob 5960ac50 : se lit (git cat-file -t = blob), JSON d'approfondissement, conceptId
  « performance-totale ». Il est identique à rewrite-before.json (git hash-object) et au blob
  de ffdb1d2, la version auditée (1 142 mots lecteur, comme l'indique l'audit).
- Volume, à corriger dans l'information de l'orchestrateur : le texte lecteur (lead + sections)
  fait 954 mots, et non environ 1 177. Les 1 177 annoncés par fix2-rewrite.md sont le total
  de `corpus:deepen`, qui compte aussi `limits` (223 mots) : 954 + 223 = 1 177. L'évolution
  réelle est donc de 1 142 à 954 (-16 %), sous le plancher indicatif de 1 100
  (PROTOCOLE §5) et sous la cible de l'audit (1 150-1 250). Raison : la réécriture a retiré
  les gloses sans appui (995 mots), puis fix1 a encore resserré le lead et S3.P1 sur les
  verdicts TOO_STRONG.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     avant : la définition générale de l'évaluation (S1.P1), les propriétés de la mesure (S1.P2), la distinction discours/pratique (S2.P2), la définition de la qualité totale (S4.P1) et « ce qu'elle a fait subir à l'entreprise » (S4.P2) étaient sans appui, et la relation article/livre était inversée (S5.P1). Après : 48/48 SUPPORTED. Relation de partie corrigée (s4.p1 « une partie de la thèse qu'il soutient fait également l'objet d'un ouvrage »). Dejours réduit aux deux formules du § 26. Shanghai en simple mention. Aucune remontée de `limits`.
progressivité pédagogique      3/4     4/4     situation (lead) → deux registres et leur différence épistémologique (S0) → deux moteurs (S1) → deux traits du régime et sens de « totale » (S2) → provenance et contenu de l'analogie (S3) → germes, effets, livre (S4). Les défauts relevés par l'audit ont disparu : l'incohérence « glissement de vocabulaire », et « indépendamment du contexte » qui anticipait « décontextualisé ».
densité / non-redondance       2/4     3/4     avant : « totale » expliqué trois fois et récapitulé une quatrième (lead[1], S3.P2, S4.P2, S5.P2), S4.P2 et S5.P2 sans delta. Après : « totale » expliqué une seule fois (s2.p1, § 32), les paragraphes récapitulatifs ont disparu. Reprises résiduelles : lead[0] « dispositifs d'évaluation pluralistes, conçus au cas par cas » / s0.p0 « construits au cas par cas » ; la formule « personne ne croit / chacun se plie » revient trois fois (lead[0], s2.p1, s3.p1) ; s3.p1 reprend aussi « assigné à se conformer » (s2.p0).
clarté                         4/4     3/4     l'entrée concrète est conservée (« Imaginez un hôpital… »). Mais lead[0] a perdu ses gestes concrets (interroger les usagers, comparer…), qui étaient TOO_STRONG, au profit de « dispositifs d'évaluation pluralistes » et de « mesure des performances ». Lead[1] porte une longue citation technique. Plusieurs termes passent sans explication : « tertiarisation », « par homologie », « espaces métrologiques », « indicatrique ». « Décontextualisé » n'a plus sa glose, alors que « Assigné, parce que… » garde la sienne. La lecture reste possible, mais plus exigeante.
profondeur explicative         2/4     3/4     les mécanismes de l'auteure sont désormais présents : dichotomie constructiviste/réaliste reprise de Desrosières et « réalisme illusoire de la mesure » (s0.p1), tertiarisation et output « incertain et difficilement codifiable » (s1.p0), réduction à des « indicateurs de performance individuelle » (s1.p1), hégémonie du chiffre « à toutes les strates institutionnelles » (s2.p1), résultat placé avant le travail et transformé en prescription (s3.p1). Le moteur de la tertiarisation reste mince, ce qui est conforme au support.
valeur des exemples            1/4     2/4     ajout du seul cas réel de l'article : l'Université et le classement de Shanghai, avec les « contorsions » (s2.p0), en simple mention. La vignette du lead reste hypothétique et lisible comme telle, mais elle est moins illustrative depuis fix1.
limites / nuances              2/4     3/4     nuances sourcées ajoutées : « ce que l'on pourrait appeler » (lead[1]), « réduit en partie » (lead[1]), « de moins en moins étanches » (s0.p0), « germes » (s4.p0), Dejours critique et non auteur (s3.p0), livre plus large à lire (s4.p1). La nuance inventée discours/pratique est supprimée. « Germes » arrive tard, mais le caractère tendanciel est déjà posé dans le lead.
pouvoir d'ouverture            2/4     3/4     le texte ne finit plus sur une récapitulation (ancien S5.P2). Il passe à une tension sourcée, l'évaluation devenue « une activité mécanique et aveugle » (s4.p0), puis au livre du même nom, « il faudra l'ouvrir pour le savoir » (s4.p1), formulé du côté du lecteur.

DELTA PAR PARAGRAPHE (nouvelle version)
- lead[0] : le jugement d'un service glisse de dispositifs pluralistes vers un chiffre auquel chacun se conforme sans y croire.
- lead[1] : l'auteure, sa thèse (§ 3, « réduit en partie la portée ») et le nom proposé au conditionnel.
- s0.p0 : deux registres aux histoires distinctes qui se rapprochent graduellement ; ce que sont les dispositifs d'évaluation.
- s0.p1 : le mécanisme, une mesure qui dépend de sa procédure contre une mesure tenue pour réelle, et le glissement de la première vers la seconde.
- s1.p0 : premier moteur, la tertiarisation (un output difficile à codifier fait échouer la productivité industrielle).
- s1.p1 : second moteur, de l'État social à l'État prestataire ; réduction à des indicateurs individuels ; perte de la pluralité (§ 25).
- s2.p0 : premier trait, un chiffre décontextualisé et assigné ; cas de Shanghai.
- s2.p1 : second trait, la non-adhésion ; idéal-type hégémonique, d'où le sens de « totale ».
- s3.p0 : provenance du nom (analogie déclarée), statut critique de Dejours.
- s3.p1 : contenu de l'analogie (résultat avant le travail, prescription) et son rattachement aux traits. Delta réel, mais la moitié du paragraphe reprend des formules déjà acquises.
- s4.p0 : statut tendanciel (« germes ») et effets en retour (« indicatrique », « quantophrénique »).
- s4.p1 : le livre de 2012, la relation de partie, ce qui reste à lire.
Aucune séquence de trois paragraphes au delta substantiellement identique. Aucune section
principalement redondante.

défauts initiaux corrigés :
- Les gloses sans appui qui portaient le mécanisme (S1.P1, S1.P2, S2.P2, définition de la qualité totale en S4.P1, S4.P2) sont remplacées par les explications de l'auteure, toutes présentes dans le dossier (Desrosières, § 16, § 18, tertiarisation, § 22, § 24, § 26).
- « Totale » n'est plus expliqué quatre fois : il l'est une fois, sur l'appui du § 32, et l'interprétation est marquée (« On peut comprendre ainsi »).
- La relation de partie entre l'article et le livre n'est plus inversée, et l'incise « par l'indication de l'auteure elle-même » a disparu.
- Le lead ne présente plus le régime comme accompli : « a pu », « glisse », « réduit en partie », « pourrait appeler ». « Seule manière légitime » est retiré.
- La conclusion récapitulative (S5.P2) est supprimée ; le texte s'ouvre sur les effets et le livre.
- L'incohérence « glissement de vocabulaire » et l'anticipation de « décontextualisé » ont disparu.

régressions détectées (aucune n'est conceptuelle ni documentaire) :
- Volume lecteur de 954 mots (-16 %), sous le plancher indicatif de 1 100. La baisse ne s'obtient pas en raccourcissant aux dépens de la profondeur : ce qui a été retiré était sans appui, et ce qui a été ajouté est du mécanisme sourcé. Le chiffre de « ~1 177 » transmis par l'orchestrateur compte `limits`.
- Clarté du lead un peu moins bonne. Depuis fix1, lead[0] remplace des gestes concrets par du vocabulaire du domaine (« dispositifs d'évaluation pluralistes », « mesure des performances »), et lead[1] cite une phrase longue et technique.
- Termes laissés sans explication : « tertiarisation », « par homologie », « espaces métrologiques », « indicatrique ». « Décontextualisé » a perdu sa glose (C027 retiré), et « Assigné, parce que… » reste seul, de façon un peu bancale.
- Répétitions recréées en petit : « au cas par cas » (lead[0] et s0.p0) ; la formule « personne ne croit / chacun se plie / assigné à se conformer » revient dans lead[0], s2.p0, s2.p1 et s3.p1. Le phénomène reste localisé et sans commune mesure avec la quadruple explication de « totale » de l'ancienne version.
- Aucune information solide de l'ancienne version n'est perdue. Les citations exactes (titre de partie, § 6, § 25, § 5, § 26) et l'attribution Dejours sont conservées. Les seuls passages perdus étaient des gloses non soutenues.
- Aucune fragilité documentaire repérée hors du gate. s2.p0 paraphrase de près le § 5 sans guillemets, sous « Selon Jany-Catrice », ce qui est acceptable.

raison de la décision : le gate est valide sur le SHA exact (FACTCHECK_PASS, 48/48). La
réécriture supprime les défauts majeurs du diagnostic : mécanisme inventé, quadruple
explication de « totale », relation de partie inversée, régime présenté comme accompli. Elle
y substitue les mécanismes de l'auteure, présents dans le dossier. La progression est plus
nette, la profondeur et les nuances progressent, et la densité s'améliore. Il y a une seule
baisse : la clarté, d'un point (lead plus abstrait, quelques termes sans explication). Elle
ne crée aucun contresens et ne compense pas le gain sur la fidélité et la profondeur. Le
volume sous le plancher est signalé, mais il résulte du retrait de gloses sans appui et
non d'une perte de profondeur. AUDIT_PROTOCOL §6 admet expressément une version plus courte.
Pistes pour un cycle ultérieur, sans conditionner l'acceptation : rendre au lead une
situation concrète qui reste dans les supports, et expliquer « tertiarisation » et
« décontextualisé ».
