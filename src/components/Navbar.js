import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
    const Nav = styled.nav`
     .Navbar-list{
         display:flex;
         gap:4.8rem;
              li{
                list-style:none;
                 
         .navbar-Link{
            &:link,
            &:visited {
                display:inline-block;
                txet-decoration : none; 
                font-size:1.8rem;
                text-transform:uppercase;
                color:{({theme})=>theme.colors.black};
                transition:color 0.3s linear;
            }
            
            &:hover,
            &:active{
                color:{({theme})=>theme.colors.helper};
            }
          }
         }
     }


    `;


    return (
        
        <Nav>
        <div className='nevIcon'>
            <ul className='Navbar-list'>
                <li>
                    <NavLink  className="navbar-Link" to="/">Home </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-Link" to="/about">about </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-Link" to="/service">services</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-Link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        </Nav>
        
    )
}
export default Navbar;

