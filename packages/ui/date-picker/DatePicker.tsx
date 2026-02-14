import { useState } from "react";

import type { DatePickerProps, DateRangePickerProps } from "./DatePicker.types.ts";
import styles from "./DatePicker.module.css";

const DatePicker = ({ label, className, ...rest }: DatePickerProps) => {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {label && <label className={styles.label}>{label}</label>}
      <input type="date" className={styles.input} {...rest} />
    </div>
  );
};

const DateRangePicker = ({ startDate = "", endDate = "", onChange, label }: DateRangePickerProps) => {
  const [range, setRange] = useState({ startDate, endDate });

  const update = (key: "startDate" | "endDate", value: string) => {
    const next = { ...range, [key]: value };
    setRange(next);
    onChange?.(next);
  };

  return (
    <div className={styles.root}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.range}>
        <input
          type="date"
          className={styles.rangeInput}
          value={range.startDate}
          onChange={(e) => update("startDate", e.target.value)}
        />
        <span className={styles.dash}>-</span>
        <input
          type="date"
          className={styles.rangeInput}
          value={range.endDate}
          onChange={(e) => update("endDate", e.target.value)}
        />
      </div>
    </div>
  );
};

export { DatePicker, DateRangePicker };
