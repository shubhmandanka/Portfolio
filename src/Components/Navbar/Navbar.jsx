import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div
          className="navbar-brand fw-bold"
          style={{ color: darkMode ? "white" : "" }}
          href="#"
        >
          Shubham
        </div>
        <span>
          <Toggle />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ background: darkMode ? "white" : "" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link spy={true} to="Navbar" smooth={true}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Home
                </a>
              </li>
            </Link>
            <Link spy={true} to="education" smooth={true}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Education
                </a>
              </li>
            </Link>
            <Link spy={true} to="experience" smooth={true}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Experience
                </a>
              </li>
            </Link>
            <Link spy={true} to="works" smooth={true}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Social
                </a>
              </li>
            </Link>
            <Link spy={true} to="portfolio" smooth={true}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Portfolio
                </a>
              </li>
            </Link>
          </ul>
          <button className="button d-flex mx-auto mx-lg-3" type="button">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
