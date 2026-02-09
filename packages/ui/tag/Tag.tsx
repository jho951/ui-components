import type { TagProps } from "./index.ts";
import {cn} from '@/packages/lib';
import styles from "./Tag.module.css";

const Tag = ({ active, color = 'default', children }: TagProps) => {
  return (
      <span className={cn(styles.tag, styles[color], active && styles.active)}>
          {children}
      </span>
  );
}
export { Tag };
