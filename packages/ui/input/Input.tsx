import { forwardRef, useId } from "react";

import { cn } from "@lib/index.ts";
import type { InputProps } from "./Input.types.ts";
import styles from "./Input.module.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    helperText,
    error,
    startIcon,
    endIcon,
    className,
    fullWidth = false,
    size = "m",
    id,
    disabled,
    ...rest
  }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cn(styles.root, fullWidth && styles.fullWidth, className)}>
        {label && (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={cn(styles.control, styles[size], disabled && styles.disabled, error && styles.invalid)}>
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={styles.input}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={describedBy}
            disabled={disabled}
            {...rest}
          />
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </div>
        {helperText && !error && (
          <span id={helperId} className={styles.helper}>
            {helperText}
          </span>
        )}
        {error && (
          <span id={errorId} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
