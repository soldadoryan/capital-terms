import type { LegalDocument } from "@/content/types";
import { BlockRenderer } from "./BlockRenderer";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader, type DocSlug } from "./SiteHeader";
import { TableOfContents } from "./TableOfContents";

export function LegalDocumentView({ doc, slug }: { doc: LegalDocument; slug: DocSlug }) {
  const toc = doc.sections.map(({ id, title }) => ({ id, title }));
  return (
    <>
      <SiteHeader active={slug} />
      <main id="topo" className="mx-auto w-full max-w-6xl flex-1 px-4 pt-12 sm:px-6">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <aside className="mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <TableOfContents items={toc} />
            </div>
          </aside>
          <article className="min-w-0 max-w-[72ch]">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Documento legal
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {doc.title}
            </h1>
            <p className="mt-4 font-sans text-sm text-muted">
              Última atualização:{" "}
              <strong className="font-semibold text-foreground">{doc.updatedAt}</strong> · Versão{" "}
              <strong className="font-semibold text-foreground">{doc.version}</strong> · Grupo Capital
            </p>
            <hr className="my-8 border-border" />
            <div className="space-y-5">
              {doc.intro.map((b, i) => (
                <BlockRenderer key={i} block={b} />
              ))}
            </div>
            {doc.sections.map((s, i) => (
              <section key={s.id} aria-labelledby={s.id} className="mt-12">
                <h2 id={s.id} className="scroll-mt-24 font-sans text-xl font-semibold tracking-tight">
                  <span className="text-primary">{i + 1}.</span> {s.title}
                </h2>
                <div className="mt-4 space-y-5">
                  {s.blocks.map((b, j) => (
                    <BlockRenderer key={j} block={b} />
                  ))}
                </div>
              </section>
            ))}
            <p className="mt-14 font-sans text-sm">
              <a href="#topo" className="text-primary hover:underline">
                ↑ Voltar ao topo
              </a>
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
