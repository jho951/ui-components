import type { ReactNode } from "react";

export interface MenuItem {
  id: string;
  label: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  onSelect?: () => void;
}

export interface MenuProps {
  items: MenuItem[];
  onSelect?: (id: string) => void;
  onRequestClose?: () => void;
}

export interface ContextMenuProps extends MenuProps {
  children: ReactNode;
}
