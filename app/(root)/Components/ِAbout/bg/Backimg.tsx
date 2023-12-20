import React from 'react'
import './style.css'
import Link from 'next/link'
const SvgLinks=[
{
  id:1,
  svg:"/images/about/s-1.png",
  alt:"social icos"
},  
{
  id:2,
  svg:"/images/about/s-2.png",
  alt:"social icos"
},  
{
  id:3,
  svg:"/images/about/s-3.png",
  alt:"social icos"
},  
{
  id:4,
  svg:"/images/about/s-4.png",
  alt:"social icos"
},  
{
  id:5,
  svg:"/images/about/s-5.png",
  alt:"social icos"
},  
]
const imgCard=[
{
  id:1,
  svg:"/images/about/s-11.jpeg",
  alt:"social icos"
},  
{
  id:2,
  svg:"/images/about/s-22.jpeg",
  alt:"social icos"
},  
{
  id:3,
  svg:"/images/about/s-33.jpeg",
  alt:"social icos"
},  
{
  id:4,
  svg:"/images/about/s-44.jpeg",
  alt:"social icos"
},  
  
]
const Backimg = () => {
  return (
    <div className='  bg-contain h-full w-full  bg_shadow bg-[#181817]' style={{backgroundImage:"url(/images/about/about-divi.jpg)"}}>
    <div className='  bg-[#1e1e1c] z-30 pb-4 relative' >
      <div className="container mx-auto py-20 flex-col md:flex-nowrap flex-wrap items-start justify-between ">

        <div className="flex flex-col items-start mt-20">
            <h1 className='larger_text text-6xl h_text text-[#ec8923] mb-10'>Our History</h1>
   <div className='flex items-center justify-between'>
    <div className="" style={{width:"49%"}}></div>
    <div className="flex  ">
    <p className="text-justify p_2_about text-white text-lg">
               Established in 2021, we now have <strong>Meat Moot</strong> locations in <strong>12 countries</strong> around the world. We are headquartered Istanbul, Turkey. Meat Moot is an exciting rather newly established restaurant brand, which expands very successfully and rapidly internationally.
                We are introducing a whole new concept of great smoked meat to the market and combining casual dining with great and fast service.
                </p>
              
            </div>
   </div>
        </div>
        <div className="flex flex-col items-start mt-20">
            <h1 className='larger_text text-6xl h_text text-[#ec8923] mb-10'>Branchez</h1>
   <div className='flex items-center justify-between'>
    <div className="" style={{width:"49%"}}></div>
    <div className="flex  ">
                <p className="text-justify p_2_about text-white text-lg">
              Istanbul - Turkey | Cairo - Egypt | Amman - Jordan | Doha - Qatar | Kuwait City - Kuwait | Dubai - United Arab Emirates | Erbil - Iraq | Chicago - USA | Manama - Bahrain | Michigan - United States | El Sahel El Shamally - Egypt | Ramallah - Palestine | Buraydah - Saudi Arabia | Riyadh - Saudi Arabia | Algiers - Algeria | Irbid - Jordan | Abu Dhabi - UAE  | Dabouq - Jordan | Marrakesh - Morocco | Benghazi - Libya |  Trabzon - Turkey | Muscat - Oman | Zarqa - Jordan | New Jersey - USA</p>
              
            </div>
   </div>
        </div>
        <div className="flex items-center justify-center">
        <button className=' border mt-10 px-14 py-4 transform transition-all duration-500 font-Garamond border-[#ec8923] hover:bg-[#ec8923] text-[#ec8923] hover:text-white text-lg font-semibold'>
FIND CLOSEST LOCATION
      </button>
        </div>
      </div>
      <div className="mt-20  mb-4">
        <div className="flex flex-wrap  sm:flex-wrap lg:flex-nowrap md:flex-nowrap items-center w-full">
         <div className="border-[#ec8923]  lg:w-96 w-1/2  h-52 sm:w-1/3 md:w-96 sm:h-72 md:h-80 border-2">
         <img src="/images/about/g-1.webp" alt="" className=' object-cover h-full md:w-96 md:h-80 py-1'/>
         </div>
         <div className="border-[#ec8923]  lg:w-96 w-1/2  h-52 sm:w-1/3 md:w-96 sm:h-72 md:h-80 border-2 flex flex-col items-center ">
        <span className="text-4xl p_t mt-5 text-[#ec8923] ">Follow </span>
        <span className="text-4xl p_t text-[#ec8923] ">Us On</span>
        <a href="#!" role="button" className=" mx-2 mt-5 py-3 "  style={{borderRadius:"10px"}}>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="md:h-20 md:w-24 mx-3 text-[#ec8923] hover:scale-125 transform transition-all duration-700"
    fill="currentColor"
    width={100}
    height={50}
   
    viewBox="0 0 24 24">
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
</a>
         </div>
         <div className="border-[#ec8923]  lg:w-96 w-1/2  h-52 sm:w-1/3 md:w-96 sm:h-72 md:h-80 border-2">
         <img src="/images/about/g-2.webp" alt="" className=' object-cover h-full md:w-96 md:h-80 py-1'/>
         </div>
         <div className="border-[#ec8923]  lg:w-96 w-1/2  h-52 sm:w-1/3 md:w-96 sm:h-72 md:h-80 border-2">
         <img src="/images/about/g-3.webp" alt="" className=' object-cover h-full md:w-96 md:h-80 py-1'/>
         </div>
         <div className="border-[#ec8923]  lg:w-96 w-1/2  h-52 sm:w-1/3 md:w-96 sm:h-72 md:h-80 border-2">
         <img src="/images/about/g-4.webp" alt="" className=' object-cover h-full md:w-96 md:h-80 py-1'/>
         </div>

        </div>
      </div>
    </div>

    <div className="container mx-auto m-40 mb-40 transform -translate-y-20 z-30 relative">
<div className="container mx-auto  bg-[#17171781] rounded-lg">
<div className='flex items-center  justify-center shadow'><h1 className="text-6xl p_t mt-20 text-[#eb8923]">Atmosphere of our Resturant</h1></div>
<div className="flex flex-col my-10 items-start justify-center">
  <p className='text-lg font-semibold text-white my-5 '>
  The warm, industrial décor draws on cues from traditional Istanbul butcher shops, and the usage of warm wood, stainless steel, and dark marble.    </p>
  <p className='text-lg font-semibold text-white my-5 '>
  The space succeeds in being simultaneously rustic, inviting, and luxurious with rich details. Interior details include an homage to a traditional “<strong>meat locker</strong>” interior with finished walnut planks covering the length of the dining room wall.    </p>
  <p className='text-lg font-semibold text-white my-5 '>
  The unique experience for guests is complemented by the creative interior design of all branches of <span style={{color: "#eb8923"}}>Meat Moot</span> restaurants, which accentuates to the restaurant’s warm atmosphere and integrates the iconic wooden material inspired by the restaurant’s identity that provides relaxation and tranquility.    </p>
  <p className='text-lg font-semibold text-white my-5 '>
  The soothing quiet music brings comfort while the guests indulge and unwind. From big details down to the small intricate ones have been given a thoughtful consideration to provide a wonderful and unforgettable dining experience.    </p>
</div>
<div className="flex items-center justify-center ">
        <button className=' border mb-20  px-10 py-4 transform transition-all duration-500 font-Garamond border-[#ffbc78] hover:bg-[#ffbc78] text-[#ffbc78] hover:text-white text-lg '>
DISCOVER YOUR MENU
      </button>
        </div>
</div>
    </div>

    <div className="mt-20   z-30 bg-[#1e1e1c] relative">
      <div className="container mx-auto">
      <div className="flex items-center justify-center "> <h1 className='text-4xl p_t my-16 text-[#eb8923] '>Recommended By</h1></div>
<div className="flex flex-wrap md:flex-nowrap justify-between items-center relative mb-20">
  {
    SvgLinks.map((img)=>(
      <div className=' w-40 items-center mx-4' key={img.id}>
        <Link href={'/'} ><img src={img.svg} alt={img.alt} className='object-cover filter_img w-full h-full rounded hover:text-purple-600' /></Link>
        </div>

    ))
  }
</div>
<div className="flex flex-wrap md:flex-nowrap justify-around items-center relative mb-20">
{
imgCard.map((img)=>(
  <div className='w-80 h-52 border-2 border-[#ffb361] items-center mb-20 rounded' key={img.id}>
  <img src={img.svg} alt={img.alt} className='object-cover w-full h-full rounded ' />
  </div>
))
}
 
</div>
      </div>
    </div>
   
    </div>
  )
}

export default Backimg
