import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(data.token); 
        navigate('/dashboard');
      } else if (response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('Error logging in');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Karibu, Login to your account</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit">Login</button>
          <br />
          <br />
          <Link to="/sign-up">Sign up</Link>
          <br />
          <Link to="/forgot-password">Forgot Password</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;