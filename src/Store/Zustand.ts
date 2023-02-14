import axios from "axios";
import { create } from "zustand";

export const BaseUrl = import.meta.env.VITE_BASEURL;
export const ApiFilter = "?offset=1&limit=20";

interface ZustandProps {
  value: string;
  Data: any;
  Respon: any;
  handleSearch: (text: string) => void;
  getData: () => void;
}

export const useStore = create<ZustandProps>((set) => ({
  value: "asd",
  Data: null,
  Respon: null,
  handleSearch: (text) => {
    set(() => ({
      value: text,
    }));
  },
  getData: async () => {
    await axios.get(BaseUrl + ApiFilter).then((respon) => {
      set(() => ({
        Respon: respon.data,
      }));
    });
    set((state) => ({
      Data: state.Respon.results,
    }));
  },
}));
