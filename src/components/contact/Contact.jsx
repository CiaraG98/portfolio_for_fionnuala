import React from 'react'
import './contact.css'
import { useRef } from 'react'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FcOpenedFolder} from 'react-icons/fc'
import emailjs from 'emailjs-com'
import CV from '../../assets/Fionnuala_Meehan_CV.pdf'

const Contact = () => {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vwgofl', 'template_rfbvata', contactForm.current, 'Rq5lcs_-QiMb6UYDs')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
    
  };

  return (
    <section id='contact'>
      <div className="constainer contact__container">
        <div className='contact__container-title'>
          <h1>Contact Me</h1>
          <MdEmail className='contact__container-icon' />
        </div>
        <div className="contact__content">
          <form ref={contactForm} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Full Name'  />
              <input type="email" name='email' placeholder='Email'  />
              <textarea name="message" rows="7" placeholder='Message' ></textarea>
              <button type='submit' className='btn'>Send Message</button>
          </form>

          <div className="contact__further">
            <div className="contact__linkedin">
              <h3>Find me on</h3>
              <a href="https://www.linkedin.com/in/fionnuala-meehan-156231a/" target='_blank'><BsLinkedin /></a>
            </div>
            <div className="contact__portfolio">
              <h3>View my Portfolio</h3>
              <a href={CV} download><FcOpenedFolder /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact