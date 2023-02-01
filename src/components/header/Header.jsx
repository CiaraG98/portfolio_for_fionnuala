import React from 'react'
import './header.css'
import Headshot from '../../assets/fion.jpg'
import Logo from '../../assets/logo.png'
import {FcGoogle} from 'react-icons/fc'

const Header = () => {
  return (
    <div id='header' className="container header__container">
      <div className="header__phrase">
        <h1 className="header__name">Fionnuala Meehan</h1>
        <div className="splash">
          <FcGoogle className='header__icon'/>
          <h1>Former CEO of Google Ireland & VP SMB Sales EMEA</h1>
        </div>

        <h2>Business Advisor</h2>
        <h3 className="phrase">Experience Enables Excellence</h3>
      </div>
      <div className="header__img">
        <img src={Headshot} alt="AboutPhoto" />
      </div>
    </div>
  )
}

export default Header