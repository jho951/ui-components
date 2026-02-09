/**
 * 전달받은 인자들 중 유효한 문자열만 합쳐서 하나의 클래스 문자열로 반환합니다.
 * deepFreeze를 사용하여 처리 과정의 안정성을 높였습니다.
 */
declare function cn(...inputs: (string | undefined | null | boolean | object)[]): string;

/** 객체를 재귀적으로 동결하여 완전한 읽기 전용 상태로 만듭니다. */
declare function deepFreeze<T>(obj: T, seen?: WeakSet<object>): T;

declare function ensurePortalRoot(id: string): HTMLElement;

/**
 * 전역 유니크 ID 생성 함수
 */
declare function generateId(): string;

type MOD_TYPE = "Meta" | "Control";
declare const MOD: MOD_TYPE;

export { MOD, cn, deepFreeze, ensurePortalRoot, generateId };
