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
            <h2>Non-Executive Director</h2>
            <p className="service__description">
              Active and curious independent non-executive director bringing deep expertise around 
              digital, online and technical topics, as well as a breadth of experience across areas 
              like risk management, people strategy/DEI , internal & external communications and public 
              policy. All drawing from my experience as executive director across Google's Irish entities, 
              and my time as CEO of Google Ireland. 
            </p>
          </div>
        </div>
        <div className="services__card">
          <img src={Service2} alt="Service_2" />
          <div className="services__card-text">
            <h2>CEO Mentoring</h2>
            <p className="service__description">
              Confidential sounding board for CEOs offering impartial advice  & mentoring based on 
              my 25 years experience of scaling complex operations, designing results driven organisations 
              and nurturing leadership talent with the goal of building diverse and highly functioning  
              leadership teams. 
            </p>
          </div>
        </div>
        <div className="services__card">
          <img src={Service3} alt="Service_3" />
          <div className="services__card-text">
            <h2>Startup Advising</h2>
            <p className="service__description">
              Business advisor for startups at all stages of the lifecycle bringing to bear my experience 
              of hyper growth tech environments, offering practical hands on  guidance on a number of topics 
              including sales pipeline, operations, organisational design, culture and DEI. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services