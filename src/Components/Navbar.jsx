import React from "react";
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import loginblack from '../assets/loginblack.png'

const Navbar = () => {
  return (
    <div className="border-2 flex items-center justify-between px-5 border-black h-[72px] w-full">
     
        <p className=" text-[28px]">Mediatrade</p>
      

      <div className=" flex gap-5">
        <a className="hidden md:flex" href="">PROSSIME ASTE</a>
        <a className="hidden md:flex" href="">PRIVATE SALE</a>
        <a className="hidden md:flex" href="">ACCEDI</a>
        <select className="hidden md:flex" name="" id="">
            <option value="">IT</option>
        </select>
        <img src={loginblack} alt="" />
        <img src={menu} alt="" />
        <img src={search} alt="" />
      
      </div>
    </div>
  );
};

export default Navbar;
