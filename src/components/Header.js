import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">My LMS</div>
      <nav className="nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/coursepage">Courses</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 