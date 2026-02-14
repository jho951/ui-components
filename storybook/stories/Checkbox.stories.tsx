import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../../packages/ui/checkbox";

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Checkbox component playground and prop controls.",
      },
    },
  },
  args: {
    label: "약관에 동의합니다",
    checked: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
