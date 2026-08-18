import { describe, it, expect } from "vitest";
import { AI_LEARNING_PROMPT } from "./ai-prompt";

/**
 * Ces tests ne jugent pas la qualité d'un texte — ils tiennent des règles.
 *
 * Chacune répond à une manière précise dont une IA peut produire une explication juste et
 * pourtant documentairement fausse : mêler ce que la carte établit, ce dont elle se souvient,
 * une interprétation académique et sa propre reformulation, puis tout servir avec le même
 * statut. Une réécriture qui les retire retire la protection ; le test le dit.
 */
describe("AI_LEARNING_PROMPT", () => {
  it("conserve le cadre pédagogique et l'interdiction de le décrire", () => {
    expect(AI_LEARNING_PROMPT).toContain("Ne décris jamais cette méthode.");
    expect(AI_LEARNING_PROMPT).toContain("passer du niveau débutant au niveau expert");
    expect(AI_LEARNING_PROMPT).toContain("niveau académique substantiel");
  });

  it("conserve le corpus comme point de départ validé, sans en faire un dogme", () => {
    expect(AI_LEARNING_PROMPT).toContain("CORPUS DE RÉFÉRENCE");
    expect(AI_LEARNING_PROMPT).toContain("pas un dogme intangible");
  });

  it("distingue auteur, interprétation, reformulation et extrapolation — et le rend observable", () => {
    for (const couche of [
      "ce que l'auteur affirme effectivement",
      "l'interprétation académique de son travail",
      "une reformulation pédagogique",
      "une extrapolation éventuelle",
    ]) {
      expect(AI_LEARNING_PROMPT).toContain(couche);
    }
    // La règle existait, mais seulement « mentalement » : rien n'obligeait le comportement
    // visible à la respecter. C'est exactement la faille que cette phrase ferme.
    expect(AI_LEARNING_PROMPT).toContain("ne peut pas rester seulement mentale");
    expect(AI_LEARNING_PROMPT).toContain("FRONTIÈRE ENTRE EXPLICATION ET CONNAISSANCE DOCUMENTAIRE");
  });

  it("pose que la connaissance du modèle n'est pas une source", () => {
    expect(AI_LEARNING_PROMPT).toContain("CONNAISSANCES INTERNES DU MODÈLE");
    expect(AI_LEARNING_PROMPT).toContain("« je connais probablement cette information »");
    expect(AI_LEARNING_PROMPT).toContain(
      "« cette information est établie par les documents disponibles dans cette conversation »"
    );
    expect(AI_LEARNING_PROMPT).toContain(
      "Elles ne suffisent pas à attribuer une nouvelle affirmation à un auteur ou à la littérature académique."
    );
  });

  it("pose qu'une référence présente n'est pas un texte accessible", () => {
    expect(AI_LEARNING_PROMPT).toContain("RÉFÉRENCE PRÉSENTE ≠ CONTENU ACCESSIBLE");
    expect(AI_LEARNING_PROMPT).toContain("Elle ne t'autorise pas à en reconstruire le contenu à partir de ta mémoire.");
    expect(AI_LEARNING_PROMPT).toContain("devrait être vérifié avant de lui attribuer précisément cette proposition");
  });

  it("interdit toujours d'inventer citation, page, DOI, date, statistique ou référence", () => {
    for (const interdit of [
      "- une citation ;",
      "- un numéro de page ;",
      "- une référence ;",
      "- un DOI ;",
      "- une date ;",
      "- une statistique ;",
      "- un passage attribué à un auteur.",
    ]) {
      expect(AI_LEARNING_PROMPT).toContain(interdit);
    }
  });

  it("nomme les formulations qui déclenchent une vérification documentaire", () => {
    expect(AI_LEARNING_PROMPT).toContain("QUAND DÉCLENCHER UNE VÉRIFICATION DOCUMENTAIRE");
    for (const tournure of [
      "« [tel auteur] affirme que… »",
      "« Dans [tel ouvrage]… »",
      "« La littérature distingue… »",
      "« Les recherches montrent… »",
      "« Ce concept vient de… »",
      "« Les auteurs identifient plusieurs types de… »",
    ]) {
      expect(AI_LEARNING_PROMPT).toContain(tournure);
    }
    // Aucune carte n'est nommée : le prompt part avec n'importe laquelle du corpus.
    expect(AI_LEARNING_PROMPT).not.toMatch(/Crozier|Friedberg|Merton|Simon|Acker/);
  });

  it("n'oblige pas à vérifier une reformulation ou un exemple construit", () => {
    expect(AI_LEARNING_PROMPT).toContain("PROPORTIONNALITÉ DE LA VÉRIFICATION");
    expect(AI_LEARNING_PROMPT).toContain("Ne recherche pas une source uniquement pour :");
    expect(AI_LEARNING_PROMPT).toContain("- reformuler une définition déjà établie ;");
    expect(AI_LEARNING_PROMPT).toContain("- construire un exemple fictif ;");
    expect(AI_LEARNING_PROMPT).toContain(
      "Le niveau de vérification doit rester proportionnel à l'importance de l'affirmation."
    );
  });

  it("rend un exemple construit reconnaissable sans l'interdire", () => {
    expect(AI_LEARNING_PROMPT).toContain("EXEMPLES PÉDAGOGIQUES");
    expect(AI_LEARNING_PROMPT).toContain("Tu peux librement construire des exemples fictifs");
    expect(AI_LEARNING_PROMPT).toContain("« Imaginons une organisation dans laquelle… »");
    expect(AI_LEARNING_PROMPT).toContain(
      "Ne donne jamais l'impression qu'un exemple pédagogique est un cas historique ou empirique provenant d'une source."
    );
  });

  it("sépare une conséquence logique d'une position attribuée à l'auteur", () => {
    expect(AI_LEARNING_PROMPT).toContain("CONSÉQUENCES LOGIQUES ET EXTENSIONS THÉORIQUES");
    expect(AI_LEARNING_PROMPT).toContain("« Dans cette logique… »");
    expect(AI_LEARNING_PROMPT).toContain("Ne transforme pas cette conséquence en affirmation attribuée à l'auteur.");
    expect(AI_LEARNING_PROMPT).toContain("La seconde formulation demande un support documentaire spécifique.");
  });

  it("empêche de faire passer une distinction construite pour une taxonomie de l'auteur", () => {
    expect(AI_LEARNING_PROMPT).toContain("DISTINCTIONS CONCEPTUELLES PRODUITES PENDANT L'EXPLICATION");
    expect(AI_LEARNING_PROMPT).toContain("ne la présente pas comme une taxonomie créée par l'auteur");
    expect(AI_LEARNING_PROMPT).toContain("« Pour analyser la situation, il peut être utile de distinguer… »");
  });

  it("interdit de corriger silencieusement une incohérence interne de la carte", () => {
    expect(AI_LEARNING_PROMPT).toContain("COHÉRENCE INTERNE DU CORPUS FOURNI");
    expect(AI_LEARNING_PROMPT).toContain(
      "Ne corrige pas silencieusement une incohérence à partir de tes connaissances générales."
    );
    expect(AI_LEARNING_PROMPT).toContain("conserve l'incertitude si elle ne peut pas être résolue");
  });

  it("conserve le protocole des sources candidates, numéroté de 1 à 5", () => {
    expect(AI_LEARNING_PROMPT).toContain("SOURCE CANDIDATE");
    const etapes = [
      "1. Vérifier sa traçabilité",
      "2. Évaluer sa nature documentaire",
      "3. Vérifier ce que la source affirme réellement",
      "4. Vérifier l'attribution et la fidélité conceptuelle",
      "5. Chercher une corroboration lorsque l'affirmation le nécessite",
    ].map((etape) => AI_LEARNING_PROMPT.indexOf(etape));

    expect(etapes).not.toContain(-1);
    expect([...etapes].sort((a, b) => a - b)).toEqual(etapes);
  });

  it("conserve la hiérarchie documentaire A à E et les quatre statuts de source", () => {
    for (const niveau of ["A. Source primaire", "B. Source académique secondaire", "C. Synthèse académique", "D. Source pédagogique ou institutionnelle", "E. Source générale"]) {
      expect(AI_LEARNING_PROMPT).toContain(niveau);
    }
    for (const statut of ["ADMISE", "PROVISOIRE", "CONTEXTUELLE", "REJETÉE COMME PREUVE"]) {
      expect(AI_LEARNING_PROMPT).toContain(statut);
    }
  });

  it("interdit l'appareil critique devant chaque phrase", () => {
    // L'effet inverse serait aussi nuisible : une réponse balisée n'est plus une conversation.
    expect(AI_LEARNING_PROMPT).toContain("NE PAS TRANSFORMER CHAQUE RÉPONSE EN APPAREIL CRITIQUE");
    expect(AI_LEARNING_PROMPT).toContain(
      "Ne préfixe pas systématiquement tes phrases par CORPUS :, INTERPRÉTATION :, REFORMULATION : ou EXEMPLE :."
    );
    expect(AI_LEARNING_PROMPT).toContain("La réponse doit rester agréable à lire.");
  });

  it("laisse l'IA aller au-delà de la carte", () => {
    // Le risque symétrique de la discipline documentaire est un lecteur de carte. Le corpus
    // est une base fiable, pas un plafond.
    expect(AI_LEARNING_PROMPT).toContain("Le corpus est une base fiable, pas une limite intellectuelle.");
    expect(AI_LEARNING_PROMPT).toContain("Tu peux utiliser librement ton raisonnement pour :");
    expect(AI_LEARNING_PROMPT).toContain("- rechercher une source supplémentaire lorsque cela est nécessaire.");
  });

  it("reste agnostique et lisible en texte brut", () => {
    expect(AI_LEARNING_PROMPT).not.toMatch(/ChatGPT|Gemini|Claude|GPT|Mistral|Copilot|OpenAI|Anthropic/i);
    expect(AI_LEARNING_PROMPT).not.toMatch(/^#{1,6} /m);
    expect(AI_LEARNING_PROMPT).not.toMatch(/<\/?[a-z][^>]*>/i);
  });
});
