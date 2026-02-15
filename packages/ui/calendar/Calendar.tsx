import { useMemo, useState } from "react";

import { cn } from "@lib/index.ts";
import type { CalendarProps } from "./Calendar.types.ts";
import styles from "./Calendar.module.css";

const weekdayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Calendar = ({ value = new Date(), onSelect }: CalendarProps) => {
  const [cursor, setCursor] = useState(new Date(value.getFullYear(), value.getMonth(), 1));
  const [selected, setSelected] = useState(value);

  const days = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const max = new Date(year, month + 1, 0).getDate();

    const cells: Array<number | null> = [];
    for (let i = 0; i < firstDay; i += 1) cells.push(null);
    for (let d = 1; d <= max; d += 1) cells.push(d);
    return cells;
  }, [cursor]);

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <button type="button" className={styles.nav} onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}>
          ‹
        </button>
        <strong>
          {cursor.getFullYear()}-{String(cursor.getMonth() + 1).padStart(2, "0")}
        </strong>
        <button type="button" className={styles.nav} onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}>
          ›
        </button>
      </header>
      <div className={styles.grid}>
        {weekdayLabels.map((day) => (
          <strong key={day} className={styles.cell}>{day}</strong>
        ))}
        {days.map((day, idx) => {
          if (!day) return <span key={`empty-${idx}`} className={styles.cell} />;
          const date = new Date(cursor.getFullYear(), cursor.getMonth(), day);
          const isSelected =
            date.getFullYear() === selected.getFullYear() &&
            date.getMonth() === selected.getMonth() &&
            date.getDate() === selected.getDate();

          return (
            <button
              key={day}
              type="button"
              className={cn(styles.cell, isSelected && styles.selected)}
              onClick={() => {
                setSelected(date);
                onSelect?.(date);
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export { Calendar };
