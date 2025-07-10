import React from 'react';

const MainContent = ({ activeMenuItem }) => {
  const renderContent = () => {
    switch (activeMenuItem) {
      case 'dashboard':
        return (
          <div>
            <h2
              style={{
                color: '#2c3e50',
                marginBottom: '30px',
                fontSize: '2.2rem'
              }}
            >
              Dashboard Overview
            </h2>
            {/* Keep your dashboard cards here, unchanged except for larger fonts as you wish */}
            {/* E.g. h3 fontSize: '3rem' */}
            <p>Dashboard cards go here (see original code)</p>
          </div>
        );
      case 'users':
        return (
          <div>
            <h2
              style={{
                color: '#2c3e50',
                marginBottom: '30px',
                fontSize: '2rem'
              }}
            >
              Users Management
            </h2>
            <div
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <p>User management content would go here…</p>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h2
              style={{
                color: '#2c3e50',
                marginBottom: '30px',
                fontSize: '2rem'
              }}
            >
              {activeMenuItem}
            </h2>
            <div
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <p>Content for {activeMenuItem} would go here…</p>
            </div>
          </div>
        );
    }
  };

  return <>{renderContent()}</>;
};

export default MainContent;
