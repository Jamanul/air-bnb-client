"use client";
import React, { useState } from "react";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import {
  MdApartment,
  MdHotel,
  MdHouse,
  MdOutlineBedroomParent,
  MdTrendingUp,
} from "react-icons/md";
import { PiIslandBold } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { IoFilterSharp, IoThunderstorm } from "react-icons/io5";
import {
  GiAngelWings,
  GiBarn,
  GiBedLamp,
  GiCampfire,
  GiCastle,
  GiCastleRuins,
  GiCat,
  GiCaveEntrance,
  GiDesert,
  GiFarmTractor,
  GiFarmer,
  GiFishingBoat,
  GiFlake,
  GiForkKnifeSpoon,
  GiGolfFlag,
  GiGrandPiano,
  GiHillFort,
  GiHills,
  GiHomeGarage,
  GiHoneycomb,
  GiHouse,
  GiIceBomb,
  GiKey,
  GiModernCity,
  GiMountaintop,
  GiParkBench,
  GiPoolDive,
  GiSeaCliff,
  GiSkiBoot,
  GiSkier,
  GiSnowflake1,
  GiSun,
  GiSurfBoard,
  GiTreehouse,
  GiVineFlower,
  GiWaves,
  GiWindmill,
  GiWoodCabin,
} from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { IoBoatSharp } from "react-icons/io5";
import { MdLandslide } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaWifi } from "react-icons/fa6";
const Filter = ({ needed }) => {
  const {
    filterFunction,
    showFilter,
    tax,
    setTax,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    placeType,
    setPlaceType,
    bedrooms,
    setBedrooms,
    beds,
    setBeds,
    baths,
    setBaths,
    setWifi,
    setAirConditioning,
    setKitchen,
    setSelfChecking,
    setAllowsPet,
    setGuestFavorite,
    wifi,
    airConditioning,
    kitchen,
    selfChecking,
    allowsPet,
    guestFavorite,instantBooking,setInstantBooking,handlePropertyType 

  } = needed;

  const handleBedAndRooms = (params) => {
    if (params === "bedroomsDec") {
      const newCount = bedrooms - 1;
      if (bedrooms < 1) {
        return;
      }
      setBedrooms(newCount);
    }
    if (params === "bedroomsInc") {
      const newCount = bedrooms + 1;
      setBedrooms(newCount);
    }
    if (params === "bedsDec") {
      const newCount = beds - 1;
      if (beds < 1) {
        return;
      }
      setBeds(newCount);
    }
    if (params === "bedsInc") {
      const newCount = beds + 1;
      setBeds(newCount);
    }
    if (params === "bathsDec") {
      const newCount = baths - 1;
      if (baths < 1) {
        return;
      }
      setBaths(newCount);
    }
    if (params === "bathsInc") {
      const newCount = baths + 1;
      setBaths(newCount);
    }
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };
  console.log(tax);
  return (
    <div>
      <div className="flex max-w-[1780px]">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {icons1.map((icon) => (
                <div
                  className="flex flex-col items-center justify-center py-4 w-20 hover:border-b hover:border-b-gray-500 "
                  onClick={() => filterFunction(icon.name)}
                  key={icon.name}
                >
                  <h2 className="text-3xl text-gray-500">{icon.element}</h2>{" "}
                  <h2 className="text-[12px] text-gray-400 font-bold">
                    {icon.name}
                  </h2>
                </div>
              ))}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              {icons2.map((icon) => (
                <div
                  className="flex flex-col items-center justify-center w-20 py-4 hover:border-b hover:border-b-gray-500 "
                  key={icon.name}
                  onClick={() => filterFunction(icon.name)}
                >
                  <h2 className="text-3xl text-gray-500">{icon.element}</h2>{" "}
                  <h2 className="text-[12px] text-gray-400 font-bold">
                    {icon.name}
                  </h2>
                </div>
              ))}
            </SwiperSlide>
          </Swiper>
        </>
        <div>
          {showFilter && (
            <div className="flex gap-2 items-center justify-center h-[120px]">
              <div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="flex items-center px-3 py-2 rounded-lg gap-2 border-2 text-sm font-bold"
                >
                  <IoFilterSharp />
                  Filter
                </button>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h2 className="text-center font-bold pb-2 border-b">
                      Filter
                    </h2>
                    <div className="pt-4 pb-6 border-b">
                      <h2 className="font-bold pb-4 ">Type of Place</h2>
                      <div className="border grid grid-cols-3 text-sm rounded-3xl ">
                        <h2
                          onClick={() => setPlaceType("")}
                          className="px-4 my-1 py-1 text-center font-bold"
                        >
                          Any Type
                        </h2>
                        <h2
                          onClick={() => setPlaceType("room")}
                          className={`${
                            placeType == "room"
                              ? "border-2 border-black bg-gray-100 rounded-md"
                              : ""
                          } px-4 my-1 py-1 text-center font-bold border-l border-r`}
                        >
                          Room
                        </h2>
                        <h2
                          onClick={() => setPlaceType("fullHome")}
                          className={`${
                            placeType == "fullHome"
                              ? "border-2 border-black bg-gray-100 rounded-md"
                              : ""
                          } px-4 my-1 py-1 text-center font-bold`}
                        >
                          Entire home
                        </h2>
                      </div>
                    </div>
                    {/* price range */}
                    <div>
                      <div>
                        <h2 className="font-bold pt-6 pb-2">Price Range</h2>
                        <h2 className="text-sm pb-4">
                          Nightly prices before fees and taxes
                        </h2>
                      </div>
                      <div className="flex flex-col items-center justify-center w-full p-4">
                        <div className="relative w-full max-w-md">
                          {/* Slider track */}
                          <div className="relative h-2 bg-gray-200 rounded-full">
                            <div
                              className="absolute h-2 bg-pink-500 rounded-full"
                              style={{
                                left: `${(minValue / 1000) * 100}%`,
                                right: `${100 - (maxValue / 1000) * 100}%`,
                              }}
                            ></div>
                          </div>
                          {/* Min slider */}
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={minValue}
                            onChange={handleMinChange}
                            className="absolute -top-4 w-full h-2 appearance-none bg-transparent pointer-events-none slider-thumb min-slider"
                            style={{ pointerEvents: "all" }}
                          />
                          {/* Max slider */}
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="absolute top-4 w-full h-2 appearance-none bg-transparent pointer-events-none slider-thumb max-slider"
                            style={{ pointerEvents: "all" }}
                          />
                          <div className="flex justify-between mt-4 text-sm text-gray-600">
                            <div>
                              <h2 className="font-bold text-center pb-2 text-sm">
                                Minimum
                              </h2>
                              <span className="px-4 py-2 text-center border rounded-r-full rounded-l-full">
                                ${minValue}
                              </span>
                            </div>
                            <div>
                              <h2 className="font-bold text-center  text-sm">
                                Maximum
                              </h2>
                              <span className="px-4 flex items-center py-2 text-center border rounded-r-full rounded-l-full">
                                ${maxValue}{" "}
                                <span
                                  className={`${
                                    maxValue == 1000 ? "block" : "hidden"
                                  }`}
                                >
                                  {" "}
                                  +
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* beds and rooms */}
                    <div>
                      <h2 className="py-6 border-t font-bold">
                        Rooms and beds
                      </h2>
                      <div className="flex pb-6 justify-between">
                        <h2 className="font-medium">Bedrooms</h2>
                        <div className="grid grid-cols-3 gap-2 items-center justify-between">
                          <h2
                            className="text-3xl"
                            onClick={() => handleBedAndRooms("bedroomsDec")}
                          >
                            <CiCircleMinus />
                          </h2>
                          <h2 className="text-center">
                            {bedrooms > 0 ? bedrooms : "Any"}
                          </h2>
                          <h2
                            className="text-3xl"
                            onClick={() => handleBedAndRooms("bedroomsInc")}
                          >
                            <CiCirclePlus />
                          </h2>
                        </div>
                      </div>
                      <div className="flex pb-6 justify-between">
                        <h2 className="font-medium">Beds</h2>
                        <div className="grid grid-cols-3 gap-2 items-center justify-between">
                          <h2
                            className="text-3xl"
                            onClick={() => handleBedAndRooms("bedsDec")}
                          >
                            <CiCircleMinus />
                          </h2>
                          <h2 className="text-center">
                            {beds > 0 ? beds : "Any"}
                          </h2>
                          <h2
                            className="text-3xl"
                            onClick={() => handleBedAndRooms("bedsInc")}
                          >
                            <CiCirclePlus />
                          </h2>
                        </div>
                      </div>
                      <div className="flex pb-6 border-b justify-between">
                        <h2 className="font-medium">Baths</h2>
                        <div className="grid grid-cols-3 gap-2 items-center justify-between">
                          <h2
                            className="text-3xl"
                            onClick={() => handleBedAndRooms("bathsDec")}
                          >
                            <CiCircleMinus />
                          </h2>
                          <h2 className="text-center">
                            {baths > 0 ? baths : "Any"}
                          </h2>
                          <h2
                            className="text-3xl"
                            onClick={() => handleBedAndRooms("bathsInc")}
                          >
                            <CiCirclePlus />
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* amenities  */}
                    <div>
                      <h2 className="py-6 border-t font-bold ">Amenities</h2>
                      <div className="flex pb-6 gap-1">
                        <h2
                          onClick={() => setWifi(!wifi)}
                          className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border"
                        >
                          <FaWifi /> Wifi
                        </h2>
                        <h2  onClick={() => setAirConditioning(!airConditioning)} className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <GiSnowflake1 /> Air Condition
                        </h2>
                        <h2  onClick={() => setKitchen(!kitchen)} className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <GiForkKnifeSpoon /> Kitchen
                        </h2>
                      </div>
                    </div>
                    {/* booking option */}
                    <div className="border-b">
                      <h2 className="py-6 border-t font-bold ">
                        Booking options
                      </h2>
                      <div className="flex pb-8 gap-1">
                        <h2  onClick={() => setInstantBooking(!instantBooking)} className="flex items-center text-sm rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <IoThunderstorm /> Instant book
                        </h2>
                        <h2 onClick={() => setSelfChecking(!selfChecking)} className="flex items-center text-sm rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <GiKey /> Self Checking
                        </h2>
                        <h2 onClick={() => setAllowsPet(!allowsPet)} className="flex items-center text-sm rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <GiCat /> Allows Pets
                        </h2>
                      </div>
                    </div>
                    {/*Guest */}
                    <div className="w-56">
                      <h2 className="py-6  font-bold ">Standout Stays</h2>
                      <div onClick={()=>setGuestFavorite(!guestFavorite)} className="flex items-center gap-4 border px-2 py-4 rounded-lg ">
                        <div className="text-3xl">
                          <GiAngelWings />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="font-bold">Guest Favorite</h2>
                          <h2 className="font-bold text-sm text-gray-400">
                            The most loved homes on Airbnb
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* property Type */}
                    <div className="border-b mt-6">
                      <h2 className="py-6 border-t font-bold ">
                        Property Type
                      </h2>
                      <div className="grid-cols-3 grid pb-8 gap-1">
                        <h2 onClick={()=>{handlePropertyType('house')}} className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <GiHouse /> House
                        </h2>
                        <h2 onClick={()=>{handlePropertyType('hotel')}} className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <MdHotel /> Hotel
                        </h2>
                        <h2 onClick={()=>{handlePropertyType('apartment')}} className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <MdApartment /> Apartment
                        </h2>
                        <h2 onClick={()=>{handlePropertyType('guestHouse')}} className="flex items-center rounded-r-full rounded-l-full px-4 py-2 gap-1 border">
                          <MdHouse /> Guesthouse
                        </h2>
                      </div>
                    </div>
                    <form
                      className="pt-4 flex items-center justify-end"
                      method="dialog"
                    >
                      <button className="btn bg-black text-white">Show</button>
                    </form>
                  </div>
                </dialog>
              </div>
              <div className="flex w-60 items-center pl-2 py-[6px] rounded-lg gap-2 border-2 font-bold">
                <h2 className="text-[12px]">Display total before taxes</h2>
                <input
                  onClick={() => setTax(!tax)}
                  type="checkbox"
                  className="toggle"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;

const icons1 = [
  { name: "icons", element: <BsFillTicketPerforatedFill /> },
  { name: "rooms", element: <MdOutlineBedroomParent /> },
  { name: "countryside", element: <PiIslandBold /> },
  { name: "omg", element: <TbBeach /> },
  { name: "lakefront", element: <GiBoatFishing /> },
  { name: "windmills", element: <GiWindmill /> },
  { name: "amazing views", element: <MdLandslide></MdLandslide> },
  { name: "bed& breakfast", element: <GiBedLamp /> },
  { name: "top of the world new", element: <GiMountaintop /> },
  { name: "tiny homes", element: <GiHomeGarage /> },
  { name: "camping", element: <GiCampfire /> },
  { name: "amazing pools", element: <GiPoolDive /> },
  { name: "houseboats", element: <IoBoatSharp /> },
  { name: "cabins", element: <GiWoodCabin /> },
  { name: "national parks", element: <GiParkBench /> },
  { name: "caves", element: <GiCaveEntrance /> },
  { name: "hanoks", element: <HiHomeModern /> },
  { name: "skiing", element: <GiSkiBoot /> },
  { name: "beach", element: <GiWaves /> },
  { name: "desert", element: <GiDesert /> },
  { name: "ski", element: <GiSkier /> },
];

const icons2 = [
  { name: "luxe", element: <GiFlake /> },
  { name: "lake", element: <GiFishingBoat /> },
  { name: "tropical", element: <GiSun /> },
  { name: "castles", element: <GiCastle /> },
  { name: "off the grid", element: <GiSeaCliff /> },
  { name: "design", element: <GiHoneycomb /> },
  { name: "barns", element: <GiBarn /> },
  { name: "top cities", element: <GiModernCity /> },
  { name: "golfing", element: <GiGolfFlag /> },
  { name: "trulli", element: <GiHills /> },
  { name: "mantions", element: <GiHillFort /> },
  { name: "trending", element: <MdTrendingUp /> },
  { name: "tree houses", element: <GiTreehouse /> },
  { name: "farms", element: <GiFarmTractor /> },
  { name: "campers", element: <GiCampfire /> },
  { name: "surfing", element: <GiSurfBoard /> },
  { name: "earth homes", element: <GiBarn /> },
  { name: "a-framers", element: <GiFarmer /> },
  { name: "historical homes", element: <GiCastleRuins /> },
  { name: "vineyard", element: <GiVineFlower /> },
];
