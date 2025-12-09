import "./global_page.css";
import "./Testimonials.css";
import man_watering_yard from "../assets/man_watering_yard.jpg";
import testimonials_1 from "../assets/testimonials_1.jpg";
import testimonials_2 from "../assets/testimonials_2.jpg";
import testimonials_3 from "../assets/testimonials_3.jpg";
import testimonials_4 from "../assets/testimonials_4.jpg";
import path_1 from "../assets/path-1.png";
import path_2 from "../assets/path-2.png";
import { NavLink } from "react-router-dom";

export default function Testimonials() {
  return (
    <>
      <div className="header header-testimonials">
        <div className="header-img-testimonials">
          <img src={man_watering_yard} alt="Man watering yard"></img>
        </div>
        <div className="header-overlay-testimonials">
          <h1>
            What our customers <br></br>are saying
          </h1>
          <h4>
            People like you, living life <br></br>their way.
          </h4>
        </div>
      </div>

      <hr className="hr-blue"></hr>
      <hr className="hr-red"></hr>

      <div className="testimonials testimonial-1">
        <div className="testimonial-img">
          <div className="inner-img">
            <img src={testimonials_1} alt="couple sitting on bench"></img>
          </div>
        </div>
        <div className="testimonial-text">
          <div className="inner-text">
            <h1>George & Margaret</h1>
            <h3>Perth, WA - Ages 78 & 76</h3>
            <p>
              “We still love to get out and see the world — now we do it with
              confidence. Knowing help is just a button away makes all the
              difference. We've been able to start travelling again and we are
              so grateful.”
            </p>
          </div>
        </div>
      </div>
      <div className="testimonials testimonial-2">
        <div className="testimonial-img">
          <div className="inner-img">
            <img src={testimonials_4} alt="couple sitting on bench"></img>
          </div>
        </div>
        <div className="testimonial-text">
          <div className="inner-text">
            <h1>Phillipe</h1>
            <h3>Gunnedah, NSW - Age 87</h3>
            <p>
              "When my wife passed last year I worried I would have to move out
              of my house. Thanks to this product, I have been able to continue
              living on my property out of town without worrying the kids."
            </p>
          </div>
        </div>
        <img src={path_1} alt="decorative-lines" className="path path-1"></img>
      </div>
      <div className="testimonials testimonial-3">
        <div className="testimonial-img">
          <div className="inner-img">
            <img src={testimonials_3} alt="couple sitting on bench"></img>
          </div>
        </div>
        <div className="testimonial-text">
          <div className="inner-text">
            <h1>Elaine</h1>
            <h3>Launceston, TAS - Age 72</h3>
            <p>
              “I slipped and fell in the kitchen last year and really struggled
              to get to the phone. Thanks to this device, that won't happen
              again. The staff were so helpful and friendly, and explained
              everything very well.”
            </p>
          </div>
        </div>
      </div>
      <div className="testimonials testimonial-4">
        <img src={path_2} alt="decorative-lines" className="path path-2"></img>
        <div className="testimonial-img">
          <div className="inner-img">
            <img src={testimonials_2} alt="couple sitting on bench"></img>
          </div>
        </div>
        <div className="testimonial-text">
          <div className="inner-text">
            <h1>Robert</h1>
            <h3>Ballarat, VIC - Age 84</h3>
            <p>
              "I live alone, but I’ve never felt safer. My daughter sleeps
              better too, knowing I can get help at the press of a button."
            </p>
          </div>
        </div>
      </div>
      <div className="more-reviews">
        <div className="more-reviews-text">
          <div className="more-reviews-inner-text">
            <h1>Want to hear more?</h1>
            <p>Head to our review page on product review.</p>
          </div>
        </div>
        <div className="more-reviews-button">
          <NavLink to="/testimonials" className="btn-transparent reviews-btn">
            More Reviews
          </NavLink>
        </div>
      </div>
    </>
  );
}
