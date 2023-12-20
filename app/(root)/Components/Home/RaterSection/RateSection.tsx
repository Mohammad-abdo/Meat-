"use client"
import dynamic from 'next/dynamic'
import React from 'react'
import CountUp from 'react-countup';

import './style.css'

const RateSection = () => {
  return (
    <div className=''>
      <div className="container flex mx-auto  items-center justify-center sm:h-auto" style={{}}>
        <div className="flex  mx-auto md:flex-nowrap flex-wrap items-center justify-center  ">
        <div className=" bg-[#181818] Cont_sec  flex flex-col items-center justify-center  m-10"
             >

           
                <h2 className='text-6xl text-[#e78622]   font-extrabold'>4.8</h2>
                <span className='text-[#bc955a] flex items-center font-extrabold'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5  w-5 mt-1   text-[#bc955a]'">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5  w-5 mt-1   text-[#bc955a]'">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5  w-5 mt-1   text-[#bc955a]'">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5  w-5 mt-1   text-[#bc955a]'">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5  w-5 mt-1   text-[#bc955a]'">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>
                    </span>
                    <span className='text-[#bc955a] flex items-center mt-4 text-xl font-semibold'>5151 Ratings</span>
                    <span className='text-[#bc955a] flex items-center mt-1 text-xl font-semibold'>Google Reviews</span>
            </div>
            <div className="bg-[#181818] Cont_sec  flex flex-col items-center justify-center  m-10"
             >

           
                <h2 className='text-6xl text-[#e78622] font-extrabold'> 
                <CountUp start={0} end={43500 } duration={2} delay={3}/> +
                </h2>
                <span className='text-[#bc955a] text-2xl font-semibold'>Daily Customers</span>
                <span className='text-[#bc955a] text-lg font-semibold'>in our branches</span>
            </div>
            <div className="bg-[#181818] Cont_sec  flex flex-col items-center justify-center  m-10"
             >

           
                <h2 className='text-6xl text-[#e78622] font-extrabold'> 
                <CountUp start={0} end={29} duration={2} delay={3}/> +
                </h2>
                <span className='text-[#bc955a] text-2xl font-semibold'>Branchez</span>
                <span className='text-[#bc955a] text-lg font-semibold'>in mor than12 country </span>
            </div>
          
        
        </div>

      </div>
    </div>
  )
}

export default RateSection
