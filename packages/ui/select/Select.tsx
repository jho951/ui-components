import { forwardRef, useId } from "react";

import { cn } from "@lib/index.ts";
import type { SelectProps } from "./Select.types.ts";
import styles from "./Select.module.css";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({
    label,
    helperText,
    error,
    options,
    placeholder,
    className,
    fullWidth = false,
    size = "m",
    id,
    disabled,
    children,
    ...rest
  }, ref) => {
    const autoId = useId();
    const selectId = id ?? autoId;
    const helperId = helperText ? `${selectId}-helper` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cn(styles.root, fullWidth && styles.fullWidth, className)}>
        {label && (
          <label className={styles.label} htmlFor={selectId}>
            {label}
          </label>
        )}
        <div className={cn(styles.control, styles[size], disabled && styles.disabled, error && styles.invalid)}>
          <select
            ref={ref}
            id={selectId}
            className={styles.select}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={describedBy}
            disabled={disabled}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))
              : children}
          </select>
          <span className={styles.caret} aria-hidden>
            ▾
          </span>
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

Select.displayName = "Select";
export { Select };
