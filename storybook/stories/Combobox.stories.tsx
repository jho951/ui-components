import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "../../packages/ui/combobox";

const meta = {
  title: "Form/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Combobox component playground and prop controls." } },
  },
  args: {
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
    ],
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
