import Results from "@/components/results";
import SearchBar from "@/components/search_bar";

export default function Home() {
  return (
    <div className="flex flex-col gap-12.5">
      <SearchBar />
      <Results />
    </div>
  );
}
