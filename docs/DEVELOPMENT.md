# Development Guide

이 문서는 로컬 개발/검증을 위한 가이드입니다.

---

## 요구 환경

```bash
node -v # Node.js: >= 22
pnpm -v # pnpm: 9.x
```

---

## 설치

```bash
pnpm install
```

---

## Storybook 실행 (dev 브랜치 기준)

Storybook 워크스페이스를 `./storybook` 디렉토리로 운용한다면:

```bash
pnpm -C storybook dev
# http://localhost:6006
```

---

## UI 라이브러리 빌드

```bash
pnpm --filter @jho951/ui-components build
```

---

## 로컬에서 "main 금지 파일" 확인 팁

아래 파일/폴더가 커밋에 섞이지 않도록 주의합니다.

- `packages/dist/`, `packages/node_modules/`
- `dist/`, `node_modules/`, `storybook-static/`

### (선택) 추적 중인 산출물 제거

만약 과거에 산출물이 커밋되어 추적 중이라면:

```bash
git rm -r --cached dist packages/dist node_modules packages/node_modules storybook-static
```

---

## npm 배포(publish)

- Storybook은 배포하지 않습니다.
- 배포는 `@jho951/ui-components`만 진행합니다.

```bash
pnpm --filter @jho951/ui-components build
pnpm --filter @jho951/ui-components publish --access public
```
