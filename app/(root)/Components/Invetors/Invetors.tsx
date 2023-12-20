import React from 'react'
import './style.css'
import Accordion from './Accordion/Accordion'
import ShowMore from './ShowMore/ShowMore'
import ScrollCards from './ScrollCards/ScrollCards'
const Invetors = () => {
  return (
    <div>
        <div className='bg_img h-[20vh] md:h-[70vh] flex items-center justify-center'>
    <div className="container mx-auto flex items-center justify-center flex-col mt-44 z-10 " >
        <p className='text-[#ec8923] lg:text-8xl  md:text-8xl text-4xl font-normal  mb-10 about_text'>Invetors</p>
        <span className="border-t-2  w-28 border-[#bc955a]"></span>
      </div>
    </div> 
    <Accordion />
    <ShowMore/>
    <ScrollCards/>
    </div>
   

  )
}

export default Invetors
