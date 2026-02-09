import type { ReactNode } from "react";

export type DropdownSize = "s" | "m" | "l";
export type DropdownAlign = "start" | "end";

export interface DropdownItem {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  label?: string;
  items: DropdownItem[];
  value?: string;
  placeholder?: string;
  size?: DropdownSize;
  align?: DropdownAlign;
  disabled?: boolean;
  onSelect?: (value: string) => void;
}
