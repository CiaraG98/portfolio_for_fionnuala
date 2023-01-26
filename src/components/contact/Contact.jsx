import React from 'react'
import './contact.css'
import { useRef } from 'react'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  const contactForm = useRef();

  const sendEmail = (e) => {
    console.log("Send coming");
  }

  return (
    <section id='contact'>
      <div className="constainer contact__container">
        <div className='contact__container-title'>
          <h1>Contact Me</h1>
          <MdEmail className='contact__container-icon' />
        </div>
        <form ref={contactForm} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className=''>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact