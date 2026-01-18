# CONTRIBUTING.md

ui-components 모노레포에 기여해주셔서 감사합니다. 🙌  
이 문서는 **컴포넌트 개발 / Storybook / 빌드 / 배포**를 안정적으로 진행하기 위한 협업 가이드입니다.

---

## 1. 프로젝트 개요

이 저장소는 **React UI 컴포넌트 라이브러리(@jho951/ui-components)** 와  
전역 스타일 패키지(**packages/assert**) 및 단일 Storybook 앱(**storybook/**) 으로 구성된 **pnpm workspace 모노레포**입니다.

### 목표

- 재사용 가능한 UI 컴포넌트를 **일관된 API / 스타일 / 접근성** 기준으로 제공
- Storybook을 통해 컴포넌트 개발/검증을 빠르게 수행
- `main` 머지 시 CI에서 빌드 및 npm publish가 가능하도록 구성

---

## 2. 레포 구조

```text
├─ packages/
│  ├─ ui/             # 배포되는 UI 컴포넌트 라이브러리 (@jho951/ui-components)
│  ├─ assert/         # 전역 스타일/CSS 자산 패키지 (@jho951/assets 역할)
│  └─ ...             # 확장 패키지
│
├─ storybook/         # Storybook 앱 (1개만 운영)
│  ├─ .storybook/
│  │  ├─ main.ts      # story 경로, alias, viteFinal 설정
│  │  └─ preview.ts   # 전역 CSS 로드, decorators/parameters
│  ├─ stories/        # 스토리 파일 모음(단일 소스)
│  └─ package.json
│
├─ pnpm-workspace.yaml
├─ package.json
└─ README.md
```
---

## 3. 개발 환경

**Node.js: >= 22**

**pnpm: 9.x**

### 버전 확인
```bash
node -v # Node.js: >= 22
pnpm -v # pnpm: 9.x
```

---

## 4. 설치

pnpm workspace를 사용하므로 `packages/*`, `storybook/`까지 함께 설치됩니다.

```bash
# 루트에서 한 번만 실행합니다.
pnpm install
```

---

## 5. Storybook 실행
**스토리북 기본 주소: http://localhost:6006**

```bash
# 루트에서 실행합니다.
pnpm -C storybook dev
```

---

## 6. 컴포넌트 개발 규칙

### 6-1. 컴포넌트 위치
* **컴포넌트 코드**: `packages/ui` 아래에 위치합니다.
* **공용 전역 스타일**: `packages/assert`에서 관리합니다.

### 6-2. 네이밍
* **컴포넌트/파일명**: `PascalCase` (예: `BaseButton.tsx`)
* **훅**: `use` + `camelCase` (예: `useInput.ts`)
* **상수**: `UPPER_SNAKE_CASE` (예: `BUTTON_VARIANTS`)

### 6-3. export 규칙
* **공개 API**: `packages/ui/index.ts` (배럴 파일)에서만 export 합니다.
* **내부 구현**: `internal/`과 같은 내부 로직은 외부로 export 하지 않는 것을 원칙으로 합니다.

---

## 7. 스토리(Story) 작성 규칙

스토리는 반드시 아래 경로에서만 작성합니다:
`storybook/stories/**/**.stories.tsx`

### 7-1. Storybook CSF 필수 형태
모든 스토리 파일은 `default export(meta)`를 반드시 포함해야 합니다. **(누락 시 `NoMetaError` 발생)**

**예시:**
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

---

### 7-2. 스토리 네이밍 가이드
* `title`은 `components/<ComponentName>` 형식을 권장합니다.
* **예시**: `components/BaseButton`, `components/Icon`, `components/Spinner`

---

## 8. CSS / 스타일 가이드

### 8-1. 전역 스타일 로드
Storybook 전역 스타일은 `storybook/.storybook/preview.ts`에서 로드합니다.

```typescript
// storybook/.storybook/preview.ts
import "@jho951/assets/style/reset.css";
import "@jho951/assets/style/theme.css";
import "@jho951/assets/style/font.css";
import "@jho951/assets/style/class.css";
```

### 8-2. CSS 적용이 안 될 때 체크리스트
* `preview.ts`에서 CSS `import` 여부를 확인합니다.
* `main.ts`에서 `@jho951/ui-components`가 `dist`가 아닌 소스 코드를 바라보도록 `alias` 설정이 되어 있는지 확인합니다.
* `packages/ui/package.json`에 아래와 같이 `sideEffects` 설정이 포함되어 있는지 확인합니다.

```json
{"sideEffects": ["**/*.css"]}
```

## 9. 빌드
UI 라이브러리 빌드 시 아래 명령어를 사용합니다:
```bash
pnpm --filter @jho951/ui-components build
```
## 10. 커밋 메시지 규칙

메시지 서두에 아래 태그를 사용해 주세요:

| 태그 | 의미 |
| :--- | :--- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 |
| `style` | 스타일 변경 (기능 변경 없음) |
| `docs` | 문서 수정 |
| `chore` | 설정/빌드/의존성 변경 |

**커밋 메시지 예시:**
* `feat: add Spinner component`
* `fix: apply global css in storybook preview`
* `docs: update contributing guide`

---

## 11. PR 가이드

PR 제출 시 최소 아래 내용을 포함해 주세요:
* **변경 요약**: 무엇을 왜 변경했는지 기술합니다.
* **Storybook 확인 내용**: 동작 및 스타일 검증 결과(스크린샷 권장)를 포함합니다.
* **관련 링크**: 관련 이슈 또는 참고 자료 링크를 첨부합니다.

---

## 12. 배포 원칙 (중요)

* **배포 대상**: `npm publish` 대상은 `packages/ui`이며, 필요 시 `packages/assert`도 별도 패키지로 배포합니다.
* **제외 대상**: `storybook/` 폴더는 배포 대상에 포함되지 않습니다.
* **배포 흐름**: `main` 브랜치 머지 후 CI 환경에서 `build/publish`가 실행되는 흐름을 유지합니다.

---

기여 전/후에 **Storybook**으로 동작과 스타일이 정상인지 꼭 확인해 주세요.