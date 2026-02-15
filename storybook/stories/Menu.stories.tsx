import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";

import { ContextMenu, Menu } from "../../packages/ui/menu";
import { retry } from "./testUtils";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByText("Right click here");

    await retry(async () => {
      fireEvent.contextMenu(target);
      await canvas.findByRole("menu");
    });

    const openItem = await canvas.findByRole("menuitem", { name: "Open" });
    await waitFor(() => expect(openItem).toHaveFocus());

    await userEvent.keyboard("{ArrowDown}");
    const renameItem = await canvas.findByRole("menuitem", { name: "Rename" });
    await waitFor(() => expect(renameItem).toHaveFocus());

    await userEvent.keyboard("{End}");
    const deleteItem = await canvas.findByRole("menuitem", { name: "Delete" });
    await waitFor(() => expect(deleteItem).toHaveFocus());

    await retry(async () => {
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(canvas.queryByRole("menu")).not.toBeInTheDocument());
    });
  },
};
