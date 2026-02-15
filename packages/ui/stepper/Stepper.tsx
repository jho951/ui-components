import { cn } from "@lib/index.ts";
import type { StepperProps } from "./Stepper.types.ts";
import styles from "./Stepper.module.css";

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <nav className={styles.root} aria-label="Stepper">
      <ol className={styles.list}>
        {steps.map((step, index) => {
          const stepNo = index + 1;
          const isActive = stepNo === currentStep;
          const isDone = stepNo < currentStep;

          return (
            <li key={step.id} className={cn(styles.item, isActive && styles.active, isDone && styles.done)}>
              <span className={styles.index}>{isDone ? "✓" : stepNo}</span>
              <span className={styles.label}>{step.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { Stepper };
