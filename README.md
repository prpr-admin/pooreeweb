# SITE — Astro + Markdown 기반 웹사이트

editorial/architectural 미학의 5-카테고리 정적 사이트.

## 🗂 카테고리 구조

| 카테고리 | 경로 | 용도 | 고유 메타데이터 |
|---|---|---|---|
| Information | `/information` | 공지, 소식, 업데이트 | `featured` |
| Archives | `/archives` | 지난 작업, 아카이브 | `year`, `medium` |
| Research | `/research` | 에세이, 연구, 분석 | `author`, `references[]` |
| Architecture | `/architecture` | 건축 프로젝트, 공간 | `location`, `area`, `status` |
| Objects | `/objects` | 오브젝트, 제품, 사물 | `material`, `dimensions`, `edition` |

---

## ⚙️ 설치 및 실행

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 시작 (http://localhost:4321)
npm run dev

# 3. 빌드
npm run build

# 4. 빌드 미리보기
npm run preview
```

---

## 📝 새 글 작성 방법

`src/content/{카테고리}/` 폴더에 `.md` 파일을 생성합니다.

### Information 예시

```markdown
---
title: "제목"
date: 2024-03-01
description: "간단한 설명"
tags: ["tag1", "tag2"]
featured: false
draft: false
---

본문을 여기에 작성합니다. **마크다운** 문법을 사용할 수 있습니다.
```

### Archives 예시

```markdown
---
title: "2024 작업 모음"
date: 2024-12-31
description: "설명"
tags: ["2024"]
year: 2024
medium: "digital"   # 'print' | 'digital' | 'mixed'
draft: false
---
```

### Research 예시

```markdown
---
title: "에세이 제목"
date: 2024-01-15
description: "설명"
tags: ["essay"]
author: "홍길동"
references:
  - "참고문헌 1"
  - "참고문헌 2"
draft: false
---
```

### Architecture 예시

```markdown
---
title: "프로젝트명"
date: 2024-02-10
description: "설명"
tags: ["residential"]
location: "서울, 마포구"
status: "completed"   # 'concept' | 'in-progress' | 'completed'
area: "85㎡"
draft: false
---
```

### Objects 예시

```markdown
---
title: "오브젝트명"
date: 2024-01-20
description: "설명"
tags: ["furniture"]
material: "오크, 황동"
dimensions: "W600 × D400 × H450mm"
edition: "에디션 5/20"
draft: false
---
```

---

## 🗃 파일 구조

```
src/
├── content/
│   ├── config.ts           ← 스키마 정의 (여기서 필드 추가/수정)
│   ├── information/        ← .md 파일들
│   ├── archives/
│   ├── research/
│   ├── architecture/
│   └── objects/
├── layouts/
│   ├── Base.astro          ← 사이드바, 글로벌 CSS
│   ├── CategoryPage.astro  ← 목록 페이지 공통 레이아웃
│   └── ArticlePage.astro   ← 단일 포스트 레이아웃
└── pages/
    ├── index.astro          ← 홈
    ├── 404.astro
    ├── information/
    │   ├── index.astro
    │   └── [slug].astro
    ├── archives/
    ├── research/
    ├── architecture/
    └── objects/
```

---

## 🎨 디자인 커스터마이즈

`src/layouts/Base.astro`의 `:root` CSS 변수를 수정하세요.

```css
:root {
  --bg: #F4F1EC;          /* 배경색 */
  --ink: #1A1916;         /* 메인 텍스트 */
  --ink-muted: #6B6760;   /* 보조 텍스트 */
  --accent: #C8410A;      /* 강조색 */
  --sidebar-w: 220px;     /* 사이드바 너비 */
}
```

카테고리별 색상:

```css
--col-information: #2D5A8E;
--col-archives: #5A4E8E;
--col-research: #2E7D52;
--col-architecture: #8E5A2D;
--col-objects: #8E2D4E;
```

---

## 🚀 배포

```bash
# Netlify / Vercel — 빌드 명령어
npm run build
# 출력 디렉토리: dist/
```

Netlify에 배포 시 `netlify.toml` 예시:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```
