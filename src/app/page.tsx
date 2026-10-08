import Link from 'next/link';
import Image from 'next/image';
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
        <p className="hero-caption">작은 질문 하나가, 깊은 이해로 자라도록.</p>
      </div>
      <figure className="mascot-stage">
        <div className="mascot-topline"><span><span className="status-dot" /> GROWING WITH ANDROID</span><span>EST. 2026</span></div>
        <Image className="hero-mascot" src="/brand/mascot.webp" alt="새싹과 초록 안테나, 반짝이는 눈을 가진 alphablue 캐릭터" width={1120} height={625} preload />
        <figcaption><span>배움은 작은 호기심에서.</span><span>ONE QUESTION AT A TIME</span></figcaption>
      </figure>
    </section>
    <section className="learning-path" aria-label="Compose에서 시스템으로 이어지는 학습 경로"><span className="eyebrow">한 겹씩, 차근차근</span><ol><li><Link href="/series/compose/"><span>01</span>Compose <span aria-hidden="true">→</span></Link></li><li><Link href="/series/#android"><span>02</span>Android <span aria-hidden="true">→</span></Link></li><li><Link href="/series/#aosp"><span>03</span>AOSP & OS <span aria-hidden="true">↗</span></Link></li></ol></section>
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
