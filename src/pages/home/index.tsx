import axios from "axios";
import * as React from "react";
import PokemonItem from "../../component/PokemonItem";
import PokemonList from "../../component/PokemonList";
import Search from "../../component/Search";
import PokemonItem2 from "../../PokemonItem2";
import { useStore } from "../../Store/Zustand";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { getData, getFullData, Data, Pokemon } = useStore();

  const handleRealData = () => {
    Data.forEach((item: any) => {
      axios
        .get(item.url)
        .then((res) => res.data)
        .then((value) => getFullData(value));
    });
  };

  React.useEffect(() => {
    getData();
    console.log("Data:", Data);
    console.log("Pokemon:", Pokemon);
  }, []);
  return (
    <div className="mx-auto container bg-slate-100">
      <Search />
      <PokemonList>
        <button onClick={() => handleRealData()}>Reveall </button>

        {!Pokemon
          ? "sorry no data here"
          : Pokemon.map((e: any, index: number) => (
              <PokemonItem2 key={index} data={e} />
            ))}
      </PokemonList>
    </div>
  );
}
