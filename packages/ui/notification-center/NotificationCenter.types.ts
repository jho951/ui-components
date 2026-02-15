import type { ReactNode } from "react";

export interface NotificationItem {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  read?: boolean;
  createdAt?: string;
}

export interface NotificationCenterProps {
  items: NotificationItem[];
  onRead?: (id: string) => void;
  onRemove?: (id: string) => void;
}
