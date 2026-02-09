import type { HTMLAttributes } from "react";

export type AvatarSize = "s" | "m" | "l" | number;
export type AvatarShape = "circle" | "square";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}
