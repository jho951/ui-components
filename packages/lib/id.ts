/**
 * 전역 유니크 ID 생성 함수
 */
export function generateId (): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 9);

    if (typeof window !== "undefined" && window.crypto?.randomUUID) {return window.crypto.randomUUID();}

    if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
            const rand = window.crypto.getRandomValues(new Uint8Array(1))[0] & 15;
            const value = char === "x" ? rand : (rand & 3) | 8;
            return value.toString(16);
        });
    }
    
    return `${timestamp}-${randomPart}`;
}
