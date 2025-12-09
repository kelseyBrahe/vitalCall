import "./Footer.css";
import logo from "../assets/VitalCALL logo.jpg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-col">
          <div className="inner-left">
            <img src={logo} className="logo" alt="VitalCALL logo"></img>
            <NavLink to="/" className="link soft-font">
              Home
            </NavLink>
            <NavLink to="/products" className="link soft-font">
              Products
            </NavLink>
            <NavLink to="/testimonials" className="link soft-font">
              Testimonials
            </NavLink>
            <NavLink to="/about" className="link soft-font">
              About Us
            </NavLink>
            <NavLink to="/contact" className="link soft-font">
              Contact Us
            </NavLink>

            <p className="contact-info first">1300 848 252</p>
            <p className="contact-info">customer.service@vitalcall.com.au</p>
          </div>
        </div>
        <div className="right-col">
          <div className="inner-right">
            <h2 className="reading-font contact-header">Get in touch</h2>
            <form className="contact-form" action="#" method="post">
              <div className="form-group">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder=" "
                  required
                ></input>
                <label for="full-name" className="soft-font">
                  Full Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                ></input>
                <label for="email" className="soft-font">
                  Email
                </label>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                ></textarea>
                <label for="message" className="soft-font">
                  Message
                </label>
              </div>
              <button className="submit soft-font" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p className="rights soft-font">
          @ 2025 VitalCALL. All rights reserved.
        </p>
      </div>
    </>
  );
}
