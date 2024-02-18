import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './cloock.css';

// import required modules
import { Pagination } from 'swiper/modules';
import CustomClock from "./WallClock";

const TimeZone=[
  

    {
      id:2,
      zone:"America/New_York",
      text:"America/New_York"
    },
    {
      id:3,
      zone:  "America/Los_Angeles",
      text:  "America/Los_Angeles"
    },

    {
      id:4,
      zone:"Europe/London",
      text:"Europe/London"
    },
    {
      id:5,
      zone:"Europe/Paris",
      text:"Europe/Paris"
    },
    {
      id:6,
      zone:"Asia/Tokyo",
      text:"Asia/Tokyo"
    },
    {
      id:7,
      zone:"Australia/Sydney",
      text:"Australia/Sydney"
    },
    {
      id:8,
      zone:"America/Phoenix",
      text:"America/Phoenix"
    },
    {
        id:1,
        zone:"Egypt",
        text:"Egypt"
      },
  ]

const ClockCarousel = () => {

  return (
    <div className='py-2'>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          976: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-2 bg-meatMoot_heading"
      >
        {
            TimeZone.map((item, index) =>(

                <SwiperSlide className='bg-transparent'>
               <CustomClock text={item.text} timeZone={item.zone} />


                </SwiperSlide>
            ))
        }

      </Swiper>
    </div>
  );
};

export default ClockCarousel;
