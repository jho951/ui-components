import type { ProgressProps } from "./Progress.types.ts";
import styles from "./Progress.module.css";

const Progress = ({ value, max = 100, showLabel = true }: ProgressProps) => {
  const clamped = Math.max(0, Math.min(value, max));
  const percent = (clamped / max) * 100;

  return (
    <div className={styles.root} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={max}>
      <div className={styles.track}>
        <div className={styles.bar} style={{ width: `${percent}%` }} />
      </div>
      {showLabel && <span className={styles.label}>{Math.round(percent)}%</span>}
    </div>
  );
};

export { Progress };
