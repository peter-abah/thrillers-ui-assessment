import { FLIGHTS } from "@/lib/constants";
import FlightPlan from "./flights_plan";
import ResultsHeader from "./results_header";
import ResultsList from "./results_lists";


export default function Results() {
  return (
    <section className="flex flex-col gap-8">
      <ResultsHeader />
      <div className="flex flex-col gap-8 lg:gap-0 lg:grid lg:grid-cols-12">
        <ResultsList />
        <FlightPlan flight={FLIGHTS[0]} />
      </div>
    </section>
  );
}
