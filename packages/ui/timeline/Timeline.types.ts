import type { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
}
