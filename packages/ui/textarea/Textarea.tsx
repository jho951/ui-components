import React, {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import { cn } from "../../lib";
import type { TextareaProps } from "./index";
import styles from "./Textarea.module.css";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ autoResize = true, className, value, ...rest }, ref) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement, []);

    useEffect(() => {
      if (!autoResize || !innerRef.current) return;
      const el = innerRef.current;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }, [value, autoResize]);

    return (
      <textarea
          className={cn(styles.textarea, autoResize && styles.autoResize, className)}
          ref={innerRef}
          value={value}
          {...rest}
      />
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
