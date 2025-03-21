"use client";

import dynamic from "next/dynamic";

const SlIcon = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/icon/index.js"),
  { ssr: false }
);

interface IconProps {
  /** Name of the icon */
  name: string;

  /** Tailwind class names */
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  return <SlIcon className={className} name={name}></SlIcon>;
}
