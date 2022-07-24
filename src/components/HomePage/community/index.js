import style from "./style.module.css";

import { Card } from "antd";
import React from "react";

export function Community() {
  return (
    <div className={style.communityComp}>
      <div>
        <h2>COMMUNITY</h2>
      </div>
      <div className={style.cards}>
        <div>
          <Card
            title=""
            bordered={true}
            style={{ height: 300, width: 250 }}
            className={style.card}
          >
            <a
              href="https://www.w3schools.com"
              rel="noreferrer"
              target="_blank"
            >
              COMMUNITY ONE
            </a>
          </Card>
        </div>
        <div>
          <Card
            title=""
            bordered={true}
            style={{ height: 300, width: 250 }}
            className={style.card}
          >
            <a
              href="https://www.w3schools.com"
              rel="noreferrer"
              target="_blank"
            >
              COMMUNITY TWO
            </a>
          </Card>
        </div>
        <div>
          <Card
            title=""
            bordered={true}
            style={{ height: 300, width: 250 }}
            className={style.card}
          >
            <a
              href="https://www.w3schools.com"
              rel="noreferrer"
              target="_blank"
            >
              COMMUNITY THREE
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
