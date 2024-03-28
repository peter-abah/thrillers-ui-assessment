"use client";

import { useState } from "react";
import { BsArrowLeftRight as ArrowsIcon } from "react-icons/bs";
import { GiSofa as SofaIcon } from "react-icons/gi";
import { IoCalendarOutline as CalendarIcon } from "react-icons/io5";
import { MdLocationOn as LocationIcon } from "react-icons/md";

export default function SearchBar() {
  const [selectedTripType, setSelectedTripType] = useState<TripType>("one way");
  return (
    <div className="p-4 sm:p-6 2xl:p-10 rounded-5xl bg-white font-semibold text-sm sm:text-base">
      <div className="grid grid-cols-search grid-rows-2 gap-y-4 2xl:gap-y-8 gap-x-3 2xl:gap-x-6 grid-flow-row-dense">
        <div className="h-17.5 p-2 sm:p-4 2xl:px-8 bg-main-bg rounded-5xl flex gap-2 sm:gap-4 2xl:gap-8 items-center justify-around col-span-2 md:col-span-1">
          <PlaceSelector place="NEW YORK (JFK)" />
          <div className="bg-primary w-8 h-8 sm:w-10 sm:h-10 2xl:w-12.5 2xl:h-12.5 grid place-items-center rounded-full shrink-0">
            <ArrowsIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <PlaceSelector place="MUMBAI (BOM)" />
        </div>

        <button className="h-17.5 px-4 2xl:px-8 bg-main-bg justify-around rounded-5xl flex gap-2 2xl:gap-4 items-center shrink-0">
          <CalendarIcon className="w-7 h-7" />
          <p className="truncate"> 29 JULY 2019</p>
        </button>

        <button className="h-17.5 px-4 2xl:px-8 bg-main-bg justify-around rounded-5xl flex gap-2 2xl:gap-4 items-center shrink-0 row-start-4 md:row-start-3 lg:row-auto">
          <CalendarIcon className="w-7 h-7" />
          <p className="uppercase truncate">2 Traveller</p>
        </button>

        <TripTypeSelector
          selectedType={selectedTripType}
          onSelectType={(type) => setSelectedTripType(type)}
        />

        <button className="h-17.5 px-4 2xl:px-8 bg-main-bg justify-around rounded-5xl flex gap-2 2xl:gap-4 items-center shrink-0">
          <SofaIcon className="w-7 h-7" />
          <p className="uppercase truncate">First Class</p>
        </button>

        <button className="bg-accent text-white text-center uppercase h-17.5 px-4 2xl:px-8 justify-around rounded-5xl flex gap-2 2xl:gap-4 items-center shrink-0 row-start-4 md:row-start-3 col-start-1 lg:col-auto">
          Search
        </button>
      </div>
    </div>
  );
}

function PlaceSelector({ place }: { place: string }) {
  // In an actual working site, this will display a dropdown of places/airports fetched from an api
  return (
    <button className="flex gap-1 sm:gap-2 2xl:gap-4 items-center">
      <LocationIcon className="text-primary w-6 h-6 uppercase shrink-0" />
      <p className="font-medium truncate">{place}</p>
    </button>
  );
}

const TRIP_TYPES = ["one way", "round trip", "multi city"] as const;
type TripType = (typeof TRIP_TYPES)[number];

function TripTypeSelector({
  selectedType,
  onSelectType,
}: {
  selectedType: TripType;
  onSelectType: (type: TripType) => void;
}) {
  return (
    <div className="h-17.5 bg-main-bg rounded-5xl flex items-center justify-between p-1.5 w-full col-span-2 md:col-span-1 row-start-2 md:row-auto">
      {TRIP_TYPES.map((tripType) => (
        <button
          key={tripType}
          onClick={() => onSelectType(tripType)}
          data-selected={tripType === selectedType}
          aria-current={tripType === selectedType}
          className="max-w-45 w-full p-1 truncate h-full rounded-4xl text-center data-[selected=true]:bg-primary data-[selected=true]:text-white uppercase"
        >
          {tripType}
        </button>
      ))}
    </div>
  );
}
