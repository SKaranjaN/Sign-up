import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        window.location.href = '/login';
      } else if (response.status === 409) {
        setError('Email already exists');
      } else {
        setError('Email already exists');
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Create an Account</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>First name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <br />
          <br />
          <label>Last name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <br />
          <br />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <br />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Sign Up</button>
          <br />
          <a href="/login">Login</a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;