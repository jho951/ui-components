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
pnpm run build
```

---

## sync-main 운영 (dev 반영 + Storybook 자동 제외)

`release/sync-main` 브랜치에서만 실행:

```bash
git checkout release/sync-main
git pull origin release/sync-main
pnpm run sync-main
```

실행 후:

```bash
git status
git commit -m "sync: merge dev without storybook"
git push origin release/sync-main
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

## 배포/태그 자동화 (GitHub Actions)

- Storybook은 배포하지 않습니다.
- 배포 대상은 `@jho951/ui-components`입니다.
- `main`에 push하면 아래 순서로 자동 실행됩니다.

1. `ci` 성공
2. `publish-npm` 실행 및 npm publish
3. `auto-tag-main` 실행 (`vX.Y.Z` 패치 버전 자동 증가)
4. `publish-github-packages` 실행

필수 시크릿:
- npm 배포: `NPM_TOKEN`

현재 버전
v1.0.3

### 수동 배포(필요 시)
```bash
pnpm run build
pnpm -C packages publish --access public
```
