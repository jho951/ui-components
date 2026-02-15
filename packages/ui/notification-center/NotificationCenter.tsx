import { cn } from "@lib/index.ts";
import type { NotificationCenterProps } from "./NotificationCenter.types.ts";
import styles from "./NotificationCenter.module.css";

const NotificationCenter = ({ items, onRead, onRemove }: NotificationCenterProps) => {
  return (
    <section className={styles.root} aria-label="Notification center">
      {items.map((item) => (
        <article key={item.id} className={cn(styles.item, !item.read && styles.unread)}>
          <strong className={styles.title}>{item.title}</strong>
          {item.description && <p className={styles.description}>{item.description}</p>}
          {item.createdAt && <time className={styles.time}>{item.createdAt}</time>}
          <div className={styles.actions}>
            {!item.read && (
              <button type="button" className={styles.action} onClick={() => onRead?.(item.id)}>
                Mark as read
              </button>
            )}
            <button type="button" className={styles.action} onClick={() => onRemove?.(item.id)}>
              Remove
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export { NotificationCenter };
