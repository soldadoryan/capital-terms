/**
 * Estrutura dos documentos legais.
 *
 * Os textos aceitam marcação inline mínima:
 *   **negrito**  e  *itálico*
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type Section = {
  /** Âncora usada no sumário (ex.: "quem-somos"). */
  id: string;
  title: string;
  blocks: Block[];
};

export type LegalDocument = {
  title: string;
  description: string;
  updatedAt: string;
  version: string;
  intro: Block[];
  sections: Section[];
};

export const COMPANY_FOOTER =
  "© 2026 Grupo Capital · Modder Produções Artísticas (CNPJ 41.408.498/0001-03)";
