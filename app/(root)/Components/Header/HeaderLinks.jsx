"use client"
import Link from 'next/link'
import React ,{useState} from 'react'

const HeaderLinks = ({page,text,active}) => {
  const [clickTAG, setClickTAG] = useState(false);
  const linKAc=true
  const activen=()=>{
    setClickTAG(true)
  }
    const linkActive = active?"text-yellow-500":"text-white"
  return (

      <li  className='  md:border-b md:border-[#0000] py-6 transform transition-all duration-500 md:hover:border-yellow-500'>
        <Link onClick={()=>linkActive}  href={page} className="   block py-2 px-3  text-[#d9d6d6] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent
         md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white
          dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
           dark:border-gray-700">{text}</Link>
      </li>

   
  )
}

export default HeaderLinks
