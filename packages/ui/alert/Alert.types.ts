import type { ReactNode } from "react";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  title?: ReactNode;
  children: ReactNode;
  variant?: AlertVariant;
  onClose?: () => void;
}
