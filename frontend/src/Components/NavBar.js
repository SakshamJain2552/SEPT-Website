import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item homepage">
          <a href="/">SuperPrice</a>
        </li>
        <li className="nav-item nav-right">
          <a href="/about">About</a>
        </li>
        <li className="nav-item nav-right">
          <a href="/profile">Profile</a>
        </li>
        <li className="nav-item nav-right">
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;