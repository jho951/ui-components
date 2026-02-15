import type { ReactNode } from "react";

export interface DataGridColumn<T> {
  key: keyof T & string;
  header: ReactNode;
  sortable?: boolean;
}

export interface DataGridProps<T extends Record<string, unknown>> {
  columns: DataGridColumn<T>[];
  rows: T[];
  searchable?: boolean;
}
