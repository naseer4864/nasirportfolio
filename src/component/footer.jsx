import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const Footer = () => {
  const navigate= useNavigate();
  useEffect(() => {
    Aos.init({duration:1000})
  },[]);
  const handleNav = () => {
    navigate("/contact")
  }
  return (
    <div className="footer-container">
    <h2 data-aos="flip-up">Intrested in working with me ?</h2>
    <span data-aos="zoom-out">Do you have a project and would love to bring it to live?</span>
    <button onClick={handleNav}>Let's talk</button>
      <div className="footer-app" data-aos="zoom-in">
            <a href=" https://wa.me/2347036676508">
              <img
                src="https://i.ibb.co/YfyN3V8/whatsapp.png"
                alt=""
                className="whats"
                />
            </a>
            <a href="https://www.facebook.com/nassopeyemi">
              <img
                src="https://i.ibb.co/M8Hyg7n/facebook.png"
                alt=""
                className="face"
                />
            </a>
            <a href="https://www.instagram.com/naseeradeniyi/">
              <img
                src="https://i.ibb.co/rsFxRLw/instagram.png"
                alt=""
                className="insta"
                />
            </a>
            <a href="https://twitter.com/naseeroladayo/">
              <img
                src="https://i.ibb.co/5Yv5KpP/twitter.png"
                alt=""
                className="twitt"
                />
            </a>
          </div>
                <p>
                  &copy;2023 All Rights Reserved | with &hearts; NaseerCode
                </p>
    </div>
  );
};

export default Footer;
