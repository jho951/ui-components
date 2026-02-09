import { useMemo, useState } from "react";

import { cn } from "@lib/index.ts";
import type { AccordionProps } from "./Accordion.types.ts";
import styles from "./Accordion.module.css";

const Accordion = ({ items, allowMultiple = false, defaultOpenIds = [] }: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const isOpen = (id: string) => openIds.includes(id);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((openId) => openId !== id);
      if (allowMultiple) return [...prev, id];
      return [id];
    });
  };

  const ids = useMemo(() => new Set(items.map((item) => item.id)), [items]);

  return (
    <div className={styles.root}>
      {items.map((item) => {
        const open = isOpen(item.id);
        return (
          <div key={item.id} className={cn(styles.item, open && styles.open, item.disabled && styles.disabled)}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={open}
              aria-controls={`${item.id}-panel`}
              id={`${item.id}-header`}
              disabled={item.disabled || !ids.has(item.id)}
              onClick={() => toggle(item.id)}
            >
              <span>{item.title}</span>
              <span className={styles.icon} aria-hidden>
                {open ? "−" : "+"}
              </span>
            </button>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-header`}
              className={styles.panel}
              hidden={!open}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Accordion };
