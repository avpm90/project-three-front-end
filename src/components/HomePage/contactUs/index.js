import style from "./style.module.css";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";

// import { Card } from "antd";
import React from "react";

export function ContactUs() {
  return (
    // colocar o ID AQUI
    <div className={style.contactContainer} id="contact">
      <div className={style.contactH1}>
        <h1>Contact Us</h1>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.cardImg}>img here</div>
          <div className={style.cardContent}>
            <h2>Tulio Minini</h2>
            <p>
              aaaaaaaaaaaaaaaaaaaaaaaa aaaa aaaasaaaaaaaaaaaa aaaaaaaaaaaaaaaa
              aaaaaaaaaa aaaa aaa aaaaa aaa aaaa aaaaa a aa a aaaaa as a aaaa
              aaaaa a a a aaa aaaa aaaaaaa aaaaa aaaa
            </p>
            <div className={style.icons}>
              <div>
                <LinkedinFilled style={{ fontSize: 40 }} />
              </div>
              <div>
                <GithubFilled style={{ fontSize: 40 }} />
              </div>
            </div>
          </div>
          <div className={style.cardImg}>img here</div>
          <div className={style.cardContent}>
            <h2>Tulio Minini</h2>
            <p>
              aaaaaaaaaaaaaaaaaaaaaaaa aaaa aaaasaaaaaaaaaaaa aaaaaaaaaaaaaaaa
              aaaaaaaaaa aaaa aaa aaaaa aaa aaaa aaaaa a aa a aaaaa as a aaaa
              aaaaa a a a aaa aaaa aaaaaaa aaaaa aaaa
            </p>
            <div className={style.icons}>
              <div>
                <LinkedinFilled style={{ fontSize: 40 }} />
              </div>
              <div>
                <GithubFilled style={{ fontSize: 40 }} />
              </div>
            </div>
          </div>
          <div className={style.cardImg}>img here</div>
          <div className={style.cardContent}>
            <h2>Tulio Minini</h2>
            <p>
              aaaaaaaaaaaaaaaaaaaaaaaa aaaa aaaasaaaaaaaaaaaa aaaaaaaaaaaaaaaa
              aaaaaaaaaa aaaa aaa aaaaa aaa aaaa aaaaa a aa a aaaaa as a aaaa
              aaaaa a a a aaa aaaa aaaaaaa aaaaa aaaa
            </p>
            <div className={style.icons}>
              <div>
                <LinkedinFilled style={{ fontSize: 40 }} />
              </div>
              <div>
                <GithubFilled style={{ fontSize: 40 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
