import * as React from "react";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  return (
    <div className="flex py-4">
      <input
        className="grow p-2 border-2 border-slate-700/75 hover:border-slate-700 rounded-l-lg placeholder-black/75 hover:placeholder-black"
        type="text"
        placeholder="Find your pokemon here..."
      />
      <button className="p-2 rounded-r-lg bg-rose-600 hover:bg-rose-800 text-white font-semibold">
        Submit
      </button>
    </div>
  );
}
