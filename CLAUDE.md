# Backend Interview Study

## 프로젝트 개요
백엔드 면접 준비를 위한 정적 HTML/CSS/JS 웹사이트. GitHub Pages로 배포.
- **URL**: https://byesol.github.io/interview-study/
- **브랜치**: master
- **프레임워크 없음** — 순수 HTML/CSS/JS

## 디렉토리 구조
```
interview-study/
├── index.html          # 랜딩 페이지 (카테고리별 카드 그리드)
├── css/style.css       # 통합 다크 테마 디자인 시스템
├── js/main.js          # 아코디언, 탭, 검색, 전체 펼치기/접기
├── pages/              # 주제별 Q&A 페이지 (24개)
├── README.md
└── .gitignore
```

## 카테고리 & 파일 매핑 (index.html 기준)
| 카테고리 | 아이콘 | 페이지 파일들 |
|---------|--------|-------------|
| Database | DB (blue) | db-index, db-fulltext-ngram, db-transaction, db-join-normalization, db-replication-sharding, db-lock-concurrency |
| OS | OS (orange) | os-process-thread, os-tlb-context-switching, os-deadlock |
| Java | JV (red) | java-core, java-jvm-gc, java-concurrency, java-abstract-access, java-oop-solid |
| Spring & JPA | SP (green) | spring-core, spring-mvc, jpa-n1-lazy, backend-auth-jwt |
| Network | NW (cyan) | network-https-tcp |
| Infra | IF (accent2) | infra-vpc-nat-nginx, infra-redis, infra-docker |
| System Design | SD (pink) | design-seat-reservation, ai-rag |

## 페이지 HTML 템플릿 규칙
모든 `pages/*.html` 파일은 동일한 구조를 따른다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>페이지 제목</title>
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="page-header">
  <a href="../index.html" class="back-link">← 목록으로</a>
  <h1>페이지 제목</h1>
  <p>간단한 설명</p>
</div>
<div class="content">
  <div class="tab-nav">
    <button class="tab-btn active" onclick="switchTab('p1',this)">Part 1 · 제목</button>
    <button class="tab-btn" onclick="switchTab('p2',this)">Part 2 · 제목</button>
    <!-- ... -->
  </div>

  <div class="tab-content active" id="p1">
    <div class="qa-card">
      <div class="qa-q">질문</div>
      <div class="qa-a">
        <p>답변</p>
        <!-- 선택: tail-q, diagram-box, hl 등 -->
      </div>
    </div>
    <!-- 추가 qa-card들 -->
  </div>

  <div class="tab-content" id="p2">
    <!-- ... -->
  </div>
</div>
<script src="../js/main.js"></script>
</body>
</html>
```

## 주요 CSS 클래스
- `.qa-card` — Q&A 아코디언 카드 (클릭 시 `.open` 토글)
- `.qa-q` — 질문 (클릭 가능)
- `.qa-a` — 답변 (`.open` 시 표시)
- `.tab-nav`, `.tab-btn`, `.tab-content` — Part별 탭 네비게이션
- `.hl` — 하이라이트 텍스트
- `.tail-q` — 꼬리질문 박스
- `.diagram-box` — 다이어그램/구조도 박스
- `.diagram-label` — 다이어그램 라벨
- `.tq-label` — 꼬리질문 라벨
- `.flow-wrap` — 흐름도 래퍼
- `.page-header` — 페이지 상단 헤더
- `.back-link` — 목록으로 돌아가기 링크
- `.category` — 카테고리 표시

## 새 토픽 추가 워크플로우
사용자가 홈 디렉토리(~/Downloads 등)에 새 HTML 파일을 넣고 합쳐달라고 요청할 때:

1. **원본 읽기**: 사용자가 제공한 HTML 파일을 읽는다
2. **포맷 변환**: 위 템플릿 규칙에 맞게 변환한다
   - 다크 테마 CSS는 `../css/style.css` 링크 사용 (인라인 스타일 제거)
   - JS는 `../js/main.js` 스크립트 사용
   - Q&A 아코디언 형식으로 변환 (`.qa-card > .qa-q + .qa-a`)
   - Part별 탭으로 내용 분리
   - `page-header`에 `back-link` 포함
3. **파일 저장**: `pages/` 디렉토리에 적절한 파일명으로 저장
   - 명명 규칙: `{카테고리}-{토픽}.html` (예: `db-lock-concurrency.html`)
4. **index.html 업데이트**:
   - 해당 카테고리 섹션의 `.cards` 안에 카드 추가
   - hero `.stats`의 Topics 숫자 갱신
   - 카테고리가 새로 생기면 Categories 숫자도 갱신
5. **중복 확인**: 기존 페이지와 내용이 겹치면 합치거나 재구성
6. **커밋 & 푸시**: `git add → commit → push origin master`

## index.html 카드 템플릿
```html
<a class="card" href="pages/{파일명}.html">
  <h3>카드 제목</h3>
  <div class="desc">간단한 설명</div>
  <div class="tags"><span class="tag">태그1</span><span class="tag">태그2</span></div>
</a>
```

## 주의사항
- 모든 페이지는 한국어로 작성
- 프레임워크/빌드 도구 없음 — 순수 정적 파일
- GitHub Pages 배포이므로 서버 사이드 기능 없음
- `.vs/`, `.idea/`, `.vscode/` 등 IDE 폴더는 `.gitignore`에 포함됨
- 커밋 시 변경된 파일만 `git add`할 것 (`git add -A` 지양)
