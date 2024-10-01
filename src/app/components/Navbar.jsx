"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAirbnb } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Calender from "./Calender";

import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Navbar = () => {
    const [startTimes,setStartTimes]=useState('')
    const [endTimes,setEndTimes]=useState('')
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
]);
  console.log(state)
  const startTime = state[0].startDate.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
  const endTime = state[0].endDate.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
  //console.log(startTime,endTime)
  const [place, setPlace] = useState("");
  const [placeButton, setPlaceButton] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const locationDivRef = useRef(null);
  const calenderDivRef = useRef(null);
  const handleCalender = () => {
    setIsLocationVisible(false);
    setIsCalenderVisible(!isCalenderVisible);
    setEndTimes(endTime)
    setStartTimes(startTime)
  };
  //handle location div show and not shown
  const handleLocationDiv = () => {
    // console.log(isLocationVisible);
    setIsCalenderVisible(false);
    setIsLocationVisible(!isLocationVisible);
  };
  const handleClickOutside = (e) => {
    if (locationDivRef.current && !locationDivRef.current.contains(e.target)) {
      setIsLocationVisible(false);
    }
    if (calenderDivRef.current && !calenderDivRef.current.contains(e.target)) {
      setIsCalenderVisible(false);
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
      <div
        className={`${
          isLocationVisible ? "bg-gray-300" : ""
        } border relative shadow-md  max-w-[800px] mx-auto rounded-r-full rounded-l-full`}
      >
        <form className="grid grid-cols-10">
          <div className="col-span-3 group ">
            <div
              onClick={handleLocationDiv}
              className={`${
                isLocationVisible
                  ? "bg-white rounded-r-full group-hover:bg-white "
                  : ""
              } px-7  py-4 hover:my-0 flex flex-col relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full`}
            >
              <label className="text-sm font-bold">Where</label>
              <input
                type="text"
                onChange={handlePlace}
                name="place"
                defaultValue={place}
                className={`${
                  isLocationVisible ? "group-hover:bg-white" : ""
                } focus:outline-none text-sm group-hover:bg-slate-300`}
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
              className="max-w-[400px] bg-white shadow-md px-6 py-4 rounded-3xl mt-20 absolute"
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
          <div onClick={handleCalender} className="group col-span-2 ">
            <div className=" py-4  hover:my-0 px-7 flex flex-col relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full">
              <h2 className="text-sm font-bold">Check in</h2>
              <h2 className="text-sm font-bold text-gray-500">{state && startTimes.length>0 ? startTime : "Add date"}</h2>
            </div>
          </div>
          <div onClick={handleCalender} className="group col-span-2 ">
            <div className=" py-4  hover:my-0 px-7 flex flex-col relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full">
              <h2 className="text-sm font-bold">Check out</h2>
              <h2 className="text-sm font-bold text-gray-500">{state && endTimes.length>0 ? endTime : "Add date"}</h2>
            </div>
          </div>
          <div className="col-span-3"></div>
          {isCalenderVisible && (
            <div
              ref={calenderDivRef}
              className="absolute max-w-[800px] mt-20 round"
            >
              <DateRangePicker
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                staticRanges={[]}
                inputRanges={[]}
                minDate={new Date()}
                rangeColors={["#262626"]}
              />
            </div>
          )}
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
