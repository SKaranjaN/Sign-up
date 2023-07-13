import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Create an Account</h1>
        <form>
          <label>First name</label>
          <input type="text" />
          <br />
          <br />
          <label>Last name</label>
          <input type="text" />
          <br />
          <br />
          <label>Email</label>
          <input type="email" />
          <br />
          <br />
          <label>Password</label>
          <input type="password" />
          <br />
          <br />
          <label>Confirm Password</label>
          <input type="password" />
          <br />
          <br />
          <button>Sign Up</button>
          <br />
          <a href="/login">Login</a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;