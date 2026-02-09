# CONTRIBUTING.md

ui-components 모노레포에 기여해주셔서 감사합니다. 🙌  
이 문서는 **개발자/기여자**를 위한 가이드로, **컴포넌트 개발 / Storybook / 빌드 / 배포 / 브랜치 운영 규칙**을 한 문서로 정리합니다.

> 핵심 목표  
> - `dev`에서 Storybook 포함 개발/검증  
> - `release/sync-main`에서 **main에 올릴 코드만** 정리/검증  
> - `main`에는 Storybook 관련 파일이 **절대** 포함되지 않도록 운영

---

## 1. 프로젝트 개요

이 저장소는 **React UI 컴포넌트 라이브러리(@jho951/ui-components)** 와  
전역 스타일/자산 패키지(예: `packages/assert`) 및 단일 Storybook 앱(예: `storybook/`)으로 구성된 **pnpm workspace 모노레포**입니다.

### 목표
- 재사용 가능한 UI 컴포넌트를 **일관된 API / 스타일 / 접근성** 기준으로 제공
- Storybook으로 컴포넌트 개발/검증을 빠르게 수행
- `main` 브랜치 머지 후 CI에서 빌드 및 npm publish가 가능하도록 구성

---

## 2. 구조

### 2-1. 폴더(예시)

> 실제 프로젝트 구조는 레포의 디렉토리/워크스페이스 구성에 따라 달라질 수 있습니다. 아래는 대표 예시입니다.

```text
├─ packages/
│  ├─ ui/             # 배포되는 UI 컴포넌트 라이브러리 (@jho951/ui-components)
│  ├─ assert/         # 전역 스타일/CSS 자산 패키지 (예: @jho951/assets 역할)
│  └─ ...             # 확장 패키지
│
├─ storybook/         # Storybook 앱 (1개만 운영)
│  ├─ .storybook/
│  │  ├─ main.ts      # story 경로, alias, bundler 설정
│  │  └─ preview.ts   # 전역 CSS 로드, decorators/parameters
│  ├─ stories/        # 스토리 파일 모음(단일 소스 권장)
│  └─ package.json
│
├─ pnpm-workspace.yaml
├─ package.json
└─ README.md
```

---

## 3. 브랜치 운영 (중요)

### 3-1. 브랜치 역할
- `dev`: 개발 브랜치 (Storybook 포함 가능)
- `release/sync-main`: main 반영 전 **정리/검증** 브랜치 (**main 기반 유지**)
- `main`: 배포/소비자 브랜치 (**Storybook 금지**)

상세 흐름은 [`docs/BRANCHING.md`](./docs/BRANCHING.md) 를 참고하세요.

### 3-2. main 금지 항목

#### 산출물/캐시 (커밋 금지)
- `dist/`, `packages/dist/`
- `node_modules/`, `packages/node_modules/`
- `storybook-static/`
- `.next/`, `coverage/`

#### Storybook 관련 (main 금지)
- `.storybook/`
- `apps/storybook/` 또는 `storybook/` (프로젝트에 존재한다면)
- `**/*.stories.*`
- `**/*.mdx` (스토리/문서가 mdx로 관리되는 경우)

---

## 4. 개발 환경

**Node.js: >= 22**  
**pnpm: 9.x**

### 버전 확인
```bash
node -v # Node.js: >= 22
pnpm -v # pnpm: 9.x
```

---

## 5. 로컬 설치

pnpm workspace를 사용하므로 `packages/*`, `storybook/`까지 함께 설치됩니다.

```bash
# 루트에서 한 번만 실행합니다.
pnpm install
```

---

## 6. Storybook 실행 (dev 브랜치 기준)

Storybook 워크스페이스를 `./storybook` 디렉토리로 운용한다면:

```bash
pnpm -C storybook dev
# 기본 접속: http://localhost:6006
```

> 만약 Storybook 위치/명령이 다르다면, 해당 워크스페이스의 `package.json` scripts를 기준으로 실행하세요.

---

## 7. 빌드 / 배포

### 7-1. 빌드
배포 대상 패키지(`@jho951/ui-components`) 빌드:

```bash
pnpm --filter @jho951/ui-components build
```

### 7-2. 배포(publish)
- Storybook은 배포하지 않습니다.
- 기본은 `@jho951/ui-components` 1개 패키지 기준으로 진행합니다.  
  (필요 시 `packages/assert` 등은 별도 패키지로 배포)

```bash
pnpm --filter @jho951/ui-components build
pnpm --filter @jho951/ui-components publish --access public
```

---

## 8. 컴포넌트 개발 규칙

### 8-1. 컴포넌트 위치
- **컴포넌트 코드**: `packages/ui` 아래
- **공용 전역 스타일/자산**: `packages/assert`(또는 해당 역할의 패키지)에서 관리

### 8-2. 네이밍
- **컴포넌트/파일명**: `PascalCase` (예: `BaseButton.tsx`)
- **훅**: `use` + `camelCase` (예: `useInput.ts`)
- **상수**: `UPPER_SNAKE_CASE` (예: `BUTTON_VARIANTS`)

### 8-3. export 규칙
- **공개 API**: `packages/ui/index.ts` (배럴 파일)에서만 export
- **내부 구현**: `internal/` 같은 내부 로직은 외부로 export 하지 않는 것을 권장

---

## 9. 스토리(Story) 작성 규칙

스토리는 아래 경로에서만 작성하는 방식을 권장합니다(단일 소스):
`storybook/stories/**/**.stories.tsx`

### 9-1. Storybook CSF 필수 형태
모든 스토리 파일은 `default export(meta)`를 반드시 포함해야 합니다.  
(누락 시 `NoMetaError` 발생)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@jho951/ui-components";

const meta: Meta<typeof Spinner> = {
  title: "components/Spinner",
  component: Spinner,
  args: { size: 24 }
};

export default meta;

type Story = StoryObj<typeof Spinner>;
export const Playground: Story = {};
```

### 9-2. 스토리 네이밍 가이드
- `title`은 `components/<ComponentName>` 형식을 권장합니다.
- 예: `components/BaseButton`, `components/Icon`, `components/Spinner`

---

## 10. CSS / 스타일 가이드

### 10-1. 전역 스타일 로드
Storybook 전역 스타일은 `storybook/.storybook/preview.ts`에서 로드합니다(예시).

```ts
// storybook/.storybook/preview.ts
import "@jho951/assets/style/reset.css";
import "@jho951/assets/style/theme.css";
import "@jho951/assets/style/font.css";
import "@jho951/assets/style/class.css";
```

### 10-2. CSS 적용이 안 될 때 체크리스트
- `preview.ts`에서 CSS `import` 여부 확인
- `main.ts`에서 `@jho951/ui-components`가 `dist`가 아닌 소스 코드를 바라보도록 `alias` 설정 확인
- `packages/ui/package.json`에 아래 `sideEffects`가 포함되어 있는지 확인

```json
{"sideEffects": ["**/*.css"]}
```

---

## 11. PR / 머지 규칙 (권장)

- 개발 PR: feature → `dev`
- 릴리즈/반영 PR: `release/sync-main` → `main`
- `dev` 내용을 `release/sync-main`에 반영할 때는 **merge 대신**, `packages`만 선택적으로 가져오는 방식을 권장합니다.  
  - 이유: Storybook이 `main`으로 유입되는 것을 구조적으로 차단

선택 반영(권장) 명령은 [`docs/BRANCHING.md`](./docs/BRANCHING.md)에 포함되어 있습니다.

---

## 12. 커밋 메시지 규칙

메시지 서두에 아래 태그를 사용해 주세요:

| 태그 | 의미 |
| :--- | :--- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 |
| `style` | 스타일 변경 (기능 변경 없음) |
| `docs` | 문서 수정 |
| `chore` | 설정/빌드/의존성 변경 |

예시:
- `feat: add Spinner component`
- `fix: apply global css in storybook preview`
- `docs: update contributing guide`

---

## 13. PR 가이드

PR 제출 시 최소 아래 내용을 포함해 주세요:
- **변경 요약**: 무엇을 왜 변경했는지
- **Storybook 확인 내용**: 동작 및 스타일 검증 결과(스크린샷 권장)
- **관련 링크**: 관련 이슈 또는 참고 자료 링크

---

기여 전/후에 **Storybook**으로 동작과 스타일이 정상인지 꼭 확인해 주세요.
