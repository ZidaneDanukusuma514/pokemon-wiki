import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState<any>();
  const test = async () => {
    await axios("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20").then(
      (respon) => {
        setData(respon.data.results);
      }
    );
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="App">
      {!Data
        ? "no"
        : Data.map((e: any, index: any) => <div key={index}>{e.name}</div>)}
    </div>
  );
}

export default App;
