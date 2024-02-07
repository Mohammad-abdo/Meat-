"use client"
import React from 'react'
import './style.css'
import LocationSection from './Location/LocationSection'
import CardsSection from './CardsSection/CardsSection'
import DiscoverMenu from './DiscoverMenu/DiscoverMenu'
const MenuPage = () => {
  return (
    
 <div className='bg-[#1e1e1e]'>
       <div className=' Menu_bg_img h-[20vh] md:h-[70vh] flex items-center justify-center'>
      
      </div>
      <LocationSection/>
      <CardsSection />
      <DiscoverMenu/>
 </div>
  )
}

export default MenuPage
