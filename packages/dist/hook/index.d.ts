declare function useScrollY(): number;
declare function useScrollThresholdReached(threshold: number): boolean;
/**
 * 스크롤 잠금 훅
 * @param lock - true일 때 document.body의 스크롤을 막습니다.
 */
declare function useScrollLock(lock: boolean): void;
declare function useScrollSyncIndex(containerRef: React.RefObject<HTMLElement | null>, setIndex: (index: number) => void, debounceMs?: number): void;
declare function useScrollDetect(delay?: number): boolean;

export { useScrollDetect, useScrollLock, useScrollSyncIndex, useScrollThresholdReached, useScrollY };
