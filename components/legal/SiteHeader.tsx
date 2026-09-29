import Image from "next/image";
import Link from "next/link";

export type DocSlug = "termos-de-uso" | "politicas-de-privacidade";

export const DOC_LINKS: { slug: DocSlug; label: string; href: string }[] = [
  { slug: "termos-de-uso", label: "Termos de Uso", href: "/termos-de-uso" },
  { slug: "politicas-de-privacidade", label: "Política de Privacidade", href: "/politicas-de-privacidade" },
];

export function SiteHeader({ active }: { active?: DocSlug }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 font-sans font-semibold tracking-tight">
          <Image
            src="/logo.png"
            alt="Grupo Capital"
            width={1652}
            height={614}
            className="h-[2.6rem] w-auto"
            priority
          />
        </Link>
        <nav aria-label="Documentos legais">
          <ul className="flex items-center gap-1 font-sans text-sm">
            {DOC_LINKS.map((l) => {
              const isActive = active === l.slug;
              return (
                <li key={l.slug}>
                  <Link
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded px-3 py-2 transition-colors ${
                      isActive ? "text-primary" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
