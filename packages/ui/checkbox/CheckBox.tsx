import React, {forwardRef, useEffect, useImperativeHandle, useRef,} from "react";
import {generateId, cn} from '@lib/index.ts';
import { Icon } from "../icon";
import { Label } from "../label";
import type { CheckboxProps } from "./index.ts";
import styles from "./CheckBox.module.css";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, error, indeterminate, className, ...rest }, ref) => {
        const id = rest.id || generateId();
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        useEffect(() => {
            if (inputRef.current) inputRef.current.indeterminate = !!indeterminate;
        }, [indeterminate]);

        return (
            <Label htmlFor={id} className={cn(styles.container, rest.disabled && styles.disabled, className)}>
                <div className={styles.wrapper}>
                    <input id={id} className='sr-only' type="checkbox" ref={inputRef} {...rest}/>
                    <div className={cn(styles.styledBox, error && styles.error, rest.checked && styles.checked, indeterminate && styles.indeterminate,)}>
                        {(rest.checked || indeterminate) && (
                          <Icon name={indeterminate ? "indeterminate" : "check"} />
                        )}
                    </div>
                </div>
                {label && <span className={styles.labelText}>{label}</span>}
            </Label>
        );
    }
);

Checkbox.displayName = "Checkbox";
export { Checkbox };