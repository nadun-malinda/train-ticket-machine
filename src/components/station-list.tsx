"use client";

import { Station } from "@/types/station";
import { FixedSizeList } from "react-window";
import { Button } from "./button/button";

interface StationListProps {
  stations: Station[];
}

export function StationList({ stations }: StationListProps) {
  const handleSelectStation = (station: Station) => {
    console.log(">>> station: ", station);
  };

  return (
    <FixedSizeList
      height={500}
      itemCount={stations.length}
      itemSize={50}
      width={"100%"}
    >
      {({ index, style }) => {
        const station = stations[index];

        return (
          <div style={style} className="p-2">
            <Button onClick={() => handleSelectStation(station)} block>
              {station.stationName}{" "}
              <code className="text-xs ml-4">({station.stationCode})</code>
            </Button>
          </div>
        );
      }}
    </FixedSizeList>
  );
}
