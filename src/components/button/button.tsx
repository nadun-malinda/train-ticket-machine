"use client";

import dynamic from "next/dynamic";

const SlButton = dynamic(
  () => import("@shoelace-style/shoelace/dist/react/button/index.js"),
  { ssr: false }
);

/**
 * Button component props
 */
export interface ButtonProps {
  /** The button text or content */
  children?: React.ReactNode;

  /**
   * The variant of the button
   */
  variant?:
    | "default"
    | "primary"
    | "success"
    | "neutral"
    | "warning"
    | "danger"
    | "text";

  /** How large should the button be? */
  size?: "small" | "medium" | "large";

  /** If `true`, the button will be disabled */
  disabled?: boolean;

  /** Should the button take available full width? */
  block?: boolean;

  /** Optional click handler */
  onClick?: () => void;
}

/**
 * A reusable Button component based on Shoelace UI.
 */
export const Button = ({
  children,
  variant = "default",
  size = "medium",
  disabled = false,
  block = false,
  onClick,
}: ButtonProps) => (
  <SlButton
    variant={variant}
    size={size}
    disabled={disabled}
    onClick={onClick}
    style={{ width: block ? "100%" : "auto" }}
  >
    {children}
  </SlButton>
);
