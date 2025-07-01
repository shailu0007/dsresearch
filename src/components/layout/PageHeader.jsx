import React from 'react'
import Navbar from './Navbar'

const PageHeader = () => {
  return (
    <header className="site-header header-s1 is-sticky">
      <div className="topbar">
        <div className="container containerChange">
          <div className="row">
            <div className="top-aside top-left">
              <ul className="top-nav">
                <li>
                  <a href="https://eminentresearch.co/msg/" target="_blank" rel="noopener noreferrer">CLIENT LOGIN</a>
                </li>
                <li>
                  <a href="offerszone.html">OFFERS ZONE</a>
                </li>
              </ul>
            </div>
            <div className="top-aside top-right clearfix">
              <ul className="top-contact clearfix">
                <li className="t-email t-email1">
                  <em className="fa fa-envelope-o" aria-hidden="true"></em>
                  <span>
                    <a href="https://eminentresearch.co/msg/" target="_blank" rel="noopener noreferrer"> info@eminentresearch.co</a>
                  </span>
                </li>
                <li className="t-phone t-phone1">
                  <em className="fa fa-phone" aria-hidden="true"></em>
                  <span>+91-93405-46337</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .quickpay_header {
            display: inline-block;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            -webkit-animation-name: pulse;
            animation-name: pulse;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            background: #0e7b34;
          }
        `}
      </style>
      <div className="container">
        <div className="treaser">
          <h1>About Us</h1>
        </div>
        <div className="breadcrumb01">
          <h2>
            <a href="http://eminentresearch.co/index.php/Home">Home</a> / About Us
          </h2>
        </div>
      </div>
      <div className="serviceFix">
        <a href="https://wa.me/+919340546337" target="_blank" rel="noopener noreferrer">
          <img src="webassets/image/approval.png" alt="" />
          +91-93405-46337
        </a>
      </div>
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
       <Navbar/>
        </div>
      </div>
    </header>
  )
}

export default PageHeader