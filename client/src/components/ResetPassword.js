import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
  const { id } = useParams(); 
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user = {
      email,
      new_password: newPassword,
    };

    try {
      const response = await fetch(`http://127.0.0.1:5000/users/${id}`, { // Use the retrieved user ID in the request URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        window.location.href = '/login';
      } else {
        console.error('Password reset request failed.');
      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Reset Password</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <br />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button type="submit">Change Password</button>
          <br />
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;