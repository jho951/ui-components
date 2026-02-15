import { useEffect, useState } from "react";

import { cn } from "@lib/index.ts";
import { generateId } from "@lib/id.ts";
import type { RadioGroupProps, RadioProps } from "./Radio.types.ts";
import styles from "./Radio.module.css";

const Radio = ({ label, className, disabled, id, ...rest }: RadioProps) => {
  const inputId = id ?? generateId();

  return (
    <label className={cn(styles.radio, disabled && styles.disabled, className)} htmlFor={inputId}>
      <input id={inputId} className={styles.input} type="radio" disabled={disabled} {...rest} />
      <span className={styles.control} aria-hidden="true" />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

const RadioGroup = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  direction = "vertical",
  disabled = false,
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;

  useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  return (
    <div className={cn(styles.group, styles[direction])} role="radiogroup" aria-disabled={disabled || undefined}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={option.value === currentValue}
          disabled={disabled || option.disabled}
          onChange={() => {
            setInternalValue(option.value);
            onChange?.(option.value);
          }}
        />
      ))}
    </div>
  );
};

export { Radio, RadioGroup };
