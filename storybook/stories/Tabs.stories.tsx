import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Tabs } from "../../packages/ui/tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tabs component playground and prop controls.",
      },
    },
  },
  args: {
    items: [
      { value: "overview", label: "Overview", content: "Overview content" },
      { value: "usage", label: "Usage", content: "Usage content" },
      { value: "api", label: "API", content: "API content" },
    ],
    defaultValue: "overview",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};

export const Closable: Story = {
  render: (args) => {
    const [items, setItems] = useState(args.items ?? []);
    return (
      <Tabs
        {...args}
        items={items}
        closable
        onCloseTab={(value) => setItems((prev) => prev.filter((item) => item.value !== value))}
      />
    );
  },
};
