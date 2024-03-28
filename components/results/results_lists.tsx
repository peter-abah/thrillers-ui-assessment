import { CURRENCY_CODES_TO_SYMBOL, FLIGHTS, humanizeTimeDuration } from "@/lib/constants";
import { IconComponent } from "../icons";
import EmiratesIcon from "../icons/emirates";
import LufthansaIcon from "../icons/lufthansa";
import QatarIcon from "../icons/qatar";

const AIRLINE_TO_ICON_COMPONENT: Record<string, IconComponent> = {
  emirates: EmiratesIcon,
  lufthansa: LufthansaIcon,
  qatar: QatarIcon,
};

export default function ResultsList() {
  return (
    <ul className="col-span-8 lg:mr-8">
      {FLIGHTS.map((flight) => {
        const AirlineComponent = AIRLINE_TO_ICON_COMPONENT[flight.airline] || EmiratesIcon;
        return (
          <li
            key={flight.id}
            className="relative py-6 sm:py-10 2xl:pt-14 px-6 2xl:pl-7.5 2xl:pr-12.5 bg-white flex items-center justify-between first:rounded-t-5xl last:rounded-b-5xl uppercase group flex-wrap sm:flex-nowrap sm:[&>*]:order-none"
          >
            {/* INVERTED BORDER RADIUS */}
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -top-4 -left-4"></span>
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -top-4 -right-4"></span>
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -bottom-4 -left-4"></span>
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -bottom-4 -right-4"></span>

            {/* DASHED BORDER */}
            <span className="absolute w-full h-0.5 dashed bottom-0 left-0 group-last:hidden"></span>

            <div className="mb-2 sm:mb-0 sm:mr-7.5 shrink-0 w-full sm:w-auto order-1">
              <AirlineComponent className="w-12 mx-auto sm:w-24 2xl:w-32" />
            </div>

            <div className="flex flex-col gap-4 sm:gap-7 mr-2 sm:mr-8 2xl:mr-12.5 items-center order-3">
              <p className="text-lg sm:text-2xl">{flight.from}</p>
              <p className="text-sm">{flight.departureTime}</p>
            </div>

            <div className="flex flex-col items-center gap-3.5 mr-2 sm:mr-8 2xl:mr-12.5 order-2">
              <p className="text-xxs">{flight.airline}</p>
              <p className="text-sm text-accent font-semibold">
                {humanizeTimeDuration(flight.duration)}
              </p>
              <p className="text-sm">{flight.stops === 0 ? "non-stop" : "more stop"}</p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-7 mr-2 sm:mr-8 2xl:mr-12.5 items-center order-4">
              <p className="text-lg sm:text-2xl">{flight.to}</p>
              <p className="text-sm">{flight.arrivalTime}</p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-7 items-end order-5">
              <p className="text-sm font-semibold">
                <span>{CURRENCY_CODES_TO_SYMBOL[flight.price.currencyCode]}</span>
                <span>{flight.price.amount}</span>
              </p>
              <button className="bg-accent text-white rounded-5xl px-4 2xl:px-7 py-2 2xl:py-4 text-xs font-semibold uppercase">
                Book now
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
