import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "../../packages/ui/popover";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Actions/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Popover component playground and prop controls." } },
  },
  args: {
    trigger: <Button>Open Popover</Button>,
    content: <div>Popover content</div>,
    placement: "bottom",
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
