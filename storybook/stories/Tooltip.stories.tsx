import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../../packages/ui/tooltip";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Tooltip content",
    position: "top",
    children: <Button>Hover me</Button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
