import React from 'react'
import './about.css'
import {FcGoogle} from 'react-icons/fc'
import {SiAol} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__experience">
            <h1>About</h1>
            <div className="experience__content">
            <article className='experience__card'>
              <div className="card__title">
                <h2>2005 - 2020  Google Ireland Ltd</h2>
                <FcGoogle className='experience__icons'/>
              </div>
              <p>
              2017 - 2020: CEO of Google Ireland Ltd <br /> Leading the Ireland subsidiary for Google Inc. <br /> <br />
              2016 - 2020: VP SMB Sales EMEA <br /> Head of a 1000 person organisation, and a multibillion dollar business, responsible for half of Google’s advertising revenue in EMEA. <br /> <br />
              2005-2016: Content moderation policy, project management, online help, advertiser operations & sales. <br />
              </p>
            </article>
            <article className="experience__card">
              <div className="card__title">
                <h2>2000 - 2005  AOL Dublin, Ireland</h2>
                <SiAol className='experience__icons'/>
              </div>
              <p>
              Director of customer retention Europe <br /> Director business solutions AOL UK
              </p>
            </article>
            <article className='experience__card'>
              <div className="card__title">
                <h2>Best Western International Limited</h2>
              </div>
              <p>
              B
              </p>
            </article>
            </div>
          </div>

          <div className="about__linkedin">
            <h1>Expertise</h1>
            <div className="expertise__grid">
            Executive Mentoring/Coaching
            b2b sales

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About