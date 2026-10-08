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
};

// 발행을 마친 글만 등록합니다. 작성 중인 원고는 templates/ 등 라우트 밖에 둡니다.
export const posts: Post[] = [];

export const composeTopics = [
  { title: '상태가 바뀌면 무엇이 다시 실행될까?', detail: 'State와 재구성의 출발점' },
  { title: '화면은 어떤 단계를 거쳐 그려질까?', detail: 'Composition · Layout · Drawing' },
  { title: 'Modifier 순서를 바꾸면 무엇이 달라질까?', detail: '제약조건과 크기, 배치, 터치 영역' },
  { title: 'LaunchedEffect는 언제 시작하고 끝날까?', detail: 'key와 작업의 수명' },
  { title: '리스트 항목의 상태는 어떻게 유지될까?', detail: 'LazyColumn과 항목의 정체성' },
  { title: '성능이 좋아졌다는 것을 어떻게 확인할까?', detail: '트레이스와 측정으로 확인하기' },
];
