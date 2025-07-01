import React from 'react'
import Marquee from './notification/Marquee'
import About from './About'
import CallArea from './notification/CallArea'
import Services from './Services'
import Features from './Features'
import Feedback from './Feedback'
import OurBlogs from './OurBlogs'

const Home = () => {
  return (
    <>
    <Marquee/>
    <About/>
    <CallArea/>
    <Services/>
    <Features/>
    <Feedback/>
    <OurBlogs/>
    </>
  )
}

export default Home