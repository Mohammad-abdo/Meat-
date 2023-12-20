import React from 'react'

const CardrLeft = ({imgURL,text}) => {
  return (
    <div>
       <div className='bg-[#bc955a] relative  hover:scale-125 transfor transition-all duration-1000 md:h-100 md:w-64 my-20'
        style={{width:"80%"}}
        
        >
            <img src={imgURL}  className=" transform -translate-x-6 translate-y-6" alt="" />
        </div>
        <div className='my-5 flex items-end'> <h1 className='text-[#bc955a] font-semibold text-2xl'>{text}</h1></div>
      
    </div>
  )
}

export default CardrLeft
