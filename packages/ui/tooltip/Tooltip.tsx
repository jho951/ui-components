import { useId } from "react";

import { cn } from "@/packages/lib";
import type { TooltipProps } from "./Tooltip.types.ts";
import styles from "./Tooltip.module.css";

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const tooltipId = useId();

  return (
    <span className={styles.wrapper} aria-describedby={tooltipId}>
      <span className={styles.target} tabIndex={0}>
        {children}
      </span>
      <span id={tooltipId} role="tooltip" className={cn(styles.tooltip, styles[position])}>
        {content}
      </span>
    </span>
  );
};

export { Tooltip };
