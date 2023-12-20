import React from "react";

const Sermony = () => {
  return (
    <div className="bg-[#1e1e1c]">
      <div className="container mx-auto flex md:flex-nowrap flex-wrap items-center justify-between ">
        <div className="  w-1/4 sm:w-auto flex  flex-col md:flex-nowrap h-auto  items-start sm:items-center  mr-40">
          <span className="border-t-2 my-4 w-16 border-[#e78622]"></span>
          <div className="my-4 flex items-center justify-center">
            <h2 className="text-6xl  text-[#e78622] larger_text sm:w-auto">
              Celebrities Favorite Meat Resturant
            </h2>
          </div>
          <div className="flex flex-col md:flex-nowrap flx-wrap items-start justify-center sm:w-auto">
            <span className=" pb-4">
              <svg
                aria-hidden="true"
                width="54"
                height="100"
                fill="white"
                className="   e-font-icon-svg  e-fas-quote-left"
                viewBox="0 0 512 512"
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </span>
            <div className="flex items-center w-full flex-col mx-5 ">
              <p className="text-white font-semibold text-xl p_home_1 ">
                Each of our meals has it own uniqestory that we whant to share
                with you
              </p>
              <button className="border w-72 sm:px-14 sm:py-4 transform transition-all duration-500  border-[#ec8923] hover:bg-[#ec8923] text-[#ec8923] hover:text-white text-10  sm:text-lg  mt-5">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
        <div className="  flex md:flex-nowrap flex-wrap h-auto  " >
          <div className="w-1/3 flex flex-col items-center justify-center sm:justify-between flex-wrap md:flex-nowrap mx-2 sm:my-36">
            <div className="w-80 h-64 sm:w-full my-20">
               <img src="/images/home/poster-1.jpeg" alt=""  className="h-auto max-w-full rounded-lg"/>
               </div>
            <div className=" w-80 h-64 mb-10 sm:w-auto my-16">
              <img src="/images/home/poster-2.webp" alt="" className="h-auto max-w-full rounded-lg" />
              </div>
          </div>
          <div className=" flex flex-col items-between justify-center flex-wrap md:flex-nowrap mx-3">
    <div className="flex items-center relative">
      <div className=" w-64 h-96 ">
      <img src="/images/home/drop-1.webp" alt=""  className="h-auto max-w-full rounded-lg "/>
      </div>
      <div className=" w-72 h-52  ">
      <img src="/images/home/drop-2.jpeg" alt=""  className="h-auto max-w-full rounded-lg"/>
      </div>
    </div>
    <div className="flex items-center relative mt-10">
      <div className=" w-52 h-52  ">
      <img src="/images/home/drop-4.jpeg" alt=""  className="h-auto max-w-full rounded-lg"/>
      
      </div>
      <div className=" w-80 h-48  ">
      <img src="/images/home/drop-3.jpeg" alt=""  className="h-auto max-w-full rounded-lg m"/>
      </div>
    </div>
    <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermony;
