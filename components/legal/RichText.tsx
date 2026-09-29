import { Fragment, type ReactNode } from "react";

const LINK_RE = /(contato@tronos\.space|discord\.gg\/\w+)/g;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const linkClass =
  "text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary break-words";

function autolink(text: string, keyBase: string): ReactNode[] {
  return text.split(LINK_RE).map((part, i) => {
    const key = `${keyBase}-${i}`;
    if (i % 2 === 0) return <Fragment key={key}>{part}</Fragment>;
    if (EMAIL_RE.test(part)) {
      return (
        <a key={key} href={`mailto:${part}`} className={linkClass}>
          {part}
        </a>
      );
    }
    return (
      <a
        key={key}
        href={`https://${part}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {part}
      </a>
    );
  });
}

/** Parses **bold** and *italic* (bold may contain italic) into React nodes. */
function parse(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let n = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(...autolink(text.slice(last, m.index), `${keyBase}t${n}`));
    const key = `${keyBase}m${n++}`;
    if (m[1] !== undefined) {
      out.push(
        <strong key={key} className="font-semibold text-foreground">
          {parse(m[1], key)}
        </strong>,
      );
    } else {
      out.push(<em key={key}>{autolink(m[2], key)}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(...autolink(text.slice(last), `${keyBase}e`));
  return out;
}

export function RichText({ text }: { text: string }) {
  return <>{parse(text, "r")}</>;
}
