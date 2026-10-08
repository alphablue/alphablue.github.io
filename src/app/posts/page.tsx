import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/lib/site';

export const metadata: Metadata = { title: '글', description: '직접 실험하고 확인한 Android 개발 기록.', alternates: { canonical: '/posts/' } };

export default function Posts() {
  return <div className="page-shell"><header className="page-heading"><p className="eyebrow">ALL NOTES</p><h1>하나씩 쌓아가는 기록</h1><p>Compose와 Android, 그 아래에서 동작하는 시스템에 관한 글입니다.</p></header>
    <div className="archive-bar"><span>전체 글</span><span>{posts.length}편</span></div>
    {posts.length ? posts.map(post => <Link className="question-row" href={`/posts/${post.slug}/`} key={post.slug}><div><span className="topic-label">{post.category} · {post.date}</span><h2>{post.title}</h2><p>{post.summary}</p></div><span aria-hidden="true">↗</span></Link>) : <div className="empty-state"><span className="empty-symbol" aria-hidden="true">[  ]</span><h2>첫 번째 기록을 준비하고 있어요.</h2><p>상태가 바뀌면 화면에서는 어떤 일이 일어날까요?<br />Compose의 동작을 작은 예제부터 살펴볼 예정입니다.</p><Link className="button" href="/series/compose/">예정된 주제 살펴보기 <span aria-hidden="true">→</span></Link></div>}
  </div>;
}
