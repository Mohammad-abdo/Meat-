import React from "react";
import "./style.css";
import RateSection from "../RaterSection/RateSection";

const Lets = () => {
  return (
    <div className="Lets_Contact bg-scroll" style={{   background: "url(/images//home/background.jpg)",
    backgroundSize: "cover"}}> 
      <div className="container mx-auto">
        <div className="flex items-center flex-col justify-center z-10">
          <h1 className="text-[#e78622] larger_text text-4xl mt-20">
            WE ARE GROUNG EVRY DAY
          </h1>
          <div className="flex flex-col items-center justify-center">
            <p className="text-white font-semibold mt-10 sm:mt-20 text-2xl sm:text-4xl w-50 p_home_1">
              Hankering For More Information About Having Your Own Meat Moot
            </p>
            <div className="text-white font-semibold text-2xl sm:text-4xl w-50 mb-10">
              Restaurant?
            </div>
          </div>

          <button className="border px-8 py-3 sm:px-14 sm:py-4 transform transition-all duration-500 font-Garamond border-[#ec8923] hover:bg-[#ec8923] text-[#ec8923] hover:text-white text-base sm:text-lg font-semibold mt-5">
            Let’s Connect
          </button>
          <div className="mt-5 sm:mt-10 mb-10 sm:mb-20">
            <p className="font-semibold text-white text-base sm:text-xl">
              The success of our franchisees drives us.
            </p>
          </div>
        </div>
      </div>
      <div className='h-100 bg-black ' style={{height:"80vh"}}></div>
      <RateSection />
    </div>
  );
};

export default Lets;
