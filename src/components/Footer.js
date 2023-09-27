import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaGithubAlt,FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
  const Wraper = styled.section`
        .content-short{
          max-width:60vw;
          margin:auto;
          padding:5rem 10rem;
          background-color:${({ theme })=> theme.colors.bg};
          border-radius:1rem;
          box-shadow:${({ theme })=> theme.colors.shadowSupport};
            transform:translatey(50%);
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
        .paddata{
          padding:15px;
          border-radius:15px;
          width:250px;
          font-size:20px;  

        }
        .sendinfo{
          border:none;
          border-radius:6px;
          margin-top:10px;
          background-color:rgb(98 84 243);
          color:white;
          padding:10px; 
        }
        .icons-data{
          display:flex;
           .dataicon{
             border-radius:50%;
             border:1px solid white;
             padding:5px;
             .iconinfo{
              color:white;
              font-size:40px;
              margin:2px;
          }
           } 
        }
        .footer-botoum{
          padding-top:9rem;
          hr{
            margin-bottom:2rem;
            color:white;
            height:0.1px;
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
        <div className='footer-emaildata'> 
        <h3>GET IMPORTANT UPDATA FROM OTS-CENTER</h3>
             <form action='#' method='post'>
                <input type="email" className='paddata' name='email' placeholder='email' required autoComplete='off'/><br />
                <input type="submit" className='sendinfo' value=" SEND_EMAIL"/>  
             </form>
        </div>

         
        <div className='footer-about'> 
             <h3>Follows Us</h3>
             <div className='icons-data'>
                <div className='dataicon'>
                  <a href="#">
                  <FaGithubAlt className='iconinfo'/>
                  </a>
                </div>
                <div className='dataicon'>
                  <a href="#">
                  <FaLinkedin className='iconinfo'/>
                  </a>
                </div>
                <div className='dataicon'>
                  <a href="#">
                  <FaInstagram className='iconinfo'/>
                  </a>
                </div>
              </div>  
        </div>
        <div className='footer-about'>

             <h3>CALL ME</h3>
             <p>+92 3495858489</p>
             
        </div>
      </div>
      <div className='footer-botoum'>
        <hr />
        <div className="grid grid-two-column">
          <p>
            @{new Date().getFullYear()} OTS_CENTER
          </p>
          <div>
            <p>privacy policy</p>
            <p>term & condition</p>
          </div>
        </div>
      </div>
     </footer>

  </Wraper>
  )
}

export default Footer;
