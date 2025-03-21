"use client";

import { useState } from "react";
import { Keyboard } from "./keyboard/keyboard";
import { Station } from "@/types/station";
import { filterStations } from "@/utils/station";
import { StationList } from "./station-list";

interface KeyboardInputProps {
  stations: Station[];
}

export function KeyboardInput({ stations }: KeyboardInputProps) {
  const [text, setText] = useState("");
  const filteredStations = filterStations(text, stations);

  const handleClick = (key: string) => {
    setText((prev) => {
      if (key === "Space") return prev + " "; // Add space
      if (key === "Erase") return prev.slice(0, -1); // Remove last char
      return prev + key; // Add letter
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-xl font-medium mb-4">User input: {text}</p>
        <Keyboard onClick={handleClick} />
      </div>
      <div>
        <div>
          <p className="text-xl font-medium mb-4">
            Stations{" "}
            <span className="text-sm ml-2">
              ({filteredStations.length} found)
            </span>
          </p>
          <StationList stations={filteredStations} />
        </div>
      </div>
    </div>
  );
}
