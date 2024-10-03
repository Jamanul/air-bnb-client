import React from "react";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { MdOutlineBedroomParent, MdTrendingUp } from "react-icons/md";
import { PiIslandBold } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import {
  GiBarn,
  GiBedLamp,
  GiCampfire,
  GiCastle,
  GiCastleRuins,
  GiCaveEntrance,
  GiDesert,
  GiFarmTractor,
  GiFarmer,
  GiFishingBoat,
  GiFlake,
  GiGolfFlag,
  GiGrandPiano,
  GiHillFort,
  GiHills,
  GiHomeGarage,
  GiHoneycomb,
  GiIceBomb,
  GiModernCity,
  GiMountaintop,
  GiParkBench,
  GiPoolDive,
  GiSeaCliff,
  GiSkiBoot,
  GiSkier,
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
const Filter = ({ needed }) => {
  const { filterFunction, showFilter,tax,setTax } = needed;
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
                <button className="flex items-center px-3 py-2 rounded-lg gap-2 border-2 text-sm font-bold">
                  <IoFilterSharp />
                  Filter
                </button>
              </div>
              <div className="flex w-60 items-center pl-2 py-[6px] rounded-lg gap-2 border-2 font-bold">
                <h2 className="text-[12px]">Display total before taxes</h2>
              <input onClick={()=>setTax(!tax)} type="checkbox" className="toggle"  />
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
