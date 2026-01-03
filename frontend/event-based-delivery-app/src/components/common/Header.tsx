import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and hook
import { FaSearch, FaUser, FaShoppingCart, FaBirthdayCake, FaBox } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="header-logo">
        <Link to="/" className="logo-link"> {/* Use Link for client-side routing */}
          <FaBirthdayCake className="logo-icon" />
          
          <div className="brand-container">
            <h1>EventKart</h1>
            <span className="tagline">Events Done Right.</span>
          </div>
        </Link>
      </div>
      
      <div className="search-bar">
        <FaSearch className="text-secondary" />
        <input type="text" placeholder="Search events or products..." />
      </div>

      <div className="header-actions">
        {/* Updated Login Button to Navigate */}
        <button className="icon-btn" onClick={() => navigate('/login')}>
          <FaUser />
          <span className="text-small">Login</span>
        </button>

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