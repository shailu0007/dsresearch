import React from 'react'
import './App.css'
import Model from './components/Model'
import Footer from './components/layout/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Header from './components/layout/HomeHeader'
import PageHeader from './components/layout/PageHeader'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname.startsWith('/home');

  return (
    <div className="site-body style-v1" style={{background:'#eeeeee'}}>
      {isHome ? <Header /> : <PageHeader />}
      <div  style={{ marginTop: "2em", marginBottom: "10em" }}>
      <Outlet />
      </div>
      <Footer />
      <Model />
    </div>
  )
}

export default App
