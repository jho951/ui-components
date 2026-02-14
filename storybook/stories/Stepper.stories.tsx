import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "../../packages/ui/stepper";

const meta = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Stepper component playground and prop controls." } },
  },
  args: {
    currentStep: 2,
    steps: [
      { id: "1", label: "Cart" },
      { id: "2", label: "Shipping" },
      { id: "3", label: "Payment" },
      { id: "4", label: "Complete" },
    ],
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
