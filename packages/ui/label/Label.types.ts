import { LabelHTMLAttributes } from 'react';

export type LabelVariant = 'default' | 'inline' | 'capsule' | 'error' | 'floating' | 'filled' | 'outlined';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  variant?: LabelVariant;
}