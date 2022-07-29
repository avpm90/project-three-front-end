import style from "./style.module.css";
import Envelope2 from "../../assets/images/envelope2.jpg";
import Envelope3 from "../../assets/images/envelope3.jpg";

import React from "react";

export function Community() {
  return (
    <div className={style.communityContainer}>
      <div className={style.communityCard}>
        <div>
          <img src={Envelope2} alt="envelop" className={style.Img2}/>
        </div>
        <div>
          <img src={Envelope3} alt="envelop" className={style.Img3}/>
        </div>
      </div>
    </div>
  );
}
