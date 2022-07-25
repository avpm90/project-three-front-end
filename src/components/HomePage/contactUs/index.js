import style from "./style.module.css";

import { Card } from "antd";
import React from "react";

export function ContactUs() {
  return (
    // colocar o ID AQUI
    <div className={style.contactComp}> 
      <div>
        <h2>Contact Us</h2>
      </div>
      <div className={style.cards}>
        <div>
          <Card
            title=""
            bordered={true}
            style={{ height: 200, width: 200 }}
            className={style.card}
          >
            <p>CONTACT INFO</p>
          </Card>
        </div>
        <div>
          <Card
            title=""
            bordered={true}
            style={{ height: 200, width: 200 }}
            className={style.card}
          >
            <p>GOOGLE MAPS</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
