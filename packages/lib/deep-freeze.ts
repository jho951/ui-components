/** 객체를 재귀적으로 동결하여 완전한 읽기 전용 상태로 만듭니다. */
export function deepFreeze<T>(obj: T, seen = new WeakSet<object>()): T {
    if (obj === null || typeof obj !== 'object' || seen.has(obj as object)) {return obj;}
    seen.add(obj as object);

    const keys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj),] as (keyof T)[];

    for (const k of keys) {
        const v = obj[k];
        if (v && typeof v === 'object') {deepFreeze(v, seen);}
    }
    return Object.freeze(obj);
}