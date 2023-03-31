import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { IoMdContact } from 'react-icons/io'
import { useState } from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <div className="nav__container">
        <div className="section__links">
          <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active': ''}><AiFillHome /></a>

          <a id='pc_a' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>About</a>
          <a id='mobile_a' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><HiInformationCircle /></a>

          <a id='pc_s' href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}>Services</a>
          <a id='mobile_s' href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><FaHandsHelping /></a>

          <a id='pc_t' href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active': ''}>Testimonials</a>
          <a id='mobile_t' href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active': ''}><BsFillChatDotsFill /></a>

          <a id='pc_c' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}>Get In Touch</a>
          <a id='mobile_c' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><IoMdContact /></a>
        </div>
    </div>
  );
}

export default Nav