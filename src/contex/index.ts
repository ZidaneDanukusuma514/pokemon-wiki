import axios from "axios";
import { useStore } from "../Store/Zustand";

interface getDataProps {
  offset: string;
  limit: string;
}
const ApiFilter = "?offset=0&limit=20";

export const handleEarlyData = async () => {
  const { Data, getData, getFullData } = useStore();

  await axios
    .get("https://pokeapi.co/api/v2/pokemon" + ApiFilter)
    .then((respon) => respon.data.results)
    .then((respon) => {
      getData();
    });
  await Data.forEach((item: any) => {
    axios
      .get(item.url)
      .then((res) => res.data)
      .then((value) => getFullData(value));
  });
};
