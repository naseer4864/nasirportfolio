import { Link, Outlet } from "react-router-dom";
import { Fragment, useState } from "react";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
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
          <h2>NaseerCode</h2>
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

        <div className="firemail">
          <a href="mailto:naseernoor4864@gmail.com">Fire Me An Email</a>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
