import type { ReactNode } from "react";

export interface StepItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
}

export interface StepperProps {
  steps: StepItem[];
  currentStep: number;
}
