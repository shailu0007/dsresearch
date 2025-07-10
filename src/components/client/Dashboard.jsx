import React, { useState } from 'react';
import Navbar from '../client/layout/Navbar';
import Sidebar from '../client/layout/Sidebar';
import { useEffect } from 'react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', badge: null },
    { id: 'users', icon: '👥', label: 'Users', badge: '12' },
    { id: 'products', icon: '📦', label: 'Products', badge: '24' },
    { id: 'orders', icon: '🛒', label: 'Orders', badge: '8' },
    { id: 'analytics', icon: '📈', label: 'Analytics', badge: null },
    { id: 'settings', icon: '⚙️', label: 'Settings', badge: null },
    { id: 'messages', icon: '💬', label: 'Messages', badge: '3' }
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenuItem(menuId);
    setSidebarOpen(false);
  };

   useEffect(() => {
    // Dynamically create link tag for Bootstrap CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(cssLink);

    // Dynamically create script tag for Bootstrap JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Optional cleanup on unmount
    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem' }}>
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        menuItems={menuItems}
        activeMenuItem={activeMenuItem}
        handleMenuClick={handleMenuClick}
        toggleSidebar={toggleSidebar}
      />

      <div
        className="main-content"
        style={{
          marginLeft: '280px',
          marginTop: '70px',
          padding: '30px',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          minHeight: 'calc(100vh - 70px)',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <style>{`
          @media (max-width: 991.98px) {
            .main-content {
              margin-left: 0 !important;
            }
          }
        `}</style>
        <div className="container-fluid">
          User
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
