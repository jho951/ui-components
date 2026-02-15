import type { InputHTMLAttributes, ReactNode } from "react";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

export interface RadioOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: "horizontal" | "vertical";
  disabled?: boolean;
}
