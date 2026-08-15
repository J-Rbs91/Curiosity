import type { Concept } from "@/types";

export const concepts: Concept[] = [
  // ---------------------------------------------------------------------
  // WEBER
  // ---------------------------------------------------------------------
  {
    id: "bureaucratie",
    slug: "bureaucratie",
    title: "Bureaucratie",
    hookQuestion:
      "Pourquoi une organisation fondée sur des règles impersonnelles est-elle, pour Weber, la forme la plus efficace de coordination collective, alors que le mot « bureaucratie » évoque aujourd'hui la lenteur et la paperasse ?",
    shortExplanation:
      "Pour Max Weber, la bureaucratie est un type d'organisation fondé sur des règles écrites, une hiérarchie claire des fonctions et des agents recrutés sur leurs compétences. Elle vise à remplacer l'arbitraire personnel par un traitement prévisible et égal des cas.",
    detailedExplanation:
      "Weber définit la bureaucratie par un ensemble de traits : division du travail selon des compétences définies, hiérarchie des postes, règles écrites et impersonnelles, séparation entre la fonction et la personne qui l'occupe, recrutement et avancement fondés sur la compétence plutôt que sur des liens personnels. Ce modèle s'oppose aux formes de domination traditionnelle ou charismatique, où l'exercice du pouvoir dépend de la personne du chef. L'intérêt de la bureaucratie, selon Weber, est sa capacité à traiter un grand nombre de cas de façon prévisible, rapide et sans favoritisme : c'est un idéal-type de rationalité organisationnelle, pas une description exacte d'une administration précise. Weber reste cependant lucide sur le prix de cette rationalisation : il l'a comparée à une « cage d'acier » qui, en réduisant l'arbitraire, peut aussi enfermer les individus dans un fonctionnement rigide et déshumanisé.",
    authors: ["weber"],
    themes: ["bureaucratie-regles", "autorite-domination"],
    relatedConcepts: [
      "autorite-rationnelle-legale",
      "regles-formelles",
      "rationalisation",
      "dysfonctions-bureaucratiques",
    ],
    oppositeConcepts: [],
    prerequisites: [],
    deepensInto: ["dysfonctions-bureaucratiques", "cercle-vicieux-bureaucratique"],
    concreteExample:
      "Une préfecture traite chaque année des milliers de demandes de titres de séjour selon une même procédure écrite, quel que soit l'agent qui instruit le dossier. Un usager peut en théorie prévoir les pièces à fournir et les délais, indépendamment de qui le reçoit au guichet. Ce traitement standardisé illustre l'idéal bureaucratique wébérien : l'égalité de traitement par la règle, plutôt que par la relation personnelle avec un fonctionnaire donné.",
    analysisQuestions: [
      "Quel mécanisme permet à la bureaucratie de traiter équitablement des milliers de cas individuels sans connaître personnellement chaque usager ?",
      "Dans quelle situation l'impersonnalité qui fait la force de la bureaucratie peut-elle devenir un obstacle au bon traitement d'un cas particulier ?",
    ],
    quiz: [
      {
        id: "bureaucratie-q1",
        type: "mcq",
        prompt:
          "Selon Weber, qu'est-ce qui caractérise fondamentalement l'autorité au sein d'une bureaucratie ?",
        choices: [
          "Elle repose sur la personnalité charismatique du chef",
          "Elle repose sur des règles écrites et impersonnelles, liées à la fonction occupée",
          "Elle repose sur la coutume et la tradition héritée",
          "Elle repose sur la négociation informelle entre collègues",
        ],
        correctAnswer: "1",
        explanation:
          "Pour Weber, l'autorité bureaucratique est rationnelle-légale : elle est attachée à la fonction définie par des règles écrites, et non à la personne qui l'occupe à un instant donné.",
      },
      {
        id: "bureaucratie-q2",
        type: "true-false",
        prompt:
          "Pour Weber, la bureaucratie est un idéal-type, c'est-à-dire une construction analytique et non une description exacte d'une administration réelle.",
        correctAnswer: "true",
        explanation:
          "Weber construit la bureaucratie comme un idéal-type : un modèle théorique épuré qui sert d'outil de comparaison, sans prétendre décrire fidèlement chaque organisation concrète.",
      },
    ],
    difficulty: 1,
    sources: [
      { label: "Weber, Économie et société", kind: "primary" },
      {
        label: "La bureaucratie comme idéal-type wébérien",
        kind: "pedagogical-interpretation",
      },
    ],
  },
  {
    id: "rationalisation",
    slug: "rationalisation",
    title: "Rationalisation",
    hookQuestion:
      "Pourquoi Weber voit-il dans la montée des calculs, des procédures et des règles écrites un mouvement de fond des sociétés modernes, bien au-delà des seules entreprises ?",
    shortExplanation:
      "La rationalisation désigne, chez Weber, le processus historique par lequel les sociétés occidentales substituent progressivement au sentiment, à la tradition et à la croyance des modes d'action fondés sur le calcul, la prévisibilité et des règles explicites.",
    detailedExplanation:
      "Weber observe que la modernité occidentale se caractérise par une extension continue de la rationalité en finalité : on cherche des moyens efficaces et calculables pour atteindre des buts, dans l'économie, le droit, la science comme dans l'administration. La bureaucratie est l'expression organisationnelle la plus aboutie de ce mouvement : elle remplace l'arbitraire personnel par des procédures écrites et standardisées. Ce processus a des effets positifs, en accroissant la prévisibilité et l'efficacité des organisations, mais Weber y voit aussi un risque : celui d'un monde « désenchanté » où le calcul rationnel finit par contraindre les individus eux-mêmes, au point de leur retirer une part de leur liberté d'action. La rationalisation n'est donc pas un simple progrès technique neutre : elle transforme en profondeur les rapports sociaux et le sens que les acteurs donnent à leur action.",
    authors: ["weber"],
    themes: ["bureaucratie-regles"],
    relatedConcepts: ["bureaucratie", "autorite-rationnelle-legale", "regles-formelles"],
    prerequisites: [],
    deepensInto: ["bureaucratie"],
    concreteExample:
      "Un hôpital qui remplace l'appréciation individuelle des médecins par des protocoles de soins standardisés, validés par des études cliniques, illustre la rationalisation : les décisions reposent moins sur l'intuition d'un praticien que sur des procédures calculables et reproductibles. Cela améliore la sécurité des soins, mais peut aussi être vécu par certains soignants comme une perte d'autonomie professionnelle.",
    analysisQuestions: [
      "Quel mécanisme fait de la rationalisation à la fois un facteur d'efficacité et un facteur potentiel de perte de sens pour les individus ?",
    ],
    quiz: [
      {
        id: "rationalisation-q1",
        type: "mcq",
        prompt: "Le concept weberien de rationalisation désigne avant tout :",
        choices: [
          "L'augmentation des salaires dans les administrations",
          "L'extension du calcul, de la prévisibilité et des règles explicites dans l'organisation sociale",
          "La disparition de toute forme de hiérarchie",
          "Le remplacement des humains par des machines",
        ],
        correctAnswer: "1",
        explanation:
          "La rationalisation, pour Weber, est un mouvement de fond des sociétés modernes vers le calcul, la prévisibilité et l'explicitation des règles, dont la bureaucratie est l'une des expressions organisationnelles.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Weber, Économie et société", kind: "primary" }],
  },
  {
    id: "autorite-rationnelle-legale",
    slug: "autorite-rationnelle-legale",
    title: "Autorité rationnelle-légale",
    hookQuestion:
      "Pourquoi obéissez-vous aux instructions de votre supérieur hiérarchique même si vous ne le respectez pas personnellement, et même s'il n'a aucun lien de parenté ou de charisme particulier ?",
    shortExplanation:
      "L'autorité rationnelle-légale est, chez Weber, une forme de domination légitime fondée sur la croyance en la validité de règles édictées légalement et sur le droit de ceux qui exercent l'autorité en vertu de ces règles à donner des ordres.",
    detailedExplanation:
      "Weber distingue trois types purs de domination légitime : traditionnelle, charismatique et rationnelle-légale. Dans l'autorité rationnelle-légale, l'obéissance ne va pas à une personne mais à une fonction définie par des règles impersonnelles : on obéit au « poste » de directeur, pas à l'individu qui l'occupe. Cette forme d'autorité est la base de la bureaucratie moderne : elle permet à l'organisation de fonctionner indépendamment des qualités personnelles de ses dirigeants, et de survivre au départ ou au remplacement de n'importe quel titulaire de fonction. Sa force est sa stabilité et sa prévisibilité ; sa limite est qu'elle peut sembler froide ou dénuée de sens pour les acteurs, comparée à l'engagement suscité par une autorité charismatique.",
    authors: ["weber"],
    themes: ["autorite-domination"],
    relatedConcepts: ["autorite-traditionnelle", "autorite-charismatique", "bureaucratie"],
    oppositeConcepts: ["autorite-traditionnelle", "autorite-charismatique"],
    prerequisites: [],
    concreteExample:
      "Dans une grande entreprise, un nouveau directeur financier arrivé de l'extérieur voit ses décisions appliquées dès sa prise de fonction, non parce que les équipes le connaissent ou l'admirent, mais parce que son autorité est attachée au poste qu'il occupe dans l'organigramme. Si un autre cadre occupait ce poste, l'obéissance à la fonction resterait la même.",
    analysisQuestions: [
      "Quel mécanisme explique qu'une organisation fondée sur l'autorité rationnelle-légale puisse continuer à fonctionner sans rupture lors du départ d'un dirigeant ?",
    ],
    quiz: [
      {
        id: "autorite-rationnelle-legale-q1",
        type: "mcq",
        prompt: "Dans l'autorité rationnelle-légale telle que définie par Weber, on obéit :",
        choices: [
          "À une personne en raison de ses qualités exceptionnelles",
          "À une personne en raison de la coutume et des usages hérités",
          "À une fonction définie par des règles impersonnelles, quelle que soit la personne qui l'occupe",
          "À un chef parce qu'il appartient à une lignée reconnue",
        ],
        correctAnswer: "2",
        explanation:
          "L'autorité rationnelle-légale attache la légitimité à la fonction et aux règles qui la définissent, et non à la personne — contrairement aux autorités traditionnelle et charismatique.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Weber, Économie et société", kind: "primary" }],
  },
  {
    id: "autorite-traditionnelle",
    slug: "autorite-traditionnelle",
    title: "Autorité traditionnelle",
    hookQuestion:
      "Pourquoi certains chefs d'entreprise familiale ou certains monarques sont-ils obéis simplement parce que « cela a toujours été ainsi » ?",
    shortExplanation:
      "L'autorité traditionnelle est, chez Weber, une forme de domination légitime fondée sur la croyance au caractère sacré ou immémorial des coutumes et sur le statut des personnes appelées à exercer l'autorité en vertu de cette tradition.",
    detailedExplanation:
      "Dans ce type de domination, la légitimité de l'ordre donné ne repose ni sur une règle écrite rationnelle, ni sur les qualités exceptionnelles d'une personne, mais sur le respect de pratiques et de statuts hérités du passé. Le chef traditionnel (patriarche, monarque, aîné) est obéi parce que sa position correspond à un ordre coutumier considéré comme allant de soi. Ce type d'autorité peut coexister avec des formes d'organisation modernes, par exemple dans une entreprise familiale où la direction se transmet de génération en génération indépendamment des compétences managériales objectives des héritiers. Weber la présente comme historiquement antérieure à l'autorité rationnelle-légale, mais elle demeure présente dans certains contextes organisationnels contemporains.",
    authors: ["weber"],
    themes: ["autorite-domination"],
    relatedConcepts: ["autorite-rationnelle-legale", "autorite-charismatique"],
    oppositeConcepts: ["autorite-rationnelle-legale"],
    prerequisites: [],
    concreteExample:
      "Dans une entreprise familiale de troisième génération, le fils du dirigeant reprend la direction générale à la retraite de son père, sans appel à candidatures ni évaluation formelle des compétences des autres cadres. Les salariés acceptent cette succession parce qu'elle correspond à l'usage établi depuis la fondation de l'entreprise.",
    analysisQuestions: [
      "Dans quelle situation l'autorité traditionnelle peut-elle entrer en tension avec les critères de compétence valorisés par l'autorité rationnelle-légale ?",
    ],
    quiz: [
      {
        id: "autorite-traditionnelle-q1",
        type: "true-false",
        prompt:
          "L'autorité traditionnelle, chez Weber, tire sa légitimité de règles écrites récemment édictées.",
        correctAnswer: "false",
        explanation:
          "Au contraire, l'autorité traditionnelle tire sa légitimité du caractère coutumier et hérité des pratiques, et non de règles écrites rationnelles — c'est ce qui la distingue de l'autorité rationnelle-légale.",
      },
      {
        id: "autorite-traditionnelle-q2",
        type: "mcq",
        prompt: "Sur quoi repose la légitimité de l'autorité traditionnelle selon Weber ?",
        choices: [
          "Sur des règles écrites et impersonnelles",
          "Sur les qualités exceptionnelles reconnues à une personne",
          "Sur le caractère sacré ou immémorial des coutumes et des statuts hérités",
          "Sur un vote démocratique régulier",
        ],
        correctAnswer: "2",
        explanation:
          "L'autorité traditionnelle tire sa légitimité du respect de pratiques et de statuts hérités du passé, considérés comme allant de soi — à la différence de l'autorité rationnelle-légale ou charismatique.",
      },
    ],
    difficulty: 1,
    sources: [{ label: "Weber, Économie et société", kind: "primary" }],
  },
  {
    id: "autorite-charismatique",
    slug: "autorite-charismatique",
    title: "Autorité charismatique",
    hookQuestion:
      "Pourquoi certains fondateurs d'entreprise ou dirigeants politiques parviennent-ils à mobiliser des foules alors même qu'ils ne s'appuient ni sur une règle écrite ni sur la tradition ?",
    shortExplanation:
      "L'autorité charismatique est, chez Weber, une forme de domination légitime fondée sur la croyance en des qualités exceptionnelles, voire exemplaires ou héroïques, attribuées à une personne.",
    detailedExplanation:
      "Contrairement à l'autorité rationnelle-légale ou traditionnelle, l'autorité charismatique repose sur la personne elle-même : ses partisans lui reconnaissent des qualités hors du commun (vision, courage, don) qui justifient qu'on la suive. Cette forme d'autorité est par nature instable : elle dépend de la capacité du leader à maintenir la croyance en son charisme, et pose la question difficile de sa succession, que Weber appelle la « routinisation du charisme » — le charisme initial se transformant souvent, après le départ du fondateur, en autorité traditionnelle ou rationnelle-légale pour assurer la continuité de l'organisation. Dans les organisations contemporaines, on retrouve des traces de ce type d'autorité chez certains fondateurs d'entreprise dont la vision personnelle structure durablement la culture organisationnelle.",
    authors: ["weber"],
    themes: ["autorite-domination"],
    relatedConcepts: ["autorite-rationnelle-legale", "autorite-traditionnelle"],
    oppositeConcepts: ["autorite-rationnelle-legale"],
    prerequisites: [],
    concreteExample:
      "Le fondateur d'une start-up mobilise ses équipes autour d'une vision personnelle forte, sans que cette adhésion repose sur un règlement intérieur détaillé : les salariés suivent son intuition stratégique parce qu'ils lui reconnaissent une capacité exceptionnelle à anticiper le marché. Le jour où il quitte l'entreprise, celle-ci doit se doter de procédures plus formelles pour continuer à fonctionner : c'est la routinisation du charisme.",
    analysisQuestions: [
      "Quel mécanisme explique la fragilité particulière de l'autorité charismatique après le départ ou la disparition du leader qui l'incarne ?",
    ],
    quiz: [
      {
        id: "autorite-charismatique-q1",
        type: "mcq",
        prompt:
          "Que désigne Weber par « routinisation du charisme » ?",
        choices: [
          "La transformation progressive de l'autorité charismatique en autorité traditionnelle ou rationnelle-légale pour assurer la continuité de l'organisation",
          "La disparition pure et simple de toute autorité après le départ du leader",
          "Le remplacement systématique du leader par un vote démocratique",
          "L'automatisation des tâches administratives autrefois réalisées par le leader",
        ],
        correctAnswer: "0",
        explanation:
          "La routinisation du charisme désigne le processus par lequel l'autorité personnelle et exceptionnelle d'un leader charismatique se stabilise, après son départ, sous forme de règles ou de traditions permettant à l'organisation de perdurer.",
      },
    ],
    difficulty: 1,
    sources: [{ label: "Weber, Économie et société", kind: "primary" }],
  },
  {
    id: "regles-formelles",
    slug: "regles-formelles",
    title: "Règles formelles",
    hookQuestion:
      "Pourquoi une organisation a-t-elle besoin d'écrire ses procédures noir sur blanc plutôt que de laisser chacun agir selon son bon sens ?",
    shortExplanation:
      "Les règles formelles sont les normes écrites et explicites (procédures, règlements, fiches de poste) qui définissent officiellement comment une organisation doit fonctionner, indépendamment des personnes qui l'animent.",
    detailedExplanation:
      "Les règles formelles constituent le squelette officiel de l'organisation wébérienne : elles précisent qui fait quoi, selon quelles modalités, avec quels contrôles. Leur fonction est de rendre le fonctionnement organisationnel prévisible, transférable d'une personne à l'autre et contrôlable a posteriori. Mais les règles formelles ne couvrent jamais la totalité des situations concrètes rencontrées par les acteurs : des zones grises subsistent toujours, que les acteurs comblent par des arrangements informels. C'est précisément ce décalage entre la règle écrite et son application concrète qu'étudieront plus tard des sociologues comme Crozier et Friedberg, qui montrent que l'écart entre organisation formelle et organisation réelle est structurel et non accidentel.",
    authors: ["weber"],
    themes: ["bureaucratie-regles"],
    relatedConcepts: [
      "bureaucratie",
      "ritualisme-bureaucratique",
      "deplacement-des-buts",
      "systeme-d-action-concret",
    ],
    prerequisites: ["bureaucratie"],
    deepensInto: ["dysfonctions-bureaucratiques"],
    concreteExample:
      "Le règlement intérieur d'un hôpital précise la procédure exacte à suivre pour administrer un médicament, du contrôle de l'ordonnance jusqu'à la traçabilité de l'acte. Cette règle formelle vise à sécuriser le patient et l'établissement, mais dans l'urgence, les soignants adaptent parfois l'ordre des étapes sans que cela apparaisse dans les documents officiels.",
    analysisQuestions: [
      "Quel mécanisme fait que des règles formelles, même très détaillées, ne peuvent jamais anticiper toutes les situations rencontrées sur le terrain ?",
    ],
    quiz: [
      {
        id: "regles-formelles-q1",
        type: "true-false",
        prompt:
          "Les règles formelles d'une organisation couvrent en général la totalité des situations concrètes que ses membres rencontrent au quotidien.",
        correctAnswer: "false",
        explanation:
          "Les règles formelles laissent toujours des zones d'incertitude que les acteurs comblent par des pratiques informelles, ce qui explique l'écart durable entre organisation formelle et organisation réelle.",
      },
      {
        id: "regles-formelles-q2",
        type: "mcq",
        prompt: "Quelle est la fonction principale des règles formelles dans une organisation ?",
        choices: [
          "Rendre le fonctionnement prévisible, transférable et contrôlable, indépendamment des personnes",
          "Remplacer entièrement le jugement des acteurs dans toutes les situations",
          "Empêcher toute forme de coopération informelle",
          "Garantir automatiquement l'adhésion des employés aux objectifs de l'organisation",
        ],
        correctAnswer: "0",
        explanation:
          "Les règles formelles visent à rendre le fonctionnement organisationnel prévisible et indépendant des personnes qui occupent les postes, même si elles ne couvrent jamais toutes les situations concrètes.",
      },
    ],
    difficulty: 1,
    sources: [{ label: "Weber, Économie et société", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // MERTON
  // ---------------------------------------------------------------------
  {
    id: "fonctions-manifestes",
    slug: "fonctions-manifestes",
    title: "Fonctions manifestes",
    hookQuestion:
      "Quand une organisation instaure une nouvelle règle, l'effet qu'elle en attend officiellement est-il toujours celui qui se produit réellement ?",
    shortExplanation:
      "Les fonctions manifestes sont, chez Merton, les conséquences objectives d'une institution ou d'une règle qui sont voulues et reconnues par les acteurs concernés — c'est l'effet affiché, l'objectif officiel.",
    detailedExplanation:
      "Merton introduit cette notion pour distinguer ce qu'une institution est censée produire (sa fonction officielle, revendiquée) de ce qu'elle produit réellement, y compris des effets non voulus. La fonction manifeste d'un contrôle qualité est, par exemple, d'améliorer la fiabilité d'un produit ou d'un service. Cette distinction est un outil analytique puissant : elle empêche de réduire l'analyse d'une règle à son seul objectif affiché, et invite à chercher systématiquement les effets non annoncés — les fonctions latentes — qui peuvent parfois contredire ou déborder la fonction manifeste. Merton s'inscrit ainsi dans une sociologie fonctionnaliste attentive aux effets réels des institutions, plutôt qu'à leurs seules intentions.",
    authors: ["merton"],
    themes: ["comportements-organisationnels"],
    relatedConcepts: ["fonctions-latentes"],
    oppositeConcepts: ["fonctions-latentes"],
    prerequisites: [],
    deepensInto: ["fonctions-latentes"],
    concreteExample:
      "La fonction manifeste d'une évaluation annuelle des salariés est d'objectiver la performance individuelle pour orienter les décisions de promotion et de formation. C'est l'objectif officiellement communiqué par la direction des ressources humaines.",
    analysisQuestions: [
      "Comment reconnaître, face à une règle organisationnelle, la fonction manifeste qui lui est officiellement attribuée ?",
    ],
    quiz: [
      {
        id: "fonctions-manifestes-q1",
        type: "mcq",
        prompt: "La fonction manifeste d'une institution correspond à :",
        choices: [
          "Un effet caché et non voulu",
          "L'effet officiellement voulu et reconnu par les acteurs",
          "Un dysfonctionnement systématique",
          "Une conséquence purement symbolique sans effet réel",
        ],
        correctAnswer: "1",
        explanation:
          "La fonction manifeste est, par définition chez Merton, l'effet voulu et reconnu, l'objectif affiché d'une institution ou d'une règle — à l'inverse de la fonction latente, non voulue et souvent non perçue.",
      },
    ],
    difficulty: 1,
    sources: [{ label: "Merton, Éléments de théorie et de méthode sociologique", kind: "primary" }],
  },
  {
    id: "fonctions-latentes",
    slug: "fonctions-latentes",
    title: "Fonctions latentes",
    hookQuestion:
      "Une règle peut-elle produire des effets réels et importants que personne n'avait prévus ni même remarqués ?",
    shortExplanation:
      "Les fonctions latentes sont, chez Merton, les conséquences objectives d'une institution ou d'une règle qui ne sont ni voulues ni reconnues par les acteurs — des effets réels mais non intentionnels.",
    detailedExplanation:
      "Merton insiste sur le fait que les institutions produisent presque toujours des effets qui débordent leur objectif affiché. Ces effets latents peuvent être positifs, négatifs, ou simplement neutres, mais leur point commun est de ne pas être perçus comme des buts poursuivis par les acteurs. Repérer les fonctions latentes d'une organisation est un exercice sociologique essentiel, car ce sont souvent elles qui expliquent la persistance de pratiques en apparence absurdes ou inefficaces : une règle peut survivre non pas malgré ses effets pervers, mais grâce à une fonction latente utile à certains acteurs, alors même que sa fonction manifeste a cessé d'être pertinente.",
    authors: ["merton"],
    themes: ["comportements-organisationnels"],
    relatedConcepts: ["fonctions-manifestes", "dysfonctions-bureaucratiques"],
    oppositeConcepts: ["fonctions-manifestes"],
    prerequisites: ["fonctions-manifestes"],
    concreteExample:
      "Au-delà de sa fonction manifeste d'évaluation de la performance, l'entretien annuel remplit une fonction latente : il constitue souvent le seul moment institutionnalisé d'échange direct et prolongé entre un salarié et son responsable, ce qui contribue à la régulation informelle des tensions dans l'équipe — un effet que personne n'a explicitement conçu comme objectif de l'entretien.",
    analysisQuestions: [
      "Quel mécanisme explique qu'une règle organisationnelle puisse perdurer grâce à une fonction latente, alors même que sa fonction manifeste est jugée inefficace ?",
    ],
    quiz: [
      {
        id: "fonctions-latentes-q1",
        type: "true-false",
        prompt:
          "Une fonction latente est un effet d'une institution qui est voulu mais tenu secret par la direction.",
        correctAnswer: "false",
        explanation:
          "Une fonction latente n'est pas un effet caché intentionnellement : elle n'est ni voulue ni consciemment reconnue par les acteurs, ce qui la distingue d'un simple secret organisationnel.",
      },
      {
        id: "fonctions-latentes-q2",
        type: "mcq",
        prompt: "Laquelle de ces situations illustre le mieux une fonction latente ?",
        choices: [
          "Un contrôle qualité qui améliore effectivement, comme prévu, la fiabilité d'un produit",
          "Un entretien annuel officiellement destiné à évaluer la performance, qui devient aussi le seul moment d'échange direct entre un salarié et son responsable",
          "Une formation qui atteint exactement l'objectif pédagogique annoncé",
          "Une réunion dont l'ordre du jour est entièrement respecté",
        ],
        correctAnswer: "1",
        explanation:
          "L'effet de régulation informelle des tensions produit par l'entretien annuel n'est ni voulu ni annoncé comme objectif : c'est un effet réel mais non intentionnel, donc une fonction latente.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Merton, Éléments de théorie et de méthode sociologique", kind: "primary" }],
  },
  {
    id: "dysfonctions-bureaucratiques",
    slug: "dysfonctions-bureaucratiques",
    title: "Dysfonctions bureaucratiques",
    hookQuestion:
      "Comment une organisation peut-elle devenir moins efficace précisément à cause des règles conçues pour la rendre plus efficace ?",
    shortExplanation:
      "Les dysfonctions bureaucratiques sont, pour Merton, les effets négatifs non voulus qui découlent du fonctionnement même de la bureaucratie, lorsque la discipline aux règles se retourne contre les objectifs qu'elle devait servir.",
    detailedExplanation:
      "Merton part du modèle wébérien de la bureaucratie efficace, mais montre que les mêmes mécanismes qui en font la force (discipline, conformité aux règles, dépersonnalisation) peuvent produire, dans certaines conditions, des effets contraires aux buts poursuivis. La discipline, utile pour garantir la fiabilité, peut se transformer en rigidité incapable de s'adapter à des situations nouvelles ; la conformité aux procédures peut devenir un réflexe déconnecté des finalités initiales. Merton parle d'une « personnalité bureaucratique » façonnée par cette discipline excessive : l'agent bureaucratique, formé à appliquer la règle avec constance, en vient parfois à l'appliquer même quand elle ne sert plus, ou nuit, à l'objectif qu'elle devait atteindre. Ce constat n'est pas un rejet de la bureaucratie wébérienne, mais un approfondissement critique de ses limites concrètes.",
    authors: ["merton"],
    themes: ["bureaucratie-regles"],
    relatedConcepts: [
      "bureaucratie",
      "deplacement-des-buts",
      "ritualisme-bureaucratique",
      "cercle-vicieux-bureaucratique",
    ],
    prerequisites: ["bureaucratie"],
    deepensInto: ["deplacement-des-buts", "cercle-vicieux-bureaucratique"],
    concreteExample:
      "Une administration impose un formulaire détaillé pour toute demande de subvention, afin de garantir l'équité de traitement. Avec le temps, les agents en viennent à rejeter systématiquement tout dossier présentant la moindre irrégularité formelle, même mineure, alors que l'objectif initial était de soutenir des projets légitimes : la rigueur procédurale finit par nuire à la mission de soutien qu'elle devait servir.",
    analysisQuestions: [
      "Quel mécanisme transforme un trait organisationnel utile (la discipline aux règles) en dysfonction qui nuit aux objectifs de l'organisation ?",
    ],
    quiz: [
      {
        id: "dysfonctions-bureaucratiques-q1",
        type: "mcq",
        prompt:
          "Selon Merton, les dysfonctions bureaucratiques proviennent principalement de :",
        choices: [
          "L'absence totale de règles dans l'organisation",
          "Les mêmes mécanismes qui, à l'origine, rendent la bureaucratie efficace (discipline, conformité aux règles)",
          "Une insuffisance de contrôle hiérarchique",
          "Le manque de moyens financiers des administrations",
        ],
        correctAnswer: "1",
        explanation:
          "Merton montre que ce sont précisément les traits qui font la force de la bureaucratie wébérienne — discipline, conformité — qui peuvent, poussés à l'excès, produire des effets contraires aux objectifs poursuivis.",
      },
    ],
    difficulty: 2,
    sources: [
      { label: "Merton, Éléments de théorie et de méthode sociologique", kind: "primary" },
      {
        label: "Dysfonctions bureaucratiques : lecture croisée Weber-Merton",
        kind: "cross-author-comparison",
      },
    ],
  },
  {
    id: "deplacement-des-buts",
    slug: "deplacement-des-buts",
    title: "Déplacement des buts",
    hookQuestion:
      "Pourquoi une règle créée pour améliorer le travail peut-elle finir par devenir plus importante, aux yeux des agents, que le travail lui-même ?",
    shortExplanation:
      "Le déplacement des buts désigne, chez Merton, le processus par lequel le respect scrupuleux des règles et procédures devient une fin en soi, se substituant progressivement aux objectifs finaux que ces règles étaient censées servir.",
    detailedExplanation:
      "Ce mécanisme naît d'un excès d'adhérence aux règles : formés à appliquer des procédures de façon fiable, les agents bureaucratiques finissent par attacher une valeur intrinsèque au respect de la procédure, indépendamment de son utilité réelle pour atteindre le but poursuivi. La règle, moyen au départ, devient une fin. Ce déplacement est renforcé par des logiques de contrôle et d'évaluation : si la hiérarchie mesure la conformité des agents à la procédure plutôt que l'atteinte du résultat final, les agents rationnellement orientent leurs efforts vers le respect visible de la procédure, quitte à perdre de vue l'objectif initial. Ce concept a une forte parenté avec le ritualisme bureaucratique et alimente ce que Crozier appellera plus tard le cercle vicieux bureaucratique, où la prolifération des règles finit par s'auto-entretenir.",
    authors: ["merton"],
    themes: ["bureaucratie-regles", "comportements-organisationnels"],
    relatedConcepts: [
      "ritualisme-bureaucratique",
      "dysfonctions-bureaucratiques",
      "cercle-vicieux-bureaucratique",
      "single-loop-learning",
    ],
    prerequisites: ["regles-formelles"],
    deepensInto: ["cercle-vicieux-bureaucratique"],
    concreteExample:
      "Une procédure de contrôle qualité impose de remplir une fiche de vérification à chaque étape de production, dans le but d'assurer la conformité des produits. Avec le temps, certains opérateurs se concentrent sur le remplissage correct et complet de la fiche elle-même, même lorsqu'ils ont conscience d'un défaut réel non couvert par la grille de contrôle : remplir la fiche est devenu l'objectif visible, au détriment de la qualité réelle qu'elle devait garantir.",
    analysisQuestions: [
      "Quel mécanisme fait qu'un système d'évaluation centré sur le respect des procédures encourage, sans le vouloir, le déplacement des buts ?",
      "Dans quelle situation professionnelle avez-vous pu observer un moyen devenir une fin en soi ?",
    ],
    quiz: [
      {
        id: "deplacement-des-buts-q1",
        type: "mcq",
        prompt: "Le déplacement des buts se produit lorsque :",
        choices: [
          "L'organisation change officiellement sa mission",
          "Le respect de la règle, moyen au départ, devient une fin en soi qui prend le pas sur l'objectif initial",
          "Les employés refusent d'appliquer les règles existantes",
          "La direction supprime toutes les procédures de contrôle",
        ],
        correctAnswer: "1",
        explanation:
          "Le déplacement des buts désigne précisément ce glissement où le respect de la procédure devient l'objectif poursuivi par les agents, au détriment du but final que cette procédure devait initialement servir.",
      },
    ],
    difficulty: 2,
    sources: [
      { label: "Merton, Éléments de théorie et de méthode sociologique", kind: "primary" },
    ],
  },
  {
    id: "ritualisme-bureaucratique",
    slug: "ritualisme-bureaucratique",
    title: "Ritualisme bureaucratique",
    hookQuestion:
      "Peut-on appliquer une règle à la lettre tout en trahissant complètement son esprit ?",
    shortExplanation:
      "Le ritualisme bureaucratique désigne, chez Merton, une attitude où l'agent applique scrupuleusement les règles formelles sans se soucier des résultats concrets attendus, transformant la conformité procédurale en réflexe presque rituel.",
    detailedExplanation:
      "Merton emprunte le terme de ritualisme à sa typologie plus générale des modes d'adaptation individuelle : le ritualiste abandonne les buts culturels valorisés (ici, l'efficacité, la satisfaction de l'usager) tout en continuant à suivre scrupuleusement les moyens institutionnalisés (les règles). Dans une organisation, ce comportement se traduit par des agents qui appliquent la procédure au pied de la lettre, y compris lorsque cela produit des résultats absurdes ou contraires au bon sens, car l'important n'est plus le résultat mais la conformité formelle. Ce phénomène est étroitement lié au déplacement des buts, dont il constitue en quelque sorte la manifestation comportementale la plus visible chez l'agent individuel, et il fait écho aux routines défensives décrites plus tard par Argyris, qui protègent l'acteur de toute remise en cause.",
    authors: ["merton"],
    themes: ["bureaucratie-regles", "comportements-organisationnels"],
    relatedConcepts: ["deplacement-des-buts", "dysfonctions-bureaucratiques", "routines-defensives"],
    prerequisites: ["regles-formelles"],
    concreteExample:
      "Un agent d'accueil administratif refuse un dossier parce qu'une pièce jointe est agrafée au lieu d'être trombonnée, alors même que le règlement ne précise rien sur ce point et que le dossier est par ailleurs complet. Le ritualisme consiste ici à s'accrocher à une lecture rigide de la procédure, en perdant de vue l'objectif réel : traiter la demande de l'usager.",
    analysisQuestions: [
      "Comment reconnaître, dans le comportement d'un agent, le passage du respect légitime des règles au ritualisme bureaucratique ?",
    ],
    quiz: [
      {
        id: "ritualisme-bureaucratique-q1",
        type: "true-false",
        prompt:
          "Le ritualisme bureaucratique décrit un agent qui abandonne les règles formelles pour privilégier le résultat final, quel qu'en soit le moyen.",
        correctAnswer: "false",
        explanation:
          "C'est l'inverse : le ritualiste continue de suivre scrupuleusement les règles formelles, mais perd de vue les buts qu'elles étaient censées servir.",
      },
      {
        id: "ritualisme-bureaucratique-q2",
        type: "mcq",
        prompt: "Quel comportement illustre le mieux le ritualisme bureaucratique décrit par Merton ?",
        choices: [
          "Un agent qui adapte la procédure au cas par cas pour mieux servir l'usager",
          "Un agent qui refuse un dossier complet pour un détail formel mineur non prévu par le règlement",
          "Un agent qui ignore délibérément les règles en vigueur",
          "Un agent qui propose de simplifier une procédure jugée inutile",
        ],
        correctAnswer: "1",
        explanation:
          "Le ritualisme consiste à s'accrocher à une application rigide de la règle, même quand cela produit un résultat absurde ou contraire au bon sens, en perdant de vue l'objectif final que la règle devait servir.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Merton, Éléments de théorie et de méthode sociologique", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // SIMON
  // ---------------------------------------------------------------------
  {
    id: "rationalite-limitee",
    slug: "rationalite-limitee",
    title: "Rationalité limitée",
    hookQuestion:
      "Un décideur, même compétent et bien intentionné, peut-il réellement examiner toutes les options possibles avant de choisir ?",
    shortExplanation:
      "La rationalité limitée, concept forgé par Herbert Simon, décrit le fait que les décideurs ne disposent jamais d'une information complète, d'un temps illimité ni d'une capacité cognitive infinie pour évaluer toutes les solutions possibles à un problème.",
    detailedExplanation:
      "Simon s'oppose au modèle économique classique de l'homo economicus parfaitement rationnel, capable de recenser toutes les alternatives, d'en évaluer précisément les conséquences et de choisir la solution optimale. Il montre que dans la réalité, la rationalité humaine est bornée par trois types de limites : des limites cognitives (la capacité de traitement de l'information est finie), des limites informationnelles (l'information disponible est toujours partielle et coûteuse à obtenir) et des limites temporelles (une décision doit souvent être prise avant d'avoir tout examiné). Ce constat ne signifie pas que les acteurs sont irrationnels, mais qu'ils exercent une rationalité procédurale, adaptée à leurs contraintes réelles. Ce concept fonde toute une tradition de recherche sur la décision organisationnelle, reprise notamment par James March, et irrigue des notions comme le satisficing ou le modèle de la poubelle.",
    authors: ["simon"],
    themes: ["decision"],
    relatedConcepts: [
      "satisficing",
      "processus-de-decision",
      "contraintes-informationnelles",
      "garbage-can-model",
    ],
    prerequisites: [],
    deepensInto: ["satisficing", "garbage-can-model"],
    concreteExample:
      "Un directeur des achats doit choisir un fournisseur parmi une centaine de candidats potentiels référencés dans le monde entier. Faute de temps et d'information exhaustive sur chacun, il limite son examen à une dizaine de fournisseurs déjà connus de l'entreprise ou recommandés par des collègues, et choisit parmi eux : il exerce une rationalité limitée, non une rationalité absolue.",
    analysisQuestions: [
      "Quel mécanisme conduit un décideur rationnellement limité à restreindre volontairement le nombre d'options qu'il examine avant de choisir ?",
    ],
    quiz: [
      {
        id: "rationalite-limitee-q1",
        type: "mcq",
        prompt: "Le concept de rationalité limitée de Simon signifie que :",
        choices: [
          "Les décideurs sont fondamentalement irrationnels",
          "Les décideurs sont rationnels mais contraints par des limites cognitives, informationnelles et temporelles",
          "Seuls les décideurs peu formés sont limités dans leurs choix",
          "La rationalité n'existe pas dans les organisations",
        ],
        correctAnswer: "1",
        explanation:
          "Simon ne nie pas la rationalité des acteurs : il montre qu'elle s'exerce toujours sous contrainte de capacités cognitives, d'informations et de temps limités, ce qui la rend nécessairement partielle.",
      },
    ],
    difficulty: 3,
    sources: [
      { label: "Simon, Administrative Behavior", kind: "primary" },
      { label: "Simon, A Behavioral Model of Rational Choice", kind: "primary" },
    ],
  },
  {
    id: "satisficing",
    slug: "satisficing",
    title: "Satisficing (solution satisfaisante)",
    hookQuestion:
      "Pourquoi un décideur s'arrête-t-il parfois à la première solution « suffisamment bonne » plutôt que de continuer à chercher la meilleure solution possible ?",
    shortExplanation:
      "Le satisficing (contraction anglaise de « satisfy » et « suffice ») désigne, chez Simon, la stratégie de décision consistant à choisir la première option qui atteint un niveau de satisfaction jugé acceptable, plutôt que de rechercher la solution objectivement optimale.",
    detailedExplanation:
      "Face à la rationalité limitée, Simon montre que les décideurs n'optimisent pas au sens strict : ils fixent un seuil d'aspiration (un niveau de résultat jugé satisfaisant) et arrêtent leur recherche dès qu'une option atteignant ce seuil est trouvée. Ce comportement est rationnel compte tenu des coûts de recherche et d'analyse d'options supplémentaires : continuer à chercher la solution optimale peut coûter plus cher, en temps et en énergie, que le gain marginal espéré. Le satisficing explique pourquoi des organisations adoptent souvent des solutions raisonnables mais non optimales, et pourquoi le niveau d'aspiration des décideurs s'ajuste lui-même avec l'expérience, à la hausse en cas de succès répétés, à la baisse en cas d'échecs répétés.",
    authors: ["simon"],
    themes: ["decision"],
    relatedConcepts: ["rationalite-limitee", "processus-de-decision"],
    prerequisites: ["rationalite-limitee"],
    concreteExample:
      "Une famille cherchant un appartement à louer visite quelques biens correspondant à peu près à son budget et à ses critères, puis signe dès qu'un logement lui semble « convenable », sans avoir visité l'ensemble du marché disponible. Elle ne cherche pas l'appartement optimal parmi tous les biens existants, mais un appartement suffisamment satisfaisant compte tenu du temps et de l'énergie qu'elle est prête à investir dans la recherche.",
    analysisQuestions: [
      "Quel mécanisme économique justifie qu'un décideur s'arrête à une solution satisfaisante plutôt que de poursuivre la recherche de l'optimum ?",
    ],
    quiz: [
      {
        id: "satisficing-q1",
        type: "true-false",
        prompt:
          "Le satisficing consiste à choisir systématiquement la pire option disponible par manque de temps.",
        correctAnswer: "false",
        explanation:
          "Le satisficing consiste à choisir la première option atteignant un seuil de satisfaction jugé acceptable, pas la pire option : c'est une stratégie rationnelle compte tenu des coûts de recherche, non un renoncement à la qualité.",
      },
      {
        id: "satisficing-q2",
        type: "mcq",
        prompt: "Le satisficing repose sur la notion de :",
        choices: [
          "Optimum absolu, seule option jamais retenue par un décideur",
          "Seuil d'aspiration, niveau de résultat jugé satisfaisant qui arrête la recherche d'options",
          "Hasard complet dans le choix final",
          "Délégation systématique de la décision à un tiers",
        ],
        correctAnswer: "1",
        explanation:
          "Simon montre que le décideur fixe un seuil d'aspiration et arrête sa recherche dès qu'une option atteignant ce seuil est trouvée, plutôt que de chercher la solution objectivement optimale.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Simon, Administrative Behavior", kind: "primary" }],
  },
  {
    id: "processus-de-decision",
    slug: "processus-de-decision",
    title: "Processus de décision",
    hookQuestion:
      "Une décision organisationnelle est-elle un acte instantané, ou le résultat d'un processus en plusieurs étapes qui peut être analysé et compris ?",
    shortExplanation:
      "Le processus de décision désigne, chez Simon, la séquence d'étapes — identification du problème, recherche d'informations, élaboration d'options, choix, évaluation — par laquelle une organisation ou un individu aboutit à une décision.",
    detailedExplanation:
      "Simon décompose la décision en phases distinctes (souvent résumées en intelligence, conception, choix) pour montrer qu'il ne s'agit jamais d'un acte instantané et parfaitement informé, mais d'un cheminement progressif marqué par les limites de la rationalité. Cette décomposition permet d'analyser où, dans le processus, les biais et les limites cognitives interviennent : mauvaise identification du problème, recherche d'informations arrêtée trop tôt, options non envisagées faute de temps. Dans les organisations, ce processus est en outre rarement individuel : il implique plusieurs acteurs, plusieurs services, et peut se heurter à des logiques d'ambiguïté ou de désordre que March et ses collègues formaliseront plus tard avec le modèle de la poubelle.",
    authors: ["simon"],
    themes: ["decision"],
    relatedConcepts: ["rationalite-limitee", "satisficing", "garbage-can-model", "ambiguite-organisationnelle"],
    prerequisites: ["rationalite-limitee"],
    deepensInto: ["garbage-can-model"],
    concreteExample:
      "Une entreprise qui doit choisir un nouveau logiciel de gestion suit un processus en plusieurs étapes : identification du besoin par les équipes opérationnelles, recherche de solutions existantes, comparaison de quelques offres, essai limité, puis décision finale validée par la direction. À chaque étape, l'information disponible est partielle et influence fortement le choix final.",
    analysisQuestions: [
      "Quel mécanisme fait qu'une décision organisationnelle en apparence unique est en réalité le résultat d'un enchaînement de choix partiels pris à différentes étapes ?",
    ],
    quiz: [
      {
        id: "processus-de-decision-q1",
        type: "mcq",
        prompt:
          "Pourquoi Simon décompose-t-il la décision en un processus par étapes plutôt que de la traiter comme un acte instantané ?",
        choices: [
          "Pour montrer que seules les grandes entreprises prennent des décisions complexes",
          "Pour révéler à quelles étapes interviennent les limites cognitives et informationnelles du décideur",
          "Parce que les décisions organisationnelles n'ont jamais de résultat final",
          "Pour prouver que les décisions sont toujours prises par une seule personne",
        ],
        correctAnswer: "1",
        explanation:
          "En décomposant la décision en étapes, Simon peut montrer précisément où et comment la rationalité limitée intervient : mauvaise définition du problème, recherche d'informations écourtée, options non envisagées.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Simon, Administrative Behavior", kind: "primary" }],
  },
  {
    id: "contraintes-informationnelles",
    slug: "contraintes-informationnelles",
    title: "Contraintes informationnelles",
    hookQuestion:
      "Pourquoi un décideur ne dispose-t-il presque jamais de toute l'information dont il aurait besoin pour choisir la meilleure option possible ?",
    shortExplanation:
      "Les contraintes informationnelles désignent les limites, chez Simon, liées à la disponibilité, au coût et au temps nécessaires pour obtenir l'information pertinente à une décision, contribuant directement à la rationalité limitée des acteurs.",
    detailedExplanation:
      "Simon souligne que l'information n'est jamais gratuite ni instantanément disponible : la rechercher coûte du temps, de l'argent, de l'attention, et certaines informations restent tout simplement inaccessibles au moment de la décision. Ces contraintes obligent les décideurs à arbitrer entre la qualité de l'information recherchée et le coût de cette recherche, ce qui les conduit souvent à se satisfaire d'une information partielle. Dans les organisations, ces contraintes sont aggravées par la dispersion de l'information entre différents services ou niveaux hiérarchiques, chacun ne détenant qu'une partie du tableau global — un phénomène que l'on retrouve également dans l'analyse par Crozier des zones d'incertitude que certains acteurs contrôlent stratégiquement.",
    authors: ["simon"],
    themes: ["decision"],
    relatedConcepts: ["rationalite-limitee", "satisficing"],
    prerequisites: ["rationalite-limitee"],
    concreteExample:
      "Avant de lancer un nouveau produit, une entreprise commande une étude de marché, mais celle-ci ne peut interroger qu'un échantillon limité de consommateurs, dans un délai contraint par le calendrier de lancement. La décision finale de lancement s'appuie donc sur une information nécessairement partielle, jamais sur une connaissance exhaustive de la demande réelle.",
    analysisQuestions: [
      "Quel mécanisme pousse une organisation à arbitrer entre le coût de la recherche d'information et la qualité de la décision finale ?",
    ],
    quiz: [
      {
        id: "contraintes-informationnelles-q1",
        type: "true-false",
        prompt:
          "Selon Simon, l'information nécessaire à une décision est généralement disponible gratuitement et instantanément dans les organisations.",
        correctAnswer: "false",
        explanation:
          "Au contraire, Simon insiste sur le fait que l'information a un coût de recherche et d'obtention, et n'est jamais totalement disponible : c'est l'une des sources principales de la rationalité limitée.",
      },
      {
        id: "contraintes-informationnelles-q2",
        type: "mcq",
        prompt: "Les contraintes informationnelles obligent un décideur à arbitrer entre :",
        choices: [
          "Le salaire des employés et leurs congés payés",
          "La qualité de l'information recherchée et le coût de cette recherche en temps et en ressources",
          "Le nombre de réunions et leur durée",
          "La couleur des documents et leur mise en page",
        ],
        correctAnswer: "1",
        explanation:
          "Puisque l'information a un coût d'obtention, le décideur doit arbitrer entre approfondir sa recherche d'information et accepter une décision fondée sur une information nécessairement partielle.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Simon, Administrative Behavior", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // MARCH
  // ---------------------------------------------------------------------
  {
    id: "ambiguite-organisationnelle",
    slug: "ambiguite-organisationnelle",
    title: "Ambiguïté organisationnelle",
    hookQuestion:
      "Dans une organisation, les objectifs et les préférences sont-ils toujours clairs avant que l'action ne commence, ou se découvrent-ils parfois après coup ?",
    shortExplanation:
      "L'ambiguïté organisationnelle désigne, chez March, le fait que les buts, les préférences, les technologies et même la participation des acteurs à une décision sont souvent flous, changeants ou découverts a posteriori, plutôt que fixés clairement à l'avance.",
    detailedExplanation:
      "March remet en cause l'idée selon laquelle une organisation entame toujours une décision avec des objectifs clairs qu'elle chercherait ensuite à atteindre efficacement. Il montre que dans de nombreuses situations réelles, les préférences des acteurs sont instables, contradictoires ou se précisent seulement après l'action — un phénomène qu'il résume par la formule selon laquelle on découvre parfois ce qu'on voulait en observant ce qu'on a fait. Cette ambiguïté touche aussi les technologies (on ne sait pas toujours précisément comment un moyen produit un résultat) et la participation (les acteurs impliqués dans une décision varient selon leur disponibilité, non selon une logique fonctionnelle stable). Cette notion prépare directement le modèle de la poubelle, qui formalise les conséquences organisationnelles de cette ambiguïté généralisée.",
    authors: ["march"],
    themes: ["decision"],
    relatedConcepts: ["garbage-can-model", "processus-de-decision"],
    prerequisites: ["rationalite-limitee"],
    deepensInto: ["garbage-can-model"],
    concreteExample:
      "Un conseil d'administration universitaire débat d'un projet de nouveau campus sans qu'il existe un accord clair sur les objectifs prioritaires : certains membres veulent d'abord réduire les coûts, d'autres améliorer l'image de l'établissement, d'autres encore répondre à une urgence immobilière. Les priorités se clarifient progressivement au fil des réunions, parfois seulement après que certaines décisions concrètes ont déjà été prises.",
    analysisQuestions: [
      "Quel mécanisme explique que les objectifs d'une organisation puissent se révéler après l'action plutôt que la précéder ?",
    ],
    quiz: [
      {
        id: "ambiguite-organisationnelle-q1",
        type: "mcq",
        prompt: "L'ambiguïté organisationnelle chez March concerne principalement :",
        choices: [
          "Le flou des locaux physiques de l'organisation",
          "Le flou et l'instabilité des buts, préférences et participations, souvent clarifiés après coup",
          "L'absence totale de communication entre les services",
          "Le manque de personnel qualifié dans l'organisation",
        ],
        correctAnswer: "1",
        explanation:
          "March montre que dans de nombreuses organisations, les buts et les préférences ne sont pas fixés clairement avant l'action mais se précisent, voire se découvrent, au fil du processus de décision lui-même.",
      },
    ],
    difficulty: 4,
    sources: [
      { label: "March et Olsen, Ambiguity and Choice in Organizations", kind: "primary" },
    ],
  },
  {
    id: "garbage-can-model",
    slug: "garbage-can-model",
    title: "Modèle de la poubelle (garbage can model)",
    hookQuestion:
      "Une décision organisationnelle résulte-t-elle toujours d'une analyse méthodique d'un problème, ou peut-elle naître de la rencontre presque fortuite d'un problème, d'une solution déjà disponible et d'un moment propice ?",
    shortExplanation:
      "Le modèle de la poubelle, développé par Cohen, March et Olsen, décrit certaines organisations comme des systèmes où problèmes, solutions, participants et occasions de choix circulent de façon relativement indépendante, et où une décision naît souvent de leur rencontre plus ou moins fortuite.",
    detailedExplanation:
      "Ce modèle s'applique particulièrement aux organisations dites « anarchies organisées », caractérisées par des préférences ambiguës, des technologies mal comprises et une participation fluctuante des acteurs — un cas typique étant les institutions universitaires. Plutôt que de suivre un cheminement linéaire (problème identifié puis solution recherchée), la décision y résulte de la coïncidence, dans une même « occasion de choix », d'un problème disponible, d'une solution déjà en circulation (parfois cherchant un problème auquel s'appliquer), et d'acteurs disponibles au bon moment. Une solution peut ainsi précéder le problème qu'elle est censée résoudre. Ce modèle ne décrit pas toutes les décisions organisationnelles, mais il éclaire des situations réelles où l'apparente irrationalité du processus décisionnel devient compréhensible une fois qu'on abandonne l'hypothèse d'un décideur unique et parfaitement informé.",
    authors: ["march"],
    themes: ["decision"],
    relatedConcepts: ["ambiguite-organisationnelle", "processus-de-decision", "rationalite-limitee"],
    prerequisites: ["rationalite-limitee", "ambiguite-organisationnelle"],
    concreteExample:
      "Un service informatique dispose d'une nouvelle technologie de visioconférence qu'il a achetée sans projet précis. Lorsqu'un problème de coordination entre deux sites distants émerge des mois plus tard, cette solution déjà disponible est immédiatement proposée et adoptée, davantage parce qu'elle était là et que des acteurs motivés s'en sont saisis au bon moment, que parce qu'elle aurait été recherchée méthodiquement pour ce problème précis.",
    analysisQuestions: [
      "Quel mécanisme permet à une solution déjà existante de « trouver » un problème plutôt que l'inverse, dans le modèle de la poubelle ?",
      "Dans quel type d'organisation le modèle de la poubelle est-il le plus susceptible de s'appliquer, et pourquoi ?",
    ],
    quiz: [
      {
        id: "garbage-can-model-q1",
        type: "mcq",
        prompt:
          "Dans le modèle de la poubelle, une décision naît le plus souvent :",
        choices: [
          "D'une analyse rationnelle et séquentielle allant du problème à la solution optimale",
          "De la rencontre relativement indépendante et parfois fortuite de problèmes, de solutions, de participants et d'occasions de choix",
          "D'un vote formel organisé selon une procédure stricte",
          "D'une décision imposée unilatéralement par la direction générale",
        ],
        correctAnswer: "1",
        explanation:
          "Le modèle de la poubelle décrit la décision comme le produit de la rencontre, dans une occasion de choix, de flux relativement indépendants — problèmes, solutions, participants — plutôt que comme un processus linéaire et maîtrisé.",
      },
    ],
    difficulty: 4,
    sources: [
      {
        label: "Cohen, March et Olsen, A Garbage Can Model of Organizational Choice",
        kind: "primary",
      },
    ],
  },
  {
    id: "exploration-organisationnelle",
    slug: "exploration-organisationnelle",
    title: "Exploration organisationnelle",
    hookQuestion:
      "Une organisation qui consacre trop peu de temps à chercher de nouvelles idées prend-elle un risque aussi grand que celle qui n'en applique jamais aucune ?",
    shortExplanation:
      "L'exploration, chez March, désigne l'ensemble des activités organisationnelles orientées vers la recherche, l'expérimentation et l'innovation — découvrir de nouvelles possibilités plutôt que d'exploiter celles déjà connues.",
    detailedExplanation:
      "March identifie un arbitrage fondamental auquel toute organisation est confrontée entre exploration et exploitation : consacrer des ressources à chercher de nouvelles solutions, technologies ou marchés (exploration) ou à perfectionner et rentabiliser ce qui existe déjà (exploitation). L'exploration est par nature risquée et à rendement incertain et différé : elle peut ne rien produire d'utilisable, mais elle est la condition du renouvellement à long terme de l'organisation. Une organisation qui n'explore jamais s'expose à l'obsolescence face aux évolutions de son environnement, mais une organisation qui explore sans jamais exploiter ses découvertes s'épuise en expérimentations sans retour sur investissement. Ce concept est étroitement lié, dans une perspective d'apprentissage individuel et collectif, à l'apprentissage en double boucle décrit par Argyris, qui suppose lui aussi une remise en question des cadres établis.",
    authors: ["march"],
    themes: ["changement-organisationnel"],
    relatedConcepts: ["exploitation-organisationnelle", "double-loop-learning"],
    oppositeConcepts: ["exploitation-organisationnelle"],
    prerequisites: [],
    concreteExample:
      "Une entreprise de médias alloue une petite équipe et un budget dédié à tester de nouveaux formats de contenus interactifs, sans garantie de succès commercial à court terme, pendant que le reste de l'organisation continue de produire et d'optimiser ses formats habituels qui génèrent l'essentiel du chiffre d'affaires actuel.",
    analysisQuestions: [
      "Quel mécanisme explique qu'une organisation focalisée exclusivement sur l'exploitation de ses compétences actuelles finisse par perdre en capacité d'adaptation ?",
    ],
    quiz: [
      {
        id: "exploration-organisationnelle-q1",
        type: "true-false",
        prompt:
          "L'exploration organisationnelle, chez March, a généralement un rendement certain et immédiat.",
        correctAnswer: "false",
        explanation:
          "Au contraire, l'exploration est caractérisée par un rendement incertain et souvent différé dans le temps, ce qui la distingue de l'exploitation, plus prévisible mais moins porteuse de renouvellement.",
      },
      {
        id: "exploration-organisationnelle-q2",
        type: "mcq",
        prompt: "L'exploration organisationnelle, chez March, désigne principalement :",
        choices: [
          "Le perfectionnement des routines et compétences déjà maîtrisées",
          "La recherche, l'expérimentation et l'innovation vers de nouvelles possibilités",
          "La réduction systématique des effectifs",
          "Le contrôle renforcé des procédures existantes",
        ],
        correctAnswer: "1",
        explanation:
          "L'exploration regroupe les activités de recherche et d'expérimentation orientées vers la découverte de nouvelles solutions, par opposition à l'exploitation qui perfectionne l'existant.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "March, Exploration and Exploitation in Organizational Learning", kind: "primary" }],
  },
  {
    id: "exploitation-organisationnelle",
    slug: "exploitation-organisationnelle",
    title: "Exploitation organisationnelle",
    hookQuestion:
      "Pourquoi une organisation qui se concentre uniquement sur l'amélioration de ce qu'elle sait déjà faire peut-elle, à terme, se mettre en danger ?",
    shortExplanation:
      "L'exploitation, chez March, désigne les activités organisationnelles orientées vers le perfectionnement, la mise en œuvre efficace et la rentabilisation des compétences, routines et technologies déjà maîtrisées par l'organisation.",
    detailedExplanation:
      "À l'opposé de l'exploration, l'exploitation vise l'efficience à court terme : affiner des processus connus, réduire les coûts, améliorer la qualité de ce qui existe déjà. Elle produit des résultats plus rapides, plus prévisibles et moins risqués que l'exploration, ce qui explique pourquoi les organisations ont tendance, sous la pression de résultats immédiats, à privilégier l'exploitation au détriment de l'exploration — un biais que March qualifie de piège de la compétence (competency trap) : l'organisation devient très efficace dans ce qu'elle sait déjà faire, ce qui réduit d'autant son incitation et sa capacité à explorer autre chose. Trouver le bon équilibre entre exploration et exploitation est, pour March, l'un des défis centraux du management et de l'apprentissage organisationnel dans la durée.",
    authors: ["march"],
    themes: ["changement-organisationnel"],
    relatedConcepts: ["exploration-organisationnelle", "single-loop-learning"],
    oppositeConcepts: ["exploration-organisationnelle"],
    prerequisites: [],
    concreteExample:
      "Un constructeur automobile investit massivement pour optimiser la production de ses moteurs thermiques existants, améliorant année après année leur rendement énergétique. Cette exploitation efficace des compétences actuelles le rend très performant sur son marché historique, mais retarde son investissement dans des technologies de rupture comme le véhicule électrique.",
    analysisQuestions: [
      "Quel mécanisme économique pousse les organisations à privilégier l'exploitation au détriment de l'exploration, même quand cela fragilise leur avenir ?",
    ],
    quiz: [
      {
        id: "exploitation-organisationnelle-q1",
        type: "mcq",
        prompt: "Le « piège de la compétence » décrit par March désigne :",
        choices: [
          "Le fait qu'une organisation manque de compétences pour fonctionner",
          "Le fait qu'une organisation, devenue très efficace dans ce qu'elle sait déjà faire, réduit sa capacité à explorer de nouvelles solutions",
          "L'incapacité des salariés à obtenir des promotions",
          "Un excès de formation professionnelle inutile",
        ],
        correctAnswer: "1",
        explanation:
          "Le piège de la compétence désigne le fait que le succès même de l'exploitation d'une compétence maîtrisée décourage, par ses résultats rapides et prévisibles, l'investissement dans l'exploration de nouvelles solutions.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "March, Exploration and Exploitation in Organizational Learning", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // CROZIER
  // ---------------------------------------------------------------------
  {
    id: "acteur-strategique",
    slug: "acteur-strategique",
    title: "Acteur stratégique",
    hookQuestion:
      "Même dans l'organisation la plus hiérarchisée et la plus réglementée, un employé de base est-il totalement dépourvu de marge de manœuvre ?",
    shortExplanation:
      "L'acteur stratégique est, pour Crozier, tout membre d'une organisation qui, même dans un rôle subalterne et très encadré, dispose toujours d'une marge de liberté qu'il utilise activement pour poursuivre ses propres intérêts au sein du système.",
    detailedExplanation:
      "Crozier rompt avec une vision de l'organisation où les individus seraient de simples exécutants passifs des règles et de la hiérarchie. Il montre, à partir d'enquêtes de terrain, qu'aucun système organisationnel, aussi bureaucratique soit-il, ne parvient à programmer entièrement le comportement de ses membres : il subsiste toujours des zones d'incertitude, non couvertes par les règles, où l'acteur peut exercer un jugement et un choix. L'acteur stratégique n'agit pas nécessairement de façon malveillante ou déloyale envers l'organisation : il poursuit rationnellement ses intérêts (autonomie, reconnaissance, confort de travail, sécurité) compte tenu des contraintes et des ressources dont il dispose. Ce postulat fonde toute l'analyse stratégique des organisations développée ensuite avec Friedberg.",
    authors: ["crozier"],
    themes: ["pouvoir"],
    relatedConcepts: ["zones-incertitude", "strategies-d-acteurs", "relations-de-pouvoir"],
    prerequisites: [],
    deepensInto: ["zones-incertitude", "systeme-d-action-concret"],
    concreteExample:
      "Dans un atelier de maintenance industrielle très réglementé, un technicien détient une connaissance empirique des pannes fréquentes d'une machine ancienne, jamais formalisée dans les manuels officiels. Bien que son poste soit officiellement défini de façon étroite, il utilise cette connaissance comme une ressource stratégique, en dosant ce qu'il transmet à ses collègues ou à sa hiérarchie.",
    analysisQuestions: [
      "Quel mécanisme permet à un acteur, même occupant un poste très subalterne dans l'organigramme, de disposer d'une marge de liberté stratégique ?",
    ],
    quiz: [
      {
        id: "acteur-strategique-q1",
        type: "true-false",
        prompt:
          "Pour Crozier, un employé occupant un poste très encadré par des règles est totalement dépourvu de marge de manœuvre stratégique.",
        correctAnswer: "false",
        explanation:
          "Crozier montre au contraire qu'aucune règle ne parvient à programmer totalement le comportement des acteurs : il subsiste toujours des zones d'incertitude que même les postes les plus subalternes peuvent exploiter stratégiquement.",
      },
      {
        id: "acteur-strategique-q2",
        type: "mcq",
        prompt: "Pour Crozier, l'acteur stratégique poursuit rationnellement des intérêts tels que :",
        choices: [
          "L'autonomie, la reconnaissance et la sécurité, compte tenu des contraintes et ressources dont il dispose",
          "Uniquement la destruction du système organisationnel",
          "L'application aveugle et sans réflexion des ordres reçus",
          "L'abandon total de toute marge de manœuvre personnelle",
        ],
        correctAnswer: "0",
        explanation:
          "L'acteur stratégique n'agit pas par malveillance : il poursuit rationnellement des intérêts personnels (autonomie, reconnaissance, confort de travail) en tenant compte des contraintes et ressources de sa position.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Crozier, Le Phénomène bureaucratique", kind: "primary" }],
  },
  {
    id: "zones-incertitude",
    slug: "zones-incertitude",
    title: "Zones d'incertitude",
    hookQuestion:
      "Pourquoi l'agent de maintenance qui connaît seul les pannes d'une vieille machine peut-il avoir, dans les faits, plus de pouvoir que certains cadres hiérarchiques ?",
    shortExplanation:
      "Les zones d'incertitude sont, chez Crozier, les espaces d'imprévisibilité que les règles formelles ne parviennent pas à éliminer, et dont le contrôle par un acteur constitue la source principale de son pouvoir dans l'organisation.",
    detailedExplanation:
      "Aucune organisation, même la plus bureaucratisée, ne peut réduire à zéro l'incertitude qui pèse sur son fonctionnement : pannes imprévues, relations avec l'environnement extérieur, savoir-faire tacite, imprévus techniques. Crozier montre que l'acteur qui maîtrise une de ces zones d'incertitude — parce qu'il détient une compétence rare, une information stratégique ou un contrôle sur une ressource critique — acquiert un pouvoir réel sur les autres acteurs qui dépendent de cette zone, indépendamment de sa position hiérarchique officielle. Ce pouvoir n'est donc pas distribué uniquement par l'organigramme : il naît de la dépendance mutuelle entre acteurs face à l'incertitude. Cette analyse permet de comprendre pourquoi des acteurs en apparence subalternes (techniciens, secrétaires expérimentées) peuvent exercer une influence disproportionnée par rapport à leur rang officiel.",
    authors: ["crozier"],
    themes: ["pouvoir"],
    relatedConcepts: ["acteur-strategique", "relations-de-pouvoir", "systeme-d-action-concret"],
    prerequisites: ["acteur-strategique"],
    concreteExample:
      "Dans une usine, un technicien de maintenance est le seul à savoir réparer une machine ancienne essentielle à la production, faute de documentation à jour. Chaque panne le place en position de force face à ses supérieurs hiérarchiques, qui dépendent entièrement de lui pour éviter un arrêt de production coûteux : il contrôle une zone d'incertitude technique majeure.",
    analysisQuestions: [
      "Quel mécanisme transforme la maîtrise d'une zone d'incertitude technique en pouvoir réel sur des acteurs hiérarchiquement supérieurs ?",
      "Dans quelle situation une organisation pourrait-elle chercher à réduire délibérément une zone d'incertitude pour limiter le pouvoir d'un acteur qui la contrôle ?",
    ],
    quiz: [
      {
        id: "zones-incertitude-q1",
        type: "mcq",
        prompt: "Selon Crozier, la source principale du pouvoir d'un acteur dans l'organisation est :",
        choices: [
          "Sa position officielle dans l'organigramme uniquement",
          "Son ancienneté dans l'entreprise",
          "Sa maîtrise d'une zone d'incertitude dont dépendent d'autres acteurs",
          "Son niveau de diplôme initial",
        ],
        correctAnswer: "2",
        explanation:
          "Pour Crozier, le pouvoir naît du contrôle d'une zone d'incertitude pertinente pour d'autres acteurs, et non uniquement de la position hiérarchique formelle — ce qui explique des rapports de pouvoir parfois déconnectés de l'organigramme.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Crozier, Le Phénomène bureaucratique", kind: "primary" }],
  },
  {
    id: "relations-de-pouvoir",
    slug: "relations-de-pouvoir",
    title: "Relations de pouvoir",
    hookQuestion:
      "Le pouvoir dans une organisation est-il une propriété que l'on possède, ou plutôt une relation qui se joue entre des acteurs interdépendants ?",
    shortExplanation:
      "Pour Crozier, le pouvoir n'est pas un attribut fixe détenu par une personne ou un poste, mais une relation d'échange déséquilibrée entre des acteurs interdépendants, où chacun tente de faire valoir ses intérêts en s'appuyant sur les ressources dont il dispose.",
    detailedExplanation:
      "Cette conception relationnelle du pouvoir s'oppose à une vision statique où le pouvoir découlerait mécaniquement de la position dans l'organigramme. Crozier définit le pouvoir comme la capacité d'un acteur A à obtenir que l'acteur B fasse quelque chose qu'il n'aurait pas fait spontanément, en échange de la réduction d'une incertitude qui pèse sur B. Cette relation est toujours réciproque, même si elle est déséquilibrée : B garde toujours une marge de négociation, car A a lui aussi besoin, d'une manière ou d'une autre, de la coopération de B. Cette approche permet de comprendre le pouvoir non comme un donné, mais comme le produit toujours renégociable de la dépendance mutuelle des acteurs vis-à-vis de zones d'incertitude différentes qu'ils contrôlent chacun partiellement.",
    authors: ["crozier"],
    themes: ["pouvoir"],
    relatedConcepts: ["zones-incertitude", "acteur-strategique", "strategies-d-acteurs"],
    prerequisites: ["acteur-strategique"],
    concreteExample:
      "Un responsable de service dépend d'une assistante administrative expérimentée pour naviguer dans des procédures internes complexes qu'elle seule maîtrise réellement. En retour, elle dépend de lui pour ses évaluations et son évolution de carrière. Leur relation de travail quotidienne est marquée par cette interdépendance : aucun des deux n'a un pouvoir absolu sur l'autre.",
    analysisQuestions: [
      "Quel mécanisme fait que même l'acteur le plus puissant dans une relation de pouvoir reste, selon Crozier, dépendant de la coopération de l'autre ?",
    ],
    quiz: [
      {
        id: "relations-de-pouvoir-q1",
        type: "true-false",
        prompt:
          "Pour Crozier, une relation de pouvoir est toujours totalement unilatérale : celui qui détient le pouvoir n'a besoin de rien de la part de l'autre acteur.",
        correctAnswer: "false",
        explanation:
          "Crozier insiste au contraire sur la réciprocité, même déséquilibrée, de la relation de pouvoir : l'acteur qui exerce du pouvoir reste dépendant, d'une façon ou d'une autre, de la coopération de l'acteur sur lequel il l'exerce.",
      },
      {
        id: "relations-de-pouvoir-q2",
        type: "mcq",
        prompt: "Pour Crozier, le pouvoir d'un acteur A sur un acteur B se définit comme :",
        choices: [
          "La position de A dans l'organigramme officiel uniquement",
          "La capacité de A à obtenir de B un comportement qu'il n'aurait pas eu spontanément, en échange de la réduction d'une incertitude qui pèse sur B",
          "L'ancienneté de A dans l'organisation",
          "Le salaire de A comparé à celui de B",
        ],
        correctAnswer: "1",
        explanation:
          "Crozier définit le pouvoir comme une relation d'échange, toujours réciproque même si déséquilibrée, fondée sur la capacité à réduire l'incertitude qui pèse sur l'autre acteur.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Crozier, Le Phénomène bureaucratique", kind: "primary" }],
  },
  {
    id: "cercle-vicieux-bureaucratique",
    slug: "cercle-vicieux-bureaucratique",
    title: "Cercle vicieux bureaucratique",
    hookQuestion:
      "Pourquoi ajouter des règles pour corriger un dysfonctionnement organisationnel peut-il, paradoxalement, aggraver ce même dysfonctionnement ?",
    shortExplanation:
      "Le cercle vicieux bureaucratique désigne, chez Crozier, une dynamique où la prolifération de règles impersonnelles, censée réduire l'incertitude et l'arbitraire, finit par créer de nouvelles rigidités et de nouvelles zones d'incertitude, appelant encore plus de règles.",
    detailedExplanation:
      "Crozier observe que les organisations bureaucratiques, confrontées à un dysfonctionnement, ont tendance à réagir par l'ajout de règles supplémentaires plutôt que par une remise en cause du système lui-même. Or chaque nouvelle règle réduit certes une incertitude, mais en fait souvent émerger d'autres, notamment en rigidifiant encore davantage le système et en déplaçant le pouvoir vers ceux qui savent naviguer dans la complexité accrue des procédures. Ce mécanisme auto-entretenu prolonge et amplifie les dysfonctions bureaucratiques identifiées par Merton, et rejoint le déplacement des buts : plus le système se rigidifie, plus les acteurs se concentrent sur le respect formel des règles au détriment de l'efficacité réelle, ce qui appelle en retour de nouvelles règles correctrices, dans une spirale difficile à interrompre.",
    authors: ["crozier"],
    themes: ["bureaucratie-regles", "pouvoir"],
    relatedConcepts: [
      "dysfonctions-bureaucratiques",
      "deplacement-des-buts",
      "regles-formelles",
      "zones-incertitude",
    ],
    prerequisites: ["bureaucratie", "zones-incertitude"],
    concreteExample:
      "Une entreprise, constatant des retards répétés dans le traitement de certains dossiers, ajoute une étape de validation supplémentaire pour renforcer le contrôle. Cette étape crée un nouveau goulot d'étranglement et un nouveau point de dépendance envers le service désormais chargé de la valider, ce qui génère de nouveaux retards, eux-mêmes traités par l'ajout d'une nouvelle procédure de suivi.",
    analysisQuestions: [
      "Quel mécanisme explique que l'ajout de règles supplémentaires, loin de résoudre un dysfonctionnement bureaucratique, puisse en créer de nouveaux ?",
    ],
    quiz: [
      {
        id: "cercle-vicieux-bureaucratique-q1",
        type: "mcq",
        prompt: "Le cercle vicieux bureaucratique décrit chez Crozier le fait que :",
        choices: [
          "L'absence de règles conduit systématiquement au chaos organisationnel",
          "L'ajout de règles pour corriger un dysfonctionnement finit par créer de nouvelles rigidités et de nouvelles incertitudes",
          "Les employés refusent catégoriquement toute nouvelle procédure",
          "Les organisations bureaucratiques n'évoluent jamais dans le temps",
        ],
        correctAnswer: "1",
        explanation:
          "Le cercle vicieux bureaucratique décrit une dynamique auto-entretenue où chaque règle ajoutée pour corriger un problème engendre de nouvelles rigidités et de nouvelles zones d'incertitude, appelant encore de nouvelles règles.",
      },
    ],
    difficulty: 4,
    sources: [
      { label: "Crozier, Le Phénomène bureaucratique", kind: "primary" },
      {
        label: "Cercle vicieux bureaucratique : prolongement des dysfonctions mertoniennes",
        kind: "cross-author-comparison",
      },
    ],
  },
  {
    id: "strategies-d-acteurs",
    slug: "strategies-d-acteurs",
    title: "Stratégies d'acteurs",
    hookQuestion:
      "Quand un employé contourne discrètement une procédure officielle sans jamais la violer ouvertement, agit-il au hasard ou selon une logique que l'on peut analyser ?",
    shortExplanation:
      "Les stratégies d'acteurs désignent, chez Crozier, les comportements que les membres d'une organisation développent délibérément, dans la marge de liberté dont ils disposent, pour préserver ou renforcer leur position et leurs intérêts au sein du système.",
    detailedExplanation:
      "Crozier invite à analyser tout comportement organisationnel, même en apparence irrationnel ou déviant, comme potentiellement porteur d'une logique stratégique compréhensible une fois replacée dans le contexte des contraintes et des ressources de l'acteur. Une stratégie d'acteur peut consister à retenir une information, à cultiver une expertise rare, à nouer des alliances informelles, ou à s'appuyer sélectivement sur certaines règles pour se protéger. Ces stratégies ne sont pas nécessairement conscientes ou calculées dans le détail, mais elles répondent toujours, selon Crozier, à une rationalité limitée orientée vers la préservation ou l'extension de la marge de manœuvre de l'acteur. L'analyse stratégique consiste précisément à reconstituer la logique de ces comportements pour comprendre le fonctionnement réel d'une organisation, au-delà de son organigramme officiel.",
    authors: ["crozier"],
    themes: ["pouvoir"],
    relatedConcepts: ["acteur-strategique", "zones-incertitude", "relations-de-pouvoir", "systeme-d-action-concret"],
    prerequisites: ["acteur-strategique"],
    concreteExample:
      "Une responsable de service ne documente jamais entièrement une méthode de travail qu'elle a développée elle-même, bien que cela ralentisse la formation de ses collègues. Cette rétention partielle d'information constitue une stratégie d'acteur qui lui permet de rester indispensable et de préserver son influence au sein de l'équipe.",
    analysisQuestions: [
      "Comment reconnaître, derrière un comportement apparemment inefficace ou déviant, une stratégie d'acteur rationnelle au sens de Crozier ?",
    ],
    quiz: [
      {
        id: "strategies-d-acteurs-q1",
        type: "true-false",
        prompt:
          "Pour Crozier, un comportement organisationnel en apparence irrationnel est toujours simplement le fruit du hasard ou de l'incompétence.",
        correctAnswer: "false",
        explanation:
          "L'analyse stratégique de Crozier invite au contraire à chercher, derrière un comportement en apparence irrationnel, une logique stratégique cohérente compte tenu des contraintes et des intérêts de l'acteur concerné.",
      },
      {
        id: "strategies-d-acteurs-q2",
        type: "mcq",
        prompt: "Une stratégie d'acteur, au sens de Crozier, consiste par exemple à :",
        choices: [
          "Documenter systématiquement toutes ses connaissances pour ses collègues",
          "Retenir sélectivement une information ou cultiver une expertise rare pour préserver sa marge de manœuvre",
          "Suivre aveuglément toutes les règles sans jamais les interpréter",
          "Refuser toute forme de coopération avec les autres acteurs",
        ],
        correctAnswer: "1",
        explanation:
          "Les stratégies d'acteurs incluent des comportements comme la rétention sélective d'information ou la culture d'une expertise rare, qui permettent à l'acteur de préserver ou renforcer sa position dans l'organisation.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Crozier, Le Phénomène bureaucratique", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // FRIEDBERG
  // ---------------------------------------------------------------------
  {
    id: "systeme-d-action-concret",
    slug: "systeme-d-action-concret",
    title: "Système d'action concret",
    hookQuestion:
      "Comment expliquer que deux entreprises dotées du même organigramme officiel puissent fonctionner de façon très différente au quotidien ?",
    shortExplanation:
      "Le système d'action concret est, chez Crozier et Friedberg, l'ensemble des relations effectives et souvent informelles par lesquelles des acteurs interdépendants régulent concrètement leur coopération, au-delà — et parfois en décalage — de l'organisation formelle.",
    detailedExplanation:
      "Ce concept, central dans « L'Acteur et le système », désigne la réalité organisationnelle vécue, faite d'ajustements mutuels, de négociations informelles et d'arrangements locaux entre des acteurs qui poursuivent des stratégies différentes tout en devant coopérer. Le système d'action concret ne se lit pas dans l'organigramme officiel : il faut l'observer empiriquement, par l'enquête de terrain, pour comprendre comment le travail se fait réellement. Cette notion permet de dépasser l'opposition simple entre organisation formelle et désordre informel : le système d'action concret a sa propre cohérence et sa propre stabilité relative, régulée par les rapports de pouvoir entre acteurs et par leur dépendance mutuelle vis-à-vis des zones d'incertitude qu'ils contrôlent.",
    authors: ["friedberg"],
    themes: ["organisation-formelle-reelle", "pouvoir"],
    relatedConcepts: [
      "strategies-d-acteurs",
      "regulation-conjointe",
      "interdependance-des-acteurs",
      "zones-incertitude",
    ],
    prerequisites: ["acteur-strategique"],
    deepensInto: ["regulation-conjointe"],
    concreteExample:
      "Sur le papier, deux agences bancaires d'un même réseau appliquent des procédures identiques. Dans les faits, l'une fonctionne par une coopération fluide entre conseillers qui se répartissent officieusement les dossiers complexes selon leurs affinités et compétences respectives, tandis que l'autre est marquée par une rivalité qui ralentit le traitement des clients : leur système d'action concret diffère profondément, bien que l'organisation formelle soit la même.",
    analysisQuestions: [
      "Quel mécanisme fait que deux organisations partageant le même organigramme officiel peuvent avoir des systèmes d'action concrets très différents ?",
    ],
    quiz: [
      {
        id: "systeme-d-action-concret-q1",
        type: "mcq",
        prompt: "Le système d'action concret désigne :",
        choices: [
          "L'organigramme officiel affiché dans les documents de l'entreprise",
          "L'ensemble des relations effectives, souvent informelles, par lesquelles les acteurs régulent concrètement leur coopération",
          "Le règlement intérieur validé par la direction",
          "Un logiciel de gestion des ressources humaines",
        ],
        correctAnswer: "1",
        explanation:
          "Le système d'action concret désigne la réalité organisationnelle observable empiriquement — les relations effectives entre acteurs — et non l'organisation officielle telle qu'affichée dans l'organigramme ou le règlement.",
      },
    ],
    difficulty: 4,
    sources: [{ label: "Crozier et Friedberg, L'Acteur et le système", kind: "primary" }],
  },
  {
    id: "interdependance-des-acteurs",
    slug: "interdependance-des-acteurs",
    title: "Interdépendance des acteurs",
    hookQuestion:
      "Pourquoi des acteurs aux intérêts parfois divergents finissent-ils quand même par coopérer au sein d'une même organisation ?",
    shortExplanation:
      "L'interdépendance des acteurs désigne, chez Friedberg, le fait que dans une organisation, aucun acteur ne peut atteindre ses objectifs seul : chacun dépend, au moins partiellement, des ressources et de la coopération des autres pour agir.",
    detailedExplanation:
      "Cette interdépendance est la condition structurelle qui rend possible et nécessaire la coopération organisationnelle, malgré la diversité voire l'opposition des stratégies individuelles. Chaque acteur contrôle certaines ressources ou zones d'incertitude utiles aux autres, ce qui crée un jeu de dépendances croisées : personne n'a un pouvoir absolu, et personne n'est totalement autonome non plus. C'est cette interdépendance qui oblige les acteurs à négocier des formes de coopération viables, même sans accord explicite sur les objectifs, et qui rend possible la régulation conjointe de leurs comportements au sein d'un système d'action concret partagé.",
    authors: ["friedberg"],
    themes: ["organisation-formelle-reelle"],
    relatedConcepts: ["systeme-d-action-concret", "cooperation-organisationnelle", "regulation-conjointe"],
    prerequisites: [],
    concreteExample:
      "Dans un hôpital, le chirurgien dépend de l'équipe d'anesthésie et du personnel de bloc pour opérer, tandis que ces derniers dépendent du chirurgien pour la reconnaissance de leur rôle et l'organisation de leur planning. Aucun de ces acteurs ne peut remplir sa mission seul, ce qui les contraint à coopérer en pratique, malgré des logiques professionnelles parfois différentes.",
    analysisQuestions: [
      "Quel mécanisme fait que l'interdépendance des acteurs, plutôt que la seule autorité hiérarchique, explique souvent la coopération réelle observée dans une organisation ?",
    ],
    quiz: [
      {
        id: "interdependance-des-acteurs-q1",
        type: "true-false",
        prompt:
          "L'interdépendance des acteurs signifie qu'un acteur organisationnel peut, en théorie, atteindre seul l'ensemble de ses objectifs sans dépendre des autres.",
        correctAnswer: "false",
        explanation:
          "C'est l'inverse : l'interdépendance signifie précisément qu'aucun acteur ne peut atteindre ses objectifs seul, ce qui rend la coopération nécessaire malgré la diversité des intérêts en jeu.",
      },
      {
        id: "interdependance-des-acteurs-q2",
        type: "mcq",
        prompt: "L'interdépendance des acteurs, chez Friedberg, crée un jeu de dépendances croisées où :",
        choices: [
          "Un seul acteur détient un pouvoir absolu sur tous les autres",
          "Personne n'a de pouvoir absolu, et personne n'est totalement autonome non plus",
          "Aucun acteur ne dépend jamais d'un autre",
          "Seule la direction générale détient des ressources utiles aux autres",
        ],
        correctAnswer: "1",
        explanation:
          "Chaque acteur contrôle des ressources utiles à d'autres, ce qui crée des dépendances croisées : ni pouvoir absolu ni autonomie totale ne caractérisent la situation des acteurs interdépendants.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Crozier et Friedberg, L'Acteur et le système", kind: "primary" }],
  },
  {
    id: "regulation-conjointe",
    slug: "regulation-conjointe",
    title: "Régulation conjointe",
    hookQuestion:
      "Comment des acteurs aux intérêts divergents parviennent-ils à établir des règles de fonctionnement stables sans qu'aucune autorité centrale ne les impose entièrement ?",
    shortExplanation:
      "La régulation conjointe désigne, chez Friedberg, le processus par lequel des acteurs interdépendants élaborent progressivement, par ajustements successifs et négociations implicites, des règles de coopération partagées qui ne dépendent d'aucune autorité unique.",
    detailedExplanation:
      "Ce concept prolonge celui de système d'action concret : au-delà des règles imposées formellement par la direction, les acteurs d'une organisation construisent, par la pratique répétée de leurs interactions, des normes de fonctionnement partagées qui stabilisent leur coopération. Cette régulation est dite conjointe car elle résulte de la rencontre, jamais parfaitement harmonieuse, entre plusieurs logiques d'acteurs qui négocient continuellement les termes de leur coopération. Contrairement à une régulation purement hiérarchique, la régulation conjointe reconnaît que l'ordre organisationnel est toujours en partie coproduit par la base, non simplement imposé d'en haut ; elle explique pourquoi certaines pratiques informelles finissent par avoir autant de force contraignante que les règles officielles.",
    authors: ["friedberg"],
    themes: ["organisation-formelle-reelle"],
    relatedConcepts: ["systeme-d-action-concret", "cooperation-organisationnelle", "interdependance-des-acteurs"],
    prerequisites: ["systeme-d-action-concret"],
    concreteExample:
      "Dans un atelier, ouvriers et chefs d'équipe négocient tacitement, au fil des semaines, un rythme de production qui satisfait à la fois les impératifs de rendement et le besoin de pauses des ouvriers, sans qu'aucun accord formel n'ait jamais été signé. Cette norme non écrite, née de la pratique répétée, régule désormais aussi solidement le travail quotidien que le règlement officiel.",
    analysisQuestions: [
      "Quel mécanisme permet à une norme de coopération non écrite d'acquérir, dans les faits, une force presque équivalente à celle d'une règle formelle ?",
    ],
    quiz: [
      {
        id: "regulation-conjointe-q1",
        type: "mcq",
        prompt: "La régulation conjointe se distingue d'une régulation purement hiérarchique par le fait que :",
        choices: [
          "Elle est entièrement décidée et imposée par la direction générale",
          "Elle résulte de la négociation continue entre acteurs interdépendants, et non d'une seule autorité centrale",
          "Elle n'a aucun effet réel sur le fonctionnement de l'organisation",
          "Elle s'applique uniquement aux cadres dirigeants",
        ],
        correctAnswer: "1",
        explanation:
          "La régulation conjointe résulte d'un processus de négociation et d'ajustement mutuel entre acteurs interdépendants, ce qui la distingue d'une régulation purement descendante imposée par une autorité unique.",
      },
    ],
    difficulty: 4,
    sources: [{ label: "Crozier et Friedberg, L'Acteur et le système", kind: "primary" }],
  },
  {
    id: "cooperation-organisationnelle",
    slug: "cooperation-organisationnelle",
    title: "Coopération organisationnelle",
    hookQuestion:
      "La coopération entre membres d'une organisation va-t-elle de soi dès lors qu'ils partagent officiellement les mêmes objectifs ?",
    shortExplanation:
      "La coopération organisationnelle désigne, dans l'analyse stratégique de Friedberg, le résultat toujours fragile et négocié de l'ajustement entre des acteurs aux stratégies différentes, et non un état naturel découlant automatiquement d'objectifs communs affichés.",
    detailedExplanation:
      "Pour Friedberg, la coopération n'est jamais donnée d'avance par le simple fait de partager un même employeur ou une même mission officielle : elle doit être activement construite, à travers l'interdépendance des acteurs et la régulation conjointe de leurs comportements. Cette coopération reste toujours partiellement conflictuelle, car les stratégies individuelles ne s'alignent jamais parfaitement, mais elle est rendue possible et souvent stable par le fait que chaque acteur a objectivement intérêt à maintenir le système d'action concret dans lequel il évolue, plutôt qu'à le faire s'effondrer. Comprendre une organisation suppose donc de comprendre les conditions concrètes, souvent locales et informelles, qui rendent cette coopération possible malgré la divergence des intérêts.",
    authors: ["friedberg"],
    themes: ["organisation-formelle-reelle"],
    relatedConcepts: ["interdependance-des-acteurs", "regulation-conjointe", "systeme-d-action-concret"],
    prerequisites: ["interdependance-des-acteurs"],
    concreteExample:
      "Deux services d'une entreprise, commercial et production, ont des priorités souvent contradictoires — le premier veut satisfaire rapidement le client, le second veut respecter des délais de fabrication réalistes. Leur coopération quotidienne repose sur des ajustements informels négociés au cas par cas, plutôt que sur un simple alignement automatique autour de la mission commune de l'entreprise.",
    analysisQuestions: [
      "Quel mécanisme explique que la coopération entre deux services aux intérêts divergents reste possible malgré l'absence d'un accord complet sur les priorités ?",
    ],
    quiz: [
      {
        id: "cooperation-organisationnelle-q1",
        type: "true-false",
        prompt:
          "Selon Friedberg, la coopération entre membres d'une organisation découle automatiquement du fait qu'ils partagent une mission officielle commune.",
        correctAnswer: "false",
        explanation:
          "Pour Friedberg, la coopération n'est jamais automatique : elle doit être construite activement à travers l'interdépendance et la négociation entre acteurs aux stratégies parfois divergentes.",
      },
      {
        id: "cooperation-organisationnelle-q2",
        type: "mcq",
        prompt: "Pour Friedberg, la coopération organisationnelle reste :",
        choices: [
          "Toujours parfaitement harmonieuse dès lors que la mission est officiellement partagée",
          "Toujours partiellement conflictuelle, car les stratégies individuelles ne s'alignent jamais totalement",
          "Impossible dès qu'il existe une divergence d'intérêts entre acteurs",
          "Uniquement le résultat d'une décision de la direction générale",
        ],
        correctAnswer: "1",
        explanation:
          "Friedberg souligne que la coopération reste toujours partiellement conflictuelle, car les stratégies des acteurs ne s'alignent jamais parfaitement, même si chacun a intérêt à maintenir le système d'action concret.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Crozier et Friedberg, L'Acteur et le système", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // HIRSCHMAN
  // ---------------------------------------------------------------------
  {
    id: "exit",
    slug: "exit",
    title: "Exit (défection)",
    hookQuestion:
      "Face à une organisation dont la qualité se dégrade, pourquoi certains membres préfèrent-ils simplement partir plutôt que d'essayer de la changer de l'intérieur ?",
    shortExplanation:
      "L'exit (défection), chez Hirschman, désigne la réaction qui consiste à quitter une organisation, un produit ou un service insatisfaisant, plutôt que d'exprimer son mécontentement pour tenter d'obtenir un changement.",
    detailedExplanation:
      "Hirschman analyse l'exit comme un mécanisme de signal indirect : en partant, le membre insatisfait prive l'organisation d'une ressource (client, cotisation, compétence) et peut ainsi, en théorie, inciter les dirigeants à réagir pour enrayer une perte de membres. Ce mécanisme fonctionne bien dans des marchés concurrentiels où le coût du départ est faible. Mais Hirschman souligne aussi une limite importante : l'exit peut priver l'organisation du signal le plus informatif sur les causes précises de l'insatisfaction, car celui qui part n'explique pas nécessairement pourquoi il part. De plus, si ce sont précisément les membres les plus exigeants ou les plus compétents qui partent en premier, l'exit peut accélérer le déclin de la qualité de l'organisation plutôt que de la corriger, un phénomène que Hirschman appelle parfois le risque d'un cercle vicieux du départ des meilleurs.",
    authors: ["hirschman"],
    themes: ["reaction-insatisfaction"],
    relatedConcepts: ["voice", "loyalty"],
    oppositeConcepts: ["voice"],
    prerequisites: [],
    concreteExample:
      "Un salarié insatisfait de la gestion de son équipe, plutôt que de faire remonter ses critiques à sa hiérarchie, se met en recherche active d'un nouvel emploi et démissionne dès qu'il trouve une opportunité. Son départ silencieux prive l'entreprise d'une occasion de comprendre et de corriger le problème managérial en cause.",
    analysisQuestions: [
      "Quel mécanisme explique que l'exit puisse, dans certains cas, aggraver plutôt que corriger le déclin d'une organisation ?",
    ],
    quiz: [
      {
        id: "exit-q1",
        type: "mcq",
        prompt: "L'exit, selon Hirschman, consiste à :",
        choices: [
          "Rester dans l'organisation tout en exprimant publiquement son désaccord",
          "Quitter l'organisation insatisfaisante plutôt que de tenter de la changer de l'intérieur",
          "Rester fidèle à l'organisation malgré l'insatisfaction",
          "Prendre le contrôle de la direction de l'organisation",
        ],
        correctAnswer: "1",
        explanation:
          "L'exit désigne la défection : le fait de quitter une organisation insatisfaisante, par opposition à la voice (protester pour changer les choses) et à la loyalty (rester malgré tout).",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Hirschman, Exit, Voice, and Loyalty", kind: "primary" }],
  },
  {
    id: "voice",
    slug: "voice",
    title: "Voice (prise de parole)",
    hookQuestion:
      "Pourquoi certains membres mécontents d'une organisation choisissent-ils de protester ouvertement plutôt que de simplement partir ?",
    shortExplanation:
      "La voice (prise de parole), chez Hirschman, désigne la réaction qui consiste à exprimer son mécontentement, à l'intérieur de l'organisation, dans le but d'obtenir un changement, plutôt que de la quitter.",
    detailedExplanation:
      "Contrairement à l'exit, la voice suppose que l'acteur reste dans l'organisation, au moins temporairement, et mobilise des moyens d'expression — réclamation, négociation, mobilisation collective, alerte hiérarchique — pour tenter d'infléchir son fonctionnement. Hirschman montre que la voice est souvent plus coûteuse individuellement que l'exit (elle demande du temps, de l'énergie, et expose parfois à des représailles), mais elle a l'avantage de fournir à l'organisation une information beaucoup plus précise sur les causes de l'insatisfaction, ce qui la rend potentiellement plus efficace pour corriger un dysfonctionnement. La probabilité qu'un acteur recoure à la voice plutôt qu'à l'exit dépend notamment du coût de la défection et du degré de loyauté qu'il ressent envers l'organisation — un lien direct avec l'apprentissage en double boucle d'Argyris, qui suppose lui aussi une remise en question ouverte plutôt qu'un simple retrait silencieux.",
    authors: ["hirschman"],
    themes: ["reaction-insatisfaction"],
    relatedConcepts: ["exit", "loyalty", "double-loop-learning"],
    oppositeConcepts: ["exit"],
    prerequisites: [],
    concreteExample:
      "Face à une réorganisation jugée mal préparée, des salariés d'un service organisent une réunion avec la direction pour exposer précisément les difficultés concrètes que la réforme va créer, et proposent des ajustements. Cette prise de parole collective vise à corriger le projet plutôt qu'à le fuir en démissionnant.",
    analysisQuestions: [
      "Quel mécanisme rend la voice, malgré son coût individuel plus élevé que l'exit, potentiellement plus utile à la correction des dysfonctionnements organisationnels ?",
    ],
    quiz: [
      {
        id: "voice-q1",
        type: "true-false",
        prompt:
          "Selon Hirschman, la voice fournit en général à l'organisation une information plus précise sur les causes de l'insatisfaction que l'exit.",
        correctAnswer: "true",
        explanation:
          "Contrairement à un départ silencieux, la prise de parole explicite les raisons du mécontentement, ce qui donne à l'organisation une information plus riche pour corriger le problème identifié.",
      },
      {
        id: "voice-q2",
        type: "mcq",
        prompt: "Comparée à l'exit, la voice est généralement, pour l'individu qui l'exerce :",
        choices: [
          "Moins coûteuse et sans aucun risque",
          "Plus coûteuse en temps et en énergie, et parfois exposée à des représailles",
          "Strictement identique en coût à l'exit",
          "Impossible à mettre en œuvre dans une organisation",
        ],
        correctAnswer: "1",
        explanation:
          "Hirschman souligne que la voice est souvent plus coûteuse individuellement que l'exit, car elle demande du temps, de l'énergie et peut exposer à des représailles, malgré son utilité informative supérieure pour l'organisation.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Hirschman, Exit, Voice, and Loyalty", kind: "primary" }],
  },
  {
    id: "loyalty",
    slug: "loyalty",
    title: "Loyalty (loyauté)",
    hookQuestion:
      "Pourquoi certains membres restent-ils fidèles à une organisation en déclin, sans partir ni protester ouvertement ?",
    shortExplanation:
      "La loyalty (loyauté), chez Hirschman, désigne l'attachement d'un membre à une organisation qui le conduit à rester malgré son insatisfaction, ce qui peut soit lui laisser le temps de recourir à la voice, soit au contraire étouffer toute contestation.",
    detailedExplanation:
      "Hirschman montre que la loyauté joue un rôle ambivalent dans la dynamique exit-voice. D'un côté, elle peut être bénéfique : un membre loyal, convaincu que l'organisation vaut la peine d'être défendue, est plus enclin à recourir à la voice plutôt qu'à l'exit immédiat, ce qui donne à l'organisation une chance réelle de se corriger avant de perdre ses membres. De l'autre côté, une loyauté trop forte, ou entretenue artificiellement par l'organisation elle-même (coûts de sortie élevés, discours culpabilisant sur le départ), peut aussi étouffer la prise de parole et retarder indéfiniment la correction des dysfonctionnements, en maintenant les membres dans une résignation silencieuse. La loyauté n'est donc ni purement positive ni purement négative : son effet dépend de la capacité de l'organisation à réellement entendre et traiter la voice qu'elle rend possible.",
    authors: ["hirschman"],
    themes: ["reaction-insatisfaction"],
    relatedConcepts: ["exit", "voice"],
    prerequisites: [],
    concreteExample:
      "Un ancien élève reste très attaché à son établissement scolaire malgré une baisse de qualité perçue de l'enseignement. Cette loyauté le pousse à écrire à la direction pour exprimer ses inquiétudes plutôt qu'à retirer immédiatement ses enfants de l'établissement, lui laissant le temps d'espérer une amélioration.",
    analysisQuestions: [
      "Quel mécanisme peut transformer la loyauté d'un membre envers son organisation en un frein plutôt qu'un moteur de correction des dysfonctionnements ?",
    ],
    quiz: [
      {
        id: "loyalty-q1",
        type: "mcq",
        prompt: "Selon Hirschman, la loyauté d'un membre envers son organisation :",
        choices: [
          "N'a strictement aucun effet sur le choix entre exit et voice",
          "Favorise toujours et uniquement le départ immédiat de l'organisation",
          "Peut favoriser la voice en retardant l'exit, mais peut aussi étouffer toute contestation si elle est excessive",
          "Garantit systématiquement l'amélioration de l'organisation",
        ],
        correctAnswer: "2",
        explanation:
          "La loyauté joue un rôle ambivalent : elle peut laisser le temps à la voice de s'exprimer et de corriger l'organisation, mais une loyauté excessive peut aussi maintenir les membres dans une résignation silencieuse qui empêche toute correction.",
      },
    ],
    difficulty: 2,
    sources: [{ label: "Hirschman, Exit, Voice, and Loyalty", kind: "primary" }],
  },

  // ---------------------------------------------------------------------
  // ARGYRIS
  // ---------------------------------------------------------------------
  {
    id: "single-loop-learning",
    slug: "single-loop-learning",
    title: "Apprentissage en simple boucle",
    hookQuestion:
      "Corriger une erreur en ajustant simplement une procédure suffit-il toujours à empêcher qu'elle se reproduise sous une autre forme ?",
    shortExplanation:
      "L'apprentissage en simple boucle, chez Argyris, désigne un mode d'apprentissage où une organisation détecte une erreur et la corrige en ajustant ses actions ou ses moyens, sans remettre en cause les objectifs ou les hypothèses de départ qui l'ont produite.",
    detailedExplanation:
      "Argyris compare ce type d'apprentissage à un thermostat qui corrige un écart de température en déclenchant le chauffage, sans jamais se demander si la température cible elle-même est appropriée. Dans une organisation, l'apprentissage en simple boucle consiste à ajuster les moyens (une procédure, un contrôle, une formation ponctuelle) pour corriger un écart constaté, en gardant intactes les hypothèses de fond, les valeurs directrices et les objectifs qui encadrent l'action. Ce mode d'apprentissage est efficace pour des problèmes routiniers et bien compris, mais il devient limitant lorsque le problème provient précisément des présupposés eux-mêmes : dans ce cas, la correction en simple boucle ne fait que déplacer ou masquer temporairement le problème, sans jamais s'attaquer à sa cause profonde. On retrouve dans ce mécanisme un écho du ritualisme bureaucratique décrit par Merton, où l'attachement à la procédure empêche toute remise en question plus large.",
    authors: ["argyris"],
    themes: ["apprentissage-organisationnel"],
    relatedConcepts: ["double-loop-learning", "routines-defensives", "deplacement-des-buts"],
    oppositeConcepts: ["double-loop-learning"],
    prerequisites: [],
    deepensInto: ["double-loop-learning"],
    concreteExample:
      "Après une série de retards de livraison, une entreprise renforce le contrôle des délais et sanctionne les retards individuels. Les délais s'améliorent temporairement, mais le problème réapparaît quelques mois plus tard car la cause réelle — une organisation de la chaîne logistique mal conçue — n'a jamais été questionnée : l'entreprise a corrigé un symptôme sans revoir ses hypothèses de fonctionnement.",
    analysisQuestions: [
      "Quel mécanisme fait que l'apprentissage en simple boucle peut résoudre un problème en apparence, sans empêcher sa réapparition sous une autre forme ?",
    ],
    quiz: [
      {
        id: "single-loop-learning-q1",
        type: "mcq",
        prompt:
          "L'apprentissage en simple boucle, tel que décrit par Argyris, consiste à :",
        choices: [
          "Remettre en cause les objectifs et les hypothèses de départ de l'action",
          "Corriger une erreur en ajustant les moyens, sans remettre en cause les objectifs ou hypothèses de fond",
          "Ignorer complètement toute erreur constatée",
          "Changer systématiquement la direction de l'organisation après chaque erreur",
        ],
        correctAnswer: "1",
        explanation:
          "L'apprentissage en simple boucle corrige l'écart constaté en ajustant les moyens d'action, mais laisse intactes les hypothèses et les valeurs directrices qui encadrent l'action — contrairement à l'apprentissage en double boucle.",
      },
    ],
    difficulty: 3,
    sources: [{ label: "Argyris et Schön, Organizational Learning", kind: "primary" }],
  },
  {
    id: "double-loop-learning",
    slug: "double-loop-learning",
    title: "Apprentissage en double boucle",
    hookQuestion:
      "Pour résoudre durablement un problème récurrent, faut-il parfois questionner les objectifs et les présupposés eux-mêmes, plutôt que seulement les moyens employés ?",
    shortExplanation:
      "L'apprentissage en double boucle, chez Argyris, désigne un mode d'apprentissage où l'organisation, face à une erreur, va jusqu'à remettre en question les objectifs, les valeurs directrices ou les hypothèses de fond qui ont conduit à cette erreur, et non seulement les moyens employés.",
    detailedExplanation:
      "Reprenant l'image du thermostat, l'apprentissage en double boucle correspondrait à un système capable de se demander si la température cible fixée est elle-même pertinente, et de la modifier si nécessaire. Ce mode d'apprentissage exige une capacité d'introspection organisationnelle plus profonde : il suppose d'accepter de remettre en question des choix considérés comme acquis, ce qui est souvent difficile car cela expose les responsables de ces choix initiaux à une forme de remise en cause personnelle. Argyris considère ce type d'apprentissage comme essentiel pour traiter des problèmes structurels et récurrents, mais observe qu'il est freiné, dans la plupart des organisations, par des routines défensives qui protègent les acteurs d'un examen critique jugé menaçant. Ce concept est proche, dans sa logique, de l'exploration décrite par March, qui suppose elle aussi une remise en cause des cadres établis plutôt qu'une simple optimisation de l'existant.",
    authors: ["argyris"],
    themes: ["apprentissage-organisationnel"],
    relatedConcepts: ["single-loop-learning", "remise-en-cause-des-hypotheses", "exploration-organisationnelle"],
    oppositeConcepts: ["single-loop-learning"],
    prerequisites: ["single-loop-learning"],
    deepensInto: ["remise-en-cause-des-hypotheses"],
    concreteExample:
      "Après plusieurs cycles infructueux de renforcement du contrôle des délais de livraison, la direction d'une entreprise finit par organiser un audit approfondi qui remet en question l'architecture même de sa chaîne logistique, initialement conçue pour un volume d'activité aujourd'hui dépassé. Cette remise en cause des hypothèses de conception initiale, et non des seuls symptômes, permet une réorganisation plus durable.",
    analysisQuestions: [
      "Quel mécanisme distingue une correction en simple boucle d'une véritable démarche d'apprentissage en double boucle ?",
      "Dans quelle situation organisationnelle la remise en cause des hypothèses de fond est-elle particulièrement difficile à engager ?",
    ],
    quiz: [
      {
        id: "double-loop-learning-q1",
        type: "true-false",
        prompt:
          "L'apprentissage en double boucle se limite à ajuster les moyens d'action sans jamais remettre en cause les objectifs poursuivis.",
        correctAnswer: "false",
        explanation:
          "C'est justement l'inverse : l'apprentissage en double boucle va jusqu'à remettre en question les objectifs et les hypothèses de fond, ce qui le distingue de l'apprentissage en simple boucle, limité à l'ajustement des moyens.",
      },
      {
        id: "double-loop-learning-q2",
        type: "mcq",
        prompt:
          "Dans l'image du thermostat utilisée par Argyris, l'apprentissage en double boucle correspondrait à un système capable de :",
        choices: [
          "Déclencher le chauffage dès que la température descend sous la cible fixée",
          "Se demander si la température cible elle-même est pertinente et la modifier si nécessaire",
          "Ignorer complètement les écarts de température constatés",
          "Fonctionner uniquement de façon manuelle sans aucun capteur",
        ],
        correctAnswer: "1",
        explanation:
          "L'apprentissage en double boucle va au-delà de la simple correction d'écart (le thermostat qui régule autour d'une cible fixe) : il questionne la pertinence de la cible elle-même, c'est-à-dire des objectifs et hypothèses de fond.",
      },
    ],
    difficulty: 4,
    sources: [{ label: "Argyris et Schön, Organizational Learning", kind: "primary" }],
  },
  {
    id: "routines-defensives",
    slug: "routines-defensives",
    title: "Routines défensives",
    hookQuestion:
      "Pourquoi des équipes compétentes et bien intentionnées évitent-elles parfois systématiquement d'aborder les vrais problèmes qui expliquent leurs échecs répétés ?",
    shortExplanation:
      "Les routines défensives sont, chez Argyris, des comportements individuels et collectifs, souvent inconscients, qui protègent les acteurs et l'organisation d'un examen critique perçu comme menaçant ou gênant, au prix d'un blocage de l'apprentissage en profondeur.",
    detailedExplanation:
      "Argyris observe que même dans des organisations composées de personnes compétentes et bien intentionnées, certains sujets sensibles deviennent tacitement indiscutables : on évite d'évoquer une erreur de conception initiale, un conflit non résolu entre départements, ou l'inefficacité d'une décision prise par un supérieur. Ces routines défensives fonctionnent souvent de façon invisible pour ceux qui les pratiquent : elles ne sont pas perçues comme un évitement délibéré, mais comme la façon normale et prudente de se comporter. Leur effet cumulé est de bloquer l'apprentissage en double boucle, car elles empêchent précisément la remise en question ouverte des hypothèses de fond nécessaire à ce type d'apprentissage. Argyris insiste sur le fait que rompre ces routines défensives suppose de rendre explicites des raisonnements habituellement tacites, un travail difficile qui requiert souvent un accompagnement spécifique.",
    authors: ["argyris"],
    themes: ["apprentissage-organisationnel"],
    relatedConcepts: ["single-loop-learning", "ritualisme-bureaucratique", "remise-en-cause-des-hypotheses"],
    prerequisites: ["single-loop-learning"],
    concreteExample:
      "Dans une équipe projet, chacun sait que le retard chronique du projet est lié à une décision initiale contestable prise par le chef de projet, mais personne n'ose l'évoquer en réunion, de peur de braquer la hiérarchie ou de sembler critique sans solution. Cette évitement collectif, jamais formellement décidé, constitue une routine défensive qui empêche l'équipe de traiter la cause réelle du problème.",
    analysisQuestions: [
      "Comment reconnaître, dans le fonctionnement d'une équipe, une routine défensive qui bloque l'examen d'un problème de fond ?",
    ],
    quiz: [
      {
        id: "routines-defensives-q1",
        type: "mcq",
        prompt: "Les routines défensives, selon Argyris, ont pour effet principal de :",
        choices: [
          "Améliorer systématiquement la performance de l'organisation",
          "Protéger les acteurs d'un examen critique gênant, au prix de bloquer l'apprentissage en profondeur",
          "Faciliter la remise en cause ouverte des décisions passées",
          "Renforcer la transparence entre les services d'une organisation",
        ],
        correctAnswer: "1",
        explanation:
          "Les routines défensives protègent les acteurs d'une confrontation jugée menaçante avec certains sujets sensibles, mais ce faisant, elles empêchent la remise en question des hypothèses de fond nécessaire à un apprentissage en double boucle.",
      },
    ],
    difficulty: 4,
    sources: [{ label: "Argyris, Overcoming Organizational Defenses", kind: "primary" }],
  },
  {
    id: "remise-en-cause-des-hypotheses",
    slug: "remise-en-cause-des-hypotheses",
    title: "Remise en cause des hypothèses",
    hookQuestion:
      "Une organisation peut-elle apprendre durablement d'un échec sans jamais interroger les croyances implicites qui ont guidé la décision initiale ?",
    shortExplanation:
      "La remise en cause des hypothèses désigne, dans le prolongement des travaux d'Argyris, la démarche consistant à rendre explicites et à questionner ouvertement les croyances, valeurs et présupposés implicites qui orientent l'action organisationnelle, condition nécessaire de l'apprentissage en double boucle.",
    detailedExplanation:
      "Les organisations, comme les individus, agissent souvent sur la base de « théories d'usage » implicites — des présupposés sur ce qui fonctionne, sur les intentions des autres acteurs, sur les contraintes réelles de la situation — qui restent rarement formulées explicitement et donc rarement questionnées. La remise en cause des hypothèses suppose un travail actif pour faire émerger ces présupposés tacites, souvent enfouis derrière des routines défensives, et pour les confronter à la réalité observée. Ce travail est exigeant car il implique d'accepter que des choix passés, y compris ceux de responsables actuels, aient pu reposer sur des bases erronées — une remise en cause qui touche à l'identité professionnelle des acteurs concernés, ce qui explique pourquoi elle reste l'étape la plus difficile et la plus rarement atteinte de l'apprentissage organisationnel.",
    authors: ["argyris"],
    themes: ["apprentissage-organisationnel"],
    relatedConcepts: ["double-loop-learning", "routines-defensives"],
    prerequisites: ["double-loop-learning"],
    concreteExample:
      "Une association caritative dont les dons stagnent depuis des années finit par organiser un séminaire où les responsables acceptent d'examiner ouvertement l'hypothèse implicite selon laquelle leur mode de communication traditionnel resterait toujours efficace, une croyance jamais remise en question depuis la fondation de l'association vingt ans plus tôt.",
    analysisQuestions: [
      "Quel mécanisme rend la remise en cause des hypothèses de fond particulièrement difficile pour les responsables qui ont eux-mêmes formulé ces hypothèses à l'origine ?",
    ],
    quiz: [
      {
        id: "remise-en-cause-des-hypotheses-q1",
        type: "true-false",
        prompt:
          "La remise en cause des hypothèses est, selon Argyris, une démarche généralement facile et rapide à mettre en œuvre dans les organisations.",
        correctAnswer: "false",
        explanation:
          "Au contraire, Argyris insiste sur la difficulté de cette démarche, car elle implique de questionner des présupposés tacites souvent protégés par des routines défensives et liés à l'identité professionnelle des acteurs concernés.",
      },
      {
        id: "remise-en-cause-des-hypotheses-q2",
        type: "mcq",
        prompt: "La remise en cause des hypothèses suppose principalement de :",
        choices: [
          "Rendre explicites et questionner ouvertement des croyances et présupposés implicites qui orientent l'action",
          "Changer immédiatement l'ensemble du personnel de l'organisation",
          "Supprimer toute forme de règle écrite dans l'organisation",
          "Se limiter à ajuster les indicateurs de suivi des résultats",
        ],
        correctAnswer: "0",
        explanation:
          "Ce travail consiste à faire émerger des présupposés tacites, souvent protégés par des routines défensives, pour les confronter à la réalité observée — condition de l'apprentissage en double boucle.",
      },
    ],
    difficulty: 5,
    sources: [
      { label: "Argyris et Schön, Organizational Learning", kind: "primary" },
      {
        label: "Approfondissement pédagogique de la double boucle chez Argyris",
        kind: "pedagogical-interpretation",
      },
    ],
  },
];
