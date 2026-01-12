import { forwardRef } from 'react';

import {BaseButtonProps} from "./BaseButton.types";
import styles from './BaseButton.module.css';


/**
 * BaseButton
 *
 * 모든 버튼 컴포넌트의 베이스 역할을 하며, variant, size, loading, 아이콘 등 다양한 커스텀을 지원합니다.
 *
 * @example
 * <BaseButton>클릭</BaseButton>
 *
 * // 다양한 props 활용
 * <BaseButton variant="secondary" size="lg" leftIcon={<Icon name="arrow" />}>Next</BaseButton>
 *
 * // 로딩 상태
 * <BaseButton isLoading>Loading...</BaseButton>
 *
 * // ref 전달 (포커스, 포지션 등)
 * <BaseButton ref={btnRef}>Ref 사용</BaseButton>
 *
 * @param {BaseButtonProps} props
 * @param {React.Ref<HTMLButtonElement>} ref
 * @returns {JSX.Element}
 */
const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'm',
            isLoading = false,
            className,
            leftIcon,
            rightIcon,
            disabled = false,
            ...rest
        },
        ref,
    ) => {

        return (
            <button
                ref={ref}
                className={[
                    styles.button,
                    styles[variant],
                    styles[size],
                    isLoading && styles.isLoading,
                    disabled && styles.disabled,
                    className
                ].filter(Boolean).join(' ')}
                disabled={isLoading || disabled}
                aria-disabled={isLoading || disabled}
                {...rest}
            >
                {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
                <span className={styles.label}>{children}</span>
                {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
            </button>
        );
    },
);

BaseButton.displayName = 'BaseButton';

export { BaseButton };
