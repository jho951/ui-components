import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "../../packages/ui/progress";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Progress component playground and prop controls." } },
  },
  args: {
    value: 64,
    max: 100,
    showLabel: true,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
