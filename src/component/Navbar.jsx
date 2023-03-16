import { Link, Outlet } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="menu-container">
          <div className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        <Link to="/" className="logo">
          <h2 data-aos="fade">NaseerCode.</h2>
        </Link>
        </div>
        <div className={isMobile ? "mobile-links" : "nav-links"} onClick={() => setIsMobile(false)}>
          <div className="nav-link">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/About" className="link">
              About
            </Link>
            <Link to="/Portfolio" className="link">
              Portfolio
            </Link>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </div>
        </div>

        <div className="firemail" data-aos="fade">
          <a href="mailto:naseernoor4864@gmail.com">Fire Me An Email</a>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
