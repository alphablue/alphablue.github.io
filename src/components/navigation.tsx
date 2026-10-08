'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [['/', '홈'], ['/posts/', '글'], ['/series/', '시리즈'], ['/about/', '소개']] as const;

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="주 메뉴">
      {links.map(([href, label]) => {
        const active = href === '/' ? pathname === '/' : pathname.startsWith(href.slice(0, -1));
        return <Link key={href} href={href} aria-current={active ? 'page' : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
