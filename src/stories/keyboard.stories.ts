import type { Meta, StoryObj } from "@storybook/react";
import { Keyboard } from "@/components/keyboard";
import { fn } from "@storybook/test";

const ActionsData = {
  onClick: fn(),
};

const meta: Meta<typeof Keyboard> = {
  title: "Keyboard",
  component: Keyboard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { ...ActionsData },
};

export default meta;
type Story = StoryObj<typeof Keyboard>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    variant: "default",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "default",
  },
};
