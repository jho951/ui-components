import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "../../packages/ui/form";
import { Input } from "../../packages/ui/input";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  render: () => (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input label="이메일" placeholder="name@example.com" fullWidth />
      <Button type="submit">Submit</Button>
    </Form>
  ),
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
