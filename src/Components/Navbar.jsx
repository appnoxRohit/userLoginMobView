import React from "react";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import loginblack from "../assets/loginblack.png";

const Navbar = () => {
  return (
    <div className="border-2  flex items-center justify-between px-5 border-gray border-x-0 h-[72px] w-full">
      <p className="font-normal font-dm-serif text-[28px]">Mediatrade</p>

      <div className=" flex font-inter gap-5">
        <a className="hidden md:flex text-[15px]" href="">
          PROSSIME ASTE
        </a>
        <a className="hidden md:flex text-[15px]" href="">
          PRIVATE SALE
        </a>
        <a className="hidden md:flex text-[15px]" href="">
          ACCEDI
        </a>
        <select className="hidden md:flex text-[15px]" name="" id="">
          <option className="text-[15px]" value="">
            IT
          </option>
        </select>
        <img src={loginblack} className="md:hidden w-6 h-6" alt="login" />
        <img src={menu} className="md:hidden w-6 h-6" alt="menu" />
        <img src={search} className="w-6 h-6" alt="search" />
      </div>
    </div>
  );
};

export default Navbar;
