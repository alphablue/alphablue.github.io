import Link from 'next/link';

export default function NotFound() {
  return <div className="empty-state not-found"><p className="eyebrow">404 · NOT FOUND</p><h1>아직 기록되지 않은 페이지예요.</h1><p>주소를 확인하거나 홈에서 학습 경로를 살펴보세요.</p><Link className="button" href="/">홈으로 돌아가기 →</Link></div>;
}
