import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>About Us</h4>
          <p>Eventify helps you organize and order everything for your special events.</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@eventify.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div>
          <h4>Address</h4>
          <p>Bengaluru, Karnataka, India</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <p className="copyright">
        © 2025 Eventify. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
