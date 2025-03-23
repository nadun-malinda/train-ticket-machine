"use client";

import { Station } from "@/types/station";
import { FixedSizeList } from "react-window";
import { Button } from "./button/button";
import { Icon } from "./icon/icon";

interface StationListProps {
  stations: Station[];
}

export function StationList({ stations }: StationListProps) {
  const handleSelectStation = (station: Station) => {
    console.log(">>> station: ", station);
  };

  if (stations.length === 0) {
    return (
      <div className="text-center py-8">
        <Icon
          name="train-front"
          className="mx-auto h-12 w-12 text-gray-400 mb-4"
        />
        <p className="text-gray-500">No results</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-md mb-4">{stations.length} stations found</p>
      <FixedSizeList
        height={500}
        itemCount={stations.length}
        itemSize={50}
        width={"100%"}
      >
        {({ index, style }) => {
          const station = stations[index];

          return (
            <div style={style} className="pr-2 mr-2">
              <Button onClick={() => handleSelectStation(station)} block>
                {station.stationName}{" "}
                <code className="text-xs ml-4">({station.stationCode})</code>
              </Button>
            </div>
          );
        }}
      </FixedSizeList>
    </div>
  );
}
