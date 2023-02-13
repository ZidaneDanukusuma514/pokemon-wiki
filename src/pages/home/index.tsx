import * as React from "react";
import PokemonList from "../../component/PokemonList";
import Search from "../../component/Search";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="mx-auto container bg-slate-100">
      <Search />
      <PokemonList>
        <div className="bg-rose-500">asd</div>
        <div className="bg-rose-500">asd</div>
      </PokemonList>
    </div>
  );
}
