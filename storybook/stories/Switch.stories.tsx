import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../../packages/ui/switch";

const meta = {
  title: "Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Switch component playground and prop controls." } },
  },
  render: () => {
    const [on, setOn] = useState(false);
    return <Switch checked={on} onChange={setOn} label={on ? "Enabled" : "Disabled"} />;
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
