# @jho951/ui-components

React / Next.js에서 같이 쓸 수 있는 **TypeScript UI 컴포넌트 패키지**입니다.

## 구조
- `packages/ui` : **npm publish 대상 라이브러리**
- `examples/react` : React(Vite) + Storybook (포트 6006)
- `examples/next` : Next.js + Storybook (포트 6007)

## 설치/빌드
```bash
pnpm i
pnpm -C packages/ui build
```

## Storybook로 테스트
```bash
# React Storybook
pnpm -C examples/react storybook

# Next.js Storybook
pnpm -C examples/next storybook
```

## 로컬에서 publish 전 검증 (추천)
`packages/ui`에서 pack 만들고, 실제 프로젝트에 설치해서 확인하세요.
```bash
pnpm -C packages/ui build
pnpm -C packages/ui pack
# dist/*.tgz 생성
```

## npm publish
> 스코프 패키지(@jho951)는 기본이 private라서, public로 올릴 때 `--access public`가 필요합니다.

```bash
cd packages/ui
npm login
npm publish --access public
```

## 참고
- 아이콘은 `packages/ui/src/components/icon/svg.ts`를 **단일 소스**로 사용합니다.
  (`generate:icons`는 성공적으로 종료만 하며, 추가 생성물은 만들지 않습니다.)
