import { Flight } from "@/lib/constants";
import MapIcon from "../icons/map";

export default function FlightPlan({ flight }: { flight: Flight }) {
  return (
    <div className="col-span-4 max-w-100  w-full mx-auto lg:mx-0 rounded-5xl overflow-hidden bg-primary-dark h-fit">
      <div className="bg-primary text-white pt-12.5 2xl:pb-12.5">
        <div className="uppercase flex items-center justify-between gap-6 px-6 2xl:px-7.5 mb-12 2xl:mb-16">
          <p className="flex flex-col items-center gap-2 2xl:gap-4">
            <span>FROM</span>
            <span className="text-2xl">{flight.from}</span>
          </p>
          <p>{flight.stops === 0 ? "non stop" : "more stop"}</p>
          <p className="flex flex-col items-center gap-2 2xl:gap-4">
            <span>TO</span>
            <span className="text-2xl">{flight.to}</span>
          </p>
        </div>

        <div className="px-5">
          <MapIcon className="w-full text-main-bg/30" />
        </div>
      </div>

      <div className="bg-primary-dark text-white py-6 2xl:py-7.5 px-5">
        <div className="flex justify-between uppercase mb-10">
          <span
            className="w-full truncate max-w-30 px-4 text-xs 2xl:text-sm  py-2 2xl:py-4 rounded-5xl text-center data-[selected=true]:bg-accent data-[selected=true]:text-white"
            data-selected={flight.stops === 0}
          >
            non stop
          </span>
          <span
            className="w-full truncate max-w-30 px-4 text-xs 2xl:text-sm py-2 2xl:py-4 rounded-5xl text-center data-[selected=true]:bg-accent data-[selected=true]:text-white"
            data-selected={flight.stops === 1}
          >
            one stop
          </span>
          <span
            className="w-full truncate max-w-30 px-4 text-xs 2xl:text-sm py-2 2xl:py-4 rounded-5xl text-center data-[selected=true]:bg-accent data-[selected=true]:text-white"
            data-selected={flight.stops > 1}
          >
            more stop
          </span>
        </div>

        <div className="pb-20">
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
      <p className="w-4 2xl:w-6 h-4 2xl:h-6 rounded-full bg-accent left-[15%] top-1/2 -translate-y-1/2 absolute">
        <span className="bg-accent text-white rounded-5xl text-xs py-1 2xl:py-2 px-5 absolute left-1/2 -bottom-12.5 2xl:-bottom-13.5 -translate-x-1/2 before:absolute before:bg-accent before:w-5 before:h-4 before:clip-triangle before:left-1/2 before:-translate-x-1/2 before:-top-3.5">
          $500
        </span>
      </p>
      <p className="w-4 2xl:w-6 h-4 2xl:h-6 rounded-full bg-accent left-[70%] top-1/2 -translate-y-1/2 absolute">
        <span className="bg-accent text-white rounded-5xl text-xs py-1 2xl:py-2 px-5 absolute left-1/2 -bottom-12.5 2xl:-bottom-13.5 -translate-x-1/2 before:absolute before:bg-accent before:w-5 before:h-4 before:clip-triangle before:left-1/2 before:-translate-x-1/2 before:-top-3.5">
          $2500
        </span>
      </p>
    </div>
  );
}
