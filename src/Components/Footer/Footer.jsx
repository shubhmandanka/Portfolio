import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="foot">
      <img src={Wave} className="w-100" alt="" />
      <div className="f-content d-flex align-items-center justify-content-center flex-column w-100">
        <span>SHUBHAM MANDANKA</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
          <Twitter color="white" size="3rem" />
        </div>

        <small>© Copyright 2023 SHUBHAM MANDANKA.</small>
      </div>
    </div>
  );
};

export default Footer;
