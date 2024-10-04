"use client";
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { CiHeart } from 'react-icons/ci';
const Card = ({property,tax}) => {
    const { countryLocation,howFarAway,checkInDate,checkoutDate,price,priceBeforeTax}=property 
    const date = new Date(checkInDate);

const options = { month: 'short', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
    const dateOne = new Date(checkoutDate);


const formattedDateOne = dateOne.toLocaleDateString('en-US', options);
    console.log(countryLocation)
    return (
        <div className=' w-64 h-[360px]'>
            <div className=' w-64 h-[280px] '>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            pagination={true}
            modules={[Navigation,Pagination]}
            className="mySwiper"
          >
            {
                imageArray.map(img=><SwiperSlide className='rounded-2xl p-4' key={img.id}>
                        <Image className='rounded-2xl mt-40' src={img.url} height={380} width={290} alt='pic'/>
                        <CiHeart className='absolute top-6 text-2xl text-white hover:text-black right-8'/>
                    </SwiperSlide>)
            }
            
          </Swiper>

            </div>
            <h2 className='pl-4 font-bold text-gray-500'>{countryLocation}</h2>
            <h2 className='pl-4 text-sm'>{howFarAway} Kilometers Away</h2>
            <div className='pl-4 flex items-center'>
            <h2 className='text-sm'>{formattedDate} -</h2> 
            <h2 className='pl-1 text-sm'>{formattedDateOne}</h2> 
            </div>
            <h2 className='pl-4 underline text-black font-bold text-sm'>{ tax? `$${ priceBeforeTax} Total Before tax` :  `$${price} Night`}</h2>
        </div>
    );
};

export default Card;

const imageArray = [
    {
      id: 1,
      url: "https://i.ibb.co/j4jx3Bj/171ca25053719bcd076a12e1e9d8a846.jpg",
      description: "First image description"
    },
    {
      id: 2,
      url: "https://i.ibb.co/GsZZcz0/e1735f9ed75f73ebe97b4eaa254ea3be.jpg",
      description: "Second image description"
    },
    {
      id: 3,
      url: "https://i.ibb.co/kGtVbcm/3980372a5a1f0862c51a81b5976d3bbb.jpg",
      description: "Third image description"
    },
    {
      id: 4,
      url: "https://i.ibb.co/5Rjzngb/80fffec71d9fcf3d9f28c66a7118e0a0.jpg",
      description: "Fourth image description"
    },
    {
      id: 5,
      url: "https://i.ibb.co/2FhBvjk/b5482a0ce25f046bd5dfbb4dcadc1f09.jpg",
      description: "Fifth image description"
    }
  ];
  