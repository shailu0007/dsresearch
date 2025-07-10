import React from 'react';

const Sidebar = ({
  sidebarOpen,
  menuItems,
  activeMenuItem,
  handleMenuClick,
  toggleSidebar
}) => {
  const renderSidebarItems = () =>
    menuItems.map((item) => (
      <div
        key={item.id}
        onClick={() => handleMenuClick(item.id)}
        className="sidebar-item"
        style={{
          padding: '15px 25px',
          cursor: 'pointer',
          background:
            activeMenuItem === item.id
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : 'transparent',
          color: activeMenuItem === item.id ? 'white' : '#2c3e50',
          borderLeft:
            activeMenuItem === item.id
              ? '4px solid #667eea'
              : '4px solid transparent',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 15px',
          borderRadius: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              marginRight: '15px',
              fontSize: '1.8rem' // increased size
            }}
          >
            {item.icon}
          </span>
          <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>
            {item.label}
          </span>
        </div>
        {item.badge && (
          <span
            style={{
              background:
                activeMenuItem === item.id
                  ? 'rgba(255, 255, 255, 0.3)'
                  : '#e74c3c',
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
    </>
  );
};

export default Sidebar;
