// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Login.css';

function Login() {
  const [loginInfo, setLoginInfo] = useState({ identifier: '', password: '' });
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetIdentifier, setResetIdentifier] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', loginInfo);
  };

  const handleForgotPassword = () => {
    console.log('Password reset for:', resetIdentifier);
    setIsForgotPassword(false);
    setResetIdentifier('');
  };

  
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Sample logo icon
          alt="Hostel Logo"
          className="login-logo"
        />
        <h2>{isForgotPassword ? 'Reset Password' : 'Login'}</h2>
        {!isForgotPassword ? (
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                name="identifier"
                value={loginInfo.identifier}
                onChange={handleChange}
                placeholder="Enter email "
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="forgot-password-link">
              <button type="button" onClick={() => setIsForgotPassword(true)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png"
                  alt="Forgot Password Icon"
                  className="icon"
                />{' '}
                Forgot Password?
              </button>
            </p>
          </form>
        ) : (
          <div>
            <div className="input-group">
              <label>Email for Reset:</label>
              <input
                type="text"
                value={resetIdentifier}
                onChange={(e) => setResetIdentifier(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <button onClick={handleForgotPassword} className="reset-button">Reset Password</button>
            <p className="back-to-login-link">
              <button type="button" onClick={() => setIsForgotPassword(false)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
                  alt="Back Icon"
                  className="icon"
                />{' '}
                Back to Login
              </button>
            </p>
          </div>
        )}
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>

        
      </div>
    </div>
  );
}

export default Login;
