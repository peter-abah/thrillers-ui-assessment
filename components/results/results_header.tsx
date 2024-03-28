import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";

export default function ResultsHeader() {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <h2 className="sm:text-lg font-medium mr-auto truncate">RESULT (25)</h2>
      <button className="bg-white rounded-5xl px-3 sm:px-7 h-10 sm:h-12.5 uppercase font-semibold text-sm truncate shrink-0">
        Filter
      </button>
      <button className="bg-white rounded-5xl px-3 sm:px-7 h-10 sm:h-12.5 uppercase font-semibold text-sm flex gap-2 sm:gap-5 items-center">
        <span className="truncate">Ticket of Class</span>
        <ArrowDownIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
