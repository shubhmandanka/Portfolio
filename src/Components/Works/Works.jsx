import React from 'react'
import "./Works.css"
import Resume from "./Resume_Shubham.pdf"
import Facebook from "../../img/Facebook.png"
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";


const Works = () => {
  const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works container py-0 py-md-5 mt-5">
      <div className="row">
        <div className="studies col-md-6 d-flex flex-column position-relative text-center text-md-start align-items-center">
          <span style={{ color: darkMode ? "white" : "" }}>Connect</span>
          <span>With Me</span>
          <span></span>
          <a href={Resume} download>
            <button className="button mt-4 s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur"
            style={{ background: "var(--blueCard)" }}
          ></div>
        </div>

        {/* right side  */}

        <div className="w-right col-md-6 mt-4 mt-md-0">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-maincircle"
          >
            <div className="w-seccircle">
              <img src={Facebook} height="98px" width="96px" alt="" />
            </div>
            <div className="w-seccircle">
              <img
                src={github}
                className=""
                height="98px"
                width="96px"
                alt=""
              />
            </div>
            <div className="w-seccircle">
              <img
                src={instagram}
                className=""
                height="120px"
                width="178px"
                alt=""
              />
            </div>
            <div className="w-seccircle">
              <img
                src={linkedin}
                className=""
                height="75px"
                width="70px"
                alt=""
              />
            </div>
          </motion.div>
          {/* background circle*/}
          <div className="w-backcircle yellowCircle"></div>
          <div className="w-backcircle blueCircle"></div>
        </div>
      </div>
    </div>
  );
}

export default Works
