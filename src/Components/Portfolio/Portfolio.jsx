import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import cafe from "../../img/cafe.png"
import estate from "../../img/estate.png"
import expense from "../../img/exp.png"
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio container">
      {/* heading  */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider  */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={cafe} alt="" />
          <span style={{ color: darkMode ? "white" : "" }}>Cafe Clone</span>
          <button type="button" className="button p-button">
            GitHub
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={expense} alt="" />
          <span style={{ color: darkMode ? "white" : "" }}>
            Expense Tracker
          </span>
          <button type="button" className="button p-button">
            GitHub
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={estate} alt="" />
          <span style={{ color: darkMode ? "white" : "" }}>Estate Clone</span>
          <button type="button" className="button p-button">
            GitHub
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio
