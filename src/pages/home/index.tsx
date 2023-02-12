import * as React from "react";
import Search from "../../component/Search";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="bg-slate-100">
      <Search />
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-rose-500">asd</div>
        <div className="bg-rose-500">asd</div>
      </div>
    </div>
  );
}
