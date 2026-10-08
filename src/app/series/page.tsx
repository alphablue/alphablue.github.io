import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '시리즈', alternates: { canonical: '/series/' } };
const paths = [
  ['android', '02', 'Android 기반 지식', 'Lifecycle, 비동기 작업, 상태 복원과 앱의 수명.'],
  ['aosp', '03', 'AOSP 내부 탐구', '프레임워크 소스를 따라가는 시스템 동작.'],
  ['cs', '04', 'CS와 실제 앱의 연결', '운영체제와 자료구조가 앱의 선택에 미치는 영향.'],
];

export default function Series() {
  return <div className="page-shell"><header className="page-heading"><p className="eyebrow">LEARNING PATHS</p><h1>질문을 따라, 한 겹 더 깊이</h1><p>하나의 주제를 순서대로 탐구하고 서로 연결합니다.</p></header>
    <Link className="series-link" href="/series/compose/"><span className="series-number">01</span><div><span className="pill">먼저 시작할 시리즈</span><h2>Compose를 이해하는 여섯 가지 질문</h2><p>State부터 렌더링과 성능 측정까지, 작은 예제로 쌓는 동작 원리.</p></div><span className="row-arrow" aria-hidden="true">↗</span></Link>
    <h2 className="future-title">앞으로 확장할 주제</h2>{paths.map(([id, number, title, description]) => <div id={id} className="question-row future-row" key={id}><span className="row-index">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="muted-label">계획 중</span></div>)}
  </div>;
}
