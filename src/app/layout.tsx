import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { posts, site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'alphablue — Android, 한 겹 더 깊이', template: '%s | alphablue' },
  description: site.description,
  icons: { icon: { url: '/brand/icon.png', sizes: '64x64', type: 'image/png' }, apple: '/brand/apple-touch-icon.png' },
  openGraph: { type: 'website', locale: 'ko_KR', siteName: site.name, title: 'alphablue — Android, 한 겹 더 깊이', description: site.description },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>
    <a className="skip-link" href="#main">본문으로 건너뛰기</a>
    <header className="site-header"><div className="header-inner">
      <Link className="wordmark" href="/" aria-label="alphablue 홈"><Image className="brand-mark" src="/brand/logo.webp" alt="" width={192} height={107} /><span>alphablue<span className="wordmark-dot">.</span></span></Link>
      <Navigation />
      <a className="github-link" href="https://github.com/alphablue" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a>
    </div></header>
    <main id="main" className="site-main">
      {posts.some(post => post.isDemo) && <aside className="preview-banner"><span className="demo-label">디자인 미리보기</span><p>테스트 글로 화면을 구성하고 있습니다. 실제 학습 글은 추후 발행합니다.</p><Link href="/posts/">테스트 글 보기 →</Link></aside>}
      {children}
    </main>
    <footer className="site-footer"><div><Link className="footer-brand" href="/" aria-label="alphablue 홈"><Image src="/brand/logo.webp" alt="" width={192} height={107} /><span>alphablue.</span></Link><p>관찰하고, 실험하고, 함께 자라는 기록.</p></div><div className="footer-links"><a href="/feed.xml">RSS</a><a href="https://github.com/alphablue/alphablue.github.io">Source ↗</a><span>© {new Date().getUTCFullYear()} alphablue</span></div></footer>
  </body></html>;
}
