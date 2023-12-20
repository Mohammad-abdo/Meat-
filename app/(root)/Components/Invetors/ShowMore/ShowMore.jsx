import React from 'react'
import '../style.css'
const ShowMore = () => {
  return (
    <div className='bg_show '>
      <div className="w-full h-full flex-wrap md:flex-nowrap relative  flex container mx-auto items-center justify-center md:justify-between">
<div></div>
<div></div>
<div className='bg-[#171718] flex flex-col items-start px-8 rounded h-1/2 transform md:translate-y-40 translate-y-72 md:w-[40%] md:h[70vh]'>
    <h4 className='my-8 text-2xl text-[#ec8923]'>WITH OVER 29 STORES</h4>
    <p className="text-4xl  text-[#bc955a]" style={{   lineHeight: "1.6",textAlign: "justify" }}>WE’RE ON THE MOVE </p>
    <p className="text-4xl   text-[#bc955a]" style={{   lineHeight: "1.6",textAlign: "justify" }}>AND GETTING IT RIGHT! </p>
    <div className="my-3">
    <p className='text-white text-lg'><span id="i" className="">We want to talk to you if you’re a growth-minded entrepreneur!</span><span className="MuiTypography-root MuiTypography-inherit css-1uk1gs8"> </span>
    </p>
    <p className='text-white text-lg'><span  className="">While it is not required, it is always a plus if you have prior franchising experience </span></p>
    </div>
    <div className="my-3">
    <ul className="">
							<li className="">
											<span className="text-white">
							<svg aria-hidden="true" width={10} height={10} className="text-white e-font-icon-svg e-fas-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>						</span>
										<span  className=" text-white text-lg font-semibold">Multi-unit franchising</span>
									</li>
								<li className=" flex items-start">
											<span className="text-white">
							<svg aria-hidden="true" width={10} height={10} className="e-font-icon-svg e-fas-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>					
              
              	</span>
										<span className=" text-white text-lg font-semibold">5-10 years of multi-unit management experience, in hospitality and/or food retail services.</span>
									</li>
						</ul>
    </div>
</div>
      </div>
    </div>
  )
}

export default ShowMore
