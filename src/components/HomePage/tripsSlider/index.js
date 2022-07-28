import style from "./style.module.css";

import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "800px",
  // color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  fontSize: "100px",
  marginBottom: "0px",
  // backgroundColor: "white",
  // background: "#364d79",
};

export function TripSlider() {
  return (
    <div className={style.sliderComp}>
      <Carousel
        autoplay
        // style={{ height: 100 }}
        // width={400}
      >
        <div>
          <h3 style={contentStyle} className={style.img1}>
            NEW YORK
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className={style.img2}>
            MARRAKESH
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className={style.img3}>
            ROME
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className={style.img4}>
            BRUSSELS
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className={style.img5}>
            CALIFORNIA
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className={style.img6}>
            HAITI
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
