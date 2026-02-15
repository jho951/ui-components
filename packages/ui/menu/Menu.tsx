import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { cn } from "@lib/index.ts";
import type { ContextMenuProps, MenuProps } from "./Menu.types.ts";
import styles from "./Menu.module.css";

const Menu = ({ items, onSelect, onRequestClose }: MenuProps) => {
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const enabledIndexes = useMemo(
    () => items.map((item, index) => (item.disabled ? -1 : index)).filter((index) => index >= 0),
    [items]
  );

  useEffect(() => {
    const first = enabledIndexes[0];
    if (first !== undefined) itemRefs.current[first]?.focus();
  }, [enabledIndexes]);

  const focusIndex = (index: number) => {
    itemRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const current = itemRefs.current.findIndex((node) => node === document.activeElement);
    const enabledPos = enabledIndexes.indexOf(current);

    if (event.key === "Escape") {
      event.preventDefault();
      onRequestClose?.();
      return;
    }

    if (!enabledIndexes.length) return;
    if (enabledPos === -1) {
      focusIndex(enabledIndexes[0]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusIndex(enabledIndexes[(enabledPos + 1) % enabledIndexes.length]);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusIndex(enabledIndexes[(enabledPos - 1 + enabledIndexes.length) % enabledIndexes.length]);
    }
    if (event.key === "Home") {
      event.preventDefault();
      focusIndex(enabledIndexes[0]);
    }
    if (event.key === "End") {
      event.preventDefault();
      focusIndex(enabledIndexes[enabledIndexes.length - 1]);
    }
  };

  return (
    <ul className={styles.menu} role="menu" onKeyDown={handleKeyDown}>
      {items.map((item, index) => (
        <li key={item.id} role="none">
          <button
            ref={(el) => (itemRefs.current[index] = el)}
            type="button"
            role="menuitem"
            className={cn(styles.item, item.disabled && styles.disabled, item.danger && styles.danger)}
            tabIndex={item.disabled ? -1 : 0}
            disabled={item.disabled}
            onClick={() => {
              item.onSelect?.();
              onSelect?.(item.id);
              onRequestClose?.();
            }}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

const ContextMenu = ({ children, items, onSelect }: ContextMenuProps) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  return (
    <div
      className={styles.contextRoot}
      onContextMenu={(e) => {
        e.preventDefault();
        setPos({ x: e.clientX, y: e.clientY });
        setOpen(true);
      }}
    >
      {children}
      {open && (
        <div className={styles.contextMenu} style={{ left: pos.x, top: pos.y }}>
          <Menu
            items={items}
            onSelect={(id) => {
              onSelect?.(id);
              setOpen(false);
            }}
            onRequestClose={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export { Menu, ContextMenu };
