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
            <h3>Occupation</h3>

            <p>To be added</p>
          </div>
          <div className="testimonial__card">
            <h2>Name</h2>
            <h3>Job</h3>

            <p>To be added</p>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Testimonials