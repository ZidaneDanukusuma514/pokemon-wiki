import * as React from "react";

export interface IPokemonItem2Props {
  data: any;
}

export default function PokemonItem2(props: IPokemonItem2Props) {
  return (
    <div className="flex flex-col w-full border-2 border-black rounded-xl">
      <h1 className="text-center font-bold">
        {!props.data ? null : props.data.name}
      </h1>
      <img src={!props.data ? null : props.data.sprites.front_default} alt="" />
    </div>
  );
}
