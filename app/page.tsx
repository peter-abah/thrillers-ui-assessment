import Results from "@/components/results";
import SearchBar from "@/components/search_bar";

export default function Home() {
  return (
    <div className="flex flex-col gap-12.5 max-w-[1150px]">
      <SearchBar />
      <Results />
    </div>
  );
}
