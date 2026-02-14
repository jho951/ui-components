import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../../packages/ui/pagination";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Pagination component playground and prop controls.",
      },
    },
  },
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />;
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
