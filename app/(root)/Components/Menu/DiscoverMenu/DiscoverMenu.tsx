import React from "react";
import "../style.css";
import { MenuLink } from "../../../../../constant/allInfo";
import CustomClock from "./WallClock";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import ClockCarousel from "./ClockCarousel";


const TimeZone=[
  
  {
    id:1,
    zone:"Egypt",
    text:"Egypt"
  },
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
  // {
  //   id:7,
  //   zone:"Australia/Sydney",
  //   text:"Australia/Sydney"
  // },
  // {
  //   id:8,
  //   zone:"America/Phoenix",
  //   text:"America/Phoenix"
  // },
]

const DiscoverMenu = () => {
  return (
    <div className="bg-[#171718]">
      <div className="py-10 flex items-center justify-center flex-col">
        <div className="my-10 flex items-center justify-center flex-col">
          <h1 className="text-[#bc955a] DiscoverMenu__HEADER text-4xl font-bold font-Garamond">
            DISCOVER OUR MENU
          </h1>
          <p className="text-[#e0e0e0] text-[20px] font-semibold text-xl mt-5">
            Click the button to display the menu
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-4 gap-8 w-[60%] mx-auto">
        {MenuLink.map((item) => (
          <div
            className="border flex items-center justify-center flex-col border-[#efa765] text-[#efa765] hover:text-white transition-all duration-150 ease-in cursor-pointer py-3 px-0 hover:bg-[#efa765]"
            key={item.id}
          >
            <a
              href="#"
              className="flex justify-center items-center flex-col text-[13px]"
            >
              {item.p} <strong>{item.srrong}</strong>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-20 py-10 container mx-auto overflow-hidden outline-none">
        <div className="flex items-center justify-center flex-col">

            <img src="/images/menu/letsmeat.png" alt="" className="w-[220px] my-10" />
     
              <p className=" text-4xl font-semibold text-meatMoot_heading animate-pulse " style={{fontFamily:'"Cormorant Garamond,"sans-serif'}}>30 Branche And Stil Countenu</p>
         
     
          {/* clock timezone */}

        
        </div>
      </div>
      <div className="bg-meatMoot_heading w-full mt-20">
      <ClockCarousel />

          </div>
    </div>
  );
};

export default DiscoverMenu;
