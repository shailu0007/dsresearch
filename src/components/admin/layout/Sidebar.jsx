import React, { useState } from 'react';
import axios from 'axios';

const Sidebar = ({
  sidebarOpen,
  menuItems,
  toggleSidebar
}) => {
  const [message, setMessage] = useState("");

  // Add a logout handler
  const handleLogout = () => {
    axios
      .post("/api/index.php?action=logout")
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("adminId");
        localStorage.removeItem("adminRole");
        setMessage("Logout successful!");
        window.location.href = "/admin/login";
        
      })
      .catch((err) => {
        console.error(err);
        setMessage("Logout failed!");
      });
  };

  // ** include logout as a final item **
  const allItems = [
    ...menuItems,
    {
      id: 'logout',
      icon: '🚪',
      label: 'Logout',
      onClick: handleLogout,
      color: 'linear-gradient(135deg, #dc3545 0%, #a71d2a 100%)',
    }
  ];

  const renderSidebarItems = () =>
    allItems.map((item) => (
      <div
        key={item.id}
        className="sidebar-item"
        onClick={() => {
          toggleSidebar();
          if (item.onClick) {
            item.onClick();
          }
        }}
        style={{
          padding: '15px 25px',
          cursor: 'pointer',
          background: item.color || 'transparent',
          color: item.color ? 'white' : '#2c3e50',
          borderLeft: item.color
            ? '4px solid #dc3545'
            : '4px solid transparent',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 15px',
          borderRadius: '8px',
          textDecoration: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '15px', fontSize: '1.8rem' }}>
            {item.icon}
          </span>
          <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>
            {item.label}
          </span>
        </div>
        {item.badge && (
          <span
            style={{
              background: '#e74c3c',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}
          >
            {item.badge}
          </span>
        )}
      </div>
    ));

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="d-none d-lg-block"
        style={{
          position: 'fixed',
          top: '70px',
          left: '0',
          width: '280px',
          height: 'calc(100vh - 70px)',
          background: 'white',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1020,
          overflowY: 'auto',
          borderRight: '1px solid #e9ecef'
        }}
      >
        <div style={{ padding: '20px 0' }}>{renderSidebarItems()}</div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="d-lg-none"
        style={{
          position: 'fixed',
          top: '70px',
          left: sidebarOpen ? '0' : '-100%',
          width: '280px',
          height: 'calc(100vh - 70px)',
          background: 'white',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          transition: 'left 0.3s ease',
          zIndex: 1025,
          overflowY: 'auto',
          borderRight: '1px solid #e9ecef'
        }}
      >
        <div style={{ padding: '20px 0' }}>{renderSidebarItems()}</div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="d-lg-none"
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1024
          }}
        ></div>
      )}

      {/* Toast Message */}
      {message && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#333',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            zIndex: 9999
          }}
        >
          {message}
          <button
            style={{
              marginLeft: '10px',
              background: 'transparent',
              color: '#fff',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}
            onClick={() => setMessage("")}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
