import React from 'react'
import {styled} from 'styled-components';
const Contact = () => {
  const Wrapper = styled.section`
   padding:3rem 0 3rem 0;

    .heading_change{
        text-align:center;
        font-weigth:200,       
    }
    .bolded{
      font-size:30px;
    }
    .container{
      margin-top:6rem;
      text-align:center;

      .contact_form{
        max-width:50rem;
        margin:auto;
        .contact-input{
          display:flex;
          flex-direction:column;
          gap:3rem;
          width:50rem;
          margin-top:10px;
          padding:5px;
        }
      }
    }
    `;  
  return <Wrapper className="section">
         <h3 className='heading_change'>OUR_CONTACT </h3> 
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54634.92505873216!2d72.6404160933573!3d31.146322303052063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923001515646a23%3A0xfcb2866ffe58b367!2sGojra%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695744950563!5m2!1sen!2s" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         <div className="container">
             <h4 className="bolded">Get In Touch With Me</h4>
              <div className="contact_form">
                 <form action="https://formspree.io/f/xaygprna" method="post" className="contact_form">
                   <input type="text" className="contact-input"  name='username' placeholder='username' autoComplete='off' required/>
                   <input className="contact-input" type="email" name='email' placeholder='EMAIL' autoComplete='off' required/>
                   <textarea name="massage" className="contact-input"  cols="30" rows="6" required></textarea>
                   <input type="submit" className='mt-3 btn-danger' value="SEND_DATA"/>
                 </form>
              </div>
          </div>
  </Wrapper>;
}

export default Contact;
