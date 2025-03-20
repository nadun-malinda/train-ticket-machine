"use client";

import { useState } from "react";
import { Keyboard } from "./keyboard/keyboard";

export function KeyboardInput() {
  const [text, setText] = useState("");

  const handleClick = (key: string) => {
    setText((prev) => {
      if (key === "Space") return prev + " "; // Add space
      if (key === "Erase") return prev.slice(0, -1); // Remove last char
      return prev + key; // Add letter
    });
  };

  return (
    <div>
      <h2>User input: {text}</h2>
      <Keyboard onClick={handleClick} />
    </div>
  );
}
