import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  useEffect(() => {
    axios
      .get('/api/index.php?action=getuserdetails', { withCredentials: true })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.error('Error fetching users:', err.response?.data?.error || err.message);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedUserId(prev => (prev === id ? null : id));
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  };

  const cardStyle = (isExpanded) => ({
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: isExpanded ? '#dceeff' : '#f9f9f9',
  });

  const detailsStyle = {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#444',
  };

  return (
    <div style={containerStyle}>
      {users.map((user) => {
        const isExpanded = expandedUserId === user.id;

        return (
          <div
            key={user.id}
            style={cardStyle(isExpanded)}
            onClick={() => toggleExpand(user.id)}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>

            {isExpanded && (
              <div style={detailsStyle}>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Created:</strong> {user.created_at}</p>
                <p><strong>Updated:</strong> {user.updated_at}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserCards;
