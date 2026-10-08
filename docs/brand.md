# 캐릭터와 컬러

사용자가 제공한 초록색 새싹 캐릭터를 사이트의 작은 로고로 사용합니다.
사이트 이름 `alphablue`와 학습 콘텐츠 구조는 유지합니다.

## 팔레트

- 크림 배경: `#fbfaf5`
- 본문 숲색: `#223b31`
- 링크·버튼 초록: `#286943`
- 민트 표면: `#eaf2e6`
- 안내 배지의 복숭아색: `#f6e7dc`

밝은 초록은 넓은 배경에, 짙은 초록은 글자와 버튼에 사용합니다.
본문은 장식보다 가독성을 우선하고, 캐릭터는 헤더·푸터·브라우저 아이콘에 작게 사용합니다.
캐릭터를 홈의 큰 대표 이미지로 확대하지 않습니다. 홈에서는 글과 학습 경로가 먼저 보이도록 소개 영역을 간결하게 유지합니다.

## 이미지

- `public/brand/mascot.webp`: 보관용 가공 이미지 (현재 화면에서는 사용하지 않음)
- `public/brand/logo.webp`: 헤더·푸터 로고
- `public/brand/icon.png`: 브라우저 아이콘
- `public/brand/apple-touch-icon.png`: 홈 화면 아이콘

원본: 사용자가 첨부한 `이미지_20261008130414.jpg`.
배경 제거에는 내장 ImageGen 도구를 사용했고, WebP 압축과 표시 크기별 내보내기에는 Sharp를 사용했습니다.
투명도를 보존하며 원본 캐릭터의 외형을 유지하도록 요청했습니다.

이미지 편집 프롬프트:

> Use case: background-extraction. Edit target: the attached image. Asset type: website mascot logo cutout. Remove only the white/gray studio background, floor, floor shadow and the separate white sparkle at bottom right. Preserve the exact green dome-shaped character: two rounded antennae, small two-leaf sprout at the top center, glossy black eyes with their white highlights, pink cheeks, smiling mouth, three-dimensional soft clay material, lighting, proportions and all edges. Keep the entire character uncropped. Genuine transparent alpha background, no background-colored rectangle or checkerboard baked into the pixels. Center the character with a modest even transparent margin, landscape framing close to the character's original aspect ratio, useful at both header-logo and hero-image sizes. Do not add text or other objects. Do not redesign or simplify the mascot.
