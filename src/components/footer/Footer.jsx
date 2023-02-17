import React from 'react'
import './footer.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="footer__container">
        <h1>Fionnuala Meehan</h1>
        <h1>Business Advisor</h1>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/fionnuala-meehan-156231a/" target='__blank'><BsLinkedin /></a>
          <a href="#contact"><MdEmail /></a>
        </div>
        <h3>Copyright &copy; fionnualameehan.com</h3>
      </div>
    </section>
  )
}

export default Footer