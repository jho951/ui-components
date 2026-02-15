import { useMemo, useState } from "react";

import type { ComboboxProps } from "./Combobox.types.ts";
import styles from "./Combobox.module.css";

const Combobox = ({ options, value = "", placeholder = "Search...", onSelect }: ComboboxProps) => {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return options;
    return options.filter((option) => option.label.toLowerCase().includes(keyword));
  }, [options, query]);

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={query}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
      />
      {open && filtered.length > 0 && (
        <ul className={styles.list} role="listbox">
          {filtered.map((option) => (
            <li key={option.value}>
              <button
                className={styles.item}
                type="button"
                onClick={() => {
                  setQuery(option.label);
                  setOpen(false);
                  onSelect?.(option.value);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Combobox };
