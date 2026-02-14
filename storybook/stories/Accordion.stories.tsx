import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../../packages/ui/accordion";

const meta = {
  title: "Actions/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Accordion component playground and prop controls.",
      },
    },
  },
  args: {
    items: [
      { id: "a", title: "Actions/Accordion", content: "평균 2-3일 내 도착" },
      { id: "b", title: "Actions/Accordion", content: "수령 후 7일 이내 가능" },
      { id: "c", title: "Actions/Accordion", content: "disabled", disabled: true },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
