import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Karibu, Login to your account</h1>
        <label>Email</label>
        <input type="email" />
        <br />
        <br />
        <label>Password</label>
        <input type="password" />
        <br />
        <button>Login</button>
        <br />
        <br />
        <Link to="/sign-up">Sign up</Link>
        <br />
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
    </div>
  );
}

export default Login;