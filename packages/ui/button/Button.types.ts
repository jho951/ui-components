import { ButtonHTMLAttributes, ReactNode } from 'react';

/** 버튼 타입 정의 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';

/** 버튼 크기 정의 */
export type ButtonSize = 's' | 'm' | 'l';

/**
 * 공통 버튼 속성 정의 (버튼/링크 모두 공유)
 * 실제 button 엘리먼트에 필요한 props까지 확장
 */
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** 버튼의 텍스트 또는 요소 */
    children: ReactNode;

    /** 버튼의 시각적 스타일 지정 */
    variant?: ButtonVariant;

    /** 버튼의 크기 선택 */
    size?: ButtonSize;



    /** 커스텀 클래스 이름을 추가하여 스타일을 확장합니다. */
    className?: string;

    /** 버튼 활성화 여부 */
    disabled?: boolean;
}


export interface ButtonProps extends BaseButtonProps {
    isLoading?: boolean;
    loadingText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}
