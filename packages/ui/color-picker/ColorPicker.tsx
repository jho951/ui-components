import { useEffect, useState } from "react";

import type { ColorPickerProps } from "./ColorPicker.types.ts";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ value = "#78b5ee", onChange, label = "Color" }: ColorPickerProps) => {
  const [color, setColor] = useState(value);

  useEffect(() => setColor(value), [value]);

  return (
    <label className={styles.root}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          onChange?.(e.target.value);
        }}
      />
      <span className={styles.value}>{color}</span>
    </label>
  );
};

export { ColorPicker };
