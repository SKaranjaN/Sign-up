import React from 'react';
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
        <a href="/sign-up">Sign up</a>
        <br />
        <a href="/forgot-password">Forgot Password</a>
      </div>
    </div>
  );
}

export default Login;