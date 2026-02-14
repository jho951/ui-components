import { createPortal } from "react-dom";
import { useMemo, useState } from "react";

import { ensurePortalRoot } from "@lib/index.ts";
import type { CommandPaletteProps } from "./CommandPalette.types.ts";
import styles from "./CommandPalette.module.css";

const CommandPalette = ({ open, onClose, items, placeholder = "Type a command..." }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return items;
    return items.filter((item) => item.label.toLowerCase().includes(keyword));
  }, [items, query]);

  if (!open) return null;

  return createPortal(
    <div className={styles.container} role="presentation">
      <div className={styles.backdrop} onClick={onClose} />
      <section className={styles.panel} role="dialog" aria-modal="true" aria-label="Command palette">
        <input
          autoFocus
          className={styles.input}
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className={styles.list}>
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                className={styles.item}
                type="button"
                onClick={() => {
                  item.onSelect?.();
                  onClose();
                }}
              >
                <span className={styles.label}>{item.label}</span>
                {item.description && <span className={styles.description}>{item.description}</span>}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>,
    ensurePortalRoot("command-palette-root")
  );
};

export { CommandPalette };
