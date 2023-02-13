import * as React from "react";

export interface IPokemonListProps {
  children: React.ReactNode;
}

export default function PokemonList({ children }: IPokemonListProps) {
  return <div className="grid grid-cols-2 gap-1">{children}</div>;
}
