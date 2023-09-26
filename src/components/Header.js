import React from 'react'
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Header = () => {
  const MainHeader =styled.header`
    padding:0 4.8rem;
    height:10rem;
    background-color:${({theme})=> theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;
  `;
  return (
    <MainHeader>
       icon
       <Navbar/>
   </MainHeader>
    
  )
}

export default Header;
