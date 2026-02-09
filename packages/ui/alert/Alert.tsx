import { cn } from "@lib/index.ts";
import type { AlertProps } from "./Alert.types.ts";
import styles from "./Alert.module.css";

const Alert = ({ title, children, variant = "info", onClose }: AlertProps) => {
  const role = variant === "error" ? "alert" : "status";

  return (
    <div className={cn(styles.alert, styles[variant])} role={role} aria-live={variant === "error" ? "assertive" : "polite"}>
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.content}>{children}</div>
      </div>
      {onClose && (
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
      )}
    </div>
  );
};

export { Alert };
