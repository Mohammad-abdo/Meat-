"use client"
import React from 'react'
import '../style.css'
import BasicAccordion from './question'
const question=[

    {
        id:1,
        quest:"Where is Meat Moot Restaurant's headquarters?",
        answer:"Sıtkı Bey Plaza No:82 K:7 34736 Kadikoy – ISTANBUL, TURKEY."
    },
    {
        id:2,
        quest:"Does Meat Moot's restaurant offer franchises or license the concept?",
        answer:"Meat Moot is currently offering franchise opportunities in international markets to qualified franchisees."
    },
    {
        id:3,
        quest:"Are we the right fit for each other?",
        answer:`We are currently looking for community-minded individuals with an entrepreneurial spirit who are enthusiastic about our brand.Experience in a restaurant is preferred. If you want to own and manage your own restaurant under the guidance of our franchised concept, then Meat Moot could be the perfect fit!`
    },
    {
        id:4,
        quest:"Do I need previous restaurant experience to become a franchisee?",
        answer:"No prior experience is required. Our team has created a franchise program that can be profitable for both new and experienced restaurant owners."
    },
    {
        id:5,
        quest:"What Is The Term Of The Agreement?",
        answer:"5 years. This agreement may be renewed upon the parties’ mutual consent."
    },
    {
        id:6,
        quest:"Is the franchisee required to purchase equipment and supplies from the franchisor or other designated suppliers?",
        answer:"Meat Moot’s Engineering and Design Department handles interior design for all of the company’s branches. Meat Moot provides construction documents designed to meet the Meat Moot’s common and sustainable interior design."
    },
    {
        id:7,
        quest:"What territories are available to open my MEAT MOOT restaurant?",
        answer:"We are currently seeking capable franchise partners to bring our superior product to markets where Smoked Meat is in demand. page for available territories or contact us to discuss your interest."
    },
    {
        id:8,
        quest:"Do you choose the Site Selection?",
        answer:"Yes. Site selection is critical to the success of a franchise operation. "
    },
    {
        id:8,
        quest:"What's the recommended location size?",
        answer:"Plan on locating a site that offers minimum 4,400 square feet of space."
    },
    {
        id:10,
        quest:"Whom should I contact regarding investor inquiries?",
        answer:"Complete this brief online application. Or you can reach our investor relations department by sending an e-mail to: "
    },
]
const Accordion = () => {

  return (
    <div className='mt-24'>
          <div className="my-10 container mx-auto ">
            <div className=" md:container lg:mx-auto md:mx-auto">
                <div className="  my-20 flex items-start md:items-center lg:justify-center lg:items-center md:justify-center flex-col  p-5 md:p-0  md:mx-40">
                    <p className=" text-[20px] md:text-4xl text-[#bc955a] p_inv " >
                    If you’re a leader with strong business acumen and have a passion for the world of hospitality, franchising with our restaurant  may be the perfect opportunity for you! 
                    </p>
   
<div className='w-full flex flex-col items-center justify-center mt-10 md:mt-40'>
    <div className="my-8">
        <h1 className=' text-lg md:text-4xl text-[#ec9823]'> Got Questions?</h1>
    </div>
    <div className="my-8 w-full">
        <h1 className=' w-full text-xl md:text-6xl text-[#bc955a]'> Frequently Asked Questions</h1>
    </div>
<div className="my-20 w-full border border-[#ec9823] bg-transparent  ">

{
    question.map((item)=>(
            <BasicAccordion key={item.id} head={item.quest} info={item.answer}/>

    ))
}
</div>
</div>
                    </div>
                </div>
            </div>
        
        </div>
   
  )
}

export default Accordion
