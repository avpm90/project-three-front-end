import style from "./style.module.css";
// import { Link } from "react-router-dom";

// import { Card } from "antd";
import React from "react";

export function Community() {
  return (
    <div className={style.communityContainer}>
      <div className={style.communityCard}>
        <a href="https://sustainabletravel.org/">
          <img src="../../assets/images/hello-img.jpeg" alt="help" />
        </a>
      </div>
    </div>
  );
}
