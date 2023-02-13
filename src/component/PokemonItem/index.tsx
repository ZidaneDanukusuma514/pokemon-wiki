import * as React from "react";

export interface IPokemonItemProps {
  name?: string;
}

export default function PokemonItem({ name }: IPokemonItemProps) {
  return (
    <div className="w-full border-2 border-black rounded-xl">
      <h1>Name: {!name ? null : name}</h1>
    </div>
  );
}
