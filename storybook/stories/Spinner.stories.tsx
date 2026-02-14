import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "../../packages/ui/spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Spinner component playground and prop controls.",
      },
    },
  },
  args: {
    size: 24,
    label: "Loading",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
