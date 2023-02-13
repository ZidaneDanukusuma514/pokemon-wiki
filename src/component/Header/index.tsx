import * as React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/pokebook_logo.png";
import Pokeball from "../../assets/img/Pokeball.png";
import Style from "./index.module.css";
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [Sidebar, setSidebar] = React.useState(false);
  return (
    <header className="flex container mx-auto items-center bg-red-500 p-4">
      <div className="grow">
        <img src={Logo} className="w-[100px]" alt="Header_Logo" />
      </div>

      <button className={Style.rotating} onClick={() => setSidebar(!Sidebar)}>
        <img src={Pokeball} className="w-[35px]" alt="mobile_button" />
      </button>
      <ul
        className={`flex flex-col justify-around items-center transition-all w-screen h-screen bg-slate-300 fixed top-0 ${
          Sidebar ? "right-0" : "-right-full"
        }`}
      >
        <button
          onClick={() => setSidebar(!Sidebar)}
          className="text-white bg-red-600 hover:bg-red-700 p-4 font-bold absolute top-0 right-0"
        >
          Exit
        </button>
        <li className="flex-1">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="flex-1">
          <NavLink to={"/"}>Catalog</NavLink>
        </li>
        <li className="flex-1">
          <NavLink to={"/about"}>about</NavLink>
        </li>
      </ul>
    </header>
  );
}
