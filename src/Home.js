import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { UseGlobalContext } from './Context';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  const {dataupdateHome}= UseGlobalContext();
  useEffect(()=>
    dataupdateHome(),[]);
  // const data = {
  //   name:"OTS center",
  //   Image:"./images/homepro.jpg", 
  //   };
    

  return <> 
   <HeroSection/>
   <Services/>
   <Contact/>
  
  
  </>;// {...data}
    
  
}

export default Home;
