import type { ReactNode } from "react";

export interface TreeNodeItem {
  id: string;
  label: ReactNode;
  children?: TreeNodeItem[];
}

export interface TreeViewProps {
  data: TreeNodeItem[];
  defaultExpandedIds?: string[];
  onSelect?: (id: string) => void;
}
