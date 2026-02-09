import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";
export type BadgeSize = "s" | "m";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
}
