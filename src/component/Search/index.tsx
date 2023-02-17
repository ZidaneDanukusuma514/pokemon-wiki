import * as React from "react";
import { useStore } from "../../Store/Zustand";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  const { getSubmit } = useStore();
  const [Search, setSearch] = React.useState("");
  return (
    <div className="flex py-4">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={Search}
        className="grow p-2 border-2 border-slate-700/75 hover:border-slate-700 rounded-l-lg placeholder-black/75 hover:placeholder-black"
        type="text"
        placeholder="Find your pokemon here..."
      />
      <button
        onClick={() => getSubmit(Search)}
        className="p-2 rounded-r-lg bg-rose-600 hover:bg-rose-800 text-white font-semibold"
      >
        Submit
      </button>
    </div>
  );
}
