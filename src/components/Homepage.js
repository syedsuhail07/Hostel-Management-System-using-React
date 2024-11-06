// src/components/Homepage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  // Add the CSS for styling

function Homepage() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="homepage-container">
      {/* Left Navigation Bar */}
      <div className="sidebar">
        <div className="logo">
          <h3>Hostel</h3>
        </div>
        <ul className="nav-links">
          <li><Link to="#">Room Booking</Link></li>
          <li><Link to="#">Outpass</Link></li>
          <li><Link to="#"></Link></li>
          <li><Link to="#"></Link></li>
          <li className="dropdown">
            <button onClick={toggleDropdown}>More</button>
            {dropdown && (
              <ul className="dropdown-menu">
                <li><Link to="#">Settings</Link></li>
                <li><Link to="#">Logout</Link></li>
              </ul>
            )}
          </li>
        </ul>
        <div className="profile">
          <div className="profile-icon">
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" />
          </div>
          <p>John Doe</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the Hostel Management System</h1>
        <p>Explore the different features from the sidebar.</p>
      </div>
    </div>
  );
}

export default Homepage;
