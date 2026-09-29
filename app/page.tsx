import Link from "next/link";
import { SiteFooter } from "@/components/legal/SiteFooter";
import { SiteHeader } from "@/components/legal/SiteHeader";
import { termos } from "@/content/termos";
import { privacidade } from "@/content/privacidade";

const cards = [
  { href: "/termos-de-uso", doc: termos },
  { href: "/politicas-de-privacidade", doc: privacidade },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pt-16 sm:px-6">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Grupo Capital
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Documentos legais</h1>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          Consulte os documentos que regem o uso dos nossos serviços e o tratamento de dados pessoais.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map(({ href, doc }) => (
            <li key={href}>
              <Link
                href={href}
                className="block h-full rounded-md border border-border bg-surface p-6 transition-colors hover:border-primary/60"
              >
                <h2 className="font-sans text-lg font-semibold">{doc.title}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{doc.description}</p>
                <p className="mt-4 font-sans text-xs text-muted">
                  Versão {doc.version} · Atualizado em {doc.updatedAt}
                </p>
                <span className="mt-4 inline-block font-sans text-sm text-primary">Ler documento →</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
