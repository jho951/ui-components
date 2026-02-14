import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "../../packages/ui/textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Write your message",
    rows: 4,
    autoResize: false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
