import type { EmptyStateProps } from "./EmptyState.types.ts";
import styles from "./EmptyState.module.css";

const EmptyState = ({ title, description, icon, action }: EmptyStateProps) => {
  return (
    <section className={styles.root}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <strong className={styles.title}>{title}</strong>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </section>
  );
};

export { EmptyState };
