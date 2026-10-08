import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('out');
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)]);
}
const routes = ['index.html', 'posts/index.html', 'series/index.html', 'series/compose/index.html', 'about/index.html', '404.html'];
for (const route of routes) {
  const html = readFileSync(join(root, route), 'utf8');
  assert.match(html, /<html[^>]+lang="ko"/, `${route}: 한국어 문서 설정`);
  assert.match(html, /<h1[\s>]/, `${route}: 정적 HTML에 제목 필요`);
}
assert.match(readFileSync(join(root, 'about/index.html'), 'utf8'), /화면에서 시작하는 질문/, 'MDX 본문 사전 렌더링');
assert.match(readFileSync(join(root, 'posts/index.html'), 'utf8'), /첫 번째 기록을 준비하고/, '발행 전 빈 목록');
for (const file of walk(root).filter(path => path.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^"]*"/g)) {
    if (href.startsWith('//')) continue;
    const path = join(root, decodeURIComponent(href));
    assert.ok(existsSync(path) || existsSync(join(path, 'index.html')), `${file}: 없는 내부 경로 ${href}`);
  }
}
for (const file of ['sitemap.xml', 'robots.txt', 'feed.xml']) assert.ok(existsSync(join(root, file)), `${file} 생성`);
assert.ok(!existsSync(join(root, 'templates')), '원고 템플릿은 발행 대상 아님');
console.log(`정적 페이지 ${routes.length}개, MDX 본문, 내부 링크, sitemap·robots·RSS 검증 완료`);
