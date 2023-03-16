import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate= useNavigate();
  const handleNav = () => {
    navigate("/contact")
  }
  return (
    <div className="footer-container">
    <h2>Intrested in working with me ?</h2>
    <span>Do you have a project in mind and would love to bring it to live? Then let's talk.</span>
    <button onClick={handleNav}>Let's talk</button>
      <div className="footer-app">
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
