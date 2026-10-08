import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/lib/site';

export const metadata: Metadata = { title: '글', description: 'Compose, Android와 시스템에 관한 글 모음. 현재는 디자인 검토용 테스트 글을 제공합니다.', alternates: { canonical: '/posts/' } };

export default function Posts() {
  return <div className="page-shell"><header className="page-heading"><p className="eyebrow">ALL NOTES</p><h1>하나씩 쌓아가는 기록</h1><p>지금은 테스트 글로 목록과 본문의 디자인을 확인할 수 있습니다.</p></header>
    <div className="archive-bar"><span>전체 글</span><span>{posts.length}편</span></div>
    {posts.length ? posts.map(post => <Link className="question-row" href={`/posts/${post.slug}/`} key={post.slug}><div><span className="topic-label">{post.category} · {post.date}{post.isDemo && ' · 테스트 글'}</span><h2>{post.title}</h2><p>{post.summary}</p></div><span className="row-arrow" aria-hidden="true">↗</span></Link>) : <div className="empty-state"><span className="empty-symbol" aria-hidden="true">[  ]</span><h2>첫 번째 기록을 준비하고 있어요.</h2><p>상태가 바뀌면 화면에서는 어떤 일이 일어날까요?<br />Compose의 동작을 작은 예제부터 살펴볼 예정입니다.</p><Link className="button" href="/series/compose/">예정된 주제 살펴보기 <span aria-hidden="true">→</span></Link></div>}
  </div>;
}
