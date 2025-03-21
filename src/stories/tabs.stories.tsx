import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@/components/tabs/tabs";
import { Tab } from "@/components/tabs/tab";
import { TabPanel } from "@/components/tabs/tab-panel";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  subcomponents: { Tab, TabPanel },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tab panel="general">General</Tab>
      <Tab panel="custom">Custom</Tab>
      <Tab panel="advanced">Advanced</Tab>
      <Tab panel="disabled" disabled>
        Disabled
      </Tab>

      <TabPanel name="general">This is the general tab panel.</TabPanel>
      <TabPanel name="custom">This is the custom tab panel.</TabPanel>
      <TabPanel name="advanced">This is the advanced tab panel.</TabPanel>
      <TabPanel name="disabled">This is a disabled tab panel.</TabPanel>
    </Tabs>
  ),
};
