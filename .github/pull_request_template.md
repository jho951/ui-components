<!--
Default Pull Request Template (applies to all PRs unless a specific template is selected)
Repo policy: dev → release/sync-main → main, and main must NOT include Storybook or build artifacts.
-->

## Summary
- What changed?
- Why?

## Type
- [ ] feat
- [ ] fix
- [ ] refactor
- [ ] style
- [ ] docs
- [ ] chore
- [ ] release/sync-main → main

## Verification
- [ ] `pnpm install` (if needed)
- [ ] `pnpm --filter @jho951/ui-components build`
- [ ] (dev only) `pnpm -C storybook dev` checked UI/Styles

## Policy checks (main must stay clean)
- [ ] No Storybook in main (`storybook/`, `.storybook/`, `storybook-static/`, `*.stories.*`, `*.mdx`)
- [ ] No artifacts in git (`dist/`, `packages/dist/`, `node_modules/`, `packages/node_modules/`, `.next/`, `coverage/`)

## Screenshots (optional)
- Attach Storybook screenshots/GIF if UI changed.

## Notes / Risks
- Potential breaking changes?
- Migration steps (if any)?
