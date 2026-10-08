import type { Metadata } from 'next';
import Link from 'next/link';
import { composeTopics } from '@/lib/site';

export const metadata: Metadata = { title: 'Compose를 이해하는 여섯 가지 질문', description: '상태, 재구성, 레이아웃, Effect, 리스트와 성능으로 이어지는 Compose 학습 경로.', alternates: { canonical: '/series/compose/' } };

export default function ComposeSeries() {
  return <div className="page-shell"><Link className="text-link back-link" href="/series/">← 모든 시리즈</Link><header className="page-heading"><p className="eyebrow">SERIES 01 · JETPACK COMPOSE</p><h1>Compose를 이해하는<br />여섯 가지 질문</h1><p>무엇이 달라질지 예상하고, 코드로 확인하고, 원리를 설명합니다.</p><span className="pill">연재 준비 중 · 아직 발행된 글이 없습니다</span></header>
    <div className="learning-note"><span>학습 방식</span><p>질문 → 최소 예제 → 결과 관찰 → 원리 이해 → 실제 적용</p></div>
    {composeTopics.map((topic, index) => <section id={`topic-${index + 1}`} className="question-row" key={topic.title}><span className="row-index">0{index + 1}</span><div><h2>{topic.title}</h2><p>{topic.detail}</p></div><span className="muted-label">준비 중</span></section>)}
    <aside className="callout">각 글에는 재현 코드와 확인한 개발 환경을 함께 기록할 예정입니다. 세부 주제와 순서는 실험 과정에서 조정될 수 있습니다.</aside>
  </div>;
}
