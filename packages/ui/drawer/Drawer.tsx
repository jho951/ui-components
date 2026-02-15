import { createPortal } from "react-dom";

import { cn, ensurePortalRoot } from "@lib/index.ts";
import type { DrawerProps } from "./Drawer.types.ts";
import styles from "./Drawer.module.css";

const Drawer = ({ open, onClose, title, children, placement = "right", width }: DrawerProps) => {
  if (!open) return null;

  const panelStyle = width ? { width } : undefined;

  return createPortal(
    <div className={styles.container} role="presentation">
      <div className={styles.backdrop} onClick={onClose} />
      <aside className={cn(styles.panel, styles[placement])} style={panelStyle} role="dialog" aria-modal="true">
        <header className={styles.header}>
          <strong>{title}</strong>
          <button type="button" onClick={onClose} aria-label="Close drawer">×</button>
        </header>
        <div className={styles.body}>{children}</div>
      </aside>
    </div>,
    ensurePortalRoot("drawer-root")
  );
};

export { Drawer };
