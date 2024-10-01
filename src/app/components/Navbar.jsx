"use client";
import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircleSharp } from "react-icons/io5";
const Navbar = () => {
    const [location,setLocation]=useState('')
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-1 text-2xl my-6 text-primary font-bold ">
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
      <div className="border px-7 py-2 shadow-md grid grid-cols-10 max-w-[800px] mx-auto rounded-r-full rounded-l-full">
        <form action="">
          <div className="col-span-4 border-r flex flex-col w-56">
            <label htmlFor="" className="text-sm font-bold">Where</label>
            <input type="text" onChange={e=>setLocation(e.target.value)} name="location" className="focus:outline-none text-sm" placeholder="Search destinations"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
