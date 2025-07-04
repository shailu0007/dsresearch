import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar navbar-primary">
      <div className="container containerChange01">
        <Link className="navbar-brand" to="/">
          <img className="logo logo-dark" alt="" src="assets/img/enment_logo.png" />
          <img className="logo logo-light" alt="" src="assets/img/enment_logo.png" />
        </Link>

        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#mainnav"
            aria-expanded="false"
          >
            <span className="sr-only">Menu</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="quote-btn">
            <Link className="btn" to="#">Get Expert Advice</Link>
          </div>
        </div>

        <nav className="navbar-collapse collapse" id="mainnav">
          <ul className="nav navbar-nav">
            <li className="dropdown active"><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>

            {/* ✅ Full Services Dropdown */}
            <li className="dropdown">
              <NavLink to="/services" className="dropdown-toggle">Services <b className="caret"></b></NavLink>
              <ul className="dropdown-menu">
                <li className="hover01">
                  <NavLink to="#" className="catnav" id="catnav4">Stock Cash Services</NavLink>
                  <ul className="hoverShow hoverShow01">
                    <li><NavLink to="/services/stock-cash-regular">Stock Cash Regular</NavLink></li>
                    <li><NavLink to="/services/stock-cash-signature">Stock Cash Signature</NavLink></li>
                  </ul>
                </li>
                <li className="hover01">
                  <NavLink to="#" className="catnav" id="catnav5">Stock Future Services</NavLink>
                  <ul className="hoverShow hoverShow01">
                    <li><NavLink to="/services/stock-future-signature">Stock Future Signature</NavLink></li>
                    <li><NavLink to="/services/stock-future-positional">Stock Future Positional</NavLink></li>
                    <li><NavLink to="/services/stock-future-regular">Stock Future Regular</NavLink></li>
                  </ul>
                </li>
                <li className="hover01">
                  <NavLink to="#" className="catnav" id="catnav6">Nifty Services</NavLink>
                  <ul className="hoverShow hoverShow01">
                    <li><NavLink to="/services/nifty-support">Nifty Support</NavLink></li>
                    <li><NavLink to="/services/index-platinum">Index Platinum</NavLink></li>
                    <li><NavLink to="/services/index-expiry-special">Index Expiry Special</NavLink></li>
                  </ul>
                </li>
                <li className="hover01">
                  <NavLink to="#" className="catnav" id="catnav8">Stock Option Services</NavLink>
                  <ul className="hoverShow hoverShow01">
                    <li><NavLink to="/services/stock-option-regular">Stock Option Regular</NavLink></li>
                    <li><NavLink to="/services/stock-option-signature">Stock Option Signature</NavLink></li>
                  </ul>
                </li>
                <li className="hover01">
                  <NavLink to="#" className="catnav" id="catnav9">Commodity Services</NavLink>
                  <ul className="hoverShow hoverShow01">
                    <li><NavLink to="/services/all-mcx">ALL MCX</NavLink></li>
                    <li><NavLink to="/services/all-agri-product">All Agri Product</NavLink></li>
                  </ul>
                </li>
                <li className="hover01">
                  <NavLink to="#" className="catnav" id="catnav11">Journal Services</NavLink>
                  <ul className="hoverShow hoverShow01">
                    <li><NavLink to="/services/journal-services">Journal Services</NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* ✅ Static top-level navs */}
            <li><NavLink to="/features">Features</NavLink></li>
            <li><NavLink to="/feedback">Feedback</NavLink></li>
            <li><NavLink to="/ourblogs">Our Blogs</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/payment">Payment</NavLink></li>
            <li><NavLink to="/pastperformance">Past Performance</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>

            {/* ✅ More Dropdown */}
            <li className="dropdown">
              <NavLink to="#" className="dropdown-toggle">More <b className="caret"></b></NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/terms-and-condition">Terms &amp; Condition</NavLink></li>
                <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                <li><NavLink to="/service-agreement">Service Agreement</NavLink></li>
                <li><NavLink to="/kyc">KYC Form</NavLink></li>
                <li><NavLink to="/risk-profile">Risk Profile</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/compliance">Compliance</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/disclosure">Disclosure</NavLink></li>
                <li><NavLink to="/investor-charter">Investor Charter</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
