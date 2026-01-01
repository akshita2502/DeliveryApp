import React from 'react';
import { FaBars, FaFilter, FaStar, FaTags, FaHistory } from 'react-icons/fa';
import './SideNav.css';

interface SideNavProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, toggle }) => {
  return (
    <nav className={`sidenav-container ${isOpen ? 'sidenav-open' : 'sidenav-closed'}`}>
      {/* Wrapped FaBars in 'link-icon' to ensure it centers perfectly 
         like the other icons when the sidebar is collapsed.
      */}
      <button className="sidenav-toggle" onClick={toggle}>
        <span className="link-icon"><FaBars /></span>
        <span className="link-text">Menu</span>
      </button>

      <ul className="sidenav-links">
        <li className="sidenav-link">
          <span className="link-icon"><FaFilter /></span>
          <span className="link-text">Categories</span>
        </li>
        <li className="sidenav-link">
          <span className="link-icon"><FaStar /></span>
          <span className="link-text">Featured</span>
        </li>
        <li className="sidenav-link">
          <span className="link-icon"><FaTags /></span>
          <span className="link-text">Deals</span>
        </li>
        <li className="sidenav-link">
          <span className="link-icon"><FaHistory /></span>
          <span className="link-text">Recently Viewed</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;