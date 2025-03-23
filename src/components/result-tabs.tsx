import { Tab } from "./tabs/tab";
import { TabPanel } from "./tabs/tab-panel";
import { Tabs } from "./tabs/tabs";

export function ResultTabs() {
  return (
    <Tabs>
      <Tab panel="stations">Stations</Tab>
      <Tab panel="resent">Resent search</Tab>

      <TabPanel name="stations">This is the general tab panel.</TabPanel>
      <TabPanel name="resent">This is the custom tab panel.</TabPanel>
    </Tabs>
  );
}
