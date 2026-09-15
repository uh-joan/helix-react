import { type ReactNode } from "react";
import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export interface HelixStep {
  label: ReactNode;
  optional?: ReactNode;
}

export interface HelixStepperProps {
  steps: HelixStep[];
  activeStep: number;
  orientation?: "horizontal" | "vertical";
  /** Mark steps before activeStep as completed. Default true. */
  markComplete?: boolean;
}

/**
 * Helix Stepper — themed @mui/material Stepper (active/completed use the Helix
 * primary colour). Horizontal or vertical.
 */
export function HelixStepper({ steps, activeStep, orientation = "horizontal", markComplete = true }: HelixStepperProps) {
  return (
    <MuiStepper activeStep={activeStep} orientation={orientation} alternativeLabel={orientation === "horizontal"}>
      {steps.map((s, i) => (
        <Step key={i} completed={markComplete ? i < activeStep : undefined}>
          <StepLabel optional={s.optional}>{s.label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
