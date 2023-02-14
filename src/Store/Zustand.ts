import axios from "axios";
import { create } from "zustand";

export const BaseUrl = import.meta.env.VITE_BASEURL;
export const ApiFilter = "?offset=1&limit=20";

interface ZustandProps {
  Search: string;
  Data: any;
  Respon: any;
  handleSearch: (text: React.ChangeEvent<HTMLInputElement>) => void;
  getData: () => void;
}

export const useStore = create<ZustandProps>((set) => ({
  Search: "asd",
  Data: null,
  Respon: null,
  handleSearch: (text) => {
    set(() => ({
      Search: text.target.value,
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
