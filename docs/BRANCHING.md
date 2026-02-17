# Branching Strategy (dev → release/sync-main → main)

이 문서는 저장소의 브랜치 운영 규칙을 정의합니다.

핵심 목표:
- `dev`에서 Storybook 포함 개발을 허용
- `main`에는 Storybook 관련 파일이 **절대 포함되지 않도록** 구조적으로 차단
- 
---

## 1) 브랜치 역할

### `dev`
- 기능 개발 브랜치
- Storybook(설정/스토리/프리뷰) 포함 가능

### `release/sync-main`
- `main` 반영 전 “정리/검증” 브랜치
- 원칙: **항상 `main`을 기반으로 최신 상태를 유지**
- `pnpm run sync-main`으로 `dev`를 반영하되 Storybook 경로는 자동 제외

### `main`
- 배포/소비자 브랜치
- Storybook 관련 파일 및 빌드 산출물 커밋 금지
- `main` push 시 자동 파이프라인 실행: `ci` → `publish-npm` → `auto-tag-main` → `publish-github-packages`

---

## 2) 표준 작업 흐름

### A. feature → dev

```bash
git checkout dev
git pull origin dev

# 작업...
git add -A
git commit -m "feat: ..."
git push origin dev
```

---

### B. release/sync-main 준비

```bash
git checkout release/sync-main
git pull origin release/sync-main
```

---

### C. dev 변경을 release/sync-main에 반영하기 (자동화)

`sync-main`에서는 수동으로 Storybook 파일을 지우지 않고 아래 스크립트만 실행합니다.

```bash
pnpm run sync-main
```

스크립트 동작:
1. `origin/main`을 `release/sync-main`에 merge
2. `origin/dev`를 `release/sync-main`에 merge
3. `package.json`을 merge 전(`main` 동기화 직후) 상태로 복원
4. `storybook`, `.storybook`, `apps/storybook`, `storybook-static` 제거

실행 후:

```bash
git status
git commit -m "sync: merge dev without storybook"
git push origin release/sync-main
```

주의:
- 스크립트는 `release/sync-main` 브랜치에서만 실행됩니다.
- 워킹트리에 추적 중 변경사항이 있으면 안전하게 중단됩니다.

---

### D. release/sync-main → main PR

- GitHub에서 `release/sync-main` → `main` PR 생성
- 변경 파일 목록에 Storybook 관련 파일이 포함되지 않았는지 확인
- 머지/푸시 후에는 GitHub Actions에서 자동 배포 체인 성공 여부를 확인

---

## 3) 자주 발생하는 이슈

### `refusing to merge unrelated histories`

#### 원인:
> `release/sync-main`이 `main`에서 갈라진 브랜치가 아니라 다른 루트에서 시작된 경우

해결(권장: main 기반으로 정렬):

```bash
git checkout release/sync-main
git fetch origin main

# 안전 백업
git branch backup/sync-main-before-align

# main 기준으로 맞추기
git reset --hard origin/main

# 원격도 동일하게 강제 정렬 (주의: 협업 중이면 공유 필요)
git push -f origin release/sync-main
```

---

## 4) main 금지 항목(요약)

- `dist/`, `packages/dist/`
- `node_modules/`, `packages/node_modules/`
- `storybook-static/`
- `.storybook/`, `apps/storybook/`, `storybook/`
- `**/*.stories.*`, `**/*.mdx`
