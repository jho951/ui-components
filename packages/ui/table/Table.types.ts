import type { ReactNode } from "react";

export type TableAlign = "left" | "center" | "right";

export interface TableColumn<T> {
  key: keyof T & string;
  header: ReactNode;
  align?: TableAlign;
  width?: string;
}

export interface TableProps<T extends Record<string, ReactNode>> {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  striped?: boolean;
  compact?: boolean;
}
