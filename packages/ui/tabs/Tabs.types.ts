import type { ReactNode } from "react";

export interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  closable?: boolean;
  onCloseTab?: (value: string) => void;
}
