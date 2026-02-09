import type { KeyboardEvent } from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@lib/index.ts";
import type { TabsProps } from "./Tabs.types.ts";
import styles from "./Tabs.module.css";

const Tabs = ({ items, value, defaultValue, onChange }: TabsProps) => {
  const baseId = useId();
  const [internalValue, setInternalValue] = useState<string>(() => defaultValue ?? items[0]?.value ?? "");
  const currentValue = value ?? internalValue;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const activeIndex = useMemo(() => items.findIndex((item) => item.value === currentValue), [items, currentValue]);

  const setValue = (nextValue: string) => {
    setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!items.length) return;
    const lastIndex = items.length - 1;
    let nextIndex = activeIndex;

    if (event.key === "ArrowRight") nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    if (event.key === "ArrowLeft") nextIndex = activeIndex <= 0 ? lastIndex : activeIndex - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex !== activeIndex) {
      event.preventDefault();
      const nextItem = items[nextIndex];
      if (!nextItem.disabled) {
        setValue(nextItem.value);
        tabRefs.current[nextIndex]?.focus();
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.tablist} role="tablist" aria-orientation="horizontal" onKeyDown={handleKeyDown}>
        {items.map((item, index) => {
          const selected = item.value === currentValue;
          return (
            <button
              key={item.value}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.value}`}
              id={`${baseId}-tab-${item.value}`}
              tabIndex={selected ? 0 : -1}
              className={cn(styles.tab, selected && styles.active, item.disabled && styles.disabled)}
              disabled={item.disabled}
              onClick={() => !item.disabled && setValue(item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.value}
          role="tabpanel"
          id={`${baseId}-panel-${item.value}`}
          aria-labelledby={`${baseId}-tab-${item.value}`}
          hidden={item.value !== currentValue}
          className={styles.panel}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export { Tabs };
