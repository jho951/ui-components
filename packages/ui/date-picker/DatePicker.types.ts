import type { InputHTMLAttributes } from "react";

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export interface DateRangePickerProps {
  startDate?: string;
  endDate?: string;
  onChange?: (next: { startDate: string; endDate: string }) => void;
  label?: string;
}
