import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu, Menu } from "../../packages/ui/menu";

const meta = {
  title: "Actions/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Menu and ContextMenu playground.\n\nKeyboard:\n- ArrowUp / ArrowDown: move focus between menu items\n- Home / End: jump to first/last item\n- Escape: close open menu",
      },
    },
  },
  args: {
    items: [
      { id: "open", label: "Open" },
      { id: "rename", label: "Rename" },
      { id: "delete", label: "Delete", danger: true },
    ],
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContextMenu: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <div style={{ padding: 24, border: "1px dashed #ccc", borderRadius: 8 }}>Right click here</div>
    </ContextMenu>
  ),
};
