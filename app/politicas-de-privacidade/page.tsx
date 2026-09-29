import type { Metadata } from "next";
import { privacidade } from "@/content/privacidade";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";

export const metadata: Metadata = {
  title: privacidade.title,
  description: privacidade.description,
  openGraph: {
    title: `${privacidade.title} · Grupo Capital`,
    description: privacidade.description,
    type: "article",
    locale: "pt_BR",
  },
};

export default function Page() {
  return <LegalDocumentView doc={privacidade} slug="politicas-de-privacidade" />;
}
