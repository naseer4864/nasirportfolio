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
      <div className="app" data-aos="zoom-in">
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
            <a href="https://github.com/naseer4864">
              <img
                src="https://i.ibb.co/QnD3VkH/Git-Hub-Mark.png"
                alt=""
                className="git"
              />
            </a>
            <a href="https://www.linkedin.com/in/nasirudeen-nurudeen-44a702255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoqhK0QLTSHyXv5ZGehahXQ%3D%3D">
              <img
                src="https://i.ibb.co/b72FPPN/linkedin-icon-logo-png-transparent.png"
                alt=""
                className="linkedin"
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
