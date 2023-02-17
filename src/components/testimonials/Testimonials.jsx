import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container testimonials__container">
        <h1>Testimonials</h1>
        <div className="testimonials__content">
          <div className="testimonial__card" id='card1'>
            <h2>Name</h2>
            <h3>Job</h3>

            <p>Fionnuala, always a keen student, took an avid interest in languages and 
              history in secondary school and chose a BA in European Studies in Trinity 
              College Dublin after her leaving certificate, graduating with a first-class 
              degree and a distinction in spoken German.</p>
          </div>
          <div className="testimonial__card">
            <h2>Name</h2>
            <h3>Job</h3>

            <p>Fionnuala, always a keen student, took an avid interest in languages and 
              history in secondary school and chose a BA in European Studies in Trinity 
              College Dublin after her leaving certificate, graduating with a first-class 
              degree and a distinction in spoken German.</p>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Testimonials