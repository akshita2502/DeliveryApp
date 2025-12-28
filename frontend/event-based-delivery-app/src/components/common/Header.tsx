import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Eventify</div>

      <div className="header-actions">
        <FaUser className="icon" title="Login" />
        <div className="cart-wrapper">
          <FaShoppingCart className="icon" title="Cart" />
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
