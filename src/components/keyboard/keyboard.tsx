"use client";

import { Button } from "@/components/button/button";

/**
 * Keyboard component props
 */
interface KeyboardProps {
  /** Optional click handler */
  onClick?: (value: string) => void;

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
}

export const Keyboard = ({
  onClick,
  variant = "default",
  size = "medium",
}: KeyboardProps) => {
  const handleClick = (value: string) => {
    if (onClick) {
      onClick(value);
    }
  };

  const buttons = [
    { value: "a", text: "A", disabled: false },
    { value: "b", text: "B", disabled: false },
    { value: "c", text: "C", disabled: false },
    { value: "d", text: "D", disabled: true },
    { value: "e", text: "E", disabled: false },
    { value: "f", text: "F", disabled: false },
    { value: "g", text: "G", disabled: false },
    { value: "h", text: "H", disabled: false },
    { value: "i", text: "I", disabled: false },
    { value: "j", text: "J", disabled: false },
    { value: "k", text: "K", disabled: false },
    { value: "l", text: "L", disabled: true },
    { value: "m", text: "M", disabled: false },
    { value: "n", text: "N", disabled: false },
    { value: "o", text: "O", disabled: false },
    { value: "p", text: "P", disabled: false },
    { value: "q", text: "Q", disabled: false },
    { value: "r", text: "R", disabled: false },
    { value: "s", text: "S", disabled: false },
    { value: "t", text: "T", disabled: false },
    { value: "u", text: "U", disabled: false },
    { value: "v", text: "V", disabled: false },
    { value: "w", text: "W", disabled: false },
    { value: "x", text: "X", disabled: false },
    { value: "y", text: "Y", disabled: false },
    { value: "z", text: "Z", disabled: false },
  ];

  return (
    <div className="grid grid-cols-8 gap-1">
      {buttons.map((btn) => (
        <Button
          size={size}
          variant={variant}
          key={btn.value}
          onClick={() => handleClick(btn.text)}
          disabled={btn.disabled}
        >
          {btn.text}
        </Button>
      ))}
      <div className="col-span-4 start-3 end-6">
        <Button
          size={size}
          variant={variant}
          onClick={() => handleClick("Space")}
          block={true}
        >
          Space
        </Button>
      </div>
      <div className="col-span-2">
        <Button
          size={size}
          variant={variant}
          onClick={() => handleClick("Erase")}
          block={true}
        >
          Erase
        </Button>
      </div>
    </div>
  );
};
