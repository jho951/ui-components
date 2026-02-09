<!--
Template: feature/* → dev
dev에는 Storybook 포함 가능. 단, 빌드 산출물(dist/node_modules 등)은 커밋하지 않습니다.
-->

## Summary
- What changed?
- Why?

## Checklist
- [ ] Storybook에서 확인: `pnpm -C storybook dev`
- [ ] 빌드 확인: `pnpm --filter @jho951/ui-components build`
- [ ] 산출물 커밋 금지: `dist/`, `packages/dist/`, `node_modules/`, `packages/node_modules/`

## Screenshots (optional)
- UI 변경 시 첨부
