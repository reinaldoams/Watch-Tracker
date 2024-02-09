import Image from "next/image";
import Search from "./Components/Search";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Watch Tracker</h1>
      <Search />
    </>
  );
}
