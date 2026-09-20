# Réécriture — isomorphisme-institutionnel

mode : REVISE (verdict d'audit)
contrôle mécanique : PASS (`npm run corpus:deepen -- --check --only=isomorphisme-institutionnel`,
1 939 mots comptés, aucune citation signalée)

Volume : texte lecteur 1 673 mots (contre 1 299 avant), `limits` 266 mots, 6 sections,
15 paragraphes lecteur plus 2 de `lead`.

## Matière lue

`PROTOCOLE.md` (§3 dans sa version à trois entrées), `AUDIT_PROTOCOL.md`,
`FACTCHECK_PROTOCOL.md`, `corpus/deepenings/isomorphisme-institutionnel.json`,
`corpus/validated/isomorphisme-institutionnel.json`, l'audit détaillé, et le répertoire
`corpus/evidence/isomorphisme-institutionnel/` listé sur pièce : `evidence.primary-reading.json`
et `evidence.reception.json` intégralement, `scouting.json` écarté comme le protocole l'exige.

Aucune recherche web. Aucun fait ajouté de mémoire.

## Ce que le dossier de preuve a changé pour cette réécriture

Presque tout le gain vient de là, et il confirme le diagnostic de l'audit : le déficit n'était
pas un déficit de matière. La lecture primaire porte le texte de 1983 page à page, avec ses
verbatim, ses paginations recoupées sur deux témoins et ses réserves d'usage. Six paliers
absents du texte précédent y étaient disponibles, lus et paginés : le seuil de diffusion
(p. 148), sa signature observable (p. 149), le paradoxe d'agrégation (p. 148-149), les cas
documentés du mécanisme coercitif (p. 151), la contrainte d'offre et le biais de visibilité qui
expliquent la convergence des copies (p. 151-152), le filtrage du personnel et la limite interne
du mécanisme normatif (p. 152-153).

Les réserves du lecteur primaire ont été tenues comme des `limits`, notamment :

- `common_misinterpretations` « Un champ organisationnel, c'est un secteur d'activité ou un
  marché » : la définition de S5 a été refaite sur la p. 148, régulateurs et fournisseurs
  compris.
- `common_misinterpretations` « l'isomorphisme est une pathologie » : la fin de S6.P1 a été
  reconstruite autour de ce que la ressemblance rapporte, et se clôt sur « l'efficacité perd son
  rôle de cause ; elle ne devient pas une victime ».
- `known_ambiguities` « la rationalité collective n'est jamais définie » : l'expression n'est pas
  employée ; seules les deux propositions verbatim de la p. 148-149 sont rendues.
- `known_ambiguities` « rapport entre les trois mécanismes » : rien ne les met en séquence, et
  S6.P3 dit explicitement que le texte ne dit nulle part lequel pèse le plus.
- `_alternatives_verbatim_meme_source` sur la p. 153 : la phrase contre la lecture
  fonctionnaliste n'est jamais employée seule, sa suite immédiate est rendue dans le même
  paragraphe.
- Objets sans `consulted` : les deux fichiers de dossier ne portent pas ce champ sur leurs
  sources secondaires. Seuls Beckert 2010 et Mizruchi & Fein 1999 sont employés comme contenu,
  et uniquement sur ce que l'objet lui-même déclare et reproduit verbatim (« CONSULTATION :
  TEXTE INTÉGRAL » pour le premier, « RÉSUMÉ D'AUTEURS SEULEMENT » pour le second, dont seul ce
  que le résumé affirme est repris). Thornton n'est pas employé comme contenu du texte lecteur.
  Kraatz et Zajac, Hambrick, Zucker, Suddaby, Baehr, Clegg et Lounsbury, Huault, Boxenbaum et
  Jonsson : aucune phrase sur leur contenu.

## Défauts de l'audit, et traitement

1. **Trois paragraphes redondants (S3.P3, S4.P2, S6.P2).** Supprimés tous les trois. Leur volume
   est réaffecté aux paliers manquants, pas à de la reformulation.
2. **Le pivot causal absent.** Le seuil de diffusion entre en S1.P4, avec sa signature
   observable, et le paradoxe d'agrégation en S6.P2.
3. **Glose biologique inventée.** Retirée. À sa place, ce que le texte de 1983 porte réellement :
   le mot est repris à l'écologie humaine et y désigne un processus contraignant. La généalogie
   « population biology and mathematics » de Thornton n'a pas été utilisée non plus : elle
   n'était pas nécessaire et son objet porte l'avertissement de projection du dossier.
4. **Définition du champ réduite au secteur.** Refaite sur la p. 148 : fournisseurs principaux,
   consommateurs de ressources et de produits, agences de régulation, périmètre qui se détermine
   par enquête. L'exemple fautif « un hôpital se compare à d'autres hôpitaux » a disparu.
5. **Annonce de plan.** « que les trois sections suivantes détaillent » : supprimé. Aucun titre
   ni aucune phrase n'annonce la progression.
6. **« dans une traduction française faite pour l'occasion ».** Remplacé par « ici rendue en
   français » ; l'information reste due, la tournure ne raconte plus la fabrication du texte. La
   réserve complète est dans `limits[0]`.
7. **Fin de S6.P1 à la limite de l'attribution.** Remplacée par ce que la ressemblance rapporte,
   puis par la formule de partage.

## Trajectoire nouvelle, delta par paragraphe

- `lead[0]` — le phénomène observable et le paradoxe. Inchangé.
- `lead[1]` — qui pose le problème, l'explication spontanée, son écartement. Inchangé.

**S1, « Une ressemblance que la concurrence n'explique pas » (4 §)**

- P1 : la sélection par le marché n'est pas récusée, son domaine est borné (là où la concurrence
  est libre et ouverte, p. 150) ; et le moteur s'est déplacé vers l'État et les professions
  (p. 147). Nouveau : la portée exacte de l'explication écartée.
- P2 : la citation, puis ce sur quoi la théorie porte. Nouveau : elle ne dit rien des motifs des
  dirigeants, elle porte sur l'éventail des options tenues pour raisonnables (note 5, p. 149).
  Ce palier absorbe, une fois pour toutes, la proposition que l'ancien texte énonçait trois fois
  (« ils ne sont ni paresseux ni de mauvaise foi »).
- P3 : le nom, la définition empruntée comme processus contraignant, le piège du français, et
  l'opposition compétitif / institutionnel (translation_notes ; p. 149-150). Nouveau : le concept
  désigne une force, pas un état.
- P4 : le seuil de diffusion et sa marque observable (p. 148 ; Zucker & Tolbert et Marshall Meyer
  rapportés p. 149). Nouveau : la même pratique change de raison d'être adoptée, et la
  corrélation aux besoins locaux s'affaisse. Les travaux cités sont donnés comme ce dont
  l'article se sert, jamais comme vérifiés.

**S2, « La contrainte, quand une organisation en dépend d'une autre » (2 §)**

- P1 : la dépendance impose des gabarits, et la pression n'est pas nécessairement juridique
  (force, persuasion, invitation à s'entendre, p. 150-151). Nouveau : le registre réel du
  mécanisme.
- P2 : les deux cas documentés (associations de quartier, écoles alternatives) et la règle
  générale du rôle formellement défini (p. 151). Nouveau : le mécanisme atteint celles qui
  refusent la forme par principe. L'association inventée de l'ancien S2.P1 a été remplacée par
  ces cas, plus probants.

**S3, « Prendre modèle n'est pas imiter » (2 §)**

- P1 : l'antécédent est l'incertitude ; le terme est la prise pour modèle ; le modèle peut
  ignorer qu'il est copié ; les vecteurs (p. 151). Nouveau : la distinction, énoncée une seule
  fois, avec le fait qui la prouve.
- P2 : pourquoi la reprise converge, en trois raisons (peu de variation disponible ; petit
  ensemble de cabinets ; biais de visibilité, p. 151-152), puis la station de télévision publique
  (p. 152). Nouveau : le texte affirmait la convergence, il l'explique désormais.

**S4, « La professionnalisation, une norme qui voyage » (2 §)**

- P1 : ce que professionnalisation veut dire ici (Larson, Collins, p. 152), les deux vecteurs, et
  l'opérateur concret, le filtrage du recrutement, avec son résultat (p. 152-153). Nouveau : un
  mécanisme, pas une illustration.
- P2 : la condition interne, qui peut inverser l'effet (p. 153). Nouveau : la socialisation sur
  le tas différencie, seule la socialisation inter-organisationnelle homogénéise. Remplace
  l'ancien S4.P2, qui redisait S4.P1.

**S5, « Le champ, l'espace où la comparaison s'impose » (2 §)**

- P1 : la définition exacte, et le fait que le périmètre ne se décrète pas (p. 148). Nouveau, et
  correctif d'un contresens répertorié.
- P2 : les quatre composants nommés de la structuration et l'horloge du champ (p. 148). Nouveau :
  les quatre composants, dont un seul survivait avant.

**S6, « Une ressemblance qui ne mesure pas l'efficacité » (3 §)**

- P1 : aucun des mécanismes ne passe par une preuve d'efficacité, et pourtant la ressemblance est
  récompensée, en transactions, en recrutement, en réputation, en éligibilité (p. 153-154).
  Nouveau : la nuance qui interdit la lecture « pathologie ».
- P2 : le paradoxe d'agrégation et la paraphrase de Schelling (p. 148-149). Nouveau : un
  changement d'échelle, l'ensemble peut être déraisonnable sans qu'aucun acteur le soit.
- P3 : la typologie est analytique, l'article ne teste rien (p. 150, p. 154) ; puis la réception,
  Mizruchi & Fein 1999 sur le résumé d'auteurs et Beckert 2010 sur la divergence. Nouveau : une
  sortie avec tension et deux pistes nommées. Le texte ne se referme plus sur sa première phrase.

Aucun paragraphe consécutif ne partage son delta. Aucune section ne reprend principalement le
travail d'une autre.

## `limits`

Réécrit pour nommer, à chaque fois, la source, son état d'accès et l'affirmation qu'il interdit :
traduction interne et absence de rendu français publié des trois mécanismes ; chapitre de 1991
connu par sa notice seule et pagination de 1983 pour tout le reste ; Mizruchi & Fein atteint par
le seul résumé d'auteurs, Boxenbaum & Jonsson connu par le compte qu'en rend Thornton, et la
liste nominative des sources en métadonnées seules ; enfin les travaux empiriques rapportés de
seconde main et la raison pour laquelle Weber n'est pas introduit. Le champ reste interne :
rien de son contenu n'apparaît dans `lead` ni dans `sections`, et aucun bloc visible ne reprend
le registre des lacunes.

Longueur : 266 mots, au-dessus de la fourchette indicative de 100-200. C'est le coût de la
demande de l'audit, qui reprochait à la version précédente de tenir ses réserves sans nommer
leurs sources ni leur état d'accès.

## Conséquence pour la suite

Le texte a changé : tout fact-check antérieur est invalidé et le cycle doit reprendre à
`PREPARE`. Aucun support n'a été fabriqué, aucun `SUP-...` n'a été écrit, aucun artefact de
fact-check n'a été touché. Cette réécriture ne se valide pas elle-même.
