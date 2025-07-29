import React from 'react'
import About from './Sections/About'
import Header from './components/Header'
import Gallery from './Sections/Gallery'
import Products from './Sections/Products'
import Contact from './Sections/Contact'
import Banner from './Sections/Banner'
import Footer from './components/Footer'

const Hero = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Gallery />
      <Products />
      <Contact />
      <Footer/>
    </>
  )
}

export default Hero
