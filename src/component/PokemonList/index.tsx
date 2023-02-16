import * as React from "react";

export interface IPokemonListProps {
  children: React.ReactNode;
}

export default function PokemonList({ children }: IPokemonListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-4">
      {children}
    </div>
  );
}
