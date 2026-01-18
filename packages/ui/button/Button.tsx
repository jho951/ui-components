import { forwardRef } from "react";

import { Spinner } from "../spinner";
import {cn} from "../../lib";
import type { BaseButtonProps, ButtonProps } from "./index";
import styles from "./Button.module.css";


const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({className,children, variant = 'primary', size = 'm', disabled = false, ...rest}, ref,) => {
        return (
            <button
                className={cn(styles.button, styles[variant], styles[size], disabled && styles.disabled, className)}
                disabled={disabled}
                {...rest}
                ref={ref}
            >
                <span className={styles.label}>{children}</span>
            </button>
        );
    },
);
BaseButton.displayName = 'BaseButton';

/**
 * Button (실제 사용될 인터페이스 컴포넌트)
 * 비즈니스 로직(로딩 시 Spinner 렌더링)을 캡슐화합니다.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, isLoading,leftIcon,rightIcon, ...rest }, ref) => {
        if (isLoading) return <Spinner />;
        return (
            <BaseButton ref={ref}{...rest}>
                {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
                {children}
                { rightIcon && <span className={styles.icon}>{rightIcon}</span>}
            </BaseButton>
        );
    }
);

Button.displayName = 'Button';
export { Button };