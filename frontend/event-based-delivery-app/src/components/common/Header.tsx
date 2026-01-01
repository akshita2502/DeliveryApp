import React from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBirthdayCake, FaBox } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <a href="/" className="logo-link">
          <FaBirthdayCake className="logo-icon" />
          
          <div className="brand-container">
            <h1>EventKart</h1>
            <span className="tagline">Events Done Right.</span>
          </div>
        </a>
      </div>
      
      <div className="search-bar">
        <FaSearch className="text-secondary" />
        <input type="text" placeholder="Search events or products..." />
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <FaUser />
          <span className="text-small">Login</span>
        </button>

        {/* New Orders & Returns Button */}
        <button className="icon-btn">
          <FaBox />
          <span className="text-small">Orders & Returns</span>
        </button>

        <button className="icon-btn">
          <FaShoppingCart />
          <span className="text-small">Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;