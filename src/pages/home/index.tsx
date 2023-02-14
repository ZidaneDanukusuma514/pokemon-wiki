import * as React from "react";
import PokemonItem from "../../component/PokemonItem";
import PokemonList from "../../component/PokemonList";
import Search from "../../component/Search";
import { useStore } from "../../Store/Zustand";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { getData, Data } = useStore();
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto container bg-slate-100">
      <Search />
      <PokemonList>
        {!Data
          ? null
          : Data.map((e: any, index: number) => (
              <PokemonItem key={index} name={e.name} />
            ))}
      </PokemonList>
    </div>
  );
}
