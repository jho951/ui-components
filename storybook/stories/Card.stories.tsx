import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../../packages/ui/card";

const meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Card component playground and prop controls.",
      },
    },
  },
  render: () => (
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body content</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
