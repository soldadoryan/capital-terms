"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

export function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((e): e is HTMLElement => !!e);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-0.5 font-sans text-sm">
      {items.map((item, i) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`flex gap-2 rounded px-2 py-1.5 transition-colors ${
                isActive ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              <span className="w-6 shrink-0 tabular-nums">{i + 1}.</span>
              <span>{item.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="Sumário">
      <details className="rounded-md border border-border bg-surface lg:hidden">
        <summary className="cursor-pointer select-none px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Sumário
        </summary>
        <div className="px-2 pb-3">{list}</div>
      </details>
      <div className="hidden lg:block">
        <p className="mb-3 px-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Sumário
        </p>
        {list}
      </div>
    </nav>
  );
}
