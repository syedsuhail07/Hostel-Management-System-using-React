// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  // Function to handle login
  const handleLogin = (credentials) => {
    const { email, password } = credentials;
    // Simulate a login check (Replace with API call)
    if (email === 'test@example.com' && password === 'password') {
      setIsAuthenticated(true);  // Set auth status to true
      return true;
    }
    return false;
  };

  // Function to handle signup (you could add more signup logic here)
  const handleSignup = (credentials) => {
    // eslint-disable-next-line no-unused-vars
    const { email, password, confirmPassword } = credentials;
    if (password === confirmPassword) {
      // Simulate signup success
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />

          {/* Protected Route for Homepage */}
          <Route path="/home" element={isAuthenticated ? <Homepage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
