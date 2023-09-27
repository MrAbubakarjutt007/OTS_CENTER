import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const ErrorData = () => {
   const Wraper = styled.section`
       padding:9rem 0;
       display:flex;
       justify-content:center;
       align-items:center;
       flex-direction:column; 
       .btn{
             margin-top:10px;
             color:white;
       }
   `; 
  return <Wraper className='section'>      
    <img className='' src="/images/errorinfo.svg"  alt="errorinfo" width={700}/>
    <NavLink  to="/">
        <Button className='btn'>GO_BACK</Button>
    </NavLink>
  </Wraper> 
}

export default ErrorData;
