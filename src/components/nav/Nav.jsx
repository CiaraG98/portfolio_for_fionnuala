import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import { useState, useEffect } from 'react'

const nav = () => {
  return (
    <div className="nav__container">
        <div className="section__links">
          <a href="#header"><AiFillHome /></a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Get In Touch</a>
        </div>
    </div>
  );
}

export default nav