import { useEffect, useRef, useState } from "react";

import { cn } from "@lib/index.ts";
import type { PopoverProps } from "./Popover.types.ts";
import styles from "./Popover.module.css";

const Popover = ({ trigger, content, open, defaultOpen = false, onOpenChange, placement = "bottom" }: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const rootRef = useRef<HTMLDivElement>(null);
  const isOpen = open ?? internalOpen;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setInternalOpen(false);
        onOpenChange?.(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onOpenChange]);

  return (
    <div className={styles.root} ref={rootRef}>
      <span
        onClick={() => {
          const next = !isOpen;
          setInternalOpen(next);
          onOpenChange?.(next);
        }}
      >
        {trigger}
      </span>
      {isOpen && <div className={cn(styles.panel, styles[placement])}>{content}</div>}
    </div>
  );
};

export { Popover };
