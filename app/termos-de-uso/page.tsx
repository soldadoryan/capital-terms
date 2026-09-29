import type { Metadata } from "next";
import { termos } from "@/content/termos";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";

export const metadata: Metadata = {
  title: termos.title,
  description: termos.description,
  openGraph: {
    title: `${termos.title} · Grupo Capital`,
    description: termos.description,
    type: "article",
    locale: "pt_BR",
  },
};

export default function Page() {
  return <LegalDocumentView doc={termos} slug="termos-de-uso" />;
}
