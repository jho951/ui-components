import type { ReactNode } from "react";

export interface SegmentedOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
