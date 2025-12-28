import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p className="text-secondary text-small">
            We simplify your celebrations. From corporate galas to intimate birthdays, 
            EventKart provides sorted packages and custom products for every occasion.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul className="footer-links text-small text-secondary">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Contact</h2>
          <ul className="footer-links text-small text-secondary">
            <li>123 Celebration Ave, Tech City</li>
            <li>support@eventkart.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="copyright text-small text-secondary">
        &copy; {new Date().getFullYear()} EventKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;