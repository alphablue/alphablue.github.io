import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/site';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> ANDROID ENGINEERING NOTES</p>
        <h1>화면에서 시작해,<br /><span>원리까지.</span></h1>
        <p className="hero-description">Compose로 만나는 작은 질문을 따라<br className="desktop-break" /> Android의 동작과 시스템의 원리를 탐구합니다.</p>
        <Link className="button" href="/posts/test-compose-state/">테스트 글 읽어보기 <span aria-hidden="true">↗</span></Link>
        <p className="hero-caption">작동하는 코드에서, 설명할 수 있는 코드로.</p>
      </div>
      <div className="system-map" aria-label="Compose UI에서 Android Framework, AOSP와 운영체제로 이어지는 학습 경로">
        <div className="map-topline"><span>EXPLORING THE LAYERS</span><span>01 — 03</span></div>
        <div className="map-layer layer-compose"><div><span className="layer-index">01 / INTERFACE</span><strong>Compose</strong><span>State · Layout · Rendering</span></div><span className="layer-symbol" aria-hidden="true">{`{ }`}</span></div>
        <div className="map-connector" aria-hidden="true">↓</div>
        <div className="map-layer layer-android"><div><span className="layer-index">02 / FRAMEWORK</span><strong>Android</strong><span>Lifecycle · Process · IPC</span></div><span className="layer-symbol" aria-hidden="true">↳</span></div>
        <div className="map-connector" aria-hidden="true">↓</div>
        <div className="map-layer layer-system"><div><span className="layer-index">03 / UNDER THE HOOD</span><strong>AOSP & OS</strong><span>Scheduling · Memory · Systems</span></div><span className="layer-symbol" aria-hidden="true">⌘</span></div>
        <p className="map-footnote"><span className="status-dot" /> ONE QUESTION, ONE LAYER DEEPER.</p>
      </div>
    </section>
    <section className="series-feature" aria-labelledby="series-heading"><div className="feature-side"><span className="eyebrow">FIRST SERIES</span><span className="series-number">01</span><span className="pill">연재 준비 중</span></div>
      <div className="feature-body"><p className="eyebrow">JETPACK COMPOSE</p><h2 id="series-heading">Compose를 이해하는 여섯 가지 질문</h2><p>상태의 변화부터 화면이 그려지는 과정까지.<br />작은 예제를 만들고, 예상과 실제 동작을 비교합니다.</p><Link className="text-link" href="/series/compose/">연재 구성 살펴보기 <span aria-hidden="true">→</span></Link></div>
      <div className="feature-topics"><span>STATE</span><span>LAYOUT</span><span>PERFORMANCE</span></div>
    </section>
    <section className="questions" aria-labelledby="questions-heading"><div className="section-heading"><div><p className="eyebrow">SAMPLE NOTES</p><h2 id="questions-heading">먼저 읽어보는 테스트 글</h2></div><Link className="text-link" href="/posts/">전체 글 보기 ↗</Link></div>
      {posts.slice(0, 3).map((post, index) => <Link className="question-row" href={`/posts/${post.slug}/`} key={post.slug}><span className="row-index">0{index + 1}</span><div><span className="topic-label">{post.category}{post.isDemo && ' · 테스트 글'}</span><h3>{post.title}</h3><p>{post.summary}</p></div><span className="row-arrow" aria-hidden="true">↗</span></Link>)}
    </section>
    <section className="closing-note"><span className="eyebrow">A WORK IN PROGRESS</span><p>배운 내용을 직접 확인하고,<br /><strong>다음 질문으로 이어가는 기록.</strong></p><Link className="text-link" href="/about/">이 블로그에 대하여 →</Link></section>
  </>;
}
