import type { ReactNode, SelectHTMLAttributes } from "react";

export type SelectSize = "s" | "m" | "l";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  options?: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
  size?: SelectSize;
  children?: ReactNode;
}
