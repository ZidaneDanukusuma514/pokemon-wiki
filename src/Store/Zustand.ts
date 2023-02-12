import { create } from "zustand/react";

interface ZustandProps {
  value: string;
  handleSearch: (text: string) => void;
}

export const useStore = create<ZustandProps>((set) => ({
  value: "asd",
  handleSearch: (text) => {
    set(() => ({
      value: text,
    }));
  },
}));
