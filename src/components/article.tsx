import type { ReactNode } from 'react';
import Link from 'next/link';

type ArticleProps = {
  title: string;
  description: string;
  children: ReactNode;
  category?: string;
  isDemo?: boolean;
  toc?: { id: string; title: string }[];
};

export function Article({ title, description, children, category, isDemo, toc }: ArticleProps) {
  return <article className="article-shell">
    {category && <Link className="text-link back-link" href="/posts/">← 모든 글</Link>}
    <header className="page-heading"><p className="eyebrow">{category ?? 'FIELD NOTES'}</p><h1>{title}</h1><p>{description}</p>{isDemo && <span className="pill">테스트 글 · 디자인 확인용</span>}</header>
    {isDemo && <aside className="callout demo-notice">화면을 확인하기 위한 샘플입니다. 실제 학습 원고나 실행·검증을 마친 기술 설명이 아닙니다.</aside>}
    {toc && <div className="article-toc" aria-label="이 글의 목차"><p>이 글에서 살펴볼 내용</p><ol>{toc.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>)}</ol></div>}
    <div className="prose">{children}</div>
    {category && <div className="article-end"><Link className="text-link" href="/posts/">← 다른 글 둘러보기</Link><Link className="text-link" href="/series/compose/">Compose 학습 경로 →</Link></div>}
  </article>;
}

export function Callout({ children }: { children: ReactNode }) {
  return <aside className="callout">{children}</aside>;
}
