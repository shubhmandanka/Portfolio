import React from 'react'
import './Education.css'
import heartEmoji from '../../img/heartemoji.png'
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from '../Card/Card';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const transition = { duration: 2, type: "spring" };
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
    <div className="education container pt-5 my-5">
      <div className="row">
        {/* left side */}
        <div className="studies col-lg-6 d-flex flex-column position-relative text-center text-md-start align-items-center align-items-lg-start">
          <span style={{ color: darkMode ? "white" : "" }}>My Study</span>
          <span>Background</span>
          <span></span>
          <button className="button mt-4 s-button">Know More</button>
          <div
            className="blur s-blur"
            style={{ background: "var(--blueCard)" }}
          ></div>
        </div>

        {/* right side  */}
        <div className="cards col-lg-6">
          <motion.div
            whileInView={{ left: "9rem" }}
            initial={{ left: "24rem" }}
            transition={transition}
            style={{ left: "9rem" }}
          >
            <Card
              emoji={glasses}
              heading={"Silver Oak University"}
              detail={"Bachelor of Technology in Information Technology"}
            />
          </motion.div>

          {/* second card  */}
          <motion.div
            whileInView={{ left: "-7rem" }}
            initial={{ left: "-14rem" }}
            transition={transition}
            style={{ left: "-7rem", top: "12rem" }}
          >
            <Card
              emoji={heartEmoji}
              heading={"Government PolyTechnic Ahmedabad"}
              detail={"Diploma in Information Technology"}
            />
          </motion.div>

          {/* third card  */}
          <motion.div
            whileInView={{ left: "9rem" }}
            initial={{ left: "24rem" }}
            transition={transition}
            style={{ left: "9rem", top: "19rem" }}
          >
            <Card
              emoji={humble}
              heading={"Airport School Ahmedabad"}
              detail={"SSC Passed Out"}
            />
          </motion.div>

          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
 
export default Education
