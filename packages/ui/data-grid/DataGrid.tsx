import { useId, useMemo, useState } from "react";

import type { DataGridProps } from "./DataGrid.types.ts";
import styles from "./DataGrid.module.css";

const DataGrid = <T extends Record<string, unknown>>({ columns, rows, searchable = true }: DataGridProps<T>) => {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<string>("");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const searchId = useId();
  const bodyId = useId();

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    const base = !keyword
      ? rows
      : rows.filter((row) => Object.values(row).some((v) => String(v).toLowerCase().includes(keyword)));

    if (!sortKey) return base;

    return [...base].sort((a, b) => {
      const av = String(a[sortKey] ?? "");
      const bv = String(b[sortKey] ?? "");
      const result = av.localeCompare(bv, undefined, { numeric: true });
      return sortDir === "asc" ? result : -result;
    });
  }, [query, rows, sortKey, sortDir]);

  const getAriaSort = (isSorted: boolean) => {
    if (!isSorted) return "none";
    return sortDir === "asc" ? "ascending" : "descending";
  };

  const getSortMark = (isSorted: boolean) => {
    if (!isSorted) return "";
    return sortDir === "asc" ? "▲" : "▼";
  };

  return (
    <section className={styles.wrapper}>
      {searchable && (
        <>
          <label htmlFor={searchId} className="sr-only">Search table rows</label>
          <input
            id={searchId}
            className={styles.search}
            value={query}
            placeholder="Search..."
            aria-controls={bodyId}
            onChange={(e) => setQuery(e.target.value)}
          />
        </>
      )}
      <table className={styles.table} role="grid">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} aria-sort={getAriaSort(sortKey === column.key)}>
                {column.sortable ? (
                  <button
                    type="button"
                    className={styles.sortBtn}
                    aria-label={`Sort by ${String(column.header)}`}
                    onClick={() => {
                      if (sortKey === column.key) setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
                      else {
                        setSortKey(column.key);
                        setSortDir("asc");
                      }
                    }}
                  >
                    {column.header} {getSortMark(sortKey === column.key)}
                  </button>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody id={bodyId}>
          {filtered.length > 0 ? (
            filtered.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column) => (
                  <td key={column.key}>{String(row[column.key] ?? "")}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No matching results</td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="sr-only" aria-live="polite">
        {filtered.length} rows shown
      </p>
    </section>
  );
};

export { DataGrid };
