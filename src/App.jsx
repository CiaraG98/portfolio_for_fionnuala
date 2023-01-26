import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    </>
  )
}

export default App