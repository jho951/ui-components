import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * 버튼 타입 정의
 */
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';

/**
 * 버튼 크기 정의
 */
type ButtonSize = 's' | 'm' | 'l';

/**
 * 공통 버튼 속성 정의 (버튼/링크 모두 공유)
 * 실제 button 엘리먼트에 필요한 props까지 확장
 */
interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

export type { ButtonVariant, ButtonSize, BaseButtonProps };
