"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAirbnb } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Calender from "./Calender";

const Navbar = () => {
  const [place, setPlace] = useState("");
  const [placeButton, setPlaceButton] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const locationDivRef = useRef(null);
  const handleLocationDiv = () => {
    // console.log(isLocationVisible);
    setIsLocationVisible(!isLocationVisible);
  };
  const handleClickOutside = (event) => {
    if (
      locationDivRef.current &&
      !locationDivRef.current.contains(event.target)
    ) {
      setIsLocationVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePlace = (e) => {
    const value = e.target.value;
    setPlace(value);
    setPlaceButton(value.length > 0);
  };
  const handlePlaceButton = () => {
    setPlace("");
  };

  return (
    <div>
      {/* first navbar */}
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
      {/* search section */}
      <div className={`${isLocationVisible ? "bg-gray-300":""} border relative shadow-md grid grid-cols-10 max-w-[800px] mx-auto rounded-r-full rounded-l-full`}>
        <form>
          <div className=" group">
            <div
              onClick={handleLocationDiv}
              className={`${isLocationVisible ? "bg-white rounded-r-full group-hover:bg-white":""} col-span-4 px-7 py-4 hover:my-0 flex flex-col w-56 relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full border-r`}
            >
              <label className="text-sm font-bold">Where</label>
              <input
                type="text"
                onChange={handlePlace}
                name="place"
                defaultValue={place}
                className={`${isLocationVisible ?"group-hover:bg-white":""} focus:outline-none text-sm group-hover:bg-slate-300`}
                placeholder="Search destinations"
              />
              {placeButton ? (
                <button
                  className="absolute right-2 top-7 text-sm"
                  onClick={handlePlaceButton}
                >
                  <RxCross1 />
                </button>
              ) : (
                <></>
              )}
            </div>
           
          </div>
          {isLocationVisible && (
              <div
                ref={locationDivRef}
                className="max-w-[400px] bg-white shadow-md px-6 py-4 rounded-3xl mt-2 absolute"
              >
                <div className="grid grid-cols-3 gap-1">
                  {worldLocations?.map((map) => (
                    <div
                      onClick={() => setPlace(map.inputValue)}
                      className="hover:bg-slate-300 p-2 rounded-xl"
                      key={map.location}
                    >
                      <Image
                        src={map.src}
                        height={600}
                        width={600}
                        alt="world pic"
                        className="rounded-xl border"
                      />
                      <h2 className="text-sm">{map.location}</h2>
                    </div>
                  ))}
                </div>
              </div>
            )}
          {/* check in and checkout section */}
          <div className="absolute max-w-[800px] round mt-4">
            <Calender className="rounded-3xl"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;

const worldLocations = [
  {
    src: "/1.jpg",
    location: "I'm flexible",
    inputValue: "",
  },
  {
    src: "/2.jpg",
    location: "SouthEast Asia",
    inputValue: "SouthEast Asia",
  },
  {
    src: "/3.jpg",
    location: "Canada",
    inputValue: "canada",
  },
  {
    src: "/4.jpg",
    location: "Europe",
    inputValue: "Europe",
  },
  {
    src: "/5.jpg",
    location: "Malaysia",
    inputValue: "Malaysia",
  },
  {
    src: "/6.jpg",
    location: "United States",
    inputValue: "United States",
  },
];
