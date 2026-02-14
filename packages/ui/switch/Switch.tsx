import { useEffect, useState } from "react";

import { cn } from "@lib/index.ts";
import type { SwitchProps } from "./Switch.types.ts";
import styles from "./Switch.module.css";

const Switch = ({ checked, defaultChecked = false, onChange, label, className, disabled, ...rest }: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked ?? internalChecked;

  useEffect(() => {
    if (checked !== undefined) setInternalChecked(checked);
  }, [checked]);

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <div className={cn(styles.root, className)}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        className={cn(styles.button, isChecked && styles.checked)}
        disabled={disabled}
        onClick={toggle}
        {...rest}
      />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export { Switch };
