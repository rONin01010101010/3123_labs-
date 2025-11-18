import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Random User API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        const userData = response.data.results.map(user => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          username: user.login.username,
          gender: user.gender,
          timezone: `${user.location.timezone.description} (${user.location.timezone.offset})`,
          address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}`,
          email: user.email,
          birthDate: new Date(user.dob.date).toLocaleDateString(),
          age: user.dob.age,
          registerDate: new Date(user.registered.date).toLocaleDateString(),
          phone: user.phone,
          cell: user.cell,
          avatar: user.picture.large
        }));
        setUsers(userData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
          color: #1a1a1a;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }

        .user-card {
          background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
          margin: 20px;
          padding: 30px;
          border-radius: 8px;
          display: flex;
          align-items: flex-start;
          gap: 30px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .user-header {
          color: #1a1a1a;
          font-size: 14px;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .left-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255,255,255,0.3);
        }

        .details-btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 8px 24px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.3s;
        }

        .details-btn:hover {
          background-color: #0056b3;
        }

        .user-info {
          flex: 1;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 12px 20px;
          align-items: center;
        }

        .label {
          color: #1a1a1a;
          font-size: 14px;
          text-align: right;
          font-weight: 500;
        }

        .value {
          color: #1a1a1a;
          font-size: 14px;
        }

        .loading, .error {
          text-align: center;
          padding: 40px;
          font-size: 18px;
        }

        .error {
          color: #dc3545;
        }
      `}</style>

      <div className="header">User List</div>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-header">{user.name} • {user.id}</div>
          
          <div className="left-section">
            <img 
              src={user.avatar || 'https://via.placeholder.com/120'} 
              alt={user.name}
              className="avatar"
            />
            <button className="details-btn">Details</button>
          </div>

          <div className="user-info">
            <div className="label">User Name:</div>
            <div className="value">{user.username}</div>

            <div className="label">Gender:</div>
            <div className="value">{user.gender}</div>

            <div className="label">Time Zone Description:</div>
            <div className="value">{user.timezone}</div>

            <div className="label">Address:</div>
            <div className="value">{user.address}</div>

            <div className="label">Email:</div>
            <div className="value">{user.email}</div>

            <div className="label">Birth Date and Age:</div>
            <div className="value">{user.birthDate} ({user.age})</div>

            <div className="label">Register Date:</div>
            <div className="value">{user.registerDate}</div>

            <div className="label">Phone#:</div>
            <div className="value">{user.phone}</div>

            <div className="label">Cell#:</div>
            <div className="value">{user.cell}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;