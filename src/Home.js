import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { UseGlobalContext } from './Context';

const Home = () => {
  const {dataupdateHome}= UseGlobalContext();
  useEffect(()=>
    dataupdateHome(),[]);
  // const data = {
  //   name:"OTS center",
  //   Image:"./images/homepro.jpg", 
  //   };
    

  return <HeroSection/>;// {...data}
    
  
}

export default Home;
