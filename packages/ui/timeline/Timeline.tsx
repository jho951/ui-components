import type { TimelineProps } from "./Timeline.types.ts";
import styles from "./Timeline.module.css";

const Timeline = ({ items }: TimelineProps) => {
  return (
    <ol className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <strong className={styles.title}>{item.title}</strong>
          {item.description && <p className={styles.description}>{item.description}</p>}
          {item.time && <small className={styles.time}>{item.time}</small>}
        </li>
      ))}
    </ol>
  );
};

export { Timeline };
