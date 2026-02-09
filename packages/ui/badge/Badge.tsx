import { cn } from "@lib/index.ts";
import type { BadgeProps } from "./Badge.types.ts";
import styles from "./Badge.module.css";

const Badge = ({ children, variant = "default", size = "m", className, ...rest }: BadgeProps) => {
  return (
    <span className={cn(styles.badge, styles[variant], styles[size], className)} {...rest}>
      {children}
    </span>
  );
};

export { Badge };
