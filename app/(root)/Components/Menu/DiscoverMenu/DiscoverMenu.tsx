import React from 'react'
import '../style.css'
import { MenuLink } from '../../../../../constant/allInfo'
import CustomClock from './WallClock'

const DiscoverMenu = () => {
  return (
    <div className='bg-[#171718]'>
        <div className="py-10 flex items-center justify-center flex-col">
            <div className="my-10 flex items-center justify-center flex-col">
                <h1 className="text-[#bc955a] DiscoverMenu__HEADER text-4xl font-bold font-Garamond">
                    DISCOVER OUR MENU
                </h1>
                <p className='text-[#e0e0e0] text-[20px]  font-semibold text-xl mt-5'>Click the button to display the menu</p>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-4  gap-8 w-[60%] mx-auto">
            {
                MenuLink.map((item)=>(
                    <div className="border flex items-center justify-center flex-col 
                     border-[#efa765]  text-[#efa765]  hover:text-white transition-all 
                     duration-150 ease-in cursor-pointer py-3 px-0  hover:bg-[#efa765]" key={item.id}>
                <a href='#' className='flex justify-center items-center flex-col text-[13px]'> {item.p} <strong> {item.srrong} </strong></a>
            </div>
                ))
            }
            
    
        </div>
        <div className="mt-20 py-10">
            <div className=" flex items-center justify-center flex-col ">
                <div>
                    <img src="/images/menu/letsmeat.png" alt="" className='w-[220px] ' />
                </div>
                <div >
                    <CustomClock/>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default DiscoverMenu
