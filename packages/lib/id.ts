/**
 * 전역 유니크 ID 생성 함수
 */
export function generateId (): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 9);

    if (typeof window !== "undefined" && window.crypto?.randomUUID) {return window.crypto.randomUUID();}

    if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
        const template = "10000000-1000-4000-8000-100000000000";
        return template.replace(/[018]/g, (char: string) => {
            const c = Number(char);
            return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))).toString(16);
        });
    }
    
    return `${timestamp}-${randomPart}`;
}
