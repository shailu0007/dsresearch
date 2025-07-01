import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar navbar-primary">
      <div className="container containerChange01">
        <a className="navbar-brand" href="index.html">
          <img className="logo logo-dark" alt="" src="assets/img/enment_logo.png" />
          <img className="logo logo-light" alt="" src="assets/img/enment_logo.png" />
        </a>
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
            <a className="btn" href="#">Get Expert Advice</a>
          </div>
        </div>
        <nav className="navbar-collapse collapse" id="mainnav">
          <ul className="nav navbar-nav">
            <li className="dropdown active"><a href="Home.html">Home</a></li>
            <li className=""><a href="aboutus.html">About</a></li>
            <li className="dropdown">
              <a href="service.html" className="dropdown-toggle">Services <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li className="hover01">
                  <a href="#" className="catnav" id="catnav4">Stock Cash Services</a>
                  <ul className="hoverShow hoverShow01">
                    <li><a href="services/stock-cash-regular.html">Stock Cash Regular</a></li>
                    <li><a href="services/stock-cash-signature.html">Stock Cash Signature</a></li>
                  </ul>
                </li>
                <li className="hover01">
                  <a href="#" className="catnav" id="catnav5">Stock Future Services</a>
                  <ul className="hoverShow hoverShow01">
                    <li><a href="services/stock-future-signature.html">Stock Future Signature</a></li>
                    <li><a href="services/stock-future-positional.html">Stock Future Positional</a></li>
                    <li><a href="services/stock-future-regular.html">Stock Future Regular</a></li>
                  </ul>
                </li>
                <li className="hover01">
                  <a href="#" className="catnav" id="catnav6">Nifty Services</a>
                  <ul className="hoverShow hoverShow01">
                    <li><a href="services/nifty-support.html">Nifty Support</a></li>
                    <li><a href="services/index-platinum.html">Index Platinum</a></li>
                    <li><a href="services/index-expiry-special.html">Index Expiry Special</a></li>
                  </ul>
                </li>
                <li className="hover01">
                  <a href="#" className="catnav" id="catnav8">Stock Option Services</a>
                  <ul className="hoverShow hoverShow01">
                    <li><a href="services/stock-option-regular.html">Stock Option Regular</a></li>
                    <li><a href="services/stock-option-signature.html">Stock Option Signature</a></li>
                  </ul>
                </li>
                <li className="hover01">
                  <a href="#" className="catnav" id="catnav9">Commodity Services</a>
                  <ul className="hoverShow hoverShow01">
                    <li><a href="services/all-mcx.html">ALL MCX</a></li>
                    <li><a href="services/all-agri-product.html">All Agri Product</a></li>
                  </ul>
                </li>
                <li className="hover01">
                  <a href="#" className="catnav" id="catnav11">Journal Services</a>
                  <ul className="hoverShow hoverShow01">
                    <li><a href="services/journal-services.html">Journal Services</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className=""><a href="pricing.html">Pricing</a></li>
            <li className=""><a href="payment.html">Payment</a></li>
            <li className=""><a href="pastperformance.html">Past Performance</a></li>
            <li className=""><a href="career.html">Career</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">More <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="TermConditions.html">Terms &amp; Condition</a></li>
                <li><a href="privacypolicy.html">Privacy Policy</a></li>
                <li><a href="service-agreement.html">Service Agreement</a></li>
                <li><a href="kyc.html">Kyc Form</a></li>
                <li><a href="riskprofile.html">Risk profile</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="Compliance.html">Compliance</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="disclosure.html">Disclosure</a></li>
                <li><a href="investor.html">Investor Charter</a></li>
              </ul>
            </li>
            <li className="quote-btn"><a className="btn" href="expertAdv.html"> Expert Advice </a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar