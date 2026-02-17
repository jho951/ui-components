import type { KeyboardEvent } from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@lib/index.ts";
import type { TabsProps } from "./Tabs.types.ts";
import styles from "./Tabs.module.css";

const Tabs = ({ items, value, defaultValue, onChange, orientation = "horizontal", closable = false, onCloseTab }: TabsProps) => {
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

  const getNextIndex = (key: string, currentIndex: number, lastIndex: number) => {
    if (key === "Home") return 0;
    if (key === "End") return lastIndex;

    const isNextKey = orientation === "horizontal" ? key === "ArrowRight" : key === "ArrowDown";
    const isPrevKey = orientation === "horizontal" ? key === "ArrowLeft" : key === "ArrowUp";

    if (isNextKey) return currentIndex === lastIndex ? 0 : currentIndex + 1;
    if (isPrevKey) return currentIndex <= 0 ? lastIndex : currentIndex - 1;
    return currentIndex;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!items.length) return;

    const lastIndex = items.length - 1;
    const nextIndex = getNextIndex(event.key, activeIndex, lastIndex);

    if (nextIndex === activeIndex) return;

    event.preventDefault();
    const nextItem = items[nextIndex];
    if (!nextItem?.disabled) {
      setValue(nextItem.value);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className={cn(styles.root, orientation === "vertical" && styles.verticalRoot)}>
      <div className={cn(styles.tablist, orientation === "vertical" && styles.verticalTablist)} role="tablist" aria-orientation={orientation} onKeyDown={handleKeyDown}>
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
              <span className={styles.tabLabel}>{item.label}</span>
              {closable && (
                <span
                  className={styles.close}
                  role="button"
                  tabIndex={0}
                  aria-label={`Close ${item.value}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    onCloseTab?.(item.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.stopPropagation();
                      onCloseTab?.(item.value);
                    }
                  }}
                >
                  ×
                </span>
              )}
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
