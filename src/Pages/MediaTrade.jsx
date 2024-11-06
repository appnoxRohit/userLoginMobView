import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Card } from "../Components/Card";

const MediaTrade = () => {
  return (

    <div className="flex">
      <Sidebar />
      <div className=" w-full">
        <Navbar />

        {/* {ABOVE CARD SECTION} */}
        <div>
        <div className="flex  flex-col mt-16 md:m-0  justify-center items-center ">
            <h1 className=" font-dm-serif md:hidden text-[40px]">
              Andy Warhol
            </h1>
            <h1 className="hidden md:flex mt-[160px] font-dm-serif md:text-[80px]">
              Giorgio De Chirico
            </h1>
            <br />
            <div className="flex justify-center md:w-full md:justify-start md:ml-[140px] md:mt-[168px]   font-dm-serif items-center text-2xl font-normal gap-2 ">
              <h2>Risultati</h2>
              <div className="border-2 border-black  flex justify-center items-center  rounded-full  w-[68px] h-11">
                <p>1.364</p>
              </div>
            </div>
          </div>


        </div>
        
          
        

        {/* {CARD} */}
        <div className="mt-[64px] ">
        <Card />

        </div>

      </div>
    </div>
  );
};

export default MediaTrade;
