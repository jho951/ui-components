<!--
Template: release/sync-main → main
Goal: main must NOT contain Storybook or build artifacts.
-->

## 목적 (release/sync-main → main)
이 PR은 `release/sync-main` 브랜치의 변경을 `main`에 반영합니다.
- dev에서 Storybook 포함 개발 가능
- release/sync-main에서는 packages만 반영(권장)
- main에는 Storybook 관련 파일이 절대 포함되면 안 됩니다.

## 포함된 변경
- [ ] packages 소스 변경만 포함 (권장)
- [ ] 문서(README/CONTRIBUTING/docs) 변경 포함 (해당 시)

## 금지 항목 점검 (main 정책)
아래 패턴이 diff에 **절대** 포함되지 않았는지 확인하세요.
- Storybook: `storybook/`, `.storybook/`, `storybook-static/`, `*.stories.*`, `*.mdx`
- Artifacts: `dist/`, `packages/dist/`, `node_modules/`, `packages/node_modules/`, `.next/`, `coverage/`

## 검증 결과
- [ ] `pnpm --filter @jho951/ui-components build` 통과
- [ ] (선택) `pnpm test` / `pnpm lint` (프로젝트에 존재할 경우)

### 빌드 로그 / 요약
- (여기에 붙여넣기)

## 리스크 / 롤백
- 영향 범위:
- 롤백 방법: main에서 이전 릴리즈 태그/커밋으로 revert
