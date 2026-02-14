import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../../packages/ui/tooltip";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tooltip component playground and prop controls.",
      },
    },
  },
  args: {
    content: "Tooltip content",
    position: "top",
    children: <Button>Hover me</Button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
