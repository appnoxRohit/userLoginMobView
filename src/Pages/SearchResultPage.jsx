import React from "react";
import MobileTopBar from "../Components/MobileTopBar";
import SearchSuggestion from "../Components/SearchSuggestion";
import Search from "../Components/Search";

const SearchResultPage = () => {
  return (
    <>
      <MobileTopBar />

      <div className="px-5 md:pl-[120px]">
        <div >
          <div>
            <p
              className="text-[60px]  mt-[48px]  md:text-[120px] md:mt-[78px]"
              type="text"
            >Giorgio De Ch</p>
          </div>
          <hr className="border-2 mt-2 md:mt-6  border-black w-[350px] md:w-[1360px]  " />

          <div className="flex gap-6 pt-8 md:pt-[40px] ">
            <div className="flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] rounded-full bg-black">
              <button className="text-white text-xs md:text-base">TUTTE</button>
            </div>
            <div className="flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] border-2 border-black rounded-full">
              <button className="text-xs md:text-base">ARTE</button>
            </div>
            <div className="flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] border-2 border-black rounded-full">
              <button className=" text-xs md:text-base">OROLOGI</button>
            </div>
            <div className="flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] border-2 border-black rounded-full">
              <button className="text-xs md:text-base">GEOELLIE</button>
            </div>
            <div className="hidden md:flex items-center justify-center w-[76px] h-[44px]  md:w-[118px] md:h-[56px] border-2 border-black rounded-full">
              <button className="text-xs md:text-base">DESIGN</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='mt-[80px] md:mt-[130px]'>
        <div className='pl-[20px] md:pl-[120px] text-base' >
            <h1>RESULATI</h1>
        </div>
        <div className='pl-[20px] md:pl-[120px] text-2xl md:text-[40px] pt-8 md:pt-12'>
            <p className='md:hover:text-black md:cursor-pointer text-gray-300'>Girgio De Chirico</p>
            <hr className='border-3 md:w-[1360px] mt-2 md:mt-[15px]'/>

        </div>
        <div className='pl-[20px] md:pl-[120px] text-2xl md:text-[40px] pt-8'>
            <p className='md:hover:text-black md:cursor-pointer text-gray-300'>DamonSavator</p>
            <hr className='border-3 md:w-[1360px] mt-2 md:mt-[15px]'/>

        </div>
        <div className='pl-[20px] md:pl-[120px] text-2xl md:text-[40px] pt-8'>
            <p className='md:hover:text-black md:cursor-pointer text-gray-300'>Andy warhol</p>
            <hr className='border-3 md:w-[1360px] mt-2 md:mt-[15px]'/>

        </div>
        <div className='pl-[20px] md:pl-[120px] text-2xl md:text-[40px] pt-8'>
            <p className='md:hover:text-black md:cursor-pointer text-gray-300'>Gennaro Guttuso</p>
            <hr className='border-3 md:w-[1360px] mt-2 md:mt-3'/>

        </div>
        {/* <div className='pl-[20px] text-2xl pt-8'>
            <p className='text-gray-300'>Girgio De Chirico</p>
            <hr className='border-3 pt-2'/>

        </div> */}

    </div>
    </>
  );
};

export default SearchResultPage;
