import { useEffect } from "react";

import { cn } from "@/packages/lib";
import type { ToastProps } from "./Toast.types.ts";
import styles from "./Toast.module.css";

const Toast = ({
  open,
  title,
  message,
  variant = "info",
  duration = 3000,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    if (!open || !duration) return;
    const timer = window.setTimeout(() => onClose?.(), duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  const role = variant === "error" ? "alert" : "status";

  return (
    <div className={cn(styles.toast, styles[variant])} role={role} aria-live={variant === "error" ? "assertive" : "polite"}>
      <div className={styles.body}>
        {title && <strong className={styles.title}>{title}</strong>}
        {message && <div className={styles.message}>{message}</div>}
      </div>
      {onClose && (
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
      )}
    </div>
  );
};

export { Toast };
