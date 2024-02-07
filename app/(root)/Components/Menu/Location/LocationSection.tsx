import React from 'react'
import SingleSelectPlaceholder from './CountrySelect'

const LocationSection = () => {
  return (
    <div>
      <div className="container flex items-center justify-center flex-col mt-20 ">
        <p className='text-white text-2xl w-[68%] text-center line-2 '>Every bite is a wholesome experience! You cannot resist the taste of the 
        <strong className='text-[#ec8923] font-extrabold'> smoked flavors</strong>
        </p>


<div className="mt-10">
   <div className=" flex justify-center flex-col items-center ">
   <SingleSelectPlaceholder/>
   <span className=' border-b-4 border-[#fbc580] w-[50px]   block my-5' style={{width:'130px'}}></span>
   </div>
</div>
<div className="text-center">
    <h3 className='text-[#fbc580] font-extrabold text-4xl'>Oure Menu</h3>
</div>
{/* picture section  */}


      </div>
    </div>
  )
}

export default LocationSection
