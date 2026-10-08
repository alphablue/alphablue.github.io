# alphablue

Compose에서 시작해 Android, AOSP, 운영체제로 이어지는 개발 학습 블로그입니다.

## 개발

Node.js 22와 npm을 사용합니다.

```sh
npm ci
npm run dev
```

로컬 미리보기: <http://localhost:3000>

공개 사이트: <https://alphablue.github.io/>

## 검증과 배포

```sh
npm run check
```

Next.js 정적 빌드, TypeScript 검사, 생성된 HTML·내부 경로 검증을 수행합니다.
결과는 `out/`에 생성됩니다. GitHub Pages의 Source는 **GitHub Actions**로 설정합니다.
`main` 푸시 시 검증 후 배포하고, PR에서는 빌드 검증만 실행합니다.

[GitHub Actions](https://github.com/alphablue/alphablue.github.io/actions/workflows/pages.yml)에서 실행 내역과 로그를 확인합니다.
수동으로 다시 배포하려면 **Run workflow → main → Run workflow**를 선택합니다.
`build` 작업에서 설치·검증·정적 파일 업로드를 수행하고, 성공하면 `deploy` 작업에서 GitHub Pages에 반영합니다.
PR에서는 검사만 하며 별도 미리보기 주소는 만들지 않습니다.

## 디자인 검토용 콘텐츠

현재 Compose, Android, AOSP 테스트 글 3편으로 목록·긴 제목·본문·Kotlin 코드·표·목차를 확인할 수 있습니다.
테스트 글은 `src/lib/site.ts`에서 `isDemo: true`로 표시하며 RSS와 sitemap에서 제외합니다.
각 테스트 MDX의 `robots: { index: false, follow: true }`는 검색 색인을 제외하도록 요청합니다. 직접 URL로는 공개되어 있습니다.
테스트 글이 있으면 사이트 상단에 디자인 미리보기 안내가 표시됩니다.

실제 원고를 발행할 때는 테스트 페이지를 삭제하고 목록에서도 제거합니다.
새 원고의 `isDemo`는 생략하고, 테스트 MDX를 재사용했다면 `robots`의 `index: false`도 제거합니다.

## 구조

- `src/app/`: 홈, 글 목록, 시리즈, 소개, sitemap, robots, RSS
- `src/app/about/page.mdx`: 실제 MDX 렌더링 페이지
- `src/components/`: 공통 탐색과 본문 컴포넌트
- `src/lib/site.ts`: 사이트 정보, 발행 글 목록, Compose 학습 주제
- `src/mdx-components.tsx`: MDX에서 사용하는 컴포넌트
- `public/brand/`: 새싹 캐릭터 로고, 홈 이미지, 브라우저·홈 화면 아이콘
- `docs/brand.md`: 색상 기준과 로고 이미지 가공 기록
- `templates/post.mdx`: 발행 전 원고 템플릿 (사이트에 포함되지 않음)
- `scripts/check-export.mjs`: 정적 배포 결과 확인

## 글 추가

1. `templates/post.mdx`를 복사해 라우트 밖에서 초안을 작성합니다.
2. 예제 실행과 기술 검증을 마친 후 `src/app/posts/<slug>/page.mdx`에 배치합니다.
3. 원고의 제목, 설명, canonical 경로와 검증 환경을 수정합니다.
4. `src/lib/site.ts`의 `posts`에 slug, title, summary, date (`YYYY-MM-DD`), category를 등록합니다.
5. `npm run check`로 본문·경로를 확인하고 변경 사항을 커밋합니다.

글 목록은 공개 목록을 사용하고 RSS와 sitemap에는 테스트 글을 제외한 글이 반영됩니다. **app 디렉터리에 둔 MDX는 직접 URL로 접근 가능하므로 초안은 app 밖에 보관합니다.**
첫 기술 글은 추후 검증 후 발행합니다.

## 운영 범위

Next.js + React + TypeScript + MDX를 사용하며 서버 없이 GitHub Pages에 배포합니다.
본문 코드 강조는 빌드 시 처리합니다. 글 변경은 다시 빌드해야 반영됩니다.
폰트는 Google Fonts에서 불러오며, 연결되지 않을 때는 시스템 폰트로 표시합니다.
