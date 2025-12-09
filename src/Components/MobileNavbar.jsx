import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/VitalCALL logo.jpg";
import cart from "../assets/cart-icon.png";
import "./Navbar.css";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="navbar">
        <button
          className={`hamburger ${menuOpen ? "hidden" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>

        <div className="nav-image">
          <img className="logo" alt="VitalCall Logo" src={logo} />
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

      {menuOpen && (
        <div
          className="overlay-menu"
          role="dialog"
          aria-modal="true"
          tabIndex="-1"
          onClick={() => setMenuOpen(false)}
        >
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <NavLink
              to="/"
              className="link reading-font"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="link reading-font"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/testimonials"
              className="link reading-font"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/about"
              className="link reading-font"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
