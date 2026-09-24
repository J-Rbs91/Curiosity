---
concept_id: nasa-tlx
deepening_sha256: 4c8cd0b1806b831e62a68dde93f921a4eab025bc47087977fabb9bc7f4cfafd4
validated_sha256: d9e55dca2e79fea0f750b23751c752b42511b6908930a8d88bc059fbdaccde5e
protocol_version: 3
audited_at: 2026-09-24T04:44:28Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# nasa-tlx

**Le texte publié se contredisait sur le moment où l'on remplit le questionnaire.** Un paragraphe
de la section 2 annonçait un relevé « après l'exécution » et « également pendant la tâche » ;
la section 5 tenait le document entier pour parlant de sujets notant une tâche déjà accomplie.
Les deux affirmations étaient dans le même fichier, à trois sections d'écart, et aucune des deux
n'était fausse isolément : la première collait une précision au mauvais endroit, dans un
paragraphe dont le sujet était la division par quinze. L'audit l'a relevée comme contradiction
interne, et c'est elle qui a fait basculer le verdict de `PASS` vers `REVISE`.

Le reste tenait. Quinze deltas nets sur dix-huit paragraphes, aucune source `metadata-only`
exploitée comme si elle avait été lue, rien d'inventé. D'où `REVISE` et non `REWRITE` : la
trajectoire était bonne, trois de ses pièces ne l'étaient pas.

## Ce que les trois tours de gate ont appris

Le fact-check a refusé deux fois avant de passer : quatre claims, puis deux, puis aucun. Le
détail importe moins que ce que la séquence montre.

**Les deux premiers refus portaient sur de la matière que la révision venait d'ajouter.** C002 et
C013 affirmaient tous deux qu'un observateur pourrait estimer la charge du dehors. Le rewriter
les avait écrits en comblant un manque pédagogique réel, et aucun support ne les portait ; les
preuves disponibles vont même en sens inverse, le livret argumentant qu'il n'existe pas de règle
graduée pour mesurer cela de l'extérieur. **Un texte devient plus faux en devenant plus
pédagogique lorsque la pédagogie invente son appui.** Le gate existe pour ce cas précis, et il
l'a pris.

**Le second tour a refusé deux claims que le premier avait laissés passer**, et ce ne sont pas des
conséquences de la correction : C017 et C068 étaient déjà là. Une lecture aveugle en avait
manqué deux ; la suivante les a vues. C'est la règle 6 du dépôt vérifiée une fois de plus — le
contrôle aveugle se trompe aussi, et le dispositif tient parce qu'il est redondant, non parce
qu'un de ses maillons serait sûr. **Un second tour de gate n'est donc pas une formalité
administrative après correction : c'est une seconde lecture qui trouve autre chose.**

**Deux refus sur quatre étaient le même défaut logique à deux endroits.** C033 affirmait que deux
scores diffèrent « dès que » les notes ne sont pas toutes égales ; C017 que deux échelles « ne
pèseront donc pas pareil ». Dans les deux cas la formule autorise la possibilité et le texte
écrivait la nécessité. À notes identiques non uniformes, deux jeux de poids distincts peuvent
rendre la même moyenne pondérée ; et la comparaison par paires autorise un poids nul, auquel cas
le score ne bouge pas. **Le glissement possibilité → nécessité est le défaut le plus fréquent de
cette carte, et il ne se voit pas à la relecture : il se voit quand on demande à une preuve ce
qu'elle garantit exactement.**

## Deux décisions de correction qui font précédent

**C068, « c'est un outil de travail mis en circulation, pas une publication », a été retirée
plutôt que marquée comme interprétation.** Le motif est la bonne distinction : marquer en
interprétation convient à une affirmation seulement non établie ; ici le dossier la contredit,
décrivant un document titré, paginé, édité par NASA Ames et catalogué sous NTRS 20000021488. **On
ne présente pas comme une lecture possible ce que les preuves démentent.**

**C079 est passée en s'appuyant sur deux supports `metadata-only`**, le chapitre Hart & Staveland
de 1988, explicitement non ouvert. Elle passe parce qu'elle n'affirme rien de son contenu :
seulement son existence, ses auteurs, et le fait que le livret y renvoie. C'est la ligne exacte
que le protocole demande de tenir, et elle mérite d'être dite dans les deux sens — **une source
non ouverte peut être citée ; ce qu'elle interdit, c'est d'en affirmer la teneur.**

## Le volume

1 404 mots à l'entrée, 1 663 après révision, 1 638 puis 1 636 après les deux corrections. La
hausse initiale est adossée à de la matière du dossier restée inemployée : la graduation 0-100,
le mot « stressée » dans l'échelle de frustration, la voix du questionnaire, et un second exemple
montrant deux scores différents à notes identiques. Les deux corrections n'ont fait que retirer
et borner, et le compte le montre. **Aucune des trois passes n'a écrit un mot pour atteindre une
longueur.**

## Un incident d'infrastructure rencontré pendant ce lot

Deux mappers lancés en parallèle partagent le répertoire scratchpad de la session. Le script de
génération de l'un, nommé banalement, a été écrasé par celui de l'autre ; en le relançant, l'agent
a déclenché une écriture vers le claim-map d'un concept qui n'était pas le sien.

Les artefacts ont été vérifiés intacts, et **ce qui a protégé le lot n'est pas la chance mais la
validation mécanique du bundle** : elle recoupe `claim_text` contre les offsets réels et chaque
support contre le pack, et un artefact croisé n'y survit pas. La règle consignée jusqu'ici, « un
lot parallèle nomme ses sous-répertoires et préfixe ses fichiers », ne suffisait pas : elle porte
sur les fichiers du dépôt, alors que la collision s'est produite sur les fichiers temporaires que
les agents se nomment eux-mêmes. **La parade tenue ensuite est de préfixer le script temporaire
par le `conceptId`**, et elle a tenu sur les trois tours suivants.
