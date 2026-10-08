export const site = {
  name: 'alphablue',
  url: 'https://alphablue.github.io',
  description: 'Compose에서 시작해 Android, AOSP, 운영체제로 이어지는 개발 학습 기록.',
};

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: 'Compose' | 'Android' | 'AOSP' | 'CS';
  isDemo?: boolean;
};

// 공개할 글만 등록합니다. 테스트 글은 isDemo로 구분하며 RSS·sitemap에서 제외합니다.
export const posts: Post[] = [
  {
    slug: 'test-compose-state',
    title: '상태가 바뀌면 무엇이 다시 실행될까?',
    summary: '긴 본문, Kotlin 코드, 표와 목차를 살펴보기 위한 Compose 테스트 글입니다.',
    date: '2026-10-08',
    category: 'Compose',
    isDemo: true,
  },
  {
    slug: 'test-android-main-thread',
    title: '메인 스레드의 일은 어디까지일까?',
    summary: '질문과 관찰 기록을 짧게 읽는 형태의 Android 테스트 글입니다.',
    date: '2026-10-08',
    category: 'Android',
    isDemo: true,
  },
  {
    slug: 'test-aosp-system',
    title: '앱에서 시작한 요청이 시스템 서비스에 닿기까지, 한 번의 호출을 따라가 보기',
    summary: '긴 제목과 여러 단계의 설명이 어떻게 보이는지 확인하는 AOSP 테스트 글입니다.',
    date: '2026-10-08',
    category: 'AOSP',
    isDemo: true,
  },
];

export const publishedPosts = posts.filter(post => !post.isDemo);

export const composeTopics = [
  { title: '상태가 바뀌면 무엇이 다시 실행될까?', detail: 'State와 재구성의 출발점' },
  { title: '화면은 어떤 단계를 거쳐 그려질까?', detail: 'Composition · Layout · Drawing' },
  { title: 'Modifier 순서를 바꾸면 무엇이 달라질까?', detail: '제약조건과 크기, 배치, 터치 영역' },
  { title: 'LaunchedEffect는 언제 시작하고 끝날까?', detail: 'key와 작업의 수명' },
  { title: '리스트 항목의 상태는 어떻게 유지될까?', detail: 'LazyColumn과 항목의 정체성' },
  { title: '성능이 좋아졌다는 것을 어떻게 확인할까?', detail: '트레이스와 측정으로 확인하기' },
];
