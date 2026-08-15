import type { SessionType } from "@/types";

export interface SessionTypeMeta {
  type: SessionType;
  label: string;
  verb: string;
  description: string;
}

export const SESSION_TYPE_META: Record<SessionType, SessionTypeMeta> = {
  discovery: {
    type: "discovery",
    label: "Découverte",
    verb: "Découvrir",
    description: "Un concept jamais rencontré, présenté depuis une question concrète.",
  },
  review: {
    type: "review",
    label: "Révision",
    verb: "Réviser",
    description: "Un concept déjà vu, retrouvé sous un angle différent.",
  },
  deepening: {
    type: "deepening",
    label: "Approfondissement",
    verb: "Approfondir",
    description: "Aller plus loin dans un concept déjà compris.",
  },
  comparison: {
    type: "comparison",
    label: "Comparaison",
    verb: "Comparer",
    description: "Comparer deux auteurs ou deux concepts entre eux.",
  },
  "case-study": {
    type: "case-study",
    label: "Cas pratique",
    verb: "Analyser",
    description: "Analyser une situation organisationnelle concrète.",
  },
  connection: {
    type: "connection",
    label: "Connexion",
    verb: "Relier",
    description: "Relier explicitement deux connaissances déjà rencontrées.",
  },
};
