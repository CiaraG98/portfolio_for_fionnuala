import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import CV from '../../assets/Fionnuala_Meehan_CV.pdf'

const nav = () => {
  return (
    <div className="nav__container">
        <div className="section__links">
          <a href="#header"><AiFillHome /></a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Get In Touch</a>
          <a href={CV} download className='btn nav__download'>Download CV</a>
        </div>
    </div>
  );
}

export default nav