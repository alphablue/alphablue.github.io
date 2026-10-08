import type { ReactNode } from 'react';

export function Article({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <article className="article-shell">
    <header className="page-heading"><p className="eyebrow">FIELD NOTES</p><h1>{title}</h1><p>{description}</p></header>
    <div className="prose">{children}</div>
  </article>;
}

export function Callout({ children }: { children: ReactNode }) {
  return <aside className="callout">{children}</aside>;
}
