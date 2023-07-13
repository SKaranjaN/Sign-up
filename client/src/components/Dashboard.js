import React from 'react';
import './Dashboard.css';

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <h1>Karibu, you made it, you are now logged in</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;