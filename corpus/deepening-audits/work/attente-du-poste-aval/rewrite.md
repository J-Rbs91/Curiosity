concept : attente-du-poste-aval
mode : REVISE (audit `REVISE`, AUDIT_PROTOCOL.md §6)
protocol_version : 3

VOLUME

- avant : 1 325 mots lecteur, 190 mots de `limits`, 17 paragraphes lecteur (2 + 15), 5 sections.
- après : 1 412 mots lecteur, 214 mots de `limits`, 14 paragraphes lecteur (2 + 12), 5 sections.
- contrôle : `npm run corpus:deepen -- --check --only=attente-du-poste-aval` passe, 1 626 mots
  comptés par le script, aucun avertissement de citation non retrouvée.

Trois paragraphes lecteur en moins, quatre-vingt-sept mots en plus : la matière retirée est de
la reprise, la matière ajoutée est un mécanisme (le démontage des quatre unités d'attente) et
une condition d'application (le réglage qui casse le premier pas du raisonnement).

CE QUI A CHANGÉ, DÉFAUT PAR DÉFAUT

1. Le lead ne livre plus la thèse.

lead[0] est conservé mot pour mot : l'audit le donnait pour fonctionnel, et il l'est. lead[1] est
refait. L'ancien annonçait déjà l'attente comme seule prise, le changement d'objet et le plafond
de gain, c'est-à-dire tout ce que S1 et S3 devaient apporter. Le nouveau s'arrête sur la question
(« si le travail de la seconde machine est fixé d'avance, sur quoi le rangement mord-il ? »),
constate que la durée du chantier varie pourtant, et place l'incise d'attribution demandée par la
trajectoire cible : Bellman répond page 11, et crédite le résultat à S. Johnson.

Effet en chaîne : S1 cesse de travailler en rattrapage, et les formulations « Bellman écrit cette
évidence », « c'est exactement ce que pose Bellman », « Bellman en tire aussitôt la conséquence »
n'installent plus une paternité que S5 devait défaire. Le `TOO_STRONG` signalé par l'audit est
désamorcé dès le lead sans que la révélation de S5 perde sa matière.

2. S1 passe de trois à deux paragraphes.

S1.P1 garde la dichotomie (usiner ou attendre, pas de troisième cas) et absorbe en deux phrases le
rappel d'invariance : « Le premier terme est acquis d'avance, quel que soit le rang des pièces.
Tout ce qu'un rangement peut déplacer est logé dans le second. » L'ancien S1.P3, dont l'audit
montrait qu'il ne portait que le verbatim de la mesure d'efficacité, disparaît ; ce verbatim est
remonté dans S1.P2, qui porte désormais x_i, I_n et la conséquence de méthode. La formule brute
`I_n + Σ b_i` est remplacée par sa lecture française (« le temps total du chantier vaut cette
somme d'attentes ajoutée aux durées de travail du second poste ») : le raisonnement tient sans
elle, et le frottement de clarté relevé en D disparaît. Le dernier signe mathématique du texte,
Σ, a disparu avec elle.

3. S2 passe de trois à deux paragraphes.

P1 (le tableau, les quarante-trois unités acquises) est inchangé. L'ancien P3 contenait un chiffre
neuf, l'écart de trente et une unités, et une morale qui redisait lead[0]. Le chiffre est rapatrié
en fin de P2, où il se lit directement après 47 = 43 + 4 et 78 = 43 + 35 ; la morale (« il ne fait
travailler personne plus vite, il fait attendre moins ») tombe.

4. S3 exécute la promesse au lieu de l'annoncer.

P1 (plafond de gain mesurable, poste jamais inactif) est inchangé. P2 garde le plancher structurel
et sa cause, mais lui retire la décomposition partielle (« deux d'entre elles sont le temps que met
l'article placé en tête »), qui faisait doublon avec le nouveau P3. L'ancien P3, qui promettait
qu'une somme d'attentes « se regarde attente par attente » sans le faire, est remplacé par
l'exécution : les quatre unités de l'ordre (5, 1, 4, 3, 2) démontées en deux, une, une, rien, rien,
chacune rapportée à sa cause, et la dernière phrase conserve le seul élément propre de l'ancien
paragraphe (une date de fin se constate, une somme d'attentes se démonte).

Le calcul : avec (a_i, b_i) = (4,5), (4,1), (30,4), (6,30), (2,3) et l'ordre (5, 1, 4, 3, 2), la
machine amont finit en 2, 6, 12, 42, 46 ; la machine aval démarre en 2, 6, 12, 42, 46 et finit en
5, 11, 42, 46, 47. Inactivités : 2, 1, 1, 0, 0, soit 4 au total et un temps final de 47, ce que la
page 15 donne. La cause des deux zéros est écrite telle qu'elle se vérifie : l'aval est occupé
trente unités par l'article (6, 30) pendant que l'amont travaille sans interruption, si bien que
les deux dernières pièces arrivent juste à temps. C'est une dérivation arithmétique du tableau de
la page 15, déclarée comme telle dans `limits`, à valider par la chaîne de fact-check.

5. S4 ne fait plus deux travaux, et le dispositif y devient une condition.

Titre changé : « Deux machines, soixante-dix pages, mai 1955 » juxtaposait les deux travaux dans
son intitulé même. « Là où le comptage cesse de tenir » nomme le sujet de la section, qui est
maintenant unique. P1 ne redécrit plus l'atelier de lead[0] : il le pose comme condition et dit ce
qui la casse (une pièce qui revient en arrière, un troisième poste qui s'intercale). P2 est neuf :
si le temps de remise en état de la seconde machine dépend de la pièce qui vient d'en sortir, c'est
la charge de travail du poste aval, donc le premier pas du raisonnement, qui cesse d'être acquise.
La phrase est explicitement conditionnelle et porte sur le raisonnement du texte, pas sur ce que
contient Johnson ; elle donne sa raison d'être au titre de l'article de 1954, qui annonce les temps
de réglage. L'ancien P3 bibliographique (soixante-dix pages, sans volume ni numéro, Pólya) est
supprimé ; ce qu'il fallait en garder tient dans S5.P3.

6. S5 instruit au lieu de révéler, et le texte ne finit plus sur un erratum.

P1 et P2 sont conservés dans leur substance, avec deux ajustements : « ne lui appartient pas »
remplace « n'est pas le sien » en ouverture, et P2 formule explicitement ce qui revient à Bellman
(l'exposition, l'exemple chiffré, la redérivation par équation fonctionnelle), comme le permet la
note d'attribution. P3 est réorganisé autour du geste du lecteur : l'accès aux deux textes n'est
pas symétrique. Le statut de P-651 (papier RAND, soixante-dix pages, révisé le 23 mai 1955,
copie numérisée servie publiquement) y tient en une phrase, la mention « révisé » voyageant avec
la date comme l'exigeait l'audit ; le nom de revue inversé et l'initiale seule deviennent ce qu'ils
sont, un outillage pour retrouver Johnson ; et la dernière phrase du texte est désormais la raison
d'ouvrir ces huit pages, la démonstration du minimum absolu, attribuée au renvoi de la page 13
(« à en croire le renvoi de la page 13 ») et non affirmée du contenu de l'article.

DELTA DE CHAQUE PARAGRAPHE DE LA NOUVELLE VERSION

- lead[0] : l'ordre ne peut pas faire travailler le second poste plus vite, la somme ne dépend pas
  de l'ordre des termes.
- lead[1] : il existe pourtant un écart de durée entre deux ordres, donc une inconnue ; et le
  résultat qui l'explique est de Johnson, exposé par Bellman en 1955.
- S1.P1 : le temps du second poste n'a que deux états, donc le total mesuré là vaut travail plus
  attente, et seul le second terme est mobile.
- S1.P2 : Bellman nomme cette attente, en fait une somme, et en fait la mesure de la qualité d'un
  rangement.
- S2.P1 : sur un cas réel, quarante-trois unités de charge aval sont acquises avant toute décision.
- S2.P2 : le même cas donne 47 et 78, qui se décomposent en 43 + 4 et 43 + 35 ; l'écart de 31 est
  entièrement de l'attente.
- S3.P1 : le temps d'inactivité observé est le plafond du gain, et un poste jamais inactif ne gagne
  rien à être réordonnancé.
- S3.P2 : l'attente a un plancher non nul, causé par le remplissage initial de l'amont.
- S3.P3 : une somme d'attentes se décompose morceau par morceau, et chaque morceau a une cause
  nommable, y compris les zéros.
- S4.P1 : l'égalité vaut sous une configuration précise, et on sait dire ce qui la fait tomber.
- S4.P2 : un réglage dépendant de la pièce précédente attaque la prémisse d'invariance elle-même,
  et c'est ce que le titre de Johnson annonce.
- S5.P1 : le résultat n'est pas de Bellman ; il le crédite page 8 et intitule ses paragraphes du
  nom de Johnson, dont le troisième porte le partage qu'on vient de lire.
- S5.P2 : partage exact du travail entre les deux hommes, preuve renvoyée à 1954, redérivation
  par programmation dynamique revendiquée par Bellman.
- S5.P3 : remonter à chacun des deux textes ne coûte pas la même chose, et voici ce que porte
  celui qui reste à ouvrir.

Aucune séquence de deux paragraphes consécutifs ne partage un delta. Aucune section ne répète
principalement une section antérieure.

FRONTIÈRE DOCUMENTAIRE

- Johnson 1954 reste `metadata-only` : le texte n'en dit que ce que Bellman en écrit (pages 8
  et 13) et ce que porte sa notice (titre, revue, prénom S. M.). Aucune phrase sur son contenu
  propre, y compris dans la nouvelle S4.P2, où le raisonnement sur les temps de réglage porte sur
  la prémisse du texte et non sur ce que Johnson en fait.
- Le critère de tri et sa démonstration restent hors périmètre : la nouvelle version ne cherche pas
  de profondeur de ce côté et ne dit pas pourquoi (5, 1, 4, 3, 2) l'emporte.
- L'exemple des cinq articles n'est pas présenté comme absent de Johnson ; la formulation « Le
  rapport donne un exemple chiffré page 15 » est conservée.
- Accès public de la copie numérisée constaté, autorisation d'ayant droit non constatée : le texte
  dit que la copie est servie publiquement, rien sur une licence.
- Dérivations arithmétiques déclarées dans `limits` : les trente-cinq unités (78 moins 43) et le
  détail 2, 1, 1, 0, 0.
- Verbatim : les cinq passages anglais et les deux titres de paragraphe sont repris mot pour mot
  des passages relevés dans l'enregistrement validé (champ `original_text`, notes de rédaction,
  notes « PROSE » et « ATTRIBUTION » du bloc `review`). Le contrôle mécanique ne signale aucune
  citation absente.
- `limits` reste interne : rien de son contenu n'est remonté en bloc visible, et aucune de ses
  quatre entrées n'existe sous forme de section.

CONTRÔLE

`npm run corpus:deepen -- --check --only=attente-du-poste-aval` : 1 approfondissement contrôlé,
1 626 mots, rien projeté, aucune erreur, aucun avertissement.

La modification invalide tout fact-check antérieur de cette carte : le cycle doit reprendre à
`PREPARE`. Cette réécriture ne s'auto-valide pas et ne rend ni `ACCEPT` ni `FACTCHECK_PASS`.
