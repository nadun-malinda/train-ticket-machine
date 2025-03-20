import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button/button";
import { fn } from "@storybook/test";

const ActionsData = {
  onClick: fn(),
};

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { ...ActionsData },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "A",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "A",
    variant: "primary",
    size: "small",
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    children: "A",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: "A",
    size: "large",
    variant: "primary",
    disabled: false,
  },
};

export const Block: Story = {
  args: {
    children: "A",
    variant: "primary",
    disabled: false,
    block: true,
  },
};
