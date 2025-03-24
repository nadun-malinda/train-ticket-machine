"use client";

import { Button } from "@/components/button/button";

/**
 * Keyboard component props
 */
interface KeyboardProps {
  /** Optional click handler */
  onKeyPress?: (value: string) => void;

  /** The variant of the button */
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

  /** Array of keys that are valid */
  validKeys?: string[];
}

const keyboardKeys = [
  { value: "a", text: "A" },
  { value: "b", text: "B" },
  { value: "c", text: "C" },
  { value: "d", text: "D" },
  { value: "e", text: "E" },
  { value: "f", text: "F" },
  { value: "g", text: "G" },
  { value: "h", text: "H" },
  { value: "i", text: "I" },
  { value: "j", text: "J" },
  { value: "k", text: "K" },
  { value: "l", text: "L" },
  { value: "m", text: "M" },
  { value: "n", text: "N" },
  { value: "o", text: "O" },
  { value: "p", text: "P" },
  { value: "q", text: "Q" },
  { value: "r", text: "R" },
  { value: "s", text: "S" },
  { value: "t", text: "T" },
  { value: "u", text: "U" },
  { value: "v", text: "V" },
  { value: "w", text: "W" },
  { value: "x", text: "X" },
  { value: "y", text: "Y" },
  { value: "z", text: "Z" },
  { value: "space", text: "Space" },
  { value: "erase", text: "Erase" },
  { value: "&", text: "&" },
  { value: "(", text: "(" },
  { value: ")", text: ")" },
  { value: "-", text: "-" },
];
export const initialValidKeys = keyboardKeys.map((btn) => btn.text);

export const Keyboard = ({
  onKeyPress,
  variant = "default",
  size = "medium",
  validKeys = initialValidKeys,
}: KeyboardProps) => {
  const handleKeyPress = (value: string) => {
    if (onKeyPress) {
      onKeyPress(value);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-1">
      {keyboardKeys.map((btn) => {
        const isEraseKey = btn.text === "Erase";
        const isSpaceKey = btn.text === "Space";

        const isKeyEnabled =
          isEraseKey ||
          (isSpaceKey
            ? validKeys.length > 0 && validKeys.includes(" ")
            : validKeys.includes(btn.text));

        return (
          <div
            key={btn.value}
            className={`${isSpaceKey ? "col-span-4 start-3 end-6" : ""} ${
              isEraseKey ? "col-span-2" : ""
            }`}
          >
            <Button
              size={size}
              variant={variant}
              onClick={() => handleKeyPress(btn.text)}
              disabled={!isKeyEnabled}
              block
            >
              {btn.text}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
