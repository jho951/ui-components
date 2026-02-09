import { cn } from "@/packages/lib";
import type { SkeletonProps } from "./Skeleton.types.ts";
import styles from "./Skeleton.module.css";

const Skeleton = ({ width = "100%", height = "1rem", circle = false, className, style, ...rest }: SkeletonProps) => {
  return (
    <div
      className={cn(styles.skeleton, circle && styles.circle, className)}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
};

export { Skeleton };
