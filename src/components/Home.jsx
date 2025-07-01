import React from 'react'
import Header from './layout/Header'
import Marquee from './notification/Marquee'
import About from './About'
import CallArea from './notification/CallArea'
import Services from './Services'
import Features from './Features'

const Home = () => {
  return (
    <>
    <Header/>
    <Marquee/>
    <About/>
    <CallArea/>
    <Services/>
    <Features/>
    </>
  )
}

export default Home