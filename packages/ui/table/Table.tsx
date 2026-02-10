import type { ReactNode } from "react";
import { cn } from "@lib/index.ts";
import type { TableProps } from "./Table.types.ts";
import styles from "./Table.module.css";

const Table = <T extends Record<string, ReactNode>>({ columns, data, caption, striped = false, compact = false }: TableProps<T>) => {
  return (
    <div className={styles.wrapper}>
      <table className={cn(styles.table, striped && styles.striped, compact && styles.compact)}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ textAlign: col.align, width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key} style={{ textAlign: col.align }}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
