import React from 'react';

function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Karibu, you made it, you are now logged in</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;