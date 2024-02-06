import React from 'react'
import SingleSelectPlaceholder from './CountrySelect'

const LocationSection = () => {
  return (
    <div>
      <div className="container flex items-center justify-center flex-col mt-20 ">
        <p className='text-white'>Every bite is a wholesome experience! You cannot resist the taste of the </p>


<div className="mt-10">
   <div className=" flex justify-center flex-col items-center ">
   <SingleSelectPlaceholder/>
   <span className=' border-b-4 border-[#f5cf9c] w-[50px]  bg-[red] block my-5' style={{width:'130px'}}></span>
   </div>
</div>


      </div>
    </div>
  )
}

export default LocationSection
