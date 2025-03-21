"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SlTab = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/tab/index.js"),
  { ssr: false }
);

export interface TabProps {
  /** Name of the tab */
  panel: string;

  /** TabPanel component as children */
  children: ReactNode;

  /** Is the tab disabled? */
  disabled?: boolean;
}

/**
 * A single tab inside the TabGroup.
 */
export function Tab({ panel, children, disabled = false }: TabProps) {
  return (
    <SlTab slot="nav" panel={panel} disabled={disabled}>
      {children}
    </SlTab>
  );
}
