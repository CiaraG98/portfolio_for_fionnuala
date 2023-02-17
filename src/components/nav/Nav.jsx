import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <div className="nav__container">
        <div className="section__links">
          <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active': ''}><AiFillHome /></a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>About</a>
          <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}>Services</a>
          <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active': ''}>Testimonials</a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}>Get In Touch</a>
        </div>
    </div>
  );
}

export default Nav