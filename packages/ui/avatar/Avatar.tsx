import { useMemo } from "react";

import { cn } from "@/packages/lib";
import type { AvatarProps } from "./Avatar.types.ts";
import styles from "./Avatar.module.css";

const Avatar = ({ src, alt, name, size = "m", shape = "circle", className, ...rest }: AvatarProps) => {
  const initials = useMemo(() => {
    if (!name) return "";
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");
  }, [name]);

  const sizeStyle = typeof size === "number" ? { width: size, height: size } : undefined;

  return (
    <div
      className={cn(styles.avatar, styles[shape], typeof size === "string" && styles[size], className)}
      style={sizeStyle}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt ?? name ?? "avatar"} className={styles.image} />
      ) : (
        <span className={styles.fallback}>{initials || "?"}</span>
      )}
    </div>
  );
};

export { Avatar };
