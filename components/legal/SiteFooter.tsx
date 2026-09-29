import Link from "next/link";
import { COMPANY_FOOTER } from "@/content/types";
import { DOC_LINKS } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center font-sans text-sm text-muted sm:px-6">
        <ul className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {DOC_LINKS.map((l) => (
            <li key={l.slug}>
              <Link href={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="mailto:contato@tronos.space" className="hover:text-foreground">
              contato@tronos.space
            </a>
          </li>
        </ul>
        <p className="text-xs">{COMPANY_FOOTER}</p>
      </div>
    </footer>
  );
}
