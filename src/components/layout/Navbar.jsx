import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .navbar {
          background-color: #ffffff;
          border-bottom: 1px solid #eaeaea;
          padding: 10px 0;
          z-index: 999;
        }

        .navbar .navbar-brand img {
          height: 40px;
        }

        .navbar .nav > li > a {
          padding: 10px 15px;
          display: block;
          color: #333;
          text-decoration: none;
        }

        .navbar .nav > li > a:hover,
        .navbar .nav > li > a:focus,
        .navbar .nav > .active > a {
          color: #007bff;
          background-color: transparent;
        }

        .navbar-toggle {
          display: none;
          border: none;
          background: none;
          cursor: pointer;
          padding: 10px;
        }

        .navbar-toggle .icon-bar {
          display: block;
          width: 22px;
          height: 2px;
          margin: 4px 0;
          background-color: #333;
        }

        @media (max-width: 991px) {
          .navbar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          .navbar-toggle {
            display: block;
          }

          .navbar-collapse.collapse {
            display: none !important;
            width: 100%;
            flex-direction: column;
            padding-top: 10px;
          }

          .navbar-collapse.collapse.show {
            display: flex !important;
            background-color: #fff;
          }

          .nav.navbar-nav {
            flex-direction: column;
            width: 100%;
            padding-left: 0;
          }

          .nav.navbar-nav li {
            width: 100%;
          }

          .nav.navbar-nav li a {
            padding: 10px 15px;
            display: block;
            width: 100%;
          }

          .dropdown-menu {
            position: static;
            float: none;
            width: 100%;
            padding-left: 15px;
            background-color: transparent;
            border: none;
            box-shadow: none;
          }

          .dropdown-menu li {
            padding: 5px 0;
          }

          .quote-btn {
            margin-top: 15px;
            width: 100%;
            justify-content: center;
            display: flex;
          }

          .quote-btn .btn {
            width: 100%;
            text-align: center;
          }
        }

        @media (min-width: 992px) {
          .dropdown:hover > .dropdown-menu {
            display: block;
          }

          .dropdown-menu {
            display: none;
            position: absolute;
            background-color: #fff;
            min-width: 200px;
            padding: 10px 0;
            z-index: 1000;
            border: 1px solid #ddd;
          }

          .dropdown-menu li a {
            padding: 8px 20px;
            color: #333;
          }

          .dropdown-menu li a:hover {
            background-color: #f8f9fa;
          }

          .hoverShow {
            display: none;
          }

          .hover01:hover .hoverShow {
            display: block;
            position: static;
            margin-left: 15px;
          }
        }
      `}</style>

      {/* Navbar HTML */}
      <div className="navbar navbar-primary">
        <div className="container containerChange01">
          <Link className="navbar-brand" to="/">
            <img
              className="logo logo-dark"
              alt="Enment Logo"
              src="assets/img/enment_logo.png"
            />
            <img
              className="logo logo-light"
              alt="Enment Logo"
              src="assets/img/enment_logo.png"
            />
          </Link>

          <div className="navbar-brand">
            <button
              type="button"
              className="navbar-toggle"
              onClick={handleNavCollapse}
              aria-expanded={!isNavCollapsed}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <nav
            className={`navbar-collapse collapse ${
              !isNavCollapsed ? "show" : ""
            }`}
            id="mainnav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ul className="nav navbar-nav">
              <li className="dropdown active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li className="dropdown">
                <NavLink to="/services" className="dropdown-toggle">
                  Services <b className="caret"></b>
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="hover01">
                    <NavLink to="#" className="catnav" id="catnav4">
                      Stock Cash Services
                    </NavLink>
                    <ul className="hoverShow hoverShow01">
                      <li>
                        <NavLink to="/services/stock-cash-regular">
                          Stock Cash Regular
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/services/stock-cash-signature">
                          Stock Cash Signature
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* ... other service sections as in your code */}
                </ul>
              </li>

              <li><NavLink to="/features">Features</NavLink></li>
              <li><NavLink to="/feedback">Feedback</NavLink></li>
              <li><NavLink to="/ourblogs">Our Blogs</NavLink></li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/payment">Payment</NavLink></li>
              <li><NavLink to="/pastperformance">Past Performance</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>

              <li className="dropdown">
                <NavLink to="#" className="dropdown-toggle">
                  More <b className="caret"></b>
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/terms-and-condition">Terms & Condition</NavLink></li>
                  <li><NavLink to="/privacy-and-policy">Privacy Policy</NavLink></li>
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

            <div className="quote-btn" style={{ display: "flex", gap: "10px" }}>
              <Link className="btn btn-primary" to="/expertAdvice">
                Get Expert Advice
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
