import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [VisableData, SetVisableData] = useState(false);
  const GoToBotton =()=>{
 
    window.scrollTo({top:0,left:0, behavior:'smooth'});
  }
  const listenToSaroll =()=>{
 let heightToHidden = 250;
   const winscroll =document.body.scrollTop ||document.documentElement.scrollTop;
       if(winscroll>heightToHidden){
        SetVisableData(true);
       }else{
        SetVisableData(false);
        } 

  };
  useEffect(()=>{
        window.addEventListener("scroll",listenToSaroll);
        return()=>window.removeEventListener("scroll",listenToSaroll);
  },[]);
  const Wrapper =styled.section`
      diplay:flex;
      justify-content:center;
      align-items:center;
      .top-botton{

        font-size:2.4rem;
        width:6rem;
        height:6rem;
        color:#fff;
        background-color:${({theme})=>theme.colors.btn};
        box-shadow:${({theme})=>theme.colors.shadow};
        border-radius:50%;
        position:fixed;
        bottom:5rem;
        right:5rem;
        z-index:999;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        
        &--icon{
          animation:GoToBotton 1.2s linear infinite alternate-reverse;
      }
      @keyframes GoToBotton{
      0%{
        transform:translatey(-0.5rem);
      }
      100%{
        transform:translatey(1rem);
      }

      }

      }
      

  

  `;

  return (
    <Wrapper>
    <div className='top-botton' onClick={GoToBotton}>
         <FaArrowUp className='top-botton--icon'/>                  
    </div>
    </Wrapper>
  )
}

export default GoToTop;
