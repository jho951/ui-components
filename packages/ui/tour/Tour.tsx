import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { ensurePortalRoot } from "@lib/index.ts";
import type { TourProps } from "./Tour.types.ts";
import styles from "./Tour.module.css";

const Tour = ({ open, steps, currentStep = 0, onStepChange, onClose }: TourProps) => {
  const [index, setIndex] = useState(currentStep);

  useEffect(() => setIndex(currentStep), [currentStep]);

  if (!open || !steps.length) return null;
  const step = steps[Math.max(0, Math.min(index, steps.length - 1))];

  return createPortal(
    <div className={styles.container} role="presentation">
      <div className={styles.backdrop} onClick={onClose} />
      <section className={styles.card} role="dialog" aria-modal="true">
        <strong className={styles.title}>{step.title}</strong>
        {step.description && <p className={styles.description}>{step.description}</p>}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.button}
            disabled={index === 0}
            onClick={() => {
              const next = Math.max(0, index - 1);
              setIndex(next);
              onStepChange?.(next);
            }}
          >
            Prev
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              if (index >= steps.length - 1) {
                onClose?.();
                return;
              }
              const next = index + 1;
              setIndex(next);
              onStepChange?.(next);
            }}
          >
            {index >= steps.length - 1 ? "Done" : "Next"}
          </button>
        </div>
      </section>
    </div>,
    ensurePortalRoot("tour-root")
  );
};

export { Tour };
