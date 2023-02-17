import React from 'react'
import './services.css'
import Service1 from '../../assets/stock1.jpg'
import Service2 from '../../assets/stock2.jpg'
import Service3 from '../../assets/stock3.jpg'

const Services = () => {  
  // startup advisor
  // ceo mentor
  // non-exec director board member
  return (
    <section id='services'>
      <div className="container services__container">
        <h1>Services</h1>
      </div>

      <div className="services__cards">
        <div className="services__card">
          <img src={Service1} alt="Service_1" />
          <div className="services__card-text">
            <h2>Non-Executive Director Board Member</h2>
            <p className="service__description">
              Blurb
            </p>
          </div>
        </div>
        <div className="services__card">
          <img src={Service2} alt="Service_2" />
          <div className="services__card-text">
            <h2>CEO Mentoring</h2>
            <p className="service__description">
              Blurb
            </p>
          </div>
        </div>
        <div className="services__card">
          <img src={Service3} alt="Service_3" />
          <div className="services__card-text">
            <h2>Startup Advising</h2>
            <p className="service__description">
              Blurb
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services