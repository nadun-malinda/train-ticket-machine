"use client";

import { useState } from "react";
import { Keyboard } from "./keyboard/keyboard";
import { Station } from "@/types/station";
import { filterStations, getNextValidCharacters } from "@/utils/station";
import { StationList } from "./station-list";
import { Tabs } from "./tabs/tabs";
import { Tab } from "./tabs/tab";
import { TabPanel } from "./tabs/tab-panel";
import { Icon } from "./icon/icon";

interface KeyboardInputProps {
  stations: Station[];
}

export function KeyboardInput({ stations }: KeyboardInputProps) {
  const [text, setText] = useState("");
  const filteredStations = filterStations(text, stations);
  const nextValidChar = getNextValidCharacters(text, filteredStations);

  const handleClick = (key: string) => {
    setText((prev) => {
      if (key === "Space") return prev + " "; // Add space
      if (key === "Erase") return prev.slice(0, -1); // Remove last char
      return prev + key; // Add letter
    });
  };

  return (
    <div className="grid grid-cols-2 gap-8 w-full">
      <div>
        <p className="text-xl font-medium mb-4">User input: {text}</p>
        <Keyboard
          size="large"
          onKeyPress={handleClick}
          validKeys={nextValidChar}
        />
      </div>
      <div>
        <div>
          <Tabs>
            <Tab panel="stations">Stations</Tab>
            <Tab panel="resent">Resent search</Tab>

            <TabPanel name="stations">
              <StationList stations={filteredStations} />
            </TabPanel>
            <TabPanel name="resent">
              <div className="text-center py-8">
                <Icon
                  name="clock"
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                />
                <p className="text-gray-500">No recent searches yet</p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
