import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Subject from "../../img/Subject.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floating from "../FloatingDiv/Floating";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {

  const transition = {duration :2, type : "spring"}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro container mt-2 mt-md-5 pb-5">
      <div className="row">
        <div className="intro-left col-lg-6 d-flex flex-column mb-3 mb-md-0 text-center text-md-start align-items-center align-items-md-start">
          <span style={{ color: darkMode ? "white" : "" }}>Hello There!</span>
          <span>This is Shubham Mandanka</span>
          <span className="my-3">
            I am a Frontend Developer. I have Experience work in Web Designing{" "}
            <br />
            and Development.
          </span>
          <button type="button " className="button intro-button">
            Hire Me
          </button>
        </div>

        <div className="intro-right col-lg-6">
          <img src={Vector1} className="w-100" alt="" />
          <img src={Vector2} className="w-100" alt="" />
          <img src={Subject} className="" alt="" />

          <motion.div
            initial={{ top: "67%", left: "74%" }}
            whileInView={{ left: "54%" }}
            transition={transition}
            className="float-div"
          >
            <Floating image={crown} txt1="Frontend" txt2="Developer" />
          </motion.div>

          <div className="blur"></div>

          <div
            className="blur"
            style={{
              background: "#c1f5ff",
              top: "7rem",
              width: "21rem",
              height: "7rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
