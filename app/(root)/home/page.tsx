import React from 'react'
import Carosul from '../Components/Home/Carousel/Carosul'
import ConseptSection from '../Components/Home/MenuConcept/ConseptSection'
import MeatCards from '../Components/Home/Meat_imag/MeatCards'
import Lets from '../Components/Home/lets_Contact/Lets'
import MapSection from '../Components/Home/MapSection/MapSection'
import RateSection from '../Components/Home/RaterSection/RateSection'
import Sermony from '../Components/Home/Sermony/Sermony'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'


const HomePage = () => {
  return (

        <main className="">
        <Header/>
       
        <div className=' relative  '>
      <Carosul/>
      <ConseptSection/>
      <MeatCards/>
    <Lets/>
    <MapSection/>
 <Sermony/>
    
      </div>
    <Footer/>
      </main>
  )
}

export default HomePage
