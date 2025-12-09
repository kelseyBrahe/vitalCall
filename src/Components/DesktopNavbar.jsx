import { NavLink } from "react-router-dom";
import logo from "../assets/VitalCALL logo.jpg";
import cart from "../assets/cart-icon.png";
import "./Navbar.css";

export default function DesktopNavbar() {
  return (
    <div className="navbar">
      <div className="nav-image">
        <NavLink to="/">
          <img className="logo" alt="VitalCall Logo" src={logo} />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="link reading-font">
          Home
        </NavLink>
        <NavLink to="/products" className="link reading-font">
          Products
        </NavLink>
        <NavLink to="/testimonials" className="link reading-font">
          Testimonials
        </NavLink>
        <NavLink to="/about" className="link reading-font">
          About Us
        </NavLink>
      </div>
      <div className="end-nav-links">
        <NavLink to="/cart" className="link">
          <img src={cart} alt="cart" className="cart"></img>
        </NavLink>
        <NavLink to="/contact" className="contact reading-font">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
