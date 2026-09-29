import type { Block } from "@/content/types";
import { RichText } from "./RichText";

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[1.0625rem] leading-[1.75] text-foreground/90">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[1.0625rem] leading-[1.7] text-foreground/90 marker:text-muted">
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left font-sans text-sm">
            <thead className="bg-surface">
              <tr>
                {block.head.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-border align-top last:border-0">
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 leading-relaxed text-foreground/90">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <aside
          role="note"
          className="rounded-r-md border-l-2 border-primary bg-primary-soft px-5 py-4 text-[1.0625rem] leading-[1.7] text-foreground/90"
        >
          <RichText text={block.text} />
        </aside>
      );
  }
}
