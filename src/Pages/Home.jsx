import "./global_page.css";
import "./Home.css";
import header_img from "../assets/home-header.jpg";
import man_golden_hour from "../assets/man-golden-hour.jpg";
import couple_walking from "../assets/couple_in_field.jpg";
import grandpa_grandson from "../assets/grandpa-grandson.jpg";
import holding_hands_2 from "../assets/holding-hands-2.jpg";
import couple_loungeroom from "../assets/couple_loungeroom.jpg";
import two_people_laughing from "../assets/two-people-laughing.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="header">
        <img
          className="header-img"
          src={header_img}
          alt="Two people sitting viewing the ocean"
        ></img>

        <div class="header-overlay">
          <h1>
            Enjoy the journey - <br></br> we've got your back
          </h1>
          <h4>Freedom with peace of mind.</h4>
          <NavLink to="/products" className="btn-transparent">
            Learn More
          </NavLink>
        </div>
      </div>
      <div className="product-features">
        <div className="feature-1">
          <div className="feature-img">
            <img src={man_golden_hour} alt="Man at golden hour"></img>
          </div>
          <div className="feature-text">
            <h3>Product Feature 1</h3>
            <p>
              This is where we will list a feature that we love about the
              product. Catch the user's eye.
            </p>
          </div>
        </div>
        <div className="feature-2">
          <div className="feature-img">
            <img
              src={couple_walking}
              alt="Couple walking in garden"
              id="feature-img-2"
            ></img>
          </div>
          <div className="feature-text">
            <h3>Product Feature 2</h3>
            <p>This is where we will list another great product feature.</p>
          </div>
        </div>
        <div className="feature-3">
          <div className="feature-img">
            <img
              src={grandpa_grandson}
              alt="Couple walking in garden"
              id="feature-img-3"
            ></img>
          </div>
          <div className="feature-text">
            <h3>Product Feature 3</h3>
            <p>
              Another great feature - ready to be shared. We will have great
              photos of the product in action too.
            </p>
          </div>
        </div>
      </div>
      <div className="why-buy">
        <div className="why-jumbotron">
          <div className="why-img">
            <img src={holding_hands_2} alt="two hands holding"></img>
          </div>
          <div className="why-text">
            <h2>Why buy this product?</h2>
            <p>
              Okay, salesman! <br></br>
              <br></br>
              This is where you're going to do your best to persuade the
              customer. Why do they need this product?
              <br></br>
              <br></br>
              What does it bring to their life?
              <br></br>
              <br></br>
              Tell them how this product will change their life, and do it
              quickly because we are running out of room. Bite sized, but
              powerful.
              <br></br>
              <br></br>
              If you've done well, they can purchase right here.
            </p>
            <div class="why-buttons">
              <NavLink to="/" className="btn-trans-black">
                Buy Now
              </NavLink>
              <NavLink to="/contact" className="btn-trans-black">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="product-price">
        <div className="product-details">
          <div className="inner-details">
            <h1>Product Name</h1>
            <h3>Portable alarm</h3>
            <h1>$555 + tax</h1>
            <p>
              Ouch, that price hurts. <br></br>
              Better give them even more reasons to <br></br>
              purchase listed here.
              <br></br>
              And a few more reasons for good <br></br>
              measure.
            </p>
            <p className="soft-p">$ Total Price with any fees</p>
            <div class="product-buttons">
              <NavLink to="/" className="btn-red">
                Buy Now
              </NavLink>
              <NavLink to="/contact" className="btn-blue">
                Questions? Talk to us
              </NavLink>
            </div>
          </div>
        </div>
        <div className="product-image">
          <img
            src={couple_loungeroom}
            alt="couple in loungeroom on phone"
          ></img>
        </div>
      </div>
      <div className="our-story">
        <div className="story-image">
          <img src={two_people_laughing} alt="two people laughing"></img>
        </div>
        <div className="story-details">
          <div className="inner-story">
            <h1>Our Story</h1>
            <p>
              If the customer made it this far, they need some more convincing.
              Let's go a step further. <br></br>
              <br></br>
              Why should they buy this product from YOU, specifically? <br></br>
              <br></br>
              They want to feel that you care. They want to know your story and
              why they should choose you over the competitors.<br></br>
              <br></br>
              Get personal and show them why you are the better choice. Why do
              you do what you do? How do you take care of your clients? What
              makes you different?
            </p>
            <div class="why-buttons">
              <NavLink to="/about" className="btn-trans-black">
                About Us
              </NavLink>
              <NavLink to="/testimonials" className="btn-trans-black">
                Read the reviews
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
