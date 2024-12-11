// Header.js
import React from 'react';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="headerSection">
      <div className="logo">
        <h2>Shopping Mall</h2>
      </div>

      <nav className="navLinks">
        <ul>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Children</a></li>
          <li><a href="#">Beauty</a></li>
        </ul>
      </nav>

      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="searchButton"><FaSearch /></button>
      </div>

      <div className="userActions">
        <div className="signin">
          <FaUser className="icon" /> <span>Sign In</span>
        </div>
        <div className="cart">
          <FaShoppingCart className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;