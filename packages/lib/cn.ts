import {deepFreeze} from '@lib/deep-freeze';
/**
 * 전달받은 인자들 중 유효한 문자열만 합쳐서 하나의 클래스 문자열로 반환합니다.
 * deepFreeze를 사용하여 처리 과정의 안정성을 높였습니다.
 */
export function cn (...inputs: (string | undefined | null | boolean | object)[]): string{
    const frozenInputs = deepFreeze(inputs);
    const classList = frozenInputs.filter((item): item is string => typeof item === 'string' && item.trim() !== '');

    return classList.join(' ');
}
