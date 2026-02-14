import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../../packages/ui/label";

const meta = {
  title: "Form/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Label component playground and prop controls.",
      },
    },
  },
  args: {
    children: "Email",
    required: true,
    variant: "default",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
