import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "../../packages/ui/calendar";

const meta = {
  title: "Form/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
