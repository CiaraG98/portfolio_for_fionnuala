import React from 'react'
import './header.css'
import Headshot from '../../assets/fion.jpg'

const Header = () => {
  return (
    <div id='header' className="container header__container">
      <div className="header__phrase">
        <h1 className="header__name">Fionnuala Meehan</h1>
        <h2>Business Advisor</h2><br></br>
        <h3 className="phrase">Experience Enables Excellence</h3>
      </div>

      <div className="header__img">
        <img src={Headshot} alt="AboutPhoto" />
      </div>
    </div>
  )
}

export default Header