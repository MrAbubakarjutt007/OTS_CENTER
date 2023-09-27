import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const Footer = () => {
  const Wraper = styled.section`
        .content-short{
          max-width:60vw;
          margin:auto;
          padding:5rem 10rem;
          background-color:${({ theme })=> theme.colors.bg};
          border-radius:1rem;
          box-shadow:${({ theme })=> theme.colors.shadowSupport};

          .grid div:last-child{
            justify-self:end;
            align-selfcenter;
           }
        }
        footer{
          padding:14rem 0 9rem 0;
          background-color:${({ theme })=> theme.colors.footer_bg};

          h3{
            color:${({ theme })=> theme.colors.hr};
            margin-bottom:2.4rem;
          }
          p{
            color:${({ theme })=> theme.colors.white};
          }
        }
  
  `;
  return( <Wraper>
     <section className="content-short">
      <div className='grid grid-two-column'>
            <div>
              <h3>ready to get started</h3>
              <h3>talk to us today</h3>
            </div>
            <div>
              <NavLink to="/"> 
                <Button className='btn'> 
                     GET Started 
                </Button>
              </NavLink>
            </div>
        
        </div> 
     </section>
     <footer>
      <div className='container grid grid-four-column'>
        <div className='footer-about'> 
             <h3>OTS-CENTER</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

      </div>
     </footer>

  </Wraper>
  )
}

export default Footer;
