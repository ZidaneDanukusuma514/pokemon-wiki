import axios from "axios";
import * as React from "react";
import Modal from "../../Modal";
import { useStore } from "../../Store/Zustand";

export interface IPokemonItemProps {
  name: string;
  url: string;
}
export default function PokemonItem({ name, url }: IPokemonItemProps) {
  const [Show, setShow] = React.useState(false);
  const [Data, setData] = React.useState<any>();

  const handleGetFullData = async () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  React.useEffect(() => {
    handleGetFullData();
  }, []);
  return (
    <div className="flex flex-col w-full border-2 border-black rounded-xl">
      <h1 className="text-center font-bold">{!Data ? null : Data.name}</h1>
      <img src={!Data ? null : Data.sprites.front_default} alt="pokemon" />
    </div>
  );
}
