import axios from "axios";
import * as React from "react";
import Style from "./index.module.css";
export interface IModalProps {
  url: string;
}

export default function Modal({ url }: IModalProps) {
  const [Data, setData] = React.useState<any>();
  const handleGetFullData = async () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  React.useEffect(() => {
    handleGetFullData();
  }, []);

  return (
    <div className="p-12 bg-white border-2 border-black absolute top-[50%] right-[42%] ">
      <h1 className="text-center font-semibold">
        {!Data ? "no name" : Data.name}
      </h1>
      <img
        className="w-[100px]"
        src={!Data ? null : Data.sprites.front_default}
        alt="pokemon"
      />
    </div>
  );
}
