import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection';
import { UseGlobalContext } from './Context';
// const data = {
// name:"Abubakar_OTS",
// Image:"./images/homepro.jpg", 

// };

const About = () => {
  const {dataupdateAbout}= UseGlobalContext();
  useEffect(()=>dataupdateAbout(),[]);
  return <HeroSection/>//{...data}
}

export default About;
