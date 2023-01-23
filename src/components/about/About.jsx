import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <h1>About Me</h1>
        <div className="about__content">
          <div className="about__experience">
            <h3>Experience</h3>
            <ul className="experience__list">
              <li>Placeholder #1</li>
              <li>Placeholder #1</li>
              <li>Placeholder #1</li>
              <li>Placeholder #1</li>
              <li>Placeholder #1</li>
            </ul>
          </div>

          <div className="about__linkedin">
            <h3>Expertise</h3>
            <div className="expertise__grid">
              <div className="expertise_element">
                Placeholder #2
              </div>
              <div className="expertise_element">
                Placeholder #2
              </div>
              <div className="expertise_element">
                Placeholder #2
              </div>
              <div className="expertise_element">
                Placeholder #2
              </div>
              <div className="expertise_element">
                Placeholder #2
              </div>
              <div className="expertise_element">
                Placeholder #2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About