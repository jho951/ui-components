import { useEffect, useMemo, useRef, useState } from "react";

import type { OtpInputProps } from "./OtpInput.types.ts";
import styles from "./OtpInput.module.css";

const OtpInput = ({ length = 6, value = "", onChange, disabled }: OtpInputProps) => {
  const [digits, setDigits] = useState<string[]>(Array.from({ length }, (_, i) => value[i] ?? ""));
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    setDigits(Array.from({ length }, (_, i) => value[i] ?? ""));
  }, [length, value]);

  const joined = useMemo(() => digits.join(""), [digits]);

  useEffect(() => {
    onChange?.(joined);
  }, [joined, onChange]);

  return (
    <div className={styles.root}>
      {digits.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => (refs.current[idx] = el)}
          className={styles.input}
          value={digit}
          maxLength={1}
          inputMode="numeric"
          disabled={disabled}
          onChange={(e) => {
            const next = e.target.value.replace(/\D/g, "").slice(-1);
            setDigits((prev) => {
              const copy = [...prev];
              copy[idx] = next;
              return copy;
            });
            if (next) refs.current[idx + 1]?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !digits[idx]) refs.current[idx - 1]?.focus();
          }}
        />
      ))}
    </div>
  );
};

export { OtpInput };
