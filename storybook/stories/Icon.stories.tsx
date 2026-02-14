import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../../packages/ui/icon";

const meta = {
  title: "Data Display/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Icon component playground and prop controls.",
      },
    },
  },
  args: {
    name: "spinner",
    size: 24,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
