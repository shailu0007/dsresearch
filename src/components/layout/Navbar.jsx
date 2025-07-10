import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile dropdown

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Services",
      path: "/services",
      subMenu: [
        { label: "Consulting", path: "/services/consulting" },
        { label: "Development", path: "/services/development" },
        { label: "Support", path: "/services/support" },
      ],
    },
    { label: "Our Blogs", path: "/ourblogs" },
    { label: "Pricing", path: "/pricing" },
    { label: "Payment", path: "/payment" },
    { label: "Past Performance", path: "/pastperformance" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
    {
      label: "More",
      path: "#",
      subMenu: [
        { label: "FAQ", path: "/faq" },
        { label: "Terms & Conditions", path: "/terms" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Testimonials", path: "/testimonials" },
      ],
    },
  ];

  const toggleSubMenu = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="main-navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img
            src="../../../webassets/images/resource/blue.png"
            alt="Enment Logo"
            className="site-logo"
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="menu-toggle-btn"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenDropdown(null);
          }}
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        {/* Desktop Navigation */}
        <div className="desktop-links">
          <ul className="link-list">
            {links.map((link, idx) => (
              <li key={idx} className="nav-item">
                {link.subMenu ? (
                  <div className="dropdown">
                    <span className="nav-link">{link.label}</span>
                    <ul className="dropdown-menu">
                      {link.subMenu.map((sublink, subIdx) => (
                        <li key={subIdx}>
                          <NavLink to={sublink.path} className="nav-link">
                            {sublink.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Link to="/expertAdvice" className="cta-button">
            Get Expert Advice
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-panel ${menuOpen ? "show-panel" : "hide-panel"}`}>
        <ul className="mobile-list">
          {links.map((link, idx) => (
            <li key={idx}>
              {link.subMenu ? (
                <>
                  <div
                    className="mobile-link dropdown-toggle"
                    onClick={() => toggleSubMenu(link.label)}
                  >
                    {link.label}
                    <span style={{ float: "right" }}>
                      {openDropdown === link.label ? "▲" : "▼"}
                    </span>
                  </div>
                  <ul
                    className="mobile-submenu"
                    style={{ display: openDropdown === link.label ? "block" : "none" }}
                  >
                    {link.subMenu.map((sublink, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={sublink.path}
                          className="mobile-link"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sublink.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <Link
          to="/expertAdvice"
          className="mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get Expert Advice
        </Link>
      </div>

      {/* Styles */}
      <style>{`
        .main-navbar {
          background: #fefefe;
          border-bottom: 1px solid #eaeaea;
          font-family: 'Inter', sans-serif;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container .site-logo {
          height: 90px;
          width: 140px;
        }
        .menu-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-direction: column;
        }
        .menu-bar {
          width: 28px;
          height: 3px;
          background: #333;
          margin: 4px 0;
        }
        .link-list {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .nav-link,
        .mobile-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
          cursor: pointer;
          font-size:16px;
        }
        .nav-link:hover,
        .mobile-link:hover {
          color: #007bff;
        }
        .nav-active {
          color: #007bff;
          font-weight: bold;
        }
        .nav-item {
          position: relative;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          padding: 10px 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          z-index: 99;
          min-width: 180px;
        }
        .dropdown:hover .dropdown-menu {
          display: block;
        }
        .dropdown-menu li {
          padding: 8px 20px;
        }
        .dropdown-menu li a {
          color: #333;
        }
        .cta-button {
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.3s;
        }
        .cta-button:hover {
          background: #0056b3;
        }
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .mobile-panel {
          display: none;
          flex-direction: column;
          background: white;
          padding: 20px;
        }
        .mobile-list {
          list-style: none;
          padding: 0;
        }
        .mobile-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .mobile-cta {
          background: #007bff;
          color: white;
          padding: 10px;
          border-radius: 4px;
          text-align: center;
          text-decoration: none;
          margin-top: 15px;
        }
        .show-panel {
          display: flex;
        }
        .mobile-submenu {
          padding-left: 15px;
        }
        .dropdown-toggle {
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .menu-toggle-btn {
            display: flex;
          }
          .desktop-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
