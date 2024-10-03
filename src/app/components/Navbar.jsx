"use client";
import React  from "react";
import { FaAirbnb } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircleSharp } from "react-icons/io5";


const Navbar = () => {
 
  return (
    <div className="fixed  pb-8 lg:min-w-[1780px]">
      {/* first navbar */}
      <div className="flex justify-between items-center">
        <h2 className={` flex items-center gap-1 text-2xl my-6 text-primary font-bold `}>
          <span className="text-4xl">
            <FaAirbnb />
          </span>{" "}
          airbnb
        </h2>
        <div className="flex gap-8 ml-36 ">
          <h2 className="font-extrabold">Stays</h2>
          <h2 className="font-extrabold">Experiences</h2>
        </div>
        <div className="flex items-center gap-6">
          <h2 className="font-extrabold text-sm">Airbnb your home</h2>
          <TfiWorld />
          <div className="py-1 px-2 border flex items-center gap-2 rounded-r-full rounded-l-full">
            <RxHamburgerMenu className="text-xl" />
            <IoPersonCircleSharp className="text-4xl" />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;


