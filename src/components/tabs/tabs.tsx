"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SlTabGroup = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/tab-group/index.js"),
  { ssr: false }
);

export interface TabsProps {
  /** Tab and TabPanel components as children */
  children: ReactNode;
}

/**
 * Tabs component that accepts Tab and TabPanel as children.
 */
export function Tabs({ children }: TabsProps) {
  return (
    <SlTabGroup activation="auto" show={() => {}}>
      {children}
    </SlTabGroup>
  );
}
