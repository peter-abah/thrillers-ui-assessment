"use client";

import { useState } from "react";
import { BsArrowLeftRight as ArrowsIcon } from "react-icons/bs";
import { GiSofa as SofaIcon } from "react-icons/gi";
import { IoCalendarOutline as CalendarIcon } from "react-icons/io5";
import { MdLocationOn as LocationIcon } from "react-icons/md";

export default function SearchBar() {
  const [selectedTripType, setSelectedTripType] = useState<TripType>("one way");
  return (
    <div className="p-10 rounded-5xl bg-white w-full flex flex-col gap-8 font-semibold">
      <div className="flex gap-6">
        <div className="h-17.5 px-8 bg-main-bg rounded-5xl flex gap-8 items-center justify-around w-full">
          <PlaceSelector place="NEW YORK (JFK)" />
          <div className="bg-primary w-12.5 h-12.5 grid place-items-center rounded-full shrink-0">
            <ArrowsIcon className="w-7 h-7 text-white" />
          </div>
          <PlaceSelector place="MUMBAI (BOM)" />
        </div>

        <div className="h-17.5 w-57.5 px-8 bg-main-bg rounded-5xl flex gap-4 items-center shrink-0">
          <CalendarIcon className="w-7 h-7" />
          <p>29 JULY 2019</p>
        </div>

        <div className="h-17.5 w-57.5 px-8 bg-main-bg rounded-5xl flex gap-4 items-center shrink-0">
          <CalendarIcon className="w-7 h-7" />
          <p className="uppercase">2 Traveller</p>
        </div>
      </div>

      <div className="flex gap-6">
        <TripTypeSelector
          selectedType={selectedTripType}
          onSelectType={(type) => setSelectedTripType(type)}
        />

        <div className="h-17.5 w-57.5 px-8 bg-main-bg rounded-5xl flex gap-4 items-center shrink-0">
          <SofaIcon className="w-7 h-7" />
          <p className="uppercase">First Class</p>
        </div>

        <button className="w-57.5 h-17.5 px-8 bg-accent text-white text-center rounded-5xl  shrink-0 uppercase">
          Search
        </button>
      </div>
    </div>
  );
}

function PlaceSelector({ place }: { place: string }) {
  // In an actual working site, this will display a dropdown of places/airports fetched from an api
  return (
    <div className="flex gap-4 items-center">
      <LocationIcon className="text-primary w-6 h-6 uppercase shrink-0" />
      <p className="font-medium truncate">{place}</p>
    </div>
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
    <div className="h-17.5 bg-main-bg rounded-5xl flex items-center justify-between p-1.5 w-full">
      {TRIP_TYPES.map((tripType) => (
        <button
          key={tripType}
          onClick={() => onSelectType(tripType)}
          data-selected={tripType === selectedType}
          aria-current={tripType === selectedType}
          className="w-45 truncate h-full rounded-4xl text-center data-[selected=true]:bg-primary data-[selected=true]:text-white uppercase"
        >
          {tripType}
        </button>
      ))}
    </div>
  );
}
