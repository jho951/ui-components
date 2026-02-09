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

### `main`
- 배포/소비자 브랜치
- Storybook 관련 파일 및 빌드 산출물 커밋 금지

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

### B. release/sync-main을 main 최신으로 맞추기

```bash
git checkout release/sync-main
git pull origin release/sync-main

git fetch origin main
git merge origin/main
```

---

### C. dev 변경을 release/sync-main에 반영하기 (권장: packages만 가져오기)

> `dev`를 그대로 merge 하면 Storybook이 유입되므로, **필요한 경로만 선택적으로 반영**합니다.

#### 1) sync-main으로 이동 + 원격 최신화
```bash

git checkout release/sync-main
git fetch --prune origin main dev
```
#### 2) sync-main은 항상 main 최신 유지
``` bash
git merge origin/main
```
#### 3) dev에서 packages만 반영 (storybook/산출물 제외)
``` bash
git restore --source origin/dev -- packages
```
#### 4 (선택) packages 안에 스토리 파일이 섞여 있다면 제거
```bash
# 스토리 파일이 있다면 main 반영 금지 정책에 따라 제거

git ls-files packages | grep -E '\.stories\.' | xargs -I{} git rm "{}"
git ls-files packages | grep -E '\.mdx$' | xargs -I{} git rm "{}"
```
#### 5) 커밋 & 푸시
``` bash
git add -A
git commit -m "sync: bring packages from dev (no storybook)"
git push origin release/sync-main
```

---

### D. release/sync-main → main PR

- GitHub에서 `release/sync-main` → `main` PR 생성
- 변경 파일 목록에 Storybook 관련 파일이 포함되지 않았는지 확인

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
