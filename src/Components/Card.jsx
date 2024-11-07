import React from "react";
import frog from "../assets/Mediatrade/frog.png";
import Rakhi from "../assets/Mediatrade/Rakhi.png";
import blueYatch from "../assets/Mediatrade/blueYatch.png";
import Views from "../assets/Mediatrade/Views.png";
import four from "../assets/MediaTrade/four.png";
import five from "../assets/Mediatrade/five.png";
import six from "../assets/Mediatrade/six.png";
import seven from "../assets/Mediatrade/seven.png";
import eight from "../assets/Mediatrade/eight.png";
import nine from "../assets/Mediatrade/nine.png";
import ten from "../assets/Mediatrade/ten.png";
import eleven from "../assets/Mediatrade/eleven.png";
import twelve from "../assets/Mediatrade/twelve.png";

export const Card = () => {
  const cards = [
    frog, Rakhi, blueYatch, four, five, six, seven, eight, nine, ten, eleven, twelve
  ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 pt-0 md:pl-[64px] md:mt-[88px]">
      {cards.map((image, index) => (
        <div
          key={index}
          className="max-w-[350px] md:max-w-[316px] font-inter relative shadow-custom-all border-2 border-gray"
            
          
        >
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={Views} alt="views icon" className="text-white" />
          </div>
          <div>
            <img className="w-full" src={image} alt="product" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
