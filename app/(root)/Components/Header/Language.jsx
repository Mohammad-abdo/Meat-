import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [language,setLanguage]=useState("USA")



  const handelLanguage=()=>{
    
  }

  return (
    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
<select id="countries" onChange={()=>handelLanguage()}  className=" bg-[#18181870] rounded-full border-none  text-lg text-white hover:border-none focus:ring-blue-500  dark:placeholder-gray-400 focus:border-none   block w-28 p-2.5 ">
  <option className='mt-10 p-3 m-5' onClick={handelLanguage} value={language} selected>{language} </option>
  <option className='mt-10 p-3 m-5' value="US">USA</option>
  <option className='mt-10 p-3 m-5'  value="CA">CNA</option>
  <option  className='mt-10 p-3 m-5'  value="FR">FR</option>
  <option  className='mt-10 p-3 m-5'  value="AR">AR</option>
</select>
  </div>

  );
};

export default LanguageDropdown;
