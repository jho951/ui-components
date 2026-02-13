import { useEffect, useRef, useState } from "react";

import { useStableId } from "@hook/index.ts";
import { cn } from "@lib/index.ts";
import type { DropdownProps } from "./Dropdown.types.ts";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  label,
  items,
  value,
  placeholder = "Select",
  size = "m",
  align = "start",
  disabled = false,
  onSelect,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const baseId = useStableId("dropdown");

  const currentValue = value ?? internalValue;
  const selectedItem = items.find((item) => item.value === currentValue);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const handleSelect = (nextValue: string) => {
    if (disabled) return;
    setInternalValue(nextValue);
    onSelect?.(nextValue);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <button
        type="button"
        ref={triggerRef}
        className={cn(styles.trigger, styles[size], styles[align], disabled && styles.disabled)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`${baseId}-menu`}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        <span className={styles.value}>{selectedItem ? selectedItem.label : placeholder}</span>
        <span className={styles.caret} aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <ul
          id={`${baseId}-menu`}
          role="menu"
          ref={menuRef}
          className={cn(styles.menu, styles[align])}
        >
          {items.map((item) => (
            <li key={item.value} role="none">
              <button
                type="button"
                role="menuitem"
                className={cn(styles.item, item.disabled && styles.itemDisabled)}
                onClick={() => !item.disabled && handleSelect(item.value)}
                disabled={item.disabled}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
