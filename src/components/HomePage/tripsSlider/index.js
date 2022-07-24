import style from "./style.module.css";

import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export function TripSlider() {
  return (
    <div className={style.sliderComp}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>TRIP 1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>TRIP 2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>TRIP 3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>TRIP 4</h3>
        </div>
        <div>
          <h3 style={contentStyle}>TRIP 5</h3>
        </div>
        <div>
          <h3 style={contentStyle}>TRIP 6</h3>
        </div>
      </Carousel>
    </div>
  );
}
