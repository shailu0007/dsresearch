import React from 'react';

const Navbar = ({ toggleSidebar }) => (
  <nav
    className="navbar navbar-expand-lg fixed-top"
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '12px 0',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1030,
      height: '70px'
    }}
  >
    <div className="container-fluid h-100">
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="d-flex align-items-center">
          <button
            className="btn d-lg-none me-3"
            onClick={toggleSidebar}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '1.8rem' // increased size
            }}
          >
            ☰
          </button>
          <h4
            className="navbar-brand mb-0"
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '2rem' // increased size
            }}
          >
            Admin Dashboard
          </h4>
        </div>
        <div className="d-flex align-items-center">
          <div
            className="d-none d-md-block"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '8px 15px',
              marginRight: '15px',
              color: 'white',
              fontSize: '1.1rem'
            }}
          >
            <small>Welcome, Admin</small>
          </div>
          <button
            className="btn p-0"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '1.8rem' // increased size
            }}
          >
            👤
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;