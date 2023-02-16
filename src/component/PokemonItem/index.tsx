import * as React from "react";
import Modal from "../../Modal";
import { useStore } from "../../Store/Zustand";

export interface IPokemonItemProps {
  name: string;
  url: string;
}
export default function PokemonItem({ name, url }: IPokemonItemProps) {
  const [Show, setShow] = React.useState(false);
  const { handleModal, ModalStatus } = useStore();

  return (
    <div className="w-full border-2 border-black rounded-xl">
      <h1>Name: {!name ? null : name}</h1>
      <p>Url: {!url ? null : url}</p>
      <button
        onClick={() => setShow(!Show)}
        className="bg-rose-500 font-semibold"
      >
        show modal
      </button>
      {!Show ? null : <Modal url={url} />}
    </div>
  );
}
