import React from "react";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import loginblack from "../assets/loginblack.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-2 md:fixed md:pl-[100px]  md:z-10 md:bg-white flex items-center justify-between px-5 border-gray border-x-0 h-[72px] w-full">
      <p className="font-normal  font-dm-serif text-[28px]">Mediatrade</p>

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
        <Link to="/contactPage">
        <img src={loginblack} className="md:hidden w-6 h-6" alt="login" />
        </Link>


        <img src={menu} className="md:hidden w-6 h-6" alt="menu" />

        <Link to="/searchPage1"> 
               <img src={search} className="w-6 h-6" alt="search" />

        </Link>
      </div>

    </div>
  );
};

export default Navbar;
