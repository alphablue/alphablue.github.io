import { publishedPosts, site } from '@/lib/site';

export const dynamic = 'force-static';
function escapeXML(value: string) {
  return value.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!);
}
export function GET() {
  const items = publishedPosts.map(post => `<item><title>${escapeXML(post.title)}</title><link>${site.url}/posts/${post.slug}/</link><guid>${site.url}/posts/${post.slug}/</guid><description>${escapeXML(post.summary)}</description><pubDate>${new Date(`${post.date}T00:00:00+09:00`).toUTCString()}</pubDate></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${site.name}</title><link>${site.url}</link><description>${escapeXML(site.description)}</description><language>ko-kr</language><atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
