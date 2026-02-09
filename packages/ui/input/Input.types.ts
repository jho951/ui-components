import type { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "s" | "m" | "l";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: InputSize;
}
