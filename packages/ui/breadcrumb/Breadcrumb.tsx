import { cn } from "@lib/index.ts";
import type { BreadcrumbProps } from "./Breadcrumb.types.ts";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const content = item.href ? (
            <a href={item.href} onClick={item.onClick} className={styles.link}>
              {item.label}
            </a>
          ) : (
            <span className={cn(styles.link, item.current && styles.current)}>{item.label}</span>
          );

          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {content}
              {!isLast && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { Breadcrumb };
