concept : rationalite-limitee
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : dd3a8bb368b2cf799e87a19ba02d866243720a39

GATE PRÉALABLE

sha256 actuel de corpus/deepenings/rationalite-limitee.json :
bde9cd2d0230c9233d38579aef4e823fe8d07e8227780ca7283bb51b1bef5940
candidate_sha256 de factcheck-gate.json : identique, caractère pour caractère.
verdict du gate : FACTCHECK_PASS, 74 claims, 74 soutenus, 0 en échec, structural_errors vide.
Le blob de référence se lit, porte bien conceptId = rationalite-limitee, et correspond à l'état
décrit par audit.md (5 sections, 2 paragraphes chacune, 1 121 mots lecteur, section finale
« Limité ne veut pas dire irrationnel »). Comparaison légitime.
Contrôle de fabrication rejoué : npm run corpus:deepen -- --check --only=rationalite-limitee
passe, 1 824 mots, aucun avertissement de citation, aucun tiret cadratin.

VOLUME, ET OÙ IL VA

lecteur : 1 121 mots (lead 169) avant, 1 521 mots (lead 161) après. +400 mots, soit +36 %.
Le total avec limits passe de 1 329 à 1 824 ; le texte lecteur reste dans la cible 1 300-1 700.
Ventilation du delta de volume, section par section, contre la liste de matière sous-exploitée
que l'audit avait dressée :

- S1 : 217 -> 270 (+53). Contenu neuf : les quatre exigences cumulatives du modèle classique
  (p. 353), et le piège du mot français attesté par deux sources francophones lues en entier.
- S2 : 169 -> 293 (+124). Contenu neuf : la scène de Milwaukee racontée, sa question, et sa
  réponse (empêchement cognitif et non motivationnel, deux responsables qui ne voient pas le
  même objet). L'audit désignait cette scène comme « l'exemple qui manque au texte, et il est
  déjà écrit ».
- S3 : 206 -> 253 (+47). Contenu neuf : la mobilité du niveau d'aspiration et sa loi de
  variation, qui règle le contresens « satisficing = viser bas ».
- S4 : 181 -> 205 (+24), section entièrement substituée. Contenu neuf : le blocage de la
  régression optimisatrice contre Stigler, et la voie du monde simplifié rangée par Simon du
  côté du satisficing.
- S5 : 179 -> 339 (+160), section entièrement substituée. Contenu neuf : les deux autres
  procédés (sous-buts observables, division de la tâche de décision), la conséquence
  organisationnelle, et le déplacement du jugement du résultat vers le processus.

Aucun des cinq accroissements n'est une reprise d'un contenu déjà présent ; chacun installe un
mécanisme, un cas ou une conséquence que l'ancienne version n'avait pas, et qui était disponible
en texte intégral dans le répertoire de preuve. Trois paragraphes redondants (ancien S4.P2,
S5.P1, S5.P2, 269 mots) ont disparu. Le gain de volume est donc un gain de matière : l'opération
est une substitution, pas un étirement. Aucune analogie nouvelle n'a été ajoutée ; le seul
exemple développé, Milwaukee, est un cas rapporté par l'auteur, pas une image.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          1/4     4/4     les quatre fragilités nommées par l'audit sont
  éteintes, et aucune ne se reforme ailleurs. (a) Le temps : les trois occurrences de borne
  temporelle disparaissent avec l'ancien S5 ; recherche sur le texte lecteur entier, le mot ne
  sert plus jamais de borne. La réserve du dossier (« Le TEMPS n'est jamais nommé comme borne
  dans le texte lu ») est reportée en limits[3], à sa place, qui est interne. (b) Le référent
  glissé : « The phenomenon observed in Milwaukee is ubiquitous in human decision making » est
  désormais attaché, en S2.P3, à la scène de la p. 352-353 qu'il suit immédiatement, et non plus
  à la règle d'arrêt de la p. 356. (c) La datation : « a mis un mot sur cet écart, dans la
  conférence [...] en 1978 » devient « Dans une conférence de 1978, il revient sur cette idée
  qu'il avait avancée plus de trente ans plus tôt » ; aucune date de baptême, et le libellé du
  prix n'est plus mobilisé. (d) Les qualifications : « politiste », « cadre où il travaillait le
  plus souvent » et « c'est le cas le plus fréquent » sont tombés ; Stigler, Gigerenzer, Gouin,
  Harguindéguy, Béjean, Midy et Peyron sont nommés sans qualification, ce que le dossier
  impose. Vérifications propres sur le répertoire : les quatre exigences de S1.P1 sont p. 353
  verbatim ; « Milwaukee, 1934-35 » autorise « au milieu des années trente » ; Lewin n'est
  invoqué que comme origine déclarée par Simon, jamais pour son propre contenu ; Stigler
  n'apparaît que par la démarcation que Simon opère p. 356 ; Gigerenzer reste donné comme
  jugement de Gigerenzer (« tient cette lecture pour », « juge qu'elle »). Aucune phrase du
  texte lecteur n'énonce le contenu d'une source en notice seule (1955, Models of Man,
  Administrative Behavior et sa traduction, Cozic, Klaes & Sent, tous absents du texte lecteur).
progressivité pédagogique      2/4     4/4     la promesse de lead[1] est tenue pour les trois
  manques, ce qui était le défaut de structure de l'ancienne version : manque 1 en S2.P1 et S3,
  manque 3 en S2.P2-P3 puis S4, manque 2 en S1.P2 où il reçoit son traitement propre (il est
  dans le monde, pas dans la tête). lead[1] a cessé d'être une annonce de plan pour devenir un
  delta : les trois manques ne se corrigent pas de la même façon. La suite des paliers est
  explicable en une phrase par section : critère, puis ce qu'on fait quand les options manquent,
  puis la règle qui arrête, puis pourquoi cette règle ne peut pas être remplacée par un calcul,
  puis ce que le concept couvre au-delà d'elle. L'ancien S5, qui refaisait le travail de S4, est
  remplacé par la section qui manquait.
densité / non-redondance       2/4     3/4     la séquence bloquante de l'audit (ancien S4.P2 +
  S5.P1 + S5.P2, trois deltas identiques sur « ce n'est pas un défaut, c'est le régime normal »)
  n'existe plus : l'argument est rendu une fois en S1.P3, sur des sources qui le disent mieux,
  et une fois en S4 sous la forme de l'impossibilité de faire autrement. L'ancien S2.P2, négatif
  de S2.P1, est replié en une phrase. Aucune section n'a pour rôle principal de répéter une
  section antérieure ; aucune séquence de trois paragraphes consécutifs ne partage un delta.
  Résidu, et c'est pourquoi la note n'est pas 4 : l'énumération des trois manques est faite
  trois fois en 430 mots, en mots courants dans lead[0], sous l'angle de la corrigibilité dans
  lead[1], dans les mots de Simon avec le partage interne / externe en S1.P2. L'audit reprochait
  ce redoublement entre lead[0] et l'ancien S1.P1 ; il est déplacé plutôt que supprimé. Il reste
  moins coûteux qu'avant (quatre passes devenues trois, et les deux dernières portent chacune un
  axe analytique distinct, la corrigibilité et le lieu de la borne, que l'ancienne version
  n'avait pas), et S1.P1 gagne maintenant sa place par les quatre exigences, non par une liste.
clarté                         3/4     3/4     l'entrée reste compréhensible sans vocabulaire de
  discipline ; satisficing arrive au bon moment et est expliqué dans la phrase qui l'introduit ;
  niveau d'aspiration est posé en S3.P1 avant d'être exploité en S3.P3, sans saut. La surcharge
  que l'audit relevait sur l'ancien S1.P1 (122 mots, deux citations) est allégée par le partage
  en deux paragraphes. Deux points de charge nouveaux, de même ordre, empêchent de monter la
  note : la phrase des quatre exigences de S1.P1 empile quatre conditions abstraites d'un trait,
  et S4.P1 demande d'absorber Stigler, « la même équivalence formelle » et l'estimation des
  rendements marginaux de sa propre recherche en trois phrases. Aucun de ces deux passages ne
  mobilise une notion que les précédents n'auraient pas construite.
profondeur explicative         2/4     4/4     le manque central diagnostiqué par l'audit est
  comblé : le texte explique désormais pourquoi le décideur ne peut pas faire autrement.
  S4 ferme la sortie optimisatrice deux fois, par l'impossibilité d'estimer les coûts et
  rendements marginaux de la recherche dans une situation déjà trop complexe, puis en montrant
  que simplifier le monde jusqu'au calculable est encore du satisficing. S3.P3 donne la loi de
  variation du seuil. S5.P2 donne la conséquence organisationnelle. Le texte ne se contente plus
  de dire ce que fait le décideur.
valeur des exemples            1/4     4/4     Milwaukee cesse d'être un nom cité pour devenir
  une scène qui fait comprendre un mécanisme autrement invisible : deux responsables d'accord
  sur les fins, sans rivalité, et pourtant en désaccord permanent, parce que l'un voit un
  équipement physique et l'autre un équipement social. C'est l'établissement du caractère
  cognitif et non motivationnel de l'empêchement, et aucune définition ne l'aurait produit.
  L'exemple est ensuite réemployé pour une seconde fonction en S5.P1, où il illustre
  l'identification aux sous-buts observables : un même cas, deux deltas.
limites / nuances              2/4     4/4     la conditionnalité de la recherche d'options, qui
  était le point fort de l'ancienne version, est conservée verbatim et à sa place. S'y ajoutent
  trois nuances que l'audit désignait comme décisives et absentes : le seuil monte et descend
  avec l'environnement, donc s'arrêter n'est pas viser bas ; optimiser un monde simplifié reste
  du satisficing ; le satisficing n'est qu'un des trois procédés. Le contresens du temps n'est
  plus réintroduit. Chaque nuance arrive à l'endroit où elle empêche un contresens précis, non
  en fin de texte.
pouvoir d'ouverture            1/4     4/4     la clôture définitionnelle (« La rationalité
  limitée nomme cette prise en compte, pas son absence ») est remplacée par un déplacement de
  l'objet du jugement, du résultat vers le processus, appuyé sur Gouin et Harguindéguy et sur la
  p. 363, et par une tension vérifiable : deux organisations dans des conditions identiques
  peuvent se conduire différemment, et prévoir ce qu'elles feront demande de savoir comment
  elles décident. Deux textes sont nommés au lecteur en cours de route (S1.P3, S5.P3).

total : 14/32 avant, 30/32 après.

TEST DU DELTA, NOUVELLE VERSION, PARAGRAPHE PAR PARAGRAPHE

lead[0] : le modèle du choix idéal exige trois choses cumulées, et aucune n'est réunie.
lead[1] : le nom du régime, son auteur, et le fait que les trois manques ne se réparent pas de la
  même façon, ce qui distingue d'emblée un manque comblable de deux manques qui ne le sont pas.
S1.P1 : le critère est un écart à l'omniscience, et l'omniscience a un contenu précis en quatre
  exigences ; être limitée n'ôte rien à une rationalité sa qualité de rationalité.
S1.P2 : les trois défaillances dans les mots de Simon, et le fait que l'une n'est pas dans la
  tête du décideur, ce qui interdit de lire le concept comme un défaut d'équipement mental.
S1.P3 : le mot français lui-même induit en erreur, et deux textes francophones le disent.
S2.P1 : chercher des options est une conséquence conditionnelle, pas une propriété du régime.
S2.P2 : un cas où des responsables d'accord sur les fins se querellent sans fin, et la question
  que Simon se pose devant lui.
S2.P3 : la réponse, et c'est le pivot : l'empêchement est cognitif, pas motivationnel, et Simon
  le donne pour universel.
S3.P1 : la règle d'arrêt, niveau d'aspiration, examen séquentiel, arrêt au premier passage.
S3.P2 : le mot satisficing, sa formation, son sort dans les sources françaises, et ce qui le
  sépare du choix optimal.
S3.P3 : le seuil est mobile et suit l'environnement, donc la règle n'est pas un renoncement.
S4.P1 : on ne peut pas calculer le bon moment de s'arrêter, parce que ce calcul exigerait
  l'estimation que la complexité rend impossible ; démarcation d'avec Stigler.
S4.P2 : la dernière échappatoire, simplifier le monde, reste du satisficing, et la lecture
  optimisatrice réintroduit l'omniscience.
S5.P1 : le satisficing n'est qu'un des trois procédés ; les deux autres sont nommés, et le
  deuxième se lit sur la scène déjà connue.
S5.P2 : les organisations sont l'appareillage de cette limite, non son obstacle.
S5.P3 : ce qui change quand on juge la façon de décider plutôt que le résultat, et pourquoi
  prévoir un comportement suppose de savoir comment la décision se prend.

Seize paragraphes, seize deltas distincts et énonçables en une phrase. Aucun n'annonce
l'importance d'une idée au lieu de l'expliquer.

défauts initiaux corrigés :
- la séquence bloquante de trois paragraphes aux deltas identiques (ancien S4.P2, S5.P1, S5.P2)
  est supprimée, et le travail qu'elle faisait est rendu une seule fois, mieux sourcé.
- la section qui refaisait le travail de la précédente (ancien S5 après S4) est remplacée par la
  section absente, celle de la nécessité du mécanisme.
- la borne temporelle, introduite trois fois contre une réserve explicite du dossier, disparaît
  entièrement du texte lecteur.
- le référent de la citation de Milwaukee est remis sur le phénomène que Simon y observe.
- l'implication de datation de la première occurrence du terme est retirée.
- la réduction du concept à l'un de ses mécanismes, que les deux fichiers de garde du répertoire
  désignaient comme la mésinterprétation à éviter, est levée : les deux autres procédés sont
  écrits, avec leur conséquence organisationnelle.
- la promesse des trois manques, tenue pour un tiers seulement, est tenue pour les trois.
- le mécanisme causal décisif, absent alors qu'il était ouvert en texte intégral, est installé.
- l'exemple de Milwaukee cesse d'être un nom sans scène.
- limits[3], lacune déclarée qui n'en était pas une, disparaît ; limits[0], limits[1] et
  limits[2] n'énoncent plus le contenu de sources fermées et disent l'état d'accès réel, Cozic
  compris, conformément à la divergence que l'audit avait signalée contre l'enregistrement
  validé.

régressions détectées :
- aucune régression bloquante.
- perte rhétorique mineure et documentée : lead[0] perd « Personne ne décide ainsi » et la mise
  à distance explicite du manque de temps, que l'audit tenait pour la meilleure phrase du texte.
  Le gate a refusé l'une et l'autre formulation (C002, TOO_STRONG sur un contrefactuel tiré du
  silence de la source). Le contresens est désormais fermé par l'absence plutôt que par sa
  réfutation, ce qui est moins actif mais plus exact ; lead[1] et S1.P2, en montrant que deux
  des trois manques ne se réparent pas, font une partie de ce travail. Un gain documentaire net
  contre une perte d'énergie à l'attaque : arbitrage correct, non annulable par le reviewer.
- compression sans perte de sens en S3.P2 : « peut très bien coïncider avec le meilleur choix
  possible, si celui-ci se trouve être aussi le premier à franchir le seuil » devient « Les deux
  peuvent coïncider, mais rien ne l'assure ». La condition explicite est perdue, mais elle vient
  d'être exposée deux phrases plus haut.
- redondance déplacée, non recréée à l'identique : voir l'axe densité, l'énumération des trois
  manques subsiste trois fois. Sous le seuil de blocage, puisque les deux dernières passes
  portent chacune un axe analytique neuf, mais c'est le point à resserrer au prochain cycle.
- remontée de limits dans le texte lecteur : non. S1.P3 est une nuance conceptuelle établie par
  deux sources lues en entier, ce que PROTOCOLE §5 place explicitement dans sections. Aucun bloc
  d'insuffisances documentaires n'est présenté au lecteur, aucun titre du genre « ce que les
  sources ne permettent pas d'établir ». Réserve de forme, une seule, en S3.P2 : « les sources
  françaises consultées » laisse entrevoir une consultation faite par quelqu'un, alors que la
  formulation autorisée est « les sources disponibles ». Ce n'est aucune des expressions
  interdites, le contrôle l'accepte, et l'énoncé porte un delta réel pour le lecteur (le mot
  reste en anglais dans la littérature française) ; à corriger d'un mot si le fichier est rouvert.
- hygiène interne à signaler sans effet sur la décision : limits passe à 5 paragraphes et
  303 mots, ce que le schéma autorise (maxItems 5) mais qui dépasse la fourchette de
  PROTOCOLE §5, 2 à 4 paragraphes et 100 à 200 mots. Le champ est interne, le texte lecteur n'en
  dépend pas, et chacune des cinq entrées nomme réellement une source, son état d'accès et
  l'affirmation qu'elle interdit, ce que le protocole exige par ailleurs.

fragilité documentaire que le fact-check aurait ratée : aucune. Les vérifications
indépendantes conduites ici sur corpus/evidence/rationalite-limitee/ (quatre exigences p. 353,
datation 1934-35 de Milwaukee, origine lewinienne déclarée par Simon, démarcation d'avec
Stigler p. 356, « optimum solutions for a simplified world » p. 350, « invokes new kinds of
omniscience » attribué à Gigerenzer, absence de toute assertion sur une source en notice seule)
concordent toutes avec le texte proposé.

raison de la décision : ACCEPT. Le gate rend FACTCHECK_PASS sur le SHA exact du fichier servi,
et les six exigences minimales sont satisfaites : aucune séquence de trois paragraphes aux
deltas substantiellement identiques, aucune section principalement redondante, progression plus
claire qu'avant et désormais tenue sur les trois manques annoncés, profondeur non seulement
préservée mais augmentée par le mécanisme de nécessité qui manquait, et six des défauts majeurs
du diagnostic supprimés, dont la fragilité frontale de la borne temporelle et la réduction du
concept à son seul mécanisme de choix satisfaisant. L'augmentation de 400 mots du texte lecteur
se résout intégralement en matière neuve, sourcée en texte intégral et nommée comme manquante
par l'audit, contre 269 mots de redondance supprimés : c'est une substitution, pas un
remplissage, et aucune analogie équivalente n'a été ajoutée. Les trois réserves subsistantes
(énumération des trois manques déplacée plutôt que supprimée, deux phrases denses, « sources
françaises consultées ») relèvent du resserrement, pas du blocage.
