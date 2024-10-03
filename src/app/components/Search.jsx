"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Filter from "./Filter";
const Search = () => {
  const [startTimes, setStartTimes] = useState("");
  const [endTimes, setEndTimes] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(state);
  const startTime = state[0].startDate.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const endTime = state[0].endDate.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  //console.log(startTime,endTime)
  const [place, setPlace] = useState("");
  const [placeButton, setPlaceButton] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const [isCountVisible, setIsCountVisible] = useState(false);
  const locationDivRef = useRef(null);
  const calenderDivRef = useRef(null);
  const countDivRef = useRef(null);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [pet, setPet] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);
  const [navMoved, setNavMoved] = useState(false);
  const [showFilter,setShowFilter]=useState(false)
  const [tax,setTax]=useState(false)
  const handleCount = (arg) => {
    if (arg === "adultDec") {
      const newCount = adult - 1;
      if (adult < 1) {
        return;
      }
      const newTotal = totalGuest - 1;
      if (totalGuest < 1) {
        return;
      }
      setTotalGuest(newTotal);
      setAdult(newCount);
    }
    if (arg === "adultInc") {
      const newCount = adult + 1;
      const newTotal = totalGuest + 1;
      setTotalGuest(newTotal);
      setAdult(newCount);
    }
    //children
    if (arg === "childrenDec") {
      const newCount = children - 1;
      if (children < 1) {
        return;
      }
      const newTotal = totalGuest - 1;
      if (totalGuest < 1) {
        return;
      }
      setTotalGuest(newTotal);
      setChildren(newCount);
    }
    if (arg === "childrenInc") {
      const newCount = children + 1;
      const newTotal = totalGuest + 1;
      setTotalGuest(newTotal);
      setChildren(newCount);
    }
    //infant
    if (arg === "infantDec") {
      const newCount = infant - 1;
      if (infant < 1) {
        return;
      }
      const newTotal = totalGuest - 1;
      if (totalGuest < 1) {
        return;
      }
      setTotalGuest(newTotal);

      setInfant(newCount);
    }
    if (arg === "infantInc") {
      const newCount = infant + 1;
      const newTotal = totalGuest + 1;
      setTotalGuest(newTotal);
      setInfant(newCount);
    }
    //pet
    if (arg === "petDec") {
      const newCount = pet - 1;
      if (pet < 1) {
        return;
      }
      setPet(newCount);
    }
    if (arg === "petInc") {
      const newCount = pet + 1;
      setPet(newCount);
    }
  };
  useEffect(() => {
    const navStateHandler = () => {
      if (window.scrollY > 100) {
        setNavMoved(true);
      } else {
        setNavMoved(false);
      }
    };

    window.addEventListener("scroll", navStateHandler);

    return () => window.removeEventListener("scroll", navStateHandler);
  }, []);
  //   console.log(totalGuest)
  const handleCalender = () => {
    setIsCountVisible(false);
    setIsLocationVisible(false);
    setIsCalenderVisible(!isCalenderVisible);
    setEndTimes(endTime);
    setStartTimes(startTime);
  };
  //handle location div show and not shown
  const handleLocationDiv = () => {
    setIsCountVisible(false);
    setIsCalenderVisible(false);
    setIsLocationVisible(!isLocationVisible);
  };
  const handleCountDiv = () => {
    setIsLocationVisible(false);
    setIsCalenderVisible(false);
    setIsCountVisible(!isCountVisible);
  };
  const handleClickOutside = (e) => {
    if (locationDivRef.current && !locationDivRef.current.contains(e.target)) {
      setIsLocationVisible(false);
    }
    if (countDivRef.current && !countDivRef.current.contains(e.target)) {
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
  const filterFunction =(category)=>{
    console.log(category)
    if(category == 'icons'){
        setShowFilter(false)
    }
    else{
        setShowFilter(true)
    }
  }
  const needed ={
    showFilter,
    filterFunction,
    tax,setTax
  }
  return (
    <div className="fixed top-20 min-w-[1780px]">
      {/* search section */}
      <div className="border-b pb-6">
        <div
          className={`${
            isLocationVisible || isCalenderVisible || isCountVisible
              ? "bg-gray-300"
              : ""
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
                  } ${
                    isCalenderVisible || isCountVisible ? "bg-gray-300" : ""
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
              <div
                className={`${
                  isCalenderVisible
                    ? "bg-white group-hover:rounded-r-none group-hover:bg-white"
                    : ""
                } py-4  hover:my-0 px-7 flex flex-col relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full`}
              >
                <h2 className="text-sm font-bold">Check in</h2>
                <h2 className="text-sm font-bold text-gray-500">
                  {state && startTimes.length > 0 ? startTime : "Add date"}
                </h2>
              </div>
            </div>
            <div onClick={handleCalender} className="group col-span-2 ">
              <div
                className={`${
                  isCalenderVisible
                    ? "bg-white rounded-r-full rounded-l-none group-hover:bg-white "
                    : ""
                } py-4  hover:my-0 px-7 flex flex-col relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full`}
              >
                <h2 className="text-sm font-bold">Check out</h2>
                <h2 className="text-sm font-bold text-gray-500">
                  {state && endTimes.length > 0 ? endTime : "Add date"}
                </h2>
              </div>
            </div>
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
            {/* add people section */}
            <div
              onClick={handleCountDiv}
              className={`${
                isCountVisible
                  ? "bg-white rounded-l-full rounded-r-full group-hover:bg-white "
                  : ""
              } group  hover:bg-slate-300 flex justify-between px-2 hover:rounded-r-full hover:rounded-l-full items-center col-span-3`}
            >
              <div className="py-4 hover:my-0  flex flex-col relative group-hover:bg-slate-300 group-hover:rounded-r-full rounded-l-full">
                <h2 className="text-sm font-bold">Who</h2>
                <h2 className="text-sm font-bold text-gray-500">Add Guests</h2>
              </div>
              <div className="pr-2">
                <button className="p-4 flex items-center gap-1 rounded-full bg-primary text-white">
                  <FaMagnifyingGlass />
                  <span
                    className={`${
                      isCalenderVisible || isLocationVisible
                        ? "inline opacity-100 "
                        : "opacity-0  hidden"
                    } transition-opacity duration-300 ease-in-out `}
                  >
                    Search
                  </span>
                </button>
              </div>
            </div>
            {isCountVisible && (
              <div
                ref={countDivRef}
                className="max-w-[400px] right-0 bg-white shadow-md px-6 py-4 rounded-3xl mt-20 absolute"
              >
                <div className="flex w-80 py-4 mx-2 border-b justify-between">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Adults</h2>
                    <h2 className="text-sm font-medium text-gray-500">
                      Ages 13 or above
                    </h2>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <h2
                      onClick={() => handleCount("adultDec")}
                      className="text-3xl"
                    >
                      <CiCircleMinus />
                    </h2>
                    <h2 className="">{adult}</h2>
                    <h2
                      onClick={() => handleCount("adultInc")}
                      className="text-3xl"
                    >
                      <CiCirclePlus />
                    </h2>
                  </div>
                </div>
                <div className="flex w-80 py-4 mx-2 border-b justify-between">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Children</h2>
                    <h2 className="text-sm font-medium text-gray-500">
                      Ages 2 – 12
                    </h2>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <h2
                      onClick={() => handleCount("childrenDec")}
                      className="text-3xl"
                    >
                      <CiCircleMinus />
                    </h2>
                    <h2 className="">{children}</h2>
                    <h2
                      onClick={() => handleCount("childrenInc")}
                      className="text-3xl"
                    >
                      <CiCirclePlus />
                    </h2>
                  </div>
                </div>
                <div className="flex w-80 py-4 mx-2 border-b justify-between">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Infants</h2>
                    <h2 className="text-sm font-medium text-gray-500">
                      Under 2
                    </h2>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <h2
                      onClick={() => handleCount("infantDec")}
                      className="text-3xl"
                    >
                      <CiCircleMinus />
                    </h2>
                    <h2 className="">{infant}</h2>
                    <h2
                      onClick={() => handleCount("infantInc")}
                      className="text-3xl"
                    >
                      <CiCirclePlus />
                    </h2>
                  </div>
                </div>
                <div className="flex w-80 py-4 mx-2 justify-between">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Pets</h2>
                    <h2 className="text-sm font-medium text-gray-500 underline">
                      Bringing a service animal?
                    </h2>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <h2
                      onClick={() => handleCount("petDec")}
                      className="text-3xl"
                    >
                      <CiCircleMinus />
                    </h2>
                    <h2 className="">{pet}</h2>
                    <h2
                      onClick={() => handleCount("petInc")}
                      className="text-3xl"
                    >
                      <CiCirclePlus />
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div>
        <Filter needed={needed} />
      </div>
    </div>
  );
};

export default Search;

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
