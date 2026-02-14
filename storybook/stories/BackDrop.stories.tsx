import type { Meta, StoryObj } from "@storybook/react";

import { BackDrop } from "../../packages/ui/backdrop";

const meta = {
  title: "Feedback/BackDrop",
  component: BackDrop,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "BackDrop component playground and prop controls.",
      },
    },
  },
  args: {
    visible: true,
    variant: "blur",
  },
} satisfies Meta<typeof BackDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {};
