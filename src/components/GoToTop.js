import React from 'react'
import styled from 'styled-components';

const GoToTop = () => {
  const GoToBotton =()=>{
 
    window.scrollTo({top:0,left:0, behavior:'smooth'});
  }
  const Wrapper =styled.section`
      
  

  `;

  return (
    <Wrapper>
    <div className='top-botton' onClick={GoToBotton}>
         
    </div>
    </Wrapper>
  )
}

export default GoToTop;
