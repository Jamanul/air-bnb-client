"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAirbnb } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
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
      <div className="border shadow-md grid grid-cols-10 max-w-[800px] mx-auto rounded-r-full rounded-l-full">
        <form>
          <div className="border-r w-56 hover:border-r-0 group relative">
            <div
              onClick={handleLocationDiv}
              className="col-span-4 px-7 py-4 flex flex-col w-56 relative group-hover:bg-slate-300 rounded-r-full rounded-l-full "
            >
              <label className="text-sm font-bold">Where</label>
              <input
                type="text"
                onChange={handlePlace}
                name="place"
                className="focus:outline-none text-sm group-hover:bg-slate-300"
                placeholder="Search destinations"
              />
              {placeButton ? (
                <button
                  className="absolute right-2 top-3"
                  onClick={handlePlaceButton}
                >
                  <RxCross1 />
                </button>
              ) : (
                <></>
              )}
            </div>
            {isLocationVisible && (
              <div ref={locationDivRef} className="max-w-md bg-white shadow-md px-6 py-4 rounded-2xl mt-2 absolute">
                Click outside of me to hide!
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
