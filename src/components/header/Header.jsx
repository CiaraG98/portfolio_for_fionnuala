import React from 'react'
import {MdConstruction} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h3>fionnualameehan.com</h3>
            <h1>Under Construction <MdConstruction/></h1>
            <a className='header__socials' href="https://www.linkedin.com/in/fionnuala-meehan-156231a/" target='_blank'><FaLinkedin/></a>
        </div>
    </header>
  )
}

export default Header