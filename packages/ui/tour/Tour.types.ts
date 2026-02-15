import type { ReactNode } from "react";

export interface TourStep {
  id: string;
  title: ReactNode;
  description?: ReactNode;
}

export interface TourProps {
  open: boolean;
  steps: TourStep[];
  currentStep?: number;
  onStepChange?: (index: number) => void;
  onClose?: () => void;
}
