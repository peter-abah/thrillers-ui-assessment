import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";
import { IconComponent } from "./icons";
import EmiratesIcon from "./icons/emirates";
import LufthansaIcon from "./icons/lufthansa";
import MapIcon from "./icons/map";
import QatarIcon from "./icons/qatar";

interface Flight {
  id: number;
  from: string;
  to: string;
  airline: string;
  price: { currencyCode: string; amount: number };
  stops: number;
  departureTime: `${number}:${number}`;
  arrivalTime: `${number}:${number}`;
  duration: `${number}:${number}`;
}
const FLIGHTS: Flight[] = [
  {
    id: 0,
    from: "JFK",
    to: "BOM",
    airline: "emirates",
    price: { currencyCode: "USD", amount: 1572 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
  {
    id: 1,
    from: "JFK",
    to: "BOM",
    airline: "qatar",
    price: { currencyCode: "USD", amount: 2072 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
  {
    id: 2,
    from: "JFK",
    to: "BOM",
    airline: "lufthansa",
    price: { currencyCode: "USD", amount: 1872 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
  {
    id: 3,
    from: "JFK",
    to: "BOM",
    airline: "emirates",
    price: { currencyCode: "USD", amount: 1872 },
    stops: 0,
    departureTime: "13:00",
    arrivalTime: "14:20",
    duration: "11:20",
  },
];

const CURRENCY_CODES_TO_SYMBOL: Record<string, string> = {
  USD: "$",
};

const AIRLINE_TO_ICON_COMPONENT: Record<string, IconComponent> = {
  emirates: EmiratesIcon,
  lufthansa: LufthansaIcon,
  qatar: QatarIcon,
};

export default function Results() {
  return (
    <section className="flex flex-col gap-8">
      <ResultsHeader />
      <div className="grid grid-cols-12">
        <ResultsList />
        <FlightIllustration flight={FLIGHTS[0]} />
      </div>
    </section>
  );
}

function ResultsHeader() {
  return (
    <div className="flex gap-5">
      <h2 className="text-lg font-semibold mr-auto">RESULT (25)</h2>
      <button className="bg-white rounded-5xl px-7 h-12.5 uppercase font-semibold text-sm">
        Filter
      </button>
      <button className="bg-white rounded-5xl px-7 h-12.5 uppercase font-semibold text-sm flex gap-6 items-center">
        <span>Ticket of Class</span>
        <ArrowDownIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

function ResultsList() {
  return (
    <ul className="col-span-8 mr-8">
      {FLIGHTS.map((flight) => {
        const IconComponent = AIRLINE_TO_ICON_COMPONENT[flight.airline] || EmiratesIcon;
        return (
          <li
            key={flight.id}
            className="relative max-h-[176px] pt-14 pb-10 pl-7.5 pr-12.5 bg-white flex items-center justify-between first:rounded-t-5xl last:rounded-b-5xl uppercase group"
          >
            {/* INVERTED BORDER RADIUS */}
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -top-4 -left-4"></span>
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -top-4 -right-4"></span>
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -bottom-4 -left-4"></span>
            <span className="w-8 h-8 rounded-2xl bg-main-bg absolute -bottom-4 -right-4"></span>

            {/* DASHED BORDER */}
            <span className="absolute w-full h-0.5 dashed bottom-0 left-0 group-last:hidden"></span>
            <IconComponent className="mr-7.5 w-32" />

            <div className="flex flex-col gap-7 mr-12.5 items-center">
              <p className="text-2xl">{flight.from}</p>
              <p className="text-sm">{flight.departureTime}</p>
            </div>

            <div className="flex flex-col items-center gap-3.5 mr-12.5">
              <p className="text-xxs">{flight.airline}</p>
              <p className="text-sm text-accent font-semibold">
                {humanizeTimeDuration(flight.duration)}
              </p>
              <p className="text-sm">{flight.stops === 0 ? "non-stop" : "more stop"}</p>
            </div>

            <div className="flex flex-col gap-7 mr-12.5 items-center">
              <p className="text-2xl">{flight.to}</p>
              <p className="text-sm">{flight.arrivalTime}</p>
            </div>

            <div className="flex flex-col gap-7 items-end">
              <p className="text-sm font-semibold">
                <span>{CURRENCY_CODES_TO_SYMBOL[flight.price.currencyCode]}</span>
                <span>{flight.price.amount}</span>
              </p>
              <button className="bg-accent text-white rounded-5xl w-32 py-4 text-xs font-semibold uppercase">
                Book now
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function FlightIllustration({ flight }: { flight: Flight }) {
  return (
    <div className="col-span-4 rounded-5xl overflow-hidden bg-primary-dark">
      <div className="bg-primary text-white pt-12.5 pb-12.5">
        <div className="uppercase flex items-center justify-between gap-6 px-7.5 mb-16">
          <p className="flex flex-col items-center gap-4">
            <span>FROM</span>
            <span className="text-2xl">{flight.from}</span>
          </p>
          <p>{flight.stops === 0 ? "non stop" : "more stop"}</p>
          <p className="flex flex-col items-center gap-4">
            <span>TO</span>
            <span className="text-2xl">{flight.to}</span>
          </p>
        </div>

        <div className="px-5">
          <MapIcon className="w-full text-main-bg/30" />
        </div>
      </div>

      <div className="bg-primary-dark text-white py-7.5 px-5">
        <div className="flex justify-between uppercase mb-10">
          <span
            className="w-30 py-4 rounded-5xl text-center data-[selected=true]:bg-accent data-[selected=true]:text-white"
            data-selected={flight.stops === 0}
          >
            non stop
          </span>
          <span
            className="w-30 py-4 rounded-5xl text-center data-[selected=true]:bg-accent data-[selected=true]:text-white"
            data-selected={flight.stops === 1}
          >
            one stop
          </span>
          <span
            className="w-30 py-4 rounded-5xl text-center data-[selected=true]:bg-accent data-[selected=true]:text-white"
            data-selected={flight.stops > 1}
          >
            more stop
          </span>
        </div>

        <div>
          <p className="uppercase mb-4 text-xs">Price</p>
          <PriceSlider />
        </div>
      </div>
    </div>
  );
}

function PriceSlider() {
  return (
    <div className="bg-main-bg/30 h-px relative">
      <p className="w-6 h-6 rounded-full bg-accent left-[15%] top-1/2 -translate-y-1/2 absolute">
        <span className="bg-accent text-white rounded-5xl text-xs py-2 px-5 absolute left-1/2 -bottom-13.5 -translate-x-1/2 before:absolute before:bg-accent before:w-5 before:h-4 before:clip-triangle before:left-1/2 before:-translate-x-1/2 before:-top-3.5">
          $500
        </span>
      </p>
      <p className="w-6 h-6 rounded-full bg-accent left-[70%] top-1/2 -translate-y-1/2 absolute">
        <span className="bg-accent text-white rounded-5xl text-xs py-2 px-5 absolute left-1/2 -bottom-13.5 -translate-x-1/2 before:absolute before:bg-accent before:w-5 before:h-4 before:clip-triangle before:left-1/2 before:-translate-x-1/2 before:-top-3.5">
          $2500
        </span>
      </p>
    </div>
  );
}

const humanizeTimeDuration = (duration: string) => {
  const [hours, minutes] = duration.split(":");
  return `${hours}H ${minutes}M`;
};
