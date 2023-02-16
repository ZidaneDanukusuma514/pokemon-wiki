import axios from "axios";
import { create } from "zustand";

import { PokemonClient } from "pokenode-ts";
const api = new PokemonClient();

export const BaseUrl = import.meta.env.VITE_BASEURL;
export const ApiFilter = "?offset=0&limit=20";

interface ZustandProps {
  Search: string;
  Respon: any;
  Data: any;
  Pokemon: any;
  ModalStatus: boolean;
  handleModal: (q: boolean) => void;
  handleSearch: (text: React.ChangeEvent<HTMLInputElement>) => void;
  getData: () => void;
  getSubmit: (Search: string) => void;
}

export const useStore = create<ZustandProps>((set) => ({
  Search: "",
  ModalStatus: false,
  Pokemon: null,
  Data: null,
  Respon: null,
  handleSearch: (text) => {
    set(() => ({
      Search: text.target.value,
    }));
  },
  handleModal: (q: boolean) => {
    set((state) => ({
      ModalStatus: q,
    }));
  },
  getSubmit: async (Search: string) => {
    await api
      .getPokemonByName(Search)
      .then((data) => {
        set(() => ({
          Data: [data],
        })),
          console.log([data]);
      }) // will output "Luxray"
      .catch((error) => console.error(error));
    set(() => ({
      Search: "",
    }));
  },
  getData: async () => {
    await axios
      .get(BaseUrl + ApiFilter)
      .then((respon) => {
        set(() => ({
          Respon: respon.data,
        }));
      })
      .then(() => {
        set((state) => ({
          Data: state.Respon.results,
        }));
      });
  },
}));
