"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SlTabPanel = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/tab-panel/index.js"),
  { ssr: false }
);

export interface TabPanelProps {
  /** Name of the panel which is equal to the `panel` property in the Tab component */
  name: string;

  /** Content of the tab */
  children: ReactNode;
}

/**
 * Content panel for a specific tab.
 */
export function TabPanel({ name, children }: TabPanelProps) {
  return <SlTabPanel name={name}>{children}</SlTabPanel>;
}
