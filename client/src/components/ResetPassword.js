import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Reset Password</h1>
        <label>Email</label>
        <input type="email" />
        <br />
        <br />
        <label>New Password</label>
        <input type="password" />
        <br />
        <label>Confirm Password</label>
        <input type="password" />
        <br />
        <button>Change Password</button>
        <br />
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default ResetPassword;