import { useEffect, useState } from "react";

import { cn } from "@lib/index.ts";
import type { SegmentedControlProps } from "./SegmentedControl.types.ts";
import styles from "./SegmentedControl.module.css";

const SegmentedControl = ({ options, value, defaultValue, onChange }: SegmentedControlProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? "");
  const currentValue = value ?? internalValue;

  useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  return (
    <div className={styles.root} role="tablist" aria-label="Segmented control">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          className={cn(styles.item, currentValue === option.value && styles.active)}
          disabled={option.disabled}
          onClick={() => {
            setInternalValue(option.value);
            onChange?.(option.value);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export { SegmentedControl };
