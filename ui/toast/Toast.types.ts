import type { ReactNode } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastProps {
  open: boolean;
  title?: string;
  message?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
}
