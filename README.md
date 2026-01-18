# @jho951/ui-components

---

### 버전 확인
````bash
# 해당하는지 확인해주세요.
node -v # Node.js: >= 22
pnpm -v # pnpm: 9.x
````

### 설치

````bash
# pnpm workspace를 통해서 packages와 storybook이 함께 설치됩니다.
pnpm install 
````

### Storybook 실행
````bash
# 기본 접속 주소는 http://localhost:6006 입니다.
pnpm -C storybook dev
````

### UI 라이브러리 빌드
````bash
# UI 패키지만 빌드
pnpm --filter @jho951/ui-components build
````

### npm 배포 (publish)
- Storybook은 배포하지 않고 <b>packages/ui</b>만 배포합니다.
````bash
pnpm --filter @jho951/ui-components build
pnpm --filter @jho951/ui-components publish --access public
````

### 라이선스
- 이 프로젝트는 [LICENSE](./LICENSE) 파일을 따릅니다.

---